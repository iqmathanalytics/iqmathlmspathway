import Link from "next/link";
import { notFound } from "next/navigation";
import { getModuleBySlug, getModulesByCourse, modules } from "@/data/curriculum";
import { ModuleTopicList } from "./ModuleTopicList";
import { GroqApiKeySetup } from "@/components/ai/GroqApiKeySetup";
import { IconImage } from "@/components/ui/IconImage";

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
  const courseModules = getModulesByCourse(courseModule.course);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/dashboard"
        className="text-sm font-medium text-brand-700 hover:text-brand-800"
      >
        ← Dashboard
      </Link>
      <div className="mt-4 flex items-start gap-4">
        <IconImage
          src={courseModule.iconImage}
          alt={courseModule.iconAlt ?? `${courseModule.name} logo`}
          fallback={courseModule.icon}
          className="h-14 w-14 rounded-2xl bg-gray-50 p-1.5"
          fallbackClassName="text-4xl"
        />
        <div>
          <p className="text-sm font-semibold text-brand-600">Module {courseModule.id}</p>
          <h1 className="text-2xl font-bold text-gray-900">{courseModule.name}</h1>
          <p className="mt-2 text-gray-600">{courseModule.description}</p>
        </div>
      </div>

      {courseModule.slug === "groq-api" && (
        <div className="mt-6">
          <GroqApiKeySetup />
        </div>
      )}

      <ModuleTopicList courseModule={courseModule} courseModules={courseModules} />
    </div>
  );
}
