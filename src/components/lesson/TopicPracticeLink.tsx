import Link from "next/link";
import { getPracticeCountByTopic } from "@/data/practice/meta";
import { Terminal } from "lucide-react";

interface TopicPracticeLinkProps {
  moduleSlug: string;
  topicSlug: string;
  topicId: string;
}

export function TopicPracticeLink({
  moduleSlug,
  topicSlug,
  topicId,
}: TopicPracticeLinkProps) {
  const count = getPracticeCountByTopic(topicId);
  if (count === 0) return null;

  return (
    <Link
      href={`/practice/${moduleSlug}/${topicSlug}`}
      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
    >
      <Terminal className="h-4 w-4" />
      Practice problems ({count})
    </Link>
  );
}
