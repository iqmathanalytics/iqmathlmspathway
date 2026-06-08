import type { TopicQuiz } from "@/lib/types";

export const module1Quizzes: Record<string, TopicQuiz> = {
  "m1-t1": {
    topicId: "m1-t1",
    title: "Quick check: Introduction to Programming",
    questions: [
      {
        id: "q1",
        question: "What is programming, in the simplest sense?",
        options: [
          "Playing video games on a computer",
          "Writing step-by-step instructions for a computer to follow",
          "Fixing broken computer hardware",
          "Drawing pictures in Microsoft Paint",
        ],
        correctIndex: 1,
        explanation:
          "Programming means writing clear instructions (code) that the computer executes.",
      },
      {
        id: "q2",
        question: "What happens when you run a program?",
        options: [
          "The computer randomly guesses output",
          "The computer reads your instructions and follows them",
          "The program deletes itself automatically",
          "Nothing — programs are only for decoration",
        ],
        correctIndex: 1,
        explanation:
          "Running a program tells the computer to execute your saved instructions in order.",
      },
    ],
  },
  "m1-t2": {
    topicId: "m1-t2",
    title: "Quick check: Choosing Python",
    questions: [
      {
        id: "q1",
        question: "Why is Python often recommended as a first language?",
        options: [
          "It cannot be used for real projects",
          "It reads clearly and is widely used, including in data science",
          "It only works on one specific phone model",
          "It has no community or learning resources",
        ],
        correctIndex: 1,
        explanation:
          "Python is readable, popular, and heavily used in data science and many other fields.",
      },
      {
        id: "q2",
        question: "In this course path, what comes AFTER Python basics?",
        options: [
          "Only video games",
          "Data science libraries like NumPy and Pandas",
          "You never write code again",
          "Only hardware repair",
        ],
        correctIndex: 1,
        explanation:
          "We build foundations first, then move to data science tools in future modules.",
      },
    ],
  },
  "m1-t3": {
    topicId: "m1-t3",
    title: "Quick check: Setting up Python",
    questions: [
      {
        id: "q1",
        question: "Which Python version should you learn today?",
        options: ["Python 2", "Python 3", "Python 1", "No version matters"],
        correctIndex: 1,
        explanation: "Python 3 is the current standard. Python 2 is outdated.",
      },
      {
        id: "q2",
        question: "On this website, how can you run Python without installing?",
        options: [
          "You cannot run code here",
          "Use the built-in browser IDE and click Run",
          "You must mail your code to the teacher",
          "Only by printing code on paper",
        ],
        correctIndex: 1,
        explanation:
          "Introduction to Python runs Python in your browser so you can practice immediately.",
      },
    ],
  },
  "m1-t4": {
    topicId: "m1-t4",
    title: "Quick check: Python IDEs",
    questions: [
      {
        id: "q1",
        question: "What does an IDE help you do?",
        options: [
          "Cook food faster",
          "Write, run, and see results of code in one place",
          "Only browse social media",
          "Replace the need to learn anything",
        ],
        correctIndex: 1,
        explanation:
          "An IDE combines an editor, runner, and console (and often more tools).",
      },
      {
        id: "q2",
        question: "Which part shows print() output in our IDE?",
        options: ["The editor", "The console", "The footer logo", "The progress bar"],
        correctIndex: 1,
        explanation: "Output and errors appear in the console below the editor.",
      },
    ],
  },
};
