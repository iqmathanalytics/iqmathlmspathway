"use client";

import { ArrowRight, Play, Target } from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";
import {
  STRING_CAT_NAV,
  STRING_METHOD_CATEGORIES,
  STRING_TOC_LINKS,
  type StringMethodEntry,
} from "@/components/lesson/stringMethodsContent";

type LabelVariant =
  | "purple"
  | "green"
  | "blue"
  | "amber"
  | "teal"
  | "red"
  | "orange"
  | "pink";

const PILL_STYLES: Record<LabelVariant, string> = {
  green: "bg-green-100 text-green-800",
  blue: "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  teal: "bg-teal-100 text-teal-800",
  amber: "bg-amber-100 text-amber-900",
  orange: "bg-orange-100 text-orange-900",
  red: "bg-red-100 text-red-800",
  pink: "bg-fuchsia-100 text-fuchsia-900",
};

const CAT_BTN_STYLES: Record<LabelVariant, string> = {
  green: "border-green-200/80 bg-green-50 text-green-800 hover:opacity-90",
  blue: "border-blue-200/80 bg-blue-50 text-blue-800 hover:opacity-90",
  purple: "border-purple-200/80 bg-purple-50 text-purple-800 hover:opacity-90",
  teal: "border-teal-200/80 bg-teal-50 text-teal-800 hover:opacity-90",
  amber: "border-amber-200/80 bg-amber-50 text-amber-900 hover:opacity-90",
  orange: "border-orange-200/80 bg-orange-50 text-orange-900 hover:opacity-90",
  red: "border-red-200/80 bg-red-50 text-red-800 hover:opacity-90",
  pink: "border-fuchsia-200/80 bg-fuchsia-50 text-fuchsia-900 hover:opacity-90",
};

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
        <span className="ml-auto font-mono text-[11px] text-gray-500">
          {filename}
        </span>
        <div className="ml-1 flex items-center gap-1">
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
      <pre className="overflow-x-auto bg-transparent px-4 py-3 font-mono text-[13px] leading-[1.9] text-gray-800">
        {children}
      </pre>
    </div>
  );
}

function CodeWindow({ code }: { code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/15 bg-white/60">
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3 font-mono text-[13px] leading-[1.9] text-gray-800">
        {code}
      </pre>
    </div>
  );
}

function Annotation({
  icon = "💡",
  children,
}: {
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-2 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
      <span className="shrink-0">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function WarnBox({
  variant,
  children,
}: {
  variant: "amber" | "red" | "blue" | "teal";
  children: React.ReactNode;
}) {
  const styles = {
    amber: "border-amber-200/80 bg-amber-50 [&_strong]:text-amber-900",
    red: "border-red-200/80 bg-red-50 [&_strong]:text-red-800",
    blue: "border-blue-200/80 bg-blue-50 [&_strong]:text-blue-800",
    teal: "border-teal-200/80 bg-teal-50 [&_strong]:text-teal-800",
  };
  return (
    <div
      className={`mt-2 flex items-start gap-2 rounded-lg border px-3 py-2.5 text-[13px] leading-relaxed text-gray-600 ${styles[variant]}`}
    >
      {children}
    </div>
  );
}

function CmpTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-black/15 bg-white/50">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="border-b border-black/15 bg-black/[0.05]">
            {headers.map((h) => (
              <th
                key={h}
                className="px-3 py-2 text-left text-[10.5px] font-semibold uppercase tracking-wide text-gray-500"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.join("|")}
              className="border-b border-black/10 last:border-b-0"
            >
              {row.map((cell, i) => (
                <td
                  key={`${i}-${cell}`}
                  className={`px-3 py-2 text-gray-600 ${
                    i === 0 ? "font-mono text-[13px] font-semibold text-[#1a5fb4]" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StringMethodBlock({ method }: { method: StringMethodEntry }) {
  const codePanel =
    method.practiceIndex != null ? (
      <CodeExercisePanel
        practiceIndex={method.practiceIndex}
        filename={`${method.id}.py`}
      >
        {method.code}
      </CodeExercisePanel>
    ) : (
      <CodeWindow code={method.code} />
    );

  return (
    <article id={method.id} className="scroll-mt-6">
      <h4 className="mb-1 font-mono text-[15px] font-semibold tracking-tight">
        {method.title}
      </h4>
      <p className="mb-2.5 text-[13.5px] leading-relaxed text-gray-600">
        {method.description}
      </p>
      {codePanel}
      {method.cmpTable && (
        <CmpTable
          headers={method.cmpTable.headers}
          rows={method.cmpTable.rows}
        />
      )}
      {method.warn && (
        <WarnBox variant={method.warn.variant}>{method.warn.text}</WarnBox>
      )}
      {method.annotation && (
        <Annotation icon={method.annotation.icon}>
          {method.annotation.text}
        </Annotation>
      )}
    </article>
  );
}

export function StringMethodsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-6 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">
          String Methods
        </h2>
        <p className="mt-1 text-[13px] text-gray-500">
          All 47 built-in Python string methods — what each one does with
          examples
        </p>
      </header>

      {/* Category nav */}
      <nav className="mb-6 flex flex-wrap gap-1.5">
        {STRING_CAT_NAV.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full border px-3 py-1 text-[12px] font-semibold transition ${CAT_BTN_STYLES[link.variant]}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* TOC */}
      <nav className="mb-8 flex flex-wrap gap-1 rounded-xl border border-black/15 bg-white/50 p-3.5">
        {STRING_TOC_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-black/10 px-2 py-0.5 font-mono text-[11.5px] font-semibold text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#len"
          className="rounded-full border border-black/10 px-2 py-0.5 font-mono text-[11.5px] font-semibold text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          len()
        </a>
      </nav>

      {STRING_METHOD_CATEGORIES.map((category) => (
        <div key={category.id}>
          <div
            id={category.id}
            className="scroll-mt-6 mb-4 mt-2 flex items-center gap-2.5 border-b-2 border-black/10 pb-2"
          >
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${PILL_STYLES[category.pillVariant]}`}
            >
              {category.pill}
            </span>
            <h3 className="text-sm font-semibold text-gray-900">
              {category.heading}
            </h3>
          </div>

          <div className="space-y-6">
            {category.methods.map((method, idx) => (
              <div key={method.id}>
                <StringMethodBlock method={method} />
                {idx < category.methods.length - 1 && (
                  <hr className="mt-6 border-black/10" />
                )}
              </div>
            ))}
          </div>

          <hr className="my-8 border-black/10" />
        </div>
      ))}

      {/* Bonus: len() */}
      <section id="len" className="scroll-mt-6 mb-8">
        <div className="mb-4 flex items-center gap-2.5 border-b-2 border-black/10 pb-2">
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-orange-900">
            ⭐ Bonus
          </span>
          <h3 className="text-sm font-semibold text-gray-900">
            Built-in len() function
          </h3>
        </div>
        <h4 className="mb-1 font-mono text-[15px] font-semibold">len()</h4>
        <p className="mb-2.5 text-[13.5px] leading-relaxed text-gray-600">
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
            len()
          </code>{" "}
          is a built-in function, not a string method. Returns the total number
          of characters in a string.
        </p>
        <CodeExercisePanel practiceIndex={3} filename="len.py">
          {`s = "Python"

print(len(s))   # 6`}
        </CodeExercisePanel>
        <Annotation icon="📌">
          You&apos;ll use{" "}
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
            len()
          </code>{" "}
          constantly — for loops, checking if a string is empty, and finding the
          last index (
          <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
            len(text) - 1
          </code>
          ).
        </Annotation>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice challenge */}
      <section className="mb-8">
        <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-800">
          <Target className="h-3 w-3" />
          Practice
        </span>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try yourself
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Click <strong>IDE</strong> on any exercise block above, or load the
          challenge below.
        </p>
        <CodeExercisePanel practiceIndex={5} filename="clean_data.py">
          {`messy = "  HELLO world  "
clean = messy.strip().lower()
print(clean.replace("world", "python"))`}
        </CodeExercisePanel>
      </section>
    </div>
  );
}
