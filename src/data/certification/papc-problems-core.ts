import {
  LIST_HELPERS,
  LIST_NODE_STARTER,
  TREE_HELPERS,
  TREE_NODE_STARTER,
} from "@/data/python-practice/helpers";
import { buildPapcProblem } from "./helpers";

export const papcCoreProblems = [
  buildPapcProblem({
    order: 1,
    slug: "two-sum",
    title: "Two-Sum Optimization",
    difficulty: "medium",
    category: "hash-maps",
    description: `Given an array of integers \`nums\` and an integer \`target\`, return the indices of the two numbers that add up to the target. You cannot use the same element twice.

Handle large arrays, negatives, duplicates, and the case where no pair exists (return an empty list). Time complexity must be O(n).

Real-world: an e-commerce platform needs two products whose prices sum to a gift-card total.`,
    examples: [
      { input: "nums = [2, 7, 11, 15], target = 9", output: "[0, 1]", explanation: "2 + 7 = 9" },
      { input: "nums = [1, 2, 3, 4, 5], target = 100", output: "[]" },
    ],
    constraints: [
      "2 <= len(nums) <= 1,000,000",
      "-10^9 <= nums[i], target <= 10^9",
    ],
    hints: [
      "Store each value → index in a dictionary as you iterate.",
      "For each number, look up target - number.",
      "If no pair exists, return [].",
    ],
    approach: `One-pass hash map: for each number check whether its complement was already seen. If so, return both indices. Otherwise store the current number.`,
    starterCode: `def twoSum(nums, target):
    # Write your code here
    pass
`,
    solutionCode: `def twoSum(nums, target):
    seen = {}
    for index, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], index]
        seen[num] = index
    return []
`,
    tests: [
      {
        kind: "custom",
        label: "Classic pair",
        code: `_got = sorted(twoSum([2, 7, 11, 15], 9))\nassert _got == [0, 1], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Unsorted pair",
        code: `_got = sorted(twoSum([3, 2, 4], 6))\nassert _got == [1, 2], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Any valid zero pair",
        code: `nums = [-1, 0, 1, 2, -1, -4]
_got = twoSum(nums, 0)
assert isinstance(_got, list) and len(_got) == 2
assert nums[_got[0]] + nums[_got[1]] == 0`,
      },
      {
        label: "Large numbers",
        call: "twoSum([1000000, 1000000], 2000000)",
        expected: "[0, 1]",
      },
      {
        kind: "custom",
        label: "Negatives",
        code: `nums = [-10, -5, -2, 0, 3, 5, 9]
_got = twoSum(nums, 5)
assert isinstance(_got, list) and len(_got) == 2
assert nums[_got[0]] + nums[_got[1]] == 5`,
      },
      { label: "No pair", call: "twoSum([1, 2, 3, 4, 5], 100)", expected: "[]" },
    ],
  }),

  buildPapcProblem({
    order: 2,
    slug: "lru-cache",
    title: "LRU Cache Implementation",
    difficulty: "hard",
    category: "hash-maps",
    description: `Design and implement a Least Recently Used (LRU) Cache.

- \`get(key)\` returns the value, or -1 if missing
- \`put(key, value)\` inserts or updates
- Both operations must run in O(1) time
- Store at most \`capacity\` items; when exceeded, evict the least recently used item
- Accessing or updating an item makes it most recently used`,
    examples: [
      {
        input: "LRUCache(2); put(1,1); put(2,2); get(1); put(3,3); get(2)",
        output: "get(1) → 1, get(2) → -1",
      },
    ],
    constraints: ["1 <= capacity <= 10,000", "Operations: 1 to 10^4"],
    hints: [
      "OrderedDict (or a hashmap + doubly linked list) gives O(1) get/put.",
      "move_to_end on access; popitem(last=False) to evict LRU.",
    ],
    approach: `Use OrderedDict: get moves a key to the end; put updates or inserts, then evicts the first item when over capacity.`,
    starterCode: `class LRUCache:
    def __init__(self, capacity):
        # Write your code here
        pass

    def get(self, key):
        pass

    def put(self, key, value):
        pass
`,
    solutionCode: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache[key] = value
            self.cache.move_to_end(key)
        else:
            self.cache[key] = value
            if len(self.cache) > self.capacity:
                self.cache.popitem(last=False)
`,
    tests: [
      {
        kind: "custom",
        label: "Basic get",
        code: `c = LRUCache(2)
c.put(1, 1)
c.put(2, 2)
assert c.get(1) == 1`,
      },
      {
        kind: "custom",
        label: "Evict LRU",
        code: `c = LRUCache(2)
c.put(1, 1)
c.put(2, 2)
c.get(1)
c.put(3, 3)
assert c.get(2) == -1
assert c.get(1) == 1
assert c.get(3) == 3`,
      },
      {
        kind: "custom",
        label: "Capacity 1",
        code: `c = LRUCache(1)
c.put(1, 1)
c.put(2, 2)
assert c.get(1) == -1
assert c.get(2) == 2`,
      },
      {
        kind: "custom",
        label: "Update existing",
        code: `c = LRUCache(2)
c.put(1, 1)
c.put(2, 2)
c.put(1, 10)
c.put(3, 3)
assert c.get(1) == 10
assert c.get(2) == -1`,
      },
    ],
  }),

  buildPapcProblem({
    order: 3,
    slug: "find-median-data-stream",
    title: "Find Median in Data Stream",
    difficulty: "hard",
    category: "heap",
    description: `Design a class to find the median of a stream of integers.

- \`addNum(num)\`: add a number from the stream
- \`findMedian()\`: return the current median as a float
- Integers may be positive, negative, or zero`,
    examples: [
      {
        input: "addNum(1); addNum(2); findMedian(); addNum(3); findMedian()",
        output: "1.5 then 2.0",
      },
    ],
    constraints: ["-10^5 <= num <= 10^5", "Stream size: 1 to 50,000"],
    hints: [
      "Two heaps: max-heap for the smaller half, min-heap for the larger half.",
      "Keep sizes balanced so the median is at a heap root.",
    ],
    approach: `Push into a max-heap (negated min-heap) for the lower half and a min-heap for the upper half. Rebalance so sizes differ by at most one.`,
    starterCode: `class MedianFinder:
    def __init__(self):
        pass

    def addNum(self, num):
        pass

    def findMedian(self):
        pass
`,
    solutionCode: `import heapq

class MedianFinder:
    def __init__(self):
        self.small = []
        self.large = []

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        if self.small and self.large and (-self.small[0] > self.large[0]):
            value = -heapq.heappop(self.small)
            heapq.heappush(self.large, value)
        if len(self.small) > len(self.large) + 1:
            value = -heapq.heappop(self.small)
            heapq.heappush(self.large, value)
        if len(self.large) > len(self.small):
            value = heapq.heappop(self.large)
            heapq.heappush(self.small, -value)

    def findMedian(self):
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0
`,
    tests: [
      {
        kind: "custom",
        label: "Two numbers",
        code: `mf = MedianFinder()
mf.addNum(1)
mf.addNum(2)
assert mf.findMedian() == 1.5`,
      },
      {
        kind: "custom",
        label: "Odd count",
        code: `mf = MedianFinder()
for n in [1, 2, 3]:
    mf.addNum(n)
assert mf.findMedian() == 2.0`,
      },
      {
        kind: "custom",
        label: "Four numbers",
        code: `mf = MedianFinder()
for n in [5, 15, 1, 3]:
    mf.addNum(n)
assert mf.findMedian() == 4.0`,
      },
      {
        kind: "custom",
        label: "Negatives",
        code: `mf = MedianFinder()
for n in [-5, -1, 0, 3]:
    mf.addNum(n)
assert mf.findMedian() == -0.5 or mf.findMedian() == (-1 + 0) / 2.0`,
      },
    ],
  }),

  buildPapcProblem({
    order: 4,
    slug: "word-ladder",
    title: "Word Ladder Transformation",
    difficulty: "hard",
    category: "graphs",
    description: `Given \`beginWord\`, \`endWord\`, and a dictionary \`wordList\`, return the length of the shortest transformation sequence from beginWord to endWord such that:

- Each consecutive pair differs by exactly one letter
- Each word (except beginWord) exists in wordList

Return 0 if no such sequence exists.`,
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
        explanation: "hit → hot → dot → dog → cog",
      },
    ],
    constraints: [
      "1 <= beginWord.length <= 10",
      "All words have the same length",
      "1 <= len(wordList) <= 5000",
    ],
    hints: [
      "BFS from beginWord; each one-letter mutation is a neighbor.",
      "Use a set for O(1) dictionary checks.",
    ],
    approach: `BFS on the implicit word graph. For each word, try changing each character to a–z and enqueue unseen dictionary words.`,
    starterCode: `def ladderLength(beginWord, endWord, wordList):
    # Write your code here
    pass
`,
    solutionCode: `from collections import deque

def ladderLength(beginWord, endWord, wordList):
    words = set(wordList)
    if endWord not in words:
        return 0
    queue = deque([(beginWord, 1)])
    seen = {beginWord}
    letters = "abcdefghijklmnopqrstuvwxyz"
    while queue:
        word, dist = queue.popleft()
        if word == endWord:
            return dist
        chars = list(word)
        for i in range(len(chars)):
            orig = chars[i]
            for ch in letters:
                if ch == orig:
                    continue
                chars[i] = ch
                nxt = "".join(chars)
                if nxt in words and nxt not in seen:
                    seen.add(nxt)
                    queue.append((nxt, dist + 1))
            chars[i] = orig
    return 0
`,
    tests: [
      {
        label: "Classic",
        call: 'ladderLength("lost", "cost", ["lost","most","cost"])',
        expected: "2",
      },
      {
        label: "Unreachable",
        call: 'ladderLength("hot", "dog", ["hot","dot"])',
        expected: "0",
      },
      {
        label: "Short",
        call: 'ladderLength("hot", "dog", ["hot","dot","dog"])',
        expected: "3",
      },
      {
        label: "Cat dog",
        call: 'ladderLength("cat", "dog", ["cat","bat","bad","dad","dag","dog"])',
        expected: "6",
      },
    ],
  }),

  buildPapcProblem({
    order: 6,
    slug: "n-ary-tree-level-order",
    title: "N-ary Tree Level Order Traversal",
    difficulty: "medium",
    category: "trees",
    description: `Given the root of an n-ary tree (each node has \`val\` and a list of \`children\`), return the level order traversal of its nodes' values.

If root is None, return [].`,
    examples: [
      {
        input: "root = Node(1, [Node(3, [Node(5), Node(6)]), Node(2), Node(4)])",
        output: "[[1], [3, 2, 4], [5, 6]]",
      },
    ],
    constraints: ["Number of nodes in [0, 10^4]"],
    hints: ["BFS with a queue, collecting one level at a time."],
    approach: `Standard BFS: dequeue the current level's nodes, enqueue all children for the next level.`,
    starterCode: `class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []


def levelOrder(root):
    # Write your code here
    pass
`,
    solutionCode: `from collections import deque

def levelOrder(root):
    if not root:
        return []
    result = []
    q = deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            for child in node.children:
                q.append(child)
        result.append(level)
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Example tree",
        code: `root = Node(1, [Node(3, [Node(5), Node(6)]), Node(2), Node(4)])
assert levelOrder(root) == [[1], [3, 2, 4], [5, 6]]`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `assert levelOrder(None) == []`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `assert levelOrder(Node(7)) == [[7]]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 7,
    slug: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given an integer array \`nums\`, find a contiguous subarray that has the largest product, and return that product.

The array may contain negatives and zeros.`,
    examples: [
      { input: "nums = [2, 3, -2, 4]", output: "6", explanation: "[2, 3]" },
      { input: "nums = [-2, 0, -1]", output: "0" },
    ],
    constraints: ["1 <= len(nums) <= 2 * 10^4"],
    hints: [
      "Track both max and min product ending at i (negatives flip signs).",
      "A zero resets the running products.",
    ],
    approach: `Kadane variant: at each index, the new max/min is nums[i] or nums[i] times previous max/min.`,
    starterCode: `def maxProduct(nums):
    # Write your code here
    pass
`,
    solutionCode: `def maxProduct(nums):
    if not nums:
        return 0
    best = cur_max = cur_min = nums[0]
    for num in nums[1:]:
        candidates = (num, cur_max * num, cur_min * num)
        cur_max = max(candidates)
        cur_min = min(candidates)
        best = max(best, cur_max)
    return best
`,
    tests: [
      { label: "Example 1", call: "maxProduct([-4, -3, -2])", expected: "12" },
      { label: "With zero", call: "maxProduct([-2, 0, -1])", expected: "0" },
      { label: "All positive", call: "maxProduct([1, 2, 3, 4])", expected: "24" },
    ],
  }),

  buildPapcProblem({
    order: 8,
    slug: "serialize-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "hard",
    category: "trees",
    description: `Design an algorithm to serialize a binary tree to a string and deserialize that string back to the same tree.

Implement \`serialize(root)\` and \`deserialize(data)\`. TreeNode is provided.`,
    examples: [
      { input: "root = [1, 2, 3, None, None, 4, 5]", output: "round-trip restores the tree" },
    ],
    constraints: ["Number of nodes in [0, 10^4]"],
    hints: [
      "Preorder with explicit null markers works well.",
      "Split on a delimiter when deserializing.",
    ],
    approach: `DFS preorder encode values and None. Decode with an iterator consuming the token stream.`,
    starterCode: `${TREE_NODE_STARTER}def serialize(root):
    # Write your code here
    pass

def deserialize(data):
    # Write your code here
    pass
`,
    solutionCode: `${TREE_NODE_STARTER}def serialize(root):
    tokens = []
    def dfs(node):
        if not node:
            tokens.append("null")
            return
        tokens.append(str(node.val))
        dfs(node.left)
        dfs(node.right)
    dfs(root)
    return ",".join(tokens)

def deserialize(data):
    tokens = iter(data.split(","))
    def dfs():
        val = next(tokens)
        if val == "null":
            return None
        node = TreeNode(int(val))
        node.left = dfs()
        node.right = dfs()
        return node
    return dfs()
`,
    tests: [
      {
        kind: "custom",
        label: "Round trip",
        code: `${TREE_HELPERS}
root = _tree_from_vals([4, 2, 6, 1, 3])
restored = deserialize(serialize(root))
assert _vals_from_tree(restored) == [4, 2, 6, 1, 3]`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `assert deserialize(serialize(None)) is None`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `${TREE_HELPERS}
root = TreeNode(9)
assert deserialize(serialize(root)).val == 9`,
      },
    ],
  }),
];
