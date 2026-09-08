import type { PracticeProblem } from "@/lib/types";

export type PythonProgrammingKind = "language" | "algorithms";

export function getProblemKind(problem: PracticeProblem): PythonProgrammingKind {
  return problem.id.startsWith("pb-") ? "language" : "algorithms";
}

/** Canonical workspace URL for a merged-list problem. */
export function getProblemWorkspaceHref(problem: PracticeProblem): string {
  const root =
    getProblemKind(problem) === "language"
      ? "/practice/python-basics"
      : "/practice/python";
  return `${root}/${problem.difficulty}/${problem.slug}`;
}

export function matchesProgrammingCategory(
  problem: PracticeProblem,
  categoryId: string
): boolean {
  if (categoryId === "all") return true;
  const [kindPrefix, rawId] = categoryId.split(":");
  if (!rawId) return problem.category === categoryId;
  const kind = getProblemKind(problem);
  if (kindPrefix === "lang" && kind !== "language") return false;
  if (kindPrefix === "algo" && kind !== "algorithms") return false;
  return problem.category === rawId;
}
