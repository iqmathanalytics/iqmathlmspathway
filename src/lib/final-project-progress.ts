import { modules } from "@/data/curriculum";
import { module14Lessons } from "@/data/lessons/module-14";

const STORAGE_KEY = "python-lms-fp-exercises";

export const FINAL_PROJECT_TOPIC_IDS = [
  "m14-t1",
  "m14-t2",
  "m14-t3",
  "m14-t4",
  "m14-t5",
] as const;

export type FinalProjectTopicId = (typeof FINAL_PROJECT_TOPIC_IDS)[number];

export function isFinalProjectTopic(topicId: string): topicId is FinalProjectTopicId {
  return (FINAL_PROJECT_TOPIC_IDS as readonly string[]).includes(topicId);
}

export function getFinalProjectExerciseCount(topicId: string): number {
  const lesson = module14Lessons[topicId];
  if (!lesson) return 0;
  return lesson.blocks.filter((b) => b.type === "practice").length;
}

function readAll(): Record<string, number[]> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, number[]>;
  } catch {
    return {};
  }
}

function writeAll(data: Record<string, number[]>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getCompletedExercises(topicId: string): number[] {
  return readAll()[topicId] ?? [];
}

export function markExerciseComplete(
  topicId: string,
  index: number
): number[] {
  const all = readAll();
  const set = new Set(all[topicId] ?? []);
  set.add(index);
  const next = [...set].sort((a, b) => a - b);
  all[topicId] = next;
  writeAll(all);
  return next;
}

export function isExerciseUnlocked(topicId: string, index: number): boolean {
  if (index <= 0) return true;
  const completed = getCompletedExercises(topicId);
  for (let i = 0; i < index; i++) {
    if (!completed.includes(i)) return false;
  }
  return true;
}

export function isExerciseComplete(topicId: string, index: number): boolean {
  return getCompletedExercises(topicId).includes(index);
}

export function getFirstIncompleteExercise(
  topicId: string,
  total: number
): number {
  for (let i = 0; i < total; i++) {
    if (!isExerciseComplete(topicId, i)) return i;
  }
  return Math.max(0, total - 1);
}

export function areAllExercisesComplete(
  topicId: string,
  total: number
): boolean {
  if (total === 0) return true;
  const completed = getCompletedExercises(topicId);
  for (let i = 0; i < total; i++) {
    if (!completed.includes(i)) return false;
  }
  return true;
}

export function isFinalProjectTopicUnlocked(topicId: string): boolean {
  if (!isFinalProjectTopic(topicId)) return true;
  const idx = FINAL_PROJECT_TOPIC_IDS.indexOf(topicId);
  if (idx <= 0) return true;
  const prevId = FINAL_PROJECT_TOPIC_IDS[idx - 1];
  const prevTotal = getFinalProjectExerciseCount(prevId);
  return areAllExercisesComplete(prevId, prevTotal);
}

export function getNextFinalProjectTopic(topicId: string) {
  const mod = modules.find((m) => m.slug === "final-project");
  if (!mod) return null;
  const idx = mod.topics.findIndex((t) => t.id === topicId);
  if (idx === -1 || idx >= mod.topics.length - 1) return null;
  return mod.topics[idx + 1];
}

export function getPrevFinalProjectTopic(topicId: string) {
  const mod = modules.find((m) => m.slug === "final-project");
  if (!mod) return null;
  const idx = mod.topics.findIndex((t) => t.id === topicId);
  if (idx <= 0) return null;
  return mod.topics[idx - 1];
}
