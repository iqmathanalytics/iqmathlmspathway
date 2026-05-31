import type { TopicQuiz } from "@/lib/types";
import { module1Quizzes } from "./module-1";
import { module2Quizzes } from "./module-2";
import { module3Quizzes } from "./module-3";
import { module4Quizzes } from "./module-4";
import { module5Quizzes } from "./module-5";

const allQuizzes: Record<string, TopicQuiz> = {
  ...module1Quizzes,
  ...module2Quizzes,
  ...module3Quizzes,
  ...module4Quizzes,
  ...module5Quizzes,
};

export function getQuiz(topicId: string): TopicQuiz | undefined {
  return allQuizzes[topicId];
}
