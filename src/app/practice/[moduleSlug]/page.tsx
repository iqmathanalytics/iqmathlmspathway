import Link from "next/link";
import { notFound } from "next/navigation";
import { getModuleBySlug, modules } from "@/data/curriculum";
import { getPracticeCountByTopic } from "@/data/practice/meta";
import { PAGE_CONTAINER } from "@/lib/layout";

interface ModulePracticePageProps {
  params: Promise<{ moduleSlug: string }>;
}

export function generateStaticParams() {
  return modules.map((m) => ({ moduleSlug: m.slug }));
}

export default async function ModulePracticePage({ params }: ModulePracticePageProps) {
  const { moduleSlug } = await params;
  const courseModule = getModuleBySlug(moduleSlug);
  if (!courseModule) notFound();

  const publishedTopics = courseModule.topics.filter((t) => t.published);
  const stats = {
    total: publishedTopics.reduce((s, t) => s + getPracticeCountByTopic(t.id), 0),
    topics: publishedTopics.map((t) => ({
      topicId: t.id,
      count: getPracticeCountByTopic(t.id),
    })),
  };

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <nav className="text-sm text-gray-500">
        <Link href="/practice" className="hover:text-brand-700">
          Practice
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Module {courseModule.id}</span>
      </nav>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">{courseModule.name}</h1>
      <p className="mt-2 text-gray-600">{stats.total} practice problems in this module.</p>

      <ol className="mt-8 space-y-3">
        {publishedTopics.map((topic, i) => (
          <li key={topic.id}>
            <Link
              href={`/practice/${courseModule.slug}/${topic.slug}`}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-brand-200 hover:shadow-md"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900">{topic.title}</p>
                <p className="text-sm text-gray-500">
                  {getPracticeCountByTopic(topic.id)} problems
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
