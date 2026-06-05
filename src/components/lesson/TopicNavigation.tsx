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
          className="flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800"
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
          className="flex items-center justify-end gap-1 text-sm font-medium text-brand-700 hover:text-brand-800 sm:ml-auto"
        >
          {next.topic.title}
          <ChevronRight className="h-4 w-4" />
        </NavigationLink>
      ) : (
        <NavigationLink
          href={`/learn/${module.slug}`}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 sm:ml-auto"
        >
          Back to module
        </NavigationLink>
      )}
    </nav>
  );
}
