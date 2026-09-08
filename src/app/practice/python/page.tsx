import { Suspense } from "react";
import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import {
  PYTHON_PROGRAMMING_CATEGORIES,
  PYTHON_PROGRAMMING_ORDER_PREFIX,
  PYTHON_PROGRAMMING_TITLE,
  difficultyLabel,
  getPythonProgrammingProblems,
  getPythonProgrammingStats,
} from "@/data/python-programming";
import { PythonPracticeProblemTable } from "@/components/practice/PythonPracticeProblemTable";

export default function PythonProgrammingPracticePage() {
  const stats = getPythonProgrammingStats();
  const problems = getPythonProgrammingProblems();

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <nav className="text-sm text-gray-500">
        <Link href="/practice" className="hover:text-brand-700">
          Practice
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-800">{PYTHON_PROGRAMMING_TITLE}</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {PYTHON_PROGRAMMING_TITLE}
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          {stats.total} problems in one place — {stats.kinds.language} language
          drills and {stats.kinds.algorithms} algorithm challenges. Filter by
          difficulty, type, or topic, then solve in the editor.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">
            {difficultyLabel("easy")} {stats.difficulties.easy}
          </span>
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">
            {difficultyLabel("medium")} {stats.difficulties.medium}
          </span>
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-red-700">
            {difficultyLabel("hard")} {stats.difficulties.hard}
          </span>
        </div>
      </header>

      <section className="mt-8">
        <Suspense
          fallback={
            <p className="text-sm text-gray-500">Loading problem list…</p>
          }
        >
          <PythonPracticeProblemTable
            problems={problems}
            mergedLinks
            orderScope="all"
            orderPrefix={PYTHON_PROGRAMMING_ORDER_PREFIX}
            categories={PYTHON_PROGRAMMING_CATEGORIES}
            showKindFilter
            showDifficultyFilter
            namespacedCategories
            readDifficultyFromUrl
          />
        </Suspense>
      </section>
    </div>
  );
}
