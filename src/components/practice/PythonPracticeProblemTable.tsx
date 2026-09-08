"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { CheckCircle2, Circle, RotateCcw, Search, Shuffle } from "lucide-react";
import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";
import { usePracticeProgress } from "@/hooks/usePracticeProgress";
import type {
  PracticeCategoryOption,
  PracticeDifficultyLabels,
} from "@/lib/practice-track";
import {
  clearPracticeOrder,
  ensurePracticeOrder,
  shuffleItems,
  writePracticeOrder,
} from "@/lib/python-practice-order";
import {
  getProblemKind,
  getProblemWorkspaceHref,
  matchesProgrammingCategory,
  type PythonProgrammingKind,
} from "@/lib/python-programming-links";
import { isPracticeDifficulty } from "@/data/python-practice";

const difficultyClass: Record<PracticeDifficulty, string> = {
  easy: "text-emerald-600 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/40",
  medium: "text-amber-700 bg-amber-50 dark:text-amber-200 dark:bg-amber-950/40",
  hard: "text-red-600 bg-red-50 dark:text-red-300 dark:bg-red-950/40",
};

function defaultDifficultyLabel(d: PracticeDifficulty): string {
  if (d === "easy") return "Easy";
  if (d === "medium") return "Medium";
  return "Hard";
}

interface PythonPracticeProblemTableProps {
  problems: PracticeProblem[];
  /** When set (single-track difficulty pages), links are `${basePath}/${slug}` */
  basePath?: string;
  /** Used on overview pages: `${trackRoot}/${difficulty}/${slug}` */
  trackRoot?: string;
  /** Resolve language vs algorithm workspace URLs inside this client component. */
  mergedLinks?: boolean;
  orderScope?: PracticeDifficulty | "all";
  orderPrefix?: string;
  categories?: readonly PracticeCategoryOption[];
  difficultyLabels?: PracticeDifficultyLabels;
  /** When true, show Kind filter + column for merged bank. */
  showKindFilter?: boolean;
  /** Use namespaced category ids (lang:… / algo:…). */
  namespacedCategories?: boolean;
  /** Show Easy / Medium / Hard filter (single unified list). */
  showDifficultyFilter?: boolean;
  /** Initial difficulty filter (e.g. from ?difficulty=). */
  initialDifficulty?: PracticeDifficulty | "all";
  /** Read ?difficulty= on the client (static export–safe). */
  readDifficultyFromUrl?: boolean;
}

export function PythonPracticeProblemTable({
  problems,
  basePath,
  trackRoot = "/practice/python",
  mergedLinks = false,
  orderScope = "all",
  orderPrefix,
  categories = [],
  difficultyLabels,
  showKindFilter = false,
  namespacedCategories = false,
  showDifficultyFilter = false,
  initialDifficulty = "all",
  readDifficultyFromUrl = false,
}: PythonPracticeProblemTableProps) {
  const searchParams = useSearchParams();
  const urlDifficulty = readDifficultyFromUrl
    ? searchParams.get("difficulty")
    : null;
  const resolvedInitial: PracticeDifficulty | "all" =
    urlDifficulty && isPracticeDifficulty(urlDifficulty)
      ? urlDifficulty
      : initialDifficulty;

  const labelDifficulty = (d: PracticeDifficulty) =>
    difficultyLabels?.[d] ?? defaultDifficultyLabel(d);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [kind, setKind] = useState<"all" | PythonProgrammingKind>("all");
  const [difficulty, setDifficulty] = useState<"all" | PracticeDifficulty>(
    resolvedInitial
  );
  const [orderVersion, setOrderVersion] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ids = useMemo(() => problems.map((p) => p.id), [problems]);
  const { rows } = usePracticeProgress(ids);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setDifficulty(resolvedInitial);
  }, [resolvedInitial]);

  const ordered = useMemo(() => {
    if (!mounted) return problems;
    // Depend on orderVersion so reshuffles re-read localStorage.
    if (orderVersion < 0) return problems;
    return ensurePracticeOrder(problems, orderScope, orderPrefix);
  }, [problems, orderScope, orderPrefix, orderVersion, mounted]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ordered.filter((p) => {
      if (showDifficultyFilter && difficulty !== "all" && p.difficulty !== difficulty) {
        return false;
      }
      if (showKindFilter && kind !== "all" && getProblemKind(p) !== kind) {
        return false;
      }
      if (category !== "all") {
        if (namespacedCategories) {
          if (!matchesProgrammingCategory(p, category)) return false;
        } else if (p.category !== category) {
          return false;
        }
      }
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.slug.includes(q) ||
        (p.categoryLabel ?? "").toLowerCase().includes(q)
      );
    });
  }, [
    ordered,
    query,
    category,
    kind,
    difficulty,
    showKindFilter,
    showDifficultyFilter,
    namespacedCategories,
  ]);

  function handleReshuffle() {
    if (
      !window.confirm(
        "Reshuffle this problem list? Your previous order for this set will be replaced."
      )
    ) {
      return;
    }
    const shuffled = shuffleItems(problems);
    writePracticeOrder(
      orderScope,
      shuffled.map((p) => p.id),
      orderPrefix
    );
    setOrderVersion((v) => v + 1);
  }

  function handleResetOrder() {
    clearPracticeOrder(orderScope, orderPrefix);
    setOrderVersion((v) => v + 1);
  }

  function problemHref(p: PracticeProblem) {
    if (mergedLinks) return getProblemWorkspaceHref(p);
    if (basePath) return `${basePath}/${p.slug}`;
    return `${trackRoot}/${p.difficulty}/${p.slug}`;
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
        <label className="relative flex-1 min-w-[12rem]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search problems"
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 outline-none ring-brand-500 placeholder:text-gray-400 focus:border-brand-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
          />
        </label>
        {showDifficultyFilter && (
          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value as "all" | PracticeDifficulty)
            }
            className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            aria-label="Filter by difficulty"
          >
            <option value="all">All difficulties</option>
            <option value="easy">{labelDifficulty("easy")}</option>
            <option value="medium">{labelDifficulty("medium")}</option>
            <option value="hard">{labelDifficulty("hard")}</option>
          </select>
        )}
        {showKindFilter && (
          <select
            value={kind}
            onChange={(e) =>
              setKind(e.target.value as "all" | PythonProgrammingKind)
            }
            className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
          >
            <option value="all">All types</option>
            <option value="language">Language drills</option>
            <option value="algorithms">Algorithm challenges</option>
          </select>
        )}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500"
        >
          <option value="all">All topics</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleReshuffle}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
        >
          <Shuffle className="h-4 w-4" />
          Reshuffle
        </button>
        <button
          type="button"
          onClick={handleResetOrder}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
          title="Restore ascending order"
        >
          <RotateCcw className="h-4 w-4" />
          Ascending
        </button>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 w-16">Status</th>
              <th className="px-4 py-3">Title</th>
              {showKindFilter && (
                <th className="px-4 py-3 hidden md:table-cell">Type</th>
              )}
              <th className="px-4 py-3 hidden sm:table-cell">Topic</th>
              <th className="px-4 py-3">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, index) => {
              const solved = rows[p.id]?.status === "solved";
              const href = problemHref(p);
              const problemKind = getProblemKind(p);
              // Visible list is always numbered 1..n (filters / shuffle).
              const listNumber = index + 1;
              return (
                <tr
                  key={p.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    {solved ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Circle className="h-4 w-4 text-gray-300 dark:text-slate-600" />
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={href}
                      className="font-medium text-gray-900 hover:text-brand-700 dark:text-slate-100 dark:hover:text-brand-300"
                    >
                      {listNumber}. {p.title}
                    </Link>
                  </td>
                  {showKindFilter && (
                    <td className="px-4 py-3 hidden text-gray-600 md:table-cell">
                      {problemKind === "language" ? "Language" : "Algorithms"}
                    </td>
                  )}
                  <td className="px-4 py-3 hidden text-gray-600 sm:table-cell">
                    {p.categoryLabel}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={clsx(
                        "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        difficultyClass[p.difficulty]
                      )}
                    >
                      {labelDifficulty(p.difficulty)}
                    </span>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={showKindFilter ? 5 : 4}
                  className="px-4 py-10 text-center text-sm text-gray-500"
                >
                  No problems match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
