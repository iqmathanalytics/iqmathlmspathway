"use client";

import { ArrowRight, Lightbulb, MapPin, Play, Plus } from "lucide-react";
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

const OPERATORS = [
  {
    symbol: "+",
    name: "Addition",
    note: "Adds two values together",
    example: "10 + 3",
    result: "→ 13",
    symbolClass: "text-[#2d7a45]",
  },
  {
    symbol: "-",
    name: "Subtraction",
    note: "Subtracts the right from the left",
    example: "10 - 3",
    result: "→ 7",
    symbolClass: "text-[#b83232]",
  },
  {
    symbol: "*",
    name: "Multiplication",
    note: "Multiplies two values",
    example: "10 * 3",
    result: "→ 30",
    symbolClass: "text-[#1a5fb4]",
  },
  {
    symbol: "/",
    name: "Division",
    note: "Always returns a float, even if it divides evenly",
    example: "10 / 3",
    result: "→ 3.333...",
    symbolClass: "text-[#0f6e56]",
  },
  {
    symbol: "//",
    name: "Floor division",
    note: "Divides and drops everything after the decimal",
    example: "10 // 3",
    result: "→ 3",
    symbolClass: "text-[#5e3fa3]",
  },
  {
    symbol: "%",
    name: "Modulo",
    note: "Returns the remainder after division",
    example: "10 % 3",
    result: "→ 1",
    symbolClass: "text-[#8a5a00]",
  },
  {
    symbol: "**",
    name: "Power / exponent",
    note: "Raises the left number to the power of the right",
    example: "2 ** 4",
    result: "→ 16",
    symbolClass: "text-[#c0622b]",
  },
] as const;

const REF_ROWS = [
  { symbol: "+", name: "Addition", example: "10 + 3", result: "13", color: "text-[#2d7a45]" },
  { symbol: "-", name: "Subtraction", example: "10 - 3", result: "7", color: "text-[#b83232]" },
  { symbol: "*", name: "Multiplication", example: "10 * 3", result: "30", color: "text-[#1a5fb4]" },
  { symbol: "/", name: "Division (float)", example: "10 / 3", result: "3.333...", color: "text-[#0f6e56]" },
  { symbol: "//", name: "Floor division", example: "10 // 3", result: "3", color: "text-[#5e3fa3]" },
  { symbol: "%", name: "Modulo (remainder)", example: "10 % 3", result: "1", color: "text-[#8a5a00]" },
  { symbol: "**", name: "Power", example: "2 ** 4", result: "16", color: "text-[#c0622b]" },
] as const;

export function ArithmeticOperatorsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-8 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">Math Operators</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          The seven symbols Python uses for arithmetic — what each one does and
          how they differ
        </p>
      </header>

      {/* Section 1: All operators */}
      <section className="mb-8">
        <SectionLabel variant="blue">
          <Plus className="h-3 w-3" />
          The operators
        </SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Basic math operators
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Python uses familiar symbols for the basics, and a few special ones for
          floor division, remainder, and powers.
        </p>

        <div className="flex flex-col gap-1.5">
          {OPERATORS.map((op) => (
            <div
              key={op.symbol}
              className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5"
            >
              <span
                className={`min-w-8 shrink-0 text-center font-mono text-lg font-semibold ${op.symbolClass}`}
              >
                {op.symbol}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-semibold text-gray-900">
                  {op.name}
                </p>
                <p className="text-[12.5px] text-gray-500">{op.note}</p>
              </div>
              <p className="shrink-0 whitespace-nowrap font-mono text-[13px] text-gray-600">
                {op.example}{" "}
                <span className="text-gray-400">{op.result}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 2: Code */}
      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          All seven in one program
        </h3>

        <CodeExercisePanel practiceIndex={0} filename="operators.py">
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> + </span>
          <span className="text-[#1a5fb4]">3</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]"># 13</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> - </span>
          <span className="text-[#1a5fb4]">3</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]"># 7</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> * </span>
          <span className="text-[#1a5fb4]">3</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]"># 30</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> / </span>
          <span className="text-[#1a5fb4]">3</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]">
            # 3.3333333333333335
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800">{" // "}</span>
          <span className="text-[#1a5fb4]">3</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]"># 3</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">10</span>
          <span className="text-gray-800"> % </span>
          <span className="text-[#1a5fb4]">3</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]"># 1</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(</span>
          <span className="text-[#1a5fb4]">2</span>
          <span className="text-gray-800"> ** </span>
          <span className="text-[#1a5fb4]">4</span>
          <span className="text-gray-800">) </span>
          <span className="italic text-[#5a8a5a]"># 16</span>
        </CodeExercisePanel>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 3: / vs // */}
      <section className="mb-8">
        <SectionLabel variant="teal">Closer look</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            /
          </code>{" "}
          vs{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            {"//"}
          </code>{" "}
          — what&apos;s the difference?
        </h3>
        <p className="mb-3.5 text-[13.5px] leading-relaxed text-gray-600">
          This is the one that trips up beginners most. Both divide — but they
          give different results.
        </p>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-black/15 bg-white/55 p-4 text-center">
            <span className="rounded-md bg-teal-100 px-3 py-1 font-mono text-[15px] font-semibold text-[#0f6e56]">
              /
            </span>
            <span className="font-mono text-lg font-semibold text-gray-900">
              10 / 3
            </span>
            <span className="font-mono text-[22px] font-semibold text-[#0f6e56]">
              3.333...
            </span>
            <span className="text-xs text-gray-500">
              float — keeps everything
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-black/15 bg-white/55 p-4 text-center">
            <span className="rounded-md bg-purple-100 px-3 py-1 font-mono text-[15px] font-semibold text-[#5e3fa3]">
              {"//"}
            </span>
            <span className="font-mono text-lg font-semibold text-gray-900">
              10 // 3
            </span>
            <span className="font-mono text-[22px] font-semibold text-[#5e3fa3]">
              3
            </span>
            <span className="text-xs text-gray-500">
              int — decimal chopped off
            </span>
          </div>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              /
            </code>{" "}
            always gives a float — even{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              10 / 2
            </code>{" "}
            returns{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              5.0
            </code>
            , not{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              5
            </code>
            . Use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              {"//"}
            </code>{" "}
            when you need a clean whole number, like calculating how many full
            boxes fit on a shelf.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Section 4: Modulo */}
      <section className="mb-8">
        <SectionLabel variant="amber">Special case</SectionLabel>
        <h3 className="mb-1.5 text-base font-semibold tracking-tight">
          Understanding{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[12.5px]">
            %
          </code>{" "}
          modulo
        </h3>
        <p className="mb-3.5 text-[13.5px] leading-relaxed text-gray-600">
          Modulo returns what&apos;s <em>left over</em> after dividing as many
          whole times as possible. It&apos;s more useful than it looks.
        </p>

        <div className="rounded-xl border border-amber-300/50 bg-amber-50 px-4 py-3.5 text-[13.5px] leading-relaxed text-gray-600">
          10 ÷ 3 = <strong className="text-[#8a5a00]">3</strong> remainder{" "}
          <strong className="text-[#8a5a00]">1</strong> → so{" "}
          <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-[12.5px] text-[#8a5a00]">
            10 % 3
          </code>{" "}
          gives <strong className="text-[#8a5a00]">1</strong>
        </div>

        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            A very common use: checking if a number is even or odd.{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              number % 2
            </code>{" "}
            returns{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              0
            </code>{" "}
            for even numbers and{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              1
            </code>{" "}
            for odd ones. You&apos;ll use this a lot once you learn{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              if
            </code>{" "}
            statements.
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
                <th className="w-12 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Op
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Name
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {REF_ROWS.map((row) => (
                <tr
                  key={row.symbol}
                  className="border-b border-black/10 last:border-b-0"
                >
                  <td
                    className={`px-3 py-2.5 text-center font-mono text-[15px] font-semibold ${row.color}`}
                  >
                    {row.symbol}
                  </td>
                  <td className="px-3 py-2.5 text-gray-600">{row.name}</td>
                  <td className="px-3 py-2.5 text-gray-600">
                    <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px] text-gray-800">
                      {row.example}
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
