using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://127.0.0.1:5055");
builder.Services.ConfigureHttpJsonOptions(options =>
{
    options.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    options.SerializerOptions.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase));
});
builder.Services.AddSingleton<LearnerStateStore>();
builder.Services.AddHttpClient<LocalAiLearningAgentCoordinator>(client =>
{
    client.Timeout = TimeSpan.FromSeconds(90);
});
builder.Services.AddSingleton<LearningAgentCoordinator>();

var app = builder.Build();
var webRoot = app.Environment.ContentRootPath;

app.MapGet("/", () => Results.File(Path.Combine(webRoot, "index.html"), "text/html; charset=utf-8"));
app.MapGet("/styles.css", () => Results.File(Path.Combine(webRoot, "styles.css"), "text/css; charset=utf-8"));
app.MapGet("/app.js", () => Results.File(Path.Combine(webRoot, "app.js"), "text/javascript; charset=utf-8"));

app.MapGet("/api/health", (LocalAiLearningAgentCoordinator localAi) =>
    Results.Ok(new
    {
        status = "ok",
        service = "SkillSpring learning API",
        agentMode = localAi.IsConfigured ? "local-ai" : "rules",
        provider = localAi.IsConfigured ? "Ollama on loopback" : "Local rules preview",
    }));
app.MapGet("/api/state", async (LearnerStateStore store, CancellationToken cancellationToken) =>
    Results.Ok(await store.LoadAsync(cancellationToken)));
app.MapPut("/api/state", async (LearnerState state, LearnerStateStore store, CancellationToken cancellationToken) =>
{
    if (!LearningAgentCoordinator.SupportedCareers.Contains(state.Career))
        return Results.BadRequest(new { error = "Choose a supported career goal." });
    if (string.IsNullOrWhiteSpace(state.Learner.Name))
        return Results.BadRequest(new { error = "A learner name is required." });

    await store.SaveAsync(state, cancellationToken);
    return Results.Ok(new { saved = true });
});
app.MapPost("/api/agents/run", async (AgentRequest request, LearningAgentCoordinator coordinator, CancellationToken cancellationToken) =>
{
    if (!LearningAgentCoordinator.SupportedCareers.Contains(request.Career))
        return Results.BadRequest(new { error = "The selected career is not supported." });
    if (request.Skills.Count == 0)
        return Results.BadRequest(new { error = "At least one target skill is required to build a learning plan." });
    if (request.Skills.Count > 50 || request.Resources.Count > 100 || request.Completed.Count > 500)
        return Results.BadRequest(new { error = "The learning request exceeds the supported item limits." });
    if (request.Skills.Any(skill => string.IsNullOrWhiteSpace(skill.Name) || skill.Name.Length > 100)
        || request.Resources.Any(resource => string.IsNullOrWhiteSpace(resource.Title) || resource.Title.Length > 200))
        return Results.BadRequest(new { error = "Skill and resource names must be valid and within the supported length." });
    if (request.Skills.Any(skill => skill.Score is < 0 or > 100)
        || request.Assessment is { Score: < 0 or > 100 }
        || (request.Assessment is { } assessment
            && !request.Skills.Any(skill => string.Equals(skill.Name, assessment.Skill, StringComparison.OrdinalIgnoreCase))))
        return Results.BadRequest(new { error = "Skill and assessment scores must be 0–100, and assessment skills must match a role requirement." });

    try
    {
        return Results.Ok(await coordinator.RunAsync(request, cancellationToken));
    }
    catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested)
    {
        return Results.StatusCode(StatusCodes.Status499ClientClosedRequest);
    }
    catch (Exception exception) when (exception is HttpRequestException or InvalidDataException or InvalidOperationException or TaskCanceledException or JsonException)
    {
        app.Logger.LogError(exception, "Collaborative learning agents failed for career {Career}.", request.Career);
        return Results.Problem(
            detail: exception.Message,
            statusCode: StatusCodes.Status503ServiceUnavailable,
            title: "The configured local AI agents could not complete this recommendation.");
    }
});

app.Run();
