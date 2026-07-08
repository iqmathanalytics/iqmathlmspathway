"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Circle,
  LayoutDashboard,
  Lock,
  X,
} from "lucide-react";
import clsx from "clsx";
import type { CourseId, Module, Topic } from "@/lib/types";
import { getModulesByCourse } from "@/data/curriculum";
import { getCourse } from "@/data/courses";
import { getQuiz } from "@/data/quizzes";
import { useProgress } from "@/contexts/ProgressContext";
import { isTopicProgressionDone, isTopicUnlocked } from "@/lib/topic-locking";
import { modules } from "@/data/curriculum";
import { NavigationLink } from "@/components/ui/NavigationLink";

interface CourseTopicSidebarProps {
  courseId: CourseId;
  currentModule: Module;
  currentTopic: Topic;
  open?: boolean;
  onClose?: () => void;
  className?: string;
}

const ACCENT: Record<
  CourseId,
  {
    moduleActive: string;
    topicActive: string;
    topicHover: string;
    ring: string;
    badge: string;
    progress: string;
  }
> = {
  python: {
    moduleActive: "bg-brand-50/80 text-brand-900",
    topicActive: "bg-brand-50 text-brand-900 border-brand-500 shadow-sm",
    topicHover: "hover:bg-brand-50/60 hover:text-brand-900",
    ring: "ring-brand-200",
    badge: "bg-brand-100 text-brand-800",
    progress: "bg-brand-500",
  },
  "agentic-ai": {
    moduleActive: "bg-violet-50/80 text-violet-900",
    topicActive: "bg-violet-50 text-violet-900 border-violet-500 shadow-sm",
    topicHover: "hover:bg-violet-50/60 hover:text-violet-900",
    ring: "ring-violet-200",
    badge: "bg-violet-100 text-violet-800",
    progress: "bg-violet-500",
  },
  sql: {
    moduleActive: "bg-sky-50/80 text-sky-900",
    topicActive: "bg-sky-50 text-sky-900 border-sky-500 shadow-sm",
    topicHover: "hover:bg-sky-50/60 hover:text-sky-900",
    ring: "ring-sky-200",
    badge: "bg-sky-100 text-sky-800",
    progress: "bg-sky-500",
  },
};

function ModuleSection({
  mod,
  currentModuleSlug,
  currentTopicSlug,
  expanded,
  onToggle,
  accent,
  progress,
  hasQuiz,
  onNavigate,
}: {
  mod: Module;
  currentModuleSlug: string;
  currentTopicSlug: string;
  expanded: boolean;
  onToggle: () => void;
  accent: (typeof ACCENT)[CourseId];
  progress: ReturnType<typeof useProgress>["progress"];
  hasQuiz: (id: string) => boolean;
  onNavigate?: () => void;
}) {
  const published = mod.topics.filter((t) => t.published);
  const completedCount = published.filter((t) =>
    isTopicProgressionDone(progress, t.id, hasQuiz(t.id))
  ).length;
  const isCurrentModule = mod.slug === currentModuleSlug;
  const moduleProgressPct =
    published.length > 0 ? Math.round((completedCount / published.length) * 100) : 0;

  return (
    <div
      className={clsx(
        "rounded-xl border transition-colors duration-200",
        isCurrentModule ? clsx("border-gray-200/90 shadow-sm", accent.ring, "ring-1") : "border-transparent"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          "flex w-full items-center gap-2 rounded-xl px-2.5 py-2.5 text-left transition-colors duration-200",
          expanded ? accent.moduleActive : "text-gray-800 hover:bg-gray-50"
        )}
        aria-expanded={expanded}
      >
        {mod.iconImage ? (
          <Image
            src={mod.iconImage}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 shrink-0 rounded-lg object-contain"
          />
        ) : (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-[10px] font-bold text-gray-600">
            {mod.icon}
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold leading-tight">
            {mod.name}
          </span>
          <span className="mt-0.5 flex items-center gap-2 text-[11px] text-gray-500">
            <span>
              {completedCount}/{published.length} topics
            </span>
            <span className="h-1 flex-1 max-w-[72px] overflow-hidden rounded-full bg-gray-200">
              <span
                className={clsx("block h-full rounded-full transition-all duration-500 ease-out", accent.progress)}
                style={{ width: `${moduleProgressPct}%` }}
              />
            </span>
          </span>
        </span>
        <ChevronDown
          className={clsx(
            "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300 ease-out",
            expanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-0.5 px-1.5 pb-2 pt-0.5">
            {published.map((topic) => {
              const isActive =
                mod.slug === currentModuleSlug && topic.slug === currentTopicSlug;
              const unlocked = isTopicUnlocked(modules, topic.id, progress, hasQuiz);
              const done = isTopicProgressionDone(progress, topic.id, hasQuiz(topic.id));
              const href = `/learn/${mod.slug}/${topic.slug}`;

              return (
                <li key={topic.id}>
                  {unlocked ? (
                    <NavigationLink
                      href={href}
                      onClick={onNavigate}
                      data-sidebar-topic={isActive ? "active" : undefined}
                      className={clsx(
                        "group flex items-start gap-2 rounded-lg border-l-2 py-2 pl-2.5 pr-2 text-sm transition-all duration-200 ease-out",
                        isActive
                          ? accent.topicActive
                          : clsx("border-transparent text-gray-600", accent.topicHover)
                      )}
                    >
                      <span className="mt-0.5 shrink-0">
                        {done ? (
                          <CheckCircle2
                            className={clsx(
                              "h-4 w-4 transition-colors",
                              isActive ? "text-current" : "text-green-500"
                            )}
                          />
                        ) : (
                          <Circle
                            className={clsx(
                              "h-4 w-4 transition-colors",
                              isActive ? "text-current opacity-70" : "text-gray-300 group-hover:text-gray-400"
                            )}
                          />
                        )}
                      </span>
                      <span className="min-w-0 flex-1 leading-snug">
                        <span className={clsx("block", isActive && "font-semibold")}>
                          {topic.title}
                        </span>
                        {topic.estimatedMinutes > 0 && (
                          <span className="mt-0.5 block text-[11px] text-gray-400">
                            ~{topic.estimatedMinutes} min
                          </span>
                        )}
                      </span>
                    </NavigationLink>
                  ) : (
                    <span
                      className="flex cursor-not-allowed items-start gap-2 rounded-lg border-l-2 border-transparent py-2 pl-2.5 pr-2 text-sm text-gray-400"
                      title="Complete the previous topic to unlock"
                    >
                      <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                      <span className="leading-snug">{topic.title}</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CourseTopicSidebar({
  courseId,
  currentModule,
  currentTopic,
  open = true,
  onClose,
  className,
}: CourseTopicSidebarProps) {
  const { progress, ready } = useProgress();
  const scrollRef = useRef<HTMLDivElement>(null);
  const course = getCourse(courseId);
  const accent = ACCENT[courseId];
  const courseModules = useMemo(() => getModulesByCourse(courseId), [courseId]);

  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    () => new Set([currentModule.slug])
  );

  useEffect(() => {
    setExpandedModules((prev) => new Set(prev).add(currentModule.slug));
  }, [currentModule.slug]);

  useEffect(() => {
    if (!ready) return;
    const root = scrollRef.current;
    if (!root) return;
    const active = root.querySelector('[data-sidebar-topic="active"]');
    if (active instanceof HTMLElement) {
      active.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [currentModule.slug, currentTopic.slug, ready, open]);

  const hasQuiz = useCallback((topicId: string) => !!getQuiz(topicId), []);

  const toggleModule = useCallback((slug: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }, []);

  const sidebarBody = (
    <>
      <div className="border-b border-gray-100 px-4 py-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            {course?.iconImage && (
              <Image
                src={course.iconImage}
                alt=""
                width={32}
                height={32}
                className="mb-2 h-8 w-8 object-contain"
              />
            )}
            <p className={clsx("text-[11px] font-semibold uppercase tracking-wide", accent.badge, "inline-flex rounded-full px-2 py-0.5")}>
              Course
            </p>
            <h2 className="mt-1 truncate text-base font-bold text-gray-900">
              {course?.name ?? "Course"}
            </h2>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <NavigationLink
          href={`/dashboard?course=${courseId}`}
          onClick={onClose}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gray-800"
        >
          <LayoutDashboard className="h-3.5 w-3.5" />
          Back to dashboard
        </NavigationLink>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overscroll-contain px-3 py-3 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.15)_transparent]"
      >
        <nav aria-label="Course modules and topics" className="space-y-2">
          {courseModules.map((mod) => (
            <ModuleSection
              key={mod.id}
              mod={mod}
              currentModuleSlug={currentModule.slug}
              currentTopicSlug={currentTopic.slug}
              expanded={expandedModules.has(mod.slug)}
              onToggle={() => toggleModule(mod.slug)}
              accent={accent}
              progress={progress}
              hasQuiz={hasQuiz}
              onNavigate={onClose}
            />
          ))}
        </nav>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar — slides closed with width transition */}
      <aside
        className={clsx(
          "hidden shrink-0 flex-col border-r border-gray-200/90 bg-gradient-to-b from-gray-50/90 to-white",
          "overflow-hidden transition-[width,opacity,border-color] duration-300 ease-in-out lg:flex",
          open
            ? "w-[min(100%,18.5rem)] opacity-100"
            : "w-0 border-transparent opacity-0 pointer-events-none",
          className
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full w-[min(100%,18.5rem)] min-w-[18.5rem] flex-col">
          {sidebarBody}
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={clsx(
            "absolute inset-0 bg-gray-900/40 backdrop-blur-[2px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={onClose}
          aria-label="Close navigation overlay"
        />
        <aside
          className={clsx(
            "absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {sidebarBody}
        </aside>
      </div>
    </>
  );
}
