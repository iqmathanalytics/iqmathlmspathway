import type { TopicQuiz } from "@/lib/types";

export const module9Quizzes: Record<string, TopicQuiz> = {
  "m9-t1": {
    topicId: "m9-t1",
    title: "Quick check: if Statement",
    questions: [
      {
        id: "q1",
        question: "What keyword starts a conditional?",
        options: [
          "when",
          "if",
          "loop",
          "case",
        ],
        correctIndex: 1,
        explanation: "if begins the decision.",
      },
      {
        id: "q2",
        question: "What must follow the condition line?",
        options: [
          "A comma",
          "A colon and an indented body",
          "A semicolon only",
          "return always",
        ],
        correctIndex: 1,
        explanation: "Python uses : and indentation for blocks.",
      },
    ],
  },
  "m9-t2": {
    topicId: "m9-t2",
    title: "Quick check: if-else",
    questions: [
      {
        id: "q1",
        question: "When does the else branch run?",
        options: [
          "Always",
          "When the if condition is false",
          "Only on errors",
          "Never",
        ],
        correctIndex: 1,
        explanation: "else is the alternative path.",
      },
      {
        id: "q2",
        question: "Is else required after if?",
        options: [
          "Yes",
          "No",
          "Only with elif",
          "Only in loops",
        ],
        correctIndex: 1,
        explanation: "else is optional.",
      },
    ],
  },
  "m9-t3": {
    topicId: "m9-t3",
    title: "Module 9 Quiz",
    questions: [
      {
        id: "q1",
        question: "What keyword starts a conditional block?",
        options: [
          "when",
          "if",
          "case",
          "switch",
        ],
        correctIndex: 1,
        explanation: "if begins a conditional; the body is indented.",
      },
      {
        id: "q2",
        question: "What does elif mean?",
        options: [
          "End if",
          "Else if — another condition to test",
          "Always true branch",
          "Loop keyword",
        ],
        correctIndex: 1,
        explanation: "elif chains additional conditions after if.",
      },
      {
        id: "q3",
        question: "Can an if statement exist without an else?",
        options: [
          "No — else is required",
          "Yes — else and elif are optional",
          "Only with elif",
          "Only in functions",
        ],
        correctIndex: 1,
        explanation: "A lone if is valid; else/elif are optional.",
      },
      {
        id: "q4",
        question: "What data type must an if condition evaluate to?",
        options: [
          "Only bool True/False literally",
          "Any value interpreted by truthiness (bool context)",
          "Only int",
          "Only str",
        ],
        correctIndex: 1,
        explanation: "Conditions use truthiness; non-zero/non-empty values are truthy.",
      },
      {
        id: "q5",
        question: "What happens if no elif/else conditions match and there's no else?",
        options: [
          "An error is raised",
          "Nothing in that chain runs",
          "The first if runs anyway",
          "Python picks randomly",
        ],
        correctIndex: 1,
        explanation: "If all conditions are false and there is no else, the block is skipped.",
      },
      {
        id: "q6",
        question: "Can you nest if statements?",
        options: [
          "No",
          "Yes — put an if inside another if's body",
          "Only one level deep",
          "Only with match",
        ],
        correctIndex: 1,
        explanation: "Nested conditionals are allowed and common.",
      },
      {
        id: "q7",
        question: "What operator checks equality in a condition?",
        options: [
          "=",
          "==",
          "===",
          ":=",
        ],
        correctIndex: 1,
        explanation: "== compares values; = assigns.",
      },
      {
        id: "q8",
        question: "Which condition checks if a number is between 1 and 100 (inclusive)?",
        options: [
          "1 < n > 100",
          "1 <= n <= 100",
          "n == 1 or 100",
          "n in 1...100",
        ],
        correctIndex: 1,
        explanation: "Python allows chained comparisons: 1 <= n <= 100.",
      },
      {
        id: "q9",
        question: "Does the body of if 0: execute?",
        options: [
          "Yes",
          "No — 0 is falsy",
          "Only in Python 2",
          "Only with else",
        ],
        correctIndex: 1,
        explanation: "0, empty containers, None, and False are falsy.",
      },
      {
        id: "q10",
        question: "What's the difference between = and ==?",
        options: [
          "They are the same",
          "= assigns; == compares for equality",
          "== assigns; = compares",
          "Both only work on strings",
        ],
        correctIndex: 1,
        explanation: "Never use = inside a condition when you mean comparison.",
      },
    ],
  },
};
