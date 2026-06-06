import { seg, task, commentsTasks, dataTypesTasks, typecastingTasks, arithmeticTasks, assignmentTasks, comparisonTasks, logicalTasks, identityTasks, membershipTasks, bitwiseTasks } from "./practice-topic-builders.mjs";

export { seg, task };

// Re-export builders used below
export {
  commentsTasks, dataTypesTasks, typecastingTasks, arithmeticTasks,
  assignmentTasks, comparisonTasks, logicalTasks, identityTasks,
  membershipTasks, bitwiseTasks,
};

function printChallenge(intro, expected, placeholder, hint, success, extra = {}) {
  return {
    outputOnly: true,
    editorPlaceholder: placeholder,
    emptyMessage: "Use print() to show the result.",
    successDetail: success,
    constraints: [`Output must be exactly: ${expected.split("\n")[0]}`],
    hints: [hint],
    introSegments: intro,
    liveCheckRules: [{ id: "out", kind: "print-value", index: 0, expected: expected.split("\n")[0], label: "output" }],
    ...extra,
  };
}

// ─── Module 4: Strings ──────────────────────────────────────────────────────

export function stringCreateTasks(_id, title) {
  return [
    task("dbl-quotes", `${title}: Double Quotes`, "easy", 'Print "Hello" using double quotes.', "Hello", printChallenge([seg("text", 'Print '), seg("code", "Hello"), seg("text", " with double quotes.")], "Hello", '# print("Hello")', 'print("Hello")', "Correct! Double quotes create strings.")),
    task("single-quotes", `${title}: Single Quotes`, "easy", "Print 'Python' using single quotes.", "Python", printChallenge([seg("text", "Print Python with single quotes.")], "Python", "# print('Python')", "print('Python')", "Correct! Single quotes work too.")),
    task("concat", `${title}: Concatenate`, "easy", 'Print "Py" + "thon".', "Python", printChallenge([seg("text", "Join "), seg("code", '"Py" + "thon"'), seg("text", " with +.")], "Python", '# "Py"+"thon"', 'print("Py" + "thon")', "Correct! + joins strings.")),
    task("repeat", `${title}: Repeat String`, "easy", 'Print "Ha" * 3.', "HaHaHa", printChallenge([seg("text", "Use "), seg("code", '"Ha" * 3'), seg("text", " to repeat a string.")], "HaHaHa", '# "Ha"*3', 'print("Ha" * 3)', "Correct! * repeats strings.")),
    task("newline", `${title}: Newline Character`, "medium", 'Print "Line1\\nLine2" (two lines).', "Line1\nLine2", { ...printChallenge([seg("text", "Use "), seg("code", "\\n"), seg("text", " for a line break inside a string.")], "Line1", '# use \\n', 'print("Line1\\nLine2")', "Correct! \\n creates a new line."), liveCheckRules: undefined }),
    task("len-empty", `${title}: Empty String Length`, "medium", 'Print len("") — length of empty string.', "0", printChallenge([seg("text", "Print "), seg("code", 'len("")'), seg("text", ".")], "0", '# len("")', 'print(len(""))', "Correct! Empty string has length 0.")),
    task("multi-concat", `${title}: Build a Word`, "hard", 'Print "Data" + " " + "Science".', "Data Science", printChallenge([seg("text", "Join three strings with + to make "), seg("code", "Data Science"), seg("text", ".")], "Data Science", "# join strings", 'print("Data" + " " + "Science")', "Correct! You built a phrase from parts.")),
  ];
}

export function stringFormatTasks(_id, title) {
  return [
    task("fstring-name", `${title}: f-string Name`, "easy", 'Set name="Ana", print f"Hello, {name}".', "Hello, Ana", { outputOnly: true, requiresVariables: ["name"], introSegments: [seg("text", 'Set '), seg("code", 'name = "Ana"'), seg("text", ', print '), seg("code", 'f"Hello, {name}"'), seg("text", ".")], editorPlaceholder: "# f-string greeting", hints: ['name = "Ana"\\nprint(f"Hello, {name}")'], constraints: ['Use f-string', "Output: Hello, Ana"], successDetail: "Correct! f-strings embed variables." }),
    task("fstring-math", `${title}: f-string Math`, "easy", "Print f\"2 + 3 = {2 + 3}\".", "2 + 3 = 5", printChallenge([seg("text", "Use an f-string with an expression inside "), seg("code", "{}"), seg("text", ".")], "2 + 3 = 5", '# f-string math', 'print(f"2 + 3 = {2 + 3}")', "Correct! f-strings can include expressions.")),
    task("format-method", `${title}: .format()`, "medium", 'Print "Score: {}".format(90).', "Score: 90", printChallenge([seg("text", "Use "), seg("code", ".format()"), seg("text", " to insert a value.")], "Score: 90", "# .format()", 'print("Score: {}".format(90))', "Correct! .format() fills in placeholders.")),
    task("fstring-two", `${title}: Two Variables`, "medium", 'Set x=3, y=4, print f"{x} + {y} = {x+y}".', "3 + 4 = 7", { outputOnly: true, requiresVariables: ["x", "y"], introSegments: [seg("text", "Use f-string with "), seg("code", "x"), seg("text", " and "), seg("code", "y"), seg("text", ".")], editorPlaceholder: "# two vars in f-string", hints: ["x = 3\\ny = 4\\nprint(f\"{x} + {y} = {x+y}\")"], constraints: ["Use f-string with x and y"], successDetail: "Correct!" }),
    task("format-index", `${title}: Indexed format`, "medium", 'Print "{1} {0}".format("World", "Hello").', "Hello World", printChallenge([seg("text", "Use indexed "), seg("code", ".format()"), seg("text", " placeholders.")], "Hello World", "# indexed format", 'print("{1} {0}".format("World", "Hello"))', "Correct! Index 0 and 1 control order.")),
    task("fstring-float", `${title}: Format a Float`, "hard", 'Print f"Pi is {3.14159:.2f}".', "Pi is 3.14", printChallenge([seg("text", "Use "), seg("code", ":.2f"), seg("text", " to show 2 decimal places.")], "Pi is 3.14", "# format float", 'print(f"Pi is {3.14159:.2f}")', "Correct! :.2f rounds to 2 decimals.")),
    task("percent-style", `${title}: Percent Format`, "hard", 'Print "Value: %d" % 42.', "Value: 42", printChallenge([seg("text", "Use old-style "), seg("code", "%"), seg("text", " formatting.")], "Value: 42", "# percent format", 'print("Value: %d" % 42)', "Correct! %d inserts an integer.")),
  ];
}

export function stringIndexTasks(_id, title) {
  const s = "Python";
  return [
    task("first-char", `${title}: First Character`, "easy", `Set s="${s}", print s[0].`, "P", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Print the first character with "), seg("code", "s[0]"), seg("text", ".")], editorPlaceholder: "# s[0]", hints: [`s = "${s}"\\nprint(s[0])`], constraints: ["Use index 0", "Output: P"], successDetail: "Correct! Index 0 is the first character." }),
    task("last-char", `${title}: Last Character`, "easy", `Set s="${s}", print s[5].`, "n", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Print the last character with "), seg("code", "s[5]"), seg("text", ".")], editorPlaceholder: "# s[5]", hints: [`s = "${s}"\\nprint(s[5])`], constraints: ["Use index 5", "Output: n"], successDetail: "Correct!" }),
    task("negative-index", `${title}: Negative Index`, "easy", `Set s="${s}", print s[-1] (last char).`, "n", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Use "), seg("code", "s[-1]"), seg("text", " to get the last character.")], editorPlaceholder: "# s[-1]", hints: [`s = "${s}"\\nprint(s[-1])`], constraints: ["Use s[-1]"], successDetail: "Correct! -1 counts from the end." }),
    task("middle-char", `${title}: Middle Character`, "medium", 'Set word="code", print word[1].', "o", { outputOnly: true, requiresVariables: ["word"], introSegments: [seg("text", "Print index 1 of "), seg("code", "code"), seg("text", ".")], editorPlaceholder: "# word[1]", hints: ['word = "code"\\nprint(word[1])'], constraints: ["Output: o"], successDetail: "Correct!" }),
    task("index-h", `${title}: Index in hello`, "medium", 'Set s="hello", print s[2].', "l", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "What letter is at index 2 in hello?")], editorPlaceholder: "# s[2]", hints: ['s = "hello"\\nprint(s[2])'], constraints: ["Output: l"], successDetail: "Correct! Index 2 is the third letter." }),
    task("two-indexes", `${title}: Two Characters`, "hard", 'Set s="Python", print s[0] and s[2] on separate lines.', "P\nt", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Print first and third characters on separate lines.")], editorPlaceholder: "# two indexes", hints: [`s = "${s}"\\nprint(s[0])\\nprint(s[2])`], constraints: ["Line 1: P", "Line 2: t"], successDetail: "Correct!" }),
    task("out-of-range", `${title}: Index Concept`, "hard", 'Set s="Hi", print s[0] + s[1] using concatenation.', "Hi", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Build the string from "), seg("code", "s[0]"), seg("text", " and "), seg("code", "s[1]"), seg("text", ".")], editorPlaceholder: "# concat indexes", hints: ['s = "Hi"\\nprint(s[0] + s[1])'], constraints: ["Output: Hi"], successDetail: "Correct! You combined indexed characters." }),
  ];
}

export function stringSliceTasks(_id, title) {
  return [
    task("slice-start", `${title}: Slice Start`, "easy", 'Set s="Python", print s[0:2].', "Py", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Slice "), seg("code", "s[0:2]"), seg("text", " gets characters at index 0 and 1.")], editorPlaceholder: "# s[0:2]", hints: ['s = "Python"\\nprint(s[0:2])'], constraints: ["Output: Py"], successDetail: "Correct! [0:2] means start at 0, stop before 2." }),
    task("slice-end", `${title}: Slice to End`, "easy", 'Set s="Python", print s[2:].', "thon", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Slice "), seg("code", "s[2:]"), seg("text", " from index 2 to the end.")], editorPlaceholder: "# s[2:]", hints: ['s = "Python"\\nprint(s[2:])'], constraints: ["Output: thon"], successDetail: "Correct!" }),
    task("slice-begin", `${title}: Slice from Start`, "medium", 'Set s="Python", print s[:3].', "Pyt", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Slice "), seg("code", "s[:3]"), seg("text", " from start to index 3.")], editorPlaceholder: "# s[:3]", hints: ['s = "Python"\\nprint(s[:3])'], constraints: ["Output: Pyt"], successDetail: "Correct!" }),
    task("slice-step", `${title}: Slice with Step`, "medium", 'Set s="Python", print s[::2].', "Pto", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Every 2nd character: "), seg("code", "s[::2]"), seg("text", ".")], editorPlaceholder: "# s[::2]", hints: ['s = "Python"\\nprint(s[::2])'], constraints: ["Output: Pto"], successDetail: "Correct! ::2 skips every other character." }),
    task("reverse", `${title}: Reverse String`, "medium", 'Set s="Python", print s[::-1].', "nohtyP", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Reverse with "), seg("code", "s[::-1]"), seg("text", ".")], editorPlaceholder: "# reverse", hints: ['s = "Python"\\nprint(s[::-1])'], constraints: ["Output: nohtyP"], successDetail: "Correct! [::-1] reverses the string." }),
    task("slice-word", `${title}: Slice a Word`, "hard", 'Set w="Data", print w[1:].', "ata", { outputOnly: true, requiresVariables: ["w"], introSegments: [seg("text", "Print from index 1 to end of Data.")], editorPlaceholder: "# w[1:]", hints: ['w = "Data"\\nprint(w[1:])'], constraints: ["Output: ata"], successDetail: "Correct!" }),
    task("slice-middle", `${title}: Extract Middle`, "hard", 'Set s="hello", print s[1:4].', "ell", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Extract middle characters with "), seg("code", "s[1:4]"), seg("text", ".")], editorPlaceholder: "# s[1:4]", hints: ['s = "hello"\\nprint(s[1:4])'], constraints: ["Output: ell"], successDetail: "Correct!" }),
  ];
}

export function stringMethodTasks(_id, title) {
  return [
    task("upper", `${title}: upper()`, "easy", 'Print "hello".upper().', "HELLO", printChallenge([seg("text", "Use "), seg("code", ".upper()"), seg("text", " to capitalize.")], "HELLO", "# .upper()", 'print("hello".upper())', "Correct! upper() makes ALL CAPS.")),
    task("lower", `${title}: lower()`, "easy", 'Print "HELLO".lower().', "hello", printChallenge([seg("text", "Use "), seg("code", ".lower()"), seg("text", ".")], "hello", "# .lower()", 'print("HELLO".lower())', "Correct! lower() makes all lowercase.")),
    task("strip", `${title}: strip()`, "easy", 'Print "  hi  ".strip().', "hi", printChallenge([seg("text", "Use "), seg("code", ".strip()"), seg("text", " to remove extra spaces.")], "hi", "# .strip()", 'print("  hi  ".strip())', "Correct! strip() trims whitespace.")),
    task("split", `${title}: split()`, "medium", 'Print "a,b,c".split(",").', "['a', 'b', 'c']", printChallenge([seg("text", "Use "), seg("code", '.split(",")'), seg("text", " to split a string.")], "['a', 'b', 'c']", "# .split()", 'print("a,b,c".split(","))', "Correct! split() returns a list.")),
    task("join", `${title}: join()`, "medium", 'Print "-".join(["a","b","c"]).', "a-b-c", printChallenge([seg("text", "Use "), seg("code", '.join()'), seg("text", " to join list items.")], "a-b-c", "# .join()", 'print("-".join(["a", "b", "c"]))', "Correct! join() connects list items.")),
    task("replace", `${title}: replace()`, "medium", 'Print "hello".replace("l","L").', "heLLo", printChallenge([seg("text", "Use "), seg("code", ".replace()"), seg("text", " to swap characters.")], "heLLo", "# .replace()", 'print("hello".replace("l", "L"))', "Correct! replace() swaps text.")),
    task("count", `${title}: count()`, "hard", 'Print "banana".count("a").', "3", printChallenge([seg("text", "Use "), seg("code", '.count("a")'), seg("text", " to count occurrences.")], "3", "# .count()", 'print("banana".count("a"))', "Correct! count() finds how many times a letter appears.")),
  ];
}

// ─── Module 5: Lists ────────────────────────────────────────────────────────

export function listCreateTasks(_id, title) {
  return [
    task("create-list", `${title}: Create a List`, "easy", "Create nums = [1, 2, 3] and print nums.", "[1, 2, 3]", { outputOnly: true, requiresVariables: ["nums"], requiresListAccess: true, introSegments: [seg("text", "Create "), seg("code", "[1, 2, 3]"), seg("text", " and print the whole list.")], editorPlaceholder: "# nums = [1,2,3]", hints: ["nums = [1, 2, 3]\\nprint(nums)"], constraints: ["Output: [1, 2, 3]"], successDetail: "Correct! Square brackets create a list." }),
    task("empty-list", `${title}: Empty List`, "easy", "Create items = [] and print len(items).", "0", printChallenge([seg("text", "Create an empty list and print its length.")], "0", "# empty list", "items = []\\nprint(len(items))", "Correct! [] is an empty list.")),
    task("mixed-list", `${title}: Mixed Types`, "easy", "Create data = [1, \"hi\", True] and print data.", "[1, 'hi', True]", { outputOnly: true, requiresVariables: ["data"], introSegments: [seg("text", "Lists can hold different types.")], editorPlaceholder: "# mixed list", hints: ['data = [1, "hi", True]\\nprint(data)'], constraints: ["Create list with int, str, bool"], successDetail: "Correct!" }),
    task("nested-list", `${title}: Nested List`, "medium", "Create grid = [[1,2],[3,4]] and print grid[0].", "[1, 2]", { outputOnly: true, requiresVariables: ["grid"], requiresListAccess: true, introSegments: [seg("text", "Print the first inner list.")], editorPlaceholder: "# nested list", hints: ["grid = [[1,2],[3,4]]\\nprint(grid[0])"], constraints: ["Output: [1, 2]"], successDetail: "Correct! Lists can contain other lists." }),
    task("list-from-range", `${title}: list from range`, "medium", "Print list(range(1, 4)).", "[1, 2, 3]", printChallenge([seg("text", "Convert "), seg("code", "range(1,4)"), seg("text", " to a list.")], "[1, 2, 3]", "# list(range())", "print(list(range(1, 4)))", "Correct! list() converts range to a list.")),
    task("repeat-list", `${title}: Repeat List`, "medium", "Print [0] * 3.", "[0, 0, 0]", printChallenge([seg("text", "Repeat a list with "), seg("code", "* 3"), seg("text", ".")], "[0, 0, 0]", "# [0]*3", "print([0] * 3)", "Correct! * repeats list items.")),
    task("concat-lists", `${title}: Concatenate Lists`, "hard", "Print [1, 2] + [3, 4].", "[1, 2, 3, 4]", printChallenge([seg("text", "Join two lists with "), seg("code", "+"), seg("text", ".")], "[1, 2, 3, 4]", "# list concat", "print([1, 2] + [3, 4])", "Correct! + combines lists.")),
  ];
}

export function listIndexTasks(_id, title) {
  return [
    task("index-first", `${title}: First Item`, "easy", "Set items = [10,20,30], print items[0].", "10", { outputOnly: true, requiresVariables: ["items"], requiresListAccess: true, introSegments: [seg("text", "Print first item with "), seg("code", "items[0]"), seg("text", ".")], editorPlaceholder: "# items[0]", hints: ["items = [10,20,30]\\nprint(items[0])"], constraints: ["Output: 10"], successDetail: "Correct! List indexing starts at 0." }),
    task("index-last", `${title}: Last Item`, "easy", "Set items = [10,20,30], print items[-1].", "30", { outputOnly: true, requiresVariables: ["items"], requiresListAccess: true, introSegments: [seg("text", "Print last item with "), seg("code", "items[-1]"), seg("text", ".")], editorPlaceholder: "# items[-1]", hints: ["items = [10,20,30]\\nprint(items[-1])"], constraints: ["Output: 30"], successDetail: "Correct!" }),
    task("index-middle", `${title}: Middle Item`, "easy", "Set items = [\"a\",\"middle\",\"c\"], print items[1].", "middle", { outputOnly: true, requiresVariables: ["items"], requiresListAccess: true, introSegments: [seg("text", "Print the item at index 1.")], editorPlaceholder: "# items[1]", hints: ['items = ["a","middle","c"]\\nprint(items[1])'], constraints: ["Output: middle"], successDetail: "Correct!" }),
    task("index-update-read", `${title}: Read After Index`, "medium", "Set nums = [1,2,3], print nums[2].", "3", { outputOnly: true, requiresVariables: ["nums"], requiresListAccess: true, introSegments: [seg("text", "Print the third element (index 2).")], editorPlaceholder: "# nums[2]", hints: ["nums = [1,2,3]\\nprint(nums[2])"], constraints: ["Output: 3"], successDetail: "Correct!" }),
    task("nested-index", `${title}: Nested Index`, "medium", "Set m = [[1,2],[3,4]], print m[1][0].", "3", { outputOnly: true, requiresVariables: ["m"], requiresListAccess: true, introSegments: [seg("text", "Access nested list: "), seg("code", "m[1][0]"), seg("text", ".")], editorPlaceholder: "# m[1][0]", hints: ["m = [[1,2],[3,4]]\\nprint(m[1][0])"], constraints: ["Output: 3"], successDetail: "Correct!" }),
    task("two-indexes", `${title}: Two Indexes`, "hard", "Set a = [5,10,15], print a[0] and a[2] on separate lines.", "5\n15", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Print first and last items on separate lines.")], editorPlaceholder: "# two indexes", hints: ["a = [5,10,15]\\nprint(a[0])\\nprint(a[2])"], constraints: ["Line 1: 5", "Line 2: 15"], successDetail: "Correct!" }),
    task("len-index", `${title}: Last via len`, "hard", "Set items = [4,8,12], print items[len(items)-1].", "12", { outputOnly: true, requiresVariables: ["items"], requiresListAccess: true, introSegments: [seg("text", "Get last item using "), seg("code", "len(items)-1"), seg("text", ".")], editorPlaceholder: "# len for last", hints: ["items = [4,8,12]\\nprint(items[len(items)-1])"], constraints: ["Output: 12"], successDetail: "Correct!" }),
  ];
}

export function listSliceTasks(_id, title) {
  return [
    task("slice-basic", `${title}: Basic Slice`, "easy", "Set a = [0,1,2,3,4], print a[1:3].", "[1, 2]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Slice "), seg("code", "a[1:3]"), seg("text", ".")], editorPlaceholder: "# a[1:3]", hints: ["a = [0,1,2,3,4]\\nprint(a[1:3])"], constraints: ["Output: [1, 2]"], successDetail: "Correct!" }),
    task("slice-start", `${title}: From Start`, "easy", "Set a = [0,1,2,3], print a[:2].", "[0, 1]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Slice from start: "), seg("code", "a[:2]"), seg("text", ".")], editorPlaceholder: "# a[:2]", hints: ["a = [0,1,2,3]\\nprint(a[:2])"], constraints: ["Output: [0, 1]"], successDetail: "Correct!" }),
    task("slice-end", `${title}: To End`, "medium", "Set a = [0,1,2,3], print a[2:].", "[2, 3]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Slice to end: "), seg("code", "a[2:]"), seg("text", ".")], editorPlaceholder: "# a[2:]", hints: ["a = [0,1,2,3]\\nprint(a[2:])"], constraints: ["Output: [2, 3]"], successDetail: "Correct!" }),
    task("slice-step", `${title}: Step Slice`, "medium", "Set a = [0,1,2,3,4], print a[::2].", "[0, 2, 4]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Every 2nd item: "), seg("code", "a[::2]"), seg("text", ".")], editorPlaceholder: "# a[::2]", hints: ["a = [0,1,2,3,4]\\nprint(a[::2])"], constraints: ["Output: [0, 2, 4]"], successDetail: "Correct!" }),
    task("reverse-list", `${title}: Reverse List`, "medium", "Set a = [1,2,3], print a[::-1].", "[3, 2, 1]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Reverse with "), seg("code", "a[::-1]"), seg("text", ".")], editorPlaceholder: "# reverse", hints: ["a = [1,2,3]\\nprint(a[::-1])"], constraints: ["Output: [3, 2, 1]"], successDetail: "Correct!" }),
    task("copy-slice", `${title}: Copy a Slice`, "hard", "Set a = [10,20,30,40], print a[1:4].", "[20, 30, 40]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Extract middle portion with "), seg("code", "a[1:4]"), seg("text", ".")], editorPlaceholder: "# a[1:4]", hints: ["a = [10,20,30,40]\\nprint(a[1:4])"], constraints: ["Output: [20, 30, 40]"], successDetail: "Correct!" }),
    task("slice-empty", `${title}: Empty Slice`, "hard", "Set a = [1,2,3], print a[2:2].", "[]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "When start equals stop, slice is empty: "), seg("code", "a[2:2]"), seg("text", ".")], editorPlaceholder: "# a[2:2]", hints: ["a = [1,2,3]\\nprint(a[2:2])"], constraints: ["Output: []"], successDetail: "Correct! Same index gives empty list." }),
  ];
}

export function listMethodTasks(_id, title) {
  return [
    task("append", `${title}: append()`, "easy", "Set a=[1,2], a.append(3), print a.", "[1, 2, 3]", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", ".append(3)"), seg("text", " to add to end.")], editorPlaceholder: "# append", hints: ["a = [1,2]\\na.append(3)\\nprint(a)"], constraints: ["Output: [1, 2, 3]"], successDetail: "Correct! append() adds one item." }),
    task("pop", `${title}: pop()`, "easy", "Set a=[1,2,3], print a.pop().", "3", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", ".pop()"), seg("text", " to remove and return last item.")], editorPlaceholder: "# pop", hints: ["a = [1,2,3]\\nprint(a.pop())"], constraints: ["Output: 3"], successDetail: "Correct! pop() removes the last item." }),
    task("sort", `${title}: sort()`, "medium", "Set a=[3,1,2], a.sort(), print a.", "[1, 2, 3]", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", ".sort()"), seg("text", " to sort in place.")], editorPlaceholder: "# sort", hints: ["a = [3,1,2]\\na.sort()\\nprint(a)"], constraints: ["Output: [1, 2, 3]"], successDetail: "Correct!" }),
    task("count", `${title}: count()`, "medium", "Print [1,2,2,3].count(2).", "2", printChallenge([seg("text", "Use "), seg("code", ".count(2)"), seg("text", " on a list.")], "2", "# count", "print([1,2,2,3].count(2))", "Correct! count() finds occurrences.")),
    task("index-method", `${title}: index()`, "medium", "Print [\"a\",\"b\",\"c\"].index(\"b\").", "1", printChallenge([seg("text", "Use "), seg("code", '.index("b")'), seg("text", " to find position.")], "1", "# index", 'print(["a","b","c"].index("b"))', "Correct! index() returns position.")),
    task("extend", `${title}: extend()`, "hard", "Set a=[1,2], a.extend([3,4]), print a.", "[1, 2, 3, 4]", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", ".extend()"), seg("text", " to add multiple items.")], editorPlaceholder: "# extend", hints: ["a = [1,2]\\na.extend([3,4])\\nprint(a)"], constraints: ["Output: [1, 2, 3, 4]"], successDetail: "Correct!" }),
    task("remove", `${title}: remove()`, "hard", "Set a=[1,2,3,2], a.remove(2), print a.", "[1, 3, 2]", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", ".remove(2)"), seg("text", " to remove first match.")], editorPlaceholder: "# remove", hints: ["a = [1,2,3,2]\\na.remove(2)\\nprint(a)"], constraints: ["Output: [1, 3, 2]"], successDetail: "Correct! remove() deletes first occurrence." }),
  ];
}

export function listModifyTasks(_id, title) {
  return [
    task("change-item", `${title}: Change Item`, "easy", "Set a=[1,2,3], set a[0]=10, print a.", "[10, 2, 3]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Change index 0 with "), seg("code", "a[0] = 10"), seg("text", ".")], editorPlaceholder: "# change item", hints: ["a = [1,2,3]\\na[0] = 10\\nprint(a)"], constraints: ["Output: [10, 2, 3]"], successDetail: "Correct! Lists are mutable." }),
    task("insert", `${title}: insert()`, "easy", "Set a=[1,3], a.insert(1,2), print a.", "[1, 2, 3]", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", "a.insert(1, 2)"), seg("text", " to insert at index 1.")], editorPlaceholder: "# insert", hints: ["a = [1,3]\\na.insert(1,2)\\nprint(a)"], constraints: ["Output: [1, 2, 3]"], successDetail: "Correct!" }),
    task("del-item", `${title}: del Statement`, "medium", "Set a=[1,2,3], del a[1], print a.", "[1, 3]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Use "), seg("code", "del a[1]"), seg("text", " to remove index 1.")], editorPlaceholder: "# del", hints: ["a = [1,2,3]\\ndel a[1]\\nprint(a)"], constraints: ["Output: [1, 3]"], successDetail: "Correct!" }),
    task("clear", `${title}: clear()`, "medium", "Set a=[1,2,3], a.clear(), print a.", "[]", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", ".clear()"), seg("text", " to empty the list.")], editorPlaceholder: "# clear", hints: ["a = [1,2,3]\\na.clear()\\nprint(a)"], constraints: ["Output: []"], successDetail: "Correct!" }),
    task("slice-assign", `${title}: Slice Assignment`, "hard", "Set a=[0,0,0,0], a[1:3]=[10,20], print a.", "[0, 10, 20, 0]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Replace a slice: "), seg("code", "a[1:3] = [10, 20]"), seg("text", ".")], editorPlaceholder: "# slice assign", hints: ["a = [0,0,0,0]\\na[1:3] = [10,20]\\nprint(a)"], constraints: ["Output: [0, 10, 20, 0]"], successDetail: "Correct!" }),
    task("append-loop", `${title}: Build with Loop`, "hard", "Build [0,1,2] using a loop and append, print result.", "[0, 1, 2]", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Use a for loop and append to build [0,1,2].")], editorPlaceholder: "# loop + append", hints: ["a = []\\nfor i in range(3):\\n    a.append(i)\\nprint(a)"], constraints: ["Use for loop and append", "Output: [0, 1, 2]"], successDetail: "Correct!" }),
    task("modify-nested", `${title}: Modify Nested`, "hard", "Set m=[[1,2],[3,4]], set m[0][1]=9, print m.", "[[1, 9], [3, 4]]", { outputOnly: true, requiresVariables: ["m"], requiresListAccess: true, introSegments: [seg("text", "Change nested value "), seg("code", "m[0][1] = 9"), seg("text", ".")], editorPlaceholder: "# nested modify", hints: ["m = [[1,2],[3,4]]\\nm[0][1] = 9\\nprint(m)"], constraints: ["Output: [[1, 9], [3, 4]]"], successDetail: "Correct!" }),
  ];
}

export function listPropertiesTasks(_id, title) {
  return [
    task("ordered", `${title}: Lists Are Ordered`, "easy", "Set a=[3,1,2], print a — order is preserved.", "[3, 1, 2]", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Lists keep items in the order you add them.")], editorPlaceholder: "# ordered list", hints: ["a = [3,1,2]\\nprint(a)"], constraints: ["Output: [3, 1, 2]"], successDetail: "Correct! Order matters in lists." }),
    task("mutable", `${title}: Lists Are Mutable`, "easy", "Set a=[1,2], change a[0]=99, print a.", "[99, 2]", { outputOnly: true, requiresVariables: ["a"], requiresListAccess: true, introSegments: [seg("text", "Lists can be changed after creation.")], editorPlaceholder: "# mutable", hints: ["a = [1,2]\\na[0]=99\\nprint(a)"], constraints: ["Output: [99, 2]"], successDetail: "Correct! Lists are mutable." }),
    task("duplicates", `${title}: Allow Duplicates`, "easy", "Print [1, 1, 2].", "[1, 1, 2]", printChallenge([seg("text", "Lists can contain duplicate values.")], "[1, 1, 2]", "# duplicates", "print([1, 1, 2])", "Correct! Duplicates are allowed.")),
    task("len-list", `${title}: List Length`, "medium", "Set a=[10,20,30,40], print len(a).", "4", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Use "), seg("code", "len()"), seg("text", " to count items.")], editorPlaceholder: "# len", hints: ["a = [10,20,30,40]\\nprint(len(a))"], constraints: ["Output: 4"], successDetail: "Correct!" }),
    task("type-list", `${title}: List Type`, "medium", "Print type([1,2,3]).", "<class 'list'>", printChallenge([seg("text", "Check type of a list.")], "<class 'list'>", "# type", "print(type([1,2,3]))", "Correct!" )),
    task("in-list", `${title}: Check Membership`, "medium", "Print 2 in [1,2,3].", "True", printChallenge([seg("text", "Use "), seg("code", "in"), seg("text", " to check if item exists.")], "True", "# in list", "print(2 in [1,2,3])", "Correct!" )),
    task("mixed-types", `${title}: Mixed Item Types`, "hard", "Print [1, \"two\", 3.0].", "[1, 'two', 3.0]", printChallenge([seg("text", "Lists can hold different types together.")], "[1, 'two', 3.0]", "# mixed", 'print([1, "two", 3.0])', "Correct!" )),
  ];
}
