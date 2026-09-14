"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Play,
  RotateCcw,
  Loader2,
  Database,
  RefreshCw,
  Code2,
} from "lucide-react";
import { SqlCodeEditor } from "./SqlCodeEditor";
import { SqlResultsPanel } from "./SqlResultsPanel";
import { useSqlRunner } from "./useSqlRunner";
import type { SqlDatabaseId } from "@/lib/sql-runtime";

interface SqlIDEProps {
  initialCode?: string;
  editorHeight?: string;
  consoleMaxHeight?: number;
  databaseId?: SqlDatabaseId;
  /** Fill parent height (lesson sidebar IDE). */
  fill?: boolean;
  onRun?: () => void;
}

const DB_LABELS: Record<SqlDatabaseId, string> = {
  learning: "Learning DB",
  northwind: "Northwind",
};

export function SqlIDE({
  initialCode = "SELECT * FROM employees LIMIT 5;",
  editorHeight = "200px",
  consoleMaxHeight = 280,
  databaseId = "learning",
  fill = false,
  onRun,
}: SqlIDEProps) {
  const [code, setCode] = useState(initialCode);
  const [cursor, setCursor] = useState({ line: 1, col: 1 });
  const {
    lastRun,
    loading,
    running,
    error,
    runSql,
    resetDatabase,
    clearResults,
    runnerName,
  } = useSqlRunner(databaseId);

  useEffect(() => {
    setCode(initialCode);
    clearResults();
  }, [initialCode, clearResults]);

  const handleRun = useCallback(() => {
    void runSql(code);
    onRun?.();
  }, [code, runSql, onRun]);

  function resetCode() {
    setCode(initialCode);
    clearResults();
  }

  const statusText = error
    ? "Error"
    : loading
      ? "Loading…"
      : running
        ? "Running"
        : "Ready";

  const statusColor =
    statusText === "Ready"
      ? "text-accent-600"
      : statusText === "Running"
        ? "text-amber-600"
        : statusText === "Error"
          ? "text-red-600"
          : "text-slate-500";

  return (
    <div
      className={
        fill
          ? "ide-light-locked flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm ring-1 ring-sky-100"
          : "ide-light-locked overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm ring-1 ring-sky-100"
      }
    >
      {/* Toolbar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-sky-200 bg-white px-3 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-brand-800 ring-1 ring-sky-100">
            <Database className="h-3 w-3" />
            {DB_LABELS[databaseId]}
          </span>
          <span className="hidden text-xs text-slate-500 sm:inline">
            query.sql
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => void resetDatabase()}
            disabled={loading}
            className="flex items-center gap-1 rounded-lg border border-sky-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-brand-700 disabled:opacity-40"
            title="Reset database to original state"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset DB</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={resetCode}
            className="flex items-center gap-1 rounded-lg border border-sky-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-brand-700"
            title="Reset to starter query"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleRun}
            disabled={loading || running || !!error}
            className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
            title="Run query (Ctrl+Enter)"
          >
            {running || loading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Play className="h-3.5 w-3.5 fill-current" />
            )}
            Run query
          </button>
        </div>
      </div>

      {/* Editor section */}
      <div
        className={
          fill
            ? "flex min-h-0 flex-[1.2] flex-col border-b border-sky-200"
            : "border-b border-sky-200"
        }
      >
        <div className="flex shrink-0 items-center justify-between bg-sky-50 px-3 py-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            <Code2 className="h-3.5 w-3.5 text-brand-600" />
            Query
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            Ln {cursor.line}, Col {cursor.col}
          </span>
        </div>
        <div
          className={
            fill
              ? "min-h-0 flex-1 bg-sky-50 [&_.cm-editor]:h-full"
              : "bg-sky-50"
          }
        >
          <SqlCodeEditor
            value={code}
            onChange={setCode}
            onRun={handleRun}
            onCursorChange={(line, col) => setCursor({ line, col })}
            height={fill ? "100%" : editorHeight}
            className={fill ? "h-full" : undefined}
          />
        </div>
      </div>

      {/* Results — same shared console language */}
      <div className={fill ? "flex min-h-0 flex-1 flex-col" : undefined}>
        <SqlResultsPanel
          lastRun={lastRun}
          loading={loading}
          running={running}
          initError={error}
          onClear={clearResults}
          maxHeight={fill ? 240 : consoleMaxHeight}
        />
      </div>

      {/* Status bar */}
      <div className="flex shrink-0 items-center justify-between border-t border-sky-200 bg-sky-50/80 px-3 py-1.5 text-[10px] text-slate-500">
        <div className="flex flex-wrap gap-x-3 gap-y-0.5">
          <span>{runnerName}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{databaseId}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-slate-400 sm:inline">
            Ctrl+Enter to run
          </span>
          <span className={`font-medium ${statusColor}`}>● {statusText}</span>
        </div>
      </div>
    </div>
  );
}
