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
      ? "text-emerald-400"
      : statusText === "Running"
        ? "text-amber-400"
        : statusText === "Error"
          ? "text-red-400"
          : "text-slate-400";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0a0f16] shadow-2xl shadow-black/30 ring-1 ring-sky-500/10">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 bg-gradient-to-r from-[#111827] to-[#0f172a] px-3 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/20">
            <Database className="h-3 w-3" />
            {DB_LABELS[databaseId]}
          </span>
          <span className="hidden text-xs text-slate-500 sm:inline">query.sql</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => void resetDatabase()}
            disabled={loading}
            className="flex items-center gap-1 rounded-lg border border-slate-600/60 bg-slate-800/50 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-700/60 disabled:opacity-40"
            title="Reset database to original state"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset DB</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={resetCode}
            className="flex items-center gap-1 rounded-lg border border-slate-600/60 bg-slate-800/50 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-700/60"
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
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-b from-sky-500 to-sky-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-sky-900/40 transition-all hover:from-sky-400 hover:to-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
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
      <div className="border-b border-slate-800/80">
        <div className="flex items-center justify-between bg-[#0d1117] px-3 py-1.5">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            <Code2 className="h-3.5 w-3.5 text-sky-500/80" />
            Query
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            Ln {cursor.line}, Col {cursor.col}
          </span>
        </div>
        <SqlCodeEditor
          value={code}
          onChange={setCode}
          onRun={handleRun}
          onCursorChange={(line, col) => setCursor({ line, col })}
          height={editorHeight}
        />
      </div>

      {/* Results */}
      <SqlResultsPanel
        lastRun={lastRun}
        loading={loading}
        running={running}
        initError={error}
        onClear={clearResults}
        maxHeight={consoleMaxHeight}
      />

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-slate-800 bg-[#070b12] px-3 py-1.5 text-[10px] text-slate-500">
        <div className="flex flex-wrap gap-x-3 gap-y-0.5">
          <span>{runnerName}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{databaseId}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-slate-600 sm:inline">Ctrl+Enter to run</span>
          <span className={`font-medium ${statusColor}`}>● {statusText}</span>
        </div>
      </div>
    </div>
  );
}
