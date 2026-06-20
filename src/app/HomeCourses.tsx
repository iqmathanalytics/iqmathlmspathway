import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Layers } from "lucide-react";
import { courses } from "@/data/courses";
import { getModulesByCourse } from "@/data/curriculum";
import type { CourseId } from "@/lib/types";

const COURSE_META: Record<
  CourseId,
  {
    firstTopicHref: string;
    dashboardHref: string;
    gradient: string;
    badgeClass: string;
    levelLabel: string;
    prereq: string | null;
    featureHighlights: string[];
  }
> = {
  python: {
    firstTopicHref: "/learn/introduction-and-setup/introduction-to-programming",
    dashboardHref: "/dashboard",
    gradient: "from-emerald-500/15 via-brand-500/10 to-transparent",
    badgeClass: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    levelLabel: "Beginner friendly",
    prereq: null,
    featureHighlights: [
      "Built-in Python IDE — run code in your browser",
      "14 modules from syntax to a final capstone project",
      "Quizzes and practice problems per topic",
    ],
  },
  "agentic-ai": {
    firstTopicHref: "/learn/intro-to-ai/what-is-ai",
    dashboardHref: "/dashboard",
    gradient: "from-violet-500/15 via-purple-500/10 to-transparent",
    badgeClass: "bg-violet-50 text-violet-700 ring-violet-200",
    levelLabel: "Some Python helpful",
    prereq: "Python for Data Science",
    featureHighlights: [
      "Live Groq API chatbot playground — test your bot in the browser",
      "7 modules from LLM basics to LangChain and multi-agent systems",
      "Hands-on exercises with real API calls",
    ],
  },
};

export function HomeCourses() {
  return (
    <section className="border-y border-gray-200/80 bg-gray-50/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose your course
          </h2>
          <p className="mt-3 text-gray-600">
            Structured lessons, a built-in coding environment, and project-based learning — for Python and AI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
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
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg hover:border-gray-300"
              >
                {/* Gradient background */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 transition group-hover:opacity-100`}
                />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-5xl" aria-hidden>{course.icon}</span>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${meta.badgeClass}`}
                    >
                      {meta.levelLabel}
                    </span>
                  </div>

                  {/* Title & tagline */}
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{course.name}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{course.description}</p>

                  {/* Stats */}
                  <div className="mt-5 flex items-center gap-5 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Layers className="h-4 w-4" />
                      {totalModules} modules
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4" />
                      {liveTopics} lessons live
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      Self-paced
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-6 space-y-2">
                    {meta.featureHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white text-[9px] font-bold">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Prereq note */}
                  {meta.prereq && (
                    <p className="mt-4 text-xs text-gray-400">
                      Recommended first: <span className="font-medium text-gray-600">{meta.prereq}</span>
                    </p>
                  )}

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={meta.firstTopicHref}
                      className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700"
                    >
                      Start Lesson 1
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={meta.dashboardHref}
                      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                      View roadmap
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
