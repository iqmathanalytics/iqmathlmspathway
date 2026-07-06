import type { TopicQuiz } from "@/lib/types";

export const sqlModule1Quizzes: Record<string, TopicQuiz> = {
  "sql-m1-t1": {
    topicId: "sql-m1-t1",
    title: "Quick check: Introduction to Databases",
    questions: [
      {
        id: "q1",
        question: "What is the main purpose of a database?",
        options: [
          "To display websites",
          "To store and organise data so applications can access it reliably",
          "To replace all programming languages",
          "To edit images only",
        ],
        correctIndex: 1,
        explanation: "Databases persist structured data and let many users/apps read and write it safely.",
      },
      {
        id: "q2",
        question: "What does RDBMS stand for?",
        options: [
          "Random Data Backup Management System",
          "Relational Database Management System",
          "Remote Desktop Browser Main Server",
          "Row Duplicate Binary Memory Store",
        ],
        correctIndex: 1,
        explanation: "RDBMS stores data in related tables queried with SQL.",
      },
    ],
  },
  "sql-m1-t2": {
    topicId: "sql-m1-t2",
    title: "Quick check: The Relational Model",
    questions: [
      {
        id: "q1",
        question: "What uniquely identifies each row in a table?",
        options: ["Foreign key", "Primary key", "Index", "View"],
        correctIndex: 1,
        explanation: "A primary key (PK) must be unique per row and is never duplicated.",
      },
      {
        id: "q2",
        question: "A foreign key links to…",
        options: [
          "A column in another table (usually that table's primary key)",
          "An external website",
          "A Python variable",
          "A temporary file on disk",
        ],
        correctIndex: 0,
        explanation: "Foreign keys enforce relationships between tables.",
      },
    ],
  },
  "sql-m1-t3": {
    topicId: "sql-m1-t3",
    title: "Quick check: Introduction to SQL",
    questions: [
      {
        id: "q1",
        question: "SQL is best described as…",
        options: [
          "A markup language for web pages",
          "A language for defining and querying relational data",
          "A hardware driver for SSDs",
          "A Python library only",
        ],
        correctIndex: 1,
        explanation: "SQL (Structured Query Language) is the standard for relational databases.",
      },
      {
        id: "q2",
        question: "In this course, which database runs in your browser?",
        options: ["MongoDB", "Redis", "SQLite via sql.js", "Excel"],
        correctIndex: 2,
        explanation: "We use SQLite compiled to WebAssembly so you can practice without installing anything.",
      },
    ],
  },
  "sql-m1-t4": {
    topicId: "sql-m1-t4",
    title: "Quick check: SQL Data Types",
    questions: [
      {
        id: "q1",
        question: "Which type stores whole numbers in SQLite?",
        options: ["REAL", "TEXT", "INTEGER", "BLOB"],
        correctIndex: 2,
        explanation: "INTEGER holds whole numbers like 1, 42, or -7.",
      },
      {
        id: "q2",
        question: "What does NOT NULL on a column mean?",
        options: [
          "The column cannot be empty — every row must have a value",
          "The column can only store zero",
          "The column is hidden from SELECT",
          "The column auto-deletes old rows",
        ],
        correctIndex: 0,
        explanation: "NOT NULL is a constraint requiring a value in every row.",
      },
    ],
  },
  "sql-m1-t5": {
    topicId: "sql-m1-t5",
    title: "Quick check: SQL Command Categories",
    questions: [
      {
        id: "q1",
        question: "Which category does CREATE TABLE belong to?",
        options: ["DML", "DDL", "DQL", "TCL"],
        correctIndex: 1,
        explanation: "CREATE is DDL — it defines database structure.",
      },
      {
        id: "q2",
        question: "SELECT belongs to which category?",
        options: ["DML", "DCL", "DQL", "DDL"],
        correctIndex: 2,
        explanation: "SELECT is DQL (Data Query Language) — it reads data without changing it.",
      },
      {
        id: "q3",
        question: "COMMIT and ROLLBACK are part of…",
        options: ["DDL", "DCL", "TCL", "DML"],
        correctIndex: 2,
        explanation: "TCL (Transaction Control Language) manages atomic groups of changes.",
      },
    ],
  },
  "sql-m1-t6": {
    topicId: "sql-m1-t6",
    title: "Quick check: DDL Commands",
    questions: [
      {
        id: "q1",
        question: "Which command adds a new column to an existing table?",
        options: ["INSERT", "ALTER TABLE", "SELECT", "GRANT"],
        correctIndex: 1,
        explanation: "ALTER TABLE … ADD COLUMN modifies the table structure.",
      },
      {
        id: "q2",
        question: "DROP TABLE will…",
        options: [
          "Delete only one row",
          "Remove the entire table and its data",
          "Sort rows alphabetically",
          "Grant read permission",
        ],
        correctIndex: 1,
        explanation: "DROP TABLE permanently removes the table definition and all its rows.",
      },
    ],
  },
  "sql-m1-t7": {
    topicId: "sql-m1-t7",
    title: "Quick check: DML Commands",
    questions: [
      {
        id: "q1",
        question: "Which command adds a new row to a table?",
        options: ["UPDATE", "DELETE", "INSERT", "CREATE"],
        correctIndex: 2,
        explanation: "INSERT INTO … VALUES … adds new rows.",
      },
      {
        id: "q2",
        question: "Why should UPDATE and DELETE almost always include WHERE?",
        options: [
          "It makes queries run slower on purpose",
          "Without WHERE, every row in the table is affected",
          "WHERE is required by SQLite syntax for all commands",
          "WHERE encrypts the data",
        ],
        correctIndex: 1,
        explanation: "Omitting WHERE updates or deletes ALL rows — a common and costly mistake.",
      },
    ],
  },
  "sql-m1-t8": {
    topicId: "sql-m1-t8",
    title: "Quick check: DQL, DCL & TCL",
    questions: [
      {
        id: "q1",
        question: "What does BEGIN TRANSACTION start?",
        options: [
          "A new table",
          "A group of changes that can be committed or rolled back together",
          "A SELECT query only",
          "A database backup",
        ],
        correctIndex: 1,
        explanation: "Transactions group statements — COMMIT saves all changes, ROLLBACK undoes them.",
      },
      {
        id: "q2",
        question: "GRANT is used to…",
        options: [
          "Insert data",
          "Give users permission to perform actions",
          "Delete tables",
          "Sort results",
        ],
        correctIndex: 1,
        explanation: "DCL commands (GRANT/REVOKE) control access privileges.",
      },
    ],
  },
};
