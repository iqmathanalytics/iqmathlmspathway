"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play, Pause, Volume2, VolumeX, Maximize2, Minimize2,
  Settings, X, Captions,
} from "lucide-react";

// ── YouTube IFrame API types ──────────────────────────────────────────────────
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  setVolume(volume: number): void;
  getVolume(): number;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  setPlaybackRate(rate: number): void;
  loadModule(module: string): void;
  unloadModule(module: string): void;
  setOption(module: string, option: string, value: unknown): void;
  destroy(): void;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        container: HTMLElement,
        options: {
          videoId: string;
          width?: string | number;
          height?: string | number;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (e: { target: YTPlayer }) => void;
            onStateChange?: (e: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

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

function fmt(seconds: number): string {
  const s = Math.floor(seconds);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const ss = String(s % 60).padStart(2, "0");
  const mm = String(m % 60).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

function loadYTApi(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT?.Player) { resolve(); return; }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev?.(); resolve(); };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    }
  });
}

const SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

// ── Component ─────────────────────────────────────────────────────────────────
interface VideoTutorialModalProps {
  videoUrl: string;
}

export function VideoTutorialModal({ videoUrl }: VideoTutorialModalProps) {
  const videoId = extractVideoId(videoUrl);

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flashPlay, setFlashPlay] = useState(false);
  const [flashPause, setFlashPause] = useState(false);

  const playerContainerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPlayingRef = useRef(false);

  // Keep ref in sync so keyboard handler never goes stale
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);

  // ── Init / destroy player ──────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen || !playerContainerRef.current) return;

    loadYTApi().then(() => {
      if (!playerContainerRef.current) return;
      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          controls: 0,        // hide ALL YouTube native controls & branding
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          disablekb: 1,
          fs: 0,              // disable YouTube's own fullscreen (we handle it)
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            setDuration(e.target.getDuration());
            setVolume(e.target.getVolume());
            setIsPlaying(true);
            // Disable pointer events on the iframe — our overlay handles all clicks
            const iframe = playerContainerRef.current?.querySelector("iframe");
            if (iframe) (iframe as HTMLElement).style.pointerEvents = "none";
          },
          onStateChange: (e) => {
            const { PLAYING, PAUSED, ENDED } = window.YT.PlayerState;
            if (e.data === PLAYING) {
              setIsPlaying(true);
              const d = playerRef.current?.getDuration() ?? 0;
              if (d > 0) setDuration(d);
            } else if (e.data === PAUSED || e.data === ENDED) {
              setIsPlaying(false);
            }
          },
        },
      });
    });

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [isOpen, videoId]);

  // ── Progress ticker ────────────────────────────────────────────────────────
  useEffect(() => {
    if (isPlaying) {
      tickRef.current = setInterval(() => {
        if (playerRef.current) {
          setCurrentTime(playerRef.current.getCurrentTime());
          const d = playerRef.current.getDuration();
          if (d > 0) setDuration(d);
        }
      }, 250);
    } else {
      if (tickRef.current) { clearInterval(tickRef.current); tickRef.current = null; }
    }
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  }, [isPlaying]);

  // ── Fullscreen listener ────────────────────────────────────────────────────
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // ── Keyboard shortcuts ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.fullscreenElement) { doClose(); return; }
      if (e.key === " " || e.key === "k") { e.preventDefault(); togglePlay(); }
      if (e.key === "m") { toggleMute(); }
      if (e.key === "f") { toggleFullscreen(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // ── Body scroll lock ───────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ── Actions ────────────────────────────────────────────────────────────────
  const doClose = useCallback(() => {
    playerRef.current?.pauseVideo();
    setIsOpen(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setCaptionsOn(false);
    setShowSpeedMenu(false);
    setSpeed(1);
  }, []);

  const togglePlay = useCallback(() => {
    if (!playerRef.current) return;
    if (isPlayingRef.current) {
      playerRef.current.pauseVideo();
      setFlashPause(true); setTimeout(() => setFlashPause(false), 600);
    } else {
      playerRef.current.playVideo();
      setFlashPlay(true); setTimeout(() => setFlashPlay(false), 600);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!playerRef.current) return;
    if (playerRef.current.isMuted()) {
      playerRef.current.unMute();
      setIsMuted(false);
      if (volume === 0) { playerRef.current.setVolume(50); setVolume(50); }
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  }, [volume]);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const t = pct * duration;
    playerRef.current.seekTo(t, true);
    setCurrentTime(t);
  }, [duration]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    playerRef.current?.setVolume(v);
    if (v === 0) { playerRef.current?.mute(); setIsMuted(true); }
    else { playerRef.current?.unMute(); setIsMuted(false); }
  }, []);

  const toggleCaptions = useCallback(() => {
    if (!playerRef.current) return;
    if (captionsOn) {
      playerRef.current.unloadModule("captions");
      setCaptionsOn(false);
    } else {
      playerRef.current.loadModule("captions");
      playerRef.current.setOption("captions", "track", { languageCode: "en" });
      setCaptionsOn(true);
    }
  }, [captionsOn]);

  const applySpeed = useCallback((s: number) => {
    playerRef.current?.setPlaybackRate(s);
    setSpeed(s);
    setShowSpeedMenu(false);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!videoWrapperRef.current) return;
    document.fullscreenElement
      ? document.exitFullscreen()
      : videoWrapperRef.current.requestFullscreen();
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const displayVol = isMuted ? 0 : volume;

  return (
    <>
      {/* ── Trigger button ──────────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-800 hover:bg-purple-100 transition-colors"
      >
        <Play className="h-4 w-4 fill-purple-600 text-purple-600" />
        Video Tutorial
      </button>

      {/* ── Modal ───────────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Video Tutorial"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={doClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="relative z-10 w-[80vw] max-w-5xl">

            {/* Video wrapper — 16 : 9 aspect ratio */}
            <div
              ref={videoWrapperRef}
              className="group relative w-full overflow-hidden rounded-xl bg-black shadow-2xl"
              style={{ paddingBottom: "56.25%" }}
            >
              {/*
                YouTube player mount point.
                Intentionally oversized: top:-14% / height:128% makes the iframe
                128% of the container height, shifted 14% upward. Combined with
                overflow:hidden on the wrapper, this physically clips the top 14%
                (where YouTube title, channel name, and "paid promotions" appear)
                and bottom 14% (YouTube watermark / controls) out of the visible
                area. Our custom controls bar already covers the bottom strip.
              */}
              <div
                ref={playerContainerRef}
                className="absolute left-0 w-full"
                style={{ top: "-14%", height: "128%" }}
              />



              {/* Close button — top-right corner inside the video */}
              <button
                onClick={doClose}
                className="absolute top-3 right-3 z-50 flex items-center justify-center
                  h-8 w-8 rounded-full bg-black/60 text-white hover:bg-black/80
                  transition-colors backdrop-blur-sm"
                aria-label="Close video"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Transparent click overlay — blocks YT UI, handles play/pause */}
              <div
                className="absolute inset-0 z-10 cursor-pointer"
                onClick={togglePlay}
                aria-hidden="true"
              />

              {/* ── Flash feedback icon ───────────────────────────────────── */}
              {(flashPlay || flashPause) && (
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                  <div className="rounded-full bg-black/40 p-5">
                    {flashPlay
                      ? <Play className="h-10 w-10 fill-white text-white" />
                      : <Pause className="h-10 w-10 fill-white text-white" />
                    }
                  </div>
                </div>
              )}

              {/* ── Controls bar ──────────────────────────────────────────── */}
              <div
                className={`absolute bottom-0 left-0 right-0 z-20 px-3 pb-2 pt-10
                  bg-gradient-to-t from-black/85 via-black/40 to-transparent
                  transition-opacity duration-300
                  ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* ── Seek bar ─────────────────────────────────────────── */}
                <div
                  className="relative mb-2.5 h-1 w-full cursor-pointer rounded-full bg-white/25
                    hover:h-[5px] transition-all duration-100"
                  onClick={handleSeek}
                  role="slider"
                  aria-label="Seek"
                  aria-valuemin={0}
                  aria-valuemax={duration}
                  aria-valuenow={currentTime}
                >
                  {/* Filled portion */}
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-red-500"
                    style={{ width: `${progress}%` }}
                  />
                  {/* Thumb dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white
                      shadow opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ left: `calc(${progress}% - 6px)` }}
                  />
                </div>

                {/* ── Bottom row ──────────────────────────────────────── */}
                <div className="flex items-center gap-1">

                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="rounded p-1 text-white hover:bg-white/10 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying
                      ? <Pause className="h-5 w-5 fill-white" />
                      : <Play  className="h-5 w-5 fill-white" />
                    }
                  </button>

                  {/* Time */}
                  <span className="select-none tabular-nums text-xs text-white/90 min-w-[90px] pl-1">
                    {fmt(currentTime)} / {fmt(duration)}
                  </span>

                  <div className="flex-1" />

                  {/* Volume */}
                  <div
                    className="flex items-center gap-1"
                    onMouseEnter={() => setShowVolume(true)}
                    onMouseLeave={() => setShowVolume(false)}
                  >
                    <button
                      onClick={toggleMute}
                      className="rounded p-1 text-white hover:bg-white/10 transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted || displayVol === 0
                        ? <VolumeX className="h-5 w-5" />
                        : <Volume2 className="h-5 w-5" />
                      }
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200
                        ${showVolume ? "w-20 opacity-100" : "w-0 opacity-0"}`}
                    >
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={displayVol}
                        onChange={handleVolumeChange}
                        className="w-20 cursor-pointer accent-white"
                        style={{ height: "3px" }}
                        aria-label="Volume"
                      />
                    </div>
                  </div>

                  {/* Captions */}
                  <button
                    onClick={toggleCaptions}
                    className={`rounded p-1 transition-colors hover:bg-white/10
                      ${captionsOn ? "text-white" : "text-white/40 hover:text-white/80"}`}
                    aria-label="Toggle captions"
                    aria-pressed={captionsOn}
                  >
                    <Captions className="h-5 w-5" />
                  </button>

                  {/* Speed / Settings */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSpeedMenu((p) => !p)}
                      className="flex items-center gap-0.5 rounded p-1 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      aria-label="Playback speed"
                    >
                      <Settings className="h-4 w-4" />
                      {speed !== 1 && (
                        <span className="text-xs font-semibold">{speed}×</span>
                      )}
                    </button>

                    {showSpeedMenu && (
                      <div className="absolute bottom-9 right-0 z-30 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-neutral-900/95 py-1 shadow-2xl">
                        <p className="px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
                          Speed
                        </p>
                        {SPEEDS.map((s) => (
                          <button
                            key={s}
                            onClick={() => applySpeed(s)}
                            className={`flex w-full items-center justify-between px-3 py-1.5 text-sm
                              hover:bg-white/10 transition-colors
                              ${speed === s ? "text-white font-semibold" : "text-white/70"}`}
                          >
                            <span>{s === 1 ? "Normal" : `${s}×`}</span>
                            {speed === s && <span className="text-xs text-white">✓</span>}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="rounded p-1 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                  >
                    {isFullscreen
                      ? <Minimize2 className="h-5 w-5" />
                      : <Maximize2 className="h-5 w-5" />
                    }
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
