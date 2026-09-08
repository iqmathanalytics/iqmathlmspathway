import type { TopicLesson } from "@/lib/types";

export const module4Lessons: Record<string, TopicLesson> = {
  "m4-t1": {
    topicId: "m4-t1",
    intro: "Strings store text. You create them with quotes — single, double, or triple for multiline.",
    blocks: [
      {
        type: "infographic",
        infographic: "creating-strings",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Strings are created with single, double, or triple quotes. Triple quotes allow multi-line strings." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "s1 = 'hello'\ns2 = \"world\"\ns3 = '''This is\na multi-line string'''\nprint(s1, s2)\nprint(s3)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a string variable containing the sentence: `He said, \"Python is fun!\"` (handle the quotes correctly).",
        starterCode: "# TODO: Create a multi-line string containing your name, age, and city on separate lines",
      },
    ],
    keyTakeaways: [
      "Create strings with ', \", or ''' / \"\"\".",
      "Strings are immutable sequences of characters.",
      "Escape special characters with backslash when needed.",
    ],
  },
  "m4-t2": {
    topicId: "m4-t2",
    intro: "Formatting inserts values into strings cleanly with f-strings, format(), or %.",
    blocks: [
      {
        type: "infographic",
        infographic: "formatting-strings",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "f-strings (`f\"{var}\"`) embed variables directly into strings — the modern, preferred method. `.format()` is an older alternative." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "name = \"Meera\"\nscore = 92.5\nprint(f\"{name} scored {score}%\")\nprint(\"{} scored {}%\".format(name, score))\nprint(f\"{score:.1f}\")   # formatting decimals" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `item = \"Laptop\"`, `price = 55000.567`, print `Item: Laptop, Price: $55000.57` using an f-string with formatting.",
        starterCode: "# TODO: Use an f-string to print \"Product: <name>, Price: $<price>\" with 2 decimal places",
      },
    ],
    keyTakeaways: [
      "f-strings are the preferred modern formatting style.",
      ".format() and % formatting still appear in older code.",
      "Format placeholders keep output readable and maintainable.",
    ],
  },
  "m4-t3": {
    topicId: "m4-t3",
    intro: "Indexing lets you grab a single character from a string by position.",
    blocks: [
      {
        type: "infographic",
        infographic: "string-indexing",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Each character in a string has a position (index), starting at 0. Negative indices count from the end." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "word = \"Python\"\nprint(word[0])    # P\nprint(word[-1])   # n\nprint(word[2])    # t" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `word = \"Analytics\"`, print the first character, the last character, and the character at index 3.",
        starterCode: "# TODO: Given word=\"DataScience\", print the first, last, and 5th character",
      },
    ],
    keyTakeaways: [
      "Index 0 is the first character; negative indices count from the end.",
      "Out-of-range indices raise IndexError.",
      "Indexing returns a one-character string.",
    ],
  },
  "m4-t4": {
    topicId: "m4-t4",
    intro: "Slicing extracts a substring using start:stop:step.",
    blocks: [
      {
        type: "infographic",
        infographic: "string-slicing",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`string[start:stop:step]` extracts a substring. `start` is inclusive, `stop` is exclusive." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "s = \"DataScience\"\nprint(s[0:4])    # Data\nprint(s[4:])     # Science\nprint(s[:4])     # Data\nprint(s[::-1])   # ecneicSataD (reversed)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `s = \"DataScience\"`, extract the substring `\"Science\"` using slicing.",
        starterCode: "# TODO: Given s=\"MachineLearning\", extract \"Machine\" and \"Learning\" separately using slicing",
      },
    ],
    keyTakeaways: [
      "slice[start:stop] excludes the stop index.",
      "Omit start/stop for defaults; use step to skip characters.",
      "Slicing never raises IndexError for out-of-range bounds.",
    ],
  },
  "m4-t5": {
    topicId: "m4-t5",
    intro: "String methods transform and inspect text without changing the original string.",
    blocks: [
      {
        type: "infographic",
        infographic: "string-methods",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Built-in methods manipulate strings: `.upper()`, `.lower()`, `.strip()`, `.replace()`, `.split()`, `.join()`, `.find()`, `.startswith()`, etc." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "s = \"  Hello World  \"\nprint(s.strip())            # \"Hello World\"\nprint(s.upper())            # \"  HELLO WORLD  \"\nprint(s.strip().replace(\"World\", \"Python\"))  # \"Hello Python\"\nprint(s.strip().split(\" \")) # ['Hello', 'World']\nprint(\"-\".join([\"a\",\"b\",\"c\"]))  # \"a-b-c\"" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Given `s = \" learn PYTHON today \"`, strip whitespace, convert to lowercase, and replace \"python\" with \"data science\".",
        starterCode: "# TODO: Clean the string \"  DATA science  \" -> strip spaces, lowercase it, then capitalize first letter",
      },
    ],
    keyTakeaways: [
      "Methods like upper, lower, strip, replace, split, and join are common.",
      "String methods return new strings; they do not mutate.",
      "Chain methods carefully — order matters.",
    ],
  },
};
