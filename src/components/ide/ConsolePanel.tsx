"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
  type UIEvent,
} from "react";
import {
  Terminal,
  Trash2,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import type { ConsoleLine } from "./types";
import clsx from "clsx";

interface ConsolePanelProps {
  lines: ConsoleLine[];
  loading: boolean;
  running: boolean;
  error: string | null;
  onClear: () => void;
  /** Max height of the scrollable output area (px). Ignored when `fill` is true. */
  maxHeight?: number;
  /** Fill remaining height in a flex parent and scroll inside the console. */
  fill?: boolean;
  /** Hide the Console title when the parent already labels the panel. */
  compact?: boolean;
  stdinActive?: boolean;
  stdinDraft?: string;
  onStdinDraftChange?: (value: string) => void;
  onStdinSubmit?: (value: string) => void;
  /**
   * Allow interactive Program Input when the runtime requests it.
   * The input row is shown only while stdinActive (input() waiting).
   * Defaults to true when stdin handlers are provided.
   */
  showInput?: boolean;
  /** Pre-run standard input (Judge0 / batch programs). Shown at top of console. */
  batchInput?: string;
  onBatchInputChange?: (value: string) => void;
  batchInputLabel?: string;
  batchInputPlaceholder?: string;
  /**
   * Optional action bar rendered below the console body (outside collapse).
   * Prefer a single external action bar in practice IDEs to avoid duplicates.
   */
  actions?: ReactNode;
  /** Replace the scrollable output body (e.g. test results) while keeping input. */
  outputOverride?: ReactNode;
  /** Shared site console — always light. Kept for API compatibility. */
  variant?: "dark" | "light";
  /** Shown when there is no output (overrides the default idle hint). */
  emptyHint?: string;
  /** Compact status text in the header (e.g. Console ready / Running…). */
  statusText?: string;
  statusTone?: "idle" | "busy" | "success" | "error";
  /** Label above the output scroll area. */
  outputLabel?: string;
  /** Optional tabs rendered next to the Console title (e.g. Console | Tests). */
  headerTabs?: ReactNode;
  /** Show expand/collapse control in the header. */
  collapsible?: boolean;
  /** Controlled collapsed state. */
  collapsed?: boolean;
  /** Uncontrolled initial collapsed state. */
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  className?: string;
}

function lineClass(kind: ConsoleLine["kind"], light: boolean) {
  if (light) {
    switch (kind) {
      case "stdout":
        return "text-slate-800";
      case "stderr":
        return "text-amber-700";
      case "stdin":
        return "text-brand-700";
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
  maxHeight = 200,
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
  variant = "light",
  emptyHint,
  statusText,
  statusTone = "idle",
  outputLabel = "Output",
  headerTabs,
  collapsible = false,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onCollapsedChange,
  className,
}: ConsolePanelProps) {
  // One shared light console across courses + practice (even if site theme is dark).
  const light = true;
  const panelId = useId();
  const bodyId = `${panelId}-body`;
  const scrollRef = useRef<HTMLDivElement>(null);
  const stdinRef = useRef<HTMLInputElement>(null);
  const stickToBottomRef = useRef(true);
  const prevCountRef = useRef(0);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [uncontrolledCollapsed, setUncontrolledCollapsed] =
    useState(defaultCollapsed);

  const collapsed =
    collapsedProp !== undefined ? collapsedProp : uncontrolledCollapsed;

  const setCollapsed = useCallback(
    (next: boolean) => {
      if (collapsedProp === undefined) setUncontrolledCollapsed(next);
      onCollapsedChange?.(next);
    },
    [collapsedProp, onCollapsedChange]
  );

  const hasInteractiveHandlers = Boolean(onStdinSubmit && onStdinDraftChange);
  // Show Program Input only when the runtime is waiting for input(),
  // or when a batch/standard-input editor is provided (Judge0).
  const showBatchInput = onBatchInputChange != null;
  const showInteractiveInput =
    hasInteractiveHandlers && stdinActive && showInput !== false;
  const inputVisible = showBatchInput || showInteractiveInput;

  const outputLines = lines.filter(
    (l) =>
      l.kind === "stdout" ||
      l.kind === "stderr" ||
      l.kind === "error" ||
      l.kind === "stdin"
  );

  const handleOutputScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    stickToBottomRef.current = distanceFromBottom < 48;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || collapsed) return;

    const grew = lines.length > prevCountRef.current;
    prevCountRef.current = lines.length;

    if (!stickToBottomRef.current && !stdinActive) return;
    if (grew || running || stdinActive || loading) {
      el.scrollTop = el.scrollHeight;
    }
  }, [lines, running, stdinActive, loading, collapsed]);

  useEffect(() => {
    if (stdinActive && !collapsed) {
      stdinRef.current?.focus();
    }
  }, [stdinActive, collapsed]);

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

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <div
      className={clsx(
        "flex min-h-0 min-w-0 flex-col overflow-hidden",
        light
          ? "bg-[#f8fbfe] text-slate-800"
          : "ide-dark-chrome bg-[#0d1117]",
        !compact &&
          (light ? "border-t border-sky-200" : "border-t border-gray-700"),
        fill && !collapsed && "h-full",
        className
      )}
    >
      {/* Header — Left (collapse + tabs) | Status | Right (Copy/Clear) */}
      <div
        className={clsx(
          "flex h-9 shrink-0 items-center gap-2 px-2.5",
          light
            ? "border-b border-sky-200 bg-white"
            : "border-b border-gray-800 bg-[#161b22]"
        )}
      >
        <div className="flex min-w-0 shrink items-center gap-1">
          {collapsible ? (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={toggleCollapsed}
              className={clsx(
                "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors",
                light
                  ? "text-slate-500 hover:bg-sky-50 hover:text-brand-700"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
              aria-expanded={!collapsed}
              aria-controls={bodyId}
              title={collapsed ? "Expand console" : "Collapse console"}
              aria-label={collapsed ? "Expand console" : "Collapse console"}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" aria-hidden />
              ) : (
                <ChevronDown className="h-4 w-4" aria-hidden />
              )}
            </button>
          ) : null}

          {!compact && !headerTabs && (
            <span
              className={clsx(
                "inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold",
                light ? "text-slate-800" : "text-gray-300"
              )}
            >
              <Terminal className="h-3.5 w-3.5 opacity-70" aria-hidden />
              Console
            </span>
          )}

          {headerTabs}
        </div>

        <div className="min-w-0 flex-1 overflow-hidden text-right">
          {statusText ? (
            <span
              className={clsx(
                "inline-block max-w-full truncate rounded-md px-1.5 py-0.5 text-[11px] font-medium",
                statusTone === "success" &&
                  (light
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                    : "bg-emerald-900/40 text-emerald-300"),
                statusTone === "error" &&
                  (light
                    ? "bg-red-50 text-red-700 ring-1 ring-red-100"
                    : "bg-red-900/40 text-red-300"),
                statusTone === "busy" &&
                  (light
                    ? "bg-sky-50 text-brand-700 ring-1 ring-sky-100"
                    : "bg-brand-600/20 text-brand-300"),
                statusTone === "idle" &&
                  (light ? "text-slate-500" : "text-gray-500")
              )}
            >
              {statusTone === "success"
                ? `✓ ${statusText}`
                : statusTone === "error"
                  ? `✕ ${statusText}`
                  : statusTone === "busy"
                    ? `⟳ ${statusText}`
                    : statusText}
            </span>
          ) : stdinActive ? (
            <span
              className={clsx(
                "inline-block max-w-full truncate rounded-md px-1.5 py-0.5 text-[11px] font-medium",
                light
                  ? "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                  : "bg-sky-600/20 text-sky-300"
              )}
            >
              Waiting for input…
            </span>
          ) : running ? (
            <span
              className={clsx(
                "inline-block max-w-full truncate rounded-md px-1.5 py-0.5 text-[11px] font-medium",
                light
                  ? "bg-sky-50 text-brand-700 ring-1 ring-sky-100"
                  : "bg-brand-600/20 text-brand-400"
              )}
            >
              Running…
            </span>
          ) : loading && !error ? (
            <span
              className={clsx(
                "inline-block max-w-full truncate text-[11px]",
                light ? "text-slate-500" : "text-gray-500"
              )}
            >
              Loading Python…
            </span>
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={copyOutput}
            disabled={!textToCopy}
            className={clsx(
              "inline-flex h-7 items-center gap-1 rounded-md px-2 text-xs font-medium disabled:opacity-40",
              light ? "hover:bg-sky-50" : "hover:bg-gray-800",
              copyError
                ? light
                  ? "text-red-600"
                  : "text-red-400"
                : light
                  ? "text-slate-600 hover:text-brand-700"
                  : "text-gray-400 hover:text-white"
            )}
            title={copyError ? "Copy failed — try again" : "Copy program output"}
            aria-label={
              copyError ? "Copy failed — try again" : "Copy program output"
            }
            aria-live="polite"
          >
            {copied ? (
              <Check
                className={clsx(
                  "h-3.5 w-3.5",
                  light ? "text-accent-600" : "text-green-500"
                )}
                aria-hidden
              />
            ) : (
              <Copy className="h-3.5 w-3.5" aria-hidden />
            )}
            <span className="hidden sm:inline">
              {copyError ? "Failed" : copied ? "Copied" : "Copy"}
            </span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClear}
            className={clsx(
              "inline-flex h-7 items-center gap-1 rounded-md px-2 text-xs font-medium",
              light
                ? "text-slate-600 hover:bg-sky-50 hover:text-brand-700"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            )}
            title="Clear console"
            aria-label="Clear console"
          >
            <Trash2 className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>
      </div>

      {!collapsed && (
        <div
          id={bodyId}
          className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden"
        >
          {inputVisible && (
            <div
              className={clsx(
                "shrink-0 space-y-1.5 overflow-visible px-3 py-2.5",
                light
                  ? "border-b border-sky-200 bg-white"
                  : "border-b border-sky-900/40 bg-[#0c1929]"
              )}
            >
              {showBatchInput && (
                <div className="min-w-0">
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
                    onChange={(e) => onBatchInputChange?.(e.target.value)}
                    rows={2}
                    className={clsx(
                      "w-full min-w-0 resize-y rounded-md border px-2.5 py-1.5 font-mono text-xs outline-none transition-colors",
                      light
                        ? "border-sky-200 bg-[#f8fbfe] text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                        : "border-sky-800/60 bg-[#010409] text-sky-50 placeholder:text-gray-500 focus:border-sky-500"
                    )}
                    placeholder={batchInputPlaceholder}
                    spellCheck={false}
                    aria-label={batchInputLabel}
                  />
                </div>
              )}

              {showInteractiveInput && (
                <>
                  <p
                    className={clsx(
                      "text-[11px] font-semibold uppercase tracking-wide",
                      light ? "text-slate-600" : "text-sky-200/80"
                    )}
                  >
                    Program Input
                  </p>
                  <form
                    onSubmit={handleStdinSubmit}
                    className="flex min-w-0 items-center gap-2"
                  >
                    <input
                      ref={stdinRef}
                      type="text"
                      value={stdinDraft}
                      onChange={(e) => onStdinDraftChange?.(e.target.value)}
                      disabled={!stdinActive && running}
                      className={clsx(
                        "h-9 min-w-0 flex-1 rounded-md border px-2.5 font-mono text-[13px] outline-none",
                        light
                          ? "border-sky-200 bg-[#f8fbfe] text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 disabled:bg-slate-50 disabled:text-slate-400"
                          : "border-sky-800/60 bg-transparent text-sky-100 placeholder:text-gray-500 focus:border-sky-500 disabled:opacity-60",
                        stdinActive &&
                          (light
                            ? "border-brand-400 ring-2 ring-brand-500/25"
                            : "border-sky-400 ring-2 ring-sky-500/50")
                      )}
                      placeholder="Enter input for input()…"
                      aria-label="Program input"
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <button
                      type="submit"
                      disabled={!stdinActive}
                      className={clsx(
                        "inline-flex h-9 w-[4.5rem] shrink-0 items-center justify-center rounded-md text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                        light
                          ? "bg-brand-600 text-white hover:bg-brand-700"
                          : "bg-sky-600 text-white hover:bg-sky-500"
                      )}
                      title="Submit program input (Enter)"
                      aria-label="Submit program input"
                    >
                      Enter
                    </button>
                  </form>
                </>
              )}
            </div>
          )}

          {/* Output */}
          <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            {outputLabel && (
              <div
                className={clsx(
                  "shrink-0 px-3 pt-2.5 text-[11px] font-semibold uppercase tracking-wide",
                  light ? "text-slate-500" : "text-gray-500"
                )}
              >
                {outputLabel}
              </div>
            )}
            <div
              ref={scrollRef}
              onScroll={handleOutputScroll}
              className={clsx(
                "min-h-0 min-w-0 flex-1 overflow-x-auto overflow-y-auto overscroll-contain px-3 py-2 font-mono text-[13px] leading-relaxed",
                light
                  ? "ide-console-scroll-light bg-[#f8fbfe]"
                  : "ide-console-scroll"
              )}
              style={
                fill
                  ? undefined
                  : {
                      maxHeight,
                      minHeight: Math.min(96, maxHeight),
                    }
              }
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
                  {statusTone === "success" && !running && (
                    <p
                      className={clsx(
                        "mb-1 font-sans text-xs font-medium",
                        light ? "text-emerald-700" : "text-emerald-300"
                      )}
                    >
                      ✓ Execution completed
                    </p>
                  )}
                  {outputLines.map((line) => {
                    const prefix = linePrefix(line.kind);
                    return (
                      <div
                        key={line.id}
                        className={clsx(
                          "flex min-w-0 gap-2 whitespace-pre-wrap break-words",
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
                  <span className="min-w-0 whitespace-pre-wrap break-words">
                    {error}
                  </span>
                </div>
              ) : (
                <p
                  className={clsx(
                    "select-none text-xs",
                    light ? "text-slate-400" : "text-gray-600"
                  )}
                >
                  {running
                    ? "Running…"
                    : loading
                      ? "Starting Python runtime…"
                      : emptyHint ?? "Run your code to see the output here."}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Optional action bar — below console body, always visible */}
      {actions && (
        <div
          className={clsx(
            "flex shrink-0 flex-nowrap items-center gap-1.5 overflow-x-auto px-3 py-2",
            light
              ? "border-t border-sky-200 bg-white"
              : "border-t border-gray-800 bg-[#161b22]"
          )}
        >
          {actions}
        </div>
      )}
    </div>
  );
}
