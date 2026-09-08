import { buildCodingProblem } from "./helpers";

export const arrayProblems = [
  buildCodingProblem({
    order: 1,
    slug: "two-sum",
    title: "Two Sum",
    difficulty: "easy",
    category: "arrays",
    description: `Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

You may assume each input has exactly one solution, and you cannot use the same element twice. You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2, 7, 11, 15], target = 9",
        output: "[0, 1]",
        explanation: "nums[0] + nums[1] == 9, so we return [0, 1].",
      },
      {
        input: "nums = [3, 2, 4], target = 6",
        output: "[1, 2]",
      },
    ],
    constraints: [
      "2 <= len(nums) <= 10^4",
      "-10^9 <= nums[i], target <= 10^9",
      "Exactly one valid answer exists",
    ],
    hints: [
      "Store each number and its index in a dictionary as you iterate.",
      "For each number, check whether target - number was already seen.",
      "Time: O(n), Space: O(n).",
    ],
    approach: `Use a hash map of values to indices. For each number, look up the complement (target - number). If it exists, return both indices. Otherwise store the current number and continue.`,
    starterCode: `def twoSum(nums, target):
    # Write your code here
    pass
`,
    solutionCode: `def twoSum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `_got = sorted(twoSum([2, 7, 11, 15], 9))\nassert _got == [0, 1], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Example 2",
        code: `_got = sorted(twoSum([3, 2, 4], 6))\nassert _got == [1, 2], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Duplicates",
        code: `_got = sorted(twoSum([3, 3], 6))\nassert _got == [0, 1], f"got {_got!r}"`,
      },
    ],
  }),

  buildCodingProblem({
    order: 2,
    slug: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    category: "arrays",
    description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
    examples: [
      {
        input: "prices = [7, 1, 5, 3, 6, 4]",
        output: "5",
        explanation: "Buy at 1 and sell at 6.",
      },
      {
        input: "prices = [7, 6, 4, 3, 1]",
        output: "0",
        explanation: "No profitable transaction.",
      },
    ],
    constraints: [
      "1 <= len(prices) <= 10^5",
      "0 <= prices[i] <= 10^4",
    ],
    hints: [
      "Track the minimum price seen so far.",
      "At each day, profit is price minus that minimum.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Scan left to right while tracking the lowest price so far. The best profit at each day is current price minus that low. Keep the maximum profit.`,
    starterCode: `def maxProfit(prices):
    # Write your code here
    pass
`,
    solutionCode: `def maxProfit(prices):
    if not prices or len(prices) < 2:
        return 0
    min_price = prices[0]
    max_profit = 0
    for price in prices[1:]:
        profit = price - min_price
        max_profit = max(max_profit, profit)
        min_price = min(min_price, price)
    return max_profit
`,
    tests: [
      { label: "Example 1", call: "maxProfit([7, 1, 5, 3, 6, 4])", expected: "5" },
      { label: "No profit", call: "maxProfit([7, 6, 4, 3, 1])", expected: "0" },
      { label: "Single day", call: "maxProfit([5])", expected: "0" },
    ],
  }),

  buildCodingProblem({
    order: 3,
    slug: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "easy",
    category: "arrays",
    description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.`,
    examples: [
      { input: "nums = [1, 2, 3, 1]", output: "True" },
      { input: "nums = [1, 2, 3, 4]", output: "False" },
    ],
    constraints: ["1 <= len(nums) <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    hints: [
      "A set gives O(1) membership checks.",
      "If a number is already in the set, it is a duplicate.",
      "Time: O(n), Space: O(n).",
    ],
    approach: `Insert numbers into a set while iterating. Return True as soon as a value is already present.`,
    starterCode: `def containsDuplicate(nums):
    # Write your code here
    pass
`,
    solutionCode: `def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False
`,
    tests: [
      { label: "Has duplicate", call: "containsDuplicate([1, 2, 3, 1])", expected: "True" },
      { label: "All unique", call: "containsDuplicate([1, 2, 3, 4])", expected: "False" },
      { label: "All same", call: "containsDuplicate([1, 1, 1])", expected: "True" },
    ],
  }),

  buildCodingProblem({
    order: 4,
    slug: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "easy",
    category: "arrays",
    description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.`,
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "True" },
      { input: 's = "rat", t = "car"', output: "False" },
    ],
    constraints: [
      "1 <= len(s), len(t) <= 5 * 10^4",
      "s and t consist of lowercase English letters",
    ],
    hints: [
      "Sorting both strings is a simple check.",
      "Counting character frequencies is faster: O(n).",
      "Lengths must match first.",
    ],
    approach: `Two strings are anagrams if they contain the same characters with the same frequencies. Sort and compare, or count letters with a dictionary / Counter.`,
    starterCode: `def isAnagram(s, t):
    # Write your code here
    pass
`,
    solutionCode: `from collections import Counter

def isAnagram(s, t):
    return Counter(s) == Counter(t)
`,
    tests: [
      { label: "Example 1", call: 'isAnagram("anagram", "nagaram")', expected: "True" },
      { label: "Not anagram", call: 'isAnagram("rat", "car")', expected: "False" },
      { label: "Different length", call: 'isAnagram("ab", "a")', expected: "False" },
    ],
  }),

  buildCodingProblem({
    order: 5,
    slug: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "easy",
    category: "arrays",
    description: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place so that each unique element appears only once. The relative order of the elements should be kept the same.

Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array.`,
    examples: [
      {
        input: "nums = [1, 1, 2]",
        output: "2, nums = [1, 2, _]",
        explanation: "The first 2 elements are 1 and 2.",
      },
    ],
    constraints: ["1 <= len(nums) <= 3 * 10^4", "nums is sorted in non-decreasing order"],
    hints: [
      "Use two pointers: one reads, one writes unique values.",
      "Because the array is sorted, duplicates are adjacent.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Keep a write index j at the last unique value. Scan with i; whenever nums[i] differs from nums[j], advance j and copy nums[i] there. Return j + 1.`,
    starterCode: `def removeDuplicates(nums):
    # Write your code here
    pass
`,
    solutionCode: `def removeDuplicates(nums):
    if not nums:
        return 0
    j = 0
    for i in range(1, len(nums)):
        if nums[i] != nums[j]:
            j += 1
            nums[j] = nums[i]
    return j + 1
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `nums = [1, 1, 2]\nk = removeDuplicates(nums)\nassert k == 2, f"k={k}"\nassert nums[:k] == [1, 2], f"got {nums[:k]!r}"`,
      },
      {
        kind: "custom",
        label: "Longer run",
        code: `nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]\nk = removeDuplicates(nums)\nassert k == 5\nassert nums[:k] == [0, 1, 2, 3, 4]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 6,
    slug: "rotate-array",
    title: "Rotate Array",
    difficulty: "easy",
    category: "arrays",
    description: `Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Modify nums in-place.`,
    examples: [
      {
        input: "nums = [1, 2, 3, 4, 5, 6, 7], k = 3",
        output: "[5, 6, 7, 1, 2, 3, 4]",
      },
    ],
    constraints: ["1 <= len(nums) <= 10^5", "0 <= k <= 10^5"],
    hints: [
      "k can be larger than n — use k % n.",
      "Reverse the whole array, then reverse the first k items, then reverse the rest.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Reversal method: reverse the entire array, reverse the prefix of length k, then reverse the suffix. This rotates right by k.`,
    starterCode: `def rotate(nums, k):
    # Write your code here
    pass
`,
    solutionCode: `def rotate(nums, k):
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    k = k % len(nums)
    reverse(0, len(nums) - 1)
    reverse(0, k - 1)
    reverse(k, len(nums) - 1)
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `nums = [1, 2, 3, 4, 5, 6, 7]\nrotate(nums, 3)\nassert nums == [5, 6, 7, 1, 2, 3, 4], f"got {nums!r}"`,
      },
      {
        kind: "custom",
        label: "k equals length",
        code: `nums = [1, 2]\nrotate(nums, 2)\nassert nums == [1, 2], f"got {nums!r}"`,
      },
      {
        kind: "custom",
        label: "k larger than n",
        code: `nums = [-1, -100, 3, 99]\nrotate(nums, 6)\nassert nums == [3, 99, -1, -100], f"got {nums!r}"`,
      },
    ],
  }),

  buildCodingProblem({
    order: 7,
    slug: "missing-number",
    title: "Missing Number",
    difficulty: "easy",
    category: "arrays",
    description: `Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.`,
    examples: [
      { input: "nums = [3, 0, 1]", output: "2" },
      { input: "nums = [0, 1]", output: "2" },
    ],
    constraints: ["n == len(nums)", "nums contains unique values in [0, n]"],
    hints: [
      "The expected sum of 0..n is n * (n + 1) / 2.",
      "Subtract the actual sum to find the missing value.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Compare the Gauss formula sum n*(n+1)/2 with sum(nums). The difference is the missing number.`,
    starterCode: `def missingNumber(nums):
    # Write your code here
    pass
`,
    solutionCode: `def missingNumber(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum
`,
    tests: [
      { label: "Example 1", call: "missingNumber([3, 0, 1])", expected: "2" },
      { label: "Missing n", call: "missingNumber([0, 1])", expected: "2" },
      { label: "Missing 0", call: "missingNumber([1])", expected: "0" },
    ],
  }),

  buildCodingProblem({
    order: 8,
    slug: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "medium",
    category: "arrays",
    description: `Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The algorithm must run in O(n) time and cannot use the division operator.`,
    examples: [
      { input: "nums = [1, 2, 3, 4]", output: "[24, 12, 8, 6]" },
      { input: "nums = [-1, 1, 0, -3, 3]", output: "[0, 0, 9, 0, 0]" },
    ],
    constraints: ["2 <= len(nums) <= 10^5", "Product fits in a 32-bit integer"],
    hints: [
      "answer[i] is (product of everything left of i) times (product of everything right of i).",
      "Fill prefix products left to right, then multiply suffix products right to left.",
      "Time: O(n), extra space: O(1) besides the output array.",
    ],
    approach: `First pass stores prefix products in the result. Second pass multiplies running suffix products from the right.`,
    starterCode: `def productExceptSelf(nums):
    # Write your code here
    pass
`,
    solutionCode: `def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result
`,
    tests: [
      { label: "Example 1", call: "productExceptSelf([1, 2, 3, 4])", expected: "[24, 12, 8, 6]" },
      { label: "With zero", call: "productExceptSelf([-1, 1, 0, -3, 3])", expected: "[0, 0, 9, 0, 0]" },
      { label: "Two elements", call: "productExceptSelf([2, 3])", expected: "[3, 2]" },
    ],
  }),

  buildCodingProblem({
    order: 9,
    slug: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "medium",
    category: "arrays",
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
    examples: [
      {
        input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        output: "6",
        explanation: "The subarray [4, -1, 2, 1] has the largest sum 6.",
      },
    ],
    constraints: ["1 <= len(nums) <= 10^5"],
    hints: [
      "Kadane's algorithm: keep a running sum, reset when it would go negative relative to starting fresh.",
      "At each index, current_sum = max(nums[i], current_sum + nums[i]).",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Kadane's algorithm tracks the best subarray ending at the current index and the global maximum.`,
    starterCode: `def maxSubArray(nums):
    # Write your code here
    pass
`,
    solutionCode: `def maxSubArray(nums):
    max_sum = current_sum = nums[0]
    for i in range(1, len(nums)):
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    return max_sum
`,
    tests: [
      { label: "Example 1", call: "maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])", expected: "6" },
      { label: "All negative", call: "maxSubArray([-3, -1, -2])", expected: "-1" },
      { label: "Single", call: "maxSubArray([5])", expected: "5" },
    ],
  }),

  buildCodingProblem({
    order: 10,
    slug: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "easy",
    category: "arrays",
    description: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of valid elements in nums1 and nums2 respectively.

Merge nums2 into nums1 as one sorted array. nums1 has a length of m + n, with the last n slots unused (filled with 0). Modify nums1 in-place.`,
    examples: [
      {
        input: "nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3",
        output: "[1, 2, 2, 3, 5, 6]",
      },
    ],
    constraints: ["nums1.length == m + n", "nums2.length == n"],
    hints: [
      "Fill from the back so you do not overwrite unread values in nums1.",
      "Use three pointers: end of nums1's values, end of nums2, and write position.",
      "Time: O(m + n), Space: O(1).",
    ],
    approach: `Compare the last unused elements of both arrays and place the larger one at the end of nums1. Copy any leftover nums2 values.`,
    starterCode: `def merge(nums1, m, nums2, n):
    # Write your code here
    pass
`,
    solutionCode: `def merge(nums1, m, nums2, n):
    p1 = m - 1
    p2 = n - 1
    p = m + n - 1
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
    while p2 >= 0:
        nums1[p] = nums2[p2]
        p2 -= 1
        p -= 1
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `nums1 = [1, 2, 3, 0, 0, 0]\nmerge(nums1, 3, [2, 5, 6], 3)\nassert nums1 == [1, 2, 2, 3, 5, 6], f"got {nums1!r}"`,
      },
      {
        kind: "custom",
        label: "Empty nums2",
        code: `nums1 = [1]\nmerge(nums1, 1, [], 0)\nassert nums1 == [1]`,
      },
      {
        kind: "custom",
        label: "Empty nums1 values",
        code: `nums1 = [0]\nmerge(nums1, 0, [1], 1)\nassert nums1 == [1]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 11,
    slug: "majority-element",
    title: "Majority Element",
    difficulty: "easy",
    category: "arrays",
    description: `Given an array nums of size n, return the majority element.

The majority element is the element that appears more than floor(n / 2) times. You may assume it always exists.`,
    examples: [
      { input: "nums = [3, 2, 3]", output: "3" },
      { input: "nums = [2, 2, 1, 1, 1, 2, 2]", output: "2" },
    ],
    constraints: ["n == len(nums)", "The majority element always exists"],
    hints: [
      "Boyer-Moore voting: keep a candidate and a count.",
      "Count increments when you see the candidate, otherwise decrements. Reset candidate when count hits 0.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Boyer-Moore Voting Algorithm. The majority value survives because it occurs more than n/2 times.`,
    starterCode: `def majorityElement(nums):
    # Write your code here
    pass
`,
    solutionCode: `def majorityElement(nums):
    candidate = None
    count = 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate
`,
    tests: [
      { label: "Example 1", call: "majorityElement([3, 2, 3])", expected: "3" },
      { label: "Example 2", call: "majorityElement([2, 2, 1, 1, 1, 2, 2])", expected: "2" },
      { label: "Single", call: "majorityElement([1])", expected: "1" },
    ],
  }),

  buildCodingProblem({
    order: 12,
    slug: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "hard",
    category: "arrays",
    description: `Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.`,
    examples: [
      { input: "nums = [1, 2, 0]", output: "3" },
      { input: "nums = [3, 4, -1, 1]", output: "2" },
    ],
    constraints: ["1 <= len(nums) <= 10^5"],
    hints: [
      "The answer is in 1..n+1. Use the array itself as a hash map of those values.",
      "Place each value x in 1..n at index x-1 by swapping.",
      "Then scan for the first index i where nums[i] != i + 1.",
    ],
    approach: `Cycle-sort positives into their natural index. The first mismatch is the missing positive. If every slot matches, return n + 1.`,
    starterCode: `def firstMissingPositive(nums):
    # Write your code here
    pass
`,
    solutionCode: `def firstMissingPositive(nums):
    n = len(nums)
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
            correct_idx = nums[i] - 1
            nums[i], nums[correct_idx] = nums[correct_idx], nums[i]
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    return n + 1
`,
    tests: [
      { label: "Example 1", call: "firstMissingPositive([1, 2, 0])", expected: "3" },
      { label: "Example 2", call: "firstMissingPositive([3, 4, -1, 1])", expected: "2" },
      { label: "All positive sequential", call: "firstMissingPositive([1, 2, 3])", expected: "4" },
    ],
  }),

  buildCodingProblem({
    order: 13,
    slug: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "medium",
    category: "arrays",
    description: `There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot.

Given nums and an integer target, return the index of target if it is in nums, or -1 if it is not. The algorithm must run in O(log n) time.`,
    examples: [
      { input: "nums = [4, 5, 6, 7, 0, 1, 2], target = 0", output: "4" },
      { input: "nums = [4, 5, 6, 7, 0, 1, 2], target = 3", output: "-1" },
    ],
    constraints: ["1 <= len(nums) <= 5000", "All values are unique"],
    hints: [
      "Still binary search — one half of the range is always sorted.",
      "If the left half is sorted, check whether target lies inside it.",
      "Otherwise search the other half.",
    ],
    approach: `Modified binary search: identify the sorted half each step and discard the half that cannot contain target.`,
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
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
`,
    tests: [
      { label: "Found", call: "search([4, 5, 6, 7, 0, 1, 2], 0)", expected: "4" },
      { label: "Missing", call: "search([4, 5, 6, 7, 0, 1, 2], 3)", expected: "-1" },
      { label: "Not rotated", call: "search([1, 2, 3, 4], 3)", expected: "2" },
    ],
  }),

  buildCodingProblem({
    order: 14,
    slug: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "medium",
    category: "arrays",
    description: `Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.`,
    examples: [
      {
        input: "nums = [100, 4, 200, 1, 3, 2]",
        output: "4",
        explanation: "[1, 2, 3, 4] is the longest consecutive sequence.",
      },
    ],
    constraints: ["0 <= len(nums) <= 10^5"],
    hints: [
      "Put every number in a set for O(1) lookups.",
      "Only start counting when num - 1 is not in the set (start of a run).",
      "Time: O(n), Space: O(n).",
    ],
    approach: `Hash set of values. For each number that begins a streak, walk num+1, num+2, ... and track the longest run.`,
    starterCode: `def longestConsecutive(nums):
    # Write your code here
    pass
`,
    solutionCode: `def longestConsecutive(nums):
    if not nums:
        return 0
    num_set = set(nums)
    max_length = 0
    for num in num_set:
        if num - 1 not in num_set:
            current_num = num
            current_length = 1
            while current_num + 1 in num_set:
                current_num += 1
                current_length += 1
            max_length = max(max_length, current_length)
    return max_length
`,
    tests: [
      { label: "Example 1", call: "longestConsecutive([100, 4, 200, 1, 3, 2])", expected: "4" },
      { label: "Empty", call: "longestConsecutive([])", expected: "0" },
      { label: "Duplicates", call: "longestConsecutive([1, 2, 0, 1])", expected: "3" },
    ],
  }),

  buildCodingProblem({
    order: 15,
    slug: "jump-game",
    title: "Jump Game",
    difficulty: "medium",
    category: "arrays",
    description: `You are given an integer array nums. You are initially positioned at the array's first index. Each element nums[i] represents your maximum jump length from that position.

Return true if you can reach the last index, or false otherwise.`,
    examples: [
      { input: "nums = [2, 3, 1, 1, 4]", output: "True" },
      { input: "nums = [3, 2, 1, 0, 4]", output: "False" },
    ],
    constraints: ["1 <= len(nums) <= 10^4", "0 <= nums[i] <= 10^5"],
    hints: [
      "Track the furthest index reachable so far.",
      "If you ever stand beyond that reach, you are stuck.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Greedy: update max_reach = max(max_reach, i + nums[i]). If i > max_reach, return False.`,
    starterCode: `def canJump(nums):
    # Write your code here
    pass
`,
    solutionCode: `def canJump(nums):
    max_reach = 0
    for i in range(len(nums)):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + nums[i])
    return True
`,
    tests: [
      { label: "Reachable", call: "canJump([2, 3, 1, 1, 4])", expected: "True" },
      { label: "Stuck", call: "canJump([3, 2, 1, 0, 4])", expected: "False" },
      { label: "Single", call: "canJump([0])", expected: "True" },
    ],
  }),
];
