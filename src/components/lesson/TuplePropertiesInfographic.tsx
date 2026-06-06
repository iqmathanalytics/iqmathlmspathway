"use client";

import {
  AlertTriangle,
  ArrowRight,
  Brain,
  Lightbulb,
  Lock,
  MapPin,
  Play,
  Repeat,
  Shield,
  Sparkles,
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

const FEATURES = [
  {
    icon: MapPin,
    name: "Ordered",
    note: "Items keep their positions",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    icon: Lock,
    name: "Immutable",
    note: "Cannot be changed",
    symbolClass: "text-[#2d7a45]",
  },
  {
    icon: Repeat,
    name: "Duplicates Allowed",
    note: "Repeated values are accepted",
    symbolClass: "text-[#5e3fa3]",
  },
] as const;

const IMMUTABILITY_ROWS = [
  { feature: "Fixed Data", benefit: "Values stay unchanged" },
  { feature: "Safety", benefit: "Prevents accidental modifications" },
  { feature: "Reliability", benefit: "Data remains consistent" },
  { feature: "Performance", benefit: "Often slightly faster than lists" },
] as const;

const MIXED_ROWS = [
  { value: '"Alice"', dataType: "str" },
  { value: "25", dataType: "int" },
  { value: "True", dataType: "bool" },
] as const;

const USE_CASE_ROWS = [
  { useCase: "Coordinates", example: "(10, 20)" },
  { useCase: "Dates", example: "(2026, 6, 5)" },
  { useCase: "Student Records", example: '("John", 101)' },
  { useCase: "Database Rows", example: '(1, "Alice", "Admin")' },
] as const;

const REF_ROWS = [
  { property: "Syntax", value: "( )" },
  { property: "Ordered", value: "✅ Yes" },
  { property: "Mutable", value: "❌ No" },
  { property: "Duplicates Allowed", value: "✅ Yes" },
  { property: "Mixed Types", value: "✅ Yes" },
  { property: "Indexing Supported", value: "✅ Yes" },
] as const;

export function TuplePropertiesInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          Tuple Properties
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Understanding the key characteristics of Python tuples
        </p>
      </header>

      {/* Section 1: Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">Overview</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Main Features of Tuples
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Tuples are one of Python&apos;s built-in collection types. They store
          multiple values in a single variable and have several important
          properties.
        </p>

        <div className="flex flex-col gap-1.5">
          {FEATURES.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] ${f.symbolClass}`}
              >
                <f.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {f.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{f.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Ordered */}
      <section className="mb-8">
        <SectionLabel variant="green">Ordered</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Items Maintain Their Position
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Tuples preserve the order of insertion. Each item has an index just
          like a list.
        </p>

        <CodeExercisePanel practiceIndex={0} filename="ordered.py">
          <span className="text-gray-800">
            days = (&quot;Mon&quot;, &quot;Tue&quot;, &quot;Wed&quot;)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(days[0]) </span>
          <span className="italic text-[#5a8a5a]"># Mon</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(days[1]) </span>
          <span className="italic text-[#5a8a5a]"># Tue</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            The order of items remains the same throughout the program.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: Immutable */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Lock className="h-3 w-3" />
          Immutable
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Tuples Cannot Be Modified
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          After a tuple is created, its items cannot be changed, added, or
          removed.
        </p>

        <CodeExercisePanel practiceIndex={1} filename="immutable.py">
          <span className="text-gray-800">point = (3, 4)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># point[0] = 10</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(point)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Attempting to modify a tuple raises a TypeError.</span>
        </div>

        <div className="mt-3">
          <CodeExercisePanel practiceIndex={2} filename="error.py">
            <span className="text-gray-800">point = (3, 4)</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">point[0] = 10</span>
            {"\n"}
            {"\n"}
            <span className="italic text-[#5a8a5a]"># TypeError:</span>
            {"\n"}
            <span className="italic text-[#5a8a5a]">
              # &apos;tuple&apos; object does not support item assignment
            </span>
          </CodeExercisePanel>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Why immutability matters */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <Shield className="h-3 w-3" />
          Why immutability matters
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Benefits of Fixed Data
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Feature
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Benefit
                </th>
              </tr>
            </thead>
            <tbody>
              {IMMUTABILITY_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-medium text-gray-800">
                    {row.feature}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Tuples are ideal for data that should never change.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 5: Duplicates */}
      <section className="mb-8">
        <SectionLabel variant="amber">Duplicates allowed</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Repeated Values Are Valid
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Tuples can contain the same value multiple times.
        </p>

        <CodeExercisePanel practiceIndex={3} filename="duplicates.py">
          <span className="text-gray-800">numbers = (1, 1, 2)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(numbers)</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># (1, 1, 2)</span>
        </CodeExercisePanel>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Duplicate values are completely valid inside tuples.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 6: Mixed data types */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Sparkles className="h-3 w-3" />
          Mixed data types
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Store Different Types Together
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          A tuple can contain values of different data types.
        </p>

        <CodeExercisePanel practiceIndex={4} filename="mixed.py">
          <span className="text-gray-800">
            person = (&quot;Alice&quot;, 25, True)
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(person)</span>
        </CodeExercisePanel>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Value
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Data Type
                </th>
              </tr>
            </thead>
            <tbody>
              {MIXED_ROWS.map((row) => (
                <tr
                  key={row.value}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.value}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.dataType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 7: Common use cases */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Brain className="h-3 w-3" />
          Common use cases
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          When to Use Tuples
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Use Case
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {USE_CASE_ROWS.map((row) => (
                <tr
                  key={row.useCase}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 text-gray-800">{row.useCase}</td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Tuples are commonly used for rows of data that should not change.
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
                  Property
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Tuple
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.property}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 text-gray-800">{row.property}</td>
                  <td className="px-3 py-2.5 font-mono text-gray-600">
                    {row.value}
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
