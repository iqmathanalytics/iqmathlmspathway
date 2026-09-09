"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { consoleStdin } from "@/lib/console-stdin";
import {
  loadPyodideRuntime,
  runPythonWithLock,
  type PyodideRuntime,
} from "@/lib/pyodide-runtime";
import type { ConsoleLine } from "./types";

let lineId = 0;
function nextId() {
  lineId += 1;
  return `line-${lineId}`;
}

export function usePyodideRunner(options?: { autoload?: boolean }) {
  const autoload = options?.autoload ?? true;
  const [lines, setLines] = useState<ConsoleLine[]>([]);
  const [loading, setLoading] = useState(autoload);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stdinActive, setStdinActive] = useState(false);
  const [stdinDraft, setStdinDraft] = useState("");
  const pyodideRef = useRef<PyodideRuntime | null>(null);
  const runningRef = useRef(false);
  const loadPromiseRef = useRef<Promise<PyodideRuntime | null> | null>(null);
  const pendingStdoutRef = useRef("");
  const pendingStderrRef = useRef("");
  const flushRafRef = useRef<number | null>(null);

  const clearConsole = useCallback(() => {
    if (flushRafRef.current != null) {
      cancelAnimationFrame(flushRafRef.current);
      flushRafRef.current = null;
    }
    pendingStdoutRef.current = "";
    pendingStderrRef.current = "";
    setLines([]);
    setStdinActive(false);
    setStdinDraft("");
  }, []);

  const flushPendingOutput = useCallback(() => {
    flushRafRef.current = null;
    const out = pendingStdoutRef.current;
    const err = pendingStderrRef.current;
    pendingStdoutRef.current = "";
    pendingStderrRef.current = "";
    if (!out && !err) return;
    setLines((prev) => {
      const next = [...prev];
      if (out) next.push({ id: nextId(), kind: "stdout", text: out });
      if (err) next.push({ id: nextId(), kind: "stderr", text: err });
      return next;
    });
  }, []);

  const scheduleFlush = useCallback(() => {
    if (flushRafRef.current != null) return;
    flushRafRef.current = requestAnimationFrame(flushPendingOutput);
  }, [flushPendingOutput]);

  useEffect(() => {
    if (!autoload) return;
    let cancelled = false;

    async function init() {
      const load = loadPyodideRuntime()
        .then((pyodide) => {
          if (cancelled) return null;
          pyodideRef.current = pyodide;
          setLoading(false);
          setError(null);
          return pyodide;
        })
        .catch((e) => {
          if (!cancelled) {
            setError(
              e instanceof Error ? e.message : "Could not load Python runtime"
            );
            setLoading(false);
          }
          return null;
        });
      loadPromiseRef.current = load;
      await load;
    }

    init();
    return () => {
      cancelled = true;
      if (flushRafRef.current != null) {
        cancelAnimationFrame(flushRafRef.current);
      }
    };
  }, [autoload]);

  const submitStdin = useCallback((line: string) => {
    setStdinActive(false);
    setStdinDraft("");
    setLines((prev) => [
      ...prev,
      { id: nextId(), kind: "stdin", text: `${line}\n` },
    ]);
    consoleStdin.submit(line);
  }, []);

  const runCode = useCallback(async (code: string, stdin = "") => {
    if (runningRef.current) return;
    runningRef.current = true;
    // Immediate feedback — don't wait for Pyodide to finish loading first.
    setRunning(true);
    setStdinActive(false);
    setStdinDraft("");
    setLines([]);
    pendingStdoutRef.current = "";
    pendingStderrRef.current = "";

    const appendStdout = (msg: string) => {
      if (!msg) return;
      pendingStdoutRef.current += msg;
      scheduleFlush();
    };
    const appendStderr = (msg: string) => {
      if (!msg) return;
      pendingStderrRef.current += msg;
      scheduleFlush();
    };

    const stdinLines = stdin
      .replace(/\r\n/g, "\n")
      .split("\n")
      .filter((line, index, arr) => !(index === arr.length - 1 && line === ""));

    try {
      let pyodide = pyodideRef.current;
      if (!pyodide) {
        setLoading(true);
        if (!loadPromiseRef.current) {
          loadPromiseRef.current = loadPyodideRuntime()
            .then((runtime) => {
              pyodideRef.current = runtime;
              setLoading(false);
              setError(null);
              return runtime;
            })
            .catch((e) => {
              setError(
                e instanceof Error ? e.message : "Could not load Python runtime"
              );
              setLoading(false);
              return null;
            });
        }
        pyodide = (await loadPromiseRef.current) ?? null;
        if (pyodide) {
          pyodideRef.current = pyodide;
          setLoading(false);
          setError(null);
        }
      }
      if (!pyodide) {
        setLines([
          {
            id: nextId(),
            kind: "error",
            text: "Python runtime is not ready. Check your network and try again.",
          },
        ]);
        return;
      }

      await runPythonWithLock(pyodide, code, {
        onStdout: appendStdout,
        onStderr: appendStderr,
        stdinLines: stdinLines.length > 0 ? stdinLines : undefined,
        interactiveStdin: true,
        onStdinRequest: () => setStdinActive(true),
      });
      flushPendingOutput();
    } catch (e) {
      flushPendingOutput();
      const msg = e instanceof Error ? e.message : String(e);
      setLines((prev) => [...prev, { id: nextId(), kind: "error", text: msg }]);
    } finally {
      runningRef.current = false;
      setRunning(false);
      setStdinActive(false);
      setStdinDraft("");
    }
  }, [flushPendingOutput, scheduleFlush]);

  return {
    lines,
    loading,
    running,
    error,
    runCode,
    clearConsole,
    stdinActive,
    stdinDraft,
    setStdinDraft,
    submitStdin,
  };
}
