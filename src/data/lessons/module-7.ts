import type { TopicLesson } from "@/lib/types";

export const module7Lessons: Record<string, TopicLesson> = {
  "m7-t1": {
    topicId: "m7-t1",
    intro:
      "A set holds unique values with no guaranteed order. Use sets when you care about membership and uniqueness, not position.",
    blocks: [
      {
        type: "infographic",
        infographic: "set-syntax",
      },
      {
        type: "practice",
        practiceLabel: "Create",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how sets remove duplicate values automatically.",
        starterCode:
          'colors = {"red", "green", "blue"}\n\nnums = {1, 2, 2, 3, 3}\n\nprint(colors)\nprint(nums)',
      },
      {
        type: "practice",
        practiceLabel: "Empty",
        ideOnly: true,
        practicePrompt: "Run the code and create an empty set with set().",
        starterCode: "empty = set()\n\nprint(empty)",
      },
      {
        type: "practice",
        practiceLabel: "Dict trap",
        ideOnly: true,
        practicePrompt:
          "Run the code and see why {} creates a dict, not an empty set.",
        starterCode: 'empty = {}\n\nprint(type(empty))\n\n# dict',
      },
      {
        type: "practice",
        practiceLabel: "Convert",
        ideOnly: true,
        practicePrompt:
          "Run the code and convert a list to a set to remove duplicates.",
        starterCode:
          "numbers = [1, 2, 2, 3]\n\nunique_numbers = set(numbers)\n\nprint(unique_numbers)",
      },
      {
        type: "practice",
        practiceLabel: "Valid",
        ideOnly: true,
        practicePrompt:
          "Run the code — set elements must be immutable (lists are not allowed).",
        starterCode:
          'valid = {1, "Python", (1, 2)}\n\n# invalid = {[1, 2]}',
      },
      {
        type: "practice",
        practiceLabel: "Practice",
        ideOnly: true,
        practicePrompt:
          "Run the code and remove duplicates from a list using set().",
        starterCode:
          "values = [10, 20, 20, 30, 30]\n\nunique_values = set(values)\n\nprint(unique_values)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
      {
        type: "infographic",
        infographic: "set-updating",
      },
      {
        type: "practice",
        practiceLabel: "Add",
        ideOnly: true,
        practicePrompt:
          "Run the code and use add() to insert items without duplicates.",
        starterCode:
          'tags = {"python", "data"}\n\ntags.add("ml")\ntags.add("python")\n\nprint(tags)',
      },
      {
        type: "practice",
        practiceLabel: "Remove",
        ideOnly: true,
        practicePrompt: "Run the code and remove an item with remove().",
        starterCode:
          'tags = {"python", "data", "ml"}\n\ntags.remove("data")\n\nprint(tags)',
      },
      {
        type: "practice",
        practiceLabel: "Discard",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how discard() safely handles missing items.",
        starterCode:
          'tags = {"python", "ml"}\n\ntags.discard("data")\n\nprint(tags)',
      },
      {
        type: "practice",
        practiceLabel: "Pop",
        ideOnly: true,
        practicePrompt:
          "Run the code and see pop() remove an arbitrary item from the set.",
        starterCode:
          'tags = {"python", "data", "ml"}\n\nitem = tags.pop()\n\nprint(item)\nprint(tags)',
      },
      {
        type: "practice",
        practiceLabel: "Clear",
        ideOnly: true,
        practicePrompt: "Run the code and clear all items from the set.",
        starterCode:
          'tags = {"python", "data", "ml"}\n\ntags.clear()\n\nprint(tags)',
      },
      {
        type: "practice",
        practiceLabel: "Skills",
        ideOnly: true,
        practicePrompt:
          'Add "ml" and remove "sql" from skills = {"python", "sql"}.',
        starterCode:
          'skills = {"python", "sql"}\n\nskills.add("ml")\nskills.remove("sql")\n\nprint(skills)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
        type: "infographic",
        infographic: "set-operations",
      },
      {
        type: "practice",
        practiceLabel: "Basic",
        ideOnly: true,
        practicePrompt:
          "Run the code and try union, intersection, and difference operators.",
        starterCode:
          "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a | b)\nprint(a & b)\nprint(a - b)",
      },
      {
        type: "practice",
        practiceLabel: "Union",
        ideOnly: true,
        practicePrompt: "Run the code and combine both sets with union (|).",
        starterCode:
          "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a | b)",
      },
      {
        type: "practice",
        practiceLabel: "Intersection",
        ideOnly: true,
        practicePrompt:
          "Run the code and find items present in both sets with &.",
        starterCode:
          "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a & b)",
      },
      {
        type: "practice",
        practiceLabel: "Difference",
        ideOnly: true,
        practicePrompt:
          "Run the code and find items only in set A with difference (-).",
        starterCode:
          "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a - b)",
      },
      {
        type: "practice",
        practiceLabel: "Methods",
        ideOnly: true,
        practicePrompt:
          "Run the code and try union(), intersection(), and difference() methods.",
        starterCode:
          "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a.union(b))\nprint(a.intersection(b))\nprint(a.difference(b))",
      },
      {
        type: "practice",
        practiceLabel: "Practice",
        ideOnly: true,
        practicePrompt:
          "Find union, intersection, and difference (x - y) for the two sets.",
        starterCode:
          "x = {10, 20, 30}\ny = {20, 30, 40}\n\nprint(x | y)\nprint(x & y)\nprint(x - y)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
        type: "infographic",
        infographic: "set-methods",
      },
      {
        type: "practice",
        practiceLabel: "Relationships",
        ideOnly: true,
        practicePrompt:
          "Run the code and test issubset, issuperset, and isdisjoint.",
        starterCode:
          "a = {1, 2, 3}\nb = {2, 3, 4}\n\nprint(a.issubset(b))      # False\nprint(a.issuperset({1, 2}))  # True\nprint(a.isdisjoint({5, 6}))  # True",
      },
      {
        type: "practice",
        practiceLabel: "Subset",
        ideOnly: true,
        practicePrompt: "Run the code and check whether a is a subset of b.",
        starterCode:
          "a = {1, 2, 3}\nb = {2, 3, 4}\n\nprint(a.issubset(b))",
      },
      {
        type: "practice",
        practiceLabel: "Superset",
        ideOnly: true,
        practicePrompt:
          "Run the code and check whether a is a superset of {1, 2}.",
        starterCode: "a = {1, 2, 3}\n\nprint(a.issuperset({1, 2}))",
      },
      {
        type: "practice",
        practiceLabel: "Disjoint",
        ideOnly: true,
        practicePrompt:
          "Run the code and check whether a shares no items with {5, 6}.",
        starterCode: "a = {1, 2, 3}\n\nprint(a.isdisjoint({5, 6}))",
      },
      {
        type: "practice",
        practiceLabel: "Copy",
        ideOnly: true,
        practicePrompt: "Run the code and copy a set with copy().",
        starterCode:
          "original = {1, 2, 3}\nduplicate = original.copy()\n\nprint(duplicate)",
      },
      {
        type: "practice",
        practiceLabel: "Dedupe",
        ideOnly: true,
        practicePrompt:
          "Run the code and remove duplicates from a list using set().",
        starterCode:
          "items = [1, 2, 2, 3, 3, 3]\n\nunique = list(set(items))\n\nprint(unique)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Check whether required = {"id", "name"} is a subset of columns = {"id", "name", "age"}. Print the result.',
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
