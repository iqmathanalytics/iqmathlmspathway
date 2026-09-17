"use client";

import { Code2 } from "lucide-react";
import { OpenInColabButton } from "@/components/ide/OpenInColabButton";
import { isVisualizationCode } from "@/lib/visualization-code";

interface RunnableLessonCodeProps {
  code: string;
}

export function RunnableLessonCode({ code }: RunnableLessonCodeProps) {
  const isViz = isVisualizationCode(code);

  return (
    <div className="ide-light-locked my-4 overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm ring-1 ring-sky-100">
      <div className="flex flex-wrap items-center gap-2 border-b border-sky-200 bg-white px-3 py-2">
        <Code2 className="h-4 w-4 text-brand-600" />
        <span className="text-sm font-medium text-slate-800">Example code</span>
        {isViz && (
          <div className="ml-auto">
            <OpenInColabButton
              code={code}
              variant="light"
              label="Open in Google Colab"
            />
          </div>
        )}
      </div>
      <pre className="overflow-x-auto bg-sky-50 p-4 font-mono text-sm text-slate-800">
        {code}
      </pre>
      {isViz && (
        <p className="border-t border-amber-200 bg-amber-50 px-4 py-2 text-xs text-amber-900">
          Plots do not render in the course page. Open Google Colab to view the
          chart.
        </p>
      )}
    </div>
  );
}
