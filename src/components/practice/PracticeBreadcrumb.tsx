import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PracticeBreadcrumbProps {
  moduleSlug: string;
  topicSlug: string;
  moduleName: string;
  topicTitle: string;
  problemTitle: string;
}

export function PracticeBreadcrumb({
  moduleSlug,
  topicSlug,
  moduleName,
  topicTitle,
  problemTitle,
}: PracticeBreadcrumbProps) {
  return (
    <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-gray-500">
      <Link href="/practice" className="hover:text-brand-700">
        Practice
      </Link>
      <ChevronRight className="h-3 w-3" />
      <Link href={`/practice/${moduleSlug}`} className="hover:text-brand-700">
        {moduleName}
      </Link>
      <ChevronRight className="h-3 w-3" />
      <Link href={`/practice/${moduleSlug}/${topicSlug}`} className="hover:text-brand-700">
        {topicTitle}
      </Link>
      <ChevronRight className="h-3 w-3" />
      <span className="text-gray-800">{problemTitle}</span>
    </nav>
  );
}
