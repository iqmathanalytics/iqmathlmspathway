import type { TopicLesson } from "@/lib/types";
import { module1Lessons } from "./module-1";
import { module2Lessons } from "./module-2";
import { module3Lessons } from "./module-3";
import { module4Lessons } from "./module-4";
import { module5Lessons } from "./module-5";

const allLessons: Record<string, TopicLesson> = {
  ...module1Lessons,
  ...module2Lessons,
  ...module3Lessons,
  ...module4Lessons,
  ...module5Lessons,
};

export function getLesson(topicId: string): TopicLesson | undefined {
  return allLessons[topicId];
}
