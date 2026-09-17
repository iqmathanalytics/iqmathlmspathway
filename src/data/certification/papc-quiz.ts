import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";
import { getPapcQuizProblems } from "@/data/certification/papc-quiz-bank";
import {
  PAPC_PASS_POINTS,
  PAPC_QUIZ_QUESTION_COUNT,
  PAPC_QUIZ_POINTS_HARD,
  PAPC_QUIZ_POINTS_MEDIUM,
  PAPC_TOTAL_POINTS,
} from "@/data/certification/papc-config";

export interface CertificationQuizAnswer {
  questionId: string;
  /** Legacy MCQ field — unused for coding exams. */
  selectedIndex?: number | null;
  code?: string;
  passed?: boolean;
}

export function papcQuizPoints(difficulty: PracticeDifficulty): number {
  return difficulty === "hard" ? PAPC_QUIZ_POINTS_HARD : PAPC_QUIZ_POINTS_MEDIUM;
}

export function getPapcQuizProblem(questionId: string): PracticeProblem | undefined {
  return getPapcQuizProblems().find((p) => p.id === questionId);
}

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    let j: number;
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      j = buf[0] % (i + 1);
    } else {
      j = Math.floor(Math.random() * (i + 1));
    }
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function isCodingQuizAnswers(answers: CertificationQuizAnswer[] | undefined): boolean {
  if (!answers?.length) return false;
  return answers.every((a) => Boolean(getPapcQuizProblem(a.questionId)));
}

/** Build a 10-question exam: unique random draw from the 50-problem bank per attempt. */
export function buildShuffledPapcQuiz(): CertificationQuizAnswer[] {
  return shuffle(getPapcQuizProblems())
    .slice(0, PAPC_QUIZ_QUESTION_COUNT)
    .map((problem) => ({
      questionId: problem.id,
      code: problem.starterCode ?? "",
      passed: false,
    }));
}

/** Fill an attempt with official exam solutions and mark each problem passed. */
export function fillPapcOfficialSolutions(
  answers?: CertificationQuizAnswer[]
): CertificationQuizAnswer[] {
  const base =
    isCodingQuizAnswers(answers) && answers?.length
      ? answers
      : buildShuffledPapcQuiz();
  return base.map((row) => {
    const item = getPapcQuizProblem(row.questionId);
    const solution = item?.solutionCode?.trim() || "";
    return {
      ...row,
      code: solution || row.code || item?.starterCode || "",
      passed: Boolean(solution),
    };
  });
}

export function scorePapcAnswers(answers: CertificationQuizAnswer[]): {
  scorePoints: number;
  scorePct: number;
  passed: boolean;
  breakdown: Array<{
    questionId: string;
    title: string;
    difficulty: PracticeDifficulty | null;
    points: number;
    earned: number;
    correct: boolean;
  }>;
} {
  const breakdown = (answers ?? []).map((a) => {
    const problem = getPapcQuizProblem(a.questionId);
    const points = problem ? papcQuizPoints(problem.difficulty) : 0;
    const correct = Boolean(a.passed);
    return {
      questionId: a.questionId,
      title: problem?.title ?? a.questionId,
      difficulty: problem?.difficulty ?? null,
      points,
      earned: correct ? points : 0,
      correct,
    };
  });
  const scorePoints = breakdown.reduce((sum, row) => sum + row.earned, 0);
  const total =
    breakdown.reduce((sum, row) => sum + row.points, 0) || PAPC_TOTAL_POINTS;
  const scorePct = total === 0 ? 0 : Math.round((scorePoints / total) * 1000) / 10;
  return {
    scorePoints,
    scorePct,
    passed: scorePoints >= PAPC_PASS_POINTS,
    breakdown,
  };
}
