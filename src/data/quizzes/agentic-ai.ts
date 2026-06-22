import type { TopicQuiz } from "@/lib/types";
import { AGENTIC_AI_TOPIC_GUIDES } from "@/data/agentic-ai-topic-guides";

function questionWithAnswerAt(
  question: string,
  correctAnswer: string,
  distractors: string[],
  correctIndex: number,
  explanation: string,
  id: string
) {
  const options = [...distractors];
  options.splice(correctIndex, 0, correctAnswer);

  return {
    id,
    question,
    options,
    correctIndex,
    explanation,
  };
}

function seededHash(seed: string): number {
  let hash = 2166136261;
  for (const char of seed) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return hash;
}

function shuffledAnswerIndexes(topicId: string): number[] {
  const indexes = [0, 1, 2, 3];

  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = seededHash(`${topicId}:agentic-ai-quiz-options:${i}`) % (i + 1);
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }

  return indexes;
}

function buildAgenticAiQuiz(topicId: string): TopicQuiz {
  const guide = AGENTIC_AI_TOPIC_GUIDES[topicId];
  const answerIndexes = shuffledAnswerIndexes(topicId);

  return {
    topicId,
    title: `Quick check: ${guide.title}`,
    questions: [
      questionWithAnswerAt(
        `What is the main goal of "${guide.title}"?`,
        guide.outcome,
        [
          "Memorize provider names without building anything.",
          "Skip the pattern and only copy a final answer.",
          "Use AI output without checking it.",
        ],
        answerIndexes[0],
        guide.outcome,
        "q1"
      ),
      questionWithAnswerAt(
        `Which sequence best matches the "${guide.title}" pattern?`,
        guide.steps.join(" → "),
        [
          [...guide.steps].reverse().join(" → "),
          "Guess the answer → hide the source → deploy immediately",
          "Ignore the prompt → call random tools → accept any output",
        ],
        answerIndexes[1],
        `The lesson pattern is: ${guide.steps.join(" → ")}.`,
        "q2"
      ),
      questionWithAnswerAt(
        "What should you watch out for in this topic?",
        guide.caution,
        [
          "Longer prompts are always better than clear prompts.",
          "If the model sounds confident, it is always correct.",
          "AI apps do not need tests once they work once.",
        ],
        answerIndexes[2],
        guide.caution,
        "q3"
      ),
    ],
  };
}

export const agenticAiQuizzes: Record<string, TopicQuiz> = Object.fromEntries(
  Object.keys(AGENTIC_AI_TOPIC_GUIDES).map((topicId) => [
    topicId,
    buildAgenticAiQuiz(topicId),
  ])
);
