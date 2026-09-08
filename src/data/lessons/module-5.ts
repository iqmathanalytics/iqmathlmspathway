import type { TopicLesson } from "@/lib/types";

export const module5Lessons: Record<string, TopicLesson> = {
  "m5-t1": {
    topicId: "m5-t1",
    intro: "Lists are ordered, mutable collections written with square brackets.",
    blocks: [
      {
        type: "infographic",
        infographic: "creating-lists",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Lists are created with square brackets `[]`, can hold mixed types, and can be empty." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "empty = []\nnumbers = [1, 2, 3, 4]\nmixed = [1, \"two\", 3.0, True]\nprint(numbers, mixed)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a list containing 4 subjects you study, then print it.",
        starterCode: "# TODO: Create a list of 5 favorite movies",
      },
    ],
    keyTakeaways: [
      "Create lists with [] or list().",
      "Lists can hold mixed types.",
      "Empty lists are a common starting point.",
    ],
  },
  "m5-t2": {
    topicId: "m5-t2",
    intro: "Lists are ordered, mutable, and allow duplicates — properties that shape how you use them.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-characteristics",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Lists are ordered (maintain insertion order), mutable (can be changed), and allow duplicates." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "nums = [3, 1, 2, 1]\nprint(len(nums))     # 4\nnums[0] = 99          # mutability\nprint(nums)           # [99, 1, 2, 1]" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `lst = [10, 20, 30]`, change the second element to 99 and print the updated list.",
        starterCode: "# TODO: Show that lists allow duplicates and are mutable using a list of colors",
      },
    ],
    keyTakeaways: [
      "Ordered means position matters.",
      "Mutable means you can change contents after creation.",
      "Duplicates are allowed.",
    ],
  },
  "m5-t3": {
    topicId: "m5-t3",
    intro: "List indexing accesses one element by its position, starting at 0.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-indexing",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Access list elements by position, `list[0]` is first, `list[-1]` is last." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "fruits = [\"apple\", \"banana\", \"cherry\"]\nprint(fruits[0])   # apple\nprint(fruits[-1])  # cherry" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `lst = [5, 10, 15, 20, 25]`, print the first, third, and last elements.",
        starterCode: "# TODO: Given a list of 5 numbers, print the first, middle, and last elements",
      },
    ],
    keyTakeaways: [
      "Positive and negative indices work like strings.",
      "Assigning to an index updates that slot.",
      "IndexError means the index is out of range.",
    ],
  },
  "m5-t4": {
    topicId: "m5-t4",
    intro: "Slicing returns a new list from a range of indices.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-slicing",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`list[start:stop:step]` returns a sub-list, same rules as string slicing." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])    # [20, 30]\nprint(nums[:2])     # [10, 20]\nprint(nums[::-1])   # [50, 40, 30, 20, 10]" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `nums = [1,2,3,4,5,6,7,8]`, extract elements 3 through 6 (values 3,4,5,6) using slicing.",
        starterCode: "# TODO: Given nums=[1,2,3,4,5,6,7,8], get the middle 4 elements using slicing",
      },
    ],
    keyTakeaways: [
      "list[start:stop:step] returns a new list.",
      "Slice assignment can replace a range of items.",
      "Slicing is how you copy a list: my_list[:].",
    ],
  },
  "m5-t5": {
    topicId: "m5-t5",
    intro: "List methods add, remove, sort, and search items in place.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-methods",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Common methods: `.append()`, `.insert()`, `.extend()`, `.remove()`, `.pop()`, `.sort()`, `.reverse()`, `.count()`, `.index()`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "nums = [3, 1, 4, 1, 5]\nnums.append(9)\nnums.sort()\nprint(nums)          # [1, 1, 3, 4, 5, 9]\nprint(nums.count(1)) # 2\nnums.remove(1)\nprint(nums)           # [1, 3, 4, 5, 9]" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `lst = [4,2,9,1]`, sort it in ascending order and print the result.",
        starterCode: "# TODO: Start with [5,3,8,1], append 10, sort ascending, then reverse it",
      },
    ],
    keyTakeaways: [
      "append, extend, insert add items; remove, pop delete them.",
      "sort and reverse change order in place.",
      "count and index help you search.",
    ],
  },
  "m5-t6": {
    topicId: "m5-t6",
    intro: "You can modify lists by index, slice assignment, insert, or delete.",
    blocks: [
      {
        type: "infographic",
        infographic: "list-modifying",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Lists can be modified via indexing (`list[i]=x`), slicing (`list[1:3]=[a,b]`), or methods like `.insert()` and `del`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "nums = [1, 2, 3, 4]\nnums[1] = 99\ndel nums[0]\nnums.insert(0, 100)\nprint(nums)   # [100, 99, 3, 4]" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `lst = [1,2,3,4,5]`, delete the element at index 2 and insert `99` at the beginning.",
        starterCode: "# TODO: Given [10,20,30,40], replace index 2 with 99, delete index 0, insert 5 at start",
      },
    ],
    keyTakeaways: [
      "Change items with index or slice assignment.",
      "insert and del rearrange structure.",
      "Mutating a list affects all references to it.",
    ],
  },
};
