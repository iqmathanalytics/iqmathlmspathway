import { notFound, redirect } from "next/navigation";
import { isBasicsDifficulty } from "@/lib/practice-difficulty";

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

/** Legacy difficulty URL — merged into Python Programming Practice. */
export default async function PythonBasicsDifficultyRedirectPage({
  params,
}: DifficultyPageProps) {
  const { difficulty } = await params;
  if (!isBasicsDifficulty(difficulty)) notFound();
  redirect(`/practice/python?difficulty=${difficulty}`);
}
