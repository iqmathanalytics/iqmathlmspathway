import { buildCodingProblem } from "./helpers";

export const backtrackingProblems = [
  buildCodingProblem({
    order: 63,
    slug: "permutations",
    title: "Permutations",
    difficulty: "medium",
    category: "backtracking",
    description: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [1, 2, 3]",
        output: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
      },
    ],
    constraints: ["1 <= len(nums) <= 6", "All integers of nums are unique"],
    hints: [
      "Backtrack: build a current permutation, skip used numbers.",
      "When current length equals n, record a copy.",
    ],
    approach: `DFS swapping or a used-set. Push/pop (backtrack) to explore every order.`,
    starterCode: `def permute(nums):
    # Write your code here
    pass
`,
    solutionCode: `def permute(nums):
    result = []
    def backtrack(current):
        if len(current) == len(nums):
            result.append(current[:])
            return
        for num in nums:
            if num not in current:
                current.append(num)
                backtrack(current)
                current.pop()
    backtrack([])
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `_got = permute([1, 2, 3])
_norm = lambda xs: sorted(tuple(x) for x in xs)
assert _norm(_got) == _norm([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `assert permute([1]) == [[1]]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 64,
    slug: "combinations",
    title: "Combinations",
    difficulty: "medium",
    category: "backtracking",
    description: `Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You can return the answer in any order.`,
    examples: [
      {
        input: "n = 4, k = 2",
        output: "[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]",
      },
    ],
    constraints: ["1 <= n <= 20", "1 <= k <= n"],
    hints: [
      "Start from an index so combinations stay in increasing order (no duplicates).",
      "Stop a branch when current length is k.",
    ],
    approach: `Backtracking from a start index, always appending values > last chosen.`,
    starterCode: `def combine(n, k):
    # Write your code here
    pass
`,
    solutionCode: `def combine(n, k):
    result = []
    def backtrack(start, current):
        if len(current) == k:
            result.append(current[:])
            return
        for i in range(start, n + 1):
            current.append(i)
            backtrack(i + 1, current)
            current.pop()
    backtrack(1, [])
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `_got = combine(4, 2)
_norm = lambda xs: sorted(tuple(x) for x in xs)
assert _norm(_got) == _norm([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]])`,
      },
      {
        kind: "custom",
        label: "n = k = 1",
        code: `assert combine(1, 1) == [[1]]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 65,
    slug: "letter-combinations-of-a-phone-number",
    title: "Letter Combinations of a Phone Number",
    difficulty: "medium",
    category: "backtracking",
    description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

The mapping of digits to letters is the same as on telephone buttons:

2: abc, 3: def, 4: ghi, 5: jkl, 6: mno, 7: pqrs, 8: tuv, 9: wxyz`,
    examples: [
      {
        input: 'digits = "23"',
        output: '["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]',
      },
    ],
    constraints: ["0 <= len(digits) <= 4", "digits[i] is in ['2', '9']"],
    hints: [
      "If digits is empty, return [].",
      "Backtrack over the letters of the current digit.",
    ],
    approach: `DFS: at index i append each mapped letter and recurse to i+1.`,
    starterCode: `def letterCombinations(digits):
    # Write your code here
    pass
`,
    solutionCode: `def letterCombinations(digits):
    if not digits:
        return []
    mapping = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz",
    }
    result = []
    def backtrack(index, current):
        if index == len(digits):
            result.append(current)
            return
        for letter in mapping[digits[index]]:
            backtrack(index + 1, current + letter)
    backtrack(0, "")
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `assert sorted(letterCombinations("23")) == sorted(["ad","ae","af","bd","be","bf","cd","ce","cf"])`,
      },
      { label: "Empty", call: 'letterCombinations("")', expected: "[]" },
    ],
  }),

  buildCodingProblem({
    order: 66,
    slug: "n-queens",
    title: "N-Queens",
    difficulty: "hard",
    category: "backtracking",
    description: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.`,
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      },
    ],
    constraints: ["1 <= n <= 9"],
    hints: [
      "Place one queen per row.",
      "A column, and both diagonals, can hold at most one queen.",
      "Backtrack when a placement is unsafe.",
    ],
    approach: `Row-by-row backtracking with column and diagonal occupancy checks.`,
    starterCode: `def solveNQueens(n):
    # Write your code here
    pass
`,
    solutionCode: `def solveNQueens(n):
    result = []
    board = ["." * n for _ in range(n)]
    def is_safe(row, col):
        for i in range(row):
            if board[i][col] == "Q":
                return False
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == "Q":
                return False
            i -= 1
            j -= 1
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == "Q":
                return False
            i -= 1
            j += 1
        return True
    def backtrack(row):
        if row == n:
            result.append(board[:])
            return
        for col in range(n):
            if is_safe(row, col):
                board_list = list(board[row])
                board_list[col] = "Q"
                board[row] = "".join(board_list)
                backtrack(row + 1)
                board_list[col] = "."
                board[row] = "".join(board_list)
    backtrack(0)
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "n = 4",
        code: `_got = solveNQueens(4)
_exp = [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
assert sorted("".join(b) for b in _got) == sorted("".join(b) for b in _exp)`,
      },
      {
        kind: "custom",
        label: "n = 1",
        code: `assert solveNQueens(1) == [["Q"]]`,
      },
    ],
  }),
];
