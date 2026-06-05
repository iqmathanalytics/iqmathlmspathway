export const FREE_PRACTICE_PER_TOPIC = 5;

export const PRACTICE_PREMIUM_PRODUCT = "practice_premium";

export function isProblemFree(order: number): boolean {
  return order <= FREE_PRACTICE_PER_TOPIC;
}

export function isProblemPremium(order: number): boolean {
  return order > FREE_PRACTICE_PER_TOPIC;
}
