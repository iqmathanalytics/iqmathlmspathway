"use client";

import type { Module, UserProgress } from "@/lib/types";
import { ModuleCard } from "@/components/curriculum/ModuleCard";
import { ProgressTracker } from "@/components/progress/ProgressTracker";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { Loader2 } from "lucide-react";
import { isAdmin } from "@/lib/admin";
import { getUnlockedTopicIds } from "@/lib/topic-locking";
import { hasQuiz } from "@/data/quizzes/meta";

interface LearningPathClientProps {
  modules: Module[];
}

function ModuleGrid({
  modules,
  progress,
  unlockAll,
}: {
  modules: Module[];
  progress: UserProgress;
  unlockAll?: boolean;
}) {
  const unlockedTopicIds = getUnlockedTopicIds(modules, progress, hasQuiz, {
    unlockAll,
  });

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
  const { profile } = useAuth();
  const { progress, ready } = useProgress();
  const unlockAll = isAdmin(profile);

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
      <ModuleGrid modules={modules} progress={progress} unlockAll={unlockAll} />
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
