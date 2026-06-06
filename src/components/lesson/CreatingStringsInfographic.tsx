"use client";

import {
  ArrowRight,
  FileText,
  Lightbulb,
  MapPin,
  Play,
  Type,
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

const BASICS_ROWS = [
  { part: "Quotes", description: '" " or \' \'' },
  { part: "Text inside", description: "Your characters" },
  { part: "Data Type", description: "str" },
  { part: "Purpose", description: "Store textual data" },
] as const;

const REF_ROWS = [
  { syntax: '" "', meaning: "Double-quoted string", example: '"Hello"' },
  { syntax: "' '", meaning: "Single-quoted string", example: "'Hello'" },
  { syntax: '""" """', meaning: "Multiline string", example: '"""Hello"""' },
  { syntax: "str", meaning: "String data type", example: 'type("Hi")' },
] as const;

export function CreatingStringsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Creating Strings
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Text data stored inside quotes
        </p>
      </header>

      {/* Section 1: Basics */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <FileText className="h-3 w-3" />
          Basics
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          What is a String?
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A string is a sequence of characters enclosed in quotation marks.
          Strings are used to store text such as names, messages, addresses, and
          sentences.
        </p>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Part
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {BASICS_ROWS.map((row) => (
                <tr
                  key={row.part}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.part}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Everything written inside quotes becomes a string in Python.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Quotes */}
      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Single and Double Quotes
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Python treats single quotes and double quotes exactly the same. Choose
          whichever is more convenient for your text.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="quotes.py">
          <span className="text-gray-800">message = &quot;Hello&quot;</span>
          {"\n"}
          <span className="text-gray-800">name = &apos;Python&apos;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(message, name)</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Apostrophe */}
      <section className="mb-8">
        <SectionLabel variant="purple">Special case</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Using Apostrophes
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Double quotes are useful when your text contains an apostrophe.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="apostrophe.py">
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">
            (&quot;It&apos;s a great day&quot;)
          </span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Using double quotes avoids conflicts with the apostrophe character.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Multiline */}
      <section className="mb-8">
        <SectionLabel variant="teal">Multiline text</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Triple Quotes
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Triple quotes allow a string to span multiple lines without using
          newline characters manually.
        </p>

        <CodeExercisePanel practiceIndex={2} filename="multiline.py">
          <span className="text-gray-800">poem = &quot;&quot;&quot;Roses are red</span>
          {"\n"}
          <span className="text-gray-800">Violets are blue</span>
          {"\n"}
          <span className="text-gray-800">Python is fun&quot;&quot;&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(poem)</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Output */}
      <section className="mb-8">
        <SectionLabel variant="amber">Output</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Result of Multiline String
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Output
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3.5 py-3 font-mono text-sm leading-relaxed text-gray-700">
                  Roses are red
                  <br />
                  Violets are blue
                  <br />
                  Python is fun
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Triple-quoted strings preserve line breaks exactly as written.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Type */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Type className="h-3 w-3" />
          String type
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Checking the Data Type
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="type.py">
          <span className="text-gray-800">text = &quot;Python&quot;</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#8b2070]">type</span>
          <span className="text-gray-800">(text))</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Output:</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]">
            # &lt;class &apos;str&apos;&gt;
          </span>
        </CodeExercisePanel>
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
                  Syntax
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Meaning
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.syntax}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-[15px] font-semibold text-gray-800">
                    {row.syntax}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.meaning}</td>
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.example}
                    </code>
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
