"use client";

import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { readReturnToFromWindow } from "@/lib/course-practice-links";

const RETURN_DELAY_MS = 1600;

/**
 * After a successful course-practice solve, briefly show success then
 * return to the lesson when ?returnTo=/learn/... is present.
 */
export function useCoursePracticeReturn() {
  const router = useRouter();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const returnAfterSolve = useCallback(() => {
    const returnTo = readReturnToFromWindow();
    if (!returnTo) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      router.push(returnTo);
    }, RETURN_DELAY_MS);
  }, [router]);

  return { returnAfterSolve };
}
