"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Play, Terminal } from "lucide-react";
import { PLATFORM_NAME, PLATFORM_TAGLINE } from "@/data/curriculum";

interface HomeHeroProps {
  liveModules: number;
  liveTopics: number;
  totalModules: number;
}

export function HomeHero({
  liveModules,
  liveTopics,
  totalModules,
}: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-gray-200/80">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,197,94,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-3 py-1 text-sm font-medium text-brand-800 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-500" />
              {liveModules} modules · {liveTopics} lessons live
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Master Python for{" "}
              <span className="bg-gradient-to-r from-brand-600 via-emerald-600 to-python-blue bg-clip-text text-transparent">
                Data Science
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
              {PLATFORM_TAGLINE}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/learn"
                className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition hover:bg-gray-800"
              >
                <Play className="h-4 w-4" />
                Start learning
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/learn/introduction-and-setup/introduction-to-programming"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
              >
                <BookOpen className="h-4 w-4" />
                Lesson 1
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200/80 pt-8">
              <div>
                <dt className="text-2xl font-bold text-gray-900">{liveTopics}</dt>
                <dd className="text-sm text-gray-500">Lessons</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-gray-900">{liveModules}</dt>
                <dd className="text-sm text-gray-500">Modules live</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-gray-900">{totalModules}</dt>
                <dd className="text-sm text-gray-500">Total path</dd>
              </div>
            </dl>
          </div>

          {/* IDE preview — static mock (no Pyodide on landing) */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-400/20 via-python-blue/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/80 bg-[#0d1117] shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center gap-2 border-b border-gray-800 bg-[#161b22] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/90" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
                  <span className="h-3 w-3 rounded-full bg-green-500/90" />
                </div>
                <span className="ml-2 font-mono text-xs text-gray-500">main.py</span>
                <span className="ml-auto rounded bg-brand-600/20 px-2 py-0.5 text-[10px] font-medium text-brand-400">
                  Python IDE
                </span>
              </div>
              <div className="space-y-0.5 p-4 font-mono text-[13px] leading-relaxed">
                <p className="text-gray-500"># Your first program</p>
                <p>
                  <span className="text-purple-400">print</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-emerald-400">&quot;Hello, Data Science!&quot;</span>
                  <span className="text-gray-300">)</span>
                </p>
                <p className="text-gray-500"> </p>
                <p>
                  <span className="text-purple-400">for</span>
                  <span className="text-gray-300"> i </span>
                  <span className="text-purple-400">in</span>
                  <span className="text-gray-300"> </span>
                  <span className="text-purple-400">range</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-amber-300">3</span>
                  <span className="text-gray-300">):</span>
                </p>
                <p className="text-gray-300">
                  {"    "}
                  <span className="text-purple-400">print</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-emerald-400">f&quot;Step </span>
                  <span className="text-gray-300">{"{i + 1}}"}</span>
                  <span className="text-emerald-400">&quot;</span>
                  <span className="text-gray-300">)</span>
                </p>
              </div>
              <div className="border-t border-gray-800 bg-[#010409]">
                <div className="flex items-center gap-2 border-b border-gray-800/80 px-3 py-1.5 text-[11px] text-gray-500">
                  <Terminal className="h-3 w-3" />
                  Console
                </div>
                <div className="space-y-0.5 p-3 font-mono text-xs">
                  <p className="text-emerald-400/90">› Hello, Data Science!</p>
                  <p className="text-emerald-400/90">› Step 1</p>
                  <p className="text-emerald-400/90">› Step 2</p>
                  <p className="text-emerald-400/90">› Step 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
