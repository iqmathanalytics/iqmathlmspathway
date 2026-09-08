import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";
import type { PracticeTrackConfig } from "@/lib/practice-track";
import { arrayProblems } from "./arrays";
import { stringProblems } from "./strings";
import { linkedListProblems } from "./linked-lists";
import { stackQueueProblems } from "./stack-queue";
import { treeProblems } from "./trees";
import { graphProblems } from "./graphs";
import { dpProblems } from "./dp";
import { hashMapProblems } from "./hash-maps";
import {
  binarySearchProblems,
  greedyProblems,
  bitProblems,
  heapProblems,
} from "./search-greedy-bits-heap";
import { backtrackingProblems } from "./backtracking";
import { intervalProblems, matrixProblems, advancedProblems } from "./rest";

export { PYTHON_PRACTICE_CATEGORIES } from "./helpers";
export type { PythonPracticeCategoryId } from "./helpers";

const pythonPracticeProblems: PracticeProblem[] = [
  ...arrayProblems,
  ...stringProblems,
  ...linkedListProblems,
  ...stackQueueProblems,
  ...treeProblems,
  ...graphProblems,
  ...dpProblems,
  ...hashMapProblems,
  ...binarySearchProblems,
  ...greedyProblems,
  ...backtrackingProblems,
  ...bitProblems,
  ...heapProblems,
  ...intervalProblems,
  ...matrixProblems,
  ...advancedProblems,
].sort((a, b) => a.order - b.order);

const bySlug = new Map(pythonPracticeProblems.map((p) => [p.slug, p]));

export const PYTHON_PRACTICE_DIFFICULTIES: PracticeDifficulty[] = [
  "easy",
  "medium",
  "hard",
];

export function isPracticeDifficulty(value: string): value is PracticeDifficulty {
  return PYTHON_PRACTICE_DIFFICULTIES.includes(value as PracticeDifficulty);
}

export function getPythonPracticeProblems(): PracticeProblem[] {
  return pythonPracticeProblems;
}

export function getPythonPracticeByDifficulty(
  difficulty: PracticeDifficulty
): PracticeProblem[] {
  return pythonPracticeProblems.filter((p) => p.difficulty === difficulty);
}

export function getPythonPracticeBySlug(slug: string): PracticeProblem | undefined {
  return bySlug.get(slug);
}

export function getPythonPracticeStats() {
  const difficulties = {
    easy: 0,
    medium: 0,
    hard: 0,
  };
  const categories: Record<string, number> = {};
  for (const p of pythonPracticeProblems) {
    difficulties[p.difficulty] += 1;
    if (p.category) {
      categories[p.category] = (categories[p.category] ?? 0) + 1;
    }
  }
  return {
    total: pythonPracticeProblems.length,
    difficulties,
    categories,
  };
}

export function getAdjacentPythonPractice(
  slug: string,
  difficulty: PracticeDifficulty
): { prev?: PracticeProblem; next?: PracticeProblem } {
  const list = getPythonPracticeByDifficulty(difficulty);
  const index = list.findIndex((p) => p.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index < list.length - 1 ? list[index + 1] : undefined,
  };
}

export function getPythonPracticeStaticParams() {
  return pythonPracticeProblems.map((p) => ({
    difficulty: p.difficulty,
    slug: p.slug,
  }));
}

export function difficultyLabel(difficulty: PracticeDifficulty): string {
  if (difficulty === "easy") return "Easy";
  if (difficulty === "medium") return "Medium";
  return "Hard";
}

export const PYTHON_CHALLENGE_TRACK: PracticeTrackConfig = {
  id: "python",
  basePath: "/practice/python",
  title: "Python Programming Practice",
  orderPrefix: "python-practice-order:",
  getByDifficulty: getPythonPracticeByDifficulty,
  labelDifficulty: difficultyLabel,
};
