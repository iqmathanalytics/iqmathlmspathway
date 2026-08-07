"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { Play, X } from "lucide-react";
import "plyr/dist/plyr.css";

export function extractVideoId(input: string): string {
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be") return url.pathname.slice(1).split("/")[0];
    const v = url.searchParams.get("v");
    if (v) return v;
    const parts = url.pathname.split("/");
    const idx = parts.indexOf("embed");
    if (idx !== -1) return parts[idx + 1];
  } catch {
    /* fall through */
  }
  return input;
}

interface YoutubeVideoModalProps {
  videoUrl: string;
  title?: string;
  onClose: () => void;
  accentColor?: string;
}

/**
 * Near-fullscreen LMS video player.
 * Uses Plyr + iframe crop so YouTube title / channel / watermark stay off-screen.
 */
export function YoutubeVideoModal({
  videoUrl,
  title,
  onClose,
  accentColor = "#0F75BD",
}: YoutubeVideoModalProps) {
  const videoId = extractVideoId(videoUrl);
  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const [playing, setPlaying] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const doClose = useCallback(() => {
    try {
      playerRef.current?.pause?.();
      playerRef.current?.destroy?.();
    } catch {
      /* noop */
    }
    playerRef.current = null;
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") doClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [doClose]);

  // Init Plyr only after user clicks Play
  useEffect(() => {
    if (!playing || !embedRef.current) return;
    let destroyed = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const applyCrop = () => {
      const embed = wrapperRef.current?.querySelector(
        ".plyr__video-embed"
      ) as HTMLElement | null;
      if (!embed) return;
      embed.style.overflow = "hidden";

      const iframe = embed.querySelector("iframe") as HTMLElement | null;
      if (iframe) {
        // Crop top/bottom so YouTube title, channel, logo stay outside the visible frame.
        // pointer-events:none — Plyr owns controls; YouTube overlay links stay unusable.
        iframe.style.position = "absolute";
        iframe.style.top = "-50%";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "200%";
        iframe.style.pointerEvents = "none";
      }
    };

    import("plyr").then(({ default: Plyr }) => {
      if (destroyed || !embedRef.current) return;

      playerRef.current = new Plyr(embedRef.current, {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["speed"],
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
        youtube: {
          noCookie: false,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          cc_load_policy: 0,
          disablekb: 1,
          autoplay: 1,
          controls: 0,
          fs: 0,
        },
        autoplay: true,
        hideControls: false,
      });

      playerRef.current.on("ready", applyCrop);
      timers.push(setTimeout(applyCrop, 300));
      timers.push(setTimeout(applyCrop, 1000));
      timers.push(setTimeout(applyCrop, 2500));
    });

    return () => {
      destroyed = true;
      timers.forEach(clearTimeout);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
      playerRef.current = null;
    };
  }, [playing, videoId]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Video"}
    >
      <style>{`
        .iqmath-yt-player .plyr {
          height: 100%;
          width: 100%;
          --plyr-color-main: ${accentColor};
        }
        .iqmath-yt-player .plyr__video-wrapper,
        .iqmath-yt-player .plyr__video-embed {
          height: 100%;
          background: #000;
        }
        .iqmath-yt-player .plyr__video-embed iframe {
          top: -50% !important;
          height: 200% !important;
          pointer-events: none !important;
        }
        /* Hide leftover YouTube / Plyr poster chrome */
        .iqmath-yt-player .plyr__poster {
          display: none !important;
        }
      `}</style>

      {/* Top bar — LMS only, no YouTube branding */}
      <header className="flex shrink-0 items-center gap-3 border-b border-white/10 bg-black px-3 py-2.5 sm:px-5 sm:py-3">
        <div className="min-w-0 flex-1">
          {title ? (
            <h2 className="truncate text-sm font-semibold text-white sm:text-base">
              {title}
            </h2>
          ) : (
            <span className="text-sm text-white/70">Lesson video</span>
          )}
        </div>
        <button
          type="button"
          onClick={doClose}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 touch-manipulation"
          aria-label="Close video"
        >
          <X className="h-4 w-4" />
          <span className="hidden sm:inline">Close</span>
        </button>
      </header>

      {/* Stage */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black">
        <div className="iqmath-yt-player relative h-full w-full max-w-[min(100%,calc((100vh-5.5rem)*16/9))]">
          {!playing ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative h-full w-full"
              aria-label={`Play ${title ?? "video"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbUrl}
                alt=""
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = thumbFallback;
                }}
              />
              <span className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-600 text-white shadow-2xl ring-4 ring-white/20 transition-transform group-hover:scale-105 sm:h-24 sm:w-24">
                  <Play className="ml-1 h-9 w-9 fill-white sm:h-11 sm:w-11" />
                </span>
                <span className="rounded-full bg-black/60 px-4 py-1.5 text-sm font-semibold text-white sm:text-base">
                  Play video
                </span>
              </span>
            </button>
          ) : (
            <div ref={wrapperRef} className="h-full w-full">
              <div
                ref={embedRef}
                className="h-full w-full"
                data-plyr-provider="youtube"
                data-plyr-embed-id={videoId}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
