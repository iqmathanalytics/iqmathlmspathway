import type { TopicQuiz } from "@/lib/types";

export const module4Quizzes: Record<string, TopicQuiz> = {
  "m4-t1": {
    topicId: "m4-t1",
    title: "Quick check: Creating Strings",
    questions: [
      {
        id: "q1",
        question: "Which creates a string?",
        options: [
          "'hello'",
          "hello without quotes",
          "42 only",
          "{}",
        ],
        correctIndex: 0,
        explanation: "Quotes make a string literal.",
      },
      {
        id: "q2",
        question: "What do triple quotes allow?",
        options: [
          "Only integers",
          "Multiline strings",
          "Faster CPUs",
          "Imports",
        ],
        correctIndex: 1,
        explanation: "'''...''' or \"\"\"...\"\"\" span multiple lines.",
      },
    ],
  },
  "m4-t2": {
    topicId: "m4-t2",
    title: "Quick check: Formatting Strings",
    questions: [
      {
        id: "q1",
        question: "What is an f-string?",
        options: [
          "A string starting with f that can embed {expressions}",
          "A file format",
          "A float only",
          "A comment",
        ],
        correctIndex: 0,
        explanation: "f\"Hi {name}\" inserts values.",
      },
      {
        id: "q2",
        question: "Which embeds a variable into text most readably in modern Python?",
        options: [
          ".format() only",
          "f-strings",
          "%s only",
          "str.join only",
        ],
        correctIndex: 1,
        explanation: "f-strings are concise and preferred.",
      },
    ],
  },
  "m4-t3": {
    topicId: "m4-t3",
    title: "Quick check: Indexing Strings",
    questions: [
      {
        id: "q1",
        question: "What is \"abc\"[1]?",
        options: [
          "\"a\"",
          "\"b\"",
          "\"c\"",
          "Error",
        ],
        correctIndex: 1,
        explanation: "Index 1 is the second character.",
      },
      {
        id: "q2",
        question: "What is the index of the first character?",
        options: [
          "1",
          "0",
          "-0",
          "2",
        ],
        correctIndex: 1,
        explanation: "Python uses 0-based indexing.",
      },
    ],
  },
  "m4-t4": {
    topicId: "m4-t4",
    title: "Quick check: Slicing Strings",
    questions: [
      {
        id: "q1",
        question: "What is \"python\"[0:3]?",
        options: [
          "\"pyt\"",
          "\"thon\"",
          "\"python\"",
          "\"p\"",
        ],
        correctIndex: 0,
        explanation: "Slice stops before index 3.",
      },
      {
        id: "q2",
        question: "Does slicing return a new string?",
        options: [
          "No",
          "Yes",
          "Only sometimes",
          "It returns a list always",
        ],
        correctIndex: 1,
        explanation: "Strings are immutable; slices are new strings.",
      },
    ],
  },
  "m4-t5": {
    topicId: "m4-t5",
    title: "Module 4 Quiz",
    questions: [
      {
        id: "q1",
        question: "How can you create a string in Python?",
        options: [
          "Only with double quotes",
          "With single or double quotes (e.g. 'hi' or \"hi\")",
          "Only with curly braces",
          "Strings cannot be created",
        ],
        correctIndex: 1,
        explanation: "Both 'text' and \"text\" create strings; triple quotes allow multiline.",
      },
      {
        id: "q2",
        question: "What does f\"{name}\" do in an f-string?",
        options: [
          "Deletes name",
          "Inserts the value of name into the string",
          "Converts name to a list",
          "Comments out name",
        ],
        correctIndex: 1,
        explanation: "f-strings embed expressions inside {} into the resulting text.",
      },
      {
        id: "q3",
        question: "What is \"hello\"[0]?",
        options: [
          "\"o\"",
          "\"h\"",
          "\"hello\"",
          "Error",
        ],
        correctIndex: 1,
        explanation: "Indexing starts at 0; the first character is 'h'.",
      },
      {
        id: "q4",
        question: "What does \"hello\"[1:4] return?",
        options: [
          "\"hell\"",
          "\"ell\"",
          "\"ello\"",
          "\"h\"",
        ],
        correctIndex: 1,
        explanation: "Slice [1:4] takes indexes 1, 2, 3 → 'e', 'l', 'l'.",
      },
      {
        id: "q5",
        question: "What does .upper() do to a string?",
        options: [
          "Deletes it",
          "Returns a copy in uppercase letters",
          "Sorts the characters",
          "Converts it to an int",
        ],
        correctIndex: 1,
        explanation: "\"hello\".upper() returns \"HELLO\".",
      },
      {
        id: "q6",
        question: "What does .strip() remove?",
        options: [
          "All vowels",
          "Leading and trailing whitespace (by default)",
          "The middle character only",
          "Numbers only",
        ],
        correctIndex: 1,
        explanation: "strip() trims whitespace from both ends of the string.",
      },
      {
        id: "q7",
        question: "What does len(\"data\") return?",
        options: [
          "3",
          "4",
          "5",
          "\"data\"",
        ],
        correctIndex: 1,
        explanation: "len counts characters; 'data' has 4.",
      },
      {
        id: "q8",
        question: "What does .split(\",\") do?",
        options: [
          "Joins with commas",
          "Splits the string into a list at each comma",
          "Removes all commas permanently from Python",
          "Converts to int",
        ],
        correctIndex: 1,
        explanation: "\"a,b,c\".split(\",\") → [\"a\", \"b\", \"c\"].",
      },
      {
        id: "q9",
        question: "Are strings mutable or immutable in Python?",
        options: [
          "Mutable — you can change characters in place",
          "Immutable — you create new strings instead",
          "Mutable only in Jupyter",
          "Neither",
        ],
        correctIndex: 1,
        explanation: "You cannot change a character in place; methods return new strings.",
      },
      {
        id: "q10",
        question: "What does .replace(\"a\", \"b\") do?",
        options: [
          "Deletes the string",
          "Returns a new string with 'a' replaced by 'b'",
          "Sorts letters alphabetically",
          "Converts to a list",
        ],
        correctIndex: 1,
        explanation: "replace returns a new string with substitutions applied.",
      },
    ],
  },
};
