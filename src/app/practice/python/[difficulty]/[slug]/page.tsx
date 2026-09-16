import { notFound } from "next/navigation";
import {
  getPythonPracticeBySlug,
  getPythonPracticeStaticParams,
} from "@/data/python-practice";
import { isPracticeDifficulty } from "@/lib/practice-difficulty";
import { PythonCodingShell } from "@/components/practice/PythonCodingShell";
import { getPythonProgrammingNav } from "@/data/python-programming-catalog";

interface ProblemPageProps {
  params: Promise<{ difficulty: string; slug: string }>;
}

export function generateStaticParams() {
  return getPythonPracticeStaticParams();
}

export async function generateMetadata({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = getPythonPracticeBySlug(slug);
  return {
    title: problem
      ? `${problem.title} · Python Programming Practice`
      : "Python Programming Practice",
  };
}

export default async function PythonPracticeProblemPage({ params }: ProblemPageProps) {
  const { difficulty, slug } = await params;
  if (!isPracticeDifficulty(difficulty)) notFound();

  const problem = getPythonPracticeBySlug(slug);
  if (!problem || problem.difficulty !== difficulty) notFound();

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] min-h-0 flex-col overflow-hidden px-3 py-2 sm:px-6 lg:px-8">
      <PythonCodingShell problem={problem} nav={getPythonProgrammingNav(slug)} />
    </div>
  );
}
