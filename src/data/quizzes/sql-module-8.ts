import type { TopicQuiz } from "@/lib/types";

export const sqlModule8Quizzes: Record<string, TopicQuiz> = {
  "sql-m8-t1": {
    topicId: "sql-m8-t1",
    title: "Quick check: Introduction to Views",
    questions: [
      {
        id: "q1",
        question: "A view is best described as…",
        options: [
          "A physical copy of table data",
          "A named SELECT you query like a table",
          "An index on a column",
          "A foreign key constraint",
        ],
        correctIndex: 1,
        explanation: "Views store a query definition, not a separate copy of rows.",
      },
      {
        id: "q2",
        question: "When you SELECT from a view, the database…",
        options: [
          "Always returns cached rows from yesterday",
          "Runs the view's underlying query against base tables",
          "Deletes the base table",
          "Ignores JOINs in the view definition",
        ],
        correctIndex: 1,
        explanation: "Reading a view executes its saved SELECT.",
      },
      {
        id: "q3",
        question: "A product catalog JOIN across Products, Categories, and Suppliers is a good view candidate because…",
        options: [
          "It duplicates data on disk",
          "It hides complex JOIN logic behind a reusable name",
          "Views cannot use JOINs",
          "It replaces primary keys",
        ],
        correctIndex: 1,
        explanation: "Views simplify repeated access to multi-table logic.",
      },
    ],
  },
  "sql-m8-t2": {
    topicId: "sql-m8-t2",
    title: "Quick check: Creating & Using Views",
    questions: [
      {
        id: "q1",
        question: "CREATE VIEW v AS SELECT … creates…",
        options: [
          "A new physical table",
          "A virtual table backed by the SELECT",
          "A trigger",
          "A backup file",
        ],
        correctIndex: 1,
        explanation: "CREATE VIEW registers the query under a name.",
      },
      {
        id: "q2",
        question: "To change a view's definition in SQLite you typically…",
        options: [
          "ALTER VIEW … MODIFY",
          "DROP VIEW then CREATE VIEW again",
          "RENAME TABLE the view",
          "Cannot change views",
        ],
        correctIndex: 1,
        explanation: "SQLite replaces views by dropping and recreating them.",
      },
      {
        id: "q3",
        question: "CREATE VIEW IF NOT EXISTS is useful when…",
        options: [
          "You might re-run the same setup script",
          "You want to delete base tables",
          "The view must store duplicate rows",
          "SQLite forbids SELECT from views",
        ],
        correctIndex: 0,
        explanation: "IF NOT EXISTS avoids errors if the view already exists.",
      },
    ],
  },
  "sql-m8-t3": {
    topicId: "sql-m8-t3",
    title: "Quick check: Introduction to Set Operations",
    questions: [
      {
        id: "q1",
        question: "For UNION, both SELECT statements must…",
        options: [
          "Use the same table",
          "Return the same number of columns",
          "Have identical WHERE clauses",
          "Use only aggregates",
        ],
        correctIndex: 1,
        explanation: "Column count (and compatible types) must match.",
      },
      {
        id: "q2",
        question: "Result column names in a UNION come from…",
        options: [
          "The second SELECT",
          "The first SELECT",
          "The database administrator",
          "A random SELECT",
        ],
        correctIndex: 1,
        explanation: "The first query's column aliases define output names.",
      },
      {
        id: "q3",
        question: "INTERSECT answers which question?",
        options: [
          "Rows in both result sets",
          "All rows from both queries stacked",
          "Rows only in the second query",
          "Rows with NULL in every column",
        ],
        correctIndex: 0,
        explanation: "INTERSECT is set intersection — overlap only.",
      },
    ],
  },
  "sql-m8-t4": {
    topicId: "sql-m8-t4",
    title: "Quick check: UNION & UNION ALL",
    questions: [
      {
        id: "q1",
        question: "UNION differs from UNION ALL because UNION…",
        options: [
          "Allows different column counts",
          "Removes duplicate rows from the combined result",
          "Only works on numbers",
          "Sorts each input separately",
        ],
        correctIndex: 1,
        explanation: "UNION applies distinct logic across the merged rows.",
      },
      {
        id: "q2",
        question: "When duplicates are expected and acceptable, prefer…",
        options: ["INTERSECT", "EXCEPT", "UNION ALL", "CROSS JOIN"],
        correctIndex: 2,
        explanation: "UNION ALL avoids the extra deduplication work.",
      },
      {
        id: "q3",
        question: "Adding 'Customer' AS Source in a UNION ALL branch helps…",
        options: [
          "Identify which table each row came from",
          "Create a primary key",
          "Remove NULL values automatically",
          "Speed up JOINs on base tables",
        ],
        correctIndex: 0,
        explanation: "Literal tag columns label stacked rows by origin.",
      },
    ],
  },
  "sql-m8-t5": {
    topicId: "sql-m8-t5",
    title: "Quick check: INTERSECT",
    questions: [
      {
        id: "q1",
        question: "A INTERSECT B returns rows that…",
        options: [
          "Appear in A or B",
          "Appear in both A and B",
          "Appear only in B",
          "Have NULL in every column",
        ],
        correctIndex: 1,
        explanation: "INTERSECT is set intersection.",
      },
      {
        id: "q2",
        question: "Countries in both Customers and Suppliers is expressed as…",
        options: [
          "SELECT Country FROM Customers EXCEPT SELECT Country FROM Suppliers",
          "SELECT Country FROM Customers INTERSECT SELECT Country FROM Suppliers",
          "SELECT Country FROM Customers UNION SELECT Country FROM Suppliers",
          "CROSS JOIN Customers and Suppliers",
        ],
        correctIndex: 1,
        explanation: "INTERSECT finds values present in both lists.",
      },
      {
        id: "q3",
        question: "You should filter NULL Country values before INTERSECT because…",
        options: [
          "NULL comparisons are unreliable in set operations",
          "INTERSECT requires exactly 100 rows",
          "NULL becomes a primary key",
          "SQLite does not support INTERSECT on text",
        ],
        correctIndex: 0,
        explanation: "NULL never equals NULL — filter them for clean overlap tests.",
      },
    ],
  },
  "sql-m8-t6": {
    topicId: "sql-m8-t6",
    title: "Quick check: EXCEPT",
    questions: [
      {
        id: "q1",
        question: "A EXCEPT B returns rows in A that…",
        options: [
          "Also appear in B",
          "Do not appear in B",
          "Have the highest value",
          "Are NULL only",
        ],
        correctIndex: 1,
        explanation: "EXCEPT is set difference: A minus B.",
      },
      {
        id: "q2",
        question: "In SQLite, set difference is spelled…",
        options: ["MINUS", "EXCEPT", "DIFF", "REMOVE"],
        correctIndex: 1,
        explanation: "SQLite uses EXCEPT; Oracle uses MINUS.",
      },
      {
        id: "q3",
        question: "Customers EXCEPT Suppliers on Country finds…",
        options: [
          "Countries with customers but not suppliers",
          "Countries with suppliers but not customers",
          "All countries from both tables",
          "Only NULL countries",
        ],
        correctIndex: 0,
        explanation: "First query minus second — order defines the answer.",
      },
    ],
  },
};
