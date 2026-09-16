import { Suspense } from "react";
import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PAPC_ORDER_PREFIX, PAPC_PRACTICE_COUNT } from "@/data/certification/papc-config";
import { PAPC_PRACTICE_LIST } from "@/data/certification/papc-list.generated";
import { PYTHON_PRACTICE_CATEGORIES } from "@/data/python-practice/categories";
import { difficultyLabel } from "@/lib/practice-difficulty";
import { PythonPracticeProblemTable } from "@/components/practice/PythonPracticeProblemTable";
import { CertificationPracticeGate } from "./CertificationPracticeGate";

export const metadata = {
  title: "PAPC Practice · Get Certified",
};

export default function CertificationPracticeListPage() {
  const difficulties = { easy: 0, medium: 0, hard: 0 };
  for (const problem of PAPC_PRACTICE_LIST) {
    difficulties[problem.difficulty] += 1;
  }

  return (
    <CertificationPracticeGate>
      <div className={`${PAGE_CONTAINER} py-10`}>
        <nav className="text-sm text-gray-500">
          <Link href="/certification" className="hover:text-brand-700">
            Get Certified
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/certification/papc" className="hover:text-brand-700">
            PAPC
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-800">Practice</span>
        </nav>
        <header className="mt-4">
          <h1 className="text-3xl font-bold text-gray-900">PAPC practice problems</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            {PAPC_PRACTICE_COUNT} problems. Unlimited attempts, any order. Run, test, and
            submit in the Python IDE. The quiz does not require finishing all of
            these first.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">
              {difficultyLabel("easy")} {difficulties.easy}
            </span>
            <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">
              {difficultyLabel("medium")} {difficulties.medium}
            </span>
            <span className="rounded-full bg-red-50 px-2.5 py-1 text-red-700">
              {difficultyLabel("hard")} {difficulties.hard}
            </span>
          </div>
        </header>
        <section className="mt-8">
          <Suspense fallback={<p className="text-sm text-gray-500">Loading problem list…</p>}>
            <PythonPracticeProblemTable
              problems={PAPC_PRACTICE_LIST}
              basePath="/certification/papc/practice"
              orderScope="all"
              orderPrefix={PAPC_ORDER_PREFIX}
              categories={[...PYTHON_PRACTICE_CATEGORIES]}
              showDifficultyFilter
            />
          </Suspense>
        </section>
      </div>
    </CertificationPracticeGate>
  );
}
