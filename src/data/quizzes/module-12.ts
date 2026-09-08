import type { TopicQuiz } from "@/lib/types";

export const module12Quizzes: Record<string, TopicQuiz> = {
  "m12-t1": {
    topicId: "m12-t1",
    title: "Quick check: Creating Functions",
    questions: [
      {
        id: "q1",
        question: "Which keyword defines a function?",
        options: [
          "func",
          "def",
          "define",
          "method",
        ],
        correctIndex: 1,
        explanation: "def name(): starts a function.",
      },
      {
        id: "q2",
        question: "What does return do?",
        options: [
          "Prints only",
          "Gives a value back to the caller",
          "Imports a module",
          "Ends the program always",
        ],
        correctIndex: 1,
        explanation: "return exits and sends a result.",
      },
    ],
  },
  "m12-t2": {
    topicId: "m12-t2",
    title: "Quick check: Calling Functions",
    questions: [
      {
        id: "q1",
        question: "How do you call a function named greet?",
        options: [
          "call greet",
          "greet()",
          "def greet",
          "run greet",
        ],
        correctIndex: 1,
        explanation: "Use the name with parentheses.",
      },
      {
        id: "q2",
        question: "What happens if you omit () after a function name?",
        options: [
          "It always runs",
          "You get the function object, not a call",
          "SyntaxError always",
          "It deletes the function",
        ],
        correctIndex: 1,
        explanation: "() triggers execution.",
      },
    ],
  },
  "m12-t3": {
    topicId: "m12-t3",
    title: "Quick check: Function Arguments",
    questions: [
      {
        id: "q1",
        question: "What is a default argument?",
        options: [
          "Required always",
          "A parameter with a preset value",
          "*args only",
          "A global",
        ],
        correctIndex: 1,
        explanation: "Callers may omit parameters that have defaults.",
      },
      {
        id: "q2",
        question: "What does **kwargs collect?",
        options: [
          "Positional extras as a tuple",
          "Keyword extras as a dict",
          "Return values",
          "File modes",
        ],
        correctIndex: 1,
        explanation: "**kwargs gathers named extras.",
      },
    ],
  },
  "m12-t4": {
    topicId: "m12-t4",
    title: "Quick check: Variables in Functions",
    questions: [
      {
        id: "q1",
        question: "Where do local variables live?",
        options: [
          "On disk only",
          "Inside the function's scope",
          "Only in globals",
          "In the OS",
        ],
        correctIndex: 1,
        explanation: "Locals disappear when the function returns.",
      },
      {
        id: "q2",
        question: "Which keyword writes to a module-level name from inside a function?",
        options: [
          "local",
          "global",
          "public",
          "static",
        ],
        correctIndex: 1,
        explanation: "Use global before assigning to a global.",
      },
    ],
  },
  "m12-t5": {
    topicId: "m12-t5",
    title: "Quick check: Recursion",
    questions: [
      {
        id: "q1",
        question: "What is recursion?",
        options: [
          "A loop syntax",
          "A function calling itself",
          "An import cycle only",
          "A lambda rule",
        ],
        correctIndex: 1,
        explanation: "Recursive functions solve smaller subproblems.",
      },
      {
        id: "q2",
        question: "What prevents infinite recursion?",
        options: [
          "More parameters",
          "A base case",
          "Using print",
          "Avoiding return",
        ],
        correctIndex: 1,
        explanation: "Stop when a simple case is reached.",
      },
    ],
  },
  "m12-t6": {
    topicId: "m12-t6",
    title: "Module 12 Quiz",
    questions: [
      {
        id: "q1",
        question: "What keyword defines a function?",
        options: [
          "func",
          "def",
          "function",
          "lambda only",
        ],
        correctIndex: 1,
        explanation: "def name(...): starts a function definition.",
      },
      {
        id: "q2",
        question: "What does return do in a function?",
        options: [
          "Prints a value only",
          "Sends a value back to the caller and exits the function",
          "Deletes the function",
          "Restarts the function",
        ],
        correctIndex: 1,
        explanation: "Without return, a function returns None.",
      },
      {
        id: "q3",
        question: "What is a default argument?",
        options: [
          "A required parameter",
          "A parameter with a preset value used if the caller omits it",
          "Always *args",
          "A global variable",
        ],
        correctIndex: 1,
        explanation: "def f(x=10): uses 10 when x is not passed.",
      },
      {
        id: "q4",
        question: "What does *args collect?",
        options: [
          "Only keyword arguments",
          "Extra positional arguments as a tuple",
          "Only defaults",
          "Return values",
        ],
        correctIndex: 1,
        explanation: "*args gathers leftover positional args.",
      },
      {
        id: "q5",
        question: "What does **kwargs collect?",
        options: [
          "Extra positional args as a list",
          "Extra keyword arguments as a dict",
          "Only global names",
          "File handles",
        ],
        correctIndex: 1,
        explanation: "**kwargs is a dictionary of name=value extras.",
      },
      {
        id: "q6",
        question: "What is the difference between local and global scope?",
        options: [
          "None",
          "Locals exist inside a function; globals live at module level",
          "Globals cannot be read",
          "Locals are always strings",
        ],
        correctIndex: 1,
        explanation: "Assignments inside a function create local names by default.",
      },
      {
        id: "q7",
        question: "What keyword lets you modify a global variable inside a function?",
        options: [
          "nonlocal only",
          "global",
          "public",
          "extern",
        ],
        correctIndex: 1,
        explanation: "Declare global x before assigning to the module-level x.",
      },
      {
        id: "q8",
        question: "What is recursion?",
        options: [
          "Importing twice",
          "A function calling itself",
          "A loop without condition",
          "Using lambda",
        ],
        correctIndex: 1,
        explanation: "Recursive solutions break a problem into smaller same-shaped problems.",
      },
      {
        id: "q9",
        question: "What must every recursive function have to avoid infinite recursion?",
        options: [
          "A global variable",
          "A base case that stops calling itself",
          "Exactly two parameters",
          "The word recurse",
        ],
        correctIndex: 1,
        explanation: "Without a base case, recursion never ends (RecursionError).",
      },
      {
        id: "q10",
        question: "What is a lambda function used for?",
        options: [
          "Defining classes",
          "Short anonymous functions, often as arguments",
          "Replacing all def functions",
          "File I/O only",
        ],
        correctIndex: 1,
        explanation: "lambda x: x*2 is a tiny function expression.",
      },
    ],
  },
};
