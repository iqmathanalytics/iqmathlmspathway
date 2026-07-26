import { BookOpenCheck, Code2, GraduationCap, Rocket } from "lucide-react";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";

const steps = [
  {
    icon: BookOpenCheck,
    label: "01",
    title: "Learn the concept",
    text: "Clear explanations, visuals, and business framing — from Python basics to MBA decision labs.",
  },
  {
    icon: Code2,
    label: "02",
    title: "Practice immediately",
    text: "Run code in-browser, copy ChatGPT prompts, upload datasets, or paste Colab cells with Groq.",
  },
  {
    icon: GraduationCap,
    label: "03",
    title: "Check understanding",
    text: "Quizzes and activity checklists confirm the skill before you move to the next topic.",
  },
  {
    icon: Rocket,
    label: "04",
    title: "Ship real outcomes",
    text: "Capstones include LangChain chatbots with tools, RAG knowledge desks, SQL projects, and AI agents.",
  },
];

export function HomeLearningFlow() {
  return (
    <section id="learning-flow" className="relative overflow-hidden border-y border-gray-200/80">
      <StarfieldBackground />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(ellipse_70%_55%_at_85%_20%,rgba(139,92,246,0.2),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Learning flow
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Learn in a simple loop: read, run, check, build
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
              The same loop works across coding tracks and the MBA pathway — so managers and
              builders share one practice habit.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-sm backdrop-blur"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-500">{step.label}</span>
                  </div>
                  <h3 className="mt-5 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
