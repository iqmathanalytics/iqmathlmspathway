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
        explanation: "Programming means writing clear instructions (code) that the computer executes.",
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
        explanation: "Running a program tells the computer to execute your saved instructions in order.",
      },
    ],
  },
  "m1-t2": {
    topicId: "m1-t2",
    title: "Quick check: Why Python for Data Science",
    questions: [
      {
        id: "q1",
        question: "Why is Python often recommended for data science?",
        options: [
          "It cannot use libraries",
          "It is readable and has a rich data-science ecosystem",
          "It only works offline without files",
          "It forbids charts",
        ],
        correctIndex: 1,
        explanation: "Readable syntax plus libraries like NumPy and Pandas make Python a DS favorite.",
      },
      {
        id: "q2",
        question: "Which skill path typically follows Python basics in a DS course?",
        options: [
          "Only hardware repair",
          "Data libraries, analysis, and visualization",
          "Abandoning code forever",
          "Only mobile UI design",
        ],
        correctIndex: 1,
        explanation: "Foundations unlock NumPy, Pandas, plotting, and projects.",
      },
    ],
  },
  "m1-t3": {
    topicId: "m1-t3",
    title: "Quick check: Setting up Python Environment",
    questions: [
      {
        id: "q1",
        question: "Which Python version should you learn today?",
        options: [
          "Python 2",
          "Python 3",
          "Python 1",
          "No version matters",
        ],
        correctIndex: 1,
        explanation: "Python 3 is the current standard. Python 2 is outdated.",
      },
      {
        id: "q2",
        question: "What does a virtual environment help you do?",
        options: [
          "Isolate package versions per project",
          "Delete the operating system",
          "Compile C++ only",
          "Replace pip forever",
        ],
        correctIndex: 0,
        explanation: "venv keeps dependencies from conflicting across projects.",
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
        explanation: "An IDE combines an editor, runner, and console (and often more tools).",
      },
      {
        id: "q2",
        question: "Which are common Python IDEs/editors?",
        options: [
          "VS Code, PyCharm, and Jupyter",
          "Only Microsoft Paint",
          "Photoshop only",
          "Excel macros exclusively",
        ],
        correctIndex: 0,
        explanation: "VS Code, PyCharm, and Jupyter are popular choices for Python work.",
      },
    ],
  },
  "m1-t5": {
    topicId: "m1-t5",
    title: "Module 1 Quiz",
    questions: [
      {
        id: "q1",
        question: "What is the output of print(type(5))?",
        options: [
          "<class 'float'>",
          "<class 'int'>",
          "<class 'str'>",
          "5",
        ],
        correctIndex: 1,
        explanation: "print(type(5)) displays <class 'int'>, which is Python's integer type.",
      },
      {
        id: "q2",
        question: "Which function reads user input from the console?",
        options: [
          "print()",
          "input()",
          "read()",
          "scan()",
        ],
        correctIndex: 1,
        explanation: "input() waits for the user to type and press Enter.",
      },
      {
        id: "q3",
        question: "True or False: Jupyter Notebooks mix code and text in cells.",
        options: [
          "False — they only allow code",
          "True — code and Markdown cells together",
          "False — only images",
          "True — but only in Excel",
        ],
        correctIndex: 1,
        explanation: "Jupyter combines executable code cells with Markdown text cells.",
      },
      {
        id: "q4",
        question: "What command creates a virtual environment named env1?",
        options: [
          "python create env1",
          "python -m venv env1",
          "venv new env1",
          "pip install venv env1",
        ],
        correctIndex: 1,
        explanation: "python -m venv env1 creates an isolated environment folder named env1.",
      },
      {
        id: "q5",
        question: "Which pair are common Python IDEs/editors for data science?",
        options: [
          "Photoshop and Excel",
          "Jupyter and VS Code (or PyCharm)",
          "Word and PowerPoint",
          "Notepad only",
        ],
        correctIndex: 1,
        explanation: "Jupyter, VS Code, and PyCharm are widely used for Python and DS work.",
      },
      {
        id: "q6",
        question: "What is the purpose of a virtual environment?",
        options: [
          "Speed up the CPU permanently",
          "Isolate project dependencies from other projects",
          "Replace the need for Python",
          "Encrypt your source code",
        ],
        correctIndex: 1,
        explanation: "venv keeps each project's packages separate so versions do not conflict.",
      },
      {
        id: "q7",
        question: "Which distribution bundles Python with data science libraries pre-installed?",
        options: [
          "Anaconda",
          "Only Node.js",
          "Git Bash alone",
          "Docker Desktop only",
        ],
        correctIndex: 0,
        explanation: "Anaconda ships Python plus common DS libraries like NumPy and Pandas.",
      },
      {
        id: "q8",
        question: "What key combination runs a cell in Jupyter Notebook?",
        options: [
          "Ctrl+S",
          "Shift+Enter",
          "Alt+F4",
          "Ctrl+Z",
        ],
        correctIndex: 1,
        explanation: "Shift+Enter runs the current cell and moves to the next.",
      },
      {
        id: "q9",
        question: "Why is Python favored for data science over lower-level languages like C?",
        options: [
          "It has no libraries",
          "It is readable and has rich DS libraries",
          "It cannot process numbers",
          "It only runs on phones",
        ],
        correctIndex: 1,
        explanation: "Readable syntax plus ecosystems like NumPy/Pandas make Python ideal for DS.",
      },
      {
        id: "q10",
        question: "What file extension do Jupyter Notebooks use?",
        options: [
          ".py",
          ".ipynb",
          ".txt",
          ".csv",
        ],
        correctIndex: 1,
        explanation: "Notebooks are saved as .ipynb (IPython Notebook) files.",
      },
    ],
  },
};
