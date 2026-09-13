# Python for Data Science

> 18 modules from Python basics through NumPy, Pandas, visualization, EDA, and a capstone.

Start from zero and build toward data science. Covers syntax, data structures, functions, files, NumPy, Pandas, visualization, statistics & EDA, then a full capstone project.

## Course snapshot

| | |
|---|---|
| **Course ID** | `python` |
| **Level** | beginner |
| **Modules** | 18 |
| **Topics (subtopics)** | 90 (90 published) |
| **Estimated lesson time** | ~966 minutes (~16 hours) |
| **Module practice challenges** | 625 |
| **Prerequisites** | None — this course assumes zero prior coding experience |

## Course Overview & Learning Path

This curriculum progressively builds Python skills in three phases:

- **Phase 1: Foundations** (Modules 1–12): Master Python syntax, data structures, and control flow — the building blocks of all programming.
- **Phase 2: Data Science** (Modules 13–17): Apply Python to real data using NumPy, Pandas, and visualization libraries.
- **Phase 3: Project** (Module 18): Synthesize everything in a real-world capstone analysis.

By the end, you will be able to load, clean, explore, and visualize datasets independently using professional-grade Python tools.

---

## Learning path

### Phase: `foundations`

1. **Introduction to Programming & Environment Setup** (`introduction-and-setup`)
2. **Python Basic Syntax and Data Types** (`basic-syntax-and-data-types`)
3. **Operators in Python** (`operators`)
4. **Strings in Python** (`strings`)
5. **Lists in Python** (`lists`)
6. **Tuples in Python** (`tuples`)
7. **Sets in Python** (`sets`)
8. **Dictionaries in Python** (`dictionaries`)
9. **Python Conditional Statements** (`conditionals`)
10. **Loops in Python** (`loops`)
11. **List and Dictionary Comprehensions** (`comprehensions`)
12. **Functions in Python** (`functions`)

### Phase: `data-science`

13. **File Handling & Exception Handling** (`file-and-exception-handling`)
14. **NumPy for Numerical Computing** (`numpy`)
15. **Pandas for Data Manipulation** (`pandas`)
16. **Data Visualization** (`data-visualization`)
17. **Statistics & Exploratory Data Analysis** (`statistics-and-eda`)

### Phase: `project`

18. **Capstone Project** (`capstone-project`)

---

## Modules in detail

## Module 1: Introduction to Programming & Environment Setup

- **Slug:** `introduction-and-setup`
- **Phase:** `foundations`
- **Topics:** 5
- **Duration:** ~54 minutes
- **Practice Challenges:** 35

### Overview

Start here if you are new to coding. This module explains what programming is, why Python is used in data science, and how to prepare a clean working environment (Anaconda/venv, IDEs, and Jupyter) so later modules run smoothly.

Before you write a single line of Python, you need to understand what programming is and why Python matters for data work. You'll also set up your development environment — a critical first step that prevents package conflicts and ensures reproducibility across projects.

### Learning Outcomes

By the end of this module, you will:
- Understand what a program is and the three pillars of programming logic
- Know why Python is the preferred language for data science
- Install and configure Python using industry-standard tools
- Choose the right IDE for different types of work
- Write and execute your first Python code in Jupyter notebooks

### Key functions & concepts

- **`print()`** — Shows text or values in the console — your first way to see program output.
- **`Jupyter / IDE`** — Tools where you write and run Python: notebooks for exploration, VS Code/PyCharm for larger scripts.
- **`venv / Anaconda`** — Isolated environments so project packages do not conflict with each other. Each project gets its own sandbox.
- **`Environment variables`** — System settings that control how Python finds packages and executes code.
- **`Package managers (pip, conda)`** — Tools that download and install third-party libraries like NumPy and Pandas.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Introduction to Programming | 10 | 7 | Learn what a program is and the three building blocks of logic: sequence (steps in order), selection (if/else branching), and iteration (loops repeating actions). Understand how these building blocks combine to solve problems. |
| 2 | Why Python for Data Science | 8 | 7 | Discover why Python dominates data science: clear, readable syntax plus an ecosystem of libraries (NumPy, Pandas, Matplotlib, Scikit-learn) built specifically for data work. Compare Python to R, SQL, and other languages. |
| 3 | Setting up Python Environment | 14 | 7 | Set up Python safely using Anaconda (includes packages pre-installed) or venv (lightweight, minimal). Learn how isolated environments prevent dependency hell where one project's requirements break another's. |
| 4 | Python IDEs | 10 | 7 | Compare tools: Jupyter Notebook (interactive, perfect for exploration), VS Code (lightweight, extensible), PyCharm (full-featured, enterprise-grade), and this platform's built-in editor. Understand when to use each. |
| 5 | Introduction to Jupyter Notebooks | 12 | 7 | Master Jupyter: code cells (execute in any order), markdown cells (document your thinking), and a typical exploratory workflow. Learn notebook best practices: keep cells focused, add explanatory text, save frequently. |

### Common Pitfalls & Tips

- **Pitfall:** Installing Python directly without virtual environments. → **Tip:** Always create a venv or conda environment before installing packages for a project.
- **Pitfall:** Upgrading packages without testing. → **Tip:** Document your environment with `pip freeze > requirements.txt` so you can reproduce it later.
- **Tip:** Jupyter notebooks are great for exploration but not for production code. Use `.py` files for reusable scripts.

---

## Module 2: Python Basic Syntax and Data Types

- **Slug:** `basic-syntax-and-data-types`
- **Phase:** `foundations`
- **Topics:** 5
- **Duration:** ~45 minutes
- **Practice Challenges:** 35

### Overview

Build Python fundamentals: talking to the user, documenting code, storing values in variables, understanding core types, and converting between types when you need to. This module is the foundation for all programming that follows.

You'll learn that every piece of data in Python has a type (integer, decimal, text, true/false), and that type determines what you can do with it. Understanding types prevents errors and lets you write more efficient code.

### Learning Outcomes

By the end of this module, you will:
- Use print() and input() to communicate with users
- Create and name variables following best practices
- Recognize and work with core data types: int, float, str, bool
- Convert between types safely (typecasting)
- Understand why type mismatches cause errors

### Key functions & concepts

- **`print() / input()`** — Output results and read text from the user. print() displays values; input() pauses and waits for keyboard input.
- **`type()`** — Returns the type of any value (int, float, str, bool, etc.). Essential for debugging and understanding data.
- **`int() / float() / str() / bool()`** — Convert between types. Example: int("42") turns the text "42" into the number 42.
- **`Variable naming`** — Use clear, descriptive names like user_age, not x or a. This makes code readable months later.
- **`Type safety`** — Math on mixed types ("5" + 3) fails. Always convert first: int("5") + 3 = 8.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Input and Output | 10 | 7 | Master print() for displaying messages and input() for reading keyboard input. Build interactive programs that prompt users and show results. Learn that input() always returns a string, even if the user types a number. |
| 2 | Comments | 5 | 7 | Write single-line comments (#) and multi-line docstrings (triple quotes) to explain why your code does something. Comments are ignored by Python but essential for humans reading the code. |
| 3 | Variables | 10 | 7 | Create variables as named containers for values using =. Learn that variable names are case-sensitive, cannot start with a number, and should describe the data they hold. Practice naming: use snake_case (my_variable), not camelCase or PascalCase. |
| 4 | Data Types | 12 | 7 | Meet Python's core types: int (whole numbers like 42), float (decimals like 3.14), str (text like "hello"), and bool (true/false). Understand that type() tells you which type you have. Learn that strings are immutable — you can't change a character in place. |
| 5 | Typecasting | 8 | 7 | Convert between types safely. Example: read a number from the user with age = int(input("Enter age: ")). Learn common pitfalls: int("3.5") fails (use float() first), and str() adds quotes around numbers. |

### Common Pitfalls & Tips

- **Pitfall:** Forgetting that input() returns a string. → **Tip:** Always convert with int(), float(), etc. if you need to do math.
- **Pitfall:** Naming variables x, y, temp. → **Tip:** Use descriptive names like total_sales, user_name.
- **Tip:** Use type(variable) to check what you're working with, especially when debugging.

---

## Module 3: Operators in Python

- **Slug:** `operators`
- **Phase:** `foundations`
- **Topics:** 7
- **Duration:** ~56 minutes
- **Practice Challenges:** 49

### Overview

Operators are the symbols and keywords that compute and compare values. This module covers arithmetic, assignment shortcuts, comparisons, logic, identity, membership, and bitwise operations used throughout later topics.

Master operators and you'll write powerful conditions (if price > 100 and stock < 10), efficient updates (count += 1), and queries ("apple" in fruits).

### Learning Outcomes

By the end of this module, you will:
- Perform arithmetic and understand operator precedence (PEMDAS)
- Use assignment operators to update variables concisely
- Write comparison operators for decision-making
- Combine conditions with logical operators
- Check membership and identity

### Key functions & concepts

- **`+ - * / // % **`** — Arithmetic: add, subtract, multiply, divide, floor divide (rounds down), remainder (modulo), and power. Example: 5 % 2 = 1.
- **`+= -= *= /= %=`** — Assignment shortcuts. x += 5 is short for x = x + 5. Speeds up common updates.
- **`== != < > <= >=`** — Comparison operators that return True or False. Note: == (equal) is different from = (assignment).
- **`and / or / not`** — Combine or invert boolean conditions in if-statements and filters. (age > 18) and (score > 80) is True only if both are true.
- **`in / is`** — Membership checks (value in list) and identity checks (a is b). Example: "apple" in ["apple", "banana"] returns True.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Arithmetic Operators | 10 | 7 | Use +, -, *, /, //, %, ** for everyday math. Learn precedence: exponents first, then *, /, // (left to right), then +, - (left to right). Parentheses override: (2 + 3) * 4 = 20, not 14. |
| 2 | Assignment Operators | 8 | 7 | Update variables concisely: x += 5 adds 5 to x, x -= 2 subtracts 2, etc. These shortcuts make code more readable and are widely used in loops and data processing. |
| 3 | Comparison Operators | 8 | 7 | Compare values and get True or False. 5 == 5 is True, 5 != 3 is True, 5 < 10 is True. Comparisons drive all decision-making in programs. |
| 4 | Logical Operators | 8 | 7 | Combine conditions: and (both must be true), or (at least one true), not (inverts). Example: (status == "active") and (balance > 0) checks both conditions before proceeding. |
| 5 | Identity Operators | 6 | 7 | Check if two variables point to the same object in memory with is / is not. Different from == (equality). Example: a = [1, 2]; b = a; a is b is True (same list), but a = [1, 2]; b = [1, 2]; a is b is False (different lists). |
| 6 | Membership Operators | 6 | 7 | Check if a value appears in a collection: value in list, char in string, key in dict. Example: "apple" in ["apple", "banana", "orange"] returns True. Essential for filtering and validation. |
| 7 | Bitwise Operators | 10 | 7 | Work with individual bits: & (AND), / (OR), ^ (XOR), ~ (NOT), << >> (left/right shift). Less common in data science but useful for flags, permissions, and low-level optimization. Example: 5 & 3 = 1 in binary. |

### Common Pitfalls & Tips

- **Pitfall:** Confusing = (assign) with == (compare). → **Tip:** Remember: x = 5 assigns, x == 5 checks if equal.
- **Pitfall:** Forgetting that / returns a float even for whole numbers. → **Tip:** Use // for integer division: 7 // 2 = 3.
- **Tip:** Use parentheses to make complex conditions clear: (a > 5) and (b < 10) is easier to read than a > 5 and b < 10.

---

## Module 4: Strings in Python

- **Slug:** `strings`
- **Phase:** `foundations`
- **Topics:** 5
- **Duration:** ~48 minutes
- **Practice Challenges:** 35

### Overview

Text is central to cleaning data and building reports. Learn how to create strings, format them, index and slice characters, and use built-in string methods to transform text. In data science, you'll spend a lot of time cleaning messy text fields, so string mastery pays off immediately.

### Learning Outcomes

By the end of this module, you will:
- Create and manipulate strings efficiently
- Use f-strings and .format() to build dynamic messages
- Index and slice strings to extract parts
- Apply string methods to clean real-world text
- Understand immutability and its consequences

### Key functions & concepts

- **`f-strings / .format()`** — Insert variables into text cleanly. F-strings are modern and readable: `f"Hello {name}, you are {age} years old"`. The `.format()` method is older but still widely used: `"Hello {}, you are {} years old".format(name, age)`.
- **`strip() / replace() / split() / join()`** — Common text-cleaning tools. `strip()` removes leading/trailing whitespace, `replace()` swaps text, `split()` breaks into parts, `join()` reassembles.
- **`upper() / lower() / capitalize()`** — Change case for standardization. Useful when comparing user input that might be "APPLE", "apple", or "Apple".
- **`find() / count() / startswith() / endswith()`** — Search and validate text. Example: `email.endswith("@gmail.com")` checks domain.
- **`Indexing & slicing`** — Read one character with `s[0]` (first) or `s[-1]` (last), or a substring with `s[2:5]` (characters at indices 2, 3, 4).

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Creating Strings | 8 | 7 | Create strings with single quotes 'hello', double quotes "hello", or triple quotes for multi-line text. Learn escape sequences: \n (newline), \t (tab), \\ (backslash). Triple-quoted strings preserve formatting and are useful for long messages. |
| 2 | Formatting Strings | 10 | 7 | Build readable output with f-strings (f"x = {x}", modern Python 3.6+) or .format() ("x = {}".format(x), older but compatible). Learn placeholder syntax, alignment, and decimal precision: f"{price:.2f}" shows 2 decimal places. |
| 3 | Indexing Strings | 8 | 7 | Access characters by position: s[0] is the first character, s[-1] is the last. Remember that indexing starts at 0, not 1. Negative indices count from the end: s[-2] is the second-to-last character. |
| 4 | Slicing Strings | 10 | 7 | Extract substrings with s[start:stop:step]. Example: "Python"[0:3] gives "Pyt". The stop index is exclusive (not included). Omit indices for defaults: s[:3] means "from start to index 3", s[2:] means "from index 2 to end". |
| 5 | String Methods | 12 | 7 | Apply transformations: s.upper(), s.lower(), s.strip() (remove whitespace), s.replace(old, new), s.split(delimiter) (break into list), s.join(list) (reassemble). Learn that strings are immutable — methods return new strings; they don't change the original. |

### Common Pitfalls & Tips

- **Pitfall:** Forgetting that strings are immutable. s[0] = "X" fails. → **Tip:** Create a new string: s = "X" + s[1:].
- **Pitfall:** Off-by-one errors in slicing. → **Tip:** Remember the stop index is exclusive. s[0:3] includes indices 0, 1, 2 — not 3.
- **Tip:** Use .split() and .join() together for powerful text transforms: ", ".join(words.split()) fixes spacing.

---

## Module 5: Lists in Python

- **Slug:** `lists`
- **Phase:** `foundations`
- **Topics:** 6
- **Duration:** ~56 minutes
- **Practice Challenges:** 42

### Overview

Lists hold ordered sequences you can change. You will create lists, understand their properties, index and slice them, use list methods, and modify items — skills used constantly in data pipelines. Lists are the workhorses of Python; mastering them is essential.

### Learning Outcomes

By the end of this module, you will:
- Create and populate lists
- Index and slice lists to extract data
- Modify lists with append, insert, remove, and pop
- Sort and search lists
- Understand the difference between mutable and immutable data

### Key functions & concepts

- **`append() / insert() / remove() / pop()`** — Modify lists as they grow or shrink. `append()` adds to the end, `insert(idx, val)` adds at a position, `remove(val)` deletes by value, `pop(idx)` removes by position and returns it.
- **`sort() / sorted()`** — Order items. `sort()` modifies the list in-place, `sorted()` returns a new sorted copy. Example: `sorted([3, 1, 2])` returns `[1, 2, 3]`.
- **`len() / indexing / slicing`** — Measure size and select items or sub-lists by position. `len(list)` tells you how many items; indexing and slicing work like strings.
- **`in / index() / count()`** — Search lists. `value in list` checks presence, `list.index(value)` finds position, `list.count(value)` counts occurrences.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Creating Lists | 8 | 7 | Build lists with square brackets: [1, 2, 3] (integers), ["a", "b"] (strings), or mixed types [1, "two", 3.0] (though mixed types are rare in data work). Use list() to convert other sequences. Remember: empty [] creates an empty list. |
| 2 | List Properties | 8 | 7 | Lists are ordered (position matters), mutable (changeable), and allow duplicates ([1, 1, 2] is valid). These properties make lists flexible for building up data incrementally. Contrast with sets (no duplicates) and tuples (immutable). |
| 3 | Indexing Lists | 8 | 7 | Access items by position: list[0] (first), list[-1] (last). Negative indices count backward. Out-of-bounds access raises an error. Use len(list) to safely stay within bounds. |
| 4 | Slicing Lists | 10 | 7 | Extract sub-lists: list[1:4] gets items at indices 1, 2, 3. Use list[::2] to get every other item, list[::-1] to reverse. Slicing never raises errors — out-of-bounds indices are silently ignored. |
| 5 | List Methods | 12 | 7 | Master essential methods: append(x) (add to end), extend(list) (add multiple), insert(i, x) (add at position), remove(x) (delete by value, first occurrence only), pop(i) (remove at position, returns value), clear() (empty the list), reverse() (flip order), sort() (order in-place). |
| 6 | Modifying Lists | 10 | 7 | Change lists in place: list[0] = 99 (replace item), list[1:3] = [10, 20, 30] (replace range with more/fewer items), del list[2] (delete by position). Understand that these modifications happen to the original list — there's no copy. |

### Common Pitfalls & Tips

- **Pitfall:** Confusing .remove() (by value) and .pop() (by position). → **Tip:** Use remove() when you know what to remove, pop() when you know the position.
- **Pitfall:** Forgetting that modifying a list affects all references to it. → **Tip:** Use slicing to make a copy: new_list = old_list[:] or new_list = list(old_list).
- **Tip:** Use list.sort() (modifies in-place, no copy overhead) when memory matters; use sorted() (returns new list) when you need to preserve the original.

---

## Module 6: Tuples in Python

- **Slug:** `tuples`
- **Phase:** `foundations`
- **Topics:** 5
- **Duration:** ~38 minutes
- **Practice Challenges:** 35

### Overview

Tuples are ordered but immutable — ideal for fixed records (like coordinates or database rows). Learn syntax, properties, indexing, slicing, and the small set of tuple methods. While simpler than lists, tuples are powerful when you need to guarantee data won't change.

### Learning Outcomes

By the end of this module, you will:
- Create tuples and understand immutability
- Use tuple unpacking to extract values
- Index and slice tuples
- Choose between tuples and lists for your use case
- Use tuples as dictionary keys

### Key functions & concepts

- **`tuple packing / unpacking`** — Group values into a tuple: `point = (3, 4)`. Split them back: `x, y = point`. Powerful for functions that return multiple values.
- **`count() / index()`** — The main tuple methods: `tuple.count(value)` counts occurrences, `tuple.index(value)` finds position (raises error if not found).

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Tuple Syntax | 8 | 7 | Create tuples with parentheses: (1, 2, 3) or no parens: 1, 2, 3. Remember the one-element trick: (5,) with a comma is a tuple; (5) is just a number in parens. Empty tuple: (). |
| 2 | Tuple Properties | 8 | 7 | Tuples are ordered (index and position matter), immutable (cannot be changed after creation), and hashable (can be dictionary keys or set members). This immutability is a feature — it guarantees data integrity. |
| 3 | Indexing Tuples | 6 | 7 | Access items just like lists: tuple[0] (first), tuple[-1] (last). Immutability means you cannot change: tuple[0] = 99 raises an error. You must create a new tuple. |
| 4 | Slicing Tuples | 8 | 7 | Slice tuples like lists: tuple[1:4], tuple[::2], tuple[::-1]. Slicing returns a new tuple (not a copy of the original, but a new object). |
| 5 | Tuple Methods | 8 | 7 | Tuples have only two methods: count(value) (how many times does it appear?) and index(value) (what position is it at?). This simplicity reflects immutability — you can't add, remove, or sort. When you need that, convert to a list: list(tuple). |

### Common Pitfalls & Tips

- **Pitfall:** Forgetting the comma in a single-element tuple. (5) is an int, not a tuple. → **Tip:** Always use (5,) with a comma.
- **Pitfall:** Trying to modify a tuple. → **Tip:** Convert to a list first: my_list = list(my_tuple), modify, then convert back if needed.
- **Tip:** Unpacking is powerful: name, age, email = user_tuple extracts all three values at once, cleaner than name = user_tuple[0] three times.

---

## Module 7: Sets in Python

- **Slug:** `sets`
- **Phase:** `foundations`
- **Topics:** 4
- **Duration:** ~34 minutes
- **Practice Challenges:** 28

### Overview

Sets store unique values and support set math. Use them to remove duplicates and compare collections with union, intersection, and difference. Sets are powerful for data cleaning and membership testing at scale.

### Learning Outcomes

By the end of this module, you will:
- Create sets and understand uniqueness
- Use set operations (union, intersection, difference)
- Remove duplicates from data
- Compare collections efficiently
- Choose sets vs. lists for performance

### Key functions & concepts

- **`add() / update() / remove() / discard()`** — Modify sets. `add(x)` adds one, `update(list)` adds multiple, `remove(x)` deletes (error if missing), `discard(x)` deletes safely (no error).
- **`union() / intersection() / difference()`** — Set math. `a.union(b)` (all items in either), `a.intersection(b)` (items in both), `a.difference(b)` (items in a but not b).
- **`issubset() / issuperset() / isdisjoint()`** — Relationship checks. `a.issubset(b)` (all of a in b?), `a.issuperset(b)` (a contains all of b?), `a.isdisjoint(b)` (no overlap?).

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Set Syntax | 8 | 7 | Create sets with curly braces: {1, 2, 3} or set([1, 1, 2]) (removes duplicates). Common mistake: empty {} makes a dict, not a set. Use set() for an empty set. Sets are unordered — no indexing or slicing. |
| 2 | Updating Sets | 8 | 7 | Modify sets with add(x) (one item), update(list) (multiple items), remove(x) (delete, error if missing), discard(x) (delete, no error if missing), clear() (empty the set). Choose discard() when you're not sure an item exists. |
| 3 | Set Operations | 10 | 7 | Perform mathematical set operations: a.union(b) or a \/ b (all items), a.intersection(b) or a & b (shared items), a.difference(b) or a - b (in a but not b), a.symmetric_difference(b) or a ^ b (in either but not both). These are fast — use them for comparing collections. |
| 4 | Set Methods | 8 | 7 | Answer relationship questions: a.issubset(b) (is a a subset?), a.issuperset(b) (does a contain b?), a.isdisjoint(b) (do a and b have no overlap?). Example: {"apple", "orange"}.isdisjoint({"banana", "grape"}) is True. |

### Common Pitfalls & Tips

- **Pitfall:** Confusing {} (empty dict) with an empty set. → **Tip:** Always use set() for an empty set.
- **Pitfall:** Trying to index a set: my_set[0] fails. → **Tip:** Convert to a list if you need ordered access: list(my_set)[0].
- **Tip:** Use sets to deduplicate: unique_ids = set(id_list) is much faster than looping and checking membership.

---

## Module 8: Dictionaries in Python

- **Slug:** `dictionaries`
- **Phase:** `foundations`
- **Topics:** 5
- **Duration:** ~48 minutes
- **Practice Challenges:** 35

### Overview

Dictionaries map keys to values — the model behind JSON and many labeled datasets. Learn syntax, keys/values/items, safe access, mutation methods, and nested structures. Dictionaries are the gateway to working with real-world data formats.

### Learning Outcomes

By the end of this module, you will:
- Create and access dictionaries
- Iterate through keys, values, and pairs
- Use .get() for safe access
- Update and modify dictionaries
- Build nested structures for complex data

### Key functions & concepts

- **`keys() / values() / items()`** — Access dictionary components. `keys()` returns all keys (like column names), `values()` returns all values (like column data), `items()` returns (key, value) pairs (useful in loops).
- **`get() / update() / pop()`** — Safe access and modification. `dict.get(key, default)` returns the value or a default (no error if key missing), `update(dict)` merges another dictionary, `pop(key)` removes and returns the value.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Dictionary Syntax | 8 | 7 | Create dicts with {key: value} pairs: {"name": "Alice", "age": 30}. Keys must be unique (later values overwrite earlier ones). Use meaningful keys so your data is self-documenting. Quote string keys: {"name": ...}, not {name: ...}. |
| 2 | Keys and Values | 8 | 7 | Extract dictionary parts: dict.keys() (all keys), dict.values() (all values), dict.items() (pairs as tuples). These return views you can iterate: for key in dict.keys(): or for key, value in dict.items():. |
| 3 | Accessing Dictionaries | 10 | 7 | Read values with dict[key] (raises error if key missing) or dict.get(key, default) (returns default if missing, safer). Use .get() when you're unsure a key exists. Example: dict.get("email", "no-email@example.com") handles missing emails gracefully. |
| 4 | Dictionary Methods | 10 | 7 | Modify dicts: update(other_dict) (merge), pop(key) (remove and return), pop(key, default) (remove with fallback), setdefault(key, default) (set if missing, return value), clear() (empty). These handle common patterns without manual checks. |
| 5 | Nested Dictionaries | 12 | 7 | Build hierarchical data: user = {"id": 1, "profile": {"name": "Alice", "email": "alice@example.com"}}. Access nested values: user["profile"]["name"]. Use nested dicts to model real-world structures like database records, JSON APIs, and config files. |

### Common Pitfalls & Tips

- **Pitfall:** Using bracket notation when a key might be missing: dict[key] crashes if key not present. → **Tip:** Use .get(): dict.get(key, default).
- **Pitfall:** Forgetting that dict keys are ordered (in Python 3.7+) but still unordered conceptually. → **Tip:** Don't rely on order; use meaningful keys instead of numeric indices.
- **Tip:** Use .items() in loops: for key, value in dict.items(): is cleaner than for key in dict.keys(): value = dict[key].

---

## Module 9: Python Conditional Statements

- **Slug:** `conditionals`
- **Phase:** `foundations`
- **Topics:** 3
- **Duration:** ~32 minutes
- **Practice Challenges:** 21

### Overview

Conditionals let programs choose paths. Master if, if-else, and if-elif-else so you can branch on comparisons and build decision logic used in cleaning rules and business filters.

### Learning Outcomes

By the end of this module, you will:
- Write and test conditional statements
- Nest conditions for complex logic
- Avoid common conditional pitfalls
- Apply conditionals to real data-cleaning scenarios

### Key functions & concepts

- **`if / elif / else`** — Run different blocks depending on which condition is true. `if condition: block` executes block only if condition is True. `elif` (else if) and `else` handle other cases.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | if Statement | 10 | 7 | Run a code block only if a condition is true: if price > 100: print("Expensive"). Use indentation (4 spaces, not tabs) to show what belongs inside the if-block. The condition must be a boolean or something that evaluates to True/False. |
| 2 | if-else | 10 | 7 | Choose between two paths: if condition: block1 else: block2. One block runs; the other doesn't. Example: if age >= 18: print("Adult") else: print("Minor"). Clean and symmetrical. |
| 3 | if-elif-else | 12 | 7 | Handle many mutually exclusive cases: if cond1: ... elif cond2: ... elif cond3: ... else: .... Python evaluates from top to bottom and stops at the first true condition. Use elif to avoid testing overlapping conditions. Example: grade assignment with score ranges. |

### Common Pitfalls & Tips

- **Pitfall:** Using = (assign) instead of == (compare) in conditions: if x = 5: → **Tip:** Always use == for comparisons.
- **Pitfall:** Forgetting indentation. Python uses indentation to define blocks; misaligned code causes IndentationError. → **Tip:** Use 4 spaces consistently (VS Code auto-indents).
- **Tip:** Use elif for readability: if x < 0: ... elif x == 0: ... else: ... is clearer than nested if-else chains.

---

## Module 10: Loops in Python

- **Slug:** `loops`
- **Phase:** `foundations`
- **Topics:** 5
- **Duration:** ~41 minutes
- **Practice Challenges:** 35

### Overview

Loops repeat work. Practice while and for loops, control flow with break/continue/pass, and generate number sequences with range() — essential for processing rows and lists. Loops are the engine of automation.

### Learning Outcomes

By the end of this module, you will:
- Write while and for loops correctly
- Use range() to generate sequences
- Control loop flow with break and continue
- Avoid infinite loops
- Process collections iteratively

### Key functions & concepts

- **`for / while`** — `for` loops iterate over sequences (lists, strings, etc.); `while` loops repeat as long as a condition is true. Pick `for` when you know how many iterations; pick `while` when you loop until a condition changes.
- **`range()`** — Generate integer sequences. `range(5)` gives 0, 1, 2, 3, 4. `range(2, 7)` gives 2, 3, 4, 5, 6. `range(0, 10, 2)` gives every other number: 0, 2, 4, 6, 8.
- **`break / continue / pass`** — Control loop execution. `break` exits the loop immediately, `continue` skips to the next iteration, `pass` is a no-op placeholder.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | while Loop | 10 | 7 | Repeat a block while a condition is true: while x < 10: x += 1. The condition is checked before each iteration. Modify the condition inside the loop, or you'll loop forever. Example: validating user input until they enter a number. |
| 2 | for Loop | 10 | 7 | Iterate over a sequence: for item in list: runs the block once per item. The variable item changes each iteration. Works on strings, lists, tuples, sets, dicts (iterates keys), and ranges. Example: for i in range(5): print(i) prints 0–4. |
| 3 | break and continue | 8 | 7 | Control loop flow: break exits immediately (used when you find what you're looking for), continue skips to the next iteration (used to skip unwanted items). Example: for item in list: if item < 0: continue; print(item) prints only non-negative items. |
| 4 | pass | 5 | 7 | Use pass as a placeholder when syntax requires a block but you're not ready to implement it. Example: if x > 0: pass  # TODO: handle positive case. Prevents IndentationError when a block is empty. |
| 5 | range() | 8 | 7 | Generate integer sequences: range(n) (0 to n-1), range(start, stop) (start to stop-1), range(start, stop, step) (every step-th number). Use range() to loop a specific number of times or iterate with indices. Example: for i in range(len(list)): accesses by position. |

### Common Pitfalls & Tips

- **Pitfall:** Infinite loops from forgetting to update the condition. while x < 10: without x += 1 inside loops forever. → **Tip:** Always modify the loop variable or condition.
- **Pitfall:** Off-by-one errors with range: range(5) gives 0–4, not 0–5. → **Tip:** Remember range is exclusive of the stop value.
- **Tip:** Use for loops for sequences; they're simpler and safer than manually managing while loops.

---

## Module 11: List and Dictionary Comprehensions

- **Slug:** `comprehensions`
- **Phase:** `foundations`
- **Topics:** 3
- **Duration:** ~32 minutes
- **Practice Challenges:** 21

### Overview

Comprehensions build lists and dictionaries in one readable line. Learn the syntax, practical transform/filter patterns, and dictionary comprehensions for labeled results. Comprehensions are Pythonic — you'll see them everywhere in real code.

### Learning Outcomes

By the end of this module, you will:
- Write list comprehensions to replace loops
- Apply filtering and transformation in one line
- Build dictionary comprehensions
- Recognize when comprehensions improve readability

### Key functions & concepts

- **`[expr for x in iterable if cond]`** — List comprehension: map and optionally filter in one expression. `[x*2 for x in range(5)]` gives `[0, 2, 4, 6, 8]`. Add `if` to filter: `[x*2 for x in range(5) if x > 1]` gives `[4, 6, 8]`.
- **`{k: v for ...}`** — Dictionary comprehension: build key-value maps compactly. `{x: x*2 for x in range(5)}` builds `{0: 0, 1: 2, 2: 4, 3: 6, 4: 8}`.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | List Comprehension Syntax | 12 | 7 | Write [expr for item in iterable] to build a list in one line. [x2 for x in [1, 2, 3]] gives [1, 4, 9]. This replaces: result = []; for x in [1, 2, 3]: result.append(x2). Cleaner and faster. |
| 2 | Uses of Comprehensions | 10 | 7 | Apply comprehensions to real patterns: transform ([x*2 for x in nums]), filter ([x for x in nums if x > 0]), combine ([(x, x**2) for x in range(5)] creates pairs). Example: [word.upper() for word in words if len(word) > 3] uppercases long words. |
| 3 | Dictionary Comprehensions | 10 | 7 | Build dicts in one line: {x: x*2 for x in range(5)}. Create mappings from lists: {word: len(word) for word in words} maps each word to its length. Powerful for creating lookup tables. Add conditions: {x: x*2 for x in range(10) if x % 2 == 0} creates a map of even numbers. |

### Common Pitfalls & Tips

- **Pitfall:** Writing complex comprehensions that are hard to read. → **Tip:** Use a regular loop if the comprehension goes beyond one line or has nested loops.
- **Pitfall:** Confusing list and dict comprehensions. → **Tip:** List: [expr ...], Dict: {key: value ...}.
- **Tip:** Comprehensions are significantly faster than appending in loops. Use them when building large lists.

---

## Module 12: Functions in Python

- **Slug:** `functions`
- **Phase:** `foundations`
- **Topics:** 6
- **Duration:** ~64 minutes
- **Practice Challenges:** 42

### Overview

Functions package reusable logic. Define and call functions, pass arguments flexibly, understand scope, explore recursion, and write short lambdas for simple callbacks. Functions are the bridge between scripts and structured programs.

### Learning Outcomes

By the end of this module, you will:
- Define functions with clear inputs and outputs
- Use flexible argument patterns (*args, **kwargs)
- Understand variable scope
- Apply recursion to problems that benefit from it
- Write lambda functions for quick callbacks

### Key functions & concepts

- **`def / return`** — Define a named function with `def` and send a result back with `return`. Functions organize code, reduce duplication, and make logic testable and reusable.
- **`*args / **kwargs`** — Accept flexible numbers of arguments. `*args` captures extra positional arguments as a tuple, `**kwargs` captures extra keyword arguments as a dict. Example: `def merge(*dicts): return {k: v for d in dicts for k, v in d.items()}`.
- **`lambda`** — Write a small anonymous function in one line. `square = lambda x: x**2` is short for `def square(x): return x**2`. Use for simple callbacks.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Creating Functions | 10 | 7 | Define functions with def name(parameters): body; return result. Parameters are placeholders for data passed in; return sends results back to the caller. Example: def greet(name): return f"Hello, {name}!". Functions make code reusable and testable. |
| 2 | Calling Functions | 8 | 7 | Call a function by name with arguments: greet("Alice"). The returned value can be stored or used immediately: message = greet("Alice") or print(greet("Alice")). If a function doesn't explicitly return, it returns None. |
| 3 | Function Arguments | 12 | 7 | Master argument patterns: positional (def add(a, b): return a+b), keyword (add(a=5, b=3)), default (def power(x, exp=2): return xexp), \*args** (def total(*nums): return sum(nums)), **\*\*kwargs (def config(options): ...). Mix them: def func(a, b=2, *args, **kwargs):. |
| 4 | Variables in Functions | 10 | 7 | Understand scope: variables defined in a function are local (exist only inside). Variables outside are global (exist everywhere but locals shadow them). Avoid global state; pass data as arguments instead. Use global or nonlocal sparingly — they make code harder to follow. |
| 5 | Recursion | 14 | 7 | Functions can call themselves. Recursion works when you have a base case (stop condition) and a recursive case (call with simpler input). Example: def factorial(n): return 1 if n <= 1 else n * factorial(n-1). Recursion shines for trees, backtracking, and mathematical sequences. Watch for stack overflow with large inputs. |
| 6 | Lambda Functions | 10 | 7 | Write anonymous functions for short, one-expression operations: square = lambda x: x**2. Useful with map(), filter(), sorted(): sorted(words, key=lambda w: len(w)) sorts by word length. Don't overuse lambdas; use def for readability. |

### Common Pitfalls & Tips

- **Pitfall:** Modifying global state inside functions. → **Tip:** Pass data as arguments, return results. Avoid global except for constants.
- **Pitfall:** Mutable default arguments: def add_to_list(item, lst=[]): — the default list is created once and reused! → **Tip:** Use lst=None and check inside the function.
- **Tip:** Write functions that do one thing well. If your function has more than ~20 lines or does multiple things, split it up.

---

## Module 13: File Handling & Exception Handling

- **Slug:** `file-and-exception-handling`
- **Phase:** `data-science`
- **Topics:** 5
- **Duration:** ~62 minutes
- **Practice Challenges:** 35

### Overview

Real programs read files, handle failures, and sometimes call APIs. Learn file I/O, path handling, try/except/finally, custom exceptions, and basic HTTP JSON requests. This module bridges Python fundamentals to real-world workflows.

### Learning Outcomes

By the end of this module, you will:
- Read and write text, CSV, and JSON files safely
- Handle errors gracefully with try/except
- Work with file paths portably
- Raise and catch custom exceptions
- Fetch data from APIs and parse responses

### Key functions & concepts

- **`open() / with`** — Read and write files safely. `with open(filename) as f:` automatically closes the file (even if an error occurs). This is best practice.
- **`try / except / finally / raise`** — Handle errors. `try:` contains code that might fail, `except:` catches specific errors and handles them, `finally:` always runs (cleanup). `raise` signals custom errors.
- **`pathlib / os.path`** — Work with file paths portably. `Path("data/file.csv")` works on Windows and Unix without manual path separator handling.
- **`requests / json`** — Fetch and parse API responses. `requests.get(url)` fetches data, `.json()` parses JSON. Essential for data pipeline work.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Reading and Writing Files | 14 | 7 | Use with open(filename) as f: for safe file access. Read modes: "r" (text read), "rb" (binary), "w" (write, overwrite), "a" (append). Read methods: f.read() (entire file as string), f.readlines() (list of lines), for line in f: (iterate). Example: with open("data.csv") as f: lines = f.readlines(). |
| 2 | Working with File Paths | 10 | 7 | Use pathlib.Path for portable paths: from pathlib import Path; path = Path("data") / "file.csv". Avoids \\ vs / mess. Methods: path.exists(), path.is_file(), path.mkdir(), path.read_text(), path.write_text(). Much better than manual string concatenation. |
| 3 | try-except-finally | 12 | 7 | Handle errors: try: risky_code() except ValueError: handle_value_error() except Exception: handle_any_error() finally: cleanup(). Be specific: except ValueError: catches only ValueError, not all errors. finally: runs regardless of success or failure. Example: try: x = int(input("Enter number:"))) except ValueError: print("Not a valid number"). |
| 4 | Raising Custom Exceptions | 12 | 7 | Signal problems with raise: if age < 0: raise ValueError("Age cannot be negative"). Define custom exceptions: class NegativeAgeError(Exception): pass. Then raise NegativeAgeError("Age cannot be negative"). Custom exceptions communicate domain-specific problems clearly. |
| 5 | Working with APIs | 14 | 7 | Call APIs and parse responses: import requests; response = requests.get("https://api.example.com/data"); data = response.json(). Check status: if response.status_code == 200: .... Parse JSON: data = response.json() returns a dict/list. Handle network errors: wrap in try/except. Example: fetch weather data, cryptocurrency prices, etc. |

### Common Pitfalls & Tips

- **Pitfall:** Forgetting to close files, causing resource leaks. → **Tip:** Always use with open(...) — it closes automatically.
- **Pitfall:** Catching too broad: except Exception: hides bugs. → **Tip:** Catch specific errors: except FileNotFoundError:.
- **Tip:** Check API documentation for response format and error codes before writing the code.

---

## Module 14: NumPy for Numerical Computing

- **Slug:** `numpy`
- **Phase:** `data-science`
- **Topics:** 5
- **Duration:** ~62 minutes
- **Practice Challenges:** 35

### Overview

NumPy gives fast multidimensional arrays and vectorized math. Create arrays, inspect properties, index/slice, broadcast operations, and compute core statistics without slow Python loops. NumPy is the foundation for all numerical Python libraries.

### Learning Outcomes

By the end of this module, you will:
- Create and manipulate NumPy arrays
- Perform vectorized operations (much faster than loops)
- Understand broadcasting and shape
- Compute statistics efficiently
- Use NumPy as a foundation for Pandas and scikit-learn

### Key functions & concepts

- **`np.array / zeros / ones / arange`** — Create arrays from data or generate filled/ranged arrays. `np.array([1, 2, 3])` (from list), `np.zeros(5)` (array of 5 zeros), `np.ones((3, 4))` (3×4 ones), `np.arange(0, 10, 2)` (0, 2, 4, ..., 8).
- **`shape / dtype / broadcasting`** — Understand array structure. `shape` is dimensions, `dtype` is data type (int32, float64, etc.). Broadcasting applies operations element-wise across matching shapes — no manual loops.
- **`mean / median / std / sum`** — Compute common statistics efficiently on arrays. `np.mean(array)`, `np.std(array)`, etc. Much faster than Python loops for large data.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Introduction to NumPy Arrays | 12 | 7 | Meet np.ndarray (N-dimensional array) — the workhorse of numerical Python. Lists are slow for math; NumPy arrays are fast and compact. import numpy as np (standard alias). Create: np.array([1, 2, 3]) or np.array([[1, 2], [3, 4]]) (2D). |
| 2 | Array Creation and Properties | 12 | 7 | Create arrays efficiently: np.zeros(shape), np.ones(shape), np.arange(start, stop, step), np.linspace(start, stop, num) (evenly spaced). Inspect: array.shape (dimensions), array.dtype (data type), array.ndim (number of dimensions), array.size (total elements). |
| 3 | Indexing and Slicing Arrays | 12 | 7 | Access elements: 1D: array[0] (first), array[-1] (last); 2D: array[0, 1] (row 0, col 1). Slice: array[1:4], array[:, 2] (all rows, col 2), array[1:3, 0:2] (submatrix). Fancy indexing: array[[0, 2, 4]] (specific indices). Boolean indexing: array[array > 5] (elements greater than 5). |
| 4 | Array Operations and Broadcasting | 14 | 7 | Element-wise operations: a + b, a * b, a / b (not matrix multiplication, just element-by-element). Broadcasting: a + 5 adds 5 to each element. Shape-aware: (3, 1) + (1, 4) → (3, 4) (automatic expansion). Avoid loops: NumPy operations are vectorized and fast. |
| 5 | Statistical Functions in NumPy | 12 | 7 | Compute statistics: np.mean() (average), np.median() (middle value), np.std() (standard deviation), np.var() (variance), np.min(), np.max(), np.sum(), np.percentile(array, 75) (75th percentile). Use axis=0 or axis=1 to reduce along a specific dimension. Example: np.mean(array, axis=0) averages down columns. |

### Common Pitfalls & Tips

- **Pitfall:** Using lists instead of arrays for numerical work — very slow. → **Tip:** Convert to NumPy arrays immediately: arr = np.array(my_list).
- **Pitfall:** Confusing * (element-wise multiplication) with @ (matrix multiplication). → **Tip:** Use @ or np.dot() for matrix math.
- **Tip:** NumPy operations create copies by default. Use views when you need to save memory: view = array[::2] (every other element, doesn't copy).

---

## Module 15: Pandas for Data Manipulation

- **Slug:** `pandas`
- **Phase:** `data-science`
- **Topics:** 6
- **Duration:** ~78 minutes
- **Practice Challenges:** 42

### Overview

Pandas is the workhorse for tabular data. Learn Series/DataFrames, I/O, selecting and filtering, cleaning, groupby/joins, and pivot tables — the everyday toolkit for analysis. Most data science work in Python uses Pandas.

### Learning Outcomes

By the end of this module, you will:
- Load and save data with Pandas
- Filter and select data efficiently
- Clean messy data (missing values, duplicates, outliers)
- Group and aggregate data
- Join and pivot tables for complex analyses

### Key functions & concepts

- **`read_csv() / to_csv()`** — Load and save tabular data. `pd.read_csv("file.csv")` loads a CSV; `df.to_csv("file.csv")` saves. Also supports Excel, JSON, SQL: `read_excel()`, `read_json()`, etc.
- **`loc / iloc`** — Select rows and columns by label or integer position. `df.loc[0, 'name']` (row 0, column 'name' by label), `df.iloc[0, 1]` (row 0, col 1 by position). Use `loc` for label-based selection (preferred); use `iloc` for position-based.
- **`groupby() / merge() / pivot_table()`** — Aggregate, combine tables, and reshape summaries. `df.groupby('category').mean()` calculates mean per category. `pd.merge(df1, df2, on='id')` joins tables. `pivot_table()` reshapes long data to wide.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Series and DataFrames | 12 | 7 | Understand data structures: Series (1D, labeled array like a column), DataFrame (2D table, like a spreadsheet). Create: pd.Series([1, 2, 3]) (Series), pd.DataFrame({"A": [1, 2], "B": [3, 4]}) (DataFrame). Access columns: df['A'] returns a Series; df[['A', 'B']] returns a DataFrame. |
| 2 | Reading and Writing Data | 12 | 7 | Load data: pd.read_csv("file.csv"), pd.read_excel("file.xlsx"), pd.read_json("file.json"). Save: df.to_csv("out.csv"), df.to_excel("out.xlsx"). Useful options: sep=',' (delimiter), header=0 (row with column names), usecols=['A', 'B'] (load specific columns), nrows=100 (load first 100 rows). |
| 3 | Indexing, Filtering, and Selecting | 14 | 7 | Select rows/columns: df['A'] (column A), df[['A', 'B']] (columns A and B), df.loc[0] (row 0 by label), df.iloc[0] (row 0 by position). Filter: df[df['A'] > 5] (rows where A > 5), df[(df['A'] > 5) & (df['B'] < 10)] (multiple conditions). Use boolean masks for complex filtering. |
| 4 | Data Cleaning | 14 | 7 | Handle missing data: df.isnull() (find NaN), df.dropna() (remove rows with NaN), df.fillna(value) (replace NaN). Remove duplicates: df.drop_duplicates(). Fix data types: df['date'] = pd.to_datetime(df['date']). Rename columns: df.rename(columns={'old': 'new'}). Example: df.dropna(subset=['id']).drop_duplicates(subset=['id']) cleans messy data. |
| 5 | GroupBy, Merging, and Joining | 14 | 7 | Aggregate: df.groupby('category')['sales'].sum() sums sales per category. Chain methods: df.groupby('category').agg({'sales': 'sum', 'quantity': 'mean'}) does multiple aggregations. Combine tables: pd.merge(orders, customers, on='customer_id') inner join (only matching IDs), how='left' for left outer join. |
| 6 | Pivot Tables | 12 | 7 | Reshape data: pd.pivot_table(df, values='sales', index='region', columns='product', aggfunc='sum') reshapes from long to wide, summarizing at intersections. Powerful for reports showing multiple dimensions. Also use groupby() — pivot_table is syntactic sugar for complex groupby. |

### Common Pitfalls & Tips

- **Pitfall:** Chaining methods without checking intermediate results. → **Tip:** Break chains to debug: step1 = df.groupby(...); print(step1); step2 = step1.sum().
- **Pitfall:** Modifying views instead of copies, causing SettingWithCopyWarning. → **Tip:** Use .copy() when filtering: df_filtered = df[df['A'] > 5].copy().
- **Tip:** Use df.head() and df.info() early to understand data structure and types.

---

## Module 16: Data Visualization

- **Slug:** `data-visualization`
- **Phase:** `data-science`
- **Topics:** 5
- **Duration:** ~64 minutes
- **Practice Challenges:** 35

### Overview

Charts reveal patterns that tables hide. Learn Matplotlib plotting basics, core chart types, customization, then Seaborn for statistical and categorical visuals. Visualization is often the most impactful part of analysis.

### Learning Outcomes

By the end of this module, you will:
- Create publication-quality plots with Matplotlib and Seaborn
- Choose the right chart for the question
- Customize plots for clarity and impact
- Combine multiple plots for comprehensive views
- Understand when and how to use each chart type

### Key functions & concepts

- **`plt.plot / bar / scatter / hist`** — Core Matplotlib chart types: line (trends over time), bar (comparisons), scatter (relationships), histogram (distributions). Each reveals a different pattern.
- **`sns.boxplot / countplot / heatmap`** — Seaborn charts for boxplots (distributions by category), countplots (category frequencies), heatmaps (correlation matrices or 2D aggregations).

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Introduction to Matplotlib | 12 | 7 | Set up Matplotlib's workflow: import matplotlib.pyplot as plt. Create figure/axes: fig, ax = plt.subplots(). Plot: ax.plot(x, y). Show: plt.show(). Understand: Figure (container), Axes (plot area). This model is more powerful than the simple plt.plot() style (which creates a figure automatically). |
| 2 | Line, Bar, Scatter, and Histogram | 14 | 7 | Line plot (ax.plot(x, y)): trends over time. Bar plot (ax.bar(categories, values)): compare groups. Scatter plot (ax.scatter(x, y)): show relationships, spot clusters. Histogram (ax.hist(data)): distribution shape. Choose based on your question: trend? comparison? relationship? distribution? |
| 3 | Customizing Plots | 12 | 7 | Add labels and titles: ax.set_xlabel(), ax.set_ylabel(), ax.set_title(). Customize: ax.set_xlim(), ax.set_ylim() (axis ranges), ax.grid() (gridlines), ax.legend() (label series). Colors: ax.plot(..., color='red') or ax.bar(..., color=['red', 'blue']). Rotate labels: ax.tick_params(axis='x', rotation=45) for readability. |
| 4 | Introduction to Seaborn | 12 | 7 | Build on Matplotlib with cleaner syntax and better aesthetics: import seaborn as sns. Set style: sns.set_style("whitegrid"). Plots: sns.lineplot(), sns.scatterplot(), sns.barplot() (similar to Matplotlib but prettier). Seaborn integrates with Pandas DataFrames: sns.scatterplot(data=df, x='col1', y='col2', hue='category'). |
| 5 | Statistical and Categorical Plots | 14 | 7 | Boxplot (sns.boxplot()): shows quartiles and outliers per category. Violinplot (sns.violinplot()): fancy boxplot showing full distribution shape. Countplot (sns.countplot()): bar chart of category frequencies. Heatmap (sns.heatmap()): 2D color matrix, great for correlations. Example: sns.heatmap(df.corr(), annot=True) shows correlation matrix with numbers. |

### Common Pitfalls & Tips

- **Pitfall:** Overwhelming plots with too much information. → **Tip:** One plot = one insight. If you need many insights, create multiple plots.
- **Pitfall:** Forgetting axis labels, titles, or legends. → **Tip:** Always add these — they're essential for interpretation.
- **Tip:** Save plots: plt.savefig("plot.png", dpi=300, bbox_inches='tight') for reports and presentations.

---

## Module 17: Statistics & Exploratory Data Analysis

- **Slug:** `statistics-and-eda`
- **Phase:** `data-science`
- **Topics:** 5
- **Duration:** ~64 minutes
- **Practice Challenges:** 35

### Overview

Statistics and EDA turn raw tables into insight. Cover descriptive measures, distributions, correlation, outlier detection, and an end-to-end exploratory workflow on a real dataset. EDA is where you start every analysis.

### Learning Outcomes

By the end of this module, you will:
- Compute and interpret descriptive statistics
- Recognize distribution shapes and patterns
- Identify and handle outliers
- Measure relationships between variables
- Execute a complete EDA workflow

### Key functions & concepts

- **`mean / median / mode / std`** — Summarize center and spread. Mean (average), median (middle value), mode (most common), std (standard deviation, measures spread). Use median for skewed data; mean for normal distributions.
- **`corr() / covariance`** — Measure how variables move together. Correlation (-1 to 1): -1 (inverse), 0 (no relationship), 1 (direct). `df.corr()` computes Pearson correlation. Negative correlation: as one increases, the other decreases.
- **`IQR / Z-score`** — Detect unusual values. IQR (Interquartile Range) method: flag values below Q1 - 1.5×IQR or above Q3 + 1.5×IQR. Z-score: flag |z| > 3 (very unusual). Use these to find data quality issues.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Descriptive Statistics | 12 | 7 | Compute and interpret: df.describe() (automatic summary: count, mean, std, min, quartiles, max). For each column: df['col'].mean(), df['col'].median(), df['col'].std(). Skewness (df.skew()) and kurtosis (df.kurtosis()) describe shape. High std = wide spread; low std = tight cluster. |
| 2 | Data Distributions | 12 | 7 | Visualize with histograms: plt.hist(data, bins=30). Recognize shapes: normal (bell curve), skewed left (tail on left), skewed right (tail on right), bimodal (two peaks). Long tails suggest outliers. QQ-plots test normality. Seaborn: sns.histplot(data=df, x='col', kde=True) adds a smoothed density curve. |
| 3 | Correlation and Covariance | 12 | 7 | Measure relationships: df.corr() computes Pearson correlation between all numeric columns. Interpret: 0.8+ (strong positive), 0.5–0.8 (moderate), 0–0.5 (weak), negative values (inverse). Visualize: sns.heatmap(df.corr()). Remember: correlation ≠ causation. High correlation might be coincidence or both caused by a third variable. |
| 4 | Outlier Detection | 12 | 7 | Find unusual values: IQR method: Q1 = df[col].quantile(0.25); Q3 = df[col].quantile(0.75); IQR = Q3 - Q1; outliers = df[(df[col] < Q1 - 1.5*IQR) \/ (df[col] > Q3 + 1.5*IQR)]. Z-score: z = (x - mean) / std; flag /z/ > 3. Decide: remove, cap, or investigate outliers. |
| 5 | Performing EDA on a Real Dataset | 16 | 7 | Execute end-to-end: 1) Load (pd.read_csv()), 2) Inspect (df.shape, df.info(), df.head()), 3) Describe (df.describe()), 4) Visualize (histograms, boxplots, scatter plots), 5) Correlate (df.corr(), heatmap), 6) Document findings and questions. Example: analyze sales data — identify top products, seasonal trends, customer segments. |

### Common Pitfalls & Tips

- **Pitfall:** Stopping at descriptive stats without visualizing. → **Tip:** Always plot — Anscombe's Quartet is a famous example where different datasets have identical descriptive stats but look completely different when plotted.
- **Pitfall:** Removing outliers without investigation. → **Tip:** Understand *why* they're outliers (data entry errors, legitimate extremes?) before deciding to remove.
- **Tip:** EDA is iterative. Start broad (distributions, correlations), then zoom in on interesting patterns.

---

## Module 18: Capstone Project

- **Slug:** `capstone-project`
- **Phase:** `project`
- **Topics:** 5
- **Duration:** ~88 minutes
- **Practice Challenges:** 30

### Overview

Apply everything in an end-to-end retail-style analysis: define the problem, model the data, process with logic and loops, wrap work in functions, then clean, explore, visualize, and report. This is where theory becomes practice.

### Learning Outcomes

By the end of this module, you will:
- Define clear problems and success metrics
- Design data models for real-world scenarios
- Process data with structured logic and functions
- Perform complete EDA with documentation
- Present findings clearly to stakeholders

### Key functions & concepts

- **`End-to-end pipeline`** — Problem → data model → processing → functions → EDA/visuals → report. Follow this flow: it scales from homework to production.
- **`Reusable summary functions`** — Package repeated analysis steps (filtering, grouping, calculating) so the final report stays clean and maintainable. Functions make your code professional.
- **`Data storytelling`** — Present insights in a narrative that answers the original question. Combine plots, tables, and prose to build a compelling story.

### Subtopics

| # | Topic | Minutes | Practice | Description |
|---|-------|---------|----------|-------------|
| 1 | Project Overview & Problem Statement | 12 | 5 | Scenario: A retail company wants to understand sales performance and customer behavior. Your task: Load, explore, and analyze their data. Questions to answer: Which products sell best? Which regions are strongest? Are there seasonal patterns? Who are our best customers? Start by reading the dataset and framing questions as measurable objectives. |
| 2 | Step 1: Data Model | 15 | 6 | Design how you'll represent the data. Example: customers (customer_id, name, region), orders (order_id, customer_id, date, total), products (product_id, name, category). Sketch this on paper or in comments. Understanding structure prevents mistakes when processing. |
| 3 | Step 2: Logic & Loops | 18 | 6 | Process records with conditionals and loops. Example: loop over orders, categorize as "high-value" (total > median) or "low-value", flag seasonal trends (Dec higher?), compute per-region totals. Organize logic clearly; comments explain *why*, not what. This builds the foundation for analysis. |
| 4 | Step 3: Functions & Report | 18 | 6 | Refactor repeated logic into functions: def total_by_region(orders):, def top_products(orders, n=10):, def seasonal_analysis(orders):. Functions make the final report concise and readable. Each function does one thing; chain them to answer questions. Avoid copy-paste code. |
| 5 | Capstone Build | 25 | 7 | Execute the full pipeline: Load data → Clean (missing values, typos) → Explore (statistics, distributions) → Visualize (bar charts, trends, correlations) → Summarize findings → Present (explain what you found and what it means). Produce a report (Jupyter notebook or Python script with comments) that a stakeholder could read and understand without running code. Include plots, tables, and written interpretation. |

### Common Pitfalls & Tips

- **Pitfall:** Jumping into code without a measurable question. → **Tip:** Frame objectives first: which products sell best, which regions are strongest, seasonal patterns, best customers.
- **Pitfall:** Copy-pasting analysis steps instead of packaging them. → **Tip:** Refactor into reusable functions like total_by_region() and top_products() so the report stays clean.
- **Tip:** Score your work on correctness, completeness, clarity, and insight — not just charts that run.
- **Tip:** Test on a small sample first, version intermediate reports, and visualize everything tables hide.

---

## Notes

- Module practice challenges live under Learn (`/learn/<module>/<topic>/challenges`) and are **separate** from the standalone Practice hub.
- Standalone Practice hub (Python Basics & Algorithms) is a different problem bank under `/practice`.
- This document is generated from the enhanced curriculum guides in `src/data/python-module-guides.ts`.

*This curriculum is designed to be completed in ~16 hours of active learning. Spacing it over 4–8 weeks allows time for practice and projects.*

## Supplementary Learning Resources

### By Module Phase

**Foundations (Modules 1–12):**
- Practice writing small scripts (e.g., user input → process → output).
- Build a simple to-do list or calculator using functions and data structures.
- Avoid jumping ahead; each module builds on prior ones.

**Data Science (Modules 13–17):**
- Work with real datasets (Kaggle, UCI ML Repository, government data).
- Start with small files (< 10 MB) to iterate quickly.
- Practice combining tools: read CSV → filter with Pandas → plot with Seaborn.

**Project (Module 18):**
- Choose a dataset aligned to your interests (sports, finance, health, etc.).
- Start with a simple question, then expand.
- Seek feedback on your analysis; iteration improves insights.

### Common Study Patterns

| Pattern | Tip |
|---------|-----|
| **Getting stuck on syntax** | Write small test scripts (`test.py`) to experiment before integrating into your main code. |
| **Forgetting methods** | Keep a cheat sheet or IDE quick reference open. Muscle memory develops with practice. |
| **Logical errors** | Add `print()` statements to trace execution. Use a debugger for complex issues. |
| **Slow code** | Profile (time) your code; identify bottlenecks. Usually it's reading files or loops over large lists. |
| **Deployment confusion** | Save scripts as `.py` files for sharing; use Jupyter for exploration and reporting. |

---

## Tips for Success

1. **Code along**: Don't just watch; write every line yourself. Mistakes are learning.
2. **Build projects early**: Homework helps, but real projects motivate and cement learning.
3. **Read others' code**: Open-source projects on GitHub show professional patterns.
4. **Automate tedious tasks**: Use Python to solve a real problem (data cleaning, file organization). You'll stay motivated.
5. **Debug fearlessly**: Errors are information. Read the error message; it usually tells you what went wrong.
6. **Collaborate**: Discuss code with peers. Explaining your solution deepens understanding.

---

## Appendix: Quick Reference

### Key Python Constructs

| Construct | Example | Purpose |
|-----------|---------|---------|
| Variables | `name = "Alice"; age = 30` | Store data with meaningful names |
| Lists | `items = [1, 2, 3]; items.append(4)` | Ordered, mutable collections |
| Dicts | `person = {"name": "Alice", "age": 30}` | Key-value mappings (like objects) |
| Loops | `for item in items: print(item)` | Repeat actions |
| Functions | `def greet(name): return f"Hello, {name}"` | Reusable logic |
| Comprehensions | `[x*2 for x in range(5)]` | Concise list building |
| Try/Except | `try: x = int(y) except ValueError: x = 0` | Error handling |

### Key Pandas Patterns

| Task | Code |
|------|------|
| Load CSV | `df = pd.read_csv("file.csv")` |
| Show first rows | `df.head(10)` |
| Filter rows | `df[df['column'] > 5]` |
| Group and aggregate | `df.groupby('category')['sales'].sum()` |
| Join tables | `pd.merge(df1, df2, on='id')` |
| Pivot | `df.pivot_table(values='sales', index='region', columns='product')` |

### Key NumPy Patterns

| Task | Code |
|------|------|
| Create array | `arr = np.array([1, 2, 3])` |
| Element-wise math | `arr * 2`, `arr + arr` |
| Statistics | `np.mean(arr)`, `np.std(arr)` |
| Boolean indexing | `arr[arr > 5]` |
| Reshape | `arr.reshape(2, 3)` |
| Random sampling | `np.random.choice(arr, size=10)` |

---

## Course Completion Checklist

After finishing this course, you should be able to:

- [ ] Write Python scripts that read user input, process data, and output results.
- [ ] Work with all core data types: strings, lists, dicts, sets, tuples.
- [ ] Use functions to organize and reuse code.
- [ ] Handle errors gracefully with try/except.
- [ ] Load and save data from/to CSV, JSON, and other formats.
- [ ] Manipulate data with NumPy and Pandas.
- [ ] Create publication-quality plots with Matplotlib and Seaborn.
- [ ] Perform statistical analysis: describe, visualize, and test hypotheses.
- [ ] Execute a complete data science pipeline: problem → data → insight.
- [ ] Communicate findings clearly in reports and presentations.

**Next steps:** Explore specialized libraries (scikit-learn for machine learning, statsmodels for statistical modeling) or deepen your focus (web scraping, time series, NLP, computer vision).

---

*This curriculum is designed to be completed in ~16 hours of active learning. Spacing it over 4–8 weeks allows time for practice and projects. Good luck!*
