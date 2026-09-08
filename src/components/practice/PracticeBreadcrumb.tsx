import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PracticeBreadcrumbProps {
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
  problemTitle: string;
  /** Optional difficulty for the problem-list crumb (programming hub). */
  difficulty?: string;
}

/**
 * Breadcrumbs for practice workspaces. Always links into the live
 * `/practice/python` hub — old `/practice/{module}/{topic}` routes were removed.
 */
export function PracticeBreadcrumb({
  moduleName,
  topicTitle,
  problemTitle,
  difficulty,
}: PracticeBreadcrumbProps) {
  const listHref = "/practice/python";

  return (
    <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-gray-500">
      <Link href="/practice" className="hover:text-brand-700">
        Practice
      </Link>
      <ChevronRight className="h-3 w-3" />
      <Link href="/practice/python" className="hover:text-brand-700">
        {moduleName || "Python Programming"}
      </Link>
      <ChevronRight className="h-3 w-3" />
      <Link href={listHref} className="hover:text-brand-700">
        {topicTitle}
      </Link>
      <ChevronRight className="h-3 w-3" />
      <span className="text-gray-800">{problemTitle}</span>
    </nav>
  );
}
