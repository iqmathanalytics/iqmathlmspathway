import { notFound } from "next/navigation";
import { getTopic, modules } from "@/data/curriculum";
import { getProblemsByTopic, getPracticeCountByTopic } from "@/data/practice";
import { PAGE_CONTAINER } from "@/lib/layout";
import { CourseTopicPracticeList } from "@/components/practice/CourseTopicPracticeList";

interface PageProps {
  params: Promise<{ moduleSlug: string; topicSlug: string }>;
}

export function generateStaticParams() {
  return modules.flatMap((m) =>
    m.topics
      .filter((t) => t.published && getPracticeCountByTopic(t.id) > 0)
      .map((t) => ({ moduleSlug: m.slug, topicSlug: t.slug }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { moduleSlug, topicSlug } = await params;
  const result = getTopic(moduleSlug, topicSlug);
  return {
    title: result ? `Challenges · ${result.topic.title}` : "Module challenges",
  };
}

export default async function ModuleChallengesListPage({ params }: PageProps) {
  const { moduleSlug, topicSlug } = await params;
  const result = getTopic(moduleSlug, topicSlug);
  if (!result || !result.topic.published) notFound();

  const { module, topic } = result;
  const problems = getProblemsByTopic(topic.id);
  if (problems.length === 0) notFound();

  return (
    <div className={`${PAGE_CONTAINER} py-10`}>
      <CourseTopicPracticeList
        moduleSlug={module.slug}
        topicSlug={topic.slug}
        moduleName={module.name}
        topicTitle={topic.title}
        problems={problems}
      />
    </div>
  );
}
