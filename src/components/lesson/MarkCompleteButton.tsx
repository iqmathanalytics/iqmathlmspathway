"use client";

import { useState } from "react";
import { markTopicComplete } from "@/lib/progress";
import { CheckCircle2 } from "lucide-react";

interface MarkCompleteButtonProps {
  topicId: string;
}

export function MarkCompleteButton({ topicId }: MarkCompleteButtonProps) {
  const [done, setDone] = useState(false);

  function handleClick() {
    markTopicComplete(topicId);
    setDone(true);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={done}
      className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-600 bg-brand-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:border-green-600 disabled:bg-green-600"
    >
      <CheckCircle2 className="h-5 w-5" />
      {done ? "Topic marked complete!" : "Mark this topic as complete"}
    </button>
  );
}
