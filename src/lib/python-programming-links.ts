export type PythonProgrammingKind = "language" | "algorithms";

type ProblemLinkFields = {
  id: string;
  slug: string;
  difficulty: string;
  category?: string;
};

export function getProblemKind(problem: { id: string }): PythonProgrammingKind {
  return problem.id.startsWith("pb-") ? "language" : "algorithms";
}

/** Canonical workspace URL for a merged-list problem. */
export function getProblemWorkspaceHref(problem: ProblemLinkFields): string {
  if (problem.id.startsWith("papc-")) {
    return `/certification/papc/practice/${problem.slug}`;
  }
  const root =
    getProblemKind(problem) === "language"
      ? "/practice/python-basics"
      : "/practice/python";
  return `${root}/${problem.difficulty}/${problem.slug}`;
}

export function matchesProgrammingCategory(
  problem: ProblemLinkFields,
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
