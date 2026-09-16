import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PracticeHubClient } from "./PracticeHubClient";
import {
  PYTHON_HUB_ALGORITHM_COUNT,
  PYTHON_HUB_BASICS_COUNT,
  PYTHON_HUB_DIFFICULTIES,
  PYTHON_HUB_PRACTICE_TOTAL,
} from "@/data/python-hub-stats";

export default function PracticeHubPage() {
  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Practice Problems</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Standalone coding challenges (Python Basics &amp; Algorithms) with an
          in-browser editor and instant feedback. Separate from course module
          challenges inside Learn.
        </p>
      </header>
      <PracticeHubClient
        totalCount={PYTHON_HUB_PRACTICE_TOTAL}
        stats={PYTHON_HUB_DIFFICULTIES}
        languageCount={PYTHON_HUB_BASICS_COUNT}
        algorithmCount={PYTHON_HUB_ALGORITHM_COUNT}
      />
      <p className="mt-8 text-sm text-gray-500">
        Prefer reading first?{" "}
        <Link href="/dashboard" className="font-medium text-brand-700 hover:underline">
          Go to Dashboard
        </Link>
      </p>
    </div>
  );
}
