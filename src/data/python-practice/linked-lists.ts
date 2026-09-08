import { LIST_HELPERS, LIST_NODE_STARTER, buildCodingProblem } from "./helpers";

export const linkedListProblems = [
  buildCodingProblem({
    order: 26,
    slug: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "easy",
    category: "linked-lists",
    description: `Given the head of a singly linked list, reverse the list, and return the reversed list.

ListNode is provided:

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next`,
    examples: [{ input: "head = [1, 2, 3, 4, 5]", output: "[5, 4, 3, 2, 1]" }],
    constraints: ["The number of nodes is in [0, 5000]"],
    hints: [
      "Iterative reversal uses three pointers: prev, current, next.",
      "Point current.next to prev, then slide the window forward.",
      "Time: O(n), Space: O(1).",
    ],
    approach: `Walk the list, reversing the next pointer of each node. prev becomes the new head.`,
    starterCode: `${LIST_NODE_STARTER}def reverseList(head):
    # Write your code here
    pass
`,
    solutionCode: `def reverseList(head):
    prev = None
    current = head
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    return prev
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2, 3, 4, 5])
assert _vals_from_list(reverseList(head)) == [5, 4, 3, 2, 1]`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `${LIST_HELPERS}
assert reverseList(None) is None`,
      },
    ],
  }),

  buildCodingProblem({
    order: 27,
    slug: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "easy",
    category: "linked-lists",
    description: `Given head, the head of a linked list, determine if the linked list has a cycle.

There is a cycle if some node can be reached again by continuously following the next pointer.

Return true if there is a cycle, otherwise false.`,
    examples: [
      {
        input: "head = [3, 2, 0, -4], pos = 1",
        output: "True",
        explanation: "The tail connects to the node at index 1.",
      },
    ],
    constraints: ["Use O(1) extra memory if possible"],
    hints: [
      "Floyd's tortoise and hare: slow moves one step, fast moves two.",
      "If they meet, a cycle exists.",
      "If fast reaches None, there is no cycle.",
    ],
    approach: `Two pointers at different speeds. A cycle makes the faster pointer lap the slower one.`,
    starterCode: `${LIST_NODE_STARTER}def hasCycle(head):
    # Write your code here
    pass
`,
    solutionCode: `def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
`,
    tests: [
      {
        kind: "custom",
        label: "Has cycle",
        code: `${LIST_HELPERS}
nodes = [ListNode(3), ListNode(2), ListNode(0), ListNode(-4)]
for i in range(3):
    nodes[i].next = nodes[i + 1]
nodes[3].next = nodes[1]
assert hasCycle(nodes[0]) is True`,
      },
      {
        kind: "custom",
        label: "No cycle",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2, 3])
assert hasCycle(head) is False`,
      },
    ],
  }),

  buildCodingProblem({
    order: 28,
    slug: "linked-list-cycle-ii",
    title: "Linked List Cycle II",
    difficulty: "medium",
    category: "linked-lists",
    description: `Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return None.`,
    examples: [
      {
        input: "head = [3, 2, 0, -4], pos = 1",
        output: "Node with value 2",
      },
    ],
    constraints: ["Return the actual node object, not its value"],
    hints: [
      "Detect the cycle with slow/fast pointers first.",
      "When they meet, move one pointer to head. Advance both one step at a time.",
      "They meet at the cycle entrance.",
    ],
    approach: `Floyd's algorithm plus the entrance trick: after meeting, reset one pointer to head; the next meeting point is the start of the cycle.`,
    starterCode: `${LIST_NODE_STARTER}def detectCycle(head):
    # Write your code here
    pass
`,
    solutionCode: `def detectCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    else:
        return None
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    return slow
`,
    tests: [
      {
        kind: "custom",
        label: "Cycle at index 1",
        code: `nodes = [ListNode(3), ListNode(2), ListNode(0), ListNode(-4)]
for i in range(3):
    nodes[i].next = nodes[i + 1]
nodes[3].next = nodes[1]
got = detectCycle(nodes[0])
assert got is nodes[1]`,
      },
      {
        kind: "custom",
        label: "No cycle",
        code: `${LIST_HELPERS}
assert detectCycle(_list_from_vals([1, 2])) is None`,
      },
    ],
  }),

  buildCodingProblem({
    order: 29,
    slug: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "easy",
    category: "linked-lists",
    description: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list by splicing together the nodes of the two lists. Return the head of the merged linked list.`,
    examples: [
      { input: "list1 = [1, 2, 4], list2 = [1, 3, 4]", output: "[1, 1, 2, 3, 4, 4]" },
    ],
    constraints: ["Both lists are sorted in non-decreasing order"],
    hints: [
      "A dummy node simplifies attaching the first real node.",
      "Always take the smaller of the two current heads.",
      "Attach whichever list remains.",
    ],
    approach: `Iteratively splice the smaller node onto a dummy-headed result list.`,
    starterCode: `${LIST_NODE_STARTER}def mergeTwoLists(list1, list2):
    # Write your code here
    pass
`,
    solutionCode: `def mergeTwoLists(list1, list2):
    dummy = ListNode(0)
    current = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    current.next = list1 if list1 else list2
    return dummy.next
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${LIST_HELPERS}
a = _list_from_vals([1, 2, 4])
b = _list_from_vals([1, 3, 4])
assert _vals_from_list(mergeTwoLists(a, b)) == [1, 1, 2, 3, 4, 4]`,
      },
      {
        kind: "custom",
        label: "One empty",
        code: `${LIST_HELPERS}
assert _vals_from_list(mergeTwoLists(None, _list_from_vals([0]))) == [0]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 30,
    slug: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "medium",
    category: "linked-lists",
    description: `Given the head of a linked list, remove the nth node from the end of the list and return its head.`,
    examples: [{ input: "head = [1, 2, 3, 4, 5], n = 2", output: "[1, 2, 3, 5]" }],
    constraints: ["1 <= n <= number of nodes"],
    hints: [
      "Dummy node handles removing the head.",
      "Advance a fast pointer n+1 steps, then move fast and slow together.",
      "When fast is None, slow is just before the target.",
    ],
    approach: `Two pointers with a gap of n. When the lead pointer hits the end, skip slow.next.`,
    starterCode: `${LIST_NODE_STARTER}def removeNthFromEnd(head, n):
    # Write your code here
    pass
`,
    solutionCode: `def removeNthFromEnd(head, n):
    dummy = ListNode(0)
    dummy.next = head
    fast = slow = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next
`,
    tests: [
      {
        kind: "custom",
        label: "Example 1",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2, 3, 4, 5])
assert _vals_from_list(removeNthFromEnd(head, 2)) == [1, 2, 3, 5]`,
      },
      {
        kind: "custom",
        label: "Remove head",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2])
assert _vals_from_list(removeNthFromEnd(head, 2)) == [2]`,
      },
    ],
  }),

  buildCodingProblem({
    order: 31,
    slug: "palindrome-linked-list",
    title: "Palindrome Linked List",
    difficulty: "easy",
    category: "linked-lists",
    description: `Given the head of a singly linked list, return true if it is a palindrome, and false otherwise.`,
    examples: [
      { input: "head = [1, 2, 2, 1]", output: "True" },
      { input: "head = [1, 2]", output: "False" },
    ],
    constraints: ["Prefer O(n) time and O(1) extra space"],
    hints: [
      "Find the middle with slow/fast pointers.",
      "Reverse the second half.",
      "Compare the two halves node by node.",
    ],
    approach: `Split at the midpoint, reverse the second half, then compare values.`,
    starterCode: `${LIST_NODE_STARTER}def isPalindrome(head):
    # Write your code here
    pass
`,
    solutionCode: `def isPalindrome(head):
    if not head or not head.next:
        return True
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    prev = None
    while slow:
        next_temp = slow.next
        slow.next = prev
        prev = slow
        slow = next_temp
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
    return True
`,
    tests: [
      {
        kind: "custom",
        label: "Palindrome",
        code: `${LIST_HELPERS}
assert isPalindrome(_list_from_vals([1, 2, 2, 1])) is True`,
      },
      {
        kind: "custom",
        label: "Not palindrome",
        code: `${LIST_HELPERS}
assert isPalindrome(_list_from_vals([1, 2])) is False`,
      },
    ],
  }),

  buildCodingProblem({
    order: 32,
    slug: "reorder-list",
    title: "Reorder List",
    difficulty: "medium",
    category: "linked-lists",
    description: `You are given the head of a singly linked list. The list can be represented as:

L0 → L1 → … → Ln-1 → Ln

Reorder the list to:

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

Do this in-place. The function should not return anything.`,
    examples: [{ input: "head = [1, 2, 3, 4]", output: "[1, 4, 2, 3]" }],
    constraints: ["Modify the list in-place"],
    hints: [
      "Find the middle, reverse the second half, then merge.",
      "Stop merging when the reversed half is exhausted.",
    ],
    approach: `Three steps: middle, reverse second half, weave the two halves together.`,
    starterCode: `${LIST_NODE_STARTER}def reorderList(head):
    # Write your code here
    pass
`,
    solutionCode: `def reorderList(head):
    if not head or not head.next:
        return
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    prev = None
    while slow:
        next_temp = slow.next
        slow.next = prev
        prev = slow
        slow = next_temp
    first, second = head, prev
    while second.next:
        temp1 = first.next
        temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2
`,
    tests: [
      {
        kind: "custom",
        label: "Even length",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2, 3, 4])
reorderList(head)
assert _vals_from_list(head) == [1, 4, 2, 3]`,
      },
      {
        kind: "custom",
        label: "Odd length",
        code: `${LIST_HELPERS}
head = _list_from_vals([1, 2, 3, 4, 5])
reorderList(head)
assert _vals_from_list(head) == [1, 5, 2, 4, 3]`,
      },
    ],
  }),
];
