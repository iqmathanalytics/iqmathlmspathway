"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, X } from "lucide-react";
import "plyr/dist/plyr.css";

// ── Helpers ───────────────────────────────────────────────────────────────────
function extractVideoId(input: string): string {
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be") return url.pathname.slice(1);
    const v = url.searchParams.get("v");
    if (v) return v;
    const parts = url.pathname.split("/");
    const idx = parts.indexOf("embed");
    if (idx !== -1) return parts[idx + 1];
  } catch { /* fall through */ }
  return input;
}

// ── Component ─────────────────────────────────────────────────────────────────
interface VideoTutorialModalProps {
  videoUrl: string;
}

export function VideoTutorialModal({ videoUrl }: VideoTutorialModalProps) {
  const videoId = extractVideoId(videoUrl);
  const [isOpen, setIsOpen] = useState(false);
  const embedRef  = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);

  // ── Init Plyr ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen || !embedRef.current) return;
    let destroyed = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Crop the iframe to hide YouTube overlays (title card, channel name,
    // "paid promotion" text, watermark/logo) which sit at the top and
    // bottom edges of the YouTube player.
    // 20% crop top + 20% crop bottom ensures they are always outside the
    // visible area regardless of screen size.
    const applyCrop = () => {
      const embed = wrapperRef.current?.querySelector(
        ".plyr__video-embed"
      ) as HTMLElement | null;
      if (!embed) return;

      embed.style.overflow = "hidden";

      const iframe = embed.querySelector("iframe") as HTMLElement | null;
      if (iframe) {
        // -50% / 200% crops ~25% from each edge of the YouTube player,
        // hiding title card, channel name, paid-promotion text and logo.
        // pointer-events:none stops YouTube's own overlay links from
        // being clickable (Plyr handles all interaction through its layer).
        iframe.style.position      = "absolute";
        iframe.style.top           = "-50%";
        iframe.style.left          = "0";
        iframe.style.width         = "100%";
        iframe.style.height        = "200%";
        iframe.style.pointerEvents = "none";
      }
    };

    import("plyr").then(({ default: Plyr }) => {
      if (destroyed || !embedRef.current) return;

      playerRef.current = new Plyr(embedRef.current, {
        controls: ["play", "progress", "current-time", "mute", "volume", "settings", "fullscreen"],
        settings: ["speed"],
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          cc_load_policy: 0,
          disablekb: 1,
          autoplay: 1,
        },
        autoplay: true,
      });

      // Apply crop when Plyr says ready, plus staggered fallbacks
      // because on mobile the YouTube iframe can load after "ready".
      playerRef.current.on("ready", applyCrop);
      timers.push(setTimeout(applyCrop, 300));
      timers.push(setTimeout(applyCrop, 1000));
      timers.push(setTimeout(applyCrop, 2500));
    });

    return () => {
      destroyed = true;
      timers.forEach(clearTimeout);
      try { playerRef.current?.destroy(); } catch { /* noop */ }
      playerRef.current = null;
    };
  }, [isOpen]);

  // ── Body scroll lock ───────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const doClose = useCallback(() => {
    try { playerRef.current?.pause(); } catch { /* noop */ }
    setIsOpen(false);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") doClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, doClose]);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-800 hover:bg-purple-100 transition-colors"
      >
        <Play className="h-4 w-4 fill-purple-600 text-purple-600" />
        Video Tutorial
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video Tutorial"
        >
          {/* Backdrop — no click-to-close to avoid accidental dismiss on mobile */}
          <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

          <div className="relative z-10 w-full max-w-4xl">
            {/* Close button */}
            <button
              onClick={doClose}
              className="absolute -top-11 right-0 flex items-center gap-1.5
                rounded-full bg-white/10 px-3 py-1.5 text-sm text-white
                hover:bg-white/20 transition-colors touch-manipulation"
              aria-label="Close video"
            >
              <X className="h-4 w-4" />
              Close
            </button>

            {/* CSS overrides — must load after plyr.css */}
            <style>{`
              .plyr__video-embed iframe {
                top: -50% !important;
                height: 200% !important;
                pointer-events: none !important;
              }
              :root { --plyr-color-main: #7c3aed; }
            `}</style>

            {/* Plyr mount — wrapperRef lets us find the generated iframe after init */}
            <div ref={wrapperRef}>
              <div
                ref={embedRef}
                data-plyr-provider="youtube"
                data-plyr-embed-id={videoId}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
