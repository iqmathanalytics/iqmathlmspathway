import { GRAPH_NODE_STARTER, buildCodingProblem } from "./helpers";

export const graphProblems = [
  buildCodingProblem({
    order: 45,
    slug: "number-of-islands",
    title: "Number of Islands",
    difficulty: "medium",
    category: "graphs",
    description: `Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.`,
    examples: [
      {
        input: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,
        output: "1",
      },
    ],
    constraints: ["1 <= m, n <= 300", "grid[i][j] is '0' or '1'"],
    hints: [
      "DFS or BFS from every unvisited land cell.",
      "Mark visited land as water (or a visited set) so you do not recount.",
      "Time: O(m * n).",
    ],
    approach: `Each time you find a '1', increment the island count and flood-fill all connected land to '0'.`,
    starterCode: `def numIslands(grid):
    # Write your code here
    pass
`,
    solutionCode: `def numIslands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == "0":
            return
        grid[r][c] = "0"
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == "1":
                dfs(i, j)
                count += 1
    return count
`,
    tests: [
      {
        kind: "custom",
        label: "One island",
        code: `grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
assert numIslands(grid) == 1`,
      },
      {
        kind: "custom",
        label: "Three islands",
        code: `grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
assert numIslands(grid) == 3`,
      },
    ],
  }),

  buildCodingProblem({
    order: 46,
    slug: "clone-graph",
    title: "Clone Graph",
    difficulty: "medium",
    category: "graphs",
    description: `Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node contains a val (int) and a list of neighbors.

class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

The graph is represented as an adjacency list. Node values are unique and 1-indexed.`,
    examples: [
      {
        input: "adjList = [[2, 4], [1, 3], [2, 4], [1, 3]]",
        output: "[[2, 4], [1, 3], [2, 4], [1, 3]]",
      },
    ],
    constraints: ["The given node will always be the first node (val = 1) if the graph is not empty"],
    hints: [
      "Hash map: original node -> cloned node.",
      "DFS or BFS, clone on first visit, then copy neighbor links.",
    ],
    approach: `DFS with a visited map so each node is cloned once and neighbor lists point at clones.`,
    starterCode: `${GRAPH_NODE_STARTER}def cloneGraph(node):
    # Write your code here
    pass
`,
    solutionCode: `def cloneGraph(node):
    if not node:
        return None
    visited = {}
    def dfs(n):
        if n in visited:
            return visited[n]
        clone = Node(n.val)
        visited[n] = clone
        for neighbor in n.neighbors:
            clone.neighbors.append(dfs(neighbor))
        return clone
    return dfs(node)
`,
    tests: [
      {
        kind: "custom",
        label: "Square graph",
        code: `nodes = {i: Node(i) for i in range(1, 5)}
nodes[1].neighbors = [nodes[2], nodes[4]]
nodes[2].neighbors = [nodes[1], nodes[3]]
nodes[3].neighbors = [nodes[2], nodes[4]]
nodes[4].neighbors = [nodes[1], nodes[3]]
cloned = cloneGraph(nodes[1])
assert cloned is not nodes[1]
assert cloned.val == 1
seen = {}
def to_adj(n):
    if n.val in seen:
        return
    seen[n.val] = sorted(nbr.val for nbr in n.neighbors)
    for nbr in n.neighbors:
        to_adj(nbr)
to_adj(cloned)
assert seen[1] == [2, 4]
assert seen[2] == [1, 3]
assert seen[3] == [2, 4]
assert seen[4] == [1, 3]`,
      },
      { kind: "custom", label: "Empty", code: "assert cloneGraph(None) is None" },
    ],
  }),

  buildCodingProblem({
    order: 47,
    slug: "course-schedule",
    title: "Course Schedule",
    difficulty: "medium",
    category: "graphs",
    description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

Return true if you can finish all courses. Otherwise, return false.`,
    examples: [
      { input: "numCourses = 2, prerequisites = [[1, 0]]", output: "True" },
      { input: "numCourses = 2, prerequisites = [[1, 0], [0, 1]]", output: "False" },
    ],
    constraints: ["Detect cycles in a directed graph"],
    hints: [
      "Build an adjacency list: prereq -> course.",
      "DFS colors: 0 unvisited, 1 visiting, 2 done. Seeing 1 again is a cycle.",
    ],
    approach: `Cycle detection in a directed graph. If any cycle exists, the courses cannot be finished.`,
    starterCode: `def canFinish(numCourses, prerequisites):
    # Write your code here
    pass
`,
    solutionCode: `def canFinish(numCourses, prerequisites):
    state = [0] * numCourses
    graph = [[] for _ in range(numCourses)]
    for course, prereq in prerequisites:
        graph[prereq].append(course)
    def has_cycle(node):
        if state[node] == 1:
            return True
        if state[node] == 2:
            return False
        state[node] = 1
        for neighbor in graph[node]:
            if has_cycle(neighbor):
                return True
        state[node] = 2
        return False
    for i in range(numCourses):
        if has_cycle(i):
            return False
    return True
`,
    tests: [
      { label: "Possible", call: "canFinish(2, [[1, 0]])", expected: "True" },
      { label: "Cycle", call: "canFinish(2, [[1, 0], [0, 1]])", expected: "False" },
      { label: "No prereqs", call: "canFinish(1, [])", expected: "True" },
    ],
  }),

  buildCodingProblem({
    order: 48,
    slug: "course-schedule-ii",
    title: "Course Schedule II",
    difficulty: "medium",
    category: "graphs",
    description: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible, return an empty array.`,
    examples: [
      {
        input: "numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]",
        output: "[0, 2, 1, 3]",
        explanation: "Other valid orders such as [0, 1, 2, 3] are also accepted.",
      },
    ],
    constraints: ["Return [] if a cycle exists"],
    hints: [
      "Topological sort via DFS post-order, then reverse.",
      "Same 3-color cycle detection as Course Schedule.",
    ],
    approach: `DFS topological sort. Append a node after its descendants, then reverse the list.`,
    starterCode: `def findOrder(numCourses, prerequisites):
    # Write your code here
    pass
`,
    solutionCode: `def findOrder(numCourses, prerequisites):
    state = [0] * numCourses
    result = []
    graph = [[] for _ in range(numCourses)]
    for course, prereq in prerequisites:
        graph[prereq].append(course)
    def dfs(node):
        if state[node] == 1:
            return False
        if state[node] == 2:
            return True
        state[node] = 1
        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False
        state[node] = 2
        result.append(node)
        return True
    for i in range(numCourses):
        if not dfs(i):
            return []
    return result[::-1]
`,
    tests: [
      {
        kind: "custom",
        label: "Valid order",
        code: `prereq = [[1, 0], [2, 0], [3, 1], [3, 2]]
order = findOrder(4, prereq)
assert order != []
pos = {c: i for i, c in enumerate(order)}
assert len(order) == 4 and len(pos) == 4
for a, b in prereq:
    assert pos[b] < pos[a]`,
      },
      { label: "Impossible", call: "findOrder(2, [[1, 0], [0, 1]])", expected: "[]" },
    ],
  }),

  buildCodingProblem({
    order: 49,
    slug: "shortest-path-in-binary-matrix",
    title: "Shortest Path in Binary Matrix",
    difficulty: "medium",
    category: "graphs",
    description: `Given an n x n binary matrix grid, return the length of the shortest clear path from [0, 0] to [n - 1, n - 1]. If no such path exists, return -1.

A clear path is a path from the top-left to the bottom-right such that all visited cells are 0. You may move to 8 adjacent cells (including diagonals).

The length of a clear path is the number of visited cells.`,
    examples: [
      { input: "grid = [[0, 1], [1, 0]]", output: "2" },
      { input: "grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]", output: "4" },
    ],
    constraints: ["n == grid.length == grid[0].length", "grid[i][j] is 0 or 1"],
    hints: [
      "BFS from (0, 0) because all steps cost 1.",
      "Explore 8 directions and mark visited (set cell to 1).",
    ],
    approach: `Grid BFS. First time you reach the target is the shortest length.`,
    starterCode: `from collections import deque

def shortestPathBinaryMatrix(grid):
    # Write your code here
    pass
`,
    solutionCode: `from collections import deque

def shortestPathBinaryMatrix(grid):
    if grid[0][0] == 1:
        return -1
    n = len(grid)
    if n == 1:
        return 1
    directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
    queue = deque([(0, 0, 1)])
    grid[0][0] = 1
    while queue:
        r, c, dist = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                if nr == n - 1 and nc == n - 1:
                    return dist + 1
                queue.append((nr, nc, dist + 1))
                grid[nr][nc] = 1
    return -1
`,
    tests: [
      { label: "2x2", call: "shortestPathBinaryMatrix([[0, 1], [1, 0]])", expected: "2" },
      {
        label: "3x3",
        call: "shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]])",
        expected: "4",
      },
      { label: "Blocked start", call: "shortestPathBinaryMatrix([[1, 0], [0, 0]])", expected: "-1" },
    ],
  }),
];
