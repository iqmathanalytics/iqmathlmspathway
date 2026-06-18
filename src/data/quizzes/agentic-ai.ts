import type { TopicQuiz } from "@/lib/types";
import { AGENTIC_AI_TOPIC_GUIDES } from "@/data/agentic-ai-topic-guides";

function buildAgenticAiQuiz(topicId: string): TopicQuiz {
  const guide = AGENTIC_AI_TOPIC_GUIDES[topicId];

  return {
    topicId,
    title: `Quick check: ${guide.title}`,
    questions: [
      {
        id: "q1",
        question: `What is the main goal of "${guide.title}"?`,
        options: [
          guide.outcome,
          "Memorize provider names without building anything.",
          "Skip the pattern and only copy a final answer.",
          "Use AI output without checking it.",
        ],
        correctIndex: 0,
        explanation: guide.outcome,
      },
      {
        id: "q2",
        question: `Which sequence best matches the "${guide.title}" pattern?`,
        options: [
          guide.steps.join(" → "),
          [...guide.steps].reverse().join(" → "),
          "Guess the answer → hide the source → deploy immediately",
          "Ignore the prompt → call random tools → accept any output",
        ],
        correctIndex: 0,
        explanation: `The lesson pattern is: ${guide.steps.join(" → ")}.`,
      },
      {
        id: "q3",
        question: "What should you watch out for in this topic?",
        options: [
          guide.caution,
          "Longer prompts are always better than clear prompts.",
          "If the model sounds confident, it is always correct.",
          "AI apps do not need tests once they work once.",
        ],
        correctIndex: 0,
        explanation: guide.caution,
      },
    ],
  };
}

export const agenticAiQuizzes: Record<string, TopicQuiz> = Object.fromEntries(
  Object.keys(AGENTIC_AI_TOPIC_GUIDES).map((topicId) => [
    topicId,
    buildAgenticAiQuiz(topicId),
  ])
);
