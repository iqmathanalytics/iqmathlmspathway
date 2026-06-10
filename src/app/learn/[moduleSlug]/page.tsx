import Link from "next/link";
import { notFound } from "next/navigation";
import { getModuleBySlug, modules } from "@/data/curriculum";
import { ModuleTopicList } from "./ModuleTopicList";

interface ModulePageProps {
  params: Promise<{ moduleSlug: string }>;
}

export function generateStaticParams() {
  return modules.map((m) => ({ moduleSlug: m.slug }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { moduleSlug } = await params;
  const courseModule = getModuleBySlug(moduleSlug);
  if (!courseModule) notFound();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/dashboard"
        className="text-sm font-medium text-brand-700 hover:text-brand-800"
      >
        ← Dashboard
      </Link>
      <div className="mt-4 flex items-start gap-4">
        <span className="text-4xl">{courseModule.icon}</span>
        <div>
          <p className="text-sm font-semibold text-brand-600">Module {courseModule.id}</p>
          <h1 className="text-2xl font-bold text-gray-900">{courseModule.name}</h1>
          <p className="mt-2 text-gray-600">{courseModule.description}</p>
        </div>
      </div>

      <ModuleTopicList courseModule={courseModule} />
    </div>
  );
}
