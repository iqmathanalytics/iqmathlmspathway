import type { Course } from "@/lib/types";

export const courses: Course[] = [
  {
    id: "python",
    name: "Python for Data Science",
    slug: "python",
    tagline: "Learn Python from scratch — structured lessons with hands-on practice.",
    description:
      "Start from zero and build a solid Python foundation. Covers syntax, data structures, functions, and the tools used in data science.",
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
    tagline: "Build real AI chatbots and agents using LLMs and the Groq API.",
    description:
      "Learn how LLMs work, master prompt engineering, and build your own chatbots and AI agents using the Groq API — testing everything live inside the platform.",
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
    tagline: "Master SQL from database fundamentals through CTEs — with a live in-browser IDE.",
    description:
      "Learn relational databases, every category of SQL command, and progressive query skills from SELECT through joins, aggregates, subqueries, and common table expressions.",
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
    tagline: "4 days: analytics → market intel → RAG knowledge desks → multi-agent Colab systems.",
    description:
      "Day-wise MBA pathway — FreshBasket analytics labs, competitor and review intelligence, grounded RAG on real PDFs, then Groq agents on Olist and IBM HR data.",
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
