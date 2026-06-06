"use client";

import { Brain, Lightbulb, Pin } from "lucide-react";

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "purple" | "green" | "amber";
}) {
  const styles = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
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

export function CommentsInfographic() {
  return (
    <div className="py-2">
      <div className="mb-10 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          Python Comments
        </h2>
        <p className="mt-0.5 text-[13px] text-gray-500">
          A beginner&apos;s guide — what they are, how to write them, and when
          to use them
        </p>
      </div>

      <section className="mb-8">
        <SectionLabel variant="purple"># Type 1</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Single-line comment
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Start any line with a{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[13px]">
            #
          </code>{" "}
          symbol. Python ignores everything after it on that line — you can also
          put it at the end of a line of code.
        </p>
        <CodeWindow filename="example.py">
          <span className="italic text-[#5a8a5a]"># Step 1: greet the user</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#1a5fb4]">&quot;Hello, World!&quot;</span>
          <span className="text-gray-900">)  </span>
          <span className="italic text-[#5a8a5a]">
            # this still runs — comment is after the code
          </span>
          {"\n"}
          <span className="text-gray-900">age</span>
          <span className="text-gray-900"> = </span>
          <span className="text-gray-900">25</span>
          <span className="text-gray-900">  </span>
          <span className="italic text-[#5a8a5a]">
            # storing the user&apos;s age
          </span>
        </CodeWindow>
        <Annotation icon={<Lightbulb className="h-4 w-4 text-amber-500" />}>
          The green italic text is the comment — it&apos;s only there for{" "}
          <em>you</em> (and other humans). Python skips right past it when
          running your program.
        </Annotation>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="green">&quot;&quot;&quot; Type 2</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Multi-line comment (doc style)
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          For longer notes — like explaining what a whole file does — wrap your
          text in triple quotes{" "}
          <code className="rounded bg-black/[0.07] px-1.5 py-0.5 font-mono text-[13px]">
            &quot;&quot;&quot;
          </code>
          . Python creates a string from it but ignores it since you never assign
          it to anything.
        </p>
        <CodeWindow filename="welcome.py">
          <span className="italic text-[#5a8a5a]">
            {`"""
This program displays a welcome message.
It runs when the app first starts.
Author: Sanjay | June 2025
"""`}
          </span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-900">(</span>
          <span className="text-[#1a5fb4]">&quot;Welcome to the app!&quot;</span>
          <span className="text-gray-900">)</span>
        </CodeWindow>
        <Annotation icon={<Pin className="h-4 w-4 text-blue-600" />}>
          You&apos;ll mostly see triple-quote blocks at the very top of a file,
          or just inside a function to describe what it does. These are also
          called <strong>docstrings</strong>.
        </Annotation>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="amber">Behind the scenes</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          What Python actually does with comments
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Python processes your file in two stages. Comments are stripped out
          first — they never reach the part that actually runs your code.
          There&apos;s no speed cost, no errors, nothing.
        </p>
        <div className="my-3.5 flex flex-wrap items-center gap-2.5">
          <div className="rounded-lg border border-black/15 bg-white/55 px-4 py-2 text-center text-[13px] font-medium text-gray-900">
            Your file
            <br />
            <small className="font-normal text-gray-500">code + comments</small>
          </div>
          <span className="text-lg text-gray-400">→</span>
          <div className="rounded-lg border border-red-300/50 bg-red-50 px-4 py-2 text-center text-[13px] font-medium text-red-700">
            Comments
            <br />
            <small>stripped out</small>
          </div>
          <span className="text-lg text-gray-400">→</span>
          <div className="rounded-lg border border-green-300/50 bg-green-50 px-4 py-2 text-center text-[13px] font-medium text-green-800">
            Real code
            <br />
            <small>runs ✓</small>
          </div>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      <section className="mb-8">
        <SectionLabel variant="purple">Writing well</SectionLabel>
        <h3 className="text-base font-semibold tracking-tight text-gray-900">
          Good comments explain <em>why</em>, not <em>what</em>
        </h3>
        <p className="mb-3 mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
          Anyone reading your code can see <em>what</em> it does. A good comment
          tells them something the code can&apos;t — the reason behind your
          decision.
        </p>
        <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
          <div className="flex-1 rounded-lg border border-red-300/40 bg-red-50 p-3.5 text-[13px] leading-relaxed text-red-800">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wide">
              Avoid
            </p>
            <code className="mb-1 block font-mono text-[12.5px]">
              # multiply x by 365
            </code>
            <span className="text-xs opacity-80">
              This just restates what the code does. Anyone can already see that.
            </span>
          </div>
          <div className="flex-1 rounded-lg border border-green-300/40 bg-green-50 p-3.5 text-[13px] leading-relaxed text-green-800">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wide">
              Prefer
            </p>
            <code className="mb-1 block font-mono text-[12.5px]">
              # convert age to days for the chart
            </code>
            <span className="text-xs opacity-80">
              This explains the <em>purpose</em> — something the code alone
              doesn&apos;t tell you.
            </span>
          </div>
        </div>
        <div className="mt-3.5 flex items-start gap-3 rounded-xl border border-purple-200/60 bg-purple-50 p-4">
          <Brain className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />
          <p className="text-[13.5px] leading-relaxed text-gray-600">
            <strong className="text-purple-800">Rule of thumb:</strong> Imagine
            coming back to this code 3 months later — would the comment tell you
            something you couldn&apos;t figure out in 5 seconds? If yes, keep it.
            If no, delete it. Comments that state the obvious just add clutter.
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
                  Syntax
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  When to use it
                </th>
                <th className="border-b border-black/15 px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-black/10">
                <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[12.5px] text-[#5a8a5a]">
                  # comment
                </td>
                <td className="px-3 py-2.5">Short note on one line</td>
                <td className="px-3 py-2.5">
                  <code className="font-mono text-xs"># max speed in km/h</code>
                </td>
              </tr>
              <tr className="border-b border-black/10">
                <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[12.5px] text-[#5a8a5a]">
                  code # comment
                </td>
                <td className="px-3 py-2.5">Inline note after code</td>
                <td className="px-3 py-2.5">
                  <code className="font-mono text-xs">speed = 120 # km/h</code>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[12.5px] text-[#5a8a5a]">
                  &quot;&quot;&quot; ... &quot;&quot;&quot;
                </td>
                <td className="px-3 py-2.5">
                  Multi-line description at top of file or function
                </td>
                <td className="px-3 py-2.5">
                  <code className="font-mono text-xs">
                    &quot;&quot;&quot;Handles user login.&quot;&quot;&quot;
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
