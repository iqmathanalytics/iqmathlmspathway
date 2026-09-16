/**
 * Create / refresh the IQ demo learner: all courses enrolled, premium granted.
 * Content locks are also bypassed in the app for this email (unlocksAllContent).
 *
 * Run: npx tsx scripts/create-iqdemo-account.ts
 */
import fs from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { ALL_COURSE_IDS } from "../src/data/courses";

const DEMO = {
  email: "Iqdemo@gmail.com",
  password: "IQdemo@123",
  fullName: "IQ Demo",
  mobile: "9876500001",
  department: "Demo",
};

function loadEnv() {
  const vars: Record<string, string> = {};
  const raw = fs.readFileSync(".env.local", "utf8").replace(/^\uFEFF/, "");
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i < 0) continue;
    vars[t.slice(0, i)] = t.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return vars;
}

async function main() {
  const env = loadEnv();
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) throw new Error("Missing Supabase env in .env.local");

  const adminAuth = await (
    await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { apikey: anon, "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "iqmathanalytics@gmail.com",
        password: "admin@1234",
      }),
    })
  ).json();
  if (!adminAuth.access_token) {
    throw new Error(
      `Admin login failed: ${adminAuth.error_description || adminAuth.msg || JSON.stringify(adminAuth)}`
    );
  }
  const admin = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${adminAuth.access_token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: colleges } = await admin.from("colleges").select("id, name").limit(1);
  const collegeId = colleges?.[0]?.id ?? "";

  const registerRes = await fetch(`${url}/functions/v1/register-user`, {
    method: "POST",
    headers: {
      apikey: anon,
      Authorization: `Bearer ${anon}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: DEMO.email,
      password: DEMO.password,
      fullName: DEMO.fullName,
      mobile: DEMO.mobile,
      collegeId,
      department: DEMO.department,
    }),
  });
  const registerBody = await registerRes.json().catch(() => ({}));
  const createdNew = registerRes.ok && registerBody.success;
  if (
    !createdNew &&
    registerRes.status !== 409 &&
    !String(registerBody.error || "").toLowerCase().includes("already")
  ) {
    console.warn(
      `register-user: ${registerRes.status} ${registerBody.error || JSON.stringify(registerBody)}`
    );
  }

  const studentAuth = await (
    await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { apikey: anon, "Content-Type": "application/json" },
      body: JSON.stringify({ email: DEMO.email, password: DEMO.password }),
    })
  ).json();

  if (!studentAuth.access_token || !studentAuth.user?.id) {
    throw new Error(
      `Demo sign-in failed: ${studentAuth.error_description || studentAuth.msg || JSON.stringify(studentAuth)}`
    );
  }

  const userId = studentAuth.user.id as string;

  await admin
    .from("profiles")
    .update({
      full_name: DEMO.fullName,
      email: DEMO.email.toLowerCase(),
      is_active: true,
    })
    .eq("id", userId);

  const { data: alreadyEnrolled } = await admin
    .from("enrollments")
    .select("course_id")
    .eq("user_id", userId);
  const have = new Set((alreadyEnrolled ?? []).map((r) => r.course_id as string));
  const missing = ALL_COURSE_IDS.filter((id) => !have.has(id));
  if (missing.length) {
    const { error: enrollErr } = await admin.from("enrollments").insert(
      missing.map((course_id) => ({ user_id: userId, course_id }))
    );
    if (enrollErr) throw new Error(`Enrollment failed: ${enrollErr.message}`);
  }

  const { data: existingEnt } = await admin
    .from("entitlements")
    .select("product")
    .eq("user_id", userId)
    .eq("product", "practice_premium")
    .maybeSingle();
  if (!existingEnt) {
    const { error: entErr } = await admin.from("entitlements").insert({
      user_id: userId,
      product: "practice_premium",
    });
    if (entErr) throw new Error(`Premium grant failed: ${entErr.message}`);
  }

  const { data: enrolled } = await admin
    .from("enrollments")
    .select("course_id")
    .eq("user_id", userId);

  console.log(
    JSON.stringify(
      {
        createdNew,
        userId,
        email: DEMO.email,
        password: DEMO.password,
        enrollments: (enrolled ?? []).map((r) => r.course_id),
        premium: true,
        login: "http://localhost:3000/auth/login",
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
