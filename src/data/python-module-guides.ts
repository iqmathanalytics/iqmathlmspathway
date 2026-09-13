import type { ModuleGuide } from "./module-guide-types";

export type { ModuleGuide } from "./module-guide-types";

export const PYTHON_MODULE_GUIDES: Record<string, ModuleGuide> = {
  "introduction-and-setup": {
    overview:
      "Start here if you are new to coding. This module explains what programming is, why Python is used in data science, and how to prepare a clean working environment (Anaconda/venv, IDEs, and Jupyter) so later modules run smoothly.\n\nBefore you write a single line of Python, you need to understand what programming is and why Python matters for data work. You'll also set up your development environment — a critical first step that prevents package conflicts and ensures reproducibility across projects.",
    learningOutcomes: [
      "Understand what a program is and the three pillars of programming logic",
      "Know why Python is the preferred language for data science",
      "Install and configure Python using industry-standard tools",
      "Choose the right IDE for different types of work",
      "Write and execute your first Python code in Jupyter notebooks",
    ],
    keyFunctions: [
      {
        name: "print()",
        explanation:
          "Shows text or values in the console — your first way to see program output.",
      },
      {
        name: "Jupyter / IDE",
        explanation:
          "Tools where you write and run Python: notebooks for exploration, VS Code/PyCharm for larger scripts.",
      },
      {
        name: "venv / Anaconda",
        explanation:
          "Isolated environments so project packages do not conflict with each other. Each project gets its own sandbox.",
      },
      {
        name: "Environment variables",
        explanation:
          "System settings that control how Python finds packages and executes code.",
      },
      {
        name: "Package managers (pip, conda)",
        explanation:
          "Tools that download and install third-party libraries like NumPy and Pandas.",
      },
    ],
    topics: {
      "m1-t1":
        "Learn what a program is and the three building blocks of logic: sequence (steps in order), selection (if/else branching), and iteration (loops repeating actions). Understand how these building blocks combine to solve problems.",
      "m1-t2":
        "Discover why Python dominates data science: clear, readable syntax plus an ecosystem of libraries (NumPy, Pandas, Matplotlib, Scikit-learn) built specifically for data work. Compare Python to R, SQL, and other languages.",
      "m1-t3":
        "Set up Python safely using Anaconda (includes packages pre-installed) or venv (lightweight, minimal). Learn how isolated environments prevent dependency hell where one project's requirements break another's.",
      "m1-t4":
        "Compare tools: Jupyter Notebook (interactive, perfect for exploration), VS Code (lightweight, extensible), PyCharm (full-featured, enterprise-grade), and this platform's built-in editor. Understand when to use each.",
      "m1-t5":
        "Master Jupyter: code cells (execute in any order), markdown cells (document your thinking), and a typical exploratory workflow. Learn notebook best practices: keep cells focused, add explanatory text, save frequently.",
    },
    pitfalls: [
      {
        pitfall: "Installing Python directly without virtual environments.",
        tip: "Always create a venv or conda environment before installing packages for a project.",
      },
      {
        pitfall: "Upgrading packages without testing.",
        tip: "Document your environment with `pip freeze > requirements.txt` so you can reproduce it later.",
      },
    ],
    tips: [
      "Jupyter notebooks are great for exploration but not for production code. Use `.py` files for reusable scripts.",
    ],
  },

  "basic-syntax-and-data-types": {
    overview:
      "Build Python fundamentals: talking to the user, documenting code, storing values in variables, understanding core types, and converting between types when you need to. This module is the foundation for all programming that follows.\n\nYou'll learn that every piece of data in Python has a type (integer, decimal, text, true/false), and that type determines what you can do with it. Understanding types prevents errors and lets you write more efficient code.",
    learningOutcomes: [
      "Use print() and input() to communicate with users",
      "Create and name variables following best practices",
      "Recognize and work with core data types: int, float, str, bool",
      "Convert between types safely (typecasting)",
      "Understand why type mismatches cause errors",
    ],
    keyFunctions: [
      {
        name: "print() / input()",
        explanation:
          "Output results and read text from the user. print() displays values; input() pauses and waits for keyboard input.",
      },
      {
        name: "type()",
        explanation:
          "Returns the type of any value (int, float, str, bool, etc.). Essential for debugging and understanding data.",
      },
      {
        name: "int() / float() / str() / bool()",
        explanation:
          'Convert between types. Example: int("42") turns the text "42" into the number 42.',
      },
      {
        name: "Variable naming",
        explanation:
          "Use clear, descriptive names like user_age, not x or a. This makes code readable months later.",
      },
      {
        name: "Type safety",
        explanation:
          'Math on mixed types ("5" + 3) fails. Always convert first: int("5") + 3 = 8.',
      },
    ],
    topics: {
      "m2-t1":
        "Master print() for displaying messages and input() for reading keyboard input. Build interactive programs that prompt users and show results. Learn that input() always returns a string, even if the user types a number.",
      "m2-t2":
        "Write single-line comments (#) and multi-line docstrings (triple quotes) to explain why your code does something. Comments are ignored by Python but essential for humans reading the code.",
      "m2-t3":
        "Create variables as named containers for values using =. Learn that variable names are case-sensitive, cannot start with a number, and should describe the data they hold. Practice naming: use snake_case (my_variable), not camelCase or PascalCase.",
      "m2-t4":
        "Meet Python's core types: int (whole numbers like 42), float (decimals like 3.14), str (text like \"hello\"), and bool (true/false). Understand that type() tells you which type you have. Learn that strings are immutable — you can't change a character in place.",
      "m2-t5":
        'Convert between types safely. Example: read a number from the user with age = int(input("Enter age: ")). Learn common pitfalls: int("3.5") fails (use float() first), and str() adds quotes around numbers.',
    },
    pitfalls: [
      {
        pitfall: "Forgetting that input() returns a string.",
        tip: "Always convert with int(), float(), etc. if you need to do math.",
      },
      {
        pitfall: "Naming variables x, y, temp.",
        tip: "Use descriptive names like total_sales, user_name.",
      },
    ],
    tips: ["Use type(variable) to check what you're working with, especially when debugging."],
  },

  operators: {
    overview:
      "Operators are the symbols and keywords that compute and compare values. This module covers arithmetic, assignment shortcuts, comparisons, logic, identity, membership, and bitwise operations used throughout later topics.\n\nMaster operators and you'll write powerful conditions (if price > 100 and stock < 10), efficient updates (count += 1), and queries (\"apple\" in fruits).",
    learningOutcomes: [
      "Perform arithmetic and understand operator precedence (PEMDAS)",
      "Use assignment operators to update variables concisely",
      "Write comparison operators for decision-making",
      "Combine conditions with logical operators",
      "Check membership and identity",
    ],
    keyFunctions: [
      {
        name: "+ - * / // % **",
        explanation:
          "Arithmetic: add, subtract, multiply, divide, floor divide (rounds down), remainder (modulo), and power. Example: 5 % 2 = 1.",
      },
      {
        name: "+= -= *= /= %=",
        explanation:
          "Assignment shortcuts. x += 5 is short for x = x + 5. Speeds up common updates.",
      },
      {
        name: "== != < > <= >=",
        explanation:
          "Comparison operators that return True or False. Note: == (equal) is different from = (assignment).",
      },
      {
        name: "and / or / not",
        explanation:
          "Combine or invert boolean conditions in if-statements and filters. (age > 18) and (score > 80) is True only if both are true.",
      },
      {
        name: "in / is",
        explanation:
          'Membership checks (value in list) and identity checks (a is b). Example: "apple" in ["apple", "banana"] returns True.',
      },
    ],
    topics: {
      "m3-t1":
        "Use +, -, *, /, //, %, ** for everyday math. Learn precedence: exponents first, then *, /, // (left to right), then +, - (left to right). Parentheses override: (2 + 3) * 4 = 20, not 14.",
      "m3-t2":
        "Update variables concisely: x += 5 adds 5 to x, x -= 2 subtracts 2, etc. These shortcuts make code more readable and are widely used in loops and data processing.",
      "m3-t3":
        "Compare values and get True or False. 5 == 5 is True, 5 != 3 is True, 5 < 10 is True. Comparisons drive all decision-making in programs.",
      "m3-t4":
        'Combine conditions: and (both must be true), or (at least one true), not (inverts). Example: (status == "active") and (balance > 0) checks both conditions before proceeding.',
      "m3-t5":
        "Check if two variables point to the same object in memory with is / is not. Different from == (equality). Example: a = [1, 2]; b = a; a is b is True (same list), but a = [1, 2]; b = [1, 2]; a is b is False (different lists).",
      "m3-t6":
        'Check if a value appears in a collection: value in list, char in string, key in dict. Example: "apple" in ["apple", "banana", "orange"] returns True. Essential for filtering and validation.',
      "m3-t7":
        "Work with individual bits: & (AND), | (OR), ^ (XOR), ~ (NOT), << >> (left/right shift). Less common in data science but useful for flags, permissions, and low-level optimization. Example: 5 & 3 = 1 in binary.",
    },
    pitfalls: [
      {
        pitfall: "Confusing = (assign) with == (compare).",
        tip: "Remember: x = 5 assigns, x == 5 checks if equal.",
      },
      {
        pitfall: "Forgetting that / returns a float even for whole numbers.",
        tip: "Use // for integer division: 7 // 2 = 3.",
      },
    ],
    tips: [
      "Use parentheses to make complex conditions clear: (a > 5) and (b < 10) is easier to read than a > 5 and b < 10.",
    ],
  },

  strings: {
    overview:
      "Text is central to cleaning data and building reports. Learn how to create strings, format them, index and slice characters, and use built-in string methods to transform text. In data science, you'll spend a lot of time cleaning messy text fields, so string mastery pays off immediately.",
    learningOutcomes: [
      "Create and manipulate strings efficiently",
      "Use f-strings and .format() to build dynamic messages",
      "Index and slice strings to extract parts",
      "Apply string methods to clean real-world text",
      "Understand immutability and its consequences",
    ],
    keyFunctions: [
      {
        name: "f-strings / .format()",
        explanation:
          "Insert variables into text cleanly. F-strings are modern and readable: `f\"Hello {name}, you are {age} years old\"`. The `.format()` method is older but still widely used: `\"Hello {}, you are {} years old\".format(name, age)`.",
      },
      {
        name: "strip() / replace() / split() / join()",
        explanation:
          "Common text-cleaning tools. `strip()` removes leading/trailing whitespace, `replace()` swaps text, `split()` breaks into parts, `join()` reassembles.",
      },
      {
        name: "upper() / lower() / capitalize()",
        explanation:
          "Change case for standardization. Useful when comparing user input that might be \"APPLE\", \"apple\", or \"Apple\".",
      },
      {
        name: "find() / count() / startswith() / endswith()",
        explanation:
          "Search and validate text. Example: `email.endswith(\"@gmail.com\")` checks domain.",
      },
      {
        name: "Indexing & slicing",
        explanation:
          "Read one character with `s[0]` (first) or `s[-1]` (last), or a substring with `s[2:5]` (characters at indices 2, 3, 4).",
      },
    ],
    topics: {
      "m4-t1":
        "Create strings with single quotes 'hello', double quotes \"hello\", or triple quotes for multi-line text. Learn escape sequences: \\n (newline), \\t (tab), \\\\ (backslash). Triple-quoted strings preserve formatting and are useful for long messages.",
      "m4-t2":
        "Build readable output with f-strings (f\"x = {x}\", modern Python 3.6+) or .format() (\"x = {}\".format(x), older but compatible). Learn placeholder syntax, alignment, and decimal precision: f\"{price:.2f}\" shows 2 decimal places.",
      "m4-t3":
        "Access characters by position: s[0] is the first character, s[-1] is the last. Remember that indexing starts at 0, not 1. Negative indices count from the end: s[-2] is the second-to-last character.",
      "m4-t4":
        "Extract substrings with s[start:stop:step]. Example: \"Python\"[0:3] gives \"Pyt\". The stop index is exclusive (not included). Omit indices for defaults: s[:3] means \"from start to index 3\", s[2:] means \"from index 2 to end\".",
      "m4-t5":
        "Apply transformations: s.upper(), s.lower(), s.strip() (remove whitespace), s.replace(old, new), s.split(delimiter) (break into list), s.join(list) (reassemble). Learn that strings are immutable — methods return new strings; they don't change the original.",
    },
    pitfalls: [
      {
        pitfall: "Forgetting that strings are immutable. s[0] = \"X\" fails.",
        tip: "Create a new string: s = \"X\" + s[1:].",
      },
      {
        pitfall: "Off-by-one errors in slicing.",
        tip: "Remember the stop index is exclusive. s[0:3] includes indices 0, 1, 2 — not 3.",
      },
    ],
    tips: [
      "Use .split() and .join() together for powerful text transforms: \", \".join(words.split()) fixes spacing.",
    ],
  },

  lists: {
    overview:
      "Lists hold ordered sequences you can change. You will create lists, understand their properties, index and slice them, use list methods, and modify items — skills used constantly in data pipelines. Lists are the workhorses of Python; mastering them is essential.",
    learningOutcomes: [
      "Create and populate lists",
      "Index and slice lists to extract data",
      "Modify lists with append, insert, remove, and pop",
      "Sort and search lists",
      "Understand the difference between mutable and immutable data",
    ],
    keyFunctions: [
      {
        name: "append() / insert() / remove() / pop()",
        explanation:
          "Modify lists as they grow or shrink. `append()` adds to the end, `insert(idx, val)` adds at a position, `remove(val)` deletes by value, `pop(idx)` removes by position and returns it.",
      },
      {
        name: "sort() / sorted()",
        explanation:
          "Order items. `sort()` modifies the list in-place, `sorted()` returns a new sorted copy. Example: `sorted([3, 1, 2])` returns `[1, 2, 3]`.",
      },
      {
        name: "len() / indexing / slicing",
        explanation:
          "Measure size and select items or sub-lists by position. `len(list)` tells you how many items; indexing and slicing work like strings.",
      },
      {
        name: "in / index() / count()",
        explanation:
          "Search lists. `value in list` checks presence, `list.index(value)` finds position, `list.count(value)` counts occurrences.",
      },
    ],
    topics: {
      "m5-t1":
        "Build lists with square brackets: [1, 2, 3] (integers), [\"a\", \"b\"] (strings), or mixed types [1, \"two\", 3.0] (though mixed types are rare in data work). Use list() to convert other sequences. Remember: empty [] creates an empty list.",
      "m5-t2":
        "Lists are ordered (position matters), mutable (changeable), and allow duplicates ([1, 1, 2] is valid). These properties make lists flexible for building up data incrementally. Contrast with sets (no duplicates) and tuples (immutable).",
      "m5-t3":
        "Access items by position: list[0] (first), list[-1] (last). Negative indices count backward. Out-of-bounds access raises an error. Use len(list) to safely stay within bounds.",
      "m5-t4":
        "Extract sub-lists: list[1:4] gets items at indices 1, 2, 3. Use list[::2] to get every other item, list[::-1] to reverse. Slicing never raises errors — out-of-bounds indices are silently ignored.",
      "m5-t5":
        "Master essential methods: append(x) (add to end), extend(list) (add multiple), insert(i, x) (add at position), remove(x) (delete by value, first occurrence only), pop(i) (remove at position, returns value), clear() (empty the list), reverse() (flip order), sort() (order in-place).",
      "m5-t6":
        "Change lists in place: list[0] = 99 (replace item), list[1:3] = [10, 20, 30] (replace range with more/fewer items), del list[2] (delete by position). Understand that these modifications happen to the original list — there's no copy.",
    },
    pitfalls: [
      {
        pitfall: "Confusing .remove() (by value) and .pop() (by position).",
        tip: "Use remove() when you know what to remove, pop() when you know the position.",
      },
      {
        pitfall: "Forgetting that modifying a list affects all references to it.",
        tip: "Use slicing to make a copy: new_list = old_list[:] or new_list = list(old_list).",
      },
    ],
    tips: [
      "Use list.sort() (modifies in-place, no copy overhead) when memory matters; use sorted() (returns new list) when you need to preserve the original.",
    ],
  },

  tuples: {
    overview:
      "Tuples are ordered but immutable — ideal for fixed records (like coordinates or database rows). Learn syntax, properties, indexing, slicing, and the small set of tuple methods. While simpler than lists, tuples are powerful when you need to guarantee data won't change.",
    learningOutcomes: [
      "Create tuples and understand immutability",
      "Use tuple unpacking to extract values",
      "Index and slice tuples",
      "Choose between tuples and lists for your use case",
      "Use tuples as dictionary keys",
    ],
    keyFunctions: [
      {
        name: "tuple packing / unpacking",
        explanation:
          "Group values into a tuple: `point = (3, 4)`. Split them back: `x, y = point`. Powerful for functions that return multiple values.",
      },
      {
        name: "count() / index()",
        explanation:
          "The main tuple methods: `tuple.count(value)` counts occurrences, `tuple.index(value)` finds position (raises error if not found).",
      },
    ],
    topics: {
      "m6-t1":
        "Create tuples with parentheses: (1, 2, 3) or no parens: 1, 2, 3. Remember the one-element trick: (5,) with a comma is a tuple; (5) is just a number in parens. Empty tuple: ().",
      "m6-t2":
        "Tuples are ordered (index and position matter), immutable (cannot be changed after creation), and hashable (can be dictionary keys or set members). This immutability is a feature — it guarantees data integrity.",
      "m6-t3":
        "Access items just like lists: tuple[0] (first), tuple[-1] (last). Immutability means you cannot change: tuple[0] = 99 raises an error. You must create a new tuple.",
      "m6-t4":
        "Slice tuples like lists: tuple[1:4], tuple[::2], tuple[::-1]. Slicing returns a new tuple (not a copy of the original, but a new object).",
      "m6-t5":
        "Tuples have only two methods: count(value) (how many times does it appear?) and index(value) (what position is it at?). This simplicity reflects immutability — you can't add, remove, or sort. When you need that, convert to a list: list(tuple).",
    },
    pitfalls: [
      {
        pitfall: "Forgetting the comma in a single-element tuple. (5) is an int, not a tuple.",
        tip: "Always use (5,) with a comma.",
      },
      {
        pitfall: "Trying to modify a tuple.",
        tip: "Convert to a list first: my_list = list(my_tuple), modify, then convert back if needed.",
      },
    ],
    tips: [
      "Unpacking is powerful: name, age, email = user_tuple extracts all three values at once, cleaner than name = user_tuple[0] three times.",
    ],
  },

  sets: {
    overview:
      "Sets store unique values and support set math. Use them to remove duplicates and compare collections with union, intersection, and difference. Sets are powerful for data cleaning and membership testing at scale.",
    learningOutcomes: [
      "Create sets and understand uniqueness",
      "Use set operations (union, intersection, difference)",
      "Remove duplicates from data",
      "Compare collections efficiently",
      "Choose sets vs. lists for performance",
    ],
    keyFunctions: [
      {
        name: "add() / update() / remove() / discard()",
        explanation:
          "Modify sets. `add(x)` adds one, `update(list)` adds multiple, `remove(x)` deletes (error if missing), `discard(x)` deletes safely (no error).",
      },
      {
        name: "union() / intersection() / difference()",
        explanation:
          "Set math. `a.union(b)` (all items in either), `a.intersection(b)` (items in both), `a.difference(b)` (items in a but not b).",
      },
      {
        name: "issubset() / issuperset() / isdisjoint()",
        explanation:
          "Relationship checks. `a.issubset(b)` (all of a in b?), `a.issuperset(b)` (a contains all of b?), `a.isdisjoint(b)` (no overlap?).",
      },
    ],
    topics: {
      "m7-t1":
        "Create sets with curly braces: {1, 2, 3} or set([1, 1, 2]) (removes duplicates). Common mistake: empty {} makes a dict, not a set. Use set() for an empty set. Sets are unordered — no indexing or slicing.",
      "m7-t2":
        "Modify sets with add(x) (one item), update(list) (multiple items), remove(x) (delete, error if missing), discard(x) (delete, no error if missing), clear() (empty the set). Choose discard() when you're not sure an item exists.",
      "m7-t3":
        "Perform mathematical set operations: a.union(b) or a \\| b (all items), a.intersection(b) or a & b (shared items), a.difference(b) or a - b (in a but not b), a.symmetric_difference(b) or a ^ b (in either but not both). These are fast — use them for comparing collections.",
      "m7-t4":
        "Answer relationship questions: a.issubset(b) (is a a subset?), a.issuperset(b) (does a contain b?), a.isdisjoint(b) (do a and b have no overlap?). Example: {\"apple\", \"orange\"}.isdisjoint({\"banana\", \"grape\"}) is True.",
    },
    pitfalls: [
      {
        pitfall: "Confusing {} (empty dict) with an empty set.",
        tip: "Always use set() for an empty set.",
      },
      {
        pitfall: "Trying to index a set: my_set[0] fails.",
        tip: "Convert to a list if you need ordered access: list(my_set)[0].",
      },
    ],
    tips: [
      "Use sets to deduplicate: unique_ids = set(id_list) is much faster than looping and checking membership.",
    ],
  },

  dictionaries: {
    overview:
      "Dictionaries map keys to values — the model behind JSON and many labeled datasets. Learn syntax, keys/values/items, safe access, mutation methods, and nested structures. Dictionaries are the gateway to working with real-world data formats.",
    learningOutcomes: [
      "Create and access dictionaries",
      "Iterate through keys, values, and pairs",
      "Use .get() for safe access",
      "Update and modify dictionaries",
      "Build nested structures for complex data",
    ],
    keyFunctions: [
      {
        name: "keys() / values() / items()",
        explanation:
          "Access dictionary components. `keys()` returns all keys (like column names), `values()` returns all values (like column data), `items()` returns (key, value) pairs (useful in loops).",
      },
      {
        name: "get() / update() / pop()",
        explanation:
          "Safe access and modification. `dict.get(key, default)` returns the value or a default (no error if key missing), `update(dict)` merges another dictionary, `pop(key)` removes and returns the value.",
      },
    ],
    topics: {
      "m8-t1":
        "Create dicts with {key: value} pairs: {\"name\": \"Alice\", \"age\": 30}. Keys must be unique (later values overwrite earlier ones). Use meaningful keys so your data is self-documenting. Quote string keys: {\"name\": ...}, not {name: ...}.",
      "m8-t2":
        "Extract dictionary parts: dict.keys() (all keys), dict.values() (all values), dict.items() (pairs as tuples). These return views you can iterate: for key in dict.keys(): or for key, value in dict.items():.",
      "m8-t3":
        "Read values with dict[key] (raises error if key missing) or dict.get(key, default) (returns default if missing, safer). Use .get() when you're unsure a key exists. Example: dict.get(\"email\", \"no-email@example.com\") handles missing emails gracefully.",
      "m8-t4":
        "Modify dicts: update(other_dict) (merge), pop(key) (remove and return), pop(key, default) (remove with fallback), setdefault(key, default) (set if missing, return value), clear() (empty). These handle common patterns without manual checks.",
      "m8-t5":
        "Build hierarchical data: user = {\"id\": 1, \"profile\": {\"name\": \"Alice\", \"email\": \"alice@example.com\"}}. Access nested values: user[\"profile\"][\"name\"]. Use nested dicts to model real-world structures like database records, JSON APIs, and config files.",
    },
    pitfalls: [
      {
        pitfall: "Using bracket notation when a key might be missing: dict[key] crashes if key not present.",
        tip: "Use .get(): dict.get(key, default).",
      },
      {
        pitfall: "Forgetting that dict keys are ordered (in Python 3.7+) but still unordered conceptually.",
        tip: "Don't rely on order; use meaningful keys instead of numeric indices.",
      },
    ],
    tips: [
      "Use .items() in loops: for key, value in dict.items(): is cleaner than for key in dict.keys(): value = dict[key].",
    ],
  },

  conditionals: {
    overview:
      "Conditionals let programs choose paths. Master if, if-else, and if-elif-else so you can branch on comparisons and build decision logic used in cleaning rules and business filters.",
    learningOutcomes: [
      "Write and test conditional statements",
      "Nest conditions for complex logic",
      "Avoid common conditional pitfalls",
      "Apply conditionals to real data-cleaning scenarios",
    ],
    keyFunctions: [
      {
        name: "if / elif / else",
        explanation:
          "Run different blocks depending on which condition is true. `if condition: block` executes block only if condition is True. `elif` (else if) and `else` handle other cases.",
      },
    ],
    topics: {
      "m9-t1":
        "Run a code block only if a condition is true: if price > 100: print(\"Expensive\"). Use indentation (4 spaces, not tabs) to show what belongs inside the if-block. The condition must be a boolean or something that evaluates to True/False.",
      "m9-t2":
        "Choose between two paths: if condition: block1 else: block2. One block runs; the other doesn't. Example: if age >= 18: print(\"Adult\") else: print(\"Minor\"). Clean and symmetrical.",
      "m9-t3":
        "Handle many mutually exclusive cases: if cond1: ... elif cond2: ... elif cond3: ... else: .... Python evaluates from top to bottom and stops at the first true condition. Use elif to avoid testing overlapping conditions. Example: grade assignment with score ranges.",
    },
    pitfalls: [
      {
        pitfall: "Using = (assign) instead of == (compare) in conditions: if x = 5:",
        tip: "Always use == for comparisons.",
      },
      {
        pitfall: "Forgetting indentation. Python uses indentation to define blocks; misaligned code causes IndentationError.",
        tip: "Use 4 spaces consistently (VS Code auto-indents).",
      },
    ],
    tips: [
      "Use elif for readability: if x < 0: ... elif x == 0: ... else: ... is clearer than nested if-else chains.",
    ],
  },

  loops: {
    overview:
      "Loops repeat work. Practice while and for loops, control flow with break/continue/pass, and generate number sequences with range() — essential for processing rows and lists. Loops are the engine of automation.",
    learningOutcomes: [
      "Write while and for loops correctly",
      "Use range() to generate sequences",
      "Control loop flow with break and continue",
      "Avoid infinite loops",
      "Process collections iteratively",
    ],
    keyFunctions: [
      {
        name: "for / while",
        explanation:
          "`for` loops iterate over sequences (lists, strings, etc.); `while` loops repeat as long as a condition is true. Pick `for` when you know how many iterations; pick `while` when you loop until a condition changes.",
      },
      {
        name: "range()",
        explanation:
          "Generate integer sequences. `range(5)` gives 0, 1, 2, 3, 4. `range(2, 7)` gives 2, 3, 4, 5, 6. `range(0, 10, 2)` gives every other number: 0, 2, 4, 6, 8.",
      },
      {
        name: "break / continue / pass",
        explanation:
          "Control loop execution. `break` exits the loop immediately, `continue` skips to the next iteration, `pass` is a no-op placeholder.",
      },
    ],
    topics: {
      "m10-t1":
        "Repeat a block while a condition is true: while x < 10: x += 1. The condition is checked before each iteration. Modify the condition inside the loop, or you'll loop forever. Example: validating user input until they enter a number.",
      "m10-t2":
        "Iterate over a sequence: for item in list: runs the block once per item. The variable item changes each iteration. Works on strings, lists, tuples, sets, dicts (iterates keys), and ranges. Example: for i in range(5): print(i) prints 0–4.",
      "m10-t3":
        "Control loop flow: break exits immediately (used when you find what you're looking for), continue skips to the next iteration (used to skip unwanted items). Example: for item in list: if item < 0: continue; print(item) prints only non-negative items.",
      "m10-t4":
        "Use pass as a placeholder when syntax requires a block but you're not ready to implement it. Example: if x > 0: pass  # TODO: handle positive case. Prevents IndentationError when a block is empty.",
      "m10-t5":
        "Generate integer sequences: range(n) (0 to n-1), range(start, stop) (start to stop-1), range(start, stop, step) (every step-th number). Use range() to loop a specific number of times or iterate with indices. Example: for i in range(len(list)): accesses by position.",
    },
    pitfalls: [
      {
        pitfall: "Infinite loops from forgetting to update the condition. while x < 10: without x += 1 inside loops forever.",
        tip: "Always modify the loop variable or condition.",
      },
      {
        pitfall: "Off-by-one errors with range: range(5) gives 0–4, not 0–5.",
        tip: "Remember range is exclusive of the stop value.",
      },
    ],
    tips: [
      "Use for loops for sequences; they're simpler and safer than manually managing while loops.",
    ],
  },

  comprehensions: {
    overview:
      "Comprehensions build lists and dictionaries in one readable line. Learn the syntax, practical transform/filter patterns, and dictionary comprehensions for labeled results. Comprehensions are Pythonic — you'll see them everywhere in real code.",
    learningOutcomes: [
      "Write list comprehensions to replace loops",
      "Apply filtering and transformation in one line",
      "Build dictionary comprehensions",
      "Recognize when comprehensions improve readability",
    ],
    keyFunctions: [
      {
        name: "[expr for x in iterable if cond]",
        explanation:
          "List comprehension: map and optionally filter in one expression. `[x*2 for x in range(5)]` gives `[0, 2, 4, 6, 8]`. Add `if` to filter: `[x*2 for x in range(5) if x > 1]` gives `[4, 6, 8]`.",
      },
      {
        name: "{k: v for ...}",
        explanation:
          "Dictionary comprehension: build key-value maps compactly. `{x: x*2 for x in range(5)}` builds `{0: 0, 1: 2, 2: 4, 3: 6, 4: 8}`.",
      },
    ],
    topics: {
      "m11-t1":
        "Write [expr for item in iterable] to build a list in one line. [x2 for x in [1, 2, 3]] gives [1, 4, 9]. This replaces: result = []; for x in [1, 2, 3]: result.append(x2). Cleaner and faster.",
      "m11-t2":
        "Apply comprehensions to real patterns: transform ([x*2 for x in nums]), filter ([x for x in nums if x > 0]), combine ([(x, x**2) for x in range(5)] creates pairs). Example: [word.upper() for word in words if len(word) > 3] uppercases long words.",
      "m11-t3":
        "Build dicts in one line: {x: x*2 for x in range(5)}. Create mappings from lists: {word: len(word) for word in words} maps each word to its length. Powerful for creating lookup tables. Add conditions: {x: x*2 for x in range(10) if x % 2 == 0} creates a map of even numbers.",
    },
    pitfalls: [
      {
        pitfall: "Writing complex comprehensions that are hard to read.",
        tip: "Use a regular loop if the comprehension goes beyond one line or has nested loops.",
      },
      {
        pitfall: "Confusing list and dict comprehensions.",
        tip: "List: [expr ...], Dict: {key: value ...}.",
      },
    ],
    tips: [
      "Comprehensions are significantly faster than appending in loops. Use them when building large lists.",
    ],
  },

  functions: {
    overview:
      "Functions package reusable logic. Define and call functions, pass arguments flexibly, understand scope, explore recursion, and write short lambdas for simple callbacks. Functions are the bridge between scripts and structured programs.",
    learningOutcomes: [
      "Define functions with clear inputs and outputs",
      "Use flexible argument patterns (*args, **kwargs)",
      "Understand variable scope",
      "Apply recursion to problems that benefit from it",
      "Write lambda functions for quick callbacks",
    ],
    keyFunctions: [
      {
        name: "def / return",
        explanation:
          "Define a named function with `def` and send a result back with `return`. Functions organize code, reduce duplication, and make logic testable and reusable.",
      },
      {
        name: "*args / **kwargs",
        explanation:
          "Accept flexible numbers of arguments. `*args` captures extra positional arguments as a tuple, `**kwargs` captures extra keyword arguments as a dict. Example: `def merge(*dicts): return {k: v for d in dicts for k, v in d.items()}`.",
      },
      {
        name: "lambda",
        explanation:
          "Write a small anonymous function in one line. `square = lambda x: x**2` is short for `def square(x): return x**2`. Use for simple callbacks.",
      },
    ],
    topics: {
      "m12-t1":
        "Define functions with def name(parameters): body; return result. Parameters are placeholders for data passed in; return sends results back to the caller. Example: def greet(name): return f\"Hello, {name}!\". Functions make code reusable and testable.",
      "m12-t2":
        "Call a function by name with arguments: greet(\"Alice\"). The returned value can be stored or used immediately: message = greet(\"Alice\") or print(greet(\"Alice\")). If a function doesn't explicitly return, it returns None.",
      "m12-t3":
        "Master argument patterns: positional (def add(a, b): return a+b), keyword (add(a=5, b=3)), default (def power(x, exp=2): return xexp), \\*args** (def total(*nums): return sum(nums)), **\\*\\*kwargs (def config(options): ...). Mix them: def func(a, b=2, *args, **kwargs):.",
      "m12-t4":
        "Understand scope: variables defined in a function are local (exist only inside). Variables outside are global (exist everywhere but locals shadow them). Avoid global state; pass data as arguments instead. Use global or nonlocal sparingly — they make code harder to follow.",
      "m12-t5":
        "Functions can call themselves. Recursion works when you have a base case (stop condition) and a recursive case (call with simpler input). Example: def factorial(n): return 1 if n <= 1 else n * factorial(n-1). Recursion shines for trees, backtracking, and mathematical sequences. Watch for stack overflow with large inputs.",
      "m12-t6":
        "Write anonymous functions for short, one-expression operations: square = lambda x: x**2. Useful with map(), filter(), sorted(): sorted(words, key=lambda w: len(w)) sorts by word length. Don't overuse lambdas; use def for readability.",
    },
    pitfalls: [
      {
        pitfall: "Modifying global state inside functions.",
        tip: "Pass data as arguments, return results. Avoid global except for constants.",
      },
      {
        pitfall: "Mutable default arguments: def add_to_list(item, lst=[]): — the default list is created once and reused!",
        tip: "Use lst=None and check inside the function.",
      },
    ],
    tips: [
      "Write functions that do one thing well. If your function has more than ~20 lines or does multiple things, split it up.",
    ],
  },

  "file-and-exception-handling": {
    overview:
      "Real programs read files, handle failures, and sometimes call APIs. Learn file I/O, path handling, try/except/finally, custom exceptions, and basic HTTP JSON requests. This module bridges Python fundamentals to real-world workflows.",
    learningOutcomes: [
      "Read and write text, CSV, and JSON files safely",
      "Handle errors gracefully with try/except",
      "Work with file paths portably",
      "Raise and catch custom exceptions",
      "Fetch data from APIs and parse responses",
    ],
    keyFunctions: [
      {
        name: "open() / with",
        explanation:
          "Read and write files safely. `with open(filename) as f:` automatically closes the file (even if an error occurs). This is best practice.",
      },
      {
        name: "try / except / finally / raise",
        explanation:
          "Handle errors. `try:` contains code that might fail, `except:` catches specific errors and handles them, `finally:` always runs (cleanup). `raise` signals custom errors.",
      },
      {
        name: "pathlib / os.path",
        explanation:
          "Work with file paths portably. `Path(\"data/file.csv\")` works on Windows and Unix without manual path separator handling.",
      },
      {
        name: "requests / json",
        explanation:
          "Fetch and parse API responses. `requests.get(url)` fetches data, `.json()` parses JSON. Essential for data pipeline work.",
      },
    ],
    topics: {
      "m13-t1":
        "Use with open(filename) as f: for safe file access. Read modes: \"r\" (text read), \"rb\" (binary), \"w\" (write, overwrite), \"a\" (append). Read methods: f.read() (entire file as string), f.readlines() (list of lines), for line in f: (iterate). Example: with open(\"data.csv\") as f: lines = f.readlines().",
      "m13-t2":
        "Use pathlib.Path for portable paths: from pathlib import Path; path = Path(\"data\") / \"file.csv\". Avoids \\\\ vs / mess. Methods: path.exists(), path.is_file(), path.mkdir(), path.read_text(), path.write_text(). Much better than manual string concatenation.",
      "m13-t3":
        "Handle errors: try: risky_code() except ValueError: handle_value_error() except Exception: handle_any_error() finally: cleanup(). Be specific: except ValueError: catches only ValueError, not all errors. finally: runs regardless of success or failure. Example: try: x = int(input(\"Enter number:\"))) except ValueError: print(\"Not a valid number\").",
      "m13-t4":
        "Signal problems with raise: if age < 0: raise ValueError(\"Age cannot be negative\"). Define custom exceptions: class NegativeAgeError(Exception): pass. Then raise NegativeAgeError(\"Age cannot be negative\"). Custom exceptions communicate domain-specific problems clearly.",
      "m13-t5":
        "Call APIs and parse responses: import requests; response = requests.get(\"https://api.example.com/data\"); data = response.json(). Check status: if response.status_code == 200: .... Parse JSON: data = response.json() returns a dict/list. Handle network errors: wrap in try/except. Example: fetch weather data, cryptocurrency prices, etc.",
    },
    pitfalls: [
      {
        pitfall: "Forgetting to close files, causing resource leaks.",
        tip: "Always use with open(...) — it closes automatically.",
      },
      {
        pitfall: "Catching too broad: except Exception: hides bugs.",
        tip: "Catch specific errors: except FileNotFoundError:.",
      },
    ],
    tips: [
      "Check API documentation for response format and error codes before writing the code.",
    ],
  },

  numpy: {
    overview:
      "NumPy gives fast multidimensional arrays and vectorized math. Create arrays, inspect properties, index/slice, broadcast operations, and compute core statistics without slow Python loops. NumPy is the foundation for all numerical Python libraries.",
    learningOutcomes: [
      "Create and manipulate NumPy arrays",
      "Perform vectorized operations (much faster than loops)",
      "Understand broadcasting and shape",
      "Compute statistics efficiently",
      "Use NumPy as a foundation for Pandas and scikit-learn",
    ],
    keyFunctions: [
      {
        name: "np.array / zeros / ones / arange",
        explanation:
          "Create arrays from data or generate filled/ranged arrays. `np.array([1, 2, 3])` (from list), `np.zeros(5)` (array of 5 zeros), `np.ones((3, 4))` (3×4 ones), `np.arange(0, 10, 2)` (0, 2, 4, ..., 8).",
      },
      {
        name: "shape / dtype / broadcasting",
        explanation:
          "Understand array structure. `shape` is dimensions, `dtype` is data type (int32, float64, etc.). Broadcasting applies operations element-wise across matching shapes — no manual loops.",
      },
      {
        name: "mean / median / std / sum",
        explanation:
          "Compute common statistics efficiently on arrays. `np.mean(array)`, `np.std(array)`, etc. Much faster than Python loops for large data.",
      },
    ],
    topics: {
      "m14-t1":
        "Meet np.ndarray (N-dimensional array) — the workhorse of numerical Python. Lists are slow for math; NumPy arrays are fast and compact. import numpy as np (standard alias). Create: np.array([1, 2, 3]) or np.array([[1, 2], [3, 4]]) (2D).",
      "m14-t2":
        "Create arrays efficiently: np.zeros(shape), np.ones(shape), np.arange(start, stop, step), np.linspace(start, stop, num) (evenly spaced). Inspect: array.shape (dimensions), array.dtype (data type), array.ndim (number of dimensions), array.size (total elements).",
      "m14-t3":
        "Access elements: 1D: array[0] (first), array[-1] (last); 2D: array[0, 1] (row 0, col 1). Slice: array[1:4], array[:, 2] (all rows, col 2), array[1:3, 0:2] (submatrix). Fancy indexing: array[[0, 2, 4]] (specific indices). Boolean indexing: array[array > 5] (elements greater than 5).",
      "m14-t4":
        "Element-wise operations: a + b, a * b, a / b (not matrix multiplication, just element-by-element). Broadcasting: a + 5 adds 5 to each element. Shape-aware: (3, 1) + (1, 4) → (3, 4) (automatic expansion). Avoid loops: NumPy operations are vectorized and fast.",
      "m14-t5":
        "Compute statistics: np.mean() (average), np.median() (middle value), np.std() (standard deviation), np.var() (variance), np.min(), np.max(), np.sum(), np.percentile(array, 75) (75th percentile). Use axis=0 or axis=1 to reduce along a specific dimension. Example: np.mean(array, axis=0) averages down columns.",
    },
    pitfalls: [
      {
        pitfall: "Using lists instead of arrays for numerical work — very slow.",
        tip: "Convert to NumPy arrays immediately: arr = np.array(my_list).",
      },
      {
        pitfall: "Confusing * (element-wise multiplication) with @ (matrix multiplication).",
        tip: "Use @ or np.dot() for matrix math.",
      },
    ],
    tips: [
      "NumPy operations create copies by default. Use views when you need to save memory: view = array[::2] (every other element, doesn't copy).",
    ],
  },

  pandas: {
    overview:
      "Pandas is the workhorse for tabular data. Learn Series/DataFrames, I/O, selecting and filtering, cleaning, groupby/joins, and pivot tables — the everyday toolkit for analysis. Most data science work in Python uses Pandas.",
    learningOutcomes: [
      "Load and save data with Pandas",
      "Filter and select data efficiently",
      "Clean messy data (missing values, duplicates, outliers)",
      "Group and aggregate data",
      "Join and pivot tables for complex analyses",
    ],
    keyFunctions: [
      {
        name: "read_csv() / to_csv()",
        explanation:
          "Load and save tabular data. `pd.read_csv(\"file.csv\")` loads a CSV; `df.to_csv(\"file.csv\")` saves. Also supports Excel, JSON, SQL: `read_excel()`, `read_json()`, etc.",
      },
      {
        name: "loc / iloc",
        explanation:
          "Select rows and columns by label or integer position. `df.loc[0, 'name']` (row 0, column 'name' by label), `df.iloc[0, 1]` (row 0, col 1 by position). Use `loc` for label-based selection (preferred); use `iloc` for position-based.",
      },
      {
        name: "groupby() / merge() / pivot_table()",
        explanation:
          "Aggregate, combine tables, and reshape summaries. `df.groupby('category').mean()` calculates mean per category. `pd.merge(df1, df2, on='id')` joins tables. `pivot_table()` reshapes long data to wide.",
      },
    ],
    topics: {
      "m15-t1":
        "Understand data structures: Series (1D, labeled array like a column), DataFrame (2D table, like a spreadsheet). Create: pd.Series([1, 2, 3]) (Series), pd.DataFrame({\"A\": [1, 2], \"B\": [3, 4]}) (DataFrame). Access columns: df['A'] returns a Series; df[['A', 'B']] returns a DataFrame.",
      "m15-t2":
        "Load data: pd.read_csv(\"file.csv\"), pd.read_excel(\"file.xlsx\"), pd.read_json(\"file.json\"). Save: df.to_csv(\"out.csv\"), df.to_excel(\"out.xlsx\"). Useful options: sep=',' (delimiter), header=0 (row with column names), usecols=['A', 'B'] (load specific columns), nrows=100 (load first 100 rows).",
      "m15-t3":
        "Select rows/columns: df['A'] (column A), df[['A', 'B']] (columns A and B), df.loc[0] (row 0 by label), df.iloc[0] (row 0 by position). Filter: df[df['A'] > 5] (rows where A > 5), df[(df['A'] > 5) & (df['B'] < 10)] (multiple conditions). Use boolean masks for complex filtering.",
      "m15-t4":
        "Handle missing data: df.isnull() (find NaN), df.dropna() (remove rows with NaN), df.fillna(value) (replace NaN). Remove duplicates: df.drop_duplicates(). Fix data types: df['date'] = pd.to_datetime(df['date']). Rename columns: df.rename(columns={'old': 'new'}). Example: df.dropna(subset=['id']).drop_duplicates(subset=['id']) cleans messy data.",
      "m15-t5":
        "Aggregate: df.groupby('category')['sales'].sum() sums sales per category. Chain methods: df.groupby('category').agg({'sales': 'sum', 'quantity': 'mean'}) does multiple aggregations. Combine tables: pd.merge(orders, customers, on='customer_id') inner join (only matching IDs), how='left' for left outer join.",
      "m15-t6":
        "Reshape data: pd.pivot_table(df, values='sales', index='region', columns='product', aggfunc='sum') reshapes from long to wide, summarizing at intersections. Powerful for reports showing multiple dimensions. Also use groupby() — pivot_table is syntactic sugar for complex groupby.",
    },
    pitfalls: [
      {
        pitfall: "Chaining methods without checking intermediate results.",
        tip: "Break chains to debug: step1 = df.groupby(...); print(step1); step2 = step1.sum().",
      },
      {
        pitfall: "Modifying views instead of copies, causing SettingWithCopyWarning.",
        tip: "Use .copy() when filtering: df_filtered = df[df['A'] > 5].copy().",
      },
    ],
    tips: [
      "Use df.head() and df.info() early to understand data structure and types.",
    ],
  },

  "data-visualization": {
    overview:
      "Charts reveal patterns that tables hide. Learn Matplotlib plotting basics, core chart types, customization, then Seaborn for statistical and categorical visuals. Visualization is often the most impactful part of analysis.",
    learningOutcomes: [
      "Create publication-quality plots with Matplotlib and Seaborn",
      "Choose the right chart for the question",
      "Customize plots for clarity and impact",
      "Combine multiple plots for comprehensive views",
      "Understand when and how to use each chart type",
    ],
    keyFunctions: [
      {
        name: "plt.plot / bar / scatter / hist",
        explanation:
          "Core Matplotlib chart types: line (trends over time), bar (comparisons), scatter (relationships), histogram (distributions). Each reveals a different pattern.",
      },
      {
        name: "sns.boxplot / countplot / heatmap",
        explanation:
          "Seaborn charts for boxplots (distributions by category), countplots (category frequencies), heatmaps (correlation matrices or 2D aggregations).",
      },
    ],
    topics: {
      "m16-t1":
        "Set up Matplotlib's workflow: import matplotlib.pyplot as plt. Create figure/axes: fig, ax = plt.subplots(). Plot: ax.plot(x, y). Show: plt.show(). Understand: Figure (container), Axes (plot area). This model is more powerful than the simple plt.plot() style (which creates a figure automatically).",
      "m16-t2":
        "Line plot (ax.plot(x, y)): trends over time. Bar plot (ax.bar(categories, values)): compare groups. Scatter plot (ax.scatter(x, y)): show relationships, spot clusters. Histogram (ax.hist(data)): distribution shape. Choose based on your question: trend? comparison? relationship? distribution?",
      "m16-t3":
        "Add labels and titles: ax.set_xlabel(), ax.set_ylabel(), ax.set_title(). Customize: ax.set_xlim(), ax.set_ylim() (axis ranges), ax.grid() (gridlines), ax.legend() (label series). Colors: ax.plot(..., color='red') or ax.bar(..., color=['red', 'blue']). Rotate labels: ax.tick_params(axis='x', rotation=45) for readability.",
      "m16-t4":
        "Build on Matplotlib with cleaner syntax and better aesthetics: import seaborn as sns. Set style: sns.set_style(\"whitegrid\"). Plots: sns.lineplot(), sns.scatterplot(), sns.barplot() (similar to Matplotlib but prettier). Seaborn integrates with Pandas DataFrames: sns.scatterplot(data=df, x='col1', y='col2', hue='category').",
      "m16-t5":
        "Boxplot (sns.boxplot()): shows quartiles and outliers per category. Violinplot (sns.violinplot()): fancy boxplot showing full distribution shape. Countplot (sns.countplot()): bar chart of category frequencies. Heatmap (sns.heatmap()): 2D color matrix, great for correlations. Example: sns.heatmap(df.corr(), annot=True) shows correlation matrix with numbers.",
    },
    pitfalls: [
      {
        pitfall: "Overwhelming plots with too much information.",
        tip: "One plot = one insight. If you need many insights, create multiple plots.",
      },
      {
        pitfall: "Forgetting axis labels, titles, or legends.",
        tip: "Always add these — they're essential for interpretation.",
      },
    ],
    tips: [
      "Save plots: plt.savefig(\"plot.png\", dpi=300, bbox_inches='tight') for reports and presentations.",
    ],
  },

  "statistics-and-eda": {
    overview:
      "Statistics and EDA turn raw tables into insight. Cover descriptive measures, distributions, correlation, outlier detection, and an end-to-end exploratory workflow on a real dataset. EDA is where you start every analysis.",
    learningOutcomes: [
      "Compute and interpret descriptive statistics",
      "Recognize distribution shapes and patterns",
      "Identify and handle outliers",
      "Measure relationships between variables",
      "Execute a complete EDA workflow",
    ],
    keyFunctions: [
      {
        name: "mean / median / mode / std",
        explanation:
          "Summarize center and spread. Mean (average), median (middle value), mode (most common), std (standard deviation, measures spread). Use median for skewed data; mean for normal distributions.",
      },
      {
        name: "corr() / covariance",
        explanation:
          "Measure how variables move together. Correlation (-1 to 1): -1 (inverse), 0 (no relationship), 1 (direct). `df.corr()` computes Pearson correlation. Negative correlation: as one increases, the other decreases.",
      },
      {
        name: "IQR / Z-score",
        explanation:
          "Detect unusual values. IQR (Interquartile Range) method: flag values below Q1 - 1.5×IQR or above Q3 + 1.5×IQR. Z-score: flag |z| > 3 (very unusual). Use these to find data quality issues.",
      },
    ],
    topics: {
      "m17-t1":
        "Compute and interpret: df.describe() (automatic summary: count, mean, std, min, quartiles, max). For each column: df['col'].mean(), df['col'].median(), df['col'].std(). Skewness (df.skew()) and kurtosis (df.kurtosis()) describe shape. High std = wide spread; low std = tight cluster.",
      "m17-t2":
        "Visualize with histograms: plt.hist(data, bins=30). Recognize shapes: normal (bell curve), skewed left (tail on left), skewed right (tail on right), bimodal (two peaks). Long tails suggest outliers. QQ-plots test normality. Seaborn: sns.histplot(data=df, x='col', kde=True) adds a smoothed density curve.",
      "m17-t3":
        "Measure relationships: df.corr() computes Pearson correlation between all numeric columns. Interpret: 0.8+ (strong positive), 0.5–0.8 (moderate), 0–0.5 (weak), negative values (inverse). Visualize: sns.heatmap(df.corr()). Remember: correlation ≠ causation. High correlation might be coincidence or both caused by a third variable.",
      "m17-t4":
        "Find unusual values: IQR method: Q1 = df[col].quantile(0.25); Q3 = df[col].quantile(0.75); IQR = Q3 - Q1; outliers = df[(df[col] < Q1 - 1.5*IQR) \\| (df[col] > Q3 + 1.5*IQR)]. Z-score: z = (x - mean) / std; flag |z| > 3. Decide: remove, cap, or investigate outliers.",
      "m17-t5":
        "Execute end-to-end: 1) Load (pd.read_csv()), 2) Inspect (df.shape, df.info(), df.head()), 3) Describe (df.describe()), 4) Visualize (histograms, boxplots, scatter plots), 5) Correlate (df.corr(), heatmap), 6) Document findings and questions. Example: analyze sales data — identify top products, seasonal trends, customer segments.",
    },
    pitfalls: [
      {
        pitfall: "Stopping at descriptive stats without visualizing.",
        tip: "Always plot — Anscombe's Quartet is a famous example where different datasets have identical descriptive stats but look completely different when plotted.",
      },
      {
        pitfall: "Removing outliers without investigation.",
        tip: "Understand *why* they're outliers (data entry errors, legitimate extremes?) before deciding to remove.",
      },
    ],
    tips: [
      "EDA is iterative. Start broad (distributions, correlations), then zoom in on interesting patterns.",
    ],
  },

  "capstone-project": {
    overview:
      "Apply everything in an end-to-end retail-style analysis: define the problem, model the data, process with logic and loops, wrap work in functions, then clean, explore, visualize, and report. This is where theory becomes practice.",
    learningOutcomes: [
      "Define clear problems and success metrics",
      "Design data models for real-world scenarios",
      "Process data with structured logic and functions",
      "Perform complete EDA with documentation",
      "Present findings clearly to stakeholders",
    ],
    keyFunctions: [
      {
        name: "End-to-end pipeline",
        explanation:
          "Problem → data model → processing → functions → EDA/visuals → report. Follow this flow: it scales from homework to production.",
      },
      {
        name: "Reusable summary functions",
        explanation:
          "Package repeated analysis steps (filtering, grouping, calculating) so the final report stays clean and maintainable. Functions make your code professional.",
      },
      {
        name: "Data storytelling",
        explanation:
          "Present insights in a narrative that answers the original question. Combine plots, tables, and prose to build a compelling story.",
      },
    ],
    topics: {
      "m18-t1":
        "Scenario: A retail company wants to understand sales performance and customer behavior. Your task: Load, explore, and analyze their data. Questions to answer: Which products sell best? Which regions are strongest? Are there seasonal patterns? Who are our best customers? Start by reading the dataset and framing questions as measurable objectives.",
      "m18-t2":
        "Design how you'll represent the data. Example: customers (customer_id, name, region), orders (order_id, customer_id, date, total), products (product_id, name, category). Sketch this on paper or in comments. Understanding structure prevents mistakes when processing.",
      "m18-t3":
        "Process records with conditionals and loops. Example: loop over orders, categorize as \"high-value\" (total > median) or \"low-value\", flag seasonal trends (Dec higher?), compute per-region totals. Organize logic clearly; comments explain *why*, not what. This builds the foundation for analysis.",
      "m18-t4":
        "Refactor repeated logic into functions: def total_by_region(orders):, def top_products(orders, n=10):, def seasonal_analysis(orders):. Functions make the final report concise and readable. Each function does one thing; chain them to answer questions. Avoid copy-paste code.",
      "m18-t5":
        "Execute the full pipeline: Load data → Clean (missing values, typos) → Explore (statistics, distributions) → Visualize (bar charts, trends, correlations) → Summarize findings → Present (explain what you found and what it means). Produce a report (Jupyter notebook or Python script with comments) that a stakeholder could read and understand without running code. Include plots, tables, and written interpretation.",
    },
    pitfalls: [
      {
        pitfall: "Jumping into code without a measurable question.",
        tip: "Frame objectives first: which products sell best, which regions are strongest, seasonal patterns, best customers.",
      },
      {
        pitfall: "Copy-pasting analysis steps instead of packaging them.",
        tip: "Refactor into reusable functions like total_by_region() and top_products() so the report stays clean.",
      },
    ],
    tips: [
      "Score your work on correctness, completeness, clarity, and insight — not just charts that run.",
      "Test on a small sample first, version intermediate reports, and visualize everything tables hide.",
    ],
  },
};
