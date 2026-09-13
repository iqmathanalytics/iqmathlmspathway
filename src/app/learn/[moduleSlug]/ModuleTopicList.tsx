"use client";

import type { Module } from "@/lib/types";
import { CheckCircle2, Circle, Lock, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { NavigationLink } from "@/components/ui/NavigationLink";
import { isAdmin } from "@/lib/admin";
import { getUnlockedTopicIds } from "@/lib/topic-locking";
import { hasQuiz } from "@/data/quizzes/meta";

interface ModuleTopicListProps {
  courseModule: Module;
  courseModules: Module[];
  /** Richer per-topic explanations keyed by topic id. */
  topicExplanations?: Record<string, string>;
}

export function ModuleTopicList({
  courseModule,
  courseModules,
  topicExplanations,
}: ModuleTopicListProps) {
  const { profile } = useAuth();
  const { progress, ready } = useProgress();
  const published = courseModule.topics.filter((t) => t.published);
  const completedIds = ready ? progress.completedTopics : [];
  const unlockedTopicIds = getUnlockedTopicIds(courseModules, progress, hasQuiz, {
    unlockAll: isAdmin(profile),
  });
  const firstUnlockedTopic = published.find((topic) => unlockedTopicIds.has(topic.id));

  return (
    <>
      <ol className={`${topicExplanations ? "mt-4" : "mt-8"} space-y-3`}>
        {courseModule.topics.map((topic, i) => {
          const isDone = completedIds.includes(topic.id);
          const isUnlocked = topic.published && unlockedTopicIds.has(topic.id);
          const explanation =
            topicExplanations?.[topic.id] ?? topic.description;

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
                      className="flex items-start gap-3 p-4"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900">{topic.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                          {explanation}
                        </p>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 pt-1 text-xs text-gray-400">
                        <Clock className="h-3.5 w-3.5" />
                        {topic.estimatedMinutes} min
                      </span>
                      {isDone ? (
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                      ) : (
                        <Circle className="mt-1 h-5 w-5 shrink-0 text-gray-300" />
                      )}
                    </NavigationLink>
                  ) : (
                    <div className="flex items-start gap-3 p-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-400">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-500">{topic.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">
                          {explanation}
                        </p>
                        <p className="mt-1.5 text-xs font-medium text-amber-700">
                          Complete the previous topic to unlock this lesson.
                        </p>
                      </div>
                      <span className="hidden shrink-0 items-center gap-1 pt-1 text-xs text-gray-400 sm:flex">
                        <Clock className="h-3.5 w-3.5" />
                        {topic.estimatedMinutes} min
                      </span>
                      <Lock className="mt-1 h-5 w-5 shrink-0 text-gray-400" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-start gap-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 opacity-70">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-600">{topic.title}</p>
                    <p className="mt-1 text-sm text-gray-400">
                      {explanation || "Coming in a future update"}
                    </p>
                  </div>
                  <Lock className="mt-1 h-4 w-4 shrink-0 text-gray-400" />
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
            {completedIds.length > 0 ? "Continue with" : "Start with"}:{" "}
            {firstUnlockedTopic.title}
          </NavigationLink>
        </div>
      )}
    </>
  );
}
