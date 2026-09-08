import type { TopicQuiz } from "@/lib/types";

export const module8Quizzes: Record<string, TopicQuiz> = {
  "m8-t1": {
    topicId: "m8-t1",
    title: "Quick check: Dictionary Syntax",
    questions: [
      {
        id: "q1",
        question: "How do you write an empty dict?",
        options: [
          "set()",
          "[]",
          "{}",
          "()",
        ],
        correctIndex: 2,
        explanation: "{} or dict() creates an empty dictionary.",
      },
      {
        id: "q2",
        question: "What does {'a': 1} store?",
        options: [
          "Only keys",
          "A key mapped to a value",
          "A list",
          "A set",
        ],
        correctIndex: 1,
        explanation: "Dictionaries map keys to values.",
      },
    ],
  },
  "m8-t2": {
    topicId: "m8-t2",
    title: "Quick check: Keys and Values",
    questions: [
      {
        id: "q1",
        question: "What does .keys() give you?",
        options: [
          "Values only",
          "A view of keys",
          "Items only",
          "JSON",
        ],
        correctIndex: 1,
        explanation: "keys() lists the dictionary's keys.",
      },
      {
        id: "q2",
        question: "What does .values() give you?",
        options: [
          "Keys only",
          "A view of values",
          "File paths",
          "Indexes",
        ],
        correctIndex: 1,
        explanation: "values() exposes stored values.",
      },
    ],
  },
  "m8-t3": {
    topicId: "m8-t3",
    title: "Quick check: Accessing Dictionaries",
    questions: [
      {
        id: "q1",
        question: "What does d.get(\"x\", 0) return if \"x\" is missing?",
        options: [
          "KeyError",
          "0",
          "None always",
          "False",
        ],
        correctIndex: 1,
        explanation: "get returns the default when the key is absent.",
      },
      {
        id: "q2",
        question: "What does d[\"missing\"] raise if absent?",
        options: [
          "ValueError",
          "KeyError",
          "IndexError",
          "Nothing",
        ],
        correctIndex: 1,
        explanation: "Bracket access requires the key to exist.",
      },
    ],
  },
  "m8-t4": {
    topicId: "m8-t4",
    title: "Quick check: Dictionary Methods",
    questions: [
      {
        id: "q1",
        question: "What does pop('k') do?",
        options: [
          "Only reads k",
          "Removes k and returns its value",
          "Clears all keys",
          "Sorts keys",
        ],
        correctIndex: 1,
        explanation: "pop deletes one entry.",
      },
      {
        id: "q2",
        question: "What does update() do?",
        options: [
          "Deletes the dict",
          "Merges another mapping in",
          "Converts to list",
          "Plots values",
        ],
        correctIndex: 1,
        explanation: "update adds/overwrites pairs.",
      },
    ],
  },
  "m8-t5": {
    topicId: "m8-t5",
    title: "Module 8 Quiz",
    questions: [
      {
        id: "q1",
        question: "How do you access a dictionary value safely without a KeyError?",
        options: [
          "d[\"key\"] only",
          "d.get(\"key\") (optionally with a default)",
          "d.popitem() always",
          "d.keys()[0]",
        ],
        correctIndex: 1,
        explanation: "get returns None (or a default) when the key is missing.",
      },
      {
        id: "q2",
        question: "What does .items() return?",
        options: [
          "Only keys",
          "Key-value pairs (view of (key, value) tuples)",
          "Only values",
          "A sorted list always",
        ],
        correctIndex: 1,
        explanation: "items() is useful for looping over both key and value.",
      },
      {
        id: "q3",
        question: "Can dictionary keys be lists? Why or why not?",
        options: [
          "Yes — lists are fine",
          "No — keys must be hashable; lists are mutable",
          "Yes — only empty lists",
          "No — only because keys must be strings",
        ],
        correctIndex: 1,
        explanation: "Hashable types (str, int, tuple of hashables) work; lists do not.",
      },
      {
        id: "q4",
        question: "What does .pop(\"key\") do?",
        options: [
          "Only returns the key",
          "Removes the key and returns its value",
          "Clears the whole dict",
          "Renames the key",
        ],
        correctIndex: 1,
        explanation: "pop deletes the entry; KeyError if missing (unless a default is given).",
      },
      {
        id: "q5",
        question: "What does .update() do to a dictionary?",
        options: [
          "Sorts keys",
          "Merges another mapping's pairs into it",
          "Removes duplicates only",
          "Converts values to strings",
        ],
        correctIndex: 1,
        explanation: "update adds/overwrites keys from another dict or iterable of pairs.",
      },
      {
        id: "q6",
        question: "How do you create an empty dictionary?",
        options: [
          "set()",
          "[]",
          "{} or dict()",
          "()",
        ],
        correctIndex: 2,
        explanation: "Both {} and dict() create an empty dict.",
      },
      {
        id: "q7",
        question: "What error is raised accessing a missing key with d[\"key\"]?",
        options: [
          "ValueError",
          "KeyError",
          "IndexError",
          "TypeError",
        ],
        correctIndex: 1,
        explanation: "Missing keys with [] raise KeyError.",
      },
      {
        id: "q8",
        question: "Can dictionary values be other dictionaries?",
        options: [
          "No",
          "Yes — nested dictionaries are allowed",
          "Only if keys are ints",
          "Only in Pandas",
        ],
        correctIndex: 1,
        explanation: "Values can be any type, including nested dicts.",
      },
      {
        id: "q9",
        question: "What does .keys() return?",
        options: [
          "A list of values",
          "A view of the dictionary's keys",
          "The first key only",
          "Sorted unique values",
        ],
        correctIndex: 1,
        explanation: "keys() is a dynamic view of current keys.",
      },
      {
        id: "q10",
        question: "How do you check if a key exists in a dictionary?",
        options: [
          "\"key\" in d",
          "d.contains(\"key\")",
          "d.has(\"key\")",
          "key in d.values()",
        ],
        correctIndex: 0,
        explanation: "Use the in operator on the dict (checks keys).",
      },
    ],
  },
};
