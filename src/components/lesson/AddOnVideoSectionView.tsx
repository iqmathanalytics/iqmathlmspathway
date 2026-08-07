"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Clock, Video } from "lucide-react";
import type { Module, Topic } from "@/lib/types";
import type { AddOnVideoSection, AddOnVideoTopic } from "@/data/mba-add-on-videos";
import { YoutubeVideoModal } from "@/components/lesson/YoutubeVideoModal";

interface AddOnVideoSectionViewProps {
  module: Module;
  sectionTopic: Topic;
  section: AddOnVideoSection;
}

export function AddOnVideoSectionView({
  module,
  sectionTopic,
  section,
}: AddOnVideoSectionViewProps) {
  const [active, setActive] = useState<AddOnVideoTopic | null>(null);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <nav className="text-sm text-gray-500">
        <Link href="/dashboard" className="hover:text-brand-700">
          Dashboard
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/learn/${module.slug}`} className="hover:text-brand-700">
          Add On
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{sectionTopic.title}</span>
      </nav>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Video module
        </p>
        <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
          {section.title}
        </h1>
        <p className="mt-2 text-gray-600">{section.description}</p>
      </div>

      {section.topics.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 px-6 py-12 text-center">
          <Video className="mx-auto h-10 w-10 text-brand-400" />
          <p className="mt-3 font-semibold text-gray-900">Topics coming soon</p>
          <p className="mt-1 text-sm text-gray-500">
            Video topics for {section.title} will appear here. Click a topic name to play.
          </p>
        </div>
      ) : (
        <ol className="mt-8 space-y-3">
          {section.topics.map((topic, index) => {
            const hasVideo = Boolean(topic.videoUrl?.trim());

            return (
              <li key={topic.id}>
                <button
                  type="button"
                  disabled={!hasVideo}
                  onClick={() => hasVideo && setActive(topic)}
                  className={`flex w-full items-center gap-3 rounded-xl border bg-white p-4 text-left shadow-sm transition-all ${
                    hasVideo
                      ? "border-gray-200 hover:border-brand-300 hover:shadow-md"
                      : "cursor-not-allowed border-dashed border-gray-200 opacity-60"
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900">{topic.title}</p>
                    {topic.description ? (
                      <p className="mt-0.5 text-sm text-gray-500">{topic.description}</p>
                    ) : !hasVideo ? (
                      <p className="mt-0.5 text-sm text-gray-400">Video link pending</p>
                    ) : null}
                  </div>
                  {topic.estimatedMinutes != null && (
                    <span className="hidden items-center gap-1 text-xs text-gray-400 sm:flex">
                      <Clock className="h-3.5 w-3.5" />
                      {topic.estimatedMinutes} min
                    </span>
                  )}
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      hasVideo ? "bg-brand-600 text-white" : "bg-gray-100 text-gray-400"
                    }`}
                    aria-hidden
                  >
                    <Play className={`h-4 w-4 ${hasVideo ? "fill-white" : ""}`} />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      )}

      <div className="mt-10">
        <Link
          href={`/learn/${module.slug}`}
          className="text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          ← Back to Add On
        </Link>
      </div>

      {active?.videoUrl && (
        <YoutubeVideoModal
          videoUrl={active.videoUrl}
          title={active.title}
          onClose={() => setActive(null)}
          accentColor="#0F75BD"
        />
      )}
    </div>
  );
}
