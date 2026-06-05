import type { TopicLesson } from "@/lib/types";

export const module7Lessons: Record<string, TopicLesson> = {
  "m7-t1": {
    topicId: "m7-t1",
    intro:
      "A set holds unique values with no guaranteed order. Use sets when you care about membership and uniqueness, not position.",
    blocks: [
      { type: "heading", content: "Creating sets" },
      {
        type: "paragraph",
        content:
          "Curly braces work like dictionaries but store single values. Duplicates are removed automatically.",
      },
      {
        type: "code",
        code:
          'colors = {"red", "green", "blue"}\nnums = {1, 2, 2, 3, 3}\nprint(colors)\nprint(nums)  # {1, 2, 3}',
      },
      {
        type: "visual",
        diagram: {
          title: "List vs Set",
          variant: "compare",
          nodes: [
            { id: "list", label: "List", sublabel: "Ordered, duplicates OK" },
            { id: "set", label: "Set", sublabel: "Unordered, unique only" },
          ],
        },
      },
      { type: "heading", content: "Empty set and set()" },
      {
        type: "code",
        code:
          'empty = set()  # correct\n# empty = {}  # this creates a dict!\n\nfrom_list = set([1, 2, 2, 3])\nprint(from_list)',
      },
      {
        type: "tip",
        content:
          "Set items must be immutable (numbers, strings, tuples). Lists cannot be set elements.",
      },
      {
        type: "practice",
        practicePrompt:
          "Create a set from [10, 20, 10, 30]. Print the set and its length.",
        starterCode:
          "values = set([10, 20, 10, 30])\nprint(values)\nprint(len(values))",
      },
    ],
    keyTakeaways: [
      "Sets use {} or set() — never {} for an empty set.",
      "Duplicates are removed automatically.",
      "Sets are unordered; do not rely on display order.",
    ],
  },
  "m7-t2": {
    topicId: "m7-t2",
    intro:
      "Sets are mutable: you can add and remove items. The collection still enforces uniqueness.",
    blocks: [
      { type: "heading", content: "Adding items" },
      {
        type: "code",
        code:
          'tags = {"python", "data"}\ntags.add("ml")\ntags.add("python")  # already there — no duplicate\nprint(tags)',
      },
      { type: "heading", content: "Removing items" },
      {
        type: "code",
        code:
          'tags.remove("data")  # KeyError if missing\n# tags.discard("data")  # no error if missing\n\npopped = tags.pop()  # removes arbitrary item\nprint(tags, popped)',
      },
      {
        type: "heading", content: "Clear the set" },
      { type: "code", code: "tags.clear()\nprint(tags)  # set()" },
      {
        type: "practice",
        practicePrompt:
          "Start with skills = set(). Add three skills, remove one with discard, print the set.",
        starterCode:
          'skills = set()\nskills.add("pandas")\nskills.add("sql")\nskills.add("stats")\nskills.discard("sql")\nprint(skills)',
      },
    ],
    keyTakeaways: [
      "add() inserts one value.",
      "remove() errors if missing; discard() does not.",
      "clear() removes all items.",
    ],
  },
  "m7-t3": {
    topicId: "m7-t3",
    intro:
      "Set operations compare two sets: union (all items), intersection (shared items), and difference (items in one but not the other).",
    blocks: [
      {
        type: "code",
        code:
          'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a | b)   # union: {1,2,3,4,5,6}\nprint(a & b)   # intersection: {3,4}\nprint(a - b)   # difference: {1,2}',
      },
      {
        type: "visual",
        diagram: {
          title: "Intersection — items in BOTH sets",
          variant: "flow",
          nodes: [
            { id: "a", label: "Set A", sublabel: "{1,2,3,4}" },
            { id: "b", label: "Set B", sublabel: "{3,4,5,6}" },
            { id: "x", label: "A & B", sublabel: "{3,4}" },
          ],
          arrows: [
            { from: "a", to: "x" },
            { from: "b", to: "x" },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "You can also write a.union(b), a.intersection(b), and a.difference(b). The |, &, and - operators are shorter.",
      },
      {
        type: "practice",
        practicePrompt:
          "Given enrolled = {101, 102, 103} and passed = {102, 104}, print union, intersection, and who enrolled but did not pass.",
        starterCode:
          "enrolled = {101, 102, 103}\npassed = {102, 104}\nprint(enrolled | passed)\nprint(enrolled & passed)\nprint(enrolled - passed)",
      },
    ],
    keyTakeaways: [
      "| or union() — combine both sets.",
      "& or intersection() — only shared items.",
      "- or difference() — in first set but not second.",
    ],
  },
  "m7-t4": {
    topicId: "m7-t4",
    intro:
      "Sets include helpful methods for testing relationships and copying. These are common in data cleaning and validation.",
    blocks: [
      {
        type: "code",
        code:
          'a = {1, 2, 3}\nb = {2, 3, 4}\n\nprint(a.issubset(b))      # False\nprint(a.issuperset({1, 2}))  # True\nprint(a.isdisjoint({5, 6}))  # True — no overlap',
      },
      {
        type: "list",
        items: [
          "issubset(other) — all items of a are in other",
          "issuperset(other) — a contains all of other",
          "isdisjoint(other) — no shared items",
          "copy() — shallow copy of the set",
        ],
      },
      {
        type: "tip",
        content:
          "Use sets to remove duplicate values from a list: unique = list(set(items)). Order is not preserved unless you sort afterward.",
      },
      {
        type: "practice",
        practicePrompt:
          "Check whether required = {\"id\", \"name\"} is a subset of columns = {\"id\", \"name\", \"age\"}. Print the result.",
        starterCode:
          'required = {"id", "name"}\ncolumns = {"id", "name", "age"}\nprint(required.issubset(columns))',
      },
    ],
    keyTakeaways: [
      "issubset, issuperset, isdisjoint test relationships between sets.",
      "Sets help remove duplicates quickly.",
      "Useful before analysis when you need unique categories or IDs.",
    ],
  },
};
