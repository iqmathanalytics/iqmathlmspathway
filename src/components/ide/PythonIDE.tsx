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
import { usePyodideRunner } from "./usePyodideRunner";

interface PythonIDEProps {
  initialCode?: string;
  editorHeight?: string;
  consoleMaxHeight?: number;
  filename?: string;
}

export function PythonIDE({
  initialCode = 'print("Hello, Python!")',
  editorHeight = "240px",
  consoleMaxHeight = 220,
  filename = "main.py",
}: PythonIDEProps) {
  const [code, setCode] = useState(initialCode);
  const [cursor, setCursor] = useState({ line: 1, col: 1 });
  const { lines, loading, running, error, runCode, clearConsole, stdinActive, stdinDraft, setStdinDraft, submitStdin } =
    usePyodideRunner();

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleRun = useCallback(() => {
    runCode(code);
  }, [code, runCode]);

  function resetCode() {
    setCode(initialCode);
    clearConsole();
  }

  function handleChange(value: string) {
    setCode(value);
  }

  const statusText = error
    ? "Error"
    : loading
      ? "Loading Python…"
      : running
        ? "Running"
        : "Ready";

  return (
    <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#0d1117] shadow-xl ring-1 ring-black/20">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-gray-700 bg-[#161b22] px-3 py-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <FileCode2 className="h-3.5 w-3.5" />
            {filename}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={resetCode}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            title="Reset to starter code"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={clearConsole}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            title="Clear console"
          >
            <Eraser className="h-3.5 w-3.5" />
            Clear
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleRun}
            disabled={loading || running || !!error}
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

      {/* Editor */}
      <div className="border-b border-gray-800">
        <CodeEditor
          value={code}
          onChange={handleChange}
          onRun={handleRun}
          onCursorChange={(line, col) => setCursor({ line, col })}
          minHeight={editorHeight}
        />
      </div>

      {/* Console */}
      <ConsolePanel
        lines={lines}
        loading={loading}
        running={running}
        error={error}
        onClear={clearConsole}
        maxHeight={consoleMaxHeight}
        stdinActive={stdinActive}
        stdinDraft={stdinDraft}
        onStdinDraftChange={setStdinDraft}
        onStdinSubmit={submitStdin}
      />

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-gray-800 bg-[#010409] px-3 py-1 text-[11px] text-gray-500">
        <div className="flex gap-4">
          <span>
            Ln {cursor.line}, Col {cursor.col}
          </span>
          <span>Python 3</span>
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
