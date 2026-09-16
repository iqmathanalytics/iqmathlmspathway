"use client";

import { ProgramGrid } from "@/components/programs/ProgramGrid";

export function HomePrograms() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden border-y border-gray-200/80 bg-gray-50/80"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            Programs
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enroll in a published track
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Python, SQL, and any course an admin publishes appear here. Enroll
            to start learning — your dashboard tracks status for each program.
          </p>
        </div>
        <ProgramGrid />
      </div>
    </section>
  );
}
