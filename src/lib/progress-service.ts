import type { UserProgress } from "@/lib/types";
import {
  loadProgress as loadLocalProgress,
  saveProgress as saveLocalProgress,
  setActiveProgressUser,
  clearProgressForUser,
  clearGuestAndLegacyProgress,
  getActiveProgressUser,
  notifyProgressUpdated,
} from "@/lib/progress";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { getPublishedTopicCount } from "@/data/curriculum";

export {
  setActiveProgressUser,
  clearGuestAndLegacyProgress,
  notifyProgressUpdated,
};

const AUTH_ONLY_FLAG = "pypath-auth-only-v2";

export function loadProgress(): UserProgress {
  return loadLocalProgress();
}

export function saveProgress(progress: UserProgress): void {
  saveLocalProgress(progress);
  notifyProgressUpdated();
}

async function upsertLessonRow(
  userId: string,
  topicId: string,
  patch: { completed?: boolean; quiz_score?: number; last_visited_at?: string }
) {
  const sb = getSupabase();
  if (!sb) return;

  const { data: existing } = await sb
    .from("lesson_progress")
    .select("completed, quiz_score")
    .eq("user_id", userId)
    .eq("topic_id", topicId)
    .maybeSingle();

  const completed = patch.completed ?? existing?.completed ?? false;
  const quiz_score = Math.max(patch.quiz_score ?? 0, existing?.quiz_score ?? 0);

  await sb.from("lesson_progress").upsert(
    {
      user_id: userId,
      topic_id: topicId,
      completed,
      quiz_score,
      last_visited_at: patch.last_visited_at ?? new Date().toISOString(),
    },
    { onConflict: "user_id,topic_id" }
  );
}

/**
 * One-time reset per user: clears mistaken guest-migrated cloud rows and local cache.
 * Runs once per browser after the auth-only progress fix.
 */
export async function migrateToAuthOnlyProgress(userId: string): Promise<void> {
  if (typeof window === "undefined") return;
  const flagKey = `${AUTH_ONLY_FLAG}-${userId}`;
  if (localStorage.getItem(flagKey)) return;

  clearGuestAndLegacyProgress();
  clearProgressForUser(userId);

  if (isSupabaseConfigured()) {
    await clearCloudLessonProgress(userId);
    await clearCloudPracticeProgress(userId);
  }

  localStorage.setItem(flagKey, "1");
}

/** Cloud is source of truth for logged-in users. Never merges guest browser progress. */
export async function syncProgressFromCloud(userId: string): Promise<UserProgress> {
  setActiveProgressUser(userId);

  if (!isSupabaseConfigured()) {
    return loadLocalProgress();
  }

  const sb = getSupabase();
  if (!sb) return loadLocalProgress();

  const { data, error } = await sb
    .from("lesson_progress")
    .select("topic_id, completed, quiz_score, last_visited_at")
    .eq("user_id", userId);

  const local = loadLocalProgress();
  const progress: UserProgress = {
    completedTopics: [],
    quizScores: {},
    ideRan: local.ideRan ?? [],
  };

  if (!error && data) {
    let latest: { topicId: string; at: number } | null = null;
    for (const row of data) {
      if (row.completed) progress.completedTopics.push(row.topic_id);
      if (row.quiz_score > 0) progress.quizScores[row.topic_id] = row.quiz_score;
      if (row.last_visited_at) {
        const at = new Date(row.last_visited_at).getTime();
        if (!latest || at > latest.at) {
          latest = { topicId: row.topic_id, at };
        }
      }
    }
    if (latest) progress.lastVisited = latest.topicId;
  }

  saveLocalProgress(progress);
  notifyProgressUpdated();
  return progress;
}

export async function markTopicCompleteAsync(
  userId: string,
  topicId: string
): Promise<UserProgress> {
  setActiveProgressUser(userId);
  const progress = loadLocalProgress();
  if (!progress.completedTopics.includes(topicId)) {
    progress.completedTopics.push(topicId);
  }
  progress.lastVisited = topicId;
  saveLocalProgress(progress);
  notifyProgressUpdated();

  if (isSupabaseConfigured()) {
    await upsertLessonRow(userId, topicId, {
      completed: true,
      last_visited_at: new Date().toISOString(),
    });
  }

  return progress;
}

export async function saveQuizScoreAsync(
  userId: string,
  topicId: string,
  scorePercent: number
): Promise<UserProgress> {
  setActiveProgressUser(userId);
  const progress = loadLocalProgress();
  const prev = progress.quizScores[topicId] ?? 0;
  progress.quizScores[topicId] = Math.max(prev, scorePercent);
  saveLocalProgress(progress);
  notifyProgressUpdated();

  if (isSupabaseConfigured()) {
    await upsertLessonRow(userId, topicId, { quiz_score: progress.quizScores[topicId] });
  }

  return progress;
}

export function isTopicCompleted(topicId: string): boolean {
  if (!getActiveProgressUser()) return false;
  return loadLocalProgress().completedTopics.includes(topicId);
}

export function getCompletionPercent(totalPublished?: number): number {
  if (!getActiveProgressUser()) return 0;
  const total = totalPublished ?? getPublishedTopicCount();
  if (total === 0) return 0;
  const completed = loadLocalProgress().completedTopics.length;
  return Math.round((completed / total) * 100);
}

/** Reset local cache for a user (e.g. on sign-out). */
export function resetProgressSession(): void {
  setActiveProgressUser(null);
}

export async function clearCloudLessonProgress(userId: string): Promise<void> {
  const sb = getSupabase();
  if (!sb) return;
  // Reset in place (works with existing update RLS; fixes stale completed rows)
  await sb
    .from("lesson_progress")
    .update({ completed: false, quiz_score: 0 })
    .eq("user_id", userId);
  await sb.from("lesson_progress").delete().eq("user_id", userId);
  clearProgressForUser(userId);
  notifyProgressUpdated();
}

export async function clearCloudPracticeProgress(userId: string): Promise<void> {
  const sb = getSupabase();
  if (!sb) return;
  await sb
    .from("practice_progress")
    .update({
      status: "not_started",
      public_passed: false,
      hidden_passed: false,
      code_draft: "",
    })
    .eq("user_id", userId);
  await sb.from("practice_progress").delete().eq("user_id", userId);
}
