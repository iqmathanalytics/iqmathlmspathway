"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadPyodideRuntime, runPythonWithLock, type PyodideRuntime } from "@/lib/pyodide-runtime";
import type { ConsoleLine } from "./types";

let lineId = 0;
function nextId() {
  lineId += 1;
  return `line-${lineId}`;
}

function nowTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function usePyodideRunner() {
  const [lines, setLines] = useState<ConsoleLine[]>([]);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pyodideRef = useRef<PyodideRuntime | null>(null);

  const clearConsole = useCallback(() => {
    setLines([]);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const pyodide = await loadPyodideRuntime();
        if (cancelled) return;

        pyodideRef.current = pyodide;
        setLoading(false);
        setError(null);
        setLines([
          {
            id: nextId(),
            kind: "info",
            text: "Python 3 ready. Write code in the editor and press Run (Ctrl+Enter).",
            time: nowTime(),
          },
        ]);
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "Could not load Python runtime"
          );
          setLoading(false);
        }
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  const runCode = useCallback(
    async (code: string) => {
      if (!pyodideRef.current || running) return;
      setRunning(true);

      setLines((prev) => [
        ...prev,
        {
          id: nextId(),
          kind: "divider",
          text: "▶ Run",
          time: nowTime(),
        },
      ]);

      const appendStdout = (msg: string) => {
        if (!msg) return;
        setLines((prev) => [...prev, { id: nextId(), kind: "stdout", text: msg }]);
      };
      const appendStderr = (msg: string) => {
        if (!msg) return;
        setLines((prev) => [...prev, { id: nextId(), kind: "stderr", text: msg }]);
      };

      try {
        await runPythonWithLock(pyodideRef.current, code, {
          onStdout: appendStdout,
          onStderr: appendStderr,
        });
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        setLines((prev) => [
          ...prev,
          { id: nextId(), kind: "error", text: msg, time: nowTime() },
        ]);
      } finally {
        setRunning(false);
      }
    },
    [running]
  );

  return {
    lines,
    loading,
    running,
    error,
    runCode,
    clearConsole,
  };
}
