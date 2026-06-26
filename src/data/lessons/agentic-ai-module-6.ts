import type { TopicLesson } from "@/lib/types";

const ai_m6_t1: TopicLesson = {
  topicId: "ai-m6-t1",
  intro:
    "Retrieval-Augmented Generation (RAG) is a way to make AI answers more reliable " +
    "by combining searching for relevant information and then generating a response.",
  blocks: [
    { type: "rag-basics-guide" },
    { type: "rag-basics-steps-checklist" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

const ai_m6_t2: TopicLesson = {
  topicId: "ai-m6-t2",
  intro:
    "Building a Customer Help Bot using Sentence Embeddings, FAISS Vector Indexing, " +
    "and FLAN-T5 model generation step by step.",
  blocks: [
    { type: "document-qa-guide" },
    { type: "document-qa-steps-checklist" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

const ai_m6_t3: TopicLesson = {
  topicId: "ai-m6-t3",
  intro:
    "Multi-Agent Systems (Agentic RAG) — Orchestrate multiple specialized agents " +
    "working together dynamically.",
  blocks: [
    { type: "multi-agent-guide" },
    { type: "multi-agent-steps-checklist" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

const ai_m6_t4: TopicLesson = {
  topicId: "ai-m6-t4",
  intro:
    "Next Steps and Resources — Learn how to take your AI projects from demo to product.",
  blocks: [
    { type: "next-steps-guide" },
    { type: "next-steps-steps-checklist" },
  ],
  keyTakeaways: [
    "You will leave with a practical roadmap for continuing.",
    "Pattern: Build one project → Add evaluation → Deploy and iterate.",
    "Do not skip evaluation. AI apps need ongoing quality checks.",
  ],
};

export const agenticAiModule6Lessons: Record<string, TopicLesson> = {
  "ai-m6-t1": ai_m6_t1,
  "ai-m6-t2": ai_m6_t2,
  "ai-m6-t3": ai_m6_t3,
  "ai-m6-t4": ai_m6_t4,
};
