"use client";

import dynamic from "next/dynamic";

function IDESkeleton() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-gray-700 bg-[#0d1117] shadow-xl">
      <div className="flex shrink-0 items-center gap-3 border-b border-gray-700 bg-[#161b22] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-gray-600" />
          <span className="h-3 w-3 rounded-full bg-gray-600" />
          <span className="h-3 w-3 rounded-full bg-gray-600" />
        </div>
        <span className="text-xs text-gray-500">Loading IDE…</span>
      </div>
      <div className="min-h-0 flex-[1.35] animate-pulse bg-[#0d1117]" />
      <div className="h-[180px] shrink-0 animate-pulse border-t border-gray-800 bg-[#010409]" />
    </div>
  );
}

export const PythonIDE = dynamic(
  () => import("./PythonIDE").then((m) => m.PythonIDE),
  { ssr: false, loading: () => <IDESkeleton /> }
);
