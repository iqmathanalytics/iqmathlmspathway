import type { CourseId } from "@/lib/types";
import { getSupabase } from "@/lib/supabase/client";

export const ENROLLMENTS_UPDATED_EVENT = "pypath-enrollments-updated";

export function notifyEnrollmentsUpdated(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(ENROLLMENTS_UPDATED_EVENT));
}

export async function enrollInCourse(
  userId: string,
  courseId: CourseId
): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) {
    return { error: "Sign-in is not configured. Add Supabase environment variables." };
  }

  const { error } = await sb.from("enrollments").upsert(
    { user_id: userId, course_id: courseId },
    { onConflict: "user_id,course_id", ignoreDuplicates: true }
  );

  if (error) {
    const denied =
      error.code === "42501" || /row-level security/i.test(error.message);
    return {
      error: denied
        ? "This program is not open for enrollment yet."
        : error.message,
    };
  }

  notifyEnrollmentsUpdated();
  return { error: null };
}
