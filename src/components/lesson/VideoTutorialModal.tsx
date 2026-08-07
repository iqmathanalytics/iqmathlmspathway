"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { YoutubeVideoModal } from "./YoutubeVideoModal";

interface VideoTutorialModalProps {
  videoUrl: string;
}

export function VideoTutorialModal({ videoUrl }: VideoTutorialModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-800 hover:bg-purple-100 transition-colors"
      >
        <Play className="h-4 w-4 fill-purple-600 text-purple-600" />
        Video Tutorial
      </button>

      {isOpen && (
        <YoutubeVideoModal
          videoUrl={videoUrl}
          title="Video Tutorial"
          onClose={() => setIsOpen(false)}
          accentColor="#7c3aed"
        />
      )}
    </>
  );
}
