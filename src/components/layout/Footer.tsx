import { PLATFORM_NAME } from "@/data/curriculum";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white py-8">
      <div className="mx-auto w-full max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
        <p>
          {PLATFORM_NAME} — Modules 1–5 live · Python foundations for Data Science.
        </p>
        <p className="mt-1">More modules, quizzes, and libraries coming step by step.</p>
      </div>
    </footer>
  );
}
