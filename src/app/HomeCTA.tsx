import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { courses } from "@/data/courses";
import { IconImage } from "@/components/ui/IconImage";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";
const pythonCourse = courses.find((course) => course.id === "python");
const agenticAiCourse = courses.find((course) => course.id === "agentic-ai");

const promises = [
  "Browser lessons",
  "Real exercises",
  "Progress tracking",
];

export function HomeCTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-[2rem] px-8 py-14 text-center shadow-2xl shadow-slate-300/70 sm:px-12 lg:py-20">
        <StarfieldBackground />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(15,117,189,0.28),transparent_55%),radial-gradient(ellipse_70%_55%_at_85%_20%,rgba(140,198,62,0.22),transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-3xl">          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-semibold text-sky-100 backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent-300" />
            IQmath Technologies · Build skills that connect code and AI
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Start learning today. Build something useful this week.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Choose a track, open the first lesson, and learn with a complete practice environment already built in.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-300">
            {promises.map((promise) => (
              <span key={promise} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent-300" />
                {promise}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <Link
              href="/learn/introduction-and-setup/introduction-to-programming"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              <IconImage
                src={pythonCourse?.iconImage}
                alt={pythonCourse?.iconAlt ?? "Python logo"}
                fallback={pythonCourse?.icon ?? "PY"}
                className="h-5 w-5"
              />
              Begin Python
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/learn/intro-to-ai/what-is-ai"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-accent-400/50 bg-accent-500/20 px-7 py-3.5 text-sm font-semibold text-accent-100 shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-500/30"
            >
              <IconImage
                src={agenticAiCourse?.iconImage}
                alt={agenticAiCourse?.iconAlt ?? "Agentic AI logo"}
                fallback={agenticAiCourse?.icon ?? "AI"}
                className="h-5 w-5"
              />
              Begin Agentic AI
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">Free to start · No credit card needed</p>
        </div>
      </div>
    </section>
  );
}
