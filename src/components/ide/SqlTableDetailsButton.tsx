"use client";

import { useState } from "react";
import { Table2 } from "lucide-react";
import clsx from "clsx";
import { getSqlDatabaseForModule } from "@/lib/sql-runtime";
import { hasSqlTableReference } from "@/data/sql-table-reference";
import { SqlTableDetailsModal } from "./SqlTableDetailsModal";

interface SqlTableDetailsButtonProps {
  topicId: string;
  moduleSlug?: string;
  variant?: "inline" | "panel";
  className?: string;
}

export function SqlTableDetailsButton({
  topicId,
  moduleSlug,
  variant = "inline",
  className,
}: SqlTableDetailsButtonProps) {
  const [open, setOpen] = useState(false);

  if (!hasSqlTableReference(topicId)) return null;

  const databaseId = getSqlDatabaseForModule(moduleSlug);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={clsx(
          "inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 font-medium text-sky-800 shadow-sm transition-all",
          "hover:border-sky-300 hover:bg-sky-100 active:scale-[0.98]",
          variant === "panel"
            ? "flex-1 justify-center px-3.5 py-2.5 text-sm"
            : "px-3.5 py-2 text-sm",
          className
        )}
      >
        <Table2 className="h-4 w-4 shrink-0" />
        View table details
      </button>

      <SqlTableDetailsModal
        topicId={topicId}
        databaseId={databaseId}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
