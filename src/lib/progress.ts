import type { UserProgress } from "@/lib/types";

const STORAGE_KEY = "pypath-progress-v1";

const defaultProgress: UserProgress = {
  completedTopics: [],
  quizScores: {},
};

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return { ...defaultProgress };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return { ...defaultProgress };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markTopicComplete(topicId: string): UserProgress {
  const progress = loadProgress();
  if (!progress.completedTopics.includes(topicId)) {
    progress.completedTopics.push(topicId);
  }
  progress.lastVisited = topicId;
  saveProgress(progress);
  return progress;
}

export function saveQuizScore(topicId: string, scorePercent: number): UserProgress {
  const progress = loadProgress();
  const prev = progress.quizScores[topicId] ?? 0;
  progress.quizScores[topicId] = Math.max(prev, scorePercent);
  saveProgress(progress);
  return progress;
}

export function isTopicCompleted(topicId: string): boolean {
  return loadProgress().completedTopics.includes(topicId);
}

export function getCompletionPercent(totalPublished: number): number {
  if (totalPublished === 0) return 0;
  const completed = loadProgress().completedTopics.length;
  const publishedCompleted = loadProgress().completedTopics.filter(() => true);
  void publishedCompleted;
  return Math.round((completed / totalPublished) * 100);
}
