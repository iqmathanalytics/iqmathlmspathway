"use client";

import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  MapPin,
  Play,
  Scissors,
  Target,
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

const LETTERS = ["a", "b", "c", "d", "e"] as const;
const INDEXES = [0, 1, 2, 3, 4] as const;

const SLICE_HIGHLIGHT = [
  { idx: 0, value: "a", included: false },
  { idx: 1, value: "b", included: true },
  { idx: 2, value: "c", included: true },
  { idx: 3, value: "d", included: true },
  { idx: 4, value: "e", included: false },
] as const;

const SHORTCUT_ROWS = [
  { expr: "tuple[:3]", meaning: "First 3 items" },
  { expr: "tuple[2:]", meaning: "From index 2 to end" },
  { expr: "tuple[:]", meaning: "Entire tuple" },
] as const;

const SUMMARY_ROWS = [
  { rule: "Start Included", description: "Beginning index is included" },
  { rule: "End Excluded", description: "Ending index is not included" },
  { rule: "Creates New Tuple", description: "Original tuple remains unchanged" },
  { rule: "Supports Steps", description: "Can skip or reverse items" },
] as const;

const REF_ROWS = [
  { expr: "t[1:4]", result: "Items 1 to 3" },
  { expr: "t[:3]", result: "First 3 items" },
  { expr: "t[2:]", result: "From index 2 onward" },
  { expr: "t[::2]", result: "Every second item" },
  { expr: "t[::-1]", result: "Reverse tuple" },
  { expr: "t[:]", result: "Entire tuple" },
] as const;

export function TupleSlicingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Tuple Slicing</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Extract a portion of a tuple without changing the original tuple
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Scissors className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is Tuple Slicing?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Slicing allows you to create a new tuple containing selected items from
          an existing tuple. The original tuple remains unchanged because tuples
          are immutable.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Tuple slicing works exactly like string slicing and list slicing.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Basic examples */}
      <section className="mb-8">
        <SectionLabel variant="green">Basic examples</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using [start:end]
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="tuple_slice.py">
          <span className="text-gray-800">
            letters = (&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;,
            &quot;e&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(letters[1:4])</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(letters[:3])</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(letters[2:])</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Slicing returns a brand-new tuple.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Visual example */}
      <section className="mb-8">
        <SectionLabel variant="purple">Visual example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Indexes in letters Tuple
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[360px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Item
                </th>
                {LETTERS.map((letter) => (
                  <th
                    key={letter}
                    className="px-2 py-2 text-center font-mono text-sm font-semibold text-gray-800"
                  >
                    {letter}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">Index</td>
                {INDEXES.map((idx) => (
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
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Understanding [1:4] */}
      <section className="mb-8">
        <SectionLabel variant="teal">Understanding [1:4]</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Start Included, End Excluded
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="example.py">
          <span className="text-gray-800">
            letters = (&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;,
            &quot;e&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(letters[1:4])</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # (&apos;b&apos;, &apos;c&apos;, &apos;d&apos;)
          </span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[360px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Index
                </th>
                {INDEXES.map((idx) => (
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
                <td className="px-3 py-2.5 font-medium text-gray-700">Value</td>
                {SLICE_HIGHLIGHT.map((cell) => (
                  <td
                    key={cell.idx}
                    className={`px-2 py-2.5 text-center font-mono ${
                      cell.included
                        ? "font-semibold text-[#2d7a45]"
                        : "text-gray-500"
                    }`}
                  >
                    {cell.included ? `✅ ${cell.value}` : `❌ ${cell.value}`}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Python includes index 1 but stops before index 4.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Shortcuts */}
      <section className="mb-8">
        <SectionLabel variant="amber">Slice shortcuts</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Omitting Start or End
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="shortcuts.py">
          <span className="text-gray-800">
            letters = (&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;,
            &quot;e&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(letters[:3])</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # (&apos;a&apos;, &apos;b&apos;, &apos;c&apos;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(letters[2:])</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # (&apos;c&apos;, &apos;d&apos;, &apos;e&apos;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(letters[:])</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># entire tuple</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Expression
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Step slicing */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Zap className="h-3 w-3" />
          Step slicing
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Using [start:end:step]
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="step.py">
          <span className="text-gray-800">
            numbers = (10, 20, 30, 40, 50, 60)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(numbers[::2])</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># (10, 30, 50)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(numbers[::-1])</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # (60, 50, 40, 30, 20, 10)
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Step values allow skipping elements or reversing the tuple.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Summary */}
      <section className="mb-8">
        <SectionLabel variant="blue">Summary</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Important Rules
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Rule
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {SUMMARY_ROWS.map((row) => (
                <tr
                  key={row.rule}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.rule}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice problem */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try It Yourself
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="practice.py">
          <span className="text-gray-800">
            days = (&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;,
            &quot;Thu&quot;, &quot;Fri&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Print:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # (&apos;Tue&apos;, &apos;Wed&apos;)
          </span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # (&apos;Mon&apos;, &apos;Tue&apos;, &apos;Wed&apos;)
          </span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # (&apos;Thu&apos;, &apos;Fri&apos;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(days[1:3])</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(days[:3])</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(days[3:])</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
          <span>
            Expected solution: days[1:3], days[:3], days[3:]
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
                  Result
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
                  <td className="px-3 py-2.5 text-gray-600">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
