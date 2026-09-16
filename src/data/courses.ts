import type { Course, CourseId } from "@/lib/types";

export const courses: Course[] = [
  {
    id: "python",
    name: "Python for Data Science",
    slug: "python",
    tagline: "Professional Python: language mastery through NumPy, Pandas, EDA, and a shippable capstone.",
    description:
      "A professional pathway from first principles to advanced data science — syntax, data structures, functions, files, NumPy, Pandas, visualization, statistics & EDA, then a full capstone.",
    icon: "PY",
    iconImage: "/images/logos/python-course.png",
    iconAlt: "Python logo",
    level: "beginner",
    color: "brand",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    slug: "agentic-ai",
    tagline: "Production AI: Groq APIs, LangChain tool-calling agents, and live in-platform testing.",
    description:
      "Go beyond chatbot demos — master LLM internals, prompt systems, Groq APIs, and LangChain agents with tools, then test every workflow live in the platform.",
    icon: "AI",
    iconImage: "/images/logos/agentic-ai-course.svg",
    iconAlt: "Agentic AI logo",
    level: "intermediate",
    color: "violet",
  },
  {
    id: "sql",
    name: "SQL & Databases",
    slug: "sql",
    tagline: "Professional SQL: relational design through CTEs in a live in-browser IDE.",
    description:
      "Query like a professional — relational design, every SQL command category, and advanced patterns: joins, window-ready aggregates, subqueries, and common table expressions on real business tables.",
    icon: "SQL",
    iconImage: "/images/logos/sql-course.svg",
    iconAlt: "SQL and Databases logo",
    level: "beginner",
    color: "sky",
  },
  {
    id: "mba-ai",
    name: "MBA: AI for Business Analytics",
    slug: "mba-ai",
    tagline: "Executive AI: Excel & Power BI → LangChain tool agents → RAG over real filings.",
    description:
      "A 4-day executive pathway — Excel and Power Pivot analytics, Power BI dashboards with prompt systems, Groq/LangChain chatbots with tools, then RAG over company documents and AI-powered insight memos.",
    icon: "MBA",
    iconImage: "/images/logos/mba-ai-course.svg",
    iconAlt: "MBA AI for Business Analytics logo",
    level: "beginner",
    color: "brand",
  },
];

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export const ALL_COURSE_IDS: CourseId[] = courses.map((c) => c.id);

export function courseShortName(id: CourseId): string {
  switch (id) {
    case "python":
      return "Python";
    case "agentic-ai":
      return "Agentic AI";
    case "sql":
      return "SQL";
    case "mba-ai":
      return "MBA AI";
  }
}
