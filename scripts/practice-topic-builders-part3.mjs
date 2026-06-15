import { seg, task } from "./practice-topic-builders.mjs";

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

// ─── Module 6: Tuples ───────────────────────────────────────────────────────

function tupleTasks(_id, title, mutable = false) {
  const container = mutable ? "list" : "tuple";
  const create = mutable ? "[1, 2, 3]" : "(1, 2, 3)";
  const createSyntax = mutable ? "[10, 20]" : "(10, 20)";
  return [
    task("create", `${title}: Create a Tuple`, "easy", `Create t = ${create} and print t.`, create.replace("(", "[").replace(")", "]").replace(", ", ", ") || create, { outputOnly: true, requiresVariables: ["t"], introSegments: [seg("text", `Create ${createSyntax} — ${mutable ? "lists use []" : "tuples use ()"}.`)], editorPlaceholder: "# create tuple", hints: [`t = ${create}\\nprint(t)`], constraints: [`Output: ${create}`], successDetail: mutable ? "Correct!" : "Correct! Parentheses create tuples." }),
    task("index", `${title}: Index a Tuple`, "easy", 'Set t=("a","b","c"), print t[1].', "b", { outputOnly: true, requiresVariables: ["t"], requiresListAccess: true, introSegments: [seg("text", "Tuple indexing works like lists: "), seg("code", "t[1]"), seg("text", ".")], editorPlaceholder: "# t[1]", hints: ['t = ("a","b","c")\\nprint(t[1])'], constraints: ["Output: b"], successDetail: "Correct!" }),
    task("immutable", `${title}: Tuple Immutability`, "medium", 'Set t=(1,2), try concept: print t[0] (read-only access).', "1", { outputOnly: true, requiresVariables: ["t"], requiresListAccess: true, introSegments: [seg("text", "Tuples are "), seg("code", "immutable"), seg("text", " — you can read but not change items.")], editorPlaceholder: "# read t[0]", hints: ["t = (1,2)\\nprint(t[0])"], constraints: ["Output: 1"], successDetail: "Correct! Reading tuple items is allowed." }),
    task("len-t", `${title}: Tuple Length`, "medium", "Set t=(1,2,3,4), print len(t).", "4", { outputOnly: true, requiresVariables: ["t"], introSegments: [seg("text", "Use len() on a tuple.")], editorPlaceholder: "# len(t)", hints: ["t = (1,2,3,4)\\nprint(len(t))"], constraints: ["Output: 4"], successDetail: "Correct!" }),
    task("slice-t", `${title}: Slice a Tuple`, "medium", 'Set t=(0,1,2,3), print t[1:3].', "(1, 2)", { outputOnly: true, requiresVariables: ["t"], requiresListAccess: true, introSegments: [seg("text", "Slice tuples like lists: "), seg("code", "t[1:3]"), seg("text", ".")], editorPlaceholder: "# slice", hints: ["t = (0,1,2,3)\\nprint(t[1:3])"], constraints: ["Output: (1, 2)"], successDetail: "Correct!" }),
    task("count-t", `${title}: count()`, "hard", 'Print (1,2,2,3).count(2).', "2", printChallenge([seg("text", "Use "), seg("code", ".count()"), seg("text", " on a tuple.")], "2", "# count", "print((1,2,2,3).count(2))", "Correct! count() works on tuples.")),
    task("index-t", `${title}: index()`, "hard", 'Print ("x","y","z").index("y").', "1", printChallenge([seg("text", "Use "), seg("code", '.index("y")'), seg("text", ".")], "1", "# index", 'print(("x","y","z").index("y"))', "Correct!" )),
  ];
}

export const tupleSyntaxTasks = (id, t) => [
  task("create-tuple", `${t}: Create a Tuple`, "easy", "Create t = (1, 2, 3) and print t.", "(1, 2, 3)", { outputOnly: true, requiresVariables: ["t"], introSegments: [seg("text", "Tuples use "), seg("code", "( )"), seg("text", " parentheses.")], editorPlaceholder: "# t = (1,2,3)", hints: ["t = (1, 2, 3)\\nprint(t)"], constraints: ["Output: (1, 2, 3)"], successDetail: "Correct! Parentheses create tuples." }),
  ...tupleTasks(id, t).slice(1),
];
export const tuplePropertiesTasks = (id, t) => [
  task("ordered-t", `${t}: Ordered`, "easy", "Print (3,1,2) — order preserved.", "(3, 1, 2)", printChallenge([seg("text", "Tuples preserve order.")], "(3, 1, 2)", "# tuple", "print((3,1,2))", "Correct!" )),
  task("immutable-t", `${t}: Immutable`, "easy", "Print len((1,2,3)).", "3", printChallenge([seg("text", "Tuples cannot be changed after creation.")], "3", "# len", "print(len((1,2,3)))", "Correct! Tuples are immutable." )),
  task("dup-t", `${t}: Duplicates`, "easy", "Print (1,1,2).", "(1, 1, 2)", printChallenge([seg("text", "Tuples allow duplicates.")], "(1, 1, 2)", "# dup", "print((1,1,2))", "Correct!" )),
  task("mixed-t", `${t}: Mixed Types`, "medium", 'Print (1, "a", True).', "(1, 'a', True)", printChallenge([seg("text", "Tuples can hold mixed types.")], "(1, 'a', True)", "# mixed", 'print((1, "a", True))', "Correct!" )),
  task("single-t", `${t}: Single Item`, "medium", "Print (42,) — note the comma.", "(42,)", printChallenge([seg("text", "Single-item tuple needs "), seg("code", "(42,)"), seg("text", " comma.")], "(42,)", "# (42,)", "print((42,))", "Correct!" )),
  task("no-brackets", `${t}: Without Parentheses`, "hard", "Set t = 1, 2, 3 (tuple packing), print t.", "(1, 2, 3)", { outputOnly: true, requiresVariables: ["t"], introSegments: [seg("text", "Comma creates a tuple: "), seg("code", "t = 1, 2, 3"), seg("text", ".")], editorPlaceholder: "# packing", hints: ["t = 1, 2, 3\\nprint(t)"], constraints: ["Output: (1, 2, 3)"], successDetail: "Correct! Tuple packing with commas." }),
  task("unpack-t", `${t}: Unpacking`, "hard", "Set t = (10, 20), unpack to a, b = t, print a.", "10", { outputOnly: true, requiresVariables: ["a"], introSegments: [seg("text", "Unpack tuple into variables.")], editorPlaceholder: "# unpack", hints: ["t = (10, 20)\\na, b = t\\nprint(a)"], constraints: ["Output: 10"], successDetail: "Correct!" }),
];
export const tupleIndexTasks = (id, t) => tupleTasks(id, t);
export const tupleSliceTasks = (id, t) => tupleTasks(id, t);
export const tupleMethodTasks = (id, t) => tupleTasks(id, t);

// ─── Module 7: Sets ─────────────────────────────────────────────────────────

export function setSyntaxTasks(_id, title) {
  return [
    task("create-set", `${title}: Create a Set`, "easy", "Create s = {1, 2, 3} and print s (order may vary).", "{1, 2, 3}", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Curly braces create a set (no key:value).")], editorPlaceholder: "# s = {1,2,3}", hints: ["s = {1, 2, 3}\\nprint(s)"], constraints: ["Create set {1,2,3}"], successDetail: "Correct!" }),
    task("set-func", `${title}: set() Function`, "easy", "Print set([1,2,2,3]).", "{1, 2, 3}", printChallenge([seg("text", "Use "), seg("code", "set()"), seg("text", " to remove duplicates.")], "{1, 2, 3}", "# set()", "print(set([1,2,2,3]))", "Correct! Sets remove duplicates.")),
    task("unique", `${title}: Unique Values`, "easy", "Print len({1,1,2,2,3}).", "3", printChallenge([seg("text", "Sets only keep unique values.")], "3", "# unique", "print(len({1,1,2,2,3}))", "Correct!" )),
    task("empty-set", `${title}: Empty Set`, "medium", "Create s = set(), print len(s).", "0", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Use "), seg("code", "set()"), seg("text", " for empty set — not {}.")], editorPlaceholder: "# set()", hints: ["s = set()\\nprint(len(s))"], constraints: ["Output: 0"], successDetail: "Correct! {} is a dict, not empty set." }),
    task("in-set", `${title}: Membership`, "medium", "Print 2 in {1,2,3}.", "True", printChallenge([seg("text", "Check membership with "), seg("code", "in"), seg("text", ".")], "True", "# in set", "print(2 in {1,2,3})", "Correct!" )),
    task("mixed-set", `${title}: Mixed Types`, "hard", "Print {1, \"a\"} — sets can mix types.", "{'a', 1}", { outputOnly: true, introSegments: [seg("text", "Sets can hold different types.")], editorPlaceholder: "# mixed set", hints: ['print({1, "a"})'], constraints: ["Create set with int and str"], successDetail: "Correct!" }),
    task("from-string", `${title}: Set from String`, "hard", 'Print set("hello") — unique letters.', "{'h', 'e', 'l', 'o'}", { outputOnly: true, introSegments: [seg("text", "set(string) gives unique characters.")], editorPlaceholder: '# set("hello")', hints: ['print(set("hello"))'], constraints: ["Use set on a string"], successDetail: "Correct!" }),
  ];
}

export function setUpdateTasks(_id, title) {
  return [
    task("add", `${title}: add()`, "easy", "Set s={1}, s.add(2), print s.", "{1, 2}", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Use "), seg("code", ".add()"), seg("text", " to add one item.")], editorPlaceholder: "# add", hints: ["s = {1}\\ns.add(2)\\nprint(s)"], constraints: ["Output contains 1 and 2"], successDetail: "Correct!" }),
    task("remove", `${title}: remove()`, "easy", "Set s={1,2,3}, s.remove(2), print s.", "{1, 3}", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Use "), seg("code", ".remove()"), seg("text", ".")], editorPlaceholder: "# remove", hints: ["s = {1,2,3}\\ns.remove(2)\\nprint(s)"], constraints: ["Output: {1, 3}"], successDetail: "Correct!" }),
    task("discard", `${title}: discard()`, "medium", "Set s={1,2}, s.discard(3), print s.", "{1, 2}", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "discard() removes if present, no error if missing.")], editorPlaceholder: "# discard", hints: ["s = {1,2}\\ns.discard(3)\\nprint(s)"], constraints: ["Output: {1, 2}"], successDetail: "Correct!" }),
    task("update", `${title}: update()`, "medium", "Set s={1}, s.update({2,3}), print s.", "{1, 2, 3}", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Use "), seg("code", ".update()"), seg("text", " to add multiple.")], editorPlaceholder: "# update", hints: ["s = {1}\\ns.update({2,3})\\nprint(s)"], constraints: ["Output: {1, 2, 3}"], successDetail: "Correct!" }),
    task("pop-set", `${title}: pop()`, "hard", "Set s={1,2,3}, print s.pop() — removes arbitrary item.", "1", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "pop() removes and returns any item.")], editorPlaceholder: "# pop", hints: ["s = {1,2,3}\\nprint(s.pop())"], constraints: ["Print one item from set"], successDetail: "Correct!" }),
    task("clear-set", `${title}: clear()`, "hard", "Set s={1,2}, s.clear(), print s.", "set()", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "clear() empties the set.")], editorPlaceholder: "# clear", hints: ["s = {1,2}\\ns.clear()\\nprint(s)"], constraints: ["Output: set()"], successDetail: "Correct!" }),
    task("add-dup", `${title}: Add Duplicate`, "hard", "Set s={1,2}, s.add(2), print s.", "{1, 2}", { outputOnly: true, requiresVariables: ["s"], introSegments: [seg("text", "Adding duplicate has no effect.")], editorPlaceholder: "# add dup", hints: ["s = {1,2}\\ns.add(2)\\nprint(s)"], constraints: ["Output: {1, 2}"], successDetail: "Correct! Sets ignore duplicates." }),
  ];
}

export function setOperationsTasks(_id, title) {
  const ops = [
    ["union", "Union |", "easy", "Print {1,2} | {2,3}.", "{1, 2, 3}", "{1,2} | {2,3}"],
    ["intersection", "Intersection &", "easy", "Print {1,2,3} & {2,3,4}.", "{2, 3}", "{1,2,3} & {2,3,4}"],
    ["difference", "Difference -", "medium", "Print {1,2,3} - {2}.", "{1, 3}", "{1,2,3} - {2}"],
    ["symmetric", "Symmetric ^", "medium", "Print {1,2} ^ {2,3}.", "{1, 3}", "{1,2} ^ {2,3}"],
    ["subset", "Subset <=", "medium", "Print {1,2} <= {1,2,3}.", "True", "{1,2} <= {1,2,3}"],
    ["superset", "Superset >=", "hard", "Print {1,2,3} >= {1,2}.", "True", "{1,2,3} >= {1,2}"],
    ["disjoint", "Disjoint isdisjoint", "hard", "Print {1,2}.isdisjoint({3,4}).", "True", "{1,2}.isdisjoint({3,4})"],
  ];
  return ops.map(([slug, name, diff, desc, expected, expr]) =>
    task(slug, `${title}: ${name}`, diff, desc, expected,
      printChallenge([seg("text", "Print "), seg("code", expr), seg("text", ".")], expected, `# ${expr}`, `print(${expr})`, `Correct! ${expr} = ${expected}.`))
  );
}

export function setMethodTasks(_id, title) {
  return setOperationsTasks(_id, title);
}

// ─── Module 8: Dictionaries ─────────────────────────────────────────────────

export function dictSyntaxTasks(_id, title) {
  return [
    task("create-dict", `${title}: Create a Dict`, "easy", 'Create d = {"name": "Ana", "age": 20} and print d["name"].', "Ana", { outputOnly: true, requiresVariables: ["d"], requiresDictKey: "name", introSegments: [seg("text", "Dictionaries use "), seg("code", "{key: value}"), seg("text", " syntax.")], editorPlaceholder: "# create dict", hints: ['d = {"name":"Ana","age":20}\\nprint(d["name"])'], constraints: ["Output: Ana"], successDetail: "Correct!" }),
    task("empty-dict", `${title}: Empty Dict`, "easy", "Create d = {}, print len(d).", "0", { outputOnly: true, requiresVariables: ["d"], introSegments: [seg("text", "Empty dict with "), seg("code", "{}"), seg("text", ".")], editorPlaceholder: "# {}", hints: ["d = {}\\nprint(len(d))"], constraints: ["Output: 0"], successDetail: "Correct!" }),
    task("dict-func", `${title}: dict() Constructor`, "easy", 'Print dict(name="Bob", age=25)["name"].', "Bob", printChallenge([seg("text", "Use "), seg("code", "dict()"), seg("text", " with keyword args.")], "Bob", "# dict()", 'print(dict(name="Bob", age=25)["name"])', "Correct!" )),
    task("access-bracket", `${title}: Bracket Access`, "medium", 'Set d={"x":10}, print d["x"].', "10", { outputOnly: true, requiresVariables: ["d"], requiresDictKey: "x", introSegments: [seg("text", "Access with "), seg("code", 'd["key"]'), seg("text", ".")], editorPlaceholder: "# d[key]", hints: ['d = {"x":10}\\nprint(d["x"])'], constraints: ["Output: 10"], successDetail: "Correct!" }),
    task("nested-dict", `${title}: Nested Dict`, "medium", 'Set d={"user":{"name":"Kim"}}, print d["user"]["name"].', "Kim", { outputOnly: true, requiresVariables: ["d"], requiresListAccess: true, introSegments: [seg("text", "Access nested dict values.")], editorPlaceholder: "# nested", hints: ['d = {"user":{"name":"Kim"}}\\nprint(d["user"]["name"])'], constraints: ["Output: Kim"], successDetail: "Correct!" }),
    task("change-value", `${title}: Change Value`, "hard", 'Set d={"a":1}, d["a"]=2, print d["a"].', "2", { outputOnly: true, requiresVariables: ["d"], requiresDictKey: "a", introSegments: [seg("text", "Dicts are mutable — change values.")], editorPlaceholder: "# change", hints: ['d = {"a":1}\\nd["a"]=2\\nprint(d["a"])'], constraints: ["Output: 2"], successDetail: "Correct!" }),
    task("add-key", `${title}: Add New Key`, "hard", 'Set d={"a":1}, d["b"]=2, print d["b"].', "2", { outputOnly: true, requiresVariables: ["d"], requiresDictKey: "b", introSegments: [seg("text", "Add new key-value pairs.")], editorPlaceholder: "# add key", hints: ['d = {"a":1}\\nd["b"]=2\\nprint(d["b"])'], constraints: ["Output: 2"], successDetail: "Correct!" }),
  ];
}

export function dictKeysValuesTasks(_id, title) {
  return [
    task("keys", `${title}: keys()`, "easy", 'Set d={"a":1,"b":2}, print list(d.keys()).', "['a', 'b']", { outputOnly: true, requiresVariables: ["d"], requiresDictKey: "a", introSegments: [seg("text", "Use "), seg("code", ".keys()"), seg("text", " to get all keys.")], editorPlaceholder: "# keys", hints: ['d = {"a":1,"b":2}\\nprint(list(d.keys()))'], constraints: ["Print keys as list"], successDetail: "Correct!" }),
    task("values", `${title}: values()`, "easy", 'Set d={"a":1,"b":2}, print list(d.values()).', "[1, 2]", { outputOnly: true, requiresVariables: ["d"], introSegments: [seg("text", "Use "), seg("code", ".values()"), seg("text", ".")], editorPlaceholder: "# values", hints: ['d = {"a":1,"b":2}\\nprint(list(d.values()))'], constraints: ["Print values"], successDetail: "Correct!" }),
    task("items", `${title}: items()`, "medium", 'Set d={"x":1}, print list(d.items()).', "[('x', 1)]", { outputOnly: true, requiresVariables: ["d"], introSegments: [seg("text", "Use "), seg("code", ".items()"), seg("text", " for key-value pairs.")], editorPlaceholder: "# items", hints: ['d = {"x":1}\\nprint(list(d.items()))'], constraints: ["Print items"], successDetail: "Correct!" }),
    task("get", `${title}: get()`, "medium", 'Print {"a":1}.get("b", 0).', "0", printChallenge([seg("text", "Use "), seg("code", '.get("b", 0)'), seg("text", " for safe access.")], "0", "# get", 'print({"a":1}.get("b", 0))', "Correct! get() returns default if key missing.")),
    task("in-dict", `${title}: Key Membership`, "medium", 'Print "name" in {"name":"Ana"}.', "True", printChallenge([seg("text", "Check if key exists with "), seg("code", "in"), seg("text", ".")], "True", "# in dict", 'print("name" in {"name":"Ana"})', "Correct!" )),
    task("len-dict", `${title}: Dict Length`, "hard", 'Print len({"a":1,"b":2,"c":3}).', "3", printChallenge([seg("text", "len() counts key-value pairs.")], "3", "# len", 'print(len({"a":1,"b":2,"c":3}))', "Correct!" )),
    task("topic-lookup", `${title}: Topic Lookup`, "hard", 'Create d={"topic":"Python"}, print d["topic"].', "Python", { outputOnly: true, requiresDictKey: "topic", introSegments: [seg("text", "Look up value by key.")], editorPlaceholder: '# d["topic"]', hints: ['d = {"topic":"Python"}\\nprint(d["topic"])'], constraints: ["Output: Python"], successDetail: "Correct!" }),
  ];
}

export const dictAccessTasks = dictKeysValuesTasks;
export const dictMethodTasks = dictKeysValuesTasks;

// ─── Module 9: Conditionals ─────────────────────────────────────────────────

export function ifStatementTasks(_id, title) {
  return [
    task("if-basic", `${title}: Simple if`, "easy", "Set x=10, if x>5: print(\"yes\").", "yes", { outputOnly: true, requiresVariables: ["x"], introSegments: [seg("text", "Use "), seg("code", "if"), seg("text", " to run code only when condition is True.")], editorPlaceholder: "# if x > 5", hints: ["x = 10\\nif x > 5:\\n    print(\"yes\")"], constraints: ["Use if statement", "Output: yes"], successDetail: "Correct!" }),
    task("if-false", `${title}: if Skipped`, "easy", "Set x=2, if x>5: print(\"yes\"). Print \"done\" after.", "done", { outputOnly: true, requiresVariables: ["x"], introSegments: [seg("text", "When condition is False, if block is skipped.")], editorPlaceholder: "# if skipped", hints: ["x = 2\\nif x > 5:\\n    print(\"yes\")\\nprint(\"done\")"], constraints: ["Output: done"], successDetail: "Correct! if block was skipped." }),
    task("if-zero", `${title}: if with Zero`, "medium", "Set n=0, if n: print(\"nonzero\") else: print(\"zero\").", "zero", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "0 is falsy in Python.")], editorPlaceholder: "# if n", hints: ["n = 0\\nif n:\\n    print(\"nonzero\")\\nelse:\\n    print(\"zero\")"], constraints: ["Output: zero"], successDetail: "Correct!" }),
    task("if-score", `${title}: Score Check`, "medium", "Set score=75, if score>=60: print(\"Pass\").", "Pass", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Check score with "), seg("code", "if score >= 60"), seg("text", ".")], editorPlaceholder: "# if score", hints: ["score = 75\\nif score >= 60:\\n    print(\"Pass\")"], constraints: ["Output: Pass"], successDetail: "Correct!" }),
    task("if-string", `${title}: if with String`, "medium", 'Set name="Ana", if name: print("Hello").', "Hello", { outputOnly: true, requiresVariables: ["name"], introSegments: [seg("text", "Non-empty strings are truthy.")], editorPlaceholder: "# if name", hints: ['name = "Ana"\\nif name:\\n    print("Hello")'], constraints: ["Output: Hello"], successDetail: "Correct!" }),
    task("if-and", `${title}: if with and`, "hard", "Set age=20, score=80, if age>=18 and score>=60: print(\"ok\").", "ok", { outputOnly: true, requiresVariables: ["age"], introSegments: [seg("text", "Combine conditions with "), seg("code", "and"), seg("text", ".")], editorPlaceholder: "# if and", hints: ["age=20\\nscore=80\\nif age>=18 and score>=60:\\n    print(\"ok\")"], constraints: ["Output: ok"], successDetail: "Correct!" }),
    task("if-list", `${title}: if with List`, "hard", "Set items=[1,2], if len(items)>0: print(\"has items\").", "has items", { outputOnly: true, requiresVariables: ["items"], requiresListAccess: true, introSegments: [seg("text", "Check list length in condition.")], editorPlaceholder: "# if list", hints: ["items=[1,2]\\nif len(items)>0:\\n    print(\"has items\")"], constraints: ["Output: has items"], successDetail: "Correct!" }),
  ];
}

export function ifElseTasks(_id, title) {
  return [
    task("if-else-pass", `${title}: Pass or Fail`, "easy", "Set score=75, if score>=60: print(\"Pass\") else: print(\"Fail\").", "Pass", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Use "), seg("code", "if/else"), seg("text", " for two outcomes.")], editorPlaceholder: "# if else", hints: ["score=75\\nif score>=60:\\n    print(\"Pass\")\\nelse:\\n    print(\"Fail\")"], constraints: ["Output: Pass"], successDetail: "Correct!" }),
    task("if-else-even", `${title}: Even or Odd`, "easy", "Set n=4, if n%2==0: print(\"even\") else: print(\"odd\").", "even", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Use "), seg("code", "%"), seg("text", " to check even/odd.")], editorPlaceholder: "# even odd", hints: ["n=4\\nif n%2==0:\\n    print(\"even\")\\nelse:\\n    print(\"odd\")"], constraints: ["Output: even"], successDetail: "Correct!" }),
    task("if-else-compare", `${title}: Compare Two Values`, "medium", "Set a=5, b=3, if a>b: print(\"a wins\") else: print(\"b wins\").", "a wins", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Compare two variables.")], editorPlaceholder: "# compare", hints: ["a=5\\nb=3\\nif a>b:\\n    print(\"a wins\")\\nelse:\\n    print(\"b wins\")"], constraints: ["Output: a wins"], successDetail: "Correct!" }),
    task("if-else-sign", `${title}: Positive or Negative`, "medium", "Set x=-3, if x>=0: print(\"pos\") else: print(\"neg\").", "neg", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Check sign of a number.")], editorPlaceholder: "# sign", hints: ["x=-3\\nif x>=0:\\n    print(\"pos\")\\nelse:\\n    print(\"neg\")"], constraints: ["Output: neg"], successDetail: "Correct!" }),
    task("if-else-empty", `${title}: Empty String`, "medium", 'Set s="", if s: print("has text") else: print("empty").', "empty", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Empty string is falsy.")], editorPlaceholder: "# empty str", hints: ['s=""\\nif s:\\n    print("has text")\\nelse:\\n    print("empty")'], constraints: ["Output: empty"], successDetail: "Correct!" }),
    task("if-else-nested", `${title}: Nested if-else`, "hard", "Set x=10, if x>0: print(\"positive\") else: print(\"non-positive\").", "positive", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Simple if-else on positive check.")], editorPlaceholder: "# nested", hints: ["x=10\\nif x>0:\\n    print(\"positive\")\\nelse:\\n    print(\"non-positive\")"], constraints: ["Output: positive"], successDetail: "Correct!" }),
    task("if-else-login", `${title}: Login Check`, "hard", 'Set user="admin", if user=="admin": print("welcome") else: print("denied").', "welcome", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Compare string for login.")], editorPlaceholder: "# login", hints: ['user="admin"\\nif user=="admin":\\n    print("welcome")\\nelse:\\n    print("denied")'], constraints: ["Output: welcome"], successDetail: "Correct!" }),
  ];
}

export function ifElifElseTasks(_id, title) {
  return [
    task("elif-grade-a", `${title}: Grade A`, "easy", "Set score=90, if score>=90: print(\"A\") elif score>=80: print(\"B\") else: print(\"C\").", "A", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Use "), seg("code", "elif"), seg("text", " for multiple conditions.")], editorPlaceholder: "# elif grades", hints: ["score=90\\nif score>=90:\\n    print(\"A\")\\nelif score>=80:\\n    print(\"B\")\\nelse:\\n    print(\"C\")"], constraints: ["Output: A"], successDetail: "Correct!" }),
    task("elif-grade-b", `${title}: Grade B`, "easy", "Set score=85, use if/elif/else for grades, print B.", "B", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Score 85 should print B.")], editorPlaceholder: "# grade B", hints: ["score=85\\nif score>=90: print(\"A\")\\nelif score>=80: print(\"B\")\\nelse: print(\"C\")"], constraints: ["Output: B"], successDetail: "Correct!" }),
    task("elif-grade-c", `${title}: Grade C`, "medium", "Set score=70, use if/elif/else, print C.", "C", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Score 70 falls to else branch.")], editorPlaceholder: "# grade C", hints: ["score=70\\nif score>=90: print(\"A\")\\nelif score>=80: print(\"B\")\\nelse: print(\"C\")"], constraints: ["Output: C"], successDetail: "Correct!" }),
    task("elif-weather", `${title}: Weather Categories`, "medium", "Set temp=25, if temp>30: print(\"hot\") elif temp>20: print(\"warm\") else: print(\"cool\").", "warm", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Chain elif for temperature.")], editorPlaceholder: "# weather", hints: ["temp=25\\nif temp>30: print(\"hot\")\\nelif temp>20: print(\"warm\")\\nelse: print(\"cool\")"], constraints: ["Output: warm"], successDetail: "Correct!" }),
    task("elif-three", `${title}: Three Branches`, "medium", "Set n=0, if n>0: print(\"pos\") elif n<0: print(\"neg\") else: print(\"zero\").", "zero", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Handle positive, negative, and zero.")], editorPlaceholder: "# three way", hints: ["n=0\\nif n>0: print(\"pos\")\\nelif n<0: print(\"neg\")\\nelse: print(\"zero\")"], constraints: ["Output: zero"], successDetail: "Correct!" }),
    task("elif-speed", `${title}: Speed Limit`, "hard", "Set speed=55, if speed>65: print(\"ticket\") elif speed>50: print(\"warning\") else: print(\"ok\").", "warning", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Multiple elif for speed check.")], editorPlaceholder: "# speed", hints: ["speed=55\\nif speed>65: print(\"ticket\")\\nelif speed>50: print(\"warning\")\\nelse: print(\"ok\")"], constraints: ["Output: warning"], successDetail: "Correct!" }),
    task("elif-menu", `${title}: Menu Choice`, "hard", 'Set choice="b", if choice=="a": print("add") elif choice=="b": print("view") else: print("exit").', "view", { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Use elif for menu options.")], editorPlaceholder: "# menu", hints: ['choice="b"\\nif choice=="a": print("add")\\nelif choice=="b": print("view")\\nelse: print("exit")'], constraints: ["Output: view"], successDetail: "Correct!" }),
  ];
}

// ─── Module 10: Loops ───────────────────────────────────────────────────────

export function whileLoopTasks(_id, title) {
  return [
    task("while-count", `${title}: Count with while`, "easy", "Use while to print 1, 2, 3 on separate lines.", "1\n2\n3", { outputOnly: true, introSegments: [seg("text", "Use "), seg("code", "while"), seg("text", " loop with a counter.")], editorPlaceholder: "# while loop", hints: ["n=1\\nwhile n<=3:\\n    print(n)\\n    n+=1"], constraints: ["Use while", "Print 1, 2, 3"], successDetail: "Correct!" }),
    task("while-sum", `${title}: Sum to 5`, "easy", "Use while to print 1+2+3+4+5 result: 15.", "15", { outputOnly: true, introSegments: [seg("text", "Accumulate sum in a while loop.")], editorPlaceholder: "# while sum", hints: ["total=0\\nn=1\\nwhile n<=5:\\n    total+=n\\n    n+=1\\nprint(total)"], constraints: ["Output: 15"], successDetail: "Correct!" }),
    task("while-condition", `${title}: while Until Done`, "medium", "Set x=3, while x>0: print(x); x-=1. Output 3,2,1.", "3\n2\n1", { outputOnly: true, introSegments: [seg("text", "Loop while condition is true.")], editorPlaceholder: "# while x>0", hints: ["x=3\\nwhile x>0:\\n    print(x)\\n    x-=1"], constraints: ["Print 3, 2, 1"], successDetail: "Correct!" }),
    task("while-break", `${title}: while with break`, "medium", "Use while True, print 1,2 then break.", "1\n2", { outputOnly: true, introSegments: [seg("text", "Use "), seg("code", "break"), seg("text", " to exit loop early.")], editorPlaceholder: "# while break", hints: ["n=0\\nwhile True:\\n    n+=1\\n    print(n)\\n    if n==2: break"], constraints: ["Output 1 then 2"], successDetail: "Correct!" }),
    task("while-input-sim", `${title}: Simulated Input Loop`, "hard", "Set count=0, while count<3: print(\"tick\"); count+=1.", "tick\ntick\ntick", { outputOnly: true, introSegments: [seg("text", "Repeat exactly 3 times with while.")], editorPlaceholder: "# while 3x", hints: ["count=0\\nwhile count<3:\\n    print(\"tick\")\\n    count+=1"], constraints: ["Print tick three times"], successDetail: "Correct!" }),
    task("while-factorial", `${title}: Factorial Setup`, "hard", "Use while to compute 4! = 24 and print it.", "24", { outputOnly: true, introSegments: [seg("text", "Multiply numbers 1 to 4 in a while loop.")], editorPlaceholder: "# factorial", hints: ["n=4\\nresult=1\\nwhile n>0:\\n    result*=n\\n    n-=1\\nprint(result)"], constraints: ["Output: 24"], successDetail: "Correct!" }),
    task("while-infinite-guard", `${title}: Guard Variable`, "hard", "Set running=True, n=0, while running: print(n); n+=1; if n>=3: running=False.", "0\n1\n2", { outputOnly: true, introSegments: [seg("text", "Use a flag variable to stop the loop.")], editorPlaceholder: "# guard", hints: ["running=True\\nn=0\\nwhile running:\\n    print(n)\\n    n+=1\\n    if n>=3: running=False"], constraints: ["Print 0, 1, 2"], successDetail: "Correct!" }),
  ];
}

export function forLoopTasks(_id, title) {
  return [
    task("for-range", `${title}: for with range`, "easy", "Use for i in range(1,4): print(i).", "1\n2\n3", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Loop with "), seg("code", "range(1,4)"), seg("text", ".")], editorPlaceholder: "# for range", hints: ["for i in range(1,4):\\n    print(i)"], constraints: ["Print 1, 2, 3"], successDetail: "Correct!" }),
    task("for-list", `${title}: for over List`, "easy", 'For item in ["a","b","c"]: print(item).', "a\nb\nc", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Loop directly over a list.")], editorPlaceholder: "# for list", hints: ['for item in ["a","b","c"]:\\n    print(item)'], constraints: ["Print a, b, c"], successDetail: "Correct!" }),
    task("for-string", `${title}: for over String`, "medium", 'For char in "hi": print(char).', "h\ni", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Loop over each character.")], editorPlaceholder: "# for string", hints: ['for char in "hi":\\n    print(char)'], constraints: ["Print h then i"], successDetail: "Correct!" }),
    task("for-accumulate", `${title}: Accumulate in for`, "medium", "Use for to sum [1,2,3,4] and print 10.", "10", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Build a total inside a for loop.")], editorPlaceholder: "# for sum", hints: ["total=0\\nfor n in [1,2,3,4]:\\n    total+=n\\nprint(total)"], constraints: ["Output: 10"], successDetail: "Correct!" }),
    task("for-enumerate", `${title}: Index with range`, "hard", "Print index:value for [\"x\",\"y\"] as 0:x and 1:y.", "0:x\n1:y", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Use index with range and list length.")], editorPlaceholder: "# index loop", hints: ["items=[\"x\",\"y\"]\\nfor i in range(len(items)):\\n    print(f\"{i}:{items[i]}\")"], constraints: ["Print 0:x and 1:y"], successDetail: "Correct!" }),
    task("for-nested", `${title}: Nested for`, "hard", "Use nested for to print 1,2 for two rows.", "1\n2\n1\n2", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Nested loops run inner loop fully each outer step.")], editorPlaceholder: "# nested", hints: ["for _ in range(2):\\n    for n in [1,2]:\\n        print(n)"], constraints: ["Four lines: 1,2,1,2"], successDetail: "Correct!" }),
    task("for-else", `${title}: for Complete`, "hard", "Loop [1,2,3] printing each — just print all items.", "1\n2\n3", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Complete for loop over a list.")], editorPlaceholder: "# for complete", hints: ["for n in [1,2,3]:\\n    print(n)"], constraints: ["Print 1, 2, 3"], successDetail: "Correct!" }),
  ];
}

export function breakContinueTasks(_id, title) {
  return [
    task("break-basic", `${title}: break Early`, "easy", "Loop 1-5, break at 3, print numbers before break: 1,2.", "1\n2", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Use "), seg("code", "break"), seg("text", " to stop the loop.")], editorPlaceholder: "# break", hints: ["for i in range(1,6):\\n    if i==3: break\\n    print(i)"], constraints: ["Print 1 and 2 only"], successDetail: "Correct!" }),
    task("continue-skip", `${title}: continue Skip`, "easy", "Loop 1-4, skip 2 with continue, print 1,3,4.", "1\n3\n4", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Use "), seg("code", "continue"), seg("text", " to skip an iteration.")], editorPlaceholder: "# continue", hints: ["for i in range(1,5):\\n    if i==2: continue\\n    print(i)"], constraints: ["Skip 2"], successDetail: "Correct!" }),
    task("break-search", `${title}: Search with break`, "medium", "Find 3 in [1,2,3,4], print \"found\" when found.", "found", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "break when target found.")], editorPlaceholder: "# search", hints: ["for n in [1,2,3,4]:\\n    if n==3:\\n        print(\"found\")\\n        break"], constraints: ["Output: found"], successDetail: "Correct!" }),
    task("continue-even", `${title}: Skip Odds`, "medium", "Print even numbers 2,4 from range(1,5) using continue.", "2\n4", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Skip odd numbers with continue.")], editorPlaceholder: "# skip odds", hints: ["for i in range(1,5):\\n    if i%2!=0: continue\\n    print(i)"], constraints: ["Print 2 and 4"], successDetail: "Correct!" }),
    task("break-while", `${title}: break in while`, "hard", "Use while with break when n reaches 3.", "1\n2", { outputOnly: true, introSegments: [seg("text", "break works in while loops too.")], editorPlaceholder: "# while break", hints: ["n=0\\nwhile True:\\n    n+=1\\n    if n==3: break\\n    print(n)"], constraints: ["Print 1, 2"], successDetail: "Correct!" }),
    task("continue-string", `${title}: Skip Spaces`, "hard", 'For c in "a b", skip spaces with continue, print a and b.', "a\nb", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "continue to skip unwanted characters.")], editorPlaceholder: "# skip space", hints: ['for c in "a b":\\n    if c==" ": continue\\n    print(c)'], constraints: ["Print a and b"], successDetail: "Correct!" }),
    task("break-nested", `${title}: break Inner Only`, "hard", "Nested loop, break inner at j=2, print pairs until break.", "1\n1\n2", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "break only exits innermost loop.")], editorPlaceholder: "# nested break", hints: ["for i in range(1,3):\\n    for j in range(1,4):\\n        if j==3: break\\n        print(j)"], constraints: ["Use break in inner loop"], successDetail: "Correct!" }),
  ];
}

export function passStmtTasks(_id, title) {
  return [
    task("pass-if", `${title}: pass in if`, "easy", "Set x=5, if x>0: pass, then print \"ok\".", "ok", { outputOnly: true, introSegments: [seg("text", "Use "), seg("code", "pass"), seg("text", " as a placeholder that does nothing.")], editorPlaceholder: "# pass", hints: ["x=5\\nif x>0:\\n    pass\\nprint(\"ok\")"], constraints: ["Output: ok"], successDetail: "Correct! pass does nothing but satisfies syntax." }),
    task("pass-else", `${title}: pass in else`, "easy", "Set x=0, if x: print(\"yes\") else: pass, print \"done\".", "done", { outputOnly: true, introSegments: [seg("text", "pass in else branch.")], editorPlaceholder: "# pass else", hints: ["x=0\\nif x:\\n    print(\"yes\")\\nelse:\\n    pass\\nprint(\"done\")"], constraints: ["Output: done"], successDetail: "Correct!" }),
    task("pass-loop", `${title}: pass in Loop`, "medium", "for i in range(3): pass, then print \"finished\".", "finished", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Empty loop body with pass.")], editorPlaceholder: "# pass loop", hints: ["for i in range(3):\\n    pass\\nprint(\"finished\")"], constraints: ["Output: finished"], successDetail: "Correct!" }),
    task("pass-function", `${title}: pass in Function`, "medium", "Define def todo(): pass, call todo(), print \"called\".", "called", { outputOnly: true, requiresFunction: "todo", introSegments: [seg("text", "Stub function with pass.")], editorPlaceholder: "# pass fn", hints: ["def todo():\\n    pass\\ntodo()\\nprint(\"called\")"], constraints: ["Output: called"], successDetail: "Correct!" }),
    task("pass-class-stub", `${title}: Future Code Block`, "hard", "Set show=False, if show: pass, print \"ready\".", "ready", { outputOnly: true, introSegments: [seg("text", "pass marks where code will go later.")], editorPlaceholder: "# placeholder", hints: ["show=False\\nif show:\\n    pass\\nprint(\"ready\")"], constraints: ["Output: ready"], successDetail: "Correct!" }),
    task("pass-try-stub", `${title}: Empty except Block`, "hard", "Use try/except with pass in except, print \"safe\".", "safe", { outputOnly: true, introSegments: [seg("text", "pass in except block as placeholder.")], editorPlaceholder: "# try pass", hints: ["try:\\n    x=1\\nexcept:\\n    pass\\nprint(\"safe\")"], constraints: ["Output: safe"], successDetail: "Correct!" }),
    task("pass-multiple", `${title}: Multiple pass`, "hard", "Define def a(): pass and def b(): pass, print \"stubs\".", "stubs", { outputOnly: true, introSegments: [seg("text", "Multiple stub functions with pass.")], editorPlaceholder: "# stubs", hints: ["def a(): pass\\ndef b(): pass\\nprint(\"stubs\")"], constraints: ["Output: stubs"], successDetail: "Correct!" }),
  ];
}

export function rangeFnTasks(_id, title) {
  return [
    task("range-basic", `${title}: range(5)`, "easy", "Print list(range(5)).", "[0, 1, 2, 3, 4]", printChallenge([seg("text", "range(5) gives 0 through 4.")], "[0, 1, 2, 3, 4]", "# range(5)", "print(list(range(5)))", "Correct!" )),
    task("range-start", `${title}: range(2,6)`, "easy", "Print list(range(2,6)).", "[2, 3, 4, 5]", printChallenge([seg("text", "range(start, stop) — stop is excluded.")], "[2, 3, 4, 5]", "# range(2,6)", "print(list(range(2,6)))", "Correct!" )),
    task("range-step", `${title}: range with Step`, "medium", "Print list(range(0,10,2)).", "[0, 2, 4, 6, 8]", printChallenge([seg("text", "Third argument is step size.")], "[0, 2, 4, 6, 8]", "# step", "print(list(range(0,10,2)))", "Correct!" )),
    task("range-for", `${title}: for with range`, "medium", "for i in range(1,4): print(i).", "1\n2\n3", { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Combine range with for.")], editorPlaceholder: "# for range", hints: ["for i in range(1,4):\\n    print(i)"], constraints: ["Print 1,2,3"], successDetail: "Correct!" }),
    task("range-len", `${title}: range(len())`, "hard", "Set a=[10,20,30], for i in range(len(a)): print(a[i]).", "10\n20\n30", { outputOnly: true, requiresForLoop: true, requiresListAccess: true, introSegments: [seg("text", "Use range(len(list)) for indexes.")], editorPlaceholder: "# range len", hints: ["a=[10,20,30]\\nfor i in range(len(a)):\\n    print(a[i])"], constraints: ["Print 10,20,30"], successDetail: "Correct!" }),
    task("range-reverse", `${title}: Count Down`, "hard", "Print list(range(5,0,-1)).", "[5, 4, 3, 2, 1]", printChallenge([seg("text", "Negative step counts down.")], "[5, 4, 3, 2, 1]", "# down", "print(list(range(5,0,-1)))", "Correct!" )),
    task("range-sum", `${title}: Sum with range`, "hard", "Sum range(1,6) and print 15.", "15", { outputOnly: true, introSegments: [seg("text", "Sum numbers from range(1,6).")], editorPlaceholder: "# sum range", hints: ["total=0\\nfor i in range(1,6):\\n    total+=i\\nprint(total)"], constraints: ["Output: 15"], successDetail: "Correct!" }),
  ];
}

// ─── Module 11: Comprehensions ──────────────────────────────────────────────

export function listCompTasks(_id, title) {
  return [
    task("lc-basic", `${title}: Basic List Comp`, "easy", "Print [x for x in range(3)].", "[0, 1, 2]", printChallenge([seg("text", "List comprehension: "), seg("code", "[x for x in range(3)]"), seg("text", ".")], "[0, 1, 2]", "# list comp", "print([x for x in range(3)])", "Correct!" )),
    task("lc-squares", `${title}: Squares`, "easy", "Print [x*x for x in range(1,4)].", "[1, 4, 9]", printChallenge([seg("text", "Square each number in comprehension.")], "[1, 4, 9]", "# squares", "print([x*x for x in range(1,4)])", "Correct!" )),
    task("lc-filter", `${title}: Filter Evens`, "medium", "Print [x for x in range(6) if x%2==0].", "[0, 2, 4]", printChallenge([seg("text", "Add "), seg("code", "if"), seg("text", " to filter items.")], "[0, 2, 4]", "# filter", "print([x for x in range(6) if x%2==0])", "Correct!" )),
    task("lc-string", `${title}: Uppercase List`, "medium", 'Print [c.upper() for c in ["a","b"]].', "['A', 'B']", printChallenge([seg("text", "Transform each item in comprehension.")], "['A', 'B']", "# upper", 'print([c.upper() for c in ["a","b"]])', "Correct!" )),
    task("lc-nested", `${title}: Nested Comp`, "hard", "Print [j for i in range(2) for j in range(2)].", "[0, 1, 0, 1]", printChallenge([seg("text", "Nested comprehension loops.")], "[0, 1, 0, 1]", "# nested", "print([j for i in range(2) for j in range(2)])", "Correct!" )),
    task("lc-len", `${title}: Lengths`, "hard", 'Print [len(w) for w in ["hi","hey"]].', "[2, 3]", printChallenge([seg("text", "Apply function in comprehension.")], "[2, 3]", "# len comp", 'print([len(w) for w in ["hi","hey"]])', "Correct!" )),
    task("lc-condition", `${title}: Conditional Expression`, "hard", "Print [x if x%2==0 else -x for x in range(1,4)].", "[-1, 2, -3]", printChallenge([seg("text", "if/else inside comprehension.")], "[-1, 2, -3]", "# cond", "print([x if x%2==0 else -x for x in range(1,4)])", "Correct!" )),
  ];
}

export const compUsesTasks = listCompTasks;
export function dictCompTasks(_id, title) {
  return [
    task("dc-basic", `${title}: Basic Dict Comp`, "easy", "Print {x:x*2 for x in range(3)}.", "{0: 0, 1: 2, 2: 4}", printChallenge([seg("text", "Dict comprehension: "), seg("code", "{k:v for ...}"), seg("text", ".")], "{0: 0, 1: 2, 2: 4}", "# dict comp", "print({x:x*2 for x in range(3)})", "Correct!" )),
    task("dc-keys", `${title}: From List`, "easy", 'Print {c:len(c) for c in ["a","ab"]}.', "{'a': 1, 'ab': 2}", printChallenge([seg("text", "Build dict from list.")], "{'a': 1, 'ab': 2}", "# from list", 'print({c:len(c) for c in ["a","ab"]})', "Correct!" )),
    task("dc-filter", `${title}: Filter Dict Comp`, "medium", "Print {x:x for x in range(5) if x%2==1}.", "{1: 1, 3: 3}", printChallenge([seg("text", "Filter in dict comprehension.")], "{1: 1, 3: 3}", "# filter", "print({x:x for x in range(5) if x%2==1})", "Correct!" )),
    task("dc-invert", `${title}: Invert Keys Values`, "medium", 'Print {v:k for k,v in {"a":1,"b":2}.items()}.', "{1: 'a', 2: 'b'}", printChallenge([seg("text", "Swap keys and values.")], "{1: 'a', 2: 'b'}", "# invert", 'print({v:k for k,v in {"a":1,"b":2}.items()})', "Correct!" )),
    task("dc-string", `${title}: Char Positions`, "hard", 'Print {c:i for i,c in enumerate("ab")}.', "{'a': 0, 'b': 1}", printChallenge([seg("text", "Dict comp with enumerate.")], "{'a': 0, 'b': 1}", "# enum", 'print({c:i for i,c in enumerate("ab")})', "Correct!" )),
    task("dc-conditional", `${title}: Conditional Values`, "hard", "Print {x:(\"even\" if x%2==0 else \"odd\") for x in range(3)}.", "{0: 'even', 1: 'odd', 2: 'even'}", { outputOnly: true, introSegments: [seg("text", "Conditional expression in dict comp.")], editorPlaceholder: "# cond dict", hints: ['print({x:("even" if x%2==0 else "odd") for x in range(3)})'], constraints: ["Use dict comprehension"], successDetail: "Correct!" }),
    task("dc-merge", `${title}: Combine Two Lists`, "hard", 'Print {k:v for k,v in zip(["a","b"],[1,2])}.', "{'a': 1, 'b': 2}", printChallenge([seg("text", "Use zip in dict comprehension.")], "{'a': 1, 'b': 2}", "# zip", 'print({k:v for k,v in zip(["a","b"],[1,2])})', "Correct!" )),
  ];
}

// ─── Module 12: Functions ───────────────────────────────────────────────────

export function createFunctionTasks(_id, title) {
  return [
    task("def-basic", `${title}: Define a Function`, "easy", "Define def greet(): print(\"Hi\"), call it.", "Hi", { outputOnly: true, requiresFunction: "greet", introSegments: [seg("text", "Define and call a simple function.")], editorPlaceholder: "# def greet", hints: ["def greet():\\n    print(\"Hi\")\\ngreet()"], constraints: ["Output: Hi"], successDetail: "Correct!" }),
    task("def-return", `${title}: Return Value`, "easy", "Define def add(a,b): return a+b, print add(2,3).", "5", { outputOnly: true, requiresFunction: "add", introSegments: [seg("text", "Use "), seg("code", "return"), seg("text", " to send back a value.")], editorPlaceholder: "# return", hints: ["def add(a,b):\\n    return a+b\\nprint(add(2,3))"], constraints: ["Output: 5"], successDetail: "Correct!" }),
    task("def-param", `${title}: Parameter`, "medium", 'Define def shout(name): print(name.upper()), call shout("hi").', "HI", { outputOnly: true, requiresFunction: "shout", introSegments: [seg("text", "Pass an argument to a function.")], editorPlaceholder: "# param", hints: ['def shout(name):\\n    print(name.upper())\\nshout("hi")'], constraints: ["Output: HI"], successDetail: "Correct!" }),
    task("def-default", `${title}: Default Parameter`, "medium", 'Define def greet(name="Guest"): print(f"Hi {name}"), call greet().', "Hi Guest", { outputOnly: true, requiresFunction: "greet", introSegments: [seg("text", "Default parameter values.")], editorPlaceholder: "# default", hints: ['def greet(name="Guest"):\\n    print(f"Hi {name}")\\ngreet()'], constraints: ["Output: Hi Guest"], successDetail: "Correct!" }),
    task("def-multiple-return", `${title}: Multiple Returns`, "hard", "Define def minmax(a,b): return min(a,b), max(a,b), print minmax(3,7)[0].", "3", { outputOnly: true, requiresFunction: "minmax", introSegments: [seg("text", "Return multiple values as tuple.")], editorPlaceholder: "# multi return", hints: ["def minmax(a,b):\\n    return min(a,b), max(a,b)\\nprint(minmax(3,7)[0])"], constraints: ["Output: 3"], successDetail: "Correct!" }),
    task("def-scope", `${title}: Local Variable`, "hard", "Define def f(): x=10; return x, print f().", "10", { outputOnly: true, requiresFunction: "f", introSegments: [seg("text", "Variables inside functions are local.")], editorPlaceholder: "# local", hints: ["def f():\\n    x=10\\n    return x\\nprint(f())"], constraints: ["Output: 10"], successDetail: "Correct!" }),
    task("def-nested", `${title}: Function Calling Function`, "hard", "Define def double(x): return x*2, def quad(x): return double(double(x)), print quad(2).", "8", { outputOnly: true, requiresFunction: "quad", introSegments: [seg("text", "One function can call another.")], editorPlaceholder: "# nested fn", hints: ["def double(x): return x*2\\ndef quad(x): return double(double(x))\\nprint(quad(2))"], constraints: ["Output: 8"], successDetail: "Correct!" }),
  ];
}

export const callFunctionTasks = createFunctionTasks;
export const functionArgsTasks = createFunctionTasks;
export const functionVarsTasks = createFunctionTasks;

export function recursionTasks(_id, title) {
  return [
    task("rec-base", `${title}: Base Case`, "easy", "Define def countdown(n): print(n); if n>1: countdown(n-1), call countdown(3).", "3\n2\n1", { outputOnly: true, requiresFunction: "countdown", introSegments: [seg("text", "Recursion calls itself with a base case.")], editorPlaceholder: "# countdown", hints: ["def countdown(n):\\n    print(n)\\n    if n>1:\\n        countdown(n-1)\\ncountdown(3)"], constraints: ["Print 3, 2, 1"], successDetail: "Correct!" }),
    task("rec-factorial", `${title}: Factorial`, "easy", "Define def fact(n): return 1 if n<=1 else n*fact(n-1), print fact(5).", "120", { outputOnly: true, requiresFunction: "fact", introSegments: [seg("text", "Classic recursive factorial.")], editorPlaceholder: "# factorial", hints: ["def fact(n):\\n    return 1 if n<=1 else n*fact(n-1)\\nprint(fact(5))"], constraints: ["Output: 120"], successDetail: "Correct!" }),
    task("rec-sum", `${title}: Recursive Sum`, "medium", "Define def rsum(n): return 0 if n<=0 else n+rsum(n-1), print rsum(5).", "15", { outputOnly: true, requiresFunction: "rsum", introSegments: [seg("text", "Sum 1 to n recursively.")], editorPlaceholder: "# rsum", hints: ["def rsum(n):\\n    return 0 if n<=0 else n+rsum(n-1)\\nprint(rsum(5))"], constraints: ["Output: 15"], successDetail: "Correct!" }),
    task("rec-fib", `${title}: Fibonacci Step`, "medium", "Define def fib(n): return n if n<=1 else fib(n-1)+fib(n-2), print fib(6).", "8", { outputOnly: true, requiresFunction: "fib", introSegments: [seg("text", "Fibonacci uses two recursive calls.")], editorPlaceholder: "# fib", hints: ["def fib(n):\\n    return n if n<=1 else fib(n-1)+fib(n-2)\\nprint(fib(6))"], constraints: ["Output: 8"], successDetail: "Correct!" }),
    task("rec-power", `${title}: Power`, "hard", "Define def power(b,e): return 1 if e==0 else b*power(b,e-1), print power(2,3).", "8", { outputOnly: true, requiresFunction: "power", introSegments: [seg("text", "Recursive exponentiation.")], editorPlaceholder: "# power", hints: ["def power(b,e):\\n    return 1 if e==0 else b*power(b,e-1)\\nprint(power(2,3))"], constraints: ["Output: 8"], successDetail: "Correct!" }),
    task("rec-len", `${title}: Recursive Length`, "hard", 'Define def rlen(s): return 0 if s=="" else 1+rlen(s[1:]), print rlen("abc").', "3", { outputOnly: true, requiresFunction: "rlen", introSegments: [seg("text", "Count string length recursively.")], editorPlaceholder: "# rlen", hints: ['def rlen(s):\\n    return 0 if s=="" else 1+rlen(s[1:])\\nprint(rlen("abc"))'], constraints: ["Output: 3"], successDetail: "Correct!" }),
    task("rec-countdown-silent", `${title}: Silent Base`, "hard", "Define def print_down(n): if n>=1: print(n); print_down(n-1), call print_down(2).", "2\n1", { outputOnly: true, requiresFunction: "print_down", introSegments: [seg("text", "Base case when n < 1 stops recursion.")], editorPlaceholder: "# print_down", hints: ["def print_down(n):\\n    if n>=1:\\n        print(n)\\n        print_down(n-1)\\nprint_down(2)"], constraints: ["Print 2, 1"], successDetail: "Correct!" }),
  ];
}

// ─── Module 13: Lambda ──────────────────────────────────────────────────────

export function lambdaTasks(_id, title) {
  return [
    task("lambda-basic", `${title}: Basic Lambda`, "easy", "Set f = lambda x: x*2, print f(5).", "10", { outputOnly: true, introSegments: [seg("text", "Lambda is a small anonymous function.")], editorPlaceholder: "# lambda x: x*2", hints: ["f = lambda x: x*2\\nprint(f(5))"], constraints: ["Output: 10"], successDetail: "Correct!" }),
    task("lambda-add", `${title}: Lambda Add`, "easy", "Set add = lambda a,b: a+b, print add(3,4).", "7", { outputOnly: true, introSegments: [seg("text", "Lambda with two parameters.")], editorPlaceholder: "# lambda add", hints: ["add = lambda a,b: a+b\\nprint(add(3,4))"], constraints: ["Output: 7"], successDetail: "Correct!" }),
    task("lambda-square", `${title}: Lambda Square`, "medium", "Set sq = lambda x: x**2, print sq(4).", "16", { outputOnly: true, introSegments: [seg("text", "Use lambda for short operations.")], editorPlaceholder: "# lambda square", hints: ["sq = lambda x: x**2\\nprint(sq(4))"], constraints: ["Output: 16"], successDetail: "Correct!" }),
    task("lambda-map", `${title}: map with Lambda`, "medium", "Print list(map(lambda x: x*2, [1,2,3])).", "[2, 4, 6]", printChallenge([seg("text", "Use "), seg("code", "map()"), seg("text", " with lambda.")], "[2, 4, 6]", "# map lambda", "print(list(map(lambda x: x*2, [1,2,3])))", "Correct!" )),
    task("lambda-filter", `${title}: filter with Lambda`, "medium", "Print list(filter(lambda x: x>2, [1,2,3,4])).", "[3, 4]", printChallenge([seg("text", "Use "), seg("code", "filter()"), seg("text", " with lambda.")], "[3, 4]", "# filter", "print(list(filter(lambda x: x>2, [1,2,3,4])))", "Correct!" )),
    task("lambda-sorted", `${title}: sorted with Lambda`, "hard", "Print sorted(['bb','a','ccc'], key=lambda s: len(s)).", "['a', 'bb', 'ccc']", printChallenge([seg("text", "Sort by length using lambda key.")], "['a', 'bb', 'ccc']", "# sorted", "print(sorted(['bb','a','ccc'], key=lambda s: len(s)))", "Correct!" )),
    task("lambda-immediate", `${title}: Immediate Call`, "hard", "Print (lambda x: x+1)(9).", "10", printChallenge([seg("text", "Call lambda immediately: "), seg("code", "(lambda x: x+1)(9)"), seg("text", ".")], "10", "# IIFE", "print((lambda x: x+1)(9))", "Correct!" )),
  ];
}

// ─── Intro topics (m1-t2, m1-t3, m1-t4) — used in generator meta only ───────

export function introTopicTasks(_id, title) {
  const slug = _id.replace(/-/g, "_");
  return [
    task(`${slug}-1`, `${title}: Warm-up`, "easy", `Write a short program related to ${title}. Print Ready on one line.`, "Ready",
      printChallenge([seg("text", `Write a short program related to ${title}. Print `), seg("code", "Ready"), seg("text", " on one line.")], "Ready", "# Write your solution here", 'print("Ready")', "Correct! Great warm-up.")),
    task(`${slug}-2`, `${title}: Output Two Values`, "easy", `Create two variables about ${title} and print them comma-separated.`, "A,B",
      { outputOnly: true, expectCommaPrint: true, introSegments: [seg("text", `Create two variables related to ${title} and print them separated by a comma.`)], editorPlaceholder: "# create variables and print A,B format", emptyMessage: "Create two variables and use print().", successDetail: "Correct!", constraints: ["Output: A,B"], hints: ['print(a, b, sep=",")'] }),
    task(`${slug}-3`, `${title}: Simple Loop`, "medium", `Use a for loop to print 1 through 4.`, "1\n2\n3\n4",
      { outputOnly: true, requiresForLoop: true, introSegments: [seg("text", "Use a "), seg("code", "for"), seg("text", " loop to print 1 to 4.")], editorPlaceholder: "# use for loop", emptyMessage: "Use a for loop.", successDetail: "Correct!", constraints: ["Print 1-4"], hints: ["for i in range(1,5): print(i)"] }),
    task(`${slug}-4`, `${title}: Condition`, "medium", `Set score=75, if score>=60 print Pass else Fail.`, "Pass",
      { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Set "), seg("code", "score = 75"), seg("text", ", use if/else for Pass/Fail.")], editorPlaceholder: "# if else", emptyMessage: "Define score and if/else.", successDetail: "Correct!", constraints: ["Output: Pass"], hints: ['if score >= 60: print("Pass") else: print("Fail")'] }),
    task(`${slug}-5`, `${title}: Function Stub`, "medium", `Define greet() that prints Hello and call it.`, "Hello",
      { outputOnly: true, requiresFunction: "greet", introSegments: [seg("text", "Define "), seg("code", "greet()"), seg("text", " that prints Hello.")], editorPlaceholder: "# define greet()", emptyMessage: "Define and call greet().", successDetail: "Correct!", constraints: ["Output: Hello"], hints: ['def greet(): print("Hello")\\ngreet()'] }),
    task(`${slug}-6`, `${title}: List Practice`, "hard", `Create a list of three items and print index 1.`, "middle",
      { outputOnly: true, requiresListAccess: true, introSegments: [seg("text", "Print the second list item at index 1.")], editorPlaceholder: "# list index", emptyMessage: "Create list and print items[1].", successDetail: "Correct!", constraints: ["Output: middle"], hints: ['items = ["a","middle","c"]\\nprint(items[1])'] }),
    task(`${slug}-7`, `${title}: Dict Lookup`, "hard", `Create dict with key topic, print d["topic"].`, "Python",
      { outputOnly: true, requiresDictKey: "topic", introSegments: [seg("text", 'Create dict with key '), seg("code", "topic"), seg("text", ", print its value.")], editorPlaceholder: '# d["topic"]', emptyMessage: "Create dict and print value.", successDetail: "Correct!", constraints: ["Output: Python"], hints: ['d = {"topic":"Python"}\\nprint(d["topic"])'] }),
  ];
}

// ─── Module 14: Final Project ─────────────────────────────────────────────────

export function finalProjectOverviewTasks(_id, title) {
  return [
    task("fp-preview", `${title}: Preview Report`, "easy", 'Print "=== Class Report ===" on one line.', "=== Class Report ===",
      printChallenge([seg("text", "Preview the capstone report header.")], "=== Class Report ===", "# print header", 'print("=== Class Report ===")', "Correct!")),
    task("fp-shape", `${title}: Data Shape`, "easy", 'Create students = {"Alice": [85, 92]}, print students["Alice"][0].', "85",
      { outputOnly: true, requiresDictKey: "Alice", introSegments: [seg("text", "Dict maps names to grade lists.")], editorPlaceholder: "# students dict", hints: ['students = {"Alice": [85, 92]}\\nprint(students["Alice"][0])'], constraints: ["Output: 85"], successDetail: "Correct!" }),
    task("fp-concepts", `${title}: Module Map`, "medium", 'Print len(["dict","list","set","tuple"]).', "4",
      printChallenge([seg("text", "Four core collection types in the project.")], "4", "# collections", 'print(len(["dict","list","set","tuple"]))', "Correct!")),
    task("fp-subjects", `${title}: Subject Set`, "medium", 'Create s = {"Math","Science","Math"}, print len(s).', "2",
      { outputOnly: true, introSegments: [seg("text", "Sets keep unique subjects only.")], editorPlaceholder: "# set of subjects", hints: ['s = {"Math","Science","Math"}\\nprint(len(s))'], constraints: ["Output: 2"], successDetail: "Correct!" }),
    task("fp-plan", `${title}: Build Order`, "hard", 'Print "data,logic,functions,capstone" (comma-separated steps).', "data,logic,functions,capstone",
      printChallenge([seg("text", "Print the four build steps in order.")], "data,logic,functions,capstone", "# steps", 'print("data,logic,functions,capstone")', "Correct!")),
  ];
}

export function finalProjectDataTasks(_id, title) {
  return [
    task("fp-dict", `${title}: Student Dict`, "easy", 'students = {"Alice": [85], "Bob": [70]}, print len(students).', "2",
      { outputOnly: true, requiresVariables: ["students"], introSegments: [seg("text", "Main database is a dict of names → grade lists.")], editorPlaceholder: "# students = {}", hints: ['students = {"Alice": [85], "Bob": [70]}\\nprint(len(students))'], constraints: ["Output: 2"], successDetail: "Correct!" }),
    task("fp-set", `${title}: Subject Set`, "easy", 'subjects = set(); subjects.add("Math"); print "Math" in subjects.', "True",
      { outputOnly: true, requiresVariables: ["subjects"], introSegments: [seg("text", "Use a set for unique subject names.")], editorPlaceholder: "# subjects = set()", hints: ['subjects = set()\\nsubjects.add("Math")\\nprint("Math" in subjects)'], constraints: ["Output: True"], successDetail: "Correct!" }),
    task("fp-tuple", `${title}: Grade Record`, "easy", 'record = ("Science", 88); subject, score = record; print score.', "88",
      { outputOnly: true, requiresVariables: ["record"], introSegments: [seg("text", "Unpack a (subject, score) tuple.")], editorPlaceholder: "# tuple unpack", hints: ['record = ("Science", 88)\\nsubject, score = record\\nprint(score)'], constraints: ["Output: 88"], successDetail: "Correct!" }),
    task("fp-append", `${title}: Append Grade`, "medium", 'students = {"Alice": [85]}; students["Alice"].append(92); print students["Alice"][-1].', "92",
      { outputOnly: true, requiresVariables: ["students"], introSegments: [seg("text", "Use "), seg("code", ".append()"), seg("text", " to add a score.")], editorPlaceholder: "# append grade", hints: ['students = {"Alice": [85]}\\nstudents["Alice"].append(92)\\nprint(students["Alice"][-1])'], constraints: ["Output: 92"], successDetail: "Correct!" }),
    task("fp-add-student", `${title}: Add Student`, "medium", 'students = {}; students["Cara"] = [55, 48]; print students["Cara"][1].', "48",
      { outputOnly: true, requiresVariables: ["students"], introSegments: [seg("text", "Add a new student key with a grade list.")], editorPlaceholder: "# add Cara", hints: ['students = {}\\nstudents["Cara"] = [55, 48]\\nprint(students["Cara"][1])'], constraints: ["Output: 48"], successDetail: "Correct!" }),
    task("fp-challenge-data", `${title}: Merge Grades`, "hard", 'students = {"Bob": [70]}; students["Bob"].extend([88, 91]); print sum(students["Bob"]).', "249",
      { outputOnly: true, requiresVariables: ["students"], introSegments: [seg("text", "Use "), seg("code", ".extend()"), seg("text", " then sum the list.")], editorPlaceholder: "# extend grades", hints: ['students = {"Bob": [70]}\\nstudents["Bob"].extend([88, 91])\\nprint(sum(students["Bob"]))'], constraints: ["Output: 249"], successDetail: "Correct!" }),
  ];
}

export function finalProjectLogicTasks(_id, title) {
  return [
    task("fp-avg", `${title}: Average Loop`, "easy", "grades = [85, 92, 78]; print sum(grades) / len(grades).", "85.0",
      { outputOnly: true, requiresVariables: ["grades"], introSegments: [seg("text", "Average = sum / len.")], editorPlaceholder: "# average", hints: ["grades = [85, 92, 78]\\nprint(sum(grades) / len(grades))"], constraints: ["Output: 85.0"], successDetail: "Correct!" }),
    task("fp-pass", `${title}: Pass or Fail`, "easy", 'avg = 75; print "PASS" if avg >= 60 else "FAIL".', "PASS",
      { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Compare average to 60.")], editorPlaceholder: "# if avg >= 60", hints: ['avg = 75\\nprint("PASS" if avg >= 60 else "FAIL")'], constraints: ["Output: PASS"], successDetail: "Correct!" }),
    task("fp-dict-loop", `${title}: Loop Students`, "medium", 'students = {"Alice": [90]}; print list(students.keys())[0].', "Alice",
      { outputOnly: true, requiresVariables: ["students"], requiresForLoop: false, introSegments: [seg("text", "Access the first student name from the dict.")], editorPlaceholder: "# students.keys()", hints: ['students = {"Alice": [90]}\\nprint(list(students.keys())[0])'], constraints: ["Output: Alice"], successDetail: "Correct!" }),
    task("fp-comp", `${title}: Passing List`, "medium", 'averages = {"Alice": 85, "Bob": 55}; print [n for n,a in averages.items() if a >= 60][0].', "Alice",
      { outputOnly: true, requiresVariables: ["averages"], introSegments: [seg("text", "List comprehension filters passing students.")], editorPlaceholder: "# comprehension", hints: ['averages = {"Alice": 85, "Bob": 55}\\nprint([n for n,a in averages.items() if a >= 60][0])'], constraints: ["Output: Alice"], successDetail: "Correct!" }),
    task("fp-elif", `${title}: Letter Band`, "medium", "avg = 55; print RETAKE if 50 <= avg < 60 else PASS.", "RETAKE",
      { outputOnly: true, requiresIfCondition: true, introSegments: [seg("text", "Use elif bands for retake vs pass.")], editorPlaceholder: "# elif bands", hints: ['avg = 55\\nif avg >= 60: print("PASS")\\nelif avg >= 50: print("RETAKE")\\nelse: print("FAIL")'], constraints: ["Output: RETAKE"], successDetail: "Correct!" }),
    task("fp-challenge-logic", `${title}: Class Average`, "hard", 'students = {"A": [80, 90], "B": [70, 70]}; print sum(sum(g) for g in students.values()) / sum(len(g) for g in students.values()).', "77.5",
      { outputOnly: true, requiresVariables: ["students"], introSegments: [seg("text", "Compute overall class average across all grades.")], editorPlaceholder: "# class average", hints: ['students = {"A": [80, 90], "B": [70, 70]}\\ntotal = sum(sum(g) for g in students.values())\\ncount = sum(len(g) for g in students.values())\\nprint(total / count)'], constraints: ["Output: 77.5"], successDetail: "Correct!" }),
  ];
}

export function finalProjectFunctionsTasks(_id, title) {
  return [
    task("fp-fn-avg", `${title}: average()`, "easy", "def average(s): return sum(s)/len(s)\nprint average([85, 92, 78]).", "85.0",
      { outputOnly: true, requiresFunction: "average", introSegments: [seg("text", "Define "), seg("code", "average(scores)"), seg("text", " with return.")], editorPlaceholder: "# def average", hints: ["def average(s):\\n    return sum(s)/len(s)\\nprint(average([85, 92, 78]))"], constraints: ["Output: 85.0"], successDetail: "Correct!" }),
    task("fp-fn-grade", `${title}: letter_grade()`, "easy", 'def letter_grade(a):\n    if a >= 80: return "B"\n    return "F"\nprint letter_grade(85).', "B",
      { outputOnly: true, requiresFunction: "letter_grade", introSegments: [seg("text", "Map numeric average to a letter.")], editorPlaceholder: "# def letter_grade", hints: ['def letter_grade(a):\\n    if a >= 80: return "B"\\n    return "F"\\nprint(letter_grade(85))'], constraints: ["Output: B"], successDetail: "Correct!" }),
    task("fp-fstring", `${title}: Report Line`, "medium", 'name="Alice"; avg=85.333; print f"{name}: avg {avg:.1f}".', "Alice: avg 85.3",
      { outputOnly: true, introSegments: [seg("text", "Format report lines with f-strings.")], editorPlaceholder: "# f-string", hints: ['name = "Alice"\\navg = 85.333\\nprint(f"{name}: avg {avg:.1f}")'], constraints: ["Output: Alice: avg 85.3"], successDetail: "Correct!" }),
    task("fp-lambda-sort", `${title}: Top Student`, "medium", 'ranking = [("Alice", 85), ("Bob", 91)]; ranking.sort(key=lambda x: x[1], reverse=True); print ranking[0][0].', "Bob",
      { outputOnly: true, requiresVariables: ["ranking"], introSegments: [seg("text", "Sort by average with "), seg("code", "key=lambda"), seg("text", ".")], editorPlaceholder: "# lambda sort", hints: ['ranking = [("Alice", 85), ("Bob", 91)]\\nranking.sort(key=lambda x: x[1], reverse=True)\\nprint(ranking[0][0])'], constraints: ["Output: Bob"], successDetail: "Correct!" }),
    task("fp-status", `${title}: status()`, "medium", 'def status(a): return "PASS" if a >= 60 else "FAIL"\nprint status(72).', "PASS",
      { outputOnly: true, requiresFunction: "status", introSegments: [seg("text", "Return PASS or FAIL from a function.")], editorPlaceholder: "# def status", hints: ['def status(a):\\n    return "PASS" if a >= 60 else "FAIL"\\nprint(status(72))'], constraints: ["Output: PASS"], successDetail: "Correct!" }),
    task("fp-challenge-fn", `${title}: Full Line`, "hard", 'def line(n,a): return f"{n}: avg {a:.1f}"\nprint line("Cara", 72.5).', "Cara: avg 72.5",
      { outputOnly: true, requiresFunction: "line", introSegments: [seg("text", "Combine function + f-string for one report line.")], editorPlaceholder: "# def line", hints: ['def line(n,a):\\n    return f"{n}: avg {a:.1f}"\\nprint(line("Cara", 72.5))'], constraints: ["Output: Cara: avg 72.5"], successDetail: "Correct!" }),
  ];
}

export function finalProjectCapstoneTasks(_id, title) {
  return [
    task("fp-cap-header", `${title}: Report Header`, "easy", 'print "=== Class Report ==="', "=== Class Report ===",
      printChallenge([seg("text", "Start the capstone with the report header.")], "=== Class Report ===", "# header", 'print("=== Class Report ===")', "Correct!")),
    task("fp-cap-avg", `${title}: One Student Line`, "medium", 'def average(s): return sum(s)/len(s)\ngrades=[85,92,78]; print round(average(grades),1).', "85.0",
      { outputOnly: true, requiresFunction: "average", introSegments: [seg("text", "Compute one student's average.")], editorPlaceholder: "# average + print", hints: ["def average(s): return sum(s)/len(s)\\ngrades = [85,92,78]\\nprint(round(average(grades),1))"], constraints: ["Output: 85.0"], successDetail: "Correct!" }),
    task("fp-cap-top", `${title}: Find Top`, "medium", 'averages={"Alice":85,"Bob":91}; print max(averages.items(), key=lambda x:x[1])[0].', "Bob",
      { outputOnly: true, requiresVariables: ["averages"], introSegments: [seg("text", "Use max + lambda to find top student.")], editorPlaceholder: "# max lambda", hints: ['averages = {"Alice": 85, "Bob": 91}\\nprint(max(averages.items(), key=lambda x: x[1])[0])'], constraints: ["Output: Bob"], successDetail: "Correct!" }),
    task("fp-cap-extend", `${title}: Add Dan`, "medium", 'students={"Alice":[85]}; students["Dan"]=[88,76,94]; print len(students).', "2",
      { outputOnly: true, requiresVariables: ["students"], introSegments: [seg("text", "Extend the project with a new student.")], editorPlaceholder: "# add Dan", hints: ['students = {"Alice": [85]}\\nstudents["Dan"] = [88, 76, 94]\\nprint(len(students))'], constraints: ["Output: 2"], successDetail: "Correct!" }),
    task("fp-cap-passing", `${title}: Passing Count`, "hard", 'averages={"Alice":85,"Bob":55,"Cara":72}; print len([a for a in averages.values() if a>=60]).', "2",
      { outputOnly: true, requiresVariables: ["averages"], introSegments: [seg("text", "Count how many students passed.")], editorPlaceholder: "# passing count", hints: ['averages = {"Alice": 85, "Bob": 55, "Cara": 72}\\nprint(len([a for a in averages.values() if a >= 60]))'], constraints: ["Output: 2"], successDetail: "Correct!" }),
    task("fp-cap-grade-count", `${title}: Grade Histogram`, "hard", 'def lg(a):\n    if a>=90: return "A"\n    if a>=80: return "B"\n    return "F"\naverages={"Alice":85,"Cara":92}; print sum(1 for v in averages.values() if lg(v)=="B").', "1",
      { outputOnly: true, requiresFunction: "lg", introSegments: [seg("text", "Count students with grade B using a helper function.")], editorPlaceholder: "# grade count", hints: ['def lg(a):\\n    if a >= 90: return "A"\\n    if a >= 80: return "B"\\n    return "F"\\naverages = {"Alice": 85, "Cara": 92}\\nprint(sum(1 for v in averages.values() if lg(v) == "B"))'], constraints: ["Output: 1"], successDetail: "Correct!" }),
    task("fp-cap-challenge", `${title}: Mini Capstone`, "hard", 'students={"A":[90],"B":[50]}; print sum(1 for g in students.values() if sum(g)/len(g)>=60).', "1",
      { outputOnly: true, requiresVariables: ["students"], introSegments: [seg("text", "Count passing students from raw grade lists.")], editorPlaceholder: "# mini capstone", hints: ['students = {"A": [90], "B": [50]}\\nprint(sum(1 for g in students.values() if sum(g)/len(g) >= 60))'], constraints: ["Output: 1"], successDetail: "Correct! You built a mini grade manager." }),
  ];
}
