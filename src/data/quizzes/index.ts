import type { TopicQuiz } from "@/lib/types";
import { module1Quizzes } from "./module-1";
import { module2Quizzes } from "./module-2";
import { module3Quizzes } from "./module-3";
import { module4Quizzes } from "./module-4";
import { module5Quizzes } from "./module-5";
import { module6Quizzes } from "./module-6";
import { module7Quizzes } from "./module-7";
import { module8Quizzes } from "./module-8";
import { module9Quizzes } from "./module-9";
import { module10Quizzes } from "./module-10";
import { module11Quizzes } from "./module-11";
import { module12Quizzes } from "./module-12";
import { module13Quizzes } from "./module-13";
import { module14Quizzes } from "./module-14";
import { agenticAiQuizzes } from "./agentic-ai";
import { sqlModule1Quizzes } from "./sql-module-1";
import { sqlModule2Quizzes } from "./sql-module-2";
import { sqlModule3Quizzes } from "./sql-module-3";
import { sqlModule4Quizzes } from "./sql-module-4";
import { sqlModule5Quizzes } from "./sql-module-5";
import { sqlModule6Quizzes } from "./sql-module-6";
import { sqlModule7Quizzes } from "./sql-module-7";
import { sqlModule8Quizzes } from "./sql-module-8";
import { sqlModule9Quizzes } from "./sql-module-9";

const allQuizzes: Record<string, TopicQuiz> = {
  ...module1Quizzes,
  ...module2Quizzes,
  ...module3Quizzes,
  ...module4Quizzes,
  ...module5Quizzes,
  ...module6Quizzes,
  ...module7Quizzes,
  ...module8Quizzes,
  ...module9Quizzes,
  ...module10Quizzes,
  ...module11Quizzes,
  ...module12Quizzes,
  ...module13Quizzes,
  ...module14Quizzes,
  ...agenticAiQuizzes,
  ...sqlModule1Quizzes,
  ...sqlModule2Quizzes,
  ...sqlModule3Quizzes,
  ...sqlModule4Quizzes,
  ...sqlModule5Quizzes,
  ...sqlModule6Quizzes,
  ...sqlModule7Quizzes,
  ...sqlModule8Quizzes,
  ...sqlModule9Quizzes,
};

export function getQuiz(topicId: string): TopicQuiz | undefined {
  return allQuizzes[topicId];
}
