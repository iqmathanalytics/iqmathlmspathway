import type { TopicQuiz } from "@/lib/types";

export const module13Quizzes: Record<string, TopicQuiz> = {
  "m13-t1": {
    topicId: "m13-t1",
    title: "Quick check: Lambda Functions",
    questions: [
      {
        id: "q1",
        question: "lambda x: x + 1 is equivalent to:",
        options: [
          "A function that returns x + 1",
          "A list comprehension",
          "A variable assignment only",
          "A class definition",
        ],
        correctIndex: 0,
        explanation: "Lambda creates a function; calling it with x returns x + 1.",
      },
      {
        id: "q2",
        question: "Which is NOT valid in a lambda body?",
        options: [
          "x * 2",
          "len(name)",
          "print('hi') as the only line",
          "a + b",
        ],
        correctIndex: 2,
        explanation: "Lambda bodies must be a single expression — print() is a statement, not an expression result.",
      },
    ],
  },
};
