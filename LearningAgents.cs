using System.Text.Json;

public sealed record LearnerProfile(
    string Name,
    string Background,
    string[] Skills,
    string[] Certifications,
    string[] Projects);

public sealed record AssessmentResult(int Score, string Skill, int Attempts, string Date);

public sealed record LearnerState(
    string Career,
    string[] Completed,
    LearnerProfile Learner,
    Dictionary<string, Dictionary<string, int>> SkillScores,
    Dictionary<string, AssessmentResult> AssessmentResults)
{
    public static LearnerState Default => new(
        "Product Designer",
        [],
        new LearnerProfile(
            "Maya Chen",
            "Early-career designer",
            ["Visual design", "User research", "Information architecture", "Interaction design"],
            ["Google UX Design Certificate"],
            ["Community garden app redesign"]),
        new Dictionary<string, Dictionary<string, int>>(),
        new Dictionary<string, AssessmentResult>());
}

public sealed record SkillInput(string Name, int Score, string Level, string Icon);
public sealed record PathInput(string Title, string Skill, string Status);
public sealed record ResourceInput(string Type, string Title, string Description, string Duration, string Icon);
public sealed record AssessmentInput(int Score, string Skill);
public sealed record AgentRequest(
    string Career,
    List<SkillInput> Skills,
    LearnerProfile Learner,
    List<PathInput> Path,
    List<ResourceInput> Resources,
    AssessmentInput? Assessment,
    List<string> Completed);
public sealed record AgentActivity(string Name, string Detail);
public sealed record AgentPlan(
    string Career,
    int Match,
    string PrioritySkill,
    bool NeedsSupport,
    string CoachMessage,
    int CompletedSteps,
    int TotalSteps,
    List<ResourceInput> Resources,
    List<AgentActivity> Agents,
    string Mode);

public sealed class LearnerStateStore
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);
    private readonly SemaphoreSlim _lock = new(1, 1);
    private readonly string _filePath = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
        "Northstar",
        "learner-state.json");

    public async Task<LearnerState> LoadAsync(CancellationToken cancellationToken)
    {
        await _lock.WaitAsync(cancellationToken);
        try
        {
            if (!File.Exists(_filePath))
                return LearnerState.Default;

            await using var stream = File.OpenRead(_filePath);
            return await JsonSerializer.DeserializeAsync<LearnerState>(stream, JsonOptions, cancellationToken)
                ?? LearnerState.Default;
        }
        finally
        {
            _lock.Release();
        }
    }

    public async Task SaveAsync(LearnerState state, CancellationToken cancellationToken)
    {
        await _lock.WaitAsync(cancellationToken);
        try
        {
            var directory = Path.GetDirectoryName(_filePath)
                ?? throw new InvalidOperationException("The learner data directory could not be resolved.");
            Directory.CreateDirectory(directory);
            var temporaryPath = $"{_filePath}.tmp";
            await using (var stream = File.Create(temporaryPath))
            {
                await JsonSerializer.SerializeAsync(stream, state, JsonOptions, cancellationToken);
            }
            File.Move(temporaryPath, _filePath, true);
        }
        finally
        {
            _lock.Release();
        }
    }
}

public sealed class LearningAgentCoordinator
{
    private readonly LocalAiLearningAgentCoordinator _localAi;

    public LearningAgentCoordinator(LocalAiLearningAgentCoordinator localAi)
    {
        _localAi = localAi;
    }

    public static readonly string[] SupportedCareers =
        ["Product Designer", "Frontend Developer", "Full Stack Developer", "Data Analyst"];

    public AgentPlan Run(AgentRequest request)
    {
        var skillAnalysis = new SkillAnalysisAgent().Analyze(request.Skills);
        var careerMatch = new CareerMatchingAgent().Match(request.Career, request.Skills, skillAnalysis);
        var learningPlan = new LearningResourceAgent().Recommend(request);
        var progress = new ProgressEvaluationAgent().Evaluate(request);
        var coachMessage = new LearningMentorAgent().Guide(
            request.Career,
            skillAnalysis,
            learningPlan.PrioritySkill,
            request.Assessment);

        return new AgentPlan(
            request.Career,
            careerMatch.Match,
            learningPlan.PrioritySkill,
            progress.NeedsSupport,
            coachMessage,
            progress.Completed,
            progress.Total,
            learningPlan.Resources,
            [
                new AgentActivity("Skill analyst", skillAnalysis.Detail),
                new AgentActivity("Career matcher", careerMatch.Detail),
                new AgentActivity("Resource planner", learningPlan.Detail),
                new AgentActivity("Progress evaluator", progress.Detail),
                new AgentActivity("AI mentor", coachMessage),
            ],
            "rules");
    }

    public Task<AgentPlan> RunAsync(AgentRequest request, CancellationToken cancellationToken) =>
        _localAi.IsConfigured
            ? _localAi.RunAsync(request, cancellationToken)
            : Task.FromResult(Run(request));
}

internal sealed record SkillAnalysisResult(List<SkillInput> Strong, List<SkillInput> Gaps, string Detail);
internal sealed record CareerMatchResult(int Match, string Detail);
internal sealed record LearningPlanResult(string PrioritySkill, List<ResourceInput> Resources, string Detail);
internal sealed record ProgressResult(int Completed, int Total, bool NeedsSupport, string Detail);

internal sealed class SkillAnalysisAgent
{
    public SkillAnalysisResult Analyze(IEnumerable<SkillInput> skills)
    {
        var scored = skills.Select(skill => skill with { Score = Math.Clamp(skill.Score, 0, 100) }).ToList();
        var strong = scored.Where(skill => skill.Score >= 70).ToList();
        var gaps = scored.Where(skill => skill.Score < 70).OrderBy(skill => skill.Score).ToList();
        return new SkillAnalysisResult(
            strong,
            gaps,
            $"{strong.Count} strengths found; {gaps.Count} role skills need development.");
    }
}

internal sealed class CareerMatchingAgent
{
    public CareerMatchResult Match(string career, IReadOnlyCollection<SkillInput> skills, SkillAnalysisResult analysis)
    {
        var match = skills.Count == 0 ? 0 : (int)Math.Round(skills.Average(skill => Math.Clamp(skill.Score, 0, 100)));
        return new CareerMatchResult(match, $"{analysis.Strong.Count}/{skills.Count} role requirements are strong for {career}.");
    }
}

internal sealed class LearningResourceAgent
{
    public LearningPlanResult Recommend(AgentRequest request)
    {
        var lowAssessment = request.Assessment is { Score: < 67 };
        var prioritySkill = request.Assessment?.Skill;
        if (string.IsNullOrWhiteSpace(prioritySkill) || !lowAssessment)
        {
            if (request.Assessment is { Score: >= 67 })
            {
                var assessedIndex = request.Path.FindIndex(step => step.Skill == request.Assessment.Skill);
                prioritySkill = request.Path
                    .Skip(Math.Max(0, assessedIndex + 1))
                    .FirstOrDefault(step => !request.Completed.Contains($"{request.Career}:{step.Title}"))
                    ?.Skill;
            }
            prioritySkill ??= request.Path
                .FirstOrDefault(step => step.Status != "complete"
                    && !request.Completed.Contains($"{request.Career}:{step.Title}"))
                ?.Skill;
        }
        prioritySkill ??= request.Skills.OrderBy(skill => skill.Score).First().Name;

        var resources = request.Resources
            .Select((resource, index) => new
            {
                Resource = resource,
                Index = index,
                Relevant = ContainsSkill(resource, prioritySkill) ? 1 : 0,
                Practice = lowAssessment && resource.Type.Equals("PRACTICE", StringComparison.OrdinalIgnoreCase) ? 1 : 0,
            })
            .OrderByDescending(item => item.Relevant)
            .ThenByDescending(item => item.Practice)
            .ThenBy(item => item.Index)
            .Select(item => item.Resource)
            .ToList();
        var detail = lowAssessment
            ? $"More hands-on {prioritySkill} practice prioritized after a {request.Assessment!.Score}% check-in."
            : $"Learning resources sequenced for the {prioritySkill} skill gap.";
        return new LearningPlanResult(prioritySkill, resources, detail);
    }

    private static bool ContainsSkill(ResourceInput resource, string skill)
    {
        var text = $"{resource.Title} {resource.Description}";
        if (text.Contains(skill, StringComparison.OrdinalIgnoreCase))
            return true;
        return skill switch
        {
            "JavaScript" => text.Contains("javascript", StringComparison.OrdinalIgnoreCase),
            "Node.js" => text.Contains("node", StringComparison.OrdinalIgnoreCase),
            "HTML & CSS" => text.Contains("html", StringComparison.OrdinalIgnoreCase),
            _ => false,
        };
    }
}

internal sealed class ProgressEvaluationAgent
{
    public ProgressResult Evaluate(AgentRequest request)
    {
        var total = request.Path.Count;
        var completed = request.Path.Count(step =>
            step.Status == "complete" || request.Completed.Contains($"{request.Career}:{step.Title}"));
        var needsSupport = request.Assessment is { Score: < 67 };
        var activityCount = request.Completed.Count(item =>
            item.StartsWith($"{request.Career}:", StringComparison.Ordinal)
            || item.StartsWith($"resource:{request.Career}:", StringComparison.Ordinal));
        var detail = request.Assessment is { } assessment
            ? $"{assessment.Skill} assessment: {assessment.Score}%; {completed}/{total} steps and {activityCount} activities complete."
            : $"{completed}/{total} steps complete; {activityCount} activities logged; awaiting a skill check-in.";
        return new ProgressResult(completed, total, needsSupport, detail);
    }
}

internal sealed class LearningMentorAgent
{
    public string Guide(
        string career,
        SkillAnalysisResult analysis,
        string prioritySkill,
        AssessmentInput? assessment)
    {
        if (assessment is { Score: < 67 })
            return $"Your {assessment.Score}% {assessment.Skill} check-in shows where more practice will help. Strengthen {prioritySkill} with a small exercise before moving ahead.";
        var strengths = string.Join(" and ", analysis.Strong.Take(2).Select(skill => skill.Name));
        return $"{(strengths.Length > 0 ? $"Your {strengths} are a strong base. " : "")}Focus next on {prioritySkill}; it is the next step toward {career}.";
    }
}
