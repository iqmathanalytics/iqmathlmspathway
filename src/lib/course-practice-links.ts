/**
 * Course module challenge URLs — under /learn, NOT the Practice hub.
 * Data still comes from curriculum module problems (src/data/practice/module-*).
 */

export function lessonReturnPath(moduleSlug: string, topicSlug: string) {
  return `/learn/${moduleSlug}/${topicSlug}`;
}

/** Topic challenge list (module questions for this lesson). */
export function courseTopicChallengeHref(moduleSlug: string, topicSlug: string) {
  return `/learn/${moduleSlug}/${topicSlug}/challenges`;
}

/** Single module challenge IDE. */
export function courseChallengeHref(
  moduleSlug: string,
  topicSlug: string,
  problemSlug: string,
  options?: { returnToLesson?: boolean }
) {
  const base = `/learn/${moduleSlug}/${topicSlug}/challenges/${problemSlug}`;
  if (!options?.returnToLesson) return base;
  const returnTo = encodeURIComponent(lessonReturnPath(moduleSlug, topicSlug));
  return `${base}?returnTo=${returnTo}`;
}

/** @deprecated use courseChallengeHref */
export function coursePracticeHref(
  moduleSlug: string,
  topicSlug: string,
  problemSlug: string,
  options?: { returnToLesson?: boolean }
) {
  return courseChallengeHref(moduleSlug, topicSlug, problemSlug, options);
}

/** @deprecated use courseTopicChallengeHref */
export function courseTopicPracticeHref(moduleSlug: string, topicSlug: string) {
  return courseTopicChallengeHref(moduleSlug, topicSlug);
}

/** Safe return path from ?returnTo= — only allow /learn/... */
export function parseCoursePracticeReturnTo(search: string): string | null {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(raw);
  return sanitizeReturnTo(params.get("returnTo"));
}

function sanitizeReturnTo(value: string | null): string | null {
  if (!value) return null;
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    /* use raw */
  }
  if (!decoded.startsWith("/learn/")) return null;
  if (decoded.includes("//") || decoded.includes("://")) return null;
  return decoded;
}

export function readReturnToFromWindow(): string | null {
  if (typeof window === "undefined") return null;
  return parseCoursePracticeReturnTo(window.location.search);
}
