import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";
import type { PracticeTrackConfig } from "@/lib/practice-track";
import {
  neighborsFromList,
  toPracticeListItem,
  type PracticeListItem,
  type PracticeNav,
} from "@/lib/practice-list";
import { getPythonPracticeBySlug } from "@/data/python-practice";
import { PYTHON_PRACTICE_CATEGORIES } from "@/data/python-practice/helpers";
import { PAPC_ORDER_PREFIX } from "./papc-config";
import { cloneAsPapc } from "./helpers";
import { papcCoreProblems } from "./papc-problems-core";
import { papcExtraProblems } from "./papc-problems-extra";

const CLONE_SLUGS: Array<{ slug: string; order: number }> = [
  { slug: "merge-k-sorted-lists", order: 5 },
  { slug: "largest-rectangle-in-histogram", order: 9 },
  { slug: "trapping-rain-water", order: 10 },
  { slug: "minimum-window-substring", order: 11 },
  { slug: "regular-expression-matching", order: 13 },
  { slug: "median-of-two-sorted-arrays", order: 14 },
  { slug: "longest-substring-without-repeating-characters", order: 15 },
  { slug: "container-with-most-water", order: 16 },
  { slug: "rotate-array", order: 19 },
  { slug: "search-in-rotated-sorted-array", order: 20 },
  { slug: "number-of-islands", order: 21 },
  { slug: "course-schedule", order: 22 },
  { slug: "clone-graph", order: 25 },
  { slug: "shortest-path-in-binary-matrix", order: 34 },
  { slug: "edit-distance", order: 47 },
  { slug: "longest-increasing-subsequence", order: 50 },
  { slug: "two-sum-ii", order: 51 },
  { slug: "three-sum", order: 52 },
  { slug: "coin-change", order: 53 },
  { slug: "binary-tree-level-order-traversal", order: 54 },
  { slug: "lowest-common-ancestor-of-a-binary-tree", order: 55 },
  { slug: "reverse-integer", order: 56 },
  { slug: "integer-to-roman", order: 57 },
  { slug: "combination-sum", order: 58 },
  { slug: "permutations", order: 59 },
  { slug: "n-queens", order: 60 },
  { slug: "implement-trie", order: 61 },
  { slug: "word-search-ii", order: 62 },
  { slug: "intersection-of-two-linked-lists", order: 63 },
  { slug: "majority-element", order: 64 },
  { slug: "product-of-array-except-self", order: 65 },
  { slug: "first-missing-positive", order: 66 },
  { slug: "kth-largest-element-in-an-array", order: 67 },
  { slug: "valid-palindrome", order: 68 },
  { slug: "longest-common-prefix", order: 69 },
  { slug: "group-anagrams", order: 70 },
  { slug: "isomorphic-strings", order: 71 },
  { slug: "different-ways-to-add-parentheses", order: 72 },
  { slug: "wildcard-matching", order: 73 },
  { slug: "sum-of-two-integers", order: 74 },
  { slug: "fraction-to-recurring-decimal", order: 75 },
];

function clonedProblems(): PracticeProblem[] {
  return CLONE_SLUGS.map(({ slug, order }) => {
    const source = getPythonPracticeBySlug(slug);
    if (!source) {
      throw new Error(`PAPC clone missing practice problem: ${slug}`);
    }
    return cloneAsPapc(source, order);
  });
}

const papcProblems: PracticeProblem[] = [
  ...papcCoreProblems,
  ...clonedProblems(),
  ...papcExtraProblems,
].sort((a, b) => a.order - b.order);

const bySlug = new Map(papcProblems.map((p) => [p.slug, p]));

export const PAPC_CATEGORIES = PYTHON_PRACTICE_CATEGORIES;

export function getPapcProblems(): PracticeProblem[] {
  return papcProblems;
}

export function getPapcList(): PracticeListItem[] {
  return papcProblems.map(toPracticeListItem);
}

export function getPapcNav(slug: string): PracticeNav {
  return neighborsFromList(getPapcList(), slug);
}

export function getPapcBySlug(slug: string): PracticeProblem | undefined {
  return bySlug.get(slug);
}

export function getPapcByDifficulty(difficulty: PracticeDifficulty): PracticeProblem[] {
  return papcProblems.filter((p) => p.difficulty === difficulty);
}

export function getPapcStaticParams() {
  return papcProblems.map((p) => ({ slug: p.slug }));
}

export function getPapcProblemHref(problem: PracticeProblem): string {
  return `/certification/papc/practice/${problem.slug}`;
}

export function getPapcStats() {
  const difficulties = { easy: 0, medium: 0, hard: 0 };
  const categories: Record<string, number> = {};
  for (const p of papcProblems) {
    difficulties[p.difficulty] += 1;
    if (p.category) {
      categories[p.category] = (categories[p.category] ?? 0) + 1;
    }
  }
  return { total: papcProblems.length, difficulties, categories };
}

export function difficultyLabel(difficulty: PracticeDifficulty): string {
  if (difficulty === "easy") return "Easy";
  if (difficulty === "medium") return "Medium";
  return "Hard";
}

export const PAPC_TRACK: PracticeTrackConfig = {
  id: "papc",
  basePath: "/certification/papc/practice",
  title: "PAPC Practice",
  orderPrefix: PAPC_ORDER_PREFIX,
  getByDifficulty: getPapcByDifficulty,
  labelDifficulty: difficultyLabel,
};
