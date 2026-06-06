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
  stdinActive?: boolean;
  stdinDraft?: string;
  onStdinDraftChange?: (value: string) => void;
  onStdinSubmit?: (value: string) => void;
}

function lineClass(kind: ConsoleLine["kind"]) {
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
      return "›";
    case "stderr":
      return "!";
    case "stdin":
      return "‹";
    case "error":
      return "✕";
    case "info":
      return "i";
    case "divider":
      return "—";
    default:
      return " ";
  }
}

export function ConsolePanel({
  lines,
  loading,
  running,
  error,
  onClear,
  maxHeight = 220,
  stdinActive = false,
  stdinDraft = "",
  onStdinDraftChange,
  onStdinSubmit,
}: ConsolePanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const stdinRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const prevCountRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const grew = lines.length > prevCountRef.current;
    const hasRunOutput = lines.some(
      (l) =>
        l.kind === "stdout" ||
        l.kind === "stderr" ||
        l.kind === "stdin" ||
        l.kind === "error"
    );

    if (grew && (running || hasRunOutput || stdinActive)) {
      el.scrollTop = el.scrollHeight;
    }

    prevCountRef.current = lines.length;
  }, [lines, running, stdinActive]);

  useEffect(() => {
    if (stdinActive) {
      stdinRef.current?.focus();
    }
  }, [stdinActive]);

  const textToCopy = error ? error : lines.map((l) => l.text).join("");

  async function copyOutput() {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  function handleStdinSubmit(e: FormEvent) {
    e.preventDefault();
    onStdinSubmit?.(stdinDraft);
  }

  return (
    <div className="flex flex-col border-t border-gray-700 bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-gray-800 bg-[#161b22] px-3 py-1.5">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Terminal className="h-3.5 w-3.5" />
          <span className="font-medium text-gray-300">Console</span>
          {stdinActive && (
            <span className="rounded bg-sky-600/20 px-1.5 py-0.5 text-sky-300">
              Waiting for input…
            </span>
          )}
          {running && !stdinActive && (
            <span className="rounded bg-brand-600/20 px-1.5 py-0.5 text-brand-400">
              Running…
            </span>
          )}
          {loading && !error && (
            <span className="text-gray-500">Loading Python…</span>
          )}
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={copyOutput}
            disabled={!textToCopy}
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-white disabled:opacity-40"
            title="Copy console output"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            Copy
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClear}
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-gray-400 hover:bg-gray-800 hover:text-white"
            title="Clear console"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="ide-console-scroll overflow-y-auto overflow-x-hidden overscroll-y-contain p-3 font-mono text-[13px] leading-relaxed"
        style={{ maxHeight, minHeight: 120 }}
        role="log"
        aria-live="polite"
        tabIndex={0}
        aria-label="Program output"
      >
        {error ? (
          <div className="flex gap-2 text-red-400">
            <span className="select-none opacity-60">✕</span>
            <span>{error}</span>
          </div>
        ) : lines.length === 0 ? (
          <p className="text-gray-600">
            {loading ? "Starting Python runtime…" : "Output will appear here."}
          </p>
        ) : (
          <div className="space-y-0.5">
            {lines.map((line) => (
              <div
                key={line.id}
                className={clsx(
                  "flex gap-2 whitespace-pre-wrap break-words",
                  lineClass(line.kind)
                )}
              >
                <span className="w-4 shrink-0 select-none opacity-50">
                  {linePrefix(line.kind)}
                </span>
                <span className="min-w-0 flex-1">{line.text}</span>
                {line.time &&
                  line.kind !== "stdout" &&
                  line.kind !== "stderr" &&
                  line.kind !== "stdin" && (
                    <span className="shrink-0 text-[10px] opacity-40">
                      {line.time}
                    </span>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>

      {stdinActive && onStdinSubmit && onStdinDraftChange && (
        <form
          onSubmit={handleStdinSubmit}
          className="flex items-center gap-2 border-t border-sky-900/60 bg-[#0c1929] px-3 py-2"
        >
          <span className="select-none font-mono text-[13px] text-sky-300/70">
            ›
          </span>
          <input
            ref={stdinRef}
            type="text"
            value={stdinDraft}
            onChange={(e) => onStdinDraftChange(e.target.value)}
            className="min-w-0 flex-1 bg-transparent font-mono text-[13px] text-sky-100 outline-none placeholder:text-gray-500"
            placeholder="Type your answer and press Enter"
            aria-label="Program input"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      )}
    </div>
  );
}
