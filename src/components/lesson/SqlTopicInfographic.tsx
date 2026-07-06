"use client";

import {
  Database,
  Table2,
  KeyRound,
  Layers,
  FileCode2,
  Shield,
  GitBranch,
} from "lucide-react";

export type SqlInfographicVariant =
  | "sql-intro-databases"
  | "sql-relational-model"
  | "sql-intro-sql"
  | "sql-data-types"
  | "sql-command-categories"
  | "sql-ddl"
  | "sql-dml"
  | "sql-dql-dcl-tcl"
  | "sql-select-statement"
  | "sql-column-aliases"
  | "sql-distinct-limit"
  | "sql-null-handling"
  | "sql-where-clause"
  | "sql-comparison-logical"
  | "sql-in-between-like"
  | "sql-order-by"
  | "sql-why-joins"
  | "sql-inner-join"
  | "sql-left-right-join"
  | "sql-full-cross-self-join"
  | "sql-aggregates-intro"
  | "sql-count-min-max"
  | "sql-sum-avg"
  | "sql-group-by-basics"
  | "sql-group-by-multiple"
  | "sql-having"
  | "sql-functions-intro"
  | "sql-string-functions"
  | "sql-numeric-functions"
  | "sql-date-time-functions"
  | "sql-case-expressions"
  | "sql-coalesce-nullif"
  | "sql-subqueries-intro"
  | "sql-subqueries-where"
  | "sql-scalar-subqueries"
  | "sql-subqueries-from"
  | "sql-correlated-subqueries"
  | "sql-exists-not-exists"
  | "sql-views-intro"
  | "sql-creating-views"
  | "sql-set-operations-intro"
  | "sql-union-union-all"
  | "sql-intersect"
  | "sql-except"
  | "sql-ctes-intro"
  | "sql-ctes-vs-subqueries"
  | "sql-multiple-ctes"
  | "sql-ctes-joins-aggregates"
  | "sql-recursive-ctes-intro"
  | "sql-recursive-employee-hierarchy";

function SectionLabel({
  children,
  variant = "blue",
}: {
  children: React.ReactNode;
  variant?: "blue" | "green" | "purple" | "amber" | "sky";
}) {
  const styles = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-emerald-100 text-emerald-800",
    purple: "bg-purple-100 text-purple-800",
    amber: "bg-amber-100 text-amber-900",
    sky: "bg-sky-100 text-sky-800",
  };
  return (
    <span
      className={`mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function CodeWindow({
  filename,
  children,
}: {
  filename: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/15 bg-white/60">
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3.5 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-[11px] text-gray-500">{filename}</span>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13px] leading-relaxed text-gray-800">
        {children}
      </pre>
    </div>
  );
}

function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        {icon}
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function IntroDatabases() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">Core idea</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">What is a database?</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          A <strong>database</strong> is an organised collection of data stored electronically.
          Instead of scattering information across spreadsheets, files, or sticky notes, a database
          keeps related data together so applications can <em>create, read, update, and delete</em> it
          reliably — often millions of records at once.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Without a database" icon={<FileCode2 className="h-5 w-5 text-red-500" />}>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Duplicate customer records in 5 spreadsheets</li>
            <li>• Two people edit the same file → data loss</li>
            <li>• No easy way to link orders to customers</li>
            <li>• Searching 100k rows is painfully slow</li>
          </ul>
        </Card>
        <Card title="With a database" icon={<Database className="h-5 w-5 text-sky-600" />}>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Single source of truth for all data</li>
            <li>• Concurrent users with ACID guarantees</li>
            <li>• Relationships between tables (FK)</li>
            <li>• Indexed lookups in milliseconds</li>
          </ul>
        </Card>
      </div>

      <Card title="DBMS vs RDBMS" icon={<Layers className="h-5 w-5 text-purple-600" />}>
        <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-700">
          <div className="rounded-xl bg-purple-50/80 p-4">
            <p className="font-semibold text-purple-900">DBMS</p>
            <p className="mt-1">Database Management System — software that stores and manages data (files, documents, graphs, etc.).</p>
            <p className="mt-2 text-xs text-purple-700">Examples: MongoDB, Redis, Cassandra</p>
          </div>
          <div className="rounded-xl bg-sky-50/80 p-4">
            <p className="font-semibold text-sky-900">RDBMS</p>
            <p className="mt-1">Relational DBMS — data lives in <strong>tables</strong> with rows and columns, linked by keys. Queried with <strong>SQL</strong>.</p>
            <p className="mt-2 text-xs text-sky-700">Examples: MySQL, PostgreSQL, SQLite, SQL Server</p>
          </div>
        </div>
      </Card>

      <Card title="Real-world uses">
        <div className="flex flex-wrap gap-2">
          {["E-commerce carts", "Banking ledgers", "Hospital records", "Analytics dashboards", "Social feeds", "Learning platforms"].map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{tag}</span>
          ))}
        </div>
      </Card>
    </div>
  );
}

function RelationalModel() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 ring-1 ring-emerald-100">
        <SectionLabel variant="green">Relational model</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Tables, rows & relationships</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          In a relational database, each <strong>table</strong> represents one entity (employees, orders, products).
          Each <strong>row</strong> is one record; each <strong>column</strong> is one attribute.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[480px] text-left text-sm">
          <caption className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            employees table
          </caption>
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-2 font-semibold">emp_id <span className="text-amber-600">PK</span></th>
              <th className="px-4 py-2 font-semibold">first_name</th>
              <th className="px-4 py-2 font-semibold">dept_id <span className="text-sky-600">FK</span></th>
              <th className="px-4 py-2 font-semibold">salary</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-mono text-[13px]">
            <tr><td className="px-4 py-2">1</td><td className="px-4 py-2">Priya</td><td className="px-4 py-2">1</td><td className="px-4 py-2">85000</td></tr>
            <tr><td className="px-4 py-2">2</td><td className="px-4 py-2">Arjun</td><td className="px-4 py-2">1</td><td className="px-4 py-2">92000</td></tr>
            <tr><td className="px-4 py-2">3</td><td className="px-4 py-2">Meera</td><td className="px-4 py-2">2</td><td className="px-4 py-2">78000</td></tr>
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: KeyRound, title: "Primary Key (PK)", desc: "Uniquely identifies each row. No duplicates, never NULL.", color: "text-amber-600" },
          { icon: GitBranch, title: "Foreign Key (FK)", desc: "Links to a PK in another table — builds relationships.", color: "text-sky-600" },
          { icon: Shield, title: "Constraints", desc: "NOT NULL, UNIQUE, CHECK — enforce data rules.", color: "text-emerald-600" },
        ].map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-4">
            <Icon className={`mb-2 h-5 w-5 ${color}`} />
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>

      <CodeWindow filename="relationship.txt">
{`departments (dept_id PK)  ←——  employees (dept_id FK)
     1 Engineering              1 Priya  → dept 1
     2 Sales                    3 Meera  → dept 2`}
      </CodeWindow>
    </div>
  );
}

function IntroSql() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">SQL</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Structured Query Language</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <strong>SQL</strong> (often pronounced &quot;sequel&quot;) is the standard language for talking to relational databases.
          You write <strong>declarative</strong> statements — you describe <em>what</em> data you want, and the database engine figures out <em>how</em> to fetch it.
        </p>
      </div>

      <CodeWindow filename="query.sql">
{`-- Read all employees in Engineering
SELECT first_name, salary
FROM employees
WHERE dept_id = 1
ORDER BY salary DESC;`}
      </CodeWindow>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Declarative vs imperative">
          <p className="text-sm text-gray-600">
            Python tells the computer <em>step by step</em> what to do. SQL tells the database <em>what result</em> you need.
            The query optimizer picks the fastest execution plan.
          </p>
        </Card>
        <Card title="ANSI SQL + dialects">
          <p className="text-sm text-gray-600">
            Core SQL is standardised (ANSI/ISO). Each RDBMS adds extras: MySQL has <code className="text-xs">LIMIT</code>, SQL Server has <code className="text-xs">TOP</code>, PostgreSQL has rich JSON support. Concepts transfer across all of them.
          </p>
        </Card>
      </div>

      <Card title="This course uses SQLite in the browser" icon={<Table2 className="h-5 w-5 text-sky-600" />}>
        <p className="text-sm text-gray-600">
          Every lesson includes a live SQL IDE powered by <strong>sql.js</strong> (SQLite compiled to WebAssembly).
          Syntax matches MySQL/PostgreSQL for 95% of what you&apos;ll learn. When you move to production MySQL, the same queries work with minor tweaks.
        </p>
      </Card>
    </div>
  );
}

function DataTypes() {
  const types = [
    { name: "INTEGER", desc: "Whole numbers: -3, 0, 42, 1000000", ex: "emp_id INTEGER" },
    { name: "REAL", desc: "Floating-point decimals", ex: "salary REAL" },
    { name: "TEXT", desc: "Strings of any length", ex: "first_name TEXT" },
    { name: "BLOB", desc: "Binary data (images, files)", ex: "photo BLOB" },
    { name: "BOOLEAN", desc: "TRUE / FALSE (stored as 0/1 in SQLite)", ex: "is_active BOOLEAN" },
    { name: "DATE / TIME", desc: "ISO dates: '2024-01-15'", ex: "hire_date TEXT" },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">Data types</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Choosing the right type</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Each column has a <strong>data type</strong> that tells the database what kind of values it can hold.
          Picking the correct type saves space, prevents bugs, and enables faster queries.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {types.map((t) => (
          <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-4">
            <span className="rounded-md bg-violet-100 px-2 py-0.5 font-mono text-xs font-bold text-violet-800">{t.name}</span>
            <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            <code className="mt-2 block text-xs text-gray-500">{t.ex}</code>
          </div>
        ))}
      </div>

      <CodeWindow filename="create_table.sql">
{`CREATE TABLE employees (
  emp_id    INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  email     TEXT UNIQUE,
  salary    REAL CHECK (salary > 0),
  hire_date TEXT DEFAULT (date('now'))
);`}
      </CodeWindow>
    </div>
  );
}

function CommandCategories() {
  const cats = [
    { abbr: "DDL", name: "Data Definition Language", cmds: "CREATE, ALTER, DROP, TRUNCATE", color: "bg-red-100 text-red-800", desc: "Defines database structure — tables, indexes, views." },
    { abbr: "DML", name: "Data Manipulation Language", cmds: "INSERT, UPDATE, DELETE", color: "bg-orange-100 text-orange-800", desc: "Changes the data inside tables." },
    { abbr: "DQL", name: "Data Query Language", cmds: "SELECT", color: "bg-sky-100 text-sky-800", desc: "Reads data — the most-used command family." },
    { abbr: "DCL", name: "Data Control Language", cmds: "GRANT, REVOKE", color: "bg-purple-100 text-purple-800", desc: "Controls who can access what." },
    { abbr: "TCL", name: "Transaction Control Language", cmds: "BEGIN, COMMIT, ROLLBACK", color: "bg-emerald-100 text-emerald-800", desc: "Groups changes into atomic transactions." },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">Command families</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Five categories of SQL commands</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          SQL commands are grouped by <strong>what they do</strong> to the database.
          Think of DDL as architecture, DML as editing content, DQL as reading, DCL as security, and TCL as undo/save groups.
        </p>
      </div>

      <div className="space-y-3">
        {cats.map((c) => (
          <div key={c.abbr} className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:gap-4">
            <span className={`inline-flex w-fit shrink-0 rounded-lg px-3 py-1 text-sm font-bold ${c.color}`}>{c.abbr}</span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-gray-900">{c.name}</p>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
            <code className="shrink-0 text-xs text-gray-500">{c.cmds}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function DdlCommands() {
  const cmds = [
    { cmd: "CREATE TABLE", ex: "CREATE TABLE products (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  price REAL\n);" },
    { cmd: "ALTER TABLE", ex: "ALTER TABLE employees ADD COLUMN phone TEXT;\nALTER TABLE employees RENAME COLUMN email TO work_email;" },
    { cmd: "DROP TABLE", ex: "DROP TABLE IF EXISTS temp_staging;" },
    { cmd: "CREATE INDEX", ex: "CREATE INDEX idx_emp_dept ON employees(dept_id);" },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-red-50 via-white to-orange-50 p-6 ring-1 ring-red-100">
        <SectionLabel variant="amber">DDL</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Data Definition Language</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          DDL commands shape the <strong>schema</strong> — the blueprint of your database.
          They don&apos;t usually return rows; they change structure. Use carefully in production — <code className="text-sm">DROP</code> is irreversible without backups.
        </p>
      </div>
      {cmds.map((c) => (
        <div key={c.cmd}>
          <p className="mb-2 font-mono text-sm font-bold text-red-700">{c.cmd}</p>
          <CodeWindow filename="ddl.sql">{c.ex}</CodeWindow>
        </div>
      ))}
    </div>
  );
}

function DmlCommands() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 ring-1 ring-orange-100">
        <SectionLabel variant="amber">DML</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Data Manipulation Language</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          DML changes the <strong>rows</strong> inside tables — adding, updating, or removing data.
          Always use a <code className="text-sm">WHERE</code> clause with UPDATE and DELETE unless you mean to affect every row.
        </p>
      </div>

      <CodeWindow filename="insert.sql">
{`INSERT INTO employees (first_name, last_name, dept_id, salary)
VALUES ('Kiran', 'Reddy', 2, 74000);

INSERT INTO departments (dept_name, location)
VALUES ('Marketing', 'Chennai');`}
      </CodeWindow>

      <CodeWindow filename="update.sql">
{`UPDATE employees
SET salary = salary * 1.10
WHERE dept_id = 1;   -- 10% raise for Engineering`}
      </CodeWindow>

      <CodeWindow filename="delete.sql">
{`DELETE FROM employees
WHERE emp_id = 99;   -- always filter!`}
      </CodeWindow>

      <Card title="UPSERT (SQLite)">
        <CodeWindow filename="upsert.sql">
{`INSERT INTO employees (emp_id, first_name, salary)
VALUES (6, 'Vikram', 80000)
ON CONFLICT(emp_id) DO UPDATE SET salary = excluded.salary;`}
        </CodeWindow>
      </Card>
    </div>
  );
}

function DqlDclTcl() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">DQL · DCL · TCL</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Query, control & transactions</h2>
      </div>

      <Card title="DQL — SELECT (preview)" icon={<Table2 className="h-5 w-5 text-sky-600" />}>
        <p className="mb-3 text-sm text-gray-600">SELECT is the workhorse of SQL. Module 2 dives deep; here&apos;s the shape:</p>
        <CodeWindow filename="select.sql">
{`SELECT first_name, last_name, salary
FROM employees
WHERE salary > 75000
ORDER BY salary DESC
LIMIT 10;`}
        </CodeWindow>
      </Card>

      <Card title="DCL — GRANT & REVOKE" icon={<Shield className="h-5 w-5 text-purple-600" />}>
        <p className="mb-3 text-sm text-gray-600">Controls permissions on databases, tables, and columns.</p>
        <CodeWindow filename="dcl.sql">
{`GRANT SELECT, INSERT ON employees TO analyst_role;
REVOKE DELETE ON employees FROM intern_role;`}
        </CodeWindow>
      </Card>

      <Card title="TCL — Transactions" icon={<Layers className="h-5 w-5 text-emerald-600" />}>
        <p className="mb-3 text-sm text-gray-600">
          A <strong>transaction</strong> groups multiple statements into one atomic unit — either all succeed or all roll back (ACID).
        </p>
        <CodeWindow filename="transaction.sql">
{`BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;
-- ROLLBACK;  -- use if something goes wrong`}
        </CodeWindow>
      </Card>
    </div>
  );
}

function SelectStatement() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">Northwind database</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">The SELECT statement</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          From Module 2 onward you practice on the classic <strong>Northwind</strong> sample database —
          customers, orders, products, employees, and suppliers. The core read pattern is always:
        </p>
      </div>

      <CodeWindow filename="select.sql">
{`SELECT column1, column2      -- what to return
FROM   TableName              -- where data lives
LIMIT  10;                    -- optional row cap`}
      </CodeWindow>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="SELECT *" icon={<Table2 className="h-5 w-5 text-sky-600" />}>
          <p className="text-sm text-gray-600">
            <code className="text-xs">SELECT *</code> returns every column. Fine for exploration; in production prefer naming columns explicitly.
          </p>
          <CodeWindow filename="explore.sql">
{`SELECT * FROM Customers LIMIT 5;`}
          </CodeWindow>
        </Card>
        <Card title="Project specific columns">
          <p className="text-sm text-gray-600">
            Listing columns makes queries faster, clearer, and safer when tables change.
          </p>
          <CodeWindow filename="columns.sql">
{`SELECT CustomerID, CompanyName, Country
FROM Customers;`}
          </CodeWindow>
        </Card>
      </div>

      <Card title="Key Northwind tables">
        <div className="flex flex-wrap gap-2">
          {["Customers", "Products", "Orders", "Employees", "Categories", "Suppliers", "Order Details"].map((t) => (
            <span key={t} className="rounded-lg bg-sky-50 px-3 py-1 font-mono text-xs text-sky-800 ring-1 ring-sky-200">{t}</span>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Table names with spaces (like <code className="text-xs">Order Details</code>) must be quoted: <code className="text-xs">[Order Details]</code> in SQLite.
        </p>
      </Card>
    </div>
  );
}

function ColumnAliases() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">Expressions</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Aliases & calculated columns</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Use <code className="text-sm">AS</code> to rename output columns. You can compute new values with arithmetic and string operators directly in <code className="text-sm">SELECT</code>.
        </p>
      </div>

      <CodeWindow filename="alias.sql">
{`SELECT
  ProductName,
  UnitPrice,
  UnitPrice * 1.18 AS PriceWithGST
FROM Products
LIMIT 5;`}
      </CodeWindow>

      <CodeWindow filename="concat.sql">
{`SELECT
  FirstName || ' ' || LastName AS FullName,
  Title
FROM Employees;`}
      </CodeWindow>

      <Card title="Rules of thumb">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• <code className="text-xs">AS</code> is optional but improves readability.</li>
          <li>• SQLite uses <code className="text-xs">||</code> to join strings; MySQL uses <code className="text-xs">CONCAT()</code>.</li>
          <li>• Alias names with spaces need quotes: <code className="text-xs">AS &quot;Unit Price&quot;</code></li>
        </ul>
      </Card>
    </div>
  );
}

function DistinctLimit() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 ring-1 ring-emerald-100">
        <SectionLabel variant="green">Unique rows & pagination</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">DISTINCT & LIMIT</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <strong>DISTINCT</strong> removes duplicate rows from the result. <strong>LIMIT</strong> caps how many rows are returned — essential for previews and pagination.
        </p>
      </div>

      <CodeWindow filename="distinct.sql">
{`-- How many countries do our customers live in?
SELECT DISTINCT Country
FROM Customers
ORDER BY Country;`}
      </CodeWindow>

      <CodeWindow filename="limit.sql">
{`-- Top 5 most expensive products
SELECT ProductName, UnitPrice
FROM Products
ORDER BY UnitPrice DESC
LIMIT 5;`}
      </CodeWindow>

      <Card title="DISTINCT vs GROUP BY">
        <p className="text-sm text-gray-600">
          <code className="text-xs">SELECT DISTINCT Country</code> is shorthand when you only need unique values of one column.
          For counts per country, you will use <code className="text-xs">GROUP BY</code> in a later module.
        </p>
      </Card>
    </div>
  );
}

function NullHandling() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">Missing data</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Working with NULL</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <strong>NULL</strong> means &quot;unknown&quot; or &quot;not applicable&quot; — it is not zero and not an empty string.
          In Northwind, many customers have a NULL <code className="text-sm">Region</code>.
        </p>
      </div>

      <CodeWindow filename="is-null.sql">
{`SELECT CompanyName, Region
FROM Customers
WHERE Region IS NULL;`}
      </CodeWindow>

      <CodeWindow filename="coalesce.sql">
{`SELECT
  CompanyName,
  COALESCE(Region, 'Not specified') AS Region
FROM Customers
LIMIT 10;`}
      </CodeWindow>

      <Card title="NULL traps">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• <code className="text-xs">WHERE col = NULL</code> never matches — use <code className="text-xs">IS NULL</code>.</li>
          <li>• <code className="text-xs">COALESCE(a, b, c)</code> returns the first non-NULL value.</li>
          <li>• Aggregates like <code className="text-xs">COUNT(*)</code> count rows; <code className="text-xs">COUNT(Region)</code> skips NULLs.</li>
        </ul>
      </Card>
    </div>
  );
}

function WhereClause() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">Filtering rows</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">The WHERE clause</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <code className="text-sm">WHERE</code> runs <strong>after</strong> SQL reads the table but <strong>before</strong> it returns rows.
          Only rows that match the condition survive the filter.
        </p>
      </div>

      <CodeWindow filename="where.sql">
{`SELECT CompanyName, City, Country
FROM Customers
WHERE Country = 'Germany';`}
      </CodeWindow>

      <div className="grid gap-3 sm:grid-cols-3 text-center text-sm">
        {[
          { step: "1", label: "FROM Customers", desc: "Load all rows" },
          { step: "2", label: "WHERE Country = 'Germany'", desc: "Keep matches only" },
          { step: "3", label: "SELECT columns", desc: "Project final output" },
        ].map((s) => (
          <div key={s.step} className="rounded-xl border border-sky-200 bg-sky-50/50 p-4">
            <span className="text-xs font-bold text-sky-600">Step {s.step}</span>
            <p className="mt-1 font-mono text-xs text-gray-800">{s.label}</p>
            <p className="mt-1 text-xs text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>

      <Card title="String literals need quotes">
        <p className="text-sm text-gray-600">
          Text values use single quotes: <code className="text-xs">&apos;Germany&apos;</code>.
          Numbers do not: <code className="text-xs">UnitPrice &gt; 20</code>.
        </p>
      </Card>
    </div>
  );
}

function ComparisonLogical() {
  const ops = [
    { op: "=", desc: "Equal to" },
    { op: "<>", desc: "Not equal to" },
    { op: ">", desc: "Greater than" },
    { op: "<", desc: "Less than" },
    { op: ">=", desc: "Greater or equal" },
    { op: "<=", desc: "Less or equal" },
  ];
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">Operators</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Comparisons & logic</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Combine conditions with <strong>AND</strong> (both must be true), <strong>OR</strong> (either can be true),
          and <strong>NOT</strong> (invert a condition). Use parentheses when mixing AND/OR.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {ops.map((o) => (
          <div key={o.op} className="rounded-lg bg-violet-50 px-2 py-2 text-center ring-1 ring-violet-200">
            <span className="font-mono text-sm font-bold text-violet-800">{o.op}</span>
            <p className="mt-0.5 text-[10px] text-gray-600">{o.desc}</p>
          </div>
        ))}
      </div>

      <CodeWindow filename="and.sql">
{`SELECT ProductName, UnitPrice, UnitsInStock
FROM Products
WHERE UnitPrice >= 10
  AND UnitPrice <= 25
  AND Discontinued = 0;`}
      </CodeWindow>

      <CodeWindow filename="or.sql">
{`SELECT CompanyName, Country
FROM Customers
WHERE Country = 'Germany'
   OR Country = 'France';`}
      </CodeWindow>

      <Card title="Operator precedence">
        <p className="text-sm text-gray-600">
          AND binds tighter than OR. Use parentheses for clarity:
          <code className="mt-2 block text-xs">WHERE (Country = &apos;UK&apos; OR Country = &apos;France&apos;) AND City = &apos;London&apos;</code>
        </p>
      </Card>
    </div>
  );
}

function InBetweenLike() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 ring-1 ring-emerald-100">
        <SectionLabel variant="green">Shortcuts</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">IN, BETWEEN & LIKE</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          These operators express common filters more readably than chaining many ORs or range comparisons.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "IN", ex: "Country IN ('Germany', 'France', 'UK')", desc: "Match any value in a list" },
          { title: "BETWEEN", ex: "UnitPrice BETWEEN 10 AND 30", desc: "Inclusive range (both ends count)" },
          { title: "LIKE", ex: "ProductName LIKE 'C%'", desc: "% = any chars, _ = one char" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-emerald-200 bg-white p-4">
            <span className="font-mono text-sm font-bold text-emerald-700">{item.title}</span>
            <code className="mt-2 block text-[11px] text-gray-700">{item.ex}</code>
            <p className="mt-2 text-xs text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <CodeWindow filename="patterns.sql">
{`-- Products whose name starts with 'Ch'
SELECT ProductName, UnitPrice
FROM Products
WHERE ProductName LIKE 'Ch%';

-- Orders in 1997
SELECT OrderID, OrderDate, CustomerID
FROM Orders
WHERE OrderDate BETWEEN '1997-01-01' AND '1997-12-31';`}
      </CodeWindow>
    </div>
  );
}

function OrderBy() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">Sorting</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">ORDER BY</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <code className="text-sm">ORDER BY</code> sorts the final result set.
          <strong> ASC</strong> (default) goes A→Z / low→high; <strong>DESC</strong> reverses it.
          Add multiple columns to break ties.
        </p>
      </div>

      <CodeWindow filename="sort.sql">
{`-- Cheapest products first
SELECT ProductName, UnitPrice
FROM Products
ORDER BY UnitPrice ASC;

-- Top customers by country, then company name
SELECT Country, CompanyName
FROM Customers
ORDER BY Country ASC, CompanyName ASC;`}
      </CodeWindow>

      <Card title="ORDER BY runs last (in simple queries)">
        <p className="text-sm text-gray-600">
          Typical clause order: <code className="text-xs">SELECT → FROM → WHERE → ORDER BY → LIMIT</code>.
          Sort after filtering so you only order the rows you care about.
        </p>
      </Card>
    </div>
  );
}

function WhyJoins() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 ring-1 ring-indigo-100">
        <SectionLabel variant="blue">Relational data</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Why JOINs?</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Real data is <strong>normalized</strong> — split across tables to avoid duplication.
          A customer&apos;s name lives in <code className="text-sm">Customers</code>; their orders live in <code className="text-sm">Orders</code>.
          <strong> JOINs</strong> reunite related rows using <strong>foreign keys</strong>.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Without JOINs" icon={<FileCode2 className="h-5 w-5 text-red-500" />}>
          <p className="text-sm text-gray-600">
            You&apos;d copy CustomerName into every order row — wasteful, inconsistent, and hard to update.
          </p>
        </Card>
        <Card title="With JOINs" icon={<GitBranch className="h-5 w-5 text-indigo-600" />}>
          <p className="text-sm text-gray-600">
            Store each fact once, then combine at query time:
            <code className="mt-2 block text-xs">Orders.CustomerID = Customers.CustomerID</code>
          </p>
        </Card>
      </div>

      <CodeWindow filename="relationship.txt">
{`Customers (CustomerID PK)  ←——  Orders (CustomerID FK)
Products (ProductID PK)    ←——  [Order Details] (ProductID FK)
Categories (CategoryID PK) ←——  Products (CategoryID FK)`}
      </CodeWindow>
    </div>
  );
}

function InnerJoin() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">INNER JOIN</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Only matching rows</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <code className="text-sm">INNER JOIN</code> returns rows where the join condition is true in <em>both</em> tables.
          No match on either side → row is dropped.
        </p>
      </div>

      <CodeWindow filename="inner_join.sql">
{`SELECT c.CompanyName, o.OrderID, o.OrderDate
FROM Customers c
INNER JOIN Orders o
  ON c.CustomerID = o.CustomerID
ORDER BY o.OrderDate DESC
LIMIT 10;`}
      </CodeWindow>

      <CodeWindow filename="products_categories.sql">
{`SELECT p.ProductName, c.CategoryName, p.UnitPrice
FROM Products p
INNER JOIN Categories c
  ON p.CategoryID = c.CategoryID
ORDER BY c.CategoryName, p.ProductName
LIMIT 15;`}
      </CodeWindow>

      <Card title="Table aliases">
        <p className="text-sm text-gray-600">
          Short aliases (<code className="text-xs">c</code>, <code className="text-xs">o</code>) keep queries readable when joining many tables.
        </p>
      </Card>
    </div>
  );
}

function LeftRightJoin() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 ring-1 ring-teal-100">
        <SectionLabel variant="green">Outer joins</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">LEFT & RIGHT JOIN</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <strong>LEFT JOIN</strong> keeps every row from the left table; missing right-side columns become NULL.
          <strong> RIGHT JOIN</strong> is the mirror image (swap table order in SQLite if RIGHT JOIN isn&apos;t supported).
        </p>
      </div>

      <CodeWindow filename="left_join.sql">
{`-- Every customer, even if they have no orders
SELECT c.CompanyName, o.OrderID, o.OrderDate
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
ORDER BY c.CompanyName
LIMIT 20;`}
      </CodeWindow>

      <CodeWindow filename="preserve_unmatched.sql">
{`-- All suppliers; NULL product if supplier has no products
SELECT s.CompanyName, p.ProductName
FROM Suppliers s
LEFT JOIN Products p ON s.SupplierID = p.SupplierID
ORDER BY s.CompanyName
LIMIT 20;`}
      </CodeWindow>
    </div>
  );
}

function FullCrossSelfJoin() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-violet-50 p-6 ring-1 ring-purple-100">
        <SectionLabel variant="purple">Advanced joins</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">FULL, CROSS & Self JOIN</h2>
      </div>

      <Card title="FULL OUTER JOIN">
        <p className="mb-3 text-sm text-gray-600">
          Returns all rows from both tables. SQLite lacks FULL OUTER JOIN — use UNION of LEFT and RIGHT joins, or swap tables with LEFT JOIN.
        </p>
        <CodeWindow filename="full_outer_concept.sql">
{`-- Concept (MySQL / PostgreSQL / SQL Server):
SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id;`}
        </CodeWindow>
      </Card>

      <Card title="CROSS JOIN">
        <p className="mb-3 text-sm text-gray-600">
          Every row from table A paired with every row from table B — the Cartesian product. Use carefully!
        </p>
        <CodeWindow filename="cross_join.sql">
{`SELECT c.CategoryName, s.CompanyName
FROM Categories c
CROSS JOIN Suppliers s
LIMIT 10;`}
        </CodeWindow>
      </Card>

      <Card title="Self JOIN">
        <p className="mb-3 text-sm text-gray-600">
          Join a table to itself — common for hierarchies (employee → manager).
        </p>
        <CodeWindow filename="self_join.sql">
{`SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  m.FirstName || ' ' || m.LastName AS Manager
FROM Employees e
LEFT JOIN Employees m ON e.ReportsTo = m.EmployeeID;`}
        </CodeWindow>
      </Card>
    </div>
  );
}

function AggregatesIntro() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">Summarizing data</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Aggregate functions</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Aggregate functions collapse <strong>many rows into one value</strong> — a total, average, count, or extreme.
          They answer questions like &quot;how many?&quot; and &quot;how much in total?&quot;
        </p>
      </div>
      <div className="grid gap-2 sm:grid-cols-5">
        {["COUNT", "SUM", "AVG", "MIN", "MAX"].map((fn) => (
          <div key={fn} className="rounded-lg bg-amber-50 py-2 text-center ring-1 ring-amber-200">
            <span className="font-mono text-sm font-bold text-amber-800">{fn}</span>
          </div>
        ))}
      </div>
      <CodeWindow filename="overview.sql">
{`SELECT COUNT(*) AS TotalCustomers FROM Customers;
SELECT AVG(UnitPrice) AS AvgPrice FROM Products;`}
      </CodeWindow>
      <Card title="WHERE vs aggregates">
        <p className="text-sm text-gray-600">
          <code className="text-xs">WHERE</code> filters rows <em>before</em> aggregating.
          <code className="text-xs"> HAVING</code> filters groups <em>after</em> (covered later in this module).
        </p>
      </Card>
    </div>
  );
}

function CountMinMax() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">COUNT · MIN · MAX</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Counting and extremes</h2>
      </div>
      <CodeWindow filename="count.sql">
{`SELECT COUNT(*) AS AllRows FROM Customers;
SELECT COUNT(Region) AS WithRegion FROM Customers;
-- COUNT(col) skips NULLs; COUNT(*) counts every row`}
      </CodeWindow>
      <CodeWindow filename="min_max.sql">
{`SELECT
  MIN(UnitPrice) AS Cheapest,
  MAX(UnitPrice) AS MostExpensive
FROM Products;`}
      </CodeWindow>
    </div>
  );
}

function SumAvg() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 ring-1 ring-emerald-100">
        <SectionLabel variant="green">SUM · AVG</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Totals and averages</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <code className="text-sm">SUM</code> adds numeric values; <code className="text-sm">AVG</code> divides the sum by the count of non-NULL values.
        </p>
      </div>
      <CodeWindow filename="sum_avg.sql">
{`SELECT
  SUM(Freight) AS TotalFreight,
  AVG(Freight) AS AvgFreight,
  COUNT(*) AS OrderCount
FROM Orders;`}
      </CodeWindow>
      <CodeWindow filename="products.sql">
{`SELECT
  ROUND(AVG(UnitPrice), 2) AS AvgPrice,
  SUM(UnitsInStock) AS TotalStock
FROM Products
WHERE Discontinued = 0;`}
      </CodeWindow>
    </div>
  );
}

function GroupByBasics() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">GROUP BY</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">One bucket per group</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <code className="text-sm">GROUP BY</code> splits rows into groups, then runs an aggregate on each group separately.
          Every non-aggregated column in SELECT must appear in GROUP BY.
        </p>
      </div>
      <CodeWindow filename="group_by.sql">
{`SELECT Country, COUNT(*) AS CustomerCount
FROM Customers
GROUP BY Country
ORDER BY CustomerCount DESC;`}
      </CodeWindow>
      <CodeWindow filename="with_join.sql">
{`SELECT c.CategoryName, COUNT(p.ProductID) AS ProductCount
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
ORDER BY ProductCount DESC;`}
      </CodeWindow>
    </div>
  );
}

function GroupByMultiple() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 ring-1 ring-indigo-100">
        <SectionLabel variant="blue">Multi-column groups</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">GROUP BY multiple columns</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Listing several columns in <code className="text-sm">GROUP BY</code> creates finer buckets —
          e.g. customers per <strong>country and city</strong> instead of country alone.
        </p>
      </div>
      <CodeWindow filename="multi_group.sql">
{`SELECT Country, City, COUNT(*) AS Customers
FROM Customers
GROUP BY Country, City
ORDER BY Country, City;`}
      </CodeWindow>
      <CodeWindow filename="employee_orders.sql">
{`SELECT
  e.FirstName || ' ' || e.LastName AS Employee,
  strftime('%Y', o.OrderDate) AS OrderYear,
  COUNT(o.OrderID) AS OrdersHandled
FROM Employees e
INNER JOIN Orders o ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID, OrderYear
ORDER BY Employee, OrderYear;`}
      </CodeWindow>
    </div>
  );
}

function HavingClause() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-rose-50 via-white to-orange-50 p-6 ring-1 ring-rose-100">
        <SectionLabel variant="amber">HAVING</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Filter groups after aggregation</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <code className="text-sm">WHERE</code> cannot filter on aggregates like <code className="text-sm">COUNT(*)</code>.
          Use <code className="text-sm">HAVING</code> after <code className="text-sm">GROUP BY</code> to keep only groups that meet a condition.
        </p>
      </div>
      <CodeWindow filename="having.sql">
{`SELECT Country, COUNT(*) AS CustomerCount
FROM Customers
GROUP BY Country
HAVING COUNT(*) > 5
ORDER BY CustomerCount DESC;`}
      </CodeWindow>
      <CodeWindow filename="expensive_categories.sql">
{`SELECT c.CategoryName, AVG(p.UnitPrice) AS AvgPrice
FROM Categories c
INNER JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName
HAVING AVG(p.UnitPrice) > 25
ORDER BY AvgPrice DESC;`}
      </CodeWindow>
      <Card title="Clause order">
        <p className="font-mono text-xs text-gray-600">
          SELECT → FROM → JOIN → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT
        </p>
      </Card>
    </div>
  );
}

function SqlFunctionsIntro() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-6 ring-1 ring-cyan-100">
        <SectionLabel variant="sky">Built-in helpers</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">SQL functions</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Functions transform individual values in <code className="text-sm">SELECT</code> —
          uppercase a name, round a price, extract a year from a date.
          They are <strong>scalar</strong> (one value in, one value out), unlike aggregates that summarize many rows.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { title: "Scalar functions", ex: "UPPER(CompanyName)", desc: "Per-row transformation" },
          { title: "Aggregate functions", ex: "COUNT(*)", desc: "Many rows → one value (Module 5)" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-cyan-200 bg-white p-4">
            <p className="font-semibold text-gray-900">{item.title}</p>
            <code className="mt-1 block text-xs text-cyan-800">{item.ex}</code>
            <p className="mt-2 text-xs text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <CodeWindow filename="nested.sql">
{`SELECT UPPER(c.CategoryName) AS CategoryUpper,
       ROUND(AVG(p.UnitPrice), 2) AS AvgPrice
FROM Products p
INNER JOIN Categories c ON p.CategoryID = c.CategoryID
GROUP BY c.CategoryName;`}
      </CodeWindow>
    </div>
  );
}

function StringFunctions() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 ring-1 ring-green-100">
        <SectionLabel variant="green">Text</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">String functions</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {["UPPER", "LOWER", "TRIM", "LENGTH", "SUBSTR", "||"].map((fn) => (
          <span key={fn} className="rounded-md bg-green-100 px-2 py-1 font-mono text-xs font-bold text-green-800">{fn}</span>
        ))}
      </div>
      <CodeWindow filename="strings.sql">
{`SELECT
  UPPER(CompanyName) AS UpperName,
  LOWER(Country) AS LowerCountry,
  LENGTH(ContactName) AS NameLength,
  SUBSTR(CompanyName, 1, 5) AS ShortName
FROM Customers
LIMIT 10;`}
      </CodeWindow>
      <CodeWindow filename="concat.sql">
{`SELECT FirstName || ' ' || LastName AS FullName
FROM Employees;`}
      </CodeWindow>
    </div>
  );
}

function NumericFunctions() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 ring-1 ring-blue-100">
        <SectionLabel variant="blue">Numbers</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Numeric functions</h2>
      </div>
      <CodeWindow filename="numeric.sql">
{`SELECT
  ProductName,
  UnitPrice,
  ROUND(UnitPrice, 0) AS RoundedPrice,
  ROUND(UnitPrice * 1.18, 2) AS WithTax,
  ABS(UnitPrice - 20) AS DistanceFrom20
FROM Products
LIMIT 10;`}
      </CodeWindow>
      <Card title="CAST for types">
        <CodeWindow filename="cast.sql">
{`SELECT CAST(UnitPrice AS INTEGER) AS PriceInt
FROM Products LIMIT 5;`}
        </CodeWindow>
      </Card>
    </div>
  );
}

function DateTimeFunctions() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">Dates</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Date & time in SQLite</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Northwind stores dates as text (<code className="text-sm">YYYY-MM-DD</code>).
          Use <code className="text-sm">strftime</code> to extract parts and <code className="text-sm">date()</code> for arithmetic.
        </p>
      </div>
      <CodeWindow filename="strftime.sql">
{`SELECT
  OrderID,
  OrderDate,
  strftime('%Y', OrderDate) AS OrderYear,
  strftime('%m', OrderDate) AS OrderMonth
FROM Orders
LIMIT 10;`}
      </CodeWindow>
      <CodeWindow filename="date_math.sql">
{`SELECT date('now') AS Today,
       date(OrderDate, '+30 days') AS DueApprox
FROM Orders
LIMIT 5;`}
      </CodeWindow>
    </div>
  );
}

function CaseExpressions() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">Conditional</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">CASE expressions</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          <code className="text-sm">CASE</code> is SQL&apos;s if/else — return different values based on conditions.
        </p>
      </div>
      <CodeWindow filename="case.sql">
{`SELECT ProductName, UnitPrice,
  CASE
    WHEN UnitPrice < 10 THEN 'Budget'
    WHEN UnitPrice < 50 THEN 'Mid-range'
    ELSE 'Premium'
  END AS PriceBand
FROM Products
LIMIT 15;`}
      </CodeWindow>
      <CodeWindow filename="case_discontinued.sql">
{`SELECT ProductName,
  CASE Discontinued WHEN 1 THEN 'Discontinued' ELSE 'Active' END AS Status
FROM Products
LIMIT 10;`}
      </CodeWindow>
    </div>
  );
}

function CoalesceNullif() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-6 ring-1 ring-teal-100">
        <SectionLabel variant="green">NULL handling</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">COALESCE & NULLIF</h2>
      </div>
      <CodeWindow filename="coalesce.sql">
{`SELECT CompanyName,
  COALESCE(Region, 'N/A') AS Region,
  COALESCE(Fax, Phone, 'No contact') AS BackupContact
FROM Customers
LIMIT 10;`}
      </CodeWindow>
      <CodeWindow filename="nullif.sql">
{`-- NULLIF(a, b) returns NULL when a = b
SELECT ProductName,
  NULLIF(UnitsInStock, 0) AS StockOrNull
FROM Products
LIMIT 10;`}
      </CodeWindow>
      <Card title="IFNULL alias">
        <p className="text-sm text-gray-600">
          SQLite also provides <code className="text-xs">IFNULL(x, y)</code> — same as <code className="text-xs">COALESCE(x, y)</code> for two arguments.
        </p>
      </Card>
    </div>
  );
}

function SubqueriesIntro() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">Nested queries</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">What is a subquery?</h2>
        <p className="mt-2 text-sm text-gray-600">
          A subquery is a <code className="text-xs">SELECT</code> nested inside another statement — often in{" "}
          <code className="text-xs">WHERE</code>, <code className="text-xs">FROM</code>, or{" "}
          <code className="text-xs">SELECT</code>.
        </p>
      </div>
      <Card title="Outer vs inner query">
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Outer query</strong> — the main statement you write.</p>
          <p><strong>Inner query (subquery)</strong> — runs first (conceptually) and feeds a value or table to the outer query.</p>
        </div>
      </Card>
      <CodeWindow filename="simple-subquery.sql">
{`-- Products priced above the catalog average
SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > (
  SELECT AVG(UnitPrice) FROM Products
);`}
      </CodeWindow>
      <Card title="When to use subqueries">
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Filter by a computed threshold (average, max, count)</li>
          <li>Match rows against another table&apos;s values (IN)</li>
          <li>Build a temporary result set in FROM</li>
          <li>Test existence with EXISTS (often clearer than IN)</li>
        </ul>
      </Card>
    </div>
  );
}

function SubqueriesWhere() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">WHERE clause</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">IN & NOT IN</h2>
      </div>
      <CodeWindow filename="in-subquery.sql">
{`-- Customers in countries where we have suppliers
SELECT CompanyName, Country
FROM Customers
WHERE Country IN (
  SELECT DISTINCT Country FROM Suppliers
  WHERE Country IS NOT NULL
);`}
      </CodeWindow>
      <CodeWindow filename="not-in.sql">
{`-- Products never ordered (watch NULLs in NOT IN!)
SELECT ProductName
FROM Products
WHERE ProductID NOT IN (
  SELECT ProductID FROM [Order Details]
  WHERE ProductID IS NOT NULL
);`}
      </CodeWindow>
      <Card title="NULL caution">
        <p className="text-sm text-gray-600">
          <code className="text-xs">NOT IN</code> with NULLs in the subquery list can return no rows. Prefer{" "}
          <code className="text-xs">NOT EXISTS</code> or filter NULLs out of the subquery.
        </p>
      </Card>
    </div>
  );
}

function ScalarSubqueries() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 ring-1 ring-blue-100">
        <SectionLabel variant="blue">Single value</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Scalar subqueries</h2>
        <p className="mt-2 text-sm text-gray-600">
          Returns exactly one row and one column — safe to compare with <code className="text-xs">=</code>,{" "}
          <code className="text-xs">&gt;</code>, <code className="text-xs">&lt;</code>, etc.
        </p>
      </div>
      <CodeWindow filename="scalar-compare.sql">
{`SELECT ProductName, UnitPrice
FROM Products
WHERE UnitPrice > (
  SELECT AVG(UnitPrice) FROM Products
)
ORDER BY UnitPrice DESC;`}
      </CodeWindow>
      <CodeWindow filename="scalar-in-select.sql">
{`SELECT
  CompanyName,
  (SELECT COUNT(*) FROM Orders o WHERE o.CustomerID = c.CustomerID) AS OrderCount
FROM Customers c
ORDER BY OrderCount DESC
LIMIT 10;`}
      </CodeWindow>
      <Card title="Rule of thumb">
        <p className="text-sm text-gray-600">
          If the subquery might return more than one row, use <code className="text-xs">IN</code> or{" "}
          <code className="text-xs">EXISTS</code> — not <code className="text-xs">=</code>.
        </p>
      </Card>
    </div>
  );
}

function SubqueriesFrom() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 ring-1 ring-emerald-100">
        <SectionLabel variant="green">Derived tables</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Subquery in FROM</h2>
        <p className="mt-2 text-sm text-gray-600">
          Treat a nested SELECT as a temporary table — always give it an alias.
        </p>
      </div>
      <CodeWindow filename="derived-table.sql">
{`SELECT cat.CategoryName, stats.AvgPrice, stats.ProductCount
FROM (
  SELECT
    CategoryID,
    ROUND(AVG(UnitPrice), 2) AS AvgPrice,
    COUNT(*) AS ProductCount
  FROM Products
  GROUP BY CategoryID
) AS stats
INNER JOIN Categories cat ON cat.CategoryID = stats.CategoryID
ORDER BY stats.AvgPrice DESC;`}
      </CodeWindow>
      <Card title="Why use FROM subqueries?">
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Aggregate first, then join or filter the summary</li>
          <li>Break complex logic into readable steps</li>
          <li>Same idea as a CTE — subquery in FROM is inline</li>
        </ul>
      </Card>
    </div>
  );
}

function CorrelatedSubqueries() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">Row-by-row</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Correlated subqueries</h2>
        <p className="mt-2 text-sm text-gray-600">
          The inner query references a column from the outer query — re-evaluated for each outer row.
        </p>
      </div>
      <CodeWindow filename="correlated-price.sql">
{`-- Products priced above their category average
SELECT p.ProductName, p.UnitPrice, c.CategoryName
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
WHERE p.UnitPrice > (
  SELECT AVG(p2.UnitPrice)
  FROM Products p2
  WHERE p2.CategoryID = p.CategoryID
)
ORDER BY c.CategoryName, p.UnitPrice DESC;`}
      </CodeWindow>
      <Card title="Correlated vs uncorrelated">
        <p className="text-sm text-gray-600">
          Uncorrelated: inner query runs once. Correlated: inner query depends on the current outer row — often slower but expressive.
        </p>
      </Card>
    </div>
  );
}

function ExistsNotExists() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-rose-50 via-white to-pink-50 p-6 ring-1 ring-rose-100">
        <SectionLabel variant="purple">Semi-join</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">EXISTS & NOT EXISTS</h2>
        <p className="mt-2 text-sm text-gray-600">
          Returns TRUE/FALSE — does a matching row exist? Often faster and NULL-safe compared to IN.
        </p>
      </div>
      <CodeWindow filename="exists.sql">
{`-- Customers who placed at least one order
SELECT c.CompanyName, c.Country
FROM Customers c
WHERE EXISTS (
  SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID
);`}
      </CodeWindow>
      <CodeWindow filename="not-exists.sql">
{`-- Suppliers with no products
SELECT s.CompanyName
FROM Suppliers s
WHERE NOT EXISTS (
  SELECT 1 FROM Products p WHERE p.SupplierID = s.SupplierID
);`}
      </CodeWindow>
      <Card title="SELECT 1">
        <p className="text-sm text-gray-600">
          Inside EXISTS, the engine only checks for a match — column values don&apos;t matter.{" "}
          <code className="text-xs">SELECT 1</code> is a common idiom.
        </p>
      </Card>
    </div>
  );
}

function ViewsIntro() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 ring-1 ring-indigo-100">
        <SectionLabel variant="purple">Virtual tables</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">What is a view?</h2>
        <p className="mt-2 text-sm text-gray-600">
          A view is a <strong>saved SELECT</strong> with a name. You query it like a table, but data still lives in the underlying tables.
        </p>
      </div>
      <Card title="View vs table">
        <div className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="font-semibold text-gray-900">Table</p>
            <p className="mt-1 text-gray-600">Stores rows on disk — INSERT/UPDATE change stored data.</p>
          </div>
          <div className="rounded-lg bg-indigo-50 p-3">
            <p className="font-semibold text-indigo-900">View</p>
            <p className="mt-1 text-indigo-800">Stores a query definition — SELECT runs when you read the view.</p>
          </div>
        </div>
      </Card>
      <CodeWindow filename="concept.sql">
{`-- Conceptual flow
CREATE VIEW v_CustomerOrders AS
  SELECT c.CompanyName, COUNT(o.OrderID) AS OrderCount
  FROM Customers c
  LEFT JOIN Orders o ON o.CustomerID = c.CustomerID
  GROUP BY c.CustomerID, c.CompanyName;

SELECT * FROM v_CustomerOrders ORDER BY OrderCount DESC;`}
      </CodeWindow>
      <Card title="Why use views?">
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Simplify complex JOINs for report writers</li>
          <li>Hide sensitive columns from certain users</li>
          <li>Reuse the same logic across many queries</li>
        </ul>
      </Card>
    </div>
  );
}

function CreatingViews() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 ring-1 ring-indigo-100">
        <SectionLabel variant="blue">CREATE VIEW</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Define and query a view</h2>
      </div>
      <CodeWindow filename="create-view.sql">
{`CREATE VIEW IF NOT EXISTS v_ProductCatalog AS
SELECT
  p.ProductID,
  p.ProductName,
  c.CategoryName,
  s.CompanyName AS SupplierName,
  p.UnitPrice
FROM Products p
INNER JOIN Categories c ON c.CategoryID = p.CategoryID
INNER JOIN Suppliers s ON s.SupplierID = p.SupplierID;

SELECT ProductName, CategoryName, UnitPrice
FROM v_ProductCatalog
ORDER BY UnitPrice DESC
LIMIT 10;`}
      </CodeWindow>
      <CodeWindow filename="replace-drop.sql">
{`-- SQLite: replace an existing view
CREATE VIEW v_ExpensiveProducts AS
SELECT ProductName, UnitPrice FROM Products WHERE UnitPrice > 50;

-- To change definition later:
DROP VIEW IF EXISTS v_ExpensiveProducts;
CREATE VIEW v_ExpensiveProducts AS
SELECT ProductName, UnitPrice FROM Products WHERE UnitPrice > 75;`}
      </CodeWindow>
      <Card title="Tips">
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Use <code className="text-xs">IF NOT EXISTS</code> to avoid errors on re-run.</li>
          <li>Views in this IDE persist for your browser session on Northwind.</li>
          <li>Column names in the view come from the inner SELECT aliases.</li>
        </ul>
      </Card>
    </div>
  );
}

function SetOperationsIntro() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-6 ring-1 ring-teal-100">
        <SectionLabel variant="green">Combining queries</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Set operations</h2>
        <p className="mt-2 text-sm text-gray-600">
          Stack or compare the <strong>rows</strong> from two SELECT statements — like set theory on query results.
        </p>
      </div>
      <Card title="Operators">
        <div className="space-y-2 text-sm">
          <p><code className="text-xs">UNION</code> — all distinct rows from both queries</p>
          <p><code className="text-xs">UNION ALL</code> — all rows, including duplicates</p>
          <p><code className="text-xs">INTERSECT</code> — rows appearing in both queries</p>
          <p><code className="text-xs">EXCEPT</code> — rows in first query but not second</p>
        </div>
      </Card>
      <Card title="Rules">
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Both SELECTs must return the <strong>same number of columns</strong></li>
          <li>Compatible types in matching positions</li>
          <li>Column names come from the <strong>first</strong> SELECT</li>
        </ul>
      </Card>
      <CodeWindow filename="shape.sql">
{`-- Valid: two single-column lists
SELECT Country FROM Customers
UNION
SELECT Country FROM Suppliers;`}
      </CodeWindow>
    </div>
  );
}

function UnionUnionAll() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">Vertical stack</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">UNION & UNION ALL</h2>
      </div>
      <CodeWindow filename="union-countries.sql">
{`-- Distinct countries from customers and suppliers
SELECT Country FROM Customers WHERE Country IS NOT NULL
UNION
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`}
      </CodeWindow>
      <CodeWindow filename="union-all.sql">
{`-- Tag each row with its source (same column count!)
SELECT CompanyName AS Name, 'Customer' AS Source FROM Customers
UNION ALL
SELECT CompanyName AS Name, 'Supplier' AS Source FROM Suppliers
ORDER BY Name
LIMIT 20;`}
      </CodeWindow>
      <Card title="UNION vs UNION ALL">
        <p className="text-sm text-gray-600">
          <code className="text-xs">UNION</code> removes duplicate rows (extra sort/distinct work).{" "}
          <code className="text-xs">UNION ALL</code> keeps every row — use it when you know sets don&apos;t overlap or duplicates are OK.
        </p>
      </Card>
    </div>
  );
}

function IntersectOp() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-green-50 p-6 ring-1 ring-emerald-100">
        <SectionLabel variant="green">Common rows</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">INTERSECT</h2>
        <p className="mt-2 text-sm text-gray-600">
          Returns rows that appear in <strong>both</strong> result sets.
        </p>
      </div>
      <CodeWindow filename="intersect-countries.sql">
{`-- Countries where we have BOTH customers and suppliers
SELECT Country FROM Customers WHERE Country IS NOT NULL
INTERSECT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`}
      </CodeWindow>
      <CodeWindow filename="intersect-cities.sql">
{`SELECT City FROM Customers WHERE City IS NOT NULL
INTERSECT
SELECT City FROM Suppliers WHERE City IS NOT NULL
ORDER BY City;`}
      </CodeWindow>
      <Card title="Equivalent logic">
        <p className="text-sm text-gray-600">
          <code className="text-xs">A INTERSECT B</code> is similar to{" "}
          <code className="text-xs">WHERE value IN (SELECT … FROM B)</code> but reads clearly as set intersection.
        </p>
      </Card>
    </div>
  );
}

function ExceptOp() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">Set difference</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">EXCEPT</h2>
        <p className="mt-2 text-sm text-gray-600">
          Rows in the <strong>first</strong> query that are not in the second. (Some databases call this MINUS.)
        </p>
      </div>
      <CodeWindow filename="except-countries.sql">
{`-- Customer countries with no supplier in the same country
SELECT Country FROM Customers WHERE Country IS NOT NULL
EXCEPT
SELECT Country FROM Suppliers WHERE Country IS NOT NULL
ORDER BY Country;`}
      </CodeWindow>
      <CodeWindow filename="except-products.sql">
{`-- Categories that have no discontinued products
SELECT CategoryID FROM Categories
EXCEPT
SELECT CategoryID FROM Products WHERE Discontinued = 1;`}
      </CodeWindow>
      <Card title="Order matters">
        <p className="text-sm text-gray-600">
          <code className="text-xs">A EXCEPT B</code> ≠ <code className="text-xs">B EXCEPT A</code>. Swap the queries and you get a different set.
        </p>
      </Card>
    </div>
  );
}

function CtesIntro() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 ring-1 ring-violet-100">
        <SectionLabel variant="purple">WITH clause</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Common Table Expressions</h2>
        <p className="mt-2 text-sm text-gray-600">
          A CTE names a subquery at the top of your statement with <code className="text-xs">WITH name AS (SELECT …)</code>, then you reference{" "}
          <code className="text-xs">name</code> like a table in the main query.
        </p>
      </div>
      <CodeWindow filename="basic-cte.sql">
{`WITH ExpensiveProducts AS (
  SELECT ProductName, UnitPrice, CategoryID
  FROM Products
  WHERE UnitPrice > 50
)
SELECT ep.ProductName, c.CategoryName, ep.UnitPrice
FROM ExpensiveProducts ep
INNER JOIN Categories c ON c.CategoryID = ep.CategoryID
ORDER BY ep.UnitPrice DESC;`}
      </CodeWindow>
      <Card title="CTE vs subquery in FROM">
        <p className="text-sm text-gray-600">
          A CTE in FROM is the same idea as a derived table — but the name is declared once at the top, which makes long queries easier to read and reuse within the same statement.
        </p>
      </Card>
    </div>
  );
}

function CtesVsSubqueries() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 ring-1 ring-sky-100">
        <SectionLabel variant="sky">Readability</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">CTEs vs subqueries</h2>
      </div>
      <Card title="Prefer CTEs when…">
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>The same subquery is referenced multiple times</li>
          <li>You want top-down, step-by-step logic</li>
          <li>You are chaining several intermediate result sets</li>
        </ul>
      </Card>
      <CodeWindow filename="subquery-from.sql">
{`-- Derived table (inline)
SELECT cat.CategoryName, stats.AvgPrice
FROM (
  SELECT CategoryID, AVG(UnitPrice) AS AvgPrice
  FROM Products GROUP BY CategoryID
) AS stats
INNER JOIN Categories cat ON cat.CategoryID = stats.CategoryID;`}
      </CodeWindow>
      <CodeWindow filename="same-as-cte.sql">
{`-- Same logic with a CTE (often clearer)
WITH CategoryStats AS (
  SELECT CategoryID, AVG(UnitPrice) AS AvgPrice
  FROM Products
  GROUP BY CategoryID
)
SELECT cat.CategoryName, cs.AvgPrice
FROM CategoryStats cs
INNER JOIN Categories cat ON cat.CategoryID = cs.CategoryID;`}
      </CodeWindow>
    </div>
  );
}

function MultipleCtes() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 ring-1 ring-indigo-100">
        <SectionLabel variant="purple">Chaining</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Multiple CTEs</h2>
        <p className="mt-2 text-sm text-gray-600">
          List several CTEs separated by commas after <code className="text-xs">WITH</code>. Later CTEs can reference earlier ones.
        </p>
      </div>
      <CodeWindow filename="multiple-ctes.sql">
{`WITH
  OrderTotals AS (
    SELECT OrderID, SUM(Quantity * UnitPrice) AS OrderTotal
    FROM [Order Details]
    GROUP BY OrderID
  ),
  BigOrders AS (
    SELECT OrderID, OrderTotal
    FROM OrderTotals
    WHERE OrderTotal > 1000
  )
SELECT o.OrderID, c.CompanyName, bo.OrderTotal
FROM BigOrders bo
INNER JOIN Orders o ON o.OrderID = bo.OrderID
INNER JOIN Customers c ON c.CustomerID = o.CustomerID
ORDER BY bo.OrderTotal DESC
LIMIT 10;`}
      </CodeWindow>
      <Card title="Order matters">
        <p className="text-sm text-gray-600">
          CTEs are evaluated in definition order — a CTE can only reference CTEs defined above it in the same WITH clause.
        </p>
      </Card>
    </div>
  );
}

function CtesJoinsAggregates() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 ring-1 ring-emerald-100">
        <SectionLabel variant="green">Summarize first</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">CTEs + JOINs + GROUP BY</h2>
      </div>
      <CodeWindow filename="customer-revenue.sql">
{`WITH CustomerRevenue AS (
  SELECT
    o.CustomerID,
    SUM(od.Quantity * od.UnitPrice) AS TotalRevenue
  FROM Orders o
  INNER JOIN [Order Details] od ON od.OrderID = o.OrderID
  GROUP BY o.CustomerID
)
SELECT c.CompanyName, cr.TotalRevenue
FROM CustomerRevenue cr
INNER JOIN Customers c ON c.CustomerID = cr.CustomerID
ORDER BY cr.TotalRevenue DESC
LIMIT 10;`}
      </CodeWindow>
      <CodeWindow filename="filter-on-cte.sql">
{`WITH ProductSales AS (
  SELECT ProductID, SUM(Quantity) AS UnitsSold
  FROM [Order Details]
  GROUP BY ProductID
)
SELECT p.ProductName, ps.UnitsSold
FROM ProductSales ps
INNER JOIN Products p ON p.ProductID = ps.ProductID
WHERE ps.UnitsSold > 100
ORDER BY ps.UnitsSold DESC;`}
      </CodeWindow>
    </div>
  );
}

function RecursiveCtesIntro() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100">
        <SectionLabel variant="amber">WITH RECURSIVE</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Recursive CTEs</h2>
        <p className="mt-2 text-sm text-gray-600">
          A recursive CTE has an <strong>anchor</strong> SELECT (base rows) and a <strong>recursive</strong> SELECT that references the CTE itself — used for hierarchies, org charts, and bill-of-materials.
        </p>
      </div>
      <Card title="Structure">
        <div className="space-y-2 font-mono text-xs text-gray-700">
          <p>WITH RECURSIVE name AS (</p>
          <p className="pl-4">anchor SELECT …</p>
          <p className="pl-4">UNION ALL</p>
          <p className="pl-4">recursive SELECT … JOIN name …</p>
          <p>)</p>
          <p>SELECT * FROM name;</p>
        </div>
      </Card>
      <CodeWindow filename="number-series.sql">
{`-- Classic demo: numbers 1 through 10
WITH RECURSIVE nums(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM nums WHERE n < 10
)
SELECT n FROM nums;`}
      </CodeWindow>
      <Card title="Stop condition">
        <p className="text-sm text-gray-600">
          The recursive part must eventually return no new rows — usually a <code className="text-xs">WHERE</code> clause limits depth or iteration.
        </p>
      </Card>
    </div>
  );
}

function RecursiveEmployeeHierarchy() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 ring-1 ring-blue-100">
        <SectionLabel variant="blue">Org chart</SectionLabel>
        <h2 className="text-2xl font-bold text-gray-900">Employee hierarchy</h2>
        <p className="mt-2 text-sm text-gray-600">
          Northwind <code className="text-xs">Employees.ReportsTo</code> points to a manager&apos;s EmployeeID — ideal for a recursive walk.
        </p>
      </div>
      <CodeWindow filename="reports-chain.sql">
{`WITH RECURSIVE OrgChart AS (
  -- Anchor: top-level managers (no ReportsTo)
  SELECT EmployeeID, FirstName, LastName, Title, ReportsTo, 0 AS Level
  FROM Employees
  WHERE ReportsTo IS NULL

  UNION ALL

  -- Recursive: employees reporting to someone already in OrgChart
  SELECT e.EmployeeID, e.FirstName, e.LastName, e.Title, e.ReportsTo, oc.Level + 1
  FROM Employees e
  INNER JOIN OrgChart oc ON e.ReportsTo = oc.EmployeeID
)
SELECT Level, FirstName || ' ' || LastName AS FullName, Title
FROM OrgChart
ORDER BY Level, FullName;`}
      </CodeWindow>
      <Card title="Level column">
        <p className="text-sm text-gray-600">
          Track depth with a <code className="text-xs">Level</code> counter in the anchor (0) and increment in the recursive part — makes indentation and filtering easy.
        </p>
      </Card>
    </div>
  );
}

const VARIANTS: Record<SqlInfographicVariant, () => React.ReactNode> = {
  "sql-intro-databases": IntroDatabases,
  "sql-relational-model": RelationalModel,
  "sql-intro-sql": IntroSql,
  "sql-data-types": DataTypes,
  "sql-command-categories": CommandCategories,
  "sql-ddl": DdlCommands,
  "sql-dml": DmlCommands,
  "sql-dql-dcl-tcl": DqlDclTcl,
  "sql-select-statement": SelectStatement,
  "sql-column-aliases": ColumnAliases,
  "sql-distinct-limit": DistinctLimit,
  "sql-null-handling": NullHandling,
  "sql-where-clause": WhereClause,
  "sql-comparison-logical": ComparisonLogical,
  "sql-in-between-like": InBetweenLike,
  "sql-order-by": OrderBy,
  "sql-why-joins": WhyJoins,
  "sql-inner-join": InnerJoin,
  "sql-left-right-join": LeftRightJoin,
  "sql-full-cross-self-join": FullCrossSelfJoin,
  "sql-aggregates-intro": AggregatesIntro,
  "sql-count-min-max": CountMinMax,
  "sql-sum-avg": SumAvg,
  "sql-group-by-basics": GroupByBasics,
  "sql-group-by-multiple": GroupByMultiple,
  "sql-having": HavingClause,
  "sql-functions-intro": SqlFunctionsIntro,
  "sql-string-functions": StringFunctions,
  "sql-numeric-functions": NumericFunctions,
  "sql-date-time-functions": DateTimeFunctions,
  "sql-case-expressions": CaseExpressions,
  "sql-coalesce-nullif": CoalesceNullif,
  "sql-subqueries-intro": SubqueriesIntro,
  "sql-subqueries-where": SubqueriesWhere,
  "sql-scalar-subqueries": ScalarSubqueries,
  "sql-subqueries-from": SubqueriesFrom,
  "sql-correlated-subqueries": CorrelatedSubqueries,
  "sql-exists-not-exists": ExistsNotExists,
  "sql-views-intro": ViewsIntro,
  "sql-creating-views": CreatingViews,
  "sql-set-operations-intro": SetOperationsIntro,
  "sql-union-union-all": UnionUnionAll,
  "sql-intersect": IntersectOp,
  "sql-except": ExceptOp,
  "sql-ctes-intro": CtesIntro,
  "sql-ctes-vs-subqueries": CtesVsSubqueries,
  "sql-multiple-ctes": MultipleCtes,
  "sql-ctes-joins-aggregates": CtesJoinsAggregates,
  "sql-recursive-ctes-intro": RecursiveCtesIntro,
  "sql-recursive-employee-hierarchy": RecursiveEmployeeHierarchy,
};

export function SqlTopicInfographic({ variant }: { variant: SqlInfographicVariant }) {
  const View = VARIANTS[variant];
  return <div className="not-prose">{View()}</div>;
}
