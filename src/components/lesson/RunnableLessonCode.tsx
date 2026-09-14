"use client";

import { useCallback, useState } from "react";
import { Code2, Loader2, Play } from "lucide-react";
import { ConsolePanel } from "@/components/ide/ConsolePanel";
import { OpenInColabButton } from "@/components/ide/OpenInColabButton";
import { usePyodideRunner } from "@/components/ide/usePyodideRunner";
import {
  isVisualizationCode,
  prepareVisualizationRunCode,
} from "@/lib/visualization-code";

interface RunnableLessonCodeProps {
  code: string;
}

export function RunnableLessonCode({ code }: RunnableLessonCodeProps) {
  const isViz = isVisualizationCode(code);
  const needsInput = /\binput\s*\(/.test(code);
  const [hasRun, setHasRun] = useState(false);
  const {
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
  } = usePyodideRunner({ autoload: false });

  const handleRun = useCallback(async () => {
    setHasRun(true);
    const toRun = isViz ? prepareVisualizationRunCode(code) : code;
    await runCode(toRun);
  }, [code, isViz, runCode]);

  return (
    <div className="ide-light-locked my-4 overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm ring-1 ring-sky-100">
      <div className="flex flex-wrap items-center gap-2 border-b border-sky-200 bg-white px-3 py-2">
        <Code2 className="h-4 w-4 text-brand-600" />
        <span className="text-sm font-medium text-slate-800">Example code</span>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          {isViz && (
            <OpenInColabButton
              code={code}
              variant="light"
              label="Open in Google Colab"
            />
          )}
          <button
            type="button"
            onClick={() => void handleRun()}
            disabled={running}
            className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70"
            title="Run this example and show the output"
          >
            {running ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Play className="h-3.5 w-3.5" />
            )}
            {running ? "Running…" : "Run"}
          </button>
        </div>
      </div>
      <pre className="overflow-x-auto bg-sky-50 p-4 font-mono text-sm text-slate-800">
        {code}
      </pre>
      {hasRun && (
        <ConsolePanel
          lines={lines}
          loading={loading}
          running={running}
          error={error}
          onClear={clearConsole}
          maxHeight={180}
          showInput
          statusText={
            error
              ? "Runtime error"
              : loading
                ? "Loading Python…"
                : running
                  ? stdinActive
                    ? "Waiting for input…"
                    : "Running…"
                  : lines.some(
                        (l) =>
                          l.kind === "stdout" ||
                          l.kind === "stderr" ||
                          l.kind === "error"
                      )
                    ? "Execution completed"
                    : "Console ready"
          }
          statusTone={
            error
              ? "error"
              : loading || running
                ? "busy"
                : lines.some((l) => l.kind === "stdout" || l.kind === "stderr")
                  ? "success"
                  : "idle"
          }
          stdinActive={stdinActive}
          stdinDraft={stdinDraft}
          onStdinDraftChange={setStdinDraft}
          onStdinSubmit={submitStdin}
          emptyHint={
            !running && !loading && lines.length === 0
              ? "Ran with no printed output. Add print(...) to see values."
              : undefined
          }
        />
      )}
      {needsInput && (
        <p className="border-t border-sky-200 bg-sky-50 px-4 py-2 text-xs text-brand-800">
          This example uses input(). Click Run, then type each answer in the
          input box at the top of the console and press Enter.
        </p>
      )}
      {isViz && (
        <p className="border-t border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-900">
          Plots do not render in the course page. Click Run to see any printed
          results, or open Google Colab to view the chart.
        </p>
      )}
    </div>
  );
}
