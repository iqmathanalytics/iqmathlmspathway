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
    <div className="overflow-hidden rounded-lg border border-sky-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max border-collapse text-left text-[12.5px]">
          <thead>
            <tr className="border-b border-sky-200 bg-sky-50">
              {columns.map((col) => (
                <th
                  key={col}
                  className="whitespace-nowrap px-3 py-2.5 font-semibold tracking-wide text-brand-800"
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
                className={ri % 2 === 0 ? "bg-white" : "bg-[#f8fbfe]"}
              >
                {row.map((cell, ci) => {
                  const isNull = cell === null || cell === undefined;
                  return (
                    <td
                      key={ci}
                      className={`whitespace-nowrap border-t border-sky-100 px-3 py-2 font-mono ${
                        isNull ? "italic text-slate-400" : "text-slate-800"
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
      <div className="border-t border-sky-200 bg-sky-50 px-3 py-1.5 text-[11px] text-slate-500">
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
    <div className="flex min-h-0 flex-col border-t border-sky-200 bg-[#f8fbfe]">
      {/* Match shared ConsolePanel header layout */}
      <div className="flex h-11 shrink-0 items-center gap-2 border-b border-sky-200 bg-white px-3">
        <div className="flex min-w-0 shrink items-center gap-1.5">
          <Table2 className="h-3.5 w-3.5 text-brand-600" />
          <span className="text-xs font-semibold text-slate-800">Results</span>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          {running ? (
            <span className="inline-flex items-center gap-1 truncate rounded-md bg-sky-50 px-1.5 py-0.5 text-[11px] font-medium text-brand-700 ring-1 ring-sky-100">
              <Loader2 className="h-3 w-3 animate-spin" />
              Running…
            </span>
          ) : lastRun?.durationMs != null && !displayError ? (
            <span className="block truncate text-[11px] text-slate-500">
              {lastRun.durationMs} ms
            </span>
          ) : displayError ? (
            <span className="block truncate rounded-md bg-red-50 px-1.5 py-0.5 text-[11px] font-medium text-red-700 ring-1 ring-red-100">
              ✕ Query error
            </span>
          ) : (
            <span className="block truncate text-[11px] text-slate-500">
              Console ready
            </span>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={copyResults}
            disabled={!hasSelect}
            className="inline-flex h-7 items-center gap-1 rounded-md px-2 text-xs font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-brand-700 disabled:opacity-30"
            title="Copy results as CSV"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-accent-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span className="hidden sm:inline">Copy</span>
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClear}
            className="inline-flex h-7 items-center gap-1 rounded-md px-2 text-xs font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-brand-700"
            title="Clear results"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="ide-console-scroll-light min-h-0 flex-1 overflow-auto overscroll-y-contain bg-[#f8fbfe] p-3"
        style={{ maxHeight, minHeight: 140 }}
        role="region"
        aria-label="Query results"
      >
        {loading ? (
          <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 text-slate-500">
            <Loader2 className="h-6 w-6 animate-spin text-brand-600/70" />
            <p className="text-xs">Loading database…</p>
          </div>
        ) : displayError ? (
          <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
            <div>
              <p className="text-sm font-medium text-red-700">Query error</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-red-700/90">
                {displayError}
              </p>
            </div>
          </div>
        ) : !lastRun ? (
          <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 text-center text-slate-500">
            <Inbox className="h-8 w-8 text-slate-300" />
            <p className="text-sm text-slate-500">No results yet</p>
            <p className="max-w-xs text-xs leading-relaxed text-slate-400">
              Write a query above and press{" "}
              <kbd className="rounded border border-sky-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-600">
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
                      className="rounded-lg border border-sky-200 bg-white px-4 py-3 text-center text-xs text-slate-500"
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
                    className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-xs leading-relaxed text-emerald-800">
                      Query OK — <strong>{result.changes}</strong> row
                      {result.changes === 1 ? "" : "s"} affected
                      {result.lastInsertRowid > 0 && (
                        <span className="text-emerald-700/80">
                          {" "}
                          · last insert id: {result.lastInsertRowid}
                        </span>
                      )}
                    </p>
                  </div>
                );
              }
              return (
                <p key={i} className="text-xs text-slate-600">
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
