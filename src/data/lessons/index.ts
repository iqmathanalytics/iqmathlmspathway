import type { TopicLesson } from "@/lib/types";
import { module1Lessons } from "./module-1";
import { module2Lessons } from "./module-2";
import { module3Lessons } from "./module-3";
import { module4Lessons } from "./module-4";
import { module5Lessons } from "./module-5";
import { module6Lessons } from "./module-6";
import { module7Lessons } from "./module-7";
import { module8Lessons } from "./module-8";
import { module9Lessons } from "./module-9";
import { module10Lessons } from "./module-10";
import { module11Lessons } from "./module-11";
import { module12Lessons } from "./module-12";
import { module13Lessons } from "./module-13";
import { module14Lessons } from "./module-14";
import { agenticAiModule1Lessons } from "./agentic-ai-module-1";
import { agenticAiLangChainLessons } from "./agentic-ai-langchain";
import { agenticAiModule2Lessons } from "./agentic-ai-module-2";
import { agenticAiModule3Lessons } from "./agentic-ai-module-3";
import { agenticAiModule4Lessons } from "./agentic-ai-module-4";
import { agenticAiModule5Lessons } from "./agentic-ai-module-5";
import { agenticAiModule6Lessons } from "./agentic-ai-module-6";
import { agenticAiModule7Lessons } from "./agentic-ai-module-7";
import { sqlModule1Lessons } from "./sql-module-1";
import { sqlModule2Lessons } from "./sql-module-2";
import { sqlModule3Lessons } from "./sql-module-3";
import { sqlModule4Lessons } from "./sql-module-4";
import { sqlModule5Lessons } from "./sql-module-5";
import { sqlModule6Lessons } from "./sql-module-6";
import { sqlModule7Lessons } from "./sql-module-7";
import { sqlModule8Lessons } from "./sql-module-8";
import { sqlModule9Lessons } from "./sql-module-9";
import { mbaAiDay1Lessons } from "./mba-ai-day1";
import { mbaAiDay2Lessons } from "./mba-ai-day2";
import { mbaAiDay3Lessons } from "./mba-ai-day3";
import { mbaAiDay4Lessons } from "./mba-ai-day4";

const allLessons: Record<string, TopicLesson> = {
  ...module1Lessons,
  ...module2Lessons,
  ...module3Lessons,
  ...module4Lessons,
  ...module5Lessons,
  ...module6Lessons,
  ...module7Lessons,
  ...module8Lessons,
  ...module9Lessons,
  ...module10Lessons,
  ...module11Lessons,
  ...module12Lessons,
  ...module13Lessons,
  ...module14Lessons,
  ...agenticAiModule1Lessons,
  ...agenticAiLangChainLessons,
  ...agenticAiModule2Lessons,
  ...agenticAiModule3Lessons,
  ...agenticAiModule4Lessons,
  ...agenticAiModule5Lessons,
  ...agenticAiModule6Lessons,
  ...agenticAiModule7Lessons,
  ...sqlModule1Lessons,
  ...sqlModule2Lessons,
  ...sqlModule3Lessons,
  ...sqlModule4Lessons,
  ...sqlModule5Lessons,
  ...sqlModule6Lessons,
  ...sqlModule7Lessons,
  ...sqlModule8Lessons,
  ...sqlModule9Lessons,
  ...mbaAiDay1Lessons,
  ...mbaAiDay2Lessons,
  ...mbaAiDay3Lessons,
  ...mbaAiDay4Lessons,
};

export function getLesson(topicId: string): TopicLesson | undefined {
  return allLessons[topicId];
}
