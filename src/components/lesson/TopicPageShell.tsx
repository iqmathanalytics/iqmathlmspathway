"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { PanelLeft, Terminal } from "lucide-react";
import clsx from "clsx";
import type { CourseId, Module, Topic } from "@/lib/types";
import { getPracticeCountByTopic } from "@/data/practice";
import { CourseAccessGate } from "@/components/courses/CourseAccessGate";
import { CourseTopicSidebar } from "@/components/lesson/CourseTopicSidebar";
import { TopicPracticeSidebar } from "@/components/lesson/TopicPracticeSidebar";
import { TopicPracticeSlideContext } from "@/components/lesson/TopicPracticeSlideContext";

const DESKTOP_STORAGE_KEY = "lesson-sidebar-open-lg";

interface TopicPageShellProps {
  courseId: CourseId;
  module: Module;
  topic: Topic;
  children: ReactNode;
}

export function TopicPageShell({ courseId, module, topic, children }: TopicPageShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const practiceCount = useMemo(
    () => getPracticeCountByTopic(topic.id),
    [topic.id]
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      const desktop = mq.matches;
      setIsDesktop(desktop);
      if (desktop) {
        try {
          const stored = localStorage.getItem(DESKTOP_STORAGE_KEY);
          setSidebarOpen(stored === null ? true : stored === "true");
        } catch {
          setSidebarOpen(true);
        }
      } else {
        setSidebarOpen(false);
      }
      setPracticeOpen(false);
      setHydrated(true);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Close practice panel when navigating to another topic
  useEffect(() => {
    setPracticeOpen(false);
  }, [topic.id]);

  useEffect(() => {
    if (!hydrated || !isDesktop) return;
    try {
      localStorage.setItem(DESKTOP_STORAGE_KEY, String(sidebarOpen));
    } catch {
      /* ignore */
    }
  }, [sidebarOpen, hydrated, isDesktop]);

  const openSidebar = useCallback(() => {
    setPracticeOpen(false);
    setSidebarOpen(true);
  }, []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  const openPractice = useCallback(() => {
    setSidebarOpen(false);
    setPracticeOpen(true);
  }, []);
  const closePractice = useCallback(() => setPracticeOpen(false), []);

  const practiceCtx = useMemo(
    () => ({
      openPracticeSlide: openPractice,
      practiceCount,
    }),
    [openPractice, practiceCount]
  );

  return (
    <CourseAccessGate courseId={courseId}>
      <TopicPracticeSlideContext.Provider value={practiceCtx}>
        <div className="relative flex h-[calc(100dvh-3.5rem)] min-h-0 w-full flex-1 overflow-hidden">
          <CourseTopicSidebar
            courseId={courseId}
            currentModule={module}
            currentTopic={topic}
            open={sidebarOpen}
            onClose={closeSidebar}
          />

          <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            {!sidebarOpen && hydrated && (
              <button
                type="button"
                onClick={openSidebar}
                className={clsx(
                  "fixed z-40 flex items-center justify-center border border-gray-200/90 bg-white/95 text-gray-800 shadow-lg backdrop-blur-md",
                  "transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-xl active:scale-[0.98]",
                  "dark:border-slate-600 dark:bg-slate-900/95 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800",
                  "bottom-5 left-4 h-11 w-11 rounded-full",
                  "lg:bottom-auto lg:left-0 lg:top-[calc(3.5rem+1rem)] lg:h-10 lg:w-10 lg:rounded-r-xl lg:rounded-l-none lg:border-l-0 lg:shadow-md"
                )}
                aria-label="Open course navigation"
                title="Open navigation"
              >
                <PanelLeft className="h-4 w-4 shrink-0 text-brand-600 lg:h-5 lg:w-5" />
              </button>
            )}

            {practiceCount > 0 && !practiceOpen && hydrated && (
              <button
                type="button"
                onClick={openPractice}
                className={clsx(
                  "fixed z-40 flex items-center justify-center border border-brand-200/90 bg-brand-600 text-white shadow-lg",
                  "transition-all duration-200 hover:bg-brand-700 hover:shadow-xl active:scale-[0.98]",
                  "bottom-5 right-4 h-11 w-11 rounded-full",
                  "lg:bottom-auto lg:right-0 lg:top-[calc(3.5rem+1rem)] lg:h-10 lg:w-10 lg:rounded-l-xl lg:rounded-r-none lg:border-r-0"
                )}
                aria-label="Open module challenges"
                title="Module challenges"
              >
                <Terminal className="h-4 w-4 shrink-0 lg:h-5 lg:w-5" />
              </button>
            )}

            <div className="min-h-0 flex-1 overflow-hidden">{children}</div>

            {practiceCount > 0 && (
              <TopicPracticeSidebar
                module={module}
                topic={topic}
                open={practiceOpen}
                onClose={closePractice}
              />
            )}
          </div>
        </div>
      </TopicPracticeSlideContext.Provider>
    </CourseAccessGate>
  );
}
