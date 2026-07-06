import fs from "fs";
import initSqlJs from "sql.js";

const SQL = await initSqlJs();
const db = new SQL.Database(
  fs.readFileSync(new URL("../public/databases/northwind.sqlite", import.meta.url))
);
const countries = db.exec(
  `SELECT DISTINCT Country FROM Customers ORDER BY Country`
)[0].values.map((r) => r[0]);
console.log("Countries sample:", countries.filter((c) => /ger|fran|uk/i.test(String(c))));
const london = db.exec(`SELECT COUNT(*) FROM Employees WHERE City = 'London'`)[0].values[0][0];
console.log("London employees:", london);
