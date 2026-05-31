"use client";

import { ListChecks } from "lucide-react";

interface KeyTakeawaysProps {
  items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <section className="mt-10 rounded-xl border border-gray-200 bg-slate-50 p-5">
      <h2 className="flex items-center gap-2 font-semibold text-gray-900">
        <ListChecks className="h-5 w-5 text-brand-600" />
        Key takeaways
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
