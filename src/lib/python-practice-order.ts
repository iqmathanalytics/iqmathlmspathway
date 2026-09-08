import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";

/** v2: default ascending catalog order (v1 shuffled on first visit). */
const STORAGE_PREFIX = "python-practice-order-v2:";

function storage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function shuffleItems<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = next[i];
    next[i] = next[j] as T;
    next[j] = current as T;
  }
  return next;
}

export function practiceOrderKey(
  scope: PracticeDifficulty | "all" | string,
  prefix = STORAGE_PREFIX
): string {
  return `${prefix}${scope}`;
}

export function readPracticeOrder(
  scope: PracticeDifficulty | "all" | string,
  prefix = STORAGE_PREFIX
): string[] | null {
  const store = storage();
  if (!store) return null;
  try {
    const raw = store.getItem(practiceOrderKey(scope, prefix));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || parsed.some((item) => typeof item !== "string")) {
      return null;
    }
    return parsed as string[];
  } catch {
    return null;
  }
}

export function writePracticeOrder(
  scope: PracticeDifficulty | "all" | string,
  slugs: string[],
  prefix = STORAGE_PREFIX
): void {
  const store = storage();
  if (!store) return;
  store.setItem(practiceOrderKey(scope, prefix), JSON.stringify(slugs));
}

export function clearPracticeOrder(
  scope: PracticeDifficulty | "all" | string,
  prefix = STORAGE_PREFIX
): void {
  const store = storage();
  if (!store) return;
  store.removeItem(practiceOrderKey(scope, prefix));
}

export function applyPracticeOrder(
  problems: PracticeProblem[],
  keys: string[] | null
): PracticeProblem[] {
  if (!keys?.length) return problems;
  const byId = new Map(problems.map((p) => [p.id, p]));
  const bySlug = new Map(problems.map((p) => [p.slug, p]));
  const ordered: PracticeProblem[] = [];
  const seen = new Set<string>();
  for (const key of keys) {
    const problem = byId.get(key) ?? bySlug.get(key);
    if (problem && !seen.has(problem.id)) {
      ordered.push(problem);
      seen.add(problem.id);
    }
  }
  for (const problem of problems) {
    if (!seen.has(problem.id)) ordered.push(problem);
  }
  return ordered;
}

/**
 * Return problems in ascending catalog order (caller typically pre-sorts by
 * difficulty / kind / order). Persists that order. Does not shuffle — use
 * shuffleItems + writePracticeOrder for an explicit reshuffle.
 */
export function ensurePracticeOrder(
  problems: PracticeProblem[],
  scope: PracticeDifficulty | "all" | string,
  prefix = STORAGE_PREFIX
): PracticeProblem[] {
  const existing = readPracticeOrder(scope, prefix);
  if (existing?.length) {
    const ordered = applyPracticeOrder(problems, existing);
    const nextKeys = ordered.map((p) => p.id);
    if (nextKeys.join("\0") !== existing.join("\0")) {
      writePracticeOrder(scope, nextKeys, prefix);
    }
    return ordered;
  }
  const ascendingIds = problems.map((p) => p.id);
  writePracticeOrder(scope, ascendingIds, prefix);
  return problems;
}

export function getAdjacentFromProblems(
  problems: PracticeProblem[],
  slug: string
): { prev?: PracticeProblem; next?: PracticeProblem; isLast: boolean; index: number } {
  const index = problems.findIndex((p) => p.slug === slug);
  if (index < 0) {
    return { isLast: false, index: -1 };
  }
  return {
    prev: index > 0 ? problems[index - 1] : undefined,
    next: index < problems.length - 1 ? problems[index + 1] : undefined,
    isLast: index === problems.length - 1,
    index,
  };
}
