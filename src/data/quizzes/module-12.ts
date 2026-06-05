import type { TopicQuiz } from "@/lib/types";

export const module12Quizzes: Record<string, TopicQuiz> = {
  "m12-t1": {
    topicId: "m12-t1",
    title: "Quick check: Creating Functions",
    questions: [
      {
        id: "q1",
        question: "Which keyword starts a function definition?",
        options: ["function", "def", "func", "define"],
        correctIndex: 1,
        explanation: "Python uses def followed by the function name and parentheses.",
      },
      {
        id: "q2",
        question: "What does a function return if there is no return statement?",
        options: ["0", "False", "None", "An empty string"],
        correctIndex: 2,
        explanation: "Functions without return implicitly return None.",
      },
    ],
  },
  "m12-t2": {
    topicId: "m12-t2",
    title: "Quick check: Calling Functions",
    questions: [
      {
        id: "q1",
        question: "How do you call a function named process?",
        options: ["call process", "process", "process()", "def process()"],
        correctIndex: 2,
        explanation: "Use the name followed by parentheses, with arguments inside if needed.",
      },
      {
        id: "q2",
        question: "If add(2, 3) returns 5, what is x after x = add(2, 3)?",
        options: ["2", "3", "5", "None"],
        correctIndex: 2,
        explanation: "The return value is assigned to x.",
      },
    ],
  },
  "m12-t3": {
    topicId: "m12-t3",
    title: "Quick check: Function Arguments",
    questions: [
      {
        id: "q1",
        question: "def f(a, b=10): — calling f(5) sets a and b to:",
        options: ["5 and 10", "10 and 5", "5 and 5", "Error"],
        correctIndex: 0,
        explanation: "a gets the positional 5; b uses its default 10.",
      },
      {
        id: "q2",
        question: "Keyword arguments match parameters by:",
        options: ["Order only", "Name", "Type", "Length"],
        correctIndex: 1,
        explanation: "name=value passes by parameter name.",
      },
    ],
  },
  "m12-t4": {
    topicId: "m12-t4",
    title: "Quick check: Variables in Functions",
    questions: [
      {
        id: "q1",
        question: "A variable assigned inside a function is:",
        options: ["Global always", "Local to that function", "Shared by all modules", "Read-only"],
        correctIndex: 1,
        explanation: "Assignments in the function body create local names.",
      },
      {
        id: "q2",
        question: "Why avoid modifying global variables inside functions?",
        options: [
          "Python forbids it",
          "It makes behavior harder to track and test",
          "Globals are always read-only",
          "It speeds up recursion",
        ],
        correctIndex: 1,
        explanation: "Passing arguments and returning values keeps logic explicit.",
      },
    ],
  },
  "m12-t5": {
    topicId: "m12-t5",
    title: "Quick check: Recursion",
    questions: [
      {
        id: "q1",
        question: "A recursive function must have:",
        options: [
          "At least three parameters",
          "A base case",
          "No return statement",
          "A global variable",
        ],
        correctIndex: 1,
        explanation: "The base case stops further self-calls.",
      },
      {
        id: "q2",
        question: "factorial(5) calls factorial how many times total (including factorial(5))?",
        options: ["5", "6", "4", "1"],
        correctIndex: 1,
        explanation: "Calls for 5, 4, 3, 2, 1 — six calls before unwinding.",
      },
    ],
  },
};
