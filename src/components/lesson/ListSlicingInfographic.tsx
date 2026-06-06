"use client";

import {
  ArrowRight,
  Brain,
  Lightbulb,
  MapPin,
  Play,
  RotateCcw,
  Scissors,
  Zap,
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

function CodeWindow({
  filename,
  children,
}: {
  filename: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/15 bg-white/60">
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[11px] text-gray-500">{filename}</span>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
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

const COLORS = ["red", "green", "blue", "yellow"] as const;
const USAGE_ROWS = [
  { task: "First 3 Items", example: "items[:3]" },
  { task: "Last 3 Items", example: "items[-3:]" },
  { task: "Every Second Item", example: "items[::2]" },
  { task: "Reverse List", example: "items[::-1]" },
] as const;

const REF_ROWS = [
  { expr: "list[0:2]", meaning: "Items 0 and 1" },
  { expr: "list[:3]", meaning: "First 3 items" },
  { expr: "list[2:]", meaning: "From index 2 to end" },
  { expr: "list[::2]", meaning: "Every second item" },
  { expr: "list[::-1]", meaning: "Reverse list" },
  { expr: "list[-3:]", meaning: "Last 3 items" },
] as const;

export function ListSlicingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">List Slicing</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Extract portions of a list using start, end, and step values
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Scissors className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is List Slicing?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          List slicing allows you to extract a portion of a list without
          modifying the original list.
        </p>

        <CodeWindow filename="syntax.py">
          <span className="text-gray-800">list[start:end]</span>
        </CodeWindow>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            The start index is included, but the end index is excluded.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Basic slicing */}
      <section className="mb-8">
        <SectionLabel variant="green">Basic slicing</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using [start:end]
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="basic.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;,
            &quot;yellow&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[0:2]) </span>
          <span className="italic text-[#5a8a5a]">
            # [&apos;red&apos;, &apos;green&apos;]
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[1:3]) </span>
          <span className="italic text-[#5a8a5a]">
            # [&apos;green&apos;, &apos;blue&apos;]
          </span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Visual example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Visual example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Understanding colors[0:2]
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[320px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Item
                </th>
                {COLORS.map((color) => (
                  <th
                    key={color}
                    className="px-2 py-2 text-center font-mono text-sm font-semibold text-gray-800"
                  >
                    {color}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">Index</td>
                {[0, 1, 2, 3].map((idx) => (
                  <td
                    key={idx}
                    className="px-2 py-2.5 text-center font-mono text-gray-600"
                  >
                    {idx}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            colors[0:2] returns items at indexes 0 and 1. Python stops before
            index 2.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Shortcuts */}
      <section className="mb-8">
        <SectionLabel variant="teal">Shortcuts</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Omitting Start or End
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="shortcuts.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;,
            &quot;yellow&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[:2]) </span>
          <span className="italic text-[#5a8a5a]">
            # [&apos;red&apos;, &apos;green&apos;]
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[2:]) </span>
          <span className="italic text-[#5a8a5a]">
            # [&apos;blue&apos;, &apos;yellow&apos;]
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[:]) </span>
          <span className="italic text-[#5a8a5a]"># entire list</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Leaving out the start means &quot;from the beginning&quot;. Leaving
            out the end means &quot;to the end&quot;.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Step slicing */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Zap className="h-3 w-3" />
          Step slicing
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using [start:end:step]
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="step.py">
          <span className="text-gray-800">
            numbers = [10, 20, 30, 40, 50, 60]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(numbers[::2]) </span>
          <span className="italic text-[#5a8a5a]"># [10, 30, 50]</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(numbers[::3]) </span>
          <span className="italic text-[#5a8a5a]"># [10, 40]</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            The step value determines how many positions Python skips.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Reverse */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <RotateCcw className="h-3 w-3" />
          Reverse a list
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Negative Step
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="reverse.py">
          <span className="text-gray-800">
            colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;,
            &quot;yellow&quot;]
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(colors[::-1])</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # [&apos;yellow&apos;, &apos;blue&apos;, &apos;green&apos;,
            &apos;red&apos;]
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            A step of -1 traverses the list backwards and creates a reversed
            copy.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Real usage */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Brain className="h-3 w-3" />
          Real usage
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Common Applications
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Task
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {USAGE_ROWS.map((row) => (
                <tr
                  key={row.task}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-800">{row.task}</td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Quick reference */}
      <section>
        <h3 className="mb-2.5 text-base font-semibold tracking-tight">
          Quick reference
        </h3>
        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Expression
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.expr}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.expr}
                    </code>
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
