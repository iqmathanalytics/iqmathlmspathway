import Link from "next/link";
import { modules } from "@/data/curriculum";
import { getPracticeCountByTopic, getTotalPracticeCount } from "@/data/practice/meta";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PracticeHubClient } from "./PracticeHubClient";

export default function PracticeHubPage() {
  const moduleStats = modules
    .filter((m) => m.topics.some((t) => t.published))
    .map((m) => {
      const topics = m.topics
        .filter((t) => t.published)
        .map((t) => ({ topicId: t.id, count: getPracticeCountByTopic(t.id) }));
      return {
        module: m,
        stats: {
          total: topics.reduce((s, t) => s + t.count, 0),
          topics,
        },
      };
    });

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Practice Problems</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          {getTotalPracticeCount()} coding problems across all modules. First 5 problems per
          topic are free. Submit solutions to pass hidden tests.
        </p>
      </header>
      <PracticeHubClient moduleStats={moduleStats} />
      <p className="mt-8 text-sm text-gray-500">
        Prefer reading first?{" "}
        <Link href="/learn" className="font-medium text-brand-700 hover:underline">
          Go to Learning Path
        </Link>
      </p>
    </div>
  );
}
