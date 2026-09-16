import {
  GRAPH_NODE_STARTER,
  LIST_HELPERS,
  LIST_NODE_STARTER,
  TREE_HELPERS,
  TREE_NODE_STARTER,
} from "@/data/python-practice/helpers";
import { buildPapcProblem } from "./helpers";

export const papcExtraProblems = [
  buildPapcProblem({
    order: 12,
    slug: "word-break-ii",
    title: "Word Break II",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Given a string \`s\` and a dictionary \`wordDict\`, add spaces to s to construct sentences where every word is in wordDict. Return all such sentences in any order.`,
    examples: [
      {
        input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
        output: '["cats and dog", "cat sand dog"]',
      },
    ],
    constraints: ["1 <= len(s) <= 20"],
    hints: ["Backtrack from index 0; memoize remaining suffixes."],
    approach: `DFS + memo: from each start index, try every dictionary word that matches the prefix.`,
    starterCode: `def wordBreak(s, wordDict):
    # Write your code here
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
        sentences = []
        for j in range(i + 1, len(s) + 1):
            word = s[i:j]
            if word in words:
                for tail in dfs(j):
                    sentences.append(word if not tail else word + " " + tail)
        memo[i] = sentences
        return sentences
    return dfs(0)
`,
    tests: [
      {
        kind: "custom",
        label: "Two sentences",
        code: `got = sorted(wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]))
assert got == ["pine apple pen apple","pine applepen apple","pineapple pen apple"]`,
      },
      { label: "Impossible", call: 'wordBreak("a", ["b"])', expected: "[]" },
      { label: "Single", call: 'wordBreak("go", ["go"])', expected: '["go"]' },
    ],
  }),

  buildPapcProblem({
    order: 17,
    slug: "reverse-linked-list-ii",
    title: "Reverse Linked List II",
    difficulty: "medium",
    category: "linked-lists",
    description: `Given the head of a singly linked list and two integers left and right (1-indexed), reverse the nodes from position left to right and return the head.`,
    examples: [{ input: "head = [1,2,3,4,5], left = 2, right = 4", output: "[1,4,3,2,5]" }],
    constraints: ["1 <= left <= right <= n"],
    hints: ["Dummy node; reverse the sublist in place."],
    approach: `Walk to left-1, then reverse the next (right-left+1) nodes.`,
    starterCode: `${LIST_NODE_STARTER}def reverseBetween(head, left, right):
    # Write your code here
    pass
`,
    solutionCode: `def reverseBetween(head, left, right):
    dummy = ListNode(0, head)
    prev = dummy
    for _ in range(left - 1):
        prev = prev.next
    cur = prev.next
    for _ in range(right - left):
        nxt = cur.next
        cur.next = nxt.next
        nxt.next = prev.next
        prev.next = nxt
    return dummy.next
`,
    tests: [
      {
        kind: "custom",
        label: "Middle reverse",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2, 3, 4, 5])
assert _vals_from_list(reverseBetween(head, 2, 4)) == [1, 4, 3, 2, 5]`,
      },
      {
        kind: "custom",
        label: "Whole list",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2, 3])
assert _vals_from_list(reverseBetween(head, 1, 3)) == [3, 2, 1]`,
      },
      {
        kind: "custom",
        label: "Single node range",
        code: `${LIST_HELPERS}
head = _list_from_vals([5])
assert _vals_from_list(reverseBetween(head, 1, 1)) == [5]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 18,
    slug: "remove-duplicates-sorted-array-ii",
    title: "Remove Duplicates from Sorted Array II",
    difficulty: "medium",
    category: "arrays",
    description: `Given a sorted array nums, remove duplicates in-place so each unique element appears at most twice. Return the new length k. The first k elements must hold the result.`,
    examples: [{ input: "nums = [1,1,1,2,2,3]", output: "k = 5, nums[:k] = [1,1,2,2,3]" }],
    constraints: ["1 <= len(nums) <= 3 * 10^4", "nums is sorted"],
    hints: ["Two pointers; keep a value if count of it written so far is < 2."],
    approach: `Write index starts at 0. Append nums[i] if write < 2 or nums[i] != nums[write-2].`,
    starterCode: `def removeDuplicates(nums):
    # Write your code here
    pass
`,
    solutionCode: `def removeDuplicates(nums):
    write = 0
    for num in nums:
        if write < 2 or num != nums[write - 2]:
            nums[write] = num
            write += 1
    return write
`,
    tests: [
      {
        kind: "custom",
        label: "Triples",
        code: `nums = [1,1,1,2,2,3]
k = removeDuplicates(nums)
assert k == 5 and nums[:k] == [1,1,2,2,3]`,
      },
      {
        kind: "custom",
        label: "All same",
        code: `nums = [1,1,1,1]
k = removeDuplicates(nums)
assert k == 2 and nums[:k] == [1,1]`,
      },
      {
        kind: "custom",
        label: "No extras",
        code: `nums = [0,0,1,1,2]
k = removeDuplicates(nums)
assert k == 5 and nums[:k] == [0,0,1,1,2]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 23,
    slug: "decode-ways",
    title: "Decode Ways",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `A message containing letters A–Z is encoded by mapping A=1 … Z=26. Given a string of digits, return the number of ways to decode it. Leading zeros are invalid.`,
    examples: [
      { input: 's = "12"', output: "2", explanation: "AB or L" },
      { input: 's = "226"', output: "3" },
    ],
    constraints: ["1 <= len(s) <= 100", "s contains only digits"],
    hints: ["dp[i] = ways to decode s[:i]. Check 1-digit and 2-digit codes."],
    approach: `Linear DP. A '0' cannot start a code. Two-digit codes 10–26 add dp[i-2].`,
    starterCode: `def numDecodings(s):
    # Write your code here
    pass
`,
    solutionCode: `def numDecodings(s):
    if not s or s[0] == "0":
        return 0
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1
    for i in range(2, n + 1):
        if s[i - 1] != "0":
            dp[i] += dp[i - 1]
        two = int(s[i - 2:i])
        if 10 <= two <= 26:
            dp[i] += dp[i - 2]
    return dp[n]
`,
    tests: [
      { label: "Two ways", call: 'numDecodings("10")', expected: "1" },
      { label: "Three ways", call: 'numDecodings("27")', expected: "1" },
      { label: "Leading zero", call: 'numDecodings("06")', expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 24,
    slug: "palindrome-partitioning",
    title: "Palindrome Partitioning",
    difficulty: "medium",
    category: "backtracking",
    description: `Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitions.`,
    examples: [{ input: 's = "aab"', output: '[["a","a","b"],["aa","b"]]' }],
    constraints: ["1 <= len(s) <= 16"],
    hints: ["Backtrack; at each start, try every palindromic prefix."],
    approach: `DFS from index i. If s[i:j+1] is palindrome, recurse from j+1.`,
    starterCode: `def partition(s):
    # Write your code here
    pass
`,
    solutionCode: `def partition(s):
    result = []
    path = []
    def is_pal(a, b):
        return s[a:b+1] == s[a:b+1][::-1]
    def dfs(i):
        if i == len(s):
            result.append(path[:])
            return
        for j in range(i, len(s)):
            if is_pal(i, j):
                path.append(s[i:j+1])
                dfs(j + 1)
                path.pop()
    dfs(0)
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "aaba",
        code: `got = [tuple(p) for p in partition("aaba")]
assert set(got) == {("a","a","b","a"), ("a","aba"), ("aa","b","a")}`,
      },
      { label: "Single", call: 'partition("a")', expected: '[["a"]]' },
      {
        kind: "custom",
        label: "aba",
        code: `got = [tuple(p) for p in partition("aba")]
assert ("a","b","a") in got and ("aba",) in got`,
      },
    ],
  }),

  buildPapcProblem({
    order: 26,
    slug: "gas-station",
    title: "Gas Station",
    difficulty: "medium",
    category: "greedy",
    description: `There are n gas stations on a circular route. gas[i] is the amount of gas at station i, cost[i] is the cost to travel to the next. Return the starting station index if you can complete the circuit, else -1. The solution is unique if it exists.`,
    examples: [
      { input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", output: "3" },
    ],
    constraints: ["n == len(gas) == len(cost)"],
    hints: ["If total gas < total cost, impossible. Otherwise greedy start reset."],
    approach: `Track tank. When tank goes negative, set start to i+1 and reset tank.`,
    starterCode: `def canCompleteCircuit(gas, cost):
    # Write your code here
    pass
`,
    solutionCode: `def canCompleteCircuit(gas, cost):
    if sum(gas) < sum(cost):
        return -1
    tank = start = 0
    for i, (g, c) in enumerate(zip(gas, cost)):
        tank += g - c
        if tank < 0:
            start = i + 1
            tank = 0
    return start
`,
    tests: [
      { label: "Example", call: "canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])", expected: "3" },
      { label: "Impossible", call: "canCompleteCircuit([2,3,4], [3,4,3])", expected: "-1" },
      { label: "Single", call: "canCompleteCircuit([5], [4])", expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 27,
    slug: "candy",
    title: "Candy Distribution",
    difficulty: "hard",
    category: "greedy",
    description: `There are n children with ratings. Give each at least one candy. Children with a strictly higher rating than a neighbor get more candies than that neighbor. Return the minimum candies.`,
    examples: [{ input: "ratings = [1,0,2]", output: "5" }],
    constraints: ["n == len(ratings)", "1 <= n <= 2 * 10^4"],
    hints: ["Two passes: left-to-right then right-to-left, take max."],
    approach: `Ensure increasing slopes in both directions, then sum.`,
    starterCode: `def candy(ratings):
    # Write your code here
    pass
`,
    solutionCode: `def candy(ratings):
    n = len(ratings)
    candies = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            candies[i] = candies[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            candies[i] = max(candies[i], candies[i + 1] + 1)
    return sum(candies)
`,
    tests: [
      { label: "Valley", call: "candy([1, 0, 2])", expected: "5" },
      { label: "Increasing", call: "candy([1, 2, 2])", expected: "4" },
      { label: "Single", call: "candy([1])", expected: "1" },
    ],
  }),

  buildPapcProblem({
    order: 28,
    slug: "trapping-rain-water-ii",
    title: "Trapping Rain Water II",
    difficulty: "hard",
    category: "heap",
    description: `Given an m x n height map, compute how much water it can trap after raining (3D trapping). Water cannot flow over the lowest boundary of a cell's connected exterior.`,
    examples: [
      {
        input: "heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]",
        output: "4",
      },
    ],
    constraints: ["1 <= m, n <= 50"],
    hints: ["Min-heap BFS from the border inward; trap water against current water level."],
    approach: `Push all border cells into a min-heap. Pop lowest, visit neighbors, trap max(0, level - height), push with updated level.`,
    starterCode: `def trapRainWater(heightMap):
    # Write your code here
    pass
`,
    solutionCode: `import heapq

def trapRainWater(heightMap):
    if not heightMap or not heightMap[0]:
        return 0
    rows, cols = len(heightMap), len(heightMap[0])
    visited = [[False] * cols for _ in range(rows)]
    heap = []
    for r in range(rows):
        for c in range(cols):
            if r in (0, rows - 1) or c in (0, cols - 1):
                heapq.heappush(heap, (heightMap[r][c], r, c))
                visited[r][c] = True
    water = 0
    dirs = ((1, 0), (-1, 0), (0, 1), (0, -1))
    while heap:
        h, r, c = heapq.heappop(heap)
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and not visited[nr][nc]:
                visited[nr][nc] = True
                water += max(0, h - heightMap[nr][nc])
                heapq.heappush(heap, (max(h, heightMap[nr][nc]), nr, nc))
    return water
`,
    tests: [
      {
        label: "Example",
        call: "trapRainWater([[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]])",
        expected: "4",
      },
      { label: "Flat", call: "trapRainWater([[2,2],[2,2]])", expected: "0" },
      {
        label: "Bowl",
        call: "trapRainWater([[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]])",
        expected: "14",
      },
    ],
  }),

  buildPapcProblem({
    order: 29,
    slug: "minimum-height-trees",
    title: "Minimum Height Trees",
    difficulty: "medium",
    category: "graphs",
    description: `A tree of n nodes labeled 0..n-1 is given as undirected edges. Find all roots that minimize tree height. Return their labels (1 or 2 nodes).`,
    examples: [{ input: "n = 4, edges = [[1,0],[1,2],[1,3]]", output: "[1]" }],
    constraints: ["1 <= n <= 2 * 10^4"],
    hints: ["Peel leaves layer by layer until 1–2 nodes remain."],
    approach: `Topological trim: repeatedly remove degree-1 nodes.`,
    starterCode: `def findMinHeightTrees(n, edges):
    # Write your code here
    pass
`,
    solutionCode: `from collections import defaultdict, deque

def findMinHeightTrees(n, edges):
    if n <= 2:
        return list(range(n))
    graph = defaultdict(set)
    for a, b in edges:
        graph[a].add(b)
        graph[b].add(a)
    leaves = deque([i for i in range(n) if len(graph[i]) == 1])
    remaining = n
    while remaining > 2:
        count = len(leaves)
        remaining -= count
        for _ in range(count):
            leaf = leaves.popleft()
            neighbor = graph[leaf].pop()
            graph[neighbor].remove(leaf)
            if len(graph[neighbor]) == 1:
                leaves.append(neighbor)
    return list(leaves)
`,
    tests: [
      {
        kind: "custom",
        label: "Star",
        code: `assert sorted(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])) == [1]`,
      },
      {
        kind: "custom",
        label: "Line",
        code: `assert sorted(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])) == [3, 4]`,
      },
      { label: "Single", call: "findMinHeightTrees(1, [])", expected: "[0]" },
    ],
  }),

  buildPapcProblem({
    order: 30,
    slug: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "hard",
    category: "graphs",
    description: `Given a list of words sorted in an alien language's lexicographic order, return the smallest unique letter order of that language. If invalid, return "". If multiple valid orders exist, return the smallest in normal lexicographic order of the letters.`,
    examples: [{ input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"' }],
    constraints: ["1 <= len(words) <= 100"],
    hints: ["Compare adjacent words to build a graph of letter precedence, then topological sort."],
    approach: `Edges from earlier letter to later letter. Kahn's algorithm with a min-heap for stable smallest order.`,
    starterCode: `def alienOrder(words):
    # Write your code here
    pass
`,
    solutionCode: `from collections import defaultdict, deque

def alienOrder(words):
    graph = defaultdict(set)
    indeg = {ch: 0 for word in words for ch in word}
    for w1, w2 in zip(words, words[1:]):
        if w1.startswith(w2) and len(w1) > len(w2):
            return ""
        for a, b in zip(w1, w2):
            if a != b:
                if b not in graph[a]:
                    graph[a].add(b)
                    indeg[b] += 1
                break
    heap = [ch for ch, d in indeg.items() if d == 0]
    heap.sort()
    q = deque(heap)
    order = []
    while q:
        ch = q.popleft()
        order.append(ch)
        nxt = []
        for nei in graph[ch]:
            indeg[nei] -= 1
            if indeg[nei] == 0:
                nxt.append(nei)
        nxt.sort()
        q.extend(nxt)
    return "".join(order) if len(order) == len(indeg) else ""
`,
    tests: [
      { label: "Classic", call: 'alienOrder(["abc","abd"])', expected: '"abcd"' },
      { label: "Invalid prefix", call: 'alienOrder(["abc","ab"])', expected: '""' },
      { label: "Two letters", call: 'alienOrder(["z","z"])', expected: '"z"' },
    ],
  }),

  buildPapcProblem({
    order: 31,
    slug: "best-time-buy-sell-stock-iii",
    title: "Best Time to Buy and Sell Stock III",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `You may complete at most two transactions. Return the maximum profit. You cannot hold more than one share at a time.`,
    examples: [{ input: "prices = [3,3,5,0,0,3,1,4]", output: "6" }],
    constraints: ["1 <= len(prices) <= 10^5"],
    hints: ["Four states: buy1, sell1, buy2, sell2."],
    approach: `Track max profit after first buy/sell and second buy/sell in one pass.`,
    starterCode: `def maxProfit(prices):
    # Write your code here
    pass
`,
    solutionCode: `def maxProfit(prices):
    buy1 = buy2 = float("inf")
    profit1 = profit2 = 0
    for price in prices:
        buy1 = min(buy1, price)
        profit1 = max(profit1, price - buy1)
        buy2 = min(buy2, price - profit1)
        profit2 = max(profit2, price - buy2)
    return profit2
`,
    tests: [
      { label: "Two trades", call: "maxProfit([3,3,5,0,0,3,1,4])", expected: "6" },
      { label: "Increasing", call: "maxProfit([1,2,3,4,5])", expected: "4" },
      { label: "Decreasing", call: "maxProfit([7,6,4,3,1])", expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 32,
    slug: "best-time-buy-sell-stock-iv",
    title: "Best Time to Buy and Sell Stock IV",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `You may complete at most k transactions. Return the maximum profit.`,
    examples: [{ input: "k = 2, prices = [2,4,1]", output: "2" }],
    constraints: ["0 <= k <= 100", "0 <= len(prices) <= 1000"],
    hints: ["DP over transaction count. If k is large, treat as unlimited trades."],
    approach: `dp[t][i] max profit with t transactions using prices[:i+1]. Optimize with running max of dp[t-1][j]-prices[j].`,
    starterCode: `def maxProfit(k, prices):
    # Write your code here
    pass
`,
    solutionCode: `def maxProfit(k, prices):
    n = len(prices)
    if n < 2 or k == 0:
        return 0
    if k >= n // 2:
        return sum(max(0, prices[i] - prices[i - 1]) for i in range(1, n))
    dp = [[0] * n for _ in range(k + 1)]
    for t in range(1, k + 1):
        max_diff = -prices[0]
        for i in range(1, n):
            dp[t][i] = max(dp[t][i - 1], prices[i] + max_diff)
            max_diff = max(max_diff, dp[t - 1][i] - prices[i])
    return dp[k][-1]
`,
    tests: [
      { label: "k=2 short", call: "maxProfit(2, [2,4,1])", expected: "2" },
      { label: "k=2 classic", call: "maxProfit(2, [3,2,6,5,0,3])", expected: "7" },
      { label: "k=0", call: "maxProfit(0, [1,2,3])", expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 33,
    slug: "maximal-rectangle",
    title: "Largest Rectangle in Histogram (Dynamic)",
    difficulty: "hard",
    category: "stack-queue",
    description: `Given a rows x cols binary matrix filled with '0' and '1', find the largest rectangle containing only '1's and return its area.

This is the 2D (dynamic) version of largest rectangle in histogram: treat each row as histogram heights of consecutive ones.`,
    examples: [
      {
        input: `matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]`,
        output: "6",
      },
    ],
    constraints: ["1 <= rows, cols <= 200"],
    hints: ["For each row, heights[c] += 1 if '1' else 0. Then histogram largest rectangle."],
    approach: `Reduce each prefix of rows to a histogram and reuse the monotonic-stack area algorithm.`,
    starterCode: `def maximalRectangle(matrix):
    # Write your code here
    pass
`,
    solutionCode: `def maximalRectangle(matrix):
    if not matrix:
        return 0
    cols = len(matrix[0])
    heights = [0] * cols
    def largest(h):
        stack = []
        max_area = 0
        vals = h + [0]
        for i, height in enumerate(vals):
            while stack and vals[stack[-1]] > height:
                top = stack.pop()
                width = i if not stack else i - stack[-1] - 1
                max_area = max(max_area, vals[top] * width)
            stack.append(i)
        return max_area
    best = 0
    for row in matrix:
        for c, val in enumerate(row):
            heights[c] = heights[c] + 1 if val == "1" else 0
        best = max(best, largest(heights))
    return best
`,
    tests: [
      {
        label: "Example",
        call: 'maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])',
        expected: "6",
      },
      { label: "Single one", call: 'maximalRectangle([["1"]])', expected: "1" },
      { label: "Zeros", call: 'maximalRectangle([["0"]])', expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 35,
    slug: "evaluate-division",
    title: "Evaluate Division",
    difficulty: "medium",
    category: "graphs",
    description: `You are given equations as pairs and values: Ai / Bi = values[i]. For each query [Cj, Dj], return Cj / Dj, or -1.0 if it cannot be determined.`,
    examples: [
      {
        input: 'equations = [["a","b"],["b","c"]], values = [2.0, 3.0], queries = [["a","c"],["b","a"],["a","e"]]',
        output: "[6.0, 0.5, -1.0]",
      },
    ],
    constraints: ["1 <= len(equations) <= 20"],
    hints: ["Weighted graph; DFS or BFS the product of edge weights."],
    approach: `Build bidirectional graph with weights v and 1/v. For each query, search a path product.`,
    starterCode: `def calcEquation(equations, values, queries):
    # Write your code here
    pass
`,
    solutionCode: `from collections import defaultdict

def calcEquation(equations, values, queries):
    graph = defaultdict(list)
    for (a, b), v in zip(equations, values):
        graph[a].append((b, v))
        graph[b].append((a, 1 / v))
    def dfs(src, dst, seen):
        if src not in graph or dst not in graph:
            return -1.0
        if src == dst:
            return 1.0
        seen.add(src)
        for nei, w in graph[src]:
            if nei in seen:
                continue
            sub = dfs(nei, dst, seen)
            if sub != -1.0:
                return w * sub
        return -1.0
    return [dfs(c, d, set()) for c, d in queries]
`,
    tests: [
      {
        kind: "custom",
        label: "Classic",
        code: `got = calcEquation([["a","b"],["b","c"]], [2.0, 3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]])
assert [round(x, 5) for x in got] == [6.0, 0.5, -1.0, 1.0, -1.0]`,
      },
      {
        kind: "custom",
        label: "Self missing",
        code: `got = calcEquation([["a","b"]], [0.5], [["a","b"],["b","a"]])
assert [round(x, 5) for x in got] == [0.5, 2.0]`,
      },
      {
        kind: "custom",
        label: "Unknown",
        code: `got = calcEquation([["x","y"]], [3.0], [["a","b"]])
assert got == [-1.0]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 36,
    slug: "path-sum-iii",
    title: "Path Sum III",
    difficulty: "medium",
    category: "trees",
    description: `Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of values equals targetSum. Paths do not need to start or end at root/leaf but must go downward.`,
    examples: [{ input: "root = [10,5,-3,3,2,None,11,3,-2,None,1], targetSum = 8", output: "3" }],
    constraints: ["Number of nodes in [0, 1000]"],
    hints: ["Prefix sums + DFS; count how many prefixes equal current - target."],
    approach: `DFS with a hashmap of prefix counts. At each node, add paths ending here, then recurse.`,
    starterCode: `${TREE_NODE_STARTER}def pathSum(root, targetSum):
    # Write your code here
    pass
`,
    solutionCode: `from collections import defaultdict

def pathSum(root, targetSum):
    counts = defaultdict(int)
    counts[0] = 1
    def dfs(node, running):
        if not node:
            return 0
        running += node.val
        total = counts[running - targetSum]
        counts[running] += 1
        total += dfs(node.left, running) + dfs(node.right, running)
        counts[running] -= 1
        return total
    return dfs(root, 0)
`,
    tests: [
      {
        kind: "custom",
        label: "Example",
        code: `${TREE_HELPERS}
root = _tree_from_vals([10,5,-3,3,2,None,11,3,-2,None,1])
assert pathSum(root, 8) == 3`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `assert pathSum(None, 1) == 0`,
      },
      {
        kind: "custom",
        label: "Single match",
        code: `${TREE_HELPERS}
root = _tree_from_vals([1])
assert pathSum(root, 1) == 1`,
      },
    ],
  }),

  buildPapcProblem({
    order: 37,
    slug: "reconstruct-itinerary",
    title: "Reconstruct Itinerary",
    difficulty: "hard",
    category: "graphs",
    description: `You are given airline tickets as [from, to] pairs. Reconstruct the itinerary starting at JFK that uses every ticket exactly once. If multiple exist, return the lexicographically smallest.`,
    examples: [
      {
        input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
        output: '["JFK","MUC","LHR","SFO","SJC"]',
      },
    ],
    constraints: ["1 <= len(tickets) <= 300"],
    hints: ["Hierholzer's algorithm: DFS, always take the smallest unused edge."],
    approach: `Multiset of destinations per airport (min-heap). Post-order append, then reverse.`,
    starterCode: `def findItinerary(tickets):
    # Write your code here
    pass
`,
    solutionCode: `from collections import defaultdict
import heapq

def findItinerary(tickets):
    graph = defaultdict(list)
    for src, dst in tickets:
        heapq.heappush(graph[src], dst)
    route = []
    def dfs(airport):
        heap = graph[airport]
        while heap:
            dfs(heapq.heappop(heap))
        route.append(airport)
    dfs("JFK")
    return route[::-1]
`,
    tests: [
      {
        label: "Linear",
        call: 'findItinerary([["JFK","AAA"],["AAA","JFK"],["JFK","BBB"]])',
        expected: '["JFK","AAA","JFK","BBB"]',
      },
      {
        label: "Lex smaller",
        call: 'findItinerary([["JFK","A"],["JFK","B"],["B","JFK"]])',
        expected: '["JFK","B","JFK","A"]',
      },
      {
        label: "Two tickets",
        call: 'findItinerary([["JFK","AAA"],["AAA","JFK"]])',
        expected: '["JFK","AAA","JFK"]',
      },
    ],
  }),

  buildPapcProblem({
    order: 38,
    slug: "accounts-merge",
    title: "Accounts Merge",
    difficulty: "medium",
    category: "graphs",
    description: `Each account is [name, email1, email2, ...]. Merge accounts that share an email. Return merged accounts with emails sorted. Names stay with their emails.`,
    examples: [
      {
        input: 'accounts = [["John","a@x","b@x"],["John","b@x","c@x"],["Mary","d@x"]]',
        output: '[["John","a@x","b@x","c@x"],["Mary","d@x"]]',
      },
    ],
    constraints: ["1 <= len(accounts) <= 1000"],
    hints: ["Union-Find emails that appear in the same account."],
    approach: `Union emails in an account, then group by parent and attach the name.`,
    starterCode: `def accountsMerge(accounts):
    # Write your code here
    pass
`,
    solutionCode: `from collections import defaultdict

def accountsMerge(accounts):
    parent = {}
    email_name = {}
    def find(x):
        parent.setdefault(x, x)
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    def union(a, b):
        parent[find(a)] = find(b)
    for account in accounts:
        name = account[0]
        first = account[1]
        for email in account[1:]:
            email_name[email] = name
            union(first, email)
    groups = defaultdict(list)
    for email in email_name:
        groups[find(email)].append(email)
    result = []
    for emails in groups.values():
        result.append([email_name[emails[0]]] + sorted(emails))
    result.sort(key=lambda row: (row[0], row[1]))
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Merge John",
        code: `got = accountsMerge([["John","a@x","b@x"],["John","b@x","c@x"],["Mary","d@x"]])
got = [ [row[0]] + sorted(row[1:]) for row in got ]
got.sort()
assert got == [["John","a@x","b@x","c@x"],["Mary","d@x"]]`,
      },
      {
        kind: "custom",
        label: "No merge",
        code: `got = accountsMerge([["A","a@x"],["B","b@x"]])
assert len(got) == 2`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `got = accountsMerge([["A","z@x","a@x"]])
assert got[0][0] == "A" and got[0][1:] == ["a@x","z@x"]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 39,
    slug: "smallest-rectangle-enclosing-black-pixels",
    title: "Smallest Rectangle Enclosing Black Pixels",
    difficulty: "hard",
    category: "matrices",
    description: `An image is an m x n binary matrix of '0' (white) and '1' (black). One black pixel is at (x, y). Return the area of the smallest axis-aligned rectangle that encloses all black pixels.`,
    examples: [
      {
        input: `image = [["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], x = 0, y = 2`,
        output: "6",
      },
    ],
    constraints: ["1 <= m, n <= 100"],
    hints: ["Binary search rows/cols that contain a '1', or scan min/max bounds."],
    approach: `Find min/max row and col containing '1'. Area is (maxr-minr+1)*(maxc-minc+1).`,
    starterCode: `def minArea(image, x, y):
    # Write your code here
    pass
`,
    solutionCode: `def minArea(image, x, y):
    rows, cols = len(image), len(image[0])
    min_r = max_r = x
    min_c = max_c = y
    for r in range(rows):
        for c in range(cols):
            if image[r][c] == "1":
                min_r = min(min_r, r)
                max_r = max(max_r, r)
                min_c = min(min_c, c)
                max_c = max(max_c, c)
    return (max_r - min_r + 1) * (max_c - min_c + 1)
`,
    tests: [
      {
        label: "Example",
        call: 'minArea([["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], 0, 2)',
        expected: "6",
      },
      { label: "Single", call: 'minArea([["1"]], 0, 0)', expected: "1" },
      {
        label: "Row",
        call: 'minArea([["0","1","1","0"]], 0, 1)',
        expected: "2",
      },
    ],
  }),

  buildPapcProblem({
    order: 40,
    slug: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    difficulty: "medium",
    category: "intervals",
    description: `Given an array of meeting time intervals intervals[i] = [start, end], return the minimum number of conference rooms required.`,
    examples: [{ input: "intervals = [[0,30],[5,10],[15,20]]", output: "2" }],
    constraints: ["1 <= len(intervals) <= 10^4"],
    hints: ["Sort starts and ends, or use a min-heap of end times."],
    approach: `Sort by start. Heap of end times; if a room is free (end <= start), reuse it.`,
    starterCode: `def minMeetingRooms(intervals):
    # Write your code here
    pass
`,
    solutionCode: `import heapq

def minMeetingRooms(intervals):
    if not intervals:
        return 0
    intervals.sort()
    rooms = []
    for start, end in intervals:
        if rooms and rooms[0] <= start:
            heapq.heappop(rooms)
        heapq.heappush(rooms, end)
    return len(rooms)
`,
    tests: [
      { label: "Overlap", call: "minMeetingRooms([[1,5],[8,9],[8,9]])", expected: "2" },
      { label: "No overlap", call: "minMeetingRooms([[1,2],[2,3]])", expected: "1" },
      { label: "Three", call: "minMeetingRooms([[1,10],[2,3],[4,5]])", expected: "2" },
    ],
  }),

  buildPapcProblem({
    order: 41,
    slug: "insert-interval",
    title: "Insert Interval",
    difficulty: "medium",
    category: "intervals",
    description: `You are given a sorted, non-overlapping list of intervals and a new interval. Insert it and merge if needed. Return the new sorted list.`,
    examples: [{ input: "intervals = [[1,3],[6,9]], newInterval = [2,5]", output: "[[1,5],[6,9]]" }],
    constraints: ["0 <= len(intervals) <= 10^4"],
    hints: ["Add all intervals that end before new starts, merge overlaps, then append the rest."],
    approach: `Three-phase linear scan.`,
    starterCode: `def insert(intervals, newInterval):
    # Write your code here
    pass
`,
    solutionCode: `def insert(intervals, newInterval):
    result = []
    i = 0
    n = len(intervals)
    while i < n and intervals[i][1] < newInterval[0]:
        result.append(intervals[i])
        i += 1
    while i < n and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    result.append(newInterval)
    while i < n:
        result.append(intervals[i])
        i += 1
    return result
`,
    tests: [
      { label: "Merge", call: "insert([[1,3],[6,9]], [2,5])", expected: "[[1, 5], [6, 9]]" },
      {
        label: "Multiple",
        call: "insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])",
        expected: "[[1, 2], [3, 10], [12, 16]]",
      },
      { label: "Empty", call: "insert([], [5,7])", expected: "[[5, 7]]" },
    ],
  }),

  buildPapcProblem({
    order: 42,
    slug: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `You have n balloons with nums[i] painted on them. Bursting i earns nums[left] * nums[i] * nums[right] where left/right are adjacent remaining balloons (treat out-of-bounds as 1). Return the maximum coins.`,
    examples: [{ input: "nums = [3,1,5,8]", output: "167" }],
    constraints: ["n == len(nums)", "1 <= n <= 30"],
    hints: ["DP on open interval: last balloon burst in (i, j)."],
    approach: `Pad with 1s. dp[l][r] = max coins bursting balloons strictly between l and r.`,
    starterCode: `def maxCoins(nums):
    # Write your code here
    pass
`,
    solutionCode: `def maxCoins(nums):
    vals = [1] + nums + [1]
    n = len(vals)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for left in range(0, n - length):
            right = left + length
            for i in range(left + 1, right):
                coins = vals[left] * vals[i] * vals[right] + dp[left][i] + dp[i][right]
                if coins > dp[left][right]:
                    dp[left][right] = coins
    return dp[0][n - 1]
`,
    tests: [
      { label: "Example", call: "maxCoins([2,3,7])", expected: "63" },
      { label: "Single", call: "maxCoins([9])", expected: "9" },
      { label: "Two", call: "maxCoins([1,2])", expected: "4" },
    ],
  }),

  buildPapcProblem({
    order: 43,
    slug: "russian-doll-envelopes",
    title: "Russian Doll Envelopes",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `You are given envelopes[i] = [width, height]. One envelope can fit into another if both width and height are strictly greater. Return the maximum number of envelopes you can Russian-doll (LIS).`,
    examples: [{ input: "envelopes = [[5,4],[6,4],[6,7],[2,3]]", output: "3" }],
    constraints: ["1 <= len(envelopes) <= 500"],
    hints: ["Sort by width asc, height desc, then LIS on heights."],
    approach: `After sorting, patience-sorting LIS on heights.`,
    starterCode: `def maxEnvelopes(envelopes):
    # Write your code here
    pass
`,
    solutionCode: `import bisect

def maxEnvelopes(envelopes):
    envelopes.sort(key=lambda e: (e[0], -e[1]))
    tails = []
    for _, h in envelopes:
        i = bisect.bisect_left(tails, h)
        if i == len(tails):
            tails.append(h)
        else:
            tails[i] = h
    return len(tails)
`,
    tests: [
      { label: "Example", call: "maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])", expected: "3" },
      { label: "None nest", call: "maxEnvelopes([[1,1],[1,1],[1,1]])", expected: "1" },
      { label: "Chain", call: "maxEnvelopes([[1,1],[2,2],[3,3]])", expected: "3" },
    ],
  }),

  buildPapcProblem({
    order: 44,
    slug: "maximal-square",
    title: "Maximal Square",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given an m x n binary matrix filled with '0' and '1', find the largest square containing only '1's and return its area.`,
    examples: [
      {
        input: `matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]`,
        output: "4",
      },
    ],
    constraints: ["1 <= m, n <= 300"],
    hints: ["dp[r][c] = side length of square ending at (r,c)."],
    approach: `dp = 1 + min of left, up, diagonal when cell is '1'.`,
    starterCode: `def maximalSquare(matrix):
    # Write your code here
    pass
`,
    solutionCode: `def maximalSquare(matrix):
    if not matrix:
        return 0
    rows, cols = len(matrix), len(matrix[0])
    dp = [[0] * (cols + 1) for _ in range(rows + 1)]
    best = 0
    for r in range(1, rows + 1):
        for c in range(1, cols + 1):
            if matrix[r - 1][c - 1] == "1":
                dp[r][c] = 1 + min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1])
                best = max(best, dp[r][c])
    return best * best
`,
    tests: [
      {
        label: "Example",
        call: 'maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])',
        expected: "4",
      },
      { label: "Zero", call: 'maximalSquare([["0","1"],["1","0"]])', expected: "1" },
      { label: "Empty ones", call: 'maximalSquare([["0"]])', expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 45,
    slug: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given an m x n grid filled with non-negative numbers, find a path from top-left to bottom-right which minimizes the sum of numbers. You may only move down or right.`,
    examples: [{ input: "grid = [[1,3,1],[1,5,1],[4,2,1]]", output: "7" }],
    constraints: ["1 <= m, n <= 200"],
    hints: ["dp[r][c] = grid[r][c] + min(from left, from up)."],
    approach: `In-place or extra DP accumulating the cheaper incoming path.`,
    starterCode: `def minPathSum(grid):
    # Write your code here
    pass
`,
    solutionCode: `def minPathSum(grid):
    rows, cols = len(grid), len(grid[0])
    for r in range(rows):
        for c in range(cols):
            if r == 0 and c == 0:
                continue
            if r == 0:
                grid[r][c] += grid[r][c - 1]
            elif c == 0:
                grid[r][c] += grid[r - 1][c]
            else:
                grid[r][c] += min(grid[r - 1][c], grid[r][c - 1])
    return grid[-1][-1]
`,
    tests: [
      { label: "Example", call: "minPathSum([[1,3,1],[1,5,1],[4,2,1]])", expected: "7" },
      { label: "Two cols", call: "minPathSum([[1,2,3],[4,5,6]])", expected: "12" },
      { label: "Single", call: "minPathSum([[5]])", expected: "5" },
    ],
  }),

  buildPapcProblem({
    order: 46,
    slug: "unique-paths-ii",
    title: "Unique Paths II",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `A robot is on an m x n grid with obstacles marked 1. Start at top-left, goal bottom-right, move only right or down. Return the number of unique paths.`,
    examples: [{ input: "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]", output: "2" }],
    constraints: ["1 <= m, n <= 100"],
    hints: ["Same as unique paths; obstacle cells contribute 0."],
    approach: `DP; first cell is 1 unless blocked.`,
    starterCode: `def uniquePathsWithObstacles(obstacleGrid):
    # Write your code here
    pass
`,
    solutionCode: `def uniquePathsWithObstacles(obstacleGrid):
    if obstacleGrid[0][0] == 1:
        return 0
    rows, cols = len(obstacleGrid), len(obstacleGrid[0])
    dp = [[0] * cols for _ in range(rows)]
    dp[0][0] = 1
    for r in range(rows):
        for c in range(cols):
            if obstacleGrid[r][c] == 1:
                dp[r][c] = 0
                continue
            if r == 0 and c == 0:
                continue
            dp[r][c] = (dp[r - 1][c] if r else 0) + (dp[r][c - 1] if c else 0)
    return dp[-1][-1]
`,
    tests: [
      { label: "Example", call: "uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])", expected: "2" },
      { label: "Blocked start", call: "uniquePathsWithObstacles([[1]])", expected: "0" },
      { label: "Open", call: "uniquePathsWithObstacles([[0,0],[0,0]])", expected: "2" },
    ],
  }),

  buildPapcProblem({
    order: 48,
    slug: "integer-to-english-words",
    title: "Integer to English Words",
    difficulty: "hard",
    category: "strings",
    description: `Convert a non-negative integer num to its English words representation.`,
    examples: [
      { input: "num = 123", output: '"One Hundred Twenty Three"' },
      { input: "num = 1234567", output: '"One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"' },
    ],
    constraints: ["0 <= num <= 2^31 - 1"],
    hints: ["Handle groups of three digits: billion, million, thousand, rest."],
    approach: `Map 1–19 and tens. Recurse on three-digit chunks.`,
    starterCode: `def numberToWords(num):
    # Write your code here
    pass
`,
    solutionCode: `def numberToWords(num):
    if num == 0:
        return "Zero"
    below_20 = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
    tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]
    def three(n):
        if n == 0:
            return ""
        if n < 20:
            return below_20[n]
        if n < 100:
            return (tens[n // 10] + (" " + below_20[n % 10] if n % 10 else "")).strip()
        return (below_20[n // 100] + " Hundred" + (" " + three(n % 100) if n % 100 else "")).strip()
    parts = []
    scales = [(10**9, "Billion"), (10**6, "Million"), (10**3, "Thousand"), (1, "")]
    for scale, name in scales:
        chunk = num // scale
        if chunk:
            piece = three(chunk)
            parts.append((piece + (" " + name if name else "")).strip())
            num %= scale
    return " ".join(parts)
`,
    tests: [
      { label: "Hundreds", call: "numberToWords(123)", expected: '"One Hundred Twenty Three"' },
      { label: "Million", call: "numberToWords(1000000)", expected: '"One Million"' },
      { label: "Zero", call: "numberToWords(0)", expected: '"Zero"' },
    ],
  }),

  buildPapcProblem({
    order: 49,
    slug: "reorder-data-in-log-files",
    title: "Reorder Data in Log Files",
    difficulty: "medium",
    category: "strings",
    description: `You are given an array of logs. Each log is a space-delimited string: identifier, then words.

- Letter-logs: all words after the identifier consist of lowercase letters
- Digit-logs: all words after the identifier consist of digits

Reorder so letter-logs come first, sorted lexicographically by content then identifier. Digit-logs keep their relative order.`,
    examples: [
      {
        input: 'logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]',
        output: '["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]',
      },
    ],
    constraints: ["1 <= len(logs) <= 100"],
    hints: ["Stable sort: key letter logs by (content, id); digit logs after."],
    approach: `Partition then sort letter logs with a tuple key.`,
    starterCode: `def reorderLogFiles(logs):
    # Write your code here
    pass
`,
    solutionCode: `def reorderLogFiles(logs):
    letter = []
    digit = []
    for log in logs:
        ident, rest = log.split(" ", 1)
        if rest[0].isdigit():
            digit.append(log)
        else:
            letter.append((rest, ident, log))
    letter.sort(key=lambda x: (x[0], x[1]))
    return [item[2] for item in letter] + digit
`,
    tests: [
      {
        label: "Example",
        call: 'reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])',
        expected: '["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]',
      },
      {
        label: "Tie id",
        call: 'reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"])',
        expected: '["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]',
      },
      {
        label: "Digits only",
        call: 'reorderLogFiles(["1 n u","r 527","j 3 5"])',
        expected: '["1 n u","r 527","j 3 5"]',
      },
    ],
  }),
];
