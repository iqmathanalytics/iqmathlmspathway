import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  courseTopicChallengeHref,
  lessonReturnPath,
} from "@/lib/course-practice-links";

interface PracticeBreadcrumbProps {
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
  problemTitle: string;
  /** Optional difficulty for the problem-list crumb (programming hub). */
  difficulty?: string;
  /**
   * Course module challenges (under /learn) vs standalone Practice hub.
   */
  coursePractice?: boolean;
}

const crumbLink =
  "hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300";

/**
 * Breadcrumbs for coding workspaces.
 * Module challenges → Dashboard / Module / Topic (no Practice hub).
 * Standalone hub → /practice/python
 */
export function PracticeBreadcrumb({
  moduleSlug,
  topicSlug,
  moduleName,
  topicTitle,
  problemTitle,
  coursePractice = false,
}: PracticeBreadcrumbProps) {
  if (coursePractice) {
    return (
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-gray-500 dark:text-slate-400">
        <Link href="/dashboard" className={crumbLink}>
          Dashboard
        </Link>
        <ChevronRight className="h-3 w-3 text-gray-400 dark:text-slate-500" />
        <Link href={`/learn/${moduleSlug}`} className={crumbLink}>
          {moduleName}
        </Link>
        <ChevronRight className="h-3 w-3 text-gray-400 dark:text-slate-500" />
        <Link
          href={lessonReturnPath(moduleSlug, topicSlug)}
          className={crumbLink}
        >
          {topicTitle}
        </Link>
        <ChevronRight className="h-3 w-3 text-gray-400 dark:text-slate-500" />
        <Link
          href={courseTopicChallengeHref(moduleSlug, topicSlug)}
          className={crumbLink}
        >
          Challenges
        </Link>
        <ChevronRight className="h-3 w-3 text-gray-400 dark:text-slate-500" />
        <span className="text-gray-800 dark:text-slate-100">{problemTitle}</span>
      </nav>
    );
  }

  return (
    <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-gray-500 dark:text-slate-400">
      <Link href="/practice" className={crumbLink}>
        Practice
      </Link>
      <ChevronRight className="h-3 w-3 text-gray-400 dark:text-slate-500" />
      <Link href="/practice/python" className={crumbLink}>
        Python Programming
      </Link>
      <ChevronRight className="h-3 w-3 text-gray-400 dark:text-slate-500" />
      <Link href="/practice/python" className={crumbLink}>
        {topicTitle}
      </Link>
      <ChevronRight className="h-3 w-3 text-gray-400 dark:text-slate-500" />
      <span className="text-gray-800 dark:text-slate-100">{problemTitle}</span>
    </nav>
  );
}
