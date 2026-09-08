import { buildCodingProblem } from "./helpers";

export const stackQueueProblems = [
  buildCodingProblem({
    order: 33,
    slug: "implement-queue-using-stacks",
    title: "Implement Queue using Stacks",
    difficulty: "easy",
    category: "stack-queue",
    description: `Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support push, peek, pop, and empty.

Implement the MyQueue class:
- MyQueue() initializes the queue
- push(x) pushes element x to the back of the queue
- pop() removes the element from the front and returns it
- peek() returns the element at the front
- empty() returns true if the queue is empty, false otherwise`,
    examples: [
      {
        input: 'ops = ["MyQueue", "push", "push", "peek", "pop", "empty"] / args = [[], [1], [2], [], [], []]',
        output: "[None, None, None, 1, 1, False]",
      },
    ],
    constraints: ["Use only standard stack operations: push, pop, peek, empty"],
    hints: [
      "One stack for incoming pushes, one for outgoing pops.",
      "When popping, if the output stack is empty, pour the input stack into it.",
      "Amortized O(1) per operation.",
    ],
    approach: `push_stack receives new items. pop_stack reverses them so the oldest item is on top.`,
    starterCode: `class MyQueue:
    def __init__(self):
        pass

    def push(self, x):
        pass

    def pop(self):
        pass

    def peek(self):
        pass

    def empty(self):
        pass
`,
    solutionCode: `class MyQueue:
    def __init__(self):
        self.push_stack = []
        self.pop_stack = []

    def push(self, x):
        self.push_stack.append(x)

    def pop(self):
        if not self.pop_stack:
            while self.push_stack:
                self.pop_stack.append(self.push_stack.pop())
        return self.pop_stack.pop()

    def peek(self):
        if not self.pop_stack:
            while self.push_stack:
                self.pop_stack.append(self.push_stack.pop())
        return self.pop_stack[-1]

    def empty(self):
        return not self.push_stack and not self.pop_stack
`,
    tests: [
      {
        kind: "custom",
        label: "Sample operations",
        code: `q = MyQueue()
q.push(1)
q.push(2)
assert q.peek() == 1
assert q.pop() == 1
assert q.empty() is False
assert q.pop() == 2
assert q.empty() is True`,
      },
    ],
  }),

  buildCodingProblem({
    order: 34,
    slug: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "medium",
    category: "stack-queue",
    description: `Given an array of integers temperatures where temperatures[i] is the daily temperature on day i, return an array answer where answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0.`,
    examples: [
      {
        input: "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
        output: "[1, 1, 4, 2, 1, 1, 0, 0]",
      },
    ],
    constraints: ["1 <= len(temperatures) <= 10^5"],
    hints: [
      "Monotonic stack of indices with decreasing temperatures.",
      "When today's temperature is warmer than the stack top, pop and fill the wait.",
      "Time: O(n).",
    ],
    approach: `Keep indices of days waiting for a warmer day. Pop when the current day is warmer and record the distance.`,
    starterCode: `def dailyTemperatures(temperatures):
    # Write your code here
    pass
`,
    solutionCode: `def dailyTemperatures(temperatures):
    n = len(temperatures)
    result = [0] * n
    stack = []
    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            prev_index = stack.pop()
            result[prev_index] = i - prev_index
        stack.append(i)
    return result
`,
    tests: [
      {
        label: "Example 1",
        call: "dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])",
        expected: "[1, 1, 4, 2, 1, 1, 0, 0]",
      },
      { label: "Decreasing", call: "dailyTemperatures([30, 20, 10])", expected: "[0, 0, 0]" },
    ],
  }),

  buildCodingProblem({
    order: 35,
    slug: "evaluate-reverse-polish-notation",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "medium",
    category: "stack-queue",
    description: `Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Division between two integers should truncate toward zero.

The input is a list of tokens.`,
    examples: [
      {
        input: 'tokens = ["2", "1", "+", "3", "*"]',
        output: "9",
        explanation: "((2 + 1) * 3) = 9",
      },
      {
        input: 'tokens = ["4", "13", "5", "/", "+"]',
        output: "6",
        explanation: "(4 + (13 / 5)) = 6",
      },
    ],
    constraints: ["The expression is always valid"],
    hints: [
      "Push numbers onto a stack.",
      "On an operator, pop two operands (second popped is the left operand).",
      'Use int(a / b) so division truncates toward zero.',
    ],
    approach: `Stack evaluation: numbers go on the stack; operators consume the top two values and push the result.`,
    starterCode: `def evalRPN(tokens):
    # Write your code here
    pass
`,
    solutionCode: `def evalRPN(tokens):
    stack = []
    operators = {"+", "-", "*", "/"}
    for token in tokens:
        if token in operators:
            b = stack.pop()
            a = stack.pop()
            if token == "+":
                result = a + b
            elif token == "-":
                result = a - b
            elif token == "*":
                result = a * b
            else:
                result = int(a / b)
            stack.append(result)
        else:
            stack.append(int(token))
    return stack[0]
`,
    tests: [
      { label: "Example 1", call: 'evalRPN(["2", "1", "+", "3", "*"])', expected: "9" },
      { label: "Division", call: 'evalRPN(["4", "13", "5", "/", "+"])', expected: "6" },
      {
        label: "Negatives",
        call: 'evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])',
        expected: "22",
      },
    ],
  }),

  buildCodingProblem({
    order: 36,
    slug: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "hard",
    category: "stack-queue",
    description: `Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.`,
    examples: [
      {
        input: "heights = [2, 1, 5, 6, 2, 3]",
        output: "10",
        explanation: "The rectangle of height 5 and width 2 has area 10.",
      },
    ],
    constraints: ["1 <= len(heights) <= 10^5", "0 <= heights[i] <= 10^4"],
    hints: [
      "Monotonic increasing stack of indices.",
      "When a shorter bar arrives, the previous bar cannot extend further right.",
      "Time: O(n).",
    ],
    approach: `For each bar, find the largest width where it is the shortest bar using a monotonic stack, then take max height * width.`,
    starterCode: `def largestRectangleArea(heights):
    # Write your code here
    pass
`,
    solutionCode: `def largestRectangleArea(heights):
    stack = []
    max_area = 0
    index = 0
    while index < len(heights):
        if not stack or heights[index] >= heights[stack[-1]]:
            stack.append(index)
            index += 1
        else:
            top = stack.pop()
            width = index if not stack else index - stack[-1] - 1
            max_area = max(max_area, heights[top] * width)
    while stack:
        top = stack.pop()
        width = index if not stack else index - stack[-1] - 1
        max_area = max(max_area, heights[top] * width)
    return max_area
`,
    tests: [
      { label: "Example 1", call: "largestRectangleArea([2, 1, 5, 6, 2, 3])", expected: "10" },
      { label: "Two bars", call: "largestRectangleArea([2, 4])", expected: "4" },
      { label: "Single", call: "largestRectangleArea([1])", expected: "1" },
    ],
  }),
];
