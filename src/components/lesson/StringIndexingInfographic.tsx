"use client";

import {
  AlertTriangle,
  ArrowRight,
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
  variant: "purple" | "green" | "blue" | "amber" | "teal";
}) {
  const styles = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-900",
    teal: "bg-teal-100 text-teal-800",
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

const PYTHON_CHARS = ["P", "y", "t", "h", "o", "n"] as const;
const INDEX_ROWS = [
  { index: 0, char: "P" },
  { index: 1, char: "y" },
  { index: 2, char: "t" },
  { index: 3, char: "h" },
  { index: 4, char: "o" },
  { index: 5, char: "n" },
] as const;

const NEGATIVE_INDEXES = [-6, -5, -4, -3, -2, -1] as const;

const REF_ROWS = [
  { expr: "word[0]", meaning: "First character", result: "P" },
  { expr: "word[1]", meaning: "Second character", result: "y" },
  { expr: "word[-1]", meaning: "Last character", result: "n" },
  { expr: "word[-2]", meaning: "Second-last character", result: "o" },
  { expr: "word[10]", meaning: "Invalid index", result: "Error" },
] as const;

export function StringIndexingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          String Indexing
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Access individual characters using their position
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Hash className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is Indexing?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Each character in a string has a position called an index. Python
          starts counting from 0, not 1.
        </p>

        <div className="overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[320px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Character
                </th>
                {PYTHON_CHARS.map((ch) => (
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
                {INDEX_ROWS.map((row) => (
                  <td
                    key={row.index}
                    className="px-2 py-2.5 text-center font-mono text-gray-600"
                  >
                    {row.index}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>The first character always has index 0.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: In code */}
      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Accessing Characters
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="indexing.py">
          <span className="text-gray-800">word = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[0]) </span>
          <span className="italic text-[#5a8a5a]"># P</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[1]) </span>
          <span className="italic text-[#5a8a5a]"># y</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[2]) </span>
          <span className="italic text-[#5a8a5a]"># t</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Visual table */}
      <section className="mb-8">
        <SectionLabel variant="purple">Example</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Visualizing Index Positions
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Index
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Character
                </th>
              </tr>
            </thead>
            <tbody>
              {INDEX_ROWS.map((row) => (
                <tr
                  key={row.index}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.index}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono font-semibold text-gray-800">
                    {row.char}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Negative indexing */}
      <section className="mb-8">
        <SectionLabel variant="teal">Negative indexing</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Counting from the End
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Negative indexes start from the end of the string.
        </p>

        <div className="mb-3 overflow-x-auto rounded-xl border border-black/15 bg-white/50">
          <table className="w-full min-w-[320px] border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Character
                </th>
                {PYTHON_CHARS.map((ch) => (
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
          <span className="text-gray-800">word = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[-1]) </span>
          <span className="italic text-[#5a8a5a]"># n</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[-2]) </span>
          <span className="italic text-[#5a8a5a]"># o</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[-3]) </span>
          <span className="italic text-[#5a8a5a]"># h</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            -1 refers to the last character, -2 to the second-last character,
            and so on.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Error */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <AlertTriangle className="h-3 w-3" />
          Common error
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Index Out of Range
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Accessing an index that doesn&apos;t exist causes an error.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="error.py">
          <span className="text-gray-800">word = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(word[10])</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># IndexError:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # string index out of range
          </span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Real usage */}
      <section className="mb-8">
        <SectionLabel variant="blue">Real usage</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Extracting Specific Characters
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="usage.py">
          <span className="text-gray-800">name = &quot;Spiderboy&quot;</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">first_letter = name[0]</span>
          {"\n"}
          <span className="text-gray-800">last_letter = name[-1]</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(first_letter)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(last_letter)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Indexing is frequently used when processing text, validating input,
            and analyzing strings.
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
                  <td
                    className={`px-3 py-2.5 font-mono ${
                      row.result === "Error"
                        ? "font-semibold text-[#b83232]"
                        : "text-gray-600"
                    }`}
                  >
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
