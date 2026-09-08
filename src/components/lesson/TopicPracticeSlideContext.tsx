"use client";

import { createContext, useContext } from "react";

interface TopicPracticeSlideContextValue {
  openPracticeSlide: () => void;
  practiceCount: number;
}

export const TopicPracticeSlideContext =
  createContext<TopicPracticeSlideContextValue | null>(null);

export function useTopicPracticeSlide() {
  return useContext(TopicPracticeSlideContext);
}
