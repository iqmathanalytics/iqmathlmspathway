import type { PracticeDifficulty } from "@/lib/types";

export const PRACTICE_DIFFICULTIES: PracticeDifficulty[] = [
  "easy",
  "medium",
  "hard",
];

export function isPracticeDifficulty(
  value: string
): value is PracticeDifficulty {
  return value === "easy" || value === "medium" || value === "hard";
}

/** Alias used by the merged Python Basics routes. */
export const isBasicsDifficulty = isPracticeDifficulty;

export function difficultyLabel(difficulty: PracticeDifficulty): string {
  if (difficulty === "easy") return "Easy";
  if (difficulty === "medium") return "Medium";
  return "Hard";
}
