import type { TopicQuiz } from "@/lib/types";

export const module14Quizzes: Record<string, TopicQuiz> = {
  "m14-t1": {
    topicId: "m14-t1",
    title: "Quick check: Introduction to NumPy Arrays",
    questions: [
      {
        id: "q1",
        question: "Main advantage of NumPy arrays vs lists?",
        options: [
          "Slower math",
          "Fast vectorized numeric operations",
          "Cannot store numbers",
          "No indexing",
        ],
        correctIndex: 1,
        explanation: "ndarray enables efficient element-wise math.",
      },
      {
        id: "q2",
        question: "What is the core NumPy data structure?",
        options: [
          "DataFrame",
          "ndarray",
          "Series only",
          "set",
        ],
        correctIndex: 1,
        explanation: "n-dimensional arrays power NumPy.",
      },
    ],
  },
  "m14-t2": {
    topicId: "m14-t2",
    title: "Quick check: Array Creation and Properties",
    questions: [
      {
        id: "q1",
        question: "What does np.zeros((2, 3)) create?",
        options: [
          "A list",
          "A 2×3 array of zeros",
          "A dict",
          "Random ints",
        ],
        correctIndex: 1,
        explanation: "zeros fills with 0.0 by default.",
      },
      {
        id: "q2",
        question: "What does .shape tell you?",
        options: [
          "dtype only",
          "Dimension sizes",
          "File path",
          "Plot type",
        ],
        correctIndex: 1,
        explanation: "shape is a tuple of axis lengths.",
      },
    ],
  },
  "m14-t3": {
    topicId: "m14-t3",
    title: "Quick check: Indexing and Slicing Arrays",
    questions: [
      {
        id: "q1",
        question: "How do you get row 0, column 1 in 2D?",
        options: [
          "arr[0, 1]",
          "arr(0, 1)",
          "arr{0:1}",
          "arr.row",
        ],
        correctIndex: 0,
        explanation: "Use comma indexing.",
      },
      {
        id: "q2",
        question: "Do NumPy slices share memory with the base array often?",
        options: [
          "Never",
          "Often yes (views)",
          "Always copies only",
          "Only for lists",
        ],
        correctIndex: 1,
        explanation: "Be careful: views can mutate the original.",
      },
    ],
  },
  "m14-t4": {
    topicId: "m14-t4",
    title: "Quick check: Array Operations and Broadcasting",
    questions: [
      {
        id: "q1",
        question: "What is broadcasting?",
        options: [
          "Network send",
          "Auto shape alignment for element-wise ops",
          "CSV export",
          "Sorting",
        ],
        correctIndex: 1,
        explanation: "Compatible shapes combine without explicit loops.",
      },
      {
        id: "q2",
        question: "What is arr * 2 for a numeric array?",
        options: [
          "Error",
          "Each element multiplied by 2",
          "Appends 2",
          "Changes shape only",
        ],
        correctIndex: 1,
        explanation: "Operations are element-wise.",
      },
    ],
  },
  "m14-t5": {
    topicId: "m14-t5",
    title: "Module 14 Quiz",
    questions: [
      {
        id: "q1",
        question: "What is the main advantage of NumPy arrays over Python lists?",
        options: [
          "They store only strings",
          "Fast vectorized numeric operations and less memory overhead",
          "They cannot be sliced",
          "They replace Pandas entirely",
        ],
        correctIndex: 1,
        explanation: "ndarray enables element-wise math without Python loops.",
      },
      {
        id: "q2",
        question: "What function creates an array of zeros?",
        options: [
          "np.empty_zeros()",
          "np.zeros(shape)",
          "np.nulls()",
          "np.zero_list()",
        ],
        correctIndex: 1,
        explanation: "np.zeros((m, n)) builds an m×n array filled with 0.",
      },
      {
        id: "q3",
        question: "What does .shape return for a 2D array?",
        options: [
          "Only the number of rows",
          "A tuple (rows, columns)",
          "The dtype only",
          "A flattened list",
        ],
        correctIndex: 1,
        explanation: "shape describes each dimension's size.",
      },
      {
        id: "q4",
        question: "What is broadcasting in NumPy?",
        options: [
          "Sending arrays over the network",
          "Automatic alignment of array shapes for element-wise ops",
          "Converting to lists",
          "Plotting heatmaps",
        ],
        correctIndex: 1,
        explanation: "Smaller arrays expand conceptually to match larger ones when shapes align.",
      },
      {
        id: "q5",
        question: "How do you compute the mean of an array?",
        options: [
          "arr.average only in Excel",
          "np.mean(arr) or arr.mean()",
          "arr.mode()",
          "sum(arr) only",
        ],
        correctIndex: 1,
        explanation: "mean() averages all elements (or along an axis).",
      },
      {
        id: "q6",
        question: "What does np.arange(0, 10, 2) produce?",
        options: [
          "[0, 1, 2, ..., 10]",
          "[0, 2, 4, 6, 8]",
          "[2, 4, 6, 8, 10]",
          "[0, 2, 4, 6, 8, 10]",
        ],
        correctIndex: 1,
        explanation: "Like range: start inclusive, stop exclusive, step 2.",
      },
      {
        id: "q7",
        question: "How do you access element at row 1, column 2 in a 2D array?",
        options: [
          "arr[1, 2] or arr[1][2]",
          "arr(1, 2)",
          "arr{1, 2}",
          "arr.row(1).col(2) only",
        ],
        correctIndex: 0,
        explanation: "Comma indexing arr[r, c] is the NumPy idiom.",
      },
      {
        id: "q8",
        question: "What does .ndim return?",
        options: [
          "Number of elements",
          "Number of dimensions (axes)",
          "Memory size",
          "Data type code",
        ],
        correctIndex: 1,
        explanation: "A 2D matrix has ndim == 2.",
      },
      {
        id: "q9",
        question: "What is np.linspace(0, 1, 5) used for?",
        options: [
          "Random integers",
          "Evenly spaced values from 0 to 1 inclusive (5 points)",
          "Only log scales",
          "Identity matrices",
        ],
        correctIndex: 1,
        explanation: "linspace includes both endpoints by default.",
      },
      {
        id: "q10",
        question: "What does .std() measure?",
        options: [
          "The maximum value",
          "Standard deviation — spread around the mean",
          "The median only",
          "Missing value count",
        ],
        correctIndex: 1,
        explanation: "Higher std means values are more spread out.",
      },
    ],
  },
};
