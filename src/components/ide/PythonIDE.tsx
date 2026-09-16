"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Play,
  RotateCcw,
  Loader2,
  FileCode2,
  Eraser,
} from "lucide-react";
import { CodeEditor } from "./CodeEditor";
import { ConsolePanel } from "./ConsolePanel";
import { useCodeRunner } from "./useCodeRunner";
import { OpenInColabButton } from "./OpenInColabButton";
import { isVisualizationCode } from "@/lib/visualization-code";

interface PythonIDEProps {
  initialCode?: string;
  editorHeight?: string;
  consoleMaxHeight?: number;
  filename?: string;
  /** Fill parent height (lesson sidebar IDE). */
  fill?: boolean;
  /** Called once the first time the user presses Run (used for completion tracking). */
  onRun?: () => void;
}

export function PythonIDE({
  initialCode = 'print("Hello, Python!")',
  editorHeight = "240px",
  consoleMaxHeight = 260,
  filename = "main.py",
  fill = false,
  onRun,
}: PythonIDEProps) {
  const [code, setCode] = useState(initialCode);
  const [standardInput, setStandardInput] = useState("");
  const [cursor, setCursor] = useState({ line: 1, col: 1 });
  const {
    lines,
    loading,
    running,
    error,
    runCode,
    clearConsole,
    stdinActive,
    stdinDraft,
    setStdinDraft,
    submitStdin,
    runnerName,
    supportsStandardInput,
  } = useCodeRunner();

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleRun = useCallback(() => {
    runCode(code, standardInput);
    onRun?.();
  }, [code, standardInput, runCode, onRun]);

  function resetCode() {
    setCode(initialCode);
    clearConsole();
  }

  function handleChange(value: string) {
    setCode(value);
  }

  const isVisualization = isVisualizationCode(code);
  const needsStdin =
    /\binput\s*\(/.test(code) ||
    standardInput.trim().length > 0 ||
    stdinActive;

  const statusText = error
    ? "Error"
    : loading
      ? "Loading Python…"
      : running
        ? "Running"
        : "Ready";

  return (
    <div
      className={
        fill
          ? "ide-light-locked flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm ring-1 ring-sky-100"
          : "ide-light-locked overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm ring-1 ring-sky-100"
      }
    >
      {/* Title bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-sky-200 bg-white px-3 py-2">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="flex min-w-0 items-center gap-1.5 truncate text-xs font-medium text-slate-500">
            <FileCode2 className="h-3.5 w-3.5 shrink-0 text-brand-600" />
            {filename}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {isVisualization && <OpenInColabButton code={code} variant="light" />}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={resetCode}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-sky-50 hover:text-brand-700"
            title="Reset to starter code"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={clearConsole}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-sky-50 hover:text-brand-700"
            title="Clear console"
          >
            <Eraser className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleRun}
            disabled={loading || running}
            className="flex items-center gap-1.5 rounded-md bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
            title="Run code (Ctrl+Enter)"
          >
            {running || loading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Play className="h-3.5 w-3.5 fill-current" />
            )}
            Run
          </button>
        </div>
      </div>

      {isVisualization && (
        <div className="flex shrink-0 items-start gap-2 border-b border-amber-200 bg-amber-50 px-3 py-2 text-[11px] leading-relaxed text-amber-900">
          <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[8px] font-bold text-white">
            Co
          </span>
          <p>
            Charts do not display in this browser IDE. Use{" "}
            <strong className="font-semibold">Open in Google Colab</strong> to
            see matplotlib and seaborn plots. Print output still runs here.
          </p>
        </div>
      )}

      {/* Editor */}
      <div
        className={
          fill
            ? "min-h-0 flex-[1.35] overflow-hidden border-b border-sky-200 bg-sky-50"
            : "border-b border-sky-200 bg-sky-50"
        }
      >
        <CodeEditor
          value={code}
          onChange={handleChange}
          onRun={handleRun}
          onCursorChange={(line, col) => setCursor({ line, col })}
          height={fill ? "100%" : undefined}
          minHeight={fill ? "0px" : editorHeight}
          theme="light"
          className={
            fill
              ? "h-full min-h-0 bg-sky-50 [&_.cm-editor]:h-full [&_.cm-editor]:bg-sky-50 [&_.cm-scroller]:overflow-auto [&_.cm-scroller]:bg-sky-50"
              : "bg-sky-50 [&_.cm-editor]:bg-sky-50 [&_.cm-scroller]:bg-sky-50"
          }
        />
      </div>

      {/* Shared site console */}
      <div
        className={
          fill
            ? "flex min-h-0 flex-1 flex-col overflow-hidden"
            : "flex flex-col overflow-hidden"
        }
      >
        <ConsolePanel
          lines={lines}
          loading={loading}
          running={running}
          error={error}
          onClear={clearConsole}
          maxHeight={consoleMaxHeight}
          fill={fill}
          stdinActive={stdinActive}
          stdinDraft={stdinDraft}
          onStdinDraftChange={setStdinDraft}
          onStdinSubmit={submitStdin}
          showInput
          outputLabel="Output"
          statusText={
            error
              ? "Runtime error"
              : loading
                ? "Loading Python…"
                : running
                  ? stdinActive
                    ? "Waiting for input…"
                    : "Running…"
                  : lines.some(
                        (l) =>
                          l.kind === "stdout" ||
                          l.kind === "stderr" ||
                          l.kind === "error"
                      )
                    ? "Execution completed"
                    : "Console ready"
          }
          statusTone={
            error
              ? "error"
              : loading || running
                ? "busy"
                : lines.some((l) => l.kind === "stdout" || l.kind === "stderr")
                  ? "success"
                  : "idle"
          }
          batchInput={
            supportsStandardInput && needsStdin ? standardInput : undefined
          }
          onBatchInputChange={
            supportsStandardInput && needsStdin
              ? setStandardInput
              : undefined
          }
          batchInputLabel="Standard input"
          batchInputPlaceholder="One value per line for input() — used by Judge0 and interactive runs"
        />
      </div>

      {/* Status bar */}
      <div className="flex shrink-0 items-center justify-between border-t border-sky-200 bg-sky-50/80 px-3 py-1 text-[11px] text-slate-500">
        <div className="flex gap-4">
          <span>
            Ln {cursor.line}, Col {cursor.col}
          </span>
          <span>Python 3</span>
          <span className="hidden sm:inline">Runner: {runnerName}</span>
          <span className="hidden sm:inline">Spaces: 4</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-slate-400 sm:inline">
            Ctrl+Enter to run
          </span>
          <span
            className={
              statusText === "Ready"
                ? "text-accent-600"
                : statusText === "Running"
                  ? "text-amber-600"
                  : statusText === "Error"
                    ? "text-red-600"
                    : "text-slate-500"
            }
          >
            ● {statusText}
          </span>
        </div>
      </div>
    </div>
  );
}
