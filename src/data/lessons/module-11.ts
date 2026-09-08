import type { TopicLesson } from "@/lib/types";

export const module11Lessons: Record<string, TopicLesson> = {
  "m11-t1": {
    topicId: "m11-t1",
    intro: "List comprehensions build lists in one readable line — a compact alternative to append loops.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-comprehension",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Syntax: `[expression for item in iterable if condition]`. It is a compact alternative to a for-loop that builds a list." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "squares = [x**2 for x in range(6)]\nprint(squares)   # [0,1,4,9,16,25]\n\nevens = [x for x in range(20) if x % 2 == 0]\nprint(evens)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Use a list comprehension to create a list of numbers from 1 to 10 that are divisible by 3.",
        starterCode: "# TODO: Numbers 1-10 divisible by 3\nresult = [x for x in range(1, 11) if x % 3 == 0]\nprint(result)",
      },
    ],
    keyTakeaways: [
      "Form: [expr for item in iterable].",
      "Add if condition to filter.",
      "Prefer comprehensions for simple map/filter builds.",
    ],
  },
  "m11-t2": {
    topicId: "m11-t2",
    intro: "Comprehensions shine when filtering and transforming data — common in cleaning datasets before analysis.",
    blocks: [
      {
        type: "infographic",
        infographic: "comprehension-uses",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Comprehensions replace verbose loops for filtering, transforming, and flattening data — common in cleaning datasets before analysis." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "words = [\"apple\", \"Banana\", \"cherry\", \"Date\"]\nupper_words = [w.upper() for w in words]\nstarts_with_lower = [w for w in words if w[0].islower()]\nprint(upper_words)\nprint(starts_with_lower)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given nums = [10, 55, 30, 90, 5], use a list comprehension to return only numbers greater than 20.",
        starterCode: "# TODO: Keep values greater than 20\nnums = [10, 55, 30, 90, 5]\nresult = [n for n in nums if n > 20]\nprint(result)",
      },
    ],
    keyTakeaways: [
      "Use comprehensions to transform and filter.",
      "Keep expressions simple — complex logic may need a loop.",
      "Readable one-liners beat long append loops.",
    ],
  },
  "m11-t3": {
    topicId: "m11-t3",
    intro: "Dictionary comprehensions build {key: value} mappings in one line.",
    blocks: [
      {
        type: "infographic",
        infographic: "dict-comprehension",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Syntax: `{key_expr: value_expr for item in iterable if condition}` — builds a dictionary in one line." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "squares = {x: x**2 for x in range(6)}\nprint(squares)   # {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}\n\nfiltered = {k: v for k, v in squares.items() if v > 10}\nprint(filtered)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given names = [\"Amit\", \"Riya\", \"Sam\"], create a dictionary mapping each name to its length using a dict comprehension.",
        starterCode: "# TODO: Map each name to its length\nnames = [\"Amit\", \"Riya\", \"Sam\"]\nlengths = {name: len(name) for name in names}\nprint(lengths)",
      },
    ],
    keyTakeaways: [
      "Use curly braces with key: value expressions.",
      "Filter with if inside the comprehension.",
      "Duplicate keys keep the last value.",
    ],
  },
};
