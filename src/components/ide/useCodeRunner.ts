"use client";

import { useCallback, useState } from "react";
import { usePyodideRunner } from "./usePyodideRunner";
import type { ConsoleLine } from "./types";

let lineId = 10_000;
function nextId() {
  lineId += 1;
  return `judge0-line-${lineId}`;
}

type Judge0RunResponse = {
  stdout?: string | null;
  stderr?: string | null;
  compile_output?: string | null;
  message?: string | null;
  status?: {
    id?: number;
    description?: string;
  };
  time?: string | null;
  memory?: number | null;
  error?: string;
};

type NormalizedJudge0RunResponse = {
  stdout: string;
  stderr: string;
  compileOutput: string;
  message: string;
  status: string;
  time: string | null;
  memory: number | null;
  error?: string;
};

const JUDGE0_API_URL = (
  process.env.NEXT_PUBLIC_JUDGE0_API_URL ?? "https://ce.judge0.com"
).replace(/\/$/, "");
const JUDGE0_LANGUAGE_ID = Number(
  process.env.NEXT_PUBLIC_JUDGE0_PYTHON_LANGUAGE_ID ?? 109
);
const JUDGE0_API_KEY = process.env.NEXT_PUBLIC_JUDGE0_API_KEY ?? "";
const JUDGE0_RAPIDAPI_KEY =
  process.env.NEXT_PUBLIC_JUDGE0_RAPIDAPI_KEY ?? "";
const JUDGE0_RAPIDAPI_HOST =
  process.env.NEXT_PUBLIC_JUDGE0_RAPIDAPI_HOST ?? "";

function getJudge0Headers(): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (JUDGE0_API_KEY) {
    headers.Authorization = `Bearer ${JUDGE0_API_KEY}`;
  }
  if (JUDGE0_RAPIDAPI_KEY) {
    headers["X-RapidAPI-Key"] = JUDGE0_RAPIDAPI_KEY;
  }
  if (JUDGE0_RAPIDAPI_HOST) {
    headers["X-RapidAPI-Host"] = JUDGE0_RAPIDAPI_HOST;
  }

  return headers;
}

function normalizeJudge0Response(
  payload: Judge0RunResponse
): NormalizedJudge0RunResponse {
  return {
    stdout: payload.stdout ?? "",
    stderr: payload.stderr ?? "",
    compileOutput: payload.compile_output ?? "",
    message: payload.message ?? "",
    status: payload.status?.description ?? "Unknown",
    time: payload.time ?? null,
    memory: payload.memory ?? null,
    error: payload.error,
  };
}

/**
 * Lesson IDE runner: try Judge0 first, fall back to in-browser Pyodide on
 * transport/API failure so Run never becomes permanently stuck.
 */
export function useCodeRunner() {
  const pyodide = usePyodideRunner();
  const [activeRunner, setActiveRunner] = useState<"judge0" | "pyodide">("judge0");
  const [judge0Lines, setJudge0Lines] = useState<ConsoleLine[]>([]);
  const [judge0Running, setJudge0Running] = useState(false);
  const [statusError, setStatusError] = useState<string | null>(null);

  const clearConsole = useCallback(() => {
    setJudge0Lines([]);
    setStatusError(null);
    pyodide.clearConsole();
  }, [pyodide]);

  const runWithJudge0 = useCallback(async (code: string, stdin = "") => {
    setJudge0Running(true);
    setStatusError(null);
    setJudge0Lines([]);

    try {
      const res = await fetch(
        `${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=true`,
        {
          method: "POST",
          headers: getJudge0Headers(),
          body: JSON.stringify({
            source_code: code,
            stdin,
            language_id: JUDGE0_LANGUAGE_ID,
          }),
        }
      );
      const payload = (await res.json()) as Judge0RunResponse;
      const data = normalizeJudge0Response(payload);

      if (!res.ok) {
        throw new Error(data.error ?? `Judge0 failed with HTTP ${res.status}`);
      }

      const next: ConsoleLine[] = [];
      if (data.stdout) {
        next.push({ id: nextId(), kind: "stdout", text: data.stdout });
      }
      if (data.stderr) {
        next.push({ id: nextId(), kind: "stderr", text: data.stderr });
      }
      if (data.compileOutput) {
        next.push({ id: nextId(), kind: "stderr", text: data.compileOutput });
      }
      if (data.message) {
        next.push({ id: nextId(), kind: "error", text: data.message });
      }
      const accepted = data.status === "Accepted";
      if (!accepted && data.status && next.length === 0) {
        next.push({ id: nextId(), kind: "error", text: data.status });
      }
      setJudge0Lines(next);
      setActiveRunner("judge0");
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setJudge0Lines([
        {
          id: nextId(),
          kind: "error",
          text: `Judge0 unavailable (${message}). Running with in-browser Python…`,
        },
      ]);
      return false;
    } finally {
      setJudge0Running(false);
    }
  }, []);

  const runCode = useCallback(
    (code: string, stdin = "") => {
      void (async () => {
        const ok = await runWithJudge0(code, stdin);
        if (ok) return;
        setActiveRunner("pyodide");
        // Do not leave a sticky error that disables Run — console already explains.
        setStatusError(null);
        pyodide.runCode(code);
      })();
    },
    [pyodide, runWithJudge0]
  );

  if (activeRunner === "judge0" || judge0Running) {
    return {
      lines: judge0Lines,
      loading: false,
      running: judge0Running,
      error: statusError,
      runCode,
      clearConsole,
      stdinActive: false,
      stdinDraft: "",
      setStdinDraft: () => {},
      submitStdin: () => {},
      runnerName: "Judge0",
      supportsStandardInput: true,
    };
  }

  return {
    lines:
      judge0Lines.length > 0
        ? [...judge0Lines, ...pyodide.lines]
        : pyodide.lines,
    loading: pyodide.loading,
    running: pyodide.running,
    error: statusError ?? pyodide.error,
    runCode,
    clearConsole,
    stdinActive: pyodide.stdinActive,
    stdinDraft: pyodide.stdinDraft,
    setStdinDraft: pyodide.setStdinDraft,
    submitStdin: pyodide.submitStdin,
    runnerName: "Pyodide",
    supportsStandardInput: true,
  };
}
