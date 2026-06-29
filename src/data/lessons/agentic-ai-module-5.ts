import type { TopicLesson } from "@/lib/types";
import { buildAgenticAiLessons } from "./agentic-ai-lesson-factory";

const ai_m5_t1: TopicLesson = {
  topicId: "ai-m5-t1",
  intro:
    "An AI agent is a software system that perceives its environment, processes information, " +
    "and takes actions autonomously to achieve specific goals.",
  blocks: [
    { type: "agents-in-ai" },
    { type: "agents-in-ai-types" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

const ai_m5_t2: TopicLesson = {
  topicId: "ai-m5-t2",
  intro:
    "Function calling lets an LLM decide when to use external tools or APIs, pass structured arguments, " +
    "and generate a final answer grounded in tool results.",
  blocks: [
    { type: "function-calling" },
    { type: "function-calling-panel" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

const ai_m5_t3: TopicLesson = {
  topicId: "ai-m5-t3",
  intro:
    "Building AI agents means creating software that can understand instructions, use tools, " +
    "adapt through feedback and complete tasks with a degree of autonomy.",
  blocks: [
    { type: "building-ai-agents" },
    { type: "agent-workflow-patterns" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

const ai_m5_t4: TopicLesson = {
  topicId: "ai-m5-t4",
  intro:
    "ReACT combines reasoning and acting so an AI can think through a problem, take actions, " +
    "observe results and refine the next step.",
  blocks: [
    { type: "react-pattern" },
    { type: "react-workflow-panel" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

export const agenticAiModule5Lessons = buildAgenticAiLessons([] as const);

agenticAiModule5Lessons["ai-m5-t1"] = ai_m5_t1;
agenticAiModule5Lessons["ai-m5-t2"] = ai_m5_t2;
agenticAiModule5Lessons["ai-m5-t3"] = ai_m5_t3;
agenticAiModule5Lessons["ai-m5-t4"] = ai_m5_t4;
