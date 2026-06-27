import type { TopicLesson } from "@/lib/types";

// Module 1 lesson 1 follows the custom Module 2 format:
// left side = rich visual content, right side = compact concept reference.
const ai_m1_t1: TopicLesson = {
  topicId: "ai-m1-t1",
  intro:
    "Artificial Intelligence enables machines to learn from data, recognize patterns, and make decisions for complex problems.",
  blocks: [
    { type: "ai-intro" },
    {
      type: "concept-card",
      content: "What is Artificial Intelligence?",
      conceptSummary: {
        hook:
          "AI is technology that enables machines and computers to perform tasks that typically require human intelligence.",
        outcome:
          "You will understand core AI concepts, how AI systems learn, the main types of AI, and where AI is used.",
        steps: ["Collect data", "Learn patterns", "Make decisions"],
        example:
          "An image recognition system studies labeled cat photos, learns visual patterns, and decides whether a new image contains a cat.",
        caution:
          "AI systems can be biased, opaque, or wrong when data is poor, incomplete, or used without responsible oversight.",
      },
    },
  ],
  keyTakeaways: ["Complete the quiz below to move on."],
};

const ai_m1_t2: TopicLesson = {
  topicId: "ai-m1-t2",
  intro:
    "Large Language Models are advanced AI systems that process, understand, and generate human-like text using deep neural networks.",
  blocks: [
    { type: "llm-intro" },
    {
      type: "concept-card",
      content: "Large Language Model (LLM)",
      conceptSummary: {
        hook:
          "An LLM is an advanced AI system trained on massive text datasets to understand context and generate human-like text.",
        outcome:
          "You will understand how LLMs work, which popular models exist, where they are used, and what their strengths and limitations are.",
        steps: ["Text becomes vectors", "Attention reads context", "Tokens are generated"],
        example:
          "A coding assistant reads your request, uses language patterns and context to draft code, then generates the answer step by step.",
        caution:
          "LLMs can be expensive to train, biased by their data, energy-intensive, and capable of producing confident misinformation.",
      },
    },
  ],
  keyTakeaways: ["Complete the quiz below to move on."],
};

const ai_m1_t3: TopicLesson = {
  topicId: "ai-m1-t3",
  intro:
    "LLM orchestration coordinates prompts, models, tools, memory, retrieval, monitoring, and reliability for real AI applications.",
  blocks: [
    { type: "llm-orchestration" },
    {
      type: "concept-card",
      content: "What is LLM Orchestration?",
      conceptSummary: {
        hook:
          "LLM orchestration is the layer that manages, coordinates, and optimizes LLM use across AI-driven application workflows.",
        outcome:
          "You will understand why orchestration is needed, how the orchestration layer works, what capabilities it provides, and which frameworks are commonly used.",
        steps: ["Manage prompts", "Coordinate tools", "Monitor workflows"],
        example:
          "A support chatbot can retrieve policy data, route a question to the right model, preserve conversation memory, call tools, and monitor latency through an orchestration layer.",
        caution:
          "Without orchestration, multi-step LLM apps can become fragile, expensive, hard to debug, and difficult to secure.",
      },
    },
  ],
  keyTakeaways: ["Complete the quiz below to move on."],
};

const ai_m1_t4: TopicLesson = {
  topicId: "ai-m1-t4",
  intro:
    "Explore the top 20 LLM model families, their creators, strengths, architectures, and practical trade-offs.",
  blocks: [
    { type: "top-llm-models" },
    {
      type: "concept-card",
      content: "Top 20 LLM Models",
      conceptSummary: {
        hook:
          "Popular LLMs differ by model size, training data, architecture, license, cost, openness, and the tasks they are optimized for.",
        outcome:
          "You will compare major LLM families and understand why model choice depends on reasoning quality, context length, openness, speed, safety, and deployment needs.",
        steps: ["Compare providers", "Match strengths", "Choose for the task"],
        example:
          "A startup might test GPT-4 for reasoning, LLaMA or Mistral for open-source deployment, and Cohere for enterprise customization.",
        caution:
          "Model rankings change quickly. Always test the model on your exact task instead of choosing only by popularity.",
      },
    },
  ],
  keyTakeaways: ["Complete the quiz below to move on."],
};

export const agenticAiModule1Lessons: Record<string, TopicLesson> = {
  "ai-m1-t1": ai_m1_t1,
  "ai-m1-t2": ai_m1_t2,
  "ai-m1-t3": ai_m1_t3,
  "ai-m1-t4": ai_m1_t4,
};
