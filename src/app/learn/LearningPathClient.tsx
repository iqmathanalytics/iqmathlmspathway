"use client";

import { useEffect, useState } from "react";
import type { Module } from "@/lib/types";
import { loadProgress } from "@/lib/progress";
import { ModuleCard } from "@/components/curriculum/ModuleCard";
import { ProgressTracker } from "@/components/progress/ProgressTracker";
import { ClientOnly } from "@/components/ui/ClientOnly";

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
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  useEffect(() => {
    setCompletedIds(loadProgress().completedTopics);
  }, []);

  return (
    <div className="space-y-8">
      <ProgressTracker />
      <ModuleGrid modules={modules} completedIds={completedIds} />
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
