"use client";

import { NavigationLink } from "@/components/ui/NavigationLink";
import type { Module, Topic } from "@/lib/types";
import { getAdjacentPublishedTopics } from "@/data/curriculum";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TopicNavigationProps {
  module: Module;
  topic: Topic;
}

export function TopicNavigation({ module, topic }: TopicNavigationProps) {
  const { prev, next } = getAdjacentPublishedTopics(module.slug, topic.slug);

  return (
    <nav className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-between">
      {prev ? (
        <NavigationLink
          href={`/learn/${prev.module.slug}/${prev.topic.slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          {prev.topic.title}
        </NavigationLink>
      ) : (
        <span />
      )}
      {next ? (
        <NavigationLink
          href={`/learn/${next.module.slug}/${next.topic.slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-colors sm:ml-auto"
        >
          {next.topic.title}
          <ChevronRight className="h-4 w-4" />
        </NavigationLink>
      ) : (
        <NavigationLink
          href="/dashboard"
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors sm:ml-auto"
        >
          Back to Dashboard
          <ChevronRight className="h-4 w-4" />
        </NavigationLink>
      )}
    </nav>
  );
}
