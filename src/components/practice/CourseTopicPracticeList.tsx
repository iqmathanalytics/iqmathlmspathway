"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  Lock,
} from "lucide-react";
import type { PracticeListItem } from "@/lib/practice-list";
import { useAuth } from "@/contexts/AuthContext";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import { unlocksAllContent } from "@/lib/admin";
import {
  getSolvedPracticeIds,
  isCoursePracticeProblemUnlocked,
} from "@/lib/course-practice-unlock";
import {
  courseChallengeHref,
  lessonReturnPath,
} from "@/lib/course-practice-links";
import { isColabPracticeTopic } from "@/lib/colab-practice";
import { OpenInColabButton } from "@/components/ide/OpenInColabButton";

interface CourseTopicPracticeListProps {
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
  problems: PracticeListItem[];
}

export function CourseTopicPracticeList({
  moduleSlug,
  topicSlug,
  moduleName,
  topicTitle,
  problems,
}: CourseTopicPracticeListProps) {
  const { user, profile } = useAuth();
  const unlockAll = unlocksAllContent(profile, user?.email);
  const { rows, loading } = usePracticeProgress(problems.map((p) => p.id));
  const solvedIds = getSolvedPracticeIds(rows);
  const solvedCount = problems.filter((p) => solvedIds.has(p.id)).length;
  const topicId = problems.find((p) => p.topicId)?.topicId;
  const colabTopic = topicId ? isColabPracticeTopic(topicId) : false;

  return (
    <>
      <nav className="text-sm text-gray-500">
        <Link href="/dashboard" className="hover:text-brand-700">
          Dashboard
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/learn/${moduleSlug}`} className="hover:text-brand-700">
          {moduleName}
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={lessonReturnPath(moduleSlug, topicSlug)}
          className="hover:text-brand-700"
        >
          {topicTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Challenges</span>
      </nav>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">
        Challenges · {topicTitle}
      </h1>
      <p className="mt-2 max-w-2xl text-gray-600">
        {loading
          ? "Loading progress…"
          : `${solvedCount} / ${problems.length} solved — these are this module’s topic challenges only (not the Practice hub). Unlock the next by finishing the previous.`}
      </p>
      {colabTopic && (
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-orange-200 bg-orange-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-900">
              Working with the data-science libraries
            </p>
            <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-orange-800">
              These challenges use NumPy, pandas, matplotlib and SciPy. The course
              editor runs them, but charts do not display — open Google Colab for a
              full notebook. Each question also has its own Colab button that copies
              the task and your code.
            </p>
          </div>
          <OpenInColabButton variant="card" label="Open Google Colab" />
        </div>
      )}
      <ul className="mt-8 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white dark:divide-slate-800 dark:border-slate-700 dark:bg-slate-900">
        {problems.map((p, index) => {
          const listNumber = index + 1;
          const unlocked = isCoursePracticeProblemUnlocked(
            problems,
            p.id,
            solvedIds,
            { unlockAll }
          );
          const solved = solvedIds.has(p.id);
          const href = courseChallengeHref(moduleSlug, topicSlug, p.slug, {
            returnToLesson: true,
          });

          return (
            <li key={p.id}>
              {unlocked ? (
                <Link
                  href={href}
                  className="flex items-center justify-between gap-4 px-4 py-3.5 text-sm hover:bg-gray-50 dark:hover:bg-slate-800"
                >
                  <span className="flex items-center gap-2 font-medium text-gray-900 dark:text-slate-100">
                    {solved ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <Circle className="h-4 w-4 text-brand-500 dark:text-brand-300" />
                    )}
                    {listNumber}. {p.title}
                  </span>
                  <span className="shrink-0 capitalize text-gray-500 dark:text-slate-400">
                    {p.difficulty}
                  </span>
                </Link>
              ) : (
                <div className="flex items-center justify-between gap-4 px-4 py-3.5 text-sm text-gray-400 dark:text-slate-500">
                  <span className="flex items-center gap-2 font-medium">
                    <Lock className="h-4 w-4" />
                    {listNumber}. {p.title}
                  </span>
                  <span className="shrink-0 text-xs">
                    Locked — finish previous first
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-sm text-gray-500">
        <Link
          href={lessonReturnPath(moduleSlug, topicSlug)}
          className="font-medium text-brand-700 hover:underline"
        >
          Back to lesson
        </Link>
      </p>
    </>
  );
}
