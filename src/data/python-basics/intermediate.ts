import { buildBasicsProblem } from "./helpers";

export const intermediateProblems = [
  buildBasicsProblem({
    order: 17,
    slug: "average-args",
    title: "Average of Any Count",
    difficulty: "medium",
    category: "functions",
    description: `Write calculate_average(*numbers) that returns the arithmetic mean of any number of values.

If no numbers are passed, return 0.`,
    examples: [
      { input: "calculate_average(10, 20, 30)", output: "20.0" },
      { input: "calculate_average()", output: "0" },
    ],
    constraints: ["Use *args (variable positional arguments)"],
    hints: ["Inside the function, numbers is a tuple.", "Guard len(numbers) == 0."],
    approach: `*args collects extra positional arguments into a tuple. Sum and divide by length.`,
    starterCode: `def calculate_average(*numbers):
    # Write your code here
    pass
`,
    solutionCode: `def calculate_average(*numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)
`,
    tests: [
      { label: "Three values", call: "calculate_average(10, 20, 30)", expected: "20.0" },
      { label: "Four values", call: "calculate_average(5, 15, 25, 35)", expected: "20.0" },
      { label: "Single", call: "calculate_average(100)", expected: "100.0" },
      { label: "Empty", call: "calculate_average()", expected: "0" },
    ],
  }),

  buildBasicsProblem({
    order: 18,
    slug: "lambda-map-filter",
    title: "Lambda with Map and Filter",
    difficulty: "medium",
    category: "functions",
    description: `Use lambda with map and filter:

- double_all(numbers) — each value times 2, as a list
- greater_than(numbers, threshold) — values strictly greater than threshold
- double_if_greater(numbers, threshold) — first filter, then double`,
    examples: [
      { input: "double_all([1, 2, 3])", output: "[2, 4, 6]" },
      { input: "greater_than([1, 6, 4, 8], 5)", output: "[6, 8]" },
    ],
    constraints: ["Use map/filter and lambda (convert to list)"],
    hints: [
      "list(map(lambda x: x * 2, numbers))",
      "list(filter(lambda x: x > threshold, numbers))",
    ],
    approach: `Lambdas are one-line anonymous functions. map transforms every item; filter keeps items that pass a test.`,
    starterCode: `def double_all(numbers):
    # Write your code here
    pass

def greater_than(numbers, threshold):
    # Write your code here
    pass

def double_if_greater(numbers, threshold):
    # Write your code here
    pass
`,
    solutionCode: `def double_all(numbers):
    return list(map(lambda x: x * 2, numbers))

def greater_than(numbers, threshold):
    return list(filter(lambda x: x > threshold, numbers))

def double_if_greater(numbers, threshold):
    return list(map(lambda x: x * 2, filter(lambda x: x > threshold, numbers)))
`,
    tests: [
      {
        label: "Double",
        call: "double_all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
        expected: "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]",
      },
      {
        label: "Filter > 5",
        call: "greater_than([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)",
        expected: "[6, 7, 8, 9, 10]",
      },
      {
        label: "Combined",
        call: "double_if_greater([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)",
        expected: "[12, 14, 16, 18, 20]",
      },
    ],
  }),

  buildBasicsProblem({
    order: 19,
    slug: "comprehensions-practice",
    title: "List and Dict Comprehensions",
    difficulty: "medium",
    category: "comprehensions",
    description: `Implement:

- squares_to(n) — [1^2, 2^2, ..., n^2]
- long_words(words, min_len) — words whose length is strictly greater than min_len
- word_lengths(words) — dict mapping each word to its length`,
    examples: [
      { input: "squares_to(4)", output: "[1, 4, 9, 16]" },
      {
        input: 'long_words(["apple", "dog", "banana"], 5)',
        output: '["banana"]',
      },
    ],
    constraints: ["Use comprehensions, not manual append loops"],
    hints: [
      "[x**2 for x in range(1, n + 1)]",
      "{word: len(word) for word in words}",
    ],
    approach: `A comprehension is [expr for item in iterable if condition]. Dict comprehensions use {key: value for ...}.`,
    starterCode: `def squares_to(n):
    # Write your code here
    pass

def long_words(words, min_len):
    # Write your code here
    pass

def word_lengths(words):
    # Write your code here
    pass
`,
    solutionCode: `def squares_to(n):
    return [x ** 2 for x in range(1, n + 1)]

def long_words(words, min_len):
    return [word for word in words if len(word) > min_len]

def word_lengths(words):
    return {word: len(word) for word in words}
`,
    tests: [
      { label: "Squares 1-10", call: "squares_to(10)", expected: "[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]" },
      {
        label: "Long words",
        call: 'long_words(["apple", "banana", "cherry", "dog", "elephant", "fig"], 5)',
        expected: '["banana", "cherry", "elephant"]',
      },
      {
        label: "Lengths",
        call: 'word_lengths(["apple", "dog"])',
        expected: '{"apple": 5, "dog": 3}',
      },
    ],
  }),

  buildBasicsProblem({
    order: 20,
    slug: "safe-integer-parse",
    title: "Safe Integer Parse",
    difficulty: "medium",
    category: "exceptions",
    description: `Write parse_integer(text) that converts text to int.

If conversion fails (ValueError), return None instead of crashing.`,
    examples: [
      { input: 'parse_integer("42")', output: "42" },
      { input: 'parse_integer("abc")', output: "None" },
    ],
    constraints: ["Use try / except ValueError"],
    hints: ["int(text) raises ValueError for non-numeric strings."],
    approach: `Catch ValueError around int() so invalid input returns None.`,
    starterCode: `def parse_integer(text):
    # Write your code here
    pass
`,
    solutionCode: `def parse_integer(text):
    try:
        return int(text)
    except ValueError:
        return None
`,
    tests: [
      { label: "Valid", call: 'parse_integer("10")', expected: "10" },
      { label: "Invalid", call: 'parse_integer("abc")', expected: "None" },
      { label: "Negative", call: 'parse_integer("-7")', expected: "-7" },
    ],
  }),

  buildBasicsProblem({
    order: 21,
    slug: "file-number-range",
    title: "Write and Read a Number File",
    difficulty: "medium",
    category: "files",
    description: `Implement file helpers:

- write_range(path, start, end) — write each integer from start to end inclusive, one per line
- read_ints(path) — read those integers back as a list
- append_range(path, start, end) — append another inclusive range to the same file

Use a with open(...) as file: block.`,
    examples: [
      {
        input: 'write_range("n.txt", 1, 3) then read_ints("n.txt")',
        output: "[1, 2, 3]",
      },
    ],
    constraints: ['Write mode "w", append mode "a", read mode "r"'],
    hints: [
      'file.write(f"{i}\\n")',
      "int(line.strip()) for each non-empty line.",
    ],
    approach: `with open automatically closes the file. Write overwrites; append adds to the end.`,
    starterCode: `def write_range(path, start, end):
    # Write your code here
    pass

def read_ints(path):
    # Write your code here
    pass

def append_range(path, start, end):
    # Write your code here
    pass
`,
    solutionCode: `def write_range(path, start, end):
    with open(path, "w") as file:
        for i in range(start, end + 1):
            file.write(f"{i}\\n")

def read_ints(path):
    with open(path, "r") as file:
        return [int(line.strip()) for line in file if line.strip()]

def append_range(path, start, end):
    with open(path, "a") as file:
        for i in range(start, end + 1):
            file.write(f"{i}\\n")
`,
    tests: [
      {
        kind: "custom",
        label: "Write 1-10",
        code: `path = "_pb_nums.txt"
write_range(path, 1, 10)
assert read_ints(path) == list(range(1, 11))`,
      },
      {
        kind: "custom",
        label: "Append 11-20",
        code: `path = "_pb_nums2.txt"
write_range(path, 1, 10)
append_range(path, 11, 20)
assert read_ints(path) == list(range(1, 21))`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 22,
    slug: "days-until-new-year",
    title: "Days Until New Year",
    difficulty: "medium",
    category: "modules",
    description: `Using datetime:

- format_mdy(dt) — format a datetime or date as MM/DD/YYYY
- days_until_new_year(today) — days from date today until January 1 of the next year`,
    examples: [
      { input: "days_until_new_year(date(2026, 12, 31))", output: "1" },
      { input: "format_mdy(datetime(2026, 9, 6))", output: '"09/06/2026"' },
    ],
    constraints: ["Use datetime.date / datetime.datetime and strftime"],
    hints: [
      'strftime("%m/%d/%Y")',
      "Next New Year is date(today.year + 1, 1, 1).",
    ],
    approach: `The datetime module handles calendar math. Subtract two date objects to get a timedelta; use .days.`,
    starterCode: `from datetime import date, datetime

def format_mdy(dt):
    # Write your code here
    pass

def days_until_new_year(today):
    # Write your code here
    pass
`,
    solutionCode: `from datetime import date, datetime

def format_mdy(dt):
    return dt.strftime("%m/%d/%Y")

def days_until_new_year(today):
    new_year = date(today.year + 1, 1, 1)
    return (new_year - today).days
`,
    tests: [
      {
        kind: "custom",
        label: "Format",
        code: `from datetime import datetime
assert format_mdy(datetime(2026, 9, 6)) == "09/06/2026"`,
      },
      {
        kind: "custom",
        label: "New Year eve",
        code: `from datetime import date
assert days_until_new_year(date(2026, 12, 31)) == 1`,
      },
      {
        kind: "custom",
        label: "Jan 1",
        code: `from datetime import date
assert days_until_new_year(date(2026, 1, 1)) == 365`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 23,
    slug: "bank-account",
    title: "Bank Account Class",
    difficulty: "medium",
    category: "oop",
    description: `Create a BankAccount class with:

- __init__(self, holder, initial_balance=0)
- deposit(self, amount) — add amount if it is positive, otherwise ignore
- withdraw(self, amount) — subtract if amount is positive and <= balance, otherwise ignore
- Attributes: holder (str), balance (number)`,
    examples: [
      {
        input: 'BankAccount("John", 1000); deposit(500); withdraw(200)',
        output: "balance 1300",
      },
    ],
    constraints: ["Reject non-positive amounts. Do not allow overdrafts."],
    hints: [
      "self.holder and self.balance store instance data.",
      "Check amount > 0 before changing balance.",
    ],
    approach: `A class bundles data (holder, balance) with methods that update that data.`,
    starterCode: `class BankAccount:
    def __init__(self, holder, initial_balance=0):
        pass

    def deposit(self, amount):
        pass

    def withdraw(self, amount):
        pass
`,
    solutionCode: `class BankAccount:
    def __init__(self, holder, initial_balance=0):
        self.holder = holder
        self.balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount

    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
`,
    tests: [
      {
        kind: "custom",
        label: "Deposit and withdraw",
        code: `acct = BankAccount("John", 1000)
assert acct.holder == "John"
acct.deposit(500)
acct.withdraw(200)
assert acct.balance == 1300`,
      },
      {
        kind: "custom",
        label: "Rejects bad amounts",
        code: `acct = BankAccount("A", 100)
acct.deposit(-10)
acct.withdraw(500)
acct.withdraw(-1)
assert acct.balance == 100`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 24,
    slug: "product-receipt",
    title: "Product Receipt Total",
    difficulty: "medium",
    category: "strings",
    description: `Compute a discounted total:

subtotal = price * quantity
discount_amount = subtotal * discount
total = subtotal - discount_amount

Return the total rounded to 2 decimal places.

Also implement format_money(value) that returns a string with two decimal places (no currency symbol), e.g. 29.9 -> "29.90".`,
    examples: [
      { input: "product_total(29.99, 5, 0.10)", output: "134.96" },
      { input: "format_money(29.9)", output: '"29.90"' },
    ],
    constraints: ["discount is a fraction such as 0.10 for 10%"],
    hints: ['f"{value:.2f}" formats two decimal places.', "round(total, 2) for the numeric total."],
    approach: `Format strings with f-strings. Compute discount as a fraction of subtotal.`,
    starterCode: `def product_total(price, quantity, discount):
    # Write your code here
    pass

def format_money(value):
    # Write your code here
    pass
`,
    solutionCode: `def product_total(price, quantity, discount):
    total = price * quantity * (1 - discount)
    return round(total + 1e-9, 2)

def format_money(value):
    return f"{value:.2f}"
`,
    tests: [
      { label: "10% off", call: "product_total(29.99, 5, 0.10)", expected: "134.96" },
      { label: "No discount", call: "product_total(10, 3, 0)", expected: "30.0" },
      { label: "Format", call: "format_money(29.9)", expected: '"29.90"' },
    ],
  }),

  buildBasicsProblem({
    order: 25,
    slug: "extract-emails",
    title: "Extract Emails",
    difficulty: "medium",
    category: "regex",
    description: `Use the re module to return all email addresses in a text string.

Treat an email as: word characters (plus dots) @ word characters (plus dots) . 2+ letters.

Return them in the order they appear.`,
    examples: [
      {
        input: 'extract_emails("Email: john@example.com, jane@test.org")',
        output: '["john@example.com", "jane@test.org"]',
      },
    ],
    constraints: ["Use re.findall"],
    hints: [String.raw`A simple pattern is r"[\w.]+@[\w.]+\.\w+"`],
    approach: `Regular expressions describe patterns. findall returns every match as a list of strings.`,
    starterCode: `import re

def extract_emails(text):
    # Write your code here
    pass
`,
    solutionCode: `import re

def extract_emails(text):
    return re.findall(r"[\\w.]+@[\\w.]+\\.\\w+", text)
`,
    tests: [
      {
        label: "Two emails",
        call: 'extract_emails("Email: john@example.com, jane@test.org")',
        expected: '["john@example.com", "jane@test.org"]',
      },
      { label: "None", call: 'extract_emails("no mail here")', expected: "[]" },
    ],
  }),

  buildBasicsProblem({
    order: 26,
    slug: "student-results",
    title: "Student Results",
    difficulty: "medium",
    category: "json",
    description: `Each student is {"name": str, "marks": list of numbers}.

Implement:

- letter_from_average(average) — A (>=90), B (>=80), C (>=70), else F
- process_students(students) — list of {"name", "average" (rounded 2 decimals), "grade"}
- dumps_results(results) — JSON string of the results list (no extra whitespace beyond json.dumps default)
- loads_results(text) — parse that JSON back to Python`,
    examples: [
      {
        input: 'process_students([{"name": "Alice", "marks": [85, 90, 88]}])',
        output: '[{"name": "Alice", "average": 87.67, "grade": "B"}]',
      },
    ],
    constraints: ["Use the json module for dumps/loads"],
    hints: ["average = sum(marks) / len(marks)", "json.dumps / json.loads"],
    approach: `Combine functions, dicts, and JSON serialization: compute, then encode/decode.`,
    starterCode: `import json

def letter_from_average(average):
    # Write your code here
    pass

def process_students(students):
    # Write your code here
    pass

def dumps_results(results):
    # Write your code here
    pass

def loads_results(text):
    # Write your code here
    pass
`,
    solutionCode: `import json

def letter_from_average(average):
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    return "F"

def process_students(students):
    results = []
    for student in students:
        avg = sum(student["marks"]) / len(student["marks"])
        results.append({
            "name": student["name"],
            "average": round(avg, 2),
            "grade": letter_from_average(avg),
        })
    return results

def dumps_results(results):
    return json.dumps(results)

def loads_results(text):
    return json.loads(text)
`,
    tests: [
      {
        kind: "custom",
        label: "Alice Bob Charlie",
        code: `students = [
    {"name": "Alice", "marks": [85, 90, 88]},
    {"name": "Bob", "marks": [75, 80, 78]},
    {"name": "Charlie", "marks": [95, 92, 98]},
]
got = process_students(students)
assert got[0]["name"] == "Alice" and got[0]["grade"] == "B" and got[0]["average"] == 87.67
assert got[1]["grade"] == "C"
assert got[2]["grade"] == "A"
text = dumps_results(got)
assert loads_results(text) == got`,
      },
    ],
  }),

  buildBasicsProblem({
    order: 27,
    slug: "library-system",
    title: "Library System",
    difficulty: "medium",
    category: "oop",
    description: `Create two classes.

Book(title, author, isbn)
- __str__ should return "{title} by {author} ({isbn})"

Library()
- self.books starts as []
- add_book(book) appends
- remove_book(isbn) removes the first book with that isbn (do nothing if missing)
- search(title) returns books whose title contains title, case-insensitive
- all_books() returns the current list (same list object is fine)`,
    examples: [
      {
        input: 'search("Python") on a library with "Python Basics" and "Web Development"',
        output: "only the Python book",
      },
    ],
    constraints: ["Use a list to store Book instances"],
    hints: [
      "title.lower() in book.title.lower()",
      "Loop to find isbn, then list.remove(book).",
    ],
    approach: `OOP: Book is a data object; Library owns a collection and the operations on it.`,
    starterCode: `class Book:
    def __init__(self, title, author, isbn):
        pass

    def __str__(self):
        pass

class Library:
    def __init__(self):
        pass

    def add_book(self, book):
        pass

    def remove_book(self, isbn):
        pass

    def search(self, title):
        pass

    def all_books(self):
        pass
`,
    solutionCode: `class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn

    def __str__(self):
        return f"{self.title} by {self.author} ({self.isbn})"

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def remove_book(self, isbn):
        for book in self.books:
            if book.isbn == isbn:
                self.books.remove(book)
                return

    def search(self, title):
        needle = title.lower()
        return [b for b in self.books if needle in b.title.lower()]

    def all_books(self):
        return self.books
`,
    tests: [
      {
        kind: "custom",
        label: "Add search remove",
        code: `lib = Library()
b1 = Book("Python Basics", "John Smith", "ISBN001")
b2 = Book("Advanced Python", "Jane Doe", "ISBN002")
b3 = Book("Web Development", "Bob Johnson", "ISBN003")
lib.add_book(b1)
lib.add_book(b2)
lib.add_book(b3)
assert str(b1) == "Python Basics by John Smith (ISBN001)"
found = lib.search("Python")
assert {b.isbn for b in found} == {"ISBN001", "ISBN002"}
lib.remove_book("ISBN002")
assert [b.isbn for b in lib.all_books()] == ["ISBN001", "ISBN003"]
lib.remove_book("missing")
assert len(lib.all_books()) == 2`,
      },
    ],
  }),
];
