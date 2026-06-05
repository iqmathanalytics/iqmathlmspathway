import type { TopicLesson } from "@/lib/types";

export const module10Lessons: Record<string, TopicLesson> = {
  "m10-t1": {
    topicId: "m10-t1",
    intro:
      "A while loop repeats a block as long as a condition stays True. Use it when you do not know exactly how many repetitions you need.",
    blocks: [
      { type: "heading", content: "while syntax" },
      {
        type: "code",
        code:
          'count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1\nprint("Done")',
      },
      {
        type: "visual",
        diagram: {
          title: "while loop flow",
          variant: "flow",
          nodes: [
            { id: "c", label: "Condition", sublabel: "True?" },
            { id: "b", label: "Run body", sublabel: "Indented block" },
            { id: "back", label: "Check again", sublabel: "Loop back" },
          ],
          arrows: [
            { from: "c", to: "b" },
            { from: "b", to: "back" },
            { from: "back", to: "c" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Ensure something inside the loop eventually makes the condition False — otherwise you get an infinite loop.",
      },
      {
        type: "practice",
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
        type: "code",
        code:
          'fruits = ["apple", "banana", "mango"]\nfor fruit in fruits:\n    print(fruit)',
      },
      {
        type: "paragraph",
        content:
          "The variable after for (here fruit) takes each value in turn. You can name it anything meaningful.",
      },
      {
        type: "code",
        code:
          'word = "Hi"\nfor char in word:\n    print(char)',
      },
      {
        type: "practice",
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
      { type: "heading", content: "break — stop the loop" },
      {
        type: "code",
        code:
          'for n in range(1, 10):\n    if n == 5:\n        break\n    print(n)  # 1,2,3,4',
      },
      { type: "heading", content: "continue — skip to next iteration" },
      {
        type: "code",
        code:
          'for n in range(1, 6):\n    if n == 3:\n        continue\n    print(n)  # skips 3',
      },
      {
        type: "visual",
        diagram: {
          title: "break vs continue",
          variant: "compare",
          nodes: [
            { id: "b", label: "break", sublabel: "Exit loop entirely" },
            { id: "c", label: "continue", sublabel: "Skip to next item" },
          ],
        },
      },
      {
        type: "practice",
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
        type: "code",
        code:
          'if score > 100:\n    pass  # TODO: handle invalid score\nelse:\n    print("OK")',
      },
      {
        type: "paragraph",
        content:
          "Common in stubs while designing logic, or in empty except/loop bodies that you will fill in later.",
      },
      {
        type: "code",
        code:
          "for i in range(5):\n    pass  # no output — valid syntax",
      },
      {
        type: "practice",
        practicePrompt:
          "Write an if age < 0 block with pass, and an else that prints \"Valid age\".",
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
        type: "code",
        code:
          "for i in range(5):\n    print(i)  # 0,1,2,3,4\n\nfor i in range(2, 6):\n    print(i)  # 2,3,4,5\n\nfor i in range(0, 10, 2):\n    print(i)  # 0,2,4,6,8",
      },
      {
        type: "visual",
        diagram: {
          title: "range(start, stop, step)",
          variant: "stack",
          nodes: [
            { id: "s", label: "start", sublabel: "First value (inclusive)" },
            { id: "e", label: "stop", sublabel: "End before this value" },
            { id: "st", label: "step", sublabel: "Increment (optional)" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "range(5) is like 0, 1, 2, 3, 4 — stop is never included, same rule as slicing.",
      },
      {
        type: "practice",
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
