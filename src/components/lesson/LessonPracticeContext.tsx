"use client";

import { createContext, useContext } from "react";

export interface LessonPracticeContextValue {
  activeIndex: number;
  total: number;
  selectPractice: (index: number) => void;
  nextPractice: () => void;
  scrollToIde: () => void;
  /** Sequential final-project mode */
  sequential?: boolean;
  topicId?: string;
  completedExercises: Set<number>;
  isExerciseUnlocked: (index: number) => boolean;
  isExerciseComplete: (index: number) => boolean;
  completeExercise: (index: number) => void;
}

export const LessonPracticeContext =
  createContext<LessonPracticeContextValue | null>(null);

export function useLessonPractice() {
  return useContext(LessonPracticeContext);
}
