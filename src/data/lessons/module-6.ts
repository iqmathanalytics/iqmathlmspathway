import type { TopicLesson } from "@/lib/types";

export const module6Lessons: Record<string, TopicLesson> = {
  "m6-t1": {
    topicId: "m6-t1",
    intro: "Tuples are ordered, immutable sequences — often written with parentheses.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-syntax",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Tuples are created with parentheses `()` or just commas. A single-element tuple needs a trailing comma: `(5,)`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "t1 = (1, 2, 3)\nt2 = 4, 5, 6          # parentheses optional\nt3 = (5,)             # single-element tuple\nprint(t1, t2, t3, type(t3))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a single-element tuple containing the number 7 and print its type to confirm it's a tuple.",
        starterCode: "# TODO: Create a tuple of 3 coordinates (x, y, z) representing a 3D point",
      },
    ],
    keyTakeaways: [
      "Tuples use parentheses; a trailing comma makes a one-item tuple.",
      "tuple() converts other iterables.",
      "Unpacking assigns tuple items to variables.",
    ],
  },
  "m6-t2": {
    topicId: "m6-t2",
    intro: "Tuples are immutable and ordered, which makes them safe for fixed collections of values.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-properties",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Tuples are ordered and immutable (cannot be changed after creation) — this makes them faster and safer for fixed data." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "point = (10, 20)\nprint(point[0])\ntry:\n    point[0] = 99\nexcept TypeError as e:\n    print(\"Error:\", e)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Attempt to change an element in `t = (1,2,3)` and print the type of error Python raises.",
        starterCode: "# TODO: Try modifying a tuple element and catch the resulting error",
      },
    ],
    keyTakeaways: [
      "Immutable: you cannot change items after creation.",
      "Ordered: index and slice still work.",
      "Use tuples for fixed records and dict keys (if hashable).",
    ],
  },
  "m6-t3": {
    topicId: "m6-t3",
    intro: "Index a tuple the same way as a list: position starts at 0.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-indexing",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Same indexing rules as lists — access by position with `[]`, negative indices from the end." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "t = (10, 20, 30, 40)\nprint(t[0], t[-1], t[2])" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `t = (\"a\",\"b\",\"c\",\"d\")`, print the second and last elements.",
        starterCode: "# TODO: Given t=(1,2,3,4,5), print first, last, and middle element",
      },
    ],
    keyTakeaways: [
      "Indexing works like lists.",
      "You cannot assign to a tuple index.",
      "Negative indices count from the end.",
    ],
  },
  "m6-t4": {
    topicId: "m6-t4",
    intro: "Slice a tuple to get a new tuple with a subset of elements.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-slicing",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Slicing returns a new tuple, using the same `[start:stop:step]` syntax as lists." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "t = (1, 2, 3, 4, 5)\nprint(t[1:4])    # (2, 3, 4)\nprint(t[::-1])   # (5, 4, 3, 2, 1)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `t = (1,2,3,4,5,6)`, slice to get every second element.",
        starterCode: "# TODO: Given t=(10,20,30,40,50), slice out the last 3 elements",
      },
    ],
    keyTakeaways: [
      "Slicing a tuple returns another tuple.",
      "start:stop:step rules match lists and strings.",
      "Slicing is a safe way to take a subset without mutation.",
    ],
  },
  "m6-t5": {
    topicId: "m6-t5",
    intro: "Tuples offer just two methods: count() and index().",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-methods",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Tuples only have two built-in methods: `.count(value)` and `.index(value)`, since they're immutable." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "t = (1, 2, 2, 3, 2)\nprint(t.count(2))   # 3\nprint(t.index(3))   # 3" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `t = (\"x\",\"y\",\"x\",\"z\",\"x\")`, count occurrences of `\"x\"` and find the index of `\"z\"`.",
        starterCode: "# TODO: Given t=(5,3,5,5,1), count how many times 5 appears and find index of 3",
      },
    ],
    keyTakeaways: [
      "count(x) returns how many times x appears.",
      "index(x) returns the first position of x.",
      "No append/sort — immutability limits the method set.",
    ],
  },
};
