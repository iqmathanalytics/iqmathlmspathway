/**
 * Checks that RUN_ADMIN.sql tables/RPCs exist. Does not print secrets.
 * Run: node scripts/verify-admin-schema.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, "..", ".env.local");

function loadEnv() {
  if (!fs.existsSync(envPath)) {
    console.error("Missing .env.local");
    process.exit(1);
  }
  const vars = {};
  const raw = fs.readFileSync(envPath, "utf8").replace(/^\uFEFF/, "");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    vars[trimmed.slice(0, eq)] = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
  }
  return vars;
}

const env = loadEnv();
const url = env.NEXT_PUBLIC_SUPABASE_URL;
const anon = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_EMAILS = [
  "jagathishwaranparthiban@gmail.com",
  "iqmathanalytics@gmail.com",
];

if (!url || !anon) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  process.exit(1);
}

function headers(key) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
  };
}

async function rest(key, table, query = "select=*") {
  const res = await fetch(`${url}/rest/v1/${table}?${query}`, { headers: headers(key) });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    json = text;
  }
  return { status: res.status, json };
}

const failures = [];

const settings = await rest(anon, "course_settings", "select=course_id,published");
if (settings.status !== 200 || !Array.isArray(settings.json)) {
  failures.push(`course_settings: HTTP ${settings.status} ${JSON.stringify(settings.json)}`);
} else {
  const ids = settings.json.map((r) => r.course_id).sort().join(",");
  const published = settings.json.filter((r) => r.published).length;
  console.log(`course_settings: ${settings.json.length} rows (${published} published) [${ids}]`);
  if (settings.json.length < 4) {
    failures.push("course_settings should have python, agentic-ai, sql, mba-ai");
  }
}

const colleges = await rest(anon, "colleges", "select=id,name,archived");
if (colleges.status !== 200 || !Array.isArray(colleges.json)) {
  failures.push(`colleges: HTTP ${colleges.status} ${JSON.stringify(colleges.json)}`);
} else {
  console.log(`colleges: ${colleges.json.length} visible to public/anon`);
}

const collegeCourses = await rest(anon, "college_courses", "select=college_id,course_id");
if (collegeCourses.status !== 200 || !Array.isArray(collegeCourses.json)) {
  failures.push(
    `college_courses: HTTP ${collegeCourses.status} — run supabase/RUN_COLLEGE_COURSES.sql (${JSON.stringify(collegeCourses.json)})`
  );
} else {
  console.log(`college_courses: ${collegeCourses.json.length} plan row(s)`);
}

const enrollments = await rest(anon, "enrollments", "select=user_id&limit=1");
if (enrollments.status === 200) {
  console.log("enrollments: reachable (anon may see 0 rows because of RLS)");
} else if (enrollments.status === 404) {
  failures.push("enrollments table missing");
} else {
  console.log(`enrollments: HTTP ${enrollments.status} (RLS/permission is OK if 401/403)`);
}

const rpc = await fetch(`${url}/rest/v1/rpc/sync_login_profile`, {
  method: "POST",
  headers: { ...headers(anon), "Content-Type": "application/json" },
  body: JSON.stringify({ p_mobile: "00000000" }),
});
const rpcText = await rpc.text();
if (rpc.status === 404 && /could not find the function/i.test(rpcText)) {
  failures.push("sync_login_profile RPC missing");
} else {
  console.log(`sync_login_profile RPC: HTTP ${rpc.status} (401/403 without user session is expected)`);
}

const specRes = await fetch(`${url}/rest/v1/`, {
  headers: { ...headers(anon), Accept: "application/openapi+json" },
});
if (specRes.ok) {
  const spec = await specRes.json();
  const defs = spec.definitions || spec.components?.schemas || {};
  const needed = {
    profiles: ["email", "role", "department", "college_id", "is_active", "mobile", "full_name"],
    colleges: ["name", "code", "city", "archived"],
    enrollments: ["user_id", "course_id"],
    course_settings: ["course_id", "published"],
    college_courses: ["college_id", "course_id"],
  };
  for (const [table, cols] of Object.entries(needed)) {
    const props = Object.keys(defs[table]?.properties ?? {});
    if (!props.length) {
      console.log(`openapi ${table}: not listed`);
      continue;
    }
    const missing = cols.filter((c) => !props.includes(c));
    if (missing.length) failures.push(`${table} missing columns: ${missing.join(", ")}`);
    else console.log(`openapi ${table}: ${cols.join(", ")} ok`);
  }
}

if (service) {
  for (const ADMIN_EMAIL of ADMIN_EMAILS) {
    const profiles = await rest(
      service,
      "profiles",
      `select=id,email,role,is_active,full_name,mobile,department,college_id&email=eq.${ADMIN_EMAIL}`
    );
    if (profiles.status !== 200) {
      failures.push(`admin profile lookup failed for ${ADMIN_EMAIL}: HTTP ${profiles.status}`);
    } else if (!Array.isArray(profiles.json) || profiles.json.length === 0) {
      console.log(
        `admin account: no profiles row for ${ADMIN_EMAIL} — run supabase/PROMOTE_TEMP_ADMIN.sql`
      );
    } else {
      const row = profiles.json[0];
      console.log(
        `admin account: role=${row.role} active=${row.is_active} email=${row.email} name=${row.full_name || "(empty)"}`
      );
      if (row.role !== "admin") {
        failures.push(`expected role=admin for ${ADMIN_EMAIL}, got ${row.role}`);
      }
    }
  }

  const cols = await rest(service, "profiles", "select=*&limit=1");
  if (cols.status === 200 && Array.isArray(cols.json) && cols.json[0]) {
    const keys = Object.keys(cols.json[0]);
    for (const col of ["email", "role", "department", "college_id", "is_active", "mobile", "full_name"]) {
      if (!keys.includes(col)) failures.push(`profiles missing column ${col}`);
    }
    console.log(`profiles columns ok: ${["email", "role", "department", "college_id", "is_active"].join(", ")}`);
  }

  const studentCount = await fetch(
    `${url}/rest/v1/profiles?role=eq.student&select=id`,
    { headers: { ...headers(service), Prefer: "count=exact", Range: "0-0" } }
  );
  const count = studentCount.headers.get("content-range");
  console.log(`students (role=student): ${count ?? studentCount.status}`);
} else {
  console.log("No SUPABASE_SERVICE_ROLE_KEY in .env.local — skipped admin-user and column checks");
}

if (failures.length) {
  console.error("\nFAILED:");
  for (const f of failures) console.error("-", f);
  process.exit(1);
}

console.log("\nAdmin schema check passed.");
