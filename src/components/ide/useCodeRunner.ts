"use client";

import { useCallback, useState } from "react";
import { usePyodideRunner } from "./usePyodideRunner";
import type { ConsoleLine } from "./types";

let lineId = 10_000;
function nextId() {
  lineId += 1;
  return `judge0-line-${lineId}`;
}

function nowTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
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

const JUDGE0_API_URL =
  (
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

export function useCodeRunner() {
  const pyodide = usePyodideRunner();
  const [judge0Configured] = useState(true);
  const [judge0Lines, setJudge0Lines] = useState<ConsoleLine[]>([]);
  const [judge0Running, setJudge0Running] = useState(false);
  const [judge0Error, setJudge0Error] = useState<string | null>(null);

  const clearConsole = useCallback(() => {
    if (judge0Configured) {
      setJudge0Lines([]);
      setJudge0Error(null);
      return;
    }
    pyodide.clearConsole();
  }, [judge0Configured, pyodide]);

  const runWithJudge0 = useCallback(async (code: string, stdin = "") => {
    setJudge0Running(true);
    setJudge0Error(null);
    setJudge0Lines((prev) => [
      ...prev,
      {
        id: nextId(),
        kind: "divider",
        text: "▶ Run on Judge0",
        time: nowTime(),
      },
      {
        id: nextId(),
        kind: "info",
        text: `Executing in Judge0 sandbox...${
          stdin ? "\nstdin:\n" + stdin + "\n" : "\n"
        }`,
        time: nowTime(),
      },
    ]);

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
      next.push({
        id: nextId(),
        kind: "info",
        text: `Judge0 status: ${data.status}${
          data.time ? ` | time ${data.time}s` : ""
        }${data.memory ? ` | memory ${data.memory} KB` : ""}\n`,
        time: nowTime(),
      });
      setJudge0Lines((prev) => [...prev, ...next]);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setJudge0Error(message);
      setJudge0Lines((prev) => [
        ...prev,
        { id: nextId(), kind: "error", text: message, time: nowTime() },
      ]);
    } finally {
      setJudge0Running(false);
    }
  }, []);

  const runCode = useCallback(
    (code: string, stdin = "") => {
      if (judge0Configured) {
        void runWithJudge0(code, stdin);
        return;
      }
      pyodide.runCode(code);
    },
    [judge0Configured, pyodide, runWithJudge0]
  );

  if (judge0Configured) {
    return {
      lines: judge0Lines.length
        ? judge0Lines
        : [
            {
              id: "judge0-ready",
              kind: "info" as const,
              text: "Judge0 sandbox ready. Press Run to execute code server-side.\n",
              time: nowTime(),
            },
          ],
      loading: false,
      running: judge0Running,
      error: judge0Error,
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
    ...pyodide,
    runCode,
    clearConsole,
    runnerName: "Pyodide",
    supportsStandardInput: false,
  };
}
