import type { PracticeDifficulty, PracticeProblem } from "@/lib/types";

/** Fields a problem list / prev-next nav needs. Never include tests or solutions. */
export type PracticeListItem = {
  id: string;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  order: number;
  category?: string;
  categoryLabel?: string;
  topicId?: string;
};

export type PracticeNav = {
  index: number;
  total: number;
  prev: PracticeListItem | null;
  next: PracticeListItem | null;
};

export function toPracticeListItem(problem: PracticeProblem): PracticeListItem {
  return {
    id: problem.id,
    slug: problem.slug,
    title: problem.title,
    difficulty: problem.difficulty,
    order: problem.order,
    category: problem.category,
    categoryLabel: problem.categoryLabel,
    topicId: problem.topicId,
  };
}

export function neighborsFromList(
  items: PracticeListItem[],
  slug: string
): PracticeNav {
  const index = items.findIndex((item) => item.slug === slug);
  if (index < 0) {
    return { index: -1, total: items.length, prev: null, next: null };
  }
  return {
    index,
    total: items.length,
    prev: index > 0 ? items[index - 1]! : null,
    next: index < items.length - 1 ? items[index + 1]! : null,
  };
}
