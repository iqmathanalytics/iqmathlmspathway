import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Layers } from "lucide-react";
import { courses } from "@/data/courses";
import { getModulesByCourse } from "@/data/curriculum";
import type { CourseId } from "@/lib/types";
import { IconImage } from "@/components/ui/IconImage";

const COURSE_META: Record<
  CourseId,
  {
    firstTopicHref: string;
    dashboardHref: string;
    gradient: string;
    glow: string;
    badgeClass: string;
    levelLabel: string;
    prereq: string | null;
    featureHighlights: string[];
  }
> = {
  python: {
    firstTopicHref: "/learn/introduction-and-setup/introduction-to-programming",
    dashboardHref: "/dashboard?course=python",
    gradient: "from-emerald-500/20 via-brand-500/10 to-transparent",
    glow: "shadow-emerald-100/70",
    badgeClass: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    levelLabel: "Beginner friendly",
    prereq: null,
    featureHighlights: [
      "Run Python in your browser",
      "14 modules from syntax to a final capstone project",
      "Practice with quizzes and exercises",
    ],
  },
  "agentic-ai": {
    firstTopicHref: "/learn/intro-to-ai/what-is-ai",
    dashboardHref: "/dashboard?course=agentic-ai",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    glow: "shadow-violet-100/70",
    badgeClass: "bg-violet-50 text-violet-700 ring-violet-200",
    levelLabel: "Some Python helpful",
    prereq: "Python for Data Science",
    featureHighlights: [
      "Test AI chatbots in the browser",
      "8 modules from LLM basics to a customer support agent project",
      "Practice with real Groq API workflows",
    ],
  },
  sql: {
    firstTopicHref: "/learn/sql-foundations/introduction-to-databases",
    dashboardHref: "/dashboard?course=sql",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    glow: "shadow-sky-100/70",
    badgeClass: "bg-sky-50 text-sky-700 ring-sky-200",
    levelLabel: "Beginner friendly",
    prereq: null,
    featureHighlights: [
      "Run SQL in your browser with SQLite",
      "9 modules from database basics through CTEs",
      "Practice on Northwind — the classic sample business database",
    ],
  },
};

export function HomeCourses() {
  return (
    <section id="courses" className="relative overflow-hidden border-y border-gray-200/80 bg-gray-50/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            Pick your path
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Three learning tracks
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Start with Python fundamentals, master SQL and databases, then progress into LLMs, Groq, LangChain, RAG, and agent workflows.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {courses.map((course) => {
            const meta = COURSE_META[course.id];
            const courseModules = getModulesByCourse(course.id);
            const liveTopics = courseModules.reduce(
              (acc, m) => acc + m.topics.filter((t) => t.published).length,
              0
            );
            const totalModules = courseModules.length;

            return (
              <div
                key={course.id}
                className={`group relative flex h-full overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-2xl ${meta.glow}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-100 transition`}
                />
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/70 blur-3xl" />

                <div className="relative flex w-full flex-col p-7 sm:p-8 lg:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <IconImage
                      src={course.iconImage}
                      alt={course.iconAlt ?? `${course.name} logo`}
                      fallback={course.icon}
                      className="h-16 w-16 rounded-3xl bg-white p-1.5 shadow-sm ring-1 ring-gray-200/70"
                      fallbackClassName="text-sm font-bold"
                    />
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${meta.badgeClass}`}
                    >
                      {meta.levelLabel}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">{course.name}</h3>
                  <p className="mt-2 min-h-[4.5rem] text-gray-600 leading-relaxed">{course.description}</p>

                  <div className="mt-5 grid gap-2 text-sm text-gray-500 sm:grid-cols-3">
                    <span className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-gray-200/60">
                      <Layers className="h-4 w-4 shrink-0" />
                      {totalModules} modules
                    </span>
                    <span className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-gray-200/60">
                      <BookOpen className="h-4 w-4 shrink-0" />
                      {liveTopics} lessons
                    </span>
                    <span className="flex items-center gap-1.5 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-gray-200/60">
                      <Clock className="h-4 w-4 shrink-0" />
                      Self-paced
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2">
                    {meta.featureHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white text-[9px] font-bold">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {meta.prereq && (
                    <p className="mt-4 text-xs text-gray-400">
                      Recommended first: <span className="font-medium text-gray-600">{meta.prereq}</span>
                    </p>
                  )}

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <Link
                      href={meta.firstTopicHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700"
                    >
                      Start Lesson 1
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={meta.dashboardHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                      View dashboard
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
