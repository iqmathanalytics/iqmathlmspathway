import type { TopicLesson } from "@/lib/types";

export const module10Lessons: Record<string, TopicLesson> = {
  "m10-t1": {
    topicId: "m10-t1",
    intro: "A while loop repeats a block as long as a condition stays True. Use it when you do not know exactly how many repetitions you need.",
    blocks: [
      {
        type: "infographic",
        infographic: "while-loop",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`while` repeats a block as long as a condition remains True. Requires a way to eventually make the condition False (to avoid infinite loops)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Use a while loop to print the countdown from 5 to 1.",
        starterCode: "# TODO: Print numbers from 5 down to 1 using a while loop\nn = 5\nwhile n >= 1:\n    print(n)\n    n -= 1",
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
    intro: "A for loop walks through each item in a sequence — a list, string, tuple, or other iterable. It is the most common loop in Python.",
    blocks: [
      {
        type: "infographic",
        infographic: "for-loop",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`for` iterates over a sequence (list, string, range, etc.), executing the block once per element." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "fruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n    print(fruit)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given nums = [1, 2, 3, 4], use a for loop to print each number squared.",
        starterCode: "# TODO: Loop through nums and print each number squared\nnums = [1, 2, 3, 4]\nfor n in nums:\n    print(n ** 2)",
      },
    ],
    keyTakeaways: [
      "for item in sequence: runs once per element.",
      "Works with lists, strings, tuples, and range().",
      "Prefer for when you know the collection to walk.",
    ],
  },
  "m10-t3": {
    topicId: "m10-t3",
    intro: "break exits a loop early. continue skips the rest of the current iteration and moves on.",
    blocks: [
      {
        type: "infographic",
        infographic: "break-continue",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`break` exits a loop entirely. `continue` skips the rest of the current iteration and moves to the next." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "for i in range(10):\n    if i == 5:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)   # prints 1, 3" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Loop through numbers 1 to 10; skip even numbers using continue, and stop the loop entirely if the number is 9 using break.",
        starterCode: "# TODO: Skip evens with continue; break when i == 9\nfor i in range(1, 11):\n    if i == 9:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)",
      },
    ],
    keyTakeaways: [
      "break ends the whole loop.",
      "continue jumps to the next iteration.",
      "Use them to control flow without deep nesting.",
    ],
  },
  "m10-t4": {
    topicId: "m10-t4",
    intro: "pass is a no-op placeholder when Python needs a statement but you are not ready to write real logic yet.",
    blocks: [
      {
        type: "infographic",
        infographic: "pass-statement",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`pass` is a no-op placeholder used when a statement is syntactically required but no action is needed yet." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "for i in range(5):\n    if i == 3:\n        pass   # placeholder, does nothing\n    print(i)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a loop from 1 to 5 that uses pass in one branch but still prints each number.",
        starterCode: "# TODO: Use pass as a placeholder; still print each number\nfor i in range(1, 6):\n    if i == 3:\n        pass\n    print(i)",
      },
    ],
    keyTakeaways: [
      "pass does nothing — it is a placeholder.",
      "Useful in empty if/elif/else, functions, or classes.",
      "Removing pass from an empty block causes IndentationError.",
    ],
  },
  "m10-t5": {
    topicId: "m10-t5",
    intro: "range(start, stop, step) generates numbers for for-loops — stop is exclusive.",
    blocks: [
      {
        type: "infographic",
        infographic: "range-function",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`range(start, stop, step)` generates a sequence of numbers, commonly used with `for` loops." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "for i in range(5):\n    print(i)          # 0,1,2,3,4\nfor i in range(2, 10, 2):\n    print(i)          # 2,4,6,8" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Use range() to print numbers from 10 down to 1 (descending).",
        starterCode: "# TODO: Print 10 down to 1 using range\nfor i in range(10, 0, -1):\n    print(i)",
      },
    ],
    keyTakeaways: [
      "range(stop) starts at 0 and excludes stop.",
      "range(start, stop, step) controls start and step.",
      "Negative step walks backward.",
    ],
  },
};
