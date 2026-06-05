import type { TopicQuiz } from "@/lib/types";

export const module10Quizzes: Record<string, TopicQuiz> = {
  "m10-t1": {
    topicId: "m10-t1",
    title: "Quick check: while Loop",
    questions: [
      {
        id: "q1",
        question: "A while loop runs while the condition is:",
        options: ["False", "True", "Zero", "None"],
        correctIndex: 1,
        explanation: "The body repeats as long as the condition evaluates to True.",
      },
      {
        id: "q2",
        question: "What causes an infinite while loop?",
        options: [
          "Condition never becomes False",
          "Using print inside",
          "Indentation with 4 spaces",
          "Using integers",
        ],
        correctIndex: 0,
        explanation: "If the condition stays True forever, the loop never stops.",
      },
    ],
  },
  "m10-t2": {
    topicId: "m10-t2",
    title: "Quick check: for Loop",
    questions: [
      {
        id: "q1",
        question: "for x in [1, 2, 3]: runs the body how many times?",
        options: ["1", "2", "3", "0"],
        correctIndex: 2,
        explanation: "Once per item in the sequence — three times here.",
      },
      {
        id: "q2",
        question: "for char in \"ab\": prints how many lines?",
        options: ["1", "2", "3", "0"],
        correctIndex: 1,
        explanation: "Two characters → two iterations.",
      },
    ],
  },
  "m10-t3": {
    topicId: "m10-t3",
    title: "Quick check: break and continue",
    questions: [
      {
        id: "q1",
        question: "break in a loop:",
        options: [
          "Skips one iteration",
          "Exits the loop entirely",
          "Restarts the program",
          "Pauses for input",
        ],
        correctIndex: 1,
        explanation: "break stops the loop and continues after it.",
      },
      {
        id: "q2",
        question: "continue in a loop:",
        options: [
          "Exits the loop",
          "Skips to the next iteration",
          "Repeats forever",
          "Prints twice",
        ],
        correctIndex: 1,
        explanation: "continue jumps to the next cycle without finishing the current one.",
      },
    ],
  },
  "m10-t4": {
    topicId: "m10-t4",
    title: "Quick check: pass",
    questions: [
      {
        id: "q1",
        question: "What does pass do?",
        options: [
          "Exits the program",
          "Nothing — placeholder",
          "Skips the next line",
          "Prints debug info",
        ],
        correctIndex: 1,
        explanation: "pass is a no-op used to satisfy syntax.",
      },
      {
        id: "q2",
        question: "Why use pass in an if block?",
        options: [
          "To make code faster",
          "When the block is required but not implemented yet",
          "To break loops",
          "To import modules",
        ],
        correctIndex: 1,
        explanation: "Python needs a body; pass fills an empty block temporarily.",
      },
    ],
  },
  "m10-t5": {
    topicId: "m10-t5",
    title: "Quick check: range()",
    questions: [
      {
        id: "q1",
        question: "list(range(3)) equals:",
        options: ["[1, 2, 3]", "[0, 1, 2]", "[3]", "[0, 1, 2, 3]"],
        correctIndex: 1,
        explanation: "range(3) produces 0, 1, 2 — stop is excluded.",
      },
      {
        id: "q2",
        question: "range(2, 5) includes which numbers?",
        options: ["2, 3, 4", "2, 3, 4, 5", "2, 5", "3, 4, 5"],
        correctIndex: 0,
        explanation: "Start 2 inclusive, stop 5 exclusive → 2, 3, 4.",
      },
    ],
  },
};
