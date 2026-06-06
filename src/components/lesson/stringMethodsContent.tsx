import type { ReactNode } from "react";

export type StringMethodEntry = {
  id: string;
  title: string;
  description: string;
  code: string;
  annotation?: { icon?: string; text: ReactNode };
  warn?: { variant: "amber" | "red" | "blue" | "teal"; text: ReactNode };
  cmpTable?: { headers: string[]; rows: string[][] };
  practiceIndex?: number;
};

export type StringMethodCategory = {
  id: string;
  pill: string;
  pillVariant: "green" | "blue" | "teal" | "purple" | "amber" | "orange" | "pink";
  heading: string;
  methods: StringMethodEntry[];
};

export const STRING_METHOD_CATEGORIES: StringMethodCategory[] = [
  {
    id: "case",
    pill: "🔤 Case",
    pillVariant: "green",
    heading: "Changing letter case",
    methods: [
      {
        id: "capitalize",
        title: "capitalize()",
        description:
          "Converts only the very first character of the string to upper case, and makes every other character lower case.",
        code: `txt = "hello WORLD"
print(txt.capitalize())  # 'Hello world'`,
        annotation: {
          text: (
            <>
              Only the first character goes upper case — all others are forced
              lower case. Different from{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                title()
              </code>{" "}
              which capitalises every word.
            </>
          ),
        },
      },
      {
        id: "casefold",
        title: "casefold()",
        description:
          "Converts the entire string to lower case. More aggressive than lower() — handles special international characters like the German ß → ss.",
        code: `txt = "Straße"
print(txt.lower())     # 'straße'
print(txt.casefold())  # 'strasse'`,
        annotation: {
          text: (
            <>
              Use{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                casefold()
              </code>{" "}
              instead of{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                lower()
              </code>{" "}
              when comparing strings from different languages — it&apos;s the
              standard for case-insensitive matching.
            </>
          ),
        },
      },
      {
        id: "lower",
        title: "lower()",
        description:
          "Returns the string with all letters converted to lower case. Numbers and symbols are unchanged.",
        code: `txt = "Hello World 123"
print(txt.lower())  # 'hello world 123'`,
      },
      {
        id: "upper",
        title: "upper()",
        description:
          "Returns the string with all letters converted to upper case.",
        code: `txt = "hello world"
print(txt.upper())  # 'HELLO WORLD'`,
      },
      {
        id: "swapcase",
        title: "swapcase()",
        description:
          "Flips every letter's case — upper becomes lower, lower becomes upper.",
        code: `txt = "Hello World"
print(txt.swapcase())  # 'hELLO wORLD'`,
      },
      {
        id: "title",
        title: "title()",
        description:
          "Converts the first letter of every word to upper case, and the rest to lower case. Useful for formatting names and headings.",
        code: `txt = "the quick brown fox"
print(txt.title())  # 'The Quick Brown Fox'`,
        annotation: {
          icon: "⚠️",
          text: (
            <>
              Any character after a non-letter (like an apostrophe) gets
              capitalised too:{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                &quot;it&apos;s&quot;
              </code>{" "}
              →{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                &quot;It&apos;S&quot;
              </code>
              . For proper name formatting, a custom function is safer.
            </>
          ),
        },
      },
    ],
  },
  {
    id: "search",
    pill: "🔍 Search & Find",
    pillVariant: "blue",
    heading: "Looking for values inside a string",
    methods: [
      {
        id: "count",
        title: "count()",
        description:
          "Returns how many times a substring appears in the string. Optional start and end arguments narrow the search range.",
        code: `txt = "banana"
print(txt.count("a"))       # 3
print(txt.count("a", 2))   # 2  ← search from index 2
print(txt.count("z"))       # 0  ← no error if not found`,
      },
      {
        id: "find",
        title: "find()",
        description:
          "Returns the index of the first occurrence of a substring. Returns -1 if not found — no error.",
        code: `txt = "hello world"
print(txt.find("world"))  # 6
print(txt.find("xyz"))    # -1  ← not found, no crash`,
        cmpTable: {
          headers: ["Method", "Not found returns"],
          rows: [
            ["find()", "-1 (safe)"],
            ["index()", "ValueError (crashes)"],
          ],
        },
      },
      {
        id: "rfind",
        title: "rfind()",
        description:
          "Like find() but searches from the right — returns the index of the last occurrence. Returns -1 if not found.",
        code: `txt = "go go go"
print(txt.find("go"))   # 0  ← first match
print(txt.rfind("go"))  # 6  ← last match`,
      },
      {
        id: "index",
        title: "index()",
        description:
          "Same as find() — returns the index of the first occurrence — but raises a ValueError if the substring is not found.",
        code: `txt = "hello"
print(txt.index("l"))   # 2
txt.index("z")          # ❌ ValueError`,
        annotation: {
          text: (
            <>
              Use{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                find()
              </code>{" "}
              when you&apos;re not sure the value exists. Use{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                index()
              </code>{" "}
              when you&apos;re certain — it signals clearly to other readers
              that you expect it to be there.
            </>
          ),
        },
      },
      {
        id: "rindex",
        title: "rindex()",
        description:
          "Like rfind() but raises ValueError if not found instead of returning -1. Finds the last occurrence.",
        code: `txt = "abcabc"
print(txt.rindex("b"))  # 4  ← last 'b'`,
      },
      {
        id: "startswith",
        title: "startswith()",
        description:
          "Returns True if the string begins with the given value. You can pass a tuple of prefixes to check multiple at once.",
        code: `txt = "hello world"
print(txt.startswith("hello"))        # True
print(txt.startswith(("hi", "hello"))) # True  ← tuple of options`,
        practiceIndex: 4,
      },
      {
        id: "endswith",
        title: "endswith()",
        description:
          "Returns True if the string ends with the given value. Also accepts a tuple of suffixes.",
        code: `filename = "report.pdf"
print(filename.endswith(".pdf"))              # True
print(filename.endswith((".pdf", ".docx")))  # True`,
        annotation: {
          text: "Commonly used to check file extensions or URL endings without importing extra libraries.",
        },
      },
    ],
  },
  {
    id: "check",
    pill: "✅ Check",
    pillVariant: "teal",
    heading: "is…() methods — all return True or False",
    methods: [
      {
        id: "isalnum",
        title: "isalnum()",
        description:
          "Returns True if every character is a letter or a digit, and the string is not empty. Spaces, punctuation, and symbols return False.",
        code: `print("abc123".isalnum())  # True
print("abc 123".isalnum()) # False  ← space fails`,
      },
      {
        id: "isalpha",
        title: "isalpha()",
        description:
          "Returns True if every character is a letter (a–z, A–Z, or Unicode letters). Digits, spaces, and symbols return False.",
        code: `print("hello".isalpha())   # True
print("hello2".isalpha())  # False`,
      },
      {
        id: "isascii",
        title: "isascii()",
        description:
          "Returns True if all characters are ASCII (code points 0–127). Returns True for an empty string.",
        code: `print("hello".isascii())   # True
print("héllo".isascii())   # False  ← é is not ASCII`,
      },
      {
        id: "isdecimal",
        title: "isdecimal()",
        description:
          "Returns True only if all characters are decimal digits (0–9). The strictest of the three digit-checking methods.",
        code: `print("123".isdecimal())   # True
print("12.3".isdecimal())  # False  ← dot fails
print("²".isdecimal())     # False  ← superscript fails`,
      },
      {
        id: "isdigit",
        title: "isdigit()",
        description:
          "Returns True if all characters are digits. Slightly broader than isdecimal() — also accepts superscript digits like ² and ³.",
        code: `print("123".isdigit())  # True
print("²".isdigit())    # True  ← superscript digit
print("12.3".isdigit()) # False`,
        cmpTable: {
          headers: ["Method", 'Accepts "123"', 'Accepts "²"', 'Accepts "½"'],
          rows: [
            ["isdecimal()", "✓", "✗", "✗"],
            ["isdigit()", "✓", "✓", "✗"],
            ["isnumeric()", "✓", "✓", "✓"],
          ],
        },
      },
      {
        id: "isnumeric",
        title: "isnumeric()",
        description:
          "The broadest digit check. Returns True for decimal digits, superscripts, fractions (½), and other Unicode numeric characters.",
        code: `print("½".isnumeric())   # True
print("123".isnumeric()) # True
print("-1".isnumeric())   # False  ← minus sign fails`,
      },
      {
        id: "isidentifier",
        title: "isidentifier()",
        description:
          "Returns True if the string is a valid Python variable name — starts with a letter or underscore, contains only letters, digits, or underscores.",
        code: `print("my_var".isidentifier())  # True
print("2fast".isidentifier())   # False  ← starts with digit
print("hello!".isidentifier())  # False  ← special char`,
      },
      {
        id: "islower",
        title: "islower()",
        description:
          "Returns True if all cased characters are lower case and there is at least one cased character. Numbers and spaces are ignored.",
        code: `print("hello".islower())    # True
print("hello 123".islower()) # True  ← digits ignored
print("Hello".islower())    # False`,
      },
      {
        id: "isupper",
        title: "isupper()",
        description:
          "Returns True if all cased characters are upper case. Numbers and spaces are ignored.",
        code: `print("HELLO".isupper())    # True
print("HELLO 123".isupper()) # True
print("Hello".isupper())    # False`,
      },
      {
        id: "isprintable",
        title: "isprintable()",
        description:
          "Returns True if all characters are printable — visible characters plus space. Non-printable characters like \\n (newline) or \\t (tab) return False.",
        code: `print("hello".isprintable())    # True
print("hello\\n".isprintable())  # False  ← newline fails`,
      },
      {
        id: "isspace",
        title: "isspace()",
        description:
          "Returns True if the string contains only whitespace characters (spaces, tabs, newlines) and is not empty.",
        code: `print("   ".isspace())    # True
print("  a  ".isspace())  # False
print("".isspace())       # False  ← empty string`,
      },
      {
        id: "istitle",
        title: "istitle()",
        description:
          "Returns True if the string follows title case — each word starts with an upper case letter and the rest are lower case.",
        code: `print("The Quick Fox".istitle())  # True
print("the Quick Fox".istitle())  # False  ← 'the' not capitalised`,
      },
    ],
  },
  {
    id: "split",
    pill: "✂️ Split & Join",
    pillVariant: "purple",
    heading: "Breaking apart and joining strings",
    methods: [
      {
        id: "split",
        title: "split()",
        description:
          "Splits the string into a list at each occurrence of the separator. Defaults to splitting on any whitespace if no separator is given.",
        code: `txt = "one,two,three"
print(txt.split(","))       # ['one', 'two', 'three']
print(txt.split(",", 1))   # ['one', 'two,three']  ← max 1 split
print("a b c".split())     # ['a', 'b', 'c']`,
        practiceIndex: 1,
      },
      {
        id: "rsplit",
        title: "rsplit()",
        description:
          "Same as split() but splits from the right. Only makes a difference when a maxsplit limit is set.",
        code: `txt = "a,b,c,d"
print(txt.split(",", 1))   # ['a', 'b,c,d']  ← from left
print(txt.rsplit(",", 1))  # ['a,b,c', 'd']  ← from right`,
      },
      {
        id: "splitlines",
        title: "splitlines()",
        description:
          'Splits the string at line breaks (\\n, \\r\\n, etc.) and returns a list of lines. Cleaner than split("\\n") for multi-line text.',
        code: `txt = "line one\\nline two\\nline three"
print(txt.splitlines())
# ['line one', 'line two', 'line three']`,
      },
      {
        id: "join",
        title: "join()",
        description:
          "The opposite of split(). Joins items from an iterable into a single string, with the string it's called on placed between each item.",
        code: `words = ["one", "two", "three"]
print(", ".join(words))  # 'one, two, three'
print("-".join(words))   # 'one-two-three'
print("".join(words))    # 'onetwothree'`,
        annotation: {
          text: (
            <>
              The separator goes before the method, not inside it.{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                &quot;, &quot;.join(list)
              </code>{" "}
              — think of it as &quot;join this list using &apos;, &apos; as
              glue.&quot;
            </>
          ),
        },
      },
      {
        id: "partition",
        title: "partition()",
        description:
          "Splits the string into a tuple of exactly 3 parts at the first occurrence of the separator: (before, separator, after).",
        code: `txt = "user@example.com"
print(txt.partition("@"))
# ('user', '@', 'example.com')`,
        annotation: {
          text: (
            <>
              Always returns a 3-item tuple — even if the separator isn&apos;t
              found, you get{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                (original, &apos;&apos;, &apos;&apos;)
              </code>
              . Useful for cleanly splitting key-value pairs.
            </>
          ),
        },
      },
      {
        id: "rpartition",
        title: "rpartition()",
        description:
          "Like partition() but splits at the last occurrence of the separator.",
        code: `txt = "path/to/file.txt"
print(txt.rpartition("/"))
# ('path/to', '/', 'file.txt')`,
      },
    ],
  },
  {
    id: "trim",
    pill: "✂️ Trim & Pad",
    pillVariant: "amber",
    heading: "Removing whitespace and aligning text",
    methods: [
      {
        id: "strip",
        title: "strip()",
        description:
          "Removes leading and trailing whitespace (or specified characters) from both ends of the string.",
        code: `txt = "  hello  "
print(txt.strip())        # 'hello'
print("##hi##".strip("#"))  # 'hi'`,
        annotation: {
          text: "The most common use is cleaning user input or file data that has accidental spaces. Works on both spaces and custom characters.",
        },
        practiceIndex: 0,
      },
      {
        id: "lstrip",
        title: "lstrip()",
        description:
          "Removes leading whitespace (or specified characters) from the left side only.",
        code: `print("  hello  ".lstrip())  # 'hello  '  ← right space kept
print("###hi".lstrip("#"))   # 'hi'`,
      },
      {
        id: "rstrip",
        title: "rstrip()",
        description:
          "Removes trailing whitespace (or specified characters) from the right side only.",
        code: `print("  hello  ".rstrip())  # '  hello'  ← left space kept
print("hi!!!".rstrip("!"))   # 'hi'`,
      },
      {
        id: "center",
        title: "center()",
        description:
          "Returns the string centered in a field of a given width, padded with spaces (or a specified character) on both sides.",
        code: `txt = "hi"
print(txt.center(10))       # '    hi    '
print(txt.center(10, "*"))  # '****hi****'`,
      },
      {
        id: "ljust",
        title: "ljust()",
        description:
          "Returns the string left-aligned in a field of a given width, padded with spaces (or a specified character) on the right.",
        code: `txt = "hi"
print(txt.ljust(10))       # 'hi        '
print(txt.ljust(10, "."))  # 'hi........'`,
      },
      {
        id: "rjust",
        title: "rjust()",
        description:
          "Returns the string right-aligned in a field of a given width, padded with spaces (or a specified character) on the left.",
        code: `txt = "hi"
print(txt.rjust(10))       # '        hi'
print(txt.rjust(10, "."))  # '........hi'`,
      },
      {
        id: "zfill",
        title: "zfill()",
        description:
          "Pads the string with leading zeros until it reaches the specified width. Preserves a leading + or - sign.",
        code: `print("42".zfill(6))    # '000042'
print("-42".zfill(6))   # '-00042'  ← sign preserved`,
        annotation: {
          text: (
            <>
              Common for formatting order numbers, IDs, or timestamps where you
              need a fixed-width string like{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                000001
              </code>
              .
            </>
          ),
        },
      },
      {
        id: "expandtabs",
        title: "expandtabs()",
        description:
          "Replaces tab characters (\\t) with spaces. Default tab size is 8; you can pass a custom size.",
        code: `txt = "H\\tello"
print(txt.expandtabs(4))   # 'H   ello'
print(txt.expandtabs(10))  # 'H         ello'`,
      },
    ],
  },
  {
    id: "format-cat",
    pill: "🖊 Format",
    pillVariant: "orange",
    heading: "Inserting values into strings",
    methods: [
      {
        id: "format",
        title: "format()",
        description:
          "Inserts values into placeholders marked by {} in the string. You can use positional or keyword arguments.",
        code: `txt = "Hello, {}! You are {} years old."
print(txt.format("Alice", 30))
# 'Hello, Alice! You are 30 years old.'

# Keyword arguments
txt2 = "Hello, {name}!"
print(txt2.format(name="Bob"))  # 'Hello, Bob!'`,
        annotation: {
          text: (
            <>
              f-strings (
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                f&quot;Hello, {'{name}'}&quot;
              </code>
              ) are the modern alternative — shorter and more readable.{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                format()
              </code>{" "}
              is still useful when you&apos;re building templates dynamically.
            </>
          ),
        },
      },
      {
        id: "format_map",
        title: "format_map()",
        description:
          "Like format(**dict) but takes a dictionary directly. Useful when your values are already stored in a dict.",
        code: `data = {"name": "Alice", "age": 30}
txt = "{name} is {age} years old."
print(txt.format_map(data))
# 'Alice is 30 years old.'`,
      },
      {
        id: "encode",
        title: "encode()",
        description:
          "Returns an encoded version of the string as a bytes object. Default encoding is UTF-8.",
        code: `txt = "hello"
print(txt.encode())           # b'hello'
print(txt.encode("ascii"))    # b'hello'
print("café".encode("utf-8")) # b'caf\\xc3\\xa9'`,
        annotation: {
          text: (
            <>
              You&apos;ll use{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                encode()
              </code>{" "}
              when writing to files in binary mode, sending data over a network,
              or working with APIs that expect bytes.
            </>
          ),
        },
      },
    ],
  },
  {
    id: "replace",
    pill: "🔁 Replace & Translate",
    pillVariant: "pink",
    heading: "Swapping characters and values",
    methods: [
      {
        id: "replace",
        title: "replace()",
        description:
          "Returns a new string with all occurrences of a substring replaced with another. An optional count limits how many replacements are made.",
        code: `txt = "I like cats and cats"
print(txt.replace("cats", "dogs"))     # 'I like dogs and dogs'
print(txt.replace("cats", "dogs", 1)) # 'I like dogs and cats'`,
        annotation: {
          text: (
            <>
              Strings are immutable —{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                replace()
              </code>{" "}
              returns a new string and leaves the original unchanged. Remember
              to assign the result:{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                txt = txt.replace(...)
              </code>
              .
            </>
          ),
        },
        practiceIndex: 2,
      },
      {
        id: "translate",
        title: "translate()",
        description:
          "Replaces each character in the string using a translation table (built with maketrans()). Faster than chaining multiple replace() calls.",
        code: `table = str.maketrans("aeiou", "12345")
txt = "hello world"
print(txt.translate(table))  # 'h2ll4 w4rld'`,
      },
      {
        id: "maketrans",
        title: "maketrans()",
        description:
          "A static method that creates a translation table for use with translate(). Maps each character in the first string to the corresponding character in the second, and optionally deletes characters in the third.",
        code: `# Map vowels, delete spaces
table = str.maketrans("aeiou", "12345", " ")
print("hello world".translate(table))  # 'h2ll4w4rld'`,
        annotation: {
          text: (
            <>
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                maketrans()
              </code>{" "}
              is always used together with{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                translate()
              </code>
              . Think of maketrans() as building the instruction map, and
              translate() as executing it.
            </>
          ),
        },
      },
    ],
  },
];

export const STRING_TOC_LINKS = STRING_METHOD_CATEGORIES.flatMap((cat) =>
  cat.methods.map((m) => ({ href: `#${m.id}`, label: `${m.title}` }))
);

export const STRING_CAT_NAV = [
  { href: "#case", label: "Case", variant: "green" as const },
  { href: "#search", label: "Search & Find", variant: "blue" as const },
  { href: "#check", label: "Check / is…()", variant: "teal" as const },
  { href: "#split", label: "Split & Join", variant: "purple" as const },
  { href: "#trim", label: "Trim & Pad", variant: "amber" as const },
  { href: "#format-cat", label: "Format", variant: "orange" as const },
  { href: "#replace", label: "Replace & Translate", variant: "pink" as const },
];
