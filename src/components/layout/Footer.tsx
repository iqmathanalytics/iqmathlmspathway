import { PLATFORM_NAME } from "@/data/curriculum";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white py-8">
      <div className="mx-auto w-full max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
        <p>
          {PLATFORM_NAME} — Learn Python for Data Science and Agentic AI with lessons, quizzes, practice, and cloud progress.
        </p>
        <p className="mt-1">
          More Python modules, AI workflows, agent tools, and real-world projects coming step by step.
        </p>
      </div>
    </footer>
  );
}
