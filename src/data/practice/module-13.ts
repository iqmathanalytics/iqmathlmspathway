import type { PracticeProblem } from "@/lib/types";

export const module13Practice: PracticeProblem[] = [
  {
    "id": "m13-t1-p01",
    "topicId": "m13-t1",
    "slug": "file-write-then-read",
    "title": "Files: Write Then Read It Back",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Write \"Data Science\" to notes.txt with open(), then read the file and print its contents.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Open "
        },
        {
          "type": "code",
          "value": "notes.txt"
        },
        {
          "type": "text",
          "value": " in write mode and write "
        },
        {
          "type": "code",
          "value": "Data Science"
        },
        {
          "type": "text",
          "value": ", then open it again and print what "
        },
        {
          "type": "code",
          "value": "f.read()"
        },
        {
          "type": "text",
          "value": " returns."
        }
      ],
      "editorPlaceholder": "# with open(\"notes.txt\", \"w\") as f:",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct! with open(...) wrote the file and closed it for you.",
      "steps": {
        "title": "What you need to know",
        "items": [
          "with open(\"notes.txt\", \"w\") as f: opens for writing and closes automatically.",
          "f.write(text) writes without adding a newline.",
          "Mode \"r\" (the default) reads the file back."
        ]
      }
    },
    "examples": [
      {
        "output": "Data Science"
      }
    ],
    "constraints": [
      "Write to a file named notes.txt",
      "Use with open(...) so the file closes itself",
      "Output must be exactly: Data Science"
    ],
    "hints": [
      "with open(\"notes.txt\", \"w\") as f: then f.write(\"Data Science\")",
      "Read it with: with open(\"notes.txt\") as f: print(f.read())"
    ],
    "starterCode": "# TODO: write the text, then read it back and print it\nwith open(\"notes.txt\", \"w\") as f:\n    pass\n",
    "solutionCode": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"Data Science\")\n\nwith open(\"notes.txt\") as f:\n    print(f.read())",
    "publicTests": [
      {
        "id": "m13-t1-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Data Science",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p01-t2",
        "label": "notes.txt was created",
        "assertCode": "assert __import__(\"os\").path.exists(\"notes.txt\"), \"Expected notes.txt to exist after your code runs\"",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p01-t3",
        "label": "file holds the right text",
        "assertCode": "assert (open(\"notes.txt\").read()) == (\"Data Science\"), \"Expected \" + repr(\"Data Science\") + \", got \" + repr(open(\"notes.txt\").read())",
        "visibility": "public"
      }
    ],
    "approach": "Write \"Data Science\" to notes.txt with open(), then read the file and print its contents.\n\nReference solution:\nwith open(\"notes.txt\", \"w\") as f:\n    f.write(\"Data Science\")\n\nwith open(\"notes.txt\") as f:\n    print(f.read())"
  },
  {
    "id": "m13-t1-p02",
    "topicId": "m13-t1",
    "slug": "file-append-mode",
    "title": "Files: Append a Second Line",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Write one line to log.txt in \"w\" mode, append a second in \"a\" mode, then print how many lines the file holds.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write "
        },
        {
          "type": "code",
          "value": "start"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "log.txt"
        },
        {
          "type": "text",
          "value": " using mode \"w\", then append "
        },
        {
          "type": "code",
          "value": "end"
        },
        {
          "type": "text",
          "value": " using mode \"a\". Print how many lines the file now has."
        }
      ],
      "editorPlaceholder": "# with open(\"log.txt\", \"a\") as f:",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "Mode \"w\" replaces the file; mode \"a\" adds to the end.",
          "End each line with \"\\n\" so they are separate lines.",
          "read().splitlines() gives a list of lines to count."
        ]
      }
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Use mode \"w\" first, then mode \"a\"",
      "End both lines with a newline",
      "Output must be exactly: 2"
    ],
    "hints": [
      "with open(\"log.txt\", \"a\") as f: f.write(\"end\\n\")",
      "Count with len(f.read().splitlines())"
    ],
    "starterCode": "# TODO: write, then append, then count the lines\nwith open(\"log.txt\", \"w\") as f:\n    pass\n",
    "solutionCode": "with open(\"log.txt\", \"w\") as f:\n    f.write(\"start\\n\")\n\nwith open(\"log.txt\", \"a\") as f:\n    f.write(\"end\\n\")\n\nwith open(\"log.txt\") as f:\n    lines = f.read().splitlines()\n\nprint(len(lines))",
    "publicTests": [
      {
        "id": "m13-t1-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "2",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p02-t2",
        "label": "both lines are in the file",
        "assertCode": "assert (open(\"log.txt\").read().splitlines()) == ([\"start\", \"end\"]), \"Expected \" + repr([\"start\", \"end\"]) + \", got \" + repr(open(\"log.txt\").read().splitlines())",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p02-t3",
        "label": "append mode kept the first line",
        "assertCode": "assert open(\"log.txt\").read().startswith(\"start\"), \"Mode \\\"a\\\" must append — \\\"w\\\" would have erased the first line\"",
        "visibility": "public"
      }
    ],
    "approach": "Write one line to log.txt in \"w\" mode, append a second in \"a\" mode, then print how many lines the file holds.\n\nReference solution:\nwith open(\"log.txt\", \"w\") as f:\n    f.write(\"start\\n\")\n\nwith open(\"log.txt\", \"a\") as f:\n    f.write(\"end\\n\")\n\nwith open(\"log.txt\") as f:\n    lines = f.read().splitlines()\n\nprint(len(lines))"
  },
  {
    "id": "m13-t1-p03",
    "topicId": "m13-t1",
    "slug": "file-read-second-line",
    "title": "Files: Read One Line Out of Many",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Write three city names to cities.txt, read the file with readlines(), and print the second city.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write "
        },
        {
          "type": "code",
          "value": "Mumbai, Chennai, Pune"
        },
        {
          "type": "text",
          "value": " as three lines in "
        },
        {
          "type": "code",
          "value": "cities.txt"
        },
        {
          "type": "text",
          "value": ", then use "
        },
        {
          "type": "code",
          "value": "f.readlines()"
        },
        {
          "type": "text",
          "value": " and print the second city without its newline."
        }
      ],
      "editorPlaceholder": "# lines = f.readlines()",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "readlines() returns a list — one string per line, newline included.",
          "Index 1 is the second line; .strip() removes the trailing newline."
        ]
      }
    },
    "examples": [
      {
        "output": "Chennai"
      }
    ],
    "constraints": [
      "Write all three cities, one per line",
      "Use readlines() and index 1",
      "Strip the newline before printing"
    ],
    "hints": [
      "lines = f.readlines()",
      "print(lines[1].strip())"
    ],
    "starterCode": "# TODO: write three lines, then print the second one\nwith open(\"cities.txt\", \"w\") as f:\n    pass\n",
    "solutionCode": "with open(\"cities.txt\", \"w\") as f:\n    f.write(\"Mumbai\\nChennai\\nPune\\n\")\n\nwith open(\"cities.txt\") as f:\n    lines = f.readlines()\n\nprint(lines[1].strip())",
    "publicTests": [
      {
        "id": "m13-t1-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "Chennai",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p03-t2",
        "label": "three cities were written",
        "assertCode": "assert (len(open(\"cities.txt\").read().splitlines())) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(open(\"cities.txt\").read().splitlines()))",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p03-t3",
        "label": "second city is Chennai",
        "assertCode": "assert (open(\"cities.txt\").read().splitlines()[1]) == (\"Chennai\"), \"Expected \" + repr(\"Chennai\") + \", got \" + repr(open(\"cities.txt\").read().splitlines()[1])",
        "visibility": "public"
      }
    ],
    "approach": "Write three city names to cities.txt, read the file with readlines(), and print the second city.\n\nReference solution:\nwith open(\"cities.txt\", \"w\") as f:\n    f.write(\"Mumbai\\nChennai\\nPune\\n\")\n\nwith open(\"cities.txt\") as f:\n    lines = f.readlines()\n\nprint(lines[1].strip())"
  },
  {
    "id": "m13-t1-p04",
    "topicId": "m13-t1",
    "slug": "file-csv-total",
    "title": "Files: Total a CSV Column",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Write a small CSV with a header, then read it back skipping the header and print the total amount.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write this CSV to "
        },
        {
          "type": "code",
          "value": "sales.csv"
        },
        {
          "type": "text",
          "value": ": header "
        },
        {
          "type": "code",
          "value": "item,amount"
        },
        {
          "type": "text",
          "value": ", then "
        },
        {
          "type": "code",
          "value": "pen,30"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "book,70"
        },
        {
          "type": "text",
          "value": ". Read it back, skip the header, and print the total in "
        },
        {
          "type": "code",
          "value": "total"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# total = 0",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "total"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A CSV line splits on commas: line.split(\",\")",
          "The amount is the second field, so index 1 — convert it with int().",
          "Skip the header row before adding anything up."
        ]
      }
    },
    "examples": [
      {
        "output": "100"
      }
    ],
    "constraints": [
      "Skip the header row",
      "Convert each amount with int()",
      "Store the running total in total"
    ],
    "hints": [
      "rows = f.read().splitlines()[1:] drops the header",
      "total += int(row.split(\",\")[1])"
    ],
    "starterCode": "# TODO: write the CSV, then total the amount column\nwith open(\"sales.csv\", \"w\") as f:\n    f.write(\"item,amount\\npen,30\\nbook,70\\n\")\n\ntotal = 0\n",
    "solutionCode": "with open(\"sales.csv\", \"w\") as f:\n    f.write(\"item,amount\\npen,30\\nbook,70\\n\")\n\ntotal = 0\nwith open(\"sales.csv\") as f:\n    rows = f.read().splitlines()[1:]\n\nfor row in rows:\n    total += int(row.split(\",\")[1])\n\nprint(total)",
    "publicTests": [
      {
        "id": "m13-t1-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "100",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p04-t2",
        "label": "total is the sum of the column",
        "assertCode": "assert (total) == (100), \"Expected \" + repr(100) + \", got \" + repr(total)",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p04-t3",
        "label": "total has the right type",
        "assertCode": "assert \"total\" in globals(), \"Expected a variable named total\"\nassert isinstance(total, int), \"Expected total to be int, got \" + type(total).__name__",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p04-t4",
        "label": "the CSV still has a header plus two rows",
        "assertCode": "assert (len(open(\"sales.csv\").read().splitlines())) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(open(\"sales.csv\").read().splitlines()))",
        "visibility": "public"
      }
    ],
    "approach": "Write a small CSV with a header, then read it back skipping the header and print the total amount.\n\nReference solution:\nwith open(\"sales.csv\", \"w\") as f:\n    f.write(\"item,amount\\npen,30\\nbook,70\\n\")\n\ntotal = 0\nwith open(\"sales.csv\") as f:\n    rows = f.read().splitlines()[1:]\n\nfor row in rows:\n    total += int(row.split(\",\")[1])\n\nprint(total)"
  },
  {
    "id": "m13-t1-p05",
    "topicId": "m13-t1",
    "slug": "file-json-roundtrip",
    "title": "Files: Save and Load JSON",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use json.dump to save a dict to config.json, load it back with json.load, and print one value.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Save "
        },
        {
          "type": "code",
          "value": "{\"city\": \"Bangalore\", \"pincode\": 560001}"
        },
        {
          "type": "text",
          "value": " to "
        },
        {
          "type": "code",
          "value": "config.json"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "json.dump"
        },
        {
          "type": "text",
          "value": ", load it into "
        },
        {
          "type": "code",
          "value": "loaded"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "json.load"
        },
        {
          "type": "text",
          "value": ", and print the city."
        }
      ],
      "editorPlaceholder": "# json.dump(config, f)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "loaded"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "json.dump(data, f) writes JSON to an open file.",
          "json.load(f) reads it back as a Python dict.",
          "Structured data survives the round trip — keys and types stay intact."
        ]
      }
    },
    "examples": [
      {
        "output": "Bangalore"
      }
    ],
    "constraints": [
      "Use json.dump to write and json.load to read",
      "Store the loaded dict in loaded",
      "Output must be exactly: Bangalore"
    ],
    "hints": [
      "json.dump(config, f) inside a with open(..., \"w\")",
      "loaded = json.load(f)"
    ],
    "starterCode": "# TODO: dump the dict, then load it back\nimport json\n\nconfig = {\"city\": \"Bangalore\", \"pincode\": 560001}\nloaded = {}\n",
    "solutionCode": "import json\n\nconfig = {\"city\": \"Bangalore\", \"pincode\": 560001}\n\nwith open(\"config.json\", \"w\") as f:\n    json.dump(config, f)\n\nwith open(\"config.json\") as f:\n    loaded = json.load(f)\n\nprint(loaded[\"city\"])",
    "publicTests": [
      {
        "id": "m13-t1-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "Bangalore",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p05-t2",
        "label": "loaded has the right type",
        "assertCode": "assert \"loaded\" in globals(), \"Expected a variable named loaded\"\nassert isinstance(loaded, dict), \"Expected loaded to be dict, got \" + type(loaded).__name__",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p05-t3",
        "label": "the dict survived the round trip",
        "assertCode": "assert (loaded) == (config), \"Expected \" + repr(config) + \", got \" + repr(loaded)",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p05-t4",
        "label": "pincode stayed an int",
        "assertCode": "assert (type(loaded[\"pincode\"]).__name__) == (\"int\"), \"Expected \" + repr(\"int\") + \", got \" + repr(type(loaded[\"pincode\"]).__name__)",
        "visibility": "public"
      }
    ],
    "approach": "Use json.dump to save a dict to config.json, load it back with json.load, and print one value.\n\nReference solution:\nimport json\n\nconfig = {\"city\": \"Bangalore\", \"pincode\": 560001}\n\nwith open(\"config.json\", \"w\") as f:\n    json.dump(config, f)\n\nwith open(\"config.json\") as f:\n    loaded = json.load(f)\n\nprint(loaded[\"city\"])"
  },
  {
    "id": "m13-t1-p06",
    "topicId": "m13-t1",
    "slug": "file-loop-lines",
    "title": "Files: Loop Over Every Line",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Write three product names to products.txt, then loop over the file object and print each name in uppercase.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write "
        },
        {
          "type": "code",
          "value": "pen, book, bag"
        },
        {
          "type": "text",
          "value": " as three lines in "
        },
        {
          "type": "code",
          "value": "products.txt"
        },
        {
          "type": "text",
          "value": ", then loop over the file object and print each name uppercased."
        }
      ],
      "editorPlaceholder": "# for line in f:",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "for line in f: reads one line at a time — memory friendly for big files.",
          "Each line ends with a newline, so call .strip() before .upper()."
        ]
      }
    },
    "examples": [
      {
        "output": "PEN\nBOOK\nBAG"
      }
    ],
    "constraints": [
      "Loop over the file object directly",
      "Strip the newline before printing",
      "One uppercase name per line"
    ],
    "hints": [
      "for line in f:",
      "print(line.strip().upper())"
    ],
    "starterCode": "# TODO: write the products, then print each in uppercase\nwith open(\"products.txt\", \"w\") as f:\n    f.write(\"pen\\nbook\\nbag\\n\")\n",
    "solutionCode": "with open(\"products.txt\", \"w\") as f:\n    f.write(\"pen\\nbook\\nbag\\n\")\n\nwith open(\"products.txt\") as f:\n    for line in f:\n        print(line.strip().upper())",
    "publicTests": [
      {
        "id": "m13-t1-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "PEN\nBOOK\nBAG",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p06-t2",
        "label": "file holds the three products in order",
        "assertCode": "assert (open(\"products.txt\").read().splitlines()) == ([\"pen\", \"book\", \"bag\"]), \"Expected \" + repr([\"pen\", \"book\", \"bag\"]) + \", got \" + repr(open(\"products.txt\").read().splitlines())",
        "visibility": "public"
      }
    ],
    "approach": "Write three product names to products.txt, then loop over the file object and print each name in uppercase.\n\nReference solution:\nwith open(\"products.txt\", \"w\") as f:\n    f.write(\"pen\\nbook\\nbag\\n\")\n\nwith open(\"products.txt\") as f:\n    for line in f:\n        print(line.strip().upper())"
  },
  {
    "id": "m13-t1-p07",
    "topicId": "m13-t1",
    "slug": "file-filter-to-new-file",
    "title": "Files: Filter One File Into Another",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Read numbers from numbers.txt, write only the even ones to evens.txt, then print the list of evens.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Given "
        },
        {
          "type": "code",
          "value": "numbers.txt"
        },
        {
          "type": "text",
          "value": " with 3, 4, 7, 8, 12, read it, keep only even numbers in a list named "
        },
        {
          "type": "code",
          "value": "evens"
        },
        {
          "type": "text",
          "value": ", write them to "
        },
        {
          "type": "code",
          "value": "evens.txt"
        },
        {
          "type": "text",
          "value": " one per line, and print the list."
        }
      ],
      "editorPlaceholder": "# evens = [ ... ]",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "evens"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Convert each line with int() before testing it.",
          "A number is even when n % 2 == 0.",
          "Write with f.write(f\"{n}\\n\") so each value lands on its own line."
        ]
      }
    },
    "examples": [
      {
        "output": "[4, 8, 12]"
      }
    ],
    "constraints": [
      "Read from numbers.txt and write to evens.txt",
      "Keep only even numbers",
      "Output must be exactly: [4, 8, 12]"
    ],
    "hints": [
      "numbers = [int(line) for line in f.read().splitlines()]",
      "evens = [n for n in numbers if n % 2 == 0]"
    ],
    "starterCode": "# TODO: keep the even numbers, write them out, print the list\nwith open(\"numbers.txt\", \"w\") as f:\n    f.write(\"3\\n4\\n7\\n8\\n12\\n\")\n\nevens = []\n",
    "solutionCode": "with open(\"numbers.txt\", \"w\") as f:\n    f.write(\"3\\n4\\n7\\n8\\n12\\n\")\n\nwith open(\"numbers.txt\") as f:\n    numbers = [int(line) for line in f.read().splitlines()]\n\nevens = [n for n in numbers if n % 2 == 0]\n\nwith open(\"evens.txt\", \"w\") as f:\n    for n in evens:\n        f.write(f\"{n}\\n\")\n\nprint(evens)",
    "publicTests": [
      {
        "id": "m13-t1-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "[4, 8, 12]",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p07-t2",
        "label": "evens list is correct",
        "assertCode": "assert (evens) == ([4, 8, 12]), \"Expected \" + repr([4, 8, 12]) + \", got \" + repr(evens)",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p07-t3",
        "label": "evens.txt holds the same numbers",
        "assertCode": "assert (open(\"evens.txt\").read().splitlines()) == ([\"4\", \"8\", \"12\"]), \"Expected \" + repr([\"4\", \"8\", \"12\"]) + \", got \" + repr(open(\"evens.txt\").read().splitlines())",
        "visibility": "public"
      },
      {
        "id": "m13-t1-p07-t4",
        "label": "the source file was not changed",
        "assertCode": "assert (open(\"numbers.txt\").read().splitlines()) == ([\"3\", \"4\", \"7\", \"8\", \"12\"]), \"Expected \" + repr([\"3\", \"4\", \"7\", \"8\", \"12\"]) + \", got \" + repr(open(\"numbers.txt\").read().splitlines())",
        "visibility": "public"
      }
    ],
    "approach": "Read numbers from numbers.txt, write only the even ones to evens.txt, then print the list of evens.\n\nReference solution:\nwith open(\"numbers.txt\", \"w\") as f:\n    f.write(\"3\\n4\\n7\\n8\\n12\\n\")\n\nwith open(\"numbers.txt\") as f:\n    numbers = [int(line) for line in f.read().splitlines()]\n\nevens = [n for n in numbers if n % 2 == 0]\n\nwith open(\"evens.txt\", \"w\") as f:\n    for n in evens:\n        f.write(f\"{n}\\n\")\n\nprint(evens)"
  },
  {
    "id": "m13-t2-p01",
    "topicId": "m13-t2",
    "slug": "path-filename",
    "title": "Paths: Get the File Name",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Create Path(\"data/raw/sales.csv\") and print just the file name using .name.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Store "
        },
        {
          "type": "code",
          "value": "Path(\"data/raw/sales.csv\")"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "path"
        },
        {
          "type": "text",
          "value": " and print "
        },
        {
          "type": "code",
          "value": "path.name"
        },
        {
          "type": "text",
          "value": " — the last part of the path."
        }
      ],
      "editorPlaceholder": "# print(path.name)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path",
        "path"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "from pathlib import Path gives you the modern path object.",
          ".name is the file name with its extension, no folders."
        ]
      }
    },
    "examples": [
      {
        "output": "sales.csv"
      }
    ],
    "constraints": [
      "Use pathlib.Path",
      "Print .name",
      "Output must be exactly: sales.csv"
    ],
    "hints": [
      "print(path.name)"
    ],
    "starterCode": "# TODO: print only the file name\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\n",
    "solutionCode": "from pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.name)",
    "publicTests": [
      {
        "id": "m13-t2-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "sales.csv",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p01-t2",
        "label": "Path was imported",
        "assertCode": "assert \"Path\" in globals(), \"Import Path from pathlib\"",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p01-t3",
        "label": "path points at the CSV",
        "assertCode": "assert (path.as_posix()) == (\"data/raw/sales.csv\"), \"Expected \" + repr(\"data/raw/sales.csv\") + \", got \" + repr(path.as_posix())",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p01-t4",
        "label": "name is the last part",
        "assertCode": "assert (path.name) == (\"sales.csv\"), \"Expected \" + repr(\"sales.csv\") + \", got \" + repr(path.name)",
        "visibility": "public"
      }
    ],
    "approach": "Create Path(\"data/raw/sales.csv\") and print just the file name using .name.\n\nReference solution:\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.name)"
  },
  {
    "id": "m13-t2-p02",
    "topicId": "m13-t2",
    "slug": "path-suffix",
    "title": "Paths: Read the Extension",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Print the file extension of data/raw/sales.csv using .suffix.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "path.suffix"
        },
        {
          "type": "text",
          "value": " for "
        },
        {
          "type": "code",
          "value": "data/raw/sales.csv"
        },
        {
          "type": "text",
          "value": ". Notice the dot is included — that is how you branch on file type."
        }
      ],
      "editorPlaceholder": "# print(path.suffix)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path",
        "path"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".suffix returns the extension including the leading dot."
        ]
      }
    },
    "examples": [
      {
        "output": ".csv"
      }
    ],
    "constraints": [
      "Print .suffix",
      "Output must be exactly: .csv"
    ],
    "hints": [
      "print(path.suffix)"
    ],
    "starterCode": "# TODO: print the extension\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\n",
    "solutionCode": "from pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.suffix)",
    "publicTests": [
      {
        "id": "m13-t2-p02-t1",
        "label": "Sample Case",
        "expectedStdout": ".csv",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p02-t2",
        "label": "suffix includes the dot",
        "assertCode": "assert (path.suffix) == (\".csv\"), \"Expected \" + repr(\".csv\") + \", got \" + repr(path.suffix)",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p02-t3",
        "label": "path is unchanged",
        "assertCode": "assert (path.as_posix()) == (\"data/raw/sales.csv\"), \"Expected \" + repr(\"data/raw/sales.csv\") + \", got \" + repr(path.as_posix())",
        "visibility": "public"
      }
    ],
    "approach": "Print the file extension of data/raw/sales.csv using .suffix.\n\nReference solution:\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.suffix)"
  },
  {
    "id": "m13-t2-p03",
    "topicId": "m13-t2",
    "slug": "path-stem",
    "title": "Paths: Name Without Extension",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Print the file name without its extension using .stem.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print "
        },
        {
          "type": "code",
          "value": "path.stem"
        },
        {
          "type": "text",
          "value": " — the file name with the extension removed. Handy for naming outputs after inputs."
        }
      ],
      "editorPlaceholder": "# print(path.stem)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path",
        "path"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".stem is .name minus .suffix."
        ]
      }
    },
    "examples": [
      {
        "output": "sales"
      }
    ],
    "constraints": [
      "Print .stem",
      "Output must be exactly: sales"
    ],
    "hints": [
      "print(path.stem)"
    ],
    "starterCode": "# TODO: print the stem\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\n",
    "solutionCode": "from pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.stem)",
    "publicTests": [
      {
        "id": "m13-t2-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "sales",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p03-t2",
        "label": "stem drops the extension",
        "assertCode": "assert (path.stem) == (\"sales\"), \"Expected \" + repr(\"sales\") + \", got \" + repr(path.stem)",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p03-t3",
        "label": "suffix is still available",
        "assertCode": "assert (path.suffix) == (\".csv\"), \"Expected \" + repr(\".csv\") + \", got \" + repr(path.suffix)",
        "visibility": "public"
      }
    ],
    "approach": "Print the file name without its extension using .stem.\n\nReference solution:\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.stem)"
  },
  {
    "id": "m13-t2-p04",
    "topicId": "m13-t2",
    "slug": "path-join-parts",
    "title": "Paths: Join Folders Safely",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Build reports/q1/summary.txt with the / operator and print it with as_posix().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Join "
        },
        {
          "type": "code",
          "value": "reports"
        },
        {
          "type": "text",
          "value": ", "
        },
        {
          "type": "code",
          "value": "q1"
        },
        {
          "type": "text",
          "value": ", and "
        },
        {
          "type": "code",
          "value": "summary.txt"
        },
        {
          "type": "text",
          "value": " with the "
        },
        {
          "type": "code",
          "value": "/"
        },
        {
          "type": "text",
          "value": " operator into "
        },
        {
          "type": "code",
          "value": "report_path"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "report_path.as_posix()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# report_path = Path('reports') / ...",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path",
        "report_path"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Path objects join with / instead of string concatenation.",
          "as_posix() prints forward slashes on every operating system."
        ]
      }
    },
    "examples": [
      {
        "output": "reports/q1/summary.txt"
      }
    ],
    "constraints": [
      "Use the / operator to join",
      "Print with as_posix()",
      "Output must be exactly: reports/q1/summary.txt"
    ],
    "hints": [
      "report_path = Path(\"reports\") / \"q1\" / \"summary.txt\""
    ],
    "starterCode": "# TODO: join the three parts\nfrom pathlib import Path\n\nreport_path = None\n",
    "solutionCode": "from pathlib import Path\n\nreport_path = Path(\"reports\") / \"q1\" / \"summary.txt\"\nprint(report_path.as_posix())",
    "publicTests": [
      {
        "id": "m13-t2-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "reports/q1/summary.txt",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p04-t2",
        "label": "parts joined in order",
        "assertCode": "assert (report_path.as_posix()) == (\"reports/q1/summary.txt\"), \"Expected \" + repr(\"reports/q1/summary.txt\") + \", got \" + repr(report_path.as_posix())",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p04-t3",
        "label": "file name is correct",
        "assertCode": "assert (report_path.name) == (\"summary.txt\"), \"Expected \" + repr(\"summary.txt\") + \", got \" + repr(report_path.name)",
        "visibility": "public"
      }
    ],
    "approach": "Build reports/q1/summary.txt with the / operator and print it with as_posix().\n\nReference solution:\nfrom pathlib import Path\n\nreport_path = Path(\"reports\") / \"q1\" / \"summary.txt\"\nprint(report_path.as_posix())"
  },
  {
    "id": "m13-t2-p05",
    "topicId": "m13-t2",
    "slug": "path-parent",
    "title": "Paths: Find the Folder",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Print the folder that contains data/raw/sales.csv using .parent and as_posix().",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Print the containing folder of "
        },
        {
          "type": "code",
          "value": "data/raw/sales.csv"
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "path.parent.as_posix()"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# print(path.parent.as_posix())",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path",
        "path"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          ".parent gives the folder as another Path.",
          "Chain as_posix() so the separator is always a forward slash."
        ]
      }
    },
    "examples": [
      {
        "output": "data/raw"
      }
    ],
    "constraints": [
      "Use .parent",
      "Print with as_posix()",
      "Output must be exactly: data/raw"
    ],
    "hints": [
      "print(path.parent.as_posix())"
    ],
    "starterCode": "# TODO: print the parent folder\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\n",
    "solutionCode": "from pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.parent.as_posix())",
    "publicTests": [
      {
        "id": "m13-t2-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "data/raw",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p05-t2",
        "label": "parent is the folder",
        "assertCode": "assert (path.parent.as_posix()) == (\"data/raw\"), \"Expected \" + repr(\"data/raw\") + \", got \" + repr(path.parent.as_posix())",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p05-t3",
        "label": "grandparent works too",
        "assertCode": "assert (path.parent.parent.as_posix()) == (\"data\"), \"Expected \" + repr(\"data\") + \", got \" + repr(path.parent.parent.as_posix())",
        "visibility": "public"
      }
    ],
    "approach": "Print the folder that contains data/raw/sales.csv using .parent and as_posix().\n\nReference solution:\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\nprint(path.parent.as_posix())"
  },
  {
    "id": "m13-t2-p06",
    "topicId": "m13-t2",
    "slug": "path-with-suffix",
    "title": "Paths: Swap the Extension",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Turn sales.csv into sales.json using with_suffix() and print the new file name.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Convert "
        },
        {
          "type": "code",
          "value": "data/raw/sales.csv"
        },
        {
          "type": "text",
          "value": " to a JSON path with "
        },
        {
          "type": "code",
          "value": "with_suffix(\".json\")"
        },
        {
          "type": "text",
          "value": ", store it in "
        },
        {
          "type": "code",
          "value": "json_path"
        },
        {
          "type": "text",
          "value": ", and print its "
        },
        {
          "type": "code",
          "value": "name"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# json_path = path.with_suffix('.json')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path",
        "path",
        "json_path"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "with_suffix(\".json\") returns a new Path — the original is unchanged.",
          "This is the safe way to derive an output file from an input file."
        ]
      }
    },
    "examples": [
      {
        "output": "sales.json"
      }
    ],
    "constraints": [
      "Use with_suffix()",
      "Keep the original path unchanged",
      "Output must be exactly: sales.json"
    ],
    "hints": [
      "json_path = path.with_suffix(\".json\")",
      "print(json_path.name)"
    ],
    "starterCode": "# TODO: swap .csv for .json\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\njson_path = None\n",
    "solutionCode": "from pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\njson_path = path.with_suffix(\".json\")\nprint(json_path.name)",
    "publicTests": [
      {
        "id": "m13-t2-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "sales.json",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p06-t2",
        "label": "extension swapped",
        "assertCode": "assert (json_path.suffix) == (\".json\"), \"Expected \" + repr(\".json\") + \", got \" + repr(json_path.suffix)",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p06-t3",
        "label": "folder is preserved",
        "assertCode": "assert (json_path.as_posix()) == (\"data/raw/sales.json\"), \"Expected \" + repr(\"data/raw/sales.json\") + \", got \" + repr(json_path.as_posix())",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p06-t4",
        "label": "original path untouched",
        "assertCode": "assert (path.suffix) == (\".csv\"), \"Expected \" + repr(\".csv\") + \", got \" + repr(path.suffix)",
        "visibility": "public"
      }
    ],
    "approach": "Turn sales.csv into sales.json using with_suffix() and print the new file name.\n\nReference solution:\nfrom pathlib import Path\n\npath = Path(\"data/raw/sales.csv\")\njson_path = path.with_suffix(\".json\")\nprint(json_path.name)"
  },
  {
    "id": "m13-t2-p07",
    "topicId": "m13-t2",
    "slug": "path-exists-check",
    "title": "Paths: Does the File Exist?",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Create a real file, then print exists() for that file and for one that was never created.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Write a file called "
        },
        {
          "type": "code",
          "value": "found.txt"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "Path(\"found.txt\").exists()"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "Path(\"missing.txt\").exists()"
        },
        {
          "type": "text",
          "value": " — the guard every data script needs before reading."
        }
      ],
      "editorPlaceholder": "# Path('found.txt').write_text('ok')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "Path"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "exists() returns True only when the path is really on disk.",
          "Path objects have write_text() as a one-line way to create a file."
        ]
      }
    },
    "examples": [
      {
        "output": "True\nFalse"
      }
    ],
    "constraints": [
      "Create found.txt but not missing.txt",
      "Print True on line 1 and False on line 2"
    ],
    "hints": [
      "Path(\"found.txt\").write_text(\"ok\")",
      "print(Path(\"found.txt\").exists())"
    ],
    "starterCode": "# TODO: create one file, then check both paths\nfrom pathlib import Path\n",
    "solutionCode": "from pathlib import Path\n\nPath(\"found.txt\").write_text(\"ok\")\n\nprint(Path(\"found.txt\").exists())\nprint(Path(\"missing.txt\").exists())",
    "publicTests": [
      {
        "id": "m13-t2-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "True\nFalse",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p07-t2",
        "label": "found.txt was really created",
        "assertCode": "assert Path(\"found.txt\").exists(), \"Create found.txt before checking it\"",
        "visibility": "public"
      },
      {
        "id": "m13-t2-p07-t3",
        "label": "missing.txt must not be created",
        "assertCode": "assert not Path(\"missing.txt\").exists(), \"missing.txt should stay missing — that is the False case\"",
        "visibility": "public"
      }
    ],
    "approach": "Create a real file, then print exists() for that file and for one that was never created.\n\nReference solution:\nfrom pathlib import Path\n\nPath(\"found.txt\").write_text(\"ok\")\n\nprint(Path(\"found.txt\").exists())\nprint(Path(\"missing.txt\").exists())"
  },
  {
    "id": "m13-t3-p01",
    "topicId": "m13-t3",
    "slug": "try-zero-division",
    "title": "Errors: Catch a Division by Zero",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Divide 10 by 0 inside try, set message to \"Cannot divide by zero\" in the except block, and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Put "
        },
        {
          "type": "code",
          "value": "10 / 0"
        },
        {
          "type": "text",
          "value": " inside a "
        },
        {
          "type": "code",
          "value": "try"
        },
        {
          "type": "text",
          "value": " block. In "
        },
        {
          "type": "code",
          "value": "except ZeroDivisionError"
        },
        {
          "type": "text",
          "value": ", set "
        },
        {
          "type": "code",
          "value": "message"
        },
        {
          "type": "text",
          "value": " to \"Cannot divide by zero\", then print it."
        }
      ],
      "editorPlaceholder": "# try: 10 / 0",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "message"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "An uncaught error stops the whole program — catching it keeps you running.",
          "Name the specific error type so unrelated bugs still surface."
        ]
      }
    },
    "examples": [
      {
        "output": "Cannot divide by zero"
      }
    ],
    "constraints": [
      "Use try / except ZeroDivisionError",
      "Set message inside the except block",
      "Output must be exactly: Cannot divide by zero"
    ],
    "hints": [
      "try:\n    value = 10 / 0",
      "except ZeroDivisionError:\n    message = \"Cannot divide by zero\""
    ],
    "starterCode": "# TODO: catch the division error and set message\nmessage = \"\"\n\ntry:\n    pass\nexcept ZeroDivisionError:\n    pass\n",
    "solutionCode": "message = \"\"\n\ntry:\n    value = 10 / 0\nexcept ZeroDivisionError:\n    message = \"Cannot divide by zero\"\n\nprint(message)",
    "publicTests": [
      {
        "id": "m13-t3-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Cannot divide by zero",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p01-t2",
        "label": "message was set by the except block",
        "assertCode": "assert (message) == (\"Cannot divide by zero\"), \"Expected \" + repr(\"Cannot divide by zero\") + \", got \" + repr(message)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p01-t3",
        "label": "ZeroDivisionError really is the right error",
        "assertCode": "assert issubclass(ZeroDivisionError, ArithmeticError), \"ZeroDivisionError is the error Python raises for x / 0\"",
        "visibility": "public"
      }
    ],
    "approach": "Divide 10 by 0 inside try, set message to \"Cannot divide by zero\" in the except block, and print it.\n\nReference solution:\nmessage = \"\"\n\ntry:\n    value = 10 / 0\nexcept ZeroDivisionError:\n    message = \"Cannot divide by zero\"\n\nprint(message)"
  },
  {
    "id": "m13-t3-p02",
    "topicId": "m13-t3",
    "slug": "try-value-error",
    "title": "Errors: Handle a Bad Number",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Convert \"abc\" with int() inside try and set status to \"invalid number\" when ValueError is raised.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Calling "
        },
        {
          "type": "code",
          "value": "int(\"abc\")"
        },
        {
          "type": "text",
          "value": " raises "
        },
        {
          "type": "code",
          "value": "ValueError"
        },
        {
          "type": "text",
          "value": ". Catch it and set "
        },
        {
          "type": "code",
          "value": "status"
        },
        {
          "type": "text",
          "value": " to \"invalid number\", then print status."
        }
      ],
      "editorPlaceholder": "# try: int(raw)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "raw",
        "status"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Dirty data is the usual source of ValueError when casting.",
          "Catching it lets you flag the row instead of crashing the run."
        ]
      }
    },
    "examples": [
      {
        "output": "invalid number"
      }
    ],
    "constraints": [
      "Use try / except ValueError",
      "Convert raw with int() inside the try",
      "Output must be exactly: invalid number"
    ],
    "hints": [
      "try:\n    number = int(raw)",
      "except ValueError:\n    status = \"invalid number\""
    ],
    "starterCode": "# TODO: catch the bad conversion\nraw = \"abc\"\nstatus = \"ok\"\n\ntry:\n    pass\nexcept ValueError:\n    pass\n",
    "solutionCode": "raw = \"abc\"\nstatus = \"ok\"\n\ntry:\n    number = int(raw)\nexcept ValueError:\n    status = \"invalid number\"\n\nprint(status)",
    "publicTests": [
      {
        "id": "m13-t3-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "invalid number",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p02-t2",
        "label": "status was flipped by the except block",
        "assertCode": "assert (status) == (\"invalid number\"), \"Expected \" + repr(\"invalid number\") + \", got \" + repr(status)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p02-t3",
        "label": "the raw value is untouched",
        "assertCode": "assert (raw) == (\"abc\"), \"Expected \" + repr(\"abc\") + \", got \" + repr(raw)",
        "visibility": "public"
      }
    ],
    "approach": "Convert \"abc\" with int() inside try and set status to \"invalid number\" when ValueError is raised.\n\nReference solution:\nraw = \"abc\"\nstatus = \"ok\"\n\ntry:\n    number = int(raw)\nexcept ValueError:\n    status = \"invalid number\"\n\nprint(status)"
  },
  {
    "id": "m13-t3-p03",
    "topicId": "m13-t3",
    "slug": "try-finally-order",
    "title": "Errors: finally Always Runs",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Record the order of a try block and a finally block in a list named steps, then print the list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Append "
        },
        {
          "type": "code",
          "value": "\"open\""
        },
        {
          "type": "text",
          "value": " inside "
        },
        {
          "type": "code",
          "value": "try"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "\"close\""
        },
        {
          "type": "text",
          "value": " inside "
        },
        {
          "type": "code",
          "value": "finally"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "steps"
        },
        {
          "type": "text",
          "value": " to prove cleanup ran."
        }
      ],
      "editorPlaceholder": "# try: steps.append('open')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "steps"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "finally runs whether or not an error happened.",
          "That is why it is the right place to close files and connections."
        ]
      }
    },
    "examples": [
      {
        "output": "['open', 'close']"
      }
    ],
    "constraints": [
      "Use try / finally",
      "Append \"open\" in try and \"close\" in finally",
      "Output must be exactly: ['open', 'close']"
    ],
    "hints": [
      "steps.append(\"open\") inside try",
      "steps.append(\"close\") inside finally"
    ],
    "starterCode": "# TODO: record both steps in order\nsteps = []\n\ntry:\n    pass\nfinally:\n    pass\n",
    "solutionCode": "steps = []\n\ntry:\n    steps.append(\"open\")\nfinally:\n    steps.append(\"close\")\n\nprint(steps)",
    "publicTests": [
      {
        "id": "m13-t3-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "['open', 'close']",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p03-t2",
        "label": "both blocks ran in order",
        "assertCode": "assert (steps) == ([\"open\", \"close\"]), \"Expected \" + repr([\"open\", \"close\"]) + \", got \" + repr(steps)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p03-t3",
        "label": "steps has the right type",
        "assertCode": "assert \"steps\" in globals(), \"Expected a variable named steps\"\nassert isinstance(steps, list), \"Expected steps to be list, got \" + type(steps).__name__",
        "visibility": "public"
      }
    ],
    "approach": "Record the order of a try block and a finally block in a list named steps, then print the list.\n\nReference solution:\nsteps = []\n\ntry:\n    steps.append(\"open\")\nfinally:\n    steps.append(\"close\")\n\nprint(steps)"
  },
  {
    "id": "m13-t3-p04",
    "topicId": "m13-t3",
    "slug": "try-key-error",
    "title": "Errors: Missing Dictionary Key",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Read a missing key from a dict inside try and set region to \"unknown\" when KeyError is raised.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Read "
        },
        {
          "type": "code",
          "value": "row[\"region\"]"
        },
        {
          "type": "text",
          "value": " from a row that has no region. Catch "
        },
        {
          "type": "code",
          "value": "KeyError"
        },
        {
          "type": "text",
          "value": " and set "
        },
        {
          "type": "code",
          "value": "region"
        },
        {
          "type": "text",
          "value": " to \"unknown\", then print it."
        }
      ],
      "editorPlaceholder": "# try: row['region']",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "row",
        "region"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Square-bracket access raises KeyError when the key is absent.",
          "Catching it is how you survive incomplete records."
        ]
      }
    },
    "examples": [
      {
        "output": "unknown"
      }
    ],
    "constraints": [
      "Use try / except KeyError",
      "Do not add the missing key to the dict",
      "Output must be exactly: unknown"
    ],
    "hints": [
      "try:\n    region = row[\"region\"]",
      "except KeyError:\n    region = \"unknown\""
    ],
    "starterCode": "# TODO: handle the missing key\nrow = {\"item\": \"pen\", \"revenue\": 30}\nregion = \"\"\n\ntry:\n    pass\nexcept KeyError:\n    pass\n",
    "solutionCode": "row = {\"item\": \"pen\", \"revenue\": 30}\nregion = \"\"\n\ntry:\n    region = row[\"region\"]\nexcept KeyError:\n    region = \"unknown\"\n\nprint(region)",
    "publicTests": [
      {
        "id": "m13-t3-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "unknown",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p04-t2",
        "label": "region fell back to unknown",
        "assertCode": "assert (region) == (\"unknown\"), \"Expected \" + repr(\"unknown\") + \", got \" + repr(region)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p04-t3",
        "label": "the row really has no region key",
        "assertCode": "assert \"region\" not in row, \"Do not add a region key to the row — handle the KeyError instead\"",
        "visibility": "public"
      }
    ],
    "approach": "Read a missing key from a dict inside try and set region to \"unknown\" when KeyError is raised.\n\nReference solution:\nrow = {\"item\": \"pen\", \"revenue\": 30}\nregion = \"\"\n\ntry:\n    region = row[\"region\"]\nexcept KeyError:\n    region = \"unknown\"\n\nprint(region)"
  },
  {
    "id": "m13-t3-p05",
    "topicId": "m13-t3",
    "slug": "try-else-clause",
    "title": "Errors: The else Branch",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use try / except / else so the else branch reports a successful conversion of \"42\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Convert "
        },
        {
          "type": "code",
          "value": "\"42\""
        },
        {
          "type": "text",
          "value": " with "
        },
        {
          "type": "code",
          "value": "int()"
        },
        {
          "type": "text",
          "value": ". Set "
        },
        {
          "type": "code",
          "value": "outcome"
        },
        {
          "type": "text",
          "value": " to \"invalid\" in except and to "
        },
        {
          "type": "code",
          "value": "f\"parsed {number}\""
        },
        {
          "type": "text",
          "value": " in the "
        },
        {
          "type": "code",
          "value": "else"
        },
        {
          "type": "text",
          "value": " branch, then print it."
        }
      ],
      "editorPlaceholder": "# else: outcome = ...",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "raw",
        "outcome"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "else runs only when the try block raised nothing.",
          "Keeping the success path in else makes the happy path obvious."
        ]
      }
    },
    "examples": [
      {
        "output": "parsed 42"
      }
    ],
    "constraints": [
      "Use try / except ValueError / else",
      "Build the message with an f-string in else",
      "Output must be exactly: parsed 42"
    ],
    "hints": [
      "else:\n    outcome = f\"parsed {number}\""
    ],
    "starterCode": "# TODO: report success from the else branch\nraw = \"42\"\noutcome = \"\"\n\ntry:\n    pass\nexcept ValueError:\n    pass\nelse:\n    pass\n",
    "solutionCode": "raw = \"42\"\noutcome = \"\"\n\ntry:\n    number = int(raw)\nexcept ValueError:\n    outcome = \"invalid\"\nelse:\n    outcome = f\"parsed {number}\"\n\nprint(outcome)",
    "publicTests": [
      {
        "id": "m13-t3-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "parsed 42",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p05-t2",
        "label": "else branch produced the message",
        "assertCode": "assert (outcome) == (\"parsed 42\"), \"Expected \" + repr(\"parsed 42\") + \", got \" + repr(outcome)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p05-t3",
        "label": "the conversion really happened",
        "assertCode": "assert (number) == (42), \"Expected \" + repr(42) + \", got \" + repr(number)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p05-t4",
        "label": "number has the right type",
        "assertCode": "assert \"number\" in globals(), \"Expected a variable named number\"\nassert isinstance(number, int), \"Expected number to be int, got \" + type(number).__name__",
        "visibility": "public"
      }
    ],
    "approach": "Use try / except / else so the else branch reports a successful conversion of \"42\".\n\nReference solution:\nraw = \"42\"\noutcome = \"\"\n\ntry:\n    number = int(raw)\nexcept ValueError:\n    outcome = \"invalid\"\nelse:\n    outcome = f\"parsed {number}\"\n\nprint(outcome)"
  },
  {
    "id": "m13-t3-p06",
    "topicId": "m13-t3",
    "slug": "try-collect-valid",
    "title": "Errors: Skip the Bad Rows",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Convert [\"4\", \"x\", \"7\"] to ints, skipping values that raise ValueError, and print the clean list.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Loop over "
        },
        {
          "type": "code",
          "value": "[\"4\", \"x\", \"7\"]"
        },
        {
          "type": "text",
          "value": " and convert each with "
        },
        {
          "type": "code",
          "value": "int()"
        },
        {
          "type": "text",
          "value": ". Collect successful values in "
        },
        {
          "type": "code",
          "value": "clean"
        },
        {
          "type": "text",
          "value": " and skip the ones that raise "
        },
        {
          "type": "code",
          "value": "ValueError"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# for raw in raw_values:",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "raw_values",
        "clean"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Put the try block inside the loop so one bad value does not stop the rest.",
          "continue (or simply pass) skips the failing row."
        ]
      }
    },
    "examples": [
      {
        "output": "[4, 7]"
      }
    ],
    "constraints": [
      "Handle the error inside the loop",
      "Do not remove items from raw_values",
      "Output must be exactly: [4, 7]"
    ],
    "hints": [
      "for raw in raw_values:\n    try:\n        clean.append(int(raw))",
      "except ValueError:\n        continue"
    ],
    "starterCode": "# TODO: keep only the values that convert\nraw_values = [\"4\", \"x\", \"7\"]\nclean = []\n",
    "solutionCode": "raw_values = [\"4\", \"x\", \"7\"]\nclean = []\n\nfor raw in raw_values:\n    try:\n        clean.append(int(raw))\n    except ValueError:\n        continue\n\nprint(clean)",
    "publicTests": [
      {
        "id": "m13-t3-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "[4, 7]",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p06-t2",
        "label": "only convertible values kept",
        "assertCode": "assert (clean) == ([4, 7]), \"Expected \" + repr([4, 7]) + \", got \" + repr(clean)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p06-t3",
        "label": "the source list is unchanged",
        "assertCode": "assert (raw_values) == ([\"4\", \"x\", \"7\"]), \"Expected \" + repr([\"4\", \"x\", \"7\"]) + \", got \" + repr(raw_values)",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p06-t4",
        "label": "values were converted to int",
        "assertCode": "assert all(isinstance(v, int) for v in clean), \"Expected clean to hold integers, not strings\"",
        "visibility": "public"
      }
    ],
    "approach": "Convert [\"4\", \"x\", \"7\"] to ints, skipping values that raise ValueError, and print the clean list.\n\nReference solution:\nraw_values = [\"4\", \"x\", \"7\"]\nclean = []\n\nfor raw in raw_values:\n    try:\n        clean.append(int(raw))\n    except ValueError:\n        continue\n\nprint(clean)"
  },
  {
    "id": "m13-t3-p07",
    "topicId": "m13-t3",
    "slug": "try-safe-divide",
    "title": "Errors: A Safe Divide Function",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Write safe_divide(a, b) that returns the quotient or None when b is zero, then print two calls.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "safe_divide(a, b)"
        },
        {
          "type": "text",
          "value": " that returns "
        },
        {
          "type": "code",
          "value": "a / b"
        },
        {
          "type": "text",
          "value": " but returns "
        },
        {
          "type": "code",
          "value": "None"
        },
        {
          "type": "text",
          "value": " when "
        },
        {
          "type": "code",
          "value": "ZeroDivisionError"
        },
        {
          "type": "text",
          "value": " is raised. Print "
        },
        {
          "type": "code",
          "value": "safe_divide(10, 2)"
        },
        {
          "type": "text",
          "value": " then "
        },
        {
          "type": "code",
          "value": "safe_divide(5, 0)"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# def safe_divide(a, b):",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "Put try / except inside the function and return from both branches.",
          "Returning None lets the caller decide what a failed division means.",
          "10 / 2 is 5.0 — true division always returns a float."
        ]
      }
    },
    "examples": [
      {
        "output": "5.0\nNone"
      }
    ],
    "constraints": [
      "Define a function named safe_divide",
      "Return values — do not print inside the function",
      "Handle ZeroDivisionError only"
    ],
    "hints": [
      "def safe_divide(a, b):\n    try:\n        return a / b",
      "except ZeroDivisionError:\n        return None"
    ],
    "starterCode": "# TODO: return the quotient, or None when b is 0\ndef safe_divide(a, b):\n    pass\n",
    "solutionCode": "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\n\nprint(safe_divide(10, 2))\nprint(safe_divide(5, 0))",
    "publicTests": [
      {
        "id": "m13-t3-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "5.0\nNone",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p07-t2",
        "label": "safe_divide is defined",
        "assertCode": "assert callable(safe_divide), \"Define a function named safe_divide\"",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p07-t3",
        "label": "normal division works",
        "assertCode": "assert (safe_divide(10, 2)) == (5.0), \"Expected \" + repr(5.0) + \", got \" + repr(safe_divide(10, 2))",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p07-t4",
        "label": "divide by zero returns None",
        "assertCode": "assert safe_divide(5, 0) is None, \"Expected safe_divide(5, 0) to return None\"",
        "visibility": "public"
      },
      {
        "id": "m13-t3-p07-t5",
        "label": "works for other inputs too",
        "assertCode": "assert (safe_divide(9, 3)) == (3.0), \"Expected \" + repr(3.0) + \", got \" + repr(safe_divide(9, 3))",
        "visibility": "public"
      }
    ],
    "approach": "Write safe_divide(a, b) that returns the quotient or None when b is zero, then print two calls.\n\nReference solution:\ndef safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\n\nprint(safe_divide(10, 2))\nprint(safe_divide(5, 0))"
  },
  {
    "id": "m13-t4-p01",
    "topicId": "m13-t4",
    "slug": "raise-value-error",
    "title": "Raise: Reject Bad Input",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Raise ValueError(\"Age cannot be negative\"), catch it, and print the message with str(e).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": "raise ValueError(\"Age cannot be negative\")"
        },
        {
          "type": "text",
          "value": " inside a try block, catch it as "
        },
        {
          "type": "code",
          "value": "e"
        },
        {
          "type": "text",
          "value": ", store "
        },
        {
          "type": "code",
          "value": "str(e)"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "message"
        },
        {
          "type": "text",
          "value": ", and print it."
        }
      ],
      "editorPlaceholder": "# raise ValueError(...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "message"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "raise creates an error on purpose — that is how you reject bad input.",
          "except ValueError as e binds the exception object to e.",
          "str(e) is the message you passed in."
        ]
      }
    },
    "examples": [
      {
        "output": "Age cannot be negative"
      }
    ],
    "constraints": [
      "Raise the error yourself with raise",
      "Read the text with str(e)",
      "Output must be exactly: Age cannot be negative"
    ],
    "hints": [
      "raise ValueError(\"Age cannot be negative\")",
      "except ValueError as e:\n    message = str(e)"
    ],
    "starterCode": "# TODO: raise, catch, and read the message\nmessage = \"\"\n\ntry:\n    pass\nexcept ValueError as e:\n    pass\n",
    "solutionCode": "message = \"\"\n\ntry:\n    raise ValueError(\"Age cannot be negative\")\nexcept ValueError as e:\n    message = str(e)\n\nprint(message)",
    "publicTests": [
      {
        "id": "m13-t4-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "Age cannot be negative",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p01-t2",
        "label": "message came from the exception",
        "assertCode": "assert (message) == (\"Age cannot be negative\"), \"Expected \" + repr(\"Age cannot be negative\") + \", got \" + repr(message)",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p01-t3",
        "label": "message has the right type",
        "assertCode": "assert \"message\" in globals(), \"Expected a variable named message\"\nassert isinstance(message, str), \"Expected message to be str, got \" + type(message).__name__",
        "visibility": "public"
      }
    ],
    "approach": "Raise ValueError(\"Age cannot be negative\"), catch it, and print the message with str(e).\n\nReference solution:\nmessage = \"\"\n\ntry:\n    raise ValueError(\"Age cannot be negative\")\nexcept ValueError as e:\n    message = str(e)\n\nprint(message)"
  },
  {
    "id": "m13-t4-p02",
    "topicId": "m13-t4",
    "slug": "custom-exception-class",
    "title": "Raise: Your Own Exception Class",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Define DataError as a subclass of Exception, raise it, catch it, and print its message.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "class DataError(Exception)"
        },
        {
          "type": "text",
          "value": ", raise it with the message "
        },
        {
          "type": "code",
          "value": "bad row"
        },
        {
          "type": "text",
          "value": ", then catch "
        },
        {
          "type": "code",
          "value": "DataError"
        },
        {
          "type": "text",
          "value": " and print the message."
        }
      ],
      "editorPlaceholder": "# class DataError(Exception):",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "Subclassing Exception is all it takes to create a domain-specific error.",
          "pass is a valid body when the class adds no new behaviour.",
          "Named errors let callers catch exactly your failure and nothing else."
        ]
      }
    },
    "examples": [
      {
        "output": "bad row"
      }
    ],
    "constraints": [
      "Define a class named DataError that inherits from Exception",
      "Raise and catch it in the same program",
      "Output must be exactly: bad row"
    ],
    "hints": [
      "class DataError(Exception):\n    pass",
      "raise DataError(\"bad row\")"
    ],
    "starterCode": "# TODO: define, raise, and catch your own error\nclass DataError(Exception):\n    pass\n",
    "solutionCode": "class DataError(Exception):\n    pass\n\ntry:\n    raise DataError(\"bad row\")\nexcept DataError as e:\n    print(e)",
    "publicTests": [
      {
        "id": "m13-t4-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "bad row",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p02-t2",
        "label": "DataError subclasses Exception",
        "assertCode": "assert issubclass(DataError, Exception), \"DataError must inherit from Exception\"",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p02-t3",
        "label": "the message is carried",
        "assertCode": "assert (str(DataError(\"bad row\"))) == (\"bad row\"), \"Expected \" + repr(\"bad row\") + \", got \" + repr(str(DataError(\"bad row\")))",
        "visibility": "public"
      }
    ],
    "approach": "Define DataError as a subclass of Exception, raise it, catch it, and print its message.\n\nReference solution:\nclass DataError(Exception):\n    pass\n\ntry:\n    raise DataError(\"bad row\")\nexcept DataError as e:\n    print(e)"
  },
  {
    "id": "m13-t4-p03",
    "topicId": "m13-t4",
    "slug": "raise-error-name",
    "title": "Raise: Report the Error Type",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Catch your own DataError and print the class name using type(e).__name__.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Raise "
        },
        {
          "type": "code",
          "value": "DataError"
        },
        {
          "type": "text",
          "value": " and, in the except block, store "
        },
        {
          "type": "code",
          "value": "type(e).__name__"
        },
        {
          "type": "text",
          "value": " in "
        },
        {
          "type": "code",
          "value": "error_name"
        },
        {
          "type": "text",
          "value": " and print it. Logs use this to say which error occurred."
        }
      ],
      "editorPlaceholder": "# error_name = type(e).__name__",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "error_name"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "type(e) is the exception class; .__name__ is its name as a string.",
          "This is what appears in a traceback's last line."
        ]
      }
    },
    "examples": [
      {
        "output": "DataError"
      }
    ],
    "constraints": [
      "Use type(e).__name__ — do not type the name as a string",
      "Output must be exactly: DataError"
    ],
    "hints": [
      "error_name = type(e).__name__"
    ],
    "starterCode": "# TODO: capture the error class name\nclass DataError(Exception):\n    pass\n\nerror_name = \"\"\n",
    "solutionCode": "class DataError(Exception):\n    pass\n\nerror_name = \"\"\n\ntry:\n    raise DataError(\"row 12 failed\")\nexcept DataError as e:\n    error_name = type(e).__name__\n\nprint(error_name)",
    "publicTests": [
      {
        "id": "m13-t4-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "DataError",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p03-t2",
        "label": "error_name is the class name",
        "assertCode": "assert (error_name) == (\"DataError\"), \"Expected \" + repr(\"DataError\") + \", got \" + repr(error_name)",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p03-t3",
        "label": "DataError is a real exception class",
        "assertCode": "assert issubclass(DataError, Exception), \"DataError must inherit from Exception\"",
        "visibility": "public"
      }
    ],
    "approach": "Catch your own DataError and print the class name using type(e).__name__.\n\nReference solution:\nclass DataError(Exception):\n    pass\n\nerror_name = \"\"\n\ntry:\n    raise DataError(\"row 12 failed\")\nexcept DataError as e:\n    error_name = type(e).__name__\n\nprint(error_name)"
  },
  {
    "id": "m13-t4-p04",
    "topicId": "m13-t4",
    "slug": "raise-validate-units",
    "title": "Raise: Validate Units Sold",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Write check_units(n) that returns n but raises ValueError for non-positive input, then show both paths.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "check_units(n)"
        },
        {
          "type": "text",
          "value": " that returns "
        },
        {
          "type": "code",
          "value": "n"
        },
        {
          "type": "text",
          "value": " when it is positive and raises "
        },
        {
          "type": "code",
          "value": "ValueError(\"units must be positive\")"
        },
        {
          "type": "text",
          "value": " otherwise. Print "
        },
        {
          "type": "code",
          "value": "check_units(5)"
        },
        {
          "type": "text",
          "value": ", then catch the error from "
        },
        {
          "type": "code",
          "value": "check_units(-2)"
        },
        {
          "type": "text",
          "value": " and print it."
        }
      ],
      "editorPlaceholder": "# def check_units(n):",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "Validate first, then return — a guard clause keeps the happy path flat.",
          "The caller decides how to handle the error, so raise instead of printing."
        ]
      }
    },
    "examples": [
      {
        "output": "5\nunits must be positive"
      }
    ],
    "constraints": [
      "Define a function named check_units",
      "Raise ValueError with the exact message",
      "Reject zero as well as negatives"
    ],
    "hints": [
      "if n <= 0:\n        raise ValueError(\"units must be positive\")",
      "Catch it with except ValueError as e: print(e)"
    ],
    "starterCode": "# TODO: guard against non-positive units\ndef check_units(n):\n    pass\n",
    "solutionCode": "def check_units(n):\n    if n <= 0:\n        raise ValueError(\"units must be positive\")\n    return n\n\nprint(check_units(5))\n\ntry:\n    check_units(-2)\nexcept ValueError as e:\n    print(e)",
    "publicTests": [
      {
        "id": "m13-t4-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "5\nunits must be positive",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p04-t2",
        "label": "valid input is returned",
        "assertCode": "assert (check_units(5)) == (5), \"Expected \" + repr(5) + \", got \" + repr(check_units(5))",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p04-t3",
        "label": "negative input raises ValueError",
        "assertCode": "try:\n    check_units(-1)\n    raise AssertionError(\"Expected ValueError for -1, got no error\")\nexcept ValueError:\n    pass",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p04-t4",
        "label": "zero is rejected too",
        "assertCode": "try:\n    check_units(0)\n    raise AssertionError(\"Expected ValueError for 0, got no error\")\nexcept ValueError:\n    pass",
        "visibility": "public"
      }
    ],
    "approach": "Write check_units(n) that returns n but raises ValueError for non-positive input, then show both paths.\n\nReference solution:\ndef check_units(n):\n    if n <= 0:\n        raise ValueError(\"units must be positive\")\n    return n\n\nprint(check_units(5))\n\ntry:\n    check_units(-2)\nexcept ValueError as e:\n    print(e)"
  },
  {
    "id": "m13-t4-p05",
    "topicId": "m13-t4",
    "slug": "raise-exception-attribute",
    "title": "Raise: Carry Data on the Exception",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Give MissingColumn a .column attribute so the handler can print which column was missing.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "MissingColumn"
        },
        {
          "type": "text",
          "value": " with an "
        },
        {
          "type": "code",
          "value": "__init__"
        },
        {
          "type": "text",
          "value": " that stores "
        },
        {
          "type": "code",
          "value": "self.column"
        },
        {
          "type": "text",
          "value": ". Raise it for "
        },
        {
          "type": "code",
          "value": "revenue"
        },
        {
          "type": "text",
          "value": ", then print "
        },
        {
          "type": "code",
          "value": "e.column"
        },
        {
          "type": "text",
          "value": " in the handler."
        }
      ],
      "editorPlaceholder": "# self.column = column",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "Call super().__init__(message) so the exception still has readable text.",
          "Extra attributes let the handler react without parsing the message."
        ]
      }
    },
    "examples": [
      {
        "output": "revenue"
      }
    ],
    "constraints": [
      "Store the column name in self.column",
      "Call super().__init__ with a readable message",
      "Output must be exactly: revenue"
    ],
    "hints": [
      "super().__init__(f\"missing column: {column}\")",
      "self.column = column"
    ],
    "starterCode": "# TODO: store the column name on the exception\nclass MissingColumn(Exception):\n    def __init__(self, column):\n        pass\n",
    "solutionCode": "class MissingColumn(Exception):\n    def __init__(self, column):\n        super().__init__(f\"missing column: {column}\")\n        self.column = column\n\ntry:\n    raise MissingColumn(\"revenue\")\nexcept MissingColumn as e:\n    print(e.column)",
    "publicTests": [
      {
        "id": "m13-t4-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "revenue",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p05-t2",
        "label": "MissingColumn subclasses Exception",
        "assertCode": "assert issubclass(MissingColumn, Exception), \"MissingColumn must inherit from Exception\"",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p05-t3",
        "label": "the column is stored on the instance",
        "assertCode": "assert (MissingColumn(\"units\").column) == (\"units\"), \"Expected \" + repr(\"units\") + \", got \" + repr(MissingColumn(\"units\").column)",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p05-t4",
        "label": "the message still mentions the column",
        "assertCode": "assert \"units\" in str(MissingColumn(\"units\")), \"Pass the message to super().__init__ so str(e) stays useful\"",
        "visibility": "public"
      }
    ],
    "approach": "Give MissingColumn a .column attribute so the handler can print which column was missing.\n\nReference solution:\nclass MissingColumn(Exception):\n    def __init__(self, column):\n        super().__init__(f\"missing column: {column}\")\n        self.column = column\n\ntry:\n    raise MissingColumn(\"revenue\")\nexcept MissingColumn as e:\n    print(e.column)"
  },
  {
    "id": "m13-t4-p06",
    "topicId": "m13-t4",
    "slug": "raise-exception-hierarchy",
    "title": "Raise: An Error Hierarchy",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "Define PipelineError and a LoadError subclass, raise the subclass, catch it by the base class, and print its name.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "PipelineError(Exception)"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "LoadError(PipelineError)"
        },
        {
          "type": "text",
          "value": ". Raise "
        },
        {
          "type": "code",
          "value": "LoadError"
        },
        {
          "type": "text",
          "value": ", catch "
        },
        {
          "type": "code",
          "value": "PipelineError"
        },
        {
          "type": "text",
          "value": ", and print the actual class name."
        }
      ],
      "editorPlaceholder": "# class LoadError(PipelineError):",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "A base class lets callers catch every failure from your pipeline at once.",
          "Catching the base still catches every subclass.",
          "type(e).__name__ reveals which specific error was raised."
        ]
      }
    },
    "examples": [
      {
        "output": "LoadError"
      }
    ],
    "constraints": [
      "LoadError must subclass PipelineError",
      "Catch PipelineError, not LoadError",
      "Output must be exactly: LoadError"
    ],
    "hints": [
      "class LoadError(PipelineError):\n    pass",
      "print(type(e).__name__)"
    ],
    "starterCode": "# TODO: build the hierarchy, raise the child, catch the parent\nclass PipelineError(Exception):\n    pass\n",
    "solutionCode": "class PipelineError(Exception):\n    pass\n\nclass LoadError(PipelineError):\n    pass\n\ntry:\n    raise LoadError(\"could not read the CSV\")\nexcept PipelineError as e:\n    print(type(e).__name__)",
    "publicTests": [
      {
        "id": "m13-t4-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "LoadError",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p06-t2",
        "label": "LoadError inherits from PipelineError",
        "assertCode": "assert issubclass(LoadError, PipelineError), \"LoadError must be a subclass of PipelineError\"",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p06-t3",
        "label": "PipelineError inherits from Exception",
        "assertCode": "assert issubclass(PipelineError, Exception), \"PipelineError must inherit from Exception\"",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p06-t4",
        "label": "catching the base catches the child",
        "assertCode": "assert isinstance(LoadError('x'), PipelineError), \"A LoadError instance must also be a PipelineError\"",
        "visibility": "public"
      }
    ],
    "approach": "Define PipelineError and a LoadError subclass, raise the subclass, catch it by the base class, and print its name.\n\nReference solution:\nclass PipelineError(Exception):\n    pass\n\nclass LoadError(PipelineError):\n    pass\n\ntry:\n    raise LoadError(\"could not read the CSV\")\nexcept PipelineError as e:\n    print(type(e).__name__)"
  },
  {
    "id": "m13-t4-p07",
    "topicId": "m13-t4",
    "slug": "raise-validate-row",
    "title": "Raise: Validate a Data Row",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Write validate(row) that raises MissingColumn for absent required columns and returns the revenue otherwise.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "MissingColumn"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "validate(row)"
        },
        {
          "type": "text",
          "value": " which checks that both "
        },
        {
          "type": "code",
          "value": "region"
        },
        {
          "type": "text",
          "value": " and "
        },
        {
          "type": "code",
          "value": "revenue"
        },
        {
          "type": "text",
          "value": " are present, raising "
        },
        {
          "type": "code",
          "value": "MissingColumn(column)"
        },
        {
          "type": "text",
          "value": " for the first one missing and otherwise returning the revenue."
        }
      ],
      "editorPlaceholder": "# def validate(row):",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "steps": {
        "title": "What you need to know",
        "items": [
          "Loop the required column names and check each with the in operator.",
          "Raise as soon as one is missing — fail fast on bad rows.",
          "Print the caught error as f\"missing {e}\" for the second line."
        ]
      }
    },
    "examples": [
      {
        "output": "250\nmissing revenue"
      }
    ],
    "constraints": [
      "Required columns: region and revenue",
      "Raise MissingColumn naming the missing column",
      "Return row[\"revenue\"] when the row is complete"
    ],
    "hints": [
      "for column in (\"region\", \"revenue\"):\n        if column not in row:\n            raise MissingColumn(column)",
      "print(f\"missing {e}\")"
    ],
    "starterCode": "# TODO: validate the required columns\nclass MissingColumn(Exception):\n    pass\n\ndef validate(row):\n    pass\n",
    "solutionCode": "class MissingColumn(Exception):\n    pass\n\ndef validate(row):\n    for column in (\"region\", \"revenue\"):\n        if column not in row:\n            raise MissingColumn(column)\n    return row[\"revenue\"]\n\nprint(validate({\"region\": \"South\", \"revenue\": 250}))\n\ntry:\n    validate({\"region\": \"North\"})\nexcept MissingColumn as e:\n    print(f\"missing {e}\")",
    "publicTests": [
      {
        "id": "m13-t4-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "250\nmissing revenue",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p07-t2",
        "label": "a complete row returns its revenue",
        "assertCode": "assert (validate({\"region\": \"South\", \"revenue\": 250})) == (250), \"Expected \" + repr(250) + \", got \" + repr(validate({\"region\": \"South\", \"revenue\": 250}))",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p07-t3",
        "label": "a row without revenue raises MissingColumn",
        "assertCode": "try:\n    validate({\"region\": \"North\"})\n    raise AssertionError(\"Expected MissingColumn when revenue is absent\")\nexcept MissingColumn as _e:\n    assert str(_e) == \"revenue\", f\"Expected the error to name revenue, got {str(_e)!r}\"",
        "visibility": "public"
      },
      {
        "id": "m13-t4-p07-t4",
        "label": "a row without region raises too",
        "assertCode": "try:\n    validate({\"revenue\": 10})\n    raise AssertionError(\"Expected MissingColumn when region is absent\")\nexcept MissingColumn:\n    pass",
        "visibility": "public"
      }
    ],
    "approach": "Write validate(row) that raises MissingColumn for absent required columns and returns the revenue otherwise.\n\nReference solution:\nclass MissingColumn(Exception):\n    pass\n\ndef validate(row):\n    for column in (\"region\", \"revenue\"):\n        if column not in row:\n            raise MissingColumn(column)\n    return row[\"revenue\"]\n\nprint(validate({\"region\": \"South\", \"revenue\": 250}))\n\ntry:\n    validate({\"region\": \"North\"})\nexcept MissingColumn as e:\n    print(f\"missing {e}\")"
  },
  {
    "id": "m13-t5-p01",
    "topicId": "m13-t5",
    "slug": "api-parse-status",
    "title": "APIs: Parse a JSON Response",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Parse an API response with json.loads and print the \"status\" field.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "An API replies with JSON text. Parse "
        },
        {
          "type": "code",
          "value": "response"
        },
        {
          "type": "text",
          "value": " using "
        },
        {
          "type": "code",
          "value": "json.loads"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "data"
        },
        {
          "type": "text",
          "value": " and print the "
        },
        {
          "type": "code",
          "value": "status"
        },
        {
          "type": "text",
          "value": " field."
        }
      ],
      "editorPlaceholder": "# data = json.loads(response)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "data"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "json.loads turns a JSON string into a Python dict.",
          "After parsing, it is an ordinary dict — use square brackets.",
          "The browser runtime has no network, so the response text is given to you."
        ]
      }
    },
    "examples": [
      {
        "output": "ok"
      }
    ],
    "constraints": [
      "Use json.loads — do not build the dict by hand",
      "Store the parsed dict in data",
      "Output must be exactly: ok"
    ],
    "hints": [
      "data = json.loads(response)",
      "print(data[\"status\"])"
    ],
    "starterCode": "# TODO: parse the response text\nimport json\n\nresponse = '{\"status\": \"ok\", \"count\": 3}'\ndata = {}\n",
    "solutionCode": "import json\n\nresponse = '{\"status\": \"ok\", \"count\": 3}'\ndata = json.loads(response)\n\nprint(data[\"status\"])",
    "publicTests": [
      {
        "id": "m13-t5-p01-t1",
        "label": "Sample Case",
        "expectedStdout": "ok",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p01-t2",
        "label": "data has the right type",
        "assertCode": "assert \"data\" in globals(), \"Expected a variable named data\"\nassert isinstance(data, dict), \"Expected data to be dict, got \" + type(data).__name__",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p01-t3",
        "label": "status was parsed",
        "assertCode": "assert (data[\"status\"]) == (\"ok\"), \"Expected \" + repr(\"ok\") + \", got \" + repr(data[\"status\"])",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p01-t4",
        "label": "count parsed as an int",
        "assertCode": "assert (data[\"count\"]) == (3), \"Expected \" + repr(3) + \", got \" + repr(data[\"count\"])",
        "visibility": "public"
      }
    ],
    "approach": "Parse an API response with json.loads and print the \"status\" field.\n\nReference solution:\nimport json\n\nresponse = '{\"status\": \"ok\", \"count\": 3}'\ndata = json.loads(response)\n\nprint(data[\"status\"])"
  },
  {
    "id": "m13-t5-p02",
    "topicId": "m13-t5",
    "slug": "api-nested-field",
    "title": "APIs: Read a Nested Field",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Parse a nested JSON response and print the user's name from inside the nested object.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Parse the response and print "
        },
        {
          "type": "code",
          "value": "data[\"user\"][\"name\"]"
        },
        {
          "type": "text",
          "value": " — real payloads nest objects inside objects."
        }
      ],
      "editorPlaceholder": "# print(data['user']['name'])",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "data"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Chain the keys to walk down one level at a time.",
          "Each level is just another dict."
        ]
      }
    },
    "examples": [
      {
        "output": "Asha"
      }
    ],
    "constraints": [
      "Use json.loads",
      "Chain both keys",
      "Output must be exactly: Asha"
    ],
    "hints": [
      "print(data[\"user\"][\"name\"])"
    ],
    "starterCode": "# TODO: reach the nested name\nimport json\n\nresponse = '{\"user\": {\"name\": \"Asha\", \"city\": \"Pune\"}}'\ndata = {}\n",
    "solutionCode": "import json\n\nresponse = '{\"user\": {\"name\": \"Asha\", \"city\": \"Pune\"}}'\ndata = json.loads(response)\n\nprint(data[\"user\"][\"name\"])",
    "publicTests": [
      {
        "id": "m13-t5-p02-t1",
        "label": "Sample Case",
        "expectedStdout": "Asha",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p02-t2",
        "label": "data has the right type",
        "assertCode": "assert \"data\" in globals(), \"Expected a variable named data\"\nassert isinstance(data, dict), \"Expected data to be dict, got \" + type(data).__name__",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p02-t3",
        "label": "nested name read",
        "assertCode": "assert (data[\"user\"][\"name\"]) == (\"Asha\"), \"Expected \" + repr(\"Asha\") + \", got \" + repr(data[\"user\"][\"name\"])",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p02-t4",
        "label": "the nested object is a dict",
        "assertCode": "assert (type(data[\"user\"]).__name__) == (\"dict\"), \"Expected \" + repr(\"dict\") + \", got \" + repr(type(data[\"user\"]).__name__)",
        "visibility": "public"
      }
    ],
    "approach": "Parse a nested JSON response and print the user's name from inside the nested object.\n\nReference solution:\nimport json\n\nresponse = '{\"user\": {\"name\": \"Asha\", \"city\": \"Pune\"}}'\ndata = json.loads(response)\n\nprint(data[\"user\"][\"name\"])"
  },
  {
    "id": "m13-t5-p03",
    "topicId": "m13-t5",
    "slug": "api-count-records",
    "title": "APIs: Count the Records",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "Parse a JSON list of records and print how many records the response returned.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "The "
        },
        {
          "type": "code",
          "value": "results"
        },
        {
          "type": "text",
          "value": " key holds a list. Parse the response and print how many records it contains."
        }
      ],
      "editorPlaceholder": "# print(len(data['results']))",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "data"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "A JSON array becomes a Python list.",
          "len(data[\"results\"]) counts the records."
        ]
      }
    },
    "examples": [
      {
        "output": "3"
      }
    ],
    "constraints": [
      "Use json.loads and len()",
      "Output must be exactly: 3"
    ],
    "hints": [
      "print(len(data[\"results\"]))"
    ],
    "starterCode": "# TODO: count the returned records\nimport json\n\nresponse = '{\"results\": [{\"id\": 1}, {\"id\": 2}, {\"id\": 3}]}'\ndata = {}\n",
    "solutionCode": "import json\n\nresponse = '{\"results\": [{\"id\": 1}, {\"id\": 2}, {\"id\": 3}]}'\ndata = json.loads(response)\n\nprint(len(data[\"results\"]))",
    "publicTests": [
      {
        "id": "m13-t5-p03-t1",
        "label": "Sample Case",
        "expectedStdout": "3",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p03-t2",
        "label": "results parsed as a list",
        "assertCode": "assert (type(data[\"results\"]).__name__) == (\"list\"), \"Expected \" + repr(\"list\") + \", got \" + repr(type(data[\"results\"]).__name__)",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p03-t3",
        "label": "three records found",
        "assertCode": "assert (len(data[\"results\"])) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(data[\"results\"]))",
        "visibility": "public"
      }
    ],
    "approach": "Parse a JSON list of records and print how many records the response returned.\n\nReference solution:\nimport json\n\nresponse = '{\"results\": [{\"id\": 1}, {\"id\": 2}, {\"id\": 3}]}'\ndata = json.loads(response)\n\nprint(len(data[\"results\"]))"
  },
  {
    "id": "m13-t5-p04",
    "topicId": "m13-t5",
    "slug": "api-loop-records",
    "title": "APIs: Loop Over the Results",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Parse a JSON response and print the city of every record, one per line.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Parse the response, then loop over "
        },
        {
          "type": "code",
          "value": "data[\"results\"]"
        },
        {
          "type": "text",
          "value": " and print each record's "
        },
        {
          "type": "code",
          "value": "city"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# for record in data['results']:",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "data"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Each item in the list is a dict.",
          "Inside the loop, read record[\"city\"]."
        ]
      }
    },
    "examples": [
      {
        "output": "Pune\nChennai\nSurat"
      }
    ],
    "constraints": [
      "Loop over the parsed list",
      "One city per line, in order"
    ],
    "hints": [
      "for record in data[\"results\"]:",
      "print(record[\"city\"])"
    ],
    "starterCode": "# TODO: print every city\nimport json\n\nresponse = '{\"results\": [{\"city\": \"Pune\"}, {\"city\": \"Chennai\"}, {\"city\": \"Surat\"}]}'\ndata = {}\n",
    "solutionCode": "import json\n\nresponse = '{\"results\": [{\"city\": \"Pune\"}, {\"city\": \"Chennai\"}, {\"city\": \"Surat\"}]}'\ndata = json.loads(response)\n\nfor record in data[\"results\"]:\n    print(record[\"city\"])",
    "publicTests": [
      {
        "id": "m13-t5-p04-t1",
        "label": "Sample Case",
        "expectedStdout": "Pune\nChennai\nSurat",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p04-t2",
        "label": "all three records parsed",
        "assertCode": "assert ([r[\"city\"] for r in data[\"results\"]]) == ([\"Pune\", \"Chennai\", \"Surat\"]), \"Expected \" + repr([\"Pune\", \"Chennai\", \"Surat\"]) + \", got \" + repr([r[\"city\"] for r in data[\"results\"]])",
        "visibility": "public"
      }
    ],
    "approach": "Parse a JSON response and print the city of every record, one per line.\n\nReference solution:\nimport json\n\nresponse = '{\"results\": [{\"city\": \"Pune\"}, {\"city\": \"Chennai\"}, {\"city\": \"Surat\"}]}'\ndata = json.loads(response)\n\nfor record in data[\"results\"]:\n    print(record[\"city\"])"
  },
  {
    "id": "m13-t5-p05",
    "topicId": "m13-t5",
    "slug": "api-missing-field",
    "title": "APIs: Handle a Missing Field",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "Use .get() with a default so a response without an email prints \"not provided\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "This response has no "
        },
        {
          "type": "code",
          "value": "email"
        },
        {
          "type": "text",
          "value": " key. Read it with "
        },
        {
          "type": "code",
          "value": "data.get(\"email\", \"not provided\")"
        },
        {
          "type": "text",
          "value": " into "
        },
        {
          "type": "code",
          "value": "email"
        },
        {
          "type": "text",
          "value": " and print it."
        }
      ],
      "editorPlaceholder": "# email = data.get('email', 'not provided')",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "data",
        "email"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "Optional fields are normal in APIs — square brackets would raise KeyError.",
          ".get(key, default) returns the default instead of raising."
        ]
      }
    },
    "examples": [
      {
        "output": "not provided"
      }
    ],
    "constraints": [
      "Use .get() with a default",
      "Do not add the missing key",
      "Output must be exactly: not provided"
    ],
    "hints": [
      "email = data.get(\"email\", \"not provided\")"
    ],
    "starterCode": "# TODO: read email safely\nimport json\n\nresponse = '{\"name\": \"Asha\", \"city\": \"Pune\"}'\ndata = json.loads(response)\nemail = \"\"\n",
    "solutionCode": "import json\n\nresponse = '{\"name\": \"Asha\", \"city\": \"Pune\"}'\ndata = json.loads(response)\n\nemail = data.get(\"email\", \"not provided\")\nprint(email)",
    "publicTests": [
      {
        "id": "m13-t5-p05-t1",
        "label": "Sample Case",
        "expectedStdout": "not provided",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p05-t2",
        "label": "the default was used",
        "assertCode": "assert (email) == (\"not provided\"), \"Expected \" + repr(\"not provided\") + \", got \" + repr(email)",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p05-t3",
        "label": "the response really has no email key",
        "assertCode": "assert \"email\" not in data, \"Do not add an email key — use .get() with a default\"",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p05-t4",
        "label": "present keys still read normally",
        "assertCode": "assert (data.get(\"name\")) == (\"Asha\"), \"Expected \" + repr(\"Asha\") + \", got \" + repr(data.get(\"name\"))",
        "visibility": "public"
      }
    ],
    "approach": "Use .get() with a default so a response without an email prints \"not provided\".\n\nReference solution:\nimport json\n\nresponse = '{\"name\": \"Asha\", \"city\": \"Pune\"}'\ndata = json.loads(response)\n\nemail = data.get(\"email\", \"not provided\")\nprint(email)"
  },
  {
    "id": "m13-t5-p06",
    "topicId": "m13-t5",
    "slug": "api-query-string",
    "title": "APIs: Build the Query String",
    "difficulty": "medium",
    "order": 6,
    "layout": "challenge",
    "description": "Use urllib.parse.urlencode to turn a dict of parameters into a query string and print it.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Build the query string for "
        },
        {
          "type": "code",
          "value": "{\"q\": \"python\", \"page\": 2}"
        },
        {
          "type": "text",
          "value": " using "
        },
        {
          "type": "code",
          "value": "urlencode"
        },
        {
          "type": "text",
          "value": ", store it in "
        },
        {
          "type": "code",
          "value": "query"
        },
        {
          "type": "text",
          "value": ", and print it."
        }
      ],
      "editorPlaceholder": "# query = urlencode(params)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "urlencode",
        "params",
        "query"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "from urllib.parse import urlencode imports the helper.",
          "urlencode escapes values for you — safer than string concatenation.",
          "Pairs keep the dict's order and are joined with &."
        ]
      }
    },
    "examples": [
      {
        "output": "q=python&page=2"
      }
    ],
    "constraints": [
      "Use urlencode — do not build the string by hand",
      "Store the result in query",
      "Output must be exactly: q=python&page=2"
    ],
    "hints": [
      "query = urlencode(params)"
    ],
    "starterCode": "# TODO: encode the parameters\nfrom urllib.parse import urlencode\n\nparams = {\"q\": \"python\", \"page\": 2}\nquery = \"\"\n",
    "solutionCode": "from urllib.parse import urlencode\n\nparams = {\"q\": \"python\", \"page\": 2}\nquery = urlencode(params)\n\nprint(query)",
    "publicTests": [
      {
        "id": "m13-t5-p06-t1",
        "label": "Sample Case",
        "expectedStdout": "q=python&page=2",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p06-t2",
        "label": "query is built from the params",
        "assertCode": "assert (query) == (urlencode(params)), \"Expected \" + repr(urlencode(params)) + \", got \" + repr(query)",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p06-t3",
        "label": "params were not modified",
        "assertCode": "assert (params) == ({\"q\": \"python\", \"page\": 2}), \"Expected \" + repr({\"q\": \"python\", \"page\": 2}) + \", got \" + repr(params)",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p06-t4",
        "label": "urlencode was used",
        "assertCode": "assert \"&\" in query and \"=\" in query, \"Expected an encoded query string like q=python&page=2\"",
        "visibility": "public"
      }
    ],
    "approach": "Use urllib.parse.urlencode to turn a dict of parameters into a query string and print it.\n\nReference solution:\nfrom urllib.parse import urlencode\n\nparams = {\"q\": \"python\", \"page\": 2}\nquery = urlencode(params)\n\nprint(query)"
  },
  {
    "id": "m13-t5-p07",
    "topicId": "m13-t5",
    "slug": "api-summarize-active",
    "title": "APIs: Summarise Active Users",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "Parse a users response, keep only active users, print their names sorted and then the count.",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Parse the response, keep records where "
        },
        {
          "type": "code",
          "value": "active"
        },
        {
          "type": "text",
          "value": " is true, collect their names into "
        },
        {
          "type": "code",
          "value": "active_names"
        },
        {
          "type": "text",
          "value": " sorted alphabetically, print the list, then print how many there are."
        }
      ],
      "editorPlaceholder": "# active_names = sorted(...)",
      "emptyMessage": "Write your solution, then print the result.",
      "successDetail": "Correct!",
      "requiresVariables": [
        "json",
        "data",
        "active_names"
      ],
      "steps": {
        "title": "What you need to know",
        "items": [
          "JSON true/false becomes Python True/False after parsing.",
          "Filter with a comprehension, then wrap it in sorted().",
          "Print the list first, then len(active_names)."
        ]
      }
    },
    "examples": [
      {
        "output": "['Asha', 'Ravi']\n2"
      }
    ],
    "constraints": [
      "Filter on the active flag",
      "Sort the names alphabetically",
      "Print the list, then the count"
    ],
    "hints": [
      "active_names = sorted(u[\"name\"] for u in data[\"users\"] if u[\"active\"])",
      "print(active_names) then print(len(active_names))"
    ],
    "starterCode": "# TODO: keep active users, sort their names\nimport json\n\nresponse = '{\"users\": [{\"name\": \"Ravi\", \"active\": true}, {\"name\": \"Meera\", \"active\": false}, {\"name\": \"Asha\", \"active\": true}]}'\ndata = json.loads(response)\nactive_names = []\n",
    "solutionCode": "import json\n\nresponse = '{\"users\": [{\"name\": \"Ravi\", \"active\": true}, {\"name\": \"Meera\", \"active\": false}, {\"name\": \"Asha\", \"active\": true}]}'\ndata = json.loads(response)\n\nactive_names = sorted(u[\"name\"] for u in data[\"users\"] if u[\"active\"])\n\nprint(active_names)\nprint(len(active_names))",
    "publicTests": [
      {
        "id": "m13-t5-p07-t1",
        "label": "Sample Case",
        "expectedStdout": "['Asha', 'Ravi']\n2",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p07-t2",
        "label": "only active users, sorted",
        "assertCode": "assert (active_names) == ([\"Asha\", \"Ravi\"]), \"Expected \" + repr([\"Asha\", \"Ravi\"]) + \", got \" + repr(active_names)",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p07-t3",
        "label": "inactive users were dropped",
        "assertCode": "assert \"Meera\" not in active_names, \"Meera is inactive and should not appear\"",
        "visibility": "public"
      },
      {
        "id": "m13-t5-p07-t4",
        "label": "all three users were parsed",
        "assertCode": "assert (len(data[\"users\"])) == (3), \"Expected \" + repr(3) + \", got \" + repr(len(data[\"users\"]))",
        "visibility": "public"
      }
    ],
    "approach": "Parse a users response, keep only active users, print their names sorted and then the count.\n\nReference solution:\nimport json\n\nresponse = '{\"users\": [{\"name\": \"Ravi\", \"active\": true}, {\"name\": \"Meera\", \"active\": false}, {\"name\": \"Asha\", \"active\": true}]}'\ndata = json.loads(response)\n\nactive_names = sorted(u[\"name\"] for u in data[\"users\"] if u[\"active\"])\n\nprint(active_names)\nprint(len(active_names))"
  }
];
