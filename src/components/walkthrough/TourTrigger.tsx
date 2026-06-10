"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useWalkthrough } from "@/contexts/WalkthroughContext";

/**
 * Reads the ?tour=1 search param set by the register page and starts
 * the walkthrough. Removes the param from the URL immediately so it
 * doesn't persist or confuse sharing/bookmarking.
 */
export function TourTrigger() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { start } = useWalkthrough();

  useEffect(() => {
    if (searchParams.get("tour") !== "1") return;

    // Clean the URL first so the param disappears
    router.replace("/dashboard", { scroll: false });

    // Wait for the dashboard DOM to fully render before starting the tour
    const t = setTimeout(() => {
      start();
    }, 500);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount — param is stable at mount time

  return null;
}
