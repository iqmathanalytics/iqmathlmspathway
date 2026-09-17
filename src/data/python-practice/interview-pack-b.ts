import { LIST_HELPERS, LIST_NODE_STARTER } from "./helpers";
import { buildCodingProblem } from "./helpers";

export const interviewPackProblemsB = [
  buildCodingProblem({
    order: 90,
    slug: "word-search-ii",
    title: "Word Search II",
    difficulty: "hard",
    category: "backtracking",
    description: `Given an m×n board and a list of words, return all words that can be formed by sequentially adjacent (4-dir) cells. A cell may not be reused in the same word.`,
    examples: [
      {
        input: 'board = [["a","b"],["c","d"]], words = ["ab","ac","db","abcd"]',
        output: '["ab","ac","db"]',
        explanation:
          "ab, ac, and db are 4-direction paths. abcd is impossible: b and c are only diagonal neighbors.",
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
        label: "2x2",
        code: `_got = sorted(findWords([["a","b"],["c","d"]], ["ab","ac","db","abcd"]))
assert _got == ["ab","ac","db"], f"got {_got!r}"`,
      },
      { kind: "custom", label: "Single", code: 'assert findWords([["z"]], ["z","y"]) == ["z"]' },
      { kind: "custom", label: "None", code: 'assert findWords([["a","b"]], ["cd"]) == []' },
    ],
  }),

  buildCodingProblem({
    order: 91,
    slug: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "hard",
    category: "graphs",
    description: `You receive a list of words sorted lexicographically in an alien language that uses English letters. Derive a valid letter order. Return "" if the order is invalid.`,
    examples: [
      { input: 'words = ["abc","abd"]', output: '"abcd"' },
      { input: 'words = ["abc","ab"]', output: '""' },
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
      { label: "c before d", call: 'alienOrder(["abc","abd"])', expected: '"abcd"' },
      { label: "Invalid prefix", call: 'alienOrder(["abc","ab"])', expected: '""' },
      { label: "Single letter", call: 'alienOrder(["z","z"])', expected: '"z"' },
    ],
  }),

  buildCodingProblem({
    order: 92,
    slug: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    difficulty: "medium",
    category: "intervals",
    description: `Given meeting intervals [start, end], return the minimum number of conference rooms required.`,
    examples: [
      { input: "intervals = [[1,5],[8,9],[8,9]]", output: "2" },
      { input: "intervals = [[1,2],[2,3]]", output: "1" },
    ],
    constraints: ["0 <= intervals.length <= 10^4"],
    hints: ["Sort starts and ends separately."],
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
      { label: "Same start", call: "minMeetingRooms([[1,5],[8,9],[8,9]])", expected: "2" },
      { label: "Touching", call: "minMeetingRooms([[1,2],[2,3]])", expected: "1" },
      { label: "Nested", call: "minMeetingRooms([[1,10],[2,3],[4,5]])", expected: "2" },
    ],
  }),

  buildCodingProblem({
    order: 93,
    slug: "intersection-of-two-linked-lists",
    title: "Intersection of Two Linked Lists",
    difficulty: "easy",
    category: "linked-lists",
    description: `Return the node at which two singly linked lists intersect, or None if they do not.`,
    examples: [{ input: "listA = [1,9,1,2,4], listB = [3,2,4]", output: "node 2" }],
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
shared = _list_from_vals([2,4])
a = _attach(_list_from_vals([1,9,1]), shared)
b = _attach(_list_from_vals([3]), shared)
assert getIntersectionNode(a, b) is shared`,
      },
      {
        kind: "custom",
        label: "No intersection",
        code: `${LIST_HELPERS}
assert getIntersectionNode(_list_from_vals([1,2]), _list_from_vals([3,4])) is None`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `${LIST_HELPERS}
assert getIntersectionNode(None, _list_from_vals([7])) is None`,
      },
    ],
  }),

  buildCodingProblem({
    order: 94,
    slug: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "easy",
    category: "strings",
    description: `Return the longest common prefix among an array of strings, or "" if there is none.`,
    examples: [
      { input: 'strs = ["interview","internet","internal"]', output: '"inter"' },
      { input: 'strs = ["car","dog"]', output: '""' },
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
      { label: "inter", call: 'longestCommonPrefix(["interview","internet","internal"])', expected: '"inter"' },
      { label: "None", call: 'longestCommonPrefix(["car","dog"])', expected: '""' },
      { label: "Identical", call: 'longestCommonPrefix(["hi","hi"])', expected: '"hi"' },
    ],
  }),

  buildCodingProblem({
    order: 95,
    slug: "decode-ways",
    title: "Decode Ways",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `A mapping 'A'→"1" … 'Z'→"26" encodes messages. Given a digit string, return how many ways it can be decoded.`,
    examples: [
      { input: 's = "10"', output: "1" },
      { input: 's = "27"', output: "1" },
      { input: 's = "2101"', output: "1" },
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
      { label: "10", call: 'numDecodings("10")', expected: "1" },
      { label: "27", call: 'numDecodings("27")', expected: "1" },
      { label: "2101", call: 'numDecodings("2101")', expected: "1" },
    ],
  }),

  buildCodingProblem({
    order: 96,
    slug: "reconstruct-itinerary",
    title: "Reconstruct Itinerary",
    difficulty: "hard",
    category: "graphs",
    description: `Given airline tickets [from, to], reconstruct the itinerary starting at "JFK". If several itineraries exist, return the lexicographically smallest.`,
    examples: [
      {
        input: 'tickets = [["JFK","AAA"],["AAA","JFK"],["JFK","BBB"]]',
        output: '["JFK","AAA","JFK","BBB"]',
      },
    ],
    constraints: ["1 <= tickets.length <= 300"],
    hints: ["Hierholzer’s algorithm.", "Always take the smallest unused destination."],
    approach: "DFS Euler path; append airports after exploring edges, then reverse.",
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
        label: "Lexical AAA first",
        code: `_got = findItinerary([["JFK","AAA"],["AAA","JFK"],["JFK","BBB"]])
assert _got == ["JFK","AAA","JFK","BBB"], f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Direct",
        code: `assert findItinerary([["JFK","SFO"]]) == ["JFK","SFO"]`,
      },
      {
        kind: "custom",
        label: "Loop",
        code: `assert findItinerary([["JFK","A"],["JFK","B"],["B","JFK"]]) == ["JFK","B","JFK","A"]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 97,
    slug: "accounts-merge",
    title: "Accounts Merge",
    difficulty: "hard",
    category: "graphs",
    description: `Each account is [name, email, ...]. Merge accounts that share any email. Return [name, ...sorted emails] per person.`,
    examples: [
      {
        input: '[["Ann","a@x.com","b@x.com"],["Ann","b@x.com","c@x.com"],["Bob","z@x.com"]]',
        output: '[["Ann","a@x.com","b@x.com","c@x.com"],["Bob","z@x.com"]]',
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
        label: "Merge Ann",
        code: `accounts = [
  ["Ann","a@x.com","b@x.com"],
  ["Ann","b@x.com","c@x.com"],
  ["Bob","z@x.com"],
]
_got = sorted([[row[0]] + sorted(row[1:]) for row in accountsMerge(accounts)])
_exp = [["Ann","a@x.com","b@x.com","c@x.com"],["Bob","z@x.com"]]
assert _got == _exp, f"got {_got!r}"`,
      },
      {
        kind: "custom",
        label: "Single",
        code: `assert accountsMerge([["Eve","e@x.com"]]) == [["Eve","e@x.com"]]`,
      },
      {
        kind: "custom",
        label: "Two emails",
        code: `assert accountsMerge([["A","p@x.com","q@x.com"]]) == [["A","p@x.com","q@x.com"]]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 98,
    slug: "different-ways-to-add-parentheses",
    title: "Different Ways to Add Parentheses",
    difficulty: "medium",
    category: "dynamic-programming",
    description: `Given an expression of digits and +, -, *, return every possible result from different parenthesizations.`,
    examples: [
      { input: 'expression = "2*3-4*5"', output: "[-34,-14,-10,-10,10]" },
      { input: 'expression = "11"', output: "[11]" },
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
        label: "2*3-4*5",
        code: `assert sorted(diffWaysToCompute("2*3-4*5")) == [-34, -14, -10, -10, 10]`,
      },
      { kind: "custom", label: "Single", code: 'assert diffWaysToCompute("11") == [11]' },
      {
        kind: "custom",
        label: "Plus",
        code: `assert sorted(diffWaysToCompute("1+1+1")) == [3, 3]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 99,
    slug: "wildcard-matching",
    title: "Wildcard Matching",
    difficulty: "hard",
    category: "dynamic-programming",
    description: `Implement wildcard matching: \`?\` matches one character, \`*\` matches any sequence (including empty).`,
    examples: [
      { input: 's = "adceb", p = "a*b"', output: "True" },
      { input: 's = "acdcb", p = "a*c?b"', output: "False" },
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
      { label: "Star middle", call: 'isMatch("adceb", "a*b")', expected: "True" },
      { label: "No match", call: 'isMatch("acdcb", "a*c?b")', expected: "False" },
      { label: "Empty star", call: 'isMatch("", "*")', expected: "True" },
    ],
  }),

  buildCodingProblem({
    order: 100,
    slug: "sum-of-two-integers",
    title: "Sum of Two Integers",
    difficulty: "easy",
    category: "bit-manipulation",
    description: `Return a + b without using the \`+\` or \`-\` operators.`,
    examples: [
      { input: "a = 5, b = 7", output: "12" },
      { input: "a = -3, b = 8", output: "5" },
      { input: "a = -7, b = -3", output: "-10" },
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
      { label: "Positive", call: "getSum(5, 7)", expected: "12" },
      { label: "Mixed", call: "getSum(-3, 8)", expected: "5" },
      { label: "Both negative", call: "getSum(-7, -3)", expected: "-10" },
    ],
  }),

  buildCodingProblem({
    order: 101,
    slug: "fraction-to-recurring-decimal",
    title: "Fraction to Recurring Decimal",
    difficulty: "hard",
    category: "hash-maps",
    description: `Convert numerator/denominator to a decimal string. Enclose a repeating fractional part in parentheses.`,
    examples: [
      { input: "numerator = 2, denominator = 1", output: '"2"' },
      { input: "numerator = 1, denominator = 3", output: '"0.(3)"' },
      { input: "numerator = 2, denominator = 3", output: '"0.(6)"' },
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
      { label: "Integer", call: "fractionToDecimal(2, 1)", expected: '"2"' },
      { label: "One third", call: "fractionToDecimal(1, 3)", expected: '"0.(3)"' },
      { label: "Two thirds", call: "fractionToDecimal(2, 3)", expected: '"0.(6)"' },
    ],
  }),
];
