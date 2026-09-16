import { notFound } from "next/navigation";
import { getPapcBySlug, getPapcStaticParams } from "@/data/certification/papc-problems";
import { getPapcNav } from "@/data/certification/papc-catalog";
import { PythonCodingShell } from "@/components/practice/PythonCodingShell";

interface ProblemPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPapcStaticParams();
}

export async function generateMetadata({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = getPapcBySlug(slug);
  return {
    title: problem ? `${problem.title} · PAPC Practice` : "PAPC Practice",
  };
}

export default async function PapcPracticeProblemPage({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = getPapcBySlug(slug);
  if (!problem) notFound();

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] min-h-0 flex-col overflow-hidden px-3 py-2 sm:px-6 lg:px-8">
      <PythonCodingShell
        problem={problem}
        trackId="papc"
        nav={getPapcNav(slug)}
      />
    </div>
  );
}
