import type { TopicQuiz } from "@/lib/types";

export const module8Quizzes: Record<string, TopicQuiz> = {
  "m8-t1": {
    topicId: "m8-t1",
    title: "Quick check: Dictionary Syntax",
    questions: [
      {
        id: "q1",
        question: "Which creates a dictionary?",
        options: ['[1, 2]', '{"x": 1}', "(1, 2)", "{1, 2}"],
        correctIndex: 1,
        explanation: "Dictionaries use key: value pairs inside {}.",
      },
      {
        id: "q2",
        question: "In {\"id\": 5}, what is the key?",
        options: ["5", "id", "id:", "value"],
        correctIndex: 1,
        explanation: "The key is id; the value is 5.",
      },
    ],
  },
  "m8-t2": {
    topicId: "m8-t2",
    title: "Quick check: Keys and Values",
    questions: [
      {
        id: "q1",
        question: "Can two keys in the same dict be identical?",
        options: ["Yes", "No", "Only for strings", "Only after update"],
        correctIndex: 1,
        explanation: "Keys must be unique; duplicate keys would overwrite.",
      },
      {
        id: "q2",
        question: "Can dictionary values be lists?",
        options: ["No", "Yes", "Only empty lists", "Only numbers"],
        correctIndex: 1,
        explanation: "Values can be any type, including lists and dicts.",
      },
    ],
  },
  "m8-t3": {
    topicId: "m8-t3",
    title: "Quick check: Accessing Dictionaries",
    questions: [
      {
        id: "q1",
        question: "d.get(\"x\", 0) returns 0 when:",
        options: ["x exists", "x is missing", "d is empty", "x is 0"],
        correctIndex: 1,
        explanation: "The second argument is the default if the key is absent.",
      },
      {
        id: "q2",
        question: "d[\"new\"] = 10 will:",
        options: [
          "Always cause an error",
          "Add or update key \"new\"",
          "Delete the dict",
          "Convert d to a list",
        ],
        correctIndex: 1,
        explanation: "Assignment adds a new key or replaces an existing value.",
      },
    ],
  },
  "m8-t4": {
    topicId: "m8-t4",
    title: "Quick check: Dictionary Methods",
    questions: [
      {
        id: "q1",
        question: "Which method returns (key, value) pairs for looping?",
        options: ["keys()", "values()", "items()", "pairs()"],
        correctIndex: 2,
        explanation: "items() yields tuples like (\"a\", 1).",
      },
      {
        id: "q2",
        question: "for k, v in d.items(): is used to:",
        options: [
          "Sort the dictionary",
          "Loop over keys and values together",
          "Delete all keys",
          "Copy the dictionary",
        ],
        correctIndex: 1,
        explanation: "items() supports simultaneous access to each key and value.",
      },
    ],
  },
};
