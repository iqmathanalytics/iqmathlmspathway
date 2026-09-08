import { buildCodingProblem } from "./helpers";

export const intervalProblems = [
  buildCodingProblem({
    order: 72,
    slug: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "medium",
    category: "intervals",
    description: `Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    examples: [
      {
        input: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
        output: "[[1, 6], [8, 10], [15, 18]]",
      },
    ],
    constraints: ["1 <= len(intervals) <= 10^4"],
    hints: [
      "Sort by start time.",
      "If the next interval starts before or at the current end, merge by extending the end.",
    ],
    approach: `Sort, then linearly merge into a result list whenever intervals overlap.`,
    starterCode: `def merge(intervals):
    # Write your code here
    pass
`,
    solutionCode: `def merge(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for current in intervals[1:]:
        last = merged[-1]
        if current[0] <= last[1]:
            merged[-1] = [last[0], max(last[1], current[1])]
        else:
            merged.append(current)
    return merged
`,
    tests: [
      {
        label: "Example 1",
        call: "merge([[1, 3], [2, 6], [8, 10], [15, 18]])",
        expected: "[[1, 6], [8, 10], [15, 18]]",
      },
      { label: "Touching", call: "merge([[1, 4], [4, 5]])", expected: "[[1, 5]]" },
    ],
  }),
];

export const matrixProblems = [
  buildCodingProblem({
    order: 73,
    slug: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    difficulty: "medium",
    category: "matrices",
    description: `Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must modify the matrix in-place.`,
    examples: [
      {
        input: "matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]",
        output: "[[1, 0, 1], [0, 0, 0], [1, 0, 1]]",
      },
    ],
    constraints: ["1 <= m, n <= 200"],
    hints: [
      "Use the first row and first column as markers to achieve O(1) extra space.",
      "Remember whether the original first row / first column contained a zero.",
    ],
    approach: `Mark zeros on the first row/column, then zero the interior, then handle the first row and column.`,
    starterCode: `def setZeroes(matrix):
    # Write your code here
    pass
`,
    solutionCode: `def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    row_zero = any(matrix[0][j] == 0 for j in range(n))
    col_zero = any(matrix[i][0] == 0 for i in range(m))
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    if row_zero:
        for j in range(n):
            matrix[0][j] = 0
    if col_zero:
        for i in range(m):
            matrix[i][0] = 0
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
setZeroes(matrix)
assert matrix == [[1, 0, 1], [0, 0, 0], [1, 0, 1]]`,
      },
      {
        kind: "custom",
        label: "Example 2",
        code: `matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
setZeroes(matrix)
assert matrix == [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 74,
    slug: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "medium",
    category: "matrices",
    description: `Given an m x n matrix, return all elements of the matrix in spiral order.`,
    examples: [
      {
        input: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
        output: "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
      },
    ],
    constraints: ["1 <= m, n <= 10"],
    hints: [
      "Keep four boundaries: top, bottom, left, right.",
      "Walk right, down, left, up, shrinking the bounds after each side.",
    ],
    approach: `Simulate the spiral by peeling layers, guarding against overlapping rows/columns on the last strip.`,
    starterCode: `def spiralOrder(matrix):
    # Write your code here
    pass
`,
    solutionCode: `def spiralOrder(matrix):
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    while top <= bottom and left <= right:
        for col in range(left, right + 1):
            result.append(matrix[top][col])
        top += 1
        for row in range(top, bottom + 1):
            result.append(matrix[row][right])
        right -= 1
        if top <= bottom:
            for col in range(right, left - 1, -1):
                result.append(matrix[bottom][col])
            bottom -= 1
        if left <= right:
            for row in range(bottom, top - 1, -1):
                result.append(matrix[row][left])
            left += 1
    return result
`,
    tests: [
      {
        label: "3x3",
        call: "spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])",
        expected: "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
      },
      {
        label: "3x4",
        call: "spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])",
        expected: "[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
      },
    ],
  }),
];

export const advancedProblems = [
  buildCodingProblem({
    order: 75,
    slug: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "hard",
    category: "binary-search",
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m + n)).`,
    examples: [
      { input: "nums1 = [1, 3], nums2 = [2]", output: "2.0" },
      { input: "nums1 = [1, 2], nums2 = [3, 4]", output: "2.5" },
    ],
    constraints: ["nums1 and nums2 are sorted", "0 <= m, n", "m + n >= 1"],
    hints: [
      "Binary search the partition of the shorter array.",
      "Ensure every value on the left side is <= every value on the right side.",
      "Median is the max of lefts (odd) or average of max-left and min-right (even).",
    ],
    approach: `Partition both arrays so the left half has (m+n+1)//2 elements. Binary search until left1 <= right2 and left2 <= right1.`,
    starterCode: `def findMedianSortedArrays(nums1, nums2):
    # Write your code here
    pass
`,
    solutionCode: `def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    low, high = 0, m
    half = (m + n + 1) // 2
    while low <= high:
        i = (low + high) // 2
        j = half - i
        left1 = nums1[i - 1] if i > 0 else float("-inf")
        right1 = nums1[i] if i < m else float("inf")
        left2 = nums2[j - 1] if j > 0 else float("-inf")
        right2 = nums2[j] if j < n else float("inf")
        if left1 <= right2 and left2 <= right1:
            if (m + n) % 2:
                return float(max(left1, left2))
            return (max(left1, left2) + min(right1, right2)) / 2.0
        if left1 > right2:
            high = i - 1
        else:
            low = i + 1
    return 0.0
`,
    tests: [
      { label: "Odd total", call: "findMedianSortedArrays([1, 3], [2])", expected: "2.0" },
      { label: "Even total", call: "findMedianSortedArrays([1, 2], [3, 4])", expected: "2.5" },
      { label: "One empty", call: "findMedianSortedArrays([], [2, 3])", expected: "2.5" },
    ],
  }),

  buildCodingProblem({
    order: 76,
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "hard",
    category: "arrays",
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    examples: [
      {
        input: "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        output: "6",
      },
    ],
    constraints: ["n == len(height)", "0 <= n <= 2 * 10^4"],
    hints: [
      "Water at i is min(max_left, max_right) - height[i].",
      "Two pointers can compute this in O(n) time and O(1) space.",
    ],
    approach: `Two pointers with running left_max and right_max. Move the side with the smaller max; that side is the bottleneck.`,
    starterCode: `def trap(height):
    # Write your code here
    pass
`,
    solutionCode: `def trap(height):
    if not height:
        return 0
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    return water
`,
    tests: [
      {
        label: "Example 1",
        call: "trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])",
        expected: "6",
      },
      { label: "Example 2", call: "trap([4, 2, 0, 3, 2, 5])", expected: "9" },
      { label: "None", call: "trap([1, 2, 3])", expected: "0" },
    ],
  }),

  buildCodingProblem({
    order: 77,
    slug: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

- '.' Matches any single character.
- '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).`,
    examples: [
      { input: 's = "aa", p = "a"', output: "False" },
      { input: 's = "aa", p = "a*"', output: "True" },
      { input: 's = "ab", p = ".*"', output: "True" },
    ],
    constraints: ["1 <= len(s), len(p) <= 20"],
    hints: [
      "DP: dp[i][j] means s[:i] matches p[:j].",
      "If p[j-1] is '*', it can take 0 of the previous char, or 1+ if the previous matches.",
    ],
    approach: `Bottom-up DP over prefixes. Handle '*' as zero-or-more of p[j-2].`,
    starterCode: `def isMatch(s, p):
    # Write your code here
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
            if p[j - 1] == "." or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            elif p[j - 1] == "*":
                dp[i][j] = dp[i][j - 2]
                if p[j - 2] == "." or p[j - 2] == s[i - 1]:
                    dp[i][j] = dp[i][j] or dp[i - 1][j]
    return dp[m][n]
`,
    tests: [
      { label: "No star fail", call: 'isMatch("aa", "a")', expected: "False" },
      { label: "Star", call: 'isMatch("aa", "a*")', expected: "True" },
      { label: "Dot star", call: 'isMatch("ab", ".*")', expected: "True" },
      { label: "Complex", call: 'isMatch("mississippi", "mis*is*p*.")', expected: "False" },
    ],
  }),
];
