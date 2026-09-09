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
  const { lines, loading, running, error, runCode, clearConsole, stdinActive, stdinDraft, setStdinDraft, submitStdin, runnerName, supportsStandardInput } =
    useCodeRunner();

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
          ? "ide-dark-chrome flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-gray-700 bg-[#0d1117] shadow-xl ring-1 ring-black/20"
          : "ide-dark-chrome overflow-hidden rounded-xl border border-gray-700 bg-[#0d1117] shadow-xl ring-1 ring-black/20"
      }
    >
      {/* Title bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-gray-700 bg-[#161b22] px-3 py-2">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="flex min-w-0 items-center gap-1.5 truncate text-xs text-gray-400">
            <FileCode2 className="h-3.5 w-3.5 shrink-0" />
            {filename}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {isVisualization && (
            <OpenInColabButton code={code} variant="ide" />
          )}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={resetCode}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            title="Reset to starter code"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={clearConsole}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
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
            className="flex items-center gap-1.5 rounded-md bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50"
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
        <div className="flex shrink-0 items-start gap-2 border-b border-orange-900/50 bg-orange-950/40 px-3 py-2 text-[11px] leading-relaxed text-orange-100/90">
          <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[8px] font-bold text-white">
            Co
          </span>
          <p>
            Charts do not display in this browser IDE. Use{" "}
            <strong className="font-semibold text-orange-50">Open in Google Colab</strong>{" "}
            to see matplotlib and seaborn plots. Print output still runs here.
          </p>
        </div>
      )}

      {/* Editor */}
      <div className={fill ? "min-h-0 flex-[1.35] border-b border-gray-800" : "border-b border-gray-800"}>
        <CodeEditor
          value={code}
          onChange={handleChange}
          onRun={handleRun}
          onCursorChange={(line, col) => setCursor({ line, col })}
          height={fill ? "100%" : undefined}
          minHeight={fill ? "0px" : editorHeight}
          className={fill ? "h-full [&_.cm-editor]:h-full" : undefined}
        />
      </div>

      {/* Console — input at top, then output */}
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
          batchInput={supportsStandardInput ? standardInput : undefined}
          onBatchInputChange={
            supportsStandardInput ? setStandardInput : undefined
          }
          batchInputLabel="Standard input"
          batchInputPlaceholder="One value per line for input() — used by Judge0 and interactive runs"
          actions={
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={handleRun}
              disabled={loading || running}
              className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {running || loading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Play className="h-3.5 w-3.5 fill-current" />
              )}
              Run
            </button>
          }
        />
      </div>

      {/* Status bar */}
      <div className="flex shrink-0 items-center justify-between border-t border-gray-800 bg-[#010409] px-3 py-1 text-[11px] text-gray-500">
        <div className="flex gap-4">
          <span>
            Ln {cursor.line}, Col {cursor.col}
          </span>
          <span>Python 3</span>
          <span className="hidden sm:inline">Runner: {runnerName}</span>
          <span className="hidden sm:inline">Spaces: 4</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-gray-600 sm:inline">Ctrl+Enter to run</span>
          <span
            className={
              statusText === "Ready"
                ? "text-green-500"
                : statusText === "Running"
                  ? "text-amber-400"
                  : statusText === "Error"
                    ? "text-red-400"
                    : "text-gray-400"
            }
          >
            ● {statusText}
          </span>
        </div>
      </div>
    </div>
  );
}
