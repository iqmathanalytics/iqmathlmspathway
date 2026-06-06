"use client";

import { ArrowRight, Lightbulb, Search } from "lucide-react";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{children}</h2>
  );
}

function InfoBox({
  title,
  description,
  color,
  className = "",
}: {
  title: string;
  description: string;
  color: "purple" | "green" | "blue" | "teal" | "amber" | "orange" | "red";
  className?: string;
}) {
  const colors = {
    purple: "border-purple-300 bg-purple-50",
    green: "border-green-300 bg-green-50",
    blue: "border-blue-300 bg-blue-50",
    teal: "border-teal-300 bg-teal-50",
    amber: "border-amber-300 bg-amber-50",
    orange: "border-orange-300 bg-orange-50",
    red: "border-red-300 bg-red-50",
  };

  return (
    <div
      className={`rounded-xl border-2 px-4 py-3 text-center ${colors[color]} ${className}`}
    >
      <p className="font-bold text-gray-900">{title}</p>
      <p className="mt-1 text-sm leading-snug text-gray-600">{description}</p>
    </div>
  );
}

function FlowStep({
  step,
  title,
  description,
  color,
}: {
  step: string;
  title: string;
  description: string;
  color: "purple" | "green" | "blue" | "teal";
}) {
  const colors = {
    purple: "border-purple-300 bg-purple-50",
    green: "border-green-300 bg-green-50",
    blue: "border-blue-300 bg-blue-50",
    teal: "border-teal-300 bg-teal-50",
  };

  return (
    <div
      className={`min-w-[140px] flex-1 rounded-xl border-2 px-3 py-3 text-center sm:min-w-[160px] ${colors[color]}`}
    >
      <p className="text-sm font-bold text-gray-900">
        {step}. {title}
      </p>
      <p className="mt-1 text-xs leading-snug text-gray-600 sm:text-sm">
        {description}
      </p>
    </div>
  );
}

export function IntroProgrammingInfographic() {
  return (
    <div className="py-2">
      <section>
        <SectionHeading>What is programming?</SectionHeading>
        <p className="mt-3 text-base text-gray-700 sm:text-lg">
          Programming = writing instructions a computer can follow, step by step.
        </p>
        <div className="mt-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <Search className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div>
            <p className="font-bold text-gray-900">Think of it like a recipe</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-700">
              You write the steps (code). The computer is the chef. It follows
              your recipe exactly.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading>How does a program actually run?</SectionHeading>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <FlowStep
            step="1"
            title="You"
            description="Write instructions in a code file"
            color="purple"
          />
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-brand-500 sm:block" />
          <FlowStep
            step="2"
            title="Translator"
            description="Converts your code to machine language"
            color="green"
          />
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-brand-500 sm:block" />
          <FlowStep
            step="3"
            title="Computer"
            description="Reads and executes each instruction"
            color="blue"
          />
          <ArrowRight className="hidden h-5 w-5 shrink-0 text-brand-500 sm:block" />
          <FlowStep
            step="4"
            title="Result"
            description="Output on screen, file, or action"
            color="teal"
          />
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading>What does code actually look like?</SectionHeading>
        <p className="mt-3 text-gray-700">
          Here is a real Python program. It takes your name and says hello to you.
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-slate-50 px-4 py-2.5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Python code
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            <div className="flex items-start gap-4 px-4 py-4 sm:px-5">
              <span className="w-6 shrink-0 pt-0.5 text-right font-mono text-sm font-semibold text-gray-400">
                1
              </span>
              <div className="min-w-0 flex-1">
                <pre className="overflow-x-auto font-mono text-sm leading-relaxed sm:text-base">
                  <span className="text-python-blue">name</span>
                  <span className="text-gray-800"> = </span>
                  <span className="text-purple-700">input</span>
                  <span className="text-gray-800">(</span>
                  <span className="text-amber-700">
                    &quot;What is your name? &quot;
                  </span>
                  <span className="text-gray-800">)</span>
                </pre>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-medium text-gray-800">Ask the user</span>{" "}
                  for their name and{" "}
                  <span className="font-medium text-gray-800">store it</span> in
                  the variable{" "}
                  <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-python-blue">
                    name
                  </code>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 px-4 py-4 sm:px-5">
              <span className="w-6 shrink-0 pt-0.5 text-right font-mono text-sm font-semibold text-gray-400">
                2
              </span>
              <div className="min-w-0 flex-1">
                <pre className="overflow-x-auto font-mono text-sm leading-relaxed sm:text-base">
                  <span className="text-purple-700">print</span>
                  <span className="text-gray-800">(</span>
                  <span className="text-amber-700">&quot;Hello, &quot;</span>
                  <span className="text-gray-800"> + </span>
                  <span className="text-python-blue">name</span>
                  <span className="text-gray-800">)</span>
                </pre>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-medium text-gray-800">Show on screen</span>{" "}
                  a greeting using the stored name.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="border-b border-gray-200 bg-slate-50 px-4 py-2.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Output (what you see when it runs)
              </p>
            </div>
            <div className="space-y-1 bg-gray-900 px-4 py-4 font-mono text-sm leading-relaxed text-gray-300 sm:px-5 sm:text-base">
              <p>
                <span className="text-gray-500">→</span> What is your name?{" "}
                <span className="text-white">Alex</span>
              </p>
              <p>
                <span className="text-gray-500">→</span>{" "}
                <span className="text-green-300">Hello, Alex!</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-purple-200 bg-purple-50 px-3 py-2.5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
              Store a value
            </p>
            <p className="mt-1 font-mono text-sm text-gray-800">name =</p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              Ask the user
            </p>
            <p className="mt-1 font-mono text-sm text-gray-800">input(...)</p>
          </div>
          <div className="rounded-lg border border-teal-200 bg-teal-50 px-3 py-2.5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Show on screen
            </p>
            <p className="mt-1 font-mono text-sm text-gray-800">print(...)</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading>The 5 building blocks of all programs</SectionHeading>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <InfoBox
            title="Variables"
            description="Like a labelled box that stores a value"
            color="purple"
          />
          <InfoBox
            title="Conditions"
            description="If this → do that else do something else"
            color="blue"
          />
          <InfoBox
            title="Loops"
            description="Repeat a task many times automatically"
            color="teal"
          />
        </div>
        <div className="mt-3 grid gap-3 sm:mx-auto sm:max-w-xl sm:grid-cols-2">
          <InfoBox
            title="Functions"
            description="A reusable block of instructions with a name"
            color="amber"
          />
          <InfoBox
            title="Data types"
            description="Numbers, text, lists — kinds of values you store"
            color="orange"
          />
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading>Errors — they are totally normal!</SectionHeading>
        <p className="mt-3 text-gray-700">
          Every programmer, beginner or expert, writes broken code first. That
          is part of the process.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <InfoBox
            title="Syntax error"
            description="A typo in your code (like a grammar mistake)"
            color="red"
          />
          <InfoBox
            title="Runtime error"
            description="Code runs but crashes (like dividing by zero)"
            color="amber"
          />
          <InfoBox
            title="Logic error"
            description="Code runs but gives the wrong answer"
            color="blue"
          />
        </div>
        <div className="mt-4 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <div>
            <p className="font-bold text-gray-900">
              Tip: fixing errors (called debugging) is how you learn the fastest
            </p>
            <p className="mt-1 text-sm leading-relaxed text-gray-700">
              Every error message is a clue. Read it carefully — it tells you
              what went wrong.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading>Which language should you learn first?</SectionHeading>
        <p className="mt-3 text-gray-700">
          Different languages are used for different things. Here are the most
          beginner-friendly ones:
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <InfoBox
            title="Python"
            description="Best for beginners, AI, data, automation"
            color="teal"
          />
          <InfoBox
            title="JavaScript"
            description="Makes websites interactive, runs in the browser"
            color="orange"
          />
          <InfoBox
            title="Scratch"
            description="Visual blocks, great for kids and absolute beginners"
            color="purple"
          />
        </div>
      </section>

      <footer className="mt-10 border-t border-gray-200 pt-6 text-center">
        <p className="text-sm text-gray-500">Click any box above to learn more ↑</p>
        <p className="mt-4 text-base text-gray-600">
          Programming is just giving very clear instructions. The more you
          practise, the more natural it feels.
        </p>
      </footer>
    </div>
  );
}
