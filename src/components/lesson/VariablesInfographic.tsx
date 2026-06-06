"use client";

import {
  AlertTriangle,
  Brain,
  Lightbulb,
  Pin,
} from "lucide-react";

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

function Annotation({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function VarBox({
  name,
  value,
  labelVariant,
  valueVariant,
}: {
  name: string;
  value: string;
  labelVariant: "purple" | "blue" | "green";
  valueVariant: "str" | "num";
}) {
  const labelStyles = {
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    green: "bg-green-100 text-green-800 border-green-200",
  };
  const valueStyles = {
    str: "text-blue-700",
    num: "text-[#c0622b]",
  };

  return (
    <div className="flex min-w-[110px] flex-col items-center">
      <div
        className={`w-full rounded-t-md border border-b-0 px-3.5 py-1.5 text-center font-mono text-xs font-semibold ${labelStyles[labelVariant]}`}
      >
        {name}
      </div>
      <div className="py-0.5 text-[13px] text-gray-400">↓</div>
      <div
        className={`w-full rounded-b-lg border border-black/15 bg-white/70 px-3.5 py-2 text-center font-mono text-[13px] ${valueStyles[valueVariant]}`}
      >
        {value}
      </div>
    </div>
  );
}

const NAMING_RULES = [
  {
    icon: "✅",
    content: (
      <>
        Use <strong>letters, numbers, and underscores</strong> — no spaces
        allowed.
        <br />
        <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs text-green-800">
          player_score
        </code>{" "}
        <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs text-green-800">
          user1
        </code>{" "}
        <code className="rounded bg-red-100 px-1 py-0.5 font-mono text-xs text-red-700">
          player score
        </code>{" "}
        <span className="text-xs text-red-600">← space → error</span>
      </>
    ),
  },
  {
    icon: "🔢",
    content: (
      <>
        Must <strong>start with a letter or underscore</strong> — never a
        number.
        <br />
        <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs text-green-800">
          _count
        </code>{" "}
        <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs text-green-800">
          total2
        </code>{" "}
        <code className="rounded bg-red-100 px-1 py-0.5 font-mono text-xs text-red-700">
          2total
        </code>{" "}
        <span className="text-xs text-red-600">← starts with number → error</span>
      </>
    ),
  },
  {
    icon: "🔡",
    content: (
      <>
        Python is <strong>case-sensitive</strong> — uppercase and lowercase are
        treated as completely different names.
        <br />
        <code className="font-mono text-xs">age</code>,{" "}
        <code className="font-mono text-xs">Age</code>, and{" "}
        <code className="font-mono text-xs">AGE</code> are{" "}
        <em>three different variables</em>.
      </>
    ),
  },
  {
    icon: "🏷️",
    content: (
      <>
        Use <strong>snake_case</strong> for multi-word names (lowercase with
        underscores) — it&apos;s the Python convention.
        <br />
        <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs text-green-800">
          user_name
        </code>{" "}
        <code className="rounded bg-green-100 px-1 py-0.5 font-mono text-xs text-green-800">
          total_score
        </code>{" "}
        <code className="rounded bg-amber-100 px-1 py-0.5 font-mono text-xs text-amber-900">
          userName
        </code>{" "}
        <span className="text-xs text-amber-800">← works but not idiomatic</span>
      </>
    ),
  },
] as const;

const REF_ROWS = [
  {
    name: "user_name",
    valid: "ok" as const,
    reason: "Letters + underscore — perfect snake_case",
  },
  {
    name: "score2",
    valid: "ok" as const,
    reason: "Starts with a letter, number at the end is fine",
  },
  {
    name: "_temp",
    valid: "ok" as const,
    reason: "Underscore start is allowed (common for internal vars)",
  },
  {
    name: "2fast",
    valid: "no" as const,
    reason: "Starts with a number — not allowed",
  },
  {
    name: "my score",
    valid: "no" as const,
    reason: (
      <>
        Space in the middle — use{" "}
        <code className="font-mono text-xs">my_score</code> instead
      </>
    ),
  },
  {
    name: "Age vs age",
    valid: "warn" as const,
    reason: "Case-sensitive — these are two separate variables",
  },
] as const;

function ValidBadge({ valid }: { valid: "ok" | "no" | "warn" }) {
  if (valid === "ok") {
    return (
      <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-semibold text-green-800">
        ✓ ok
      </span>
    );
  }
  if (valid === "no") {
    return (
      <span className="rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-semibold text-red-700">
        ✗ error
      </span>
    );
  }
  return (
    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-900">
      ⚠ different
    </span>
  );
}

export function VariablesInfographic() {
  return (
    <div className="py-2">
      <div className="mb-10 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          Python Variables
        </h2>
        <p className="mt-0.5 text-[13px] text-gray-500">
          How to store, label, and update values in your program
        </p>
      </div>

      <section className="mb-8">
        <SectionLabel variant="purple">Concept</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Creating a variable
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          A variable is a named container that holds a value. You create one with
          a name, an{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[13px]">
            =
          </code>{" "}
          sign, and the value you want to store. The name should describe
          what&apos;s inside — like labeling a box before you put something in
          it.
        </p>
        <CodeWindow filename="variables.py">
          <span className="text-[#c0622b]">name</span>
          <span className="text-gray-900">  = </span>
          <span className="text-blue-700">&quot;Asha&quot;</span>
          <span className="italic text-[#5a8a5a]">   # stores text</span>
          {"\n"}
          <span className="text-[#c0622b]">age</span>
          <span className="text-gray-900">   = </span>
          <span className="text-gray-900">20</span>
          <span className="italic text-[#5a8a5a]">      # stores a number</span>
          {"\n"}
          <span className="text-[#c0622b]">score</span>
          <span className="text-gray-900"> = </span>
          <span className="text-gray-900">98.5</span>
          <span className="italic text-[#5a8a5a]">    # stores a decimal</span>
          {"\n\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">name</span>
          <span className="text-gray-900">)    </span>
          <span className="italic text-[#5a8a5a]"># output: Asha</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">age</span>
          <span className="text-gray-900">)     </span>
          <span className="italic text-[#5a8a5a]"># output: 20</span>
        </CodeWindow>
        <Annotation icon={<Lightbulb className="h-4 w-4 text-amber-500" />}>
          The <code className="font-mono text-xs">=</code> here is not
          &quot;equals&quot; like in math — it means{" "}
          <strong>&quot;store this value&quot;</strong>. Read it as:{" "}
          <em>&quot;name gets the value Asha&quot;</em>.
        </Annotation>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="blue">Mental model</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Variables are labeled boxes
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Think of memory as a row of boxes. Each variable is a box with a label
          (the name) and something inside (the value). When you use the variable
          name in code, Python opens that box and uses what&apos;s inside.
        </p>
        <div className="my-3.5 flex flex-wrap gap-3.5">
          <VarBox name="name" value='"Asha"' labelVariant="purple" valueVariant="str" />
          <VarBox name="age" value="20" labelVariant="blue" valueVariant="num" />
          <VarBox name="score" value="98.5" labelVariant="green" valueVariant="num" />
        </div>
        <Annotation icon={<Pin className="h-4 w-4 text-blue-600" />}>
          When you write{" "}
          <code className="font-mono text-xs">print(name)</code>, Python looks
          up the box labeled <code className="font-mono text-xs">name</code> and
          prints whatever is inside —{" "}
          <code className="font-mono text-xs">&quot;Asha&quot;</code> in this
          case.
        </Annotation>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="green">Updating</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Changing a variable
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          You can replace the value in a box at any time — just assign a new
          value to the same name. The old value is gone. Python always uses
          whatever was stored most recently.
        </p>
        <CodeWindow filename="update.py">
          <span className="text-[#c0622b]">score</span>
          <span className="text-gray-900"> = </span>
          <span className="text-gray-900">10</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">score</span>
          <span className="text-gray-900">)   </span>
          <span className="italic text-[#5a8a5a]"># output: 10</span>
          {"\n\n"}
          <span className="text-[#c0622b]">score</span>
          <span className="text-gray-900"> = </span>
          <span className="text-gray-900">15</span>
          <span className="italic text-[#5a8a5a]">    # updated! old value replaced</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#c0622b]">score</span>
          <span className="text-gray-900">)   </span>
          <span className="italic text-[#5a8a5a]"># output: 15</span>
        </CodeWindow>
        <div className="mt-3.5 flex max-w-[280px] flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className="min-w-[54px] text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Before
            </span>
            <span className="text-lg">📦</span>
            <div className="rounded-lg border border-red-300/50 bg-red-50 px-3.5 py-1.5 font-mono text-[13px] text-gray-500 line-through">
              score = 10
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="min-w-[54px] text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              After
            </span>
            <span className="text-lg">📦</span>
            <div className="rounded-lg border border-green-300/50 bg-green-50 px-3.5 py-1.5 font-mono text-[13px] font-semibold text-green-800">
              score = 15
            </div>
          </div>
        </div>
        <Annotation icon={<AlertTriangle className="h-4 w-4 text-amber-600" />}>
          The old value (<code className="font-mono text-xs">10</code>) is
          completely gone once you reassign. If you need to keep it, store it in
          a different variable first.
        </Annotation>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="amber">Rules</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Naming rules you must follow
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Python has strict rules for variable names. Break these and your code
          will error before it even runs.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {NAMING_RULES.map((rule) => (
            <div
              key={rule.icon}
              className="flex items-start gap-3 rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5 text-[13.5px]"
            >
              <span className="mt-0.5 shrink-0 text-base">{rule.icon}</span>
              <div className="leading-relaxed text-gray-600">{rule.content}</div>
            </div>
          ))}
        </div>
        <div className="mt-3.5 flex items-start gap-3 rounded-xl border border-purple-200/60 bg-purple-50 p-4">
          <Brain className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />
          <p className="text-[13.5px] leading-relaxed text-gray-600">
            <strong className="text-purple-800">
              Pick names that speak for themselves.
            </strong>{" "}
            A future reader (including you, 3 months from now) should instantly
            know what a variable holds.{" "}
            <code className="font-mono text-[12.5px]">x</code> tells you nothing.{" "}
            <code className="font-mono text-[12.5px]">player_health</code> tells
            you everything.
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
                  Name
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Valid?
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {REF_ROWS.map((row) => (
                <tr key={row.name} className="border-b border-black/10 last:border-b-0">
                  <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[12.5px] text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-3 py-2.5">
                    <ValidBadge valid={row.valid} />
                  </td>
                  <td className="px-3 py-2.5">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
