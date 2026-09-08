import { buildCodingProblem } from "./helpers";

export const stringProblems = [
  buildCodingProblem({
    order: 16,
    slug: "reverse-string",
    title: "Reverse String",
    difficulty: "easy",
    category: "strings",
    description: `Write a function that reverses a string. The input is given as an array of characters s.

You must modify the input array in-place with O(1) extra memory.`,
    examples: [
      { input: 's = ["h", "e", "l", "l", "o"]', output: '["o", "l", "l", "e", "h"]' },
    ],
    constraints: ["1 <= len(s) <= 10^5"],
    hints: [
      "Use two pointers at both ends.",
      "Swap and move inward until they meet.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Two-pointer swap from the ends toward the middle.`,
    starterCode: `def reverseString(s):
    # Write your code here
    pass
`,
    solutionCode: `def reverseString(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `s = ["h", "e", "l", "l", "o"]\nreverseString(s)\nassert s == ["o", "l", "l", "e", "h"], f"got {s!r}"`,
      },
      {
        kind: "custom",
        label: "Even length",
        code: `s = ["H", "a", "n", "n", "a", "h"]\nreverseString(s)\nassert s == ["h", "a", "n", "n", "a", "H"]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 17,
    slug: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "easy",
    category: "strings",
    description: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Given a string s, return true if it is a palindrome, or false otherwise.`,
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "True",
      },
      { input: 's = "race a car"', output: "False" },
    ],
    constraints: ["1 <= len(s) <= 2 * 10^5"],
    hints: [
      "Two pointers, skip characters that are not alphanumeric.",
      "Compare lowercase letters.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Walk inward from both ends. Skip non-alphanumeric characters and compare case-insensitive values.`,
    starterCode: `def isPalindrome(s):
    # Write your code here
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
      { label: "Classic", call: 'isPalindrome("A man, a plan, a canal: Panama")', expected: "True" },
      { label: "Not palindrome", call: 'isPalindrome("race a car")', expected: "False" },
      { label: "Empty after strip", call: 'isPalindrome(".,")', expected: "True" },
    ],
  }),

  buildCodingProblem({
    order: 18,
    slug: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    category: "strings",
    description: `Given a string s, find the length of the longest substring without repeating characters.`,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc".',
      },
      { input: 's = "bbbbb"', output: "1" },
    ],
    constraints: ["0 <= len(s) <= 5 * 10^4"],
    hints: [
      "Sliding window with a map of last-seen indices.",
      "When a duplicate is inside the window, move left past its previous index.",
      "Time: O(n).",
    ],
    approach: `Maintain a window [left, right] of unique characters. Store last index of each character and jump left when a repeat is found.`,
    starterCode: `def lengthOfLongestSubstring(s):
    # Write your code here
    pass
`,
    solutionCode: `def lengthOfLongestSubstring(s):
    char_map = {}
    max_length = 0
    left = 0
    for right in range(len(s)):
        if s[right] in char_map:
            left = max(left, char_map[s[right]] + 1)
        char_map[s[right]] = right
        max_length = max(max_length, right - left + 1)
    return max_length
`,
    tests: [
      { label: "Example 1", call: 'lengthOfLongestSubstring("abcabcbb")', expected: "3" },
      { label: "All same", call: 'lengthOfLongestSubstring("bbbbb")', expected: "1" },
      { label: "Empty", call: 'lengthOfLongestSubstring("")', expected: "0" },
    ],
  }),

  buildCodingProblem({
    order: 19,
    slug: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "medium",
    category: "strings",
    description: `Given a string s, return the longest palindromic substring in s.

If there are multiple answers of the same length, return any one of them.`,
    examples: [
      { input: 's = "babad"', output: '"bab" or "aba"' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: ["1 <= len(s) <= 1000"],
    hints: [
      "Expand around each center for odd and even length palindromes.",
      "There are 2n - 1 centers.",
      "Time: O(n^2), Space: O(1).",
    ],
    approach: `For every index, expand while the window is a palindrome (odd center and even center). Keep the longest span.`,
    starterCode: `def longestPalindrome(s):
    # Write your code here
    pass
`,
    solutionCode: `def longestPalindrome(s):
    if len(s) < 2:
        return s
    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1, left + 1
    max_len = 0
    start = 0
    for i in range(len(s)):
        len1, start1 = expand_around_center(i, i)
        len2, start2 = expand_around_center(i, i + 1)
        if len1 > max_len:
            max_len = len1
            start = start1
        if len2 > max_len:
            max_len = len2
            start = start2
    return s[start:start + max_len]
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `_got = longestPalindrome("babad")\nassert _got in ("bab", "aba"), f"got {_got!r}"`,
      },
      { label: "Even palindrome", call: 'longestPalindrome("cbbd")', expected: '"bb"' },
      { label: "Single", call: 'longestPalindrome("a")', expected: '"a"' },
    ],
  }),

  buildCodingProblem({
    order: 20,
    slug: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "medium",
    category: "strings",
    description: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.`,
    examples: [
      {
        input: 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
        output: '[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]',
      },
    ],
    constraints: ["1 <= len(strs) <= 10^4", "strs[i] consists of lowercase letters"],
    hints: [
      "Anagrams share the same sorted character key.",
      "Map sorted(s) -> list of original strings.",
      "Time: O(n * k log k) where k is max string length.",
    ],
    approach: `Use the sorted string as a dictionary key and append each word to that bucket. Return the buckets.`,
    starterCode: `def groupAnagrams(strs):
    # Write your code here
    pass
`,
    solutionCode: `def groupAnagrams(strs):
    anagram_map = {}
    for s in strs:
        sorted_s = "".join(sorted(s))
        if sorted_s not in anagram_map:
            anagram_map[sorted_s] = []
        anagram_map[sorted_s].append(s)
    return list(anagram_map.values())
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `_got = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])\n_norm = lambda groups: sorted(tuple(sorted(g)) for g in groups)\nassert _norm(_got) == _norm([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])`,
      },
      {
        kind: "custom",
        label: "Empty string",
        code: `_got = groupAnagrams([""])\nassert _got == [[""]] or _got == [""]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 21,
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "easy",
    category: "strings",
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      { input: 's = "()"', output: "True" },
      { input: 's = "()[]{}"', output: "True" },
      { input: 's = "(]"', output: "False" },
    ],
    constraints: ["1 <= len(s) <= 10^4", "s contains only brackets"],
    hints: [
      "Use a stack of opening brackets.",
      "A closer must match the most recent opener.",
      "The stack must be empty at the end.",
    ],
    approach: `Push opening brackets. On a closer, pop and check the pair. Fail on mismatch or leftover openers.`,
    starterCode: `def isValid(s):
    # Write your code here
    pass
`,
    solutionCode: `def isValid(s):
    stack = []
    pairs = {"(": ")", "{": "}", "[": "]"}
    for char in s:
        if char in pairs:
            stack.append(char)
        else:
            if not stack or pairs[stack.pop()] != char:
                return False
    return len(stack) == 0
`,
    tests: [
      { label: "Simple", call: 'isValid("()")', expected: "True" },
      { label: "Mixed", call: 'isValid("()[]{}")', expected: "True" },
      { label: "Mismatch", call: 'isValid("(]")', expected: "False" },
      { label: "Nested", call: 'isValid("{[]}")', expected: "True" },
    ],
  }),

  buildCodingProblem({
    order: 22,
    slug: "word-pattern",
    title: "Word Pattern",
    difficulty: "easy",
    category: "strings",
    description: `Given a pattern and a string s, find if s follows the same pattern.

Follow means a full match: there is a bijection between each letter in pattern and a non-empty word in s.`,
    examples: [
      { input: 'pattern = "abba", s = "red blue blue red"', output: "True" },
      { input: 'pattern = "abba", s = "red blue blue green"', output: "False" },
    ],
    constraints: ["pattern contains only lowercase letters", "s is words separated by single spaces"],
    hints: [
      "Split s into words. Lengths must match pattern.",
      "Map pattern character -> word AND word -> character.",
      "Reject if either mapping conflicts.",
    ],
    approach: `Two dictionaries enforce a one-to-one mapping between pattern characters and words.`,
    starterCode: `def wordPattern(pattern, s):
    # Write your code here
    pass
`,
    solutionCode: `def wordPattern(pattern, s):
    words = s.split()
    if len(pattern) != len(words):
        return False
    char_to_word = {}
    word_to_char = {}
    for char, word in zip(pattern, words):
        if char in char_to_word:
            if char_to_word[char] != word:
                return False
        else:
            char_to_word[char] = word
        if word in word_to_char:
            if word_to_char[word] != char:
                return False
        else:
            word_to_char[word] = char
    return True
`,
    tests: [
      { label: "Match", call: 'wordPattern("abba", "red blue blue red")', expected: "True" },
      { label: "Mismatch", call: 'wordPattern("abba", "red blue blue green")', expected: "False" },
      { label: "Same word twice", call: 'wordPattern("abba", "red red red red")', expected: "False" },
    ],
  }),

  buildCodingProblem({
    order: 23,
    slug: "isomorphic-strings",
    title: "Isomorphic Strings",
    difficulty: "easy",
    category: "strings",
    description: `Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving order. No two characters may map to the same character, but a character may map to itself.`,
    examples: [
      { input: 's = "egg", t = "add"', output: "True" },
      { input: 's = "foo", t = "bar"', output: "False" },
    ],
    constraints: ["s and t have the same length"],
    hints: [
      "Need a bijection: map s->t and t->s.",
      "A conflict in either map means not isomorphic.",
    ],
    approach: `Walk both strings together and maintain two maps. Reject when a mapping would contradict a previous one.`,
    starterCode: `def isIsomorphic(s, t):
    # Write your code here
    pass
`,
    solutionCode: `def isIsomorphic(s, t):
    s_to_t = {}
    t_to_s = {}
    for c1, c2 in zip(s, t):
        if (c1 in s_to_t and s_to_t[c1] != c2) or (c2 in t_to_s and t_to_s[c2] != c1):
            return False
        s_to_t[c1] = c2
        t_to_s[c2] = c1
    return True
`,
    tests: [
      { label: "Example 1", call: 'isIsomorphic("egg", "add")', expected: "True" },
      { label: "Example 2", call: 'isIsomorphic("foo", "bar")', expected: "False" },
      { label: "Paper title", call: 'isIsomorphic("paper", "title")', expected: "True" },
    ],
  }),

  buildCodingProblem({
    order: 24,
    slug: "first-unique-character-in-a-string",
    title: "First Unique Character in a String",
    difficulty: "easy",
    category: "strings",
    description: `Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.`,
    examples: [
      { input: 's = "coding"', output: "0" },
      { input: 's = "xxabc"', output: "2" },
    ],
    constraints: ["s consists of lowercase English letters"],
    hints: [
      "Count frequencies first.",
      "Then scan left to right for count == 1.",
    ],
    approach: `Counter (or array of 26) then a second pass for the first character with frequency 1.`,
    starterCode: `from collections import Counter

def firstUniqChar(s):
    # Write your code here
    pass
`,
    solutionCode: `from collections import Counter

def firstUniqChar(s):
    char_count = Counter(s)
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    return -1
`,
    tests: [
      { label: "Example 1", call: 'firstUniqChar("coding")', expected: "0" },
      { label: "Example 2", call: 'firstUniqChar("xxabc")', expected: "2" },
      { label: "None", call: 'firstUniqChar("aabb")', expected: "-1" },
    ],
  }),

  buildCodingProblem({
    order: 25,
    slug: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "hard",
    category: "strings",
    description: `Given two strings s and t of lengths m and n, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such window, return the empty string "".`,
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' },
      { input: 's = "a", t = "a"', output: '"a"' },
    ],
    constraints: ["s and t consist of uppercase and lowercase English letters"],
    hints: [
      "Sliding window with a need-count for characters in t.",
      "Expand right until the window is valid, then shrink left.",
      "Time: O(m + n).",
    ],
    approach: `Track how many unique characters of t are fully satisfied in the window. Expand r, then contract l while valid, recording the smallest window.`,
    starterCode: `from collections import Counter

def minWindow(s, t):
    # Write your code here
    pass
`,
    solutionCode: `from collections import Counter

def minWindow(s, t):
    if not s or not t:
        return ""
    dict_t = Counter(t)
    required = len(dict_t)
    window_counts = {}
    formed = 0
    l = 0
    min_len = float("inf")
    min_start = 0
    for r, character in enumerate(s):
        window_counts[character] = window_counts.get(character, 0) + 1
        if character in dict_t and window_counts[character] == dict_t[character]:
            formed += 1
        while l <= r and formed == required:
            if r - l + 1 < min_len:
                min_len = r - l + 1
                min_start = l
            character = s[l]
            window_counts[character] -= 1
            if character in dict_t and window_counts[character] < dict_t[character]:
                formed -= 1
            l += 1
    return "" if min_len == float("inf") else s[min_start:min_start + min_len]
`,
    tests: [
      { label: "Example 1", call: 'minWindow("ADOBECODEBANC", "ABC")', expected: '"BANC"' },
      { label: "Whole string", call: 'minWindow("a", "a")', expected: '"a"' },
      { label: "Impossible", call: 'minWindow("a", "aa")', expected: '""' },
    ],
  }),
];
