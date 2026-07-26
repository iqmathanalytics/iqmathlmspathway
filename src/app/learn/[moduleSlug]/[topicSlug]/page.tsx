import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, modules, getAdjacentPublishedTopics } from "@/data/curriculum";
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
import { NextTopicButton } from "@/components/lesson/NextTopicButton";
import { GroqApiKeySetup } from "@/components/ai/GroqApiKeySetup";
import { TopicAccessGate } from "@/components/lesson/TopicAccessGate";
import { TopicPageShell } from "@/components/lesson/TopicPageShell";

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
  const hasQuiz = !!quiz;
  // Topics with no "practice" block have no IDE exercise — hide the IDE requirement
  const hasIde = lesson.blocks.some((b) => b.type === "practice");
  const { prev, next } = getAdjacentPublishedTopics(module.slug, topic.slug);

  return (
    <TopicAccessGate
      previousTopicId={prev?.topic.id}
      previousTopicTitle={prev?.topic.title}
      previousTopicHasQuiz={prev ? !!getQuiz(prev.topic.id) : false}
      moduleHref={`/learn/${module.slug}`}
    >
      {/*
      Desktop: two independent scroll columns filling the viewport below the navbar.
      Left column: header → lesson → footer (all scroll together).
      Right column: IDE (scrolls independently).
      Mobile: normal single-column page flow.
      */}
      <TopicPageShell courseId={module.course} module={module} topic={topic}>
      <article className="w-full lg:flex lg:flex-1 lg:flex-col lg:min-h-0 lg:overflow-hidden">
        <TopicLessonLayout
          blocks={lesson.blocks}
          topicId={topic.id}
          moduleSlug={module.slug}
          courseId={module.course}
          headerSlot={
            <>
              <nav className="text-sm text-gray-500">
                <Link href="/dashboard" className="hover:text-brand-700">Dashboard</Link>
                <span className="mx-2">/</span>
                <Link href={`/learn/${module.slug}`} className="hover:text-brand-700">
                  Module {module.id}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800">{topic.title}</span>
              </nav>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <TopicLessonHeader
                    moduleId={module.id}
                    moduleName={module.name}
                    title={topic.title}
                    intro={lesson.intro}
                    estimatedMinutes={topic.estimatedMinutes}
                  />
                </div>
                {next && (
                  <span data-walkthrough="lesson-next" className="shrink-0">
                    <NextTopicButton
                      topicId={topic.id}
                      hasQuiz={hasQuiz}
                      hasIde={hasIde}
                      href={`/learn/${next.module.slug}/${next.topic.slug}`}
                      label="Next Topic"
                      variant="header"
                    />
                  </span>
                )}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <TopicPracticeLink
                  moduleSlug={module.slug}
                  topicSlug={topic.slug}
                  topicId={topic.id}
                />
                {topic.videoUrl && (
                  <span data-walkthrough="lesson-video">
                    <VideoTutorialModal videoUrl={topic.videoUrl} />
                  </span>
                )}
              </div>
              {module.slug === "groq-api" && <GroqApiKeySetup />}
            </>
          }
          footerSlot={
            <>
              <KeyTakeaways items={lesson.keyTakeaways} />
              {quiz && <TopicQuizSection quiz={quiz} />}
              <div className="mt-8">
                <MarkCompleteButton topicId={topic.id} hasQuiz={hasQuiz} hasIde={hasIde} />
              </div>
              <TopicNavigation module={module} topic={topic} hasQuiz={hasQuiz} hasIde={hasIde} />
            </>
          }
        />
      </article>
      </TopicPageShell>
    </TopicAccessGate>
  );
}
