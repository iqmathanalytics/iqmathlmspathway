/**
 * Final-project progress helpers — intentionally free of heavy lesson/curriculum imports
 * so topic layouts don't pull module-18 + full curriculum into every page.
 */

const STORAGE_KEY = "python-lms-fp-exercises";

export const FINAL_PROJECT_TOPIC_IDS = [
  "m18-t1",
  "m18-t2",
  "m18-t3",
  "m18-t4",
  "m18-t5",
] as const;

export type FinalProjectTopicId = (typeof FINAL_PROJECT_TOPIC_IDS)[number];

/** Static metadata — keep in sync with curriculum capstone + module-18 practice counts. */
const FINAL_PROJECT_META: Record<
  FinalProjectTopicId,
  { slug: string; title: string; exerciseCount: number }
> = {
  "m18-t1": {
    slug: "overview",
    title: "Project Overview & Problem Statement",
    exerciseCount: 1,
  },
  "m18-t2": {
    slug: "data-model",
    title: "Step 1: Data Model",
    exerciseCount: 1,
  },
  "m18-t3": {
    slug: "logic-and-loops",
    title: "Step 2: Logic & Loops",
    exerciseCount: 1,
  },
  "m18-t4": {
    slug: "functions-and-report",
    title: "Step 3: Functions & Report",
    exerciseCount: 1,
  },
  "m18-t5": {
    slug: "capstone",
    title: "Capstone Build",
    exerciseCount: 1,
  },
};

export function isFinalProjectTopic(topicId: string): topicId is FinalProjectTopicId {
  return (FINAL_PROJECT_TOPIC_IDS as readonly string[]).includes(topicId);
}

export function getFinalProjectExerciseCount(topicId: string): number {
  if (!isFinalProjectTopic(topicId)) return 0;
  return FINAL_PROJECT_META[topicId].exerciseCount;
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
  if (!isFinalProjectTopic(topicId)) return null;
  const idx = FINAL_PROJECT_TOPIC_IDS.indexOf(topicId);
  if (idx < 0 || idx >= FINAL_PROJECT_TOPIC_IDS.length - 1) return null;
  const nextId = FINAL_PROJECT_TOPIC_IDS[idx + 1];
  const meta = FINAL_PROJECT_META[nextId];
  return { id: nextId, slug: meta.slug, title: meta.title };
}

export function getPrevFinalProjectTopic(topicId: string) {
  if (!isFinalProjectTopic(topicId)) return null;
  const idx = FINAL_PROJECT_TOPIC_IDS.indexOf(topicId);
  if (idx <= 0) return null;
  const prevId = FINAL_PROJECT_TOPIC_IDS[idx - 1];
  const meta = FINAL_PROJECT_META[prevId];
  return { id: prevId, slug: meta.slug, title: meta.title };
}
