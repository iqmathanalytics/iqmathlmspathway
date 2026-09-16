import {
  LIST_HELPERS,
  LIST_NODE_STARTER,
} from "@/data/python-practice/helpers";
import { buildPapcProblem } from "./helpers";

/** PAPC exam bank 26–50. IDs are papc-<slug>. */
export const papcQuizBankPart2 = [
  buildPapcProblem({
    order: 26,
    slug: "permutations",
    title: "Permutations",
    difficulty: "medium",
    category: "backtracking",
    description: `Given an array of distinct integers, return all possible permutations. You may return them in any order.`,
    examples: [
      { input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
      { input: "nums = [0,1]", output: "[[0,1],[1,0]]" },
    ],
    constraints: ["1 <= nums.length <= 6"],
    hints: ["Backtrack; track which indices are used."],
    approach: "Build a path; skip used indices; snapshot when the path is complete.",
    starterCode: `def permute(nums):
    pass
`,
    solutionCode: `def permute(nums):
    out = []
    def dfs(path, used):
        if len(path) == len(nums):
            out.append(path[:])
            return
        for i, x in enumerate(nums):
            if i in used:
                continue
            used.add(i)
            path.append(x)
            dfs(path, used)
            path.pop()
            used.remove(i)
    dfs([], set())
    return out
`,
    tests: [
      {
        kind: "custom",
        label: "Three",
        code: `_got = sorted(permute([1,2,3]))
_exp = sorted([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
assert _got == _exp, f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Two",
        code: `assert sorted(permute([0,1])) == [[0,1],[1,0]]`,
      },
      { kind: "custom", label: "Single", code: "assert permute([1]) == [[1]]" },
    ],
  }),

  buildPapcProblem({
    order: 27,
    slug: "n-queens",
    title: "N-Queens",
    difficulty: "hard",
    category: "backtracking",
    description: `Place n queens on an n×n board so that no two queens attack each other. Return all distinct board configurations.`,
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
      },
    ],
    constraints: ["1 <= n <= 9"],
    hints: ["Place row by row.", "Track columns and both diagonals."],
    approach: "Backtrack; skip attacked columns and diagonals (row-col, row+col).",
    starterCode: `def solveNQueens(n):
    pass
`,
    solutionCode: `def solveNQueens(n):
    result = []
    cols, diag1, diag2 = set(), set(), set()
    board = []
    def backtrack(row):
        if row == n:
            result.append(board[:])
            return
        for col in range(n):
            d1, d2 = row - col, row + col
            if col in cols or d1 in diag1 or d2 in diag2:
                continue
            board.append("." * col + "Q" + "." * (n - col - 1))
            cols.add(col)
            diag1.add(d1)
            diag2.add(d2)
            backtrack(row + 1)
            board.pop()
            cols.remove(col)
            diag1.remove(d1)
            diag2.remove(d2)
    backtrack(0)
    return result
`,
    tests: [
      {
        kind: "custom",
        label: "n=4",
        code: `_got = sorted(solveNQueens(4))
_exp = sorted([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]])
assert _got == _exp, f"got {_got!r}"`,
      },
      { kind: "custom", label: "n=1", code: 'assert solveNQueens(1) == [["Q"]]' },
      { kind: "custom", label: "n=2 none", code: "assert solveNQueens(2) == []" },
    ],
  }),

  buildPapcProblem({
    order: 28,
    slug: "implement-trie",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "medium",
    category: "strings",
    description: `Implement a trie with \`insert\`, \`search\`, and \`startsWith\`.`,
    examples: [
      {
        input: 'insert("apple"); search("apple"); search("app"); startsWith("app")',
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
        label: "Apple",
        code: `t = Trie()
t.insert("apple")
assert t.search("apple") is True
assert t.search("app") is False
assert t.startsWith("app") is True
t.insert("app")
assert t.search("app") is True`,
      },
      {
        kind: "custom",
        label: "Missing",
        code: `t = Trie()
t.insert("hello")
assert t.search("hell") is False
assert t.startsWith("hell") is True`,
      },
      {
        kind: "custom",
        label: "Empty trie",
        code: `t = Trie()
assert t.search("a") is False
assert t.startsWith("a") is False`,
      },
    ],
  }),

  buildPapcProblem({
    order: 29,
    slug: "word-search-ii",
    title: "Word Search II",
    difficulty: "hard",
    category: "backtracking",
    description: `Given an m×n board and a list of words, return all words that can be formed by sequentially adjacent (4-dir) cells. A cell may not be reused in the same word.`,
    examples: [
      {
        input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
      },
    ],
    constraints: ["1 <= m, n <= 12"],
    hints: ["Build a trie of the words.", "DFS from every cell, pruning with the trie."],
    approach: "Trie + DFS; mark visited cells; collect a word once then clear it.",
    starterCode: `def findWords(board, words):
    pass
`,
    solutionCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None

def findWords(board, words):
    root = TrieNode()
    for word in words:
        node = root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.word = word
    found = []
    rows, cols = len(board), len(board[0])
    def dfs(i, j, node):
        ch = board[i][j]
        if ch not in node.children:
            return
        nxt = node.children[ch]
        if nxt.word:
            found.append(nxt.word)
            nxt.word = None
        board[i][j] = "#"
        for di, dj in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            ni, nj = i + di, j + dj
            if 0 <= ni < rows and 0 <= nj < cols and board[ni][nj] != "#":
                dfs(ni, nj, nxt)
        board[i][j] = ch
    for i in range(rows):
        for j in range(cols):
            dfs(i, j, root)
    return found
`,
    tests: [
      {
        kind: "custom",
        label: "Classic",
        code: `board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
_got = sorted(findWords(board, ["oath","pea","eat","rain"]))
assert _got == ["eat","oath"], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Single letter",
        code: `assert findWords([["a"]], ["a"]) == ["a"]`,
      },
      {
        kind: "custom",
        label: "None",
        code: `assert findWords([["a","b"],["c","d"]], ["abcb"]) == []`,
      },
    ],
  }),

  buildPapcProblem({
    order: 30,
    slug: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "hard",
    category: "graphs",
    description: `You receive a list of words sorted lexicographically in an alien language that uses English letters. Derive a valid letter order. Return "" if the order is invalid.`,
    examples: [
      { input: 'words = ["wrt","wrf","er","ett","rftt"]', output: '"wertf"' },
      { input: 'words = ["z","x"]', output: '"zx"' },
    ],
    constraints: ["1 <= words.length <= 100"],
    hints: ["Compare adjacent words to build edges.", "Topological sort."],
    approach: "First difference between adjacent words is an ordering edge. Kahn’s algorithm.",
    starterCode: `def alienOrder(words):
    pass
`,
    solutionCode: `from collections import defaultdict, deque

def alienOrder(words):
    graph = defaultdict(set)
    indeg = {c: 0 for w in words for c in w}
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i + 1]
        if len(w1) > len(w2) and w1.startswith(w2):
            return ""
        for a, b in zip(w1, w2):
            if a != b:
                if b not in graph[a]:
                    graph[a].add(b)
                    indeg[b] += 1
                break
    q = deque(sorted(c for c in indeg if indeg[c] == 0))
    order = []
    while q:
        c = q.popleft()
        order.append(c)
        for n in sorted(graph[c]):
            indeg[n] -= 1
            if indeg[n] == 0:
                q.append(n)
    return "".join(order) if len(order) == len(indeg) else ""
`,
    tests: [
      {
        label: "Classic",
        call: 'alienOrder(["wrt","wrf","er","ett","rftt"])',
        expected: '"wertf"',
      },
      { label: "Two letters", call: 'alienOrder(["z","x"])', expected: '"zx"' },
      { label: "Cycle", call: 'alienOrder(["z","x","z"])', expected: '""' },
    ],
  }),

  buildPapcProblem({
    order: 31,
    slug: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    difficulty: "medium",
    category: "intervals",
    description: `Given meeting intervals [start, end], return the minimum number of conference rooms required.`,
    examples: [
      { input: "intervals = [[0,30],[5,10],[15,20]]", output: "2" },
      { input: "intervals = [[7,10],[2,4]]", output: "1" },
    ],
    constraints: ["0 <= intervals.length <= 10^4"],
    hints: ["Sort starts and ends separately.", "Scan starts; a room frees when start >= next end."],
    approach: "Chronological sweep of start/end events.",
    starterCode: `def minMeetingRooms(intervals):
    pass
`,
    solutionCode: `def minMeetingRooms(intervals):
    if not intervals:
        return 0
    starts = sorted(i[0] for i in intervals)
    ends = sorted(i[1] for i in intervals)
    rooms = 0
    end_i = 0
    for start in starts:
        if start < ends[end_i]:
            rooms += 1
        else:
            end_i += 1
    return rooms
`,
    tests: [
      { label: "Overlap", call: "minMeetingRooms([[0,30],[5,10],[15,20]])", expected: "2" },
      { label: "No overlap", call: "minMeetingRooms([[7,10],[2,4]])", expected: "1" },
      { label: "Empty", call: "minMeetingRooms([])", expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 32,
    slug: "intersection-linked-lists",
    title: "Intersection of Two Linked Lists",
    difficulty: "easy",
    category: "linked-lists",
    description: `Return the node at which two singly linked lists intersect, or None if they do not.`,
    examples: [{ input: "listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]", output: "node 8" }],
    constraints: ["0 <= m, n <= 3 * 10^4"],
    hints: ["Two pointers; switch heads when a pointer hits None."],
    approach: "Walk both lists; after switching, they meet at the intersection (or None).",
    starterCode: `${LIST_NODE_STARTER}def getIntersectionNode(headA, headB):
    pass
`,
    solutionCode: `def getIntersectionNode(headA, headB):
    if not headA or not headB:
        return None
    a, b = headA, headB
    while a is not b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a
`,
    tests: [
      {
        kind: "custom",
        label: "Shared tail",
        code: `${LIST_HELPERS}
def _attach(head, tail):
    if not head:
        return tail
    cur = head
    while cur.next:
        cur = cur.next
    cur.next = tail
    return head
shared = _list_from_vals([8,4,5])
a = _attach(_list_from_vals([4,1]), shared)
b = _attach(_list_from_vals([5,6,1]), shared)
assert getIntersectionNode(a, b) is shared`,
      },
      {
        kind: "custom",
        label: "No intersection",
        code: `${LIST_HELPERS}
assert getIntersectionNode(_list_from_vals([2,6,4]), _list_from_vals([1,5])) is None`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `${LIST_HELPERS}
assert getIntersectionNode(None, _list_from_vals([1])) is None`,
      },
    ],
  }),

  buildPapcProblem({
    order: 33,
    slug: "search-rotated-sorted",
    title: "Search in Rotated Sorted Array",
    difficulty: "medium",
    category: "binary-search",
    description: `\`nums\` is a rotated sorted array of distinct values. Return the index of \`target\`, or -1 if it is missing.`,
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
    ],
    constraints: ["1 <= nums.length <= 5000", "all values unique"],
    hints: ["One half is always sorted.", "Binary search into the half that can contain target."],
    approach: "If left half is sorted, check whether target lies there; otherwise search the right.",
    starterCode: `def search(nums, target):
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
      { label: "Found", call: "search([4,5,6,7,0,1,2], 0)", expected: "4" },
      { label: "Missing", call: "search([4,5,6,7,0,1,2], 3)", expected: "-1" },
      { label: "Single", call: "search([1], 0)", expected: "-1" },
    ],
  }),

  buildPapcProblem({
    order: 34,
    slug: "majority-element",
    title: "Majority Element",
    difficulty: "easy",
    category: "arrays",
    description: `Return the majority element — the value that appears more than ⌊n / 2⌋ times. It is guaranteed to exist.`,
    examples: [
      { input: "nums = [3,2,3]", output: "3" },
      { input: "nums = [2,2,1,1,1,2,2]", output: "2" },
    ],
    constraints: ["1 <= n <= 5 * 10^4"],
    hints: ["Boyer–Moore voting."],
    approach: "Track a candidate and a count; reset when count hits 0.",
    starterCode: `def majorityElement(nums):
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
      { label: "Simple", call: "majorityElement([3,2,3])", expected: "3" },
      { label: "Longer", call: "majorityElement([2,2,1,1,1,2,2])", expected: "2" },
      { label: "All same", call: "majorityElement([1,1,1])", expected: "1" },
    ],
  }),

  buildPapcProblem({
    order: 35,
    slug: "product-except-self",
    title: "Product of Array Except Self",
    difficulty: "medium",
    category: "arrays",
    description: `Return an array where answer[i] is the product of all elements except nums[i]. O(n) time, no division.`,
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
      { input: "nums = [-1,1,0,-3,3]", output: "[0,0,9,0,0]" },
    ],
    constraints: ["2 <= nums.length <= 10^5"],
    hints: ["Prefix products, then multiply by a suffix running product."],
    approach: "Left pass fills prefixes; right pass multiplies suffixes in place.",
    starterCode: `def productExceptSelf(nums):
    pass
`,
    solutionCode: `def productExceptSelf(nums):
    n = len(nums)
    answer = [1] * n
    for i in range(1, n):
        answer[i] = answer[i - 1] * nums[i - 1]
    suffix = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= suffix
        suffix *= nums[i]
    return answer
`,
    tests: [
      { label: "Classic", call: "productExceptSelf([1,2,3,4])", expected: "[24, 12, 8, 6]" },
      { label: "Zero", call: "productExceptSelf([-1,1,0,-3,3])", expected: "[0, 0, 9, 0, 0]" },
      { label: "Two", call: "productExceptSelf([2,3])", expected: "[3, 2]" },
    ],
  }),

  buildPapcProblem({
    order: 36,
    slug: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "hard",
    category: "arrays",
    description: `Find the smallest missing positive integer in an unsorted array. Target O(n) time and O(1) extra space.`,
    examples: [
      { input: "nums = [1,2,0]", output: "3" },
      { input: "nums = [3,4,-1,1]", output: "2" },
      { input: "nums = [7,8,9,11,12]", output: "1" },
    ],
    constraints: ["1 <= nums.length <= 5 * 10^5"],
    hints: ["Place value i at index i-1.", "Scan for the first mismatch."],
    approach: "Cycle-sort positives into place, then return the first hole (or n+1).",
    starterCode: `def firstMissingPositive(nums):
    pass
`,
    solutionCode: `def firstMissingPositive(nums):
    n = len(nums)
    for i in range(n):
        while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
            j = nums[i] - 1
            nums[i], nums[j] = nums[j], nums[i]
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    return n + 1
`,
    tests: [
      { label: "Missing 3", call: "firstMissingPositive([1,2,0])", expected: "3" },
      { label: "Missing 2", call: "firstMissingPositive([3,4,-1,1])", expected: "2" },
      { label: "Missing 1", call: "firstMissingPositive([7,8,9,11,12])", expected: "1" },
    ],
  }),

  buildPapcProblem({
    order: 37,
    slug: "kth-largest",
    title: "Kth Largest Element in an Array",
    difficulty: "medium",
    category: "heap",
    description: `Return the kth largest element in \`nums\` (1-indexed from the largest).`,
    examples: [
      { input: "nums = [3,2,1,5,6,4], k = 2", output: "5" },
      { input: "nums = [3,2,3,1,2,4,5,5,6], k = 4", output: "4" },
    ],
    constraints: ["1 <= k <= nums.length <= 10^4"],
    hints: ["Min-heap of size k."],
    approach: "Keep the k largest; the heap root is the kth largest.",
    starterCode: `def findKthLargest(nums, k):
    pass
`,
    solutionCode: `import heapq

def findKthLargest(nums, k):
    heap = nums[:k]
    heapq.heapify(heap)
    for x in nums[k:]:
        if x > heap[0]:
            heapq.heapreplace(heap, x)
    return heap[0]
`,
    tests: [
      { label: "Second", call: "findKthLargest([3,2,1,5,6,4], 2)", expected: "5" },
      { label: "Fourth", call: "findKthLargest([3,2,3,1,2,4,5,5,6], 4)", expected: "4" },
      { label: "Largest", call: "findKthLargest([1], 1)", expected: "1" },
    ],
  }),

  buildPapcProblem({
    order: 38,
    slug: "rotate-array",
    title: "Rotate Array",
    difficulty: "medium",
    category: "arrays",
    description: `Rotate \`nums\` to the right by \`k\` steps in place. Do not return anything.`,
    examples: [
      { input: "nums = [1,2,3,4,5,6,7], k = 3", output: "[5,6,7,1,2,3,4]" },
      { input: "nums = [-1,-100,3,99], k = 2", output: "[3,99,-1,-100]" },
    ],
    constraints: ["1 <= nums.length <= 10^5"],
    hints: ["Reverse the whole array, then reverse each part."],
    approach: "k %= n; reverse all, reverse first k, reverse the rest.",
    starterCode: `def rotate(nums, k):
    pass
`,
    solutionCode: `def rotate(nums, k):
    n = len(nums)
    k %= n
    def rev(lo, hi):
        while lo < hi:
            nums[lo], nums[hi] = nums[hi], nums[lo]
            lo += 1
            hi -= 1
    rev(0, n - 1)
    rev(0, k - 1)
    rev(k, n - 1)
`,
    tests: [
      {
        kind: "custom",
        label: "k=3",
        code: `nums = [1,2,3,4,5,6,7]
rotate(nums, 3)
assert nums == [5,6,7,1,2,3,4], f"got {nums!r}"`,
      },
      {
        kind: "custom",
        label: "k=2",
        code: `nums = [-1,-100,3,99]
rotate(nums, 2)
assert nums == [3,99,-1,-100], f"got {nums!r}"`,
      },
      {
        kind: "custom",
        label: "k wraps",
        code: `nums = [1,2]
rotate(nums, 3)
assert nums == [2,1], f"got {nums!r}"`,
      },
    ],
  }),

  buildPapcProblem({
    order: 39,
    slug: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "easy",
    category: "strings",
    description: `Return true if \`s\` is a palindrome after keeping only alphanumeric characters and ignoring case.`,
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "True" },
      { input: 's = "race a car"', output: "False" },
    ],
    constraints: ["1 <= s.length <= 2 * 10^5"],
    hints: ["Two pointers; skip non-alphanumeric."],
    approach: "Compare lowercase alphanumerics from both ends.",
    starterCode: `def isPalindrome(s):
    pass
`,
    solutionCode: `def isPalindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True
`,
    tests: [
      { label: "Panama", call: 'isPalindrome("A man, a plan, a canal: Panama")', expected: "True" },
      { label: "Race", call: 'isPalindrome("race a car")', expected: "False" },
      { label: "Empty-ish", call: 'isPalindrome(" ")', expected: "True" },
    ],
  }),

  buildPapcProblem({
    order: 40,
    slug: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "easy",
    category: "strings",
    description: `Return the longest common prefix among an array of strings, or "" if there is none.`,
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    constraints: ["1 <= strs.length <= 200"],
    hints: ["Compare character by character across strings."],
    approach: "Walk indices of the first string; stop at the first mismatch.",
    starterCode: `def longestCommonPrefix(strs):
    pass
`,
    solutionCode: `def longestCommonPrefix(strs):
    if not strs:
        return ""
    for i, ch in enumerate(strs[0]):
        for s in strs[1:]:
            if i >= len(s) or s[i] != ch:
                return strs[0][:i]
    return strs[0]
`,
    tests: [
      { label: "fl", call: 'longestCommonPrefix(["flower","flow","flight"])', expected: '"fl"' },
      { label: "None", call: 'longestCommonPrefix(["dog","racecar","car"])', expected: '""' },
      { label: "Single", call: 'longestCommonPrefix(["a"])', expected: '"a"' },
    ],
  }),

  buildPapcProblem({
    order: 41,
    slug: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "medium",
    category: "hash-maps",
    description: `Group the strings that are anagrams of each other. Return the groups in any order.`,
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
    ],
    constraints: ["1 <= strs.length <= 10^4"],
    hints: ["Use the sorted word as a hash key."],
    approach: "Bucket words by sorted characters.",
    starterCode: `def groupAnagrams(strs):
    pass
`,
    solutionCode: `from collections import defaultdict

def groupAnagrams(strs):
    buckets = defaultdict(list)
    for word in strs:
        buckets["".join(sorted(word))].append(word)
    return list(buckets.values())
`,
    tests: [
      {
        kind: "custom",
        label: "Classic",
        code: `_got = sorted(sorted(g) for g in groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
assert _got == [["ate","eat","tea"],["bat"],["nat","tan"]], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Empty word",
        code: `assert groupAnagrams([""]) == [[""]]`,
      },
      {
        kind: "custom",
        label: "One",
        code: `assert groupAnagrams(["a"]) == [["a"]]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 42,
    slug: "isomorphic-strings",
    title: "Isomorphic Strings",
    difficulty: "easy",
    category: "hash-maps",
    description: `Return true if \`s\` and \`t\` are isomorphic: characters in s can be replaced to get t, with a one-to-one mapping.`,
    examples: [
      { input: 's = "egg", t = "add"', output: "True" },
      { input: 's = "badc", t = "baba"', output: "False" },
    ],
    constraints: ["1 <= s.length <= 5 * 10^4", "t.length == s.length"],
    hints: ["Map both directions so two letters cannot collapse to one."],
    approach: "Maintain s→t and t→s maps; reject on conflict.",
    starterCode: `def isIsomorphic(s, t):
    pass
`,
    solutionCode: `def isIsomorphic(s, t):
    s_to_t, t_to_s = {}, {}
    for a, b in zip(s, t):
        if s_to_t.get(a, b) != b or t_to_s.get(b, a) != a:
            return False
        s_to_t[a] = b
        t_to_s[b] = a
    return True
`,
    tests: [
      { label: "egg/add", call: 'isIsomorphic("egg", "add")', expected: "True" },
      { label: "badc/baba", call: 'isIsomorphic("badc", "baba")', expected: "False" },
      { label: "paper/title", call: 'isIsomorphic("paper", "title")', expected: "True" },
    ],
  }),

  buildPapcProblem({
    order: 43,
    slug: "min-window-substring",
    title: "Minimum Window Substring",
    difficulty: "hard",
    category: "strings",
    description: `Return the smallest substring of \`s\` that covers every character in \`t\` (including duplicates). Return "" if none exists.`,
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "aa"', output: '""' },
    ],
    constraints: ["1 <= m, n <= 10^5"],
    hints: ["Sliding window + need/have counts."],
    approach: "Expand until all required chars are formed, then shrink from the left.",
    starterCode: `def minWindow(s, t):
    pass
`,
    solutionCode: `def minWindow(s, t):
    if not s or not t:
        return ""
    need = {}
    for ch in t:
        need[ch] = need.get(ch, 0) + 1
    missing = len(need)
    window = {}
    best = (float("inf"), 0, 0)
    left = 0
    for right, ch in enumerate(s):
        window[ch] = window.get(ch, 0) + 1
        if ch in need and window[ch] == need[ch]:
            missing -= 1
        while missing == 0 and left <= right:
            if right - left + 1 < best[0]:
                best = (right - left + 1, left, right)
            left_ch = s[left]
            window[left_ch] -= 1
            if left_ch in need and window[left_ch] < need[left_ch]:
                missing += 1
            left += 1
    return "" if best[0] == float("inf") else s[best[1] : best[2] + 1]
`,
    tests: [
      { label: "BANC", call: 'minWindow("ADOBECODEBANC", "ABC")', expected: '"BANC"' },
      { label: "Impossible", call: 'minWindow("a", "aa")', expected: '""' },
      { label: "Same", call: 'minWindow("a", "a")', expected: '"a"' },
    ],
  }),

  buildPapcProblem({
    order: 44,
    slug: "decode-ways",
    title: "Decode Ways",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `A mapping 'A'→"1" … 'Z'→"26" encodes messages. Given a digit string, return how many ways it can be decoded.`,
    examples: [
      { input: 's = "12"', output: "2", explanation: "AB or L" },
      { input: 's = "226"', output: "3" },
    ],
    constraints: ["1 <= s.length <= 100"],
    hints: ["dp[i] from one-digit and two-digit takes.", "Leading zeros are invalid."],
    approach: "Linear DP: add dp[i-1] if s[i] != 0; add dp[i-2] if 10..26.",
    starterCode: `def numDecodings(s):
    pass
`,
    solutionCode: `def numDecodings(s):
    if not s or s[0] == "0":
        return 0
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = dp[1] = 1
    for i in range(2, n + 1):
        if s[i - 1] != "0":
            dp[i] += dp[i - 1]
        two = int(s[i - 2 : i])
        if 10 <= two <= 26:
            dp[i] += dp[i - 2]
    return dp[n]
`,
    tests: [
      { label: "12", call: 'numDecodings("12")', expected: "2" },
      { label: "226", call: 'numDecodings("226")', expected: "3" },
      { label: "Zero", call: 'numDecodings("06")', expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 45,
    slug: "reconstruct-itinerary",
    title: "Reconstruct Itinerary",
    difficulty: "hard",
    category: "graphs",
    description: `Given airline tickets [from, to], reconstruct the itinerary starting at "JFK". If several itineraries exist, return the lexicographically smallest.`,
    examples: [
      {
        input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
        output: '["JFK","MUC","LHR","SFO","SJC"]',
      },
    ],
    constraints: ["1 <= tickets.length <= 300"],
    hints: ["Hierholzer’s algorithm on a multigraph.", "Always take the smallest unused destination."],
    approach: "DFS Euler path; append airports after exploring edges (post-order), then reverse.",
    starterCode: `def findItinerary(tickets):
    pass
`,
    solutionCode: `from collections import defaultdict

def findItinerary(tickets):
    graph = defaultdict(list)
    for src, dst in sorted(tickets, reverse=True):
        graph[src].append(dst)
    route = []
    def dfs(airport):
        while graph[airport]:
            dfs(graph[airport].pop())
        route.append(airport)
    dfs("JFK")
    return route[::-1]
`,
    tests: [
      {
        kind: "custom",
        label: "Linear",
        code: `_got = findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])
assert _got == ["JFK","MUC","LHR","SFO","SJC"], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Lexical",
        code: `_got = findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])
assert _got == ["JFK","ATL","JFK","SFO","ATL","SFO"], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Two hops",
        code: `assert findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]) == ["JFK","NRT","JFK","KUL"]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 46,
    slug: "accounts-merge",
    title: "Accounts Merge",
    difficulty: "hard",
    category: "graphs",
    description: `Each account is [name, email, ...]. Merge accounts that share any email. Return [name, ...sorted emails] per person.`,
    examples: [
      {
        input: '[["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]',
        output: '[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]',
      },
    ],
    constraints: ["1 <= accounts.length <= 1000"],
    hints: ["Union-Find on emails.", "Group by root, sort emails."],
    approach: "Union emails in the same account; collect components.",
    starterCode: `def accountsMerge(accounts):
    pass
`,
    solutionCode: `def accountsMerge(accounts):
    parent = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(a, b):
        pa, pb = find(a), find(b)
        if pa != pb:
            parent[pa] = pb
    email_name = {}
    for acc in accounts:
        name = acc[0]
        first = acc[1]
        for email in acc[1:]:
            if email not in parent:
                parent[email] = email
            email_name[email] = name
            union(first, email)
    groups = {}
    for email in parent:
        root = find(email)
        groups.setdefault(root, []).append(email)
    return [[email_name[root]] + sorted(emails) for root, emails in groups.items()]
`,
    tests: [
      {
        kind: "custom",
        label: "Merge Johns",
        code: `accounts = [
  ["John","johnsmith@mail.com","john_newyork@mail.com"],
  ["John","johnsmith@mail.com","john00@mail.com"],
  ["Mary","mary@mail.com"],
  ["John","johnnybravo@mail.com"],
]
_got = sorted([[row[0]] + sorted(row[1:]) for row in accountsMerge(accounts)])
_exp = sorted([
  ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
  ["John","johnnybravo@mail.com"],
  ["Mary","mary@mail.com"],
])
assert _got == _exp, f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `assert accountsMerge([["Alice","a@x.com"]]) == [["Alice","a@x.com"]]`,
      },
      {
        kind: "custom",
        label: "Two emails",
        code: `_got = accountsMerge([["A","a@x.com","b@x.com"]])
assert _got == [["A","a@x.com","b@x.com"]]`,
      },
    ],
  }),

  buildPapcProblem({
    order: 47,
    slug: "diff-ways-add-parens",
    title: "Different Ways to Add Parentheses",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given an expression of digits and +, -, *, return every possible result from different parenthesizations.`,
    examples: [
      { input: 'expression = "2-1-1"', output: "[0,2]", explanation: "((2-1)-1)=0, (2-(1-1))=2" },
    ],
    constraints: ["1 <= expression.length <= 20"],
    hints: ["Split at each operator.", "Memoize substring results."],
    approach: "Divide and conquer: compute all left/right values and combine.",
    starterCode: `def diffWaysToCompute(expression):
    pass
`,
    solutionCode: `def diffWaysToCompute(expression):
    memo = {}
    def compute(expr):
        if expr in memo:
            return memo[expr]
        out = []
        for i, ch in enumerate(expr):
            if ch in "+-*":
                left = compute(expr[:i])
                right = compute(expr[i + 1 :])
                for a in left:
                    for b in right:
                        if ch == "+":
                            out.append(a + b)
                        elif ch == "-":
                            out.append(a - b)
                        else:
                            out.append(a * b)
        if not out:
            out = [int(expr)]
        memo[expr] = out
        return out
    return compute(expression)
`,
    tests: [
      {
        kind: "custom",
        label: "2-1-1",
        code: `assert sorted(diffWaysToCompute("2-1-1")) == [0, 2]`,
      },
      {
        kind: "custom",
        label: "2*3-4*5",
        code: `assert sorted(diffWaysToCompute("2*3-4*5")) == [-34, -14, -10, -10, 10]`,
      },
      { kind: "custom", label: "Single", code: "assert diffWaysToCompute(\"11\") == [11]" },
    ],
  }),

  buildPapcProblem({
    order: 48,
    slug: "wildcard-matching",
    title: "Wildcard Matching",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Implement wildcard matching: \`?\` matches one character, \`*\` matches any sequence (including empty).`,
    examples: [
      { input: 's = "aa", p = "a"', output: "False" },
      { input: 's = "aa", p = "*"', output: "True" },
      { input: 's = "cb", p = "?a"', output: "False" },
    ],
    constraints: ["0 <= s.length, p.length <= 2000"],
    hints: ["dp[i][j] = s[:i] matches p[:j].", "* can match empty or one more char."],
    approach: "DP: star takes dp[i-1][j] or dp[i][j-1]; ?/same char takes diagonal.",
    starterCode: `def isMatch(s, p):
    pass
`,
    solutionCode: `def isMatch(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j - 1] == "*":
            dp[0][j] = dp[0][j - 1]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == "*":
                dp[i][j] = dp[i - 1][j] or dp[i][j - 1]
            elif p[j - 1] == "?" or p[j - 1] == s[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]
    return dp[m][n]
`,
    tests: [
      { label: "No match", call: 'isMatch("aa", "a")', expected: "False" },
      { label: "Star", call: 'isMatch("aa", "*")', expected: "True" },
      { label: "Question", call: 'isMatch("cb", "?a")', expected: "False" },
    ],
  }),

  buildPapcProblem({
    order: 49,
    slug: "sum-two-numbers",
    title: "Sum of Two Integers",
    difficulty: "easy",
    category: "bit-manipulation",
    description: `Return a + b without using the \`+\` or \`-\` operators.`,
    examples: [
      { input: "a = 1, b = 1", output: "2" },
      { input: "a = 1, b = 2", output: "3" },
      { input: "a = -1, b = 1", output: "0" },
    ],
    constraints: ["-1000 <= a, b <= 1000"],
    hints: ["XOR is sum without carry.", "AND<<1 is carry."],
    approach: "Repeat until carry is 0, masking to 32 bits so negatives work in Python.",
    starterCode: `def getSum(a, b):
    pass
`,
    solutionCode: `def getSum(a, b):
    mask = 0xFFFFFFFF
    a &= mask
    b &= mask
    while b:
        carry = (a & b) << 1
        a = (a ^ b) & mask
        b = carry & mask
    return a if a <= 0x7FFFFFFF else ~(a ^ mask)
`,
    tests: [
      { label: "1+1", call: "getSum(1, 1)", expected: "2" },
      { label: "1+2", call: "getSum(1, 2)", expected: "3" },
      { label: "Negatives", call: "getSum(-1, 1)", expected: "0" },
    ],
  }),

  buildPapcProblem({
    order: 50,
    slug: "fraction-recurring",
    title: "Fraction to Recurring Decimal",
    difficulty: "hard",
    category: "hash-maps",
    description: `Convert numerator/denominator to a decimal string. Enclose a repeating fractional part in parentheses.`,
    examples: [
      { input: "numerator = 1, denominator = 2", output: '"0.5"' },
      { input: "numerator = 1, denominator = 6", output: '"0.1(6)"' },
      { input: "numerator = 4, denominator = 333", output: '"0.(012)"' },
    ],
    constraints: ["denominator != 0"],
    hints: ["Long division.", "When a remainder repeats, the cycle starts."],
    approach: "Map remainder → index in the fractional digits; insert '(' when it repeats.",
    starterCode: `def fractionToDecimal(numerator, denominator):
    pass
`,
    solutionCode: `def fractionToDecimal(numerator, denominator):
    if numerator == 0:
        return "0"
    parts = []
    if (numerator < 0) ^ (denominator < 0):
        parts.append("-")
    n, d = abs(numerator), abs(denominator)
    parts.append(str(n // d))
    rem = n % d
    if rem == 0:
        return "".join(parts)
    parts.append(".")
    seen = {}
    while rem:
        if rem in seen:
            parts.insert(seen[rem], "(")
            parts.append(")")
            break
        seen[rem] = len(parts)
        rem *= 10
        parts.append(str(rem // d))
        rem %= d
    return "".join(parts)
`,
    tests: [
      { label: "Half", call: "fractionToDecimal(1, 2)", expected: '"0.5"' },
      { label: "Repeating 6", call: "fractionToDecimal(1, 6)", expected: '"0.1(6)"' },
      { label: "Cycle", call: "fractionToDecimal(4, 333)", expected: '"0.(012)"' },
    ],
  }),
];
