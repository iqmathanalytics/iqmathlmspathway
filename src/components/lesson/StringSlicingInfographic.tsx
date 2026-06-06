"use client";

import {
  ArrowRight,
  Lightbulb,
  MapPin,
  Play,
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
        <span className="ml-auto font-mono text-[11px] text-gray-500">
          {filename}
        </span>
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

const SHORTCUT_ROWS = [
  { expr: "word[:4]", meaning: "Beginning to index 4", result: "Data" },
  { expr: "word[4:]", meaning: "Index 4 to end", result: "Science" },
  { expr: "word[:]", meaning: "Entire string", result: "DataScience" },
] as const;

const REF_ROWS = [
  { expr: "word[0:4]", meaning: "Characters 0 to 3", output: "Data" },
  { expr: "word[:4]", meaning: "Beginning to 3", output: "Data" },
  { expr: "word[4:]", meaning: "Index 4 to end", output: "Science" },
  { expr: "text[::2]", meaning: "Every second character", output: "Pto" },
  { expr: "text[::-1]", meaning: "Reverse string", output: "nohtyP" },
] as const;

export function StringSlicingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">String Slicing</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Extract parts of a string using start, end, and step values
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Scissors className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is Slicing?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Slicing allows you to extract a portion of a string. The general
          syntax is:
        </p>

        <CodeWindow filename="syntax">
          <span className="text-gray-800">string[start:end]</span>
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

        <CodeExercisePanel practiceIndex={0} filename="basic_slice.py">
          <span className="text-gray-800">word = &quot;DataScience&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[0:4]) </span>
          <span className="italic text-[#5a8a5a]"># Data</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[4:11]) </span>
          <span className="italic text-[#5a8a5a]"># Science</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[:4]) </span>
          <span className="italic text-[#5a8a5a]"># Data</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[4:]) </span>
          <span className="italic text-[#5a8a5a]"># Science</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: How it works */}
      <section className="mb-8">
        <SectionLabel variant="purple">How it works</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Understanding word[0:4]
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[280px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Character
                </th>
                {["D", "a", "t", "a", "S"].map((ch) => (
                  <th
                    key={ch}
                    className="px-2 py-2 text-center font-mono text-sm font-semibold text-gray-800"
                  >
                    {ch}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">
                  Index
                </td>
                {[0, 1, 2, 3, 4].map((idx) => (
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
            Start at index 0 and stop before index 4. Therefore Python returns
            characters at positions 0, 1, 2, 3.
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

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Expression
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {SHORTCUT_ROWS.map((row) => (
                <tr
                  key={row.expr}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.expr}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.meaning}</td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Leaving out the start means &quot;beginning&quot;, while leaving out
            the end means &quot;until the end&quot;.
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
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Using [start:end:step]
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          The third value controls how many characters Python skips.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="step_slice.py">
          <span className="text-gray-800">text = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text[::2]) </span>
          <span className="italic text-[#5a8a5a]"># Pto</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text[::3]) </span>
          <span className="italic text-[#5a8a5a]"># Ph</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>A step of 2 means take every second character.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Reverse */}
      <section className="mb-8">
        <SectionLabel variant="red">Reverse string</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Negative Step
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A negative step moves backwards through the string.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="reverse.py">
          <span className="text-gray-800">text = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(text[::-1]) </span>
          <span className="italic text-[#5a8a5a]"># nohtyP</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Using -1 as the step reverses the string completely.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Visual example */}
      <section className="mb-8">
        <SectionLabel variant="blue">Visual example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Step-by-Step View
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[320px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Index
                </th>
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <th
                    key={idx}
                    className="px-2 py-2 text-center font-mono text-sm text-gray-600"
                  >
                    {idx}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">
                  Character
                </td>
                {["P", "y", "t", "h", "o", "n"].map((ch) => (
                  <td
                    key={ch}
                    className="px-2 py-2.5 text-center font-mono font-semibold text-gray-800"
                  >
                    {ch}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            text[::2] selects indexes 0, 2, and 4 → P, t, o → &quot;Pto&quot;
          </span>
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
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Output
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
                  <td className="px-3 py-2.5 font-mono text-gray-600">
                    {row.output}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
