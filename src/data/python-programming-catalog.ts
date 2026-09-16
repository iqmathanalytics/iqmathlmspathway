import type { PracticeCategoryOption } from "@/lib/practice-track";
import { PYTHON_BASICS_CATEGORIES } from "@/data/python-basics/categories";
import { PYTHON_PRACTICE_CATEGORIES } from "@/data/python-practice/categories";
import { PYTHON_PROGRAMMING_LIST } from "@/data/python-programming-list.generated";
import { neighborsFromList, type PracticeNav } from "@/lib/practice-list";
import { difficultyLabel } from "@/lib/practice-difficulty";

export const PYTHON_PROGRAMMING_TITLE = "Python Programming Practice";
export const PYTHON_PROGRAMMING_ORDER_PREFIX = "python-programming-order-v2:";

export const PYTHON_PROGRAMMING_CATEGORIES: PracticeCategoryOption[] = [
  ...PYTHON_BASICS_CATEGORIES.map((c) => ({
    id: `lang:${c.id}`,
    label: `${c.label} · Language`,
  })),
  ...PYTHON_PRACTICE_CATEGORIES.map((c) => ({
    id: `algo:${c.id}`,
    label: `${c.label} · Algorithms`,
  })),
];

export function getPythonProgrammingList() {
  return PYTHON_PROGRAMMING_LIST;
}

export function getPythonProgrammingNav(slug: string): PracticeNav {
  return neighborsFromList(PYTHON_PROGRAMMING_LIST, slug);
}

export { difficultyLabel };
