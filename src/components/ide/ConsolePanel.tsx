"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Terminal, Trash2, Copy, Check } from "lucide-react";
import type { ConsoleLine } from "./types";
import clsx from "clsx";

interface ConsolePanelProps {
  lines: ConsoleLine[];
  loading: boolean;
  running: boolean;
  error: string | null;
  onClear: () => void;
  /** Max height of the scrollable output area (px) */
  maxHeight?: number;
  /** Fill remaining height in a flex parent and scroll inside the console. */
  fill?: boolean;
  /** Hide the duplicate Console title when the parent already has a Console tab. */
  compact?: boolean;
  stdinActive?: boolean;
  stdinDraft?: string;
  onStdinDraftChange?: (value: string) => void;
  onStdinSubmit?: (value: string) => void;
  /** Practice studio uses light; lesson IDE keeps dark. */
  variant?: "dark" | "light";
}

function lineClass(kind: ConsoleLine["kind"], light: boolean) {
  if (light) {
    switch (kind) {
      case "stdout":
        return "text-emerald-700";
      case "stderr":
        return "text-amber-700";
      case "stdin":
        return "text-sky-700";
      case "error":
        return "text-red-600";
      case "info":
        return "text-brand-700";
      case "divider":
        return "text-slate-500 font-medium";
      default:
        return "text-slate-700";
    }
  }
  switch (kind) {
    case "stdout":
      return "text-emerald-300";
    case "stderr":
      return "text-amber-300";
    case "stdin":
      return "text-sky-200";
    case "error":
      return "text-red-400";
    case "info":
      return "text-sky-300";
    case "divider":
      return "text-gray-500 font-medium";
    default:
      return "text-gray-300";
  }
}

function linePrefix(kind: ConsoleLine["kind"]) {
  switch (kind) {
    case "stdout":
      return "";
    case "stderr":
      return "!";
    case "stdin":
      return "‹";
    case "error":
      return "✕";
    default:
      return "";
  }
}

export function ConsolePanel({
  lines,
  loading,
  running,
  error,
  onClear,
  maxHeight = 220,
  fill = false,
  compact = false,
  stdinActive = false,
  stdinDraft = "",
  onStdinDraftChange,
  onStdinSubmit,
  variant = "dark",
}: ConsolePanelProps) {
  const light = variant === "light";
  const scrollRef = useRef<HTMLDivElement>(null);
  const stdinRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const prevCountRef = useRef(0);

  const outputLines = lines.filter(
    (l) =>
      l.kind === "stdout" ||
      l.kind === "stderr" ||
      l.kind === "error" ||
      l.kind === "stdin"
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const grew = lines.length > prevCountRef.current;
    if (grew || running || stdinActive) {
      el.scrollTop = el.scrollHeight;
    }
    prevCountRef.current = lines.length;
  }, [lines, running, stdinActive]);

  useEffect(() => {
    if (stdinActive) {
      stdinRef.current?.focus();
    }
  }, [stdinActive]);

  const textToCopy = outputLines.length
    ? outputLines.map((l) => l.text).join("")
    : error ?? "";

  async function copyOutput() {
    if (!textToCopy) return;
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 2500);
    }
  }

  function handleStdinSubmit(e: FormEvent) {
    e.preventDefault();
    onStdinSubmit?.(stdinDraft);
  }

  return (
    <div
      className={clsx(
        "flex flex-col",
        light ? "bg-[#f8fbfd]" : "bg-[#0d1117]",
        !compact && (light ? "border-t border-sky-100" : "border-t border-gray-700"),
        fill && "h-full min-h-0"
      )}
    >
      <div
        className={clsx(
          "flex shrink-0 items-center justify-between px-3 py-1.5",
          light
            ? "border-b border-sky-100/90 bg-white/80"
            : "border-b border-gray-800 bg-[#161b22]"
        )}
      >
        <div
          className={clsx(
            "flex items-center gap-2 text-xs",
            light ? "text-slate-500" : "text-gray-400"
          )}
        >
          {!compact && (
            <>
              <Terminal className="h-3.5 w-3.5" />
              <span
                className={clsx(
                  "font-medium",
                  light ? "text-slate-700" : "text-gray-300"
                )}
              >
                Console
              </span>
            </>
          )}
          {stdinActive && (
            <span
              className={clsx(
                "rounded px-1.5 py-0.5",
                light
                  ? "bg-sky-100 text-sky-700"
                  : "bg-sky-600/20 text-sky-300"
              )}
            >
              Waiting for input…
            </span>
          )}
          {running && !stdinActive && (
            <span
              className={clsx(
                "rounded px-1.5 py-0.5",
                light
                  ? "bg-brand-50 text-brand-700"
                  : "bg-brand-600/20 text-brand-400"
              )}
            >
              Running…
            </span>
          )}
          {loading && !error && !running && (
            <span className={light ? "text-slate-400" : "text-gray-500"}>
              Loading Python…
            </span>
          )}
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={copyOutput}
            disabled={!textToCopy}
            className={clsx(
              "flex items-center gap-1 rounded px-2 py-1 text-xs disabled:opacity-40",
              light
                ? "hover:bg-sky-50"
                : "hover:bg-gray-800",
              copyError
                ? light
                  ? "text-red-600 hover:text-red-700"
                  : "text-red-400 hover:text-red-300"
                : light
                  ? "text-slate-500 hover:text-brand-700"
                  : "text-gray-400 hover:text-white"
            )}
            title={copyError ? "Copy failed — try again" : "Copy program output"}
            aria-live="polite"
          >
            {copied ? (
              <Check
                className={clsx(
                  "h-3.5 w-3.5",
                  light ? "text-accent-600" : "text-green-500"
                )}
              />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copyError ? "Copy failed" : copied ? "Copied" : "Copy"}
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClear}
            className={clsx(
              "flex items-center gap-1 rounded px-2 py-1 text-xs",
              light
                ? "text-slate-500 hover:bg-sky-50 hover:text-brand-700"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            )}
            title="Clear console"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={clsx(
          "min-h-0 flex-1 overflow-x-auto overflow-y-scroll overscroll-contain p-3 font-mono text-[13px] leading-relaxed",
          light ? "ide-console-scroll-light" : "ide-console-scroll"
        )}
        style={fill ? undefined : { maxHeight, minHeight: 140 }}
        role="log"
        aria-live="polite"
        aria-busy={running || loading}
        tabIndex={0}
        aria-label="Program output"
        onWheel={(event) => event.stopPropagation()}
      >
        {outputLines.length > 0 ? (
          <div className="space-y-0.5">
            {outputLines.map((line) => {
              const prefix = linePrefix(line.kind);
              return (
                <div
                  key={line.id}
                  className={clsx(
                    "flex gap-2 whitespace-pre-wrap break-words",
                    lineClass(line.kind, light)
                  )}
                >
                  {prefix ? (
                    <span className="w-4 shrink-0 select-none opacity-50">
                      {prefix}
                    </span>
                  ) : null}
                  <span className="min-w-0 flex-1">{line.text}</span>
                </div>
              );
            })}
          </div>
        ) : error ? (
          <div
            className={clsx(
              "flex gap-2",
              light ? "text-red-600" : "text-red-400"
            )}
          >
            <span className="select-none opacity-60">✕</span>
            <span className="whitespace-pre-wrap">{error}</span>
          </div>
        ) : (
          <p
            className={clsx(
              "select-none",
              light ? "text-slate-400" : "text-gray-600"
            )}
          >
            {running
              ? "Running…"
              : loading
                ? "Starting Python runtime…"
                : "Output will appear here after you run your code."}
          </p>
        )}
      </div>

      {stdinActive && onStdinSubmit && onStdinDraftChange && (
        <form
          onSubmit={handleStdinSubmit}
          className={clsx(
            "flex shrink-0 items-center gap-2 px-3 py-2",
            light
              ? "border-t border-sky-200 bg-sky-50/80"
              : "border-t border-sky-900/60 bg-[#0c1929]"
          )}
        >
          <span
            className={clsx(
              "select-none font-mono text-[13px]",
              light ? "text-brand-600" : "text-sky-300/70"
            )}
          >
            ›
          </span>
          <input
            ref={stdinRef}
            type="text"
            value={stdinDraft}
            onChange={(e) => onStdinDraftChange(e.target.value)}
            className={clsx(
              "min-w-0 flex-1 bg-transparent font-mono text-[13px] outline-none",
              light
                ? "text-slate-800 placeholder:text-slate-400"
                : "text-sky-100 placeholder:text-gray-500"
            )}
            placeholder="Type input and press Enter"
            aria-label="Program input"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      )}
    </div>
  );
}
