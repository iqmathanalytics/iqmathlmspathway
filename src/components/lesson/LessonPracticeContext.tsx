"use client";

import { createContext, useContext } from "react";

export interface LessonPracticeContextValue {
  activeIndex: number;
  total: number;
  selectPractice: (index: number) => void;
  nextPractice: () => void;
  scrollToIde: () => void;
}

export const LessonPracticeContext =
  createContext<LessonPracticeContextValue | null>(null);

export function useLessonPractice() {
  return useContext(LessonPracticeContext);
}
