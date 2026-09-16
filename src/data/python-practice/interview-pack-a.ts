import {
  LIST_HELPERS,
  LIST_NODE_STARTER,
  TREE_HELPERS,
  TREE_NODE_STARTER,
} from "./helpers";
import { buildCodingProblem } from "./helpers";

/**
 * Extra medium/hard drills (orders 78+). Same algorithms as the PAPC exam bank,
 * but examples and public tests use different inputs so practice does not leak
 * the certification quiz cases.
 */
export const interviewPackProblems = [
  buildCodingProblem({
    order: 78,
    slug: "three-sum",
    title: "3Sum",
    difficulty: "medium",
    category: "arrays",
    description: `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that the indices are distinct and the values sum to 0.

The solution set must not contain duplicate triplets.`,
    examples: [
      { input: "nums = [-2,0,1,1,2]", output: "[[-2,0,2],[-2,1,1]]" },
      { input: "nums = [1,2,-3]", output: "[[-3,1,2]]" },
    ],
    constraints: ["3 <= nums.length <= 3000"],
    hints: ["Sort first.", "Fix one value and two-sum the rest, skipping duplicates."],
    approach: "Sort, skip duplicate anchors, two-pointer scan for the complement.",
    starterCode: `def threeSum(nums):
    pass
`,
    solutionCode: `def threeSum(nums):
    nums = sorted(nums)
    result = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, n - 1
        target = -nums[i]
        while left < right:
            total = nums[left] + nums[right]
            if total == target:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < target:
                left += 1
            else:
                right -= 1
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Two triplets",
        code: `_got = sorted(sorted(t) for t in threeSum([-2,0,1,1,2]))
assert _got == [[-2,0,2],[-2,1,1]], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Simple",
        code: `_got = sorted(sorted(t) for t in threeSum([1,2,-3]))
assert _got == [[-3,1,2]], f"got {_got!r}"`,
      },
      { kind: "custom", label: "No triplet", code: "assert threeSum([1,2,4]) == []" },
    ],
  }),

  buildCodingProblem({
    order: 79,
    slug: "word-ladder",
    title: "Word Ladder",
    difficulty: "hard",
    category: "graphs",
    description: `Given \`beginWord\`, \`endWord\`, and \`wordList\`, return the number of words in the shortest transformation sequence from begin to end.

You may change one letter at a time; each intermediate word must be in the list. Return 0 if impossible.`,
    examples: [
      {
        input: 'beginWord = "lost", endWord = "cost", wordList = ["lost","most","cost"]',
        output: "2",
      },
      {
        input: 'beginWord = "hot", endWord = "dog", wordList = ["hot","dot","dog"]',
        output: "3",
      },
    ],
    constraints: ["1 <= beginWord.length <= 10"],
    hints: ["BFS. Neighbors differ by one letter."],
    approach: "BFS from beginWord; each hop is one letter change present in the dictionary.",
    starterCode: `def ladderLength(beginWord, endWord, wordList):
    pass
`,
    solutionCode: `from collections import deque

def ladderLength(beginWord, endWord, wordList):
    words = set(wordList)
    if endWord not in words:
        return 0
    letters = "abcdefghijklmnopqrstuvwxyz"
    q = deque([(beginWord, 1)])
    seen = {beginWord}
    while q:
        word, dist = q.popleft()
        if word == endWord:
            return dist
        for i in range(len(word)):
            for ch in letters:
                nxt = word[:i] + ch + word[i + 1 :]
                if nxt in words and nxt not in seen:
                    seen.add(nxt)
                    q.append((nxt, dist + 1))
    return 0
`,
    tests: [
      { label: "One change", call: 'ladderLength("lost", "cost", ["lost","most","cost"])', expected: "2" },
      { label: "Three words", call: 'ladderLength("hot", "dog", ["hot","dot","dog"])', expected: "3" },
      { label: "Impossible", call: 'ladderLength("hot", "dog", ["hot","dot"])', expected: "0" },
    ],
  }),

  buildCodingProblem({
    order: 80,
    slug: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Burst balloons in \`nums\`. Bursting i with remaining neighbors L and R scores nums[L]*nums[i]*nums[R]. Return the maximum coins.`,
    examples: [
      { input: "nums = [2,3,7]", output: "63" },
      { input: "nums = [1,2]", output: "4" },
    ],
    constraints: ["1 <= n <= 300"],
    hints: ["Think of the last balloon burst in a range.", "Pad with 1s."],
    approach: "Interval DP: try last burst j in (i, k).",
    starterCode: `def maxCoins(nums):
    pass
`,
    solutionCode: `def maxCoins(nums):
    vals = [1] + nums + [1]
    n = len(vals)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(0, n - length):
            k = i + length
            for j in range(i + 1, k):
                dp[i][k] = max(
                    dp[i][k],
                    vals[i] * vals[j] * vals[k] + dp[i][j] + dp[j][k],
                )
    return dp[0][n - 1]
`,
    tests: [
      { label: "Three", call: "maxCoins([2,3,7])", expected: "63" },
      { label: "Two", call: "maxCoins([1,2])", expected: "4" },
      { label: "Single", call: "maxCoins([9])", expected: "9" },
    ],
  }),

  buildCodingProblem({
    order: 81,
    slug: "word-break-ii",
    title: "Word Break II",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Given \`s\` and \`wordDict\`, return all sentences formed by inserting spaces so every word is in the dictionary.`,
    examples: [
      {
        input: 's = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]',
        output: '["pine apple pen apple","pineapple pen apple","pine applepen apple"]',
      },
    ],
    constraints: ["1 <= s.length <= 20"],
    hints: ["Memoize remaining suffixes."],
    approach: "Backtrack prefixes that are dictionary words; cache lists of sentences.",
    starterCode: `def wordBreak(s, wordDict):
    pass
`,
    solutionCode: `def wordBreak(s, wordDict):
    words = set(wordDict)
    memo = {}
    def dfs(i):
        if i in memo:
            return memo[i]
        if i == len(s):
            return [""]
        out = []
        for j in range(i + 1, len(s) + 1):
            w = s[i:j]
            if w in words:
                for rest in dfs(j):
                    out.append(w if not rest else w + " " + rest)
        memo[i] = out
        return out
    return dfs(0)
`,
    tests: [
      {
        kind: "custom",
        label: "Pineapple",
        code: `_got = sorted(wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]))
assert _got == ["pine apple pen apple","pine applepen apple","pineapple pen apple"], f"got {_got!r}"`,
      },
      { kind: "custom", label: "Impossible", code: 'assert wordBreak("a", ["b"]) == []' },
      { kind: "custom", label: "Single", code: 'assert wordBreak("go", ["go"]) == ["go"]' },
    ],
  }),

  buildCodingProblem({
    order: 82,
    slug: "lowest-common-ancestor-of-a-binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "medium",
    category: "trees",
    description: `Find the lowest common ancestor of nodes p and q in a binary tree. A node can be a descendant of itself.`,
    examples: [
      { input: "root = [6,2,8,0,4,7,9], p = 2, q = 8", output: "6" },
      { input: "root = [6,2,8,0,4,7,9], p = 2, q = 4", output: "2" },
    ],
    constraints: ["2 <= nodes <= 10^5"],
    hints: ["If both sides return a node, root is the LCA."],
    approach: "Recurse; if left and right are non-null, current node is LCA.",
    starterCode: `${TREE_NODE_STARTER}def lowestCommonAncestor(root, p, q):
    pass
`,
    solutionCode: `def lowestCommonAncestor(root, p, q):
    if not root or root is p or root is q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left or right
`,
    tests: [
      {
        kind: "custom",
        label: "Split",
        code: `${TREE_HELPERS}
root = _tree_from_vals([6,2,8,0,4,7,9])
p, q = _find_node(root, 2), _find_node(root, 8)
assert lowestCommonAncestor(root, p, q).val == 6`,
      },
      {
        kind: "custom",
        label: "Ancestor is p",
        code: `${TREE_HELPERS}
root = _tree_from_vals([6,2,8,0,4,7,9])
p, q = _find_node(root, 2), _find_node(root, 4)
assert lowestCommonAncestor(root, p, q).val == 2`,
      },
      {
        kind: "custom",
        label: "Right pair",
        code: `${TREE_HELPERS}
root = _tree_from_vals([6,2,8,0,4,7,9])
p, q = _find_node(root, 7), _find_node(root, 9)
assert lowestCommonAncestor(root, p, q).val == 8`,
      },
    ],
  }),

  buildCodingProblem({
    order: 83,
    slug: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "hard",
    category: "trees",
    description: `Design \`Codec.serialize\` / \`deserialize\` to convert a binary tree to a string and back.`,
    examples: [{ input: "root = [4,2,6,1,3]", output: "[4,2,6,1,3]" }],
    constraints: ["0 <= nodes <= 10^4"],
    hints: ["Preorder with a null marker."],
    approach: "DFS serialize values and 'N'; deserialize by consuming tokens.",
    starterCode: `${TREE_NODE_STARTER}class Codec:
    def serialize(self, root):
        pass

    def deserialize(self, data):
        pass
`,
    solutionCode: `class Codec:
    def serialize(self, root):
        out = []
        def dfs(node):
            if not node:
                out.append("N")
                return
            out.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return ",".join(out)

    def deserialize(self, data):
        tokens = data.split(",")
        i = [0]
        def dfs():
            val = tokens[i[0]]
            i[0] += 1
            if val == "N":
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
        label: "Balanced",
        code: `${TREE_HELPERS}
c = Codec()
root = _tree_from_vals([4,2,6,1,3])
assert _vals_from_tree(c.deserialize(c.serialize(root))) == [4,2,6,1,3]`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `${TREE_HELPERS}
c = Codec()
assert c.deserialize(c.serialize(None)) is None`,
      },
      {
        kind: "custom",
        label: "Right child",
        code: `${TREE_HELPERS}
c = Codec()
root = _tree_from_vals([7,None,8])
assert _vals_from_tree(c.deserialize(c.serialize(root))) == [7,None,8]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 84,
    slug: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Find a contiguous subarray with the largest product and return that product.`,
    examples: [
      { input: "nums = [-2,0,-1]", output: "0" },
      { input: "nums = [1,2,3,4]", output: "24" },
    ],
    constraints: ["1 <= nums.length <= 2 * 10^4"],
    hints: ["Track both max and min product (negatives flip)."],
    approach: "At each index, candidates are x, max*x, min*x.",
    starterCode: `def maxProduct(nums):
    pass
`,
    solutionCode: `def maxProduct(nums):
    result = mx = mn = nums[0]
    for x in nums[1:]:
        cand = (x, mx * x, mn * x)
        mx = max(cand)
        mn = min(cand)
        result = max(result, mx)
    return result
`,
    tests: [
      { label: "Zero split", call: "maxProduct([-2,0,-1])", expected: "0" },
      { label: "All positive", call: "maxProduct([1,2,3,4])", expected: "24" },
      { label: "Two negatives", call: "maxProduct([-4,-3,-2])", expected: "12" },
    ],
  }),

  buildCodingProblem({
    order: 85,
    slug: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "medium",
    category: "bit-manipulation",
    description: `Reverse the digits of a 32-bit signed integer. Return 0 if the result overflows \`[-2^31, 2^31 - 1]\`.`,
    examples: [
      { input: "x = 456", output: "654" },
      { input: "x = -450", output: "-54" },
      { input: "x = 1000", output: "1" },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    hints: ["Pop digits; check overflow before returning."],
    approach: "Build the reverse; clamp to 32-bit range.",
    starterCode: `def reverse(x):
    pass
`,
    solutionCode: `def reverse(x):
    sign = 1 if x >= 0 else -1
    x = abs(x)
    out = 0
    while x:
        out = out * 10 + x % 10
        x //= 10
    out *= sign
    if out < -2**31 or out > 2**31 - 1:
        return 0
    return out
`,
    tests: [
      { label: "Positive", call: "reverse(456)", expected: "654" },
      { label: "Negative zeros", call: "reverse(-450)", expected: "-54" },
      { label: "Overflow", call: "reverse(1534236469)", expected: "0" },
    ],
  }),

  buildCodingProblem({
    order: 86,
    slug: "integer-to-roman",
    title: "Integer to Roman",
    difficulty: "medium",
    category: "strings",
    description: `Convert an integer in 1..3999 to a Roman numeral.`,
    examples: [
      { input: "num = 9", output: '"IX"' },
      { input: "num = 40", output: '"XL"' },
      { input: "num = 2024", output: '"MMXXIV"' },
    ],
    constraints: ["1 <= num <= 3999"],
    hints: ["Greedy subtract from 1000, 900, 500, ..."],
    approach: "Walk value/numeral pairs from largest to smallest.",
    starterCode: `def intToRoman(num):
    pass
`,
    solutionCode: `def intToRoman(num):
    vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    out = []
    for v, s in zip(vals, syms):
        while num >= v:
            out.append(s)
            num -= v
    return "".join(out)
`,
    tests: [
      { label: "9", call: "intToRoman(9)", expected: '"IX"' },
      { label: "40", call: "intToRoman(40)", expected: '"XL"' },
      { label: "2024", call: "intToRoman(2024)", expected: '"MMXXIV"' },
    ],
  }),

  buildCodingProblem({
    order: 87,
    slug: "palindrome-partitioning",
    title: "Palindrome Partitioning",
    difficulty: "medium",
    category: "backtracking",
    description: `Partition string \`s\` so every substring is a palindrome. Return all partitions.`,
    examples: [{ input: 's = "aaba"', output: '[["a","a","b","a"],["a","aba"],["aa","b","a"]]' }],
    constraints: ["1 <= s.length <= 16"],
    hints: ["Backtrack; only expand palindromic prefixes."],
    approach: "From start, try every palindrome cut, recurse.",
    starterCode: `def partition(s):
    pass
`,
    solutionCode: `def partition(s):
    def pal(a, b):
        return s[a:b] == s[a:b][::-1]
    out = []
    def dfs(i, path):
        if i == len(s):
            out.append(path[:])
            return
        for j in range(i + 1, len(s) + 1):
            if pal(i, j):
                path.append(s[i:j])
                dfs(j, path)
                path.pop()
    dfs(0, [])
    return out
`,
    tests: [
      {
        kind: "custom",
        label: "aaba",
        code: `_got = sorted(partition("aaba"))
assert _got == [["a","a","b","a"],["a","aba"],["aa","b","a"]], f"got {_got!r}"`,
      },
      { kind: "custom", label: "Single", code: 'assert partition("z") == [["z"]]' },
      {
        kind: "custom",
        label: "bb",
        code: `_got = sorted(partition("bb"))
assert _got == [["b","b"],["bb"]], f"got {_got!r}"`,
      },
    ],
  }),

  buildCodingProblem({
    order: 88,
    slug: "combination-sum",
    title: "Combination Sum",
    difficulty: "medium",
    category: "backtracking",
    description: `Given distinct \`candidates\` and a \`target\`, return all unique combinations that sum to target. Numbers may be reused.`,
    examples: [
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
      { input: "candidates = [3], target = 2", output: "[]" },
    ],
    constraints: ["1 <= candidates.length <= 30"],
    hints: ["Backtrack; reuse the same index."],
    approach: "DFS remaining target; start index avoids permutations of the same combo.",
    starterCode: `def combinationSum(candidates, target):
    pass
`,
    solutionCode: `def combinationSum(candidates, target):
    out = []
    def dfs(i, remain, path):
        if remain == 0:
            out.append(path[:])
            return
        if remain < 0 or i == len(candidates):
            return
        path.append(candidates[i])
        dfs(i, remain - candidates[i], path)
        path.pop()
        dfs(i + 1, remain, path)
    dfs(0, target, [])
    return out
`,
    tests: [
      {
        kind: "custom",
        label: "Eight",
        code: `_got = sorted(sorted(c) for c in combinationSum([2,3,5], 8))
assert _got == [[2,2,2,2],[2,3,3],[3,5]], f"got {_got!r}"`,
      },
      { kind: "custom", label: "Impossible", code: "assert combinationSum([3], 2) == []" },
      {
        kind: "custom",
        label: "Reuse one",
        code: "assert combinationSum([4], 8) == [[4,4]]",
      },
    ],
  }),

  buildCodingProblem({
    order: 89,
    slug: "implement-trie",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "medium",
    category: "strings",
    description: `Implement a trie with \`insert\`, \`search\`, and \`startsWith\`.`,
    examples: [
      {
        input: 'insert("mango"); search("mango"); search("man"); startsWith("man")',
        output: "True, False, True",
      },
    ],
    constraints: ["word consists of lowercase English letters"],
    hints: ["Children map per node.", "Mark word endings."],
    approach: "Walk character by character; create missing nodes on insert.",
    starterCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        pass

    def search(self, word):
        pass

    def startsWith(self, prefix):
        pass
`,
    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end

    def startsWith(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True
`,
    tests: [
      {
        kind: "custom",
        label: "Mango",
        code: `t = Trie()
t.insert("mango")
assert t.search("mango") is True
assert t.search("man") is False
assert t.startsWith("man") is True`,
      },
      {
        kind: "custom",
        label: "Two words",
        code: `t = Trie()
t.insert("code")
t.insert("coder")
assert t.search("code") is True
assert t.search("coder") is True
assert t.search("cod") is False`,
      },
      {
        kind: "custom",
        label: "Empty trie",
        code: `t = Trie()
assert t.search("x") is False
assert t.startsWith("x") is False`,
      },
    ],
  }),
];
