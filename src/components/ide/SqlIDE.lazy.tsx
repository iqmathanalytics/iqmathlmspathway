"use client";

import dynamic from "next/dynamic";

function IDESkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0a0f16] shadow-xl">
      <div className="flex items-center gap-3 border-b border-slate-700 bg-[#111827] px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        </div>
        <span className="text-xs text-slate-500">Loading SQL IDE…</span>
      </div>
      <div className="h-[200px] animate-pulse bg-[#0d1117]" />
      <div className="h-[200px] animate-pulse border-t border-slate-800 bg-[#0a0f16]" />
    </div>
  );
}

export const SqlIDE = dynamic(
  () => import("./SqlIDE").then((m) => m.SqlIDE),
  { ssr: false, loading: () => <IDESkeleton /> }
);
