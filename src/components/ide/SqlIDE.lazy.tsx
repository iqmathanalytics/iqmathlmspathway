"use client";

import dynamic from "next/dynamic";

function IDESkeleton() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm ring-1 ring-sky-100">
      <div className="flex shrink-0 items-center gap-3 border-b border-sky-200 bg-white px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
        </div>
        <span className="text-xs text-slate-400">Loading SQL IDE…</span>
      </div>
      <div className="min-h-0 flex-[1.2] animate-pulse bg-sky-50" />
      <div className="h-[200px] shrink-0 animate-pulse border-t border-sky-200 bg-[#f8fbfe]" />
    </div>
  );
}

export const SqlIDE = dynamic(
  () => import("./SqlIDE").then((m) => m.SqlIDE),
  { ssr: false, loading: () => <IDESkeleton /> }
);
