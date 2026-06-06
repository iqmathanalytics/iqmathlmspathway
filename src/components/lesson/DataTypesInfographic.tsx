"use client";

import { AlertTriangle, Brain } from "lucide-react";

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "purple" | "green" | "blue" | "amber";
}) {
  const styles = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-900",
  };
  return (
    <span
      className={`mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
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
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3.5 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-[11px] text-gray-500">
          {filename}
        </span>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
  );
}

const TYPE_CARDS = [
  {
    type: "int",
    badge: "int",
    name: "Integer",
    desc: "Whole numbers — no decimal point. Used for counting, ages, scores, IDs.",
    examples: "7   -3   0   1000",
    badgeClass: "bg-blue-100 text-blue-800",
    examplesClass: "text-blue-700",
  },
  {
    type: "float",
    badge: "float",
    name: "Float",
    desc: "Numbers with a decimal point. Used for prices, measurements, percentages.",
    examples: "3.14   9.99   -0.5   2.0",
    badgeClass: "bg-teal-100 text-teal-800",
    examplesClass: "text-teal-700",
  },
  {
    type: "str",
    badge: "str",
    name: "String",
    desc: "Any text wrapped in quotes. Names, messages, file paths, anything written.",
    examples: '"hello"   "Sam"   "42"',
    badgeClass: "bg-green-100 text-green-800",
    examplesClass: "text-green-700",
  },
  {
    type: "bool",
    badge: "bool",
    name: "Boolean",
    desc: (
      <>
        Only two possible values: <strong>True</strong> or <strong>False</strong>.
        Used in conditions and logic.
      </>
    ),
    examples: "True   False",
    badgeClass: "bg-amber-100 text-amber-900",
    examplesClass: "text-amber-800",
  },
] as const;

const TYPE_CHIPS = [
  { var: "age", type: "int", chipClass: "bg-blue-50 border-blue-200 text-blue-800" },
  {
    var: "price",
    type: "float",
    chipClass: "bg-teal-50 border-teal-200 text-teal-800",
  },
  { var: "name", type: "str", chipClass: "bg-green-50 border-green-200 text-green-800" },
  {
    var: "is_student",
    type: "bool",
    chipClass: "bg-amber-50 border-amber-200 text-amber-900",
  },
] as const;

const REF_ROWS = [
  {
    type: "int",
    typeClass: "text-blue-700",
    stores: "Whole numbers",
    examples: (
      <>
        <code className="font-mono text-xs">5</code>,{" "}
        <code className="font-mono text-xs">-3</code>,{" "}
        <code className="font-mono text-xs">0</code>
      </>
    ),
    use: "Age, count, score, ID",
  },
  {
    type: "float",
    typeClass: "text-teal-700",
    stores: "Decimal numbers",
    examples: (
      <>
        <code className="font-mono text-xs">3.14</code>,{" "}
        <code className="font-mono text-xs">9.99</code>
      </>
    ),
    use: "Price, weight, percentage",
  },
  {
    type: "str",
    typeClass: "text-green-700",
    stores: "Text in quotes",
    examples: (
      <>
        <code className="font-mono text-xs">&quot;hello&quot;</code>,{" "}
        <code className="font-mono text-xs">&quot;Sam&quot;</code>
      </>
    ),
    use: "Names, messages, labels",
  },
  {
    type: "bool",
    typeClass: "text-amber-800",
    stores: "True or False only",
    examples: (
      <>
        <code className="font-mono text-xs">True</code>,{" "}
        <code className="font-mono text-xs">False</code>
      </>
    ),
    use: "Conditions, flags, switches",
  },
] as const;

export function DataTypesInfographic() {
  return (
    <div className="py-2">
      <div className="mb-10 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          Python Data Types
        </h2>
        <p className="mt-0.5 text-[13px] text-gray-500">
          The four types you&apos;ll use first — what they are and when to use
          each one
        </p>
      </div>

      <section className="mb-8">
        <SectionLabel variant="blue">Core types</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          The four essential types
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Every value in Python has a type — it tells Python what kind of data it
          is and what you can do with it. These four cover almost everything
          you&apos;ll need as a beginner.
        </p>
        <div className="my-3.5 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2.5">
          {TYPE_CARDS.map((card) => (
            <div
              key={card.type}
              className="flex flex-col gap-1.5 rounded-xl border border-black/15 bg-white/55 p-3.5"
            >
              <span
                className={`inline-block w-fit rounded-md px-2.5 py-0.5 font-mono text-sm font-semibold ${card.badgeClass}`}
              >
                {card.badge}
              </span>
              <p className="text-[13px] font-medium text-gray-900">
                {card.name}
              </p>
              <p className="text-[12.5px] leading-snug text-gray-600">
                {card.desc}
              </p>
              <p
                className={`mt-0.5 font-mono text-xs ${card.examplesClass}`}
              >
                {card.examples}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <span>
            Notice: <code className="font-mono text-xs">&quot;42&quot;</code>{" "}
            (with quotes) is a <strong>string</strong> — Python treats it as
            text, not a number. You can&apos;t do math on it.{" "}
            <code className="font-mono text-xs">42</code> without quotes is an{" "}
            <strong>int</strong>. The quotes make all the difference.
          </span>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="green">In code</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          All four types in one program
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Python figures out the type automatically when you assign a value —
          you never have to declare it yourself. This is called{" "}
          <em>dynamic typing</em>.
        </p>
        <CodeWindow filename="types.py">
          <span className="text-[#c0622b]">age</span>
          <span className="text-gray-900">        = </span>
          <span className="text-blue-700">25</span>
          <span className="italic text-[#5a8a5a]">           # int   — whole number</span>
          {"\n"}
          <span className="text-[#c0622b]">price</span>
          <span className="text-gray-900">      = </span>
          <span className="text-teal-700">9.99</span>
          <span className="italic text-[#5a8a5a]">         # float — has a decimal</span>
          {"\n"}
          <span className="text-[#c0622b]">name</span>
          <span className="text-gray-900">       = </span>
          <span className="text-green-700">&quot;Sam&quot;</span>
          <span className="italic text-[#5a8a5a]">         # str   — text in quotes</span>
          {"\n"}
          <span className="text-[#c0622b]">is_student</span>
          <span className="text-gray-900"> = </span>
          <span className="font-semibold text-amber-800">True</span>
          <span className="italic text-[#5a8a5a]">         # bool  — True or False</span>
          {"\n\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="font-semibold text-[#8b2070]">type</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">age</span>
          <span className="text-gray-900">))        </span>
          <span className="italic text-[#5a8a5a]"># &lt;class &apos;int&apos;&gt;</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="font-semibold text-[#8b2070]">type</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">price</span>
          <span className="text-gray-900">))      </span>
          <span className="italic text-[#5a8a5a]"># &lt;class &apos;float&apos;&gt;</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="font-semibold text-[#8b2070]">type</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">name</span>
          <span className="text-gray-900">))       </span>
          <span className="italic text-[#5a8a5a]"># &lt;class &apos;str&apos;&gt;</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="font-semibold text-[#8b2070]">type</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">is_student</span>
          <span className="text-gray-900">)) </span>
          <span className="italic text-[#5a8a5a]"># &lt;class &apos;bool&apos;&gt;</span>
        </CodeWindow>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="purple">Checking types</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          What <code className="font-mono text-sm">type()</code> gives you
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          The built-in <code className="font-mono text-xs">type()</code> function
          tells you exactly what kind of value something is. You&apos;ll use it
          constantly while learning and debugging — just wrap any value or
          variable in it.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {TYPE_CHIPS.map((chip) => (
            <div
              key={chip.var}
              className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-[12.5px] ${chip.chipClass}`}
            >
              <span className="text-[11px] text-gray-500">{chip.var} →</span>
              <span className="font-semibold">
                &lt;class &apos;{chip.type}&apos;&gt;
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3.5 flex items-start gap-3 rounded-xl border border-purple-200/60 bg-purple-50 p-4">
          <Brain className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />
          <p className="text-[13.5px] leading-relaxed text-gray-600">
            <strong className="text-purple-800">Tip:</strong> When something
            isn&apos;t behaving the way you expect, the first thing to check is
            the type. Trying to add a number and a string, for example, is a
            very common beginner error —{" "}
            <code className="font-mono text-xs">type()</code> will reveal the
            mismatch immediately.
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
                  Type
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  What it stores
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example values
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Common use
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {REF_ROWS.map((row) => (
                <tr key={row.type} className="border-b border-black/10 last:border-b-0">
                  <td
                    className={`whitespace-nowrap px-3 py-2.5 font-mono text-[12.5px] font-semibold ${row.typeClass}`}
                  >
                    {row.type}
                  </td>
                  <td className="px-3 py-2.5">{row.stores}</td>
                  <td className="px-3 py-2.5">{row.examples}</td>
                  <td className="px-3 py-2.5">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
