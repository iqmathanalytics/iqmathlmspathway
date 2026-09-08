import { buildCodingProblem } from "./helpers";

export const dpProblems = [
  buildCodingProblem({
    order: 50,
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "easy",
    category: "dynamic-programming",
    description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps.

In how many distinct ways can you climb to the top?`,
    examples: [
      {
        input: "n = 3",
        output: "3",
        explanation: "1+1+1, 1+2, and 2+1.",
      },
    ],
    constraints: ["1 <= n <= 45"],
    hints: [
      "ways(n) = ways(n-1) + ways(n-2).",
      "This is Fibonacci. You only need the last two values.",
    ],
    approach: `Bottom-up Fibonacci with two rolling variables.`,
    starterCode: `def climbStairs(n):
    # Write your code here
    pass
`,
    solutionCode: `def climbStairs(n):
    if n <= 2:
        return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    return prev1
`,
    tests: [
      { label: "n = 2", call: "climbStairs(2)", expected: "2" },
      { label: "n = 3", call: "climbStairs(3)", expected: "3" },
      { label: "n = 5", call: "climbStairs(5)", expected: "8" },
    ],
  }),

  buildCodingProblem({
    order: 51,
    slug: "house-robber",
    title: "House Robber",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.

You cannot rob two adjacent houses. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob.`,
    examples: [
      {
        input: "nums = [1, 2, 3, 1]",
        output: "4",
        explanation: "Rob house 1 (1) and house 3 (3).",
      },
    ],
    constraints: ["1 <= len(nums) <= 100"],
    hints: [
      "At house i: skip it (keep prev best) or rob it + best from i-2.",
      "dp[i] = max(dp[i-1], nums[i] + dp[i-2]).",
    ],
    approach: `Linear DP with two rolling values: the best if we skip this house vs rob it.`,
    starterCode: `def rob(nums):
    # Write your code here
    pass
`,
    solutionCode: `def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    prev2 = 0
    prev1 = nums[0]
    for i in range(1, len(nums)):
        current = max(prev1, nums[i] + prev2)
        prev2 = prev1
        prev1 = current
    return prev1
`,
    tests: [
      { label: "Example 1", call: "rob([1, 2, 3, 1])", expected: "4" },
      { label: "Example 2", call: "rob([2, 7, 9, 3, 1])", expected: "12" },
      { label: "Single", call: "rob([5])", expected: "5" },
    ],
  }),

  buildCodingProblem({
    order: 52,
    slug: "coin-change",
    title: "Coin Change",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.`,
    examples: [
      { input: "coins = [1, 2, 5], amount = 11", output: "3", explanation: "5 + 5 + 1" },
      { input: "coins = [2], amount = 3", output: "-1" },
    ],
    constraints: ["1 <= len(coins) <= 12", "0 <= amount <= 10^4"],
    hints: [
      "dp[x] = fewest coins to make amount x.",
      "dp[x] = min over coins of dp[x - coin] + 1.",
    ],
    approach: `Unbounded knapsack / coin change DP. Initialize dp[0] = 0 and the rest as infinity.`,
    starterCode: `def coinChange(coins, amount):
    # Write your code here
    pass
`,
    solutionCode: `def coinChange(coins, amount):
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float("inf") else -1
`,
    tests: [
      { label: "Example 1", call: "coinChange([1, 2, 5], 11)", expected: "3" },
      { label: "Impossible", call: "coinChange([2], 3)", expected: "-1" },
      { label: "Zero amount", call: "coinChange([1], 0)", expected: "0" },
    ],
  }),

  buildCodingProblem({
    order: 53,
    slug: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given an integer array nums, return the length of the longest strictly increasing subsequence.`,
    examples: [
      {
        input: "nums = [10, 9, 2, 5, 3, 7, 101, 18]",
        output: "4",
        explanation: "[2, 3, 7, 101]",
      },
    ],
    constraints: ["1 <= len(nums) <= 2500"],
    hints: [
      "dp[i] = LIS length ending at i. Check all j < i.",
      "O(n log n) alternative: patience sorting with binary search on tails.",
    ],
    approach: `Classic O(n^2) DP, or maintain a tails array and binary-search the insertion point.`,
    starterCode: `def lengthOfLIS(nums):
    # Write your code here
    pass
`,
    solutionCode: `def lengthOfLIS(nums):
    n = len(nums)
    dp = [1] * n
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)
`,
    tests: [
      { label: "Example 1", call: "lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])", expected: "4" },
      { label: "Increasing", call: "lengthOfLIS([1, 2, 3, 4])", expected: "4" },
      { label: "Decreasing", call: "lengthOfLIS([4, 3, 2, 1])", expected: "1" },
    ],
  }),

  buildCodingProblem({
    order: 54,
    slug: "zero-one-knapsack",
    title: "0/1 Knapsack",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value.

Each item may be used at most once (0/1 knapsack).

Return the maximum value achievable.`,
    examples: [
      {
        input: "weights = [10, 20, 30], values = [60, 100, 120], W = 50",
        output: "220",
        explanation: "Items with weight 20 and 30.",
      },
    ],
    constraints: ["1 <= n <= 100", "1 <= W <= 1000"],
    hints: [
      "dp[i][w] = max value using first i items with capacity w.",
      "For each item: skip it, or take it if it fits.",
    ],
    approach: `2D DP: include vs exclude each item. Can be compressed to 1D iterating capacity backward.`,
    starterCode: `def knapsack(weights, values, W):
    # Write your code here
    pass
`,
    solutionCode: `def knapsack(weights, values, W):
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(W + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w],
                )
            else:
                dp[i][w] = dp[i - 1][w]
    return dp[n][W]
`,
    tests: [
      { label: "Classic", call: "knapsack([10, 20, 30], [60, 100, 120], 50)", expected: "220" },
      { label: "Heavy items", call: "knapsack([60, 100, 120], [10, 20, 30], 150)", expected: "30" },
      { label: "Fits two", call: "knapsack([1, 3, 4], [15, 20, 30], 4)", expected: "35" },
    ],
  }),

  buildCodingProblem({
    order: 55,
    slug: "edit-distance",
    title: "Edit Distance",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have three operations:
- Insert a character
- Delete a character
- Replace a character`,
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: "3" },
      { input: 'word1 = "intention", word2 = "execution"', output: "5" },
    ],
    constraints: ["0 <= len(word1), len(word2) <= 500"],
    hints: [
      "dp[i][j] = edit distance of first i chars of word1 and first j of word2.",
      "If letters match, take dp[i-1][j-1]. Else 1 + min(insert, delete, replace).",
    ],
    approach: `Standard Levenshtein DP table with base cases of empty prefixes.`,
    starterCode: `def minDistance(word1, word2):
    # Write your code here
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
      { label: "Example 1", call: 'minDistance("horse", "ros")', expected: "3" },
      { label: "Example 2", call: 'minDistance("intention", "execution")', expected: "5" },
      { label: "Empty", call: 'minDistance("", "abc")', expected: "3" },
    ],
  }),
];
