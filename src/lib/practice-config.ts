export const FREE_PRACTICE_PER_TOPIC = 5;

export const PRACTICE_PREMIUM_PRODUCT = "practice_premium";

/** Standalone Practice hub IDs (Basics / Algorithms) — not course module challenges. */
export function isStandalonePracticeProblemId(problemId: string): boolean {
  return problemId.startsWith("pb-") || problemId.startsWith("pc-");
}

/** Course module / SQL curriculum challenge IDs. */
export function isCourseModulePracticeProblemId(problemId: string): boolean {
  return /^(m\d+-t|sql-m)/.test(problemId);
}

export function isProblemFree(order: number): boolean {
  return order <= FREE_PRACTICE_PER_TOPIC;
}

/** Premium applies only to standalone Practice hub problems, never module challenges. */
export function isProblemPremium(order: number): boolean {
  return order > FREE_PRACTICE_PER_TOPIC;
}
