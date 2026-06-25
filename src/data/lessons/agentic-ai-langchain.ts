import type { TopicLesson } from "@/lib/types";

// ─── Module 2 — LangChain ────────────────────────────────────────────────────
//
// ai-lc-t1 is hand-crafted to avoid duplication:
//   The infographic already shows hook / outcome / 3-step pattern / example / caution.
//   The left side below adds ONLY unique content that is not in the infographic.
//   The right side uses a practice block (Python IDE) instead of the concept card.
//
// ai-lc-t2 through ai-lc-t7 are built by the factory (unchanged).
//
// NOTE: Changes in this file are scoped to Module 2 only.
//       Other modules are managed separately.

const ai_lc_t1: TopicLesson = {
  topicId: "ai-lc-t1",
  intro:
    "LangChain is an open-source framework that simplifies building LLM-powered applications " +
    "by connecting models, prompts, tools, and memory into reusable workflows.",
  blocks: [
    // Left side: rich intro card + 6 key component cards (no duplication with right side)
    { type: "langchain-intro" },
    // Right side signal: renders the RAG pipeline workflow panel
    { type: "langchain-workflow" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

// ─── ai-lc-t2: Setup + Chat Models (combined, single-column guide) ───────────
//
// Combines:
//  • "Installing and Setting Up LangChain" (setup)
//  • "Chat Models and Providers" (first code demo)
// into a single full-width colab-style guide.
// The "single-column" sentinel block collapses the right panel in the layout.

const ai_lc_t2: TopicLesson = {
  topicId: "ai-lc-t2",
  intro:
    "Install LangChain, pick a provider (Gemini, Groq, or Anthropic), and run your first " +
    "chat model prompt — step by step in a notebook-style guide.",
  blocks: [
    { type: "langchain-setup-guide" },
    { type: "langchain-steps-checklist" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

// ─── ai-lc-t4: Prompt Templates ──────────────────────────────────────────────
//
// Left  → LangChainPromptsBlock: explanation of PromptTemplate + horizontal LCEL flowchart
// Right → LangChainPromptsGuide: steps 6-9 (Jupyter-style code cells + integrated checklist)

const ai_lc_t4: TopicLesson = {
  topicId: "ai-lc-t4",
  intro:
    "PromptTemplate lets you define a reusable prompt with dynamic placeholders. " +
    "Combine it with a chat model and StrOutputParser using the LCEL pipe operator to build a clean, chainable pipeline.",
  blocks: [
    { type: "langchain-prompts" },
    { type: "langchain-prompts-guide" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

// ─── ai-lc-t5: LCEL Chains and Output Parsers ────────────────────────────────
//
// Left  → LangChainLCELBlock: LCEL overview + key features + pipe syntax diagram
// Right → LangChainLCELGuide: steps 1-6 (Jupyter-style code cells + integrated checklist)

const ai_lc_t5: TopicLesson = {
  topicId: "ai-lc-t5",
  intro:
    "LCEL (LangChain Expression Language) lets you compose prompts, models, and parsers into a " +
    "clean pipeline using the | pipe operator. Build a full reasoning chain in just a few lines.",
  blocks: [
    { type: "langchain-lcel" },
    { type: "langchain-lcel-guide" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

// ─── ai-lc-t6: Agents and Tools in LangChain ─────────────────────────────────
//
// Left  → LangChainAgentsBlock: concepts, both diagrams, agent types, tool types, advantages
// Right → LangChainAgentsGuide: 5 key code examples (agents + tools) with checklist

const ai_lc_t6: TopicLesson = {
  topicId: "ai-lc-t6",
  intro:
    "Agents are LLM-powered systems that plan and decide which tools to call. " +
    "Tools are external functions or APIs the agent can invoke. Together they enable dynamic, multi-step automation.",
  blocks: [
    { type: "langchain-agents" },
    { type: "langchain-agents-guide" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

// ─── ai-lc-t7: Debugging & Testing with LangSmith ────────────────────────────
//
// Left  → LangChainLangSmithBlock: intro, components diagram, importance, tracing, testing strategies
// Right → LangChainLangSmithGuide: steps 1-8 (LangSmith integration code cells + integrated checklist)

const ai_lc_t7: TopicLesson = {
  topicId: "ai-lc-t7",
  intro:
    "LangSmith is a platform for debugging, testing and monitoring LLM applications. " +
    "It gives you detailed traces of every chain, agent and prompt execution so you can find errors, " +
    "compare outputs and improve reliability.",
  blocks: [
    { type: "langchain-langsmith" },
    { type: "langchain-langsmith-guide" },
  ],
  keyTakeaways: [
    "Complete the quiz below to move on.",
  ],
};

// ─── Build all Module 2 lessons ──────────────────────────────────────────────

export const agenticAiLangChainLessons: Record<string, TopicLesson> = {
  "ai-lc-t1": ai_lc_t1,
  "ai-lc-t2": ai_lc_t2,
  "ai-lc-t4": ai_lc_t4,
  "ai-lc-t5": ai_lc_t5,
  "ai-lc-t6": ai_lc_t6,
  "ai-lc-t7": ai_lc_t7,
};
