import type { TopicLesson } from "@/lib/types";

export const module7Lessons: Record<string, TopicLesson> = {
  "m7-t1": {
    topicId: "m7-t1",
    intro: "Sets store unique, unordered items using curly braces or set().",
    blocks: [
      {
        type: "infographic",
        infographic: "set-syntax",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Sets are created with curly braces `{}` or `set()`. Duplicate values are automatically removed. Note: `{}` alone creates an empty dict, not a set — use `set()` for an empty set." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "s1 = {1, 2, 3, 2, 1}\nprint(s1)          # {1, 2, 3}\ns2 = set()\nprint(type(s2))    # <class 'set'>" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a set from the list `[5,5,6,7,7,8]` and print the unique values.",
        starterCode: "# TODO: Create a set from the list [1,2,2,3,3,3,4] and print it",
      },
    ],
    keyTakeaways: [
      "Sets hold unique items; duplicates are dropped.",
      "Use set() for an empty set — {} creates a dict.",
      "Sets are unordered; do not rely on position.",
    ],
  },
  "m7-t2": {
    topicId: "m7-t2",
    intro: "Update sets with add, update, remove, and discard.",
    blocks: [
      {
        type: "infographic",
        infographic: "set-updating",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Add elements with `.add()` (single) or `.update()` (multiple). Remove with `.remove()` (errors if missing) or `.discard()` (safe)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "s = {1, 2, 3}\ns.add(4)\ns.update([5, 6])\ns.discard(1)\nprint(s)   # {2,3,4,5,6}" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `s = {1,2,3}`, add `4`, then remove `2`, and print the final set.",
        starterCode: "# TODO: Start with {10,20}, add 30, update with [40,50], remove 10",
      },
    ],
    keyTakeaways: [
      "add inserts one item; update merges iterables.",
      "remove raises KeyError if missing; discard does not.",
      "Updating a set mutates it in place.",
    ],
  },
  "m7-t3": {
    topicId: "m7-t3",
    intro: "Set operations include union, intersection, difference, and symmetric difference.",
    blocks: [
      {
        type: "infographic",
        infographic: "set-operations",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Sets support mathematical operations: `|` union, `&` intersection, `-` difference, `^` symmetric difference." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a | b)   # {1,2,3,4}\nprint(a & b)   # {2,3}\nprint(a - b)   # {1}\nprint(a ^ b)   # {1,4}" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `a = {1,2,3}`, `b = {3,4,5}`, print the union and intersection.",
        starterCode: "# TODO: Given a={1,2,3,4}, b={3,4,5,6}, compute union, intersection, difference, symmetric difference",
      },
    ],
    keyTakeaways: [
      "|, &, -, ^ (or union/intersection/difference methods) combine sets.",
      "Operations return new sets unless you use update variants.",
      "Set algebra is powerful for unique-item problems.",
    ],
  },
  "m7-t4": {
    topicId: "m7-t4",
    intro: "Set methods like issubset and isdisjoint compare relationships between sets.",
    blocks: [
      {
        type: "infographic",
        infographic: "set-methods",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Additional methods: `.issubset()`, `.issuperset()`, `.isdisjoint()`, `.clear()`, `.copy()`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "a = {1, 2}\nb = {1, 2, 3}\nprint(a.issubset(b))     # True\nprint(b.issuperset(a))   # True\nprint(a.isdisjoint({5,6})) # True" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `a = {1,2}`, `b = {1,2,3,4}`, check if `a` is a subset of `b`, and if `a` and `{9,10}` are disjoint.",
        starterCode: "# TODO: Check if {2,3} is a subset of {1,2,3,4} and if they're disjoint",
      },
    ],
    keyTakeaways: [
      "issubset / issuperset compare containment.",
      "isdisjoint is True when sets share no items.",
      "These methods return booleans for clear checks.",
    ],
  },
};
