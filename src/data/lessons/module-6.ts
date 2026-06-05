import type { TopicLesson } from "@/lib/types";

export const module6Lessons: Record<string, TopicLesson> = {
  "m6-t1": {
    topicId: "m6-t1",
    intro:
      "A tuple stores multiple values in a fixed order, like a list — but you create it with parentheses () instead of square brackets [ ].",
    blocks: [
      { type: "heading", content: "Creating tuples" },
      {
        type: "paragraph",
        content:
          "Use parentheses with comma-separated values. A tuple with one item still needs a trailing comma.",
      },
      {
        type: "code",
        code:
          'coordinates = (10, 20)\ncolors = ("red", "green", "blue")\nsingle = (42,)  # note the comma\n\nprint(coordinates)\nprint(type(coordinates))',
      },
      {
        type: "visual",
        diagram: {
          title: "List [ ] vs Tuple ( )",
          variant: "compare",
          nodes: [
            { id: "list", label: "List", sublabel: "[1, 2, 3]" },
            { id: "tuple", label: "Tuple", sublabel: "(1, 2, 3)" },
          ],
        },
      },
      {
        type: "heading",
        content: "Tuple from other sequences",
      },
      {
        type: "code",
        code: 'nums = [1, 2, 3]\nas_tuple = tuple(nums)\nprint(as_tuple)',
      },
      {
        type: "practice",
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
      { type: "heading", content: "Ordered" },
      {
        type: "paragraph",
        content: "Index positions work the same as lists. Order is preserved.",
      },
      { type: "heading", content: "Immutable" },
      {
        type: "code",
        code:
          'point = (3, 4)\n# point[0] = 10  # TypeError — cannot assign to tuple item\nprint(point)',
      },
      {
        type: "visual",
        diagram: {
          title: "Why immutability matters",
          variant: "flow",
          nodes: [
            { id: "t", label: "Tuple", sublabel: "Fixed data" },
            { id: "u", label: "Use case", sublabel: "Coordinates, dates" },
            { id: "s", label: "Safety", sublabel: "Won't change by accident" },
          ],
          arrows: [
            { from: "t", to: "u" },
            { from: "u", to: "s" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Allow duplicates: (1, 1, 2) is valid.",
          "Can hold mixed types: (\"Alice\", 25, True).",
          "Often used for rows of data that should not change.",
        ],
      },
      {
        type: "tip",
        content:
          "In Pandas later, rows can behave like records; tuples are the built-in way to group fixed fields in plain Python.",
      },
      {
        type: "practice",
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
        type: "code",
        code:
          'data = ("Mon", "Tue", "Wed", "Thu", "Fri")\nprint(data[0])   # Mon\nprint(data[2])   # Wed\nprint(data[-1])  # Fri',
      },
      {
        type: "visual",
        diagram: {
          title: "Indexes in a 5-day tuple",
          variant: "stack",
          nodes: [
            { id: "0", label: "Mon", sublabel: "[0]" },
            { id: "1", label: "Tue", sublabel: "[1]" },
            { id: "2", label: "Wed", sublabel: "[2]" },
            { id: "3", label: "Thu", sublabel: "[3]" },
            { id: "4", label: "Fri", sublabel: "[4]" },
          ],
        },
      },
      {
        type: "practice",
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
        type: "code",
        code:
          'letters = ("a", "b", "c", "d", "e")\nprint(letters[1:4])   # ("b", "c", "d")\nprint(letters[:3])    # ("a", "b", "c")\nprint(letters[2:])    # ("c", "d", "e")',
      },
      {
        type: "paragraph",
        content:
          "Slice notation [start:end] includes start and excludes end — identical to lists and strings.",
      },
      {
        type: "practice",
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
        type: "code",
        code:
          'values = (1, 2, 2, 3, 2)\nprint(values.count(2))   # 3\nprint(values.index(3))  # 3 (position of first 3)',
      },
      {
        type: "list",
        items: [
          "count(x) — how many times x appears",
          "index(x) — position of the first x (raises ValueError if missing)",
          "len(t) — number of items (built-in function, not a method)",
        ],
      },
      {
        type: "practice",
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
