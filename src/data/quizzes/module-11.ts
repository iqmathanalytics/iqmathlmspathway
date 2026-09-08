import type { TopicQuiz } from "@/lib/types";

export const module11Quizzes: Record<string, TopicQuiz> = {
  "m11-t1": {
    topicId: "m11-t1",
    title: "Quick check: List Comprehension Syntax",
    questions: [
      {
        id: "q1",
        question: "Which is a list comprehension?",
        options: [
          "for x in y: print(x)",
          "[x*2 for x in nums]",
          "{x*2 for}",
          "def f():",
        ],
        correctIndex: 1,
        explanation: "Square brackets with for build a list.",
      },
      {
        id: "q2",
        question: "What does [n for n in range(3)] produce?",
        options: [
          "[1,2,3]",
          "[0,1,2]",
          "(0,1,2)",
          "range(3)",
        ],
        correctIndex: 1,
        explanation: "It lists 0, 1, and 2.",
      },
    ],
  },
  "m11-t2": {
    topicId: "m11-t2",
    title: "Quick check: Uses of Comprehensions",
    questions: [
      {
        id: "q1",
        question: "How do you filter in a comprehension?",
        options: [
          "With while only",
          "Add if after the for",
          "With break",
          "With goto",
        ],
        correctIndex: 1,
        explanation: "[x for x in a if cond] filters.",
      },
      {
        id: "q2",
        question: "What's a common use of comprehensions?",
        options: [
          "Defining classes",
          "Transforming/filtering sequences concisely",
          "Opening sockets",
          "Installing packages",
        ],
        correctIndex: 1,
        explanation: "Map and filter patterns fit well.",
      },
    ],
  },
  "m11-t3": {
    topicId: "m11-t3",
    title: "Module 11 Quiz",
    questions: [
      {
        id: "q1",
        question: "What is the basic syntax of a list comprehension?",
        options: [
          "for x in y: [x]",
          "[expression for item in iterable]",
          "{expression for item}",
          "list(for item in iterable)",
        ],
        correctIndex: 1,
        explanation: "Square brackets with expr for ... in ... build a new list.",
      },
      {
        id: "q2",
        question: "Can you add a condition to a list comprehension?",
        options: [
          "No",
          "Yes — add if at the end to filter",
          "Only with while",
          "Only nested",
        ],
        correctIndex: 1,
        explanation: "[x for x in nums if x > 0] keeps matching items.",
      },
      {
        id: "q3",
        question: "What does [x for x in range(5)] produce?",
        options: [
          "[1, 2, 3, 4, 5]",
          "[0, 1, 2, 3, 4]",
          "(0, 1, 2, 3, 4)",
          "range(5)",
        ],
        correctIndex: 1,
        explanation: "It materializes range(5) into a list.",
      },
      {
        id: "q4",
        question: "How do dict comprehensions differ from list comprehensions in syntax?",
        options: [
          "They use ()",
          "They use {} and key: value pairs",
          "They cannot use for",
          "They require lambda",
        ],
        correctIndex: 1,
        explanation: "{k: v for ...} builds a dictionary.",
      },
      {
        id: "q5",
        question: "What's an advantage of comprehensions over for-loops?",
        options: [
          "They are always slower",
          "More concise (and often clearer) for building collections",
          "They replace functions entirely",
          "They avoid all bugs",
        ],
        correctIndex: 1,
        explanation: "Comprehensions express map/filter patterns briefly.",
      },
      {
        id: "q6",
        question: "Can comprehensions be nested?",
        options: [
          "No",
          "Yes — multiple for clauses or nested comprehensions",
          "Only dict ones",
          "Only in Python 2",
        ],
        correctIndex: 1,
        explanation: "You can nest fors, though deep nesting hurts readability.",
      },
      {
        id: "q7",
        question: "What does {x: x*2 for x in range(3)} produce?",
        options: [
          "[0, 2, 4]",
          "{0: 0, 1: 2, 2: 4}",
          "{0, 1, 2}",
          "Error",
        ],
        correctIndex: 1,
        explanation: "A dict mapping each x to twice its value.",
      },
      {
        id: "q8",
        question: "Can you filter items using if inside a comprehension?",
        options: [
          "No",
          "Yes — trailing if filters elements",
          "Only with else required",
          "Only for dicts",
        ],
        correctIndex: 1,
        explanation: "The filter if comes after the for clause.",
      },
      {
        id: "q9",
        question: "Which comprehension gets squares of even numbers from 1–10?",
        options: [
          "[x**2 for x in range(1, 11) if x % 2 == 0]",
          "[x**2 for x in range(1, 11) if x % 2]",
          "{x**2 for x in range(10)}",
          "list(range(1, 11))**2",
        ],
        correctIndex: 0,
        explanation: "Filter evens with x % 2 == 0, then square.",
      },
      {
        id: "q10",
        question: "Are comprehensions generally faster than equivalent for-loops?",
        options: [
          "Always slower",
          "Often slightly faster / optimized for building lists",
          "Identical bytecode always",
          "Banned in production",
        ],
        correctIndex: 1,
        explanation: "They avoid explicit append overhead and are optimized in CPython.",
      },
    ],
  },
};
