import type { TopicQuiz } from "@/lib/types";

export const module6Quizzes: Record<string, TopicQuiz> = {
  "m6-t1": {
    topicId: "m6-t1",
    title: "Quick check: Tuple Syntax",
    questions: [
      {
        id: "q1",
        question: "Which creates a valid one-element tuple?",
        options: ["(42)", "(42,)", "[42]", "{42}"],
        correctIndex: 1,
        explanation: "A single-element tuple needs a trailing comma: (42,).",
      },
      {
        id: "q2",
        question: "How are tuples written in Python?",
        options: ["Square brackets", "Parentheses", "Curly braces", "Angle brackets"],
        correctIndex: 1,
        explanation: "Tuples use parentheses with comma-separated values.",
      },
    ],
  },
  "m6-t2": {
    topicId: "m6-t2",
    title: "Quick check: Tuple Properties",
    questions: [
      {
        id: "q1",
        question: "What does immutable mean for a tuple?",
        options: [
          "Items can be changed anytime",
          "Items cannot be changed after creation",
          "Items are always strings",
          "Items have no order",
        ],
        correctIndex: 1,
        explanation: "Immutable means the tuple's contents are fixed once created.",
      },
      {
        id: "q2",
        question: "Can a tuple contain duplicate values?",
        options: ["No", "Yes", "Only numbers", "Only one item"],
        correctIndex: 1,
        explanation: "Tuples allow duplicates, like lists.",
      },
    ],
  },
  "m6-t3": {
    topicId: "m6-t3",
    title: "Quick check: Indexing Tuples",
    questions: [
      {
        id: "q1",
        question: 'What is ("a", "b", "c")[1]?',
        options: ["a", "b", "c", "1"],
        correctIndex: 1,
        explanation: "Index 1 is the second element: b.",
      },
      {
        id: "q2",
        question: "Which index returns the last element?",
        options: ["0", "1", "-1", "last"],
        correctIndex: 2,
        explanation: "-1 refers to the last item in the tuple.",
      },
    ],
  },
  "m6-t4": {
    topicId: "m6-t4",
    title: "Quick check: Slicing Tuples",
    questions: [
      {
        id: "q1",
        question: "What is (1, 2, 3, 4)[1:3]?",
        options: ["(1, 2)", "(2, 3)", "(2, 3, 4)", "(1, 2, 3)"],
        correctIndex: 1,
        explanation: "Indexes 1 and 2 — end index 3 is excluded.",
      },
      {
        id: "q2",
        question: "Does slicing modify the original tuple?",
        options: [
          "Yes, always",
          "No, it returns a new tuple",
          "Only for lists",
          "Only with negative indexes",
        ],
        correctIndex: 1,
        explanation: "Slicing produces a new tuple; the original is unchanged.",
      },
    ],
  },
  "m6-t5": {
    topicId: "m6-t5",
    title: "Quick check: Tuple Methods",
    questions: [
      {
        id: "q1",
        question: "What does (1, 2, 2, 3).count(2) return?",
        options: ["1", "2", "3", "4"],
        correctIndex: 1,
        explanation: "The value 2 appears twice in the tuple.",
      },
      {
        id: "q2",
        question: "Which are tuple methods?",
        options: [
          "append() and pop()",
          "count() and index()",
          "sort() and reverse()",
          "keys() and values()",
        ],
        correctIndex: 1,
        explanation: "Tuples only provide count() and index() among common methods.",
      },
    ],
  },
};
