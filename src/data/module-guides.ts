/**
 * Learner-facing explanations for course modules:
 * overview, outcomes, key functions, topics, and pitfalls.
 */
import { PYTHON_MODULE_GUIDES } from "./python-module-guides";
import type { ModuleGuide } from "./module-guide-types";

export type {
  ModuleGuide,
  ModuleFunctionGuide,
  ModulePitfall,
} from "./module-guide-types";

const SQL_MODULE_GUIDES: Record<string, ModuleGuide> = {
  "sql-foundations": {
    overview:
      "Learn what databases are, how the relational model works, and the families of SQL commands (DDL, DML, DQL, DCL, TCL) you will use throughout the SQL course.",
    keyFunctions: [
      {
        name: "CREATE / ALTER / DROP",
        explanation: "DDL — define and change table structures.",
      },
      {
        name: "INSERT / UPDATE / DELETE",
        explanation: "DML — add, change, and remove row data.",
      },
      {
        name: "SELECT",
        explanation: "DQL — read rows; the foundation of every analysis query.",
      },
    ],
    topics: {
      "sql-m1-t1": "Understand databases, why they matter, and DBMS vs RDBMS.",
      "sql-m1-t2": "Map tables, rows, columns, keys, and relationships in the relational model.",
      "sql-m1-t3": "See what SQL is, how queries run, and how SQLite compares to MySQL.",
      "sql-m1-t4": "Choose SQL types (INTEGER, TEXT, REAL, dates, and more) and constraints.",
      "sql-m1-t5": "Know the five command families: DDL, DML, DQL, DCL, and TCL.",
      "sql-m1-t6": "Practice DDL: CREATE, ALTER, DROP, TRUNCATE, and RENAME.",
      "sql-m1-t7": "Practice DML: INSERT, UPDATE, DELETE, and MERGE/UPSERT patterns.",
      "sql-m1-t8": "Overview SELECT plus GRANT/REVOKE and transaction control commands.",
    },
  },

  "select-fundamentals": {
    overview:
      "Read data with SELECT: project columns, alias results, remove duplicates, limit rows, and handle NULL safely.",
    keyFunctions: [
      {
        name: "SELECT … FROM",
        explanation: "Choose which columns and tables to read.",
      },
      {
        name: "DISTINCT / LIMIT",
        explanation: "Deduplicate result rows and cap how many you return.",
      },
      {
        name: "COALESCE / IS NULL",
        explanation: "Work with missing values without surprising comparison results.",
      },
    ],
    topics: {
      "sql-m2-t1": "Write SELECT/FROM queries and project the columns you need.",
      "sql-m2-t2": "Rename columns with AS and build calculated expressions.",
      "sql-m2-t3": "Use DISTINCT to remove duplicates and LIMIT to page results.",
      "sql-m2-t4": "Handle NULL with IS NULL, COALESCE, and NULL-safe comparisons.",
    },
  },

  "filtering-and-sorting": {
    overview:
      "Filter rows with WHERE and sort with ORDER BY. Learn comparison/logical operators plus IN, BETWEEN, and LIKE for real-world search patterns.",
    keyFunctions: [
      {
        name: "WHERE",
        explanation: "Keep only rows that match your conditions.",
      },
      {
        name: "IN / BETWEEN / LIKE",
        explanation: "Match lists, ranges, and text patterns.",
      },
      {
        name: "ORDER BY",
        explanation: "Sort ascending or descending by one or more columns.",
      },
    ],
    topics: {
      "sql-m3-t1": "Filter rows with WHERE conditions.",
      "sql-m3-t2": "Combine comparisons using AND, OR, and NOT.",
      "sql-m3-t3": "Use IN, BETWEEN, and LIKE for flexible filters.",
      "sql-m3-t4": "Sort results with ORDER BY, including multi-column sorts.",
    },
  },

  joins: {
    overview:
      "Combine related tables using join types. Start from why joins exist, then practice INNER, LEFT/RIGHT, and advanced FULL/CROSS/self-join patterns.",
    keyFunctions: [
      {
        name: "INNER JOIN",
        explanation: "Return only matching rows from both tables.",
      },
      {
        name: "LEFT / RIGHT JOIN",
        explanation: "Keep all rows from one side even when the other side has no match.",
      },
      {
        name: "ON / USING",
        explanation: "Declare how tables relate (usually foreign key equals primary key).",
      },
    ],
    topics: {
      "sql-m4-t1": "Understand why joins exist and how foreign keys connect tables.",
      "sql-m4-t2": "Write INNER JOIN queries for matching rows.",
      "sql-m4-t3": "Preserve unmatched rows with LEFT and RIGHT joins.",
      "sql-m4-t4": "Explore FULL, CROSS, and self-join patterns.",
    },
  },

  "aggregates-and-group-by": {
    overview:
      "Summarize many rows into metrics. Learn aggregate functions, GROUP BY (single and multi-column), and HAVING to filter groups after aggregation.",
    keyFunctions: [
      {
        name: "COUNT / SUM / AVG / MIN / MAX",
        explanation: "Core aggregates for counting and measuring numeric columns.",
      },
      {
        name: "GROUP BY",
        explanation: "Compute one summary row per category (or category combination).",
      },
      {
        name: "HAVING",
        explanation: "Filter groups after aggregation (unlike WHERE, which filters rows first).",
      },
    ],
    topics: {
      "sql-m5-t1": "Learn what aggregate functions do and when to use them.",
      "sql-m5-t2": "Count rows and find min/max values.",
      "sql-m5-t3": "Compute totals and averages with SUM and AVG.",
      "sql-m5-t4": "Group rows by a category with GROUP BY.",
      "sql-m5-t5": "Group by multiple columns for finer buckets.",
      "sql-m5-t6": "Filter aggregated groups with HAVING.",
    },
  },

  "sql-functions": {
    overview:
      "Transform values inside SELECT using built-in SQL functions: strings, numbers, dates, CASE logic, and NULL helpers.",
    keyFunctions: [
      {
        name: "UPPER / LOWER / TRIM / SUBSTR",
        explanation: "Clean and reshape text fields.",
      },
      {
        name: "ROUND / ABS / CAST",
        explanation: "Numeric rounding, absolute value, and type conversion.",
      },
      {
        name: "CASE / COALESCE / NULLIF",
        explanation: "Conditional expressions and NULL fallbacks.",
      },
    ],
    topics: {
      "sql-m6-t1": "See how SQL functions transform values in SELECT lists.",
      "sql-m6-t2": "Apply string functions for cleaning and parsing text.",
      "sql-m6-t3": "Use numeric functions for rounding and absolute values.",
      "sql-m6-t4": "Work with dates and times using SQLite date helpers.",
      "sql-m6-t5": "Write CASE expressions for conditional columns.",
      "sql-m6-t6": "Handle NULLs with COALESCE and NULLIF.",
    },
  },

  subqueries: {
    overview:
      "Nest SELECT statements to filter, compare, and derive tables. Cover WHERE subqueries, scalars, FROM-derived tables, correlated patterns, and EXISTS.",
    keyFunctions: [
      {
        name: "IN / NOT IN (subquery)",
        explanation: "Filter using a list of values produced by another query.",
      },
      {
        name: "EXISTS / NOT EXISTS",
        explanation: "Test whether related rows exist without returning their data.",
      },
      {
        name: "Derived table (FROM subquery)",
        explanation: "Treat a nested SELECT as a temporary table you can join.",
      },
    ],
    topics: {
      "sql-m7-t1": "Learn when nested SELECTs help and how they are structured.",
      "sql-m7-t2": "Filter with subqueries in WHERE using IN and related patterns.",
      "sql-m7-t3": "Use scalar subqueries that return a single value for comparison.",
      "sql-m7-t4": "Put subqueries in FROM as derived tables.",
      "sql-m7-t5": "Write correlated subqueries that reference the outer row.",
      "sql-m7-t6": "Test related rows efficiently with EXISTS and NOT EXISTS.",
    },
  },

  "views-and-set-operations": {
    overview:
      "Save reusable queries as views and combine result sets with UNION, INTERSECT, and EXCEPT.",
    keyFunctions: [
      {
        name: "CREATE VIEW",
        explanation: "Store a query as a virtual table you can SELECT from later.",
      },
      {
        name: "UNION / UNION ALL",
        explanation: "Stack rows from multiple SELECTs (with or without deduping).",
      },
      {
        name: "INTERSECT / EXCEPT",
        explanation: "Keep shared rows or rows present only in the first set.",
      },
    ],
    topics: {
      "sql-m8-t1": "Understand views as saved queries (virtual tables).",
      "sql-m8-t2": "Create and query views like regular tables.",
      "sql-m8-t3": "Learn set operations for combining result sets.",
      "sql-m8-t4": "Stack results with UNION and UNION ALL.",
      "sql-m8-t5": "Keep rows that appear in both sets with INTERSECT.",
      "sql-m8-t6": "Keep rows only in the first set with EXCEPT.",
    },
  },

  "common-table-expressions": {
    overview:
      "Write clearer multi-step SQL with WITH clauses. Chain CTEs, combine them with joins/aggregates, and learn recursive CTEs for hierarchies.",
    keyFunctions: [
      {
        name: "WITH … AS",
        explanation: "Name a temporary result set for the rest of the query.",
      },
      {
        name: "Multiple CTEs",
        explanation: "Chain several named steps in one readable query.",
      },
      {
        name: "WITH RECURSIVE",
        explanation: "Walk trees and hierarchies (for example org charts).",
      },
    ],
    topics: {
      "sql-m9-t1": "Introduce CTEs and why WITH improves readability.",
      "sql-m9-t2": "Compare CTEs to nested subqueries and choose wisely.",
      "sql-m9-t3": "Chain multiple CTEs in a single query.",
      "sql-m9-t4": "Use CTEs with JOINs and aggregates for multi-step analysis.",
      "sql-m9-t5": "Learn the idea behind recursive CTEs for hierarchical data.",
      "sql-m9-t6": "Walk an employee hierarchy recursively in the Northwind sample.",
    },
  },
};

export const MODULE_GUIDES: Record<string, ModuleGuide> = {
  ...PYTHON_MODULE_GUIDES,
  ...SQL_MODULE_GUIDES,
};

export function getModuleGuide(moduleSlug: string): ModuleGuide | undefined {
  return MODULE_GUIDES[moduleSlug];
}

export function getTopicExplanation(
  moduleSlug: string,
  topicId: string,
  fallback: string
): string {
  return MODULE_GUIDES[moduleSlug]?.topics[topicId] ?? fallback;
}
