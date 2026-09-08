import { buildBasicsProblem } from "./helpers";

export const advancedProblems = [
  buildBasicsProblem({
    order: 28,
    slug: "squares-generator",
    title: "Squares Generator",
    difficulty: "hard",
    category: "comprehensions",
    description: `Write squares_gen(n) as a generator function that yields 0^2, 1^2, ..., (n-1)^2 using yield (not a list).

Also write squares_expr(n) that returns a generator expression for the same sequence.`,
    examples: [
      { input: "list(squares_gen(5))", output: "[0, 1, 4, 9, 16]" },
    ],
    constraints: ["squares_gen must use yield. Do not return a list from it."],
    hints: [
      "yield inside a loop makes a generator.",
      "(x**2 for x in range(n)) is a generator expression.",
    ],
    approach: `Generators compute values on demand. yield pauses the function; a generator expression is the comprehension form.`,
    starterCode: `def squares_gen(n):
    # Write your code here
    pass

def squares_expr(n):
    # Write your code here
    pass
`,
    solutionCode: `def squares_gen(n):
    i = 0
    while i < n:
        yield i ** 2
        i += 1

def squares_expr(n):
    return (x ** 2 for x in range(n))
`,
    tests: [
      {
        kind: "custom",
        label: "Yield values",
        code: `import types
g = squares_gen(5)
assert isinstance(g, types.GeneratorType)
assert list(g) == [0, 1, 4, 9, 16]
e = squares_expr(5)
assert list(e) == [0, 1, 4, 9, 16]`,
      },
      {
        kind: "custom",
        label: "Empty",
        code: `assert list(squares_gen(0)) == []`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 29,
    slug: "flatten-matrix",
    title: "Flatten a Matrix",
    difficulty: "hard",
    category: "comprehensions",
    description: `Write flatten(matrix) that turns a 2D list into a 1D list using a nested comprehension.

Write make_matrix(n) that returns an n x n matrix where cell [i][j] is i + j.`,
    examples: [
      { input: "flatten([[1, 2, 3], [4, 5, 6]])", output: "[1, 2, 3, 4, 5, 6]" },
      { input: "make_matrix(3)", output: "[[0, 1, 2], [1, 2, 3], [2, 3, 4]]" },
    ],
    constraints: ["Use nested comprehensions"],
    hints: ["[num for row in matrix for num in row]", "[[i + j for j in range(n)] for i in range(n)]"],
    approach: `Nested comprehensions walk inner sequences. The flatten pattern is two for clauses in one list.`,
    starterCode: `def flatten(matrix):
    # Write your code here
    pass

def make_matrix(n):
    # Write your code here
    pass
`,
    solutionCode: `def flatten(matrix):
    return [num for row in matrix for num in row]

def make_matrix(n):
    return [[i + j for j in range(n)] for i in range(n)]
`,
    tests: [
      { label: "Flatten", call: "flatten([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", expected: "[1, 2, 3, 4, 5, 6, 7, 8, 9]" },
      { label: "Filter-style flatten", call: "flatten([[1, 2], [3, 4], [5, 6]])", expected: "[1, 2, 3, 4, 5, 6]" },
      { label: "Matrix 3", call: "make_matrix(3)", expected: "[[0, 1, 2], [1, 2, 3], [2, 3, 4]]" },
    ],
  }),

  buildBasicsProblem({
    order: 30,
    slug: "repeat-decorator",
    title: "Repeat Decorator",
    difficulty: "hard",
    category: "decorators",
    description: `Write a decorator factory repeat(times) so that:

@repeat(times=3)
def greet(name):
    return f"Hello, {name}!"

greet("Alice") returns a list of the function's return value, repeated that many times.

The decorator must work with *args and **kwargs.`,
    examples: [
      {
        input: '@repeat(times=3) then greet("Alice")',
        output: '["Hello, Alice!", "Hello, Alice!", "Hello, Alice!"]',
      },
    ],
    constraints: ["repeat(times) returns a decorator that returns a wrapper"],
    hints: [
      "Three nested functions: repeat -> decorator -> wrapper.",
      "Call func(*args, **kwargs) inside a loop and collect results.",
    ],
    approach: `A decorator is a function that takes a function and returns a wrapper. A decorator with arguments is a factory that returns the actual decorator.`,
    starterCode: `def repeat(times):
    # Write your code here
    pass
`,
    solutionCode: `def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator
`,
    tests: [
      {
        kind: "custom",
        label: "Repeat greet",
        code: `@repeat(times=3)
def greet(name):
    return f"Hello, {name}!"
assert greet("Alice") == ["Hello, Alice!", "Hello, Alice!", "Hello, Alice!"]`,
      },
      {
        kind: "custom",
        label: "Repeat once",
        code: `@repeat(times=1)
def add(x, y):
    return x + y
assert add(2, 3) == [5]`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 31,
    slug: "custom-age-error",
    title: "Raise a Custom Error",
    difficulty: "hard",
    category: "exceptions",
    description: `Define CustomError as a subclass of Exception.

Write check_age(age) that:
- raises CustomError("Age cannot be negative") if age < 0
- raises CustomError("Must be 18 or older") if age < 18
- returns True otherwise`,
    examples: [
      { input: "check_age(20)", output: "True" },
      { input: "check_age(15)", output: "raises CustomError" },
    ],
    constraints: ["Use raise CustomError(...)"],
    hints: ["class CustomError(Exception): pass", "Check negative before the under-18 rule."],
    approach: `raise interrupts the function. Custom exception types make errors specific and catchable.`,
    starterCode: `class CustomError(Exception):
    pass

def check_age(age):
    # Write your code here
    pass
`,
    solutionCode: `class CustomError(Exception):
    pass

def check_age(age):
    if age < 0:
        raise CustomError("Age cannot be negative")
    if age < 18:
        raise CustomError("Must be 18 or older")
    return True
`,
    tests: [
      { label: "Adult", call: "check_age(20)", expected: "True" },
      {
        kind: "custom",
        label: "Under 18",
        code: `try:
    check_age(15)
    raise AssertionError("expected CustomError")
except CustomError as e:
    assert str(e) == "Must be 18 or older"`,
      },
      {
        kind: "custom",
        label: "Negative",
        code: `try:
    check_age(-1)
    raise AssertionError("expected CustomError")
except CustomError as e:
    assert str(e) == "Age cannot be negative"`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 32,
    slug: "person-special-methods",
    title: "Person Special Methods",
    difficulty: "hard",
    category: "oop",
    description: `Implement class Person(name, age) with:

- __str__ -> "{name}, {age}"
- __eq__ -> True when ages are equal
- __lt__ -> True when self.age < other.age
- __len__ -> age
- __add__ -> sum of the two ages (an int)`,
    examples: [
      { input: 'str(Person("John", 25))', output: '"John, 25"' },
      { input: "Person('A', 25) < Person('B', 30)", output: "True" },
    ],
    constraints: ["Implement the dunder methods listed"],
    hints: ["__eq__ and __lt__ enable == and <.", "__add__ should return a number, not a Person."],
    approach: `Special methods hook objects into Python operators and built-ins like str, len, and +.`,
    starterCode: `class Person:
    def __init__(self, name, age):
        pass
`,
    solutionCode: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name}, {self.age}"

    def __eq__(self, other):
        return self.age == other.age

    def __lt__(self, other):
        return self.age < other.age

    def __len__(self):
        return self.age

    def __add__(self, other):
        return self.age + other.age
`,
    tests: [
      {
        kind: "custom",
        label: "Dunders",
        code: `p1 = Person("John", 25)
p2 = Person("Jane", 30)
p3 = Person("Jake", 25)
assert str(p1) == "John, 25"
assert p1 == p3
assert p1 != p2
assert p1 < p2
assert len(p1) == 25
assert p1 + p2 == 55`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 33,
    slug: "extract-phones",
    title: "Extract Phone Numbers",
    difficulty: "hard",
    category: "regex",
    description: `Write extract_phones(text) that finds US-style phone numbers and returns them as a list of 10-digit strings (digits only).

Accept formats such as:
- (555) 123-4567
- 555.987.6543
- 555-123-4567
- 5551234567`,
    examples: [
      {
        input: 'extract_phones("Call (555) 123-4567 or 555.987.6543")',
        output: '["5551234567", "5559876543"]',
      },
    ],
    constraints: ["Use the re module"],
    hints: [
      "Find three groups of 3, 3, and 4 digits with optional separators.",
      "Join the groups to a 10-digit string.",
    ],
    approach: `Use capturing groups for the digit blocks, then concatenate. Put "-" at the end of character classes so it is not a range.`,
    starterCode: `import re

def extract_phones(text):
    # Write your code here
    pass
`,
    solutionCode: `import re

def extract_phones(text):
    pairs = re.findall(r"\\(?(\\d{3})\\)?[).\\s.-]*(\\d{3})[.\\s-]*(\\d{4})", text)
    return [a + b + c for a, b, c in pairs]
`,
    tests: [
      {
        label: "Two formats",
        call: 'extract_phones("Phone: (555) 123-4567, 555.987.6543")',
        expected: '["5551234567", "5559876543"]',
      },
      {
        label: "Plain digits",
        call: 'extract_phones("call 5551234567 now")',
        expected: '["5551234567"]',
      },
    ],
  }),

  buildBasicsProblem({
    order: 34,
    slug: "json-file-roundtrip",
    title: "JSON File Roundtrip",
    difficulty: "hard",
    category: "json",
    description: `Implement:

- save_json(path, data) — write a Python object as indented JSON (indent=4)
- load_json(path) — read it back

The loaded object must equal the original data.`,
    examples: [
      {
        input: 'save_json("d.json", {"name": "John", "age": 25}) then load_json("d.json")',
        output: '{"name": "John", "age": 25}',
      },
    ],
    constraints: ["Use json.dump / json.load and with open"],
    hints: ['json.dump(data, file, indent=4)', "json.load(file)"],
    approach: `dump writes a file; load reads it. indent=4 makes the file human-readable.`,
    starterCode: `import json

def save_json(path, data):
    # Write your code here
    pass

def load_json(path):
    # Write your code here
    pass
`,
    solutionCode: `import json

def save_json(path, data):
    with open(path, "w") as file:
        json.dump(data, file, indent=4)

def load_json(path):
    with open(path, "r") as file:
        return json.load(file)
`,
    tests: [
      {
        kind: "custom",
        label: "Roundtrip dict",
        code: `data = {"name": "John", "age": 25, "courses": ["Python", "Math"], "active": True}
save_json("_pb_data.json", data)
assert load_json("_pb_data.json") == data`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 223,
    slug: "dotted-path-get",
    title: "Dotted Path Lookup",
    difficulty: "hard",
    category: "dictionaries",
    description: `Write get_path(data, path, default=None) that walks a nested dict using a dotted path.

Examples:
- get_path({"a": {"b": 2}}, "a.b") → 2
- get_path({"a": {"b": 2}}, "a.c", 0) → 0
- get_path({"a": 1}, "a.b") → None (or default)

If any step is missing or not a dict, return default.`,
    examples: [
      { input: 'get_path({"user": {"name": "Ada"}}, "user.name")', output: "Ada" },
      { input: 'get_path({"user": {"name": "Ada"}}, "user.age", 0)', output: "0" },
    ],
    constraints: ["Split path on '.'", "Do not raise KeyError"],
    hints: [
      "Start with cur = data and walk each key.",
      "If cur is not a dict or key is missing, return default.",
    ],
    approach: `Split the path, walk one key at a time, and bail out to default whenever the next step is unavailable.`,
    starterCode: `def get_path(data, path, default=None):
    # Write your code here
    pass
`,
    solutionCode: `def get_path(data, path, default=None):
    cur = data
    for key in path.split("."):
        if not isinstance(cur, dict) or key not in cur:
            return default
        cur = cur[key]
    return cur
`,
    tests: [
      {
        label: "Nested hit",
        call: 'get_path({"a": {"b": {"c": 9}}}, "a.b.c")',
        expected: "9",
      },
      {
        label: "Missing with default",
        call: 'get_path({"a": {"b": 1}}, "a.z", -1)',
        expected: "-1",
      },
      {
        label: "Non-dict mid path",
        call: 'get_path({"a": 1}, "a.b", "x")',
        expected: "'x'",
      },
      {
        label: "Top-level",
        call: 'get_path({"n": 3}, "n")',
        expected: "3",
      },
    ],
  }),

  buildBasicsProblem({
    order: 224,
    slug: "function-compose",
    title: "Compose Functions",
    difficulty: "hard",
    category: "functions",
    description: `Write compose(*funcs) that returns a new function.

The composed function applies the functions from right to left:
  compose(f, g, h)(x) == f(g(h(x)))

If no functions are passed, return a function that returns its argument unchanged.`,
    examples: [
      {
        input: "compose(lambda x: x + 1, lambda x: x * 2)(3)",
        output: "7",
      },
    ],
    constraints: ["Support any number of unary functions", "Right-to-left application"],
    hints: [
      "Loop over reversed(funcs) and feed the value through each.",
      "Empty compose should return identity.",
    ],
    approach: `Return a closure that starts with the input value and applies each function from right to left.`,
    starterCode: `def compose(*funcs):
    # Write your code here
    pass
`,
    solutionCode: `def compose(*funcs):
    def inner(value):
        for fn in reversed(funcs):
            value = fn(value)
        return value
    return inner
`,
    tests: [
      {
        label: "Two functions",
        call: "compose(lambda x: x + 1, lambda x: x * 2)(3)",
        expected: "7",
      },
      {
        label: "Three functions",
        call: "compose(lambda x: x - 1, lambda x: x * 3, lambda x: x + 2)(1)",
        expected: "8",
      },
      {
        label: "Identity",
        call: "compose()(42)",
        expected: "42",
      },
      {
        label: "Single",
        call: "compose(str.upper)('hi')",
        expected: "'HI'",
      },
    ],
  }),

  buildBasicsProblem({
    order: 225,
    slug: "retry-on-exception",
    title: "Retry On Exception",
    difficulty: "hard",
    category: "decorators",
    description: `Write a decorator factory retry(times) that retries a function when it raises Exception.

- times is the maximum number of attempts (must be >= 1)
- If the function succeeds, return its result
- If it fails every attempt, re-raise the last exception

Example:
  @retry(3)
  def flaky():
      ...
`,
    examples: [
      {
        input: "@retry(3) on a function that fails twice then returns 1",
        output: "1",
      },
    ],
    constraints: ["Use a nested wrapper", "Re-raise the final exception"],
    hints: [
      "Loop range(times) and try/except around fn(*args, **kwargs).",
      "Keep the last exception and raise it after the loop.",
    ],
    approach: `The factory returns a decorator. The wrapper retries the call up to times, storing the last error to re-raise.`,
    starterCode: `def retry(times):
    # Write your code here
    pass
`,
    solutionCode: `def retry(times):
    def decorator(fn):
        def wrapper(*args, **kwargs):
            last = None
            for _ in range(times):
                try:
                    return fn(*args, **kwargs)
                except Exception as e:
                    last = e
            raise last
        return wrapper
    return decorator
`,
    tests: [
      {
        kind: "custom",
        label: "Succeeds on third try",
        code: `calls = {"n": 0}
@retry(3)
def flaky():
    calls["n"] += 1
    if calls["n"] < 3:
        raise ValueError("not yet")
    return "ok"
assert flaky() == "ok"
assert calls["n"] == 3`,
      },
      {
        kind: "custom",
        label: "Raises after exhausting tries",
        code: `calls = {"n": 0}
@retry(2)
def always_fail():
    calls["n"] += 1
    raise RuntimeError("boom")
try:
    always_fail()
    assert False, "should have raised"
except RuntimeError as e:
    assert str(e) == "boom"
assert calls["n"] == 2`,
      },
      {
        kind: "custom",
        label: "First try success",
        code: `@retry(5)
def fine():
    return 99
assert fine() == 99`,
      },
    ],
  }),
];
