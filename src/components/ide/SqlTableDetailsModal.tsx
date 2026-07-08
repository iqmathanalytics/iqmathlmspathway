"use client";

import { useCallback, useEffect, useState } from "react";
import { Database, Loader2, Table2, X } from "lucide-react";
import clsx from "clsx";
import {
  createSessionDatabase,
  introspectTable,
  type SqlDatabaseId,
  type SqlTableIntrospection,
} from "@/lib/sql-runtime";
import {
  getSqlTablesForTopic,
  type SqlTableRef,
  type SqlTopicTableReference,
} from "@/data/sql-table-reference";

interface SqlTableDetailsModalProps {
  topicId: string;
  databaseId: SqlDatabaseId;
  open: boolean;
  onClose: () => void;
}

function formatCell(value: unknown): string {
  if (value === null || value === undefined) return "NULL";
  return String(value);
}

function SchemaTable({ data }: { data: SqlTableIntrospection }) {
  if (data.columns.length === 0) {
    return <p className="text-sm text-gray-500">Schema not available.</p>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-left text-xs">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="px-3 py-2 font-semibold">Column</th>
            <th className="px-3 py-2 font-semibold">Type</th>
            <th className="px-3 py-2 font-semibold">Nullable</th>
            <th className="px-3 py-2 font-semibold">Key</th>
          </tr>
        </thead>
        <tbody>
          {data.columns.map((col) => (
            <tr key={col.name} className="border-t border-gray-100">
              <td className="px-3 py-2 font-mono font-medium text-gray-900">{col.name}</td>
              <td className="px-3 py-2 text-gray-600">{col.type}</td>
              <td className="px-3 py-2 text-gray-600">{col.notNull ? "NO" : "YES"}</td>
              <td className="px-3 py-2 text-gray-600">{col.primaryKey ? "PK" : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SampleTable({ data }: { data: SqlTableIntrospection }) {
  if (data.sampleRows.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-gray-200 bg-gray-50 px-3 py-4 text-sm text-gray-500">
        No sample rows (table may be empty).
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-left text-xs">
          <thead className="bg-sky-50 text-sky-900">
            <tr>
              {data.sampleColumns.map((col) => (
                <th key={col} className="whitespace-nowrap px-3 py-2 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.sampleRows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={clsx(
                      "max-w-[200px] truncate px-3 py-2 font-mono",
                      cell === null ? "text-gray-400 italic" : "text-gray-800"
                    )}
                    title={formatCell(cell)}
                  >
                    {formatCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-gray-100 bg-gray-50 px-3 py-1.5 text-[11px] text-gray-500">
        Showing {data.sampleRows.length} of {data.rowCount.toLocaleString()} rows
      </p>
    </div>
  );
}

function TableCard({
  tableRef,
  introspection,
  expanded,
  onToggle,
}: {
  tableRef: SqlTableRef;
  introspection: SqlTableIntrospection | null;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors hover:bg-gray-50"
      >
        <Table2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm font-semibold text-gray-900">
              {tableRef.name}
            </code>
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-800">
              {tableRef.role}
            </span>
          </span>
          <p className="mt-1 text-sm text-gray-600">{tableRef.description}</p>
          <p className="mt-1 text-xs text-gray-400">
            Key columns: {tableRef.keyColumns.join(" · ")}
          </p>
        </span>
        <span
          className={clsx(
            "mt-1 text-gray-400 transition-transform duration-200",
            expanded && "rotate-180"
          )}
        >
          ▾
        </span>
      </button>

      {expanded && (
        <div className="space-y-4 border-t border-gray-100 px-4 py-4">
          {!introspection ? (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading schema…
            </div>
          ) : (
            <>
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Schema
                </h4>
                <SchemaTable data={introspection} />
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Sample data
                </h4>
                <SampleTable data={introspection} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function SqlTableDetailsModal({
  topicId,
  databaseId,
  open,
  onClose,
}: SqlTableDetailsModalProps) {
  const reference = getSqlTablesForTopic(topicId);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [introspections, setIntrospections] = useState<
    Record<string, SqlTableIntrospection>
  >({});
  const [expandedTable, setExpandedTable] = useState<string | null>(null);

  const loadTables = useCallback(async (ref: SqlTopicTableReference) => {
    setLoading(true);
    setError(null);
    try {
      const db = await createSessionDatabase(ref.databaseId ?? databaseId);
      const results: Record<string, SqlTableIntrospection> = {};
      for (const table of ref.tables) {
        results[table.name] = introspectTable(db, table.name);
      }
      db.close();
      setIntrospections(results);
      setExpandedTable(ref.tables[0]?.name ?? null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load table details.");
    } finally {
      setLoading(false);
    }
  }, [databaseId]);

  useEffect(() => {
    if (!open || !reference) return;
    void loadTables(reference);
  }, [open, reference, loadTables]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !reference) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sql-table-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close table details"
      />
      <div className="relative flex max-h-[min(92vh,820px)] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-5 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sky-700">
              <Database className="h-5 w-5 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Tables for this topic
              </span>
            </div>
            <h2 id="sql-table-modal-title" className="mt-1 text-lg font-bold text-gray-900">
              Database reference
            </h2>
            <p className="mt-1 text-sm text-gray-600">{reference.contextNote}</p>
            <p className="mt-1 text-xs text-gray-400">
              Database: <strong className="text-gray-600">{reference.databaseId}</strong>
              {" · "}
              {reference.tables.length} table{reference.tables.length === 1 ? "" : "s"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 [scrollbar-width:thin]">
          {loading && (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-500">
              <Loader2 className="h-8 w-8 animate-spin text-sky-600" />
              <p className="text-sm">Loading schemas and sample rows…</p>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-3">
              {reference.tables.map((table) => (
                <TableCard
                  key={table.name}
                  tableRef={table}
                  introspection={introspections[table.name] ?? null}
                  expanded={expandedTable === table.name}
                  onToggle={() =>
                    setExpandedTable((current) =>
                      current === table.name ? null : table.name
                    )
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
