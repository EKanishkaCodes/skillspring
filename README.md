# SkillSpring

SkillSpring is a local-first learning dashboard with an ASP.NET Core API and five collaborating learning-agent roles:

1. **Skill analyst** identifies strong skills and gaps from the role requirements and assessed scores.
2. **Career matcher** compares those scores with the selected career.
3. **Resource planner** orders the curated course, tutorial, and practice catalog around the next skill.
4. **Progress evaluator** reviews recorded learning activities and assessment performance.
5. **AI mentor** turns the combined results into learner guidance.

The specialists run in sequence. A career change or assessment automatically runs them again. Assessments below 67% prioritize practice for the assessed skill. Learner names, backgrounds, certifications, and projects are not included in AI prompts.

## Run the application

Install the .NET 10 SDK, open PowerShell in this directory, and run:

```powershell
dotnet run --project SkillSpring.csproj
```

Open [http://127.0.0.1:5055](http://127.0.0.1:5055). The learner profile and progress remain stored in the existing `%LOCALAPPDATA%\Northstar\learner-state.json` location so existing learners do not lose their saved data. The API listens on loopback only.

## Enable local language-model agents

Without a model configured, the app uses the transparent deterministic rule-based preview. To run each specialist as its own language-model call, install and start Ollama locally, download a model supported by your machine, and set its exact model tag in PowerShell:

```powershell
$env:SKILLSPRING_OLLAMA_URL = "http://127.0.0.1:11434"
$env:SKILLSPRING_OLLAMA_MODEL = "<installed-local-model-tag>"
dotnet run --project SkillSpring.csproj
```

The AI integration uses Ollama's native `/api/chat` endpoint with structured JSON output. It only accepts loopback HTTP(S) addresses, keeping learner information on the device. If a configured local model is unavailable or returns invalid data, the API reports an error and the dashboard clearly indicates that the local-AI run failed; the rules-based preview remains visible.

The prior `PATHPILOT_OLLAMA_*` and `NORTHSTAR_OLLAMA_*` environment variable names remain supported as aliases for existing setups.

## API

- `GET /api/health` reports service and agent mode.
- `GET /api/state` and `PUT /api/state` load and save learner progress.
- `POST /api/agents/run` runs the five specialists for a career, skill profile, resources, activities, and optional assessment.
