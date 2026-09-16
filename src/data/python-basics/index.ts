import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";
import type { PracticeTrackConfig } from "@/lib/practice-track";
import { beginnerProblems } from "./beginner";
import { intermediateProblems } from "./intermediate";
import { advancedProblems } from "./advanced";
import { beginnerExtraProblems } from "./extra-beginner";
import { intermediateExtraProblems } from "./extra-intermediate";
import { advancedExtraProblems } from "./extra-advanced";

export { PYTHON_BASICS_CATEGORIES } from "./categories";
export type { PythonBasicsCategoryId } from "./categories";

const pythonBasicsProblems: PracticeProblem[] = [
  ...beginnerProblems,
  ...intermediateProblems,
  ...advancedProblems,
  ...beginnerExtraProblems,
  ...intermediateExtraProblems,
  ...advancedExtraProblems,
].sort((a, b) => a.order - b.order);

const bySlug = new Map(pythonBasicsProblems.map((p) => [p.slug, p]));

export {
  isBasicsDifficulty,
  PRACTICE_DIFFICULTIES as PYTHON_BASICS_DIFFICULTIES,
} from "@/lib/practice-difficulty";

export function getPythonBasicsProblems(): PracticeProblem[] {
  return pythonBasicsProblems;
}

export function getPythonBasicsByDifficulty(
  difficulty: PracticeDifficulty
): PracticeProblem[] {
  return pythonBasicsProblems.filter((p) => p.difficulty === difficulty);
}

export function getPythonBasicsBySlug(slug: string): PracticeProblem | undefined {
  return bySlug.get(slug);
}

export function getPythonBasicsStats() {
  const difficulties = { easy: 0, medium: 0, hard: 0 };
  const categories: Record<string, number> = {};
  for (const p of pythonBasicsProblems) {
    difficulties[p.difficulty] += 1;
    if (p.category) {
      categories[p.category] = (categories[p.category] ?? 0) + 1;
    }
  }
  return {
    total: pythonBasicsProblems.length,
    difficulties,
    categories,
  };
}

export function getPythonBasicsStaticParams() {
  return pythonBasicsProblems.map((p) => ({
    difficulty: p.difficulty,
    slug: p.slug,
  }));
}

export const BASICS_DIFFICULTY_LABELS: Record<PracticeDifficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export function basicsDifficultyLabel(difficulty: PracticeDifficulty): string {
  return BASICS_DIFFICULTY_LABELS[difficulty];
}

export const PYTHON_BASICS_TRACK: PracticeTrackConfig = {
  id: "python-basics",
  basePath: "/practice/python-basics",
  title: "Python Programming Practice",
  orderPrefix: "python-basics-order:",
  getByDifficulty: getPythonBasicsByDifficulty,
  labelDifficulty: basicsDifficultyLabel,
};
