import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, modules } from "@/data/curriculum";
import { getLesson } from "@/data/lessons";
import { getQuiz } from "@/data/quizzes";
import { TopicLessonLayout } from "@/components/lesson/TopicLessonLayout";
import { PAGE_CONTAINER } from "@/lib/layout";
import { TopicNavigation } from "@/components/lesson/TopicNavigation";
import { MarkCompleteButton } from "@/components/lesson/MarkCompleteButton";
import { TopicQuizSection } from "./TopicQuizSection";
import { TopicLessonHeader } from "@/components/lesson/TopicLessonHeader";
import { KeyTakeaways } from "@/components/lesson/KeyTakeaways";
import { TopicPracticeLink } from "@/components/lesson/TopicPracticeLink";
import { VideoTutorialModal } from "@/components/lesson/VideoTutorialModal";

interface TopicPageProps {
  params: Promise<{ moduleSlug: string; topicSlug: string }>;
}

export function generateStaticParams() {
  return modules.flatMap((m) =>
    m.topics
      .filter((t) => t.published)
      .map((t) => ({ moduleSlug: m.slug, topicSlug: t.slug }))
  );
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { moduleSlug, topicSlug } = await params;
  const result = getTopic(moduleSlug, topicSlug);
  if (!result) notFound();

  const { module, topic } = result;
  if (!topic.published) notFound();

  const lesson = getLesson(topic.id);
  if (!lesson) {
    return (
      <div className={`${PAGE_CONTAINER} py-16 text-center`}>
        <p className="text-gray-600">Lesson content is being prepared.</p>
        <Link href={`/learn/${module.slug}`} className="mt-4 text-brand-700">
          Back to module
        </Link>
      </div>
    );
  }

  const quiz = getQuiz(topic.id);

  return (
    <article className={`${PAGE_CONTAINER} py-10`}>
      <nav className="text-sm text-gray-500">
        <Link href="/learn" className="hover:text-brand-700">
          Path
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/learn/${module.slug}`} className="hover:text-brand-700">
          Module {module.id}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{topic.title}</span>
      </nav>

      <TopicLessonHeader
        moduleId={module.id}
        moduleName={module.name}
        title={topic.title}
        intro={lesson.intro}
        estimatedMinutes={topic.estimatedMinutes}
      />

      <div className="flex flex-wrap items-center gap-3">
        <TopicPracticeLink
          moduleSlug={module.slug}
          topicSlug={topic.slug}
          topicId={topic.id}
        />
        {topic.videoUrl && <VideoTutorialModal videoUrl={topic.videoUrl} />}
      </div>

      <TopicLessonLayout blocks={lesson.blocks} />

      <KeyTakeaways items={lesson.keyTakeaways} />

      {quiz && <TopicQuizSection quiz={quiz} />}

      <div className="mt-8">
        <MarkCompleteButton topicId={topic.id} />
      </div>

      <TopicNavigation module={module} topic={topic} />
    </article>
  );
}
