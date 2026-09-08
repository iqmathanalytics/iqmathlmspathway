import type { TopicLesson } from "@/lib/types";

export const module14Lessons: Record<string, TopicLesson> = {
  "m14-t1": {
    topicId: "m14-t1",
    intro: "NumPy ndarrays support fast element-wise (vectorized) operations unlike plain Python lists.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`numpy.array()` creates an ndarray, which supports fast element-wise operations, unlike plain Python lists." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr)\nprint(type(arr))     # <class 'numpy.ndarray'>\nprint(arr * 2)        # [2 4 6 8] - vectorized!" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a NumPy array from [1, 2, 3, 4, 5] and add 10 to every element.",
        starterCode: "# TODO: Add 10 to every element\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr + 10)",
      },
    ],
    keyTakeaways: [
      "import numpy as np is the standard alias.",
      "ndarrays support vectorized math without loops.",
      "type(arr) shows numpy.ndarray.",
    ],
  },
  "m14-t2": {
    topicId: "m14-t2",
    intro: "Create arrays with zeros, ones, arange, and linspace. Inspect shape, dtype, ndim, and size.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "NumPy offers helper functions: `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()`. Arrays have properties: `.shape`, `.dtype`, `.ndim`, `.size`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import numpy as np\na = np.zeros((2, 3))\nb = np.arange(0, 10, 2)\nc = np.linspace(0, 1, 5)\nprint(a.shape, b, c)\nprint(a.dtype, a.ndim, a.size)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create an array using np.arange(1, 11) and print its shape and size.",
        starterCode: "# TODO: arange 1..10 and inspect properties\nimport numpy as np\narr = np.arange(1, 11)\nprint(arr)\nprint(arr.shape)\nprint(arr.size)",
      },
    ],
    keyTakeaways: [
      "zeros/ones create filled arrays of a given shape.",
      "arange is like range but returns an array.",
      "shape, dtype, ndim, and size describe the array.",
    ],
  },
  "m14-t3": {
    topicId: "m14-t3",
    intro: "Index and slice NumPy arrays like lists, plus multi-dimensional indexing with arr[row, col].",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "NumPy arrays support the same `[start:stop:step]` slicing as lists, plus multi-dimensional indexing `arr[row, col]`." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(arr[1, 2])     # 6\nprint(arr[:, 0])      # [1,4,7] - first column\nprint(arr[0:2, 1:3])  # sub-matrix" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given arr = np.array([[1, 2], [3, 4], [5, 6]]), extract the second column.",
        starterCode: "# TODO: Extract the second column\nimport numpy as np\narr = np.array([[1, 2], [3, 4], [5, 6]])\nprint(arr[:, 1])",
      },
    ],
    keyTakeaways: [
      "arr[i, j] selects a single element.",
      "arr[:, j] selects a whole column.",
      "Slicing returns views/sub-arrays for further work.",
    ],
  },
  "m14-t4": {
    topicId: "m14-t4",
    intro: "Broadcasting lets NumPy operate on differently shaped arrays without explicit loops.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Broadcasting lets NumPy perform operations between arrays of different (but compatible) shapes without explicit loops." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\nprint(a + b)          # [11,22,33]\nprint(a + 5)           # [6,7,8] - broadcasting a scalar\nmatrix = np.array([[1, 2, 3], [4, 5, 6]])\nprint(matrix + np.array([1, 0, 1]))  # broadcasting a row vector" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a = np.array([1, 2, 3]) and b = np.array([4, 5, 6]), compute their element-wise product.",
        starterCode: "# TODO: Element-wise product\nimport numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a * b)",
      },
    ],
    keyTakeaways: [
      "Element-wise ops (+, *, etc.) work on matching shapes.",
      "Scalars broadcast across every element.",
      "Compatible shapes expand automatically — no Python loop needed.",
    ],
  },
  "m14-t5": {
    topicId: "m14-t5",
    intro: "NumPy stats helpers: mean, median, std, min, max, and sum for quick summaries.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "NumPy provides `np.mean()`, `np.median()`, `np.std()`, `np.var()`, `np.min()`, `np.max()`, `np.sum()` for quick statistics." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import numpy as np\ndata = np.array([10, 20, 30, 40, 50])\nprint(np.mean(data))    # 30.0\nprint(np.median(data))  # 30.0\nprint(np.std(data))     # standard deviation\nprint(np.max(data), np.min(data))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given data = np.array([5, 10, 15, 20, 25]), compute and print the mean and the sum.",
        starterCode: "# TODO: mean and sum\nimport numpy as np\ndata = np.array([5, 10, 15, 20, 25])\nprint(np.mean(data))\nprint(np.sum(data))",
      },
    ],
    keyTakeaways: [
      "np.mean / median summarize center.",
      "np.std / var measure spread.",
      "np.min, np.max, and np.sum are common aggregates.",
    ],
  },
};
