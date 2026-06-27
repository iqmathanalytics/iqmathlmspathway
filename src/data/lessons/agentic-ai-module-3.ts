import type { TopicLesson } from "@/lib/types";
const ai_m3_t1: TopicLesson = {
  topicId: "ai-m3-t1",
  intro:
    "Groq provides fast hosted AI inference through its API. To call Groq from an app, you first need to create and securely store an API key.",
  blocks: [
    { type: "groq-api-key-guide" },
    { type: "groq-api-key-checklist" },
  ],
  keyTakeaways: ["Complete the quiz below to move on."],
};

function groqDocsLesson(topicId: "ai-m3-t2" | "ai-m3-t3" | "ai-m3-t4" | "ai-m3-t5", intro: string): TopicLesson {
  return {
    topicId,
    intro,
    blocks: [
      { type: "groq-docs-lesson", content: topicId },
      { type: "groq-docs-reference", content: topicId },
    ],
    keyTakeaways: ["Complete the quiz below to move on."],
  };
}

export const agenticAiModule3Lessons: Record<string, TopicLesson> = {
  "ai-m3-t1": ai_m3_t1,
  "ai-m3-t2": groqDocsLesson(
    "ai-m3-t2",
    "Use Groq's OpenAI-compatible API endpoint with the OpenAI SDK to send your first Responses API request."
  ),
  "ai-m3-t3": groqDocsLesson(
    "ai-m3-t3",
    "Learn how Groq API responses flow back into your app and how to extract generated text safely."
  ),
  "ai-m3-t4": groqDocsLesson(
    "ai-m3-t4",
    "Choose Groq models and features based on latency, reasoning quality, modality, and app requirements."
  ),
  "ai-m3-t5": groqDocsLesson(
    "ai-m3-t5",
    "Prepare Groq-powered apps for production with rate-limit handling, security, latency checks, and observability."
  ),
};
