import fs from "fs";
import initSqlJs from "sql.js";

const SQL = await initSqlJs();
const db = new SQL.Database(
  fs.readFileSync(new URL("../public/databases/northwind.sqlite", import.meta.url))
);
const tables = db.exec(
  "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
)[0].values.map((r) => r[0]);
console.log("Tables:", tables.join(", "));
for (const t of ["Customers", "Products", "Orders", "Employees", "Categories"]) {
  const info = db.exec(`PRAGMA table_info(${t})`)[0]?.values.map((r) => r[1]);
  console.log(`${t}:`, info?.join(", "));
}
const sample = db.exec("SELECT CustomerID, CompanyName, ContactName FROM Customers LIMIT 3");
console.log("Sample Customers:", sample[0]?.values);
