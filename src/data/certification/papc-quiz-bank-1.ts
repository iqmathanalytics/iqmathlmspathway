import {
  GRAPH_NODE_STARTER,
  LIST_HELPERS,
  LIST_NODE_STARTER,
  TREE_HELPERS,
  TREE_NODE_STARTER,
} from "@/data/python-practice/helpers";
import { buildPapcProblem } from "./helpers";

/** PAPC exam bank 1–25. IDs are papc-<slug>. */
export const papcQuizBankPart1 = [
  buildPapcProblem({
    order: 1,
    slug: "two-sum-ii",
    title: "Two Sum II - Input Array Is Sorted",
    difficulty: "medium",
    category: "arrays",
    description: `Given an array of integers \`numbers\` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target.

Return the 1-indexed indices as \`[index1, index2]\` where \`index1 < index2\`.`,
    examples: [
      { input: "numbers = [2,7,11,15], target = 9", output: "[1,2]", explanation: "2 + 7 = 9" },
      { input: "numbers = [2,3,3,4], target = 6", output: "[1,4]", explanation: "2 + 4 = 6" },
    ],
    constraints: ["2 <= numbers.length <= 3 * 10^4", "numbers is sorted non-decreasing"],
    hints: ["Use two pointers.", "One pointer at start, one at end."],
    approach: "If the sum is too small move left; if too large move right.",
    starterCode: `def twoSum(numbers, target):
    pass
`,
    solutionCode: `def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1
    while left < right:
        current = numbers[left] + numbers[right]
        if current == target:
            return [left + 1, right + 1]
        if current < target:
            left += 1
        else:
            right -= 1
    return []
`,
    tests: [
      { label: "Classic", call: "twoSum([2,7,11,15], 9)", expected: "[1, 2]" },
      { label: "Duplicates", call: "twoSum([2,3,3,4], 6)", expected: "[1, 4]" },
      { label: "Negatives", call: "twoSum([-1,0], -1)", expected: "[1, 2]" },
    ],
  }),

  buildPapcProblem({
    order: 2,
    slug: "container-most-water",
    title: "Container With Most Water",
    difficulty: "medium",
    category: "arrays",
    description: `You are given an integer array \`height\` of length n. There are n vertical lines at \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container with the most water.`,
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["2 <= height.length <= 10^5"],
    hints: ["Two pointers.", "Move the pointer at the shorter line."],
    approach: "Area is min(height[l], height[r]) * (r - l). Advance the shorter pointer.",
    starterCode: `def maxArea(height):
    pass
`,
    solutionCode: `def maxArea(height):
    left, right = 0, len(height) - 1
    best = 0
    while left < right:
        best = max(best, min(height[left], height[right]) * (right - left))
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return best
`,
    tests: [
      { label: "Example", call: "maxArea([1,8,6,2,5,4,8,3,7])", expected: "49" },
      { label: "Two bars", call: "maxArea([1,1])", expected: "1" },
      { label: "Increasing", call: "maxArea([1,2,1])", expected: "2" },
    ],
  }),

  buildPapcProblem({
    order: 3,
    slug: "3sum",
    title: "3Sum",
    difficulty: "medium",
    category: "arrays",
    description: `Given an integer array \`nums\`, return all triplets \`[nums[i], nums[j], nums[k]]\` such that the three indices are distinct and the values sum to 0.

The solution set must not contain duplicate triplets.`,
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 <= nums.length <= 3000"],
    hints: ["Sort first.", "Fix one value and two-sum the rest."],
    approach: "Sort, skip duplicates, two-pointer scan for the complement.",
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
        label: "Classic",
        code: `_got = sorted(sorted(t) for t in threeSum([-1,0,1,2,-1,-4]))
assert _got == [[-1,-1,2],[-1,0,1]], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Zeros",
        code: `_got = threeSum([0,0,0,0])
assert _got == [[0,0,0]] or _got == [[0, 0, 0]]`,
      },
      { kind: "custom", label: "No triplet", code: "assert threeSum([1,2,3]) == []" },
    ],
  }),

  buildPapcProblem({
    order: 4,
    slug: "longest-substr-no-repeat",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    category: "strings",
    description: `Given a string \`s\`, find the length of the longest substring without repeating characters.`,
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: '"abc"' },
      { input: 's = "bbbbb"', output: "1" },
      { input: 's = "pwwkew"', output: "3" },
    ],
    constraints: ["0 <= s.length <= 5 * 10^4"],
    hints: ["Sliding window + last-seen index map."],
    approach: "Move left past the previous occurrence when a duplicate is seen.",
    starterCode: `def lengthOfLongestSubstring(s):
    pass
`,
    solutionCode: `def lengthOfLongestSubstring(s):
    last = {}
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in last:
            left = max(left, last[ch] + 1)
        last[ch] = right
        best = max(best, right - left + 1)
    return best
`,
    tests: [
      { label: "Repeating pattern", call: 'lengthOfLongestSubstring("abcabcbb")', expected: "3" },
      { label: "All same", call: 'lengthOfLongestSubstring("bbbbb")', expected: "1" },
      { label: "Empty", call: 'lengthOfLongestSubstring("")', expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 5,
    slug: "median-two-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "hard",
    category: "binary-search",
    description: `Given two sorted arrays \`nums1\` and \`nums2\`, return the median of the combined sorted values.

Target time complexity is O(log(m+n)).`,
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5" },
    ],
    constraints: ["0 <= m, n <= 1000"],
    hints: ["Binary search the partition on the smaller array."],
    approach: "Partition so left sides have the same count; check max-left vs min-right.",
    starterCode: `def findMedianSortedArrays(nums1, nums2):
    pass
`,
    solutionCode: `def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    lo, hi = 0, m
    half = (m + n + 1) // 2
    while lo <= hi:
        i = (lo + hi) // 2
        j = half - i
        left1 = float("-inf") if i == 0 else nums1[i - 1]
        right1 = float("inf") if i == m else nums1[i]
        left2 = float("-inf") if j == 0 else nums2[j - 1]
        right2 = float("inf") if j == n else nums2[j]
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2 == 0:
                return (max(left1, left2) + min(right1, right2)) / 2
            return float(max(left1, left2))
        if left1 > right2:
            hi = i - 1
        else:
            lo = i + 1
    return 0.0
`,
    tests: [
      { label: "Odd", call: "findMedianSortedArrays([1,3], [2])", expected: "2.0" },
      { label: "Even", call: "findMedianSortedArrays([1,2], [3,4])", expected: "2.5" },
      { label: "Empty first", call: "findMedianSortedArrays([], [1])", expected: "1.0" },
    ],
  }),

  buildPapcProblem({
    order: 6,
    slug: "regex-matching",
    title: "Regular Expression Matching",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Implement regex matching with \`. \` (any one char) and \`*\` (zero or more of the preceding element).`,
    examples: [
      { input: 's = "aa", p = "a"', output: "False" },
      { input: 's = "aa", p = "a*"', output: "True" },
      { input: 's = "ab", p = ".*"', output: "True" },
    ],
    constraints: ["1 <= s.length <= 20", "1 <= p.length <= 30"],
    hints: ["dp[i][j] = s[:i] matches p[:j]."],
    approach: "Fill a DP table; star can drop the pair or consume a matching char.",
    starterCode: `def isMatch(s, p):
    pass
`,
    solutionCode: `def isMatch(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(2, n + 1):
        if p[j - 1] == "*":
            dp[0][j] = dp[0][j - 2]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == "*":
                dp[i][j] = dp[i][j - 2]
                if p[j - 2] == "." or p[j - 2] == s[i - 1]:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
            elif p[j - 1] == "." or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]
    return dp[m][n]
`,
    tests: [
      { label: "No star", call: 'isMatch("aa", "a")', expected: "False" },
      { label: "Star", call: 'isMatch("aa", "a*")', expected: "True" },
      { label: "Dot star", call: 'isMatch("ab", ".*")', expected: "True" },
    ],
  }),

  buildPapcProblem({
    order: 7,
    slug: "merge-k-lists",
    title: "Merge k Sorted Lists",
    difficulty: "hard",
    category: "heap",
    description: `You are given k sorted linked lists. Merge them into one sorted list and return the head.`,
    examples: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" }],
    constraints: ["0 <= k <= 10^4"],
    hints: ["Min-heap of current heads.", "Include list index so nodes are not compared directly."],
    approach: "k-way merge: pop the smallest head, push its next.",
    starterCode: `${LIST_NODE_STARTER}def mergeKLists(lists):
    pass
`,
    solutionCode: `import heapq

def mergeKLists(lists):
    heap = []
    dummy = ListNode(0)
    cur = dummy
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))
    while heap:
        _, i, node = heapq.heappop(heap)
        cur.next = node
        cur = cur.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next
`,
    tests: [
      {
        kind: "custom",
        label: "Three lists",
        code: `${LIST_HELPERS}
lists = [_list_from_vals([1,4,5]), _list_from_vals([1,3,4]), _list_from_vals([2,6])]
assert _vals_from_list(mergeKLists(lists)) == [1,1,2,3,4,4,5,6]`,
      },
      { kind: "custom", label: "Empty", code: "assert mergeKLists([]) is None" },
      {
        kind: "custom",
        label: "One empty",
        code: `${LIST_HELPERS}
assert _vals_from_list(mergeKLists([None, _list_from_vals([1])])) == [1]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 8,
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "hard",
    category: "arrays",
    description: `Given n non-negative integers representing an elevation map where each bar has width 1, compute how much water it can trap after raining.`,
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["1 <= n <= 2 * 10^4"],
    hints: ["Water at i is min(maxLeft, maxRight) - height[i]."],
    approach: "Precompute left/right maxima, then sum trapped units.",
    starterCode: `def trap(height):
    pass
`,
    solutionCode: `def trap(height):
    n = len(height)
    if n == 0:
        return 0
    left = [0] * n
    right = [0] * n
    left[0] = height[0]
    for i in range(1, n):
        left[i] = max(left[i - 1], height[i])
    right[-1] = height[-1]
    for i in range(n - 2, -1, -1):
        right[i] = max(right[i + 1], height[i])
    return sum(min(left[i], right[i]) - height[i] for i in range(n))
`,
    tests: [
      { label: "Example 1", call: "trap([0,1,0,2,1,0,1,3,2,1,2,1])", expected: "6" },
      { label: "Example 2", call: "trap([4,2,0,3,2,5])", expected: "9" },
      { label: "Flat", call: "trap([2,2,2])", expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 9,
    slug: "word-ladder",
    title: "Word Ladder",
    difficulty: "hard",
    category: "graphs",
    description: `Given \`beginWord\`, \`endWord\`, and \`wordList\`, return the number of words in the shortest transformation sequence from begin to end.

You may change one letter at a time; each intermediate word must be in the list. Return 0 if impossible.`,
    examples: [
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
        output: "5",
      },
      {
        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]',
        output: "0",
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
      {
        label: "Classic",
        call: 'ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])',
        expected: "5",
      },
      {
        label: "Missing end",
        call: 'ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])',
        expected: "0",
      },
      { label: "Same", call: 'ladderLength("a", "c", ["a","b","c"])', expected: "2" },
    ],
  }),

  buildPapcProblem({
    order: 10,
    slug: "course-schedule",
    title: "Course Schedule",
    difficulty: "medium",
    category: "graphs",
    description: `There are \`numCourses\` courses labeled 0..n-1. \`prerequisites[i] = [ai, bi]\` means you must take bi before ai.

Return true if you can finish all courses.`,
    examples: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", output: "True" },
      { input: "numCourses = 2, prerequisites = [[1,0],[0,1]]", output: "False" },
    ],
    constraints: ["1 <= numCourses <= 2000"],
    hints: ["Cycle detection / topological sort."],
    approach: "Kahn's algorithm: peel nodes with in-degree 0.",
    starterCode: `def canFinish(numCourses, prerequisites):
    pass
`,
    solutionCode: `from collections import deque

def canFinish(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    indeg = [0] * numCourses
    for a, b in prerequisites:
        graph[b].append(a)
        indeg[a] += 1
    q = deque(i for i in range(numCourses) if indeg[i] == 0)
    taken = 0
    while q:
        course = q.popleft()
        taken += 1
        for nxt in graph[course]:
            indeg[nxt] -= 1
            if indeg[nxt] == 0:
                q.append(nxt)
    return taken == numCourses
`,
    tests: [
      { label: "Possible", call: "canFinish(2, [[1,0]])", expected: "True" },
      { label: "Cycle", call: "canFinish(2, [[1,0],[0,1]])", expected: "False" },
      { label: "None", call: "canFinish(1, [])", expected: "True" },
    ],
  }),

  buildPapcProblem({
    order: 11,
    slug: "clone-graph",
    title: "Clone Graph",
    difficulty: "medium",
    category: "graphs",
    description: `Given a node in a connected undirected graph, return a deep copy of the graph.`,
    examples: [{ input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "[[2,4],[1,3],[2,4],[1,3]]" }],
    constraints: ["1 to 100 nodes, no self-loops."],
    hints: ["Map original node → clone.", "DFS or BFS."],
    approach: "Clone on first visit, then clone neighbor lists.",
    starterCode: `${GRAPH_NODE_STARTER}def cloneGraph(node):
    pass
`,
    solutionCode: `def cloneGraph(node):
    if not node:
        return None
    seen = {}
    def dfs(n):
        if n in seen:
            return seen[n]
        copy = Node(n.val, [])
        seen[n] = copy
        for nbr in n.neighbors:
            copy.neighbors.append(dfs(nbr))
        return copy
    return dfs(node)
`,
    tests: [
      {
        kind: "custom",
        label: "Square",
        code: `nodes = {i: Node(i) for i in range(1, 5)}
nodes[1].neighbors = [nodes[2], nodes[4]]
nodes[2].neighbors = [nodes[1], nodes[3]]
nodes[3].neighbors = [nodes[2], nodes[4]]
nodes[4].neighbors = [nodes[1], nodes[3]]
cloned = cloneGraph(nodes[1])
assert cloned is not nodes[1] and cloned.val == 1
seen = {}
def walk(n):
    if n.val in seen:
        return
    seen[n.val] = sorted(x.val for x in n.neighbors)
    for x in n.neighbors:
        walk(x)
walk(cloned)
assert seen == {1:[2,4], 2:[1,3], 3:[2,4], 4:[1,3]}`,
      },
      { kind: "custom", label: "Empty", code: "assert cloneGraph(None) is None" },
      {
        kind: "custom",
        label: "Single",
        code: `n = Node(1, [])
c = cloneGraph(n)
assert c is not n and c.val == 1 and c.neighbors == []`,
      },
    ],
  }),

  buildPapcProblem({
    order: 12,
    slug: "number-of-islands",
    title: "Number of Islands",
    difficulty: "medium",
    category: "graphs",
    description: `Given an m×n grid of \`'1'\` (land) and \`'0'\` (water), return the number of islands. Land connects 4-directionally.`,
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
    ],
    constraints: ["1 <= m, n <= 300"],
    hints: ["DFS/BFS flood-fill each unvisited land cell."],
    approach: "When you see a '1', increment and sink the whole island.",
    starterCode: `def numIslands(grid):
    pass
`,
    solutionCode: `def numIslands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    def dfs(i, j):
        if i < 0 or j < 0 or i >= rows or j >= cols or grid[i][j] != "1":
            return
        grid[i][j] = "0"
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    count = 0
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == "1":
                count += 1
                dfs(i, j)
    return count
`,
    tests: [
      {
        label: "One island",
        call: 'numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])',
        expected: "1",
      },
      {
        label: "Three islands",
        call: 'numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])',
        expected: "3",
      },
      { label: "All water", call: 'numIslands([["0","0"],["0","0"]])', expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 13,
    slug: "longest-increasing-subseq",
    title: "Longest Increasing Subsequence",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given an integer array \`nums\`, return the length of the longest strictly increasing subsequence.`,
    examples: [
      { input: "nums = [10,9,2,5,3,7,101,18]", output: "4" },
      { input: "nums = [0,1,0,3,2,3]", output: "4" },
    ],
    constraints: ["1 <= nums.length <= 2500"],
    hints: ["dp[i] = LIS ending at i."],
    approach: "For each i, take max dp[j]+1 over j < i with nums[j] < nums[i].",
    starterCode: `def lengthOfLIS(nums):
    pass
`,
    solutionCode: `def lengthOfLIS(nums):
    dp = [1] * len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)
`,
    tests: [
      { label: "Example", call: "lengthOfLIS([10,9,2,5,3,7,101,18])", expected: "4" },
      { label: "Standard", call: "lengthOfLIS([0,1,0,3,2,3])", expected: "4" },
      { label: "Decreasing", call: "lengthOfLIS([7,6,5])", expected: "1" },
    ],
  }),

  buildPapcProblem({
    order: 14,
    slug: "coin-change",
    title: "Coin Change",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given coin denominations and an amount, return the fewest coins needed to make that amount, or -1 if impossible.`,
    examples: [
      { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "5+5+1" },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: ["1 <= coins.length <= 12", "0 <= amount <= 10^4"],
    hints: ["dp[x] = min coins for amount x."],
    approach: "Unbounded knapsack: dp[a] = min(dp[a - coin] + 1).",
    starterCode: `def coinChange(coins, amount):
    pass
`,
    solutionCode: `def coinChange(coins, amount):
    dp = [0] + [float("inf")] * amount
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return dp[amount] if dp[amount] != float("inf") else -1
`,
    tests: [
      { label: "Eleven", call: "coinChange([1,2,5], 11)", expected: "3" },
      { label: "Impossible", call: "coinChange([2], 3)", expected: "-1" },
      { label: "Zero", call: "coinChange([1], 0)", expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 15,
    slug: "edit-distance",
    title: "Edit Distance",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Return the minimum number of insert/delete/replace operations to convert \`word1\` into \`word2\`.`,
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: "3" },
      { input: 'word1 = "intention", word2 = "execution"', output: "5" },
    ],
    constraints: ["0 <= word1.length, word2.length <= 500"],
    hints: ["dp[i][j] for prefixes."],
    approach: "If chars match, take diagonal; else 1 + min(insert, delete, replace).",
    starterCode: `def minDistance(word1, word2):
    pass
`,
    solutionCode: `def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]
`,
    tests: [
      { label: "Horse", call: 'minDistance("horse", "ros")', expected: "3" },
      { label: "Intention", call: 'minDistance("intention", "execution")', expected: "5" },
      { label: "Empty", call: 'minDistance("", "a")', expected: "1" },
    ],
  }),

  buildPapcProblem({
    order: 16,
    slug: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Burst balloons in \`nums\`. Bursting i with remaining neighbors L and R scores nums[L]*nums[i]*nums[R]. Return the maximum coins.`,
    examples: [{ input: "nums = [3,1,5,8]", output: "167" }],
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
      { label: "Classic", call: "maxCoins([3,1,5,8])", expected: "167" },
      { label: "Single", call: "maxCoins([1])", expected: "1" },
      { label: "Two", call: "maxCoins([1,5])", expected: "10" },
    ],
  }),

  buildPapcProblem({
    order: 17,
    slug: "word-break-ii",
    title: "Word Break II",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Given \`s\` and \`wordDict\`, return all sentences formed by inserting spaces so every word is in the dictionary.`,
    examples: [
      {
        input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
        output: '["cats and dog","cat sand dog"]',
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
        label: "Two sentences",
        code: `_got = sorted(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]))
assert _got == ["cat sand dog", "cats and dog"], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Impossible",
        code: `assert wordBreak("catsandog", ["cat","cats","and","sand","dog"]) == []`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `assert wordBreak("a", ["a"]) == ["a"]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 18,
    slug: "level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "medium",
    category: "trees",
    description: `Given the root of a binary tree, return the level-order traversal of node values.`,
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }],
    constraints: ["0 <= nodes <= 2000"],
    hints: ["BFS one level at a time."],
    approach: "Queue; snapshot queue length for each level.",
    starterCode: `${TREE_NODE_STARTER}def levelOrder(root):
    pass
`,
    solutionCode: `from collections import deque

def levelOrder(root):
    if not root:
        return []
    out = []
    q = deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        out.append(level)
    return out
`,
    tests: [
      {
        kind: "custom",
        label: "Example",
        code: `${TREE_HELPERS}
root = _tree_from_vals([3,9,20,None,None,15,7])
assert levelOrder(root) == [[3],[9,20],[15,7]]`,
      },
      { kind: "custom", label: "Empty", code: "assert levelOrder(None) == []" },
      {
        kind: "custom",
        label: "Single",
        code: `${TREE_HELPERS}
assert levelOrder(_tree_from_vals([1])) == [[1]]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 19,
    slug: "lca-binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "medium",
    category: "trees",
    description: `Find the lowest common ancestor of nodes p and q in a binary tree. A node can be a descendant of itself.`,
    examples: [{ input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3" }],
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
root = _tree_from_vals([3,5,1,6,2,0,8,None,None,7,4])
p, q = _find_node(root, 5), _find_node(root, 1)
assert lowestCommonAncestor(root, p, q).val == 3`,
      },
      {
        kind: "custom",
        label: "Ancestor is p",
        code: `${TREE_HELPERS}
root = _tree_from_vals([3,5,1,6,2,0,8,None,None,7,4])
p, q = _find_node(root, 5), _find_node(root, 4)
assert lowestCommonAncestor(root, p, q).val == 5`,
      },
      {
        kind: "custom",
        label: "Two nodes",
        code: `${TREE_HELPERS}
root = _tree_from_vals([1,2])
p, q = _find_node(root, 1), _find_node(root, 2)
assert lowestCommonAncestor(root, p, q).val == 1`,
      },
    ],
  }),

  buildPapcProblem({
    order: 20,
    slug: "serialize-deserialize",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "hard",
    category: "trees",
    description: `Design \`Codec.serialize\` / \`deserialize\` to convert a binary tree to a string and back.`,
    examples: [{ input: "root = [1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" }],
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
        label: "Roundtrip",
        code: `${TREE_HELPERS}
c = Codec()
root = _tree_from_vals([1,2,3,None,None,4,5])
assert _vals_from_tree(c.deserialize(c.serialize(root))) == [1,2,3,None,None,4,5]`,
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
        label: "Left chain",
        code: `${TREE_HELPERS}
c = Codec()
root = _tree_from_vals([1,2,None,3])
assert _vals_from_tree(c.deserialize(c.serialize(root))) == [1,2,None,3]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 21,
    slug: "max-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Find a contiguous subarray with the largest product and return that product.`,
    examples: [
      { input: "nums = [2,3,-2,4]", output: "6" },
      { input: "nums = [-2]", output: "-2" },
      { input: "nums = [0,2]", output: "2" },
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
      { label: "Classic", call: "maxProduct([2,3,-2,4])", expected: "6" },
      { label: "Single negative", call: "maxProduct([-2])", expected: "-2" },
      { label: "Zero", call: "maxProduct([0,2])", expected: "2" },
    ],
  }),

  buildPapcProblem({
    order: 22,
    slug: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "medium",
    category: "bit-manipulation",
    description: `Reverse the digits of a 32-bit signed integer. Return 0 if the result overflows \`[-2^31, 2^31 - 1]\`.`,
    examples: [
      { input: "x = 123", output: "321" },
      { input: "x = -123", output: "-321" },
      { input: "x = 120", output: "21" },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    hints: ["Pop digits; check overflow before pushing."],
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
      { label: "Positive", call: "reverse(123)", expected: "321" },
      { label: "Negative", call: "reverse(-123)", expected: "-321" },
      { label: "Trailing zero", call: "reverse(120)", expected: "21" },
    ],
  }),

  buildPapcProblem({
    order: 23,
    slug: "integer-to-roman",
    title: "Integer to Roman",
    difficulty: "medium",
    category: "strings",
    description: `Convert an integer in 1..3999 to a Roman numeral.`,
    examples: [
      { input: "num = 3", output: '"III"' },
      { input: "num = 58", output: '"LVIII"' },
      { input: "num = 1994", output: '"MCMXCIV"' },
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
      { label: "3", call: "intToRoman(3)", expected: '"III"' },
      { label: "58", call: "intToRoman(58)", expected: '"LVIII"' },
      { label: "1994", call: "intToRoman(1994)", expected: '"MCMXCIV"' },
    ],
  }),

  buildPapcProblem({
    order: 24,
    slug: "palindrome-partitioning",
    title: "Palindrome Partitioning",
    difficulty: "medium",
    category: "backtracking",
    description: `Partition string \`s\` so every substring is a palindrome. Return all partitions.`,
    examples: [{ input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]' }],
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
        label: "aab",
        code: `_got = sorted(partition("aab"))
assert _got == [["a","a","b"],["aa","b"]], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `assert partition("a") == [["a"]]`,
      },
      {
        kind: "custom",
        label: "aba",
        code: `_got = sorted(partition("aba"))
assert ["aba"] in _got and ["a","b","a"] in _got`,
      },
    ],
  }),

  buildPapcProblem({
    order: 25,
    slug: "combination-sum",
    title: "Combination Sum",
    difficulty: "medium",
    category: "backtracking",
    description: `Given distinct \`candidates\` and a \`target\`, return all unique combinations that sum to target. Numbers may be reused.`,
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
      { input: "candidates = [2], target = 1", output: "[]" },
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
        label: "Seven",
        code: `_got = sorted(sorted(c) for c in combinationSum([2,3,6,7], 7))
assert _got == [[2,2,3],[7]], f"got {_got!r}"`,
      },
      { kind: "custom", label: "Impossible", code: "assert combinationSum([2], 1) == []" },
      {
        kind: "custom",
        label: "Ones",
        code: `assert combinationSum([1], 2) == [[1,1]]`,
      },
    ],
  }),
];
