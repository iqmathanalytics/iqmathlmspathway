import type { TopicLesson } from "@/lib/types";

export const module6Lessons: Record<string, TopicLesson> = {
  "m6-t1": {
    topicId: "m6-t1",
    intro:
      "A tuple stores multiple values in a fixed order, like a list — but you create it with parentheses () instead of square brackets [ ].",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-syntax",
      },
      {
        type: "practice",
        practiceLabel: "Create",
        ideOnly: true,
        practicePrompt:
          "Run the code and create tuples with coordinates, colors, and a single item.",
        starterCode:
          'coordinates = (10, 20)\n\ncolors = ("red", "green", "blue")\n\nsingle = (42,)\n\nprint(coordinates)\nprint(type(coordinates))',
      },
      {
        type: "practice",
        practiceLabel: "Comma",
        ideOnly: true,
        practicePrompt:
          "Run the code and see why a trailing comma is required for single-item tuples.",
        starterCode:
          "a = (42)\nb = (42,)\n\nprint(type(a))\nprint(type(b))",
      },
      {
        type: "practice",
        practiceLabel: "Convert",
        ideOnly: true,
        practicePrompt:
          "Run the code and convert a list to a tuple with tuple().",
        starterCode:
          "nums = [1, 2, 3]\n\nas_tuple = tuple(nums)\n\nprint(as_tuple)\n\n# (1, 2, 3)",
      },
      {
        type: "practice",
        practiceLabel: "Indexing",
        ideOnly: true,
        practicePrompt:
          "Run the code and access tuple items by positive and negative index.",
        starterCode:
          'colors = ("red", "green", "blue")\n\nprint(colors[0])   # red\nprint(colors[1])   # green\nprint(colors[-1])  # blue',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Create a tuple with your birth year, month, and day (as numbers). Print the tuple and its length.",
        starterCode:
          "birth = (2000, 6, 15)\nprint(birth)\nprint(len(birth))",
      },
    ],
    keyTakeaways: [
      "Tuples use parentheses: (item1, item2, ...).",
      "Single-item tuples require a trailing comma: (42,).",
      "tuple() converts a list or string into a tuple.",
    ],
  },
  "m6-t2": {
    topicId: "m6-t2",
    intro:
      "Tuples are ordered like lists, but immutable — once created, you cannot change, add, or remove items. That makes them useful for fixed records.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-properties",
      },
      {
        type: "practice",
        practiceLabel: "Ordered",
        ideOnly: true,
        practicePrompt:
          "Run the code and see that tuple order is preserved with indexing.",
        starterCode:
          'days = ("Mon", "Tue", "Wed")\n\nprint(days[0])  # Mon\nprint(days[1])  # Tue',
      },
      {
        type: "practice",
        practiceLabel: "Immutable",
        ideOnly: true,
        practicePrompt:
          "Run the code — the assignment is commented out because tuples cannot be changed.",
        starterCode:
          "point = (3, 4)\n\n# point[0] = 10\n\nprint(point)",
      },
      {
        type: "practice",
        practiceLabel: "Error",
        ideOnly: true,
        practicePrompt:
          "Run the code and observe the TypeError when modifying a tuple.",
        starterCode:
          "point = (3, 4)\n\npoint[0] = 10\n\n# TypeError:\n# 'tuple' object does not support item assignment",
      },
      {
        type: "practice",
        practiceLabel: "Duplicates",
        ideOnly: true,
        practicePrompt:
          "Run the code and see that duplicate values are allowed in tuples.",
        starterCode: "numbers = (1, 1, 2)\n\nprint(numbers)\n\n# (1, 1, 2)",
      },
      {
        type: "practice",
        practiceLabel: "Mixed",
        ideOnly: true,
        practicePrompt:
          "Run the code and see a tuple holding string, int, and bool values.",
        starterCode: 'person = ("Alice", 25, True)\n\nprint(person)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Create tuple rgb = (255, 128, 0). Print it. Try uncommenting the assignment line and observe the error.",
        starterCode:
          'rgb = (255, 128, 0)\nprint(rgb)\n\n# Uncomment to see immutability:\n# rgb[0] = 300',
      },
    ],
    keyTakeaways: [
      "Tuples are ordered and allow duplicates.",
      "Tuples are immutable — items cannot be changed after creation.",
      "Use tuples when data should stay fixed (dates, coordinates, settings).",
    ],
  },
  "m6-t3": {
    topicId: "m6-t3",
    intro:
      "Indexing and negative indexing work exactly as they do for lists and strings. Position 0 is the first element.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-indexing",
      },
      {
        type: "practice",
        practiceLabel: "Indexing",
        ideOnly: true,
        practicePrompt:
          "Run the code and access tuple items using positive and negative indexes.",
        starterCode:
          'data = ("Mon", "Tue", "Wed", "Thu", "Fri")\n\nprint(data[0])   # Mon\nprint(data[2])   # Wed\nprint(data[-1])  # Fri',
      },
      {
        type: "practice",
        practiceLabel: "Negative",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how negative indexes count from the end.",
        starterCode:
          'data = ("Mon", "Tue", "Wed", "Thu", "Fri")\n\nprint(data[-1])  # Fri\nprint(data[-2])  # Thu\nprint(data[-3])  # Wed',
      },
      {
        type: "practice",
        practiceLabel: "Error",
        ideOnly: true,
        practicePrompt:
          "Run the code and observe the IndexError for an out-of-range index.",
        starterCode:
          'data = ("Mon", "Tue", "Wed", "Thu", "Fri")\n\nprint(data[10])\n\n# IndexError:\n# tuple index out of range',
      },
      {
        type: "practice",
        practiceLabel: "Scores",
        ideOnly: true,
        practicePrompt:
          "Run the code and print the first, third, and last scores from the tuple.",
        starterCode:
          "scores = (88, 92, 79, 95)\n\nprint(scores[0])   # 88\nprint(scores[2])   # 79\nprint(scores[-1])  # 95",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Given scores = (88, 92, 79, 95), print the first score, third score, and last score.",
        starterCode:
          "scores = (88, 92, 79, 95)\nprint(scores[0])\nprint(scores[2])\nprint(scores[-1])",
      },
    ],
    keyTakeaways: [
      "tuple[i] returns the item at index i.",
      "Index 0 is the first element; -1 is the last.",
      "Same indexing rules as lists and strings.",
    ],
  },
  "m6-t4": {
    topicId: "m6-t4",
    intro:
      "Slicing creates a new tuple containing part of the original. The original tuple is never modified.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-slicing",
      },
      {
        type: "practice",
        practiceLabel: "Basic",
        ideOnly: true,
        practicePrompt:
          "Run the code and try basic tuple slices with [start:end].",
        starterCode:
          'letters = ("a", "b", "c", "d", "e")\n\nprint(letters[1:4])\nprint(letters[:3])\nprint(letters[2:])',
      },
      {
        type: "practice",
        practiceLabel: "Example",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how letters[1:4] includes start but excludes end.",
        starterCode:
          'letters = ("a", "b", "c", "d", "e")\n\nprint(letters[1:4])\n\n# (\'b\', \'c\', \'d\')',
      },
      {
        type: "practice",
        practiceLabel: "Shortcuts",
        ideOnly: true,
        practicePrompt:
          "Run the code and try omitting start or end in a slice.",
        starterCode:
          'letters = ("a", "b", "c", "d", "e")\n\nprint(letters[:3])\nprint(letters[2:])\nprint(letters[:])',
      },
      {
        type: "practice",
        practiceLabel: "Step",
        ideOnly: true,
        practicePrompt:
          "Run the code and try step slicing to skip items or reverse.",
        starterCode:
          "numbers = (10, 20, 30, 40, 50, 60)\n\nprint(numbers[::2])\nprint(numbers[::-1])",
      },
      {
        type: "practice",
        practiceLabel: "Days",
        ideOnly: true,
        practicePrompt:
          "Run the code and slice the days tuple into three parts.",
        starterCode:
          'days = ("Mon", "Tue", "Wed", "Thu", "Fri")\n\nprint(days[1:3])\nprint(days[:3])\nprint(days[3:])',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "From t = (10, 20, 30, 40, 50), slice and print the middle three values.",
        starterCode: "t = (10, 20, 30, 40, 50)\nprint(t[1:4])",
      },
    ],
    keyTakeaways: [
      "Slicing returns a new tuple.",
      "End index is not included in the slice.",
      "Omit start or end to slice from the beginning or to the end.",
    ],
  },
  "m6-t5": {
    topicId: "m6-t5",
    intro:
      "Tuples have only two built-in methods — count() and index() — because they cannot be modified in place.",
    blocks: [
      {
        type: "infographic",
        infographic: "tuple-methods",
      },
      {
        type: "practice",
        practiceLabel: "Count",
        ideOnly: true,
        practicePrompt:
          "Run the code and use count() to find how many times 2 appears.",
        starterCode:
          "values = (1, 2, 2, 3, 2)\n\nprint(values.count(2))",
      },
      {
        type: "practice",
        practiceLabel: "Index",
        ideOnly: true,
        practicePrompt:
          "Run the code and use index() to find the position of 3.",
        starterCode:
          "values = (1, 2, 2, 3, 2)\n\nprint(values.index(3))",
      },
      {
        type: "practice",
        practiceLabel: "Length",
        ideOnly: true,
        practicePrompt: "Run the code and use len() to count tuple items.",
        starterCode: "values = (1, 2, 2, 3, 2)\n\nprint(len(values))",
      },
      {
        type: "practice",
        practiceLabel: "Error",
        ideOnly: true,
        practicePrompt:
          "Run the code and observe the ValueError when a value is not found.",
        starterCode:
          "values = (1, 2, 2, 3, 2)\n\nprint(values.index(5))\n\n# ValueError: tuple.index(x): x not in tuple",
      },
      {
        type: "practice",
        practiceLabel: "Scores",
        ideOnly: true,
        practicePrompt:
          "Run the code and use count(), index(), and len() on the scores tuple.",
        starterCode:
          "scores = (90, 85, 90, 95, 90)\n\nprint(scores.count(90))\nprint(scores.index(95))\nprint(len(scores))",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Use count and index on tpl = (5, 10, 5, 20, 5). Print both results for the value 5.",
        starterCode:
          "tpl = (5, 10, 5, 20, 5)\nprint(tpl.count(5))\nprint(tpl.index(5))",
      },
    ],
    keyTakeaways: [
      "Tuples expose count() and index() only.",
      "Use len() for length.",
      "Fewer methods than lists because tuples are immutable.",
    ],
  },
};
