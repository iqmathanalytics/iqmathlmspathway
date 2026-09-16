/**
 * Module 1 topics 2-5 — the environment topics.
 *
 * These lessons are conceptual (why Python, installs, IDEs, notebooks), so the
 * tasks stay at Module-1 syntax level but the *content* is the topic: the data
 * science stack, package checks, IDE choices, and notebook cell behaviour.
 * Previously all four topics shared one generic "print Ready" pack.
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

export function whyPythonTasks() {
  return [
    conceptTask({
      slug: "ds-stack-list",
      title: "Why Python: The Data Science Stack",
      level: "easy",
      description:
        'Store the four core data science libraries in a list named stack and print the list.',
      expected: "['NumPy', 'pandas', 'Matplotlib', 'scikit-learn']",
      intro: [
        seg("text", "Python leads data science because of its libraries. Store them in a list named "),
        seg("code", "stack"),
        seg("text", " — NumPy, pandas, Matplotlib, scikit-learn — then print the list."),
      ],
      steps: [
        'A list holds values in order: stack = ["NumPy", "pandas"]',
        "print(stack) shows the whole list with square brackets and quotes.",
        "Keep the spelling exactly as given — pandas is lowercase.",
      ],
      starter: '# TODO: build the stack list, then print it\nstack = []\n',
      solution:
        'stack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"]\nprint(stack)',
      checks: [
        assertType("stack", "list"),
        assertEquals("stack has 4 libraries", "len(stack)", "4"),
        assertEquals(
          "stack names are correct",
          "stack",
          '["NumPy", "pandas", "Matplotlib", "scikit-learn"]'
        ),
      ],
      vars: ["stack"],
      constraints: [
        "Name the list stack",
        "Order: NumPy, pandas, Matplotlib, scikit-learn",
        "Print the list itself, not each item",
      ],
      hints: [
        'Build it with square brackets: stack = ["NumPy", ...]',
        'The full answer is stack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"] then print(stack)',
      ],
      success: "Correct! That is the toolchain the rest of the course uses.",
      placeholder: "# build the stack list",
    }),

    conceptTask({
      slug: "ds-stack-count",
      title: "Why Python: Count the Libraries",
      level: "easy",
      description:
        "Store the data science stack in a list named stack and print how many libraries it holds.",
      expected: "4",
      intro: [
        seg("text", "Build the same "),
        seg("code", "stack"),
        seg("text", " list, then print how many libraries it holds using "),
        seg("code", "len()"),
        seg("text", "."),
      ],
      steps: [
        "len(some_list) returns the number of items as an integer.",
        "print(len(stack)) shows the count on its own line.",
      ],
      starter:
        '# TODO: count the libraries with len()\nstack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"]\n',
      solution:
        'stack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"]\nprint(len(stack))',
      checks: [
        assertType("stack", "list"),
        assertEquals("stack still holds 4 libraries", "len(stack)", "4"),
      ],
      vars: ["stack"],
      constraints: ["Name the list stack", "Use len() to count", "Output must be exactly: 4"],
      hints: ["Use print(len(stack))"],
      placeholder: "# print(len(stack))",
    }),

    conceptTask({
      slug: "ds-one-liner",
      title: "Why Python: One Line Instead of a Loop",
      level: "easy",
      description:
        "Store three daily sales values in a list named sales and print the total using the built-in sum().",
      expected: "40",
      intro: [
        seg("text", "Analysts pick Python because built-ins replace loops. Store "),
        seg("code", "[12, 7, 21]"),
        seg("text", " in a list named "),
        seg("code", "sales"),
        seg("text", " and print the total with "),
        seg("code", "sum()"),
        seg("text", "."),
      ],
      steps: [
        "sum(list_of_numbers) adds every item and returns the total.",
        "No loop is needed — that is the readability Python is known for.",
      ],
      starter: "# TODO: total the sales with sum()\nsales = [12, 7, 21]\n",
      solution: "sales = [12, 7, 21]\nprint(sum(sales))",
      checks: [
        assertType("sales", "list"),
        assertEquals("sales holds the given values", "sales", "[12, 7, 21]"),
        assertEquals("total is correct", "sum(sales)", "40"),
      ],
      vars: ["sales"],
      constraints: ["Name the list sales", "Use sum() — do not add by hand", "Output must be exactly: 40"],
      hints: ["print(sum(sales))"],
      placeholder: "# print(sum(sales))",
    }),

    conceptTask({
      slug: "ds-library-lookup",
      title: "Why Python: Pick the Right Library",
      level: "medium",
      description:
        'Create a dict named tools mapping "arrays", "tables", and "charts" to their library, then print the library for tables.',
      expected: "pandas",
      intro: [
        seg("text", "Each job has a library. Build a dict named "),
        seg("code", "tools"),
        seg("text", ' with "arrays" → NumPy, "tables" → pandas, "charts" → Matplotlib, then print the value for '),
        seg("code", '"tables"'),
        seg("text", "."),
      ],
      steps: [
        'A dict stores pairs: tools = {"arrays": "NumPy"}',
        'Look a value up with the key in brackets: tools["tables"]',
      ],
      starter: '# TODO: map each job to its library, then look up "tables"\ntools = {}\n',
      solution:
        'tools = {"arrays": "NumPy", "tables": "pandas", "charts": "Matplotlib"}\nprint(tools["tables"])',
      checks: [
        assertType("tools", "dict"),
        assertEquals("tools has 3 entries", "len(tools)", "3"),
        assertEquals("arrays maps to NumPy", 'tools["arrays"]', '"NumPy"'),
        assertEquals("charts maps to Matplotlib", 'tools["charts"]', '"Matplotlib"'),
      ],
      vars: ["tools"],
      constraints: [
        "Name the dict tools",
        'Keys: "arrays", "tables", "charts"',
        "Output must be exactly: pandas",
      ],
      hints: ['Look up with print(tools["tables"])'],
      placeholder: "# tools = { ... }",
    }),

    conceptTask({
      slug: "ds-membership",
      title: "Why Python: Is It In the Stack?",
      level: "medium",
      description:
        'Build the stack list and print whether "pandas" is in it using the in operator.',
      expected: "True",
      intro: [
        seg("text", "Use the "),
        seg("code", "in"),
        seg("text", " operator to check membership. Print whether "),
        seg("code", '"pandas"'),
        seg("text", " is inside your "),
        seg("code", "stack"),
        seg("text", " list."),
      ],
      steps: [
        '"pandas" in stack evaluates to True or False.',
        "print() of that expression shows True or False.",
      ],
      starter:
        '# TODO: check membership with in\nstack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"]\n',
      solution:
        'stack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"]\nprint("pandas" in stack)',
      checks: [
        assertType("stack", "list"),
        assertTrue(
          "pandas really is in the list",
          '"pandas" in stack',
          "Expected pandas to be one of the items in stack",
        ),
      ],
      vars: ["stack"],
      constraints: ["Name the list stack", "Use the in operator", "Output must be exactly: True"],
      hints: ['print("pandas" in stack)'],
      placeholder: "# print(... in stack)",
    }),

    conceptTask({
      slug: "ds-numbered-stack",
      title: "Why Python: Number the Stack",
      level: "medium",
      description:
        "Loop over the stack list with enumerate() and print each library as a numbered line.",
      expected: "1. NumPy\n2. pandas\n3. Matplotlib\n4. scikit-learn",
      intro: [
        seg("text", "Loop over "),
        seg("code", "stack"),
        seg("text", " with "),
        seg("code", "enumerate(stack, 1)"),
        seg("text", " and print each library as "),
        seg("code", "1. NumPy"),
        seg("text", "."),
      ],
      steps: [
        "enumerate(stack, 1) yields (1, 'NumPy'), (2, 'pandas'), …",
        'Format each line with an f-string: f"{n}. {name}"',
      ],
      starter:
        '# TODO: print a numbered list\nstack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"]\n',
      solution:
        'stack = ["NumPy", "pandas", "Matplotlib", "scikit-learn"]\nfor number, name in enumerate(stack, 1):\n    print(f"{number}. {name}")',
      checks: [
        assertType("stack", "list"),
        assertEquals("stack order is unchanged", "stack[3]", '"scikit-learn"'),
      ],
      vars: ["stack"],
      constraints: [
        "Use a for loop with enumerate",
        "Start numbering at 1",
        "One library per line",
      ],
      hints: [
        "for number, name in enumerate(stack, 1):",
        'Inside the loop: print(f"{number}. {name}")',
      ],
      placeholder: "# for number, name in enumerate(stack, 1):",
    }),

    conceptTask({
      slug: "ds-code-saved",
      title: "Why Python: How Much Code You Save",
      level: "hard",
      description:
        "Given 3 lines of pandas versus 27 lines by hand, compute and print the percentage of code saved.",
      expected: "pandas saves 89% of the code",
      intro: [
        seg("text", "A grouped summary takes "),
        seg("code", "3"),
        seg("text", " lines in pandas and "),
        seg("code", "27"),
        seg("text", " lines by hand. Store both in "),
        seg("code", "lines_pandas"),
        seg("text", " and "),
        seg("code", "lines_manual"),
        seg("text", ", compute the percentage saved into "),
        seg("code", "saved"),
        seg("text", ", and print the sentence."),
      ],
      steps: [
        "Percentage saved = (1 - lines_pandas / lines_manual) * 100",
        "Wrap it in round() to get a whole number.",
        'Build the sentence with an f-string: f"pandas saves {saved}% of the code"',
      ],
      starter:
        "# TODO: compute the percentage saved\nlines_pandas = 3\nlines_manual = 27\nsaved = 0\n",
      solution:
        'lines_pandas = 3\nlines_manual = 27\nsaved = round((1 - lines_pandas / lines_manual) * 100)\nprint(f"pandas saves {saved}% of the code")',
      checks: [
        assertEquals("saved is computed, not hardcoded text", "saved", "89"),
        assertEquals("lines_pandas is 3", "lines_pandas", "3"),
        assertEquals("lines_manual is 27", "lines_manual", "27"),
      ],
      vars: ["lines_pandas", "lines_manual", "saved"],
      constraints: [
        "Use the variables lines_pandas, lines_manual, and saved",
        "Compute saved with round() — do not type 89",
        "Output must be exactly: pandas saves 89% of the code",
      ],
      hints: [
        "saved = round((1 - lines_pandas / lines_manual) * 100)",
        'print(f"pandas saves {saved}% of the code")',
      ],
      placeholder: "# saved = round(...)",
    }),
  ];
}

export function pythonSetupTasks() {
  return [
    conceptTask({
      slug: "env-python-major",
      title: "Setup: Check Your Python Version",
      level: "easy",
      description:
        "Import sys, store sys.version_info.major in major, and print it to confirm you are on Python 3.",
      expected: "3",
      intro: [
        seg("text", "Every setup starts by checking the interpreter. Import "),
        seg("code", "sys"),
        seg("text", ", store "),
        seg("code", "sys.version_info.major"),
        seg("text", " in "),
        seg("code", "major"),
        seg("text", ", and print it."),
      ],
      steps: [
        "import sys gives you interpreter details.",
        "sys.version_info.major is 3 on every supported install.",
      ],
      starter: "# TODO: read the major version from sys\nimport sys\n\nmajor = None\n",
      solution: "import sys\n\nmajor = sys.version_info.major\nprint(major)",
      checks: [
        assertTrue("sys was imported", '"sys" in globals()', "Import sys before reading the version"),
        assertEquals("major comes from sys", "major", "sys.version_info.major"),
      ],
      vars: ["sys", "major"],
      constraints: ["Import sys", "Store the value in major", "Output must be exactly: 3"],
      hints: ["major = sys.version_info.major", "print(major)"],
      placeholder: "# major = sys.version_info.major",
    }),

    conceptTask({
      slug: "env-version-guard",
      title: "Setup: Require Python 3.8 or Newer",
      level: "easy",
      description:
        "Compare sys.version_info against (3, 8), store the result in supported, and print it.",
      expected: "True",
      intro: [
        seg("text", "Libraries declare a minimum version. Compare "),
        seg("code", "sys.version_info >= (3, 8)"),
        seg("text", ", store it in "),
        seg("code", "supported"),
        seg("text", ", and print the result."),
      ],
      steps: [
        "sys.version_info behaves like a tuple, so it compares with (3, 8).",
        "The comparison gives a bool: True or False.",
      ],
      starter: "# TODO: guard on the minimum version\nimport sys\n\nsupported = None\n",
      solution: "import sys\n\nsupported = sys.version_info >= (3, 8)\nprint(supported)",
      checks: [
        assertTrue("sys was imported", '"sys" in globals()', "Import sys to read the version"),
        assertType("supported", "bool"),
        assertEquals("supported is the real comparison", "supported", "sys.version_info >= (3, 8)"),
      ],
      vars: ["sys", "supported"],
      constraints: ["Compare against the tuple (3, 8)", "Store the bool in supported", "Output: True"],
      hints: ["supported = sys.version_info >= (3, 8)"],
      placeholder: "# supported = sys.version_info >= (3, 8)",
    }),

    conceptTask({
      slug: "env-import-check",
      title: "Setup: Confirm a Package Imports",
      level: "easy",
      description:
        "Import math and print pi rounded to two decimals to prove the interpreter can load modules.",
      expected: "3.14",
      intro: [
        seg("text", "A working install can import modules. Import "),
        seg("code", "math"),
        seg("text", " and print "),
        seg("code", "round(math.pi, 2)"),
        seg("text", "."),
      ],
      steps: [
        "import math loads a module from the standard library.",
        "round(value, 2) keeps two decimal places.",
      ],
      starter: "# TODO: import math and print pi to 2 decimals\n",
      solution: "import math\n\nprint(round(math.pi, 2))",
      checks: [
        assertTrue("math was imported", '"math" in globals()', "Import math first"),
        assertEquals("pi is rounded to 2 decimals", "round(math.pi, 2)", "3.14"),
      ],
      vars: ["math"],
      constraints: ["Import math", "Use round() with 2 decimals", "Output must be exactly: 3.14"],
      hints: ["import math then print(round(math.pi, 2))"],
      placeholder: "# import math",
    }),

    conceptTask({
      slug: "env-package-installed",
      title: "Setup: Is NumPy Installed?",
      level: "medium",
      description:
        'Use try/except ImportError to set status to "installed" or "missing" for numpy, then print status.',
      expected: "installed",
      intro: [
        seg("text", "This is how scripts check dependencies. Try to "),
        seg("code", "import numpy"),
        seg("text", "; set "),
        seg("code", "status"),
        seg("text", ' to "installed" on success and "missing" in the '),
        seg("code", "except ImportError"),
        seg("text", " branch, then print it."),
      ],
      steps: [
        "A failed import raises ImportError — catch it instead of crashing.",
        "Set status inside each branch so exactly one value survives.",
      ],
      starter:
        '# TODO: detect whether numpy is installed\nstatus = "unknown"\n\ntry:\n    pass\nexcept ImportError:\n    pass\n',
      solution:
        'try:\n    import numpy\n    status = "installed"\nexcept ImportError:\n    status = "missing"\n\nprint(status)',
      checks: [
        assertEquals("status reflects the import", "status", '"installed"'),
        assertTrue(
          "the import was actually attempted",
          '"numpy" in globals()',
          "Import numpy inside the try block",
        ),
      ],
      vars: ["status"],
      constraints: [
        "Use try / except ImportError",
        "Store the result in status",
        "Output must be exactly: installed",
      ],
      hints: [
        'try:\n    import numpy\n    status = "installed"',
        'except ImportError:\n    status = "missing"',
      ],
      placeholder: "# try: import numpy",
    }),

    conceptTask({
      slug: "env-venv-path",
      title: "Setup: Build the Virtual Env Path",
      level: "medium",
      description:
        "Use pathlib to build the .venv/bin/activate path and print it with as_posix().",
      expected: ".venv/bin/activate",
      intro: [
        seg("text", "Activating a virtual environment runs a script inside it. Build "),
        seg("code", 'Path(".venv") / "bin" / "activate"'),
        seg("text", ", store it in "),
        seg("code", "activate"),
        seg("text", ", and print "),
        seg("code", "activate.as_posix()"),
        seg("text", "."),
      ],
      steps: [
        "pathlib joins path parts with the / operator.",
        "as_posix() always prints forward slashes, so the output is the same on every OS.",
      ],
      starter:
        "# TODO: join the venv path parts\nfrom pathlib import Path\n\nactivate = None\n",
      solution:
        'from pathlib import Path\n\nactivate = Path(".venv") / "bin" / "activate"\nprint(activate.as_posix())',
      checks: [
        assertTrue("Path was imported", '"Path" in globals()', "Import Path from pathlib"),
        assertTrue(
          "activate is a Path object",
          "isinstance(activate, Path)",
          "Expected activate to be a pathlib.Path, not a plain string",
        ),
        assertEquals("path parts are joined", "activate.as_posix()", '".venv/bin/activate"'),
      ],
      vars: ["Path", "activate"],
      constraints: [
        "Use pathlib.Path and the / operator",
        "Store the path in activate",
        "Print with as_posix()",
      ],
      hints: ['activate = Path(".venv") / "bin" / "activate"', "print(activate.as_posix())"],
      placeholder: "# activate = Path('.venv') / ...",
    }),

    conceptTask({
      slug: "env-requirements",
      title: "Setup: Print requirements.txt",
      level: "medium",
      description:
        "Loop over a dict of package versions and print each pinned requirement line.",
      expected: "numpy==1.26.4\npandas==2.2.0\nmatplotlib==3.5.2",
      intro: [
        seg("text", "A requirements file pins versions. Build a dict named "),
        seg("code", "packages"),
        seg("text", " with numpy 1.26.4, pandas 2.2.0, matplotlib 3.5.2 and print one "),
        seg("code", "name==version"),
        seg("text", " line each."),
      ],
      steps: [
        "packages.items() gives (name, version) pairs in insertion order.",
        'f"{name}=={version}" builds the pinned line.',
      ],
      starter: "# TODO: print one pinned line per package\npackages = {}\n",
      solution:
        'packages = {"numpy": "1.26.4", "pandas": "2.2.0", "matplotlib": "3.5.2"}\nfor name, version in packages.items():\n    print(f"{name}=={version}")',
      checks: [
        assertType("packages", "dict"),
        assertEquals("packages has 3 pins", "len(packages)", "3"),
        assertEquals("numpy is pinned", 'packages["numpy"]', '"1.26.4"'),
      ],
      vars: ["packages"],
      constraints: [
        "Name the dict packages",
        "Keep the order numpy, pandas, matplotlib",
        "One requirement per line",
      ],
      hints: [
        "for name, version in packages.items():",
        'print(f"{name}=={version}")',
      ],
      placeholder: "# packages = { ... }",
    }),

    conceptTask({
      slug: "env-pip-command",
      title: "Setup: Build the pip install Command",
      level: "hard",
      description:
        "Join a list of package names into a single pip install command and print it.",
      expected: "pip install numpy pandas matplotlib scikit-learn",
      intro: [
        seg("text", "Turn a list of packages into one shell command. Store the names in "),
        seg("code", "packages"),
        seg("text", ", build the command with "),
        seg("code", '" ".join(packages)'),
        seg("text", " into "),
        seg("code", "command"),
        seg("text", ", and print it."),
      ],
      steps: [
        '" ".join(list_of_strings) glues items together with a space.',
        'Prefix the joined names with "pip install ".',
      ],
      starter:
        '# TODO: build the install command with join()\npackages = ["numpy", "pandas", "matplotlib", "scikit-learn"]\ncommand = ""\n',
      solution:
        'packages = ["numpy", "pandas", "matplotlib", "scikit-learn"]\ncommand = "pip install " + " ".join(packages)\nprint(command)',
      checks: [
        assertType("packages", "list"),
        assertEquals("packages holds 4 names", "len(packages)", "4"),
        assertEquals(
          "command is built from the list",
          "command",
          '"pip install " + " ".join(packages)'
        ),
      ],
      vars: ["packages", "command"],
      constraints: [
        "Use \" \".join(packages) — do not type the names twice",
        "Store the result in command",
        "Output must be exactly: pip install numpy pandas matplotlib scikit-learn",
      ],
      hints: ['command = "pip install " + " ".join(packages)'],
      placeholder: "# command = 'pip install ' + ...",
    }),
  ];
}

export function pythonIdeTasks() {
  return [
    conceptTask({
      slug: "ide-list",
      title: "IDEs: List Your Options",
      level: "easy",
      description:
        "Store the three editors used in this course in a list named ides and print how many there are.",
      expected: "3",
      intro: [
        seg("text", "Store "),
        seg("code", '"VS Code", "PyCharm", "Jupyter Lab"'),
        seg("text", " in a list named "),
        seg("code", "ides"),
        seg("text", " and print the count."),
      ],
      steps: ["Lists keep the order you write.", "len(ides) counts the editors."],
      starter: "# TODO: list the editors, then count them\nides = []\n",
      solution: 'ides = ["VS Code", "PyCharm", "Jupyter Lab"]\nprint(len(ides))',
      checks: [
        assertType("ides", "list"),
        assertEquals("three editors listed", "len(ides)", "3"),
        assertTrue(
          "VS Code is one of them",
          '"VS Code" in ides',
          "Expected VS Code to be in the ides list",
        ),
      ],
      vars: ["ides"],
      constraints: ["Name the list ides", "Output must be exactly: 3"],
      hints: ['ides = ["VS Code", "PyCharm", "Jupyter Lab"] then print(len(ides))'],
      placeholder: "# ides = [ ... ]",
    }),

    conceptTask({
      slug: "ide-best-for",
      title: "IDEs: Which Editor for Which Job",
      level: "easy",
      description:
        "Map each editor to what it is best at in a dict named best_for and print the entry for Jupyter Lab.",
      expected: "notebooks",
      intro: [
        seg("text", "Build a dict named "),
        seg("code", "best_for"),
        seg("text", ' mapping "VS Code" → scripts, "PyCharm" → large projects, "Jupyter Lab" → notebooks, then print the Jupyter Lab value.'),
      ],
      steps: ['Dict keys can contain spaces: best_for["Jupyter Lab"]'],
      starter: "# TODO: map editor to strength\nbest_for = {}\n",
      solution:
        'best_for = {"VS Code": "scripts", "PyCharm": "large projects", "Jupyter Lab": "notebooks"}\nprint(best_for["Jupyter Lab"])',
      checks: [
        assertType("best_for", "dict"),
        assertEquals("three editors mapped", "len(best_for)", "3"),
        assertEquals("VS Code maps to scripts", 'best_for["VS Code"]', '"scripts"'),
      ],
      vars: ["best_for"],
      constraints: ["Name the dict best_for", "Output must be exactly: notebooks"],
      hints: ['print(best_for["Jupyter Lab"])'],
      placeholder: "# best_for = { ... }",
    }),

    conceptTask({
      slug: "ide-default-choice",
      title: "IDEs: Print the Default Choice",
      level: "easy",
      description:
        "Print the first editor in the ides list using index 0.",
      expected: "VS Code",
      intro: [
        seg("text", "The first item in "),
        seg("code", "ides"),
        seg("text", " is the course default. Print "),
        seg("code", "ides[0]"),
        seg("text", "."),
      ],
      steps: ["Index 0 is the first item.", "print(ides[0]) shows just that name."],
      starter:
        '# TODO: print the first editor\nides = ["VS Code", "PyCharm", "Jupyter Lab"]\n',
      solution: 'ides = ["VS Code", "PyCharm", "Jupyter Lab"]\nprint(ides[0])',
      checks: [
        assertType("ides", "list"),
        assertEquals("first editor is VS Code", "ides[0]", '"VS Code"'),
      ],
      vars: ["ides"],
      constraints: ["Use index 0", "Output must be exactly: VS Code"],
      hints: ["print(ides[0])"],
      placeholder: "# print(ides[0])",
    }),

    conceptTask({
      slug: "ide-sorted",
      title: "IDEs: Sort the List",
      level: "medium",
      description:
        "Print the editors in alphabetical order using sorted().",
      expected: "['Jupyter Lab', 'PyCharm', 'VS Code']",
      intro: [
        seg("text", "Print "),
        seg("code", "sorted(ides)"),
        seg("text", " to list the editors alphabetically. The original list must stay unchanged."),
      ],
      steps: [
        "sorted(ides) returns a new sorted list.",
        "ides.sort() would change the original — use sorted() here.",
      ],
      starter:
        '# TODO: print the editors alphabetically\nides = ["VS Code", "PyCharm", "Jupyter Lab"]\n',
      solution: 'ides = ["VS Code", "PyCharm", "Jupyter Lab"]\nprint(sorted(ides))',
      checks: [
        assertType("ides", "list"),
        assertEquals(
          "the original list order is untouched",
          "ides",
          '["VS Code", "PyCharm", "Jupyter Lab"]'
        ),
      ],
      vars: ["ides"],
      constraints: [
        "Use sorted() — do not modify ides",
        "Output must be exactly: ['Jupyter Lab', 'PyCharm', 'VS Code']",
      ],
      hints: ["print(sorted(ides))"],
      placeholder: "# print(sorted(ides))",
    }),

    conceptTask({
      slug: "ide-shortcuts",
      title: "IDEs: Shortcut Cheat Sheet",
      level: "medium",
      description:
        "Store two editor shortcuts in a dict named shortcuts and print the count and the run shortcut.",
      expected: "2\nShift+Enter",
      intro: [
        seg("text", "Build a dict named "),
        seg("code", "shortcuts"),
        seg("text", ' with "run cell" → Shift+Enter and "command palette" → Ctrl+Shift+P. Print the number of shortcuts, then the "run cell" value.'),
      ],
      steps: [
        "Print the count first with len(shortcuts).",
        'Then print the value: shortcuts["run cell"]',
      ],
      starter: "# TODO: build the cheat sheet, print count then the run shortcut\nshortcuts = {}\n",
      solution:
        'shortcuts = {"run cell": "Shift+Enter", "command palette": "Ctrl+Shift+P"}\nprint(len(shortcuts))\nprint(shortcuts["run cell"])',
      checks: [
        assertType("shortcuts", "dict"),
        assertEquals("two shortcuts stored", "len(shortcuts)", "2"),
        assertEquals("run cell shortcut", 'shortcuts["run cell"]', '"Shift+Enter"'),
      ],
      vars: ["shortcuts"],
      constraints: [
        "Name the dict shortcuts",
        "Print the count on line 1 and the shortcut on line 2",
      ],
      hints: ["print(len(shortcuts))", 'print(shortcuts["run cell"])'],
      placeholder: "# shortcuts = { ... }",
    }),

    conceptTask({
      slug: "ide-notebook-support",
      title: "IDEs: Filter Notebook-Capable Editors",
      level: "medium",
      description:
        "Given a dict of editor → notebook support, use a comprehension to print only the editors that support notebooks.",
      expected: "['VS Code', 'Jupyter Lab']",
      intro: [
        seg("text", "Given "),
        seg("code", "supports_notebooks"),
        seg("text", " mapping each editor to True or False, build a list named "),
        seg("code", "notebook_ides"),
        seg("text", " of the editors where the value is True, then print it."),
      ],
      steps: [
        "Loop the pairs: for name, ok in supports_notebooks.items()",
        "A comprehension with an if keeps only the matching names.",
      ],
      starter:
        '# TODO: keep only the editors that support notebooks\nsupports_notebooks = {"VS Code": True, "PyCharm": False, "Jupyter Lab": True}\nnotebook_ides = []\n',
      solution:
        'supports_notebooks = {"VS Code": True, "PyCharm": False, "Jupyter Lab": True}\nnotebook_ides = [name for name, ok in supports_notebooks.items() if ok]\nprint(notebook_ides)',
      checks: [
        assertType("notebook_ides", "list"),
        assertEquals(
          "only notebook editors kept",
          "notebook_ides",
          '["VS Code", "Jupyter Lab"]'
        ),
        assertTrue(
          "PyCharm was filtered out",
          '"PyCharm" not in notebook_ides',
          "PyCharm does not support notebooks — it should not be in the list",
        ),
      ],
      vars: ["supports_notebooks", "notebook_ides"],
      constraints: [
        "Build notebook_ides from the dict — do not retype the names",
        "Output must be exactly: ['VS Code', 'Jupyter Lab']",
      ],
      hints: ["notebook_ides = [name for name, ok in supports_notebooks.items() if ok]"],
      placeholder: "# notebook_ides = [ ... ]",
    }),

    conceptTask({
      slug: "ide-recommend",
      title: "IDEs: Recommend an Editor",
      level: "hard",
      description:
        "Write recommend(job) that returns Jupyter Lab for exploration and VS Code for anything else, then print two calls.",
      expected: "Jupyter Lab\nVS Code",
      intro: [
        seg("text", "Define "),
        seg("code", "recommend(job)"),
        seg("text", ' that returns "Jupyter Lab" when job is "exploration" and "VS Code" otherwise. Print '),
        seg("code", 'recommend("exploration")'),
        seg("text", " then "),
        seg("code", 'recommend("deployment")'),
        seg("text", "."),
      ],
      steps: [
        "def recommend(job): starts the function.",
        "Return a value for the exploration case, then return the default.",
      ],
      starter:
        "# TODO: return the right editor for the job\ndef recommend(job):\n    pass\n",
      solution:
        'def recommend(job):\n    if job == "exploration":\n        return "Jupyter Lab"\n    return "VS Code"\n\nprint(recommend("exploration"))\nprint(recommend("deployment"))',
      checks: [
        assertTrue("recommend is defined", "callable(recommend)", "Define a function named recommend"),
        assertEquals("exploration → Jupyter Lab", 'recommend("exploration")', '"Jupyter Lab"'),
        assertEquals("anything else → VS Code", 'recommend("deployment")', '"VS Code"'),
        assertEquals("unknown jobs fall back too", 'recommend("scripting")', '"VS Code"'),
      ],
      constraints: [
        "Define a function named recommend",
        "Return values — do not print inside the function",
        "Print the two calls in order",
      ],
      hints: [
        'if job == "exploration": return "Jupyter Lab"',
        'End the function with return "VS Code"',
      ],
      placeholder: "# def recommend(job):",
    }),
  ];
}

export function jupyterTasks() {
  return [
    conceptTask({
      slug: "nb-cell-result",
      title: "Notebooks: A Cell Produces a Result",
      level: "easy",
      description:
        "Store the result of 2 + 3 in a variable named result and print it, like a notebook cell output.",
      expected: "5",
      intro: [
        seg("text", "A notebook cell runs code and shows a result. Store "),
        seg("code", "2 + 3"),
        seg("text", " in "),
        seg("code", "result"),
        seg("text", " and print it."),
      ],
      steps: [
        "In a notebook, In [1] holds your code and Out [1] shows the value.",
        "In a script you print the value to see it.",
      ],
      starter: "# TODO: compute the cell result\nresult = None\n",
      solution: "result = 2 + 3\nprint(result)",
      checks: [
        assertEquals("result is computed", "result", "5"),
        assertType("result", "int"),
      ],
      vars: ["result"],
      constraints: ["Store the value in result", "Output must be exactly: 5"],
      hints: ["result = 2 + 3 then print(result)"],
      placeholder: "# result = 2 + 3",
    }),

    conceptTask({
      slug: "nb-state-carries",
      title: "Notebooks: State Carries Between Cells",
      level: "easy",
      description:
        "Increment a counter twice to show that notebook variables persist between cells, then print it.",
      expected: "2",
      intro: [
        seg("text", "Variables survive from cell to cell. Set "),
        seg("code", "counter = 0"),
        seg("text", ", add 1 twice (as if in two separate cells), then print "),
        seg("code", "counter"),
        seg("text", "."),
      ],
      steps: [
        "counter += 1 adds one to the existing value.",
        "Running the same cell twice keeps adding — a classic notebook surprise.",
      ],
      starter: "# TODO: run two 'cells' that each add 1\ncounter = 0\n",
      solution: "counter = 0\ncounter += 1\ncounter += 1\nprint(counter)",
      checks: [
        assertEquals("counter ended at 2", "counter", "2"),
        assertType("counter", "int"),
      ],
      vars: ["counter"],
      constraints: ["Use += to increment", "Output must be exactly: 2"],
      hints: ["counter += 1 twice, then print(counter)"],
      placeholder: "# counter += 1",
    }),

    conceptTask({
      slug: "nb-execution-labels",
      title: "Notebooks: Execution Counter Labels",
      level: "easy",
      description:
        "Build the list of execution labels In [1] to In [3] and print each on its own line.",
      expected: "In [1]\nIn [2]\nIn [3]",
      intro: [
        seg("text", "Each run bumps the execution counter. Build a list named "),
        seg("code", "labels"),
        seg("text", " holding "),
        seg("code", "In [1]"),
        seg("text", " through "),
        seg("code", "In [3]"),
        seg("text", ", then print each label."),
      ],
      steps: [
        "Use a comprehension over range(1, 4).",
        'Format each label with f"In [{n}]"',
      ],
      starter: "# TODO: build the labels, then print them\nlabels = []\n",
      solution:
        'labels = [f"In [{n}]" for n in range(1, 4)]\nfor label in labels:\n    print(label)',
      checks: [
        assertType("labels", "list"),
        assertEquals(
          "labels are built for 1 to 3",
          "labels",
          '["In [1]", "In [2]", "In [3]"]'
        ),
      ],
      vars: ["labels"],
      constraints: [
        "Build labels with range() — do not type the three strings",
        "One label per line",
      ],
      hints: ['labels = [f"In [{n}]" for n in range(1, 4)]', "Then loop and print each label"],
      placeholder: "# labels = [ ... ]",
    }),

    conceptTask({
      slug: "nb-restart-kernel",
      title: "Notebooks: Restarting Clears State",
      level: "medium",
      description:
        "Model the kernel namespace as a dict, clear it to simulate a restart, and print how many variables remain.",
      expected: "0",
      intro: [
        seg("text", "Restarting the kernel wipes every variable. Put "),
        seg("code", '{"df": "loaded", "model": "trained"}'),
        seg("text", " in "),
        seg("code", "namespace"),
        seg("text", ", call "),
        seg("code", ".clear()"),
        seg("text", ", then print how many names are left."),
      ],
      steps: [
        "dict.clear() removes every key in place.",
        "len(namespace) is 0 after a restart — you must re-run your cells.",
      ],
      starter:
        '# TODO: clear the namespace, then count what is left\nnamespace = {"df": "loaded", "model": "trained"}\n',
      solution:
        'namespace = {"df": "loaded", "model": "trained"}\nnamespace.clear()\nprint(len(namespace))',
      checks: [
        assertType("namespace", "dict"),
        assertEquals("namespace was cleared", "namespace", "{}"),
      ],
      vars: ["namespace"],
      constraints: ["Use .clear()", "Output must be exactly: 0"],
      hints: ["namespace.clear() then print(len(namespace))"],
      placeholder: "# namespace.clear()",
    }),

    conceptTask({
      slug: "nb-cell-types",
      title: "Notebooks: Count Markdown vs Code Cells",
      level: "medium",
      description:
        "Count how many cells are markdown and how many are code, store both in a dict, and print it.",
      expected: "{'markdown': 2, 'code': 3}",
      intro: [
        seg("text", "Given "),
        seg("code", "cells"),
        seg("text", ", build a dict named "),
        seg("code", "counts"),
        seg("text", " with the number of markdown and code cells, then print it."),
      ],
      steps: [
        'cells.count("code") counts matching items.',
        "Put both counts in a dict with keys markdown and code, in that order.",
      ],
      starter:
        '# TODO: count each cell type\ncells = ["markdown", "code", "code", "markdown", "code"]\ncounts = {}\n',
      solution:
        'cells = ["markdown", "code", "code", "markdown", "code"]\ncounts = {"markdown": cells.count("markdown"), "code": cells.count("code")}\nprint(counts)',
      checks: [
        assertType("counts", "dict"),
        assertEquals("markdown count", 'counts["markdown"]', "2"),
        assertEquals("code count", 'counts["code"]', "3"),
      ],
      vars: ["cells", "counts"],
      constraints: [
        "Count with .count() — do not type the numbers",
        "Key order: markdown then code",
      ],
      hints: ['counts = {"markdown": cells.count("markdown"), "code": cells.count("code")}'],
      placeholder: "# counts = { ... }",
    }),

    conceptTask({
      slug: "nb-out-history",
      title: "Notebooks: Look Up an Old Output",
      level: "medium",
      description:
        "Store the Out[] history in a dict keyed by execution number and print the value of Out[2].",
      expected: "12",
      intro: [
        seg("text", "Notebooks keep past outputs. Store "),
        seg("code", "{1: 5, 2: 12, 3: 20}"),
        seg("text", " in "),
        seg("code", "outputs"),
        seg("text", " and print the value for execution "),
        seg("code", "2"),
        seg("text", "."),
      ],
      steps: ["Dict keys can be integers: outputs[2]"],
      starter: "# TODO: look up Out[2]\noutputs = {1: 5, 2: 12, 3: 20}\n",
      solution: "outputs = {1: 5, 2: 12, 3: 20}\nprint(outputs[2])",
      checks: [
        assertType("outputs", "dict"),
        assertEquals("three outputs stored", "len(outputs)", "3"),
        assertEquals("Out[2] is 12", "outputs[2]", "12"),
      ],
      vars: ["outputs"],
      constraints: ["Use the integer key 2", "Output must be exactly: 12"],
      hints: ["print(outputs[2])"],
      placeholder: "# print(outputs[2])",
    }),

    conceptTask({
      slug: "nb-summary",
      title: "Notebooks: Summarise a Notebook",
      level: "hard",
      description:
        "Given a list of cell dicts, count the code cells and total their lines, then print a summary line.",
      expected: "2 code cells, 8 lines",
      intro: [
        seg("text", "Each cell is a dict with "),
        seg("code", "type"),
        seg("text", " and "),
        seg("code", "lines"),
        seg("text", ". Count the code cells into "),
        seg("code", "code_cells"),
        seg("text", ", total their lines into "),
        seg("code", "code_lines"),
        seg("text", ", and print the summary."),
      ],
      steps: [
        "Filter with a comprehension: [c for c in cells if c[\"type\"] == \"code\"]",
        "sum(c[\"lines\"] for c in ...) totals the lines.",
        'Format with f"{code_cells} code cells, {code_lines} lines"',
      ],
      starter:
        '# TODO: summarise only the code cells\ncells = [\n    {"type": "code", "lines": 3},\n    {"type": "markdown", "lines": 2},\n    {"type": "code", "lines": 5},\n]\ncode_cells = 0\ncode_lines = 0\n',
      solution:
        'cells = [\n    {"type": "code", "lines": 3},\n    {"type": "markdown", "lines": 2},\n    {"type": "code", "lines": 5},\n]\ncode_cells = len([c for c in cells if c["type"] == "code"])\ncode_lines = sum(c["lines"] for c in cells if c["type"] == "code")\nprint(f"{code_cells} code cells, {code_lines} lines")',
      checks: [
        assertEquals("code cells counted", "code_cells", "2"),
        assertEquals("markdown lines excluded", "code_lines", "8"),
        assertEquals("source data untouched", "len(cells)", "3"),
      ],
      vars: ["cells", "code_cells", "code_lines"],
      constraints: [
        "Skip markdown cells in both numbers",
        "Compute the values — do not type 2 or 8",
        "Output must be exactly: 2 code cells, 8 lines",
      ],
      hints: [
        'code_cells = len([c for c in cells if c["type"] == "code"])',
        'code_lines = sum(c["lines"] for c in cells if c["type"] == "code")',
      ],
      placeholder: "# code_cells = ...",
    }),
  ];
}
