import type { TopicLesson } from "@/lib/types";

export const module4Lessons: Record<string, TopicLesson> = {
  "m4-t1": {
    topicId: "m4-t1",
    intro:
      "A string is text — names, messages, column labels in a spreadsheet. In Python, you put text inside quotes.",
    blocks: [
      { type: "heading", content: "Single and double quotes" },
      {
        type: "paragraph",
        content:
          'Both "hello" and \'hello\' work the same. Use whichever quote is easier when your text contains the other kind.',
      },
      {
        type: "code",
        code:
          'message = "Hello"\nname = \'Python\'\nprint(message, name)\n\n# Apostrophe inside double quotes:\nprint("It\'s a great day")',
      },
      { type: "heading", content: "Multiline strings" },
      {
        type: "paragraph",
        content: "Triple quotes \"\"\" ... \"\"\" let you write text across many lines.",
      },
      {
        type: "code",
        code:
          'poem = """Roses are red\nViolets are blue\nPython is fun"""\nprint(poem)',
      },
      {
        type: "visual",
        diagram: {
          title: "String = text in quotes",
          variant: "flow",
          nodes: [
            { id: "q", label: "Quotes", sublabel: '" or \'' },
            { id: "t", label: "Text inside", sublabel: "Your characters" },
            { id: "s", label: "str type", sublabel: "Python stores it" },
          ],
          arrows: [
            { from: "q", to: "t" },
            { from: "t", to: "s" },
          ],
        },
      },
      {
        type: "practice",
        practicePrompt: "Create a string with your name and a multiline string with two favorite foods. Print both.",
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
      { type: "heading", content: "f-strings (recommended)" },
      {
        type: "paragraph",
        content: 'Put f before the quotes. Inside {}, write a variable or expression.',
      },
      {
        type: "code",
        code:
          'name = "Sam"\nage = 20\nprint(f"Hello, {name}!")\nprint(f"Next year you will be {age + 1}")',
      },
      { type: "heading", content: ".format() method" },
      {
        type: "code",
        code: 'city = "London"\nprint("I live in {}".format(city))\nprint("I live in {0}".format(city))',
      },
      { type: "heading", content: "Comma in print()" },
      {
        type: "code",
        code: 'score = 95\nprint("Your score is", score)',
      },
      {
        type: "tip",
        content: "For data science, f-strings are perfect for quick labels in charts and reports.",
      },
      {
        type: "practice",
        practicePrompt: "Use an f-string to print: Hello, NAME! You have N items.",
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
        type: "visual",
        diagram: {
          title: 'Indexes in "Python"',
          variant: "stack",
          nodes: [
            { id: "0", label: "P", sublabel: "index 0" },
            { id: "1", label: "y", sublabel: "index 1" },
            { id: "2", label: "t", sublabel: "index 2" },
            { id: "3", label: "h", sublabel: "index 3" },
            { id: "4", label: "o", sublabel: "index 4" },
            { id: "5", label: "n", sublabel: "index 5" },
          ],
        },
      },
      {
        type: "code",
        code:
          'word = "Python"\nprint(word[0])   # P\nprint(word[1])   # y\nprint(word[-1])  # n (last character)',
      },
      {
        type: "paragraph",
        content:
          "Negative indexes count from the end: -1 is last, -2 is second-to-last.",
      },
      {
        type: "practice",
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
        type: "heading",
        content: "Basic slicing [start:end]",
      },
      {
        type: "code",
        code:
          'word = "DataScience"\nprint(word[0:4])   # Data\nprint(word[4:11])  # Science\nprint(word[:4])    # Data (from start)\nprint(word[4:])    # Science (to end)',
      },
      {
        type: "visual",
        diagram: {
          title: "word[0:4] → characters at 0,1,2,3",
          variant: "flow",
          nodes: [
            { id: "s", label: "Start 0", sublabel: "Include" },
            { id: "m", label: "Middle", sublabel: "1, 2, 3" },
            { id: "e", label: "End 4", sublabel: "Stop before" },
          ],
          arrows: [
            { from: "s", to: "m" },
            { from: "m", to: "e" },
          ],
        },
      },
      { type: "heading", content: "Step slicing [start:end:step]" },
      {
        type: "code",
        code: 'text = "Python"\nprint(text[::2])   # Pto  (every 2nd letter)\nprint(text[::-1])  # nohtyP (reverse)',
      },
      {
        type: "practice",
        practicePrompt: 'From email = "user@mail.com", slice the username and domain parts.',
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
      { type: "heading", content: "Case and whitespace" },
      {
        type: "code",
        code:
          'name = "  python  "\nprint(name.upper())      # "  PYTHON  "\nprint(name.lower())      # "  python  "\nprint(name.strip())      # "python" (trims spaces)',
      },
      { type: "heading", content: "split and join" },
      {
        type: "code",
        code:
          'csv_line = "apple,banana,mango"\nfruits = csv_line.split(",")\nprint(fruits)\n\njoined = "-".join(fruits)\nprint(joined)',
      },
      { type: "heading", content: "find and replace" },
      {
        type: "code",
        code:
          'text = "I love Python"\nprint(text.replace("love", "enjoy"))\nprint("Python" in text)  # True',
      },
      {
        type: "list",
        items: [
          "len(s) — length of string",
          "s.startswith(\"Hi\") — check beginning",
          "s.endswith(\".csv\") — check file names",
        ],
      },
      {
        type: "practice",
        practicePrompt:
          "Clean messy = '  HELLO world  ': strip, lower, then replace 'world' with 'Python'.",
        starterCode:
          'messy = "  HELLO world  "\nclean = messy.strip().lower()\nprint(clean.replace("world", "python"))',
      },
    ],
    keyTakeaways: [
      "Methods use dot: text.upper(), text.split(',').",
      "strip() removes extra spaces — common in real data.",
      "split/join help work with comma-separated values.",
    ],
  },
};
