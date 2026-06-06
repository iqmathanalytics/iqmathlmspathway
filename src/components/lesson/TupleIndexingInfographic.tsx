"use client";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Hash,
  Lightbulb,
  MapPin,
  Play,
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

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
const POSITIVE_INDEXES = [0, 1, 2, 3, 4] as const;
const NEGATIVE_INDEXES = [-5, -4, -3, -2, -1] as const;

const SUMMARY_ROWS = [
  { rule: "Index Starts at 0", meaning: "First item is at position 0" },
  { rule: "Positive Index", meaning: "Left → Right" },
  { rule: "Negative Index", meaning: "Right → Left" },
  { rule: "Out of Range", meaning: "Causes IndexError" },
] as const;

const REF_ROWS = [
  { expr: "data[0]", meaning: "First item", result: "Mon" },
  { expr: "data[2]", meaning: "Third item", result: "Wed" },
  { expr: "data[-1]", meaning: "Last item", result: "Fri" },
  { expr: "data[-2]", meaning: "Second-last item", result: "Thu" },
  { expr: "len(data)", meaning: "Total items", result: "5" },
] as const;

export function TupleIndexingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Accessing Tuple Items
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Retrieve values from a tuple using index positions
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">Basics</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Tuple Indexing
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Tuples use indexes just like lists. Indexing starts at 0, so the first
          item is located at index 0.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Positive indexes count from the beginning, while negative indexes
            count from the end.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Example */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Hash className="h-3 w-3" />
          Example
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Accessing Items in a Tuple
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="tuple_indexing.py">
          <span className="text-gray-800">
            data = (&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;,
            &quot;Thu&quot;, &quot;Fri&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data[0]) </span>
          <span className="italic text-[#5a8a5a]"># Mon</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data[2]) </span>
          <span className="italic text-[#5a8a5a]"># Wed</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data[-1]) </span>
          <span className="italic text-[#5a8a5a]"># Fri</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Visual representation */}
      <section className="mb-8">
        <SectionLabel variant="purple">Visual representation</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Indexes in a 5-Day Tuple
        </h3>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[360px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Day
                </th>
                {DAYS.map((day) => (
                  <th
                    key={day}
                    className="px-2 py-2 text-center font-mono text-sm font-semibold text-gray-800"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">Index</td>
                {POSITIVE_INDEXES.map((idx) => (
                  <td
                    key={idx}
                    className="px-2 py-2.5 text-center font-mono text-gray-600"
                  >
                    [{idx}]
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Index 0 refers to the first item, while index 4 refers to the last
            item.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Negative indexing */}
      <section className="mb-8">
        <SectionLabel variant="teal">Negative indexing</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Counting from the End
        </h3>

        <div className="mb-3 overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[360px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Day
                </th>
                {DAYS.map((day) => (
                  <th
                    key={day}
                    className="px-2 py-2 text-center font-mono text-sm font-semibold text-gray-800"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 font-medium text-gray-700">
                  Negative Index
                </td>
                {NEGATIVE_INDEXES.map((idx) => (
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

        <CodeExercisePanel practiceIndex={1} filename="negative.py">
          <span className="text-gray-800">
            data = (&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;,
            &quot;Thu&quot;, &quot;Fri&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data[-1]) </span>
          <span className="italic text-[#5a8a5a]"># Fri</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data[-2]) </span>
          <span className="italic text-[#5a8a5a]"># Thu</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data[-3]) </span>
          <span className="italic text-[#5a8a5a]"># Wed</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Invalid index */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <AlertTriangle className="h-3 w-3" />
          Invalid index
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Index Out of Range
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="error.py">
          <span className="text-gray-800">
            data = (&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;,
            &quot;Thu&quot;, &quot;Fri&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(data[10])</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># IndexError:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # tuple index out of range
          </span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Practice example */}
      <section className="mb-8">
        <SectionLabel variant="red">Practice example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Given Tuple
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="practice.py">
          <span className="text-gray-800">scores = (88, 92, 79, 95)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores[0]) </span>
          <span className="italic text-[#5a8a5a]"># 88</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores[2]) </span>
          <span className="italic text-[#5a8a5a]"># 79</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(scores[-1]) </span>
          <span className="italic text-[#5a8a5a]"># 95</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
          <span>First score = 88, Third score = 79, Last score = 95.</span>
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
                  Meaning
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
                  <td className="px-3.5 py-2.5 text-gray-600">{row.meaning}</td>
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
                  <td className="px-3 py-2.5 text-gray-600">{row.meaning}</td>
                  <td className="px-3 py-2.5 font-mono text-gray-600">
                    {row.result}
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
