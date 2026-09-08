import { LIST_HELPERS, LIST_NODE_STARTER, buildCodingProblem } from "./helpers";

export const binarySearchProblems = [
  buildCodingProblem({
    order: 59,
    slug: "binary-search",
    title: "Binary Search",
    difficulty: "easy",
    category: "binary-search",
    description: `Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.`,
    examples: [{ input: "nums = [-1, 0, 3, 5, 9, 12], target = 9", output: "4" }],
    constraints: ["1 <= len(nums) <= 10^4", "All values are unique", "nums is sorted"],
    hints: [
      "Compare target to the midpoint.",
      "Discard half of the remaining range each step.",
    ],
    approach: `Classic binary search on a sorted unique array.`,
    starterCode: `def search(nums, target):
    # Write your code here
    pass
`,
    solutionCode: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
`,
    tests: [
      { label: "Found", call: "search([-1, 0, 3, 5, 9, 12], 9)", expected: "4" },
      { label: "Missing", call: "search([-1, 0, 3, 5, 9, 12], 2)", expected: "-1" },
    ],
  }),

  buildCodingProblem({
    order: 60,
    slug: "find-first-and-last-position",
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "medium",
    category: "binary-search",
    description: `Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.`,
    examples: [{ input: "nums = [5, 7, 7, 8, 8, 10], target = 8", output: "[3, 4]" }],
    constraints: ["0 <= len(nums) <= 10^5"],
    hints: [
      "Binary search twice: leftmost index, then rightmost index.",
      "When you find target, keep searching left (or right) instead of stopping.",
    ],
    approach: `Two binary searches bound the equal range of target.`,
    starterCode: `def searchRange(nums, target):
    # Write your code here
    pass
`,
    solutionCode: `def searchRange(nums, target):
    def findFirst(nums, target):
        left, right = 0, len(nums) - 1
        result = -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                result = mid
                right = mid - 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return result
    def findLast(nums, target):
        left, right = 0, len(nums) - 1
        result = -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                result = mid
                left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return result
    first = findFirst(nums, target)
    if first == -1:
        return [-1, -1]
    return [first, findLast(nums, target)]
`,
    tests: [
      { label: "Example 1", call: "searchRange([5, 7, 7, 8, 8, 10], 8)", expected: "[3, 4]" },
      { label: "Missing", call: "searchRange([5, 7, 7, 8, 8, 10], 6)", expected: "[-1, -1]" },
      { label: "Empty", call: "searchRange([], 0)", expected: "[-1, -1]" },
    ],
  }),
];

export const greedyProblems = [
  buildCodingProblem({
    order: 61,
    slug: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "medium",
    category: "greedy",
    description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store. You may not slant the container.`,
    examples: [{ input: "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]", output: "49" }],
    constraints: ["2 <= n <= 10^5"],
    hints: [
      "Two pointers at both ends.",
      "Area is width * min(height[left], height[right]).",
      "Move the pointer at the shorter line inward.",
    ],
    approach: `Greedy two pointers: the limiting height is the shorter line, so advance that side to try a taller wall.`,
    starterCode: `def maxArea(height):
    # Write your code here
    pass
`,
    solutionCode: `def maxArea(height):
    max_area = 0
    left, right = 0, len(height) - 1
    while left < right:
        width = right - left
        current_area = width * min(height[left], height[right])
        max_area = max(max_area, current_area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area
`,
    tests: [
      { label: "Example 1", call: "maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])", expected: "49" },
      { label: "Two lines", call: "maxArea([1, 1])", expected: "1" },
    ],
  }),

  buildCodingProblem({
    order: 62,
    slug: "assign-cookies",
    title: "Assign Cookies",
    difficulty: "easy",
    category: "greedy",
    description: `Assume you are an awesome parent and want to give your children cookies. Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with. Each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child will be content.

Each child can receive at most one cookie.

Return the maximum number of content children.`,
    examples: [{ input: "g = [1, 2, 3], s = [1, 1]", output: "1" }],
    constraints: ["1 <= len(g), len(s) <= 3 * 10^4"],
    hints: [
      "Sort both arrays.",
      "Give the smallest cookie that satisfies the next greediest child.",
    ],
    approach: `Sort greed and sizes. Walk both arrays; assign a cookie when it is large enough.`,
    starterCode: `def findContentChildren(g, s):
    # Write your code here
    pass
`,
    solutionCode: `def findContentChildren(g, s):
    g.sort()
    s.sort()
    child_idx = 0
    cookie_idx = 0
    while child_idx < len(g) and cookie_idx < len(s):
        if s[cookie_idx] >= g[child_idx]:
            child_idx += 1
        cookie_idx += 1
    return child_idx
`,
    tests: [
      { label: "Example 1", call: "findContentChildren([1, 2, 3], [1, 1])", expected: "1" },
      { label: "Example 2", call: "findContentChildren([1, 2], [1, 2, 3])", expected: "2" },
    ],
  }),
];

export const bitProblems = [
  buildCodingProblem({
    order: 67,
    slug: "single-number",
    title: "Single Number",
    difficulty: "easy",
    category: "bit-manipulation",
    description: `Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with linear runtime complexity and use only constant extra space.`,
    examples: [{ input: "nums = [2, 2, 1]", output: "1" }],
    constraints: ["1 <= len(nums) <= 3 * 10^4"],
    hints: [
      "XOR of a number with itself is 0.",
      "XOR of a number with 0 is the number.",
      "XOR everything together; duplicates cancel.",
    ],
    approach: `Bitwise XOR fold. Pairs cancel, the unique value remains.`,
    starterCode: `def singleNumber(nums):
    # Write your code here
    pass
`,
    solutionCode: `def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result
`,
    tests: [
      { label: "Example 1", call: "singleNumber([2, 2, 1])", expected: "1" },
      { label: "Example 2", call: "singleNumber([4, 1, 2, 1, 2])", expected: "4" },
    ],
  }),

  buildCodingProblem({
    order: 68,
    slug: "power-of-two",
    title: "Power of Two",
    difficulty: "easy",
    category: "bit-manipulation",
    description: `Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two if there exists an integer x such that n == 2^x.`,
    examples: [
      { input: "n = 16", output: "True" },
      { input: "n = 3", output: "False" },
    ],
    constraints: ["-2^31 <= n <= 2^31 - 1"],
    hints: [
      "A power of two has exactly one bit set.",
      "n > 0 and n & (n - 1) == 0.",
    ],
    approach: `Clearing the lowest set bit of a power of two yields zero.`,
    starterCode: `def isPowerOfTwo(n):
    # Write your code here
    pass
`,
    solutionCode: `def isPowerOfTwo(n):
    return n > 0 and (n & (n - 1)) == 0
`,
    tests: [
      { label: "16", call: "isPowerOfTwo(16)", expected: "True" },
      { label: "3", call: "isPowerOfTwo(3)", expected: "False" },
      { label: "Zero", call: "isPowerOfTwo(0)", expected: "False" },
      { label: "Negative", call: "isPowerOfTwo(-2)", expected: "False" },
    ],
  }),

  buildCodingProblem({
    order: 69,
    slug: "counting-bits",
    title: "Counting Bits",
    difficulty: "easy",
    category: "bit-manipulation",
    description: `Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.`,
    examples: [{ input: "n = 5", output: "[0, 1, 1, 2, 1, 2]" }],
    constraints: ["0 <= n <= 10^5"],
    hints: [
      "ans[i] = ans[i >> 1] + (i & 1).",
      "Or ans[i] = ans[i & (i - 1)] + 1.",
    ],
    approach: `DP on bits: a number's popcount is one more than that of i with the lowest bit cleared, or related to i // 2.`,
    starterCode: `def countBits(n):
    # Write your code here
    pass
`,
    solutionCode: `def countBits(n):
    ans = [0] * (n + 1)
    for i in range(1, n + 1):
        ans[i] = ans[i >> 1] + (i & 1)
    return ans
`,
    tests: [
      { label: "n = 2", call: "countBits(2)", expected: "[0, 1, 1]" },
      { label: "n = 5", call: "countBits(5)", expected: "[0, 1, 1, 2, 1, 2]" },
    ],
  }),
];

export const heapProblems = [
  buildCodingProblem({
    order: 70,
    slug: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    difficulty: "medium",
    category: "heap",
    description: `Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting the entire array?`,
    examples: [{ input: "nums = [3, 2, 1, 5, 6, 4], k = 2", output: "5" }],
    constraints: ["1 <= k <= len(nums) <= 10^5"],
    hints: [
      "A min-heap of size k stores the k largest values seen.",
      "The heap root is the kth largest.",
    ],
    approach: `Maintain a min-heap of size k. Replace the root when a larger value arrives.`,
    starterCode: `import heapq

def findKthLargest(nums, k):
    # Write your code here
    pass
`,
    solutionCode: `import heapq

def findKthLargest(nums, k):
    heap = nums[:k]
    heapq.heapify(heap)
    for num in nums[k:]:
        if num > heap[0]:
            heapq.heapreplace(heap, num)
    return heap[0]
`,
    tests: [
      { label: "Example 1", call: "findKthLargest([3, 2, 1, 5, 6, 4], 2)", expected: "5" },
      { label: "Example 2", call: "findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)", expected: "4" },
    ],
  }),

  buildCodingProblem({
    order: 71,
    slug: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "hard",
    category: "heap",
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
    examples: [
      { input: "lists = [[1, 4, 5], [1, 3, 4], [2, 6]]", output: "[1, 1, 2, 3, 4, 4, 5, 6]" },
    ],
    constraints: ["0 <= k <= 10^4"],
    hints: [
      "Min-heap of current heads keyed by node value.",
      "Include list index in the heap tuple so nodes are not compared directly.",
    ],
    approach: `k-way merge with a heap. Push the next node from the same list whenever you pop.`,
    starterCode: `${LIST_NODE_STARTER}import heapq

def mergeKLists(lists):
    # Write your code here
    pass
`,
    solutionCode: `import heapq

def mergeKLists(lists):
    if not lists:
        return None
    heap = []
    dummy = ListNode(0)
    current = dummy
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
    while heap:
        val, i, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${LIST_HELPERS}
lists = [_list_from_vals([1, 4, 5]), _list_from_vals([1, 3, 4]), _list_from_vals([2, 6])]
assert _vals_from_list(mergeKLists(lists)) == [1, 1, 2, 3, 4, 4, 5, 6]`,
      },
      { kind: "custom", label: "Empty", code: "assert mergeKLists([]) is None" },
    ],
  }),
];
