import type { TopicLesson } from "@/lib/types";

export const module1Lessons: Record<string, TopicLesson> = {
  "m1-t1": {
    topicId: "m1-t1",
    intro:
      "Imagine you want the computer to say Hello 100 times. Typing it yourself would take forever. Programming is how we give the computer step-by-step instructions to do work for us.",
    blocks: [
      {
        type: "heading",
        content: "What is programming?",
      },
      {
        type: "paragraph",
        content:
          "Programming means writing instructions in a special language that a computer can follow. Those instructions are saved in a file (often called a script or program). When you run the program, the computer reads your instructions one by one and does what you asked.",
      },
      {
        type: "visual",
        diagram: {
          title: "You → Instructions → Computer → Result",
          variant: "flow",
          nodes: [
            { id: "you", label: "You", sublabel: "Write instructions" },
            { id: "code", label: "Program", sublabel: "Saved steps" },
            { id: "pc", label: "Computer", sublabel: "Follows steps" },
            { id: "out", label: "Output", sublabel: "Screen / file / action" },
          ],
          arrows: [
            { from: "you", to: "code" },
            { from: "code", to: "pc" },
            { from: "pc", to: "out" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Instructions must be very clear — computers don't guess what you meant.",
          "If you make a small mistake (a typo), the program might not run. That's normal! Everyone fixes errors while learning.",
          "Programming is like giving a recipe to a robot chef: ingredients + steps = dish.",
        ],
      },
      {
        type: "tip",
        content:
          "Strong math is not required to start. Work through each topic in order and practice in the IDE.",
      },
      {
        type: "practice",
        practicePrompt:
          "Type your first line of Python in the IDE, then press Run to see output in the console.",
        starterCode: 'print("Hello! I am learning programming!")',
      },
    ],
    keyTakeaways: [
      "Programming = writing clear step-by-step instructions for a computer.",
      "A program is a file of those instructions.",
      "Mistakes are part of learning — everyone debugs.",
    ],
  },
  "m1-t2": {
    topicId: "m1-t2",
    intro:
      "There are many programming languages (Java, C++, JavaScript, Python…). Python is a strong first language, especially if you plan to work in data science.",
    blocks: [
      {
        type: "heading",
        content: "Why Python?",
      },
      {
        type: "paragraph",
        content:
          "Python reads almost like English. Compare: in some languages you need many symbols just to print text. In Python you write print(\"Hi\") — short and friendly.",
      },
      {
        type: "visual",
        diagram: {
          title: "Python in the Data Science journey",
          variant: "flow",
          nodes: [
            { id: "basics", label: "Python basics", sublabel: "You are here!" },
            { id: "libs", label: "Libraries", sublabel: "NumPy, Pandas…" },
            { id: "viz", label: "Charts", sublabel: "Matplotlib, Seaborn" },
            { id: "ds", label: "Data Science", sublabel: "Analyze real data" },
          ],
          arrows: [
            { from: "basics", to: "libs" },
            { from: "libs", to: "viz" },
            { from: "viz", to: "ds" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Readable syntax that stays close to natural language.",
          "Huge community — millions of tutorials and answers online.",
          "Used in data science, AI, web apps, automation, and more.",
          "This course path leads you toward NumPy, Pandas, and visualization later.",
        ],
      },
      {
        type: "code",
        code: '# This is Python — notice how clean it looks\nprint("Python is my friend")\nprint(2 + 2)  # Math works too!',
      },
      {
        type: "practice",
        practicePrompt: "Run the code above, then change the message to your name!",
        starterCode: 'print("Python is my friend")\nprint(2 + 2)',
      },
    ],
    keyTakeaways: [
      "Python is widely used in data science and general software development.",
      "This course builds foundations first, then data libraries later.",
      "Readable code helps you learn faster.",
    ],
  },
  "m1-t3": {
    topicId: "m1-t3",
    intro:
      "To run Python on your own computer, you install Python once. On this website you can also practice instantly in the browser — no install needed!",
    blocks: [
      {
        type: "heading",
        content: "Two ways to run Python",
      },
      {
        type: "visual",
        diagram: {
          title: "Browser vs Computer",
          variant: "compare",
          nodes: [
            {
              id: "browser",
              label: "Browser IDE",
              sublabel: "This website — practice now",
            },
            {
              id: "local",
              label: "Your PC",
              sublabel: "python.org install",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "Install on Windows (when you're ready)",
      },
      {
        type: "list",
        items: [
          "Go to https://www.python.org/downloads/",
          "Download the latest Python 3 installer.",
          "Run the installer — check ✅ \"Add python.exe to PATH\".",
          "Open Command Prompt and type: python --version",
          "You should see something like Python 3.12.x",
        ],
      },
      {
        type: "tip",
        content:
          "For now, use the Run button on every lesson page. Installing locally is optional until you want bigger projects on your machine.",
      },
      {
        type: "practice",
        practicePrompt:
          "Check that Python works here. Run this — it prints your Python version inside the browser:",
        starterCode:
          'import sys\nprint("Python version:", sys.version)\nprint("You are ready to learn!")',
      },
    ],
    keyTakeaways: [
      "Practice in the browser anytime on PyPath.",
      "Install Python from python.org when you want it on your PC.",
      "Always choose Python 3 (not Python 2).",
    ],
  },
  "m1-t4": {
    topicId: "m1-t4",
    intro:
      "An IDE (Integrated Development Environment) is a place to write, run, and test code. PyPath includes a built-in IDE beside each lesson so you can read and code in one view.",
    blocks: [
      {
        type: "heading",
        content: "What does an IDE give you?",
      },
      {
        type: "list",
        items: [
          "Editor — where you type code.",
          "Run button — sends code to Python.",
          "Console — shows output and errors.",
          "Sometimes: colors, hints, file explorer (in bigger IDEs).",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Parts of the PyPath IDE",
          variant: "stack",
          nodes: [
            { id: "ed", label: "Editor", sublabel: "Type Python here" },
            { id: "run", label: "Run ▶", sublabel: "Execute your code" },
            { id: "con", label: "Console", sublabel: "See results" },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "Popular desktop IDEs include VS Code, PyCharm, and Thonny. They are great later. For learning with us, the built-in IDE is enough.",
      },
      {
        type: "practice",
        practicePrompt:
          "Mini challenge: print three lines — a title, a blank line, and a sentence about why you want to learn Python for data science.",
        starterCode:
          '# Replace the lines below with your own words\nprint("My Python Journey")\nprint()\nprint("I want to learn data science because...")',
      },
    ],
    keyTakeaways: [
      "IDE = editor + run + console together.",
      "PyPath has a built-in IDE on every topic page.",
      "Desktop IDEs are optional extras for later.",
    ],
  },
};
