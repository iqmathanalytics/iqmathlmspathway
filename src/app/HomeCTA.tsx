import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-14 text-center shadow-xl sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.22),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.22),transparent_50%)]" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start building?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-300">
            Pick a course, open the first lesson, and write your first line of code — or your first AI prompt — right now.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/learn/introduction-and-setup/introduction-to-programming"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
            >
              🐍 Begin Python — Module 1
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn/intro-to-ai/what-is-ai"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-500/60 bg-violet-600/20 px-7 py-3.5 text-sm font-semibold text-violet-200 shadow-lg transition hover:bg-violet-600/30"
            >
              🤖 Begin Agentic AI — Module 1
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">Free to start · No credit card needed</p>
        </div>
      </div>
    </section>
  );
}
