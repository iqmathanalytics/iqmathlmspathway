import type {
  PracticeDifficulty,
  PracticeExample,
  PracticeProblem,
  PracticeTest,
} from "@/lib/types";

export const PYTHON_PRACTICE_CATEGORIES = [
  { id: "arrays", label: "Arrays & Lists" },
  { id: "strings", label: "Strings" },
  { id: "linked-lists", label: "Linked Lists" },
  { id: "stack-queue", label: "Stacks & Queues" },
  { id: "trees", label: "Trees" },
  { id: "graphs", label: "Graphs" },
  { id: "dynamic-programming", label: "Dynamic Programming" },
  { id: "hash-maps", label: "Hash Maps" },
  { id: "binary-search", label: "Binary Search" },
  { id: "greedy", label: "Greedy" },
  { id: "backtracking", label: "Recursion & Backtracking" },
  { id: "bit-manipulation", label: "Bit Manipulation" },
  { id: "heap", label: "Heaps" },
  { id: "intervals", label: "Intervals" },
  { id: "matrices", label: "Matrices" },
] as const;

export type PythonPracticeCategoryId =
  (typeof PYTHON_PRACTICE_CATEGORIES)[number]["id"];

export const CATEGORY_LABEL: Record<PythonPracticeCategoryId, string> =
  Object.fromEntries(
    PYTHON_PRACTICE_CATEGORIES.map((c) => [c.id, c.label])
  ) as Record<PythonPracticeCategoryId, string>;

export const LIST_NODE_STARTER = `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


`;

export const TREE_NODE_STARTER = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


`;

export const GRAPH_NODE_STARTER = `class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


`;

export const LIST_HELPERS = `
def _list_from_vals(vals):
    dummy = ListNode(0)
    cur = dummy
    for v in vals:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next

def _vals_from_list(head, limit=200):
    out = []
    seen = set()
    while head and len(out) < limit:
        if id(head) in seen:
            out.append("CYCLE")
            break
        seen.add(id(head))
        out.append(head.val)
        head = head.next
    return out
`;

export const TREE_HELPERS = `
from collections import deque as _deque

def _tree_from_vals(vals):
    if not vals:
        return None
    root = TreeNode(vals[0])
    q = _deque([root])
    i = 1
    while q and i < len(vals):
        node = q.popleft()
        if i < len(vals) and vals[i] is not None:
            node.left = TreeNode(vals[i])
            q.append(node.left)
        i += 1
        if i < len(vals) and vals[i] is not None:
            node.right = TreeNode(vals[i])
            q.append(node.right)
        i += 1
    return root

def _vals_from_tree(root):
    if not root:
        return []
    out = []
    q = _deque([root])
    while q:
        node = q.popleft()
        if node is None:
            out.append(None)
            continue
        out.append(node.val)
        q.append(node.left)
        q.append(node.right)
    while out and out[-1] is None:
        out.pop()
    return out

def _find_node(root, val):
    if not root:
        return None
    if root.val == val:
        return root
    return _find_node(root.left, val) or _find_node(root.right, val)
`;

export type EqTest = {
  kind?: "eq";
  label: string;
  call: string;
  expected: string;
};

export type CustomTest = {
  kind: "custom";
  label: string;
  code: string;
};

export type CodingTestDef = EqTest | CustomTest;

export function testsFromDefs(slug: string, defs: CodingTestDef[]): PracticeTest[] {
  return defs.map((d, i) => {
    const id = `pc-${slug}-t${i + 1}`;
    if (d.kind === "custom") {
      return {
        id,
        label: d.label,
        visibility: "public" as const,
        assertCode: d.code.trim(),
      };
    }
    return {
      id,
      label: d.label,
      visibility: "public" as const,
      assertCode: [
        `_got = ${d.call}`,
        `_exp = ${d.expected}`,
        `assert _got == _exp, f"Expected {_exp!r}, got {_got!r}"`,
      ].join("\n"),
    };
  });
}

interface BuildCodingProblemInput {
  order: number;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  category: PythonPracticeCategoryId;
  description: string;
  examples: PracticeExample[];
  constraints: string[];
  hints: string[];
  approach: string;
  starterCode: string;
  solutionCode: string;
  tests: CodingTestDef[];
}

export function buildCodingProblem(input: BuildCodingProblemInput): PracticeProblem {
  return {
    id: `pc-${input.slug}`,
    topicId: `pc-${input.category}`,
    slug: input.slug,
    title: input.title,
    difficulty: input.difficulty,
    order: input.order,
    description: input.description.trim(),
    category: input.category,
    categoryLabel: CATEGORY_LABEL[input.category],
    examples: input.examples,
    constraints: input.constraints,
    hints: input.hints,
    approach: input.approach.trim(),
    starterCode: input.starterCode.replace(/^\n/, ""),
    solutionCode: input.solutionCode.trim(),
    publicTests: testsFromDefs(input.slug, input.tests),
  };
}
