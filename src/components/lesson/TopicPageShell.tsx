"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { PanelLeft } from "lucide-react";
import clsx from "clsx";
import type { CourseId, Module, Topic } from "@/lib/types";
import { CourseTopicSidebar } from "./CourseTopicSidebar";

const STORAGE_KEY = "lesson-sidebar-open";

interface TopicPageShellProps {
  courseId: CourseId;
  module: Module;
  topic: Topic;
  children: ReactNode;
}

export function TopicPageShell({ courseId, module, topic, children }: TopicPageShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        setSidebarOpen(stored === "true");
      } else {
        setSidebarOpen(window.matchMedia("(min-width: 1024px)").matches);
      }
    } catch {
      setSidebarOpen(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, String(sidebarOpen));
    } catch {
      /* ignore */
    }
  }, [sidebarOpen, hydrated]);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="relative w-full lg:flex lg:h-[calc(100vh-3.5rem)] lg:min-h-0 lg:overflow-hidden">
      <CourseTopicSidebar
        courseId={courseId}
        currentModule={module}
        currentTopic={topic}
        open={sidebarOpen}
        onClose={closeSidebar}
      />

      <div className="relative min-w-0 flex-1 lg:flex lg:flex-col lg:overflow-hidden">
        {/* Open sidebar — shown when collapsed */}
        {!sidebarOpen && hydrated && (
          <button
            type="button"
            onClick={openSidebar}
            className={clsx(
              "fixed z-40 flex items-center justify-center border border-gray-200/90 bg-white/95 text-gray-800 shadow-lg backdrop-blur-md",
              "transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-xl active:scale-[0.98]",
              /* Mobile: floating button bottom-left */
              "bottom-5 left-4 h-11 w-11 rounded-full",
              /* Desktop: tab on left edge, below site header */
              "lg:bottom-auto lg:left-0 lg:top-[calc(3.5rem+1rem)] lg:h-10 lg:w-10 lg:rounded-r-xl lg:rounded-l-none lg:border-l-0 lg:shadow-md"
            )}
            aria-label="Open course navigation"
            title="Open navigation"
          >
            <PanelLeft className="h-4 w-4 shrink-0 text-brand-600 lg:h-5 lg:w-5" />
          </button>
        )}

        {children}
      </div>
    </div>
  );
}
