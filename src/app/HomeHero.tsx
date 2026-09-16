import { Award, CheckCircle2, Code2, Sparkles, ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { getModulesByCourse } from "@/data/curriculum";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";

const trackIds = ["python", "agentic-ai", "sql", "mba-ai"] as const;
const totalModules = trackIds.reduce(
  (acc, id) => acc + getModulesByCourse(id).length,
  0,
);
const totalLessons = trackIds.reduce(
  (acc, id) =>
    acc +
    getModulesByCourse(id).reduce(
      (sum, m) => sum + m.topics.filter((t) => t.published).length,
      0,
    ),
  0,
);

const outcomes = [
  {
    title: "Live IDEs",
    text: "Write, query, and test in the browser — no local stack, no tool-switching between the lesson and the editor.",
    icon: Code2,
  },
  {
    title: "Premium practice",
    text: "Language drills and algorithm challenges with instant test feedback — Easy, Medium, and Hard in one arena.",
    icon: Terminal,
  },
  {
    title: "Verified certification",
    text: "Timed exams and a public verify link — credentials that stand on their own.",
    icon: Award,
  },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200/80">
      <StarfieldBackground />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(15,117,189,0.28),transparent_55%),radial-gradient(ellipse_70%_55%_at_85%_20%,rgba(140,198,62,0.22),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-sky-100 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent-300" />
            IQmath Technologies · Practice · Certification · Live labs
          </div>

          <h1 className="animate-fade-up mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.08]">
            Train at pro level — code, data systems, and{" "}
            <span className="bg-gradient-to-r from-sky-300 via-white to-accent-300 bg-clip-text text-transparent">
              production AI
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300" style={{ animationDelay: "80ms" }}>
            One workspace for everything: in-browser IDEs, Groq and LangChain labs,
            algorithm challenges, timed proficiency exams, and progress that persists.
          </p>

          <div className="animate-fade-up mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3" style={{ animationDelay: "140ms" }}>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-brand-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Start learning
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Practice problems
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/certification"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <Award className="h-4 w-4" />
              Get Certified
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-left sm:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item.title}
                className="hover-lift flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-center backdrop-blur">
              <p className="text-2xl font-bold text-white">{totalModules}+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                Modules
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-center backdrop-blur">
              <p className="text-2xl font-bold text-white">{totalLessons}+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                Lessons
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-center backdrop-blur">
              <p className="text-2xl font-bold text-white">{courses.length}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                Tracks
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              In-browser IDEs
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              Premium practice + timed exams
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              LangChain agents · RAG · Groq
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
