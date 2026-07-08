"use client";

import { useState } from "react";
import { Network } from "lucide-react";
import clsx from "clsx";
import { getSqlDatabaseForModule } from "@/lib/sql-runtime";
import { SqlSchemaModelModal } from "./SqlSchemaModelModal";

interface SqlSchemaModelButtonProps {
  moduleSlug?: string;
  variant?: "inline" | "panel";
  className?: string;
}

export function SqlSchemaModelButton({
  moduleSlug,
  variant = "inline",
  className,
}: SqlSchemaModelButtonProps) {
  const [open, setOpen] = useState(false);
  const databaseId = getSqlDatabaseForModule(moduleSlug);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={clsx(
          "inline-flex items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 font-medium text-violet-800 shadow-sm transition-all",
          "hover:border-violet-300 hover:bg-violet-100 active:scale-[0.98]",
          variant === "panel"
            ? "flex-1 justify-center px-3.5 py-2.5 text-sm"
            : "px-3.5 py-2 text-sm",
          className
        )}
      >
        <Network className="h-4 w-4 shrink-0" />
        View database schema
      </button>

      <SqlSchemaModelModal
        databaseId={databaseId}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
