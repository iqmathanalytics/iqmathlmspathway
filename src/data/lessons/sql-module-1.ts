import type { TopicLesson } from "@/lib/types";

export const sqlModule1Lessons: Record<string, TopicLesson> = {
  "sql-m1-t1": {
    topicId: "sql-m1-t1",
    intro:
      "Every app you use — from banking to e-commerce — depends on databases. Before writing SQL, you need a clear mental model of what a database is, why organisations invest in them, and how a Database Management System (DBMS) keeps data safe and consistent.",
    blocks: [
      { type: "infographic", infographic: "sql-intro-databases" },
      {
        type: "heading",
        content: "Why databases matter",
      },
      {
        type: "paragraph",
        content:
          "Spreadsheets work for small lists, but they break down when many people write at once, when rules must be enforced (e.g. “every employee belongs to a valid department”), or when data grows to millions of rows. A database centralises storage, enforces rules, and lets hundreds of applications query the same truth.",
      },
      {
        type: "list",
        items: [
          "Persistence — data survives after the app closes",
          "Concurrency — many users read and write safely",
          "Integrity — constraints prevent nonsense data",
          "Query power — SQL asks complex questions in one line",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Discover all tables",
        practicePrompt:
          "Run this metadata query to list every table in the learning database. SQLite stores schema in sqlite_master — the same idea exists in other engines under different catalog views.",
        starterCode: `SELECT name, type
FROM sqlite_master
WHERE type = 'table'
  AND name NOT LIKE 'sqlite_%'
ORDER BY name;`,
      },
      {
        type: "practice",
        practiceLabel: "Preview each core table",
        practicePrompt:
          "Run three quick SELECTs to see row counts and sample data from departments, employees, and projects. Notice how each table answers a different business question.",
        starterCode: `SELECT 'departments' AS tbl, COUNT(*) AS rows FROM departments
UNION ALL
SELECT 'employees', COUNT(*) FROM employees
UNION ALL
SELECT 'projects', COUNT(*) FROM projects;`,
      },
      {
        type: "practice",
        practiceLabel: "Business question",
        practicePrompt:
          "List every department name and how many employees belong to it. (You will learn JOIN syntax in Module 4 — for now, observe the result.)",
        starterCode: `SELECT d.dept_name, COUNT(e.emp_id) AS headcount
FROM departments d
LEFT JOIN employees e ON e.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name
ORDER BY headcount DESC;`,
      },
    ],
    keyTakeaways: [
      "A database is shared, rule-governed storage — not just a file on disk.",
      "RDBMS systems (PostgreSQL, MySQL, SQLite) organise data in related tables.",
      "Use View table details to explore schema and sample rows before querying.",
    ],
  },
  "sql-m1-t2": {
    topicId: "sql-m1-t2",
    intro:
      "The relational model is the blueprint behind SQL. Tables hold entities (employees, departments), rows are individual records, columns are attributes, and keys define how tables link together without duplicating data.",
    blocks: [
      { type: "infographic", infographic: "sql-relational-model" },
      {
        type: "heading",
        content: "Keys you must know",
      },
      {
        type: "list",
        items: [
          "Primary key (PK) — uniquely identifies one row (emp_id, dept_id)",
          "Foreign key (FK) — points to a PK in another table (employees.dept_id → departments)",
          "Natural vs surrogate keys — we use integer IDs for stability",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Inspect employees schema",
        practicePrompt:
          "PRAGMA table_info reveals column names, types, NOT NULL flags, and which column is the primary key. Run it for employees.",
        starterCode: `PRAGMA table_info(employees);`,
      },
      {
        type: "practice",
        practiceLabel: "Inspect departments schema",
        practicePrompt: "Compare departments to employees — which column will link the two tables?",
        starterCode: `PRAGMA table_info(departments);`,
      },
      {
        type: "practice",
        practiceLabel: "Find orphan risk",
        practicePrompt:
          "List employees with their department name. Every dept_id should match a real department — if not, referential integrity is broken.",
        starterCode: `SELECT
  e.emp_id,
  e.first_name || ' ' || e.last_name AS employee,
  e.dept_id,
  d.dept_name
FROM employees e
LEFT JOIN departments d ON d.dept_id = e.dept_id
ORDER BY d.dept_name, e.last_name;`,
      },
      {
        type: "practice",
        practiceLabel: "Projects per department",
        practicePrompt:
          "Show each department, its projects, and budget. projects.dept_id is a foreign key to departments.",
        starterCode: `SELECT
  d.dept_name,
  p.project_name,
  p.budget
FROM departments d
LEFT JOIN projects p ON p.dept_id = d.dept_id
ORDER BY d.dept_name, p.budget DESC;`,
      },
    ],
    keyTakeaways: [
      "One table = one entity type; relationships use foreign keys, not duplicated columns.",
      "PRAGMA table_info is SQLite’s way to read column metadata.",
      "LEFT JOIN reveals rows with no match — useful for data-quality checks.",
    ],
  },
  "sql-m1-t3": {
    topicId: "sql-m1-t3",
    intro:
      "SQL (Structured Query Language) is the lingua franca of relational databases. It is declarative: you describe the result set, and the engine decides how to fetch it. Module 1 uses a small learning database; from Module 2 you will query the full Northwind trading dataset.",
    blocks: [
      { type: "infographic", infographic: "sql-intro-sql" },
      {
        type: "tip",
        content:
          "This course runs SQLite in your browser via sql.js. Syntax is 95% portable to PostgreSQL and MySQL — minor differences appear in date functions and some DDL options.",
      },
      {
        type: "practice",
        practiceLabel: "First SELECT — all columns",
        practicePrompt: "Retrieve every column from departments. In production, prefer naming columns explicitly.",
        starterCode: `SELECT *
FROM departments;`,
      },
      {
        type: "practice",
        practiceLabel: "Project specific columns",
        practicePrompt: "List department name and city (location) only — cleaner output for reports.",
        starterCode: `SELECT dept_name, location
FROM departments
ORDER BY dept_name;`,
      },
      {
        type: "practice",
        practiceLabel: "Filter with WHERE",
        practicePrompt: "Show employees in department 1 (Engineering) ordered by salary descending.",
        starterCode: `SELECT first_name, last_name, salary, hire_date
FROM employees
WHERE dept_id = 1
ORDER BY salary DESC;`,
      },
    ],
    keyTakeaways: [
      "SELECT column_list FROM table is the core read pattern.",
      "WHERE filters rows before they appear in the result.",
      "ORDER BY sorts the final output — ASC is default.",
    ],
  },
  "sql-m1-t4": {
    topicId: "sql-m1-t4",
    intro:
      "Choosing the right data type prevents bugs: storing text in numeric columns breaks sorting, and missing NOT NULL constraints allow incomplete records. SQLite uses a flexible typing model, but you should still declare intent clearly.",
    blocks: [
      { type: "infographic", infographic: "sql-data-types" },
      {
        type: "heading",
        content: "SQLite types in this course",
      },
      {
        type: "list",
        items: [
          "INTEGER — whole numbers (IDs, counts)",
          "REAL — decimals (salary, budget)",
          "TEXT — strings (names, emails, dates stored as ISO text)",
          "Constraints — PRIMARY KEY, NOT NULL, UNIQUE, CHECK, REFERENCES",
        ],
      },
      {
        type: "practice",
        practiceLabel: "Compare schemas",
        practicePrompt:
          "Run PRAGMA on employees and projects. Which columns are REAL? Which enforce NOT NULL?",
        starterCode: `PRAGMA table_info(employees);
-- Then run separately:
-- PRAGMA table_info(projects);`,
      },
      {
        type: "practice",
        practiceLabel: "Salary analysis",
        practicePrompt:
          "Find the average, minimum, and maximum salary. ROUND to 2 decimals for currency display.",
        starterCode: `SELECT
  ROUND(AVG(salary), 2) AS avg_salary,
  MIN(salary) AS min_salary,
  MAX(salary) AS max_salary
FROM employees;`,
      },
      {
        type: "practice",
        practiceLabel: "Budget tiers",
        practicePrompt:
          "Classify projects as 'Large' if budget ≥ 400000, else 'Standard'. CASE returns typed labels from numeric data.",
        starterCode: `SELECT
  project_name,
  budget,
  CASE
    WHEN budget >= 400000 THEN 'Large'
    ELSE 'Standard'
  END AS tier
FROM projects
ORDER BY budget DESC;`,
      },
    ],
    keyTakeaways: [
      "Match types to meaning — IDs as INTEGER, money as REAL, text as TEXT.",
      "CHECK constraints reject invalid values at insert time.",
      "CASE expressions map values to categories inside SELECT.",
    ],
  },
  "sql-m1-t5": {
    topicId: "sql-m1-t5",
    intro:
      "SQL commands group into five families. Interviewers and code reviews expect you to name them instantly: DDL changes structure, DML changes data, DQL reads data, DCL manages permissions, TCL wraps changes in transactions.",
    blocks: [
      { type: "infographic", infographic: "sql-command-categories" },
      {
        type: "heading",
        content: "Quick reference",
      },
      {
        type: "list",
        items: [
          "DDL — CREATE, ALTER, DROP, TRUNCATE (structure)",
          "DML — INSERT, UPDATE, DELETE (rows)",
          "DQL — SELECT (read)",
          "DCL — GRANT, REVOKE (access)",
          "TCL — BEGIN, COMMIT, ROLLBACK (atomicity)",
        ],
      },
      {
        type: "practice",
        practiceLabel: "DQL — headcount by department",
        practicePrompt: "Use SELECT and COUNT to report how many employees each department has.",
        starterCode: `SELECT d.dept_name, COUNT(e.emp_id) AS headcount
FROM departments d
LEFT JOIN employees e ON e.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name
ORDER BY headcount DESC;`,
      },
      {
        type: "practice",
        practiceLabel: "DQL — highest paid",
        practicePrompt: "Who earns the most? Return name, department, and salary for the top earner.",
        starterCode: `SELECT
  e.first_name || ' ' || e.last_name AS employee,
  d.dept_name,
  e.salary
FROM employees e
INNER JOIN departments d ON d.dept_id = e.dept_id
ORDER BY e.salary DESC
LIMIT 1;`,
      },
      {
        type: "practice",
        practiceLabel: "DQL — project investment",
        practicePrompt: "Total budget per department — which department owns the most project spend?",
        starterCode: `SELECT
  d.dept_name,
  COUNT(p.project_id) AS project_count,
  SUM(p.budget) AS total_budget
FROM departments d
LEFT JOIN projects p ON p.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name
ORDER BY total_budget DESC;`,
      },
    ],
    keyTakeaways: [
      "90% of daily work is DQL (SELECT) and DML (INSERT/UPDATE/DELETE).",
      "DDL is run rarely but has high impact — always back up first.",
      "TCL groups DML into all-or-nothing units.",
    ],
  },
  "sql-m1-t6": {
    topicId: "sql-m1-t6",
    intro:
      "DDL defines the shape of your database. CREATE TABLE is a contract: column names, types, and constraints tell every future query what to expect. Experiment freely here — click Reset DB in the IDE to restore the original learning database.",
    blocks: [
      { type: "infographic", infographic: "sql-ddl" },
      {
        type: "tip",
        content:
          "After CREATE or DROP experiments, use Reset DB to undo changes. In production, DDL runs through migration scripts with peer review.",
      },
      {
        type: "practice",
        practiceLabel: "CREATE a reviews table",
        practicePrompt:
          "Create a reviews table with a primary key, employee reference, 1–5 rating CHECK, and comment text. Insert two sample rows and verify.",
        starterCode: `CREATE TABLE IF NOT EXISTS reviews (
  review_id INTEGER PRIMARY KEY,
  employee_id INTEGER NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  reviewed_on TEXT DEFAULT (date('now'))
);

INSERT INTO reviews (employee_id, rating, comment) VALUES
  (1, 5, 'Outstanding mentor on the data platform project'),
  (3, 4, 'Strong client relationships');

SELECT * FROM reviews;`,
      },
      {
        type: "practice",
        practiceLabel: "CREATE INDEX",
        practicePrompt:
          "Add an index on employees.dept_id to speed up department filters. List indexes on employees.",
        starterCode: `CREATE INDEX IF NOT EXISTS idx_employees_dept
ON employees (dept_id);

SELECT name, sql
FROM sqlite_master
WHERE type = 'index' AND tbl_name = 'employees';`,
      },
      {
        type: "practice",
        practiceLabel: "ALTER TABLE",
        practicePrompt:
          "Add a phone TEXT column to employees, update one row, then inspect the schema again.",
        starterCode: `ALTER TABLE employees ADD COLUMN phone TEXT;

UPDATE employees SET phone = '+91-98765-43210' WHERE emp_id = 1;

PRAGMA table_info(employees);`,
      },
    ],
    keyTakeaways: [
      "CREATE TABLE defines columns, types, defaults, and constraints.",
      "Indexes speed up filters and joins on large tables.",
      "ALTER TABLE adds columns; SQLite cannot drop columns easily — plan ahead.",
    ],
  },
  "sql-m1-t7": {
    topicId: "sql-m1-t7",
    intro:
      "DML changes live data. The golden rules: test with SELECT first, always use WHERE on UPDATE and DELETE, and prefer transactions when multiple statements must succeed together.",
    blocks: [
      { type: "infographic", infographic: "sql-dml" },
      {
        type: "tip",
        content:
          "Run SELECT … WHERE before every UPDATE or DELETE to preview affected rows. A missing WHERE can change the entire table.",
      },
      {
        type: "practice",
        practiceLabel: "INSERT a new hire",
        practicePrompt:
          "Hire Kiran Reddy into Sales (dept_id 2) at ₹74,000. Verify with SELECT, then Reset DB when finished.",
        starterCode: `INSERT INTO employees (first_name, last_name, email, dept_id, salary, hire_date)
VALUES ('Kiran', 'Reddy', 'kiran.reddy@co.in', 2, 74000, '2024-06-01');

SELECT emp_id, first_name, last_name, dept_id, salary
FROM employees
WHERE email = 'kiran.reddy@co.in';`,
      },
      {
        type: "practice",
        practiceLabel: "UPDATE with preview",
        practicePrompt:
          "Engineering (dept_id 1) receives a 5% raise. First SELECT who will be affected, then UPDATE, then confirm.",
        starterCode: `-- Preview
SELECT emp_id, first_name, salary, ROUND(salary * 1.05, 2) AS new_salary
FROM employees WHERE dept_id = 1;

-- Apply
UPDATE employees
SET salary = ROUND(salary * 1.05, 2)
WHERE dept_id = 1;

-- Confirm
SELECT first_name, salary FROM employees WHERE dept_id = 1;`,
      },
      {
        type: "practice",
        practiceLabel: "DELETE safely",
        practicePrompt:
          "Remove the employee with emp_id = 5 only. Preview first, then delete, then count remaining rows.",
        starterCode: `SELECT * FROM employees WHERE emp_id = 5;

DELETE FROM employees WHERE emp_id = 5;

SELECT COUNT(*) AS remaining_employees FROM employees;`,
      },
    ],
    keyTakeaways: [
      "INSERT adds rows; UPDATE modifies; DELETE removes — all are irreversible without backups.",
      "WHERE is mandatory unless you intend to touch every row.",
      "Reset DB restores the sandbox after DML practice.",
    ],
  },
  "sql-m1-t8": {
    topicId: "sql-m1-t8",
    intro:
      "Module 1 closes the loop: DQL for rich reads, DCL for security in enterprise systems, and TCL for safe multi-step changes. Module 2 dives deep into SELECT — you already have the foundation.",
    blocks: [
      { type: "infographic", infographic: "sql-dql-dcl-tcl" },
      {
        type: "heading",
        content: "Putting it together",
      },
      {
        type: "paragraph",
        content:
          "A realistic workflow: BEGIN a transaction, UPDATE salaries, INSERT an audit row, COMMIT if all checks pass — or ROLLBACK on error. DCL (GRANT/REVOKE) ensures only authorised roles run DDL/DML in production.",
      },
      {
        type: "practice",
        practiceLabel: "Top earners report",
        practicePrompt:
          "Top 3 employees by salary with department name — pure DQL combining JOIN, ORDER BY, and LIMIT.",
        starterCode: `SELECT
  e.first_name || ' ' || e.last_name AS employee,
  d.dept_name,
  e.salary
FROM employees e
INNER JOIN departments d ON d.dept_id = e.dept_id
ORDER BY e.salary DESC
LIMIT 3;`,
      },
      {
        type: "practice",
        practiceLabel: "Transaction practice",
        practicePrompt:
          "Wrap a bonus UPDATE in BEGIN/COMMIT. Check salary before and after. Reset DB when done.",
        starterCode: `SELECT emp_id, first_name, salary FROM employees WHERE emp_id = 2;

BEGIN TRANSACTION;

UPDATE employees SET salary = salary + 5000 WHERE emp_id = 2;

SELECT emp_id, first_name, salary FROM employees WHERE emp_id = 2;

COMMIT;`,
      },
      {
        type: "practice",
        practiceLabel: "ROLLBACK demo",
        practicePrompt:
          "Start a transaction, UPDATE a salary, ROLLBACK — the change should disappear.",
        starterCode: `BEGIN TRANSACTION;

UPDATE employees SET salary = 1 WHERE emp_id = 1;

SELECT salary FROM employees WHERE emp_id = 1;

ROLLBACK;

SELECT salary FROM employees WHERE emp_id = 1;`,
      },
    ],
    keyTakeaways: [
      "SELECT + JOIN + ORDER BY + LIMIT is the reporting pattern you will use daily.",
      "COMMIT saves a transaction; ROLLBACK undoes it.",
      "You are ready for Module 2 — SELECT on the Northwind database.",
    ],
  },
};
