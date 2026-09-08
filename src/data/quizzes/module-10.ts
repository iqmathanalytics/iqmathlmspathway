import type { TopicQuiz } from "@/lib/types";

export const module10Quizzes: Record<string, TopicQuiz> = {
  "m10-t1": {
    topicId: "m10-t1",
    title: "Quick check: while Loop",
    questions: [
      {
        id: "q1",
        question: "When does a while loop repeat?",
        options: [
          "Forever always",
          "While its condition is true",
          "Only 10 times",
          "Only over lists",
        ],
        correctIndex: 1,
        explanation: "The condition is checked each iteration.",
      },
      {
        id: "q2",
        question: "What risk does while have?",
        options: [
          "Cannot print",
          "Infinite loops if the condition never becomes false",
          "Cannot use break",
          "Cannot use integers",
        ],
        correctIndex: 1,
        explanation: "Update variables so the loop can end.",
      },
    ],
  },
  "m10-t2": {
    topicId: "m10-t2",
    title: "Quick check: for Loop",
    questions: [
      {
        id: "q1",
        question: "What does for x in seq: do?",
        options: [
          "Assigns once",
          "Iterates x through each item in seq",
          "Sorts seq",
          "Deletes seq",
        ],
        correctIndex: 1,
        explanation: "for walks an iterable.",
      },
      {
        id: "q2",
        question: "Can for loop over a string?",
        options: [
          "No",
          "Yes",
          "Only digits",
          "Only with while",
        ],
        correctIndex: 1,
        explanation: "Characters are yielded one by one.",
      },
    ],
  },
  "m10-t3": {
    topicId: "m10-t3",
    title: "Quick check: break and continue",
    questions: [
      {
        id: "q1",
        question: "What does break do?",
        options: [
          "Skips one item",
          "Exits the loop",
          "Restarts Python",
          "Pauses forever",
        ],
        correctIndex: 1,
        explanation: "break leaves the nearest loop.",
      },
      {
        id: "q2",
        question: "What does continue do?",
        options: [
          "Ends the program",
          "Skips to the next iteration",
          "Exits all loops",
          "Defines a function",
        ],
        correctIndex: 1,
        explanation: "continue jumps to the next cycle.",
      },
    ],
  },
  "m10-t4": {
    topicId: "m10-t4",
    title: "Quick check: pass",
    questions: [
      {
        id: "q1",
        question: "What is pass?",
        options: [
          "A loop",
          "A no-op placeholder statement",
          "A break alias",
          "An import",
        ],
        correctIndex: 1,
        explanation: "Use pass for empty blocks you will fill later.",
      },
      {
        id: "q2",
        question: "Does pass change variables?",
        options: [
          "Yes always",
          "No",
          "Only globals",
          "Only lists",
        ],
        correctIndex: 1,
        explanation: "It intentionally does nothing.",
      },
    ],
  },
  "m10-t5": {
    topicId: "m10-t5",
    title: "Module 10 Quiz",
    questions: [
      {
        id: "q1",
        question: "What's the difference between while and for loops?",
        options: [
          "They are identical",
          "while repeats while a condition is true; for iterates over a sequence",
          "for cannot use range",
          "while only works on lists",
        ],
        correctIndex: 1,
        explanation: "Choose while for unknown repetition count; for for known iterables.",
      },
      {
        id: "q2",
        question: "What does break do?",
        options: [
          "Skips one iteration",
          "Exits the nearest enclosing loop immediately",
          "Ends the program always",
          "Restarts the loop",
        ],
        correctIndex: 1,
        explanation: "break jumps out of the loop body.",
      },
      {
        id: "q3",
        question: "What does continue do?",
        options: [
          "Ends the loop",
          "Skips the rest of this iteration and continues with the next",
          "Pauses forever",
          "Deletes the loop variable",
        ],
        correctIndex: 1,
        explanation: "continue goes to the next iteration without finishing the current body.",
      },
      {
        id: "q4",
        question: "What does pass do?",
        options: [
          "Exits the function",
          "Acts as a no-op placeholder",
          "Raises an error",
          "Skips to break",
        ],
        correctIndex: 1,
        explanation: "pass is a statement that does nothing — useful for empty blocks.",
      },
      {
        id: "q5",
        question: "What does range(5) generate?",
        options: [
          "1 through 5",
          "0, 1, 2, 3, 4",
          "0 through 5 inclusive",
          "5 only",
        ],
        correctIndex: 1,
        explanation: "range(n) is 0..n-1.",
      },
      {
        id: "q6",
        question: "What happens if a while loop's condition never becomes False?",
        options: [
          "It runs once",
          "It becomes an infinite loop",
          "Python auto-breaks after 10",
          "SyntaxError",
        ],
        correctIndex: 1,
        explanation: "Always ensure the condition can become false (or use break).",
      },
      {
        id: "q7",
        question: "What does range(1, 10, 2) produce?",
        options: [
          "1, 2, 3, ..., 10",
          "1, 3, 5, 7, 9",
          "2, 4, 6, 8, 10",
          "10, 8, 6, ...",
        ],
        correctIndex: 1,
        explanation: "Start 1, stop before 10, step 2 → odd numbers.",
      },
      {
        id: "q8",
        question: "Can you loop over a string with for?",
        options: [
          "No",
          "Yes — one character per iteration",
          "Only with while",
          "Only after list()",
        ],
        correctIndex: 1,
        explanation: "Strings are iterable; for c in \"hi\" yields 'h' then 'i'.",
      },
      {
        id: "q9",
        question: "What is the output of for i in range(3): print(i)?",
        options: [
          "1 2 3",
          "0 1 2",
          "0 1 2 3",
          "3 2 1",
        ],
        correctIndex: 1,
        explanation: "range(3) → 0, 1, 2 each printed on its own line.",
      },
      {
        id: "q10",
        question: "How do you loop backward from 10 to 1?",
        options: [
          "range(10, 1)",
          "range(10, 0, -1)",
          "range(1, 10, -1)",
          "reversed(10)",
        ],
        correctIndex: 1,
        explanation: "range(10, 0, -1) yields 10 down to 1.",
      },
    ],
  },
};
