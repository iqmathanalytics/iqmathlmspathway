import { neighborsFromList, type PracticeNav } from "@/lib/practice-list";
import { PAPC_PRACTICE_LIST } from "@/data/certification/papc-list.generated";

export function getPapcPracticeList() {
  return PAPC_PRACTICE_LIST;
}

export function getPapcNav(slug: string): PracticeNav {
  return neighborsFromList(PAPC_PRACTICE_LIST, slug);
}
