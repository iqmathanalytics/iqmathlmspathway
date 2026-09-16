export const PYTHON_PRACTICE_CATEGORIES = [
  { id: "arrays", label: "Arrays & Lists" },
  { id: "strings", label: "Strings" },
  { id: "linked-lists", label: "Linked Lists" },
  { id: "stack-queue", label: "Stacks & Queues" },
  { id: "trees", label: "Trees" },
  { id: "graphs", label: "Graphs" },
  { id: "dynamic-programming", label: "Dynamic Programming" },
  { id: "hash-maps", label: "Hash Maps" },
  { id: "binary-search", label: "Binary Search" },
  { id: "greedy", label: "Greedy" },
  { id: "backtracking", label: "Recursion & Backtracking" },
  { id: "bit-manipulation", label: "Bit Manipulation" },
  { id: "heap", label: "Heaps" },
  { id: "intervals", label: "Intervals" },
  { id: "matrices", label: "Matrices" },
] as const;

export type PythonPracticeCategoryId =
  (typeof PYTHON_PRACTICE_CATEGORIES)[number]["id"];

export const CATEGORY_LABEL: Record<PythonPracticeCategoryId, string> =
  Object.fromEntries(
    PYTHON_PRACTICE_CATEGORIES.map((c) => [c.id, c.label])
  ) as Record<PythonPracticeCategoryId, string>;
