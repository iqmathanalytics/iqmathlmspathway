"use client";

import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  Dices,
  Lightbulb,
  MapPin,
  Minus,
  Play,
  Plus,
  Shield,
  Target,
  Trash2,
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

const ADD_ROWS = [
  {
    before: "{'python', 'data'}",
    added: "'ml'",
    after: "{'python', 'data', 'ml'}",
  },
] as const;

const REMOVE_COMPARE = [
  { method: "remove()", ifMissing: "❌ Error" },
  { method: "discard()", ifMissing: "✅ No Error" },
] as const;

const METHOD_ROWS = [
  { method: "add(x)", purpose: "Add an item" },
  { method: "remove(x)", purpose: "Remove an item" },
  { method: "discard(x)", purpose: "Remove safely" },
  { method: "pop()", purpose: "Remove random item" },
  { method: "clear()", purpose: "Remove all items" },
] as const;

const REF_ROWS = [
  { code: 'set.add("x")', result: "Add item" },
  { code: 'set.remove("x")', result: "Remove item" },
  { code: 'set.discard("x")', result: "Remove safely" },
  { code: "set.pop()", result: "Remove random item" },
  { code: "set.clear()", result: "Empty the set" },
] as const;

export function SetUpdatingInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Modifying Sets</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Add, remove, and clear items in a set
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <BookOpen className="h-3 w-3" />
          Overview
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Changing a Set
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Unlike tuples, sets are mutable. This means you can add, remove, and
          clear items after creating the set.
        </p>

        <div className="flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>Sets do not allow duplicate values.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* add() */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <Plus className="h-3 w-3" />
          add()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Adding Items
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="add.py">
          <span className="text-gray-800">
            tags = {`{"python", "data"}`}
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">tags.add(&quot;ml&quot;)</span>
          {"\n"}
          <span className="text-gray-800">tags.add(&quot;python&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(tags)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'python', 'data', 'ml'}`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          Adding an existing value does not create a duplicate.
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Before
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Added
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  After
                </th>
              </tr>
            </thead>
            <tbody>
              {ADD_ROWS.map((row) => (
                <tr key={row.added}>
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.before}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.added}
                  </td>
                  <td className="px-3.5 py-2.5 font-mono text-gray-600">
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* remove() */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Minus className="h-3 w-3" />
          remove()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Removing Items
        </h3>

        <CodeExercisePanel practiceIndex={1} filename="remove.py">
          <span className="text-gray-800">
            tags = {`{"python", "data", "ml"}`}
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">tags.remove(&quot;data&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(tags)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'python', 'ml'}`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          remove() deletes the specified item.
        </p>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>remove() raises a KeyError if the item does not exist.</span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* discard() */}
      <section className="mb-8">
        <SectionLabel variant="amber">
          <Shield className="h-3 w-3" />
          discard()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Safe Removal
        </h3>

        <CodeExercisePanel practiceIndex={2} filename="discard.py">
          <span className="text-gray-800">tags = {`{"python", "ml"}`}</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">tags.discard(&quot;data&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(tags)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'python', 'ml'}`}</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          discard() does nothing if the item is missing.
        </p>

        <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  If Item Missing
                </th>
              </tr>
            </thead>
            <tbody>
              {REMOVE_COMPARE.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="px-3.5 py-2.5 font-mono text-gray-800">
                    {row.method}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.ifMissing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* pop() */}
      <section className="mb-8">
        <SectionLabel variant="red">
          <Dices className="h-3 w-3" />
          pop()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Remove a Random Item
        </h3>

        <CodeExercisePanel practiceIndex={3} filename="pop.py">
          <span className="text-gray-800">
            tags = {`{"python", "data", "ml"}`}
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">item = tags.pop()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(item)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(tags)</span>
        </CodeExercisePanel>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          pop() removes and returns an arbitrary item from the set.
        </p>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Because sets are unordered, you cannot predict which item will be
            removed.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* clear() */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Trash2 className="h-3 w-3" />
          clear()
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Remove All Items
        </h3>

        <CodeExercisePanel practiceIndex={4} filename="clear.py">
          <span className="text-gray-800">
            tags = {`{"python", "data", "ml"}`}
          </span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">tags.clear()</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(tags)</span>
        </CodeExercisePanel>

        <OutputBox>set()</OutputBox>

        <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-600">
          clear() removes every item from the set.
        </p>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Summary */}
      <section className="mb-8">
        <SectionLabel variant="green">
          <BarChart3 className="h-3 w-3" />
          Summary
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Set Modification Methods
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

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try Yourself
        </h3>

        <CodeExercisePanel practiceIndex={5} filename="practice.py">
          <span className="text-gray-800">skills = {`{"python", "sql"}`}</span>
          {"\n"}
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Add &quot;ml&quot;</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Remove &quot;sql&quot;</span>
          {"\n"}
          <span className="italic text-[#5a8a5a]"># Print the set</span>
          {"\n"}
          {"\n"}
          <span className="text-gray-800">skills.add(&quot;ml&quot;)</span>
          {"\n"}
          <span className="text-gray-800">skills.remove(&quot;sql&quot;)</span>
          {"\n"}
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(skills)</span>
        </CodeExercisePanel>

        <OutputBox>{`{'python', 'ml'}`}</OutputBox>
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
