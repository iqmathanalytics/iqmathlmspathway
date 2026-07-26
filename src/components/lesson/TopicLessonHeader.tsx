"use client";

import { Clock } from "lucide-react";

interface TopicLessonHeaderProps {
  moduleId: number;
  moduleName: string;
  title: string;
  intro: string;
  estimatedMinutes: number;
}

export function TopicLessonHeader({
  moduleId,
  moduleName,
  title,
  intro,
  estimatedMinutes,
}: TopicLessonHeaderProps) {
  return (
    <header className="mt-4 min-w-0 border-b border-gray-200 pb-6">
      <p className="break-words text-sm font-semibold text-brand-600">
        Module {moduleId}: {moduleName}
      </p>
      <h1 className="mt-1 break-words text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-3 break-words text-lg leading-relaxed text-gray-600">{intro}</p>
      <p className="mt-3 flex items-center gap-1 text-sm text-gray-500">
        <Clock className="h-4 w-4" />
        About {estimatedMinutes} minutes
      </p>
    </header>
  );
}
