"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
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
  /**
   * Always show the interactive input row at the top of the console.
   * Defaults to true whenever stdin handlers are provided.
   */
  showInput?: boolean;
  /** Pre-run standard input (Judge0 / batch programs). Shown at top of console. */
  batchInput?: string;
  onBatchInputChange?: (value: string) => void;
  batchInputLabel?: string;
  batchInputPlaceholder?: string;
  /** Action buttons (Run / Tests / Submit / Prev / Next) rendered under the input. */
  actions?: ReactNode;
  /** Replace the scrollable output body (e.g. test results) while keeping input/actions. */
  outputOverride?: ReactNode;
  /** Practice studio uses light; lesson IDE keeps dark. */
  variant?: "dark" | "light";
  /** Shown when there is no output (overrides the default idle hint). */
  emptyHint?: string;
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
  showInput,
  batchInput,
  onBatchInputChange,
  batchInputLabel = "Standard input",
  batchInputPlaceholder = "Lines fed to input() before / while the program runs",
  actions,
  outputOverride,
  variant = "dark",
  emptyHint,
}: ConsolePanelProps) {
  const light = variant === "light";
  const scrollRef = useRef<HTMLDivElement>(null);
  const stdinRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const prevCountRef = useRef(0);

  const hasInteractiveHandlers = Boolean(onStdinSubmit && onStdinDraftChange);
  const inputVisible =
    showInput ?? (hasInteractiveHandlers || onBatchInputChange != null);

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
    if (!stdinActive) return;
    onStdinSubmit?.(stdinDraft);
  }

  return (
    <div
      className={clsx(
        "flex flex-col",
        light ? "bg-[#f8fbfd]" : "ide-dark-chrome bg-[#0d1117]",
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
              light ? "hover:bg-sky-50" : "hover:bg-gray-800",
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

      {/* Input section — always at the top of the console when enabled */}
      {inputVisible && (
        <div
          className={clsx(
            "shrink-0 space-y-2 px-3 py-2",
            light
              ? "border-b border-sky-200 bg-sky-50/90"
              : "border-b border-sky-900/50 bg-[#0c1929]"
          )}
        >
          {onBatchInputChange != null && (
            <div>
              <label
                className={clsx(
                  "mb-1 block text-[11px] font-semibold uppercase tracking-wide",
                  light ? "text-slate-600" : "text-sky-200/80"
                )}
              >
                {batchInputLabel}
              </label>
              <textarea
                value={batchInput ?? ""}
                onChange={(e) => onBatchInputChange(e.target.value)}
                rows={2}
                className={clsx(
                  "w-full resize-y rounded-md border px-2.5 py-1.5 font-mono text-xs outline-none transition-colors",
                  light
                    ? "border-sky-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-500"
                    : "border-sky-800/60 bg-[#010409] text-sky-50 placeholder:text-gray-500 focus:border-sky-500"
                )}
                placeholder={batchInputPlaceholder}
                spellCheck={false}
                aria-label={batchInputLabel}
              />
            </div>
          )}

          {hasInteractiveHandlers && (
            <form onSubmit={handleStdinSubmit} className="flex items-center gap-2">
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
                onChange={(e) => onStdinDraftChange?.(e.target.value)}
                disabled={!stdinActive && running}
                className={clsx(
                  "min-w-0 flex-1 rounded-md border bg-transparent px-2 py-1.5 font-mono text-[13px] outline-none",
                  light
                    ? "border-sky-200 text-slate-800 placeholder:text-slate-400 focus:border-brand-500 disabled:bg-sky-50/50"
                    : "border-sky-800/60 text-sky-100 placeholder:text-gray-500 focus:border-sky-500 disabled:opacity-60",
                  stdinActive &&
                    (light
                      ? "ring-2 ring-sky-300 border-sky-400"
                      : "ring-2 ring-sky-500/50 border-sky-400")
                )}
                placeholder={
                  stdinActive
                    ? "Type input and press Enter"
                    : "Program input (ready when input() is called)"
                }
                aria-label="Program input"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="submit"
                disabled={!stdinActive}
                className={clsx(
                  "shrink-0 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                  light
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "bg-sky-600 text-white hover:bg-sky-500"
                )}
              >
                Enter
              </button>
            </form>
          )}
        </div>
      )}

      {actions && (
        <div
          className={clsx(
            "flex shrink-0 flex-wrap items-center gap-1.5 px-3 py-2",
            light
              ? "border-b border-sky-100 bg-white/90"
              : "border-b border-gray-800 bg-[#161b22]"
          )}
        >
          {actions}
        </div>
      )}

      <div
        ref={scrollRef}
        className={clsx(
          "min-h-0 flex-1 overflow-x-auto overflow-y-scroll overscroll-contain p-3 font-mono text-[13px] leading-relaxed",
          light ? "ide-console-scroll-light" : "ide-console-scroll"
        )}
        style={fill ? undefined : { maxHeight, minHeight: 120 }}
        role="log"
        aria-live="polite"
        aria-busy={running || loading}
        tabIndex={0}
        aria-label="Program output"
        onWheel={(event) => event.stopPropagation()}
      >
        {outputOverride != null ? (
          outputOverride
        ) : outputLines.length > 0 ? (
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
                : emptyHint ??
                  "Output will appear here after you run your code."}
          </p>
        )}
      </div>
    </div>
  );
}
