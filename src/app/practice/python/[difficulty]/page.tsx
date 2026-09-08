import { notFound, redirect } from "next/navigation";
import { isPracticeDifficulty } from "@/data/python-practice";

interface DifficultyPageProps {
  params: Promise<{ difficulty: string }>;
}

export function generateStaticParams() {
  return [
    { difficulty: "easy" },
    { difficulty: "medium" },
    { difficulty: "hard" },
  ];
}

/** Old per-difficulty pages redirect into the unified list with a filter. */
export default async function PythonDifficultyPage({
  params,
}: DifficultyPageProps) {
  const { difficulty } = await params;
  if (!isPracticeDifficulty(difficulty)) notFound();
  redirect(`/practice/python?difficulty=${difficulty}`);
}
