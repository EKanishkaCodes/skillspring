using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Serialization;

public sealed record SkillEvidence(string Name, int Score, string Level);

public sealed class LocalAiLearningAgentCoordinator
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;

    public LocalAiLearningAgentCoordinator(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _configuration = configuration;
    }

    public bool IsConfigured => !string.IsNullOrWhiteSpace(GetSetting(
        "SKILLSPRING_OLLAMA_MODEL",
        "PATHPILOT_OLLAMA_MODEL",
        "NORTHSTAR_OLLAMA_MODEL"));

    public async Task<AgentPlan> RunAsync(AgentRequest request, CancellationToken cancellationToken)
    {
        var targetSkills = request.Skills.Select(skill => new SkillEvidence(
            skill.Name,
            Math.Clamp(skill.Score, 0, 100),
            LevelFor(skill.Score))).ToList();
        var assessment = request.Assessment;

        var analysis = await AskAsync<SkillAnalysisOutput>(
            "Skill analyst",
            "Analyze the learner's assessed skill levels against the target role requirements. Return JSON with strongSkills (array of exact requirement names), gaps (array of exact requirement names ordered from most important gap), and summary (one concise evidence-based sentence). Treat unassessed skills as gaps. Do not invent qualifications.",
            new { request.Career, TargetSkills = targetSkills, Assessment = assessment },
            cancellationToken);
        analysis = ValidateAnalysis(analysis, targetSkills);

        var match = await AskAsync<CareerMatchOutput>(
            "Career matcher",
            "Compare the assessed current skill scores to the selected career requirements. Return JSON with match (integer 0-100, the rounded average of the provided scores) and summary (one concise sentence naming the number of strong requirements). Do not assume missing skills.",
            new { request.Career, TargetSkills = targetSkills, Analysis = analysis },
            cancellationToken);
        match = match with
        {
            Match = Math.Clamp(match.Match, 0, 100),
            Summary = RequireText(match.Summary, "Career matcher"),
        };

        var resourcePlan = await AskAsync<ResourcePlanOutput>(
            "Resource planner",
            "Choose the next skill and order ONLY the supplied learning resources for this learner. Return JSON with prioritySkill (an exact target requirement name), resourceOrder (resource titles from the supplied catalog, most useful first), and summary (one sentence explaining the choice). For an assessment below 67%, prioritize focused practice for that assessed skill. For a strong assessment, advance to the next unmet prerequisite in the path. Do not invent resource titles.",
            new
            {
                request.Career,
                TargetSkills = targetSkills,
                Analysis = analysis,
                Match = match,
                Assessment = assessment,
                LearningPath = request.Path,
                AvailableResources = request.Resources,
                CompletedActivities = request.Completed,
            },
            cancellationToken);
        resourcePlan = ValidateResourcePlan(resourcePlan, request);

        var completedSteps = request.Path.Count(step =>
            step.Status == "complete" || request.Completed.Contains($"{request.Career}:{step.Title}"));
        var completedActivities = request.Completed.Count(item =>
            item.StartsWith($"{request.Career}:", StringComparison.Ordinal)
            || item.StartsWith($"resource:{request.Career}:", StringComparison.Ordinal));
        var progress = await AskAsync<ProgressOutput>(
            "Progress evaluator",
            "Evaluate the assessment trend and the provided verified activity counts. Return JSON with summary (one brief evidence-based progress sentence) and nextAction (one concise action). Do not change the supplied counts, assessment score, or claim unrecorded progress.",
            new
            {
                request.Career,
                TargetSkills = targetSkills,
                Assessment = assessment,
                CompletedSteps = completedSteps,
                TotalSteps = request.Path.Count,
                CompletedActivities = completedActivities,
            },
            cancellationToken);
        progress = progress with
        {
            Summary = RequireText(progress.Summary, "Progress evaluator"),
            NextAction = RequireText(progress.NextAction, "Progress evaluator"),
        };

        var needsSupport = assessment is { Score: < 67 };
        var mentor = await AskAsync<MentorOutput>(
            "AI mentor",
            "Give the learner empathetic, specific, concise career-learning guidance. Use only the supplied strengths, gaps, progress and resource-plan evidence. If the assessment is below 67%, recommend focused practice before advancing. Otherwise guide them to the selected next skill. Return JSON with guidance (two short sentences maximum).",
            new
            {
                request.Career,
                TargetSkills = targetSkills,
                Analysis = analysis,
                Match = match,
                PrioritySkill = resourcePlan.PrioritySkill,
                Assessment = assessment,
                Progress = new { completedSteps, totalSteps = request.Path.Count, progress.Summary, progress.NextAction },
            },
            cancellationToken);
        var guidance = RequireText(mentor.Guidance, "AI mentor");

        return new AgentPlan(
            request.Career,
            match.Match,
            resourcePlan.PrioritySkill,
            needsSupport,
            guidance,
            completedSteps,
            request.Path.Count,
            resourcePlan.Resources,
            [
                new AgentActivity("Skill analyst", analysis.Summary),
                new AgentActivity("Career matcher", match.Summary),
                new AgentActivity("Resource planner", resourcePlan.Summary),
                new AgentActivity("Progress evaluator", $"{progress.Summary} {progress.NextAction}".Trim()),
                new AgentActivity("AI mentor", guidance),
            ],
            "local-ai");
    }

    private async Task<T> AskAsync<T>(
        string agentName,
        string instructions,
        object context,
        CancellationToken cancellationToken)
    {
        var model = GetSetting("SKILLSPRING_OLLAMA_MODEL", "PATHPILOT_OLLAMA_MODEL", "NORTHSTAR_OLLAMA_MODEL")?.Trim();
        if (string.IsNullOrWhiteSpace(model))
            throw new InvalidOperationException("Set SKILLSPRING_OLLAMA_MODEL to enable local AI agents.");

        var baseAddress = GetSetting("SKILLSPRING_OLLAMA_URL", "PATHPILOT_OLLAMA_URL", "NORTHSTAR_OLLAMA_URL")?.Trim();
        if (string.IsNullOrWhiteSpace(baseAddress))
            baseAddress = "http://127.0.0.1:11434";

        if (!Uri.TryCreate(baseAddress, UriKind.Absolute, out var baseUri)
            || (baseUri.Scheme != Uri.UriSchemeHttp && baseUri.Scheme != Uri.UriSchemeHttps)
            || !baseUri.IsLoopback
            || !string.IsNullOrEmpty(baseUri.UserInfo))
        {
            throw new InvalidOperationException(
                "SKILLSPRING_OLLAMA_URL must be an HTTP(S) loopback address so learner data stays on this device.");
        }

        var endpoint = new Uri(baseUri, "/api/chat");
        using var response = await _httpClient.PostAsJsonAsync(endpoint, new
        {
            model,
            stream = false,
            format = "json",
            messages = new object[]
            {
                new
                {
                    role = "system",
                    content = $"You are the specialized {agentName} in SkillSpring, a career-learning team. {instructions} Output only valid JSON.",
                },
                new
                {
                    role = "user",
                    content = JsonSerializer.Serialize(context, JsonOptions),
                },
            },
        }, JsonOptions, cancellationToken);

        if (!response.IsSuccessStatusCode)
        {
            var detail = await response.Content.ReadAsStringAsync(cancellationToken);
            throw new HttpRequestException(
                $"Local model failed for {agentName} ({(int)response.StatusCode}): {Truncate(detail, 500)}");
        }

        var envelope = await response.Content.ReadFromJsonAsync<OllamaEnvelope>(JsonOptions, cancellationToken)
            ?? throw new InvalidDataException($"The local model returned an empty response for {agentName}.");
        var content = envelope.Message?.Content;
        if (string.IsNullOrWhiteSpace(content))
            throw new InvalidDataException($"The local model returned no content for {agentName}.");

        try
        {
            return JsonSerializer.Deserialize<T>(content, JsonOptions)
                ?? throw new InvalidDataException($"The local model returned an empty JSON result for {agentName}.");
        }
        catch (JsonException exception)
        {
            throw new InvalidDataException($"The local model returned invalid JSON for {agentName}.", exception);
        }
    }

    private static SkillAnalysisOutput ValidateAnalysis(
        SkillAnalysisOutput analysis,
        IReadOnlyCollection<SkillEvidence> targetSkills)
    {
        var allowed = targetSkills.Select(skill => skill.Name).ToHashSet(StringComparer.OrdinalIgnoreCase);
        var strong = (analysis.StrongSkills ?? []).Where(allowed.Contains).Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
        var gaps = (analysis.Gaps ?? []).Where(allowed.Contains).Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
        return analysis with
        {
            StrongSkills = strong,
            Gaps = gaps,
            Summary = RequireText(analysis.Summary, "Skill analyst"),
        };
    }

    private static ResourcePlanOutput ValidateResourcePlan(ResourcePlanOutput plan, AgentRequest request)
    {
        var assessmentNeedsPractice = request.Assessment is { Score: < 67 };
        var nextPathSkill = request.Assessment is { Score: >= 67 } assessment
            ? request.Path.Skip(Math.Max(0, request.Path.FindIndex(step => step.Skill == assessment.Skill) + 1))
                .FirstOrDefault(step => !request.Completed.Contains($"{request.Career}:{step.Title}"))?.Skill
            : null;
        var priority = assessmentNeedsPractice
            ? request.Assessment!.Skill
            : request.Skills.FirstOrDefault(skill => string.Equals(skill.Name, nextPathSkill, StringComparison.OrdinalIgnoreCase))?.Name
                ?? request.Skills.FirstOrDefault(skill => string.Equals(skill.Name, plan.PrioritySkill, StringComparison.OrdinalIgnoreCase))?.Name
                ?? request.Path.FirstOrDefault(step => request.Skills.Any(skill => skill.Name == step.Skill))?.Skill
                ?? request.Skills.OrderBy(skill => skill.Score).First().Name;
        var available = request.Resources.ToDictionary(resource => resource.Title, StringComparer.OrdinalIgnoreCase);
        var ordered = (plan.ResourceOrder ?? [])
            .Where(available.ContainsKey)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .Select(title => available[title])
            .ToList();
        ordered.AddRange(request.Resources.Where(resource =>
            !ordered.Any(existing => string.Equals(existing.Title, resource.Title, StringComparison.OrdinalIgnoreCase))));
        return plan with
        {
            PrioritySkill = priority,
            ResourceOrder = ordered.Select(resource => resource.Title).ToArray(),
            Summary = RequireText(plan.Summary, "Resource planner"),
            Resources = ordered,
        };
    }

    private static string LevelFor(int score) => score >= 70 ? "Strong" : score >= 45 ? "Growing" : "To develop";
    private string? GetSetting(params string[] names) =>
        names.Select(name => _configuration[name]).FirstOrDefault(value => !string.IsNullOrWhiteSpace(value));
    private static string RequireText(string? value, string agent) =>
        string.IsNullOrWhiteSpace(value)
            ? throw new InvalidDataException($"The local model returned no summary for {agent}.")
            : Truncate(value.Trim(), 500);
    private static string Truncate(string value, int maxLength) =>
        value.Length <= maxLength ? value : value[..maxLength];

    private sealed record OllamaEnvelope(OllamaMessage? Message);
    private sealed record OllamaMessage(string? Content);
    private sealed record SkillAnalysisOutput(string[] StrongSkills, string[] Gaps, string Summary);
    private sealed record CareerMatchOutput(int Match, string Summary);
    private sealed record ResourcePlanOutput(string PrioritySkill, string[] ResourceOrder, string Summary)
    {
        [JsonIgnore]
        public List<ResourceInput> Resources { get; init; } = [];
    }
    private sealed record ProgressOutput(string Summary, string NextAction);
    private sealed record MentorOutput(string Guidance);
}
