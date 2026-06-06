"use client";

import {
  ArrowRight,
  BookOpen,
  Globe,
  Lightbulb,
  Octagon,
  Play,
  Scale,
  Search,
  SkipForward,
  Target,
} from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "purple" | "green" | "blue" | "amber" | "teal" | "red";
}) {
  const styles = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-900",
    teal: "bg-teal-100 text-teal-800",
    red: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function CodeExercisePanel({
  practiceIndex,
  filename,
  children,
}: {
  practiceIndex: number;
  filename: string;
  children: React.ReactNode;
}) {
  const practice = useLessonPractice();
  const isActive = practice?.activeIndex === practiceIndex;
  const hasNext =
    practice != null && practiceIndex < practice.total - 1;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/15 bg-white/60 transition-colors ${
        isActive ? "ring-2 ring-brand-400 ring-offset-1" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[11px] text-gray-500">{filename}</span>
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => practice?.selectPractice(practiceIndex)}
            title={isActive ? "Loaded in IDE" : "Load in IDE"}
            className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors ${
              isActive
                ? "bg-brand-600 text-white"
                : "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
            }`}
          >
            <Play className="h-2.5 w-2.5" />
            IDE
          </button>
          {isActive && hasNext && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => practice?.nextPractice()}
              title="Next exercise"
              className="inline-flex items-center gap-0.5 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Next
              <ArrowRight className="h-2.5 w-2.5" />
            </button>
          )}
        </div>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
  );
}

function OutputBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-black/10 bg-black/[0.03]">
      <div className="border-b border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
        Output
      </div>
      <pre className="px-3 py-2.5 font-mono text-[13px] text-gray-700">
        {children}
      </pre>
    </div>
  );
}

const COMPARISON_ROWS = [
  { statement: "break", action: "Exit the loop completely" },
  {
    statement: "continue",
    action: "Skip current iteration and continue looping",
  },
] as const;

const SUMMARY_ROWS = [
  { keyword: "break", purpose: "Stop the loop completely" },
  { keyword: "continue", purpose: "Skip current iteration" },
  { keyword: "break", purpose: "Used when target is found" },
  { keyword: "continue", purpose: "Used to ignore specific values" },
] as const;

export function BreakContinueInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          break and continue
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Control the flow of loops
        </p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Loop Control Statements
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Python provides <strong>break</strong> and <strong>continue</strong> to
          change the normal behavior of loops.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            break stops the loop completely, while continue skips the current
            iteration.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* break */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Octagon className="h-3 w-3" />
          break
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Stop the Loop
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="break.py">
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> n </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(1, 10):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n == 5:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">break</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(n)</span>
        </CodeExercisePanel>

        <OutputBox>
          1
          {"\n"}
          2
          {"\n"}
          3
          {"\n"}
          4
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          When n becomes 5, the break statement immediately exits the loop.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* break flow */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Search className="h-3 w-3" />
          How break works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Execution Flow
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-700">
          <div>n = 1 → Print 1</div>
          <div className="mt-1.5">n = 2 → Print 2</div>
          <div className="mt-1.5">n = 3 → Print 3</div>
          <div className="mt-1.5">n = 4 → Print 4</div>
          <div className="mt-1.5">
            n = 5 → <span className="font-semibold text-red-700">break</span>
          </div>
          <div className="mt-2 font-medium text-gray-500">Loop Ends</div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* continue */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <SkipForward className="h-3 w-3" />
          continue
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Skip Current Iteration
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="continue.py">
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> n </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(1, 6):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n == 3:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">continue</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(n)</span>
        </CodeExercisePanel>

        <OutputBox>
          1
          {"\n"}
          2
          {"\n"}
          4
          {"\n"}
          5
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          When n becomes 3, continue skips the remaining code and moves to the
          next iteration.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* continue flow */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Search className="h-3 w-3" />
          How continue works
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Execution Flow
        </h3>

        <div className="rounded-xl border border-black/15 bg-white/50 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-700">
          <div>n = 1 → Print 1</div>
          <div className="mt-1.5">n = 2 → Print 2</div>
          <div className="mt-1.5">
            n = 3 →{" "}
            <span className="font-semibold text-amber-700">continue</span>
          </div>
          <div className="pl-6 text-gray-500">Skip Print</div>
          <div className="mt-1.5">n = 4 → Print 4</div>
          <div className="mt-1.5">n = 5 → Print 5</div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Comparison */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Scale className="h-3 w-3" />
          break vs continue
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Difference
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Statement
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.statement}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono font-semibold text-gray-800">
                    {row.statement}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Visual comparison */}
      <section className="mb-8">
        <SectionLabel variant="green">Visual example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Understanding the Difference
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50/40 px-4 py-3">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-red-800">
              break
            </div>
            <div className="font-mono text-[13px] text-gray-700">
              1 → 2 → 3 →{" "}
              <span className="font-semibold text-red-700">STOP</span>
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 px-4 py-3">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-amber-900">
              continue
            </div>
            <div className="font-mono text-[13px] text-gray-700">
              1 → 2 →{" "}
              <span className="font-semibold text-amber-800">Skip 3</span> → 4
              → 5
            </div>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Search example */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Globe className="h-3 w-3" />
          Real-life example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Search for an Item
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="search.py">
          <span className="text-gray-800">
            items = [&quot;pen&quot;, &quot;book&quot;, &quot;eraser&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> item </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> items:</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> item == &quot;book&quot;:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(&quot;Found!&quot;)</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">break</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(item)</span>
        </CodeExercisePanel>

        <OutputBox>
          pen
          {"\n"}
          Found!
        </OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          After finding the book, the loop stops.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="skip.py">
          <span className="font-semibold text-[#1a5fb4]">for</span>
          <span className="text-gray-800"> n </span>
          <span className="font-semibold text-[#1a5fb4]">in</span>
          <span className="text-gray-800"> </span>
          <span className="font-semibold text-[#1a5fb4]">range</span>
          <span className="text-gray-800">(1, 8):</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#1a5fb4]">if</span>
          <span className="text-gray-800"> n == 4:</span>
          {"\n"}
          <span className="text-gray-800">        </span>
          <span className="font-semibold text-[#1a5fb4]">continue</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">    </span>
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(n)</span>
        </CodeExercisePanel>

        <OutputBox>
          1
          {"\n"}
          2
          {"\n"}
          3
          {"\n"}
          5
          {"\n"}
          6
          {"\n"}
          7
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Quick summary */}
      <section>
        <h3 className="mb-2.5 text-base font-semibold tracking-tight">
          Quick summary
        </h3>
        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Keyword
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row, i) => (
                <tr
                  key={`${row.keyword}-${i}`}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.keyword}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
