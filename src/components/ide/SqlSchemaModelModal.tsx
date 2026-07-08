"use client";

import { useEffect } from "react";
import { Network, X } from "lucide-react";
import type { SqlDatabaseId } from "@/lib/sql-runtime";
import { getSqlSchemaModel } from "@/data/sql-schema-models";
import { SqlSchemaDiagram } from "./SqlSchemaDiagram";

interface SqlSchemaModelModalProps {
  databaseId: SqlDatabaseId;
  open: boolean;
  onClose: () => void;
}

export function SqlSchemaModelModal({
  databaseId,
  open,
  onClose,
}: SqlSchemaModelModalProps) {
  const model = getSqlSchemaModel(databaseId);

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sql-schema-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close database schema"
      />
      <div className="relative flex max-h-[min(94vh,900px)] w-full max-w-6xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl overscroll-none">
        <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-5 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-violet-700">
              <Network className="h-5 w-5 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Database schema
              </span>
            </div>
            <h2 id="sql-schema-modal-title" className="mt-1 text-lg font-bold text-gray-900">
              {model.title}
            </h2>
            <p className="mt-1 text-sm text-gray-600">{model.subtitle}</p>
            <p className="mt-1 text-xs text-gray-400">
              {model.tables.length} tables · {model.relationships.length} relationships ·{" "}
              <strong className="text-gray-600">{model.databaseId}</strong>
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

        <SqlSchemaDiagram model={model} />
      </div>
    </div>
  );
}
