import { modules } from "@/data/curriculum";
import { LearningPathClient } from "./LearningPathClient";

export default function LearnPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Learning Path</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Follow modules in order. Each module has topics with lessons, practice
          code, and quizzes. Your progress is saved in your browser.
        </p>
      </div>
      <LearningPathClient modules={modules} />
    </div>
  );
}
