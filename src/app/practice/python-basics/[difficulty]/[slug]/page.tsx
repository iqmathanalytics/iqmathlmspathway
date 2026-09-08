import { notFound } from "next/navigation";
import {
  getPythonBasicsBySlug,
  getPythonBasicsStaticParams,
  isBasicsDifficulty,
} from "@/data/python-basics";
import { PythonCodingShell } from "@/components/practice/PythonCodingShell";

interface ProblemPageProps {
  params: Promise<{ difficulty: string; slug: string }>;
}

export function generateStaticParams() {
  return getPythonBasicsStaticParams();
}

export async function generateMetadata({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = getPythonBasicsBySlug(slug);
  return {
    title: problem ? `${problem.title} · Python Programming Practice` : "Python Programming Practice",
  };
}

export default async function PythonBasicsProblemPage({ params }: ProblemPageProps) {
  const { difficulty, slug } = await params;
  if (!isBasicsDifficulty(difficulty)) notFound();

  const problem = getPythonBasicsBySlug(slug);
  if (!problem || problem.difficulty !== difficulty) notFound();

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] min-h-0 flex-col overflow-hidden px-2 py-2 sm:px-3">
      <PythonCodingShell problem={problem} trackId="python-basics" />
    </div>
  );
}
