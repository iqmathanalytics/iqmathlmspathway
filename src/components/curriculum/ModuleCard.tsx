import Link from "next/link";
import type { Module } from "@/lib/types";
import { Lock, CheckCircle2, Circle } from "lucide-react";
import clsx from "clsx";
import { NavigationLink } from "@/components/ui/NavigationLink";
import { IconImage } from "@/components/ui/IconImage";

interface ModuleCardProps {
  module: Module;
  completedTopicIds: string[];
  unlockedTopicIds: Set<string>;
}

export function ModuleCard({ module, completedTopicIds, unlockedTopicIds }: ModuleCardProps) {
  const published = module.topics.filter((t) => t.published);
  const allLocked = published.length === 0;
  const completedInModule = published.filter((t) =>
    completedTopicIds.includes(t.id)
  ).length;
  const progress =
    published.length > 0
      ? Math.round((completedInModule / published.length) * 100)
      : 0;

  return (
    <article
      className={clsx(
        "rounded-2xl border bg-white p-5 shadow-sm transition-shadow",
        allLocked ? "border-gray-200 opacity-75" : "border-gray-200 hover:shadow-md"
      )}
    >
      <div className="flex items-start gap-3">
        <IconImage
          src={module.iconImage}
          alt={module.iconAlt ?? `${module.name} logo`}
          fallback={module.icon}
          className="h-11 w-11 rounded-xl bg-gray-50 p-1"
          fallbackClassName="text-3xl"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Module {module.id}
            </span>
            {allLocked && (
              <span className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                <Lock className="h-3 w-3" />
                Coming soon
              </span>
            )}
          </div>
          <h3 className="mt-1 font-semibold text-gray-900">{module.name}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{module.description}</p>
          {!allLocked && (
            <div className="mt-3">
              <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-brand-500 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {completedInModule}/{published.length} topics · {module.topics.length}{" "}
                total planned
              </p>
            </div>
          )}
        </div>
      </div>
      <ul className="mt-4 space-y-1 border-t border-gray-100 pt-4">
        {module.topics.map((topic) => {
          const isDone = completedTopicIds.includes(topic.id);
          const isUnlocked = topic.published && unlockedTopicIds.has(topic.id);
          const href = isUnlocked
            ? `/learn/${module.slug}/${topic.slug}`
            : undefined;
          return (
            <li key={topic.id}>
              {href ? (
                <NavigationLink
                  href={href}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-900"
                >
                  {isDone ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Circle className="h-4 w-4 text-gray-300" />
                  )}
                  {topic.title}
                </NavigationLink>
              ) : (
                <span className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-400">
                  <Lock className="h-3.5 w-3.5" />
                  {topic.title}
                  {topic.published && <span className="ml-auto text-xs">Locked</span>}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      {!allLocked && (
        <Link
          href={`/learn/${module.slug}`}
          className="mt-4 inline-block text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          Open module →
        </Link>
      )}
    </article>
  );
}
