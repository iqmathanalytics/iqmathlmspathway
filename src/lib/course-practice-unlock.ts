import type { PracticeProblem, PracticeProgressRow } from "@/lib/types";

/** Solved problem ids from practice_progress rows. */
export function getSolvedPracticeIds(
  rows: Record<string, PracticeProgressRow | undefined>
): Set<string> {
  const ids = new Set<string>();
  for (const row of Object.values(rows)) {
    if (row?.status === "solved") ids.add(row.problem_id);
  }
  return ids;
}

/**
 * Course-topic practice unlock: first problem is open; each later problem
 * unlocks only after the previous (by order) is solved.
 */
export function isCoursePracticeProblemUnlocked(
  problems: PracticeProblem[],
  problemId: string,
  solvedIds: Set<string>,
  options?: { unlockAll?: boolean }
): boolean {
  if (options?.unlockAll) {
    return problems.some((p) => p.id === problemId);
  }
  const sorted = [...problems].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((p) => p.id === problemId);
  if (idx < 0) return false;
  if (idx === 0) return true;
  return solvedIds.has(sorted[idx - 1]!.id);
}

export function getFirstUnlockedCoursePractice(
  problems: PracticeProblem[],
  solvedIds: Set<string>,
  options?: { unlockAll?: boolean }
): PracticeProblem | undefined {
  const sorted = [...problems].sort((a, b) => a.order - b.order);
  return sorted.find((p) =>
    isCoursePracticeProblemUnlocked(problems, p.id, solvedIds, options)
  );
}
