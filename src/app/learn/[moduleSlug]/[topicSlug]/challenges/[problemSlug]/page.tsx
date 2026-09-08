import { notFound } from "next/navigation";
import { getTopic } from "@/data/curriculum";
import {
  getPracticeStaticParams,
  getProblemBySlug,
  getProblemModuleTopic,
} from "@/data/practice";
import { PracticeProblemShell } from "@/components/practice/PracticeProblemShell";
import { CoursePracticeUnlockGate } from "@/components/practice/CoursePracticeUnlockGate";

interface PageProps {
  params: Promise<{ moduleSlug: string; topicSlug: string; problemSlug: string }>;
}

export function generateStaticParams() {
  return getPracticeStaticParams().map((p) => ({
    moduleSlug: p.moduleSlug,
    topicSlug: p.topicSlug,
    problemSlug: p.problemSlug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { moduleSlug, topicSlug, problemSlug } = await params;
  const result = getTopic(moduleSlug, topicSlug);
  const problem = result
    ? getProblemBySlug(result.topic.id, problemSlug)
    : undefined;
  return {
    title: problem ? `${problem.title} · Module challenge` : "Module challenge",
  };
}

export default async function ModuleChallengeProblemPage({ params }: PageProps) {
  const { moduleSlug, topicSlug, problemSlug } = await params;
  const result = getTopic(moduleSlug, topicSlug);
  if (!result || !result.topic.published) notFound();

  const problem = getProblemBySlug(result.topic.id, problemSlug);
  if (!problem) notFound();

  const ctx = getProblemModuleTopic(problem);
  if (!ctx || ctx.module.slug !== moduleSlug || ctx.topic.slug !== topicSlug) {
    notFound();
  }

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] min-h-0 flex-col overflow-hidden px-2 py-2 sm:px-3">
      <CoursePracticeUnlockGate
        problem={problem}
        moduleSlug={ctx.module.slug}
        topicSlug={ctx.topic.slug}
      >
        <PracticeProblemShell
          problem={problem}
          moduleSlug={ctx.module.slug}
          topicSlug={ctx.topic.slug}
          moduleName={ctx.module.name}
          topicTitle={ctx.topic.title}
        />
      </CoursePracticeUnlockGate>
    </div>
  );
}
