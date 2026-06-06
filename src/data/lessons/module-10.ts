import type { TopicLesson } from "@/lib/types";

export const module10Lessons: Record<string, TopicLesson> = {
  "m10-t1": {
    topicId: "m10-t1",
    intro:
      "A while loop repeats a block as long as a condition stays True. Use it when you do not know exactly how many repetitions you need.",
    blocks: [
      {
        type: "infographic",
        infographic: "while-loop",
      },
      {
        type: "practice",
        practiceLabel: "Count",
        ideOnly: true,
        practicePrompt:
          "Run the code and count from 1 to 3, then print Done.",
        starterCode:
          'count = 1\n\nwhile count <= 3:\n    print(count)\n    count = count + 1\n\nprint("Done")',
      },
      {
        type: "practice",
        practiceLabel: "Password",
        ideOnly: true,
        practicePrompt:
          "Run the code and simulate three password attempts.",
        starterCode:
          'attempts = 1\n\nwhile attempts <= 3:\n    print("Try Password")\n    attempts += 1',
      },
      {
        type: "practice",
        practiceLabel: "Even",
        ideOnly: true,
        practicePrompt:
          "Run the code and print even numbers from 2 to 10.",
        starterCode:
          "num = 2\n\nwhile num <= 10:\n    print(num)\n    num += 2",
      },
      {
        type: "practice",
        practiceLabel: "Countdown",
        ideOnly: true,
        practicePrompt:
          "Run the code and count down from 5 to 1, then print Blast Off!",
        starterCode:
          'number = 5\n\nwhile number >= 1:\n    print(number)\n    number -= 1\n\nprint("Blast Off!")',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Print numbers 1 through 5 using a while loop (start n at 1, increment each time).",
        starterCode:
          "n = 1\nwhile n <= 5:\n    print(n)\n    n = n + 1",
      },
    ],
    keyTakeaways: [
      "while condition: repeats while True.",
      "Update variables inside the loop to avoid running forever.",
      "The body must be indented.",
    ],
  },
  "m10-t2": {
    topicId: "m10-t2",
    intro:
      "A for loop walks through each item in a sequence — a list, string, tuple, or other iterable. It is the most common loop in Python.",
    blocks: [
      {
        type: "infographic",
        infographic: "for-loop",
      },
      {
        type: "practice",
        practiceLabel: "Fruits",
        ideOnly: true,
        practicePrompt:
          "Run the code and loop through a list of fruits.",
        starterCode:
          'fruits = ["apple", "banana", "mango"]\n\nfor fruit in fruits:\n    print(fruit)',
      },
      {
        type: "practice",
        practiceLabel: "String",
        ideOnly: true,
        practicePrompt:
          "Run the code and print each character in a string.",
        starterCode:
          'word = "Hi"\n\nfor char in word:\n    print(char)',
      },
      {
        type: "practice",
        practiceLabel: "Students",
        ideOnly: true,
        practicePrompt:
          "Run the code and greet each student by name.",
        starterCode:
          'students = ["Asha", "Sam", "John"]\n\nfor student in students:\n    print("Hello", student)',
      },
      {
        type: "practice",
        practiceLabel: "Colors",
        ideOnly: true,
        practicePrompt:
          "Run the code and print each color in the list.",
        starterCode:
          'colors = ["red", "green", "blue"]\n\nfor color in colors:\n    print(color)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Loop over scores = [88, 92, 79] and print each score with a label.",
        starterCode:
          'scores = [88, 92, 79]\nfor score in scores:\n    print("Score:", score)',
      },
    ],
    keyTakeaways: [
      "for item in sequence: processes each element once.",
      "Works with lists, strings, tuples, and more.",
      "Prefer for when you are iterating over a collection.",
    ],
  },
  "m10-t3": {
    topicId: "m10-t3",
    intro:
      "break exits the loop immediately. continue skips the rest of the current iteration and moves to the next one.",
    blocks: [
      {
        type: "infographic",
        infographic: "break-continue",
      },
      {
        type: "practice",
        practiceLabel: "break",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how break stops the loop at 5.",
        starterCode:
          "for n in range(1, 10):\n    if n == 5:\n        break\n    print(n)",
      },
      {
        type: "practice",
        practiceLabel: "continue",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how continue skips printing 3.",
        starterCode:
          "for n in range(1, 6):\n    if n == 3:\n        continue\n    print(n)",
      },
      {
        type: "practice",
        practiceLabel: "Search",
        ideOnly: true,
        practicePrompt:
          "Run the code and use break after finding the book.",
        starterCode:
          'items = ["pen", "book", "eraser"]\n\nfor item in items:\n    if item == "book":\n        print("Found!")\n        break\n    print(item)',
      },
      {
        type: "practice",
        practiceLabel: "Skip",
        ideOnly: true,
        practicePrompt:
          "Run the code and skip 4 using continue.",
        starterCode:
          "for n in range(1, 8):\n    if n == 4:\n        continue\n    print(n)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Print numbers 1–10 but skip 7 using continue. Stop the loop at 9 using break.",
        starterCode:
          "for n in range(1, 11):\n    if n == 7:\n        continue\n    if n == 9:\n        break\n    print(n)",
      },
    ],
    keyTakeaways: [
      "break leaves the loop completely.",
      "continue skips the rest of the current cycle.",
      "Both work in for and while loops.",
    ],
  },
  "m10-t4": {
    topicId: "m10-t4",
    intro:
      "pass is a placeholder that does nothing. It keeps Python syntax valid when a block must exist but you have no code yet.",
    blocks: [
      {
        type: "infographic",
        infographic: "pass-statement",
      },
      {
        type: "practice",
        practiceLabel: "Score",
        ideOnly: true,
        practicePrompt:
          "Run the code and see pass do nothing when score is above 100.",
        starterCode:
          'score = 120\n\nif score > 100:\n    pass  # TODO: handle invalid score\nelse:\n    print("OK")',
      },
      {
        type: "practice",
        practiceLabel: "Loop",
        ideOnly: true,
        practicePrompt:
          "Run the code and see a loop with pass produce no output.",
        starterCode:
          "for i in range(5):\n    pass",
      },
      {
        type: "practice",
        practiceLabel: "Finished",
        ideOnly: true,
        practicePrompt:
          "Run the code and print Finished after a pass loop.",
        starterCode:
          'for i in range(3):\n    pass\n\nprint("Finished")',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Write an if age < 0 block with pass, and an else that prints "Valid age".',
        starterCode:
          'age = 25\nif age < 0:\n    pass\nelse:\n    print("Valid age")',
      },
    ],
    keyTakeaways: [
      "pass means \"no operation\".",
      "Use it when syntax requires a block but logic is not ready.",
      "Replace pass with real code when you implement the feature.",
    ],
  },
  "m10-t5": {
    topicId: "m10-t5",
    intro:
      "range() generates a sequence of numbers for looping. It is often paired with for when you need to repeat a fixed number of times.",
    blocks: [
      {
        type: "infographic",
        infographic: "range-function",
      },
      {
        type: "practice",
        practiceLabel: "range(5)",
        ideOnly: true,
        practicePrompt:
          "Run the code and print numbers from range(5).",
        starterCode:
          "for i in range(5):\n    print(i)",
      },
      {
        type: "practice",
        practiceLabel: "Start/Stop",
        ideOnly: true,
        practicePrompt:
          "Run the code and print numbers from range(2, 6).",
        starterCode:
          "for i in range(2, 6):\n    print(i)",
      },
      {
        type: "practice",
        practiceLabel: "Step",
        ideOnly: true,
        practicePrompt:
          "Run the code and print even numbers with range(0, 10, 2).",
        starterCode:
          "for i in range(0, 10, 2):\n    print(i)",
      },
      {
        type: "practice",
        practiceLabel: "Reverse",
        ideOnly: true,
        practicePrompt:
          "Run the code and count backward with a negative step.",
        starterCode:
          "for i in range(5, 0, -1):\n    print(i)",
      },
      {
        type: "practice",
        practiceLabel: "IDs",
        ideOnly: true,
        practicePrompt:
          "Run the code and print student IDs 1 through 5.",
        starterCode:
          "for student_id in range(1, 6):\n    print(student_id)",
      },
      {
        type: "practice",
        practiceLabel: "Range",
        ideOnly: true,
        practicePrompt:
          "Run the code and print numbers from range(3, 9).",
        starterCode:
          "for i in range(3, 9):\n    print(i)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Use range to print the squares of 1 through 5 (1, 4, 9, 16, 25).",
        starterCode:
          "for n in range(1, 6):\n    print(n * n)",
      },
    ],
    keyTakeaways: [
      "range(n) → 0 to n-1.",
      "range(start, stop) and range(start, stop, step) control the sequence.",
      "Combine for with range for counted loops.",
    ],
  },
};
