import type { TopicQuiz } from "@/lib/types";

export const module11Quizzes: Record<string, TopicQuiz> = {
  "m11-t1": {
    topicId: "m11-t1",
    title: "Quick check: List Comprehension Syntax",
    questions: [
      {
        id: "q1",
        question: "[x * 2 for x in range(3)] equals:",
        options: ["[0, 2, 4]", "[2, 4, 6]", "[1, 2, 3]", "[0, 1, 2]"],
        correctIndex: 0,
        explanation: "range(3) is 0, 1, 2 — doubled gives [0, 2, 4].",
      },
      {
        id: "q2",
        question: "Where does an optional if filter go?",
        options: [
          "Before the for",
          "At the end, after for ... in ...",
          "Inside the brackets only",
          "After print()",
        ],
        correctIndex: 1,
        explanation: "Syntax: [expr for item in iterable if condition].",
      },
    ],
  },
  "m11-t2": {
    topicId: "m11-t2",
    title: "Quick check: Uses of Comprehensions",
    questions: [
      {
        id: "q1",
        question: "A comprehension is a good fit when you:",
        options: [
          "Need to print inside the loop",
          "Transform or filter items into a new list",
          "Open files on each iteration",
          "Use break or continue often",
        ],
        correctIndex: 1,
        explanation: "Comprehensions excel at building collections from simple map/filter logic.",
      },
      {
        id: "q2",
        question: "[s for s in scores if s >= 60] keeps scores that are:",
        options: ["Below 60", "Exactly 60", "60 or higher", "All scores"],
        correctIndex: 2,
        explanation: "The if clause filters — only items where the condition is True.",
      },
    ],
  },
  "m11-t3": {
    topicId: "m11-t3",
    title: "Quick check: Dictionary Comprehensions",
    questions: [
      {
        id: "q1",
        question: "{n: n**2 for n in range(3)} has how many keys?",
        options: ["1", "2", "3", "0"],
        correctIndex: 2,
        explanation: "Keys 0, 1, 2 — three entries.",
      },
      {
        id: "q2",
        question: "Dict comprehension syntax uses:",
        options: [
          "[key, value for ...]",
          "{key: value for ...}",
          "(key: value for ...)",
          "key -> value for ...",
        ],
        correctIndex: 1,
        explanation: "Curly braces with key: value, same as literal dict syntax.",
      },
    ],
  },
};
