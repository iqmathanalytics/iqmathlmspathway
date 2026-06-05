import type { TopicLesson } from "@/lib/types";

export const module11Lessons: Record<string, TopicLesson> = {
  "m11-t1": {
    topicId: "m11-t1",
    intro:
      "A list comprehension builds a new list in one expression. It combines a for loop and an optional filter into compact, readable Python.",
    blocks: [
      { type: "heading", content: "Basic form" },
      {
        type: "code",
        code:
          "squares = [x * x for x in range(1, 6)]\nprint(squares)  # [1, 4, 9, 16, 25]",
      },
      {
        type: "paragraph",
        content:
          "Read it left to right: the expression (x * x) is evaluated for each x from the loop.",
      },
      { type: "heading", content: "With a condition" },
      {
        type: "code",
        code:
          "evens = [n for n in range(10) if n % 2 == 0]\nprint(evens)  # [0, 2, 4, 6, 8]",
      },
      {
        type: "visual",
        diagram: {
          title: "List comprehension structure",
          variant: "stack",
          nodes: [
            { id: "e", label: "[ expression", sublabel: "Value for each item" },
            { id: "f", label: "for item in iterable", sublabel: "Source sequence" },
            { id: "c", label: "if condition ]", sublabel: "Optional filter" },
          ],
        },
      },
      {
        type: "practice",
        practicePrompt:
          "Build a list of uppercase names from names = [\"ana\", \"bob\", \"cy\"].",
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
      { type: "heading", content: "Loop vs comprehension" },
      {
        type: "code",
        code:
          "# Loop\nresult = []\nfor word in [\"cat\", \"dog\", \"bird\"]:\n    if len(word) > 3:\n        result.append(word.upper())\n\n# Comprehension\nresult = [w.upper() for w in [\"cat\", \"dog\", \"bird\"] if len(w) > 3]\nprint(result)  # ['BIRD']",
      },
      {
        type: "heading",
        content: "When to use them",
      },
      {
        type: "paragraph",
        content:
          "Use comprehensions for straightforward mapping (transform each item) or filtering (keep some items). Prefer a regular for loop when the logic is long, has side effects (printing, file I/O), or needs multiple nested steps.",
      },
      {
        type: "code",
        code:
          "temperatures = [18, 22, 31, 15, 28]\nhot = [t for t in temperatures if t >= 25]\nprint(hot)  # [31, 28]",
      },
      {
        type: "visual",
        diagram: {
          title: "Good fit vs use a loop",
          variant: "compare",
          nodes: [
            { id: "y", label: "Comprehension", sublabel: "Map or filter in one line" },
            { id: "n", label: "Regular loop", sublabel: "Complex logic or side effects" },
          ],
        },
      },
      {
        type: "practice",
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
      { type: "heading", content: "Syntax" },
      {
        type: "code",
        code:
          "squares = {n: n * n for n in range(1, 6)}\nprint(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}",
      },
      {
        type: "paragraph",
        content:
          "The form is {key_expr: value_expr for item in iterable}. Optional if filters the items.",
      },
      {
        type: "code",
        code:
          'words = ["apple", "fig", "banana"]\nlengths = {w: len(w) for w in words}\nprint(lengths)',
      },
      {
        type: "heading",
        content: "From two lists with zip",
      },
      {
        type: "code",
        code:
          'keys = ["name", "age"]\nvalues = ["Mia", 28]\nperson = {k: v for k, v in zip(keys, values)}\nprint(person)',
      },
      {
        type: "visual",
        diagram: {
          title: "Dict comprehension",
          variant: "stack",
          nodes: [
            { id: "k", label: "{ key : value", sublabel: "Each pair in the dict" },
            { id: "l", label: "for item in iterable", sublabel: "Drive the loop" },
            { id: "i", label: "if condition }", sublabel: "Optional filter" },
          ],
        },
      },
      {
        type: "practice",
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
