import { PLATFORM_BRAND, PLATFORM_NAME } from "@/data/curriculum";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-100 bg-gradient-to-b from-white to-brand-50/40 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
        <p>
          <span className="font-semibold text-brand-800">{PLATFORM_BRAND}</span>
          {" — "}
          Learn Python for Data Science and Agentic AI with lessons, quizzes, practice, and cloud progress.
        </p>
        <p className="mt-1">
          More Python modules, AI workflows, agent tools, and real-world projects coming step by step.
        </p>
        <p className="mt-3 text-xs text-gray-400">
          © {new Date().getFullYear()} {PLATFORM_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
