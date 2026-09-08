import { buildCodingProblem } from "./helpers";

export const hashMapProblems = [
  buildCodingProblem({
    order: 56,
    slug: "two-sum-ii",
    title: "Two Sum II — Input Array Is Sorted",
    difficulty: "easy",
    category: "hash-maps",
    description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers as [index1, index2] (1-indexed).

You may assume each input has exactly one solution and you cannot use the same element twice.

Use only constant extra space.`,
    examples: [{ input: "numbers = [2, 7, 11, 15], target = 9", output: "[1, 2]" }],
    constraints: ["2 <= len(numbers) <= 3 * 10^4", "numbers is sorted"],
    hints: [
      "Two pointers at start and end.",
      "Move the left pointer up if the sum is too small, otherwise move right down.",
    ],
    approach: `Because the array is sorted, two pointers close in until they hit the target.`,
    starterCode: `def twoSum(numbers, target):
    # Write your code here
    pass
`,
    solutionCode: `def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1
    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == target:
            return [left + 1, right + 1]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []
`,
    tests: [
      { label: "Example 1", call: "twoSum([2, 7, 11, 15], 9)", expected: "[1, 2]" },
      { label: "Example 2", call: "twoSum([2, 3, 4], 6)", expected: "[1, 3]" },
    ],
  }),

  buildCodingProblem({
    order: 57,
    slug: "majority-element-ii",
    title: "Majority Element II",
    difficulty: "medium",
    category: "hash-maps",
    description: `Given an integer array of size n, find all elements that appear more than floor(n / 3) times.

You may return the answer in any order.`,
    examples: [
      { input: "nums = [3, 2, 3]", output: "[3]" },
      { input: "nums = [1, 2]", output: "[1, 2]" },
    ],
    constraints: ["At most two values can appear more than n/3 times"],
    hints: [
      "Boyer-Moore with two candidates.",
      "Verify counts in a second pass.",
    ],
    approach: `Generalized Boyer-Moore voting for k = 3 (at most two majority values), then verify.`,
    starterCode: `def majorityElement(nums):
    # Write your code here
    pass
`,
    solutionCode: `def majorityElement(nums):
    if not nums:
        return []
    candidate1 = candidate2 = None
    count1 = count2 = 0
    for num in nums:
        if candidate1 == num:
            count1 += 1
        elif candidate2 == num:
            count2 += 1
        elif count1 == 0:
            candidate1, count1 = num, 1
        elif count2 == 0:
            candidate2, count2 = num, 1
        else:
            count1 -= 1
            count2 -= 1
    result = []
    for candidate in [candidate1, candidate2]:
        if candidate is not None and nums.count(candidate) > len(nums) // 3:
            result.append(candidate)
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `assert sorted(majorityElement([3, 2, 3])) == [3]`,
      },
      {
        kind: "custom",
        label: "Two answers",
        code: `assert sorted(majorityElement([1, 2])) == [1, 2]`,
      },
      {
        kind: "custom",
        label: "None",
        code: `assert majorityElement([1, 2, 3]) == [] or sorted(majorityElement([1, 2, 3])) == []`,
      },
    ],
  }),

  buildCodingProblem({
    order: 58,
    slug: "random-pick-index",
    title: "Random Pick Index",
    difficulty: "medium",
    category: "hash-maps",
    description: `Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

Implement the Solution class:
- Solution(nums) initializes the object with the array nums
- pick(target) picks a random index i from nums where nums[i] == target

Each valid index should be returned with equal probability.`,
    examples: [
      {
        input: "nums = [1, 2, 3, 3, 3], pick(3) several times",
        output: "one of 2, 3, or 4",
      },
    ],
    constraints: ["target is guaranteed to exist in nums"],
    hints: [
      "Reservoir sampling avoids storing all indices.",
      "When you see the k-th match, replace the answer with probability 1/k.",
    ],
    approach: `Reservoir sampling (or pre-bucket indices). Tests only check that the returned index stores target.`,
    starterCode: `import random

class Solution:
    def __init__(self, nums):
        pass

    def pick(self, target):
        pass
`,
    solutionCode: `import random

class Solution:
    def __init__(self, nums):
        self.nums = nums

    def pick(self, target):
        count = 0
        result = 0
        for i, num in enumerate(self.nums):
            if num == target:
                count += 1
                if random.randint(1, count) == count:
                    result = i
        return result
`,
    tests: [
      {
        kind: "custom",
        label: "Valid index for 3",
        code: `s = Solution([1, 2, 3, 3, 3])
for _ in range(8):
    idx = s.pick(3)
    assert idx in (2, 3, 4), f"bad index {idx}"`,
      },
      {
        kind: "custom",
        label: "Unique target",
        code: `s = Solution([1, 2, 3, 3, 3])
assert s.pick(1) == 0`,
      },
    ],
  }),
];
