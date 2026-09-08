import { buildBasicsProblem, buildScriptProblem } from "./helpers";

/**
 * Extra Intermediate (medium) Python Basics — expands bank toward 50 medium
 * Auto-generated from scripts/_basics-specs-*.mjs — do not hand-edit heavily;
 * re-run: node scripts/emit-python-basics-extra.mjs
 */
export const intermediateExtraProblems = [
  buildScriptProblem({
    order: 100,
    slug: "nested-loop-grid",
    title: "Multiplication Mini Grid",
    difficulty: "medium",
    category: "loops",
    description: `Print a 3×3 multiplication mini grid.

For row in 1..3 and col in 1..3, print one line per cell:
  r x c = product

Example first line: 1 x 1 = 1
Last line: 3 x 3 = 9`,
    examples: [
      { output: `1 x 1 = 1
...
3 x 3 = 9` }
    ],
    constraints: ["Use nested for loops","Print exactly 9 lines in row-major order"],
    hints: ["Outer loop row 1..3, inner loop col 1..3","print(f\"{row} x {col} = {row * col}\")"],
    approach: `Nested loops iterate every row/column pair; an f-string formats each line.`,
    starterCode: `# TODO: print 3x3 multiplication grid
`,
    solutionCode: `for row in range(1, 4):
    for col in range(1, 4):
        print(f"{row} x {col} = {row * col}")`,
    tests: [
      { label: `Nine lines`, expectedStdout: `1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9` }
    ],
  }),

  buildScriptProblem({
    order: 101,
    slug: "enumerate-ranking",
    title: "Ranked Standings",
    difficulty: "medium",
    category: "loops",
    description: `Given:
  names = ["Alice", "Bob", "Charlie", "Diana"]

Print each name with its 1-based rank using enumerate:
  1. Alice
  2. Bob
  ...`,
    examples: [
      { output: `1. Alice
2. Bob
3. Charlie
4. Diana` }
    ],
    constraints: ["Use enumerate(names, start=1)","One line per name"],
    hints: ["for rank, name in enumerate(names, start=1):"],
    approach: `enumerate adds a counter; start=1 makes ranks human-friendly.`,
    starterCode: `names = ["Alice", "Bob", "Charlie", "Diana"]
# TODO: print ranked names
`,
    solutionCode: `names = ["Alice", "Bob", "Charlie", "Diana"]
for rank, name in enumerate(names, start=1):
    print(f"{rank}. {name}")`,
    tests: [
      { label: `Four ranks`, expectedStdout: `1. Alice
2. Bob
3. Charlie
4. Diana` }
    ],
  }),

  buildScriptProblem({
    order: 102,
    slug: "while-collatz",
    title: "Collatz Sequence",
    difficulty: "medium",
    category: "loops",
    description: `Starting with n = 6, print the Collatz sequence until you reach 1.

Rules each step:
- If current is even: next = current // 2
- If odd: next = 3 * current + 1

Print each value on its own line (including the final 1).`,
    examples: [
      { output: `6
3
10
5
16
8
4
2
1` }
    ],
    constraints: ["Use a while loop","Start with n = 6"],
    hints: ["while n != 1: ... then print n after the loop","Check n % 2 for even/odd"],
    approach: `Apply Collatz rules in a while loop, printing each term; include 1 at the end.`,
    starterCode: `n = 6
# TODO: print Collatz sequence ending at 1
`,
    solutionCode: `n = 6
while n != 1:
    print(n)
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
print(1)`,
    tests: [
      { label: `n=6 sequence`, expectedStdout: `6
3
10
5
16
8
4
2
1` }
    ],
  }),

  buildScriptProblem({
    order: 103,
    slug: "operator-precedence",
    title: "Expression Evaluation",
    difficulty: "medium",
    category: "operators",
    description: `Evaluate and print four expressions, one per line:

1. 2 + 3 * 4
2. (2 + 3) * 4
3. 10 // 3
4. 2 ** 3 ** 2  (right-associative)`,
    examples: [
      { output: `14
20
3
512` }
    ],
    constraints: ["Print the numeric result only, one per line"],
    hints: ["** binds right-to-left: 2 ** 3 ** 2 == 2 ** 9","// is floor division"],
    approach: `Python operator precedence determines each result; print them in order.`,
    starterCode: `# TODO: print four expression results
`,
    solutionCode: `print(2 + 3 * 4)
print((2 + 3) * 4)
print(10 // 3)
print(2 ** 3 ** 2)`,
    tests: [
      { label: `Four results`, expectedStdout: `14
20
3
512` }
    ],
  }),

  buildScriptProblem({
    order: 104,
    slug: "fizzbuzz-range",
    title: "FizzBuzz 1–15",
    difficulty: "medium",
    category: "conditionals",
    description: `Print FizzBuzz for integers 1 through 15, one label per line:

- "FizzBuzz" if divisible by 3 and 5
- "Fizz" if divisible by 3 only
- "Buzz" if divisible by 5 only
- otherwise the number itself`,
    examples: [
      { output: `1
2
Fizz
4
Buzz
...` }
    ],
    constraints: ["Loop 1..15 inclusive","Check divisible-by-15 first"],
    hints: ["if i % 15 == 0: ... elif i % 3 == 0: ..."],
    approach: `Test the combined condition before individual divisibility checks.`,
    starterCode: `# TODO: FizzBuzz for 1..15
`,
    solutionCode: `for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
    tests: [
      { label: `Lines 1-15`, expectedStdout: `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz` }
    ],
  }),

  buildScriptProblem({
    order: 105,
    slug: "prime-list-script",
    title: "Primes Up to 30",
    difficulty: "medium",
    category: "numbers",
    description: `Print all prime numbers from 2 through 30, one per line.

Use any correct approach (trial division is fine).`,
    examples: [
      { output: `2
3
5
7
11
13
17
19
23
29` }
    ],
    constraints: ["Print only primes","One number per line in ascending order"],
    hints: ["For each n, test divisors from 2 to int(n**0.5)","2 is the first prime"],
    approach: `Trial-divide each candidate; print when no divisor divides evenly.`,
    starterCode: `# TODO: print primes 2..30
`,
    solutionCode: `for n in range(2, 31):
    is_prime = True
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            is_prime = False
            break
    if is_prime:
        print(n)`,
    tests: [
      { label: `Primes 2-30`, expectedStdout: `2
3
5
7
11
13
17
19
23
29` }
    ],
  }),

  buildScriptProblem({
    order: 106,
    slug: "running-average-script",
    title: "Running Averages",
    difficulty: "medium",
    category: "numbers",
    description: `Given values = [10, 20, 30, 40]

After each value (from the first onward), print the running average rounded to 2 decimal places, one per line.

Expected:
10.0
15.0
20.0
25.0`,
    examples: [
      { output: `10.0
15.0
20.0
25.0` }
    ],
    constraints: ["Use a loop accumulating total and count","Round each average to 2 decimals"],
    hints: ["total += v; count += 1; avg = total / count","round(avg, 2)"],
    approach: `Maintain running sum and count; print the mean after each new value.`,
    starterCode: `values = [10, 20, 30, 40]
# TODO: print running averages
`,
    solutionCode: `values = [10, 20, 30, 40]
total = 0
count = 0
for v in values:
    total += v
    count += 1
    print(round(total / count, 2))`,
    tests: [
      { label: `Four averages`, expectedStdout: `10.0
15.0
20.0
25.0` }
    ],
  }),

  buildScriptProblem({
    order: 107,
    slug: "ascii-table-script",
    title: "Simple Text Table",
    difficulty: "medium",
    category: "strings",
    description: `Print a two-row table with headers Item and Qty:

Item   Qty
Pen    12
Note   8

Use f-strings with fixed widths: item left-aligned in 6 chars, qty right-aligned in 3 chars.`,
    examples: [
      { output: `Item  Qty
Pen    12
Note    8` }
    ],
    constraints: ["First line is header","Use f-string width specifiers"],
    hints: ["f\"{item:<6}{qty:>3}\"","Print header then each data row"],
    approach: `Format columns with f-string alignment for a readable fixed-width table.`,
    starterCode: `# TODO: print formatted table
`,
    solutionCode: `print(f"{'Item':<6}{'Qty':>3}")
print(f"{'Pen':<6}{12:>3}")
print(f"{'Note':<6}{8:>3}")`,
    tests: [
      { label: `Three lines`, expectedStdout: `Item  Qty
Pen    12
Note    8` }
    ],
  }),

  buildScriptProblem({
    order: 108,
    slug: "set-report-script",
    title: "Set Operations Report",
    difficulty: "medium",
    category: "sets",
    description: `Given:
  a = {1, 2, 3, 4}
  b = {3, 4, 5, 6}

Print four lines:
1. sorted union (comma-separated, no spaces)
2. sorted intersection
3. sorted a - b (difference)
4. sorted symmetric difference`,
    examples: [
      { output: `1,2,3,4,5,6
3,4
1,2
1,2,5,6` }
    ],
    constraints: ["Sort before joining","Join with commas, no spaces"],
    hints: ["sorted(a | b)","\",\".join(str(x) for x in sorted(...))"],
    approach: `Apply set operators, sort the result, and join into one line each.`,
    starterCode: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
# TODO: print four set reports
`,
    solutionCode: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(",".join(str(x) for x in sorted(a | b)))
print(",".join(str(x) for x in sorted(a & b)))
print(",".join(str(x) for x in sorted(a - b)))
print(",".join(str(x) for x in sorted(a ^ b)))`,
    tests: [
      { label: `Four set lines`, expectedStdout: `1,2,3,4,5,6
3,4
1,2
1,2,5,6` }
    ],
  }),

  buildScriptProblem({
    order: 109,
    slug: "tuple-unpack-script",
    title: "Coordinate Unpacking",
    difficulty: "medium",
    category: "tuples",
    description: `Given points = [(0, 0), (3, 4), (-2, 5)]

For each (x, y) tuple, print:
  x=<x>, y=<y>, dist=<distance from origin>

Distance = sqrt(x*x + y*y). Use ** 0.5 for square root.
Round dist to 2 decimal places.`,
    examples: [
      { output: `x=0, y=0, dist=0.0
x=3, y=4, dist=5.0
x=-2, y=5, dist=5.39` }
    ],
    constraints: ["Loop and unpack each tuple","Round distance to 2 decimals"],
    hints: ["for x, y in points:","dist = (x**2 + y**2) ** 0.5"],
    approach: `Unpack tuple elements, compute Euclidean distance, format each line.`,
    starterCode: `points = [(0, 0), (3, 4), (-2, 5)]
# TODO: print coordinates and distances
`,
    solutionCode: `points = [(0, 0), (3, 4), (-2, 5)]
for x, y in points:
    dist = round((x ** 2 + y ** 2) ** 0.5, 2)
    print(f"x={x}, y={y}, dist={dist}")`,
    tests: [
      { label: `Three points`, expectedStdout: `x=0, y=0, dist=0.0
x=3, y=4, dist=5.0
x=-2, y=5, dist=5.39` }
    ],
  }),

  buildScriptProblem({
    order: 110,
    slug: "word-count-script",
    title: "Word Frequency Lines",
    difficulty: "medium",
    category: "dictionaries",
    description: `Given text = "to be or not to be"

Build a word-count dictionary, then print each word and its count on its own line in alphabetical order:
  be: 2
  not: 1
  or: 1
  to: 2`,
    examples: [
      { output: `be: 2
not: 1
or: 1
to: 2` }
    ],
    constraints: ["Split on whitespace","Print sorted by word ascending"],
    hints: ["counts[word] = counts.get(word, 0) + 1","for word in sorted(counts):"],
    approach: `Tally words in a dict, then iterate sorted keys for stable output.`,
    starterCode: `text = "to be or not to be"
# TODO: count words and print sorted lines
`,
    solutionCode: `text = "to be or not to be"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
for word in sorted(counts):
    print(f"{word}: {counts[word]}")`,
    tests: [
      { label: `Sorted counts`, expectedStdout: `be: 2
not: 1
or: 1
to: 2` }
    ],
  }),

  buildScriptProblem({
    order: 111,
    slug: "json-print-script",
    title: "Build and Print JSON",
    difficulty: "medium",
    category: "json",
    description: `Build a Python dict:
  {"course": "Python Basics", "week": 4, "topics": ["loops", "dicts"]}

Import json and print json.dumps(payload) on one line.`,
    examples: [
      { output: `{"course": "Python Basics", "week": 4, "topics": ["loops", "dicts"]}` }
    ],
    constraints: ["Use json.dumps","Print exactly one line"],
    hints: ["import json","json.dumps preserves key order as inserted (Python 3.7+)"],
    approach: `Construct the dict, serialize with json.dumps, print the string.`,
    starterCode: `# TODO: build dict and print JSON
`,
    solutionCode: `import json

payload = {"course": "Python Basics", "week": 4, "topics": ["loops", "dicts"]}
print(json.dumps(payload))`,
    tests: [
      { label: `One JSON line`, expectedStdout: `{"course": "Python Basics", "week": 4, "topics": ["loops", "dicts"]}` }
    ],
  }),

  buildScriptProblem({
    order: 112,
    slug: "filter-evens-script",
    title: "Filter and Double Evens",
    difficulty: "medium",
    category: "comprehensions",
    description: `Given nums = [1, 2, 3, 4, 5, 6, 7, 8]

Use a list comprehension to build a new list of even numbers doubled, then print it.

Expected output: [4, 8, 12, 16]`,
    examples: [
      { output: `[4, 8, 12, 16]` }
    ],
    constraints: ["Use a list comprehension with an if filter","Print the resulting list"],
    hints: ["[n * 2 for n in nums if n % 2 == 0]"],
    approach: `Comprehension filters evens and doubles them in one expression.`,
    starterCode: `nums = [1, 2, 3, 4, 5, 6, 7, 8]
# TODO: comprehension and print
`,
    solutionCode: `nums = [1, 2, 3, 4, 5, 6, 7, 8]
result = [n * 2 for n in nums if n % 2 == 0]
print(result)`,
    tests: [
      { label: `Doubled evens`, expectedStdout: `[4, 8, 12, 16]` }
    ],
  }),

  buildScriptProblem({
    order: 113,
    slug: "score-bands-script",
    title: "Multiple Score Bands",
    difficulty: "medium",
    category: "conditionals",
    description: `Given scores = [92, 74, 88, 59, 100]

For each score print one word on its own line:
- "honors" if score >= 90
- "pass" if score >= 70
- "retake" otherwise`,
    examples: [
      { output: `honors
pass
pass
retake
honors` }
    ],
    constraints: ["Process in list order","One label per line"],
    hints: ["Loop scores and use if / elif / else"],
    approach: `Classify each score with a chained conditional inside a loop.`,
    starterCode: `scores = [92, 74, 88, 59, 100]
# TODO: print band for each score
`,
    solutionCode: `scores = [92, 74, 88, 59, 100]
for score in scores:
    if score >= 90:
        print("honors")
    elif score >= 70:
        print("pass")
    else:
        print("retake")`,
    tests: [
      { label: `Five bands`, expectedStdout: `honors
pass
pass
retake
honors` }
    ],
  }),

  buildScriptProblem({
    order: 114,
    slug: "cycle-remainder-script",
    title: "Day-of-Week Cycle",
    difficulty: "medium",
    category: "operators",
    description: `Simulate a 7-day cycle starting at day 0 (Mon).

Given offsets = [0, 1, 6, 7, 13, 20]

Print the weekday index (0=Mon .. 6=Sun) after each offset using modulo:
  offset 0 -> 0
  offset 1 -> 1
  ...`,
    examples: [
      { output: `0
1
6
0
6
6` }
    ],
    constraints: ["Use % 7 for wrapping","One result per offset, in order"],
    hints: ["day = offset % 7"],
    approach: `Modulo wraps increasing offsets into a fixed 7-day cycle.`,
    starterCode: `offsets = [0, 1, 6, 7, 13, 20]
# TODO: print weekday index for each offset
`,
    solutionCode: `offsets = [0, 1, 6, 7, 13, 20]
for offset in offsets:
    print(offset % 7)`,
    tests: [
      { label: `Six indices`, expectedStdout: `0
1
6
0
6
6` }
    ],
  }),

  buildBasicsProblem({
    order: 115,
    slug: "keyword-profile",
    title: "Build Profile from Keywords",
    difficulty: "medium",
    category: "functions",
    description: `Write build_profile(name, **info) that returns a dict starting with {"name": name} merged with all keyword arguments.

Example: build_profile("Sam", city="Boston", role="TA") -> {"name": "Sam", "city": "Boston", "role": "TA"}`,
    examples: [
      { input: `build_profile("Sam", city="Boston", role="TA")`, output: `{"name": "Sam", "city": "Boston", "role": "TA"}` }
    ],
    constraints: ["Use **kwargs","Return a new dict"],
    hints: ["profile = {\"name\": name}","profile.update(info)"],
    approach: `Start with the required name key, then merge optional keyword fields.`,
    starterCode: `def build_profile(name, **info):
    # Write your code here
    pass
`,
    solutionCode: `def build_profile(name, **info):
    profile = {"name": name}
    profile.update(info)
    return profile
`,
    tests: [
      { label: `With extras`, call: `build_profile("Sam", city="Boston", role="TA")`, expected: `{"name": "Sam", "city": "Boston", "role": "TA"}` },
      { label: `Name only`, call: `build_profile("Alex")`, expected: `{"name": "Alex"}` }
    ],
  }),

  buildBasicsProblem({
    order: 116,
    slug: "default-greeting",
    title: "Greeting with Default Title",
    difficulty: "medium",
    category: "functions",
    description: `Write greet(name, title="Student") that returns a string:
  "Hello, {title} {name}!"

If title is omitted, use "Student".`,
    examples: [
      { input: `greet("Jordan")`, output: `"Hello, Student Jordan!"` },
      { input: `greet("Lee", "Dr.")`, output: `"Hello, Dr. Lee!"` }
    ],
    constraints: ["Use a default parameter value"],
    hints: ["return f\"Hello, {title} {name}!\""],
    approach: `Default parameters supply "Student" when title is not passed.`,
    starterCode: `def greet(name, title="Student"):
    # Write your code here
    pass
`,
    solutionCode: `def greet(name, title="Student"):
    return f"Hello, {title} {name}!"
`,
    tests: [
      { label: `Default title`, call: `greet("Jordan")`, expected: `"Hello, Student Jordan!"` },
      { label: `Custom title`, call: `greet("Lee", "Dr.")`, expected: `"Hello, Dr. Lee!"` }
    ],
  }),

  buildBasicsProblem({
    order: 117,
    slug: "merge-word-counts",
    title: "Merge Word Count Dicts",
    difficulty: "medium",
    category: "dictionaries",
    description: `Write merge_counts(a, b) that merges two dicts mapping words to counts.

If a word appears in both, add the counts. Neither input dict should be mutated.`,
    examples: [
      { input: `merge_counts({"a": 2, "b": 1}, {"b": 3, "c": 1})`, output: `{"a": 2, "b": 4, "c": 1}` }
    ],
    constraints: ["Return a new dict","Do not modify a or b"],
    hints: ["Copy a into result","For each key in b, result[k] = result.get(k, 0) + b[k]"],
    approach: `Start from a copy of a, then add counts from b key by key.`,
    starterCode: `def merge_counts(a, b):
    # Write your code here
    pass
`,
    solutionCode: `def merge_counts(a, b):
    result = dict(a)
    for word, count in b.items():
        result[word] = result.get(word, 0) + count
    return result
`,
    tests: [
      { label: `Overlap`, call: `merge_counts({"a": 2, "b": 1}, {"b": 3, "c": 1})`, expected: `{"a": 2, "b": 4, "c": 1}` },
      { label: `Empty second`, call: `merge_counts({"x": 1}, {})`, expected: `{"x": 1}` }
    ],
  }),

  buildBasicsProblem({
    order: 118,
    slug: "parse-csv-fields",
    title: "Parse CSV Line",
    difficulty: "medium",
    category: "strings",
    description: `Write parse_csv_line(line) that splits a comma-separated line into a list of stripped strings.

Example: '  apple, banana ,cherry  ' -> ['apple', 'banana', 'cherry']`,
    examples: [
      { input: `parse_csv_line("  apple, banana ,cherry  ")`, output: `["apple", "banana", "cherry"]` }
    ],
    constraints: ["Strip whitespace from each field","Assume simple CSV (no quoted commas)"],
    hints: ["line.split(",")","part.strip() for each part"],
    approach: `Split on commas, strip each piece, return the list.`,
    starterCode: `def parse_csv_line(line):
    # Write your code here
    pass
`,
    solutionCode: `def parse_csv_line(line):
    return [part.strip() for part in line.split(",")]
`,
    tests: [
      { label: `Spaced fields`, call: `parse_csv_line("  apple, banana ,cherry  ")`, expected: `["apple", "banana", "cherry"]` },
      { label: `Single field`, call: `parse_csv_line("solo")`, expected: `["solo"]` }
    ],
  }),

  buildBasicsProblem({
    order: 119,
    slug: "password-rules",
    title: "Password Strength Check",
    difficulty: "medium",
    category: "strings",
    description: `Write is_strong_password(text) returning True only if ALL hold:

- length >= 8
- contains at least one digit
- contains at least one uppercase letter
- contains at least one lowercase letter`,
    examples: [
      { input: `is_strong_password("Abcdef1!")`, output: `True` },
      { input: `is_strong_password("Abcdefgh")`, output: `False` }
    ],
    constraints: ["Return a boolean","Do not use regex (use str methods)"],
    hints: ["any(ch.isdigit() for ch in text)","any(ch.isupper() ...), any(ch.islower() ...)"],
    approach: `Check length and character-class flags with any() over the string.`,
    starterCode: `def is_strong_password(text):
    # Write your code here
    pass
`,
    solutionCode: `def is_strong_password(text):
    if len(text) < 8:
        return False
    has_digit = any(ch.isdigit() for ch in text)
    has_upper = any(ch.isupper() for ch in text)
    has_lower = any(ch.islower() for ch in text)
    return has_digit and has_upper and has_lower
`,
    tests: [
      { label: `Strong`, call: `is_strong_password("Abcdef1!")`, expected: `True` },
      { label: `No digit`, call: `is_strong_password("Abcdefgh")`, expected: `False` },
      { label: `Too short`, call: `is_strong_password("Ab1")`, expected: `False` }
    ],
  }),

  buildBasicsProblem({
    order: 120,
    slug: "zip-pair-sums",
    title: "Pairwise Sums with Zip",
    difficulty: "medium",
    category: "functions",
    description: `Write pair_sums(a, b) that zips two lists and returns a list of sums for each aligned pair.

If lengths differ, stop at the shorter list (like zip).`,
    examples: [
      { input: `pair_sums([1, 2, 3], [10, 20, 30])`, output: `[11, 22, 33]` }
    ],
    constraints: ["Use zip","Return a list of numbers"],
    hints: ["[x + y for x, y in zip(a, b)]"],
    approach: `zip pairs elements; a comprehension sums each tuple.`,
    starterCode: `def pair_sums(a, b):
    # Write your code here
    pass
`,
    solutionCode: `def pair_sums(a, b):
    return [x + y for x, y in zip(a, b)]
`,
    tests: [
      { label: `Equal length`, call: `pair_sums([1, 2, 3], [10, 20, 30])`, expected: `[11, 22, 33]` },
      { label: `Unequal`, call: `pair_sums([1, 2], [5, 6, 7])`, expected: `[6, 8]` }
    ],
  }),

  buildBasicsProblem({
    order: 121,
    slug: "symmetric-difference",
    title: "Symmetric Difference List",
    difficulty: "medium",
    category: "sets",
    description: `Write sym_diff_sorted(a, b) that returns the symmetric difference of two iterables as a sorted list.`,
    examples: [
      { input: `sym_diff_sorted([1, 2, 3], [3, 4, 5])`, output: `[1, 2, 4, 5]` }
    ],
    constraints: ["Use set ^ or symmetric_difference","Return a sorted list"],
    hints: ["return sorted(set(a) ^ set(b))"],
    approach: `Convert to sets, apply ^, sort for deterministic output.`,
    starterCode: `def sym_diff_sorted(a, b):
    # Write your code here
    pass
`,
    solutionCode: `def sym_diff_sorted(a, b):
    return sorted(set(a) ^ set(b))
`,
    tests: [
      { label: `Overlap`, call: `sym_diff_sorted([1, 2, 3], [3, 4, 5])`, expected: `[1, 2, 4, 5]` },
      { label: `Identical`, call: `sym_diff_sorted([1, 2], [1, 2])`, expected: `[]` }
    ],
  }),

  buildBasicsProblem({
    order: 122,
    slug: "sort-tuples-by-score",
    title: "Sort Records by Score",
    difficulty: "medium",
    category: "tuples",
    description: `Each record is a tuple (name, score). Write top_scores(records, n) returning the n highest-scoring names in descending score order.

If scores tie, sort names alphabetically ascending among ties.`,
    examples: [
      { input: `top_scores([("Ann", 88), ("Bob", 92), ("Cal", 92)], 2)`, output: `["Bob", "Cal"]` }
    ],
    constraints: ["Return a list of names only","Use sorted with a key"],
    hints: ["sorted(records, key=lambda r: (-r[1], r[0]))","Take first n names"],
    approach: `Sort by negative score then name; slice the first n names.`,
    starterCode: `def top_scores(records, n):
    # Write your code here
    pass
`,
    solutionCode: `def top_scores(records, n):
    ordered = sorted(records, key=lambda r: (-r[1], r[0]))
    return [name for name, score in ordered[:n]]
`,
    tests: [
      { label: `Top 2`, call: `top_scores([("Ann", 88), ("Bob", 92), ("Cal", 92), ("Di", 70)], 2)`, expected: `["Bob", "Cal"]` },
      { label: `Tie break`, call: `top_scores([("Zed", 50), ("Amy", 50)], 2)`, expected: `["Amy", "Zed"]` }
    ],
  }),

  buildBasicsProblem({
    order: 123,
    slug: "safe-divide",
    title: "Safe Division",
    difficulty: "medium",
    category: "exceptions",
    description: `Write safe_divide(a, b) that returns a / b.

If b is zero, return None instead of raising ZeroDivisionError.`,
    examples: [
      { input: `safe_divide(10, 2)`, output: `5.0` },
      { input: `safe_divide(5, 0)`, output: `None` }
    ],
    constraints: ["Use try / except ZeroDivisionError"],
    hints: ["try: return a / b except ZeroDivisionError: return None"],
    approach: `Catch division-by-zero and return None as a sentinel.`,
    starterCode: `def safe_divide(a, b):
    # Write your code here
    pass
`,
    solutionCode: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None
`,
    tests: [
      { label: `Normal`, call: `safe_divide(10, 2)`, expected: `5.0` },
      { label: `Zero`, call: `safe_divide(5, 0)`, expected: `None` }
    ],
  }),

  buildBasicsProblem({
    order: 124,
    slug: "lines-from-text",
    title: "Non-Empty Lines from Text",
    difficulty: "medium",
    category: "files",
    description: `Write non_empty_lines(text) that splits multiline text on newlines and returns stripped non-empty lines in order.

Treat blank or whitespace-only lines as empty.`,
    examples: [
      { input: `non_empty_lines("alpha\\n\\n beta \\n\\ngamma")`, output: `["alpha", "beta", "gamma"]` }
    ],
    constraints: ["Do not read from disk — operate on the string","Preserve order"],
    hints: ["text.splitlines()","if line.strip(): ..."],
    approach: `Splitlines, strip each line, keep those with content.`,
    starterCode: `def non_empty_lines(text):
    # Write your code here
    pass
`,
    solutionCode: `def non_empty_lines(text):
    result = []
    for line in text.splitlines():
        stripped = line.strip()
        if stripped:
            result.append(stripped)
    return result
`,
    tests: [
      { label: `Mixed blank lines`, call: `non_empty_lines("alpha\\n\\n beta \\n\\ngamma")`, expected: `["alpha", "beta", "gamma"]` },
      { label: `All blank`, call: `non_empty_lines("  \\n\\n  ")`, expected: `[]` }
    ],
  }),

  buildBasicsProblem({
    order: 125,
    slug: "stats-with-math",
    title: "Hypotenuse and Rounded Root",
    difficulty: "medium",
    category: "modules",
    description: `Using the math module, implement:

- hypotenuse(a, b) -> math.hypot(a, b)
- round_root(x, digits=2) -> round(math.sqrt(x), digits) for x >= 0; return None if x < 0`,
    examples: [
      { input: `hypotenuse(3, 4)`, output: `5.0` },
      { input: `round_root(2)`, output: `1.41` }
    ],
    constraints: ["import math","Do not use ** 0.5 for sqrt"],
    hints: ["math.hypot handles legs","math.sqrt for round_root"],
    approach: `Delegate to math.hypot and math.sqrt; guard negative inputs.`,
    starterCode: `import math

def hypotenuse(a, b):
    # Write your code here
    pass

def round_root(x, digits=2):
    # Write your code here
    pass
`,
    solutionCode: `import math

def hypotenuse(a, b):
    return math.hypot(a, b)

def round_root(x, digits=2):
    if x < 0:
        return None
    return round(math.sqrt(x), digits)
`,
    tests: [
      { label: `3-4-5`, call: `hypotenuse(3, 4)`, expected: `5.0` },
      { label: `Sqrt 2`, call: `round_root(2)`, expected: `1.41` },
      { label: `Negative`, call: `round_root(-1)`, expected: `None` }
    ],
  }),

  buildBasicsProblem({
    order: 126,
    slug: "product-class",
    title: "Product Inventory Item",
    difficulty: "medium",
    category: "oop",
    description: `Create a Product class:

- __init__(self, name, price, qty)
- total_value() -> price * qty
- restock(self, amount) adds amount to qty when amount > 0
- sell(self, amount) subtracts when 0 < amount <= qty; otherwise no change`,
    examples: [
      { input: `Product("Pen", 2.5, 10).total_value()`, output: `25.0` }
    ],
    constraints: ["Store name, price, qty on self","Ignore invalid amounts"],
    hints: ["Check amount > 0 before restock","sell only when amount <= self.qty"],
    approach: `Methods guard invalid updates; total_value is a simple product.`,
    starterCode: `class Product:
    def __init__(self, name, price, qty):
        pass

    def total_value(self):
        pass

    def restock(self, amount):
        pass

    def sell(self, amount):
        pass
`,
    solutionCode: `class Product:
    def __init__(self, name, price, qty):
        self.name = name
        self.price = price
        self.qty = qty

    def total_value(self):
        return self.price * self.qty

    def restock(self, amount):
        if amount > 0:
            self.qty += amount

    def sell(self, amount):
        if amount > 0 and amount <= self.qty:
            self.qty -= amount
`,
    tests: [
      {
        kind: "custom" as const,
        label: `Restock and sell`,
        code: `p = Product("Pen", 2.5, 10)
assert p.total_value() == 25.0
p.restock(5)
p.sell(3)
assert p.qty == 12
p.sell(100)
assert p.qty == 12`,
      }
    ],
  }),

  buildBasicsProblem({
    order: 127,
    slug: "merge-json-configs",
    title: "Merge JSON Config Strings",
    difficulty: "medium",
    category: "json",
    description: `Write merge_configs(json_a, json_b) that parses two JSON object strings and returns a new dict.

Keys from json_b overwrite json_a on conflict. Use json.loads / build dict merge.`,
    examples: [
      { input: `merge_configs('{"theme": "light"}', '{"theme": "dark"}')`, output: `{"theme": "dark"}` }
    ],
    constraints: ["Return a Python dict","Later keys win"],
    hints: ["a = json.loads(json_a)","{**a, **b} or a.copy(); update(b)"],
    approach: `Parse both strings, shallow-merge with b overriding a.`,
    starterCode: `import json

def merge_configs(json_a, json_b):
    # Write your code here
    pass
`,
    solutionCode: `import json

def merge_configs(json_a, json_b):
    a = json.loads(json_a)
    b = json.loads(json_b)
    merged = dict(a)
    merged.update(b)
    return merged
`,
    tests: [
      { label: `Override theme`, call: `merge_configs('{"theme": "light", "lang": "en"}', '{"theme": "dark"}')`, expected: `{"theme": "dark", "lang": "en"}` },
      { label: `Disjoint keys`, call: `merge_configs('{"a": 1}', '{"b": 2}')`, expected: `{"a": 1, "b": 2}` }
    ],
  }),

  buildBasicsProblem({
    order: 128,
    slug: "find-phones-lite",
    title: "Find Phone Numbers",
    difficulty: "medium",
    category: "regex",
    description: `Using re.findall, write find_phones(text) that returns substrings matching ###-###-#### (digits only, hyphen-separated).

Return matches in order of appearance.`,
    examples: [
      { input: `find_phones("555-123-4567")`, output: `["555-123-4567"]` }
    ],
    constraints: ["Use re.findall","Pattern is three groups of digits separated by hyphens"],
    hints: ["r\"\\d{3}-\\d{3}-\\d{4}\""],
    approach: `A simple digit-and-hyphen regex; findall collects all matches.`,
    starterCode: `import re

def find_phones(text):
    # Write your code here
    pass
`,
    solutionCode: `import re

def find_phones(text):
    return re.findall(r"\\d{3}-\\d{3}-\\d{4}", text)
`,
    tests: [
      { label: `Two numbers`, call: `find_phones("Call 555-123-4567 or 800-999-0000 today")`, expected: `["555-123-4567", "800-999-0000"]` },
      { label: `None`, call: `find_phones("no phones")`, expected: `[]` }
    ],
  }),

  buildBasicsProblem({
    order: 129,
    slug: "comprehension-grid",
    title: "Build a Number Grid",
    difficulty: "medium",
    category: "comprehensions",
    description: `Write make_grid(rows, cols) returning a list of lists where cell (r, c) equals r * cols + c + 1 (1-based).

Example: make_grid(2, 3) -> [[1, 2, 3], [4, 5, 6]]`,
    examples: [
      { input: `make_grid(2, 3)`, output: `[[1, 2, 3], [4, 5, 6]]` }
    ],
    constraints: ["Use nested list comprehensions","rows, cols >= 1"],
    hints: ["Outer r in range(rows), inner c in range(cols)","r * cols + c + 1"],
    approach: `Nested comprehension builds each row vector in one expression.`,
    starterCode: `def make_grid(rows, cols):
    # Write your code here
    pass
`,
    solutionCode: `def make_grid(rows, cols):
    return [[r * cols + c + 1 for c in range(cols)] for r in range(rows)]
`,
    tests: [
      { label: `2x3`, call: `make_grid(2, 3)`, expected: `[[1, 2, 3], [4, 5, 6]]` },
      { label: `1x1`, call: `make_grid(1, 1)`, expected: `[[1]]` }
    ],
  }),

  buildBasicsProblem({
    order: 130,
    slug: "rotate-list",
    title: "Rotate List Left",
    difficulty: "medium",
    category: "lists",
    description: `Write rotate_left(items, k) that returns a new list rotated left by k positions.

rotate_left([1, 2, 3, 4, 5], 2) -> [3, 4, 5, 1, 2]

Use k % len(items) when items is non-empty; return [] for empty input.`,
    examples: [
      { input: `rotate_left([1, 2, 3, 4, 5], 2)`, output: `[3, 4, 5, 1, 2]` }
    ],
    constraints: ["Return a new list","Do not mutate the original"],
    hints: ["k = k % len(items)","items[k:] + items[:k]"],
    approach: `Slice into tail+head segments and concatenate.`,
    starterCode: `def rotate_left(items, k):
    # Write your code here
    pass
`,
    solutionCode: `def rotate_left(items, k):
    if not items:
        return []
    k = k % len(items)
    return items[k:] + items[:k]
`,
    tests: [
      { label: `By 2`, call: `rotate_left([1, 2, 3, 4, 5], 2)`, expected: `[3, 4, 5, 1, 2]` },
      { label: `Full cycle`, call: `rotate_left([1, 2, 3], 3)`, expected: `[1, 2, 3]` },
      { label: `Empty`, call: `rotate_left([], 5)`, expected: `[]` }
    ],
  }),

  buildBasicsProblem({
    order: 131,
    slug: "invert-dict-unique",
    title: "Invert Unique Mapping",
    difficulty: "medium",
    category: "dictionaries",
    description: `Write invert_unique(mapping) that swaps keys and values into a new dict.

If any value would collide (duplicate values), return None instead.`,
    examples: [
      { input: `invert_unique({"a": 1, "b": 2})`, output: `{1: 'a', 2: 'b'}` }
    ],
    constraints: ["Return None on duplicate values","Do not mutate input"],
    hints: ["Track seen values in a set","Return None if value already seen"],
    approach: `Build reversed dict; abort with None when a value repeats.`,
    starterCode: `def invert_unique(mapping):
    # Write your code here
    pass
`,
    solutionCode: `def invert_unique(mapping):
    seen = set()
    result = {}
    for key, value in mapping.items():
        if value in seen:
            return None
        seen.add(value)
        result[value] = key
    return result
`,
    tests: [
      { label: `Unique`, call: `invert_unique({"a": 1, "b": 2})`, expected: `{1: 'a', 2: 'b'}` },
      { label: `Duplicate values`, call: `invert_unique({"a": 1, "b": 1})`, expected: `None` }
    ],
  }),

  buildBasicsProblem({
    order: 132,
    slug: "phrase-palindrome",
    title: "Phrase Palindrome Check",
    difficulty: "medium",
    category: "strings",
    description: `Write is_phrase_palindrome(text) returning True if letters-only lowercase form reads the same forward and backward.

Ignore spaces, punctuation, and case.
Example: "A man, a plan, a canal: Panama" -> True`,
    examples: [
      { input: `is_phrase_palindrome("Race car")`, output: `True` }
    ],
    constraints: ["Use str methods only (no regex required)","Compare cleaned string to its reverse"],
    hints: ["Keep ch.lower() when ch.isalpha()","cleaned == cleaned[::-1]"],
    approach: `Filter to alphabetic chars, lowercase, compare to reverse.`,
    starterCode: `def is_phrase_palindrome(text):
    # Write your code here
    pass
`,
    solutionCode: `def is_phrase_palindrome(text):
    cleaned = "".join(ch.lower() for ch in text if ch.isalpha())
    return cleaned == cleaned[::-1]
`,
    tests: [
      { label: `Classic phrase`, call: `is_phrase_palindrome("A man, a plan, a canal: Panama")`, expected: `True` },
      { label: `Not palindrome`, call: `is_phrase_palindrome("hello")`, expected: `False` },
      { label: `Empty`, call: `is_phrase_palindrome("")`, expected: `True` }
    ],
  }),

  buildBasicsProblem({
    order: 133,
    slug: "nested-get-path",
    title: "Nested Dict Path Lookup",
    difficulty: "medium",
    category: "dictionaries",
    description: `Write get_path(data, keys) that walks a nested dict using a list of keys.

Return the value at the path, or None if any key is missing.`,
    examples: [
      { input: `get_path({"a": {"b": 3}}, ["a", "b"])`, output: `3` }
    ],
    constraints: ["Do not raise KeyError","keys may be empty (return data itself)"],
    hints: ["current = data; for key in keys: ...","if key not in current: return None"],
    approach: `Iteratively descend; short-circuit None on missing keys.`,
    starterCode: `def get_path(data, keys):
    # Write your code here
    pass
`,
    solutionCode: `def get_path(data, keys):
    current = data
    for key in keys:
        if not isinstance(current, dict) or key not in current:
            return None
        current = current[key]
    return current
`,
    tests: [
      { label: `Deep path`, call: `get_path({"a": {"b": {"c": 42}}}, ["a", "b", "c"])`, expected: `42` },
      { label: `Missing`, call: `get_path({"a": 1}, ["a", "b"])`, expected: `None` },
      { label: `Empty path`, call: `get_path({"x": 1}, [])`, expected: `{"x": 1}` }
    ],
  }),

  buildBasicsProblem({
    order: 134,
    slug: "click-counter-class",
    title: "Click Counter Class",
    difficulty: "medium",
    category: "oop",
    description: `Create ClickCounter with:

- __init__(self) starting count at 0
- click(self) increments by 1
- reset(self) sets count to 0
- read(self) returns current count`,
    examples: [
      { input: `ClickCounter after two click()`, output: `2` }
    ],
    constraints: ["count stored on self","read does not change count"],
    hints: ["self.count = 0 in __init__"],
    approach: `Simple mutable state with increment and reset methods.`,
    starterCode: `class ClickCounter:
    def __init__(self):
        pass

    def click(self):
        pass

    def reset(self):
        pass

    def read(self):
        pass
`,
    solutionCode: `class ClickCounter:
    def __init__(self):
        self.count = 0

    def click(self):
        self.count += 1

    def reset(self):
        self.count = 0

    def read(self):
        return self.count
`,
    tests: [
      {
        kind: "custom" as const,
        label: `Clicks and reset`,
        code: `c = ClickCounter()
c.click()
c.click()
assert c.read() == 2
c.reset()
assert c.read() == 0`,
      }
    ],
  }),

  buildBasicsProblem({
    order: 135,
    slug: "parse-int-list",
    title: "Parse Integer List Safely",
    difficulty: "medium",
    category: "exceptions",
    description: `Write parse_int_list(strings) that converts each string to int.

Skip any item that raises ValueError; return a list of successful conversions in order.`,
    examples: [
      { input: `parse_int_list(["10", "bad", "20"])`, output: `[10, 20]` }
    ],
    constraints: ["Use try / except per item","Do not stop at first failure"],
    hints: ["for s in strings: try int(s) except ValueError: continue"],
    approach: `Attempt int() on each string; collect successes only.`,
    starterCode: `def parse_int_list(strings):
    # Write your code here
    pass
`,
    solutionCode: `def parse_int_list(strings):
    result = []
    for s in strings:
        try:
            result.append(int(s))
        except ValueError:
            continue
    return result
`,
    tests: [
      { label: `Mixed valid/invalid`, call: `parse_int_list(["1", "x", "3", "4.5", "5"])`, expected: `[1, 3, 5]` },
      { label: `All bad`, call: `parse_int_list(["a", "b"])`, expected: `[]` }
    ],
  }),

  buildBasicsProblem({
    order: 136,
    slug: "group-by-category",
    title: "Group Records by Key",
    difficulty: "medium",
    category: "dictionaries",
    description: `Each record is a dict with keys "category" and "name".

Write group_names(records) returning a dict mapping each category to a list of names (insertion order within each list).`,
    examples: [
      { input: `group_names([{"category": "A", "name": "x"}, {"category": "A", "name": "y"}])`, output: `{"A": ["x", "y"]}` }
    ],
    constraints: ["Preserve first-seen category order in output dict (Python 3.7+)","Append names in encounter order"],
    hints: ["groups.setdefault(category, []).append(name)"],
    approach: `Use setdefault to build lists per category while iterating records.`,
    starterCode: `def group_names(records):
    # Write your code here
    pass
`,
    solutionCode: `def group_names(records):
    groups = {}
    for record in records:
        category = record["category"]
        groups.setdefault(category, []).append(record["name"])
    return groups
`,
    tests: [
      { label: `Two categories`, call: `group_names([{"category": "fruit", "name": "apple"}, {"category": "veg", "name": "carrot"}, {"category": "fruit", "name": "banana"}])`, expected: `{"fruit": ["apple", "banana"], "veg": ["carrot"]}` }
    ],
  }),

  buildBasicsProblem({
    order: 137,
    slug: "pipeline-transform",
    title: "Transform Pipeline",
    difficulty: "medium",
    category: "functions",
    description: `Implement three functions:

- only_positive(numbers) — values > 0
- square_all(numbers) — each value squared
- pipeline(numbers) — apply only_positive then square_all, return list`,
    examples: [
      { input: `pipeline([-1, 2, 3])`, output: `[4, 9]` }
    ],
    constraints: ["pipeline must call the other two functions","Use list comprehensions or filter/map"],
    hints: ["return square_all(only_positive(numbers))"],
    approach: `Compose small pure filters; pipeline chains them.`,
    starterCode: `def only_positive(numbers):
    # Write your code here
    pass

def square_all(numbers):
    # Write your code here
    pass

def pipeline(numbers):
    # Write your code here
    pass
`,
    solutionCode: `def only_positive(numbers):
    return [n for n in numbers if n > 0]

def square_all(numbers):
    return [n * n for n in numbers]

def pipeline(numbers):
    return square_all(only_positive(numbers))
`,
    tests: [
      { label: `Mixed input`, call: `pipeline([-2, -1, 0, 1, 2, 3])`, expected: `[1, 4, 9]` },
      { label: `All negative`, call: `pipeline([-5, -1])`, expected: `[]` }
    ],
  }),

  buildBasicsProblem({
    order: 138,
    slug: "strip-html-tags",
    title: "Strip Simple HTML Tags",
    difficulty: "medium",
    category: "regex",
    description: `Write strip_tags(html) that removes simple tags like <b>...</b> and <i>...</i>, returning plain inner text concatenated in order.

Use re.sub to replace tags with empty strings. Assume well-formed tags, no nesting of same tag.`,
    examples: [
      { input: `strip_tags("<b>Hi</b>")`, output: `"Hi"` }
    ],
    constraints: ["Use re.sub","Tags are lowercase letters inside angle brackets"],
    hints: ["re.sub(r\"</?\\w+>\", \"\", html)"],
    approach: `Regex removes opening/closing tag tokens, leaving text content.`,
    starterCode: `import re

def strip_tags(html):
    # Write your code here
    pass
`,
    solutionCode: `import re

def strip_tags(html):
    return re.sub(r"</?\\w+>", "", html)
`,
    tests: [
      { label: `Bold and italic`, call: `strip_tags("<b>Hi</b> <i>there</i>")`, expected: `"Hi there"` },
      { label: `No tags`, call: `strip_tags("plain")`, expected: `"plain"` }
    ],
  }),
];
