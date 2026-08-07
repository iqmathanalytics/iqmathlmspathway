"use client";

import { useEffect } from "react";

const RELOAD_KEY = "iqmath:_next_chunk_reload";

/**
 * After a deploy, a tab can keep old HTML that points at deleted /_next/static
 * chunks. The browser then gets HTML (404/SPA fallback) for a .js URL → MIME error.
 * One automatic reload fetches fresh HTML that matches current assets.
 */
export function ChunkErrorRecovery() {
  useEffect(() => {
    const reloadOnce = () => {
      try {
        if (sessionStorage.getItem(RELOAD_KEY) === "1") return;
        sessionStorage.setItem(RELOAD_KEY, "1");
      } catch {
        /* private mode — still attempt one reload via memory guard below */
      }
      window.location.reload();
    };

    let memoryReloaded = false;
    const reloadOnceSafe = () => {
      if (memoryReloaded) return;
      memoryReloaded = true;
      reloadOnce();
    };

    const onScriptError = (event: Event) => {
      const target = event.target;
      if (!(target instanceof HTMLScriptElement)) return;
      const src = target.src || "";
      if (src.includes("/_next/static/")) reloadOnceSafe();
    };

    const onUnhandled = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const name = reason?.name || "";
      const message = String(reason?.message || reason || "");
      if (
        name === "ChunkLoadError" ||
        message.includes("Loading chunk") ||
        message.includes("/_next/static/")
      ) {
        reloadOnceSafe();
      }
    };

    // Clear the one-shot flag after a successful load window
    try {
      if (sessionStorage.getItem(RELOAD_KEY) === "1") {
        window.setTimeout(() => {
          try {
            sessionStorage.removeItem(RELOAD_KEY);
          } catch {
            /* ignore */
          }
        }, 10_000);
      }
    } catch {
      /* ignore */
    }

    window.addEventListener("error", onScriptError, true);
    window.addEventListener("unhandledrejection", onUnhandled);
    return () => {
      window.removeEventListener("error", onScriptError, true);
      window.removeEventListener("unhandledrejection", onUnhandled);
    };
  }, []);

  return null;
}
