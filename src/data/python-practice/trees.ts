import { TREE_HELPERS, TREE_NODE_STARTER, buildCodingProblem } from "./helpers";

export const treeProblems = [
  buildCodingProblem({
    order: 37,
    slug: "binary-tree-inorder-traversal",
    title: "Binary Tree Inorder Traversal",
    difficulty: "easy",
    category: "trees",
    description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.

Inorder means left subtree, then node, then right subtree.

TreeNode is provided:

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`,
    examples: [{ input: "root = [1, None, 2, 3]", output: "[1, 3, 2]" }],
    constraints: ["The number of nodes is in [0, 100]"],
    hints: [
      "Recursive: visit left, append val, visit right.",
      "Iterative: stack while walking left, then pop and go right.",
    ],
    approach: `DFS inorder. Recursion is the most direct; an explicit stack is equivalent.`,
    starterCode: `${TREE_NODE_STARTER}def inorderTraversal(root):
    # Write your code here
    pass
`,
    solutionCode: `def inorderTraversal(root):
    result = []
    def dfs(node):
        if not node:
            return
        dfs(node.left)
        result.append(node.val)
        dfs(node.right)
    dfs(root)
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${TREE_HELPERS}
root = _tree_from_vals([1, None, 2, 3])
assert inorderTraversal(root) == [1, 3, 2]`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `assert inorderTraversal(None) == []`,
      },
    ],
  }),

  buildCodingProblem({
    order: 38,
    slug: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "easy",
    category: "trees",
    description: `Given the root of a binary tree, return its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
    examples: [{ input: "root = [3, 9, 20, None, None, 15, 7]", output: "3" }],
    constraints: ["The number of nodes is in [0, 10^4]"],
    hints: [
      "Depth of None is 0.",
      "Depth of a node is 1 + max(left, right).",
    ],
    approach: `Simple recursion on both children.`,
    starterCode: `${TREE_NODE_STARTER}def maxDepth(root):
    # Write your code here
    pass
`,
    solutionCode: `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${TREE_HELPERS}
assert maxDepth(_tree_from_vals([3, 9, 20, None, None, 15, 7])) == 3`,
      },
      { kind: "custom", label: "Empty", code: "assert maxDepth(None) == 0" },
    ],
  }),

  buildCodingProblem({
    order: 39,
    slug: "same-tree",
    title: "Same Tree",
    difficulty: "easy",
    category: "trees",
    description: `Given the roots of two binary trees p and q, write a function to check if they are the same.

Two binary trees are the same if they are structurally identical and the nodes have the same values.`,
    examples: [
      { input: "p = [1, 2, 3], q = [1, 2, 3]", output: "True" },
      { input: "p = [1, 2], q = [1, None, 2]", output: "False" },
    ],
    constraints: ["The number of nodes in each tree is in [0, 100]"],
    hints: [
      "Both None → True. One None → False.",
      "Values must match, then both subtrees.",
    ],
    approach: `Recursively compare node values and left/right children.`,
    starterCode: `${TREE_NODE_STARTER}def isSameTree(p, q):
    # Write your code here
    pass
`,
    solutionCode: `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    if p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
`,
    tests: [
      {
        kind: "custom",
        label: "Same",
        code: `${TREE_HELPERS}
assert isSameTree(_tree_from_vals([1, 2, 3]), _tree_from_vals([1, 2, 3])) is True`,
      },
      {
        kind: "custom",
        label: "Different structure",
        code: `${TREE_HELPERS}
assert isSameTree(_tree_from_vals([1, 2]), _tree_from_vals([1, None, 2])) is False`,
      },
    ],
  }),

  buildCodingProblem({
    order: 40,
    slug: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "easy",
    category: "trees",
    description: `Given the root of a binary tree, invert the tree, and return its root.

Invert means swap every left and right child.`,
    examples: [{ input: "root = [4, 2, 7, 1, 3, 6, 9]", output: "[4, 7, 2, 9, 6, 3, 1]" }],
    constraints: ["The number of nodes is in [0, 100]"],
    hints: ["Swap children, then recurse on both sides."],
    approach: `At each node swap left/right, then invert the (new) children.`,
    starterCode: `${TREE_NODE_STARTER}def invertTree(root):
    # Write your code here
    pass
`,
    solutionCode: `def invertTree(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${TREE_HELPERS}
root = invertTree(_tree_from_vals([4, 2, 7, 1, 3, 6, 9]))
assert _vals_from_tree(root) == [4, 7, 2, 9, 6, 3, 1]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 41,
    slug: "balanced-binary-tree",
    title: "Balanced Binary Tree",
    difficulty: "easy",
    category: "trees",
    description: `Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is one in which the depth of the two subtrees of every node never differs by more than one.`,
    examples: [
      { input: "root = [3, 9, 20, None, None, 15, 7]", output: "True" },
      { input: "root = [1, 2, 2, 3, 3, None, None, 4, 4]", output: "False" },
    ],
    constraints: ["The number of nodes is in [0, 5000]"],
    hints: [
      "Return height, or a sentinel (-1) if unbalanced.",
      "Check |left - right| > 1 at every node.",
    ],
    approach: `Post-order: compute heights; abort with -1 as soon as a node is unbalanced.`,
    starterCode: `${TREE_NODE_STARTER}def isBalanced(root):
    # Write your code here
    pass
`,
    solutionCode: `def isBalanced(root):
    def check(node):
        if not node:
            return 0
        left_height = check(node.left)
        if left_height == -1:
            return -1
        right_height = check(node.right)
        if right_height == -1:
            return -1
        if abs(left_height - right_height) > 1:
            return -1
        return 1 + max(left_height, right_height)
    return check(root) != -1
`,
    tests: [
      {
        kind: "custom",
        label: "Balanced",
        code: `${TREE_HELPERS}
assert isBalanced(_tree_from_vals([3, 9, 20, None, None, 15, 7])) is True`,
      },
      {
        kind: "custom",
        label: "Unbalanced",
        code: `${TREE_HELPERS}
assert isBalanced(_tree_from_vals([1, 2, 2, 3, 3, None, None, 4, 4])) is False`,
      },
    ],
  }),

  buildCodingProblem({
    order: 42,
    slug: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "medium",
    category: "trees",
    description: `Given the root of a binary tree, return the level order traversal of its nodes' values (from left to right, level by level).`,
    examples: [
      { input: "root = [3, 9, 20, None, None, 15, 7]", output: "[[3], [9, 20], [15, 7]]" },
    ],
    constraints: ["The number of nodes is in [0, 2000]"],
    hints: [
      "BFS with a queue.",
      "Process len(queue) nodes as one level.",
    ],
    approach: `Standard BFS, capturing each level's values in a list.`,
    starterCode: `${TREE_NODE_STARTER}from collections import deque

def levelOrder(root):
    # Write your code here
    pass
`,
    solutionCode: `from collections import deque

def levelOrder(root):
    if not root:
        return []
    result = []
    queue = deque([root])
    while queue:
        level_size = len(queue)
        current_level = []
        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(current_level)
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${TREE_HELPERS}
assert levelOrder(_tree_from_vals([3, 9, 20, None, None, 15, 7])) == [[3], [9, 20], [15, 7]]`,
      },
      { kind: "custom", label: "Empty", code: "assert levelOrder(None) == []" },
    ],
  }),

  buildCodingProblem({
    order: 43,
    slug: "lowest-common-ancestor-of-a-bst",
    title: "Lowest Common Ancestor of a BST",
    difficulty: "easy",
    category: "trees",
    description: `Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes p and q.

The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

p and q are given as TreeNode objects. Return the LCA node.`,
    examples: [
      {
        input: "root = [6, 2, 8, 0, 4, 7, 9, None, None, 3, 5], p = 2, q = 8",
        output: "6",
      },
    ],
    constraints: ["All node values are unique", "p and q exist in the tree"],
    hints: [
      "If both values are smaller than root, LCA is in the left subtree.",
      "If both are larger, go right. Otherwise root is the split point.",
    ],
    approach: `Walk from the root using BST order until p and q lie on different sides (or one equals root).`,
    starterCode: `${TREE_NODE_STARTER}def lowestCommonAncestor(root, p, q):
    # Write your code here
    pass
`,
    solutionCode: `def lowestCommonAncestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root
`,
    tests: [
      {
        kind: "custom",
        label: "Split at root",
        code: `${TREE_HELPERS}
root = _tree_from_vals([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5])
p = _find_node(root, 2)
q = _find_node(root, 8)
assert lowestCommonAncestor(root, p, q).val == 6`,
      },
      {
        kind: "custom",
        label: "p is ancestor",
        code: `${TREE_HELPERS}
root = _tree_from_vals([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5])
p = _find_node(root, 2)
q = _find_node(root, 4)
assert lowestCommonAncestor(root, p, q).val == 2`,
      },
    ],
  }),

  buildCodingProblem({
    order: 44,
    slug: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "hard",
    category: "trees",
    description: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can appear at most once. The path does not need to pass through the root.

The path sum is the sum of the node values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.`,
    examples: [
      { input: "root = [1, 2, 3]", output: "6", explanation: "Path is 2 → 1 → 3." },
      { input: "root = [-10, 9, 20, None, None, 15, 7]", output: "42" },
    ],
    constraints: ["The number of nodes is in [1, 3 * 10^4]"],
    hints: [
      "For the parent, you can only send one side (node + max(0, left, right)).",
      "A path through the node can use both sides: node + left + right.",
      "Track a global maximum.",
    ],
    approach: `DFS returns the best downward path. At each node update global max with left + node + right (clamped at 0 per child).`,
    starterCode: `${TREE_NODE_STARTER}def maxPathSum(root):
    # Write your code here
    pass
`,
    solutionCode: `def maxPathSum(root):
    max_sum = float("-inf")
    def dfs(node):
        nonlocal max_sum
        if not node:
            return 0
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        max_sum = max(max_sum, node.val + left + right)
        return node.val + max(left, right)
    dfs(root)
    return max_sum
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${TREE_HELPERS}
assert maxPathSum(_tree_from_vals([1, 2, 3])) == 6`,
      },
      {
        kind: "custom",
        label: "Example 2",
        code: `${TREE_HELPERS}
assert maxPathSum(_tree_from_vals([-10, 9, 20, None, None, 15, 7])) == 42`,
      },
    ],
  }),
];
