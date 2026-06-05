"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/contexts/ProgressContext";
import { markTopicCompleteAsync } from "@/lib/progress-service";
import { CheckCircle2 } from "lucide-react";

interface MarkCompleteButtonProps {
  topicId: string;
}

export function MarkCompleteButton({ topicId }: MarkCompleteButtonProps) {
  const { user } = useAuth();
  const { progress, ready } = useProgress();
  const [saving, setSaving] = useState(false);

  const done = ready && progress.completedTopics.includes(topicId);

  async function handleClick() {
    if (!user) return;
    setSaving(true);
    await markTopicCompleteAsync(user.id, topicId);
    setSaving(false);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={done || saving}
      className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-600 bg-brand-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:border-green-600 disabled:bg-green-600"
    >
      <CheckCircle2 className="h-5 w-5" />
      {done ? "Topic marked complete!" : saving ? "Saving…" : "Mark this topic as complete"}
    </button>
  );
}
