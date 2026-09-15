export const PRACTICE_PREMIUM_PRODUCT = "practice_premium";

/**
 * Practice is premium-only. Access requires checkout unlock or an admin grant
 * of the `practice_premium` entitlement (admins always pass client gates).
 */
export const FREE_PRACTICE_PER_TOPIC = 0;

/** Standalone Practice hub IDs (Basics / Algorithms) — not course module challenges. */
export function isStandalonePracticeProblemId(problemId: string): boolean {
  return problemId.startsWith("pb-") || problemId.startsWith("pc-");
}

/** Course module / SQL curriculum challenge IDs. */
export function isCourseModulePracticeProblemId(problemId: string): boolean {
  return /^(m\d+-t|sql-m)/.test(problemId);
}

/** @deprecated Prefer requiresPracticePremium — free tier is disabled. */
export function isProblemFree(_order: number): boolean {
  return false;
}

/** Every practice problem requires premium entitlement. */
export function isProblemPremium(_order?: number): boolean {
  return true;
}

export function requiresPracticePremium(): boolean {
  return true;
}
