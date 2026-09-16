import { COURSE_PRACTICE_BY_TOPIC } from "@/data/course-practice-list.generated";
import type { PracticeListItem } from "@/lib/practice-list";

export function getCoursePracticeListByTopic(
  topicId: string
): PracticeListItem[] {
  return COURSE_PRACTICE_BY_TOPIC[topicId] ?? [];
}
