import type { TopicLesson } from "@/lib/types";

export const module5Lessons: Record<string, TopicLesson> = {
  "m5-t1": {
    topicId: "m5-t1",
    intro:
      "A list stores many values in one variable — like a shopping list or a column of numbers. Lists use square brackets [ ].",
    blocks: [
      {
        type: "infographic",
        infographic: "creating-lists",
      },
      {
        type: "practice",
        practiceLabel: "Create lists",
        ideOnly: true,
        practicePrompt: "Run the code and see fruits, numbers, and mixed lists.",
        starterCode:
          'fruits = ["apple", "banana", "mango"]\n\nnumbers = [10, 20, 30]\n\nmixed = ["Alice", 25, True]\n\nprint(fruits)\nprint(numbers)',
      },
      {
        type: "practice",
        practiceLabel: "Mixed types",
        ideOnly: true,
        practicePrompt: "Run the code and see a list with different data types.",
        starterCode: 'mixed = ["Alice", 25, True]\n\nprint(mixed)',
      },
      {
        type: "practice",
        practiceLabel: "Empty list",
        ideOnly: true,
        practicePrompt: "Run the code and see two ways to create an empty list.",
        starterCode: "empty = []\n\nalso_empty = list()\n\nprint(len(empty))   # 0",
      },
      {
        type: "practice",
        practiceLabel: "List length",
        ideOnly: true,
        practicePrompt: "Run the code and check how many items are in the list.",
        starterCode:
          'fruits = ["apple", "banana", "mango"]\n\nprint(len(fruits))   # 3',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Create a list of 3 hobbies and print it and its length.",
        starterCode:
          'hobbies = ["reading", "coding", "music"]\nprint(hobbies)\nprint(len(hobbies))',
      },
    ],
    keyTakeaways: [
      "Lists use square brackets: [item1, item2, ...].",
      "Items stay in order.",
      "len(my_list) tells how many items.",
    ],
  },
  "m5-t2": {
    topicId: "m5-t2",
    intro:
      "Lists have three important properties: they keep order, you can change them, and they allow duplicate values.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-characteristics",
      },
      {
        type: "practice",
        practiceLabel: "Ordered",
        ideOnly: true,
        practicePrompt: "Run the code and see that list order is preserved.",
        starterCode:
          'fruits = ["apple", "banana", "mango"]\n\nprint(fruits)',
      },
      {
        type: "practice",
        practiceLabel: "Mutable",
        ideOnly: true,
        practicePrompt: "Run the code and see how changing index 1 updates the list.",
        starterCode:
          'fruits = ["apple", "banana", "mango"]\n\nfruits[1] = "orange"\n\nprint(fruits)',
      },
      {
        type: "practice",
        practiceLabel: "Duplicates",
        ideOnly: true,
        practicePrompt: "Run the code and see that duplicate values are allowed.",
        starterCode: "scores = [90, 85, 90, 92]\n\nprint(scores)",
      },
      {
        type: "practice",
        practiceLabel: "Data science",
        ideOnly: true,
        practicePrompt: "Run the code — lists of numbers are a starting point for NumPy.",
        starterCode:
          "numbers = [10, 20, 30, 40, 50]\n\n# Later:\n# numpy.array(numbers)",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Make a list with duplicate numbers. Print it to see duplicates are allowed.",
        starterCode: "nums = [1, 2, 2, 3, 3, 3]\nprint(nums)",
      },
    ],
    keyTakeaways: [
      "Lists are ordered — position matters.",
      "Lists are mutable — you can change them.",
      "Duplicate values are allowed.",
    ],
  },
  "m5-t3": {
    topicId: "m5-t3",
    intro:
      "List indexing works just like strings: position 0 is the first item. Negative indexes count from the end.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-indexing",
      },
      {
        type: "practice",
        practiceLabel: "Indexing",
        ideOnly: true,
        practicePrompt:
          "Run the code and print items using positive and negative indexes.",
        starterCode:
          'colors = ["red", "green", "blue", "yellow"]\n\nprint(colors[0])   # red\nprint(colors[2])   # blue\nprint(colors[-1])  # yellow',
      },
      {
        type: "practice",
        practiceLabel: "Negative",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how negative indexes count from the end.",
        starterCode:
          'colors = ["red", "green", "blue", "yellow"]\n\nprint(colors[-1])   # yellow\nprint(colors[-2])   # blue\nprint(colors[-3])   # green',
      },
      {
        type: "practice",
        practiceLabel: "Error",
        ideOnly: true,
        practicePrompt:
          "Run the code and observe the IndexError for an out-of-range index.",
        starterCode:
          'colors = ["red", "green", "blue", "yellow"]\n\nprint(colors[10])\n\n# IndexError:\n# list index out of range',
      },
      {
        type: "practice",
        practiceLabel: "Length",
        ideOnly: true,
        practicePrompt:
          "Run the code and use len() to find the list size and last item.",
        starterCode:
          'colors = ["red", "green", "blue", "yellow"]\n\nprint(len(colors))      # 4\nprint(colors[len(colors)-1])  # yellow',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "From the cities list, print the first city, third city, and last city.",
        starterCode:
          'cities = ["Paris", "London", "Tokyo", "NYC"]\nprint(cities[0])\nprint(cities[2])\nprint(cities[-1])',
      },
    ],
    keyTakeaways: [
      "First item is index 0.",
      "Use list[i] to access one item.",
      "-1 is the last item.",
    ],
  },
  "m5-t4": {
    topicId: "m5-t4",
    intro:
      "Slicing a list gives you a smaller list (a sub-list). Same rules as strings: [start:end], end not included.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-slicing",
      },
      {
        type: "practice",
        practiceLabel: "Basic",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how [start:end] extracts a sub-list.",
        starterCode:
          'colors = ["red", "green", "blue", "yellow"]\n\nprint(colors[0:2])   # [\'red\', \'green\']\nprint(colors[1:3])   # [\'green\', \'blue\']',
      },
      {
        type: "practice",
        practiceLabel: "Shortcuts",
        ideOnly: true,
        practicePrompt:
          "Run the code and try omitting start or end in a slice.",
        starterCode:
          'colors = ["red", "green", "blue", "yellow"]\n\nprint(colors[:2])   # [\'red\', \'green\']\nprint(colors[2:])   # [\'blue\', \'yellow\']\nprint(colors[:])    # entire list',
      },
      {
        type: "practice",
        practiceLabel: "Step",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how step values skip positions.",
        starterCode:
          "numbers = [10, 20, 30, 40, 50, 60]\n\nprint(numbers[::2])  # [10, 30, 50]\nprint(numbers[::3])  # [10, 40]",
      },
      {
        type: "practice",
        practiceLabel: "Reverse",
        ideOnly: true,
        practicePrompt:
          "Run the code and reverse the list with a negative step.",
        starterCode:
          'colors = ["red", "green", "blue", "yellow"]\n\nprint(colors[::-1])\n\n# [\'yellow\', \'blue\', \'green\', \'red\']',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "From data = [10, 20, 30, 40, 50], slice the middle three numbers.",
        starterCode:
          "data = [10, 20, 30, 40, 50]\nmiddle = data[1:4]\nprint(middle)",
      },
    ],
    keyTakeaways: [
      "[start:end] copies items from start up to (not including) end.",
      "Slicing returns a new list.",
      "Works the same way as string slicing.",
    ],
  },
  "m5-t5": {
    topicId: "m5-t5",
    intro:
      "Lists have helpful methods to add, remove, and sort items. You call them with a dot: my_list.method().",
    blocks: [
      {
        type: "infographic",
        infographic: "list-methods",
      },
      {
        type: "practice",
        practiceLabel: "Add",
        ideOnly: true,
        practicePrompt:
          "Run the code and try append() and insert() to add items.",
        starterCode:
          'items = ["pen"]\n\nitems.append("pencil")\nprint(items)\n\nitems.insert(0, "eraser")\nprint(items)',
      },
      {
        type: "practice",
        practiceLabel: "Remove",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how remove() deletes the first matching value.",
        starterCode:
          "nums = [1, 2, 3, 2]\n\nnums.remove(2)\n\nprint(nums)\n\n# [1, 3, 2]",
      },
      {
        type: "practice",
        practiceLabel: "Pop",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how pop() removes and returns the last item.",
        starterCode:
          "nums = [1, 3, 2]\n\nlast = nums.pop()\n\nprint(last)\nprint(nums)",
      },
      {
        type: "practice",
        practiceLabel: "Sort",
        ideOnly: true,
        practicePrompt:
          "Run the code and sort the list in ascending order with sort().",
        starterCode:
          "scores = [85, 92, 78]\n\nscores.sort()\n\nprint(scores)\n\n# [78, 85, 92]",
      },
      {
        type: "practice",
        practiceLabel: "Length",
        ideOnly: true,
        practicePrompt: "Run the code and use len() to count list items.",
        starterCode:
          "scores = [78, 85, 92]\n\nprint(len(scores))\n\n# 3",
      },
      {
        type: "practice",
        practiceLabel: "Extend",
        ideOnly: true,
        practicePrompt:
          "Run the code and use extend() to merge another list.",
        starterCode:
          "a = [1, 2]\nb = [3, 4]\n\na.extend(b)\nprint(a)\n\n# [1, 2, 3, 4]",
      },
      {
        type: "practice",
        practiceLabel: "Reverse",
        ideOnly: true,
        practicePrompt: "Run the code and reverse the list with reverse().",
        starterCode:
          "nums = [1, 2, 3]\n\nnums.reverse()\nprint(nums)\n\n# [3, 2, 1]",
      },
      {
        type: "practice",
        practiceLabel: "Clear",
        ideOnly: true,
        practicePrompt: "Run the code and empty the list with clear().",
        starterCode:
          'items = ["a", "b", "c"]\n\nitems.clear()\nprint(items)\n\n# []',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Start with [3, 1, 4]. Append 1, sort, then print the list.",
        starterCode:
          "nums = [3, 1, 4]\nnums.append(1)\nnums.sort()\nprint(nums)",
      },
    ],
    keyTakeaways: [
      "append() adds one item; insert() adds at an index; extend() merges lists.",
      "append([3,4]) nests a list; extend([3,4]) adds each element separately.",
      "remove() deletes by value; pop() removes and returns (last or at index).",
      "sort(), reverse(), and clear() change the list in place; count() and index() search.",
    ],
  },
  "m5-t6": {
    topicId: "m5-t6",
    intro:
      "You can change list items directly by index, or update a slice with new values. This is what “mutable” means in practice.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-modifying",
      },
      {
        type: "practice",
        practiceLabel: "Single",
        ideOnly: true,
        practicePrompt:
          "Run the code and change one item by index.",
        starterCode:
          "grades = [70, 80, 90]\n\ngrades[1] = 85\n\nprint(grades)\n\n# [70, 85, 90]",
      },
      {
        type: "practice",
        practiceLabel: "Slice",
        ideOnly: true,
        practicePrompt:
          "Run the code and replace multiple items with slice assignment.",
        starterCode:
          "nums = [1, 2, 3, 4, 5]\n\nnums[1:3] = [20, 30]\n\nprint(nums)\n\n# [1, 20, 30, 4, 5]",
      },
      {
        type: "practice",
        practiceLabel: "Extend",
        ideOnly: true,
        practicePrompt:
          "Run the code and use extend() to combine two lists.",
        starterCode:
          "a = [1, 2]\nb = [3, 4]\n\na.extend(b)\n\nprint(a)\n\n# [1, 2, 3, 4]",
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Create prices = [10, 20, 30]. Change middle price to 25. Add 40 at the end. Print.",
        starterCode:
          "prices = [10, 20, 30]\nprices[1] = 25\nprices.append(40)\nprint(prices)",
      },
    ],
    keyTakeaways: [
      "list[i] = new_value changes one item.",
      "Slice assignment replaces multiple items at once.",
      "extend() adds all items from another list.",
    ],
  },
};
