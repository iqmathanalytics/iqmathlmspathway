import type { TopicQuiz } from "@/lib/types";

export const module6Quizzes: Record<string, TopicQuiz> = {
  "m6-t1": {
    topicId: "m6-t1",
    title: "Quick check: Tuple Syntax",
    questions: [
      {
        id: "q1",
        question: "How do you write a one-element tuple?",
        options: [
          "(1)",
          "(1,)",
          "[1]",
          "{1}",
        ],
        correctIndex: 1,
        explanation: "The trailing comma makes it a tuple.",
      },
      {
        id: "q2",
        question: "Which creates a tuple?",
        options: [
          "(1, 2)",
          "[1, 2]",
          "{1, 2}",
          "set((1,2)) only",
        ],
        correctIndex: 0,
        explanation: "Parentheses with commas create tuples.",
      },
    ],
  },
  "m6-t2": {
    topicId: "m6-t2",
    title: "Quick check: Tuple Properties",
    questions: [
      {
        id: "q1",
        question: "Can you change a tuple element after creation?",
        options: [
          "Yes",
          "No — tuples are immutable",
          "Only with append",
          "Only strings",
        ],
        correctIndex: 1,
        explanation: "Item assignment raises TypeError.",
      },
      {
        id: "q2",
        question: "Are tuples ordered?",
        options: [
          "No",
          "Yes",
          "Only if sorted",
          "Never",
        ],
        correctIndex: 1,
        explanation: "Order is preserved like lists.",
      },
    ],
  },
  "m6-t3": {
    topicId: "m6-t3",
    title: "Quick check: Indexing Tuples",
    questions: [
      {
        id: "q1",
        question: "What is (10, 20, 30)[1]?",
        options: [
          "10",
          "20",
          "30",
          "Error",
        ],
        correctIndex: 1,
        explanation: "Index 1 is the second element.",
      },
      {
        id: "q2",
        question: "Do negative indexes work on tuples?",
        options: [
          "No",
          "Yes",
          "Only -1 on lists",
          "Only in NumPy",
        ],
        correctIndex: 1,
        explanation: "Same indexing rules as sequences.",
      },
    ],
  },
  "m6-t4": {
    topicId: "m6-t4",
    title: "Quick check: Slicing Tuples",
    questions: [
      {
        id: "q1",
        question: "What does (1,2,3,4)[1:3] return?",
        options: [
          "(2, 3)",
          "(1, 2, 3)",
          "[2, 3]",
          "2",
        ],
        correctIndex: 0,
        explanation: "Slicing a tuple returns a tuple.",
      },
      {
        id: "q2",
        question: "Is the slice a new tuple?",
        options: [
          "No",
          "Yes",
          "It mutates the original",
          "It returns a list",
        ],
        correctIndex: 1,
        explanation: "Original tuple stays unchanged.",
      },
    ],
  },
  "m6-t5": {
    topicId: "m6-t5",
    title: "Module 6 Quiz",
    questions: [
      {
        id: "q1",
        question: "How do you create a tuple with one element?",
        options: [
          "(1)",
          "(1,)",
          "[1]",
          "{1}",
        ],
        correctIndex: 1,
        explanation: "A trailing comma is required: (1,) is a one-element tuple; (1) is just 1.",
      },
      {
        id: "q2",
        question: "Are tuples mutable or immutable?",
        options: [
          "Mutable",
          "Immutable",
          "Mutable only with append",
          "Immutable only if empty",
        ],
        correctIndex: 1,
        explanation: "You cannot assign to tuple indexes after creation.",
      },
      {
        id: "q3",
        question: "What does my_tuple.count(2) do?",
        options: [
          "Deletes all 2s",
          "Counts how many times 2 appears",
          "Returns the index of 2",
          "Sorts the tuple",
        ],
        correctIndex: 1,
        explanation: "count returns the number of occurrences of a value.",
      },
      {
        id: "q4",
        question: "What does my_tuple.index(3) return?",
        options: [
          "Always 3",
          "The first index where 3 appears",
          "A new tuple",
          "True/False",
        ],
        correctIndex: 1,
        explanation: "index finds the first position of the value (or raises ValueError).",
      },
      {
        id: "q5",
        question: "Can you slice a tuple like a list?",
        options: [
          "No",
          "Yes — slicing works the same way",
          "Only with negative steps",
          "Only in NumPy",
        ],
        correctIndex: 1,
        explanation: "Tuples support indexing and slicing; the result is a new tuple.",
      },
      {
        id: "q6",
        question: "What's the main use case for tuples over lists?",
        options: [
          "Faster sorting always",
          "Fixed, hashable collections of related values",
          "Storing only strings",
          "Replacing dictionaries",
        ],
        correctIndex: 1,
        explanation: "Immutability and hashability make tuples good for fixed records and dict keys.",
      },
      {
        id: "q7",
        question: "What is (1, 2) + (3, 4)?",
        options: [
          "(1, 2, 3, 4)",
          "(4, 6)",
          "Error",
          "[1, 2, 3, 4]",
        ],
        correctIndex: 0,
        explanation: "Tuple + concatenates into a new tuple.",
      },
      {
        id: "q8",
        question: "What does len((1, 2, 3)) return?",
        options: [
          "2",
          "3",
          "6",
          "1",
        ],
        correctIndex: 1,
        explanation: "len counts elements: three items → 3.",
      },
      {
        id: "q9",
        question: "Can tuples contain mixed data types?",
        options: [
          "No — only one type",
          "Yes — e.g. (1, 'a', True)",
          "Only ints and floats",
          "Only if nested",
        ],
        correctIndex: 1,
        explanation: "Each element can be any type, including other containers.",
      },
      {
        id: "q10",
        question: "What happens if you try my_tuple[0] = 5?",
        options: [
          "It updates silently",
          "TypeError — tuples do not support item assignment",
          "It converts to a list",
          "It appends 5",
        ],
        correctIndex: 1,
        explanation: "Assignment to a tuple index raises TypeError.",
      },
    ],
  },
};
