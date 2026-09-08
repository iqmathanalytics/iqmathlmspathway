import Link from "next/link";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PracticeHubClient } from "./PracticeHubClient";
import { getPythonProgrammingStats } from "@/data/python-programming";

export default function PracticeHubPage() {
  const stats = getPythonProgrammingStats();

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Practice Problems</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Standalone coding challenges with an in-browser editor, test cases, and
          instant feedback — separate from course lessons.
        </p>
      </header>
      <PracticeHubClient
        totalCount={stats.total}
        stats={stats.difficulties}
        languageCount={stats.kinds.language}
        algorithmCount={stats.kinds.algorithms}
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
