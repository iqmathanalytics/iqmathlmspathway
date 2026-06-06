import type { TopicLesson } from "@/lib/types";

export const module1Lessons: Record<string, TopicLesson> = {
  "m1-t1": {
    topicId: "m1-t1",
    intro:
      "Programming is just giving very clear instructions. The more you practise, the more natural it feels.",
    blocks: [
      {
        type: "infographic",
        infographic: "intro-programming",
      },
      {
        type: "practice",
        practicePrompt:
          "Try your first Python program in the IDE. Run it, then change the message to your name.",
        starterCode: 'name = input("What is your name? ")\nprint("Hello, " + name)',
      },
    ],
    keyTakeaways: [
      "Programming = writing step-by-step instructions a computer can follow.",
      "Programs use variables, conditions, loops, functions, and data types.",
      "Errors are normal — debugging is how you learn fastest.",
    ],
  },
  "m1-t2": {
    topicId: "m1-t2",
    intro:
      "Python is the most popular language for beginners — readable, friendly, and a strong first step toward data science.",
    blocks: [
      {
        type: "infographic",
        infographic: "choosing-python",
      },
      {
        type: "practice",
        practicePrompt:
          "Run this in the IDE and change the name to yours!",
        starterCode:
          'name = "Arjun"\nprint("Hello, " + name + "!")\nprint("Welcome to Python!")',
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
      "You don't need to install anything to start learning. Pick the option that fits where you are right now.",
    blocks: [
      {
        type: "infographic",
        infographic: "setting-up-python",
      },
      {
        type: "practice",
        practicePrompt:
          "Check that Python works in the browser. Run this — it prints your Python version:",
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
      "An IDE is where you write, run, and see your code — all in one place. PyPath includes one beside every lesson.",
    blocks: [
      {
        type: "infographic",
        infographic: "python-ides",
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
