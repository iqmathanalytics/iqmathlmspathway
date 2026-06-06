"use client";

import { AlertTriangle, ArrowRight, Lightbulb, Play } from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "purple" | "green" | "blue" | "amber" | "red";
}) {
  const styles = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-900",
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

const FN_CARDS = [
  {
    name: "int(x)",
    color: "blue",
    desc: "Converts to a whole number. Drops any decimal — it doesn't round.",
    examples: ['int("21") → 21', "int(9.9) → 9"],
    nameClass: "text-blue-700",
  },
  {
    name: "float(x)",
    color: "teal",
    desc: "Converts to a decimal number.",
    examples: ['float("3.14") → 3.14', "float(5) → 5.0"],
    nameClass: "text-teal-700",
  },
  {
    name: "str(x)",
    color: "green",
    desc: "Converts anything to text. Useful for joining numbers into strings.",
    examples: ['str(99) → "99"', 'str(3.14) → "3.14"'],
    nameClass: "text-green-700",
  },
  {
    name: "bool(x)",
    color: "amber",
    desc: "Converts to True or False. Zero and empty values become False.",
    examples: ["bool(1) → True", "bool(0) → False"],
    nameClass: "text-amber-800",
  },
] as const;

const REF_ROWS = [
  { expr: 'int("25")', result: "25", ok: true },
  { expr: 'float("3.14")', result: "3.14", ok: true },
  { expr: "str(100)", result: '"100"', ok: true },
  { expr: "int(9.9)", result: "9 (truncated)", ok: true },
  { expr: 'int("hello")', result: "ValueError", ok: false },
  { expr: 'int("21.5")', result: "ValueError", ok: false },
] as const;

export function TypeCastingInfographic() {
  return (
    <div className="py-2">
      <div className="mb-10 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          Type Casting
        </h2>
        <p className="mt-0.5 text-[13px] text-gray-500">
          How to convert values from one type to another — and why you need to
        </p>
      </div>

      <section className="mb-8">
        <SectionLabel variant="amber">Why this matters</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Why cast types?
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Python doesn&apos;t automatically convert types for you. If you try to
          mix incompatible types — like adding a string and a number — you get
          an error. Casting is how you take control.
        </p>
        <div className="mb-3.5 rounded-xl border border-amber-300/50 bg-amber-50 p-4 text-[13.5px] leading-relaxed text-gray-600">
          <strong className="text-amber-900">The most common case:</strong>{" "}
          <code className="font-mono text-xs">input()</code> always gives you a
          string — even if the user typed a number. Before you can do any math
          on it, you must convert it to <code className="font-mono text-xs">int</code>{" "}
          or <code className="font-mono text-xs">float</code> first.
        </div>
        <div className="my-3.5 flex flex-wrap items-center gap-2.5">
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-lg border border-green-300/50 bg-green-50 px-4 py-2.5 font-mono text-[15px] font-semibold text-green-800">
              &quot;25&quot;
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              string from input()
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 px-1">
            <span className="rounded-md border border-purple-200 bg-purple-50 px-2.5 py-1 font-mono text-xs font-semibold text-purple-800">
              int()
            </span>
            <span className="text-xl text-gray-400">→</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-lg border border-blue-300/50 bg-blue-50 px-4 py-2.5 font-mono text-[15px] font-semibold text-blue-800">
              25
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              number — ready for math
            </span>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="purple">The functions</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Common conversion functions
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Each function is named after the type it converts <em>to</em>. Wrap
          any value in it and Python returns the converted version.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2.5">
          {FN_CARDS.map((fn) => (
            <div
              key={fn.name}
              className="rounded-xl border border-black/15 bg-white/55 p-3.5"
            >
              <p className={`font-mono text-sm font-semibold ${fn.nameClass}`}>
                {fn.name}
              </p>
              <p className="mt-1 text-[12.5px] leading-snug text-gray-600">
                {fn.desc}
              </p>
              <p className="mt-1.5 font-mono text-xs leading-relaxed text-gray-500">
                {fn.examples.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Casting in practice
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          The original variable is never changed — casting creates a new value.
          Store it in a variable if you need to use it again.
        </p>
        <CodeExercisePanel practiceIndex={0} filename="casting.py">
          <span className="italic text-[#5a8a5a]">
            # str → int: needed before doing math
          </span>
          {"\n"}
          <span className="text-[#c0622b]">text_age</span>
          <span className="text-gray-900"> = </span>
          <span className="text-green-700">&quot;21&quot;</span>
          {"\n"}
          <span className="text-[#c0622b]">age</span>
          <span className="text-gray-900">      = </span>
          <span className="font-semibold text-[#8b2070]">int</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">text_age</span>
          <span className="text-gray-900">)</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">age</span>
          <span className="text-gray-900"> + </span>
          <span className="text-blue-700">1</span>
          <span className="text-gray-900">)        </span>
          <span className="italic text-[#5a8a5a]"># 22  ✓</span>
          {"\n\n"}
          <span className="italic text-[#5a8a5a]">
            # int → str: needed to join with text
          </span>
          {"\n"}
          <span className="text-[#c0622b]">score</span>
          <span className="text-gray-900"> = </span>
          <span className="text-blue-700">100</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-green-700">&quot;Score: &quot;</span>
          <span className="text-gray-900"> + </span>
          <span className="font-semibold text-[#8b2070]">str</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">score</span>
          <span className="text-gray-900">))  </span>
          <span className="italic text-[#5a8a5a]"># &quot;Score: 100&quot;</span>
          {"\n\n"}
          <span className="italic text-[#5a8a5a]">
            # float → int: drops the decimal
          </span>
          {"\n"}
          <span className="text-[#c0622b]">price</span>
          <span className="text-gray-900"> = </span>
          <span className="text-teal-700">9.99</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="font-semibold text-[#8b2070]">int</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">price</span>
          <span className="text-gray-900">))      </span>
          <span className="italic text-[#5a8a5a]"># 9  (not rounded!)</span>
        </CodeExercisePanel>
        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
          <span>
            Notice that <code className="font-mono text-xs">int(9.99)</code> gives{" "}
            <code className="font-mono text-xs">9</code>, not{" "}
            <code className="font-mono text-xs">10</code>.{" "}
            <code className="font-mono text-xs">int()</code> always{" "}
            <strong>truncates</strong> (chops off) the decimal — it does not round.
            Use <code className="font-mono text-xs">round()</code> if you need
            rounding.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="red">Watch out</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Not every string can be cast
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          You can only convert strings that actually look like the target type.
          If the string contains letters or symbols, Python can&apos;t interpret
          it as a number and will throw a{" "}
          <code className="font-mono text-xs">ValueError</code>.
        </p>
        <CodeExercisePanel practiceIndex={1} filename="error_example.py">
          <span className="font-semibold text-[#8b2070]">int</span>
          <span className="text-gray-900">(</span>
          <span className="text-green-700">&quot;hello&quot;</span>
          <span className="text-gray-900">)   </span>
          <span className="italic text-[#5a8a5a]">
            # ❌ ValueError — &quot;hello&quot; is not a number
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">int</span>
          <span className="text-gray-900">(</span>
          <span className="text-green-700">&quot;21&quot;</span>
          <span className="text-gray-900">)     </span>
          <span className="italic text-[#5a8a5a]"># ✓ fine — looks like a number</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">int</span>
          <span className="text-gray-900">(</span>
          <span className="text-green-700">&quot;21.5&quot;</span>
          <span className="text-gray-900">)   </span>
          <span className="italic text-[#5a8a5a]">
            # ❌ ValueError — use float() first
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">float</span>
          <span className="text-gray-900">(</span>
          <span className="text-green-700">&quot;21.5&quot;</span>
          <span className="text-gray-900">) </span>
          <span className="italic text-[#5a8a5a]"># ✓ fine</span>
        </CodeExercisePanel>
        <div className="mt-3 flex items-start gap-3 rounded-xl border border-red-300/50 bg-red-50 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-[13.5px] leading-relaxed text-gray-600">
            <strong className="text-red-800">Rule:</strong> Before casting user
            input, make sure it actually contains what you expect. Later
            you&apos;ll learn to handle bad input with{" "}
            <code className="font-mono text-xs">try / except</code> — for now,
            just be aware that casting can fail and test with known values while
            learning.
          </p>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      <section>
        <h3 className="mb-2.5 text-base font-semibold tracking-tight text-gray-900">
          Quick reference
        </h3>
        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-black/[0.05]">
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Expression
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Works?
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {REF_ROWS.map((row) => (
                <tr
                  key={row.expr}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[12.5px] text-gray-900">
                    {row.expr}
                  </td>
                  <td className="px-3 py-2.5">{row.result}</td>
                  <td className="px-3 py-2.5">
                    {row.ok ? (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-semibold text-green-800">
                        ✓ ok
                      </span>
                    ) : (
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-semibold text-red-700">
                        ✗ error
                      </span>
                    )}
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
