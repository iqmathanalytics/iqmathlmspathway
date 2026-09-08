/** Advanced / hard Python Basics problem specs (23). Plain data — consumed by build scripts. */

export const hardSpecs = [
  {
    mode: "func",
    slug: "make-multiplier",
    title: "Multiplier Closure",
    category: "functions",
    description: `Write make_multiplier(factor) that returns a function accepting one number and returning that number multiplied by factor.

The inner function must close over factor — do not use a global.`,
    constraints: ["Return a nested function", "Do not use global variables"],
    hints: [
      "def make_multiplier(factor): def inner(x): return x * factor",
      "return inner at the end of make_multiplier.",
    ],
    approach: `A closure captures variables from its enclosing scope. The factory returns a configured inner function.`,
    starter: `def make_multiplier(factor):
    # Write your code here
    pass
`,
    solution: `def make_multiplier(factor):
    def multiply(value):
        return value * factor
    return multiply
`,
    tests: [
      { label: "Double", call: "make_multiplier(2)(5)", expected: "10" },
      { label: "Triple", call: "make_multiplier(3)(4)", expected: "12" },
      { label: "Negative factor", call: "make_multiplier(-1)(7)", expected: "-7" },
    ],
    examples: [
      { input: "make_multiplier(2)(5)", output: "10" },
      { input: "make_multiplier(3)(4)", output: "12" },
    ],
  },

  {
    mode: "func",
    slug: "make-counter",
    title: "Counter Closure",
    category: "functions",
    description: `Write make_counter(start=0) that returns a function with no arguments.

Each call to the returned function increments an internal count starting at start and returns the new count.`,
    constraints: ["Use a closure to hold mutable state", "start defaults to 0"],
    hints: [
      "Use a list or nonlocal to mutate state across calls.",
      "count = [start] then count[0] += 1 works without nonlocal.",
    ],
    approach: `Closures can hold mutable state. Each call updates the enclosed counter and returns it.`,
    starter: `def make_counter(start=0):
    # Write your code here
    pass
`,
    solution: `def make_counter(start=0):
    count = [start]

    def increment():
        count[0] += 1
        return count[0]

    return increment
`,
    tests: [
      {
        kind: "custom",
        label: "Default start",
        code: `c = make_counter()
assert [c(), c(), c()] == [1, 2, 3]`,
      },
      {
        kind: "custom",
        label: "Custom start",
        code: `c = make_counter(10)
assert c() == 11`,
      },
    ],
    examples: [
      { input: "c = make_counter(); c(); c()", output: "1 then 2" },
      { input: "c = make_counter(5); c()", output: "6" },
    ],
  },

  {
    mode: "func",
    slug: "fibonacci-generator",
    title: "Fibonacci Generator",
    category: "comprehensions",
    description: `Write fibonacci_gen(count) as a generator function that yields the first count Fibonacci numbers starting with 0, 1, 1, 2, 3, ...

Use yield — do not build and return a list.`,
    constraints: ["Must use yield", "First two values are 0 and 1 when count >= 2"],
    hints: [
      "Track previous two values in a loop.",
      "yield the next sum, then shift the window forward.",
    ],
    approach: `Generator functions pause with yield. Track two running values and emit their sum each step.`,
    starter: `def fibonacci_gen(count):
    # Write your code here
    pass
`,
    solution: `def fibonacci_gen(count):
    a, b = 0, 1
    for _ in range(count):
        yield a
        a, b = b, a + b
`,
    tests: [
      { label: "First eight", call: "list(fibonacci_gen(8))", expected: "[0, 1, 1, 2, 3, 5, 8, 13]" },
      { label: "One value", call: "list(fibonacci_gen(1))", expected: "[0]" },
      {
        kind: "custom",
        label: "Is generator",
        code: `import types
assert isinstance(fibonacci_gen(5), types.GeneratorType)`,
      },
    ],
    examples: [
      { input: "list(fibonacci_gen(6))", output: "[0, 1, 1, 2, 3, 5]" },
    ],
  },

  {
    mode: "func",
    slug: "prime-sieve-gen",
    title: "Prime Generator",
    category: "comprehensions",
    description: `Write primes_up_to(limit) as a generator that yields every prime number from 2 through limit (inclusive).

Use trial division — no imports required.`,
    constraints: ["Use yield for each prime", "Return nothing for limit < 2"],
    hints: [
      "For each candidate n, test divisibility by 2 .. int(n**0.5).",
      "Skip even numbers after yielding 2.",
    ],
    approach: `Test each odd candidate for divisors up to its square root. Yield when none divide evenly.`,
    starter: `def primes_up_to(limit):
    # Write your code here
    pass
`,
    solution: `def primes_up_to(limit):
    if limit < 2:
        return
    yield 2
    n = 3
    while n <= limit:
        is_prime = True
        d = 2
        while d * d <= n:
            if n % d == 0:
                is_prime = False
                break
            d += 1
        if is_prime:
            yield n
        n += 2
`,
    tests: [
      { label: "Up to 10", call: "list(primes_up_to(10))", expected: "[2, 3, 5, 7]" },
      { label: "Up to 20", call: "list(primes_up_to(20))", expected: "[2, 3, 5, 7, 11, 13, 17, 19]" },
      { label: "Below 2", call: "list(primes_up_to(1))", expected: "[]" },
    ],
    examples: [
      { input: "list(primes_up_to(10))", output: "[2, 3, 5, 7]" },
    ],
  },

  {
    mode: "func",
    slug: "word-frequency-map",
    title: "Word Frequency Map",
    category: "comprehensions",
    description: `Write word_frequency(text) that lowercases text, splits on whitespace, and returns a dict mapping each word to its count.

Use a dict comprehension with text.count(word) or an equivalent comprehension-based approach.`,
    constraints: ["Lowercase words before counting", "Use a dict comprehension"],
    hints: [
      "words = text.lower().split()",
      "{word: words.count(word) for word in set(words)} removes duplicates as keys.",
    ],
    approach: `Split into words, deduplicate with set, then build a dict comprehension counting each unique word.`,
    starter: `def word_frequency(text):
    # Write your code here
    pass
`,
    solution: `def word_frequency(text):
    words = text.lower().split()
    return {word: words.count(word) for word in set(words)}
`,
    tests: [
      {
        label: "Simple sentence",
        call: 'word_frequency("The cat and the dog")',
        expected: '{"the": 2, "cat": 1, "and": 1, "dog": 1}',
      },
      {
        label: "Repeated words",
        call: 'word_frequency("Go go GO")',
        expected: '{"go": 3}',
      },
    ],
    examples: [
      { input: 'word_frequency("a a b")', output: '{"a": 2, "b": 1}' },
    ],
  },

  {
    mode: "func",
    slug: "shape-inheritance",
    title: "Shape and Circle",
    category: "oop",
    description: `Define class Shape with method area() that raises NotImplementedError.

Define class Circle(Shape) with __init__(self, radius) and area() returning pi * radius ** 2 (use 3.14159 for pi).`,
    constraints: ["Circle must inherit from Shape", "Shape.area raises NotImplementedError"],
    hints: [
      "class Circle(Shape):",
      "Override area() in Circle; call super().__init__() if you add one.",
    ],
    approach: `A base class defines the interface; subclasses override methods. NotImplementedError marks abstract behavior.`,
    starter: `class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        pass
`,
    solution: `class Shape:
    def area(self):
        raise NotImplementedError

class Circle(Shape):
    PI = 3.14159

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return self.PI * self.radius ** 2
`,
    tests: [
      { label: "Circle area", call: "round(Circle(2).area(), 5)", expected: "12.56636" },
      {
        kind: "custom",
        label: "Shape raises",
        code: `try:
    Shape().area()
    raise AssertionError("expected NotImplementedError")
except NotImplementedError:
    pass`,
      },
      {
        kind: "custom",
        label: "Is subclass",
        code: `assert issubclass(Circle, Shape)`,
      },
    ],
    examples: [
      { input: "round(Circle(1).area(), 5)", output: "3.14159" },
    ],
  },

  {
    mode: "func",
    slug: "celsius-property",
    title: "Temperature Property",
    category: "oop",
    description: `Implement class Temperature storing an internal _celsius value.

Expose celsius and fahrenheit as @property attributes:
- celsius getter returns _celsius; setter stores the value
- fahrenheit getter returns _celsius * 9/5 + 32; setter converts from F to C`,
    constraints: ["Use @property for both celsius and fahrenheit", "Store only _celsius internally"],
    hints: [
      "@property def celsius(self): return self._celsius",
      "@celsius.setter converts incoming values to _celsius.",
    ],
    approach: `Properties wrap attribute access. One canonical field (_celsius) with computed fahrenheit and a converting setter.`,
    starter: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
`,
    solution: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        self._celsius = value

    @property
    def fahrenheit(self):
        return self._celsius * 9 / 5 + 32

    @fahrenheit.setter
    def fahrenheit(self, value):
        self._celsius = (value - 32) * 5 / 9
`,
    tests: [
      { label: "Read celsius", call: "Temperature(25).celsius", expected: "25" },
      { label: "Read fahrenheit", call: "Temperature(0).fahrenheit", expected: "32.0" },
      {
        kind: "custom",
        label: "Set fahrenheit",
        code: `t = Temperature(0)
t.fahrenheit = 212
assert t.celsius == 100`,
      },
    ],
    examples: [
      { input: "Temperature(100).fahrenheit", output: "212.0" },
    ],
  },

  {
    mode: "func",
    slug: "employee-hierarchy",
    title: "Employee Hierarchy",
    category: "oop",
    description: `Define Employee(name, base_salary) with method pay() returning base_salary.

Define Manager(Employee) adding bonus. Manager.__init__ takes name, base_salary, bonus.
Override pay() to return base_salary + bonus using super().pay().`,
    constraints: ["Manager must call super().__init__ and super().pay()"],
    hints: [
      "super().__init__(name, base_salary) in Manager.__init__",
      "return super().pay() + self.bonus",
    ],
    approach: `Inheritance reuses parent logic. super() calls the parent version of __init__ and pay().`,
    starter: `class Employee:
    def __init__(self, name, base_salary):
        pass

    def pay(self):
        pass

class Manager(Employee):
    def __init__(self, name, base_salary, bonus):
        pass

    def pay(self):
        pass
`,
    solution: `class Employee:
    def __init__(self, name, base_salary):
        self.name = name
        self.base_salary = base_salary

    def pay(self):
        return self.base_salary

class Manager(Employee):
    def __init__(self, name, base_salary, bonus):
        super().__init__(name, base_salary)
        self.bonus = bonus

    def pay(self):
        return super().pay() + self.bonus
`,
    tests: [
      { label: "Employee pay", call: "Employee('Ana', 50000).pay()", expected: "50000" },
      { label: "Manager pay", call: "Manager('Bob', 80000, 15000).pay()", expected: "95000" },
      {
        kind: "custom",
        label: "Inheritance chain",
        code: `m = Manager("Cara", 70000, 5000)
assert isinstance(m, Employee)
assert m.name == "Cara"`,
      },
    ],
    examples: [
      { input: "Manager('Bob', 80000, 15000).pay()", output: "95000" },
    ],
  },

  {
    mode: "func",
    slug: "list-context-manager",
    title: "Append List Context Manager",
    category: "oop",
    description: `Implement class AppendList(target_list) as a context manager.

On __enter__, return target_list unchanged.
On __exit__, append the string "done" to target_list (always, even if an exception occurred).`,
    constraints: ["Implement __enter__ and __exit__", "Always append 'done' on exit"],
    hints: [
      "__enter__ returns self.target_list",
      "__exit__ receives exc_type, exc_val, exc_tb — append then return False.",
    ],
    approach: `Context managers run setup/teardown around a with block. __exit__ runs even when errors occur.`,
    starter: `class AppendList:
    def __init__(self, target_list):
        self.target_list = target_list

    def __enter__(self):
        pass

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass
`,
    solution: `class AppendList:
    def __init__(self, target_list):
        self.target_list = target_list

    def __enter__(self):
        return self.target_list

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.target_list.append("done")
        return False
`,
    tests: [
      {
        kind: "custom",
        label: "Appends on success",
        code: `items = []
with AppendList(items) as lst:
    lst.append("work")
assert items == ["work", "done"]`,
      },
      {
        kind: "custom",
        label: "Appends on error",
        code: `items = []
try:
    with AppendList(items):
        raise ValueError("fail")
except ValueError:
    pass
assert items == ["done"]`,
      },
    ],
    examples: [
      { input: 'with AppendList([]) as L: L.append("x")', output: 'list becomes ["x", "done"]' },
    ],
  },

  {
    mode: "func",
    slug: "memoize-decorator",
    title: "Memoize Decorator",
    category: "decorators",
    description: `Write decorator memoize that caches function results by argument tuple.

Repeated calls with the same args return the cached value without re-running the function.`,
    constraints: ["Use a dict keyed by args tuple", "Support *args only (no kwargs)"],
    hints: [
      "cache = {} inside memoize, before defining wrapper.",
      "if args not in cache: cache[args] = func(*args)",
    ],
    approach: `A decorator wraps a function. A dict keyed by args stores prior results — the functools.lru_cache pattern.`,
    starter: `def memoize(func):
    # Write your code here
    pass
`,
    solution: `def memoize(func):
    cache = {}

    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]

    return wrapper
`,
    tests: [
      {
        kind: "custom",
        label: "Caches calls",
        code: `calls = []
@memoize
def slow_add(a, b):
    calls.append((a, b))
    return a + b
assert slow_add(2, 3) == 5
assert slow_add(2, 3) == 5
assert calls == [(2, 3)]`,
      },
      {
        kind: "custom",
        label: "Different args",
        code: `@memoize
def double(x):
    return x * 2
assert double(4) == 8
assert double(5) == 10`,
      },
    ],
    examples: [
      { input: "@memoize on slow_add(2, 3) twice", output: "function body runs once" },
    ],
  },

  {
    mode: "func",
    slug: "log-calls-decorator",
    title: "Log Calls Decorator",
    category: "decorators",
    description: `Write decorator log_calls that wraps any function.

Before calling the original, append the function's __name__ to a module-level list CALL_LOG (create it if missing).

Return the original function's result unchanged.`,
    constraints: ["Mutate CALL_LOG list", "Preserve return value"],
    hints: [
      "CALL_LOG = [] at module level in the student's code area.",
      "CALL_LOG.append(func.__name__) inside wrapper before calling func.",
    ],
    approach: `Decorators can add side effects. Append the wrapped function's name before delegating to it.`,
    starter: `CALL_LOG = []

def log_calls(func):
    # Write your code here
    pass
`,
    solution: `CALL_LOG = []

def log_calls(func):
    def wrapper(*args, **kwargs):
        CALL_LOG.append(func.__name__)
        return func(*args, **kwargs)
    return wrapper
`,
    tests: [
      {
        kind: "custom",
        label: "Logs names",
        code: `CALL_LOG.clear()
@log_calls
def add(a, b):
    return a + b
@log_calls
def greet():
    return "hi"
assert add(1, 2) == 3
assert greet() == "hi"
assert CALL_LOG == ["add", "greet"]`,
      },
    ],
    examples: [
      { input: "@log_calls def f(): pass; f()", output: 'CALL_LOG contains "f"' },
    ],
  },

  {
    mode: "func",
    slug: "positive-args-only",
    title: "Positive Args Decorator",
    category: "decorators",
    description: `Write decorator require_positive that wraps a function taking numeric positional args.

If any argument is <= 0, raise ValueError("Arguments must be positive") before calling the wrapped function.`,
    constraints: ["Check all positional args", "Raise ValueError with exact message"],
    hints: [
      "for arg in args: if arg <= 0: raise ValueError(...)",
      "return func(*args, **kwargs) when all pass.",
    ],
    approach: `Validate inputs in the wrapper before delegating. Decorators are ideal for cross-cutting checks.`,
    starter: `def require_positive(func):
    # Write your code here
    pass
`,
    solution: `def require_positive(func):
    def wrapper(*args, **kwargs):
        for arg in args:
            if arg <= 0:
                raise ValueError("Arguments must be positive")
        return func(*args, **kwargs)
    return wrapper
`,
    tests: [
      {
        kind: "custom",
        label: "Valid args",
        code: `@require_positive
def mul(a, b):
    return a * b
assert mul(2, 3) == 6`,
      },
      {
        kind: "custom",
        label: "Zero rejected",
        code: `@require_positive
def div(a, b):
    return a / b
try:
    div(0, 5)
    raise AssertionError("expected ValueError")
except ValueError as e:
    assert str(e) == "Arguments must be positive"`,
      },
    ],
    examples: [
      { input: "@require_positive def f(x): return x; f(-1)", output: "raises ValueError" },
    ],
  },

  {
    mode: "func",
    slug: "extract-ipv4",
    title: "Extract IPv4 Addresses",
    category: "regex",
    description: `Write extract_ipv4(text) using re.findall with a capturing pattern.

Return a list of valid IPv4 strings (four dot-separated digit groups). Each octet is 0–255.`,
    constraints: ["Use the re module", "Validate octets are 0–255"],
    hints: [
      "Find \\\\d{1,3} groups separated by dots.",
      "Filter matches where all four parts int(part) <= 255.",
    ],
    approach: `Find digit groups with regex, then validate each octet is in range before accepting the match.`,
    starter: `import re

def extract_ipv4(text):
    # Write your code here
    pass
`,
    solution: `import re

def extract_ipv4(text):
    candidates = re.findall(r"\\b(\\d{1,3}(?:\\.\\d{1,3}){3})\\b", text)
    valid = []
    for ip in candidates:
        parts = ip.split(".")
        if len(parts) == 4 and all(0 <= int(p) <= 255 for p in parts):
            valid.append(ip)
    return valid
`,
    tests: [
      {
        label: "Two addresses",
        call: 'extract_ipv4("Host 192.168.0.1 and 10.0.0.5 seen")',
        expected: '["192.168.0.1", "10.0.0.5"]',
      },
      {
        label: "Rejects invalid",
        call: 'extract_ipv4("Bad 999.999.999.999 ok 127.0.0.1")',
        expected: '["127.0.0.1"]',
      },
    ],
    examples: [
      { input: 'extract_ipv4("ip 8.8.8.8")', output: '["8.8.8.8"]' },
    ],
  },

  {
    mode: "func",
    slug: "parse-log-fields",
    title: "Parse Log Fields",
    category: "regex",
    description: `Write parse_log_line(line) that parses lines like:
[ERROR] user=alice id=42 msg=File not found

Return a dict with keys level, user, id, msg using re.search and named groups.`,
    constraints: ["Use named groups (?P<name>...)", "Return None if the line does not match"],
    hints: [
      "Pattern: \\\\[(?P<level>\\\\w+)\\\\] user=(?P<user>\\\\w+) id=(?P<id>\\\\d+) msg=(?P<msg>.+)",
      "return match.groupdict() when match else None",
    ],
    approach: `Named capturing groups label regex sub-matches. groupdict() maps names to captured text.`,
    starter: `import re

def parse_log_line(line):
    # Write your code here
    pass
`,
    solution: `import re

LOG_PATTERN = re.compile(
    r"\\[(?P<level>\\w+)\\] user=(?P<user>\\w+) id=(?P<id>\\d+) msg=(?P<msg>.+)"
)

def parse_log_line(line):
    match = LOG_PATTERN.search(line)
    if not match:
        return None
    data = match.groupdict()
    data["id"] = int(data["id"])
    return data
`,
    tests: [
      {
        label: "Valid line",
        call: 'parse_log_line("[ERROR] user=alice id=42 msg=File not found")',
        expected: '{"level": "ERROR", "user": "alice", "id": 42, "msg": "File not found"}',
      },
      { label: "No match", call: 'parse_log_line("garbage")', expected: "None" },
    ],
    examples: [
      {
        input: 'parse_log_line("[INFO] user=bob id=1 msg=OK")',
        output: '{"level": "INFO", "user": "bob", "id": 1, "msg": "OK"}',
      },
    ],
  },

  {
    mode: "func",
    slug: "merge-json-strings",
    title: "Merge JSON Strings",
    category: "json",
    description: `Write merge_json(a_json, b_json) that parses two JSON strings with json.loads, merges them (b overrides a on duplicate keys), and returns a JSON string via json.dumps with sorted keys.`,
    constraints: ["Use json.loads and json.dumps", "sort_keys=True in dumps"],
    hints: [
      "merged = {**json.loads(a), **json.loads(b)}",
      'return json.dumps(merged, sort_keys=True)',
    ],
    approach: `Parse both strings to dicts, merge with spread/unpack, serialize back with sorted keys for deterministic output.`,
    starter: `import json

def merge_json(a_json, b_json):
    # Write your code here
    pass
`,
    solution: `import json

def merge_json(a_json, b_json):
    merged = {**json.loads(a_json), **json.loads(b_json)}
    return json.dumps(merged, sort_keys=True)
`,
    tests: [
      {
        label: "Merge two objects",
        call: 'merge_json(\'{"a": 1, "b": 2}\', \'{"b": 9, "c": 3}\')',
        expected: '"{\\"a\\": 1, \\"b\\": 9, \\"c\\": 3}"',
      },
      {
        label: "Override nested key",
        call: 'merge_json(\'{"x": 1}\', \'{"y": 2}\')',
        expected: '"{\\"x\\": 1, \\"y\\": 2}"',
      },
    ],
    examples: [
      { input: 'merge_json(\'{"a":1}\', \'{"b":2}\')', output: '"{\\"a\\": 1, \\"b\\": 2}"' },
    ],
  },

  {
    mode: "func",
    slug: "invalid-score-error",
    title: "Invalid Score Error",
    category: "exceptions",
    description: `Define InvalidScoreError(Exception).

Write validate_score(score) that raises InvalidScoreError("Score must be 0-100") when score is outside 0..100, otherwise returns score.`,
    constraints: ["Custom exception subclass", "Exact error message"],
    hints: [
      "class InvalidScoreError(Exception): pass",
      'raise InvalidScoreError("Score must be 0-100")',
    ],
    approach: `Custom exceptions communicate domain errors. Validate range before returning the value.`,
    starter: `class InvalidScoreError(Exception):
    pass

def validate_score(score):
    # Write your code here
    pass
`,
    solution: `class InvalidScoreError(Exception):
    pass

def validate_score(score):
    if score < 0 or score > 100:
        raise InvalidScoreError("Score must be 0-100")
    return score
`,
    tests: [
      { label: "Valid", call: "validate_score(85)", expected: "85" },
      {
        kind: "custom",
        label: "Too high",
        code: `try:
    validate_score(101)
    raise AssertionError("expected InvalidScoreError")
except InvalidScoreError as e:
    assert str(e) == "Score must be 0-100"`,
      },
      {
        kind: "custom",
        label: "Negative",
        code: `try:
    validate_score(-5)
    raise AssertionError("expected InvalidScoreError")
except InvalidScoreError as e:
    assert str(e) == "Score must be 0-100"`,
      },
    ],
    examples: [
      { input: "validate_score(50)", output: "50" },
      { input: "validate_score(200)", output: "raises InvalidScoreError" },
    ],
  },

  {
    mode: "func",
    slug: "safe-divide-chain",
    title: "Safe Divide Chain",
    category: "exceptions",
    description: `Write safe_divide(a, b) returning a / b.

Return None (do not raise) when b is zero or either argument is not int/float.`,
    constraints: ["Return None on error cases", "Do not catch unrelated exceptions"],
    hints: [
      "if not isinstance(a, (int, float)): return None",
      "if b == 0: return None before dividing.",
    ],
    approach: `Guard clauses check types and division-by-zero before performing the operation.`,
    starter: `def safe_divide(a, b):
    # Write your code here
    pass
`,
    solution: `def safe_divide(a, b):
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        return None
    if b == 0:
        return None
    return a / b
`,
    tests: [
      { label: "Normal", call: "safe_divide(10, 2)", expected: "5.0" },
      { label: "Zero divisor", call: "safe_divide(5, 0)", expected: "None" },
      { label: "Bad type", call: 'safe_divide("10", 2)', expected: "None" },
    ],
    examples: [
      { input: "safe_divide(9, 3)", output: "3.0" },
      { input: "safe_divide(1, 0)", output: "None" },
    ],
  },

  {
    mode: "func",
    slug: "read-last-lines",
    title: "Read Last N Lines",
    category: "files",
    description: `Write read_last_lines(path, n) that reads a text file and returns the last n lines as a list (without trailing newlines).

If the file has fewer than n lines, return all lines.`,
    constraints: ["Use with open", "Strip newline characters from each line"],
    hints: [
      "lines = open(path).read().splitlines()",
      "return lines[-n:] when n > 0",
    ],
    approach: `splitlines() removes newlines. Slice from the end to get the last n entries.`,
    starter: `def read_last_lines(path, n):
    # Write your code here
    pass
`,
    solution: `def read_last_lines(path, n):
    with open(path, "r") as file:
        lines = file.read().splitlines()
    if n <= 0:
        return []
    return lines[-n:]
`,
    tests: [
      {
        kind: "custom",
        label: "Last two lines",
        code: `open("_pb_lines.txt", "w").write("alpha\\nbeta\\ngamma\\n")
assert read_last_lines("_pb_lines.txt", 2) == ["beta", "gamma"]`,
      },
      {
        kind: "custom",
        label: "Fewer than n",
        code: `open("_pb_short.txt", "w").write("only\\n")
assert read_last_lines("_pb_short.txt", 5) == ["only"]`,
      },
    ],
    examples: [
      { input: 'read_last_lines("log.txt", 3)', output: 'last 3 lines as a list' },
    ],
  },

  {
    mode: "func",
    slug: "write-json-lines",
    title: "Write JSON Lines File",
    category: "files",
    description: `Write save_records(path, records) where records is a list of dicts.

Write one JSON object per line (JSON Lines / .jsonl format) using json.dumps per record and a trailing newline.`,
    constraints: ["One json.dumps per record", "Each record on its own line"],
    hints: [
      "with open(path, 'w') as f:",
      "f.write(json.dumps(record) + '\\n') for each record",
    ],
    approach: `JSON Lines is newline-delimited JSON. Dump each dict independently and join with newlines.`,
    starter: `import json

def save_records(path, records):
    # Write your code here
    pass
`,
    solution: `import json

def save_records(path, records):
    with open(path, "w") as file:
        for record in records:
            file.write(json.dumps(record) + "\\n")
`,
    tests: [
      {
        kind: "custom",
        label: "Roundtrip lines",
        code: `save_records("_pb_records.jsonl", [{"a": 1}, {"b": 2}])
with open("_pb_records.jsonl") as f:
    lines = f.read().splitlines()
assert lines == ['{"a": 1}', '{"b": 2}']`,
      },
    ],
    examples: [
      { input: 'save_records("out.jsonl", [{"x": 1}])', output: 'file with one JSON line' },
    ],
  },

  {
    mode: "func",
    slug: "parse-semver",
    title: "Parse Version String",
    category: "modules",
    description: `Write parse_version(version) that parses strings like "1.2.3" into a tuple of three ints (major, minor, patch).

Return None if the string is not exactly three dot-separated integer parts.`,
    constraints: ["No imports required", "Return a 3-int tuple or None"],
    hints: [
      "parts = version.split('.')",
      "Check len(parts) == 3 and each part is digit-only.",
    ],
    approach: `Split on dots, validate three numeric segments, convert to ints — a lightweight version parsing utility.`,
    starter: `def parse_version(version):
    # Write your code here
    pass
`,
    solution: `def parse_version(version):
    parts = version.split(".")
    if len(parts) != 3:
        return None
    nums = []
    for part in parts:
        if not part.isdigit():
            return None
        nums.append(int(part))
    return tuple(nums)
`,
    tests: [
      { label: "Valid", call: 'parse_version("2.4.10")', expected: "(2, 4, 10)" },
      { label: "Invalid suffix", call: 'parse_version("1.2")', expected: "None" },
      { label: "Non-numeric", call: 'parse_version("1.a.3")', expected: "None" },
    ],
    examples: [
      { input: 'parse_version("1.0.0")', output: "(1, 0, 0)" },
    ],
  },

  {
    mode: "script",
    slug: "stdin-sum-evens",
    title: "Sum Evens From Input",
    category: "functions",
    description: `Read space-separated integers from stdin, sum the even ones, and print the sum.

Example: input "1 2 3 4" prints 6.`,
    constraints: ["Use input() once", "Print a single integer"],
    hints: [
      "nums = map(int, input().split())",
      "sum(n for n in nums if n % 2 == 0)",
    ],
    approach: `Parse stdin, filter evens with a generator expression, aggregate with sum().`,
    starter: `# Read integers from stdin and print the sum of evens
`,
    solution: `nums = map(int, input().split())
print(sum(n for n in nums if n % 2 == 0))
`,
    tests: [
      { label: "Mixed numbers", stdin: "1 2 3 4 5 6", expectedStdout: "12" },
      { label: "All odd", stdin: "1 3 5", expectedStdout: "0" },
      { label: "Single even", stdin: "8", expectedStdout: "8" },
    ],
    examples: [
      { input: "1 2 3 4", output: "6" },
    ],
  },

  {
    mode: "script",
    slug: "stdin-email-redact",
    title: "Redact Emails From Input",
    category: "regex",
    description: `Read one line of text from stdin. Replace every email address matching word@word.word with [REDACTED] and print the result.

Use the re module.`,
    constraints: ["Use re.sub", "Pattern: letters/digits/underscores around @"],
    hints: [
      're.sub(r"\\\\b\\\\w+@\\\\w+\\\\.\\\\w+\\\\b", "[REDACTED]", text)',
      "text = input()",
    ],
    approach: `re.sub replaces all pattern matches. A simple word@domain.tld pattern covers typical emails.`,
    starter: `import re

# Read a line and redact email addresses
`,
    solution: `import re

text = input()
print(re.sub(r"\\b\\w+@\\w+\\.\\w+\\b", "[REDACTED]", text))
`,
    tests: [
      {
        label: "Two emails",
        stdin: "Contact alice@test.com or bob@site.org today",
        expectedStdout: "Contact [REDACTED] or [REDACTED] today",
      },
      {
        label: "No emails",
        stdin: "Hello world",
        expectedStdout: "Hello world",
      },
    ],
    examples: [
      { input: "mail me@here.com ok", output: "mail [REDACTED] ok" },
    ],
  },

  {
    mode: "script",
    slug: "stdin-json-greet",
    title: "Greet From JSON Input",
    category: "json",
    description: `Read one line of JSON from stdin with keys "name" and "score".

Parse with json.loads and print: Hello, {name}! Score: {score}`,
    constraints: ["Use json.loads", "Exact output format with punctuation"],
    hints: [
      "data = json.loads(input())",
      'print(f"Hello, {data[\'name\']}! Score: {data[\'score\']}")',
    ],
    approach: `Parse JSON from stdin, then format a greeting with an f-string.`,
    starter: `import json

# Read JSON from stdin and print a greeting
`,
    solution: `import json

data = json.loads(input())
print(f"Hello, {data['name']}! Score: {data['score']}")
`,
    tests: [
      {
        label: "Basic greet",
        stdin: '{"name": "Ana", "score": 95}',
        expectedStdout: "Hello, Ana! Score: 95",
      },
      {
        label: "Another user",
        stdin: '{"name": "Bob", "score": 72}',
        expectedStdout: "Hello, Bob! Score: 72",
      },
    ],
    examples: [
      { input: '{"name": "Ana", "score": 95}', output: "Hello, Ana! Score: 95" },
    ],
  },
];
