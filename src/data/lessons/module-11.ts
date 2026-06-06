import type { TopicLesson } from "@/lib/types";

export const module11Lessons: Record<string, TopicLesson> = {
  "m11-t1": {
    topicId: "m11-t1",
    intro:
      "A list comprehension builds a new list in one expression. It combines a for loop and an optional filter into compact, readable Python.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-comprehension",
      },
      {
        type: "practice",
        practiceLabel: "Squares",
        ideOnly: true,
        practicePrompt:
          "Run the code and build a list of squares with a comprehension.",
        starterCode:
          "squares = [x * x for x in range(1, 6)]\n\nprint(squares)",
      },
      {
        type: "practice",
        practiceLabel: "Evens",
        ideOnly: true,
        practicePrompt:
          "Run the code and filter even numbers with if in a comprehension.",
        starterCode:
          "evens = [n for n in range(10) if n % 2 == 0]\n\nprint(evens)",
      },
      {
        type: "practice",
        practiceLabel: "Upper",
        ideOnly: true,
        practicePrompt:
          "Run the code and convert words to uppercase with a comprehension.",
        starterCode:
          'words = ["python", "java", "c"]\n\nupper_words = [word.upper() for word in words]\n\nprint(upper_words)',
      },
      {
        type: "practice",
        practiceLabel: "Lengths",
        ideOnly: true,
        practicePrompt:
          "Run the code and get the length of each word in a list.",
        starterCode:
          'words = ["apple", "banana", "mango"]\n\nlengths = [len(word) for word in words]\n\nprint(lengths)',
      },
      {
        type: "practice",
        practiceLabel: "Double",
        ideOnly: true,
        practicePrompt:
          "Run the code and double each number from range(1, 6).",
        starterCode:
          "numbers = [n * 2 for n in range(1, 6)]\n\nprint(numbers)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Build a list of uppercase names from names = ["ana", "bob", "cy"].',
        starterCode:
          'names = ["ana", "bob", "cy"]\nupper = [n.upper() for n in names]\nprint(upper)',
      },
    ],
    keyTakeaways: [
      "[expr for item in iterable] creates a new list.",
      "Add if condition at the end to filter items.",
      "The result is always a new list — the original is unchanged.",
    ],
  },
  "m11-t2": {
    topicId: "m11-t2",
    intro:
      "Comprehensions replace common loop-and-append patterns. They are idiomatic in Python and often clearer than manual loops for simple transforms and filters.",
    blocks: [
      {
        type: "infographic",
        infographic: "comprehension-uses",
      },
      {
        type: "practice",
        practiceLabel: "Loop",
        ideOnly: true,
        practicePrompt:
          "Run the loop version and filter long words, then uppercase them.",
        starterCode:
          'result = []\nfor word in ["cat", "dog", "bird"]:\n    if len(word) > 3:\n        result.append(word.upper())\n\nprint(result)',
      },
      {
        type: "practice",
        practiceLabel: "Comprehension",
        ideOnly: true,
        practicePrompt:
          "Run the comprehension version and get the same result in one line.",
        starterCode:
          'result = [w.upper() for w in ["cat", "dog", "bird"] if len(w) > 3]\n\nprint(result)',
      },
      {
        type: "practice",
        practiceLabel: "Hot",
        ideOnly: true,
        practicePrompt:
          "Run the code and filter hot temperatures (25 or above).",
        starterCode:
          "temperatures = [18, 22, 31, 15, 28]\nhot = [t for t in temperatures if t >= 25]\nprint(hot)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "From scores = [55, 72, 88, 40, 91], build passed with scores >= 60.",
        starterCode:
          "scores = [55, 72, 88, 40, 91]\npassed = [s for s in scores if s >= 60]\nprint(passed)",
      },
    ],
    keyTakeaways: [
      "Comprehensions replace simple loop + append patterns.",
      "Ideal for transforms and filters on iterables.",
      "Switch to a for loop when logic grows or you need side effects.",
    ],
  },
  "m11-t3": {
    topicId: "m11-t3",
    intro:
      "Dictionary comprehensions build dicts with the same compact style as list comprehensions. Each entry maps a key to a value.",
    blocks: [
      {
        type: "infographic",
        infographic: "dict-comprehension",
      },
      {
        type: "practice",
        practiceLabel: "Squares",
        ideOnly: true,
        practicePrompt:
          "Run the code and build a squares dictionary with a dict comprehension.",
        starterCode:
          "squares = {n: n * n for n in range(1, 6)}\n\nprint(squares)",
      },
      {
        type: "practice",
        practiceLabel: "Lengths",
        ideOnly: true,
        practicePrompt:
          "Run the code and map each word to its length.",
        starterCode:
          'words = ["apple", "fig", "banana"]\n\nlengths = {w: len(w) for w in words}\n\nprint(lengths)',
      },
      {
        type: "practice",
        practiceLabel: "Evens",
        ideOnly: true,
        practicePrompt:
          "Run the code and keep only even keys in the squares dictionary.",
        starterCode:
          "squares = {n: n*n for n in range(1, 6) if n % 2 == 0}\n\nprint(squares)",
      },
      {
        type: "practice",
        practiceLabel: "zip()",
        ideOnly: true,
        practicePrompt:
          "Run the code and build a dictionary from two lists using zip().",
        starterCode:
          'keys = ["name", "age"]\nvalues = ["Mia", 28]\n\nperson = {k: v for k, v in zip(keys, values)}\n\nprint(person)',
      },
      {
        type: "practice",
        practiceLabel: "Multiply",
        ideOnly: true,
        practicePrompt:
          "Run the code and multiply each number by 10 in a dictionary.",
        starterCode:
          "numbers = [1, 2, 3, 4]\n\nresult = {n: n * 10 for n in numbers}\n\nprint(result)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Build a dict mapping each number 1–5 to its double: {1: 2, 2: 4, ...}.",
        starterCode:
          "doubles = {n: n * 2 for n in range(1, 6)}\nprint(doubles)",
      },
    ],
    keyTakeaways: [
      "{key: value for ...} creates a new dictionary.",
      "Use zip to pair keys and values from two lists.",
      "Keep expressions readable — nested comprehensions can hurt clarity.",
    ],
  },
};
