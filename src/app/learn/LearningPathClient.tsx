"use client";

import type { Module } from "@/lib/types";
import { ModuleCard } from "@/components/curriculum/ModuleCard";
import { ProgressTracker } from "@/components/progress/ProgressTracker";
import { useProgress } from "@/contexts/ProgressContext";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { Loader2 } from "lucide-react";

interface LearningPathClientProps {
  modules: Module[];
}

function ModuleGrid({
  modules,
  completedIds,
}: {
  modules: Module[];
  completedIds: string[];
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {modules.map((module) => (
        <ModuleCard
          key={module.id}
          module={module}
          completedTopicIds={completedIds}
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
      <ModuleGrid modules={modules} completedIds={progress.completedTopics} />
    </div>
  );
}

export function LearningPathClient({ modules }: LearningPathClientProps) {
  return (
    <ClientOnly
      fallback={
        <div className="space-y-8">
          <ProgressTracker />
          <ModuleGrid modules={modules} completedIds={[]} />
        </div>
      }
    >
      <LearningPathInner modules={modules} />
    </ClientOnly>
  );
}
