export const PYTHON_BASICS_CATEGORIES = [
  { id: "variables", label: "Variables" },
  { id: "strings", label: "Strings" },
  { id: "numbers", label: "Numbers" },
  { id: "lists", label: "Lists" },
  { id: "tuples", label: "Tuples" },
  { id: "dictionaries", label: "Dictionaries" },
  { id: "sets", label: "Sets" },
  { id: "operators", label: "Operators" },
  { id: "conditionals", label: "Conditionals" },
  { id: "loops", label: "Loops" },
  { id: "functions", label: "Functions" },
  { id: "comprehensions", label: "Comprehensions" },
  { id: "exceptions", label: "Exceptions" },
  { id: "files", label: "Files" },
  { id: "modules", label: "Modules" },
  { id: "oop", label: "Classes & OOP" },
  { id: "decorators", label: "Decorators" },
  { id: "regex", label: "Regular Expressions" },
  { id: "json", label: "JSON" },
] as const;

export type PythonBasicsCategoryId =
  (typeof PYTHON_BASICS_CATEGORIES)[number]["id"];

export const BASICS_CATEGORY_LABEL: Record<PythonBasicsCategoryId, string> =
  Object.fromEntries(
    PYTHON_BASICS_CATEGORIES.map((c) => [c.id, c.label])
  ) as Record<PythonBasicsCategoryId, string>;
