import { notFound } from "next/navigation";
import {
  getPythonBasicsBySlug,
  getPythonBasicsStaticParams,
} from "@/data/python-basics";
import { isBasicsDifficulty } from "@/lib/practice-difficulty";
import { PythonCodingShell } from "@/components/practice/PythonCodingShell";
import { getPythonProgrammingNav } from "@/data/python-programming-catalog";

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
    <div className="flex h-[calc(100dvh-3.5rem)] min-h-0 flex-col overflow-hidden px-3 py-2 sm:px-6 lg:px-8">
      <PythonCodingShell
        problem={problem}
        trackId="python-basics"
        nav={getPythonProgrammingNav(slug)}
      />
    </div>
  );
}
