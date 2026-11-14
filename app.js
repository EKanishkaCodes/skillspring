const careerProfiles = {
  "Product Designer": {
    duration: 12,
    skills: [
      { name: "Visual design", icon: "◈", score: 92, level: "Strong" },
      { name: "User research", icon: "⌕", score: 84, level: "Strong" },
      { name: "Information architecture", icon: "⌘", score: 72, level: "Strong" },
      { name: "Interaction design", icon: "✣", score: 66, level: "Growing" },
      { name: "Prototyping", icon: "◉", score: 32, level: "To develop" },
      { name: "Design systems", icon: "▦", score: 25, level: "To develop" },
    ],
    path: [
      { title: "Design thinking foundations", description: "Turn ambiguous problems into clear opportunities for design.", duration: "35 min", format: "Course", skill: "Design thinking", status: "complete", action: "Review lesson", icon: "◈" },
      { title: "Research that reveals real needs", description: "Practice interviewing and synthesize your findings into insights.", duration: "1.5 hrs", format: "Guided project", skill: "User research", status: "complete", action: "View project", icon: "⌕" },
      { title: "From wireframe to working prototype", description: "Bring an idea to life with interactive, testable prototypes.", duration: "2 hrs", format: "Hands-on", skill: "Prototyping", status: "current", action: "Continue", icon: "◉" },
      { title: "Build a scalable design system", description: "Create reusable components that keep experiences consistent.", duration: "1.5 hrs", format: "Course", skill: "Design systems", status: "upcoming", action: "Preview", icon: "▦" },
    ],
    coach: "You have a great eye for visual design. Pair that with some hands-on prototyping practice and you’ll be ready to bring your ideas to life.",
    milestones: [
      { title: "Design foundations", detail: "Your strong visual design is a great base.", date: "Complete", status: "completed" },
      { title: "Prototype with confidence", detail: "Build and test your first interactive flow.", date: "This week", status: "upcoming" },
      { title: "Create your portfolio case study", detail: "Show how you think, not just what you make.", date: "In 4 weeks", status: "pending" },
      { title: "Ready for your next role", detail: "Your skills, story, and portfolio come together.", date: "In 12 weeks", status: "pending" },
    ],
    weeklyGoal: "You’re just 1.5 hours away from your weekly learning goal.",
    assessmentSkill: "Prototyping",
    questions: [
      { prompt: "What is the main purpose of an interactive prototype?", options: ["To test a user flow before building the final product", "To replace user interviews", "To document the final visual specifications"], answer: 0 },
      { prompt: "When is the most useful time to test a prototype?", options: ["After launch, when all changes are expensive", "Early enough to learn and improve the design", "Only after every screen is pixel-perfect"], answer: 1 },
      { prompt: "What makes a prototype useful for a usability test?", options: ["It lets a participant complete a realistic task", "It contains every feature planned for the next year", "It has the most detailed visual styling"], answer: 0 },
    ],
    resources: [
      { type: "COURSE", title: "Prototyping for product teams", description: "Learn the essentials of turning flows into testable ideas.", duration: "35 min", icon: "◈" },
      { type: "TUTORIAL", title: "Build a clickable user flow", description: "Follow a short walkthrough from wireframe to interaction.", duration: "20 min", icon: "▷" },
      { type: "PRACTICE", title: "Prototype a better sign-up", description: "Make a three-screen flow and test it with one person.", duration: "45 min", icon: "✳" },
    ],
  },
  "Frontend Developer": {
    duration: 16,
    skills: [
      { name: "HTML & CSS", icon: "⌘", score: 91, level: "Strong" },
      { name: "JavaScript", icon: "JS", score: 82, level: "Strong" },
      { name: "Responsive design", icon: "▣", score: 73, level: "Strong" },
      { name: "Git & collaboration", icon: "⌁", score: 61, level: "Growing" },
      { name: "React", icon: "◉", score: 38, level: "To develop" },
      { name: "Testing & accessibility", icon: "✓", score: 27, level: "To develop" },
    ],
    path: [
      { title: "JavaScript essentials", description: "Strengthen the language skills behind interactive web experiences.", duration: "45 min", format: "Course", skill: "JavaScript", status: "complete", action: "Review lesson", icon: "JS" },
      { title: "Responsive layouts in practice", description: "Build interfaces that work beautifully on every screen.", duration: "1.5 hrs", format: "Guided project", skill: "Responsive design", status: "complete", action: "View project", icon: "▣" },
      { title: "Build your first React app", description: "Create reusable components and manage application state.", duration: "2 hrs", format: "Hands-on", skill: "React", status: "current", action: "Continue", icon: "◉" },
      { title: "Ship accessible, tested UI", description: "Make your work reliable and usable for everyone.", duration: "1.5 hrs", format: "Course", skill: "Testing & accessibility", status: "upcoming", action: "Preview", icon: "✓" },
    ],
    coach: "Your HTML and JavaScript fundamentals are already strong. A small React project is the best next step to turn that foundation into production-ready skills.",
    milestones: [
      { title: "Web fundamentals", detail: "Your HTML, CSS, and JavaScript are on track.", date: "Complete", status: "completed" },
      { title: "Build a React project", detail: "Turn your knowledge into a working app.", date: "This week", status: "upcoming" },
      { title: "Test and ship your portfolio", detail: "Show your code quality and accessibility.", date: "In 6 weeks", status: "pending" },
      { title: "Ready for your next role", detail: "Your projects tell the story of your skills.", date: "In 16 weeks", status: "pending" },
    ],
    weeklyGoal: "You’re just 1.5 hours away from your weekly learning goal.",
    assessmentSkill: "React",
    questions: [
      { prompt: "What is the main benefit of splitting a UI into React components?", options: ["Reusable, independently managed interface pieces", "It removes the need for HTML", "It automatically stores data on a server"], answer: 0 },
      { prompt: "What should you use to represent data that changes in a component?", options: ["A CSS selector", "Component state", "A static image"], answer: 1 },
      { prompt: "Why should a list of React elements have stable keys?", options: ["To help React identify items across updates", "To make the browser download CSS faster", "To turn each item into a link"], answer: 0 },
    ],
    resources: [
      { type: "COURSE", title: "React components, clearly explained", description: "Learn how to compose a UI from small reusable pieces.", duration: "40 min", icon: "◈" },
      { type: "TUTORIAL", title: "Build a searchable list", description: "Practice props, state, and event handling in one interface.", duration: "25 min", icon: "▷" },
      { type: "PRACTICE", title: "Ship a small React feature", description: "Build a filterable card grid and add a useful empty state.", duration: "50 min", icon: "✳" },
    ],
  },
  "Full Stack Developer": {
    duration: 20,
    skills: [
      { name: "Python", icon: "Py", score: 82, level: "Strong" },
      { name: "SQL", icon: "⌘", score: 76, level: "Strong" },
      { name: "HTML & CSS", icon: "▣", score: 48, level: "Growing" },
      { name: "JavaScript", icon: "JS", score: 18, level: "To develop" },
      { name: "React", icon: "◉", score: 12, level: "To develop" },
      { name: "Node.js", icon: "⬡", score: 10, level: "To develop" },
    ],
    path: [
      { title: "Your developer foundations", description: "Connect your Python, SQL, and HTML experience to the full-stack workflow.", duration: "30 min", format: "Guided review", skill: "Python", status: "complete", action: "Review lesson", icon: "Py" },
      { title: "JavaScript fundamentals", description: "Learn variables, functions, async code, and the language of the modern web.", duration: "2 hrs", format: "Course", skill: "JavaScript", status: "current", action: "Continue", icon: "JS" },
      { title: "Build interfaces with React", description: "Create reusable components and connect interactive UI to data.", duration: "3 hrs", format: "Hands-on project", skill: "React", status: "upcoming", action: "Preview", icon: "◉" },
      { title: "Create APIs with Node.js", description: "Build server routes and connect your application to a database.", duration: "3 hrs", format: "Tutorial", skill: "Node.js", status: "upcoming", action: "Preview", icon: "⬡" },
      { title: "Ship a full-stack capstone", description: "Bring your frontend, API, and database together in a portfolio project.", duration: "5 hrs", format: "Capstone project", skill: "Full-stack integration", status: "upcoming", action: "Preview", icon: "✳" },
    ],
    coach: "Your Python and SQL experience gives you a real head start on backend thinking. JavaScript is the key bridge; learn it first, then build up to React and Node.js in a small end-to-end project.",
    milestones: [
      { title: "Connect your foundations", detail: "Build on your existing Python, SQL, and HTML skills.", date: "Complete", status: "completed" },
      { title: "Write confident JavaScript", detail: "Use modern JavaScript to make the browser interactive.", date: "This week", status: "upcoming" },
      { title: "Build a React + Node app", detail: "Connect a working interface to your own API.", date: "In 8 weeks", status: "pending" },
      { title: "Launch your full-stack capstone", detail: "Show a complete, working application in your portfolio.", date: "In 20 weeks", status: "pending" },
    ],
    weeklyGoal: "A few focused JavaScript practice sessions are a great start this week.",
    assessmentSkill: "JavaScript",
    questions: [
      { prompt: "Which keyword declares a block-scoped variable that can be reassigned?", options: ["let", "const", "static"], answer: 0 },
      { prompt: "What does Array.map() return?", options: ["A new array with each item transformed", "The first item that matches a condition", "A number of items in the array"], answer: 0 },
      { prompt: "What does await do inside an async function?", options: ["Wait for a promise to settle before continuing", "Run a function only on the server", "Convert JavaScript into HTML"], answer: 0 },
    ],
    resources: [
      { type: "COURSE", title: "JavaScript essentials for Python developers", description: "Learn the syntax and async patterns that power modern web apps.", duration: "50 min", icon: "JS" },
      { type: "TUTORIAL", title: "Build your first interactive page", description: "Use browser events and JavaScript to make a real UI respond.", duration: "35 min", icon: "▷" },
      { type: "PRACTICE", title: "Create a JavaScript task tracker", description: "Practice arrays, functions, events, and browser storage.", duration: "1 hr", icon: "✳" },
      { type: "COURSE", title: "React components in practice", description: "Turn a working JavaScript interface into reusable React components.", duration: "45 min", icon: "◉" },
      { type: "TUTORIAL", title: "Build a REST API with Node.js", description: "Create routes and connect a server to your SQL foundation.", duration: "55 min", icon: "⬡" },
    ],
  },
  "Data Analyst": {
    duration: 14,
    skills: [
      { name: "Data storytelling", icon: "◈", score: 87, level: "Strong" },
      { name: "Spreadsheets", icon: "▦", score: 83, level: "Strong" },
      { name: "Business analysis", icon: "⌕", score: 75, level: "Strong" },
      { name: "Data visualization", icon: "▥", score: 62, level: "Growing" },
      { name: "SQL", icon: "⌘", score: 34, level: "To develop" },
      { name: "Statistical analysis", icon: "∑", score: 23, level: "To develop" },
    ],
    path: [
      { title: "Ask better data questions", description: "Frame business problems so your analysis has real impact.", duration: "35 min", format: "Course", skill: "Business analysis", status: "complete", action: "Review lesson", icon: "⌕" },
      { title: "Tell a story with your data", description: "Make your charts clear, useful, and easy to act on.", duration: "1.5 hrs", format: "Guided project", skill: "Data visualization", status: "complete", action: "View project", icon: "▥" },
      { title: "SQL for everyday analysis", description: "Query real datasets and find the signal in the noise.", duration: "2 hrs", format: "Hands-on", skill: "SQL", status: "current", action: "Continue", icon: "⌘" },
      { title: "Measure what matters", description: "Use statistics to turn patterns into confident decisions.", duration: "1.5 hrs", format: "Course", skill: "Statistical analysis", status: "upcoming", action: "Preview", icon: "∑" },
    ],
    coach: "You already know how to communicate insights. SQL is the missing piece that will help you find those insights directly in the data.",
    milestones: [
      { title: "Analytics foundations", detail: "You know how to ask and tell a good story.", date: "Complete", status: "completed" },
      { title: "Query your first dataset", detail: "Use SQL to uncover a meaningful insight.", date: "This week", status: "upcoming" },
      { title: "Publish a data case study", detail: "Share your process, analysis, and findings.", date: "In 5 weeks", status: "pending" },
      { title: "Ready for your next role", detail: "Demonstrate the full analysis workflow.", date: "In 14 weeks", status: "pending" },
    ],
    weeklyGoal: "You’re just 1.5 hours away from your weekly learning goal.",
    assessmentSkill: "SQL",
    questions: [
      { prompt: "What does a SQL GROUP BY clause help you do?", options: ["Aggregate rows that share a value", "Rename a database table", "Sort results alphabetically"], answer: 0 },
      { prompt: "Which clause filters individual rows before grouping?", options: ["ORDER BY", "WHERE", "SELECT"], answer: 1 },
      { prompt: "What does COUNT(*) return?", options: ["The number of rows in the result group", "The average of a numeric column", "The first value in a column"], answer: 0 },
    ],
    resources: [
      { type: "COURSE", title: "SQL queries for everyday analysis", description: "Get comfortable selecting, filtering, and grouping data.", duration: "40 min", icon: "◈" },
      { type: "TUTORIAL", title: "Explore a dataset with SQL", description: "Practice answering real questions with simple queries.", duration: "25 min", icon: "▷" },
      { type: "PRACTICE", title: "Find a customer trend", description: "Group and compare data to share one useful insight.", duration: "45 min", icon: "✳" },
    ],
  },
};

const state = {
  career: "Product Designer",
  completed: new Set(),
  showAllSkills: false,
  learner: {
    name: "Maya Chen",
    background: "Early-career designer",
    skills: ["Visual design", "User research", "Information architecture", "Interaction design"],
    certifications: ["Google UX Design Certificate"],
    projects: ["Community garden app redesign"],
  },
  skillScores: { "Product Designer": {} },
  assessmentResults: {},
  agentRequestId: 0,
  backendAgentMode: "rules",
};

const byId = (id) => document.getElementById(id);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character]));

const skillAliases = {
  "HTML & CSS": ["html", "basic html", "html/css", "css"],
  "Node.js": ["node", "nodejs", "node.js"],
  "JavaScript": ["js", "javascript", "basic javascript"],
};

function learnerHasSkill(skillName) {
  const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const acceptedNames = [skillName, ...(skillAliases[skillName] || [])].map(normalize);
  return state.learner.skills.some((learnerSkill) => acceptedNames.includes(normalize(learnerSkill)));
}

function skillScoreFromProfile(skill) {
  const savedScore = state.skillScores[state.career]?.[skill.name];
  if (Number.isFinite(savedScore)) return savedScore;
  if (learnerHasSkill(skill.name)) {
    if (skill.name === "HTML & CSS" && state.learner.skills.some((item) => item.toLowerCase() === "basic html")) return Math.min(skill.score, 48);
    return skill.score;
  }
  return 18;
}

function getNextLearningSkill(profile, assessment) {
  if (assessment && assessment.score < 67) return assessment.skill;
  if (assessment) {
    const assessedIndex = profile.path.findIndex((step) => step.skill === assessment.skill);
    const nextRoleStep = profile.path.slice(Math.max(0, assessedIndex + 1)).find((step) =>
      profile.skills.some((skill) => skill.name === step.skill)
      && !state.completed.has(`${state.career}:${step.title}`));
    if (nextRoleStep) return nextRoleStep.skill;
  }
  const nextStep = profile.path.find((step) => step.status !== "complete" && !state.completed.has(`${state.career}:${step.title}`));
  if (nextStep && profile.skills.some((skill) => skill.name === nextStep.skill)) return nextStep.skill;
  return profile.skills.map((skill) => ({ ...skill, score: skillScoreFromProfile(skill) }))
    .sort((a, b) => a.score - b.score)[0]?.name || profile.skills[0].name;
}

function getCompletedCount(profile) {
  return profile.path.filter((step) => step.status === "complete" || state.completed.has(`${state.career}:${step.title}`)).length;
}

function getSkillScore(skill) {
  return skillScoreFromProfile(skill);
}

function getSkillLevel(score) {
  if (score >= 70) return "Strong";
  if (score >= 45) return "Growing";
  return "To develop";
}

function readiness(profile) {
  const score = Math.round(profile.skills.reduce((sum, skill) => sum + getSkillScore(skill), 0) / profile.skills.length);
  return Math.min(96, Math.max(12, score));
}

function skillAnalysisAgent(profile) {
  const scored = profile.skills.map((skill) => ({ ...skill, score: getSkillScore(skill), level: getSkillLevel(getSkillScore(skill)) }));
  return {
    strong: scored.filter((skill) => skill.level === "Strong"),
    gaps: scored.filter((skill) => skill.level !== "Strong").sort((a, b) => a.score - b.score),
    detail: `${scored.filter((skill) => skill.level === "Strong").length} strengths found; ${scored.filter((skill) => skill.level !== "Strong").length} role skills need development.`,
  };
}

function careerMatchAgent(profile, analysis) {
  const match = Math.round(profile.skills.reduce((total, skill) => total + getSkillScore(skill), 0) / profile.skills.length);
  return {
    match,
    detail: `${analysis.strong.length}/${profile.skills.length} role requirements are strong for ${state.career}.`,
  };
}

function resourcePlanningAgent(profile, analysis, assessment) {
  const prioritySkill = getNextLearningSkill(profile, assessment);
  const lowResult = assessment && assessment.score < 67;
  const resources = [...profile.resources].sort((a, b) => {
    const relevance = (resource) => {
      const text = `${resource.title} ${resource.description}`.toLowerCase();
      return text.includes(prioritySkill.toLowerCase()) ? 2 : 0;
    };
    const priority = relevance(b) - relevance(a);
    if (priority) return priority;
    if (lowResult && a.type === "PRACTICE" && b.type !== "PRACTICE") return -1;
    if (lowResult && b.type === "PRACTICE" && a.type !== "PRACTICE") return 1;
    return 0;
  });
  return {
    prioritySkill,
    resources,
    detail: lowResult
      ? `More hands-on ${prioritySkill} practice prioritized after a ${assessment.score}% check-in.`
      : `Learning resources sequenced for the ${prioritySkill} skill gap.`,
  };
}

function progressEvaluationAgent(profile, analysis, assessment) {
  const completed = getCompletedCount(profile);
  const activitiesCompleted = [...state.completed].filter((entry) =>
    entry.startsWith(`${state.career}:`) || entry.startsWith(`resource:${state.career}:`)).length;
  return {
    completed,
    total: profile.path.length,
    activitiesCompleted,
    detail: assessment
      ? `${assessment.skill} assessment: ${assessment.score}%; ${completed}/${profile.path.length} steps and ${activitiesCompleted} activities complete.`
      : `${completed}/${profile.path.length} steps complete; ${activitiesCompleted} activities logged; awaiting a skill check-in.`,
    needsSupport: Boolean(assessment && assessment.score < 67),
  };
}

function mentorGuidanceAgent(profile, analysis, planning, progress) {
  if (progress.needsSupport) {
    return `Your ${progress.detail} Let’s strengthen ${planning.prioritySkill} with a small practice exercise before moving ahead.`;
  }
  const strongNames = analysis.strong.slice(0, 2).map((skill) => skill.name).join(" and ");
  return `${strongNames ? `Your ${strongNames} are a strong base. ` : ""}Focus next on ${planning.prioritySkill}; it is the next step toward ${state.career}.`;
}

function runCollaborativeAgents(profile) {
  const assessment = state.assessmentResults[state.career];
  const skills = skillAnalysisAgent(profile);
  const careerMatch = careerMatchAgent(profile, skills);
  const planning = resourcePlanningAgent(profile, skills, assessment);
  const progress = progressEvaluationAgent(profile, skills, assessment);
  const mentor = mentorGuidanceAgent(profile, skills, planning, progress);
  state.agentReport = [
    { name: "Skill analyst", detail: skills.detail },
    { name: "Career matcher", detail: careerMatch.detail },
    { name: "Resource planner", detail: planning.detail },
    { name: "Progress evaluator", detail: progress.detail },
    { name: "AI mentor", detail: mentor },
  ];
  state.agentPlan = { skills, careerMatch, planning, progress, mentor };
  return state.agentPlan;
}

function renderSkills(profile) {
  const scoredSkills = profile.skills.map((skill) => ({ ...skill, score: getSkillScore(skill) }));
  const skills = state.showAllSkills ? scoredSkills : scoredSkills.slice(0, 5);
  byId("skill-list").innerHTML = skills.map((skill) => {
    const level = getSkillLevel(skill.score);
    const type = level === "Strong" ? "strong" : level === "Growing" ? "growing" : "gap";
    return `<div class="skill-row ${type}">
      <div class="skill-name-wrap"><span class="skill-icon" aria-hidden="true">${escapeHTML(skill.icon)}</span><span class="skill-name">${escapeHTML(skill.name)}</span></div>
      <div class="skill-bar" role="progressbar" aria-label="${escapeHTML(skill.name)} proficiency" aria-valuenow="${skill.score}" aria-valuemin="0" aria-valuemax="100"><span style="width:${skill.score}%"></span></div>
      <span class="skill-level"><i></i>${escapeHTML(level)}</span>
    </div>`;
  }).join("");

  const strong = scoredSkills.filter((skill) => getSkillLevel(skill.score) === "Strong");
  byId("strength-copy").textContent = strong.slice(0, 2).map((skill) => skill.name).join(" and ") || "your growing experience";
  byId("mastered-count").textContent = strong.length;
  byId("mastered-detail").textContent = `${strong.length} of ${profile.skills.length} role skills`;
  byId("progress-count").textContent = scoredSkills.filter((skill) => getSkillLevel(skill.score) === "Growing").length;
  byId("match-summary").innerHTML = `<span class="match-score">${readiness(profile)}%</span><span><strong>Role skill coverage</strong><small>${strong.length} of ${profile.skills.length} requirements are strong; gaps are prioritized below.</small></span>`;
  byId("all-skills").textContent = state.showAllSkills ? "Show fewer skills ↑" : "View all skills →";
}

function renderPath(profile) {
  const completed = getCompletedCount(profile);
  byId("nav-count").textContent = profile.path.length - completed;
  byId("path-summary-title").textContent = `${profile.path.length} steps, shaped around you`;
  byId("path-summary-copy").textContent = `${profile.path.length} curated steps · about 3 hours per week`;
  byId("path-list").innerHTML = profile.path.map((step, index) => {
    const done = step.status === "complete" || state.completed.has(`${state.career}:${step.title}`);
    const current = !done && profile.path.slice(0, index).every((prior) => prior.status === "complete" || state.completed.has(`${state.career}:${prior.title}`));
    const status = done ? "complete" : current ? "current" : "upcoming";
    const action = done ? "Completed ✓" : current ? step.action : step.action;
    return `<article class="path-step ${status}">
      <div class="step-number">${done ? "✓" : index + 1}</div>
      <div class="step-copy">
        <div class="step-topline"><strong>${escapeHTML(step.title)}</strong>${done ? '<span class="step-status">DONE</span>' : current ? '<span class="step-status">UP NEXT</span>' : ""}</div>
        <p class="step-description">${escapeHTML(step.description)}</p>
        <div class="step-tags"><span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>${escapeHTML(step.duration)}</span><span>${escapeHTML(step.format)}</span><span>↗ ${escapeHTML(step.skill)}</span></div>
      </div>
      <button class="step-action ${done ? "done" : ""}" type="button" data-step="${escapeHTML(step.title)}" data-action="${done ? "review" : current ? "start" : "preview"}">${escapeHTML(action)}</button>
    </article>`;
  }).join("");
}

function renderMilestones(profile) {
  const completedSteps = getCompletedCount(profile);
  byId("milestone-track").innerHTML = profile.milestones.map((milestone, index) => {
    const completed = index === 0 || (index === 1 && completedSteps >= 3);
    const upcoming = !completed && index === Math.min(1 + completedSteps - profile.path.filter((step) => step.status === "complete").length, profile.milestones.length - 1);
    const status = completed ? "completed" : upcoming ? "upcoming" : "pending";
    return `<div class="milestone-item ${status}">
      <span class="milestone-marker">${completed ? "✓" : upcoming ? "✦" : "·"}</span>
      <span class="milestone-copy"><strong>${escapeHTML(milestone.title)}</strong><span>${escapeHTML(milestone.detail)}</span></span>
      <span class="milestone-date">${escapeHTML(completed ? "Complete" : upcoming ? "This week" : milestone.date)}</span>
    </div>`;
  }).join("");
}

function renderLearnerProfile() {
  byId("greeting-name").textContent = state.learner.name.split(/\s+/)[0] || state.learner.name;
  document.querySelector(".profile-name").textContent = state.learner.name;
  byId("profile-background").textContent = state.learner.background || "Add your current role or background";
  byId("profile-skills").innerHTML = state.learner.skills.length
    ? state.learner.skills.map((skill) => `<span class="profile-chip">${escapeHTML(skill)}</span>`).join("")
    : '<span class="profile-empty">Add skills you already use.</span>';
  byId("profile-certifications").innerHTML = state.learner.certifications.length
    ? state.learner.certifications.map((item) => `<span class="profile-record">✦ ${escapeHTML(item)}</span>`).join("")
    : '<span class="profile-empty">No certifications added yet.</span>';
  byId("profile-projects").innerHTML = state.learner.projects.length
    ? state.learner.projects.map((item) => `<span class="profile-record">↗ ${escapeHTML(item)}</span>`).join("")
    : '<span class="profile-empty">Add a project or portfolio example.</span>';
}

function renderResources(profile) {
  const resources = state.agentPlan?.planning.resources || profile.resources;
  byId("resource-list").innerHTML = resources.map((resource) => {
    const key = `resource:${state.career}:${resource.title}`;
    const completed = state.completed.has(key);
    return `<article class="resource-card">
      <div class="resource-icon">${escapeHTML(resource.icon)}</div>
      <div class="resource-copy"><span class="resource-type">${escapeHTML(resource.type)}</span><strong>${escapeHTML(resource.title)}</strong><p>${escapeHTML(resource.description)}</p><span class="resource-duration">${escapeHTML(resource.duration)} · ${completed ? "Completed" : "Personalized recommendation"}</span></div>
      <button class="resource-action ${completed ? "done" : ""}" type="button" data-resource="${escapeHTML(resource.title)}">${completed ? "Done ✓" : "Open"}</button>
    </article>`;
  }).join("");
}

function renderAgentWorkspace() {
  const reports = state.agentReport || [];
  byId("agent-list").innerHTML = reports.map((agent, index) => `<article class="agent-row">
    <span class="agent-avatar agent-avatar-${index + 1}">${["✧", "⌖", "▤", "◷", "✦"][index]}</span>
    <span class="agent-copy"><strong>${escapeHTML(agent.name)}</strong><small>${escapeHTML(agent.detail)}</small></span>
    <span class="agent-done" aria-label="Completed">✓</span>
  </article>`).join("");
  const prioritySkill = state.agentPlan?.planning.prioritySkill || "your next skill";
  const match = state.agentPlan?.careerMatch.match || 0;
  const support = state.agentPlan?.progress.needsSupport;
  const isAi = state.agentPlan?.mode === "local-ai";
  byId("agent-mode").textContent = isAi ? "LOCAL AI · ACTIVE" : "RULES PREVIEW";
  byId("agent-disclaimer").textContent = isAi
    ? "Five independent agents collaborate through your configured local Ollama model. Learner data stays on this device."
    : "Five specialists use transparent local rules. Set SKILLSPRING_OLLAMA_MODEL to enable a local AI model; data is never sent externally.";
  byId("agent-consensus").innerHTML = `<span class="consensus-spark">✦</span><span><strong>Shared plan: ${support ? "practice before progressing" : "build the next priority skill"}</strong><small>${escapeHTML(prioritySkill)} · ${match}% current role match</small></span>`;
}

function renderAssessment(profile) {
  const result = state.assessmentResults[state.career];
  const attempts = result?.attempts || 0;
  byId("assessment-copy").textContent = `Check your ${profile.assessmentSkill} knowledge. Your result helps tune the next recommendation.`;
  byId("assessment-result").innerHTML = result
    ? `<strong>Last result: ${result.score}%</strong><span>${escapeHTML(result.skill)} · ${attempts} ${attempts === 1 ? "attempt" : "attempts"} · ${escapeHTML(result.date)}</span>`
    : '<span>No assessment yet. Your current skill estimate is based on your profile and learning activity.</span>';
}

function renderCareer() {
  const profile = careerProfiles[state.career];
  const plan = runCollaborativeAgents(profile);
  const score = readiness(profile);
  const completed = getCompletedCount(profile);
  const targetReady = Math.min(96, Math.round(score + (completed / profile.path.length) * 12 + Math.min(5, (state.assessmentResults[state.career]?.score || 0) / 20)));
  byId("goal-title-role").textContent = state.career;
  byId("goal-duration").textContent = `~${profile.duration} weeks to ready`;
  byId("readiness-value").textContent = `${targetReady}%`;
  byId("ring-value").textContent = targetReady;
  byId("readiness-ring").style.background = `conic-gradient(#c6e4cc 0 ${targetReady}%, rgba(255,255,255,.19) ${targetReady}% 100%)`;
  byId("readiness-ring").setAttribute("aria-label", `Career readiness ${targetReady} percent`);
  const result = state.assessmentResults[state.career];
  byId("coach-message").textContent = result && result.score >= 67
    ? `Great work on your ${result.skill} check-in (${result.score}%). I’ve updated your skill match and moved your next recommendation toward the remaining gap. ${plan.mentor}`
    : result
      ? plan.mentor
      : profile.coach;
  const nextSkill = profile.skills.find((skill) => skill.name === plan.planning.prioritySkill) || profile.skills[0];
  byId("focus-title").textContent = nextSkill.name;
  byId("focus-detail").textContent = `Closes your biggest skill gap`;
  byId("focus-icon").textContent = nextSkill.icon;
  byId("focus-start").dataset.skill = nextSkill.name;
  byId("weekly-copy").textContent = profile.weeklyGoal;
  renderSkills(profile);
  renderPath(profile);
  renderMilestones(profile);
  renderLearnerProfile();
  renderResources(profile);
  renderAssessment(profile);
  renderAgentWorkspace();
  refreshServerAgents(profile);
}

function showInfo(title, content, eyebrow = "A CLOSER LOOK") {
  byId("info-title").textContent = title;
  byId("info-eyebrow").textContent = eyebrow;
  byId("info-content").innerHTML = content;
  byId("info-modal").showModal();
}

function backendEnabled() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

function setSaveStatus(message) {
  byId("save-status").textContent = message;
}

function getStateSnapshot() {
  return {
    career: state.career,
    completed: [...state.completed],
    learner: state.learner,
    skillScores: state.skillScores,
    assessmentResults: state.assessmentResults,
  };
}

function persistBrowserState() {
  localStorage.setItem("northstar-learning-state", JSON.stringify(getStateSnapshot()));
}

function persistState() {
  if (!backendEnabled()) {
    try {
      persistBrowserState();
      setSaveStatus("Saved in this browser");
    } catch (error) {
      setSaveStatus("Could not save your progress");
      console.error("Could not save your learning progress in this browser.", error);
    }
    return;
  }

  setSaveStatus("Saving to backend…");
  fetch("/api/state", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getStateSnapshot()),
  }).then(async (response) => {
    if (!response.ok) throw new Error(await response.text() || `State save failed (${response.status}).`);
    setSaveStatus("Saved to local backend");
  }).catch((error) => {
    console.error("Backend save failed; preserving progress in browser storage.", error);
    try {
      persistBrowserState();
      setSaveStatus("Backend unavailable · saved in browser");
    } catch (storageError) {
      setSaveStatus("Could not save your progress");
      console.error("Browser storage fallback failed.", storageError);
    }
  });
}

function applySavedState(data) {
  if (!data || typeof data !== "object") return;
  if (Object.hasOwn(careerProfiles, data.career)) state.career = data.career;
  if (Array.isArray(data.completed)) state.completed = new Set(data.completed.filter((item) => typeof item === "string"));
  if (data.learner && typeof data.learner === "object") {
    state.learner.name = typeof data.learner.name === "string" ? data.learner.name : state.learner.name;
    state.learner.background = typeof data.learner.background === "string" ? data.learner.background : state.learner.background;
    for (const key of ["skills", "certifications", "projects"]) {
      if (Array.isArray(data.learner[key])) state.learner[key] = data.learner[key].filter((item) => typeof item === "string");
    }
  }
  if (data.skillScores && typeof data.skillScores === "object") state.skillScores = data.skillScores;
  if (data.assessmentResults && typeof data.assessmentResults === "object") state.assessmentResults = data.assessmentResults;
}

async function persistServerAgents(profile, requestId) {
  const assessment = state.assessmentResults[state.career];
  const response = await fetch("/api/agents/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      career: state.career,
      skills: profile.skills.map((skill) => ({
        name: skill.name,
        score: getSkillScore(skill),
        level: getSkillLevel(getSkillScore(skill)),
        icon: skill.icon,
      })),
      learner: state.learner,
      path: profile.path.map(({ title, skill, status }) => ({ title, skill, status })),
      resources: profile.resources,
      assessment: assessment ? { score: assessment.score, skill: assessment.skill } : null,
      completed: [...state.completed],
    }),
  });
  if (!response.ok) throw new Error(await response.text() || `Agent service failed (${response.status}).`);
  const plan = await response.json();
  if (requestId !== state.agentRequestId || plan.career !== state.career) return;

  const planner = plan.agents.find((agent) => agent.name === "Resource planner");
  state.agentReport = plan.agents;
  state.agentPlan = {
    ...state.agentPlan,
    mode: plan.mode,
    careerMatch: { match: plan.match },
    planning: { prioritySkill: plan.prioritySkill, resources: plan.resources, detail: planner?.detail || "" },
    progress: { completed: plan.completedSteps, total: plan.totalSteps, needsSupport: plan.needsSupport },
    mentor: plan.coachMessage,
  };

  byId("focus-title").textContent = plan.prioritySkill;
  byId("focus-detail").textContent = plan.needsSupport ? "Practice recommended after your check-in" : "Chosen by your learning agents";
  const focusSkill = profile.skills.find((skill) => skill.name === plan.prioritySkill);
  if (focusSkill) byId("focus-icon").textContent = focusSkill.icon;
  byId("focus-start").dataset.skill = plan.prioritySkill;
  byId("coach-message").textContent = plan.coachMessage;

  const readinessPercent = Math.min(96, Math.round(plan.match + (plan.completedSteps / Math.max(1, plan.totalSteps)) * 12 + Math.min(5, (assessment?.score || 0) / 20)));
  byId("readiness-value").textContent = `${readinessPercent}%`;
  byId("ring-value").textContent = readinessPercent;
  byId("readiness-ring").style.background = `conic-gradient(#c6e4cc 0 ${readinessPercent}%, rgba(255,255,255,.19) ${readinessPercent}% 100%)`;
  byId("readiness-ring").setAttribute("aria-label", `Career readiness ${readinessPercent} percent`);
  renderResources(profile);
  renderAgentWorkspace();
  setSaveStatus(plan.mode === "local-ai" ? "Connected · local AI agents active" : "Connected · rules preview active");
}

function refreshServerAgents(profile) {
  if (!backendEnabled()) return;
  const requestId = ++state.agentRequestId;
  persistServerAgents(profile, requestId).catch((error) => {
    if (requestId !== state.agentRequestId) return;
    console.error("Backend agent collaboration failed; using the local recommendation preview.", error);
    byId("agent-mode").textContent = state.backendAgentMode === "local-ai" ? "LOCAL AI · ERROR" : "RULES PREVIEW";
    byId("agent-disclaimer").textContent = state.backendAgentMode === "local-ai"
      ? "The configured local model failed to respond. Preview recommendations remain visible; check the backend log and local Ollama service."
      : "The backend agent API could not be reached. Preview recommendations remain visible; see the browser console for details.";
    setSaveStatus(state.backendAgentMode === "local-ai" ? "Local AI unavailable · check backend log" : "Agent API unavailable · using preview");
  });
}

async function restoreState() {
  let data;
  if (backendEnabled()) {
    try {
      const healthResponse = await fetch("/api/health");
      if (!healthResponse.ok) throw new Error(await healthResponse.text() || `Health check failed (${healthResponse.status}).`);
      const health = await healthResponse.json();
      state.backendAgentMode = health.agentMode === "local-ai" ? "local-ai" : "rules";
      const response = await fetch("/api/state");
      if (!response.ok) throw new Error(await response.text() || `State load failed (${response.status}).`);
      data = await response.json();
      setSaveStatus("Connected to local backend");
    } catch (error) {
      console.error("Could not load learner state from the backend.", error);
      setSaveStatus("Backend unavailable · using browser storage");
    }
  }
  try {
    if (!data) {
      const saved = localStorage.getItem("northstar-learning-state");
      if (saved) data = JSON.parse(saved);
    }
    applySavedState(data);
  } catch (error) {
    console.error("Saved learner state could not be applied; starting with the default profile.", error);
    setSaveStatus("Could not read saved progress");
  }
}

function commaSeparatedValues(value) {
  return [...new Set(value.split(",").map((item) => item.trim()).filter(Boolean))];
}

async function initialize() {
  await restoreState();
  const select = byId("career-select");
  const careerOptions = Object.keys(careerProfiles).map((career) => `<option value="${escapeHTML(career)}">${escapeHTML(career)}</option>`).join("");
  select.innerHTML = careerOptions;
  byId("profile-career-select").innerHTML = careerOptions;
  renderCareer();

  const now = new Date();
  byId("today-label").textContent = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(now);
  document.querySelector(".copyright-label").textContent = `© ${now.getFullYear()} SkillSpring Learning`;

  byId("edit-goal").addEventListener("click", () => {
    select.value = state.career;
    byId("goal-modal").showModal();
  });

  byId("goal-form").addEventListener("submit", (event) => {
    if (event.submitter?.id === "save-goal") {
      state.career = select.value;
      state.showAllSkills = false;
      renderCareer();
      persistState();
    }
  });

  byId("edit-profile").addEventListener("click", () => {
    byId("profile-name-input").value = state.learner.name;
    byId("profile-background-input").value = state.learner.background;
    byId("profile-career-select").value = state.career;
    byId("profile-skills-input").value = state.learner.skills.join(", ");
    byId("profile-certifications-input").value = state.learner.certifications.join(", ");
    byId("profile-projects-input").value = state.learner.projects.join(", ");
    byId("profile-modal").showModal();
  });

  byId("load-fullstack-scenario").addEventListener("click", () => {
    state.completed = new Set([...state.completed].filter((item) =>
      !item.startsWith("Full Stack Developer:") && !item.startsWith("resource:Full Stack Developer:")));
    state.learner = {
      name: "Alex Morgan",
      background: "Computer science student",
      skills: ["Python", "SQL", "Basic HTML"],
      certifications: [],
      projects: [],
    };
    state.career = "Full Stack Developer";
    state.skillScores[state.career] = {
      Python: 82,
      SQL: 76,
      "HTML & CSS": 48,
      JavaScript: 18,
      React: 12,
      "Node.js": 10,
    };
    state.showAllSkills = true;
    delete state.assessmentResults[state.career];
    renderCareer();
    persistState();
    showInfo("Full Stack student scenario loaded", "<p>Alex is a computer science student with <strong>Python, SQL, and basic HTML</strong>, aiming to become a <strong>Full Stack Developer</strong>.</p><p>The collaborating specialists identified JavaScript as the next step, followed by React, Node.js, and a full-stack capstone.</p>", "SAMPLE LEARNER");
  });

  byId("profile-form").addEventListener("submit", (event) => {
    if (event.submitter?.id !== "save-profile") return;
    event.preventDefault();
    const previousSkills = new Set(state.learner.skills);
    state.learner = {
      name: byId("profile-name-input").value.trim(),
      background: byId("profile-background-input").value.trim(),
      skills: commaSeparatedValues(byId("profile-skills-input").value),
      certifications: commaSeparatedValues(byId("profile-certifications-input").value),
      projects: commaSeparatedValues(byId("profile-projects-input").value),
    };
    state.skillScores[state.career] ??= {};
    for (const [career, scores] of Object.entries(state.skillScores)) {
      state.skillScores[career] = Object.fromEntries(Object.entries(scores).filter(([skill]) => learnerHasSkill(skill)));
    }
    for (const skill of state.learner.skills) {
      if (!previousSkills.has(skill)) {
        for (const role of Object.values(careerProfiles)) {
          const requirement = role.skills.find((item) => item.name.toLowerCase() === skill.toLowerCase());
          if (requirement) state.skillScores[state.career][requirement.name] = Math.max(70, requirement.score);
        }
      }
    }
    state.career = byId("profile-career-select").value;
    state.showAllSkills = false;
    renderCareer();
    persistState();
    byId("profile-modal").close();
  });

  byId("all-skills").addEventListener("click", () => {
    state.showAllSkills = !state.showAllSkills;
    renderSkills(careerProfiles[state.career]);
  });

  byId("path-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-step]");
    if (!button) return;
    const profile = careerProfiles[state.career];
    const step = profile.path.find((item) => item.title === button.dataset.step);
    if (!step) return;
    if (button.dataset.action === "start") {
      state.completed.add(`${state.career}:${step.title}`);
      const relatedSkill = profile.skills.find((skill) => skill.name === step.skill);
      if (relatedSkill) {
        const newScore = Math.min(100, getSkillScore(relatedSkill) + 12);
        state.skillScores[state.career] ??= {};
        state.skillScores[state.career][relatedSkill.name] = newScore;
        if (newScore >= 45 && !state.learner.skills.includes(relatedSkill.name)) state.learner.skills.push(relatedSkill.name);
      }
      renderCareer();
      persistState();
      showInfo("Nice work — step complete!", `<p>You’ve made progress on <strong>${escapeHTML(step.skill)}</strong>. Your learning path and readiness score have been updated.</p><p><strong>Next up:</strong> ${escapeHTML(profile.path.find((item) => item.status !== "complete" && !state.completed.has(`${state.career}:${item.title}`))?.title || "Keep building your portfolio")}.</p>`, "MOMENTUM BUILT");
    } else if (button.dataset.action === "review") {
      showInfo(step.title, `<p>This ${escapeHTML(step.format.toLowerCase())} is part of your personalized ${escapeHTML(state.career)} path.</p><ul><li>Skill: ${escapeHTML(step.skill)}</li><li>Estimated time: ${escapeHTML(step.duration)}</li><li>Status: Completed</li></ul>`);
    } else {
      showInfo(step.title, `<p>${escapeHTML(step.description)}</p><ul><li>Skill focus: ${escapeHTML(step.skill)}</li><li>Estimated time: ${escapeHTML(step.duration)}</li><li>Format: ${escapeHTML(step.format)}</li></ul><p>This step will unlock when you finish the one before it.</p>`, "COMING UP");
    }
  });

  byId("resource-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-resource]");
    if (!button) return;
    const resource = careerProfiles[state.career].resources.find((item) => item.title === button.dataset.resource);
    if (resource) {
      const key = `resource:${state.career}:${resource.title}`;
      const isComplete = state.completed.has(key);
      showInfo(resource.title, `<p>${escapeHTML(resource.description)}</p><ul><li>Format: ${escapeHTML(resource.type.toLowerCase())}</li><li>Suggested time: ${escapeHTML(resource.duration)}</li><li>Focus: ${escapeHTML(state.agentPlan.planning.prioritySkill)}</li></ul><p>This resource was selected for your current goal and skill progress.</p>${isComplete ? "<p><strong>You’ve completed this activity.</strong></p>" : `<button class="button button-primary resource-complete-button" type="button" data-complete-resource="${escapeHTML(resource.title)}">Mark activity complete ✓</button>`}`, "RECOMMENDED FOR YOU");
    }
  });

  byId("info-content").addEventListener("click", (event) => {
    const button = event.target.closest("[data-complete-resource]");
    if (!button) return;
    state.completed.add(`resource:${state.career}:${button.dataset.completeResource}`);
    renderCareer();
    persistState();
    byId("info-modal").close();
    showInfo("Activity added to your progress", `<p><strong>${escapeHTML(button.dataset.completeResource)}</strong> is now recorded in your learning activity. Your progress evaluator and learning coach will use this information in your next plan.</p>`, "PROGRESS UPDATED");
  });

  byId("start-assessment").addEventListener("click", () => {
    const profile = careerProfiles[state.career];
    byId("assessment-intro").textContent = `Three quick questions about ${profile.assessmentSkill}. Your answers will update your skill match and learning recommendations.`;
    byId("assessment-questions").innerHTML = profile.questions.map((question, index) => `<fieldset class="assessment-question"><legend>${index + 1}. ${escapeHTML(question.prompt)}</legend>${question.options.map((option, optionIndex) => `<label class="assessment-option"><input type="radio" name="question-${index}" value="${optionIndex}" /><span>${escapeHTML(option)}</span></label>`).join("")}</fieldset>`).join("");
    byId("assessment-error").textContent = "";
    byId("assessment-modal").showModal();
  });

  byId("assessment-form").addEventListener("submit", (event) => {
    if (event.submitter?.id !== "submit-assessment") return;
    event.preventDefault();
    const profile = careerProfiles[state.career];
    const formData = new FormData(event.currentTarget);
    const answers = profile.questions.map((_, index) => formData.get(`question-${index}`));
    if (answers.some((answer) => answer === null)) {
      byId("assessment-error").textContent = "Answer all three questions to see your results.";
      return;
    }
    const correct = profile.questions.reduce((total, question, index) => total + (Number(answers[index]) === question.answer ? 1 : 0), 0);
    const score = Math.round((correct / profile.questions.length) * 100);
    const skill = profile.skills.find((item) => item.name === profile.assessmentSkill);
    const priorScore = getSkillScore(skill);
    const calibratedScore = Math.round(priorScore * 0.6 + score * 0.4);
    state.skillScores[state.career] ??= {};
    state.skillScores[state.career][skill.name] = calibratedScore;
    if (calibratedScore >= 45 && !state.learner.skills.includes(skill.name)) state.learner.skills.push(skill.name);
    if (score >= 67) {
      const validatedStep = profile.path.find((step) => step.skill === skill.name);
      if (validatedStep) state.completed.add(`${state.career}:${validatedStep.title}`);
    }
    const previousAttempts = state.assessmentResults[state.career]?.attempts || 0;
    state.assessmentResults[state.career] = {
      score,
      skill: skill.name,
      attempts: previousAttempts + 1,
      date: new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date()),
    };
    renderCareer();
    persistState();
    byId("assessment-modal").close();
    showInfo("Your skill check-in", `<p>You scored <strong>${score}%</strong> on your ${escapeHTML(skill.name)} check-in.</p><p>Your skill estimate is now <strong>${calibratedScore}% (${getSkillLevel(calibratedScore)})</strong>. ${score >= 67 ? "Your learning path will move on to the next priority." : "We’ve prioritized more hands-on practice to help strengthen this skill."}</p>`, "ASSESSMENT COMPLETE");
  });

  byId("focus-start").addEventListener("click", () => {
    const skill = byId("focus-title").textContent;
    const step = careerProfiles[state.career].path.find((item) => item.skill === skill);
    if (step) {
      const stepButton = [...byId("path-list").querySelectorAll("[data-step]")].find((button) => button.dataset.step === step.title);
      if (stepButton) stepButton.click();
      else showInfo(`Start ${skill}`, `<p>Your next best skill is <strong>${escapeHTML(skill)}</strong>. Continue through your learning path to get started.</p>`);
    } else {
      showInfo(`Start ${skill}`, `<p>Your next best skill is <strong>${escapeHTML(skill)}</strong>. Your coach recommends adding a focused project to your learning path.</p>`);
    }
  });

  byId("readiness-details").addEventListener("click", () => {
    const profile = careerProfiles[state.career];
    showInfo("Your readiness, explained", `<p>Your <strong>${byId("readiness-value").textContent}</strong> readiness score reflects your current strengths, assessment results, and how much of your personalized path you’ve completed.</p><ul><li>${profile.skills.filter((skill) => getSkillLevel(getSkillScore(skill)) === "Strong").length} role requirements are currently strong</li><li>${profile.skills.filter((skill) => getSkillLevel(getSkillScore(skill)) === "Growing").length} skills are growing</li><li>${profile.skills.filter((skill) => getSkillLevel(getSkillScore(skill)) === "To develop").length} skills are prioritized for focused practice</li></ul><p>We use this as a progress guide, not a hiring guarantee.</p>`);
  });

  byId("ask-coach").addEventListener("click", () => {
    showInfo("A note from your learning coach", `<p>${escapeHTML(byId("coach-message").textContent)}</p><p>Your recommended next skill is <strong>${escapeHTML(byId("focus-title").textContent)}</strong>. Focus on one small project this week, then reflect on what you learned.</p>`, "YOUR AI LEARNING COACH");
  });

  byId("path-filter").addEventListener("click", () => {
    showInfo("Your learning path", `<p>Your path is organized around the skills that matter for becoming a <strong>${escapeHTML(state.career)}</strong>.</p><ul>${careerProfiles[state.career].path.map((step) => `<li>${escapeHTML(step.skill)} · ${escapeHTML(step.duration)}</li>`).join("")}</ul>`, "ALL SKILLS");
  });

  byId("show-path").addEventListener("click", () => {
    showInfo("Your full learning path", `<p>A focused ${careerProfiles[state.career].duration}-week route toward becoming a <strong>${escapeHTML(state.career)}</strong>. Your first four steps are ready now; future recommendations will adapt to your progress.</p><ul>${careerProfiles[state.career].path.map((step, index) => `<li>${index + 1}. ${escapeHTML(step.title)} — ${escapeHTML(step.duration)}</li>`).join("")}</ul>`, "YOUR ROADMAP");
  });

  byId("milestone-view").addEventListener("click", () => {
    showInfo("Milestones on your path", `<ul>${careerProfiles[state.career].milestones.map((item) => `<li><strong>${escapeHTML(item.title)}</strong> — ${escapeHTML(item.detail)}</li>`).join("")}</ul>`, "YOUR ROAD AHEAD");
  });

  byId("agent-details").addEventListener("click", () => {
    const agents = state.agentReport.map((agent) => `<li><strong>${escapeHTML(agent.name)}:</strong> ${escapeHTML(agent.detail)}</li>`).join("");
    const execution = state.agentPlan?.mode === "local-ai"
      ? "Each specialist ran as a separate structured call to your configured local language model. Only role skills, scores, assessments, learning resources and activity counts are provided; your name, certifications, projects and background are excluded."
      : "Each specialist runs as a separate local rule-based step because no Ollama model is configured. Set SKILLSPRING_OLLAMA_MODEL to enable local language-model agents.";
    showInfo("Five specialists, one shared plan", `<p>${escapeHTML(execution)}</p><ol>${agents}</ol><p>The resource planner uses the skill analysis and assessment result; the progress evaluator checks learning activity; the mentor turns the combined plan into guidance. Changing your goal or submitting a new assessment runs the collaboration again. AI-provider traffic is restricted to a loopback Ollama service; learner data is not sent to an external provider.</p>`, "AGENT COLLABORATION");
  });

  document.querySelector(".notification-button").addEventListener("click", () => {
    showInfo("You’re all caught up", "<p>No new notifications. Keep up your learning streak and check back after your next lesson.</p>", "NOTIFICATIONS");
  });

  document.querySelector(".profile-menu").addEventListener("click", () => {
    showInfo("Your workspace", `<p>You’re learning in your personal workspace as <strong>${escapeHTML(state.learner.name)}</strong>.</p><p>Your profile and progress are saved in this browser.</p>`, "PROFILE");
  });

  document.querySelector(".settings-link").addEventListener("click", (event) => {
    event.preventDefault();
    showInfo("Learning preferences", "<p>Your learning path is paced for about 3 hours per week. Change your career goal any time with <strong>Edit career goal</strong>.</p><p>Your profile, assessment results, and learning progress are saved in this browser.</p>", "SETTINGS");
  });
}

initialize();
