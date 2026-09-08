import type { TopicQuiz } from "@/lib/types";

export const module2Quizzes: Record<string, TopicQuiz> = {
  "m2-t1": {
    topicId: "m2-t1",
    title: "Quick check: Input and Output",
    questions: [
      {
        id: "q1",
        question: "Which function displays text on the screen?",
        options: [
          "input()",
          "print()",
          "display()",
          "show()",
        ],
        correctIndex: 1,
        explanation: "print() sends output to the console.",
      },
      {
        id: "q2",
        question: "What type does input() always return?",
        options: [
          "int",
          "float",
          "str (string)",
          "bool",
        ],
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
        options: [
          "//",
          "#",
          "--",
          "/*",
        ],
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
        options: [
          "2score",
          "my score",
          "my_score",
          "my-score",
        ],
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
        options: [
          "int",
          "float",
          "str",
          "bool",
        ],
        correctIndex: 1,
        explanation: "Numbers with a decimal point are float.",
      },
      {
        id: "q2",
        question: "Which value is a bool?",
        options: [
          "True",
          "\"True\"",
          "1",
          "yes",
        ],
        correctIndex: 0,
        explanation: "True and False (capitalized) are boolean values, not strings.",
      },
    ],
  },
  "m2-t5": {
    topicId: "m2-t5",
    title: "Module 2 Quiz",
    questions: [
      {
        id: "q1",
        question: "What does input() always return, regardless of what the user types?",
        options: [
          "int",
          "float",
          "str (a string)",
          "bool",
        ],
        correctIndex: 2,
        explanation: "input() always returns a string; convert with int()/float() when needed.",
      },
      {
        id: "q2",
        question: "How do you write a single-line comment in Python?",
        options: [
          "// this is a comment",
          "# this is a comment",
          "/* comment */",
          "-- comment",
        ],
        correctIndex: 1,
        explanation: "Python uses # for single-line comments.",
      },
      {
        id: "q3",
        question: "What symbol starts a comment in Python?",
        options: [
          "//",
          "#",
          "<!--",
          "%",
        ],
        correctIndex: 1,
        explanation: "The hash symbol # marks the rest of the line as a comment.",
      },
      {
        id: "q4",
        question: "Is Python statically typed or dynamically typed?",
        options: [
          "Statically typed — types fixed at compile time",
          "Dynamically typed — types checked at runtime",
          "Not typed at all",
          "Only typed inside Jupyter",
        ],
        correctIndex: 1,
        explanation: "Variables can hold different types over time; types are checked when code runs.",
      },
      {
        id: "q5",
        question: "What function checks a variable's data type?",
        options: [
          "typeof()",
          "type()",
          "classof()",
          "datatype()",
        ],
        correctIndex: 1,
        explanation: "type(x) returns the type object of x.",
      },
      {
        id: "q6",
        question: "Convert the string \"10\" to an integer — what function do you use?",
        options: [
          "str()",
          "int()",
          "float()",
          "bool()",
        ],
        correctIndex: 1,
        explanation: "int(\"10\") converts the text \"10\" into the integer 10.",
      },
      {
        id: "q7",
        question: "What is the result of bool(0)?",
        options: [
          "True",
          "False",
          "0",
          "Error",
        ],
        correctIndex: 1,
        explanation: "0 is falsy in Python, so bool(0) is False.",
      },
      {
        id: "q8",
        question: "What is the result of str(3.14)?",
        options: [
          "3.14 (float)",
          "\"3.14\" (string)",
          "3",
          "True",
        ],
        correctIndex: 1,
        explanation: "str() converts the number into the text \"3.14\".",
      },
      {
        id: "q9",
        question: "Can a variable name start with a number in Python?",
        options: [
          "Yes",
          "No",
          "Only if it is float",
          "Only inside functions",
        ],
        correctIndex: 1,
        explanation: "Names must start with a letter or underscore, not a digit.",
      },
      {
        id: "q10",
        question: "What is the output of type(True)?",
        options: [
          "<class 'int'>",
          "<class 'str'>",
          "<class 'bool'>",
          "<class 'True'>",
        ],
        correctIndex: 2,
        explanation: "True is a boolean value, so its type is bool.",
      },
    ],
  },
};
