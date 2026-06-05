import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, modules } from "@/data/curriculum";
import { getProblemsByTopic } from "@/data/practice";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PracticeTopicListClient } from "./PracticeTopicListClient";

interface TopicPracticePageProps {
  params: Promise<{ moduleSlug: string; topicSlug: string }>;
}

export function generateStaticParams() {
  return modules.flatMap((m) =>
    m.topics
      .filter((t) => t.published)
      .map((t) => ({ moduleSlug: m.slug, topicSlug: t.slug }))
  );
}

export default async function TopicPracticePage({ params }: TopicPracticePageProps) {
  const { moduleSlug, topicSlug } = await params;
  const result = getTopic(moduleSlug, topicSlug);
  if (!result) notFound();

  const { module, topic } = result;
  if (!topic.published) notFound();

  const problems = getProblemsByTopic(topic.id);

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <nav className="text-sm text-gray-500">
        <Link href="/practice" className="hover:text-brand-700">
          Practice
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/practice/${module.slug}`} className="hover:text-brand-700">
          Module {module.id}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{topic.title}</span>
      </nav>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">{topic.title}</h1>
      <p className="mt-2 text-gray-600">
        {problems.length} problems · First 5 free · Submit to pass hidden tests
      </p>
      <Link
        href={`/learn/${module.slug}/${topic.slug}`}
        className="mt-3 inline-block text-sm font-medium text-brand-700 hover:underline"
      >
        Read the lesson first
      </Link>

      <PracticeTopicListClient
        problems={problems}
        moduleSlug={module.slug}
        topicSlug={topic.slug}
      />
    </div>
  );
}
