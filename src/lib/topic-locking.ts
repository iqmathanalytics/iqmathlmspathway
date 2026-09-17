import { OPEN_ACCESS } from "@/lib/access-flags";
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
  progress: UserProgress,
  hasQuiz: (topicId: string) => boolean,
  options?: { unlockAll?: boolean }
): Set<string> {
  const path = getPublishedTopicEntries(modules);

  // Admins preview the full curriculum without sequential unlock.
  if (OPEN_ACCESS || options?.unlockAll) {
    return new Set(path.map((entry) => entry.topic.id));
  }

  const unlocked = new Set<string>();

  path.forEach((entry, index) => {
    const previous = path[index - 1];
    if (
      !previous ||
      isTopicProgressionDone(progress, previous.topic.id, hasQuiz(previous.topic.id))
    ) {
      unlocked.add(entry.topic.id);
    }
  });

  return unlocked;
}

export function isTopicUnlocked(
  modules: Module[],
  topicId: string,
  progress: UserProgress,
  hasQuiz: (topicId: string) => boolean,
  options?: { unlockAll?: boolean }
): boolean {
  return getUnlockedTopicIds(modules, progress, hasQuiz, options).has(topicId);
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
