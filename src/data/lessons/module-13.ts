import type { TopicLesson } from "@/lib/types";

export const module13Lessons: Record<string, TopicLesson> = {
  "m13-t1": {
    topicId: "m13-t1",
    intro:
      "A lambda is a small anonymous function written in one expression. Use it for short operations you pass to other functions — especially sorting and filtering.",
    blocks: [
      { type: "heading", content: "Syntax" },
      {
        type: "code",
        code:
          "double = lambda x: x * 2\nprint(double(5))  # 10",
      },
      {
        type: "paragraph",
        content:
          "The form is lambda parameters: expression. There is no return keyword — the expression's value is returned automatically.",
      },
      { type: "heading", content: "Equivalent def" },
      {
        type: "code",
        code:
          "# Same behavior with def\ndef double(x):\n    return x * 2",
      },
      {
        type: "visual",
        diagram: {
          title: "lambda structure",
          variant: "stack",
          nodes: [
            { id: "l", label: "lambda", sublabel: "Keyword" },
            { id: "a", label: "args", sublabel: "One or more parameters" },
            { id: "e", label: "expression", sublabel: "Single result — no statements" },
          ],
        },
      },
      { type: "heading", content: "With sorted and map" },
      {
        type: "code",
        code:
          'names = ["Zoe", "Amy", "Mia"]\nprint(sorted(names, key=lambda n: len(n)))\n\nnums = [1, 2, 3]\nprint(list(map(lambda x: x ** 2, nums)))  # [1, 4, 9]',
      },
      {
        type: "tip",
        content:
          "If the logic needs more than one line, multiple statements, or a docstring, use def instead of lambda.",
      },
      {
        type: "practice",
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
