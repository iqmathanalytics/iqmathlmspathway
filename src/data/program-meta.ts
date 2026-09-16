import { getModulesByCourse } from "@/data/curriculum";
import type { Course, CourseId, UserProgress } from "@/lib/types";

export const PROGRAMS_PATH = "/programs";

export type ProgramVisualMeta = {
  gradient: string;
  glow: string;
  badgeClass: string;
  levelLabel: string;
  featureHighlights: string[];
};

const PROGRAM_VISUAL: Record<CourseId, ProgramVisualMeta> = {
  python: {
    gradient: "from-emerald-500/20 via-brand-500/10 to-transparent",
    glow: "shadow-emerald-100/70",
    badgeClass: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    levelLabel: "Foundation → Advanced",
    featureHighlights: [
      "In-browser Python IDE on every topic",
      "18 modules through NumPy, Pandas, visualization, EDA, and a capstone",
      "Quizzes, lesson challenges, and premium algorithm practice",
    ],
  },
  "agentic-ai": {
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    glow: "shadow-violet-100/70",
    badgeClass: "bg-violet-50 text-violet-700 ring-violet-200",
    levelLabel: "Intermediate / Pro",
    featureHighlights: [
      "Live Groq playgrounds inside the lesson",
      "8 modules from LLM internals to a customer-support agent",
      "LangChain tool-calling, memory, and multi-agent workflows",
    ],
  },
  sql: {
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    glow: "shadow-sky-100/70",
    badgeClass: "bg-sky-50 text-sky-700 ring-sky-200",
    levelLabel: "Professional SQL",
    featureHighlights: [
      "Live SQLite console in the browser — no server to install",
      "9 modules from relational design through CTEs",
      "Query Northwind-style business data with joins, subqueries, and CTEs",
    ],
  },
  "mba-ai": {
    gradient: "from-brand-500/20 via-accent-500/10 to-transparent",
    glow: "shadow-brand-100/70",
    badgeClass: "bg-brand-50 text-brand-800 ring-brand-200",
    levelLabel: "Executive / Pro",
    featureHighlights: [
      "Day 1: Excel labs + Power Pivot retail dashboard",
      "Day 2: Power BI labs + prompt systems + Financial Sample capstone",
      "Day 3–4: LangChain tool agents, then RAG knowledge desks + LLM insight memos",
    ],
  },
};

const FALLBACK_VISUAL: ProgramVisualMeta = {
  gradient: "from-brand-500/20 via-accent-500/10 to-transparent",
  glow: "shadow-brand-100/70",
  badgeClass: "bg-brand-50 text-brand-800 ring-brand-200",
  levelLabel: "Self-paced",
  featureHighlights: ["Lessons, quizzes, and in-browser labs"],
};

export function getProgramVisual(course: Course): ProgramVisualMeta {
  return PROGRAM_VISUAL[course.id] ?? {
    ...FALLBACK_VISUAL,
    featureHighlights: [course.tagline],
  };
}

export function dashboardCourseHref(courseId: CourseId): string {
  return `/dashboard?course=${courseId}`;
}

export function firstPublishedTopicHref(courseId: CourseId): string {
  const modules = getModulesByCourse(courseId);
  for (const courseModule of modules) {
    const topic = courseModule.topics.find((t) => t.published);
    if (topic) return `/learn/${courseModule.slug}/${topic.slug}`;
  }
  return dashboardCourseHref(courseId);
}

export function nextLessonHref(
  courseId: CourseId,
  completedTopics: string[]
): string {
  const done = new Set(completedTopics);
  const modules = getModulesByCourse(courseId);
  for (const courseModule of modules) {
    for (const topic of courseModule.topics) {
      if (!topic.published) continue;
      if (!done.has(topic.id)) {
        return `/learn/${courseModule.slug}/${topic.slug}`;
      }
    }
  }
  return firstPublishedTopicHref(courseId);
}

export type CourseProgressStatus = "not_started" | "in_progress" | "completed";

export function getCourseProgressStats(
  courseId: CourseId,
  progress: UserProgress
): {
  completed: number;
  total: number;
  percent: number;
  quizAvg: number | null;
  status: CourseProgressStatus;
} {
  const modules = getModulesByCourse(courseId);
  const published = modules.flatMap((m) => m.topics.filter((t) => t.published));
  const ids = new Set(published.map((t) => t.id));
  const total = published.length;
  const completed = progress.completedTopics.filter((id) => ids.has(id)).length;
  const scores = Object.entries(progress.quizScores)
    .filter(([id]) => ids.has(id))
    .map(([, value]) => value);
  const quizAvg = scores.length
    ? Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length)
    : null;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const status: CourseProgressStatus =
    completed === 0
      ? "not_started"
      : total > 0 && completed >= total
        ? "completed"
        : "in_progress";
  return { completed, total, percent, quizAvg, status };
}

export function courseProgressLabel(status: CourseProgressStatus): string {
  if (status === "completed") return "Completed";
  if (status === "in_progress") return "In progress";
  return "Not started";
}
