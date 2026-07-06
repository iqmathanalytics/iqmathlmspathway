import type { TopicLesson } from "@/lib/types";

export const sqlModule1Lessons: Record<string, TopicLesson> = {
  "sql-m1-t1": {
    topicId: "sql-m1-t1",
    intro:
      "Before writing a single query, understand what databases are, why organisations rely on them, and how relational systems organise data.",
    blocks: [
      { type: "infographic", infographic: "sql-intro-databases" },
      {
        type: "practice",
        practiceLabel: "Explore the sample database",
        practicePrompt:
          "Run this query to see all tables in the learning database. (SQLite stores metadata in sqlite_master.)",
        starterCode: `SELECT name, type
FROM sqlite_master
WHERE type = 'table'
ORDER BY name;`,
      },
    ],
    keyTakeaways: [
      "A database stores structured data that many users and apps can access safely.",
      "RDBMS systems (MySQL, PostgreSQL, SQLite) store data in related tables.",
      "SQL is the standard language for querying relational databases.",
    ],
  },
  "sql-m1-t2": {
    topicId: "sql-m1-t2",
    intro:
      "The relational model is the foundation of SQL. Tables, primary keys, foreign keys, and constraints keep data consistent.",
    blocks: [
      { type: "infographic", infographic: "sql-relational-model" },
      {
        type: "practice",
        practiceLabel: "Inspect table structure",
        practicePrompt: "Run PRAGMA table_info to see columns, types, and constraints on the employees table.",
        starterCode: `PRAGMA table_info(employees);`,
      },
      {
        type: "practice",
        practiceLabel: "Preview employee data",
        practicePrompt: "Select the first five rows from employees to see how data is stored.",
        starterCode: `SELECT emp_id, first_name, last_name, dept_id, salary
FROM employees
LIMIT 5;`,
      },
    ],
    keyTakeaways: [
      "Tables have rows (records) and columns (attributes).",
      "A primary key uniquely identifies each row.",
      "Foreign keys link rows across tables.",
    ],
  },
  "sql-m1-t3": {
    topicId: "sql-m1-t3",
    intro:
      "SQL lets you ask questions of your data in a declarative way. Module 1 uses a small practice database; from Module 2 you will query the full Northwind dataset.",
    blocks: [
      { type: "infographic", infographic: "sql-intro-sql" },
      {
        type: "practice",
        practiceLabel: "Your first SELECT",
        practicePrompt: "Run a SELECT to list all department names and locations.",
        starterCode: `SELECT dept_name, location
FROM departments;`,
      },
    ],
    keyTakeaways: [
      "SQL is declarative — you describe the result, not the steps.",
      "SELECT … FROM … is the core pattern for reading data.",
      "This course runs SQLite in the browser via sql.js.",
    ],
  },
  "sql-m1-t4": {
    topicId: "sql-m1-t4",
    intro:
      "Every column has a data type. Choosing the right type prevents errors, saves storage, and enables validation through constraints.",
    blocks: [
      { type: "infographic", infographic: "sql-data-types" },
      {
        type: "practice",
        practiceLabel: "Check column types",
        practicePrompt: "Inspect the employees and departments schemas side by side.",
        starterCode: `PRAGMA table_info(employees);
-- Run separately or add:
-- PRAGMA table_info(departments);`,
      },
      {
        type: "practice",
        practiceLabel: "Filter by type",
        practicePrompt: "Select employees whose salary is stored as a REAL number above 80000.",
        starterCode: `SELECT first_name, last_name, salary
FROM employees
WHERE salary > 80000;`,
      },
    ],
    keyTakeaways: [
      "Common SQLite types: INTEGER, REAL, TEXT, BLOB.",
      "Constraints like NOT NULL, UNIQUE, and CHECK enforce rules.",
      "PRIMARY KEY marks the unique identifier column.",
    ],
  },
  "sql-m1-t5": {
    topicId: "sql-m1-t5",
    intro:
      "SQL commands fall into five families: DDL, DML, DQL, DCL, and TCL. Knowing which is which helps you read any script and write safer code.",
    blocks: [
      { type: "infographic", infographic: "sql-command-categories" },
      {
        type: "heading",
        content: "Quick reference",
      },
      {
        type: "list",
        items: [
          "DDL — structure (CREATE, ALTER, DROP)",
          "DML — data changes (INSERT, UPDATE, DELETE)",
          "DQL — read data (SELECT)",
          "DCL — permissions (GRANT, REVOKE)",
          "TCL — transactions (BEGIN, COMMIT, ROLLBACK)",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Read with DQL",
        practicePrompt: "Use SELECT (DQL) to count how many employees exist.",
        starterCode: `SELECT COUNT(*) AS total_employees
FROM employees;`,
      },
    ],
    keyTakeaways: [
      "DDL defines schema; DML changes rows; DQL reads rows.",
      "DCL manages access; TCL groups changes into transactions.",
      "Most day-to-day work is DQL (SELECT) and DML.",
    ],
  },
  "sql-m1-t6": {
    topicId: "sql-m1-t6",
    intro:
      "DDL commands build and modify the database structure. Practice creating tables and indexes in the sandbox — use Reset DB to undo changes.",
    blocks: [
      { type: "infographic", infographic: "sql-ddl" },
      {
        type: "practice",
        practiceLabel: "CREATE a staging table",
        practicePrompt:
          "Create a temporary reviews table. Then insert one row. Click Reset DB when done experimenting.",
        starterCode: `CREATE TABLE IF NOT EXISTS reviews (
  review_id INTEGER PRIMARY KEY,
  employee_id INTEGER,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment TEXT
);

INSERT INTO reviews (employee_id, rating, comment)
VALUES (1, 5, 'Excellent mentor');

SELECT * FROM reviews;`,
      },
    ],
    keyTakeaways: [
      "CREATE TABLE defines columns, types, and constraints.",
      "ALTER TABLE adds or renames columns.",
      "DROP TABLE removes a table permanently.",
    ],
  },
  "sql-m1-t7": {
    topicId: "sql-m1-t7",
    intro:
      "DML commands insert, update, and delete rows. Always test with SELECT first, and always use WHERE on UPDATE/DELETE.",
    blocks: [
      { type: "infographic", infographic: "sql-dml" },
      {
        type: "practice",
        practiceLabel: "INSERT a new employee",
        practicePrompt:
          "Insert a new employee, verify with SELECT, then Reset DB to restore the original data.",
        starterCode: `INSERT INTO employees (first_name, last_name, email, dept_id, salary, hire_date)
VALUES ('Kiran', 'Reddy', 'kiran@co.in', 2, 74000, '2024-06-01');

SELECT * FROM employees WHERE first_name = 'Kiran';`,
      },
      {
        type: "practice",
        practiceLabel: "UPDATE with WHERE",
        practicePrompt: "Give Engineering (dept_id = 1) a 5% raise. Check results before resetting.",
        starterCode: `UPDATE employees
SET salary = ROUND(salary * 1.05, 2)
WHERE dept_id = 1;

SELECT first_name, salary FROM employees WHERE dept_id = 1;`,
      },
    ],
    keyTakeaways: [
      "INSERT adds new rows; UPDATE modifies existing rows; DELETE removes rows.",
      "Never run UPDATE or DELETE without a WHERE clause unless intentional.",
      "Use transactions (BEGIN/COMMIT) for multi-step changes in production.",
    ],
  },
  "sql-m1-t8": {
    topicId: "sql-m1-t8",
    intro:
      "SELECT is how you read data (covered deeply in Module 2). DCL controls access; TCL ensures atomicity. This lesson ties all five command families together.",
    blocks: [
      { type: "infographic", infographic: "sql-dql-dcl-tcl" },
      {
        type: "practice",
        practiceLabel: "DQL — filter and sort",
        practicePrompt: "Select the top 3 highest-paid employees.",
        starterCode: `SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 3;`,
      },
      {
        type: "practice",
        practiceLabel: "TCL — practice transaction",
        practicePrompt:
          "Wrap an UPDATE in BEGIN/COMMIT. Run it, then Reset DB. In production, ROLLBACK undoes mistakes.",
        starterCode: `BEGIN TRANSACTION;

UPDATE employees
SET salary = salary + 1000
WHERE emp_id = 1;

SELECT first_name, salary FROM employees WHERE emp_id = 1;

COMMIT;`,
      },
    ],
    keyTakeaways: [
      "SELECT is the primary DQL command — Module 2 covers it in depth.",
      "GRANT/REVOKE control who can run which commands.",
      "BEGIN/COMMIT/ROLLBACK group changes into safe transactions.",
    ],
  },
};
