import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import initSqlJs from "sql.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "databases");
fs.mkdirSync(outDir, { recursive: true });

const SQL = await initSqlJs();
const NORTHWIND_URL =
  "https://raw.githubusercontent.com/jpwhite3/northwind-SQLite3/main/dist/northwind.db";

function writeDb(filename, setup) {
  const db = new SQL.Database();
  setup(db);
  const bytes = db.export();
  fs.writeFileSync(path.join(outDir, filename), Buffer.from(bytes));
  db.close();
  console.log(`Wrote ${filename}`);
}

async function ensureNorthwind() {
  const dest = path.join(outDir, "northwind.sqlite");
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1_000_000) {
    console.log("northwind.sqlite already present");
    return;
  }
  console.log("Downloading Northwind database …");
  const res = await fetch(NORTHWIND_URL);
  if (!res.ok) {
    throw new Error(`Northwind download failed (${res.status})`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`Wrote northwind.sqlite (${(buf.length / 1024 / 1024).toFixed(1)} MB)`);
}

writeDb("learning.sqlite", (db) => {
  db.run(`
    CREATE TABLE departments (
      dept_id INTEGER PRIMARY KEY,
      dept_name TEXT NOT NULL,
      location TEXT
    );
    CREATE TABLE employees (
      emp_id INTEGER PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT UNIQUE,
      dept_id INTEGER REFERENCES departments(dept_id),
      salary REAL,
      hire_date TEXT
    );
    CREATE TABLE projects (
      project_id INTEGER PRIMARY KEY,
      project_name TEXT NOT NULL,
      budget REAL,
      dept_id INTEGER REFERENCES departments(dept_id)
    );

    INSERT INTO departments VALUES
      (1, 'Engineering', 'Bangalore'),
      (2, 'Sales', 'Mumbai'),
      (3, 'HR', 'Delhi');

    INSERT INTO employees VALUES
      (1, 'Priya', 'Sharma', 'priya@co.in', 1, 85000, '2021-03-15'),
      (2, 'Arjun', 'Patel', 'arjun@co.in', 1, 92000, '2020-07-01'),
      (3, 'Meera', 'Nair', 'meera@co.in', 2, 78000, '2022-01-10'),
      (4, 'Ravi', 'Kumar', 'ravi@co.in', 2, 71000, '2019-11-20'),
      (5, 'Anita', 'Das', 'anita@co.in', 3, 65000, '2023-05-05');

    INSERT INTO projects VALUES
      (101, 'Data Platform', 500000, 1),
      (102, 'Mobile App', 320000, 1),
      (103, 'CRM Rollout', 180000, 2);
  `);
});

await ensureNorthwind();
