/** Topic-specific practice tasks aligned with curriculum concepts. */

export const seg = (type, value) => ({ type, value });

export function task(slug, title, difficulty, description, expected, challenge = {}) {
  return [slug, title, difficulty, description, expected, { outputOnly: true, ...challenge }];
}

function baseChallenge(placeholder, empty, success, constraints, hints, extra = {}) {
  return {
    editorPlaceholder: placeholder,
    emptyMessage: empty,
    successDetail: success,
    constraints,
    hints,
    ...extra,
  };
}

function printChallenge(intro, expected, placeholder, hint, success, extra = {}) {
  return baseChallenge(
    placeholder,
    "Use print() to show the result.",
    success,
    [`Output must be exactly: ${expected.split("\n")[0]}${expected.includes("\n") ? " (and following lines)" : ""}`],
    [hint],
    {
      introSegments: intro,
      liveCheckRules: [{
        id: "out",
        label: `prints ${expected.split("\n")[0]}`,
        kind: "print-value",
        index: 0,
        expected: expected.split("\n")[0],
      }],
      ...extra,
    }
  );
}

// ─── Module 2 ───────────────────────────────────────────────────────────────

export function commentsTasks(_id, title) {
  return [
    task("comment-greeting", `${title}: Comment Then Print`, "easy",
      "Add a comment line starting with #, then print Hi.",
      "Hi",
      baseChallenge("# add a comment, then print", "Add a # comment and a print() call.",
        "Correct! Comments describe code without running.",
        ["Include a comment line starting with #", "Output must be exactly: Hi"],
        ['Example: # greeting message\\nprint("Hi")'],
        { requiresComment: true, introSegments: [seg("text", "Add a "), seg("code", "#"), seg("text", " comment, then print "), seg("code", "Hi"), seg("text", ".")] })),
    task("comment-two-lines", `${title}: Comment Two Prints`, "easy",
      "Add one comment, then print Line1 and Line2 on separate lines.",
      "Line1\nLine2",
      baseChallenge("# describe the program", "Add a comment and two print() calls.",
        "Correct! Comments help readers understand your code.",
        ["Include at least one # comment", "Print Line1 then Line2"],
        ['Add # then print("Line1") and print("Line2")'],
        { requiresComment: true, introSegments: [seg("text", "Add a comment, then print "), seg("code", "Line1"), seg("text", " and "), seg("code", "Line2"), seg("text", " on separate lines.")] })),
    task("comment-variable", `${title}: Comment a Variable`, "easy",
      "Add a comment above x = 5, then print x.",
      "5",
      baseChallenge("# explain the variable", "Comment the variable assignment, then print x.",
        "Correct! Comments can explain variables too.",
        ["Add a # comment above the assignment", "Create x = 5 and print(x)"],
        ["# store a number\\nx = 5\\nprint(x)"],
        { requiresComment: true, requiresVariables: ["x"], introSegments: [seg("text", "Add a comment above "), seg("code", "x = 5"), seg("text", ", then print "), seg("code", "x"), seg("text", ".")] })),
    task("comment-each-step", `${title}: Comment Each Step`, "medium",
      "Use two comment lines — one before each print statement. Print A then B.",
      "A\nB",
      baseChallenge("# comment each print", "Add a comment before each print() call.",
        "Correct! Step-by-step comments make code easy to follow.",
        ["Use two separate # comment lines", "Print A on line 1, B on line 2"],
        ['# first value\\nprint("A")\\n# second value\\nprint("B")'],
        { requiresComment: true })),
    task("comment-before-loop", `${title}: Comment a Loop`, "medium",
      "Add a comment explaining the loop, then use for i in range(1, 4): print(i).",
      "1\n2\n3",
      baseChallenge("# explain the loop", "Add a comment and a for loop.",
        "Correct! Comments work great above loops.",
        ["Include a # comment", "Use for and range(1, 4)", "Print 1, 2, 3 each on its own line"],
        ["# print numbers 1 to 3\\nfor i in range(1, 4):\\n    print(i)"],
        { requiresComment: true, requiresForLoop: true })),
    task("comment-function", `${title}: Comment a Function`, "medium",
      "Add a comment above def greet():, print Hello inside, call greet().",
      "Hello",
      baseChallenge("# describe the function", "Comment the function, define it, and call it.",
        "Correct! Comments explain what functions do.",
        ["Include a # comment", "Define greet() that prints Hello", "Call greet()"],
        ['# says hello\\ndef greet():\\n    print("Hello")\\ngreet()'],
        { requiresComment: true, requiresFunction: "greet" })),
    task("comment-full-program", `${title}: Fully Commented Program`, "hard",
      "Add comments for: variable setup, condition, and output. Set score=80, if score>=60 print Pass else Fail.",
      "Pass",
      baseChallenge("# comment each section", "Comment variable, condition, and output sections.",
        "Correct! Well-commented code is easier to maintain.",
        ["Use at least two # comments", "score = 80 with if/else", "Output Pass"],
        ["Add comments before score=80 and before the if statement"],
        { requiresComment: true, requiresIfCondition: true })),
  ];
}

export function dataTypesTasks(_id, title) {
  return [
    task("store-int", `${title}: Store an Integer`, "easy", "Create age = 21 and print age.", "21",
      printChallenge([seg("text", "Create "), seg("code", "age = 21"), seg("text", " and print it.")], "21", "# integer variable", "age = 21\\nprint(age)", "Correct! 21 is an int.", { requiresVariables: ["age"] })),
    task("store-float", `${title}: Store a Float`, "easy", 'Create pi = 3.14 and print pi.', "3.14",
      printChallenge([seg("text", "Create "), seg("code", "pi = 3.14"), seg("text", " and print it.")], "3.14", "# float variable", 'pi = 3.14\\nprint(pi)', "Correct! 3.14 is a float.", { requiresVariables: ["pi"] })),
    task("store-str", `${title}: Store a String`, "easy", 'Create name = "Ana" and print name.', "Ana",
      printChallenge([seg("text", 'Create '), seg("code", 'name = "Ana"'), seg("text", " and print it.")], "Ana", "# string variable", 'name = "Ana"\\nprint(name)', "Correct! Ana is a str.", { requiresVariables: ["name"] })),
    task("store-bool", `${title}: Store a Boolean`, "easy", "Create active = True and print active.", "True",
      printChallenge([seg("text", "Create "), seg("code", "active = True"), seg("text", " and print it.")], "True", "# boolean variable", "active = True\\nprint(active)", "Correct! True is a bool.", { requiresVariables: ["active"] })),
    task("type-int", `${title}: Check int Type`, "medium", "Print the type of 42 using type().", "<class 'int'>",
      printChallenge([seg("text", "Use "), seg("code", "type()"), seg("text", " to print the type of "), seg("code", "42"), seg("text", ".")], "<class 'int'>", "# print type of 42", "print(type(42))", "Correct! 42 is an integer.")),
    task("type-str", `${title}: Check str Type`, "medium", 'Print the type of "hello" using type().', "<class 'str'>",
      printChallenge([seg("text", "Print the type of "), seg("code", '"hello"'), seg("text", " using type().")], "<class 'str'>", '# print type of "hello"', 'print(type("hello"))', "Correct! \"hello\" is a string.")),
    task("two-types", `${title}: Two Types`, "hard", "Print type(10) on line 1 and type(3.5) on line 2.", "<class 'int'>\n<class 'float'>",
      baseChallenge("# print two types", "Print type(10) then type(3.5) on separate lines.",
        "Correct! int and float are different types.",
        ["Two print() calls with type()", "Line 1: <class 'int'>", "Line 2: <class 'float'>"],
        ["print(type(10))\\nprint(type(3.5))"],
        { liveCheckRules: [{ id: "l1", kind: "print-value", index: 0, expected: "<class 'int'>", label: "int type" }, { id: "l2", kind: "print-value", index: 1, expected: "<class 'float'>", label: "float type" }] })),
  ];
}

export function typecastingTasks(_id, title) {
  return [
    task("cast-int", `${title}: String to int`, "easy", 'Convert "7" to an integer and print it.', "7",
      printChallenge([seg("text", "Use "), seg("code", 'int("7")'), seg("text", " and print the result.")], "7", '# int("7")', 'print(int("7"))', "Correct! int() converts strings to numbers.")),
    task("cast-float", `${title}: String to float`, "easy", 'Convert "3.5" to float and print it.', "3.5",
      printChallenge([seg("text", "Use "), seg("code", 'float("3.5")'), seg("text", " and print the result.")], "3.5", '# float("3.5")', 'print(float("3.5"))', "Correct! float() handles decimals.")),
    task("cast-str", `${title}: Number to string`, "easy", "Convert 42 to a string and print it.", "42",
      printChallenge([seg("text", "Use "), seg("code", "str(42)"), seg("text", " and print the result.")], "42", "# str(42)", "print(str(42))", "Correct! str() converts numbers to text.")),
    task("cast-truncate", `${title}: Float to int`, "easy", "Convert 9.9 to int and print it (truncates to 9).", "9",
      printChallenge([seg("text", "Use "), seg("code", "int(9.9)"), seg("text", " — Python drops the decimal part.")], "9", "# int(9.9)", "print(int(9.9))", "Correct! int(9.9) becomes 9.")),
    task("cast-add-strings", `${title}: Add Cast Values`, "medium", 'Print int("5") + int("3").', "8",
      printChallenge([seg("text", "Convert "), seg("code", '"5"'), seg("text", " and "), seg("code", '"3"'), seg("text", " to ints and add them.")], "8", '# add cast values', 'print(int("5") + int("3"))', "Correct! Cast first, then add.")),
    task("cast-concat", `${title}: Concat with str()`, "medium", 'Print "Score: " + str(100).', "Score: 100",
      printChallenge([seg("text", "Combine text and a number using "), seg("code", "str()"), seg("text", ".")], "Score: 100", "# str for concatenation", 'print("Score: " + str(100))', "Correct! str() lets you join text and numbers.")),
    task("cast-bool-int", `${title}: bool to int`, "hard", "Print int(True) and int(False) on separate lines.", "1\n0",
      baseChallenge("# bool to int", "Print int(True) then int(False).",
        "Correct! True becomes 1 and False becomes 0.",
        ["Two print() calls", "Line 1: 1", "Line 2: 0"],
        ["print(int(True))\\nprint(int(False))"],
        { introSegments: [seg("text", "Print "), seg("code", "int(True)"), seg("text", " on line 1 and "), seg("code", "int(False)"), seg("text", " on line 2.")] })),
  ];
}

// ─── Module 3 operators ─────────────────────────────────────────────────────

export function arithmeticTasks(_id, title) {
  const ops = [
    ["add", "Addition", "easy", "Print 10 + 3.", "13", "10 + 3"],
    ["subtract", "Subtraction", "easy", "Print 20 - 5.", "15", "20 - 5"],
    ["multiply", "Multiplication", "easy", "Print 4 * 6.", "24", "4 * 6"],
    ["divide", "Division", "easy", "Print 20 / 4.", "5.0", "20 / 4"],
    ["floor-div", "Floor Division", "medium", "Print 17 // 5 (whole number division).", "3", "17 // 5"],
    ["modulo", "Modulo", "medium", "Print 17 % 5 (remainder).", "2", "17 % 5"],
    ["power", "Exponent", "hard", "Print 2 ** 3 (2 to the power of 3).", "8", "2 ** 3"],
  ];
  return ops.map(([slug, name, diff, desc, expected, expr], i) =>
    task(slug, `${title}: ${name}`, diff, desc, expected,
      printChallenge([seg("text", "Use "), seg("code", expr), seg("text", " inside print().")], expected, `# print ${expr}`, `print(${expr})`, `Correct! ${expr} = ${expected}.`))
  );
}

export function assignmentTasks(_id, title) {
  const ops = [
    ["assign-basic", "Basic Assignment", "easy", "Set x = 10, then print x.", "10", "x = 10"],
    ["add-assign", "Add Assign +=", "easy", "Set x = 10, then x += 5, print x.", "15", "x += 5"],
    ["sub-assign", "Subtract Assign -=", "easy", "Set x = 10, then x -= 3, print x.", "7", "x -= 3"],
    ["mul-assign", "Multiply Assign *=", "medium", "Set x = 4, then x *= 3, print x.", "12", "x *= 3"],
    ["div-assign", "Divide Assign /=", "medium", "Set x = 20, then x /= 4, print x.", "5.0", "x /= 4"],
    ["mod-assign", "Modulo Assign %=", "medium", "Set x = 17, then x %= 5, print x.", "2", "x %= 5"],
    ["pow-assign", "Power Assign **=", "hard", "Set x = 2, then x **= 3, print x.", "8", "x **= 3"],
  ];
  return ops.map(([slug, name, diff, desc, expected, op]) =>
    task(slug, `${title}: ${name}`, diff, desc, expected,
      baseChallenge(`# use ${op}`, "Assign to x, apply the operator, then print x.",
        `Correct! After ${op}, x is ${expected}.`,
        ["Use variable x", `Final output: ${expected}`],
        [`Start with x = a number, use ${op}, then print(x)`],
        { requiresVariables: ["x"], introSegments: [seg("text", desc)] }))
  );
}

export function comparisonTasks(_id, title) {
  const ops = [
    ["gt", "Greater Than", "easy", "Print whether 5 > 3 is true.", "True", "5 > 3"],
    ["eq", "Equal To", "easy", "Print whether 2 == 2 is true.", "True", "2 == 2"],
    ["neq", "Not Equal", "easy", "Print whether 1 != 0 is true.", "True", "1 != 0"],
    ["lte", "Less or Equal", "medium", "Print whether 4 <= 4 is true.", "True", "4 <= 4"],
    ["lt-false", "Less Than False", "medium", "Print whether 10 < 5 is false.", "False", "10 < 5"],
    ["gte", "Greater or Equal", "medium", "Print whether 7 >= 7 is true.", "True", "7 >= 7"],
    ["compare-vars", "Compare Variables", "hard", "Set a=10, b=5, print a > b.", "True", "a > b"],
  ];
  return ops.map(([slug, name, diff, desc, expected, expr]) =>
    task(slug, `${title}: ${name}`, diff, desc, expected,
      printChallenge([seg("text", "Print the result of "), seg("code", expr), seg("text", ".")], expected, `# print ${expr}`, `print(${expr})`, `Correct! ${expr} is ${expected}.`))
  );
}

export function logicalTasks(_id, title) {
  const ops = [
    ["and-true", "and True", "easy", "Print True and True.", "True", "True and True"],
    ["and-false", "and False", "easy", "Print True and False.", "False", "True and False"],
    ["or-true", "or True", "easy", "Print False or True.", "True", "False or True"],
    ["not-false", "not False", "medium", "Print not False.", "True", "not False"],
    ["not-true", "not True", "medium", "Print not True.", "False", "not True"],
    ["and-compare", "and with Comparison", "medium", "Print 5 > 3 and 2 < 4.", "True", "5 > 3 and 2 < 4"],
    ["or-compare", "or with Comparison", "hard", "Print 5 > 10 or 3 == 3.", "True", "5 > 10 or 3 == 3"],
  ];
  return ops.map(([slug, name, diff, desc, expected, expr]) =>
    task(slug, `${title}: ${name}`, diff, desc, expected,
      printChallenge([seg("text", "Print "), seg("code", expr), seg("text", ".")], expected, `# ${expr}`, `print(${expr})`, `Correct! ${expr} = ${expected}.`))
  );
}

export function identityTasks(_id, title) {
  return [
    task("is-none", `${title}: is None`, "easy", "Set x = None, print x is None.", "True",
      printChallenge([seg("text", "Check if "), seg("code", "x is None"), seg("text", " when x = None.")], "True", "# x is None", "x = None\\nprint(x is None)", "Correct! is checks same object.", { requiresVariables: ["x"] })),
    task("is-same-list", `${title}: Same List Reference`, "easy", "Set a = [1,2]; b = a; print a is b.", "True",
      printChallenge([seg("text", "When b points to the same list as a, "), seg("code", "a is b"), seg("text", " is True.")], "True", "# same reference", "a = [1, 2]\\nb = a\\nprint(a is b)", "Correct! Same object, same reference.")),
    task("is-diff-list", `${title}: Different Lists`, "medium", "Set a = [1]; b = [1]; print a is b.", "False",
      printChallenge([seg("text", "Two separate lists with same values: "), seg("code", "a is b"), seg("text", " is False.")], "False", "# different objects", "a = [1]\\nb = [1]\\nprint(a is b)", "Correct! Different objects in memory.")),
    task("is-not", `${title}: is not`, "medium", "Set x = 5, print x is not None.", "True",
      printChallenge([seg("text", "Use "), seg("code", "is not"), seg("text", " to check x is not None.")], "True", "# is not None", "x = 5\\nprint(x is not None)", "Correct! is not is the opposite of is.")),
    task("is-int", `${title}: Small int is`, "medium", "Print 5 is 5.", "True",
      printChallenge([seg("text", "Print "), seg("code", "5 is 5"), seg("text", ".")], "True", "# 5 is 5", "print(5 is 5)", "Correct! Python may reuse small integers.")),
    task("is-not-diff", `${title}: is not Different`, "hard", "Set a = [1,2]; b = [1,2]; print a is not b.", "True",
      printChallenge([seg("text", "Different list objects: "), seg("code", "a is not b"), seg("text", " is True.")], "True", "# is not b", "a = [1, 2]\\nb = [1, 2]\\nprint(a is not b)", "Correct! Same values, different objects.")),
    task("none-check-fn", `${title}: None in Function`, "hard", "Define f() returning None, print f() is None.", "True",
      baseChallenge("# function returns None", "Define f() that returns None, check with is None.",
        "Correct! None checks use is, not ==.",
        ["Define function f", "Return None", "Print f() is None"],
        ["def f():\\n    return None\\nprint(f() is None)"],
        { requiresFunction: "f", introSegments: [seg("text", "Define "), seg("code", "f()"), seg("text", " returning None, print "), seg("code", "f() is None"), seg("text", ".")] })),
  ];
}

export function membershipTasks(_id, title) {
  const ops = [
    ["in-str", "in String", "easy", 'Print "a" in "abc".', "True", '"a" in "abc"'],
    ["not-in-str", "not in String", "easy", 'Print "z" not in "abc".', "True", '"z" not in "abc"'],
    ["in-list", "in List", "easy", "Print 2 in [1, 2, 3].", "True", "2 in [1, 2, 3]"],
    ["not-in-list", "not in List", "medium", "Print 5 not in [1, 2, 3].", "True", "5 not in [1, 2, 3]"],
    ["in-set", "in Set", "medium", "Print 3 in {1, 2, 3}.", "True", "3 in {1, 2, 3}"],
    ["in-dict", "in Dictionary", "medium", 'Print "name" in {"name": "Ana", "age": 20}.', "True", '"name" in {"name": "Ana", "age": 20}'],
    ["in-loop", "Check in Loop", "hard", "Print 2 in [1,2,3] and 5 in [1,2,3] on separate lines.", "True\nFalse", "membership loop"],
  ];
  return ops.map(([slug, name, diff, desc, expected, expr], i) => {
    if (slug === "in-loop") {
      return task(slug, `${title}: ${name}`, diff, desc, expected,
        baseChallenge("# membership checks", "Print two in/not in checks on separate lines.",
          "Correct! in works on lists, strings, and more.",
          ["Two print() calls", "Line 1: True", "Line 2: False"],
          ['print(2 in [1, 2, 3])\\nprint(5 in [1, 2, 3])'],
          { introSegments: [seg("text", "Print "), seg("code", "2 in [1,2,3]"), seg("text", " then "), seg("code", "5 in [1,2,3]"), seg("text", " on separate lines.")] }));
    }
    return task(slug, `${title}: ${name}`, diff, desc, expected,
      printChallenge([seg("text", "Print "), seg("code", expr), seg("text", ".")], expected, `# ${expr}`, `print(${expr})`, `Correct! ${expr} is ${expected}.`));
  });
}

export function bitwiseTasks(_id, title) {
  const ops = [
    ["and-bit", "Bitwise AND &", "easy", "Print 5 & 1.", "1", "5 & 1"],
    ["or-bit", "Bitwise OR |", "easy", "Print 5 | 2.", "7", "5 | 2"],
    ["xor-bit", "Bitwise XOR ^", "medium", "Print 5 ^ 1.", "4", "5 ^ 1"],
    ["left-shift", "Left Shift <<", "medium", "Print 3 << 1.", "6", "3 << 1"],
    ["right-shift", "Right Shift >>", "medium", "Print 8 >> 1.", "4", "8 >> 1"],
    ["and-mask", "AND Mask", "hard", "Print 12 & 10.", "8", "12 & 10"],
    ["combo-bit", "Combined Bitwise", "hard", "Print (5 & 3) | 2.", "3", "(5 & 3) | 2"],
  ];
  return ops.map(([slug, name, diff, desc, expected, expr]) =>
    task(slug, `${title}: ${name}`, diff, desc, expected,
      printChallenge([seg("text", "Print "), seg("code", expr), seg("text", ".")], expected, `# ${expr}`, `print(${expr})`, `Correct! ${expr} = ${expected}.`))
  );
}
