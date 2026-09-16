"use client";

import Link from "next/link";
import { ArrowRight, Award, Clock } from "lucide-react";
import type { CertificationProgram } from "@/data/certification/catalog";

export function CertificationCatalogClient({
  programs,
}: {
  programs: CertificationProgram[];
}) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {programs.map((program) => (
        <article
          key={program.id}
          className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
                {program.short}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                {program.title}
              </h2>
            </div>
            {program.status === "live" ? (
              <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                Live
              </span>
            ) : (
              <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
                Coming soon
              </span>
            )}
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">{program.tagline}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
            {program.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">Access: {program.audience}</p>
          {program.status === "live" ? (
            <Link
              href={program.href}
              className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Open {program.short}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
              <Clock className="h-4 w-4" />
              Not open yet
            </p>
          )}
        </article>
      ))}

      <article className="flex flex-col justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50/80 p-6 text-gray-600">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
          Next programs
        </p>
        <h2 className="mt-2 text-xl font-semibold text-gray-800">
          More certifications coming
        </h2>
        <p className="mt-3 text-sm leading-6">
          Additional IQmath certifications will appear here as their own programs —
          same Get Certified hub, separate practice and exam paths.
        </p>
      </article>
    </div>
  );
}
