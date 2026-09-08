import type { TopicLesson } from "@/lib/types";

export const module8Lessons: Record<string, TopicLesson> = {
  "m8-t1": {
    topicId: "m8-t1",
    intro: "Dictionaries map keys to values with {key: value} syntax.",
    blocks: [
      {
        type: "infographic",
        infographic: "dictionary-syntax",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Dictionaries use `{key: value}` pairs. Keys must be unique and immutable (strings, numbers, tuples); values can be any type." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "student = {\"name\": \"Ravi\", \"age\": 21, \"grade\": \"A\"}\nprint(student)\nempty = {}\nprint(type(empty))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a dictionary for a product with keys `name`, `price`, `in_stock` and print it.",
        starterCode: "# TODO: Create a dictionary describing a book (title, author, year)",
      },
    ],
    keyTakeaways: [
      "Keys must be hashable (often strings or numbers).",
      "Values can be any type.",
      "Creating with {} or dict() both work.",
    ],
  },
  "m8-t2": {
    topicId: "m8-t2",
    intro: "keys(), values(), and items() let you inspect what a dictionary holds.",
    blocks: [
      {
        type: "infographic",
        infographic: "dictionary-keys-values",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`.keys()`, `.values()`, and `.items()` return views of a dict's keys, values, and key-value pairs respectively." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nprint(list(d.keys()))     # ['a','b','c']\nprint(list(d.values()))   # [1,2,3]\nprint(list(d.items()))    # [('a',1),('b',2),('c',3)]" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `d = {\"math\": 90, \"science\": 85}`, print all keys and all values separately.",
        starterCode: "# TODO: Given d={\"x\":10,\"y\":20}, print keys, values, and items as lists",
      },
    ],
    keyTakeaways: [
      "keys(), values(), and items() return view objects.",
      "Iterate items() for key-value pairs together.",
      "Views reflect live changes to the dictionary.",
    ],
  },
  "m8-t3": {
    topicId: "m8-t3",
    intro: "Access values with [] or .get() — get is safer when a key might be missing.",
    blocks: [
      {
        type: "infographic",
        infographic: "dictionary-accessing",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Access values with `d[\"key\"]` (raises `KeyError` if missing) or `d.get(\"key\", default)` (safe, returns default if missing)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "d = {\"name\": \"Sara\", \"age\": 22}\nprint(d[\"name\"])\nprint(d.get(\"city\", \"Not Found\"))" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `d = {\"apple\": 50, \"banana\": 30}`, safely retrieve the price of `\"mango\"` with a default value of `0`.",
        starterCode: "# TODO: Given d={\"a\":1,\"b\":2}, safely access key \"c\" with a default of 0",
      },
    ],
    keyTakeaways: [
      "d[key] raises KeyError if missing; d.get(key, default) does not.",
      "Membership with in checks keys.",
      "Prefer get when absence is normal.",
    ],
  },
  "m8-t4": {
    topicId: "m8-t4",
    intro: "Dictionary methods update, pop, and clear help you manage entries.",
    blocks: [
      {
        type: "infographic",
        infographic: "dictionary-methods",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`.update()` merges dicts, `.pop()` removes a key and returns its value, `.clear()` empties the dict." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "d = {\"a\": 1, \"b\": 2}\nd.update({\"c\": 3})\nprint(d)          # {'a':1,'b':2,'c':3}\nval = d.pop(\"a\")\nprint(val, d)     # 1 {'b':2,'c':3}" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `d = {\"a\":1, \"b\":2, \"c\":3}`, remove key `\"b\"` using `.pop()` and print the resulting dict.",
        starterCode: "# TODO: Given d={\"x\":1,\"y\":2}, update with {\"z\":3}, then pop \"x\"",
      },
    ],
    keyTakeaways: [
      "update merges another mapping; pop removes a key.",
      "clear empties the dict; setdefault inserts if missing.",
      "Methods mutate the dictionary in place.",
    ],
  },
  "m8-t5": {
    topicId: "m8-t5",
    intro: "Nested dictionaries store hierarchical data — dicts inside dicts.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Dictionaries can contain other dictionaries as values — useful for representing structured/hierarchical data like JSON." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "students = {\n    \"s1\": {\"name\": \"Amit\", \"age\": 20},\n    \"s2\": {\"name\": \"Priya\", \"age\": 22}\n}\nprint(students[\"s1\"][\"name\"])   # Amit\nstudents[\"s2\"][\"age\"] = 23\nprint(students[\"s2\"])" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given a nested dict `data = {\"emp1\": {\"name\":\"Ravi\",\"salary\":50000}}`, update `emp1`'s salary to 55000 and print it.",
        starterCode: "# TODO: Create a nested dict of 2 employees each with name and salary; print one employee's salary",
      },
    ],
    keyTakeaways: [
      "Nest dicts to model hierarchical records.",
      "Access with chained keys: data['a']['b'].",
      "Keep nesting shallow when readability matters.",
    ],
  },
};
