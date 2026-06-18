"use client";

import type { Module, UserProgress } from "@/lib/types";
import { ModuleCard } from "@/components/curriculum/ModuleCard";
import { ProgressTracker } from "@/components/progress/ProgressTracker";
import { useProgress } from "@/contexts/ProgressContext";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { Loader2 } from "lucide-react";
import { getUnlockedTopicIds } from "@/lib/topic-locking";
import { getQuiz } from "@/data/quizzes";

interface LearningPathClientProps {
  modules: Module[];
}

function ModuleGrid({
  modules,
  progress,
}: {
  modules: Module[];
  progress: UserProgress;
}) {
  const unlockedTopicIds = getUnlockedTopicIds(modules, progress, (topicId) => !!getQuiz(topicId));

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {modules.map((module) => (
        <ModuleCard
          key={module.id}
          module={module}
          completedTopicIds={progress.completedTopics}
          unlockedTopicIds={unlockedTopicIds}
        />
      ))}
    </div>
  );
}

function LearningPathInner({ modules }: LearningPathClientProps) {
  const { progress, ready } = useProgress();

  if (!ready) {
    return (
      <div className="space-y-8">
        <ProgressTracker />
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ProgressTracker />
      <ModuleGrid modules={modules} progress={progress} />
    </div>
  );
}

export function LearningPathClient({ modules }: LearningPathClientProps) {
  return (
    <ClientOnly
      fallback={
        <div className="space-y-8">
          <ProgressTracker />
          <ModuleGrid
            modules={modules}
            progress={{ completedTopics: [], quizScores: {}, ideRan: [] }}
          />
        </div>
      }
    >
      <LearningPathInner modules={modules} />
    </ClientOnly>
  );
}
