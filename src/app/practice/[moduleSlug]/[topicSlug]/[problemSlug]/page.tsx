import { notFound } from "next/navigation";
import { getTopic } from "@/data/curriculum";
import { getPracticeStaticParams, getProblemBySlug } from "@/data/practice";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PracticeProblemShell } from "@/components/practice/PracticeProblemShell";

interface ProblemPageProps {
  params: Promise<{ moduleSlug: string; topicSlug: string; problemSlug: string }>;
}

export function generateStaticParams() {
  return getPracticeStaticParams();
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { moduleSlug, topicSlug, problemSlug } = await params;
  const result = getTopic(moduleSlug, topicSlug);
  if (!result) notFound();

  const { module, topic } = result;
  if (!topic.published) notFound();

  const problem = getProblemBySlug(topic.id, problemSlug);
  if (!problem) notFound();

  return (
    <div className={`${PAGE_CONTAINER} py-8`}>
      <PracticeProblemShell
        problem={problem}
        moduleSlug={module.slug}
        topicSlug={topic.slug}
        moduleName={module.name}
        topicTitle={topic.title}
      />
    </div>
  );
}
