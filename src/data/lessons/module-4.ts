import type { TopicLesson } from "@/lib/types";

export const module4Lessons: Record<string, TopicLesson> = {
  "m4-t1": {
    topicId: "m4-t1",
    intro:
      "A string is text — names, messages, column labels in a spreadsheet. In Python, you put text inside quotes.",
    blocks: [
      {
        type: "infographic",
        infographic: "creating-strings",
      },
      {
        type: "practice",
        practiceLabel: "Quotes",
        ideOnly: true,
        practicePrompt: "Run the code and see single vs double quotes.",
        starterCode:
          'message = "Hello"\nname = \'Python\'\n\nprint(message, name)',
      },
      {
        type: "practice",
        practiceLabel: "Apostrophe",
        ideOnly: true,
        practicePrompt: "Run the code — notice the apostrophe inside double quotes.",
        starterCode: 'print("It\'s a great day")',
      },
      {
        type: "practice",
        practiceLabel: "Multiline",
        ideOnly: true,
        practicePrompt: "Run the poem and see how line breaks are preserved.",
        starterCode:
          'poem = """Roses are red\nViolets are blue\nPython is fun"""\n\nprint(poem)',
      },
      {
        type: "practice",
        practiceLabel: "Type check",
        ideOnly: true,
        practicePrompt: "Run the code and confirm the type is str.",
        starterCode: 'text = "Python"\n\nprint(type(text))',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Create a string with your name and a multiline string with two favorite foods. Print both.",
        starterCode:
          'my_name = "Alex"\nfoods = """Pizza\nIce cream"""\nprint(my_name)\nprint(foods)',
      },
    ],
    keyTakeaways: [
      "Strings hold text; use \" \" or ' '.",
      "Triple quotes for multiline text.",
      "Strings are type str.",
    ],
  },
  "m4-t2": {
    topicId: "m4-t2",
    intro:
      "Often you want to mix text with variables — like a greeting with a name. f-strings are the recommended way to format strings in modern Python.",
    blocks: [
      {
        type: "infographic",
        infographic: "formatting-strings",
      },
      {
        type: "practice",
        practiceLabel: "f-Strings",
        ideOnly: true,
        practicePrompt: "Run the code and see variables inside f-strings.",
        starterCode:
          'name = "Sam"\nage = 20\n\nprint(f"Hello, {name}!")\nprint(f"Next year you will be {age + 1}")',
      },
      {
        type: "practice",
        practiceLabel: "format()",
        ideOnly: true,
        practicePrompt: "Run the code and see how .format() replaces placeholders.",
        starterCode:
          'city = "London"\n\nprint("I live in {}".format(city))\nprint("I live in {0}".format(city))',
      },
      {
        type: "practice",
        practiceLabel: "Comma print",
        ideOnly: true,
        practicePrompt: "Run the code and see comma-separated print output.",
        starterCode: 'score = 95\n\nprint("Your score is", score)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Use an f-string to print: Hello, NAME! You have N items.",
        starterCode:
          'user = "Mia"\nitems = 3\nprint(f"Hello, {user}! You have {items} items.")',
      },
    ],
    keyTakeaways: [
      "f\"...{variable}...\" is the clearest way to format strings.",
      ".format() and print(a, b) also work.",
      "You can put expressions inside {} in f-strings.",
    ],
  },
  "m4-t3": {
    topicId: "m4-t3",
    intro:
      "Each character in a string has a position called an index. Python counts from 0 — the first letter is index 0.",
    blocks: [
      {
        type: "infographic",
        infographic: "string-indexing",
      },
      {
        type: "practice",
        practiceLabel: "Basic indexing",
        ideOnly: true,
        practicePrompt: "Run the code and see characters at index 0, 1, and 2.",
        starterCode:
          'word = "Python"\n\nprint(word[0])   # P\nprint(word[1])   # y\nprint(word[2])   # t',
      },
      {
        type: "practice",
        practiceLabel: "Negative index",
        ideOnly: true,
        practicePrompt: "Run the code and see how -1, -2, -3 count from the end.",
        starterCode:
          'word = "Python"\n\nprint(word[-1])   # n\nprint(word[-2])   # o\nprint(word[-3])   # h',
      },
      {
        type: "practice",
        practiceLabel: "Index error",
        ideOnly: true,
        practicePrompt:
          "Run the code and observe the IndexError in the console.",
        starterCode: 'word = "Python"\n\nprint(word[10])',
      },
      {
        type: "practice",
        practiceLabel: "First & last",
        ideOnly: true,
        practicePrompt: "Run the code to extract first and last letters.",
        starterCode:
          'name = "Spiderboy"\n\nfirst_letter = name[0]\nlast_letter = name[-1]\n\nprint(first_letter)\nprint(last_letter)',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'For text = "Data", print the first char, third char, and last char (use -1).',
        starterCode:
          'text = "Data"\nprint(text[0])\nprint(text[2])\nprint(text[-1])',
      },
    ],
    keyTakeaways: [
      "Indexes start at 0.",
      "Use text[i] to get one character.",
      "Negative indexes count from the end.",
    ],
  },
  "m4-t4": {
    topicId: "m4-t4",
    intro:
      "Slicing means cutting out a piece of a string — a substring. You use [start:end] where end is not included.",
    blocks: [
      {
        type: "infographic",
        infographic: "string-slicing",
      },
      {
        type: "practice",
        practiceLabel: "Basic slice",
        ideOnly: true,
        practicePrompt: "Run the code and see how [start:end] extracts substrings.",
        starterCode:
          'word = "DataScience"\n\nprint(word[0:4])    # Data\nprint(word[4:11])   # Science\nprint(word[:4])     # Data\nprint(word[4:])     # Science',
      },
      {
        type: "practice",
        practiceLabel: "Step slice",
        ideOnly: true,
        practicePrompt: "Run the code and see every 2nd and 3rd character.",
        starterCode:
          'text = "Python"\n\nprint(text[::2])    # Pto\nprint(text[::3])    # Ph',
      },
      {
        type: "practice",
        practiceLabel: "Reverse",
        ideOnly: true,
        practicePrompt: "Run the code and see the reversed string.",
        starterCode: 'text = "Python"\n\nprint(text[::-1])   # nohtyP',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          'From email = "user@mail.com", slice the username and domain parts.',
        starterCode:
          'email = "user@mail.com"\nusername = email[0:4]\ndomain = email[5:]\nprint(username)\nprint(domain)',
      },
    ],
    keyTakeaways: [
      "[start:end] gives characters from start up to (not including) end.",
      "Omit start or end to slice from beginning or to the end.",
      "[::-1] reverses a string.",
    ],
  },
  "m4-t5": {
    topicId: "m4-t5",
    intro:
      "Strings come with built-in methods — handy tools for cleaning and changing text. You will use these a lot when preparing data.",
    blocks: [
      {
        type: "infographic",
        infographic: "string-methods",
      },
      {
        type: "practice",
        practiceLabel: "Case & strip",
        ideOnly: true,
        practicePrompt: "Run the code and compare upper(), lower(), and strip().",
        starterCode:
          'name = "  python  "\n\nprint(name.upper())   # "  PYTHON  "\nprint(name.lower())   # "  python  "\nprint(name.strip())   # "python"',
      },
      {
        type: "practice",
        practiceLabel: "Split & join",
        ideOnly: true,
        practicePrompt: "Run the code and see split() turn CSV into a list, then join().",
        starterCode:
          'csv_line = "apple,banana,mango"\n\nfruits = csv_line.split(",")\nprint(fruits)\n\njoined = "-".join(fruits)\nprint(joined)',
      },
      {
        type: "practice",
        practiceLabel: "Replace",
        ideOnly: true,
        practicePrompt: "Run the code and see replace() and the in operator.",
        starterCode:
          'text = "I love Python"\n\nprint(text.replace("love", "enjoy"))\nprint("Python" in text)',
      },
      {
        type: "practice",
        practiceLabel: "Length",
        ideOnly: true,
        practicePrompt: "Run the code and check the string length.",
        starterCode: 's = "Python"\n\nprint(len(s))   # 6',
      },
      {
        type: "practice",
        practiceLabel: "Start & end",
        ideOnly: true,
        practicePrompt: "Run the code and see startswith() and endswith().",
        starterCode:
          'greeting = "Hi Python"\nfile_name = "sales.csv"\n\nprint(greeting.startswith("Hi"))\nprint(file_name.endswith(".csv"))',
      },
      {
        type: "practice",
        practiceLabel: "Challenge",
        practicePrompt:
          "Clean messy = '  HELLO world  ': strip, lower, then replace 'world' with 'Python'.",
        starterCode:
          'messy = "  HELLO world  "\nclean = messy.strip().lower()\nprint(clean.replace("world", "python"))',
      },
    ],
    keyTakeaways: [
      "String methods use dot notation: text.upper(), text.split(',').",
      "Strings are immutable — store the result: clean = text.strip().lower().",
      "strip/lstrip/rstrip remove extra spaces; split/join handle CSV-style data.",
      "replace(), find(), count(), and in help search and edit text.",
    ],
  },
};
