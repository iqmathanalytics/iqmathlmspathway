import type { Database, SqlJsStatic } from "sql.js";

export type SqlDatabaseId = "learning" | "northwind";

/** Module 1 uses the small learning DB; Module 2+ use the Northwind sample database. */
export const SQL_LEARNING_MODULE_SLUG = "sql-foundations";

export function getSqlDatabaseForModule(moduleSlug?: string): SqlDatabaseId {
  if (!moduleSlug || moduleSlug === SQL_LEARNING_MODULE_SLUG) return "learning";
  return "northwind";
}

let sqlPromise: Promise<SqlJsStatic> | null = null;
const masterBytes = new Map<SqlDatabaseId, Uint8Array>();

export function loadSqlJs(): Promise<SqlJsStatic> {
  if (!sqlPromise) {
    sqlPromise = import("sql.js").then((mod) =>
      mod.default({
        locateFile: (file: string) => `/sql-js/${file}`,
      })
    );
  }
  return sqlPromise;
}

async function fetchMasterBytes(id: SqlDatabaseId): Promise<Uint8Array> {
  const cached = masterBytes.get(id);
  if (cached) return cached;

  const res = await fetch(`/databases/${id}.sqlite`);
  if (!res.ok) {
    throw new Error(`Could not load database "${id}". (${res.status})`);
  }
  const buf = new Uint8Array(await res.arrayBuffer());
  masterBytes.set(id, buf);
  return buf;
}

/** Fresh in-memory copy — safe for DDL/DML practice without persisting changes. */
export async function createSessionDatabase(
  id: SqlDatabaseId = "learning"
): Promise<Database> {
  const SQL = await loadSqlJs();
  const bytes = await fetchMasterBytes(id);
  return new SQL.Database(bytes.slice());
}

export type SqlRunResult =
  | { kind: "select"; columns: string[]; rows: unknown[][]; rowCount: number }
  | { kind: "change"; changes: number; lastInsertRowid: number }
  | { kind: "ok"; message: string };

export function runSqlStatements(
  db: Database,
  sql: string
): { results: SqlRunResult[]; error?: string } {
  const trimmed = sql.trim();
  if (!trimmed) {
    return { results: [], error: "Enter a SQL statement to run." };
  }

  try {
    const raw = db.exec(trimmed);
    const results: SqlRunResult[] = [];

    if (raw.length === 0) {
      results.push({
        kind: "change",
        changes: db.getRowsModified(),
        lastInsertRowid: Number(db.exec("SELECT last_insert_rowid()")[0]?.values[0]?.[0] ?? 0),
      });
      return { results };
    }

    for (const table of raw) {
      results.push({
        kind: "select",
        columns: table.columns,
        rows: table.values,
        rowCount: table.values.length,
      });
    }
    return { results };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return { results: [], error: message };
  }
}

function padCell(value: unknown, width: number): string {
  const text = value === null ? "NULL" : String(value);
  return text.length >= width ? text : text + " ".repeat(width - text.length);
}

export function formatSqlResults(results: SqlRunResult[]): string {
  const lines: string[] = [];

  for (const result of results) {
    if (result.kind === "select") {
      if (result.rowCount === 0) {
        lines.push("(0 rows)");
        lines.push("");
        continue;
      }
      const widths = result.columns.map((col, i) =>
        Math.max(
          col.length,
          ...result.rows.map((row) => String(row[i] ?? "NULL").length)
        )
      );
      lines.push(result.columns.map((c, i) => padCell(c, widths[i])).join(" | "));
      lines.push(widths.map((w) => "-".repeat(w)).join("-+-"));
      for (const row of result.rows) {
        lines.push(
          row.map((cell, i) => padCell(cell, widths[i])).join(" | ")
        );
      }
      lines.push(`(${result.rowCount} row${result.rowCount === 1 ? "" : "s"})`);
      lines.push("");
    } else if (result.kind === "change") {
      lines.push(
        `Query OK. ${result.changes} row(s) affected. last_insert_rowid: ${result.lastInsertRowid}`
      );
      lines.push("");
    } else {
      lines.push(result.message);
      lines.push("");
    }
  }

  return lines.join("\n").trimEnd();
}
