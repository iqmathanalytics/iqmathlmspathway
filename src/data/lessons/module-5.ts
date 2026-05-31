import type { TopicLesson } from "@/lib/types";

export const module5Lessons: Record<string, TopicLesson> = {
  "m5-t1": {
    topicId: "m5-t1",
    intro:
      "A list stores many values in one variable — like a shopping list or a column of numbers. Lists use square brackets [ ].",
    blocks: [
      { type: "heading", content: "Creating a list" },
      {
        type: "code",
        code:
          'fruits = ["apple", "banana", "mango"]\nnumbers = [10, 20, 30]\nmixed = ["Alice", 25, True]  # different types allowed\nprint(fruits)\nprint(numbers)',
      },
      {
        type: "visual",
        diagram: {
          title: "List = ordered items in [ ]",
          variant: "stack",
          nodes: [
            { id: "0", label: "apple", sublabel: "index 0" },
            { id: "1", label: "banana", sublabel: "index 1" },
            { id: "2", label: "mango", sublabel: "index 2" },
          ],
        },
      },
      { type: "heading", content: "Empty list" },
      { type: "code", code: "empty = []\nalso_empty = list()\nprint(len(empty))  # 0" },
      {
        type: "practice",
        practicePrompt: "Create a list of 3 hobbies and print it and its length.",
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
        type: "heading",
        content: "1. Ordered",
      },
      {
        type: "paragraph",
        content: "Items stay in the order you put them. The first item is always first unless you move it.",
      },
      { type: "heading", content: "2. Mutable (changeable)" },
      {
        type: "paragraph",
        content: "You can add, remove, or change items after creating the list — unlike tuples later.",
      },
      { type: "heading", content: "3. Allow duplicates" },
      {
        type: "code",
        code: 'scores = [90, 85, 90, 92]\nprint(scores)  # 90 appears twice — that is OK',
      },
      {
        type: "visual",
        diagram: {
          title: "List vs future tuple (preview)",
          variant: "compare",
          nodes: [
            { id: "list", label: "List [ ]", sublabel: "Ordered, changeable" },
            { id: "tuple", label: "Tuple ( )", sublabel: "Ordered, fixed — later" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "In data science, lists of numbers often become NumPy arrays later — faster for big math.",
      },
      {
        type: "practice",
        practicePrompt: "Make a list with duplicate numbers. Print it to see duplicates are allowed.",
        starterCode: 'nums = [1, 2, 2, 3, 3, 3]\nprint(nums)',
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
        type: "code",
        code:
          'colors = ["red", "green", "blue", "yellow"]\nprint(colors[0])   # red\nprint(colors[2])   # blue\nprint(colors[-1])  # yellow (last)',
      },
      {
        type: "visual",
        diagram: {
          title: "Indexes in colors list",
          variant: "stack",
          nodes: [
            { id: "0", label: "red", sublabel: "[0]" },
            { id: "1", label: "green", sublabel: "[1]" },
            { id: "2", label: "blue", sublabel: "[2]" },
            { id: "3", label: "yellow", sublabel: "[3]" },
          ],
        },
      },
      {
        type: "practice",
        practicePrompt: "From cities list, print first city, third city, and last city.",
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
        type: "code",
        code:
          'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])   # [1, 2, 3]\nprint(nums[:3])    # [0, 1, 2]\nprint(nums[3:])    # [3, 4, 5]\nprint(nums[::2])   # every 2nd item',
      },
      {
        type: "tip",
        content: "Slicing creates a new list — the original list is not changed.",
      },
      {
        type: "practice",
        practicePrompt: "From data = [10,20,30,40,50], slice the middle three numbers.",
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
      { type: "heading", content: "Adding items" },
      {
        type: "code",
        code:
          'items = ["pen"]\nitems.append("pencil")   # add to end\nprint(items)\n\nitems.insert(0, "eraser")  # add at index 0\nprint(items)',
      },
      { type: "heading", content: "Removing items" },
      {
        type: "code",
        code:
          'nums = [1, 2, 3, 2]\nnums.remove(2)   # removes first 2 found\nprint(nums)\n\nlast = nums.pop()  # removes and returns last\nprint(last, nums)',
      },
      { type: "heading", content: "Sorting" },
      {
        type: "code",
        code:
          "scores = [85, 92, 78]\nscores.sort()       # sorts in place\nprint(scores)\n\nprint(len(scores))  # count items",
      },
      {
        type: "practice",
        practicePrompt: "Start with [3,1,4]. Append 1, sort, then print the list.",
        starterCode:
          "nums = [3, 1, 4]\nnums.append(1)\nnums.sort()\nprint(nums)",
      },
    ],
    keyTakeaways: [
      "append() adds to the end; insert() adds at a position.",
      "remove() deletes a value; pop() removes the last (or at index).",
      "sort() orders the list in place.",
    ],
  },
  "m5-t6": {
    topicId: "m5-t6",
    intro:
      "You can change list items directly by index, or update a slice with new values. This is what “mutable” means in practice.",
    blocks: [
      { type: "heading", content: "Change one item" },
      {
        type: "code",
        code:
          'grades = [70, 80, 90]\ngrades[1] = 85   # change 80 to 85\nprint(grades)',
      },
      { type: "heading", content: "Change a slice" },
      {
        type: "code",
        code:
          'nums = [1, 2, 3, 4, 5]\nnums[1:3] = [20, 30]\nprint(nums)  # [1, 20, 30, 4, 5]',
      },
      { type: "heading", content: "Extend with another list" },
      {
        type: "code",
        code:
          'a = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(a)  # [1, 2, 3, 4]',
      },
      {
        type: "practice",
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
