import { CheckCircle2, Sparkles } from "lucide-react";
import { courses } from "@/data/courses";
import { getModulesByCourse } from "@/data/curriculum";
import { IconImage } from "@/components/ui/IconImage";
import { StarfieldBackground } from "@/components/ui/StarfieldBackground";

const pythonCourse = courses.find((course) => course.id === "python");
const agenticAiCourse = courses.find((course) => course.id === "agentic-ai");
const sqlCourse = courses.find((course) => course.id === "sql");
const mbaCourse = courses.find((course) => course.id === "mba-ai");

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
    title: "Code foundations",
    text: "Python syntax, SQL queries, and browser IDEs — practice without installing a stack.",
    iconImage: pythonCourse?.iconImage,
    iconAlt: pythonCourse?.iconAlt ?? "Python logo",
    fallback: pythonCourse?.icon ?? "PY",
  },
  {
    title: "AI systems",
    text: "Prompting, Groq APIs, LangChain, RAG knowledge desks, and multi-agent workflows.",
    iconImage: agenticAiCourse?.iconImage,
    iconAlt: agenticAiCourse?.iconAlt ?? "Agentic AI logo",
    fallback: agenticAiCourse?.icon ?? "AI",
  },
  {
    title: "Business pathway",
    text: "4-day MBA track: analytics, market intelligence, document RAG, and Colab agents.",
    iconImage: mbaCourse?.iconImage,
    iconAlt: mbaCourse?.iconAlt ?? "MBA AI logo",
    fallback: mbaCourse?.icon ?? "MBA",
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
            IQmath Technologies · Python · SQL · Agentic AI · MBA Analytics
          </div>

          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.08]">
            Learn to code, query data, and{" "}
            <span className="bg-gradient-to-r from-sky-300 via-white to-accent-300 bg-clip-text text-transparent">
              ship AI for business
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Four learning tracks in one platform — browser IDEs, ChatGPT and Colab
            labs, real datasets and PDFs, quizzes, and progress that stays with you.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-left sm:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <IconImage
                    src={item.iconImage}
                    alt={item.iconAlt}
                    fallback={item.fallback}
                    className="h-7 w-7"
                    fallbackClassName="text-sm font-bold text-white"
                  />
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
              Browser Python & SQL IDEs
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              RAG + Colab agents
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent-400" />
              {sqlCourse ? "SQL · MBA · Groq" : "Progress sync"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
