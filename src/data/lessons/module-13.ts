import type { TopicLesson } from "@/lib/types";

export const module13Lessons: Record<string, TopicLesson> = {
  "m13-t1": {
    topicId: "m13-t1",
    intro:
      "A lambda is a small anonymous function written in one expression. Use it for short operations you pass to other functions — especially sorting and filtering.",
    blocks: [
      {
        type: "infographic",
        infographic: "lambda-functions",
      },
      {
        type: "practice",
        practiceLabel: "Double",
        ideOnly: true,
        practicePrompt:
          "Run the code and use a lambda to double a number.",
        starterCode:
          "double = lambda x: x * 2\n\nprint(double(5))",
      },
      {
        type: "practice",
        practiceLabel: "Add",
        ideOnly: true,
        practicePrompt:
          "Run the code and add two numbers with a two-argument lambda.",
        starterCode:
          "add = lambda a, b: a + b\n\nprint(add(3, 4))",
      },
      {
        type: "practice",
        practiceLabel: "Sort",
        ideOnly: true,
        practicePrompt:
          "Run the code and sort names by length using a lambda key.",
        starterCode:
          'names = ["Sam", "Alexander", "Bob"]\n\nnames.sort(key=lambda x: len(x))\n\nprint(names)',
      },
      {
        type: "practice",
        practiceLabel: "Square",
        ideOnly: true,
        practicePrompt:
          "Run the code and square a number with a lambda.",
        starterCode:
          "square = lambda n: n * n\n\nprint(square(6))",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Use lambda with sorted to order prices = [19, 5, 42, 8] from highest to lowest (reverse=True).",
        starterCode:
          "prices = [19, 5, 42, 8]\nprint(sorted(prices, key=lambda p: p, reverse=True))",
      },
    ],
    keyTakeaways: [
      "lambda args: expression creates a one-line function.",
      "Common with sorted, map, and filter as a quick key or transform.",
      "Prefer def when the logic is longer or needs multiple steps.",
    ],
  },
};
