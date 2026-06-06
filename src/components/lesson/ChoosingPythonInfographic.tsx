"use client";

import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  CircleCheck,
  Code2,
  Database,
  Lightbulb,
  MapPin,
  Package,
  Rocket,
  Terminal,
  TrendingUp,
  Users,
  Variable,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-[#888780]">
      {children}
    </p>
  );
}

const JOURNEY_STEPS = [
  {
    icon: MapPin,
    label: "You are here! Python basics",
    you: true,
    active: false,
  },
  {
    icon: Variable,
    label: "Variables, loops, functions",
    you: false,
    active: false,
  },
  {
    icon: Package,
    label: "Libraries: NumPy, Pandas",
    you: false,
    active: false,
  },
  {
    icon: BarChart3,
    label: "Charts: Matplotlib, Seaborn",
    you: false,
    active: false,
  },
  {
    icon: Database,
    label: "Data Science: real world data",
    you: false,
    active: true,
  },
] as const;

const WHY_CARDS = [
  {
    icon: BookOpen,
    color: "#534AB7",
    title: "Reads like English",
    desc: "Python code is written close to how you'd describe steps out loud — no special symbols to memorize upfront.",
  },
  {
    icon: Users,
    color: "#1D9E75",
    title: "Huge community",
    desc: "Millions of tutorials, forums, and answers online. Whatever question you have, someone has already answered it.",
  },
  {
    icon: Rocket,
    color: "#D85A30",
    title: "Used everywhere",
    desc: "Data science, AI, web apps, automation — Python powers them all. One language, endless possibilities.",
  },
  {
    icon: TrendingUp,
    color: "#BA7517",
    title: "Builds toward data science",
    desc: "This path leads you to NumPy, Pandas, and visualization tools — the core of modern data analysis.",
  },
] as const;

export function ChoosingPythonInfographic() {
  return (
    <div className="py-2">
      <div className="mb-6 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-[26px] font-medium text-[#1a1a18]">Why Python?</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-[#5f5e5a]">
          Python is the most popular language for beginners — and for good
          reason. It reads almost like plain English, so you spend less time
          figuring out strange symbols and more time actually learning to think
          like a programmer.
        </p>
      </div>

      <section className="mb-6">
        <SectionLabel>Python vs other languages</SectionLabel>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
            <div className="flex items-center gap-2 border-b border-black/10 bg-[#fafaf8] px-3.5 py-2.5">
              <Code2 className="h-4 w-4 text-[#888780]" />
              <span className="text-[13px] font-medium text-[#5f5e5a]">Java</span>
              <span className="ml-auto rounded-full bg-[#FAC775] px-2 py-0.5 text-[11px] font-medium text-[#633806]">
                verbose
              </span>
            </div>
            <pre className="overflow-x-auto whitespace-pre p-3.5 font-mono text-[13px] leading-relaxed text-[#1a1a18]">
              <span className="text-[#185FA5]">public class</span> Main {"{"}
              {"\n"}  <span className="text-[#185FA5]">public static void</span>{" "}
              <span className="text-[#3B6D11]">main</span>(
              {"\n"}    String[] args) {"{"}
              {"\n"}    System.out.
              <span className="text-[#3B6D11]">println</span>(
              {"\n"}      <span className="text-[#993C1D]">&quot;Hi&quot;</span>);
              {"\n"}  {"}"}
              {"\n"}{"}"}
            </pre>
            <div className="flex items-start gap-2.5 border-t border-black/[0.08] px-3.5 py-2.5 text-[13px] leading-snug text-[#5f5e5a]">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#A32D2D]" />
              <span>
                7 lines just to print &quot;Hi&quot; — confusing for day one.
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#5DCAA5] bg-white">
            <div className="flex items-center gap-2 border-b border-black/10 bg-[#fafaf8] px-3.5 py-2.5">
              <Terminal className="h-4 w-4 text-[#1D9E75]" />
              <span className="text-[13px] font-medium text-[#5f5e5a]">
                Python
              </span>
              <span className="ml-auto rounded-full bg-[#9FE1CB] px-2 py-0.5 text-[11px] font-medium text-[#085041]">
                beginner-friendly
              </span>
            </div>
            <pre className="overflow-x-auto whitespace-pre p-3.5 font-mono text-[13px] leading-relaxed text-[#1a1a18]">
              <span className="text-[#3B6D11]">print</span>(
              <span className="text-[#993C1D]">&quot;Hi&quot;</span>)
              {"\n\n"}
              <span className="text-[#888780]">
                # That&apos;s it! One line.
              </span>
              {"\n"}
              <span className="text-[#888780]">
                # No extra setup needed.
              </span>
            </pre>
            <div className="flex items-start gap-2.5 border-t border-black/[0.08] px-3.5 py-2.5 text-[13px] leading-snug text-[#5f5e5a]">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0F6E56]" />
              <span>1 line. Readable as a sentence. Easy to remember.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Your learning journey</SectionLabel>
        <div className="flex items-center overflow-x-auto py-2">
          {JOURNEY_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center">
                <div className="flex min-w-[100px] flex-col items-center text-center">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                      step.you
                        ? "border-[#26215C] bg-[#3C3489] text-white"
                        : step.active
                          ? "border-[#0F6E56] bg-[#1D9E75] text-white"
                          : "border-black/10 bg-white text-[#888780]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <p
                    className={`mt-1.5 max-w-[90px] text-[11px] leading-snug ${
                      step.you
                        ? "font-medium text-[#534AB7]"
                        : "text-[#888780]"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
                {i < JOURNEY_STEPS.length - 1 && (
                  <span className="mb-5 shrink-0 px-1 text-base text-[#b4b2a9]">
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-6">
        <SectionLabel>Why beginners love Python</SectionLabel>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {WHY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex gap-2.5 rounded-[10px] bg-[#f5f4f0] p-3.5"
              >
                <Icon
                  className="mt-0.5 h-[18px] w-[18px] shrink-0"
                  style={{ color: card.color }}
                />
                <div>
                  <p className="text-[13px] font-medium text-[#1a1a18]">
                    {card.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-[#5f5e5a]">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="flex items-start gap-2.5 rounded-[10px] bg-[#E6F1FB] p-3.5 text-[13px] leading-relaxed text-[#185FA5]">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Every expert once typed their first{" "}
          <code className="rounded bg-[#185FA5]/10 px-1 py-0.5 font-mono">
            print(&quot;Hello&quot;)
          </code>
          . The most important step is the next one — keep going!
        </p>
      </div>
    </div>
  );
}
