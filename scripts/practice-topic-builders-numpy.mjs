/**
 * Module 14 — NumPy. Replaces the generic print pack.
 *
 * Pyodide ships numpy 1.26 while local verification may run numpy 2.x, and the
 * two disagree on repr() of numpy scalars. So every task prints pure Python
 * values: .tolist(), int(), float(), round(). dtypes are always stated
 * explicitly for the same reason (default int width differs on wasm32).
 */
import { conceptTask, seg, assertEquals, assertTrue, assertType } from "./practice-task-kit.mjs";

const NP = 'import numpy as _np';

/** isinstance check against ndarray without relying on the learner's alias. */
function assertIsArray(name) {
  return {
    label: `${name} is a NumPy array`,
    code: `${NP}\nassert "${name}" in globals(), "Expected a variable named ${name}"\nassert isinstance(${name}, _np.ndarray), "Expected ${name} to be a NumPy array, got " + type(${name}).__name__`,
  };
}

export function numpyIntroTasks() {
  return [
    conceptTask({
      slug: "np-first-array",
      title: "NumPy: Your First Array",
      level: "easy",
      description:
        "Create a NumPy array named arr from [3, 6, 9] and print it as a plain list with .tolist().",
      expected: "[3, 6, 9]",
      intro: [
        seg("text", "Import NumPy as "),
        seg("code", "np"),
        seg("text", ", build "),
        seg("code", "arr"),
        seg("text", " from "),
        seg("code", "[3, 6, 9]"),
        seg("text", " with "),
        seg("code", "np.array()"),
        seg("text", ", and print "),
        seg("code", "arr.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "import numpy as np is the universal convention.",
        "np.array(list) converts a Python list into an ndarray.",
        ".tolist() converts it back, which prints cleanly on every platform.",
      ],
      starter: "# TODO: build the array and print it as a list\nimport numpy as np\n\narr = None\n",
      solution: "import numpy as np\n\narr = np.array([3, 6, 9])\nprint(arr.tolist())",
      checks: [
        assertIsArray("arr"),
        assertEquals("arr holds the given values", "arr.tolist()", "[3, 6, 9]"),
      ],
      vars: ["np", "arr"],
      constraints: [
        "Use np.array() — a plain list will not pass",
        "Name the array arr",
        "Print with .tolist()",
      ],
      hints: ["arr = np.array([3, 6, 9])", "print(arr.tolist())"],
      success: "Correct! arr is a real ndarray, not a Python list.",
      placeholder: "# arr = np.array([...])",
    }),

    conceptTask({
      slug: "np-vectorized-double",
      title: "NumPy: Double Every Value at Once",
      level: "easy",
      description:
        "Multiply the whole array by 2 in one expression and print the result as a list.",
      expected: "[6, 12, 18]",
      intro: [
        seg("text", "NumPy applies maths to every element at once. Print "),
        seg("code", "(arr * 2).tolist()"),
        seg("text", " — no loop needed."),
      ],
      steps: [
        "arr * 2 multiplies every element — this is called vectorisation.",
        "On a Python list, * 2 would repeat the list instead.",
      ],
      starter:
        "# TODO: double every value without a loop\nimport numpy as np\n\narr = np.array([3, 6, 9])\n",
      solution:
        "import numpy as np\n\narr = np.array([3, 6, 9])\nprint((arr * 2).tolist())",
      checks: [
        assertIsArray("arr"),
        assertEquals("arr itself is unchanged", "arr.tolist()", "[3, 6, 9]"),
        assertEquals("doubling works elementwise", "(arr * 2).tolist()", "[6, 12, 18]"),
      ],
      vars: ["np", "arr"],
      constraints: ["No for loop", "Do not modify arr", "Output must be exactly: [6, 12, 18]"],
      hints: ["print((arr * 2).tolist())"],
      placeholder: "# print((arr * 2).tolist())",
    }),

    conceptTask({
      slug: "np-array-sum",
      title: "NumPy: Total an Array",
      level: "easy",
      description: "Print the sum of the array using arr.sum() wrapped in int().",
      expected: "18",
      intro: [
        seg("text", "Print "),
        seg("code", "int(arr.sum())"),
        seg("text", ". Wrapping in "),
        seg("code", "int()"),
        seg("text", " turns the NumPy scalar into a plain Python int."),
      ],
      steps: [
        "arr.sum() adds every element.",
        "NumPy returns its own scalar type — int() makes the output predictable.",
      ],
      starter:
        "# TODO: total the array\nimport numpy as np\n\narr = np.array([3, 6, 9])\n",
      solution: "import numpy as np\n\narr = np.array([3, 6, 9])\nprint(int(arr.sum()))",
      checks: [
        assertIsArray("arr"),
        assertEquals("the total is correct", "int(arr.sum())", "18"),
      ],
      vars: ["np", "arr"],
      constraints: ["Use arr.sum()", "Wrap the result in int()", "Output must be exactly: 18"],
      hints: ["print(int(arr.sum()))"],
      placeholder: "# print(int(arr.sum()))",
    }),

    conceptTask({
      slug: "np-array-type",
      title: "NumPy: What Type Is It?",
      level: "easy",
      description:
        "Print the class name of a NumPy array using type(arr).__name__ to confirm it is an ndarray.",
      expected: "ndarray",
      intro: [
        seg("text", "Print "),
        seg("code", "type(arr).__name__"),
        seg("text", ". The answer, "),
        seg("code", "ndarray"),
        seg("text", ", is the N-dimensional array at the heart of NumPy."),
      ],
      steps: [
        "type(x) gives the class; .__name__ gives its name as a string.",
        "Every NumPy array is an ndarray no matter its shape.",
      ],
      starter:
        "# TODO: print the class name of the array\nimport numpy as np\n\narr = np.array([3, 6, 9])\n",
      solution:
        "import numpy as np\n\narr = np.array([3, 6, 9])\nprint(type(arr).__name__)",
      checks: [
        assertIsArray("arr"),
        assertEquals("the class name is ndarray", "type(arr).__name__", '"ndarray"'),
      ],
      vars: ["np", "arr"],
      constraints: [
        "Use type(arr).__name__ — do not type the word yourself",
        "Output must be exactly: ndarray",
      ],
      hints: ["print(type(arr).__name__)"],
      placeholder: "# print(type(arr).__name__)",
    }),

    conceptTask({
      slug: "np-add-arrays",
      title: "NumPy: Add Two Arrays",
      level: "medium",
      description:
        "Add two arrays elementwise into a variable named total and print it as a list.",
      expected: "[11, 22, 33]",
      intro: [
        seg("text", "Add "),
        seg("code", "[1, 2, 3]"),
        seg("text", " and "),
        seg("code", "[10, 20, 30]"),
        seg("text", " elementwise into "),
        seg("code", "total"),
        seg("text", " and print "),
        seg("code", "total.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "a + b pairs up matching positions when the shapes match.",
        "The result is a new array — neither input changes.",
      ],
      starter:
        "# TODO: add the two arrays\nimport numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\ntotal = None\n",
      solution:
        "import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\ntotal = a + b\nprint(total.tolist())",
      checks: [
        assertIsArray("total"),
        assertEquals("elementwise sum", "total.tolist()", "[11, 22, 33]"),
        assertEquals("input a is unchanged", "a.tolist()", "[1, 2, 3]"),
      ],
      vars: ["np", "total"],
      constraints: ["Use + on the arrays", "Store the result in total", "No loops"],
      hints: ["total = a + b", "print(total.tolist())"],
      placeholder: "# total = a + b",
    }),

    conceptTask({
      slug: "np-list-vs-array",
      title: "NumPy: List vs Array Multiplication",
      level: "medium",
      description:
        "Show that * 2 repeats a Python list but doubles a NumPy array by printing both results.",
      expected: "[1, 2, 1, 2]\n[2, 4]",
      intro: [
        seg("text", "Print "),
        seg("code", "numbers * 2"),
        seg("text", " for the Python list, then "),
        seg("code", "(arr * 2).tolist()"),
        seg("text", " for the array. Same operator, very different meaning."),
      ],
      steps: [
        "For a list, * 2 concatenates the list with itself.",
        "For an array, * 2 multiplies every element.",
        "This is the single biggest surprise when moving from lists to NumPy.",
      ],
      starter:
        "# TODO: print the list result, then the array result\nimport numpy as np\n\nnumbers = [1, 2]\narr = np.array([1, 2])\n",
      solution:
        "import numpy as np\n\nnumbers = [1, 2]\narr = np.array([1, 2])\nprint(numbers * 2)\nprint((arr * 2).tolist())",
      checks: [
        assertType("numbers", "list"),
        assertIsArray("arr"),
        assertEquals("list repeats", "numbers * 2", "[1, 2, 1, 2]"),
        assertEquals("array doubles", "(arr * 2).tolist()", "[2, 4]"),
      ],
      vars: ["np", "numbers", "arr"],
      constraints: [
        "Keep numbers as a plain list and arr as an array",
        "Print the list result first",
      ],
      hints: ["print(numbers * 2)", "print((arr * 2).tolist())"],
      placeholder: "# print(numbers * 2)",
    }),

    conceptTask({
      slug: "np-astype-float",
      title: "NumPy: Convert to Floats",
      level: "hard",
      description:
        "Convert an integer array to float64 with astype and print the converted values.",
      expected: "[3.0, 6.0, 9.0]",
      intro: [
        seg("text", "Convert "),
        seg("code", "arr"),
        seg("text", " to floats with "),
        seg("code", 'astype("float64")'),
        seg("text", " into "),
        seg("code", "floats"),
        seg("text", ", then print "),
        seg("code", "floats.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "An array has one dtype for every element.",
        'astype("float64") returns a new array — the original keeps its dtype.',
        "Float conversion matters before dividing, or integer division will surprise you.",
      ],
      starter:
        '# TODO: convert the array to float64\nimport numpy as np\n\narr = np.array([3, 6, 9])\nfloats = None\n',
      solution:
        'import numpy as np\n\narr = np.array([3, 6, 9])\nfloats = arr.astype("float64")\nprint(floats.tolist())',
      checks: [
        assertIsArray("floats"),
        assertEquals("dtype is float64", "str(floats.dtype)", '"float64"'),
        assertEquals("values converted", "floats.tolist()", "[3.0, 6.0, 9.0]"),
        assertTrue(
          "the original array stays integer",
          'arr.dtype.kind == "i"',
          "astype returns a new array — arr should still hold integers",
        ),
      ],
      vars: ["np", "arr", "floats"],
      constraints: [
        'Use astype("float64")',
        "Do not change arr itself",
        "Output must be exactly: [3.0, 6.0, 9.0]",
      ],
      hints: ['floats = arr.astype("float64")', "print(floats.tolist())"],
      placeholder: "# floats = arr.astype('float64')",
    }),
  ];
}

export function numpyCreationTasks() {
  return [
    conceptTask({
      slug: "np-zeros",
      title: "Creation: An Array of Zeros",
      level: "easy",
      description: "Create a length-4 array of zeros with np.zeros and print it as a list.",
      expected: "[0.0, 0.0, 0.0, 0.0]",
      intro: [
        seg("text", "Build "),
        seg("code", "np.zeros(4)"),
        seg("text", " into "),
        seg("code", "blanks"),
        seg("text", " and print "),
        seg("code", "blanks.tolist()"),
        seg("text", ". Note the values are floats."),
      ],
      steps: [
        "np.zeros(n) pre-allocates an array you fill in later.",
        "The default dtype is float64, so you get 0.0 not 0.",
      ],
      starter: "# TODO: make four zeros\nimport numpy as np\n\nblanks = None\n",
      solution: "import numpy as np\n\nblanks = np.zeros(4)\nprint(blanks.tolist())",
      checks: [
        assertEquals("four zeros created", "blanks.tolist()", "[0.0, 0.0, 0.0, 0.0]"),
        assertEquals("length is 4", "len(blanks)", "4"),
        assertEquals("dtype is float64", "str(blanks.dtype)", '"float64"'),
      ],
      vars: ["np", "blanks"],
      constraints: ["Use np.zeros()", "Length must be 4", "Print with .tolist()"],
      hints: ["blanks = np.zeros(4)"],
      placeholder: "# blanks = np.zeros(4)",
    }),

    conceptTask({
      slug: "np-arange",
      title: "Creation: Even Numbers with arange",
      level: "easy",
      description:
        "Use np.arange to build the even numbers from 0 up to (not including) 10 and print them.",
      expected: "[0, 2, 4, 6, 8]",
      intro: [
        seg("text", "Build "),
        seg("code", "np.arange(0, 10, 2)"),
        seg("text", " into "),
        seg("code", "evens"),
        seg("text", " and print the list. The stop value is excluded, just like "),
        seg("code", "range()"),
        seg("text", "."),
      ],
      steps: [
        "np.arange(start, stop, step) works like range() but returns an array.",
        "10 is not included — the last value is 8.",
      ],
      starter: "# TODO: build the even numbers below 10\nimport numpy as np\n\nevens = None\n",
      solution: "import numpy as np\n\nevens = np.arange(0, 10, 2)\nprint(evens.tolist())",
      checks: [
        assertEquals("evens are 0 to 8", "evens.tolist()", "[0, 2, 4, 6, 8]"),
        assertTrue(
          "10 is excluded",
          "10 not in evens.tolist()",
          "arange excludes the stop value — 10 should not appear",
        ),
      ],
      vars: ["np", "evens"],
      constraints: ["Use np.arange with a step of 2", "Output must be exactly: [0, 2, 4, 6, 8]"],
      hints: ["evens = np.arange(0, 10, 2)"],
      placeholder: "# evens = np.arange(0, 10, 2)",
    }),

    conceptTask({
      slug: "np-linspace",
      title: "Creation: Evenly Spaced with linspace",
      level: "easy",
      description:
        "Use np.linspace to build 5 evenly spaced values from 0 to 1 inclusive and print them.",
      expected: "[0.0, 0.25, 0.5, 0.75, 1.0]",
      intro: [
        seg("text", "Build "),
        seg("code", "np.linspace(0, 1, 5)"),
        seg("text", " into "),
        seg("code", "grid"),
        seg("text", " and print the list. Unlike arange, the stop value "),
        seg("code", "1"),
        seg("text", " is included."),
      ],
      steps: [
        "np.linspace(start, stop, count) picks how many points you want.",
        "Use it for plot axes and probability grids where the endpoints matter.",
      ],
      starter: "# TODO: five points from 0 to 1\nimport numpy as np\n\ngrid = None\n",
      solution: "import numpy as np\n\ngrid = np.linspace(0, 1, 5)\nprint(grid.tolist())",
      checks: [
        assertEquals("five evenly spaced points", "grid.tolist()", "[0.0, 0.25, 0.5, 0.75, 1.0]"),
        assertEquals("count is 5", "len(grid)", "5"),
        assertTrue(
          "the endpoint is included",
          "grid.tolist()[-1] == 1.0",
          "linspace includes the stop value — the last item should be 1.0",
        ),
      ],
      vars: ["np", "grid"],
      constraints: ["Use np.linspace", "Exactly 5 values", "Print with .tolist()"],
      hints: ["grid = np.linspace(0, 1, 5)"],
      placeholder: "# grid = np.linspace(0, 1, 5)",
    }),

    conceptTask({
      slug: "np-shape",
      title: "Properties: Read the Shape",
      level: "medium",
      description:
        "Create a 2x3 array from nested lists and print its .shape.",
      expected: "(2, 3)",
      intro: [
        seg("text", "Build "),
        seg("code", "grid"),
        seg("text", " from "),
        seg("code", "[[1, 2, 3], [4, 5, 6]]"),
        seg("text", " and print "),
        seg("code", "grid.shape"),
        seg("text", " — rows first, then columns."),
      ],
      steps: [
        "Nested lists become a 2-D array.",
        ".shape is a tuple of plain ints, so it prints as (2, 3).",
      ],
      starter:
        "# TODO: build the 2x3 array and print its shape\nimport numpy as np\n\ngrid = None\n",
      solution:
        "import numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\nprint(grid.shape)",
      checks: [
        assertIsArray("grid"),
        assertEquals("shape is 2 rows by 3 columns", "grid.shape", "(2, 3)"),
        assertEquals("values are correct", "grid.tolist()", "[[1, 2, 3], [4, 5, 6]]"),
      ],
      vars: ["np", "grid"],
      constraints: ["Build a 2x3 array", "Print .shape", "Output must be exactly: (2, 3)"],
      hints: ["grid = np.array([[1, 2, 3], [4, 5, 6]])", "print(grid.shape)"],
      placeholder: "# grid = np.array([[...], [...]])",
    }),

    conceptTask({
      slug: "np-dtype",
      title: "Properties: Check the dtype",
      level: "medium",
      description:
        'Create an array with an explicit "float64" dtype and print str(arr.dtype).',
      expected: "float64",
      intro: [
        seg("text", "Create "),
        seg("code", 'np.array([1, 2, 3], dtype="float64")'),
        seg("text", " as "),
        seg("code", "arr"),
        seg("text", " and print "),
        seg("code", "str(arr.dtype)"),
        seg("text", ". Setting dtype explicitly keeps results identical everywhere."),
      ],
      steps: [
        "Every array has exactly one dtype for all its elements.",
        "The default integer width depends on the machine — so state it when it matters.",
      ],
      starter:
        '# TODO: create a float64 array and print its dtype\nimport numpy as np\n\narr = None\n',
      solution:
        'import numpy as np\n\narr = np.array([1, 2, 3], dtype="float64")\nprint(str(arr.dtype))',
      checks: [
        assertIsArray("arr"),
        assertEquals("dtype is float64", "str(arr.dtype)", '"float64"'),
        assertEquals("values stored as floats", "arr.tolist()", "[1.0, 2.0, 3.0]"),
      ],
      vars: ["np", "arr"],
      constraints: [
        'Pass dtype="float64" to np.array',
        "Output must be exactly: float64",
      ],
      hints: ['arr = np.array([1, 2, 3], dtype="float64")', "print(str(arr.dtype))"],
      placeholder: "# arr = np.array([1, 2, 3], dtype='float64')",
    }),

    conceptTask({
      slug: "np-ndim-size",
      title: "Properties: Dimensions and Size",
      level: "medium",
      description:
        "Print how many dimensions the 2x3 array has, then how many elements it holds.",
      expected: "2\n6",
      intro: [
        seg("text", "For the 2x3 array, print "),
        seg("code", "grid.ndim"),
        seg("text", " then "),
        seg("code", "grid.size"),
        seg("text", " — the number of axes, then the total element count."),
      ],
      steps: [
        ".ndim is the number of axes (2 for a table).",
        ".size is rows * columns, not the shape.",
      ],
      starter:
        "# TODO: print ndim then size\nimport numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\n",
      solution:
        "import numpy as np\n\ngrid = np.array([[1, 2, 3], [4, 5, 6]])\nprint(grid.ndim)\nprint(grid.size)",
      checks: [
        assertEquals("two dimensions", "grid.ndim", "2"),
        assertEquals("six elements", "grid.size", "6"),
      ],
      vars: ["np", "grid"],
      constraints: ["Print ndim on line 1 and size on line 2"],
      hints: ["print(grid.ndim)", "print(grid.size)"],
      placeholder: "# print(grid.ndim)",
    }),

    conceptTask({
      slug: "np-reshape",
      title: "Properties: Reshape a Range",
      level: "hard",
      description:
        "Build np.arange(6), reshape it into 2 rows by 3 columns, and print the nested list.",
      expected: "[[0, 1, 2], [3, 4, 5]]",
      intro: [
        seg("text", "Create "),
        seg("code", "np.arange(6)"),
        seg("text", " and reshape it to "),
        seg("code", "(2, 3)"),
        seg("text", " into "),
        seg("code", "grid"),
        seg("text", ", then print "),
        seg("code", "grid.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "reshape only works when the element count matches: 2 * 3 == 6.",
        "Values fill row by row.",
        "The result shares data with the original — it is a view, not a copy.",
      ],
      starter:
        "# TODO: reshape 6 values into 2 rows of 3\nimport numpy as np\n\ngrid = None\n",
      solution:
        "import numpy as np\n\ngrid = np.arange(6).reshape(2, 3)\nprint(grid.tolist())",
      checks: [
        assertIsArray("grid"),
        assertEquals("shape is (2, 3)", "grid.shape", "(2, 3)"),
        assertEquals("values fill row by row", "grid.tolist()", "[[0, 1, 2], [3, 4, 5]]"),
      ],
      vars: ["np", "grid"],
      constraints: [
        "Use np.arange(6) and .reshape(2, 3)",
        "Output must be exactly: [[0, 1, 2], [3, 4, 5]]",
      ],
      hints: ["grid = np.arange(6).reshape(2, 3)"],
      placeholder: "# grid = np.arange(6).reshape(2, 3)",
    }),
  ];
}

export function numpyIndexingTasks() {
  const sales = "sales = np.array([10, 20, 30, 40, 50])";
  return [
    conceptTask({
      slug: "np-index-first",
      title: "Indexing: The First Element",
      level: "easy",
      description: "Print the first element of the sales array using index 0.",
      expected: "10",
      intro: [
        seg("text", "Print "),
        seg("code", "int(sales[0])"),
        seg("text", " — indexing an array works exactly like a list."),
      ],
      steps: ["Index 0 is the first element.", "int() keeps the printed value a plain integer."],
      starter: `# TODO: print the first value\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(int(sales[0]))`,
      checks: [
        assertIsArray("sales"),
        assertEquals("first element", "int(sales[0])", "10"),
      ],
      vars: ["np", "sales"],
      constraints: ["Use index 0", "Output must be exactly: 10"],
      hints: ["print(int(sales[0]))"],
      placeholder: "# print(int(sales[0]))",
    }),

    conceptTask({
      slug: "np-slice-middle",
      title: "Indexing: Slice the Middle",
      level: "easy",
      description: "Print elements at index 1 and 2 using a slice, as a list.",
      expected: "[20, 30]",
      intro: [
        seg("text", "Print "),
        seg("code", "sales[1:3].tolist()"),
        seg("text", ". The start is included, the stop is not."),
      ],
      steps: ["arr[1:3] returns index 1 and 2.", "Slicing an array returns another array."],
      starter: `# TODO: slice index 1 and 2\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(sales[1:3].tolist())`,
      checks: [
        assertEquals("slice holds two values", "sales[1:3].tolist()", "[20, 30]"),
        assertEquals("the array is unchanged", "sales.tolist()", "[10, 20, 30, 40, 50]"),
      ],
      vars: ["np", "sales"],
      constraints: ["Use a slice, not two indexes", "Output must be exactly: [20, 30]"],
      hints: ["print(sales[1:3].tolist())"],
      placeholder: "# print(sales[1:3].tolist())",
    }),

    conceptTask({
      slug: "np-negative-index",
      title: "Indexing: Count From the End",
      level: "easy",
      description: "Print the last element of the array using a negative index.",
      expected: "50",
      intro: [
        seg("text", "Print "),
        seg("code", "int(sales[-1])"),
        seg("text", " — negative indexes count backwards from the end."),
      ],
      steps: ["-1 is the last element, -2 the second to last."],
      starter: `# TODO: print the last value\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(int(sales[-1]))`,
      checks: [
        assertEquals("last element", "int(sales[-1])", "50"),
        assertEquals("second to last works too", "int(sales[-2])", "40"),
      ],
      vars: ["np", "sales"],
      constraints: ["Use a negative index", "Output must be exactly: 50"],
      hints: ["print(int(sales[-1]))"],
      placeholder: "# print(int(sales[-1]))",
    }),

    conceptTask({
      slug: "np-2d-element",
      title: "Indexing: One Cell of a 2-D Array",
      level: "medium",
      description:
        "Print the value in row 1, column 2 of a 2-D array using grid[1, 2].",
      expected: "60",
      intro: [
        seg("text", "For "),
        seg("code", "[[10, 20, 30], [40, 50, 60]]"),
        seg("text", ", print "),
        seg("code", "int(grid[1, 2])"),
        seg("text", " — row first, then column, in one pair of brackets."),
      ],
      steps: [
        "grid[1, 2] is the NumPy way; grid[1][2] also works but is slower.",
        "Both indexes start at 0.",
      ],
      starter:
        "# TODO: read row 1, column 2\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\n",
      solution:
        "import numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nprint(int(grid[1, 2]))",
      checks: [
        assertEquals("row 1 column 2", "int(grid[1, 2])", "60"),
        assertEquals("shape is (2, 3)", "grid.shape", "(2, 3)"),
      ],
      vars: ["np", "grid"],
      constraints: ["Use grid[row, column]", "Output must be exactly: 60"],
      hints: ["print(int(grid[1, 2]))"],
      placeholder: "# print(int(grid[1, 2]))",
    }),

    conceptTask({
      slug: "np-2d-column",
      title: "Indexing: Take a Whole Column",
      level: "medium",
      description:
        "Print the first column of a 2-D array using grid[:, 0] as a list.",
      expected: "[10, 40]",
      intro: [
        seg("text", "Print "),
        seg("code", "grid[:, 0].tolist()"),
        seg("text", ". The "),
        seg("code", ":"),
        seg("text", " means every row, and "),
        seg("code", "0"),
        seg("text", " picks the first column."),
      ],
      steps: [
        "Column selection is the everyday move for feature extraction.",
        "grid[0, :] would give the first row instead.",
      ],
      starter:
        "# TODO: take column 0\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\n",
      solution:
        "import numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nprint(grid[:, 0].tolist())",
      checks: [
        assertEquals("first column", "grid[:, 0].tolist()", "[10, 40]"),
        assertEquals("first row is different", "grid[0, :].tolist()", "[10, 20, 30]"),
      ],
      vars: ["np", "grid"],
      constraints: ["Use grid[:, 0]", "Output must be exactly: [10, 40]"],
      hints: ["print(grid[:, 0].tolist())"],
      placeholder: "# print(grid[:, 0].tolist())",
    }),

    conceptTask({
      slug: "np-boolean-mask",
      title: "Indexing: Filter with a Boolean Mask",
      level: "medium",
      description:
        "Keep only the sales above 25 using boolean indexing and print them as a list.",
      expected: "[30, 40, 50]",
      intro: [
        seg("text", "Print "),
        seg("code", "sales[sales > 25].tolist()"),
        seg("text", " — the condition builds a True/False mask that selects the rows you keep."),
      ],
      steps: [
        "sales > 25 produces an array of booleans.",
        "Indexing with that mask keeps only the True positions.",
        "This is how filtering works in pandas too.",
      ],
      starter: `# TODO: keep values above 25\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(sales[sales > 25].tolist())`,
      checks: [
        assertEquals("values above 25 kept", "sales[sales > 25].tolist()", "[30, 40, 50]"),
        assertEquals(
          "the mask itself is boolean",
          "(sales > 25).tolist()",
          "[False, False, True, True, True]"
        ),
      ],
      vars: ["np", "sales"],
      constraints: [
        "Use boolean indexing — no loop, no filter()",
        "Output must be exactly: [30, 40, 50]",
      ],
      hints: ["print(sales[sales > 25].tolist())"],
      placeholder: "# print(sales[sales > 25].tolist())",
    }),

    conceptTask({
      slug: "np-step-slice",
      title: "Indexing: Every Other Value",
      level: "hard",
      description:
        "Print every second element of the array using a step slice.",
      expected: "[10, 30, 50]",
      intro: [
        seg("text", "Print "),
        seg("code", "sales[::2].tolist()"),
        seg("text", " — the third slice number is the step. Handy for downsampling a series."),
      ],
      steps: [
        "arr[start:stop:step] — leave start and stop empty to cover everything.",
        "A step of 2 takes index 0, 2, 4, …",
      ],
      starter: `# TODO: take every second value\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(sales[::2].tolist())`,
      checks: [
        assertEquals("every second value", "sales[::2].tolist()", "[10, 30, 50]"),
        assertEquals("offset by one gives the others", "sales[1::2].tolist()", "[20, 40]"),
      ],
      vars: ["np", "sales"],
      constraints: ["Use a step slice", "Output must be exactly: [10, 30, 50]"],
      hints: ["print(sales[::2].tolist())"],
      placeholder: "# print(sales[::2].tolist())",
    }),
  ];
}

export function numpyOperationsTasks() {
  return [
    conceptTask({
      slug: "np-add-scalar",
      title: "Operations: Add a Number to Every Element",
      level: "easy",
      description:
        "Add 10 to every element of an array and print the result as a list.",
      expected: "[15, 25, 35]",
      intro: [
        seg("text", "Print "),
        seg("code", "(prices + 10).tolist()"),
        seg("text", " — the scalar is broadcast to every element."),
      ],
      steps: [
        "A single number stretches to match the array's shape.",
        "That is the simplest form of broadcasting.",
      ],
      starter:
        "# TODO: add 10 to every price\nimport numpy as np\n\nprices = np.array([5, 15, 25])\n",
      solution:
        "import numpy as np\n\nprices = np.array([5, 15, 25])\nprint((prices + 10).tolist())",
      checks: [
        assertEquals("each element grew by 10", "(prices + 10).tolist()", "[15, 25, 35]"),
        assertEquals("prices is unchanged", "prices.tolist()", "[5, 15, 25]"),
      ],
      vars: ["np", "prices"],
      constraints: ["No loop", "Do not modify prices", "Output must be exactly: [15, 25, 35]"],
      hints: ["print((prices + 10).tolist())"],
      placeholder: "# print((prices + 10).tolist())",
    }),

    conceptTask({
      slug: "np-multiply-arrays",
      title: "Operations: Units Times Price",
      level: "easy",
      description:
        "Multiply a units array by a price array elementwise to get revenue and print it.",
      expected: "[20, 90, 40]",
      intro: [
        seg("text", "Multiply "),
        seg("code", "units"),
        seg("text", " by "),
        seg("code", "price"),
        seg("text", " into "),
        seg("code", "revenue"),
        seg("text", " and print "),
        seg("code", "revenue.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "Matching shapes multiply position by position.",
        "This one line replaces a whole loop over rows.",
      ],
      starter:
        "# TODO: revenue = units * price\nimport numpy as np\n\nunits = np.array([2, 9, 4])\nprice = np.array([10, 10, 10])\nrevenue = None\n",
      solution:
        "import numpy as np\n\nunits = np.array([2, 9, 4])\nprice = np.array([10, 10, 10])\nrevenue = units * price\nprint(revenue.tolist())",
      checks: [
        assertIsArray("revenue"),
        assertEquals("elementwise product", "revenue.tolist()", "[20, 90, 40]"),
      ],
      vars: ["np", "revenue"],
      constraints: ["Use * on the two arrays", "Store the result in revenue"],
      hints: ["revenue = units * price"],
      placeholder: "# revenue = units * price",
    }),

    conceptTask({
      slug: "np-broadcast-row",
      title: "Operations: Broadcast a Row",
      level: "medium",
      description:
        "Add a 3-element row to every row of a 2x3 array and print the nested result.",
      expected: "[[11, 22, 33], [41, 52, 63]]",
      intro: [
        seg("text", "Add "),
        seg("code", "[1, 2, 3]"),
        seg("text", " to every row of "),
        seg("code", "grid"),
        seg("text", " into "),
        seg("code", "shifted"),
        seg("text", " and print "),
        seg("code", "shifted.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "A (3,) array stretches across both rows of a (2, 3) array.",
        "Broadcasting needs the trailing dimensions to match — here both are 3.",
        "No loop and no copying of the row.",
      ],
      starter:
        "# TODO: add the row to every row\nimport numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nrow = np.array([1, 2, 3])\nshifted = None\n",
      solution:
        "import numpy as np\n\ngrid = np.array([[10, 20, 30], [40, 50, 60]])\nrow = np.array([1, 2, 3])\nshifted = grid + row\nprint(shifted.tolist())",
      checks: [
        assertIsArray("shifted"),
        assertEquals(
          "the row was added to both rows",
          "shifted.tolist()",
          "[[11, 22, 33], [41, 52, 63]]"
        ),
        assertEquals("shape is preserved", "shifted.shape", "(2, 3)"),
      ],
      vars: ["np", "shifted"],
      constraints: ["Rely on broadcasting — no loop", "Store the result in shifted"],
      hints: ["shifted = grid + row"],
      placeholder: "# shifted = grid + row",
    }),

    conceptTask({
      slug: "np-comparison-mask",
      title: "Operations: Build a Comparison Mask",
      level: "medium",
      description:
        "Compare an array against 25 and print the resulting boolean mask as a list.",
      expected: "[False, False, True, True]",
      intro: [
        seg("text", "Store "),
        seg("code", "sales > 25"),
        seg("text", " in "),
        seg("code", "mask"),
        seg("text", " and print "),
        seg("code", "mask.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "Comparison operators are vectorised too.",
        "The mask has the same length as the array.",
        "int(mask.sum()) would then count how many passed.",
      ],
      starter:
        "# TODO: build the boolean mask\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nmask = None\n",
      solution:
        "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nmask = sales > 25\nprint(mask.tolist())",
      checks: [
        assertEquals("mask flags values above 25", "mask.tolist()", "[False, False, True, True]"),
        assertEquals("mask is boolean", 'str(mask.dtype)', '"bool"'),
        assertEquals("two values passed", "int(mask.sum())", "2"),
      ],
      vars: ["np", "mask"],
      constraints: ["Store the comparison in mask", "Print with .tolist()"],
      hints: ["mask = sales > 25"],
      placeholder: "# mask = sales > 25",
    }),

    conceptTask({
      slug: "np-where",
      title: "Operations: Label Values with np.where",
      level: "medium",
      description:
        "Use np.where to turn sales into 1 when above 25 and 0 otherwise, then print the list.",
      expected: "[0, 0, 1, 1]",
      intro: [
        seg("text", "Use "),
        seg("code", "np.where(sales > 25, 1, 0)"),
        seg("text", " into "),
        seg("code", "flags"),
        seg("text", " and print "),
        seg("code", "flags.tolist()"),
        seg("text", "."),
      ],
      steps: [
        "np.where(condition, value_if_true, value_if_false) works elementwise.",
        "It is the vectorised version of an if/else — used constantly for feature flags.",
      ],
      starter:
        "# TODO: flag the high sales with 1\nimport numpy as np\n\nsales = np.array([10, 20, 30, 40])\nflags = None\n",
      solution:
        "import numpy as np\n\nsales = np.array([10, 20, 30, 40])\nflags = np.where(sales > 25, 1, 0)\nprint(flags.tolist())",
      checks: [
        assertEquals("high sales flagged", "flags.tolist()", "[0, 0, 1, 1]"),
        assertEquals("two rows flagged", "int(flags.sum())", "2"),
      ],
      vars: ["np", "flags"],
      constraints: ["Use np.where", "Store the result in flags", "No loop"],
      hints: ["flags = np.where(sales > 25, 1, 0)"],
      placeholder: "# flags = np.where(sales > 25, 1, 0)",
    }),

    conceptTask({
      slug: "np-dot-product",
      title: "Operations: Dot Product for Total Revenue",
      level: "medium",
      description:
        "Use np.dot to multiply units by prices and sum in one step, then print the total.",
      expected: "80",
      intro: [
        seg("text", "Print "),
        seg("code", "int(np.dot(units, price))"),
        seg("text", " — multiply matching elements and add them up in a single call."),
      ],
      steps: [
        "np.dot(a, b) is sum(a * b) for 1-D arrays.",
        "It is the core operation behind linear models.",
      ],
      starter:
        "# TODO: total revenue with a dot product\nimport numpy as np\n\nunits = np.array([2, 3, 1])\nprice = np.array([10, 20, 0])\n",
      solution:
        "import numpy as np\n\nunits = np.array([2, 3, 1])\nprice = np.array([10, 20, 0])\nprint(int(np.dot(units, price)))",
      checks: [
        assertEquals("dot product is the revenue", "int(np.dot(units, price))", "80"),
        assertEquals(
          "it matches the manual sum",
          "int(np.dot(units, price))",
          "int((units * price).sum())"
        ),
      ],
      vars: ["np", "units", "price"],
      constraints: ["Use np.dot", "Output must be exactly: 80"],
      hints: ["print(int(np.dot(units, price)))"],
      placeholder: "# print(int(np.dot(units, price)))",
    }),

    conceptTask({
      slug: "np-standardize",
      title: "Operations: Standardise an Array",
      level: "hard",
      description:
        "Subtract the mean and divide by the standard deviation, then print the values rounded to 2 decimals.",
      expected: "[-1.22, 0.0, 1.22]",
      intro: [
        seg("text", "Standardise "),
        seg("code", "[10, 20, 30]"),
        seg("text", " with "),
        seg("code", "(values - values.mean()) / values.std()"),
        seg("text", " into "),
        seg("code", "scaled"),
        seg("text", ", then print "),
        seg("code", "np.round(scaled, 2).tolist()"),
        seg("text", "."),
      ],
      steps: [
        "Both the subtraction and the division broadcast over the whole array.",
        "Standardising puts features on the same scale before modelling.",
        "np.round(arr, 2) rounds every element at once.",
      ],
      starter:
        "# TODO: standardise the values\nimport numpy as np\n\nvalues = np.array([10, 20, 30])\nscaled = None\n",
      solution:
        "import numpy as np\n\nvalues = np.array([10, 20, 30])\nscaled = (values - values.mean()) / values.std()\nprint(np.round(scaled, 2).tolist())",
      checks: [
        assertIsArray("scaled"),
        assertEquals(
          "values are standardised",
          "np.round(scaled, 2).tolist()",
          "[-1.22, 0.0, 1.22]"
        ),
        assertTrue(
          "the mean of the result is 0",
          "abs(float(scaled.mean())) < 1e-9",
          "A standardised array must have mean 0",
        ),
        assertTrue(
          "the middle value sits at the mean",
          "abs(float(scaled[1])) < 1e-9",
          "20 is the mean, so its standardised value should be 0",
        ),
      ],
      vars: ["np", "values", "scaled"],
      constraints: [
        "Use .mean() and .std() — do not hardcode 20 or 8.16",
        "Round only when printing",
        "Output must be exactly: [-1.22, 0.0, 1.22]",
      ],
      hints: [
        "scaled = (values - values.mean()) / values.std()",
        "print(np.round(scaled, 2).tolist())",
      ],
      placeholder: "# scaled = (values - values.mean()) / values.std()",
    }),
  ];
}

export function numpyStatsTasks() {
  const sales = "sales = np.array([10, 20, 30, 40])";
  return [
    conceptTask({
      slug: "np-mean",
      title: "Stats: Average of an Array",
      level: "easy",
      description: "Print the mean of the sales array as a plain float.",
      expected: "25.0",
      intro: [
        seg("text", "Print "),
        seg("code", "float(np.mean(sales))"),
        seg("text", " for "),
        seg("code", "[10, 20, 30, 40]"),
        seg("text", "."),
      ],
      steps: [
        "np.mean(arr) and arr.mean() do the same thing.",
        "float() makes the printed value a plain Python float.",
      ],
      starter: `# TODO: print the average\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(float(np.mean(sales)))`,
      checks: [
        assertIsArray("sales"),
        assertEquals("mean is correct", "float(np.mean(sales))", "25.0"),
      ],
      vars: ["np", "sales"],
      constraints: ["Use np.mean or .mean()", "Output must be exactly: 25.0"],
      hints: ["print(float(np.mean(sales)))"],
      placeholder: "# print(float(np.mean(sales)))",
    }),

    conceptTask({
      slug: "np-max-min",
      title: "Stats: Best and Worst Day",
      level: "easy",
      description: "Print the maximum then the minimum of the sales array as ints.",
      expected: "40\n10",
      intro: [
        seg("text", "Print "),
        seg("code", "int(sales.max())"),
        seg("text", " then "),
        seg("code", "int(sales.min())"),
        seg("text", "."),
      ],
      steps: [".max() and .min() scan the whole array.", "Print the maximum first."],
      starter: `# TODO: print max then min\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(int(sales.max()))\nprint(int(sales.min()))`,
      checks: [
        assertEquals("maximum", "int(sales.max())", "40"),
        assertEquals("minimum", "int(sales.min())", "10"),
      ],
      vars: ["np", "sales"],
      constraints: ["Maximum on line 1, minimum on line 2"],
      hints: ["print(int(sales.max()))", "print(int(sales.min()))"],
      placeholder: "# print(int(sales.max()))",
    }),

    conceptTask({
      slug: "np-median",
      title: "Stats: The Median",
      level: "easy",
      description:
        "Print the median of [10, 20, 30, 40] — the average of the two middle values.",
      expected: "25.0",
      intro: [
        seg("text", "Print "),
        seg("code", "float(np.median(sales))"),
        seg("text", ". With an even count, the median is the average of the two middle values."),
      ],
      steps: [
        "np.median sorts internally, so the input order does not matter.",
        "The median resists outliers far better than the mean.",
      ],
      starter: `# TODO: print the median\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(float(np.median(sales)))`,
      checks: [
        assertEquals("median of four values", "float(np.median(sales))", "25.0"),
        assertEquals(
          "order does not matter",
          "float(np.median(np.array([40, 10, 30, 20])))",
          "25.0"
        ),
      ],
      vars: ["np", "sales"],
      constraints: ["Use np.median", "Output must be exactly: 25.0"],
      hints: ["print(float(np.median(sales)))"],
      placeholder: "# print(float(np.median(sales)))",
    }),

    conceptTask({
      slug: "np-std-round",
      title: "Stats: Standard Deviation",
      level: "medium",
      description:
        "Print the standard deviation of the sales array rounded to 2 decimal places.",
      expected: "11.18",
      intro: [
        seg("text", "Print "),
        seg("code", "round(float(sales.std()), 2)"),
        seg("text", " — how far values spread from the mean."),
      ],
      steps: [
        "NumPy's .std() is the population standard deviation by default.",
        "Round when printing so the output is stable.",
      ],
      starter: `# TODO: print the standard deviation to 2 decimals\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(round(float(sales.std()), 2))`,
      checks: [
        assertEquals("std rounded to 2 dp", "round(float(sales.std()), 2)", "11.18"),
        assertTrue(
          "variance is std squared",
          "abs(float(sales.var()) - float(sales.std()) ** 2) < 1e-9",
          "var() should equal std() squared",
        ),
      ],
      vars: ["np", "sales"],
      constraints: ["Use .std()", "Round to 2 decimals", "Output must be exactly: 11.18"],
      hints: ["print(round(float(sales.std()), 2))"],
      placeholder: "# print(round(float(sales.std()), 2))",
    }),

    conceptTask({
      slug: "np-argmax",
      title: "Stats: Which Day Was Best?",
      level: "medium",
      description:
        "Use np.argmax to print the index of the largest value rather than the value itself.",
      expected: "3",
      intro: [
        seg("text", "Print "),
        seg("code", "int(np.argmax(sales))"),
        seg("text", " — argmax returns the position of the maximum, which is how you find "),
        seg("code", "which"),
        seg("text", " row won."),
      ],
      steps: [
        "argmax gives an index; max gives a value.",
        "Use the index to look up the matching label in another array.",
      ],
      starter: `# TODO: print the index of the largest value\nimport numpy as np\n\n${sales}\n`,
      solution: `import numpy as np\n\n${sales}\nprint(int(np.argmax(sales)))`,
      checks: [
        assertEquals("index of the maximum", "int(np.argmax(sales))", "3"),
        assertEquals(
          "that index really holds the max",
          "int(sales[np.argmax(sales)])",
          "int(sales.max())"
        ),
      ],
      vars: ["np", "sales"],
      constraints: ["Use np.argmax", "Output must be exactly: 3"],
      hints: ["print(int(np.argmax(sales)))"],
      placeholder: "# print(int(np.argmax(sales)))",
    }),

    conceptTask({
      slug: "np-axis-mean",
      title: "Stats: Column Averages",
      level: "medium",
      description:
        "Compute the mean down each column of a 2-D array with axis=0 and print the list.",
      expected: "[20.0, 30.0]",
      intro: [
        seg("text", "For "),
        seg("code", "[[10, 20], [30, 40]]"),
        seg("text", " print "),
        seg("code", "grid.mean(axis=0).tolist()"),
        seg("text", " — axis=0 collapses the rows, giving one mean per column."),
      ],
      steps: [
        "axis=0 goes down the columns; axis=1 goes across the rows.",
        "Getting the axis right is most of the work in 2-D statistics.",
      ],
      starter:
        "# TODO: mean of each column\nimport numpy as np\n\ngrid = np.array([[10, 20], [30, 40]])\n",
      solution:
        "import numpy as np\n\ngrid = np.array([[10, 20], [30, 40]])\nprint(grid.mean(axis=0).tolist())",
      checks: [
        assertEquals("column means", "grid.mean(axis=0).tolist()", "[20.0, 30.0]"),
        assertEquals("row means differ", "grid.mean(axis=1).tolist()", "[15.0, 35.0]"),
      ],
      vars: ["np", "grid"],
      constraints: ["Use axis=0", "Output must be exactly: [20.0, 30.0]"],
      hints: ["print(grid.mean(axis=0).tolist())"],
      placeholder: "# print(grid.mean(axis=0).tolist())",
    }),

    conceptTask({
      slug: "np-stats-summary",
      title: "Stats: A One-Line Summary",
      level: "hard",
      description:
        "Compute mean, median, and standard deviation of a sales array and print them in one formatted line.",
      expected: "mean=20.0, median=20.0, std=5.97",
      intro: [
        seg("text", "For "),
        seg("code", "[12, 15, 20, 25, 28]"),
        seg("text", " compute "),
        seg("code", "mean"),
        seg("text", ", "),
        seg("code", "median"),
        seg("text", ", and "),
        seg("code", "std"),
        seg("text", " (rounded to 2 decimals) and print the summary line."),
      ],
      steps: [
        "Wrap each result in float() and round the standard deviation to 2 decimals.",
        'Build the line with f"mean={mean}, median={median}, std={std}"',
        "This three-number summary is the first thing to check on any new column.",
      ],
      starter:
        "# TODO: compute the three statistics\nimport numpy as np\n\nsales = np.array([12, 15, 20, 25, 28])\nmean = 0.0\nmedian = 0.0\nstd = 0.0\n",
      solution:
        'import numpy as np\n\nsales = np.array([12, 15, 20, 25, 28])\nmean = float(np.mean(sales))\nmedian = float(np.median(sales))\nstd = round(float(np.std(sales)), 2)\nprint(f"mean={mean}, median={median}, std={std}")',
      checks: [
        assertEquals("mean is computed", "mean", "20.0"),
        assertEquals("median is computed", "median", "20.0"),
        assertEquals("std is rounded to 2 dp", "std", "5.97"),
        assertTrue(
          "values come from NumPy, not typed by hand",
          "abs(mean - float(np.mean(sales))) < 1e-9 and abs(median - float(np.median(sales))) < 1e-9",
          "Compute mean and median from the array with NumPy",
        ),
      ],
      vars: ["np", "mean", "median", "std"],
      constraints: [
        "Use np.mean, np.median, and np.std",
        "Round only the standard deviation, to 2 decimals",
        "Output must be exactly: mean=20.0, median=20.0, std=5.97",
      ],
      hints: [
        "mean = float(np.mean(sales))",
        'print(f"mean={mean}, median={median}, std={std}")',
      ],
      placeholder: "# mean = float(np.mean(sales))",
    }),
  ];
}
