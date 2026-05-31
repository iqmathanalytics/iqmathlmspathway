import type { TopicQuiz } from "@/lib/types";

export const module2Quizzes: Record<string, TopicQuiz> = {
  "m2-t1": {
    topicId: "m2-t1",
    title: "Quick check: Input and Output",
    questions: [
      {
        id: "q1",
        question: "Which function displays text on the screen?",
        options: ["input()", "print()", "display()", "show()"],
        correctIndex: 1,
        explanation: "print() sends output to the console.",
      },
      {
        id: "q2",
        question: "What type does input() always return?",
        options: ["int", "float", "str (string)", "bool"],
        correctIndex: 2,
        explanation: "input() always gives back a string, even if the user types digits.",
      },
    ],
  },
  "m2-t2": {
    topicId: "m2-t2",
    title: "Quick check: Comments",
    questions: [
      {
        id: "q1",
        question: "How do you start a single-line comment in Python?",
        options: ["//", "#", "--", "/*"],
        correctIndex: 1,
        explanation: "The # symbol starts a comment for the rest of that line.",
      },
      {
        id: "q2",
        question: "Does Python run comments as code?",
        options: [
          "Yes, always",
          "No, it ignores them",
          "Only on Mondays",
          "Only if they are green",
        ],
        correctIndex: 1,
        explanation: "Comments are for humans; Python skips them when running.",
      },
    ],
  },
  "m2-t3": {
    topicId: "m2-t3",
    title: "Quick check: Variables",
    questions: [
      {
        id: "q1",
        question: "What does x = 5 do?",
        options: [
          "Compares x and 5",
          "Stores 5 in a variable named x",
          "Prints the number 5",
          "Deletes x",
        ],
        correctIndex: 1,
        explanation: "= assigns the value on the right to the name on the left.",
      },
      {
        id: "q2",
        question: "Which variable name is valid?",
        options: ["2score", "my score", "my_score", "my-score"],
        correctIndex: 2,
        explanation: "Valid names use letters, numbers, underscores; no spaces or leading digits.",
      },
    ],
  },
  "m2-t4": {
    topicId: "m2-t4",
    title: "Quick check: Data Types",
    questions: [
      {
        id: "q1",
        question: "What type is 3.14?",
        options: ["int", "float", "str", "bool"],
        correctIndex: 1,
        explanation: "Numbers with a decimal point are float.",
      },
      {
        id: "q2",
        question: "Which value is a bool?",
        options: ["True", '"True"', "1", "yes"],
        correctIndex: 0,
        explanation: "True and False (capitalized) are boolean values, not strings.",
      },
    ],
  },
  "m2-t5": {
    topicId: "m2-t5",
    title: "Quick check: Typecasting",
    questions: [
      {
        id: "q1",
        question: 'What does int("8") give you?',
        options: ['"8"', "8", "8.0", "Error always"],
        correctIndex: 1,
        explanation: 'int() converts a numeric-looking string to integer 8.',
      },
      {
        id: "q2",
        question: "Why cast input() before doing math?",
        options: [
          "input() already returns int",
          "input() returns str, so you need int/float for math",
          "Math does not work in Python",
          "Casting makes code slower only",
        ],
        correctIndex: 1,
        explanation: "input() returns text; convert to int or float to add, multiply, etc.",
      },
    ],
  },
};
