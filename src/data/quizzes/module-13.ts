import type { TopicQuiz } from "@/lib/types";

export const module13Quizzes: Record<string, TopicQuiz> = {
  "m13-t1": {
    topicId: "m13-t1",
    title: "Quick check: Reading and Writing Files",
    questions: [
      {
        id: "q1",
        question: "Which mode overwrites a file for writing?",
        options: [
          "'r'",
          "'w'",
          "'a'",
          "'rb' only",
        ],
        correctIndex: 1,
        explanation: "'w' truncates/creates for write.",
      },
      {
        id: "q2",
        question: "Why use with open(...) as f:?",
        options: [
          "Faster CPU",
          "Auto-closes the file",
          "Encrypts data",
          "Skips errors forever",
        ],
        correctIndex: 1,
        explanation: "Context managers close files reliably.",
      },
    ],
  },
  "m13-t2": {
    topicId: "m13-t2",
    title: "Quick check: Working with File Paths",
    questions: [
      {
        id: "q1",
        question: "What does os.path.exists(path) check?",
        options: [
          "File size",
          "Whether the path exists",
          "MIME type",
          "Permissions only",
        ],
        correctIndex: 1,
        explanation: "True if the path is present.",
      },
      {
        id: "q2",
        question: "Which module offers object-oriented paths?",
        options: [
          "requests",
          "pathlib",
          "json only",
          "math",
        ],
        correctIndex: 1,
        explanation: "pathlib.Path is modern path handling.",
      },
    ],
  },
  "m13-t3": {
    topicId: "m13-t3",
    title: "Quick check: try-except-finally",
    questions: [
      {
        id: "q1",
        question: "When does finally run?",
        options: [
          "Never",
          "Always, after try/except",
          "Only on success",
          "Only on failure",
        ],
        correctIndex: 1,
        explanation: "finally is for guaranteed cleanup.",
      },
      {
        id: "q2",
        question: "What does except catch?",
        options: [
          "Syntax only",
          "Matching exceptions from the try block",
          "All prints",
          "Imports",
        ],
        correctIndex: 1,
        explanation: "Handle errors you expect.",
      },
    ],
  },
  "m13-t4": {
    topicId: "m13-t4",
    title: "Quick check: Raising Custom Exceptions",
    questions: [
      {
        id: "q1",
        question: "How do you raise an exception?",
        options: [
          "throw E()",
          "raise E(\"msg\")",
          "error E",
          "except E",
        ],
        correctIndex: 1,
        explanation: "raise propagates an exception.",
      },
      {
        id: "q2",
        question: "Why define custom exceptions?",
        options: [
          "Slower code",
          "Clearer domain-specific error types",
          "Replace if/else",
          "Avoid messages",
        ],
        correctIndex: 1,
        explanation: "Callers can catch meaningful error classes.",
      },
    ],
  },
  "m13-t5": {
    topicId: "m13-t5",
    title: "Module 13 Quiz",
    questions: [
      {
        id: "q1",
        question: "What mode opens a file for writing (overwriting existing content)?",
        options: [
          "'r'",
          "'w'",
          "'a'",
          "'x+' only",
        ],
        correctIndex: 1,
        explanation: "'w' truncates/creates the file for writing.",
      },
      {
        id: "q2",
        question: "Why should you use with open(...) as f: instead of plain open()?",
        options: [
          "It is slower",
          "It auto-closes the file even if errors occur",
          "It encrypts the file",
          "It only works for CSV",
        ],
        correctIndex: 1,
        explanation: "The context manager guarantees cleanup via finally semantics.",
      },
      {
        id: "q3",
        question: "What function converts a Python dict to a JSON string?",
        options: [
          "json.load()",
          "json.dumps()",
          "json.loads()",
          "dict.to_json()",
        ],
        correctIndex: 1,
        explanation: "dumps = dump to string; dump writes to a file.",
      },
      {
        id: "q4",
        question: "What does try/except/finally guarantee about the finally block?",
        options: [
          "It never runs",
          "It runs whether or not an exception occurred",
          "It runs only on success",
          "It replaces except",
        ],
        correctIndex: 1,
        explanation: "finally is for cleanup that must always happen.",
      },
      {
        id: "q5",
        question: "What error is raised dividing by zero?",
        options: [
          "ValueError",
          "ZeroDivisionError",
          "KeyError",
          "TypeError",
        ],
        correctIndex: 1,
        explanation: "1/0 raises ZeroDivisionError.",
      },
      {
        id: "q6",
        question: "How do you raise a custom exception?",
        options: [
          "throw MyError()",
          "raise MyError(\"message\")",
          "error MyError",
          "except MyError",
        ],
        correctIndex: 1,
        explanation: "raise creates/propagates an exception instance.",
      },
      {
        id: "q7",
        question: "What library is commonly used to call web APIs in Python?",
        options: [
          "matplotlib",
          "requests",
          "seaborn",
          "tkinter",
        ],
        correctIndex: 1,
        explanation: "requests.get(url) is the common simple HTTP client.",
      },
      {
        id: "q8",
        question: "What method converts an API response to a Python dict?",
        options: [
          "response.text()",
          "response.json()",
          "response.dict()",
          "json(response)",
        ],
        correctIndex: 1,
        explanation: "response.json() parses JSON into dict/list structures.",
      },
      {
        id: "q9",
        question: "What does os.path.exists() check?",
        options: [
          "If a path is writable only",
          "Whether a file or directory path exists",
          "File size",
          "MIME type",
        ],
        correctIndex: 1,
        explanation: "It returns True if the path exists on disk.",
      },
      {
        id: "q10",
        question: "What's the difference between 'r', 'w', and 'a' file modes?",
        options: [
          "They are identical",
          "'r' read, 'w' write/overwrite, 'a' append",
          "'a' always deletes",
          "'w' is read-only",
        ],
        correctIndex: 1,
        explanation: "Choose the mode that matches how you intend to use the file.",
      },
    ],
  },
};
