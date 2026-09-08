import type { TopicQuiz } from "@/lib/types";

export const module7Quizzes: Record<string, TopicQuiz> = {
  "m7-t1": {
    topicId: "m7-t1",
    title: "Quick check: Set Syntax",
    questions: [
      {
        id: "q1",
        question: "How do you make an empty set?",
        options: [
          "{}",
          "set()",
          "[]",
          "()",
        ],
        correctIndex: 1,
        explanation: "{} is a dict; set() is an empty set.",
      },
      {
        id: "q2",
        question: "What does {1, 2, 2, 3} become?",
        options: [
          "{1, 2, 2, 3}",
          "{1, 2, 3}",
          "[1, 2, 3]",
          "(1, 2, 3)",
        ],
        correctIndex: 1,
        explanation: "Duplicates are removed.",
      },
    ],
  },
  "m7-t2": {
    topicId: "m7-t2",
    title: "Quick check: Updating Sets",
    questions: [
      {
        id: "q1",
        question: "Which method adds one element?",
        options: [
          "append()",
          "add()",
          "push()",
          "insert()",
        ],
        correctIndex: 1,
        explanation: "set.add(x) inserts x if new.",
      },
      {
        id: "q2",
        question: "Which removes without error if missing?",
        options: [
          "remove()",
          "discard()",
          "pop_required()",
          "delete()",
        ],
        correctIndex: 1,
        explanation: "discard is safe when the item may be absent.",
      },
    ],
  },
  "m7-t3": {
    topicId: "m7-t3",
    title: "Quick check: Set Operations",
    questions: [
      {
        id: "q1",
        question: "What is a | b for sets?",
        options: [
          "Intersection",
          "Union",
          "Difference",
          "Subset test",
        ],
        correctIndex: 1,
        explanation: "| combines unique elements from both.",
      },
      {
        id: "q2",
        question: "What is a & b?",
        options: [
          "Union",
          "Intersection",
          "Symmetric difference",
          "Copy",
        ],
        correctIndex: 1,
        explanation: "& keeps only shared elements.",
      },
    ],
  },
  "m7-t4": {
    topicId: "m7-t4",
    title: "Module 7 Quiz",
    questions: [
      {
        id: "q1",
        question: "How do you create an empty set (not a dict)?",
        options: [
          "{}",
          "set()",
          "[]",
          "()",
        ],
        correctIndex: 1,
        explanation: "{} is an empty dict; use set() for an empty set.",
      },
      {
        id: "q2",
        question: "What method safely removes an item from a set without error if missing?",
        options: [
          "remove()",
          "discard()",
          "pop_safe()",
          "delete()",
        ],
        correctIndex: 1,
        explanation: "discard does nothing if the item is absent; remove raises KeyError.",
      },
      {
        id: "q3",
        question: "What does a & b return for two sets?",
        options: [
          "Union",
          "Intersection (common elements)",
          "Difference",
          "Symmetric difference",
        ],
        correctIndex: 1,
        explanation: "& / intersection() keeps elements in both sets.",
      },
      {
        id: "q4",
        question: "What does a - b return for sets?",
        options: [
          "Intersection",
          "Elements in a but not in b (difference)",
          "Union",
          "a unchanged",
        ],
        correctIndex: 1,
        explanation: "Difference removes anything that also appears in b.",
      },
      {
        id: "q5",
        question: "What does .issubset() check?",
        options: [
          "Whether the set is empty",
          "Whether every element is also in another set",
          "Whether sets are equal only",
          "Whether the set is sorted",
        ],
        correctIndex: 1,
        explanation: "a.issubset(b) is True if all of a's elements are in b.",
      },
      {
        id: "q6",
        question: "Can sets contain duplicate values?",
        options: [
          "Yes, freely",
          "No — duplicates are automatically removed",
          "Only strings",
          "Only if frozen",
        ],
        correctIndex: 1,
        explanation: "Sets store unique elements only.",
      },
      {
        id: "q7",
        question: "What does isdisjoint() return if two sets share no elements?",
        options: [
          "False",
          "True",
          "None",
          "The empty set",
        ],
        correctIndex: 1,
        explanation: "Disjoint means intersection is empty → True.",
      },
      {
        id: "q8",
        question: "What is {1, 2, 3} | {3, 4, 5}?",
        options: [
          "{3}",
          "{1, 2, 3, 4, 5}",
          "{1, 2, 4, 5}",
          "Error",
        ],
        correctIndex: 1,
        explanation: "| is union — all unique elements from both sets.",
      },
      {
        id: "q9",
        question: "What is {1, 2, 3} ^ {2, 3, 4}?",
        options: [
          "{2, 3}",
          "{1, 4}",
          "{1, 2, 3, 4}",
          "Empty set",
        ],
        correctIndex: 1,
        explanation: "^ is symmetric difference — elements in exactly one of the sets.",
      },
      {
        id: "q10",
        question: "Are sets ordered or unordered?",
        options: [
          "Ordered like lists",
          "Unordered (no guaranteed index order)",
          "Always sorted ascending",
          "Ordered only after add",
        ],
        correctIndex: 1,
        explanation: "Sets do not support indexing by position; order is not part of the contract.",
      },
    ],
  },
};
