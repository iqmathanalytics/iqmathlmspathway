import type { TopicLesson } from "@/lib/types";

const ai_m7_t1: TopicLesson = {
  topicId: "ai-m7-t1",
  intro:
    "Start the final project by understanding the Customer Support Agent architecture, milestones, and expected output.",
  blocks: [
    { type: "customer-support-project", content: "overview" },
    { type: "customer-support-project-panel", content: "overview" },
  ],
  keyTakeaways: [
    "The final project combines prompts, tools, memory, routing, safety, and testing.",
    "The agent should help customers without pretending to access real accounts.",
    "Build the project step by step before assembling the final script.",
  ],
};

const ai_m7_t2: TopicLesson = {
  topicId: "ai-m7-t2",
  intro:
    "Step 1 creates the trusted knowledge layer: policies, mock order records, and lookup helpers.",
  blocks: [
    { type: "customer-support-project", content: "knowledge" },
    { type: "customer-support-project-panel", content: "knowledge" },
  ],
  keyTakeaways: [
    "A support agent needs trusted policies before it can answer customer questions.",
    "Mock order records let you build safely without a real backend.",
    "Lookup helpers keep responses grounded in approved data.",
  ],
};

const ai_m7_t3: TopicLesson = {
  topicId: "ai-m7-t3",
  intro:
    "Step 2 adds safe tools and a simple function-calling router for common support actions.",
  blocks: [
    { type: "customer-support-project", content: "tools" },
    { type: "customer-support-project-panel", content: "tools" },
  ],
  keyTakeaways: [
    "Tools should be small, explicit, and safe.",
    "Return structured data from tools so the agent can explain results clearly.",
    "Route sensitive requests to escalation instead of guessing.",
  ],
};

const ai_m7_t4: TopicLesson = {
  topicId: "ai-m7-t4",
  intro:
    "Step 3 combines routing, tools, memory, and final response generation into a reusable agent loop.",
  blocks: [
    { type: "customer-support-project", content: "loop" },
    { type: "customer-support-project-panel", content: "loop" },
  ],
  keyTakeaways: [
    "The agent loop receives a user message, chooses an action, calls a tool, and writes the response.",
    "Memory helps inspect recent context and supports follow-up conversations.",
    "A safe agent should expose the action it took for easier debugging.",
  ],
};

const ai_m7_t5: TopicLesson = {
  topicId: "ai-m7-t5",
  intro:
    "Step 4 tests the Customer Support Agent with realistic conversations and assembles the final build.",
  blocks: [
    { type: "customer-support-project", content: "testing" },
    { type: "customer-support-project-panel", content: "testing" },
  ],
  keyTakeaways: [
    "Test happy-path, missing-information, policy, and escalation scenarios.",
    "A final AI project should document what the agent can and cannot do.",
    "The same pattern can be extended with a real database, API, vector search, or LLM provider.",
  ],
};

export const agenticAiModule7Lessons: Record<string, TopicLesson> = {
  "ai-m7-t1": ai_m7_t1,
  "ai-m7-t2": ai_m7_t2,
  "ai-m7-t3": ai_m7_t3,
  "ai-m7-t4": ai_m7_t4,
  "ai-m7-t5": ai_m7_t5,
};
