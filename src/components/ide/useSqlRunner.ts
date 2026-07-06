"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  createSessionDatabase,
  runSqlStatements,
  type SqlDatabaseId,
  type SqlRunResult,
} from "@/lib/sql-runtime";
import type { SqlLastRun } from "./SqlResultsPanel";
import type { Database } from "sql.js";

export function useSqlRunner(databaseId: SqlDatabaseId = "learning") {
  const [lastRun, setLastRun] = useState<SqlLastRun | null>(null);
  const [loading, setLoading] = useState(false);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dbRef = useRef<Database | null>(null);

  useEffect(() => {
    dbRef.current?.close();
    dbRef.current = null;
    setLastRun(null);
    setError(null);
  }, [databaseId]);

  const ensureDb = useCallback(async () => {
    if (!dbRef.current) {
      setLoading(true);
      try {
        dbRef.current = await createSessionDatabase(databaseId);
        setError(null);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        setError(msg);
        throw e;
      } finally {
        setLoading(false);
      }
    }
    return dbRef.current;
  }, [databaseId]);

  const runSql = useCallback(
    async (sql: string) => {
      setRunning(true);
      const started = performance.now();
      try {
        const db = await ensureDb();
        const { results, error: runError } = runSqlStatements(db, sql);
        const durationMs = Math.round(performance.now() - started);

        if (runError) {
          setLastRun({
            results: [],
            error: runError,
            ranAt: new Date().toISOString(),
            durationMs,
          });
          return;
        }

        setLastRun({
          results,
          error: null,
          ranAt: new Date().toISOString(),
          durationMs,
        });
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        setLastRun({
          results: [],
          error: msg,
          ranAt: new Date().toISOString(),
          durationMs: Math.round(performance.now() - started),
        });
      } finally {
        setRunning(false);
      }
    },
    [ensureDb]
  );

  const resetDatabase = useCallback(async () => {
    dbRef.current?.close();
    dbRef.current = null;
    setError(null);
    await ensureDb();
    setLastRun({
      results: [{ kind: "ok", message: "Database reset to original state." }],
      error: null,
      ranAt: new Date().toISOString(),
      durationMs: null,
    });
  }, [ensureDb]);

  const clearResults = useCallback(() => setLastRun(null), []);

  return {
    lastRun,
    loading,
    running,
    error,
    runSql,
    resetDatabase,
    clearResults,
    runnerName: "SQLite (sql.js)",
  };
}

export type { SqlRunResult };
