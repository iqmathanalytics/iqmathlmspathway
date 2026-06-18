"use client";

import type { Module } from "@/lib/types";
import { CheckCircle2, Circle, Lock, Clock, Terminal } from "lucide-react";
import { getPracticeCountByTopic } from "@/data/practice/meta";
import { useProgress } from "@/contexts/ProgressContext";
import { NavigationLink } from "@/components/ui/NavigationLink";
import { getUnlockedTopicIds } from "@/lib/topic-locking";
import { getQuiz } from "@/data/quizzes";

interface ModuleTopicListProps {
  courseModule: Module;
  courseModules: Module[];
}

export function ModuleTopicList({ courseModule, courseModules }: ModuleTopicListProps) {
  const { progress, ready } = useProgress();
  const published = courseModule.topics.filter((t) => t.published);
  const completedIds = ready ? progress.completedTopics : [];
  const unlockedTopicIds = getUnlockedTopicIds(courseModules, progress, (topicId) => !!getQuiz(topicId));
  const firstUnlockedTopic = published.find((topic) => unlockedTopicIds.has(topic.id));

  return (
    <>
      <ol className="mt-8 space-y-3">
        {courseModule.topics.map((topic, i) => {
          const isDone = completedIds.includes(topic.id);
          const isUnlocked = topic.published && unlockedTopicIds.has(topic.id);
          const practiceCount = getPracticeCountByTopic(topic.id);

          return (
            <li key={topic.id}>
              {topic.published ? (
                <div
                  className={`rounded-xl border bg-white shadow-sm transition-shadow ${
                    isUnlocked
                      ? "border-gray-200 hover:border-brand-200 hover:shadow-md"
                      : "border-gray-200 opacity-70"
                  }`}
                >
                  {isUnlocked ? (
                    <NavigationLink
                      href={`/learn/${courseModule.slug}/${topic.slug}`}
                      className="flex items-center gap-3 p-4"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900">{topic.title}</p>
                        <p className="text-sm text-gray-500">{topic.description}</p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="h-3.5 w-3.5" />
                        {topic.estimatedMinutes} min
                      </span>
                      {isDone ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-300" />
                      )}
                    </NavigationLink>
                  ) : (
                    <div className="flex items-center gap-3 p-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-400">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-500">{topic.title}</p>
                        <p className="text-sm text-gray-400">
                          Complete the previous topic to unlock this lesson.
                        </p>
                      </div>
                      <span className="hidden items-center gap-1 text-xs text-gray-400 sm:flex">
                        <Clock className="h-3.5 w-3.5" />
                        {topic.estimatedMinutes} min
                      </span>
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                  )}
                  {practiceCount > 0 && isUnlocked && (
                    <div className="border-t border-gray-100 px-4 py-2">
                      <NavigationLink
                        href={`/practice/${courseModule.slug}/${topic.slug}`}
                        className="flex items-center gap-1.5 text-xs font-medium text-brand-700 hover:underline"
                      >
                        <Terminal className="h-3.5 w-3.5" />
                        {practiceCount} practice problems
                      </NavigationLink>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 opacity-70">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-600">{topic.title}</p>
                    <p className="text-sm text-gray-400">Coming in a future update</p>
                  </div>
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {firstUnlockedTopic && (
        <div className="mt-8">
          <NavigationLink
            href={`/learn/${courseModule.slug}/${firstUnlockedTopic.slug}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
          >
            <CheckCircle2 className="h-5 w-5" />
            {completedIds.length > 0 ? "Continue with" : "Start with"}: {firstUnlockedTopic.title}
          </NavigationLink>
        </div>
      )}
    </>
  );
}
