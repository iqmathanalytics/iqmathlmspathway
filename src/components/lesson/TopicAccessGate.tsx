"use client";

import type { ReactNode } from "react";

interface TopicAccessGateProps {
  previousTopicId?: string;
  previousTopicTitle?: string;
  previousTopicHasQuiz?: boolean;
  moduleHref: string;
  children: ReactNode;
}

export function TopicAccessGate({
  previousTopicId: _previousTopicId,
  previousTopicTitle: _previousTopicTitle,
  previousTopicHasQuiz: _previousTopicHasQuiz = false,
  moduleHref: _moduleHref,
  children,
}: TopicAccessGateProps) {
  // Temporarily disabled for testing so any published topic can be opened from
  // dashboard/module navigation without sequential completion.
  return <>{children}</>;
}
