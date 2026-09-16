import { Suspense } from "react";
import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import {
  PYTHON_PROGRAMMING_CATEGORIES,
  PYTHON_PROGRAMMING_ORDER_PREFIX,
  PYTHON_PROGRAMMING_TITLE,
  difficultyLabel,
  getPythonProgrammingList,
} from "@/data/python-programming-catalog";
import {
  PYTHON_HUB_ALGORITHM_COUNT,
  PYTHON_HUB_BASICS_COUNT,
  PYTHON_HUB_DIFFICULTIES,
  PYTHON_HUB_PRACTICE_TOTAL,
} from "@/data/python-hub-stats";
import { PythonPracticeProblemTable } from "@/components/practice/PythonPracticeProblemTable";

export default function PythonProgrammingPracticePage() {
  const problems = getPythonProgrammingList();

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
          {PYTHON_HUB_PRACTICE_TOTAL} problems in one place —{" "}
          {PYTHON_HUB_BASICS_COUNT} language drills and {PYTHON_HUB_ALGORITHM_COUNT}{" "}
          algorithm challenges. Filter by difficulty, type, or topic, then solve
          in the editor.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">
            {difficultyLabel("easy")} {PYTHON_HUB_DIFFICULTIES.easy}
          </span>
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">
            {difficultyLabel("medium")} {PYTHON_HUB_DIFFICULTIES.medium}
          </span>
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-red-700">
            {difficultyLabel("hard")} {PYTHON_HUB_DIFFICULTIES.hard}
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
