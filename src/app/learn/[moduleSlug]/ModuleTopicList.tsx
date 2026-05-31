"use client";

import Link from "next/link";
import type { Module } from "@/lib/types";
import { CheckCircle2, Circle, Lock, Clock } from "lucide-react";

interface ModuleTopicListProps {
  courseModule: Module;
}

export function ModuleTopicList({ courseModule }: ModuleTopicListProps) {
  const published = courseModule.topics.filter((t) => t.published);

  return (
    <>
      <ol className="mt-8 space-y-3">
        {courseModule.topics.map((topic, i) => (
          <li key={topic.id}>
            {topic.published ? (
              <Link
                href={`/learn/${courseModule.slug}/${topic.slug}`}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:border-brand-200 hover:shadow-md"
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
                <Circle className="h-5 w-5 text-gray-300" />
              </Link>
            ) : (
              <div className="flex items-center gap-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 opacity-70">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-500">
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
        ))}
      </ol>

      {published.length > 0 && (
        <div className="mt-8">
          <Link
            href={`/learn/${courseModule.slug}/${published[0].slug}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white hover:bg-brand-700"
          >
            <CheckCircle2 className="h-5 w-5" />
            Start with: {published[0].title}
          </Link>
        </div>
      )}
    </>
  );
}
