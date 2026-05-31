import type { TopicQuiz } from "@/lib/types";

export const module4Quizzes: Record<string, TopicQuiz> = {
  "m4-t1": {
    topicId: "m4-t1",
    title: "Quick check: Creating Strings",
    questions: [
      {
        id: "q1",
        question: "Which creates a valid Python string?",
        options: ['42', '"hello"', "True", "x = 5"],
        correctIndex: 1,
        explanation: "Text in quotes is a string. 42 is a number; True is bool.",
      },
      {
        id: "q2",
        question: "Why use triple quotes \"\"\" \"\"\"?",
        options: ["For numbers only", "For multiline text", "To make code faster", "To delete strings"],
        correctIndex: 1,
        explanation: "Triple quotes allow strings across multiple lines.",
      },
    ],
  },
  "m4-t2": {
    topicId: "m4-t2",
    title: "Quick check: Formatting Strings",
    questions: [
      {
        id: "q1",
        question: 'With name = "Ann", what does print(f"Hi {name}") show?',
        options: ["Hi {name}", "Hi Ann", "Hi name", "Error"],
        correctIndex: 1,
        explanation: "f-strings replace {name} with the variable's value.",
      },
      {
        id: "q2",
        question: "What letter must come right before the opening quote in an f-string?",
        options: ["x", "f", "s", "d"],
        correctIndex: 1,
        explanation: 'The f prefix enables formatting: f"Hello {name}".',
      },
    ],
  },
  "m4-t3": {
    topicId: "m4-t3",
    title: "Quick check: Indexing Strings",
    questions: [
      {
        id: "q1",
        question: 'What is word[0] when word = "cat"?',
        options: ["c", "a", "t", "cat"],
        correctIndex: 0,
        explanation: "Index 0 is the first character: c.",
      },
      {
        id: "q2",
        question: "What does index -1 give you?",
        options: ["First character", "Last character", "Middle character", "Error always"],
        correctIndex: 1,
        explanation: "-1 means the last character in the string.",
      },
    ],
  },
  "m4-t4": {
    topicId: "m4-t4",
    title: "Quick check: Slicing Strings",
    questions: [
      {
        id: "q1",
        question: 'What is "Python"[0:3]?',
        options: ["Pyt", "Python", "thon", "Py"],
        correctIndex: 0,
        explanation: "Characters at indexes 0, 1, 2 — not including 3.",
      },
      {
        id: "q2",
        question: "In [start:end], is end included?",
        options: ["Yes, always", "No, end is excluded", "Only on Sundays", "Only for numbers"],
        correctIndex: 1,
        explanation: "The end index is where slicing stops — that position is not included.",
      },
    ],
  },
  "m4-t5": {
    topicId: "m4-t5",
    title: "Quick check: String Methods",
    questions: [
      {
        id: "q1",
        question: '"  hi  ".strip() returns?',
        options: ['"  hi  "', '"hi"', '"HI"', "Error"],
        correctIndex: 1,
        explanation: "strip() removes leading and trailing whitespace.",
      },
      {
        id: "q2",
        question: '"a,b,c".split(",") returns?',
        options: ['"a,b,c"', '["a", "b", "c"]', "abc", "3"],
        correctIndex: 1,
        explanation: "split breaks the string into a list at each comma.",
      },
    ],
  },
};
