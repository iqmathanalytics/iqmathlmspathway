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
    ],
  },
};
