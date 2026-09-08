import type { Module, CourseId } from "@/lib/types";
import { agenticAiModules } from "./agentic-ai-curriculum";
import { sqlModules } from "./sql-curriculum";
import { mbaAiModules } from "./mba-ai-curriculum";

/** @deprecated Import from `@/data/platform` — re-exported for compatibility. */
export {
  PLATFORM_BRAND,
  PLATFORM_NAME,
  PLATFORM_LOGO,
  PLATFORM_TAGLINE,
} from "./platform";

const pythonModules: Module[] = [
  {
    id: 1,
    name: "Introduction to Programming & Environment Setup",
    slug: "introduction-and-setup",
    course: "python",
    description:
      "What programming is, why Python fits data science, and how to set up Anaconda, venv, IDEs, and Jupyter.",
    icon: "PY",
    iconImage: "/images/logos/python-m1-introduction-and-setup.svg",
    iconAlt: "Python setup module logo",
    phase: "foundations",
    topics: [
      {
        id: "m1-t1",
        title: "Introduction to Programming",
        slug: "introduction-to-programming",
        description: "What programming is and how sequence, selection, and iteration work.",
        estimatedMinutes: 10,
        published: true,
        videoUrl: "ECenYderNYI",
      },
      {
        id: "m1-t2",
        title: "Why Python for Data Science",
        slug: "why-python-for-data-science",
        description: "Readable syntax and the NumPy / Pandas / Matplotlib ecosystem.",
        estimatedMinutes: 8,
        published: true,
        videoUrl: "-aya4j7RL8k",
      },
      {
        id: "m1-t3",
        title: "Setting up Python Environment",
        slug: "setting-up-python",
        description: "Anaconda and venv for isolated data science environments.",
        estimatedMinutes: 14,
        published: true,
        videoUrl: "DWMNJi6BV1U",
      },
      {
        id: "m1-t4",
        title: "Python IDEs",
        slug: "python-ides",
        description: "Jupyter, VS Code, PyCharm, and this site's built-in IDE.",
        estimatedMinutes: 10,
        published: true,
        videoUrl: "lE4fD4P-oNU",
      },
      {
        id: "m1-t5",
        title: "Introduction to Jupyter Notebooks",
        slug: "introduction-to-jupyter",
        description: "Code cells, markdown cells, and the notebook workflow for EDA.",
        estimatedMinutes: 12,
        published: true,
      },
    ],
  },
  {
    id: 2,
    name: "Python Basic Syntax and Data Types",
    slug: "basic-syntax-and-data-types",
    description: "Input/output, comments, variables, core types, and typecasting.",
    icon: "PY",
    iconImage: "/images/logos/python-m2-basic-syntax-and-data-types.svg",
    iconAlt: "Python syntax module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m2-t1", title: "Input and Output", slug: "input-output", description: "print() and input().", estimatedMinutes: 10, published: true, videoUrl: "LQ4KVY0wYB4" },
      { id: "m2-t2", title: "Comments", slug: "comments", description: "Notes and documentation in code.", estimatedMinutes: 5, published: true, videoUrl: "gvSLwdE4mT0" },
      { id: "m2-t3", title: "Variables", slug: "variables", description: "Named references to values.", estimatedMinutes: 10, published: true, videoUrl: "ow9JrEQ2ky0" },
      { id: "m2-t4", title: "Data Types", slug: "data-types", description: "int, float, str, bool.", estimatedMinutes: 12, published: true, videoUrl: "7G9rn8nKVS4" },
      { id: "m2-t5", title: "Typecasting", slug: "typecasting", description: "Converting between types.", estimatedMinutes: 8, published: true, videoUrl: "1vujw9mIsFk" },
    ],
  },
  {
    id: 3,
    name: "Operators in Python",
    slug: "operators",
    description: "Arithmetic, assignment, comparison, logical, identity, membership, and bitwise operators.",
    icon: "PY",
    iconImage: "/images/logos/python-m3-operators.svg",
    iconAlt: "Python operators module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m3-t1", title: "Arithmetic Operators", slug: "arithmetic", description: "+, -, *, /, %, //, **.", estimatedMinutes: 10, published: true, videoUrl: "hNrv_VfBQy0" },
      { id: "m3-t2", title: "Assignment Operators", slug: "assignment", description: "=, +=, and friends.", estimatedMinutes: 8, published: true, videoUrl: "YWkaIHPjZOU" },
      { id: "m3-t3", title: "Comparison Operators", slug: "comparison", description: "==, !=, <, >, <=, >=.", estimatedMinutes: 8, published: true, videoUrl: "-TQCHyshRkA" },
      { id: "m3-t4", title: "Logical Operators", slug: "logical", description: "and, or, not.", estimatedMinutes: 8, published: true, videoUrl: "4DxBPOyx2yA" },
      { id: "m3-t5", title: "Identity Operators", slug: "identity", description: "is, is not.", estimatedMinutes: 6, published: true, videoUrl: "SnewA61Z1eM" },
      { id: "m3-t6", title: "Membership Operators", slug: "membership", description: "in, not in.", estimatedMinutes: 6, published: true, videoUrl: "Wsrk3cEHBzI" },
      { id: "m3-t7", title: "Bitwise Operators", slug: "bitwise", description: "&, |, ^, ~, <<, >>.", estimatedMinutes: 10, published: true, videoUrl: "oFyjk7oWWgE" },
    ],
  },
  {
    id: 4,
    name: "Strings in Python",
    slug: "strings",
    description: "Create, format, index, slice, and transform text data.",
    icon: "PY",
    iconImage: "/images/logos/python-m4-strings.svg",
    iconAlt: "Python strings module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m4-t1", title: "Creating Strings", slug: "creating-strings", description: "Quotes and multiline text.", estimatedMinutes: 8, published: true, videoUrl: "cGA3M5vGfh4" },
      { id: "m4-t2", title: "Formatting Strings", slug: "formatting", description: "f-strings and .format().", estimatedMinutes: 10, published: true, videoUrl: "Z81fhULiW6k" },
      { id: "m4-t3", title: "Indexing Strings", slug: "indexing", description: "Access single characters.", estimatedMinutes: 8, published: true, videoUrl: "-hce-Zwkf1Y" },
      { id: "m4-t4", title: "Slicing Strings", slug: "slicing", description: "Extract substrings.", estimatedMinutes: 10, published: true, videoUrl: "dTBRt-XOGyE" },
      { id: "m4-t5", title: "String Methods", slug: "methods", description: "strip, replace, split, join, and more.", estimatedMinutes: 12, published: true, videoUrl: "paECLGMcYTI" },
    ],
  },
  {
    id: 5,
    name: "Lists in Python",
    slug: "lists",
    description: "Ordered, mutable collections for sequences of data.",
    icon: "PY",
    iconImage: "/images/logos/python-m5-lists.svg",
    iconAlt: "Python lists module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m5-t1", title: "Creating Lists", slug: "creating-lists", description: "Square brackets [].", estimatedMinutes: 8, published: true, videoUrl: "s7yYUi1V-Is" },
      { id: "m5-t2", title: "List Properties", slug: "properties", description: "Ordered, mutable, allow duplicates.", estimatedMinutes: 8, published: true, videoUrl: "RRORk60gz1Q" },
      { id: "m5-t3", title: "Indexing Lists", slug: "indexing", description: "Position starts at 0.", estimatedMinutes: 8, published: true, videoUrl: "p5RWLhWz-1o" },
      { id: "m5-t4", title: "Slicing Lists", slug: "slicing", description: "Sub-lists with start:stop:step.", estimatedMinutes: 10, published: true, videoUrl: "uUH81zoQJbc" },
      { id: "m5-t5", title: "List Methods", slug: "methods", description: "append, sort, remove, and more.", estimatedMinutes: 12, published: true, videoUrl: "unwhtg6stbw" },
      { id: "m5-t6", title: "Modifying Lists", slug: "modifying", description: "Change items via index, slice, insert, del.", estimatedMinutes: 10, published: true, videoUrl: "ajt49cyCzhM" },
    ],
  },
  {
    id: 6,
    name: "Tuples in Python",
    slug: "tuples",
    description: "Ordered, immutable collections for fixed records.",
    icon: "PY",
    iconImage: "/images/logos/python-m6-tuples.svg",
    iconAlt: "Python tuples module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m6-t1", title: "Tuple Syntax", slug: "syntax", description: "Parentheses and the trailing-comma rule.", estimatedMinutes: 8, published: true, videoUrl: "rtcfGnSeEE0" },
      { id: "m6-t2", title: "Tuple Properties", slug: "properties", description: "Immutable and ordered.", estimatedMinutes: 8, published: true, videoUrl: "EtNxHEEZ76Y" },
      { id: "m6-t3", title: "Indexing Tuples", slug: "indexing", description: "Access by position.", estimatedMinutes: 6, published: true, videoUrl: "gIB07kzU-KE" },
      { id: "m6-t4", title: "Slicing Tuples", slug: "slicing", description: "Get parts of a tuple.", estimatedMinutes: 8, published: true, videoUrl: "1k5DgALs4YQ" },
      { id: "m6-t5", title: "Tuple Methods", slug: "methods", description: "count() and index().", estimatedMinutes: 8, published: true, videoUrl: "ERKniznZSx8" },
    ],
  },
  {
    id: 7,
    name: "Sets in Python",
    slug: "sets",
    description: "Unique unordered collections for deduplication and set math.",
    icon: "PY",
    iconImage: "/images/logos/python-m7-sets.svg",
    iconAlt: "Python sets module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m7-t1", title: "Set Syntax", slug: "syntax", description: "Curly braces or set().", estimatedMinutes: 8, published: true, videoUrl: "BNXzsB_R1uk" },
      { id: "m7-t2", title: "Updating Sets", slug: "updating", description: "add, update, remove, discard.", estimatedMinutes: 8, published: true, videoUrl: "EB-xe9TLtD8" },
      { id: "m7-t3", title: "Set Operations", slug: "operations", description: "Union, intersection, difference.", estimatedMinutes: 10, published: true, videoUrl: "X1lPcYDy9gw" },
      { id: "m7-t4", title: "Set Methods", slug: "methods", description: "issubset, issuperset, isdisjoint.", estimatedMinutes: 8, published: true, videoUrl: "d5IpiePBZsQ" },
    ],
  },
  {
    id: 8,
    name: "Dictionaries in Python",
    slug: "dictionaries",
    description: "Key-value pairs — the foundation of JSON and labeled tabular rows.",
    icon: "PY",
    iconImage: "/images/logos/python-m8-dictionaries.svg",
    iconAlt: "Python dictionaries module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m8-t1", title: "Dictionary Syntax", slug: "syntax", description: "{key: value} pairs.", estimatedMinutes: 8, published: true, videoUrl: "rV0zocr8NXY" },
      { id: "m8-t2", title: "Keys and Values", slug: "keys-values", description: "keys(), values(), items().", estimatedMinutes: 8, published: true, videoUrl: "9_L-3nOtEd4" },
      { id: "m8-t3", title: "Accessing Dictionaries", slug: "accessing", description: "[] and .get().", estimatedMinutes: 10, published: true, videoUrl: "6WsCykM9N1o" },
      { id: "m8-t4", title: "Dictionary Methods", slug: "methods", description: "update, pop, clear.", estimatedMinutes: 10, published: true, videoUrl: "Z97zh4bGE5k" },
      { id: "m8-t5", title: "Nested Dictionaries", slug: "nested-dictionaries", description: "Dicts inside dicts for hierarchical data.", estimatedMinutes: 12, published: true },
    ],
  },
  {
    id: 9,
    name: "Python Conditional Statements",
    slug: "conditionals",
    description: "Make decisions with if / elif / else.",
    icon: "PY",
    iconImage: "/images/logos/python-m9-conditionals.svg",
    iconAlt: "Python conditionals module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m9-t1", title: "if Statement", slug: "if", description: "Run code only when true.", estimatedMinutes: 10, published: true, videoUrl: "-TOUjA2MDCw" },
      { id: "m9-t2", title: "if-else", slug: "if-else", description: "Two paths.", estimatedMinutes: 10, published: true, videoUrl: "cgWSo27TjYA" },
      { id: "m9-t3", title: "if-elif-else", slug: "if-elif-else", description: "Many paths.", estimatedMinutes: 12, published: true, videoUrl: "fnSfibG0YcI" },
    ],
  },
  {
    id: 10,
    name: "Loops in Python",
    slug: "loops",
    description: "Repeat work with while, for, break, continue, pass, and range().",
    icon: "PY",
    iconImage: "/images/logos/python-m10-loops.svg",
    iconAlt: "Python loops module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m10-t1", title: "while Loop", slug: "while", description: "Repeat while a condition is true.", estimatedMinutes: 10, published: true, videoUrl: "IpaInthPjcY" },
      { id: "m10-t2", title: "for Loop", slug: "for", description: "Loop over sequences.", estimatedMinutes: 10, published: true, videoUrl: "EMUPhna7ng8" },
      { id: "m10-t3", title: "break and continue", slug: "break-continue", description: "Control the loop.", estimatedMinutes: 8, published: true, videoUrl: "P0u1pCHCnOM" },
      { id: "m10-t4", title: "pass", slug: "pass", description: "Placeholder — do nothing.", estimatedMinutes: 5, published: true, videoUrl: "LquU3vcO0yU" },
      { id: "m10-t5", title: "range()", slug: "range", description: "Numbers for looping.", estimatedMinutes: 8, published: true, videoUrl: "c0yXq2mJf14" },
    ],
  },
  {
    id: 11,
    name: "List and Dictionary Comprehensions",
    slug: "comprehensions",
    description: "Concise one-line builders for lists and dicts.",
    icon: "PY",
    iconImage: "/images/logos/python-m11-comprehensions.svg",
    iconAlt: "Python comprehensions module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m11-t1", title: "List Comprehension Syntax", slug: "list-comprehension", description: "One-line list building.", estimatedMinutes: 12, published: true, videoUrl: "6t4dZYPI6-I" },
      { id: "m11-t2", title: "Uses of Comprehensions", slug: "uses", description: "Filter and transform data.", estimatedMinutes: 10, published: true, videoUrl: "ijE4DC8KHIU" },
      { id: "m11-t3", title: "Dictionary Comprehensions", slug: "dict-comprehension", description: "Build dicts in one line.", estimatedMinutes: 10, published: true, videoUrl: "ZzD7CzPHO0A" },
    ],
  },
  {
    id: 12,
    name: "Functions in Python",
    slug: "functions",
    description: "Reusable logic, scope, recursion, and lambda.",
    icon: "PY",
    iconImage: "/images/logos/python-m12-functions.svg",
    iconAlt: "Python functions module logo",
    course: "python",
    phase: "foundations",
    topics: [
      { id: "m12-t1", title: "Creating Functions", slug: "creating", description: "def and return.", estimatedMinutes: 10, published: true, videoUrl: "ucEoAjZbuAs" },
      { id: "m12-t2", title: "Calling Functions", slug: "calling", description: "Use what you defined.", estimatedMinutes: 8, published: true, videoUrl: "5CFU_pSzLAw" },
      { id: "m12-t3", title: "Function Arguments", slug: "arguments", description: "Positional, keyword, default, *args, **kwargs.", estimatedMinutes: 12, published: true, videoUrl: "rhMS_ruRl4o" },
      { id: "m12-t4", title: "Variables in Functions", slug: "variables", description: "Local vs global scope.", estimatedMinutes: 10, published: true, videoUrl: "a1cZJB8IrLQ" },
      { id: "m12-t5", title: "Recursion", slug: "recursion", description: "Functions calling themselves.", estimatedMinutes: 14, published: true, videoUrl: "LfK_0K-VVyQ" },
      { id: "m12-t6", title: "Lambda Functions", slug: "lambda-functions", description: "Anonymous one-line functions.", estimatedMinutes: 10, published: true },
    ],
  },
  {
    id: 13,
    name: "File Handling & Exception Handling",
    slug: "file-and-exception-handling",
    description: "Read/write files, work with paths, catch errors, and call basic APIs.",
    icon: "PY",
    iconImage: "/images/logos/python-m13-lambda.svg",
    iconAlt: "File and exception handling module logo",
    course: "python",
    phase: "data-science",
    topics: [
      { id: "m13-t1", title: "Reading and Writing Files", slug: "reading-writing-files", description: "txt, csv, and json with open().", estimatedMinutes: 14, published: true },
      { id: "m13-t2", title: "Working with File Paths", slug: "file-paths", description: "os.path and pathlib.", estimatedMinutes: 10, published: true },
      { id: "m13-t3", title: "try-except-finally", slug: "try-except-finally", description: "Catch errors and always clean up.", estimatedMinutes: 12, published: true },
      { id: "m13-t4", title: "Raising Custom Exceptions", slug: "custom-exceptions", description: "raise and domain-specific errors.", estimatedMinutes: 12, published: true },
      { id: "m13-t5", title: "Working with APIs", slug: "working-with-apis", description: "Basic requests.get and JSON responses.", estimatedMinutes: 14, published: true },
    ],
  },
  {
    id: 14,
    name: "NumPy for Numerical Computing",
    slug: "numpy",
    description: "Fast arrays, broadcasting, and vectorized statistics.",
    icon: "PY",
    iconImage: "/images/logos/python-m2-basic-syntax-and-data-types.svg",
    iconAlt: "NumPy module logo",
    course: "python",
    phase: "data-science",
    topics: [
      { id: "m14-t1", title: "Introduction to NumPy Arrays", slug: "numpy-arrays", description: "ndarray vs lists and vectorized ops.", estimatedMinutes: 12, published: true },
      { id: "m14-t2", title: "Array Creation and Properties", slug: "array-creation", description: "zeros, ones, arange, shape, dtype.", estimatedMinutes: 12, published: true },
      { id: "m14-t3", title: "Indexing and Slicing Arrays", slug: "array-indexing", description: "1D and 2D indexing.", estimatedMinutes: 12, published: true },
      { id: "m14-t4", title: "Array Operations and Broadcasting", slug: "broadcasting", description: "Element-wise math without loops.", estimatedMinutes: 14, published: true },
      { id: "m14-t5", title: "Statistical Functions in NumPy", slug: "numpy-stats", description: "mean, median, std, min, max, sum.", estimatedMinutes: 12, published: true },
    ],
  },
  {
    id: 15,
    name: "Pandas for Data Manipulation",
    slug: "pandas",
    description: "Series, DataFrames, cleaning, filtering, groupby, merge, and pivots.",
    icon: "PY",
    iconImage: "/images/logos/python-m5-lists.svg",
    iconAlt: "Pandas module logo",
    course: "python",
    phase: "data-science",
    topics: [
      { id: "m15-t1", title: "Series and DataFrames", slug: "series-dataframes", description: "1D and 2D labeled data.", estimatedMinutes: 12, published: true },
      { id: "m15-t2", title: "Reading and Writing Data", slug: "reading-writing-data", description: "CSV, Excel, and JSON I/O.", estimatedMinutes: 12, published: true },
      { id: "m15-t3", title: "Indexing, Filtering, and Selecting", slug: "filtering-selecting", description: "loc, iloc, and boolean masks.", estimatedMinutes: 14, published: true },
      { id: "m15-t4", title: "Data Cleaning", slug: "data-cleaning", description: "Missing values and duplicates.", estimatedMinutes: 14, published: true },
      { id: "m15-t5", title: "GroupBy, Merging, and Joining", slug: "groupby-merging", description: "Aggregate and combine tables.", estimatedMinutes: 14, published: true },
      { id: "m15-t6", title: "Pivot Tables", slug: "pivot-tables", description: "Summarize across two categories.", estimatedMinutes: 12, published: true },
    ],
  },
  {
    id: 16,
    name: "Data Visualization",
    slug: "data-visualization",
    description: "Matplotlib and Seaborn for charts that reveal patterns.",
    icon: "PY",
    iconImage: "/images/logos/python-m11-comprehensions.svg",
    iconAlt: "Data visualization module logo",
    course: "python",
    phase: "data-science",
    topics: [
      { id: "m16-t1", title: "Introduction to Matplotlib", slug: "matplotlib-intro", description: "Basic plot workflow.", estimatedMinutes: 12, published: true },
      { id: "m16-t2", title: "Line, Bar, Scatter, and Histogram", slug: "plot-types", description: "Core chart types.", estimatedMinutes: 14, published: true },
      { id: "m16-t3", title: "Customizing Plots", slug: "customizing-plots", description: "Labels, legends, and styles.", estimatedMinutes: 12, published: true },
      { id: "m16-t4", title: "Introduction to Seaborn", slug: "seaborn-intro", description: "Statistical plots with less code.", estimatedMinutes: 12, published: true },
      { id: "m16-t5", title: "Statistical and Categorical Plots", slug: "statistical-plots", description: "Boxplots, countplots, heatmaps.", estimatedMinutes: 14, published: true },
    ],
  },
  {
    id: 17,
    name: "Statistics & Exploratory Data Analysis",
    slug: "statistics-and-eda",
    description: "Descriptive stats, distributions, correlation, outliers, and EDA workflow.",
    icon: "PY",
    iconImage: "/images/logos/python-m3-operators.svg",
    iconAlt: "Statistics and EDA module logo",
    course: "python",
    phase: "data-science",
    topics: [
      { id: "m17-t1", title: "Descriptive Statistics", slug: "descriptive-statistics", description: "Mean, median, mode, std.", estimatedMinutes: 12, published: true },
      { id: "m17-t2", title: "Data Distributions", slug: "data-distributions", description: "Shape, skew, and histograms.", estimatedMinutes: 12, published: true },
      { id: "m17-t3", title: "Correlation and Covariance", slug: "correlation-covariance", description: "Relationships between variables.", estimatedMinutes: 12, published: true },
      { id: "m17-t4", title: "Outlier Detection", slug: "outlier-detection", description: "IQR and Z-score methods.", estimatedMinutes: 12, published: true },
      { id: "m17-t5", title: "Performing EDA on a Real Dataset", slug: "eda-workflow", description: "Load, summarize, and inspect end to end.", estimatedMinutes: 16, published: true },
    ],
  },
  {
    id: 18,
    name: "Capstone Project",
    slug: "capstone-project",
    description:
      "End-to-end retail sales analysis — problem statement through clean, explore, visualize, and report.",
    icon: "PY",
    iconImage: "/images/logos/python-m14-final-project.svg",
    iconAlt: "Capstone project module logo",
    course: "python",
    phase: "project",
    topics: [
      {
        id: "m18-t1",
        title: "Project Overview & Problem Statement",
        slug: "overview",
        description: "Define the question and the dataset.",
        estimatedMinutes: 12,
        published: true,
      },
      {
        id: "m18-t2",
        title: "Step 1: Data Model",
        slug: "data-model",
        description: "Schema, classes, and structured records.",
        estimatedMinutes: 15,
        published: true,
      },
      {
        id: "m18-t3",
        title: "Step 2: Logic & Loops",
        slug: "logic-and-loops",
        description: "Process records with conditionals and loops.",
        estimatedMinutes: 18,
        published: true,
      },
      {
        id: "m18-t4",
        title: "Step 3: Functions & Report",
        slug: "functions-and-report",
        description: "Reusable summary functions and reports.",
        estimatedMinutes: 18,
        published: true,
      },
      {
        id: "m18-t5",
        title: "Capstone Build",
        slug: "capstone",
        description: "Load, clean, explore, visualize, and report.",
        estimatedMinutes: 25,
        published: true,
      },
    ],
  },
];

/** All modules across all courses — the single source of truth for routing. */
export const modules: Module[] = [
  ...pythonModules,
  ...agenticAiModules,
  ...sqlModules,
  ...mbaAiModules,
];

// ── Course-aware helpers ───────────────────────────────────────────────────────

export function getModulesByCourse(courseId: CourseId): Module[] {
  return modules.filter((m) => m.course === courseId);
}

// ── Generic helpers ────────────────────────────────────────────────────────────

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getTopic(moduleSlug: string, topicSlug: string) {
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return undefined;
  const topic = mod.topics.find((t) => t.slug === topicSlug);
  if (!topic) return undefined;
  return { module: mod, topic };
}

export function getAllPublishedTopics() {
  return modules.flatMap((m) =>
    m.topics.filter((t) => t.published).map((t) => ({ module: m, topic: t }))
  );
}

export function getTotalTopicCount() {
  return modules.reduce((acc, m) => acc + m.topics.length, 0);
}

export function getPublishedTopicCount() {
  return modules.reduce(
    (acc, m) => acc + m.topics.filter((t) => t.published).length,
    0
  );
}

/** Flat list of published topics in course order (for prev/next navigation within a course). */
export function getPublishedTopicPath(courseId?: CourseId) {
  const source = courseId ? getModulesByCourse(courseId) : modules;
  return source.flatMap((m) =>
    m.topics
      .filter((t) => t.published)
      .map((topic) => ({ module: m, topic }))
  );
}

export function getAdjacentPublishedTopics(moduleSlug: string, topicSlug: string) {
  const mod = getModuleBySlug(moduleSlug);
  // Navigate only within the same course so Python prev/next never bleeds into AI topics
  const path = getPublishedTopicPath(mod?.course);
  const i = path.findIndex(
    (p) => p.module.slug === moduleSlug && p.topic.slug === topicSlug
  );
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? path[i - 1] : null,
    next: i < path.length - 1 ? path[i + 1] : null,
  };
}
