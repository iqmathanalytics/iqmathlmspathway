import type { TopicLesson } from "@/lib/types";

export const module8Lessons: Record<string, TopicLesson> = {
  "m8-t1": {
    topicId: "m8-t1",
    intro:
      "A dictionary maps keys to values — like a contact book where a name (key) points to a phone number (value). Dictionaries use curly braces with key: value pairs.",
    blocks: [
      { type: "heading", content: "Creating dictionaries" },
      {
        type: "code",
        code:
          'student = {"name": "Asha", "age": 20, "major": "Data Science"}\nprint(student)\nprint(type(student))',
      },
      {
        type: "visual",
        diagram: {
          title: "Key → Value pairs",
          variant: "stack",
          nodes: [
            { id: "k1", label: '"name"', sublabel: "→ Asha" },
            { id: "k2", label: '"age"', sublabel: "→ 20" },
            { id: "k3", label: '"major"', sublabel: "→ Data Science" },
          ],
        },
      },
      { type: "heading", content: "Empty dictionary" },
      {
        type: "code",
        code: 'empty = {}\nalso = dict()\nprint(empty)',
      },
      {
        type: "list",
        items: [
          "Keys must be unique within one dictionary.",
          "Keys are usually strings or numbers (immutable types).",
          "Values can be any type: numbers, strings, lists, even other dicts.",
        ],
      },
      {
        type: "practice",
        practicePrompt:
          "Create a dict for a product with keys name, price, and in_stock. Print it.",
        starterCode:
          'product = {"name": "Notebook", "price": 12.5, "in_stock": True}\nprint(product)',
      },
    ],
    keyTakeaways: [
      "Syntax: {key: value, key2: value2}.",
      "Keys identify each entry; values hold the data.",
      "dict() and {} both create dictionaries.",
    ],
  },
  "m8-t2": {
    topicId: "m8-t2",
    intro:
      "Every dictionary entry has exactly one key and one value. Keys act as labels; values are the information you store and retrieve.",
    blocks: [
      {
        type: "paragraph",
        content:
          "Think of a spreadsheet row: column names are keys, cell contents are values.",
      },
      {
        type: "code",
        code:
          'record = {"id": 101, "city": "London", "score": 88}\nprint(record["id"])      # key id → 101\nprint(record["score"])   # key score → 88',
      },
      {
        type: "visual",
        diagram: {
          title: "One row as a dictionary",
          variant: "compare",
          nodes: [
            { id: "keys", label: "Keys", sublabel: "id, city, score" },
            { id: "vals", label: "Values", sublabel: "101, London, 88" },
          ],
        },
      },
      {
        type: "heading",
        content: "Nested values" },
      {
        type: "code",
        code:
          'user = {\n    "name": "Sam",\n    "scores": [90, 85, 92],\n    "active": True\n}\nprint(user["scores"][0])',
      },
      {
        type: "tip",
        content:
          "In Pandas, each row often becomes a Series or dict-like record — dictionaries are the foundation for labeled data.",
      },
      {
        type: "practice",
        practicePrompt:
          "Build a dict person with name, age, and hobbies (a list of 2 items). Print name and the first hobby.",
        starterCode:
          'person = {"name": "Mia", "age": 22, "hobbies": ["reading", "hiking"]}\nprint(person["name"])\nprint(person["hobbies"][0])',
      },
    ],
    keyTakeaways: [
      "Keys label each piece of data.",
      "Values can be any Python type, including lists and nested dicts.",
      "Keys must be unique; values can repeat.",
    ],
  },
  "m8-t3": {
    topicId: "m8-t3",
    intro:
      "Access values with square brackets or the get() method. Updating uses assignment on keys; new keys extend the dictionary.",
    blocks: [
      { type: "heading", content: "Access with [key]" },
      {
        type: "code",
        code:
          'config = {"theme": "dark", "lang": "en"}\nprint(config["theme"])\n# print(config["font"])  # KeyError if missing',
      },
      { type: "heading", content: "Safe access with get()" },
      {
        type: "code",
        code:
          'print(config.get("theme"))\nprint(config.get("font", "Arial"))  # default if missing',
      },
      { type: "heading", content: "Update and add keys" },
      {
        type: "code",
        code:
          'config["theme"] = "light"   # update\nconfig["zoom"] = 100       # new key\nprint(config)',
      },
      {
        type: "practice",
        practicePrompt:
          "Create scores = {\"math\": 80}. Add \"science\": 92. Change math to 85. Print with get for \"history\", default 0.",
        starterCode:
          'scores = {"math": 80}\nscores["science"] = 92\nscores["math"] = 85\nprint(scores)\nprint(scores.get("history", 0))',
      },
    ],
    keyTakeaways: [
      "dict[key] returns the value; raises KeyError if key is missing.",
      "get(key, default) avoids errors for missing keys.",
      "Assignment to a new key adds an entry.",
    ],
  },
  "m8-t4": {
    topicId: "m8-t4",
    intro:
      "Dictionary methods expose keys, values, and pairs. They are essential for looping and transforming records.",
    blocks: [
      {
        type: "code",
        code:
          'data = {"a": 1, "b": 2, "c": 3}\nprint(data.keys())\nprint(data.values())\nprint(data.items())',
      },
      {
        type: "heading",
        content: "Looping over a dictionary" },
      {
        type: "code",
        code:
          'for key in data:\n    print(key, data[key])\n\nfor key, value in data.items():\n    print(key, "→", value)',
      },
      {
        type: "list",
        items: [
          "keys() — all keys",
          "values() — all values",
          "items() — (key, value) pairs for looping",
          "pop(key) — remove key and return its value",
          "update(other) — merge another dict",
        ],
      },
      {
        type: "practice",
        practicePrompt:
          "Given prices = {\"apple\": 1, \"banana\": 0.5, \"mango\": 2}, loop with items() and print each fruit and price.",
        starterCode:
          'prices = {"apple": 1, "banana": 0.5, "mango": 2}\nfor fruit, price in prices.items():\n    print(fruit, price)',
      },
    ],
    keyTakeaways: [
      "keys(), values(), items() list dictionary contents.",
      "items() is best for loops over key-value pairs.",
      "pop() and update() modify the dictionary in place.",
    ],
  },
};
