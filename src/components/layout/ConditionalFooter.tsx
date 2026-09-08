"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

/** Hide site footer on immersive learn topic pages and coding workspaces so the IDE can fill the viewport. */
export function ConditionalFooter() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const hideLearnTopic = pathname.startsWith("/learn/") && parts.length >= 3;
  const hidePracticeWorkspace =
    (pathname.startsWith("/practice/python/") ||
      pathname.startsWith("/practice/python-basics/")) &&
    parts.length >= 4;

  if (hideLearnTopic || hidePracticeWorkspace) return null;
  return <Footer />;
}
