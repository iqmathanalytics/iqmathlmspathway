import type { UserProgress } from "@/lib/types";

const LEGACY_KEY = "pypath-progress-v1";
const GUEST_KEY = "pypath-progress-guest-v1";

const defaultProgress: UserProgress = {
  completedTopics: [],
  quizScores: {},
  ideRan: [],
};

let activeUserId: string | null = null;

function userKey(userId: string) {
  return `pypath-progress-user-${userId}-v1`;
}

/** Call when auth session changes so progress reads/writes the correct scope. */
export function setActiveProgressUser(userId: string | null): void {
  activeUserId = userId;
}

export function getActiveProgressUser(): string | null {
  return activeUserId;
}

/** Remove guest and legacy browser progress keys (never used for signed-in users). */
export function clearGuestAndLegacyProgress(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(LEGACY_KEY);
    localStorage.removeItem(GUEST_KEY);
  } catch {
    /* ignore */
  }
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return { ...defaultProgress };
  if (!activeUserId) return { ...defaultProgress };
  try {
    const raw = localStorage.getItem(userKey(activeUserId));
    if (!raw) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return { ...defaultProgress };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined" || !activeUserId) return;
  localStorage.setItem(userKey(activeUserId), JSON.stringify(progress));
}

export function clearProgressForUser(userId: string): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(userKey(userId));
}

export function notifyProgressUpdated(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("pypath-progress-updated"));
  }
}

/** Mark that the user has run code in the IDE for this topic. */
export function markIdeRan(topicId: string): void {
  const progress = loadProgress();
  if (!progress.ideRan) progress.ideRan = [];
  if (progress.ideRan.includes(topicId)) return;
  progress.ideRan = [...progress.ideRan, topicId];
  saveProgress(progress);
  notifyProgressUpdated();
}

export function isIdeRan(progress: UserProgress, topicId: string): boolean {
  return (progress.ideRan ?? []).includes(topicId);
}

export function isQuizDone(progress: UserProgress, topicId: string): boolean {
  return progress.quizScores[topicId] !== undefined;
}
