import type { TopicLesson } from "@/lib/types";

export const module8Lessons: Record<string, TopicLesson> = {
  "m8-t1": {
    topicId: "m8-t1",
    intro:
      "A dictionary maps keys to values — like a contact book where a name (key) points to a phone number (value). Dictionaries use curly braces with key: value pairs.",
    blocks: [
      {
        type: "infographic",
        infographic: "dictionary-syntax",
      },
      {
        type: "practice",
        practiceLabel: "Create",
        ideOnly: true,
        practicePrompt:
          "Run the code and create a student dictionary with key-value pairs.",
        starterCode:
          'student = {"name": "Asha", "age": 20, "major": "Data Science"}\n\nprint(student)\nprint(type(student))',
      },
      {
        type: "practice",
        practiceLabel: "Empty",
        ideOnly: true,
        practicePrompt:
          "Run the code and create an empty dictionary with {} and dict().",
        starterCode: "empty = {}\n\nalso = dict()\n\nprint(empty)",
      },
      {
        type: "practice",
        practiceLabel: "Mixed",
        ideOnly: true,
        practicePrompt:
          "Run the code and see values of different types in one dictionary.",
        starterCode:
          'data = {\n    "name": "Asha",\n    "age": 20,\n    "marks": [90, 85, 95],\n    "address": {\n        "city": "Chennai"\n    }\n}',
      },
      {
        type: "practice",
        practiceLabel: "Unique",
        ideOnly: true,
        practicePrompt:
          "Run the code and see how duplicate keys keep only the last value.",
        starterCode:
          'student = {\n    "name": "Asha",\n    "name": "Priya"\n}\n\nprint(student)',
      },
      {
        type: "practice",
        practiceLabel: "Employee",
        ideOnly: true,
        practicePrompt:
          "Run the code and print an employee dictionary.",
        starterCode:
          'employee = {\n    "name": "John",\n    "age": 25,\n    "department": "IT"\n}\n\nprint(employee)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
        type: "infographic",
        infographic: "dictionary-keys-values",
      },
      {
        type: "practice",
        practiceLabel: "Access",
        ideOnly: true,
        practicePrompt:
          "Run the code and access values using keys in square brackets.",
        starterCode:
          'record = {"id": 101, "city": "London", "score": 88}\n\nprint(record["id"])\nprint(record["score"])',
      },
      {
        type: "practice",
        practiceLabel: "Nested",
        ideOnly: true,
        practicePrompt:
          "Run the code and access the first score from a list inside a dictionary.",
        starterCode:
          'user = {\n    "name": "Sam",\n    "scores": [90, 85, 92],\n    "active": True\n}\n\nprint(user["scores"][0])',
      },
      {
        type: "practice",
        practiceLabel: "Record",
        ideOnly: true,
        practicePrompt:
          "Run the code and print name and score from a student record.",
        starterCode:
          'student = {"name": "Asha", "age": 20, "score": 88}\n\nprint(student["name"])\nprint(student["score"])',
      },
      {
        type: "practice",
        practiceLabel: "Book",
        ideOnly: true,
        practicePrompt:
          "Run the code and print the book title and price using keys.",
        starterCode:
          'book = {"title": "Python Basics", "pages": 250, "price": 500}\n\nprint(book["title"])\nprint(book["price"])',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
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
      {
        type: "infographic",
        infographic: "dictionary-accessing",
      },
      {
        type: "practice",
        practiceLabel: "Access",
        ideOnly: true,
        practicePrompt:
          "Run the code and access a value using square brackets.",
        starterCode:
          'config = {"theme": "dark", "lang": "en"}\n\nprint(config["theme"])',
      },
      {
        type: "practice",
        practiceLabel: "get()",
        ideOnly: true,
        practicePrompt:
          "Run the code and use get() with a default for a missing key.",
        starterCode:
          'config = {"theme": "dark", "lang": "en"}\n\nprint(config.get("theme"))\nprint(config.get("font", "Arial"))',
      },
      {
        type: "practice",
        practiceLabel: "Update",
        ideOnly: true,
        practicePrompt:
          "Run the code and update an existing key in the dictionary.",
        starterCode:
          'config = {"theme": "dark", "lang": "en"}\n\nconfig["theme"] = "light"\n\nprint(config)',
      },
      {
        type: "practice",
        practiceLabel: "Add",
        ideOnly: true,
        practicePrompt:
          "Run the code and add a new key-value pair to the dictionary.",
        starterCode:
          'config = {"theme": "light", "lang": "en"}\n\nconfig["zoom"] = 100\n\nprint(config)',
      },
      {
        type: "practice",
        practiceLabel: "Student",
        ideOnly: true,
        practicePrompt:
          "Print the name, update age to 21, add city, then print the dictionary.",
        starterCode:
          'student = {"name": "Asha", "age": 20}\n\nprint(student["name"])\nstudent["age"] = 21\nstudent["city"] = "Chennai"\nprint(student)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Create scores = {"math": 80}. Add "science": 92. Change math to 85. Print with get for "history", default 0.',
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
        type: "infographic",
        infographic: "dictionary-methods",
      },
      {
        type: "practice",
        practiceLabel: "Methods",
        ideOnly: true,
        practicePrompt:
          "Run the code and print keys(), values(), and items() from a dictionary.",
        starterCode:
          'data = {"a": 1, "b": 2, "c": 3}\n\nprint(data.keys())\nprint(data.values())\nprint(data.items())',
      },
      {
        type: "practice",
        practiceLabel: "Loop",
        ideOnly: true,
        practicePrompt:
          "Run the code and loop through keys to print each key and value.",
        starterCode:
          'data = {"a": 1, "b": 2, "c": 3}\n\nfor key in data:\n    print(key, data[key])',
      },
      {
        type: "practice",
        practiceLabel: "items()",
        ideOnly: true,
        practicePrompt:
          "Run the code and loop with items() to print key → value pairs.",
        starterCode:
          'data = {"a": 1, "b": 2, "c": 3}\n\nfor key, value in data.items():\n    print(key, "→", value)',
      },
      {
        type: "practice",
        practiceLabel: "pop()",
        ideOnly: true,
        practicePrompt:
          "Run the code and use pop() to remove a key and print the result.",
        starterCode:
          'data = {"a": 1, "b": 2, "c": 3}\n\nvalue = data.pop("b")\n\nprint(value)\nprint(data)',
      },
      {
        type: "practice",
        practiceLabel: "update()",
        ideOnly: true,
        practicePrompt:
          "Run the code and use update() to merge another dictionary.",
        starterCode:
          'data = {"a": 1, "b": 2}\n\ndata.update({"c": 3, "d": 4})\n\nprint(data)',
      },
      {
        type: "practice",
        practiceLabel: "Student",
        ideOnly: true,
        practicePrompt:
          "Print all keys, all values, and loop through key-value pairs.",
        starterCode:
          'student = {"name": "Asha", "age": 20, "city": "Chennai"}\n\nprint(*student.keys())\nprint(*student.values())\nfor key, value in student.items():\n    print(key, "→", value)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'Given prices = {"apple": 1, "banana": 0.5, "mango": 2}, loop with items() and print each fruit and price.',
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
