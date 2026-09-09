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
    <div className="my-4 overflow-hidden rounded-xl border border-gray-800 bg-[#0d1117] shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-800 bg-[#161b22] px-3 py-2">
        <Code2 className="h-4 w-4 text-green-300" />
        <span className="text-sm font-medium text-gray-200">Example code</span>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          {isViz && (
            <OpenInColabButton
              code={code}
              variant="ide"
              label="Open in Google Colab"
            />
          )}
          <button
            type="button"
            onClick={() => void handleRun()}
            disabled={running}
            className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 disabled:cursor-wait disabled:opacity-70"
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
      <pre className="overflow-x-auto p-4 font-mono text-sm text-green-100">
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
          stdinActive={stdinActive}
          stdinDraft={stdinDraft}
          onStdinDraftChange={setStdinDraft}
          onStdinSubmit={submitStdin}
          emptyHint={
            !running && !loading && lines.length === 0
              ? "Ran with no printed output. Add print(...) to see values."
              : undefined
          }
          actions={
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => void handleRun()}
              disabled={running}
              className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-emerald-500 disabled:opacity-70"
            >
              {running ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
              {running ? "Running…" : "Run"}
            </button>
          }
        />
      )}
      {needsInput && (
        <p className="border-t border-gray-800 bg-[#161b22] px-4 py-2 text-xs text-sky-300">
          This example uses input(). Click Run, then type each answer in the
          input box at the top of the console and press Enter.
        </p>
      )}
      {isViz && (
        <p className="border-t border-gray-800 bg-[#161b22] px-4 py-2 text-xs text-orange-300">
          Plots do not render in the course page. Click Run to see any printed
          results, or open Google Colab to view the chart.
        </p>
      )}
    </div>
  );
}
