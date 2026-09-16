/**
 * Module 13 — File Handling & Exception Handling.
 *
 * Replaces the generic print pack. Every task uses the API from its lesson:
 * open()/with, pathlib, try/except/finally, raise + custom exception classes,
 * and json parsing of an API payload (Pyodide has no network, so responses are
 * supplied as JSON text — the same pattern the lesson uses).
 *
 * Each problem writes to its own filename so tasks cannot interfere.
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

export function fileReadWriteTasks() {
  return [
    conceptTask({
      slug: "file-write-then-read",
      title: "Files: Write Then Read It Back",
      level: "easy",
      description:
        'Write "Data Science" to notes.txt with open(), then read the file and print its contents.',
      expected: "Data Science",
      intro: [
        seg("text", "Open "),
        seg("code", "notes.txt"),
        seg("text", " in write mode and write "),
        seg("code", "Data Science"),
        seg("text", ", then open it again and print what "),
        seg("code", "f.read()"),
        seg("text", " returns."),
      ],
      steps: [
        'with open("notes.txt", "w") as f: opens for writing and closes automatically.',
        'f.write(text) writes without adding a newline.',
        'Mode "r" (the default) reads the file back.',
      ],
      starter:
        '# TODO: write the text, then read it back and print it\nwith open("notes.txt", "w") as f:\n    pass\n',
      solution:
        'with open("notes.txt", "w") as f:\n    f.write("Data Science")\n\nwith open("notes.txt") as f:\n    print(f.read())',
      checks: [
        assertTrue(
          "notes.txt was created",
          '__import__("os").path.exists("notes.txt")',
          "Expected notes.txt to exist after your code runs",
        ),
        assertEquals(
          "file holds the right text",
          'open("notes.txt").read()',
          '"Data Science"'
        ),
      ],
      constraints: [
        'Write to a file named notes.txt',
        "Use with open(...) so the file closes itself",
        "Output must be exactly: Data Science",
      ],
      hints: [
        'with open("notes.txt", "w") as f: then f.write("Data Science")',
        'Read it with: with open("notes.txt") as f: print(f.read())',
      ],
      success: "Correct! with open(...) wrote the file and closed it for you.",
      placeholder: '# with open("notes.txt", "w") as f:',
    }),

    conceptTask({
      slug: "file-append-mode",
      title: "Files: Append a Second Line",
      level: "easy",
      description:
        'Write one line to log.txt in "w" mode, append a second in "a" mode, then print how many lines the file holds.',
      expected: "2",
      intro: [
        seg("text", "Write "),
        seg("code", "start"),
        seg("text", " to "),
        seg("code", "log.txt"),
        seg("text", ' using mode "w", then append '),
        seg("code", "end"),
        seg("text", ' using mode "a". Print how many lines the file now has.'),
      ],
      steps: [
        'Mode "w" replaces the file; mode "a" adds to the end.',
        'End each line with "\\n" so they are separate lines.',
        "read().splitlines() gives a list of lines to count.",
      ],
      starter:
        '# TODO: write, then append, then count the lines\nwith open("log.txt", "w") as f:\n    pass\n',
      solution:
        'with open("log.txt", "w") as f:\n    f.write("start\\n")\n\nwith open("log.txt", "a") as f:\n    f.write("end\\n")\n\nwith open("log.txt") as f:\n    lines = f.read().splitlines()\n\nprint(len(lines))',
      checks: [
        assertEquals(
          "both lines are in the file",
          'open("log.txt").read().splitlines()',
          '["start", "end"]'
        ),
        assertTrue(
          "append mode kept the first line",
          'open("log.txt").read().startswith("start")',
          'Mode "a" must append — "w" would have erased the first line',
        ),
      ],
      constraints: [
        'Use mode "w" first, then mode "a"',
        "End both lines with a newline",
        "Output must be exactly: 2",
      ],
      hints: [
        'with open("log.txt", "a") as f: f.write("end\\n")',
        "Count with len(f.read().splitlines())",
      ],
      placeholder: '# with open("log.txt", "a") as f:',
    }),

    conceptTask({
      slug: "file-read-second-line",
      title: "Files: Read One Line Out of Many",
      level: "easy",
      description:
        "Write three city names to cities.txt, read the file with readlines(), and print the second city.",
      expected: "Chennai",
      intro: [
        seg("text", "Write "),
        seg("code", "Mumbai, Chennai, Pune"),
        seg("text", " as three lines in "),
        seg("code", "cities.txt"),
        seg("text", ", then use "),
        seg("code", "f.readlines()"),
        seg("text", " and print the second city without its newline."),
      ],
      steps: [
        "readlines() returns a list — one string per line, newline included.",
        "Index 1 is the second line; .strip() removes the trailing newline.",
      ],
      starter:
        '# TODO: write three lines, then print the second one\nwith open("cities.txt", "w") as f:\n    pass\n',
      solution:
        'with open("cities.txt", "w") as f:\n    f.write("Mumbai\\nChennai\\nPune\\n")\n\nwith open("cities.txt") as f:\n    lines = f.readlines()\n\nprint(lines[1].strip())',
      checks: [
        assertEquals(
          "three cities were written",
          'len(open("cities.txt").read().splitlines())',
          "3"
        ),
        assertEquals(
          "second city is Chennai",
          'open("cities.txt").read().splitlines()[1]',
          '"Chennai"'
        ),
      ],
      constraints: [
        "Write all three cities, one per line",
        "Use readlines() and index 1",
        "Strip the newline before printing",
      ],
      hints: ["lines = f.readlines()", "print(lines[1].strip())"],
      placeholder: "# lines = f.readlines()",
    }),

    conceptTask({
      slug: "file-csv-total",
      title: "Files: Total a CSV Column",
      level: "medium",
      description:
        "Write a small CSV with a header, then read it back skipping the header and print the total amount.",
      expected: "100",
      intro: [
        seg("text", "Write this CSV to "),
        seg("code", "sales.csv"),
        seg("text", ": header "),
        seg("code", "item,amount"),
        seg("text", ", then "),
        seg("code", "pen,30"),
        seg("text", " and "),
        seg("code", "book,70"),
        seg("text", ". Read it back, skip the header, and print the total in "),
        seg("code", "total"),
        seg("text", "."),
      ],
      steps: [
        "A CSV line splits on commas: line.split(\",\")",
        "The amount is the second field, so index 1 — convert it with int().",
        "Skip the header row before adding anything up.",
      ],
      starter:
        '# TODO: write the CSV, then total the amount column\nwith open("sales.csv", "w") as f:\n    f.write("item,amount\\npen,30\\nbook,70\\n")\n\ntotal = 0\n',
      solution:
        'with open("sales.csv", "w") as f:\n    f.write("item,amount\\npen,30\\nbook,70\\n")\n\ntotal = 0\nwith open("sales.csv") as f:\n    rows = f.read().splitlines()[1:]\n\nfor row in rows:\n    total += int(row.split(",")[1])\n\nprint(total)',
      checks: [
        assertEquals("total is the sum of the column", "total", "100"),
        assertType("total", "int"),
        assertEquals(
          "the CSV still has a header plus two rows",
          'len(open("sales.csv").read().splitlines())',
          "3"
        ),
      ],
      vars: ["total"],
      constraints: [
        "Skip the header row",
        "Convert each amount with int()",
        "Store the running total in total",
      ],
      hints: [
        "rows = f.read().splitlines()[1:] drops the header",
        'total += int(row.split(",")[1])',
      ],
      placeholder: "# total = 0",
    }),

    conceptTask({
      slug: "file-json-roundtrip",
      title: "Files: Save and Load JSON",
      level: "medium",
      description:
        "Use json.dump to save a dict to config.json, load it back with json.load, and print one value.",
      expected: "Bangalore",
      intro: [
        seg("text", "Save "),
        seg("code", '{"city": "Bangalore", "pincode": 560001}'),
        seg("text", " to "),
        seg("code", "config.json"),
        seg("text", " with "),
        seg("code", "json.dump"),
        seg("text", ", load it into "),
        seg("code", "loaded"),
        seg("text", " with "),
        seg("code", "json.load"),
        seg("text", ", and print the city."),
      ],
      steps: [
        "json.dump(data, f) writes JSON to an open file.",
        "json.load(f) reads it back as a Python dict.",
        "Structured data survives the round trip — keys and types stay intact.",
      ],
      starter:
        '# TODO: dump the dict, then load it back\nimport json\n\nconfig = {"city": "Bangalore", "pincode": 560001}\nloaded = {}\n',
      solution:
        'import json\n\nconfig = {"city": "Bangalore", "pincode": 560001}\n\nwith open("config.json", "w") as f:\n    json.dump(config, f)\n\nwith open("config.json") as f:\n    loaded = json.load(f)\n\nprint(loaded["city"])',
      checks: [
        assertType("loaded", "dict"),
        assertEquals("the dict survived the round trip", "loaded", "config"),
        assertEquals("pincode stayed an int", 'type(loaded["pincode"]).__name__', '"int"'),
      ],
      vars: ["json", "loaded"],
      constraints: [
        "Use json.dump to write and json.load to read",
        "Store the loaded dict in loaded",
        "Output must be exactly: Bangalore",
      ],
      hints: ["json.dump(config, f) inside a with open(..., \"w\")", 'loaded = json.load(f)'],
      placeholder: "# json.dump(config, f)",
    }),

    conceptTask({
      slug: "file-loop-lines",
      title: "Files: Loop Over Every Line",
      level: "medium",
      description:
        "Write three product names to products.txt, then loop over the file object and print each name in uppercase.",
      expected: "PEN\nBOOK\nBAG",
      intro: [
        seg("text", "Write "),
        seg("code", "pen, book, bag"),
        seg("text", " as three lines in "),
        seg("code", "products.txt"),
        seg("text", ", then loop over the file object and print each name uppercased."),
      ],
      steps: [
        "for line in f: reads one line at a time — memory friendly for big files.",
        "Each line ends with a newline, so call .strip() before .upper().",
      ],
      starter:
        '# TODO: write the products, then print each in uppercase\nwith open("products.txt", "w") as f:\n    f.write("pen\\nbook\\nbag\\n")\n',
      solution:
        'with open("products.txt", "w") as f:\n    f.write("pen\\nbook\\nbag\\n")\n\nwith open("products.txt") as f:\n    for line in f:\n        print(line.strip().upper())',
      checks: [
        assertEquals(
          "file holds the three products in order",
          'open("products.txt").read().splitlines()',
          '["pen", "book", "bag"]'
        ),
      ],
      constraints: [
        "Loop over the file object directly",
        "Strip the newline before printing",
        "One uppercase name per line",
      ],
      hints: ["for line in f:", "print(line.strip().upper())"],
      placeholder: "# for line in f:",
    }),

    conceptTask({
      slug: "file-filter-to-new-file",
      title: "Files: Filter One File Into Another",
      level: "hard",
      description:
        "Read numbers from numbers.txt, write only the even ones to evens.txt, then print the list of evens.",
      expected: "[4, 8, 12]",
      intro: [
        seg("text", "Given "),
        seg("code", "numbers.txt"),
        seg("text", " with 3, 4, 7, 8, 12, read it, keep only even numbers in a list named "),
        seg("code", "evens"),
        seg("text", ", write them to "),
        seg("code", "evens.txt"),
        seg("text", " one per line, and print the list."),
      ],
      steps: [
        "Convert each line with int() before testing it.",
        "A number is even when n % 2 == 0.",
        'Write with f.write(f"{n}\\n") so each value lands on its own line.',
      ],
      starter:
        '# TODO: keep the even numbers, write them out, print the list\nwith open("numbers.txt", "w") as f:\n    f.write("3\\n4\\n7\\n8\\n12\\n")\n\nevens = []\n',
      solution:
        'with open("numbers.txt", "w") as f:\n    f.write("3\\n4\\n7\\n8\\n12\\n")\n\nwith open("numbers.txt") as f:\n    numbers = [int(line) for line in f.read().splitlines()]\n\nevens = [n for n in numbers if n % 2 == 0]\n\nwith open("evens.txt", "w") as f:\n    for n in evens:\n        f.write(f"{n}\\n")\n\nprint(evens)',
      checks: [
        assertEquals("evens list is correct", "evens", "[4, 8, 12]"),
        assertEquals(
          "evens.txt holds the same numbers",
          'open("evens.txt").read().splitlines()',
          '["4", "8", "12"]'
        ),
        assertEquals(
          "the source file was not changed",
          'open("numbers.txt").read().splitlines()',
          '["3", "4", "7", "8", "12"]'
        ),
      ],
      vars: ["evens"],
      constraints: [
        "Read from numbers.txt and write to evens.txt",
        "Keep only even numbers",
        "Output must be exactly: [4, 8, 12]",
      ],
      hints: [
        "numbers = [int(line) for line in f.read().splitlines()]",
        "evens = [n for n in numbers if n % 2 == 0]",
      ],
      placeholder: "# evens = [ ... ]",
    }),
  ];
}

export function filePathTasks() {
  return [
    conceptTask({
      slug: "path-filename",
      title: "Paths: Get the File Name",
      level: "easy",
      description:
        'Create Path("data/raw/sales.csv") and print just the file name using .name.',
      expected: "sales.csv",
      intro: [
        seg("text", "Store "),
        seg("code", 'Path("data/raw/sales.csv")'),
        seg("text", " in "),
        seg("code", "path"),
        seg("text", " and print "),
        seg("code", "path.name"),
        seg("text", " — the last part of the path."),
      ],
      steps: [
        "from pathlib import Path gives you the modern path object.",
        ".name is the file name with its extension, no folders.",
      ],
      starter:
        '# TODO: print only the file name\nfrom pathlib import Path\n\npath = Path("data/raw/sales.csv")\n',
      solution:
        'from pathlib import Path\n\npath = Path("data/raw/sales.csv")\nprint(path.name)',
      checks: [
        assertTrue("Path was imported", '"Path" in globals()', "Import Path from pathlib"),
        assertEquals("path points at the CSV", "path.as_posix()", '"data/raw/sales.csv"'),
        assertEquals("name is the last part", "path.name", '"sales.csv"'),
      ],
      vars: ["Path", "path"],
      constraints: ["Use pathlib.Path", "Print .name", "Output must be exactly: sales.csv"],
      hints: ["print(path.name)"],
      placeholder: "# print(path.name)",
    }),

    conceptTask({
      slug: "path-suffix",
      title: "Paths: Read the Extension",
      level: "easy",
      description:
        "Print the file extension of data/raw/sales.csv using .suffix.",
      expected: ".csv",
      intro: [
        seg("text", "Print "),
        seg("code", "path.suffix"),
        seg("text", " for "),
        seg("code", "data/raw/sales.csv"),
        seg("text", ". Notice the dot is included — that is how you branch on file type."),
      ],
      steps: [".suffix returns the extension including the leading dot."],
      starter:
        '# TODO: print the extension\nfrom pathlib import Path\n\npath = Path("data/raw/sales.csv")\n',
      solution:
        'from pathlib import Path\n\npath = Path("data/raw/sales.csv")\nprint(path.suffix)',
      checks: [
        assertEquals("suffix includes the dot", "path.suffix", '".csv"'),
        assertEquals("path is unchanged", "path.as_posix()", '"data/raw/sales.csv"'),
      ],
      vars: ["Path", "path"],
      constraints: ["Print .suffix", "Output must be exactly: .csv"],
      hints: ["print(path.suffix)"],
      placeholder: "# print(path.suffix)",
    }),

    conceptTask({
      slug: "path-stem",
      title: "Paths: Name Without Extension",
      level: "easy",
      description:
        "Print the file name without its extension using .stem.",
      expected: "sales",
      intro: [
        seg("text", "Print "),
        seg("code", "path.stem"),
        seg("text", " — the file name with the extension removed. Handy for naming outputs after inputs."),
      ],
      steps: [".stem is .name minus .suffix."],
      starter:
        '# TODO: print the stem\nfrom pathlib import Path\n\npath = Path("data/raw/sales.csv")\n',
      solution:
        'from pathlib import Path\n\npath = Path("data/raw/sales.csv")\nprint(path.stem)',
      checks: [
        assertEquals("stem drops the extension", "path.stem", '"sales"'),
        assertEquals("suffix is still available", "path.suffix", '".csv"'),
      ],
      vars: ["Path", "path"],
      constraints: ["Print .stem", "Output must be exactly: sales"],
      hints: ["print(path.stem)"],
      placeholder: "# print(path.stem)",
    }),

    conceptTask({
      slug: "path-join-parts",
      title: "Paths: Join Folders Safely",
      level: "medium",
      description:
        "Build reports/q1/summary.txt with the / operator and print it with as_posix().",
      expected: "reports/q1/summary.txt",
      intro: [
        seg("text", "Join "),
        seg("code", "reports"),
        seg("text", ", "),
        seg("code", "q1"),
        seg("text", ", and "),
        seg("code", "summary.txt"),
        seg("text", " with the "),
        seg("code", "/"),
        seg("text", " operator into "),
        seg("code", "report_path"),
        seg("text", ", then print "),
        seg("code", "report_path.as_posix()"),
        seg("text", "."),
      ],
      steps: [
        "Path objects join with / instead of string concatenation.",
        "as_posix() prints forward slashes on every operating system.",
      ],
      starter:
        '# TODO: join the three parts\nfrom pathlib import Path\n\nreport_path = None\n',
      solution:
        'from pathlib import Path\n\nreport_path = Path("reports") / "q1" / "summary.txt"\nprint(report_path.as_posix())',
      checks: [
        assertEquals(
          "parts joined in order",
          "report_path.as_posix()",
          '"reports/q1/summary.txt"'
        ),
        assertEquals("file name is correct", "report_path.name", '"summary.txt"'),
      ],
      vars: ["Path", "report_path"],
      constraints: [
        "Use the / operator to join",
        "Print with as_posix()",
        "Output must be exactly: reports/q1/summary.txt",
      ],
      hints: ['report_path = Path("reports") / "q1" / "summary.txt"'],
      placeholder: "# report_path = Path('reports') / ...",
    }),

    conceptTask({
      slug: "path-parent",
      title: "Paths: Find the Folder",
      level: "medium",
      description:
        "Print the folder that contains data/raw/sales.csv using .parent and as_posix().",
      expected: "data/raw",
      intro: [
        seg("text", "Print the containing folder of "),
        seg("code", "data/raw/sales.csv"),
        seg("text", " with "),
        seg("code", "path.parent.as_posix()"),
        seg("text", "."),
      ],
      steps: [
        ".parent gives the folder as another Path.",
        "Chain as_posix() so the separator is always a forward slash.",
      ],
      starter:
        '# TODO: print the parent folder\nfrom pathlib import Path\n\npath = Path("data/raw/sales.csv")\n',
      solution:
        'from pathlib import Path\n\npath = Path("data/raw/sales.csv")\nprint(path.parent.as_posix())',
      checks: [
        assertEquals("parent is the folder", "path.parent.as_posix()", '"data/raw"'),
        assertEquals("grandparent works too", "path.parent.parent.as_posix()", '"data"'),
      ],
      vars: ["Path", "path"],
      constraints: ["Use .parent", "Print with as_posix()", "Output must be exactly: data/raw"],
      hints: ["print(path.parent.as_posix())"],
      placeholder: "# print(path.parent.as_posix())",
    }),

    conceptTask({
      slug: "path-with-suffix",
      title: "Paths: Swap the Extension",
      level: "medium",
      description:
        "Turn sales.csv into sales.json using with_suffix() and print the new file name.",
      expected: "sales.json",
      intro: [
        seg("text", "Convert "),
        seg("code", "data/raw/sales.csv"),
        seg("text", " to a JSON path with "),
        seg("code", 'with_suffix(".json")'),
        seg("text", ", store it in "),
        seg("code", "json_path"),
        seg("text", ", and print its "),
        seg("code", "name"),
        seg("text", "."),
      ],
      steps: [
        'with_suffix(".json") returns a new Path — the original is unchanged.',
        "This is the safe way to derive an output file from an input file.",
      ],
      starter:
        '# TODO: swap .csv for .json\nfrom pathlib import Path\n\npath = Path("data/raw/sales.csv")\njson_path = None\n',
      solution:
        'from pathlib import Path\n\npath = Path("data/raw/sales.csv")\njson_path = path.with_suffix(".json")\nprint(json_path.name)',
      checks: [
        assertEquals("extension swapped", "json_path.suffix", '".json"'),
        assertEquals(
          "folder is preserved",
          "json_path.as_posix()",
          '"data/raw/sales.json"'
        ),
        assertEquals("original path untouched", "path.suffix", '".csv"'),
      ],
      vars: ["Path", "path", "json_path"],
      constraints: [
        "Use with_suffix()",
        "Keep the original path unchanged",
        "Output must be exactly: sales.json",
      ],
      hints: ['json_path = path.with_suffix(".json")', "print(json_path.name)"],
      placeholder: "# json_path = path.with_suffix('.json')",
    }),

    conceptTask({
      slug: "path-exists-check",
      title: "Paths: Does the File Exist?",
      level: "hard",
      description:
        "Create a real file, then print exists() for that file and for one that was never created.",
      expected: "True\nFalse",
      intro: [
        seg("text", "Write a file called "),
        seg("code", "found.txt"),
        seg("text", ", then print "),
        seg("code", "Path(\"found.txt\").exists()"),
        seg("text", " and "),
        seg("code", "Path(\"missing.txt\").exists()"),
        seg("text", " — the guard every data script needs before reading."),
      ],
      steps: [
        "exists() returns True only when the path is really on disk.",
        "Path objects have write_text() as a one-line way to create a file.",
      ],
      starter:
        '# TODO: create one file, then check both paths\nfrom pathlib import Path\n',
      solution:
        'from pathlib import Path\n\nPath("found.txt").write_text("ok")\n\nprint(Path("found.txt").exists())\nprint(Path("missing.txt").exists())',
      checks: [
        assertTrue(
          "found.txt was really created",
          'Path("found.txt").exists()',
          "Create found.txt before checking it",
        ),
        assertTrue(
          "missing.txt must not be created",
          'not Path("missing.txt").exists()',
          "missing.txt should stay missing — that is the False case",
        ),
      ],
      vars: ["Path"],
      constraints: [
        "Create found.txt but not missing.txt",
        "Print True on line 1 and False on line 2",
      ],
      hints: ['Path("found.txt").write_text("ok")', "print(Path(\"found.txt\").exists())"],
      placeholder: "# Path('found.txt').write_text('ok')",
    }),
  ];
}

export function tryExceptTasks() {
  return [
    conceptTask({
      slug: "try-zero-division",
      title: "Errors: Catch a Division by Zero",
      level: "easy",
      description:
        'Divide 10 by 0 inside try, set message to "Cannot divide by zero" in the except block, and print it.',
      expected: "Cannot divide by zero",
      intro: [
        seg("text", "Put "),
        seg("code", "10 / 0"),
        seg("text", " inside a "),
        seg("code", "try"),
        seg("text", " block. In "),
        seg("code", "except ZeroDivisionError"),
        seg("text", ", set "),
        seg("code", "message"),
        seg("text", ' to "Cannot divide by zero", then print it.'),
      ],
      steps: [
        "An uncaught error stops the whole program — catching it keeps you running.",
        "Name the specific error type so unrelated bugs still surface.",
      ],
      starter:
        '# TODO: catch the division error and set message\nmessage = ""\n\ntry:\n    pass\nexcept ZeroDivisionError:\n    pass\n',
      solution: `message = ""

try:
    value = 10 / 0
except ZeroDivisionError:
    message = "Cannot divide by zero"

print(message)`,
      checks: [
        assertEquals(
          "message was set by the except block",
          "message",
          '"Cannot divide by zero"'
        ),
        assertTrue(
          "ZeroDivisionError really is the right error",
          'issubclass(ZeroDivisionError, ArithmeticError)',
          "ZeroDivisionError is the error Python raises for x / 0",
        ),
      ],
      vars: ["message"],
      constraints: [
        "Use try / except ZeroDivisionError",
        "Set message inside the except block",
        "Output must be exactly: Cannot divide by zero",
      ],
      hints: [
        "try:\n    value = 10 / 0",
        'except ZeroDivisionError:\n    message = "Cannot divide by zero"',
      ],
      placeholder: "# try: 10 / 0",
    }),

    conceptTask({
      slug: "try-value-error",
      title: "Errors: Handle a Bad Number",
      level: "easy",
      description:
        'Convert "abc" with int() inside try and set status to "invalid number" when ValueError is raised.',
      expected: "invalid number",
      intro: [
        seg("text", "Calling "),
        seg("code", 'int("abc")'),
        seg("text", " raises "),
        seg("code", "ValueError"),
        seg("text", ". Catch it and set "),
        seg("code", "status"),
        seg("text", ' to "invalid number", then print status.'),
      ],
      steps: [
        "Dirty data is the usual source of ValueError when casting.",
        "Catching it lets you flag the row instead of crashing the run.",
      ],
      starter:
        '# TODO: catch the bad conversion\nraw = "abc"\nstatus = "ok"\n\ntry:\n    pass\nexcept ValueError:\n    pass\n',
      solution: `raw = "abc"
status = "ok"

try:
    number = int(raw)
except ValueError:
    status = "invalid number"

print(status)`,
      checks: [
        assertEquals("status was flipped by the except block", "status", '"invalid number"'),
        assertEquals("the raw value is untouched", "raw", '"abc"'),
      ],
      vars: ["raw", "status"],
      constraints: [
        "Use try / except ValueError",
        "Convert raw with int() inside the try",
        "Output must be exactly: invalid number",
      ],
      hints: ["try:\n    number = int(raw)", 'except ValueError:\n    status = "invalid number"'],
      placeholder: "# try: int(raw)",
    }),

    conceptTask({
      slug: "try-finally-order",
      title: "Errors: finally Always Runs",
      level: "easy",
      description:
        "Record the order of a try block and a finally block in a list named steps, then print the list.",
      expected: "['open', 'close']",
      intro: [
        seg("text", "Append "),
        seg("code", '"open"'),
        seg("text", " inside "),
        seg("code", "try"),
        seg("text", " and "),
        seg("code", '"close"'),
        seg("text", " inside "),
        seg("code", "finally"),
        seg("text", ", then print "),
        seg("code", "steps"),
        seg("text", " to prove cleanup ran."),
      ],
      steps: [
        "finally runs whether or not an error happened.",
        "That is why it is the right place to close files and connections.",
      ],
      starter:
        '# TODO: record both steps in order\nsteps = []\n\ntry:\n    pass\nfinally:\n    pass\n',
      solution: `steps = []

try:
    steps.append("open")
finally:
    steps.append("close")

print(steps)`,
      checks: [
        assertEquals("both blocks ran in order", "steps", '["open", "close"]'),
        assertType("steps", "list"),
      ],
      vars: ["steps"],
      constraints: [
        "Use try / finally",
        'Append "open" in try and "close" in finally',
        "Output must be exactly: ['open', 'close']",
      ],
      hints: ['steps.append("open") inside try', 'steps.append("close") inside finally'],
      placeholder: "# try: steps.append('open')",
    }),

    conceptTask({
      slug: "try-key-error",
      title: "Errors: Missing Dictionary Key",
      level: "medium",
      description:
        'Read a missing key from a dict inside try and set region to "unknown" when KeyError is raised.',
      expected: "unknown",
      intro: [
        seg("text", "Read "),
        seg("code", 'row["region"]'),
        seg("text", " from a row that has no region. Catch "),
        seg("code", "KeyError"),
        seg("text", " and set "),
        seg("code", "region"),
        seg("text", ' to "unknown", then print it.'),
      ],
      steps: [
        "Square-bracket access raises KeyError when the key is absent.",
        "Catching it is how you survive incomplete records.",
      ],
      starter:
        '# TODO: handle the missing key\nrow = {"item": "pen", "revenue": 30}\nregion = ""\n\ntry:\n    pass\nexcept KeyError:\n    pass\n',
      solution: `row = {"item": "pen", "revenue": 30}
region = ""

try:
    region = row["region"]
except KeyError:
    region = "unknown"

print(region)`,
      checks: [
        assertEquals("region fell back to unknown", "region", '"unknown"'),
        assertTrue(
          "the row really has no region key",
          '"region" not in row',
          "Do not add a region key to the row — handle the KeyError instead",
        ),
      ],
      vars: ["row", "region"],
      constraints: [
        "Use try / except KeyError",
        "Do not add the missing key to the dict",
        "Output must be exactly: unknown",
      ],
      hints: ['try:\n    region = row["region"]', 'except KeyError:\n    region = "unknown"'],
      placeholder: "# try: row['region']",
    }),

    conceptTask({
      slug: "try-else-clause",
      title: "Errors: The else Branch",
      level: "medium",
      description:
        "Use try / except / else so the else branch reports a successful conversion of \"42\".",
      expected: "parsed 42",
      intro: [
        seg("text", "Convert "),
        seg("code", '"42"'),
        seg("text", " with "),
        seg("code", "int()"),
        seg("text", ". Set "),
        seg("code", "outcome"),
        seg("text", ' to "invalid" in except and to '),
        seg("code", 'f"parsed {number}"'),
        seg("text", " in the "),
        seg("code", "else"),
        seg("text", " branch, then print it."),
      ],
      steps: [
        "else runs only when the try block raised nothing.",
        "Keeping the success path in else makes the happy path obvious.",
      ],
      starter:
        '# TODO: report success from the else branch\nraw = "42"\noutcome = ""\n\ntry:\n    pass\nexcept ValueError:\n    pass\nelse:\n    pass\n',
      solution: `raw = "42"
outcome = ""

try:
    number = int(raw)
except ValueError:
    outcome = "invalid"
else:
    outcome = f"parsed {number}"

print(outcome)`,
      checks: [
        assertEquals("else branch produced the message", "outcome", '"parsed 42"'),
        assertEquals("the conversion really happened", "number", "42"),
        assertType("number", "int"),
      ],
      vars: ["raw", "outcome"],
      constraints: [
        "Use try / except ValueError / else",
        "Build the message with an f-string in else",
        "Output must be exactly: parsed 42",
      ],
      hints: ["else:\n    outcome = f\"parsed {number}\""],
      placeholder: "# else: outcome = ...",
    }),

    conceptTask({
      slug: "try-collect-valid",
      title: "Errors: Skip the Bad Rows",
      level: "medium",
      description:
        'Convert ["4", "x", "7"] to ints, skipping values that raise ValueError, and print the clean list.',
      expected: "[4, 7]",
      intro: [
        seg("text", "Loop over "),
        seg("code", '["4", "x", "7"]'),
        seg("text", " and convert each with "),
        seg("code", "int()"),
        seg("text", ". Collect successful values in "),
        seg("code", "clean"),
        seg("text", " and skip the ones that raise "),
        seg("code", "ValueError"),
        seg("text", "."),
      ],
      steps: [
        "Put the try block inside the loop so one bad value does not stop the rest.",
        "continue (or simply pass) skips the failing row.",
      ],
      starter:
        '# TODO: keep only the values that convert\nraw_values = ["4", "x", "7"]\nclean = []\n',
      solution: `raw_values = ["4", "x", "7"]
clean = []

for raw in raw_values:
    try:
        clean.append(int(raw))
    except ValueError:
        continue

print(clean)`,
      checks: [
        assertEquals("only convertible values kept", "clean", "[4, 7]"),
        assertEquals("the source list is unchanged", "raw_values", '["4", "x", "7"]'),
        assertTrue(
          "values were converted to int",
          "all(isinstance(v, int) for v in clean)",
          "Expected clean to hold integers, not strings",
        ),
      ],
      vars: ["raw_values", "clean"],
      constraints: [
        "Handle the error inside the loop",
        "Do not remove items from raw_values",
        "Output must be exactly: [4, 7]",
      ],
      hints: [
        "for raw in raw_values:\n    try:\n        clean.append(int(raw))",
        "except ValueError:\n        continue",
      ],
      placeholder: "# for raw in raw_values:",
    }),

    conceptTask({
      slug: "try-safe-divide",
      title: "Errors: A Safe Divide Function",
      level: "hard",
      description:
        "Write safe_divide(a, b) that returns the quotient or None when b is zero, then print two calls.",
      expected: "5.0\nNone",
      intro: [
        seg("text", "Define "),
        seg("code", "safe_divide(a, b)"),
        seg("text", " that returns "),
        seg("code", "a / b"),
        seg("text", " but returns "),
        seg("code", "None"),
        seg("text", " when "),
        seg("code", "ZeroDivisionError"),
        seg("text", " is raised. Print "),
        seg("code", "safe_divide(10, 2)"),
        seg("text", " then "),
        seg("code", "safe_divide(5, 0)"),
        seg("text", "."),
      ],
      steps: [
        "Put try / except inside the function and return from both branches.",
        "Returning None lets the caller decide what a failed division means.",
        "10 / 2 is 5.0 — true division always returns a float.",
      ],
      starter:
        "# TODO: return the quotient, or None when b is 0\ndef safe_divide(a, b):\n    pass\n",
      solution: `def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

print(safe_divide(10, 2))
print(safe_divide(5, 0))`,
      checks: [
        assertTrue(
          "safe_divide is defined",
          "callable(safe_divide)",
          "Define a function named safe_divide",
        ),
        assertEquals("normal division works", "safe_divide(10, 2)", "5.0"),
        assertTrue(
          "divide by zero returns None",
          "safe_divide(5, 0) is None",
          "Expected safe_divide(5, 0) to return None",
        ),
        assertEquals("works for other inputs too", "safe_divide(9, 3)", "3.0"),
      ],
      constraints: [
        "Define a function named safe_divide",
        "Return values — do not print inside the function",
        "Handle ZeroDivisionError only",
      ],
      hints: [
        "def safe_divide(a, b):\n    try:\n        return a / b",
        "except ZeroDivisionError:\n        return None",
      ],
      placeholder: "# def safe_divide(a, b):",
    }),
  ];
}

export function customExceptionTasks() {
  return [
    conceptTask({
      slug: "raise-value-error",
      title: "Raise: Reject Bad Input",
      level: "easy",
      description:
        'Raise ValueError("Age cannot be negative"), catch it, and print the message with str(e).',
      expected: "Age cannot be negative",
      intro: [
        seg("text", "Use "),
        seg("code", 'raise ValueError("Age cannot be negative")'),
        seg("text", " inside a try block, catch it as "),
        seg("code", "e"),
        seg("text", ", store "),
        seg("code", "str(e)"),
        seg("text", " in "),
        seg("code", "message"),
        seg("text", ", and print it."),
      ],
      steps: [
        "raise creates an error on purpose — that is how you reject bad input.",
        "except ValueError as e binds the exception object to e.",
        "str(e) is the message you passed in.",
      ],
      starter:
        '# TODO: raise, catch, and read the message\nmessage = ""\n\ntry:\n    pass\nexcept ValueError as e:\n    pass\n',
      solution: `message = ""

try:
    raise ValueError("Age cannot be negative")
except ValueError as e:
    message = str(e)

print(message)`,
      checks: [
        assertEquals("message came from the exception", "message", '"Age cannot be negative"'),
        assertType("message", "str"),
      ],
      vars: ["message"],
      constraints: [
        "Raise the error yourself with raise",
        "Read the text with str(e)",
        "Output must be exactly: Age cannot be negative",
      ],
      hints: ['raise ValueError("Age cannot be negative")', "except ValueError as e:\n    message = str(e)"],
      placeholder: "# raise ValueError(...)",
    }),

    conceptTask({
      slug: "custom-exception-class",
      title: "Raise: Your Own Exception Class",
      level: "easy",
      description:
        "Define DataError as a subclass of Exception, raise it, catch it, and print its message.",
      expected: "bad row",
      intro: [
        seg("text", "Define "),
        seg("code", "class DataError(Exception)"),
        seg("text", ", raise it with the message "),
        seg("code", "bad row"),
        seg("text", ", then catch "),
        seg("code", "DataError"),
        seg("text", " and print the message."),
      ],
      steps: [
        "Subclassing Exception is all it takes to create a domain-specific error.",
        "pass is a valid body when the class adds no new behaviour.",
        "Named errors let callers catch exactly your failure and nothing else.",
      ],
      starter:
        "# TODO: define, raise, and catch your own error\nclass DataError(Exception):\n    pass\n",
      solution: `class DataError(Exception):
    pass

try:
    raise DataError("bad row")
except DataError as e:
    print(e)`,
      checks: [
        assertTrue(
          "DataError subclasses Exception",
          "issubclass(DataError, Exception)",
          "DataError must inherit from Exception",
        ),
        assertEquals("the message is carried", 'str(DataError("bad row"))', '"bad row"'),
      ],
      constraints: [
        "Define a class named DataError that inherits from Exception",
        "Raise and catch it in the same program",
        "Output must be exactly: bad row",
      ],
      hints: ["class DataError(Exception):\n    pass", 'raise DataError("bad row")'],
      placeholder: "# class DataError(Exception):",
    }),

    conceptTask({
      slug: "raise-error-name",
      title: "Raise: Report the Error Type",
      level: "easy",
      description:
        "Catch your own DataError and print the class name using type(e).__name__.",
      expected: "DataError",
      intro: [
        seg("text", "Raise "),
        seg("code", "DataError"),
        seg("text", " and, in the except block, store "),
        seg("code", "type(e).__name__"),
        seg("text", " in "),
        seg("code", "error_name"),
        seg("text", " and print it. Logs use this to say which error occurred."),
      ],
      steps: [
        "type(e) is the exception class; .__name__ is its name as a string.",
        "This is what appears in a traceback's last line.",
      ],
      starter:
        '# TODO: capture the error class name\nclass DataError(Exception):\n    pass\n\nerror_name = ""\n',
      solution: `class DataError(Exception):
    pass

error_name = ""

try:
    raise DataError("row 12 failed")
except DataError as e:
    error_name = type(e).__name__

print(error_name)`,
      checks: [
        assertEquals("error_name is the class name", "error_name", '"DataError"'),
        assertTrue(
          "DataError is a real exception class",
          "issubclass(DataError, Exception)",
          "DataError must inherit from Exception",
        ),
      ],
      vars: ["error_name"],
      constraints: [
        "Use type(e).__name__ — do not type the name as a string",
        "Output must be exactly: DataError",
      ],
      hints: ["error_name = type(e).__name__"],
      placeholder: "# error_name = type(e).__name__",
    }),

    conceptTask({
      slug: "raise-validate-units",
      title: "Raise: Validate Units Sold",
      level: "medium",
      description:
        "Write check_units(n) that returns n but raises ValueError for non-positive input, then show both paths.",
      expected: "5\nunits must be positive",
      intro: [
        seg("text", "Define "),
        seg("code", "check_units(n)"),
        seg("text", " that returns "),
        seg("code", "n"),
        seg("text", " when it is positive and raises "),
        seg("code", 'ValueError("units must be positive")'),
        seg("text", " otherwise. Print "),
        seg("code", "check_units(5)"),
        seg("text", ", then catch the error from "),
        seg("code", "check_units(-2)"),
        seg("text", " and print it."),
      ],
      steps: [
        "Validate first, then return — a guard clause keeps the happy path flat.",
        "The caller decides how to handle the error, so raise instead of printing.",
      ],
      starter:
        "# TODO: guard against non-positive units\ndef check_units(n):\n    pass\n",
      solution: `def check_units(n):
    if n <= 0:
        raise ValueError("units must be positive")
    return n

print(check_units(5))

try:
    check_units(-2)
except ValueError as e:
    print(e)`,
      checks: [
        assertEquals("valid input is returned", "check_units(5)", "5"),
        {
          label: "negative input raises ValueError",
          code: `try:
    check_units(-1)
    raise AssertionError("Expected ValueError for -1, got no error")
except ValueError:
    pass`,
        },
        {
          label: "zero is rejected too",
          code: `try:
    check_units(0)
    raise AssertionError("Expected ValueError for 0, got no error")
except ValueError:
    pass`,
        },
      ],
      constraints: [
        "Define a function named check_units",
        "Raise ValueError with the exact message",
        "Reject zero as well as negatives",
      ],
      hints: [
        'if n <= 0:\n        raise ValueError("units must be positive")',
        "Catch it with except ValueError as e: print(e)",
      ],
      placeholder: "# def check_units(n):",
    }),

    conceptTask({
      slug: "raise-exception-attribute",
      title: "Raise: Carry Data on the Exception",
      level: "medium",
      description:
        "Give MissingColumn a .column attribute so the handler can print which column was missing.",
      expected: "revenue",
      intro: [
        seg("text", "Define "),
        seg("code", "MissingColumn"),
        seg("text", " with an "),
        seg("code", "__init__"),
        seg("text", " that stores "),
        seg("code", "self.column"),
        seg("text", ". Raise it for "),
        seg("code", "revenue"),
        seg("text", ", then print "),
        seg("code", "e.column"),
        seg("text", " in the handler."),
      ],
      steps: [
        "Call super().__init__(message) so the exception still has readable text.",
        "Extra attributes let the handler react without parsing the message.",
      ],
      starter:
        "# TODO: store the column name on the exception\nclass MissingColumn(Exception):\n    def __init__(self, column):\n        pass\n",
      solution: `class MissingColumn(Exception):
    def __init__(self, column):
        super().__init__(f"missing column: {column}")
        self.column = column

try:
    raise MissingColumn("revenue")
except MissingColumn as e:
    print(e.column)`,
      checks: [
        assertTrue(
          "MissingColumn subclasses Exception",
          "issubclass(MissingColumn, Exception)",
          "MissingColumn must inherit from Exception",
        ),
        assertEquals(
          "the column is stored on the instance",
          'MissingColumn("units").column',
          '"units"'
        ),
        assertTrue(
          "the message still mentions the column",
          '"units" in str(MissingColumn("units"))',
          "Pass the message to super().__init__ so str(e) stays useful",
        ),
      ],
      constraints: [
        "Store the column name in self.column",
        "Call super().__init__ with a readable message",
        "Output must be exactly: revenue",
      ],
      hints: [
        "super().__init__(f\"missing column: {column}\")",
        "self.column = column",
      ],
      placeholder: "# self.column = column",
    }),

    conceptTask({
      slug: "raise-exception-hierarchy",
      title: "Raise: An Error Hierarchy",
      level: "hard",
      description:
        "Define PipelineError and a LoadError subclass, raise the subclass, catch it by the base class, and print its name.",
      expected: "LoadError",
      intro: [
        seg("text", "Define "),
        seg("code", "PipelineError(Exception)"),
        seg("text", " and "),
        seg("code", "LoadError(PipelineError)"),
        seg("text", ". Raise "),
        seg("code", "LoadError"),
        seg("text", ", catch "),
        seg("code", "PipelineError"),
        seg("text", ", and print the actual class name."),
      ],
      steps: [
        "A base class lets callers catch every failure from your pipeline at once.",
        "Catching the base still catches every subclass.",
        "type(e).__name__ reveals which specific error was raised.",
      ],
      starter:
        "# TODO: build the hierarchy, raise the child, catch the parent\nclass PipelineError(Exception):\n    pass\n",
      solution: `class PipelineError(Exception):
    pass

class LoadError(PipelineError):
    pass

try:
    raise LoadError("could not read the CSV")
except PipelineError as e:
    print(type(e).__name__)`,
      checks: [
        assertTrue(
          "LoadError inherits from PipelineError",
          "issubclass(LoadError, PipelineError)",
          "LoadError must be a subclass of PipelineError",
        ),
        assertTrue(
          "PipelineError inherits from Exception",
          "issubclass(PipelineError, Exception)",
          "PipelineError must inherit from Exception",
        ),
        assertTrue(
          "catching the base catches the child",
          "isinstance(LoadError('x'), PipelineError)",
          "A LoadError instance must also be a PipelineError",
        ),
      ],
      constraints: [
        "LoadError must subclass PipelineError",
        "Catch PipelineError, not LoadError",
        "Output must be exactly: LoadError",
      ],
      hints: ["class LoadError(PipelineError):\n    pass", "print(type(e).__name__)"],
      placeholder: "# class LoadError(PipelineError):",
    }),

    conceptTask({
      slug: "raise-validate-row",
      title: "Raise: Validate a Data Row",
      level: "hard",
      description:
        "Write validate(row) that raises MissingColumn for absent required columns and returns the revenue otherwise.",
      expected: "250\nmissing revenue",
      intro: [
        seg("text", "Define "),
        seg("code", "MissingColumn"),
        seg("text", " and "),
        seg("code", "validate(row)"),
        seg("text", " which checks that both "),
        seg("code", "region"),
        seg("text", " and "),
        seg("code", "revenue"),
        seg("text", " are present, raising "),
        seg("code", "MissingColumn(column)"),
        seg("text", " for the first one missing and otherwise returning the revenue."),
      ],
      steps: [
        "Loop the required column names and check each with the in operator.",
        "Raise as soon as one is missing — fail fast on bad rows.",
        'Print the caught error as f"missing {e}" for the second line.',
      ],
      starter:
        '# TODO: validate the required columns\nclass MissingColumn(Exception):\n    pass\n\ndef validate(row):\n    pass\n',
      solution: `class MissingColumn(Exception):
    pass

def validate(row):
    for column in ("region", "revenue"):
        if column not in row:
            raise MissingColumn(column)
    return row["revenue"]

print(validate({"region": "South", "revenue": 250}))

try:
    validate({"region": "North"})
except MissingColumn as e:
    print(f"missing {e}")`,
      checks: [
        assertEquals(
          "a complete row returns its revenue",
          'validate({"region": "South", "revenue": 250})',
          "250"
        ),
        {
          label: "a row without revenue raises MissingColumn",
          code: `try:
    validate({"region": "North"})
    raise AssertionError("Expected MissingColumn when revenue is absent")
except MissingColumn as _e:
    assert str(_e) == "revenue", f"Expected the error to name revenue, got {str(_e)!r}"`,
        },
        {
          label: "a row without region raises too",
          code: `try:
    validate({"revenue": 10})
    raise AssertionError("Expected MissingColumn when region is absent")
except MissingColumn:
    pass`,
        },
      ],
      constraints: [
        "Required columns: region and revenue",
        "Raise MissingColumn naming the missing column",
        "Return row[\"revenue\"] when the row is complete",
      ],
      hints: [
        'for column in ("region", "revenue"):\n        if column not in row:\n            raise MissingColumn(column)',
        'print(f"missing {e}")',
      ],
      placeholder: "# def validate(row):",
    }),
  ];
}

export function apiTasks() {
  return [
    conceptTask({
      slug: "api-parse-status",
      title: "APIs: Parse a JSON Response",
      level: "easy",
      description:
        'Parse an API response with json.loads and print the "status" field.',
      expected: "ok",
      intro: [
        seg("text", "An API replies with JSON text. Parse "),
        seg("code", "response"),
        seg("text", " using "),
        seg("code", "json.loads"),
        seg("text", " into "),
        seg("code", "data"),
        seg("text", " and print the "),
        seg("code", "status"),
        seg("text", " field."),
      ],
      steps: [
        "json.loads turns a JSON string into a Python dict.",
        "After parsing, it is an ordinary dict — use square brackets.",
        "The browser runtime has no network, so the response text is given to you.",
      ],
      starter:
        '# TODO: parse the response text\nimport json\n\nresponse = \'{"status": "ok", "count": 3}\'\ndata = {}\n',
      solution: `import json

response = '{"status": "ok", "count": 3}'
data = json.loads(response)

print(data["status"])`,
      checks: [
        assertType("data", "dict"),
        assertEquals("status was parsed", 'data["status"]', '"ok"'),
        assertEquals("count parsed as an int", 'data["count"]', "3"),
      ],
      vars: ["json", "data"],
      constraints: [
        "Use json.loads — do not build the dict by hand",
        "Store the parsed dict in data",
        "Output must be exactly: ok",
      ],
      hints: ["data = json.loads(response)", 'print(data["status"])'],
      placeholder: "# data = json.loads(response)",
    }),

    conceptTask({
      slug: "api-nested-field",
      title: "APIs: Read a Nested Field",
      level: "easy",
      description:
        "Parse a nested JSON response and print the user's name from inside the nested object.",
      expected: "Asha",
      intro: [
        seg("text", "Parse the response and print "),
        seg("code", 'data["user"]["name"]'),
        seg("text", " — real payloads nest objects inside objects."),
      ],
      steps: [
        "Chain the keys to walk down one level at a time.",
        "Each level is just another dict.",
      ],
      starter:
        '# TODO: reach the nested name\nimport json\n\nresponse = \'{"user": {"name": "Asha", "city": "Pune"}}\'\ndata = {}\n',
      solution: `import json

response = '{"user": {"name": "Asha", "city": "Pune"}}'
data = json.loads(response)

print(data["user"]["name"])`,
      checks: [
        assertType("data", "dict"),
        assertEquals("nested name read", 'data["user"]["name"]', '"Asha"'),
        assertEquals("the nested object is a dict", 'type(data["user"]).__name__', '"dict"'),
      ],
      vars: ["json", "data"],
      constraints: ["Use json.loads", "Chain both keys", "Output must be exactly: Asha"],
      hints: ['print(data["user"]["name"])'],
      placeholder: "# print(data['user']['name'])",
    }),

    conceptTask({
      slug: "api-count-records",
      title: "APIs: Count the Records",
      level: "easy",
      description:
        "Parse a JSON list of records and print how many records the response returned.",
      expected: "3",
      intro: [
        seg("text", "The "),
        seg("code", "results"),
        seg("text", " key holds a list. Parse the response and print how many records it contains."),
      ],
      steps: [
        "A JSON array becomes a Python list.",
        "len(data[\"results\"]) counts the records.",
      ],
      starter:
        '# TODO: count the returned records\nimport json\n\nresponse = \'{"results": [{"id": 1}, {"id": 2}, {"id": 3}]}\'\ndata = {}\n',
      solution: `import json

response = '{"results": [{"id": 1}, {"id": 2}, {"id": 3}]}'
data = json.loads(response)

print(len(data["results"]))`,
      checks: [
        assertEquals("results parsed as a list", 'type(data["results"]).__name__', '"list"'),
        assertEquals("three records found", 'len(data["results"])', "3"),
      ],
      vars: ["json", "data"],
      constraints: ["Use json.loads and len()", "Output must be exactly: 3"],
      hints: ['print(len(data["results"]))'],
      placeholder: "# print(len(data['results']))",
    }),

    conceptTask({
      slug: "api-loop-records",
      title: "APIs: Loop Over the Results",
      level: "medium",
      description:
        "Parse a JSON response and print the city of every record, one per line.",
      expected: "Pune\nChennai\nSurat",
      intro: [
        seg("text", "Parse the response, then loop over "),
        seg("code", 'data["results"]'),
        seg("text", " and print each record's "),
        seg("code", "city"),
        seg("text", "."),
      ],
      steps: [
        "Each item in the list is a dict.",
        'Inside the loop, read record["city"].',
      ],
      starter:
        '# TODO: print every city\nimport json\n\nresponse = \'{"results": [{"city": "Pune"}, {"city": "Chennai"}, {"city": "Surat"}]}\'\ndata = {}\n',
      solution: `import json

response = '{"results": [{"city": "Pune"}, {"city": "Chennai"}, {"city": "Surat"}]}'
data = json.loads(response)

for record in data["results"]:
    print(record["city"])`,
      checks: [
        assertEquals(
          "all three records parsed",
          '[r["city"] for r in data["results"]]',
          '["Pune", "Chennai", "Surat"]'
        ),
      ],
      vars: ["json", "data"],
      constraints: ["Loop over the parsed list", "One city per line, in order"],
      hints: ['for record in data["results"]:', 'print(record["city"])'],
      placeholder: "# for record in data['results']:",
    }),

    conceptTask({
      slug: "api-missing-field",
      title: "APIs: Handle a Missing Field",
      level: "medium",
      description:
        'Use .get() with a default so a response without an email prints "not provided".',
      expected: "not provided",
      intro: [
        seg("text", "This response has no "),
        seg("code", "email"),
        seg("text", " key. Read it with "),
        seg("code", 'data.get("email", "not provided")'),
        seg("text", " into "),
        seg("code", "email"),
        seg("text", " and print it."),
      ],
      steps: [
        "Optional fields are normal in APIs — square brackets would raise KeyError.",
        ".get(key, default) returns the default instead of raising.",
      ],
      starter:
        '# TODO: read email safely\nimport json\n\nresponse = \'{"name": "Asha", "city": "Pune"}\'\ndata = json.loads(response)\nemail = ""\n',
      solution: `import json

response = '{"name": "Asha", "city": "Pune"}'
data = json.loads(response)

email = data.get("email", "not provided")
print(email)`,
      checks: [
        assertEquals("the default was used", "email", '"not provided"'),
        assertTrue(
          "the response really has no email key",
          '"email" not in data',
          "Do not add an email key — use .get() with a default",
        ),
        assertEquals("present keys still read normally", 'data.get("name")', '"Asha"'),
      ],
      vars: ["json", "data", "email"],
      constraints: [
        "Use .get() with a default",
        "Do not add the missing key",
        "Output must be exactly: not provided",
      ],
      hints: ['email = data.get("email", "not provided")'],
      placeholder: "# email = data.get('email', 'not provided')",
    }),

    conceptTask({
      slug: "api-query-string",
      title: "APIs: Build the Query String",
      level: "medium",
      description:
        "Use urllib.parse.urlencode to turn a dict of parameters into a query string and print it.",
      expected: "q=python&page=2",
      intro: [
        seg("text", "Build the query string for "),
        seg("code", '{"q": "python", "page": 2}'),
        seg("text", " using "),
        seg("code", "urlencode"),
        seg("text", ", store it in "),
        seg("code", "query"),
        seg("text", ", and print it."),
      ],
      steps: [
        "from urllib.parse import urlencode imports the helper.",
        "urlencode escapes values for you — safer than string concatenation.",
        "Pairs keep the dict's order and are joined with &.",
      ],
      starter:
        '# TODO: encode the parameters\nfrom urllib.parse import urlencode\n\nparams = {"q": "python", "page": 2}\nquery = ""\n',
      solution: `from urllib.parse import urlencode

params = {"q": "python", "page": 2}
query = urlencode(params)

print(query)`,
      checks: [
        assertEquals("query is built from the params", "query", "urlencode(params)"),
        assertEquals("params were not modified", "params", '{"q": "python", "page": 2}'),
        assertTrue(
          "urlencode was used",
          '"&" in query and "=" in query',
          "Expected an encoded query string like q=python&page=2",
        ),
      ],
      vars: ["urlencode", "params", "query"],
      constraints: [
        "Use urlencode — do not build the string by hand",
        "Store the result in query",
        "Output must be exactly: q=python&page=2",
      ],
      hints: ["query = urlencode(params)"],
      placeholder: "# query = urlencode(params)",
    }),

    conceptTask({
      slug: "api-summarize-active",
      title: "APIs: Summarise Active Users",
      level: "hard",
      description:
        "Parse a users response, keep only active users, print their names sorted and then the count.",
      expected: "['Asha', 'Ravi']\n2",
      intro: [
        seg("text", "Parse the response, keep records where "),
        seg("code", "active"),
        seg("text", " is true, collect their names into "),
        seg("code", "active_names"),
        seg("text", " sorted alphabetically, print the list, then print how many there are."),
      ],
      steps: [
        "JSON true/false becomes Python True/False after parsing.",
        "Filter with a comprehension, then wrap it in sorted().",
        "Print the list first, then len(active_names).",
      ],
      starter:
        '# TODO: keep active users, sort their names\nimport json\n\nresponse = \'{"users": [{"name": "Ravi", "active": true}, {"name": "Meera", "active": false}, {"name": "Asha", "active": true}]}\'\ndata = json.loads(response)\nactive_names = []\n',
      solution: `import json

response = '{"users": [{"name": "Ravi", "active": true}, {"name": "Meera", "active": false}, {"name": "Asha", "active": true}]}'
data = json.loads(response)

active_names = sorted(u["name"] for u in data["users"] if u["active"])

print(active_names)
print(len(active_names))`,
      checks: [
        assertEquals("only active users, sorted", "active_names", '["Asha", "Ravi"]'),
        assertTrue(
          "inactive users were dropped",
          '"Meera" not in active_names',
          "Meera is inactive and should not appear",
        ),
        assertEquals("all three users were parsed", 'len(data["users"])', "3"),
      ],
      vars: ["json", "data", "active_names"],
      constraints: [
        "Filter on the active flag",
        "Sort the names alphabetically",
        "Print the list, then the count",
      ],
      hints: [
        'active_names = sorted(u["name"] for u in data["users"] if u["active"])',
        "print(active_names) then print(len(active_names))",
      ],
      placeholder: "# active_names = sorted(...)",
    }),
  ];
}
