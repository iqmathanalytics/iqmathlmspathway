import type { TopicQuiz } from "@/lib/types";

export const module9Quizzes: Record<string, TopicQuiz> = {
  "m9-t1": {
    topicId: "m9-t1",
    title: "Quick check: if Statement",
    questions: [
      {
        id: "q1",
        question: "What must appear at the end of an if line?",
        options: ["Semicolon ;", "Colon :", "Comma ,", "Period ."],
        correctIndex: 1,
        explanation: "Python uses a colon before the indented block.",
      },
      {
        id: "q2",
        question: "When does the if block run?",
        options: [
          "Always",
          "When the condition is True",
          "When the condition is False",
          "Only once per program",
        ],
        correctIndex: 1,
        explanation: "The indented block executes only if the condition evaluates to True.",
      },
    ],
  },
  "m9-t2": {
    topicId: "m9-t2",
    title: "Quick check: if-else",
    questions: [
      {
        id: "q1",
        question: "How many blocks run in a simple if-else?",
        options: ["Both always", "Exactly one", "None", "Two always"],
        correctIndex: 1,
        explanation: "Either the if block or the else block runs — never both.",
      },
      {
        id: "q2",
        question: "else runs when:",
        options: [
          "The if condition is True",
          "The if condition is False",
          "Always after if",
          "Only on errors",
        ],
        correctIndex: 1,
        explanation: "else handles the case when the if condition was False.",
      },
    ],
  },
  "m9-t3": {
    topicId: "m9-t3",
    title: "Quick check: if-elif-else",
    questions: [
      {
        id: "q1",
        question: "With multiple elif branches, which runs?",
        options: [
          "All matching branches",
          "The first matching branch only",
          "The last branch only",
          "Random branch",
        ],
        correctIndex: 1,
        explanation: "Python stops at the first True condition.",
      },
      {
        id: "q2",
        question: "elif means:",
        options: ["Else forever", "Else if (another condition)", "End if", "Error"],
        correctIndex: 1,
        explanation: "elif checks another condition when previous ones were False.",
      },
    ],
  },
};
