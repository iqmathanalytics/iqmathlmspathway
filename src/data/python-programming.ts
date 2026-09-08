import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";
import type { PracticeCategoryOption } from "@/lib/practice-track";
import {
  PYTHON_PRACTICE_CATEGORIES,
  getPythonPracticeProblems,
  getPythonPracticeByDifficulty,
  difficultyLabel,
} from "@/data/python-practice";
import {
  PYTHON_BASICS_CATEGORIES,
  getPythonBasicsProblems,
  getPythonBasicsByDifficulty,
} from "@/data/python-basics";
import {
  getProblemKind,
  getProblemWorkspaceHref,
  matchesProgrammingCategory,
  type PythonProgrammingKind,
} from "@/lib/python-programming-links";

export type { PythonProgrammingKind };
export {
  getProblemKind,
  getProblemWorkspaceHref,
  matchesProgrammingCategory,
};

export const PYTHON_PROGRAMMING_TITLE = "Python Programming Practice";
export const PYTHON_PROGRAMMING_ORDER_PREFIX = "python-programming-order-v2:";

export function getPythonProgrammingProblems(): PracticeProblem[] {
  return [...getPythonBasicsProblems(), ...getPythonPracticeProblems()].sort(
    (a, b) => {
      if (a.difficulty !== b.difficulty) {
        const rank = { easy: 0, medium: 1, hard: 2 };
        return rank[a.difficulty] - rank[b.difficulty];
      }
      const kindRank =
        (getProblemKind(a) === "language" ? 0 : 1) -
        (getProblemKind(b) === "language" ? 0 : 1);
      if (kindRank !== 0) return kindRank;
      return a.order - b.order;
    }
  );
}

export function getPythonProgrammingByDifficulty(
  difficulty: PracticeDifficulty
): PracticeProblem[] {
  return [
    ...getPythonBasicsByDifficulty(difficulty),
    ...getPythonPracticeByDifficulty(difficulty),
  ].sort((a, b) => {
    const kindRank =
      (getProblemKind(a) === "language" ? 0 : 1) -
      (getProblemKind(b) === "language" ? 0 : 1);
    if (kindRank !== 0) return kindRank;
    return a.order - b.order;
  });
}

/** Namespaced topic options so Language "strings" ≠ Algorithms "strings". */
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

export function getPythonProgrammingStats() {
  const problems = getPythonProgrammingProblems();
  const difficulties = { easy: 0, medium: 0, hard: 0 };
  const kinds = { language: 0, algorithms: 0 };
  for (const p of problems) {
    difficulties[p.difficulty] += 1;
    kinds[getProblemKind(p)] += 1;
  }
  return {
    total: problems.length,
    difficulties,
    kinds,
  };
}

export { difficultyLabel };
