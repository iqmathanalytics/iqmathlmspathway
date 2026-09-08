import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";

export type PracticeTrackId = "python" | "python-basics";

export interface PracticeCategoryOption {
  id: string;
  label: string;
}

export type PracticeDifficultyLabels = Record<PracticeDifficulty, string>;

export interface PracticeTrackConfig {
  id: PracticeTrackId;
  basePath: string;
  title: string;
  orderPrefix: string;
  getByDifficulty: (difficulty: PracticeDifficulty) => PracticeProblem[];
  labelDifficulty: (difficulty: PracticeDifficulty) => string;
}
