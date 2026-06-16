import type { TopicQuiz } from "@/lib/types";

export const module14Quizzes: Record<string, TopicQuiz> = {
  "m14-t1": {
    topicId: "m14-t1",
    title: "Quick check: Final Project Overview",
    questions: [
      {
        id: "q1",
        question: "What is the main data structure for storing students?",
        options: [
          "A dictionary mapping names to lists of grades",
          "A single list of all grades",
          "A tuple of student names",
          "A set of averages",
        ],
        correctIndex: 0,
        explanation:
          "The project uses a dict: each key is a student name, each value is a list of scores.",
      },
      {
        id: "q2",
        question: "Why use a set for subjects in the project?",
        options: [
          "To keep only unique subject names",
          "To sort students by name",
          "To store grades in order",
          "Sets are required for f-strings",
        ],
        correctIndex: 0,
        explanation:
          "Sets automatically remove duplicates — ideal for a class subject list.",
      },
    ],
  },
  "m14-t2": {
    topicId: "m14-t2",
    title: "Quick check: Data Model",
    questions: [
      {
        id: "q1",
        question: "Why is a list the right type for each student's grades?",
        options: [
          "Grades can be added with append() as the term progresses",
          "Lists automatically sort scores highest-first",
          "Lists only allow unique values",
          "Lists cannot be stored inside a dict",
        ],
        correctIndex: 0,
        explanation:
          "Lists are mutable — you can append new scores throughout the term.",
      },
      {
        id: "q2",
        question: "What happens when you add \"Math\" twice to a set?",
        options: [
          "Only one \"Math\" is kept",
          "You get an error",
          "The set becomes a list",
          "Both entries are stored",
        ],
        correctIndex: 0,
        explanation: "Sets store unique values only; duplicates are ignored.",
      },
    ],
  },
  "m14-t3": {
    topicId: "m14-t3",
    title: "Quick check: Logic & Loops",
    questions: [
      {
        id: "q1",
        question: "How do you loop over both names and grade lists in a dict?",
        options: [
          "for name, grades in students.items():",
          "for students in name:",
          "while students:",
          "for name in grades:",
        ],
        correctIndex: 0,
        explanation: ".items() yields (key, value) pairs — name and grades.",
      },
      {
        id: "q2",
        question: "[n for n, a in averages.items() if a >= 60] returns what?",
        options: [
          "Names of students with average at least 60",
          "All averages above 60",
          "The highest average",
          "A sorted list of grades",
        ],
        correctIndex: 0,
        explanation:
          "The comprehension filters names where the average meets the threshold.",
      },
    ],
  },
  "m14-t4": {
    topicId: "m14-t4",
    title: "Quick check: Functions & Report",
    questions: [
      {
        id: "q1",
        question: "Why move average calculation into a function?",
        options: [
          "Reuse the same logic for every student without repeating code",
          "Functions are required for f-strings",
          "Python cannot loop without a function",
          "Dicts only work inside def blocks",
        ],
        correctIndex: 0,
        explanation:
          "Functions let you write the logic once and call it many times.",
      },
      {
        id: "q2",
        question: "ranking.sort(key=lambda x: x[1], reverse=True) sorts by what?",
        options: [
          "The second item in each tuple (the score), highest first",
          "Student names alphabetically",
          "The number of grades per student",
          "Random order",
        ],
        correctIndex: 0,
        explanation:
          "x[1] is the average in each (name, average) tuple; reverse=True puts highest first.",
      },
    ],
  },
  "m14-t5": {
    topicId: "m14-t5",
    title: "Quick check: Capstone",
    questions: [
      {
        id: "q1",
        question: "Which line finds the top student by average?",
        options: [
          "max(averages.items(), key=lambda x: x[1])",
          "students.sort()",
          "len(students)",
          "averages.pop()",
        ],
        correctIndex: 0,
        explanation:
          "max with key=lambda compares the average (second item in each tuple).",
      },
      {
        id: "q2",
        question: "What does the list comprehension [n for n, a in averages.items() if a >= 60] return?",
        options: [
          "Names of students who passed",
          "All grade lists",
          "Letter grades",
          "The highest average",
        ],
        correctIndex: 0,
        explanation:
          "It filters names where the average is at least 60.",
      },
    ],
  },
};
