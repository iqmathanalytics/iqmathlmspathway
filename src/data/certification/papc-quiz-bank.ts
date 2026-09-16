import type { PracticeProblem } from "@/lib/types";
import { papcQuizBankPart1 } from "./papc-quiz-bank-1";
import { papcQuizBankPart2 } from "./papc-quiz-bank-2";

/** Dedicated PAPC exam bank (50 coding problems). Separate from practice. */
export const PAPC_QUIZ_BANK: PracticeProblem[] = [
  ...papcQuizBankPart1,
  ...papcQuizBankPart2,
];

export function getPapcQuizProblems(): PracticeProblem[] {
  return PAPC_QUIZ_BANK;
}
