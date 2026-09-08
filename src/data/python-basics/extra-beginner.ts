import { buildBasicsProblem, buildScriptProblem } from "./helpers";

/**
 * Extra Beginner (easy) Python Basics — expands bank toward 70 easy
 * Auto-generated from scripts/_basics-specs-*.mjs — do not hand-edit heavily;
 * re-run: node scripts/emit-python-basics-extra.mjs
 */
export const beginnerExtraProblems = [
  buildScriptProblem({
    order: 35,
    slug: "store-city",
    title: "Store City and Country",
    difficulty: "easy",
    category: "variables",
    description: `Create city = "Mumbai" and country = "India". Print both values on one line, separated by a comma and space.`,
    examples: [
      { output: `Mumbai, India` }
    ],
    constraints: ["Use the exact string values shown","Output format: Mumbai, India"],
    hints: ["Assign each string to a variable","print(city + \", \" + country) or use an f-string"],
    approach: `Assign both strings to variables, then combine them in a single print statement.`,
    starterCode: `# TODO: create city and country, then print them
`,
    solutionCode: `city = "Mumbai"
country = "India"
print(f"{city}, {country}")`,
    tests: [
      { label: `City and country line`, expectedStdout: `Mumbai, India` }
    ],
  }),

  buildScriptProblem({
    order: 36,
    slug: "swap-values",
    title: "Swap Two Values",
    difficulty: "easy",
    category: "variables",
    description: `Start with a = 10 and b = 20. Swap their values using a temporary variable, then print a and b on one line separated by a space.`,
    examples: [
      { output: `20 10` }
    ],
    constraints: ["Use a third variable for the swap","Do not hard-code the final print as \"20 10\""],
    hints: ["temp = a stores the old a","Then assign a = b and b = temp"],
    approach: `Save a in temp, move b into a, then restore the saved value into b before printing.`,
    starterCode: `a = 10
b = 20
# TODO: swap a and b, then print both
`,
    solutionCode: `a = 10
b = 20
temp = a
a = b
b = temp
print(a, b)`,
    tests: [
      { label: `Swapped values`, expectedStdout: `20 10` }
    ],
  }),

  buildScriptProblem({
    order: 37,
    slug: "circle-area",
    title: "Circle Area",
    difficulty: "easy",
    category: "variables",
    description: `Set pi = 3.14 and radius = 7. Compute area = pi * radius * radius and print it as an integer using int(area).`,
    examples: [
      { output: `153` }
    ],
    constraints: ["Use pi = 3.14 and radius = 7","Print the area as an integer"],
    hints: ["Area formula is pi times radius squared","Wrap the result with int() before printing"],
    approach: `Multiply pi by radius twice, cast to int, and print the result.`,
    starterCode: `pi = 3.14
radius = 7
# TODO: compute area and print as int
`,
    solutionCode: `pi = 3.14
radius = 7
area = pi * radius * radius
print(int(area))`,
    tests: [
      { label: `Integer area`, expectedStdout: `153` }
    ],
  }),

  buildScriptProblem({
    order: 38,
    slug: "full-name",
    title: "Build a Full Name",
    difficulty: "easy",
    category: "variables",
    description: `Set first = "Sam" and last = "Lee". Print their full name as Sam Lee (one space between).`,
    examples: [
      { output: `Sam Lee` }
    ],
    constraints: ["Use variables first and last","Output exactly: Sam Lee"],
    hints: ["Combine strings with + and a space","Or use print(first, last)"],
    approach: `Store the parts in variables and join them with a space in print.`,
    starterCode: `first = "Sam"
last = "Lee"
# TODO: print full name
`,
    solutionCode: `first = "Sam"
last = "Lee"
print(first + " " + last)`,
    tests: [
      { label: `Full name`, expectedStdout: `Sam Lee` }
    ],
  }),

  buildScriptProblem({
    order: 39,
    slug: "value-and-type",
    title: "Value and Type",
    difficulty: "easy",
    category: "variables",
    description: `Create x = 42. Print x on the first line and type(x) on the second line.`,
    examples: [
      { output: `42
<class 'int'>` }
    ],
    constraints: ["Print two separate lines","Use the type() function on the second line"],
    hints: ["Two print() calls","type(42) returns <class 'int'>"],
    approach: `Print the variable, then print its type on the next line.`,
    starterCode: `x = 42
# TODO: print x and its type on separate lines
`,
    solutionCode: `x = 42
print(x)
print(type(x))`,
    tests: [
      { label: `Value then type`, expectedStdout: `42
<class 'int'>` }
    ],
  }),

  buildScriptProblem({
    order: 40,
    slug: "greeting-fstring",
    title: "Greeting with f-string",
    difficulty: "easy",
    category: "strings",
    description: `Set name = "Mira". Print exactly: Hello, Mira! using an f-string.`,
    examples: [
      { output: `Hello, Mira!` }
    ],
    constraints: ["Use an f-string","Include the comma and exclamation mark"],
    hints: ["f\"Hello, {name}!\" embeds the variable","The f prefix goes before the opening quote"],
    approach: `Build the greeting with an f-string that inserts the name variable.`,
    starterCode: `name = "Mira"
# TODO: print Hello, Mira! with an f-string
`,
    solutionCode: `name = "Mira"
print(f"Hello, {name}!")`,
    tests: [
      { label: `f-string greeting`, expectedStdout: `Hello, Mira!` }
    ],
  }),

  buildScriptProblem({
    order: 41,
    slug: "word-length",
    title: "Word Length",
    difficulty: "easy",
    category: "strings",
    description: `Given word = "Python", print two lines:
1. The word itself
2. Its length as a number`,
    examples: [
      { output: `Python
6` }
    ],
    constraints: ["Print the word on line 1","Print len(word) on line 2"],
    hints: ["len() counts characters","Two separate print() calls"],
    approach: `Print the string, then print its length on the next line.`,
    starterCode: `word = "Python"
# TODO: print word and its length
`,
    solutionCode: `word = "Python"
print(word)
print(len(word))`,
    tests: [
      { label: `Word and length`, expectedStdout: `Python
6` }
    ],
  }),

  buildScriptProblem({
    order: 42,
    slug: "slice-username",
    title: "Slice a Username",
    difficulty: "easy",
    category: "strings",
    description: `Given email = "ana@school.com", print only the part before the @ symbol (ana).`,
    examples: [
      { output: `ana` }
    ],
    constraints: ["Use string slicing","Do not use split()"],
    hints: ["Find the index of @ with email.find(\"@\")","Slice from the start up to that index"],
    approach: `Locate @ and slice the substring before it.`,
    starterCode: `email = "ana@school.com"
# TODO: print the username before @
`,
    solutionCode: `email = "ana@school.com"
at = email.find("@")
print(email[:at])`,
    tests: [
      { label: `Username slice`, expectedStdout: `ana` }
    ],
  }),

  buildScriptProblem({
    order: 43,
    slug: "replace-hyphens",
    title: "Replace Spaces with Hyphens",
    difficulty: "easy",
    category: "strings",
    description: `Given slogan = "Learn Python", replace every space with a hyphen and print the result.`,
    examples: [
      { output: `Learn-Python` }
    ],
    constraints: ["Use the replace() method","Start from slogan = \"Learn Python\""],
    hints: ["slogan.replace(\" \", \"-\") returns a new string","Print the returned string"],
    approach: `Call replace on the slogan and print the transformed text.`,
    starterCode: `slogan = "Learn Python"
# TODO: replace spaces with hyphens and print
`,
    solutionCode: `slogan = "Learn Python"
print(slogan.replace(" ", "-"))`,
    tests: [
      { label: `Hyphenated slogan`, expectedStdout: `Learn-Python` }
    ],
  }),

  buildScriptProblem({
    order: 44,
    slug: "middle-character",
    title: "Middle Character",
    difficulty: "easy",
    category: "strings",
    description: `Given word = "Coding", print the character at index 2 (the third character).`,
    examples: [
      { output: `d` }
    ],
    constraints: ["Use indexing with [2]","Do not use loops"],
    hints: ["Python indexes start at 0","word[2] is the third letter"],
    approach: `Index into the string at position 2 and print that character.`,
    starterCode: `word = "Coding"
# TODO: print the character at index 2
`,
    solutionCode: `word = "Coding"
print(word[2])`,
    tests: [
      { label: `Third character`, expectedStdout: `d` }
    ],
  }),

  buildScriptProblem({
    order: 45,
    slug: "average-three",
    title: "Average of Three Numbers",
    difficulty: "easy",
    category: "numbers",
    description: `Compute and print the average of 10, 20, and 30 as a float (Python will show 20.0).`,
    examples: [
      { output: `20.0` }
    ],
    constraints: ["Use all three numbers in your calculation","Divide by 3 for the average"],
    hints: ["Add the numbers first","Average = total / 3"],
    approach: `Sum the three values and divide by three, then print.`,
    starterCode: `# TODO: print the average of 10, 20, and 30
`,
    solutionCode: `total = 10 + 20 + 30
print(total / 3)`,
    tests: [
      { label: `Average`, expectedStdout: `20.0` }
    ],
  }),

  buildScriptProblem({
    order: 46,
    slug: "power-calculation",
    title: "Power Calculation",
    difficulty: "easy",
    category: "numbers",
    description: `Set base = 3 and exp = 4. Print base raised to the power exp using **.`,
    examples: [
      { output: `81` }
    ],
    constraints: ["Use ** for exponentiation","Use base = 3 and exp = 4"],
    hints: ["3 ** 4 means 3 * 3 * 3 * 3","Store the result or print directly"],
    approach: `Apply the ** operator and print the product.`,
    starterCode: `base = 3
exp = 4
# TODO: print base ** exp
`,
    solutionCode: `base = 3
exp = 4
print(base ** exp)`,
    tests: [
      { label: `3 to the 4th`, expectedStdout: `81` }
    ],
  }),

  buildScriptProblem({
    order: 47,
    slug: "round-price",
    title: "Round a Price",
    difficulty: "easy",
    category: "numbers",
    description: `Given price = 19.967, print the price rounded to two decimal places using round(price, 2).`,
    examples: [
      { output: `19.97` }
    ],
    constraints: ["Use round with 2 as the second argument","Print the numeric result"],
    hints: ["round(19.967, 2) gives 19.97","Assign or print directly"],
    approach: `Round the float to two decimals and print.`,
    starterCode: `price = 19.967
# TODO: print price rounded to 2 decimals
`,
    solutionCode: `price = 19.967
print(round(price, 2))`,
    tests: [
      { label: `Rounded price`, expectedStdout: `19.97` }
    ],
  }),

  buildScriptProblem({
    order: 48,
    slug: "abs-difference",
    title: "Absolute Difference",
    difficulty: "easy",
    category: "numbers",
    description: `Set a = 8 and b = 15. Print the absolute difference between them using abs().`,
    examples: [
      { output: `7` }
    ],
    constraints: ["Use abs()","Use a = 8 and b = 15"],
    hints: ["abs(a - b) always gives a positive distance","Subtract in either order inside abs"],
    approach: `Subtract the smaller from the larger inside abs and print.`,
    starterCode: `a = 8
b = 15
# TODO: print abs(a - b)
`,
    solutionCode: `a = 8
b = 15
print(abs(a - b))`,
    tests: [
      { label: `Abs difference`, expectedStdout: `7` }
    ],
  }),

  buildScriptProblem({
    order: 49,
    slug: "integer-division-chain",
    title: "Integer Division Chain",
    difficulty: "easy",
    category: "numbers",
    description: `Print the result of 100 // 10 // 2 using integer division //.`,
    examples: [
      { output: `5` }
    ],
    constraints: ["Use // twice","Do not use regular /"],
    hints: ["100 // 10 is 10","Then 10 // 2 is 5"],
    approach: `Apply // left to right and print the final quotient.`,
    starterCode: `# TODO: print 100 // 10 // 2
`,
    solutionCode: `print(100 // 10 // 2)`,
    tests: [
      { label: `Chained //`, expectedStdout: `5` }
    ],
  }),

  buildScriptProblem({
    order: 50,
    slug: "list-endpoints",
    title: "List First and Last",
    difficulty: "easy",
    category: "lists",
    description: `Given nums = [10, 20, 30, 40], print the first element on line 1 and the last element on line 2.`,
    examples: [
      { output: `10
40` }
    ],
    constraints: ["Use indexing","Use nums[0] and nums[-1]"],
    hints: ["First item is index 0","Last item is index -1"],
    approach: `Index the first and last positions and print each on its own line.`,
    starterCode: `nums = [10, 20, 30, 40]
# TODO: print first and last elements
`,
    solutionCode: `nums = [10, 20, 30, 40]
print(nums[0])
print(nums[-1])`,
    tests: [
      { label: `First and last`, expectedStdout: `10
40` }
    ],
  }),

  buildScriptProblem({
    order: 51,
    slug: "list-pop-append",
    title: "Pop and Append",
    difficulty: "easy",
    category: "lists",
    description: `Start with items = [1, 2, 3]. Pop the last item, append 99, then print the list.`,
    examples: [
      { output: `[1, 2, 99]` }
    ],
    constraints: ["Use pop() and append(99)","Print the final list"],
    hints: ["pop() removes and returns the last element","append adds to the end"],
    approach: `Remove the tail, add 99, and print the mutated list.`,
    starterCode: `items = [1, 2, 3]
# TODO: pop last, append 99, print list
`,
    solutionCode: `items = [1, 2, 3]
items.pop()
items.append(99)
print(items)`,
    tests: [
      { label: `After pop and append`, expectedStdout: `[1, 2, 99]` }
    ],
  }),

  buildScriptProblem({
    order: 52,
    slug: "list-middle-slice",
    title: "Middle Slice",
    difficulty: "easy",
    category: "lists",
    description: `Given data = [0, 1, 2, 3, 4], print the middle three elements [1, 2, 3] using slicing.`,
    examples: [
      { output: `[1, 2, 3]` }
    ],
    constraints: ["Use a slice on data","Do not hard-code a new list literal in print"],
    hints: ["data[1:4] selects indices 1, 2, and 3","The end index is exclusive"],
    approach: `Slice from index 1 up to 4 and print the sublist.`,
    starterCode: `data = [0, 1, 2, 3, 4]
# TODO: print the middle three elements
`,
    solutionCode: `data = [0, 1, 2, 3, 4]
print(data[1:4])`,
    tests: [
      { label: `Middle slice`, expectedStdout: `[1, 2, 3]` }
    ],
  }),

  buildScriptProblem({
    order: 53,
    slug: "list-count-apples",
    title: "Count Apples",
    difficulty: "easy",
    category: "lists",
    description: `Given fruits = ["apple", "banana", "apple", "cherry"], print how many times "apple" appears.`,
    examples: [
      { output: `2` }
    ],
    constraints: ["Use the count() method","Print a number"],
    hints: ["fruits.count(\"apple\") returns an integer","Print the result of count"],
    approach: `Call count on the list for the target word and print the total.`,
    starterCode: `fruits = ["apple", "banana", "apple", "cherry"]
# TODO: print count of apple
`,
    solutionCode: `fruits = ["apple", "banana", "apple", "cherry"]
print(fruits.count("apple"))`,
    tests: [
      { label: `Apple count`, expectedStdout: `2` }
    ],
  }),

  buildScriptProblem({
    order: 54,
    slug: "list-extend-merge",
    title: "Extend Two Lists",
    difficulty: "easy",
    category: "lists",
    description: `Start with a = [1, 2] and b = [3, 4]. Extend a with b, then print a.`,
    examples: [
      { output: `[1, 2, 3, 4]` }
    ],
    constraints: ["Use extend(), not +","Print list a after extending"],
    hints: ["a.extend(b) adds each item from b to a","b stays unchanged"],
    approach: `Merge b into a with extend and print the updated list.`,
    starterCode: `a = [1, 2]
b = [3, 4]
# TODO: extend a with b and print a
`,
    solutionCode: `a = [1, 2]
b = [3, 4]
a.extend(b)
print(a)`,
    tests: [
      { label: `Extended list`, expectedStdout: `[1, 2, 3, 4]` }
    ],
  }),

  buildScriptProblem({
    order: 55,
    slug: "tuple-second-item",
    title: "Second Tuple Item",
    difficulty: "easy",
    category: "tuples",
    description: `Given colors = ("red", "green", "blue"), print the second color on its own line.`,
    examples: [
      { output: `green` }
    ],
    constraints: ["Use index 1","Print only one word"],
    hints: ["Tuple indexing works like lists","Index 1 is the second item"],
    approach: `Index the tuple at position 1 and print that color.`,
    starterCode: `colors = ("red", "green", "blue")
# TODO: print the second color
`,
    solutionCode: `colors = ("red", "green", "blue")
print(colors[1])`,
    tests: [
      { label: `Second color`, expectedStdout: `green` }
    ],
  }),

  buildScriptProblem({
    order: 56,
    slug: "tuple-count-twos",
    title: "Count Twos in Tuple",
    difficulty: "easy",
    category: "tuples",
    description: `Given nums = (1, 2, 2, 3), print how many times 2 appears using count().`,
    examples: [
      { output: `2` }
    ],
    constraints: ["Use nums.count(2)","Print the number only"],
    hints: ["Tuples support count like lists","count returns an integer"],
    approach: `Count occurrences of 2 in the tuple and print the result.`,
    starterCode: `nums = (1, 2, 2, 3)
# TODO: print count of 2
`,
    solutionCode: `nums = (1, 2, 2, 3)
print(nums.count(2))`,
    tests: [
      { label: `Count of 2`, expectedStdout: `2` }
    ],
  }),

  buildScriptProblem({
    order: 57,
    slug: "tuple-concatenate",
    title: "Concatenate Tuples",
    difficulty: "easy",
    category: "tuples",
    description: `Given left = (1, 2) and right = (3, 4), concatenate them with + and print the result.`,
    examples: [
      { output: `(1, 2, 3, 4)` }
    ],
    constraints: ["Use + to join tuples","Print the combined tuple"],
    hints: ["(1, 2) + (3, 4) makes (1, 2, 3, 4)","Tuples are immutable; + builds a new tuple"],
    approach: `Add the two tuples and print the new combined tuple.`,
    starterCode: `left = (1, 2)
right = (3, 4)
# TODO: concatenate and print
`,
    solutionCode: `left = (1, 2)
right = (3, 4)
print(left + right)`,
    tests: [
      { label: `Joined tuple`, expectedStdout: `(1, 2, 3, 4)` }
    ],
  }),

  buildScriptProblem({
    order: 58,
    slug: "tuple-unpack-sum",
    title: "Unpack and Sum",
    difficulty: "easy",
    category: "tuples",
    description: `Given triple = (4, 5, 6), unpack into a, b, and c, then print their sum.`,
    examples: [
      { output: `15` }
    ],
    constraints: ["Use a, b, c = triple","Print one number"],
    hints: ["Unpacking assigns each tuple element to a variable","Add a + b + c"],
    approach: `Unpack the three values and print their total.`,
    starterCode: `triple = (4, 5, 6)
# TODO: unpack and print the sum
`,
    solutionCode: `triple = (4, 5, 6)
a, b, c = triple
print(a + b + c)`,
    tests: [
      { label: `Unpack sum`, expectedStdout: `15` }
    ],
  }),

  buildScriptProblem({
    order: 59,
    slug: "dict-get-default",
    title: "Get with Default",
    difficulty: "easy",
    category: "dictionaries",
    description: `Given scores = {"math": 90}, print the value for "science" using get with default 0.`,
    examples: [
      { output: `0` }
    ],
    constraints: ["Use scores.get(\"science\", 0)","Print the result"],
    hints: ["get returns the default when the key is missing","science is not in the dict"],
    approach: `Safely look up a missing key with a default and print it.`,
    starterCode: `scores = {"math": 90}
# TODO: print science score with default 0
`,
    solutionCode: `scores = {"math": 90}
print(scores.get("science", 0))`,
    tests: [
      { label: `Default get`, expectedStdout: `0` }
    ],
  }),

  buildScriptProblem({
    order: 60,
    slug: "dict-sorted-keys",
    title: "Sorted Dictionary Keys",
    difficulty: "easy",
    category: "dictionaries",
    description: `Given data = {"b": 2, "a": 1, "c": 3}, print the keys as a sorted list.`,
    examples: [
      { output: `['a', 'b', 'c']` }
    ],
    constraints: ["Use sorted(data.keys()) or sorted(data)","Print a list"],
    hints: ["sorted returns a new list in order","Keys alone are enough for this task"],
    approach: `Sort the dictionary keys and print them as a list.`,
    starterCode: `data = {"b": 2, "a": 1, "c": 3}
# TODO: print sorted keys as a list
`,
    solutionCode: `data = {"b": 2, "a": 1, "c": 3}
print(sorted(data.keys()))`,
    tests: [
      { label: `Sorted keys`, expectedStdout: `['a', 'b', 'c']` }
    ],
  }),

  buildScriptProblem({
    order: 61,
    slug: "dict-add-field",
    title: "Add a Dictionary Field",
    difficulty: "easy",
    category: "dictionaries",
    description: `Start with user = {"id": 1}. Add user["name"] = "Bo", then print the full dictionary.`,
    examples: [
      { output: `{'id': 1, 'name': 'Bo'}` }
    ],
    constraints: ["Assign the new key after creating user","Print the entire dict"],
    hints: ["user[\"name\"] = \"Bo\" adds the key","print(user) shows all pairs"],
    approach: `Insert the name key and print the updated mapping.`,
    starterCode: `user = {"id": 1}
# TODO: add name Bo and print the dict
`,
    solutionCode: `user = {"id": 1}
user["name"] = "Bo"
print(user)`,
    tests: [
      { label: `Dict with name`, expectedStdout: `{'id': 1, 'name': 'Bo'}` }
    ],
  }),

  buildScriptProblem({
    order: 62,
    slug: "dict-values-total",
    title: "Sum Dictionary Values",
    difficulty: "easy",
    category: "dictionaries",
    description: `Given marks = {"quiz": 10, "exam": 20}, print the sum of all values.`,
    examples: [
      { output: `30` }
    ],
    constraints: ["Use sum(marks.values())","Print one number"],
    hints: ["values() returns the numbers in the dict","sum adds them together"],
    approach: `Collect all values and print their total with sum.`,
    starterCode: `marks = {"quiz": 10, "exam": 20}
# TODO: print sum of values
`,
    solutionCode: `marks = {"quiz": 10, "exam": 20}
print(sum(marks.values()))`,
    tests: [
      { label: `Values sum`, expectedStdout: `30` }
    ],
  }),

  buildScriptProblem({
    order: 63,
    slug: "set-add-remove",
    title: "Add and Discard",
    difficulty: "easy",
    category: "sets",
    description: `Start with tags = {1, 2, 3}. Add 4, discard 2, then print sorted(tags) as a list.`,
    examples: [
      { output: `[1, 3, 4]` }
    ],
    constraints: ["Use add and discard","Wrap with sorted() before printing"],
    hints: ["add inserts an element","discard removes 2 if present"],
    approach: `Mutate the set, then print a sorted list for stable output.`,
    starterCode: `tags = {1, 2, 3}
# TODO: add 4, discard 2, print sorted list
`,
    solutionCode: `tags = {1, 2, 3}
tags.add(4)
tags.discard(2)
print(sorted(tags))`,
    tests: [
      { label: `Updated set`, expectedStdout: `[1, 3, 4]` }
    ],
  }),

  buildScriptProblem({
    order: 64,
    slug: "set-subset-check",
    title: "Subset Check",
    difficulty: "easy",
    category: "sets",
    description: `Given small = {1, 2} and big = {1, 2, 3}, print True if small is a subset of big, else False.`,
    examples: [
      { output: `True` }
    ],
    constraints: ["Use <= for subset test","Print a boolean"],
    hints: ["small <= big checks every element of small is in big","Result is True or False"],
    approach: `Compare the sets with <= and print the boolean result.`,
    starterCode: `small = {1, 2}
big = {1, 2, 3}
# TODO: print whether small is a subset of big
`,
    solutionCode: `small = {1, 2}
big = {1, 2, 3}
print(small <= big)`,
    tests: [
      { label: `Is subset`, expectedStdout: `True` }
    ],
  }),

  buildScriptProblem({
    order: 65,
    slug: "set-symmetric-difference",
    title: "Symmetric Difference",
    difficulty: "easy",
    category: "sets",
    description: `Given a = {1, 2, 3} and b = {3, 4, 5}, print sorted symmetric difference as a list.`,
    examples: [
      { output: `[1, 2, 4, 5]` }
    ],
    constraints: ["Use ^ or symmetric_difference","Print with sorted()"],
    hints: ["a ^ b keeps elements in either set but not both","sorted makes output stable"],
    approach: `Compute symmetric difference and print it sorted.`,
    starterCode: `a = {1, 2, 3}
b = {3, 4, 5}
# TODO: print sorted symmetric difference
`,
    solutionCode: `a = {1, 2, 3}
b = {3, 4, 5}
print(sorted(a ^ b))`,
    tests: [
      { label: `Sym diff`, expectedStdout: `[1, 2, 4, 5]` }
    ],
  }),

  buildScriptProblem({
    order: 66,
    slug: "unique-sorted",
    title: "Unique Sorted Values",
    difficulty: "easy",
    category: "sets",
    description: `Given nums = [3, 1, 2, 2, 3], print unique values as a sorted list using set().`,
    examples: [
      { output: `[1, 2, 3]` }
    ],
    constraints: ["Use set() to remove duplicates","Print sorted(unique)"],
    hints: ["set(nums) drops duplicates","sorted converts back to an ordered list"],
    approach: `Build a set for uniqueness, sort it, and print.`,
    starterCode: `nums = [3, 1, 2, 2, 3]
# TODO: print sorted unique values
`,
    solutionCode: `nums = [3, 1, 2, 2, 3]
print(sorted(set(nums)))`,
    tests: [
      { label: `Unique sorted`, expectedStdout: `[1, 2, 3]` }
    ],
  }),

  buildScriptProblem({
    order: 67,
    slug: "even-or-odd",
    title: "Even or Odd",
    difficulty: "easy",
    category: "operators",
    description: `Set n = 14. Print "even" if n % 2 == 0, otherwise print "odd".`,
    examples: [
      { output: `even` }
    ],
    constraints: ["Use the modulo operator %","Use if / else"],
    hints: ["Even numbers have remainder 0 when divided by 2","Compare n % 2 to 0"],
    approach: `Test divisibility by 2 and print the matching label.`,
    starterCode: `n = 14
# TODO: print even or odd
`,
    solutionCode: `n = 14
if n % 2 == 0:
    print("even")
else:
    print("odd")`,
    tests: [
      { label: `14 is even`, expectedStdout: `even` }
    ],
  }),

  buildScriptProblem({
    order: 68,
    slug: "pick-larger",
    title: "Pick the Larger Value",
    difficulty: "easy",
    category: "operators",
    description: `Set x = 12 and y = 19. Print the larger value using an if statement (do not use max()).`,
    examples: [
      { output: `19` }
    ],
    constraints: ["Use if / else","Do not call max()"],
    hints: ["Compare x > y","Print the bigger number"],
    approach: `Compare the two numbers and print whichever is greater.`,
    starterCode: `x = 12
y = 19
# TODO: print the larger value
`,
    solutionCode: `x = 12
y = 19
if x > y:
    print(x)
else:
    print(y)`,
    tests: [
      { label: `Larger is 19`, expectedStdout: `19` }
    ],
  }),

  buildScriptProblem({
    order: 69,
    slug: "repeat-laugh",
    title: "Repeat a String",
    difficulty: "easy",
    category: "operators",
    description: `Print HaHaHa by repeating the string "Ha" three times with the * operator.`,
    examples: [
      { output: `HaHaHa` }
    ],
    constraints: ["Use \"Ha\" * 3","Print exactly one line"],
    hints: ["String * number repeats the string","\"Ha\" * 3 joins three copies"],
    approach: `Multiply the string by 3 and print the result.`,
    starterCode: `# TODO: print HaHaHa using string repetition
`,
    solutionCode: `print("Ha" * 3)`,
    tests: [
      { label: `Repeated Ha`, expectedStdout: `HaHaHa` }
    ],
  }),

  buildScriptProblem({
    order: 70,
    slug: "password-strength",
    title: "Password Length Check",
    difficulty: "easy",
    category: "operators",
    description: `Given password = "secret123", print True if len(password) >= 8, otherwise False.`,
    examples: [
      { output: `True` }
    ],
    constraints: ["Use len() and >=","Print a boolean"],
    hints: ["len counts characters","Compare the length to 8"],
    approach: `Measure the password length and print whether it meets the minimum.`,
    starterCode: `password = "secret123"
# TODO: print True if length >= 8
`,
    solutionCode: `password = "secret123"
print(len(password) >= 8)`,
    tests: [
      { label: `Long enough`, expectedStdout: `True` }
    ],
  }),

  buildScriptProblem({
    order: 71,
    slug: "leap-year-label",
    title: "Leap Year Label",
    difficulty: "easy",
    category: "conditionals",
    description: `Set year = 2024. Print "Leap" if the year is divisible by 4, otherwise print "Common".`,
    examples: [
      { output: `Leap` }
    ],
    constraints: ["Use if / else","Use year % 4 == 0"],
    hints: ["2024 divided by 4 has no remainder","Print one word"],
    approach: `Test divisibility by 4 and print the year type.`,
    starterCode: `year = 2024
# TODO: print Leap or Common
`,
    solutionCode: `year = 2024
if year % 4 == 0:
    print("Leap")
else:
    print("Common")`,
    tests: [
      { label: `2024 is leap`, expectedStdout: `Leap` }
    ],
  }),

  buildScriptProblem({
    order: 72,
    slug: "sign-label",
    title: "Sign Label",
    difficulty: "easy",
    category: "conditionals",
    description: `Set n = -5. Print "Positive" if n > 0, "Negative" if n < 0, otherwise "Zero".`,
    examples: [
      { output: `Negative` }
    ],
    constraints: ["Use if / elif / else","Use n = -5"],
    hints: ["Check > 0 first, then < 0","The else branch covers zero"],
    approach: `Branch on the sign of n and print the correct label.`,
    starterCode: `n = -5
# TODO: print Positive, Negative, or Zero
`,
    solutionCode: `n = -5
if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")`,
    tests: [
      { label: `Negative five`, expectedStdout: `Negative` }
    ],
  }),

  buildScriptProblem({
    order: 73,
    slug: "weekend-check",
    title: "Weekend Check",
    difficulty: "easy",
    category: "conditionals",
    description: `Set day = "Saturday". Print "Weekend" if day is "Saturday" or "Sunday", otherwise print "Weekday".`,
    examples: [
      { output: `Weekend` }
    ],
    constraints: ["Use if / else","Compare day to both weekend names"],
    hints: ["Use or to test two strings","day == \"Saturday\" or day == \"Sunday\""],
    approach: `Test whether day is a weekend name and print the category.`,
    starterCode: `day = "Saturday"
# TODO: print Weekend or Weekday
`,
    solutionCode: `day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("Weekend")
else:
    print("Weekday")`,
    tests: [
      { label: `Saturday weekend`, expectedStdout: `Weekend` }
    ],
  }),

  buildScriptProblem({
    order: 74,
    slug: "shipping-fee",
    title: "Shipping Fee",
    difficulty: "easy",
    category: "conditionals",
    description: `Set order_total = 45. Print 0 if order_total >= 50 (free shipping), otherwise print 5 (standard fee).`,
    examples: [
      { output: `5` }
    ],
    constraints: ["Use if / else","Print only the fee number"],
    hints: ["45 is below 50","The fee is 5 for smaller orders"],
    approach: `Compare the order total to the free-shipping threshold and print the fee.`,
    starterCode: `order_total = 45
# TODO: print 0 or 5 shipping fee
`,
    solutionCode: `order_total = 45
if order_total >= 50:
    print(0)
else:
    print(5)`,
    tests: [
      { label: `Fee for 45`, expectedStdout: `5` }
    ],
  }),

  buildScriptProblem({
    order: 75,
    slug: "countdown-loop",
    title: "Countdown Loop",
    difficulty: "easy",
    category: "loops",
    description: `Print a countdown from 3 down to 1, one number per line, using a for loop and range.`,
    examples: [
      { output: `3
2
1` }
    ],
    constraints: ["Use for with range","Print 3, then 2, then 1"],
    hints: ["range(3, 0, -1) counts backward","One print per iteration"],
    approach: `Loop downward from 3 to 1 and print each value.`,
    starterCode: `# TODO: print 3, 2, 1 on separate lines
`,
    solutionCode: `for i in range(3, 0, -1):
    print(i)`,
    tests: [
      { label: `Countdown`, expectedStdout: `3
2
1` }
    ],
  }),

  buildScriptProblem({
    order: 76,
    slug: "star-row",
    title: "Row of Stars",
    difficulty: "easy",
    category: "loops",
    description: `Print a single line of four asterisks using a for loop (not string *). Use print("*", end="") inside the loop, then print() after.`,
    examples: [
      { output: `****` }
    ],
    constraints: ["Use a for loop","End with one full line of four stars"],
    hints: ["print(\"*\", end=\"\") stays on the same line","Call print() once after the loop for the newline"],
    approach: `Loop four times printing stars without newlines, then finish the line.`,
    starterCode: `# TODO: print **** using a loop
`,
    solutionCode: `for _ in range(4):
    print("*", end="")
print()`,
    tests: [
      { label: `Four stars`, expectedStdout: `****` }
    ],
  }),

  buildScriptProblem({
    order: 77,
    slug: "squares-one-to-five",
    title: "Squares One to Five",
    difficulty: "easy",
    category: "loops",
    description: `Print the squares of 1 through 5, one per line: 1, 4, 9, 16, 25.`,
    examples: [
      { output: `1
4
9
16
25` }
    ],
    constraints: ["Use a for loop","Print i * i each iteration"],
    hints: ["for i in range(1, 6)","Square is i * i"],
    approach: `Loop from 1 to 5 and print each squared value on its own line.`,
    starterCode: `# TODO: print squares of 1..5
`,
    solutionCode: `for i in range(1, 6):
    print(i * i)`,
    tests: [
      { label: `Squares`, expectedStdout: `1
4
9
16
25` }
    ],
  }),

  buildScriptProblem({
    order: 78,
    slug: "sum-until-zero",
    title: "Sum Until Zero",
    difficulty: "easy",
    category: "loops",
    description: `Read integers from input until a line containing 0. Print the sum of all numbers before the 0.

Sample stdin:
3
5
0`,
    examples: [
      { input: `3
5
0`, output: `8` }
    ],
    constraints: ["Use a while loop","Stop when input converts to 0","Do not include 0 in the sum"],
    hints: ["n = int(input()) inside the loop","Break when n == 0"],
    approach: `Accumulate each non-zero input until 0 ends the loop, then print the total.`,
    starterCode: `# TODO: read ints until 0 and print their sum
`,
    solutionCode: `total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total += n
print(total)`,
    tests: [
      { label: `Sum before zero`, expectedStdout: `8`, stdin: `3
5
0` }
    ],
  }),

  buildBasicsProblem({
    order: 79,
    slug: "add-two",
    title: "Add Two Numbers",
    difficulty: "easy",
    category: "functions",
    description: `Write a function add(a, b) that returns the sum of a and b.`,
    examples: [
      { input: `add(2, 3)`, output: `5` }
    ],
    constraints: ["Return the result, do not print","Works with integers"],
    hints: ["Use return a + b","No print needed"],
    approach: `Return the sum of the two parameters.`,
    starterCode: `def add(a, b):
    # Write your code here
    pass
`,
    solutionCode: `def add(a, b):
    return a + b
`,
    tests: [
      { label: `2 + 3`, call: `add(2, 3)`, expected: `5` },
      { label: `10 + -4`, call: `add(10, -4)`, expected: `6` }
    ],
  }),

  buildBasicsProblem({
    order: 80,
    slug: "is-even",
    title: "Is Even",
    difficulty: "easy",
    category: "functions",
    description: `Write a function is_even(n) that returns True if n is even, otherwise False.`,
    examples: [
      { input: `is_even(4)`, output: `True` }
    ],
    constraints: ["Use modulo %","Return a boolean"],
    hints: ["n % 2 == 0 means even","Return True or False directly"],
    approach: `Test divisibility by 2 and return the boolean result.`,
    starterCode: `def is_even(n):
    # Write your code here
    pass
`,
    solutionCode: `def is_even(n):
    return n % 2 == 0
`,
    tests: [
      { label: `4 is even`, call: `is_even(4)`, expected: `True` },
      { label: `7 is odd`, call: `is_even(7)`, expected: `False` }
    ],
  }),

  buildBasicsProblem({
    order: 81,
    slug: "double-each",
    title: "Double Each Item",
    difficulty: "easy",
    category: "functions",
    description: `Write a function double_each(nums) that returns a new list with every number doubled.`,
    examples: [
      { input: `double_each([1, 2, 3])`, output: `[2, 4, 6]` }
    ],
    constraints: ["Return a new list","Do not modify the input list in place"],
    hints: ["Loop or use a list comprehension","Append n * 2 for each n"],
    approach: `Build a new list where each element is twice the original.`,
    starterCode: `def double_each(nums):
    # Write your code here
    pass
`,
    solutionCode: `def double_each(nums):
    result = []
    for n in nums:
        result.append(n * 2)
    return result
`,
    tests: [
      { label: `Double small list`, call: `double_each([1, 2, 3])`, expected: `[2, 4, 6]` },
      { label: `Double empty`, call: `double_each([])`, expected: `[]` }
    ],
  }),

  buildBasicsProblem({
    order: 82,
    slug: "greet-user",
    title: "Greet User",
    difficulty: "easy",
    category: "functions",
    description: `Write a function greet(name) that returns the string Hello, {name}! (with comma and exclamation).`,
    examples: [
      { input: `greet('Ana')`, output: `Hello, Ana!` }
    ],
    constraints: ["Return a string","Use the exact greeting format"],
    hints: ["An f-string works well","Include comma after Hello"],
    approach: `Format a greeting string with the provided name and return it.`,
    starterCode: `def greet(name):
    # Write your code here
    pass
`,
    solutionCode: `def greet(name):
    return f"Hello, {name}!"
`,
    tests: [
      { label: `Greet Ana`, call: `greet('Ana')`, expected: `'Hello, Ana!'` },
      { label: `Greet Bo`, call: `greet('Bo')`, expected: `'Hello, Bo!'` }
    ],
  }),

  buildBasicsProblem({
    order: 83,
    slug: "max-of-three",
    title: "Maximum of Three",
    difficulty: "easy",
    category: "functions",
    description: `Write a function maximum(a, b, c) that returns the largest of the three numbers.`,
    examples: [
      { input: `maximum(1, 5, 3)`, output: `5` }
    ],
    constraints: ["Do not use built-in max()","Use if statements"],
    hints: ["Compare pairs step by step","Track the largest seen so far"],
    approach: `Compare values with if/elif and return the greatest.`,
    starterCode: `def maximum(a, b, c):
    # Write your code here
    pass
`,
    solutionCode: `def maximum(a, b, c):
    if a >= b and a >= c:
        return a
    if b >= c:
        return b
    return c
`,
    tests: [
      { label: `Max of 1,5,3`, call: `maximum(1, 5, 3)`, expected: `5` },
      { label: `Max with tie`, call: `maximum(2, 2, 1)`, expected: `2` }
    ],
  }),

  buildBasicsProblem({
    order: 84,
    slug: "count-vowels",
    title: "Count Vowels",
    difficulty: "easy",
    category: "functions",
    description: `Write a function count_vowels(text) that returns how many vowels (a, e, i, o, u) appear in text. Count both lower and upper case.`,
    examples: [
      { input: `count_vowels('Hello')`, output: `2` }
    ],
    constraints: ["Check a, e, i, o, u in either case","Return an integer"],
    hints: ["Loop over characters","Use char.lower() in \"aeiou\""],
    approach: `Scan each character and increment when it is a vowel.`,
    starterCode: `def count_vowels(text):
    # Write your code here
    pass
`,
    solutionCode: `def count_vowels(text):
    count = 0
    for char in text:
        if char.lower() in "aeiou":
            count += 1
    return count
`,
    tests: [
      { label: `Hello`, call: `count_vowels('Hello')`, expected: `2` },
      { label: `Rhythm`, call: `count_vowels('Rhythm')`, expected: `0` }
    ],
  }),

  buildBasicsProblem({
    order: 85,
    slug: "reverse-string-fn",
    title: "Reverse a String",
    difficulty: "easy",
    category: "functions",
    description: `Write a function reverse_string(s) that returns s reversed.`,
    examples: [
      { input: `reverse_string('abc')`, output: `cba` }
    ],
    constraints: ["Return the reversed string","Do not print"],
    hints: ["Slicing s[::-1] reverses a string","Return that slice"],
    approach: `Use slice notation to reverse and return the result.`,
    starterCode: `def reverse_string(s):
    # Write your code here
    pass
`,
    solutionCode: `def reverse_string(s):
    return s[::-1]
`,
    tests: [
      { label: `Reverse abc`, call: `reverse_string('abc')`, expected: `'cba'` },
      { label: `Reverse empty`, call: `reverse_string('')`, expected: `''` }
    ],
  }),

  buildBasicsProblem({
    order: 86,
    slug: "square-number",
    title: "Square a Number",
    difficulty: "easy",
    category: "functions",
    description: `Write a function square(n) that returns n multiplied by itself.`,
    examples: [
      { input: `square(5)`, output: `25` }
    ],
    constraints: ["Return the result","Use * or **"],
    hints: ["n * n or n ** 2","Return, do not print"],
    approach: `Multiply n by itself and return the product.`,
    starterCode: `def square(n):
    # Write your code here
    pass
`,
    solutionCode: `def square(n):
    return n * n
`,
    tests: [
      { label: `Square 5`, call: `square(5)`, expected: `25` },
      { label: `Square 0`, call: `square(0)`, expected: `0` }
    ],
  }),

  buildBasicsProblem({
    order: 87,
    slug: "list-average",
    title: "List Average",
    difficulty: "easy",
    category: "functions",
    description: `Write a function average(nums) that returns the arithmetic mean of a non-empty list of numbers.`,
    examples: [
      { input: `average([10, 20, 30, 40])`, output: `25.0` }
    ],
    constraints: ["Return a float","Assume nums is not empty"],
    hints: ["Sum all items and divide by len","sum(nums) / len(nums)"],
    approach: `Divide the total by the count and return the mean.`,
    starterCode: `def average(nums):
    # Write your code here
    pass
`,
    solutionCode: `def average(nums):
    return sum(nums) / len(nums)
`,
    tests: [
      { label: `Average of four`, call: `average([10, 20, 30, 40])`, expected: `25.0` },
      { label: `Average of one`, call: `average([7])`, expected: `7.0` }
    ],
  }),

  buildBasicsProblem({
    order: 88,
    slug: "celsius-to-fahrenheit",
    title: "Celsius to Fahrenheit",
    difficulty: "easy",
    category: "functions",
    description: `Write a function to_fahrenheit(c) that converts Celsius c to Fahrenheit using F = c * 9/5 + 32. Return a float.`,
    examples: [
      { input: `to_fahrenheit(0)`, output: `32.0` }
    ],
    constraints: ["Use the formula F = c * 9/5 + 32","Return the value"],
    hints: ["Multiply by 9/5 first","Then add 32"],
    approach: `Apply the standard conversion formula and return Fahrenheit.`,
    starterCode: `def to_fahrenheit(c):
    # Write your code here
    pass
`,
    solutionCode: `def to_fahrenheit(c):
    return c * 9 / 5 + 32
`,
    tests: [
      { label: `Freezing point`, call: `to_fahrenheit(0)`, expected: `32.0` },
      { label: `Boiling point`, call: `to_fahrenheit(100)`, expected: `212.0` }
    ],
  }),
];
