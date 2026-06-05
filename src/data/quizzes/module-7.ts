import type { TopicQuiz } from "@/lib/types";

export const module7Quizzes: Record<string, TopicQuiz> = {
  "m7-t1": {
    topicId: "m7-t1",
    title: "Quick check: Set Syntax",
    questions: [
      {
        id: "q1",
        question: "What is {1, 2, 2, 3} in Python?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "{1, 2, 2, 3}"],
        correctIndex: 1,
        explanation: "Sets remove duplicates; result is {1, 2, 3}.",
      },
      {
        id: "q2",
        question: "How do you create an empty set?",
        options: ["{}", "set()", "[]", "empty()"],
        correctIndex: 1,
        explanation: "{} creates an empty dict; use set() for an empty set.",
      },
    ],
  },
  "m7-t2": {
    topicId: "m7-t2",
    title: "Quick check: Updating Sets",
    questions: [
      {
        id: "q1",
        question: "Which adds an item without error if it already exists?",
        options: ["add()", "remove()", "pop()", "clear()"],
        correctIndex: 0,
        explanation: "add() inserts if missing; duplicates are ignored.",
      },
      {
        id: "q2",
        question: "remove() vs discard() — main difference?",
        options: [
          "remove() is faster",
          "discard() does not raise error if item is missing",
          "discard() only works on numbers",
          "They are identical",
        ],
        correctIndex: 1,
        explanation: "discard() silently does nothing when the item is absent.",
      },
    ],
  },
  "m7-t3": {
    topicId: "m7-t3",
    title: "Quick check: Set Operations",
    questions: [
      {
        id: "q1",
        question: "What does {1, 2} & {2, 3} give?",
        options: ["{1, 2, 3}", "{2}", "{1, 3}", "{1, 2, 2, 3}"],
        correctIndex: 1,
        explanation: "& is intersection — only shared element is 2.",
      },
      {
        id: "q2",
        question: "A | B means:",
        options: ["Intersection", "Union", "Difference", "Subset"],
        correctIndex: 1,
        explanation: "| combines all unique items from both sets.",
      },
    ],
  },
  "m7-t4": {
    topicId: "m7-t4",
    title: "Quick check: Set Methods",
    questions: [
      {
        id: "q1",
        question: "a.isdisjoint(b) is True when:",
        options: [
          "Sets share every item",
          "Sets share no items",
          "a is larger than b",
          "b is empty",
        ],
        correctIndex: 1,
        explanation: "Disjoint means no elements in common.",
      },
      {
        id: "q2",
        question: "Removing duplicates from a list is often done with:",
        options: ["list.sort()", "set()", "tuple()", "dict()"],
        correctIndex: 1,
        explanation: "set(items) keeps unique values; wrap in list() if needed.",
      },
    ],
  },
};
