import type { Module, Topic, UserProgress } from "@/lib/types";

export interface TopicPathEntry {
  module: Module;
  topic: Topic;
}

export function getPublishedTopicEntries(modules: Module[]): TopicPathEntry[] {
  return modules.flatMap((module) =>
    module.topics
      .filter((topic) => topic.published)
      .map((topic) => ({ module, topic }))
  );
}

export function getUnlockedTopicIds(
  modules: Module[],
  _progress: UserProgress,
  _hasQuiz: (topicId: string) => boolean
): Set<string> {
  // Temporarily unlock all published topics so the team can test any topic from
  // dashboard/module navigation without completing the previous lesson first.
  return new Set(getPublishedTopicEntries(modules).map((entry) => entry.topic.id));
}

export function isTopicUnlocked(
  modules: Module[],
  topicId: string,
  progress: UserProgress,
  hasQuiz: (topicId: string) => boolean
): boolean {
  return getUnlockedTopicIds(modules, progress, hasQuiz).has(topicId);
}

export function isTopicProgressionDone(
  progress: UserProgress,
  topicId: string,
  hasQuiz: boolean
): boolean {
  if (progress.completedTopics.includes(topicId)) return true;
  const ideDone = (progress.ideRan ?? []).includes(topicId);
  const quizDone = !hasQuiz || progress.quizScores[topicId] !== undefined;
  return ideDone && quizDone;
}
