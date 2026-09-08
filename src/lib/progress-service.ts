import type { UserProgress } from "@/lib/types";
import {
  loadProgress as loadLocalProgress,
  saveProgress as saveLocalProgress,
  setActiveProgressUser,
  clearProgressForUser,
  clearGuestAndLegacyProgress,
  getActiveProgressUser,
  notifyProgressUpdated,
  markIdeRan as markIdeRanLocal,
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

type LessonPatch = {
  completed?: boolean;
  quiz_score?: number;
  quiz_attempted?: boolean;
  ide_ran?: boolean;
  last_visited_at?: string;
};

function missingColumnError(message: string | undefined): boolean {
  if (!message) return false;
  return /ide_ran|quiz_attempted|column/i.test(message);
}

async function upsertLessonRow(
  userId: string,
  topicId: string,
  patch: LessonPatch
): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { error: "Auth is not configured." };

  let existing: {
    completed?: boolean;
    quiz_score?: number;
    quiz_attempted?: boolean;
    ide_ran?: boolean;
  } | null = null;

  const flagged = await sb
    .from("lesson_progress")
    .select("completed, quiz_score, quiz_attempted, ide_ran")
    .eq("user_id", userId)
    .eq("topic_id", topicId)
    .maybeSingle();

  if (flagged.error && missingColumnError(flagged.error.message)) {
    const basic = await sb
      .from("lesson_progress")
      .select("completed, quiz_score")
      .eq("user_id", userId)
      .eq("topic_id", topicId)
      .maybeSingle();
    existing = basic.data;
  } else if (!flagged.error) {
    existing = flagged.data;
  }

  const baseRow = {
    user_id: userId,
    topic_id: topicId,
    completed: patch.completed ?? existing?.completed ?? false,
    quiz_score: Math.max(patch.quiz_score ?? 0, existing?.quiz_score ?? 0),
    last_visited_at: patch.last_visited_at ?? new Date().toISOString(),
  };

  const fullRow = {
    ...baseRow,
    quiz_attempted:
      patch.quiz_attempted ?? existing?.quiz_attempted ?? baseRow.quiz_score > 0,
    ide_ran: patch.ide_ran ?? existing?.ide_ran ?? false,
  };

  const full = await sb.from("lesson_progress").upsert(fullRow, {
    onConflict: "user_id,topic_id",
  });

  if (!full.error) return { error: null };

  if (!missingColumnError(full.error.message)) {
    return { error: full.error.message };
  }

  const fallback = await sb.from("lesson_progress").upsert(baseRow, {
    onConflict: "user_id,topic_id",
  });
  return { error: fallback.error?.message ?? null };
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

/** Cloud is source of truth for logged-in users when reachable. Never wipe local on fetch failure. */
export async function syncProgressFromCloud(userId: string): Promise<UserProgress> {
  setActiveProgressUser(userId);

  if (!isSupabaseConfigured()) {
    return loadLocalProgress();
  }

  const sb = getSupabase();
  if (!sb) return loadLocalProgress();

  const local = loadLocalProgress();

  let data:
    | Array<{
        topic_id: string;
        completed: boolean;
        quiz_score: number | null;
        quiz_attempted?: boolean | null;
        ide_ran?: boolean | null;
        last_visited_at: string | null;
      }>
    | null = null;

  const withFlags = await sb
    .from("lesson_progress")
    .select("topic_id, completed, quiz_score, quiz_attempted, ide_ran, last_visited_at")
    .eq("user_id", userId);

  if (withFlags.error && missingColumnError(withFlags.error.message)) {
    const basic = await sb
      .from("lesson_progress")
      .select("topic_id, completed, quiz_score, last_visited_at")
      .eq("user_id", userId);
    if (basic.error) {
      return local;
    }
    data = basic.data;
  } else if (withFlags.error) {
    return local;
  } else {
    data = withFlags.data;
  }

  const progress: UserProgress = {
    completedTopics: [],
    quizScores: {},
    ideRan: [...(local.ideRan ?? [])],
  };

  let latest: { topicId: string; at: number } | null = null;
  for (const row of data ?? []) {
    if (row.completed) progress.completedTopics.push(row.topic_id);

    const attempted =
      row.quiz_attempted === true ||
      (row.quiz_attempted == null && (row.quiz_score ?? 0) > 0);
    if (attempted && row.quiz_score != null) {
      progress.quizScores[row.topic_id] = row.quiz_score;
    }

    if (row.ide_ran) {
      if (!progress.ideRan.includes(row.topic_id)) {
        progress.ideRan.push(row.topic_id);
      }
    }

    if (row.last_visited_at) {
      const at = new Date(row.last_visited_at).getTime();
      if (!latest || at > latest.at) {
        latest = { topicId: row.topic_id, at };
      }
    }
  }
  if (latest) progress.lastVisited = latest.topicId;

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
  const prev = progress.quizScores[topicId];
  progress.quizScores[topicId] =
    prev === undefined ? scorePercent : Math.max(prev, scorePercent);
  saveLocalProgress(progress);
  notifyProgressUpdated();

  if (isSupabaseConfigured()) {
    await upsertLessonRow(userId, topicId, {
      quiz_score: progress.quizScores[topicId],
      quiz_attempted: true,
    });
  }

  return progress;
}

/** Persist IDE-run flag locally and to the cloud when possible. */
export async function markIdeRanAsync(
  userId: string,
  topicId: string
): Promise<void> {
  setActiveProgressUser(userId);
  markIdeRanLocal(topicId);

  if (!isSupabaseConfigured()) return;
  await upsertLessonRow(userId, topicId, {
    ide_ran: true,
    last_visited_at: new Date().toISOString(),
  });
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

export async function clearCloudLessonProgress(
  userId: string
): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { error: "Auth is not configured." };

  const updateRes = await sb
    .from("lesson_progress")
    .update({ completed: false, quiz_score: 0, quiz_attempted: false, ide_ran: false })
    .eq("user_id", userId);

  if (updateRes.error && !missingColumnError(updateRes.error.message)) {
    return { error: updateRes.error.message };
  }

  if (updateRes.error && missingColumnError(updateRes.error.message)) {
    const legacy = await sb
      .from("lesson_progress")
      .update({ completed: false, quiz_score: 0 })
      .eq("user_id", userId);
    if (legacy.error) return { error: legacy.error.message };
  }

  const deleteRes = await sb.from("lesson_progress").delete().eq("user_id", userId);
  if (deleteRes.error) {
    return { error: deleteRes.error.message };
  }

  clearProgressForUser(userId);
  notifyProgressUpdated();
  return { error: null };
}

export async function clearCloudPracticeProgress(
  userId: string
): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { error: "Auth is not configured." };

  const updateRes = await sb
    .from("practice_progress")
    .update({
      status: "not_started",
      public_passed: false,
      hidden_passed: false,
      code_draft: "",
    })
    .eq("user_id", userId);

  if (updateRes.error) {
    return { error: updateRes.error.message };
  }

  const deleteRes = await sb.from("practice_progress").delete().eq("user_id", userId);
  if (deleteRes.error) {
    return { error: deleteRes.error.message };
  }

  return { error: null };
}
