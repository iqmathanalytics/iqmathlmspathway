import { notFound } from "next/navigation";
import { isBasicsDifficulty } from "@/data/python-basics";
import { ClientRedirect } from "@/components/practice/ClientRedirect";

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
  return <ClientRedirect href={`/practice/python?difficulty=${difficulty}`} />;
}
