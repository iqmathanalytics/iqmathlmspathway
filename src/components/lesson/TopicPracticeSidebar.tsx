"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Lock,
  Terminal,
  X,
} from "lucide-react";
import clsx from "clsx";
import type { Module, Topic } from "@/lib/types";
import { getProblemsByTopic } from "@/data/practice";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import { useEntitlements } from "@/hooks/useEntitlements";
import { isProblemPremium } from "@/lib/practice-config";
import {
  getSolvedPracticeIds,
  isCoursePracticeProblemUnlocked,
} from "@/lib/course-practice-unlock";
import { courseChallengeHref } from "@/lib/course-practice-links";
import { NavigationLink } from "@/components/ui/NavigationLink";

interface TopicPracticeSidebarProps {
  module: Module;
  topic: Topic;
  open: boolean;
  onClose: () => void;
}

export function TopicPracticeSidebar({
  module,
  topic,
  open,
  onClose,
}: TopicPracticeSidebarProps) {
  const problems = getProblemsByTopic(topic.id);
  const problemIds = problems.map((p) => p.id);
  const { rows, loading } = usePracticeProgress(problemIds);
  const { hasPremium } = useEntitlements();
  const solvedIds = getSolvedPracticeIds(rows);
  const solvedCount = problems.filter((p) => solvedIds.has(p.id)).length;

  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = listRef.current;
    if (!el) {
      setCanScrollUp(false);
      setCanScrollDown(false);
      return;
    }
    const max = el.scrollHeight - el.clientHeight;
    setCanScrollUp(el.scrollTop > 4);
    setCanScrollDown(max > 4 && el.scrollTop < max - 4);
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [open, problems.length, updateScrollState]);

  function scrollList(direction: "up" | "down") {
    const el = listRef.current;
    if (!el) return;
    const amount = Math.max(120, Math.floor(el.clientHeight * 0.7));
    el.scrollBy({
      top: direction === "down" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={clsx(
          // Viewport-frozen below the header — never stretches with page content
          "fixed bottom-0 right-0 top-14 z-50 flex w-[min(100%,22rem)] flex-col border-l border-gray-200 bg-white shadow-xl transition-transform duration-200 dark:border-slate-700 dark:bg-slate-900",
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
        aria-hidden={!open}
        aria-label="Module challenge questions"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-gray-100 px-4 py-3 dark:border-slate-800">
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
              <Terminal className="h-3.5 w-3.5" />
              Module challenges
            </p>
            <h2 className="mt-1 truncate text-sm font-bold text-gray-900 dark:text-slate-50">
              {topic.title}
            </h2>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-slate-400">
              {loading
                ? "Loading progress…"
                : `${solvedCount} / ${problems.length} solved`}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Close challenges panel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div
            ref={listRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2 [scrollbar-gutter:stable]"
            onWheel={(e) => e.stopPropagation()}
          >
            {problems.length === 0 ? (
              <p className="px-2 py-6 text-center text-sm text-gray-500 dark:text-slate-400">
                No challenges for this topic yet.
              </p>
            ) : (
              <ul className="space-y-1">
                {problems.map((p, index) => {
                  const listNumber = index + 1;
                  const unlocked = isCoursePracticeProblemUnlocked(
                    problems,
                    p.id,
                    solvedIds
                  );
                  const solved = solvedIds.has(p.id);
                  const premiumLocked =
                    isProblemPremium(p.order) && !hasPremium && !solved;
                  const canOpen = unlocked && !premiumLocked;
                  const href = courseChallengeHref(
                    module.slug,
                    topic.slug,
                    p.slug,
                    { returnToLesson: true }
                  );

                  const rowClass = clsx(
                    "flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2.5 text-left text-sm transition",
                    canOpen
                      ? "text-gray-900 hover:bg-brand-50/80 dark:text-slate-100 dark:hover:bg-brand-900/40"
                      : "cursor-not-allowed text-gray-400 dark:text-slate-500"
                  );

                  const icon = solved ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                  ) : !unlocked || premiumLocked ? (
                    <Lock className="mt-0.5 h-4 w-4 shrink-0 text-gray-400 dark:text-slate-500" />
                  ) : (
                    <Circle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 dark:text-brand-300" />
                  );

                  const meta = premiumLocked
                    ? "Premium — unlock practice access"
                    : !unlocked
                      ? "Solve the previous question first"
                      : p.difficulty;

                  if (canOpen) {
                    return (
                      <li key={p.id}>
                        <NavigationLink
                          href={href}
                          onClick={onClose}
                          className={rowClass}
                        >
                          {icon}
                          <span className="min-w-0 flex-1">
                            <span className="block font-medium">
                              {listNumber}. {p.title}
                            </span>
                            <span className="mt-0.5 block text-xs capitalize text-gray-500 dark:text-slate-400">
                              {meta}
                            </span>
                          </span>
                        </NavigationLink>
                      </li>
                    );
                  }

                  return (
                    <li key={p.id}>
                      <div className={rowClass} title={meta}>
                        {icon}
                        <span className="min-w-0 flex-1">
                          <span className="block font-medium">
                            {listNumber}. {p.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-gray-400 dark:text-slate-500">
                            {meta}
                          </span>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {(canScrollUp || canScrollDown) && (
            <div className="flex shrink-0 items-center justify-center gap-2 border-t border-gray-100 bg-gray-50/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/80">
              <button
                type="button"
                onClick={() => scrollList("up")}
                disabled={!canScrollUp}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs font-medium transition",
                  canScrollUp
                    ? "border-gray-200 bg-white text-gray-700 hover:border-brand-200 hover:text-brand-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600"
                )}
                aria-label="Scroll challenges up"
              >
                <ChevronUp className="h-3.5 w-3.5" />
                Up
              </button>
              <button
                type="button"
                onClick={() => scrollList("down")}
                disabled={!canScrollDown}
                className={clsx(
                  "inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs font-medium transition",
                  canScrollDown
                    ? "border-gray-200 bg-white text-gray-700 hover:border-brand-200 hover:text-brand-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
                    : "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600"
                )}
                aria-label="Scroll challenges down"
              >
                Down
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>

        <p className="shrink-0 border-t border-gray-100 px-4 py-3 text-xs leading-relaxed text-gray-500 dark:border-slate-800 dark:text-slate-400">
          These are this module’s lesson challenges — not the separate Practice
          hub. Solve in order; you return to the lesson after submitting.
        </p>
      </aside>
    </>
  );
}
