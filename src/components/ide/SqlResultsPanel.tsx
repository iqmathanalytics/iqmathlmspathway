"use client";

import { useEffect, useRef, useState } from "react";
import {
  Table2,
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
  Trash2,
  Inbox,
  Loader2,
} from "lucide-react";
import type { SqlRunResult } from "@/lib/sql-runtime";

export type SqlLastRun = {
  results: SqlRunResult[];
  error: string | null;
  ranAt: string | null;
  durationMs: number | null;
};

interface SqlResultsPanelProps {
  lastRun: SqlLastRun | null;
  loading: boolean;
  running: boolean;
  initError: string | null;
  onClear: () => void;
  maxHeight?: number;
}

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return "NULL";
  return String(value);
}

function resultsToCsv(results: SqlRunResult[]): string {
  const parts: string[] = [];
  for (const r of results) {
    if (r.kind !== "select") continue;
    parts.push(r.columns.join(","));
    for (const row of r.rows) {
      parts.push(row.map((c) => formatCell(c)).join(","));
    }
    parts.push("");
  }
  return parts.join("\n").trim();
}

function SelectTable({
  columns,
  rows,
  rowCount,
}: {
  columns: string[];
  rows: unknown[][];
  rowCount: number;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-700/80 bg-slate-900/50">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max border-collapse text-left text-[12.5px]">
          <thead>
            <tr className="border-b border-slate-600/80 bg-slate-800/90">
              {columns.map((col) => (
                <th
                  key={col}
                  className="whitespace-nowrap px-3 py-2.5 font-semibold tracking-wide text-sky-200/90"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? "bg-slate-900/30" : "bg-slate-800/20"}
              >
                {row.map((cell, ci) => {
                  const isNull = cell === null || cell === undefined;
                  return (
                    <td
                      key={ci}
                      className={`whitespace-nowrap border-t border-slate-700/40 px-3 py-2 font-mono ${
                        isNull ? "italic text-slate-500" : "text-slate-100"
                      }`}
                    >
                      {formatCell(cell)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-slate-700/60 bg-slate-800/40 px-3 py-1.5 text-[11px] text-slate-400">
        {rowCount} row{rowCount === 1 ? "" : "s"} returned
      </div>
    </div>
  );
}

export function SqlResultsPanel({
  lastRun,
  loading,
  running,
  initError,
  onClear,
  maxHeight = 260,
}: SqlResultsPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (lastRun && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [lastRun]);

  const displayError = initError ?? lastRun?.error;
  const hasSelect =
    lastRun?.results.some((r) => r.kind === "select" && r.rowCount > 0) ?? false;
  const csvText = lastRun ? resultsToCsv(lastRun.results) : "";

  async function copyResults() {
    if (!csvText) return;
    try {
      await navigator.clipboard.writeText(csvText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="flex flex-col border-t border-slate-700/80 bg-[#0a0f16]">
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#111827] px-3 py-2">
        <div className="flex items-center gap-2">
          <Table2 className="h-3.5 w-3.5 text-sky-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Results
          </span>
          {running && (
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] font-medium text-sky-300">
              <Loader2 className="h-3 w-3 animate-spin" />
              Running…
            </span>
          )}
          {lastRun?.durationMs != null && !running && !displayError && (
            <span className="text-[10px] text-slate-500">
              {lastRun.durationMs} ms
            </span>
          )}
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={copyResults}
            disabled={!hasSelect}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-slate-400 transition-colors hover:bg-slate-800 hover:text-white disabled:opacity-30"
            title="Copy results as CSV"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            Copy
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClear}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            title="Clear results"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="ide-console-scroll overflow-auto overscroll-y-contain p-3"
        style={{ maxHeight, minHeight: 140 }}
        role="region"
        aria-label="Query results"
      >
        {loading ? (
          <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 text-slate-500">
            <Loader2 className="h-6 w-6 animate-spin text-sky-500/70" />
            <p className="text-xs">Loading database…</p>
          </div>
        ) : displayError ? (
          <div className="flex gap-3 rounded-lg border border-red-500/30 bg-red-950/40 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
            <div>
              <p className="text-sm font-medium text-red-300">Query error</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-red-200/90">
                {displayError}
              </p>
            </div>
          </div>
        ) : !lastRun ? (
          <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 text-center text-slate-500">
            <Inbox className="h-8 w-8 text-slate-600" />
            <p className="text-sm text-slate-400">No results yet</p>
            <p className="max-w-xs text-xs leading-relaxed">
              Write a query above and press{" "}
              <kbd className="rounded border border-slate-600 bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                Ctrl+Enter
              </kbd>{" "}
              to run it.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {lastRun.results.map((result, i) => {
              if (result.kind === "select") {
                if (result.rowCount === 0) {
                  return (
                    <div
                      key={i}
                      className="rounded-lg border border-slate-700/60 bg-slate-900/40 px-4 py-3 text-center text-xs text-slate-500"
                    >
                      Query returned 0 rows
                    </div>
                  );
                }
                return (
                  <SelectTable
                    key={i}
                    columns={result.columns}
                    rows={result.rows}
                    rowCount={result.rowCount}
                  />
                );
              }
              if (result.kind === "change") {
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-emerald-500/25 bg-emerald-950/30 p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <p className="text-xs leading-relaxed text-emerald-100/90">
                      Query OK — <strong>{result.changes}</strong> row
                      {result.changes === 1 ? "" : "s"} affected
                      {result.lastInsertRowid > 0 && (
                        <span className="text-emerald-300/70">
                          {" "}
                          · last insert id: {result.lastInsertRowid}
                        </span>
                      )}
                    </p>
                  </div>
                );
              }
              return (
                <p key={i} className="text-xs text-slate-400">
                  {result.message}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
