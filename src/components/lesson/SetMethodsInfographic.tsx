"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Copy,
  GitBranch,
  Lightbulb,
  Play,
  Plus,
  RefreshCw,
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

const METHOD_ROWS = [
  { method: "add(item)", purpose: "Add a single item", example: "s.add(4)" },
  { method: "update(other)", purpose: "Add items from another set", example: "s.update({4,5})" },
  { method: "remove(item)", purpose: "Remove item (error if missing)", example: "s.remove(2)" },
  { method: "pop()", purpose: "Remove and return arbitrary item", example: "s.pop()" },
  { method: "issubset(other)", purpose: "All items of a are in other", example: "False" },
  {
    method: "issuperset(other)",
    purpose: "a contains all of other",
    example: "True",
  },
  {
    method: "isdisjoint(other)",
    purpose: "No shared items",
    example: "True",
  },
  { method: "copy()", purpose: "Shallow copy of the set", example: "new set" },
] as const;

const REF_ROWS = [
  { code: "s.add(x)", result: "Add one item" },
  { code: "s.update(other)", result: "Merge another set" },
  { code: "s.remove(x)", result: "Delete item" },
  { code: "s.pop()", result: "Remove any item" },
  { code: "a.issubset(b)", result: "Is a inside b?" },
  { code: "a.issuperset(b)", result: "Does a contain b?" },
  { code: "a.isdisjoint(b)", result: "No overlap?" },
  { code: "a.copy()", result: "Duplicate the set" },
  { code: "list(set(items))", result: "Remove list duplicates" },
] as const;

export function SetMethodsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Set Methods</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Add, remove, and compare items in a set
        </p>
      </header>

      {/* Modifying sets */}
      <section className="mb-8">
        <SectionLabel variant="teal">
          <Plus className="h-3 w-3" />
          Updating sets
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          add(), update(), remove(), pop()
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          These methods change the set directly. Use add() for one item,
          update() to merge another set, remove() to delete a known item, and
          pop() to remove any item.
        </p>

        <CodeWindow filename="modify_set.py">
          <span className="text-gray-800">s = {`{1, 2, 3}`}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">s.add(4)</span>
          {"\n"}
          <span className="text-gray-800">s.update({`{5, 6}`})</span>
          {"\n"}
          <span className="text-gray-800">s.remove(2)</span>
          {"\n"}
          <span className="text-gray-800">last = s.pop()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(s)</span>
        </CodeWindow>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          pop() removes an arbitrary element — useful when you do not care
          which item goes.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Overview */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Relationship Methods
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Sets include helpful methods for testing relationships and copying.
          These are common in data cleaning and validation.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Use issubset, issuperset, and isdisjoint to compare sets without
            changing them.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Main example */}
      <section className="mb-8">
        <SectionLabel variant="green">Example code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Testing Set Relationships
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="relationships.py">
          <span className="text-gray-800">a = {`{1, 2, 3}`}</span>
          {"\n"}
          <span className="text-gray-800">b = {`{2, 3, 4}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a.issubset(b)) </span>
          <span className="italic text-[#5a8a5a]"># False</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a.issuperset({`{1, 2}`})) </span>
          <span className="italic text-[#5a8a5a]"># True</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a.isdisjoint({`{5, 6}`})) </span>
          <span className="italic text-[#5a8a5a]"># True — no overlap</span>
        </CodeExercisePanel>

        <OutputBox>
          False{"\n"}True{"\n"}True
        </OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Method reference */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <GitBranch className="h-3 w-3" />
          Methods
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          What Each Method Does
        </h3>

        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {METHOD_ROWS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Individual methods */}
      <section className="mb-8">
        <SectionLabel variant="amber">issubset()</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Is Every Item Contained?
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="issubset.py">
          <span className="text-gray-800">a = {`{1, 2, 3}`}</span>
          {"\n"}
          <span className="text-gray-800">b = {`{2, 3, 4}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a.issubset(b))</span>
        </CodeExercisePanel>

        <OutputBox>False</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Returns True only if every item in a is also in b.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="teal">issuperset()</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Does a Contain All Items?
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="issuperset.py">
          <span className="text-gray-800">a = {`{1, 2, 3}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a.issuperset({`{1, 2}`}))</span>
        </CodeExercisePanel>

        <OutputBox>True</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="red">isdisjoint()</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          No Shared Items
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="isdisjoint.py">
          <span className="text-gray-800">a = {`{1, 2, 3}`}</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(a.isdisjoint({`{5, 6}`}))</span>
        </CodeExercisePanel>

        <OutputBox>True</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Returns True when the sets share no common elements.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* copy */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Copy className="h-3 w-3" />
          copy()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Duplicate a Set
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="copy.py">
          <span className="text-gray-800">original = {`{1, 2, 3}`}</span>
          {"\n"}
          <span className="text-gray-800">duplicate = original.copy()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(duplicate)</span>
        </CodeExercisePanel>

        <OutputBox>{`{1, 2, 3}`}</OutputBox>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Dedupe tip */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <RefreshCw className="h-3 w-3" />
          Data cleaning
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Remove List Duplicates
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Use sets to remove duplicate values from a list. Order is not
          preserved unless you sort afterward.
        </p>

        <CodeExercisePanel practiceIndex={5} filename="dedupe.py">
          <span className="text-gray-800">items = [1, 2, 2, 3, 3, 3]</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">unique = </span>
          <span className="font-semibold text-[#1a5fb4]">list</span>
          <span className="text-gray-800">(</span>
          <span className="font-semibold text-[#1a5fb4]">set</span>
          <span className="text-gray-800">(items))</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(unique)</span>
        </CodeExercisePanel>

        <OutputBox>[1, 2, 3]</OutputBox>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Useful before analysis when you need unique categories or IDs.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Subset Check
        </h3>

        <CodeExercisePanel practiceIndex={6} filename="practice.py">
          <span className="text-gray-800">
            required = {`{"id", "name"}`}
          </span>
          {"\n"}
          <span className="text-gray-800">
            columns = {`{"id", "name", "age"}`}
          </span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(required.issubset(columns))</span>
        </CodeExercisePanel>

        <OutputBox>True</OutputBox>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
          <span>
            All required columns exist in columns — the dataset is valid.
          </span>
        </div>
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
                  Code
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.code}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3 py-2.5 font-mono text-gray-800">
                    {row.code}
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
