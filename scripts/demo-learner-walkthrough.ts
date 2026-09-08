/**
 * Create a demo learner, enroll in published courses, validate content,
 * mark all modules/quizzes/practice complete, and write a full report.
 *
 * Run: npx tsx scripts/demo-learner-walkthrough.ts
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createClient } from "@supabase/supabase-js";
import { getModulesByCourse } from "../src/data/curriculum";
import { getLesson } from "../src/data/lessons";
import { getQuiz, hasQuiz } from "../src/data/quizzes";
import { getAllPracticeProblems, getProblemsByTopic } from "../src/data/practice";
import { getPythonPracticeProblems } from "../src/data/python-practice";
import { getPythonBasicsProblems } from "../src/data/python-basics";
import type { CourseId, PracticeProblem } from "../src/lib/types";
import { ALL_COURSE_IDS, courseShortName } from "../src/data/courses";

const DEMO = {
  email: "demo.learner@iqmath.test",
  password: "Demo@12345",
  fullName: "Demo Learner",
  mobile: "9999990001",
  department: "Computer Science and Engineering",
};

type Issue = {
  area: string;
  severity: "error" | "warn";
  id?: string;
  message: string;
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

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function normalizeStdout(s: string) {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

function runPython(code: string, stdin = "") {
  const r = spawnSync("python", ["-c", code], {
    input: stdin,
    encoding: "utf8",
    timeout: 15000,
    maxBuffer: 4_000_000,
    windowsHide: true,
  });
  return {
    ok: r.status === 0,
    stdout: normalizeStdout(r.stdout || ""),
    stderr: (r.stderr || "").trim(),
    status: r.status,
  };
}

function buildRunnableSolution(problem: PracticeProblem) {
  const starter = problem.starterCode || "";
  const solution = problem.solutionCode || "";
  if (!solution.trim()) return solution;

  if (/^class\s+(ListNode|TreeNode|Node)\b/m.test(solution)) {
    return solution;
  }

  const defNames = [...solution.matchAll(/^def\s+(\w+)/gm)].map((m) => m[1]);
  if (defNames.length === 0) return solution;

  let cut = starter.length;
  for (const name of defNames) {
    const re = new RegExp(`^def\\s+${name}\\b`, "m");
    const m = re.exec(starter);
    if (m && m.index < cut) cut = m.index;
  }
  return `${starter.slice(0, cut)}${solution}`;
}

function validatePracticeProblem(problem: PracticeProblem, track: string): Issue[] {
  const issues: Issue[] = [];
  if (!problem.publicTests?.length) {
    issues.push({
      area: `practice:${track}`,
      severity: "error",
      id: problem.id,
      message: "No publicTests",
    });
    return issues;
  }
  if (!problem.solutionCode?.trim()) {
    // Curriculum challenge bank often ships tests + hints only (no official solution).
    if (track === "curriculum") {
      issues.push({
        area: `practice:${track}`,
        severity: "warn",
        id: problem.id,
        message: "No solutionCode — cannot auto-grade; marked attended only",
      });
      return issues;
    }
    issues.push({
      area: `practice:${track}`,
      severity: "error",
      id: problem.id,
      message: "Missing solutionCode",
    });
    return issues;
  }
  const solution = buildRunnableSolution(problem);
  const tests = problem.publicTests ?? [];

  for (const test of tests) {
    const parts: string[] = [];
    if (test.setup) parts.push(test.setup);
    parts.push(solution);
    if (test.assertCode) parts.push(test.assertCode);
    const code = parts.join("\n\n");
    const stdin = test.stdin ? test.stdin.replace(/\r\n/g, "\n") : "";
    const res = runPython(code, stdin);

    if (test.expectedStdout !== undefined) {
      const expected = normalizeStdout(test.expectedStdout);
      if (!res.ok) {
        issues.push({
          area: `practice:${track}`,
          severity: "error",
          id: problem.id,
          message: `${test.label}: runtime error — ${res.stderr || res.stdout || `exit ${res.status}`}`,
        });
      } else if (res.stdout !== expected) {
        issues.push({
          area: `practice:${track}`,
          severity: "error",
          id: problem.id,
          message: `${test.label}: stdout mismatch expected=${JSON.stringify(expected)} actual=${JSON.stringify(res.stdout)}`,
        });
      }
      continue;
    }

    if (!res.ok) {
      issues.push({
        area: `practice:${track}`,
        severity: "error",
        id: problem.id,
        message: `${test.label}: ${res.stderr || res.stdout || `exit ${res.status}`}`,
      });
    }
  }
  return issues;
}

async function main() {
  const env = loadEnv();
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) throw new Error("Missing Supabase env in .env.local");

  const issues: Issue[] = [];
  const report: Record<string, unknown> = {
    generatedAt: new Date().toISOString(),
    demoAccount: { email: DEMO.email, password: DEMO.password, fullName: DEMO.fullName },
  };

  // ── Admin session ──────────────────────────────────────────────────────────
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
    throw new Error(`Admin login failed: ${adminAuth.error_description || adminAuth.msg || JSON.stringify(adminAuth)}`);
  }
  const admin = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${adminAuth.access_token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // ── Published courses ──────────────────────────────────────────────────────
  const { data: settings, error: settingsErr } = await admin
    .from("course_settings")
    .select("course_id, published");
  if (settingsErr) {
    issues.push({ area: "courses", severity: "error", message: settingsErr.message });
  }
  const publishedIds = (settings ?? [])
    .filter((r) => r.published)
    .map((r) => r.course_id as CourseId)
    .filter((id) => ALL_COURSE_IDS.includes(id));
  const unpublishedIds = ALL_COURSE_IDS.filter((id) => !publishedIds.includes(id));

  report.courses = {
    published: publishedIds.map((id) => ({ id, name: courseShortName(id) })),
    unpublished: unpublishedIds.map((id) => ({ id, name: courseShortName(id) })),
  };

  if (publishedIds.length === 0) {
    issues.push({
      area: "courses",
      severity: "error",
      message: "No published courses — cannot enroll demo learner.",
    });
  }

  // ── College for signup ─────────────────────────────────────────────────────
  const { data: colleges } = await admin.from("colleges").select("id, name").limit(1);
  const collegeId = colleges?.[0]?.id ?? "";
  if (!collegeId) {
    issues.push({
      area: "signup",
      severity: "warn",
      message: "No colleges found; registering with empty collegeId.",
    });
  }

  // ── Create or sign in demo user ────────────────────────────────────────────
  let demoUserId: string | null = null;
  let createdNew = false;

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

  if (registerRes.ok && registerBody.success) {
    createdNew = true;
  } else if (registerRes.status === 409 || String(registerBody.error || "").toLowerCase().includes("already")) {
    createdNew = false;
  } else {
    issues.push({
      area: "signup",
      severity: "error",
      message: `register-user failed (${registerRes.status}): ${registerBody.error || JSON.stringify(registerBody)}`,
    });
  }

  const studentAuth = await (
    await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { apikey: anon, "Content-Type": "application/json" },
      body: JSON.stringify({ email: DEMO.email, password: DEMO.password }),
    })
  ).json();

  if (!studentAuth.access_token || !studentAuth.user?.id) {
    issues.push({
      area: "signup",
      severity: "error",
      message: `Demo sign-in failed: ${studentAuth.error_description || studentAuth.msg || JSON.stringify(studentAuth)}`,
    });
    report.account = { createdNew, ok: false };
    writeReport(report, issues);
    process.exit(1);
  }

  demoUserId = studentAuth.user.id as string;
  report.account = {
    createdNew,
    ok: true,
    userId: demoUserId,
    email: DEMO.email,
    password: DEMO.password,
  };

  const student = createClient(url, anon, {
    global: { headers: { Authorization: `Bearer ${studentAuth.access_token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // Sync profile mobile if RPC exists
  await student.rpc("sync_login_profile", { p_mobile: DEMO.mobile }).then(
    () => undefined,
    () => undefined
  );

  // ── Enroll in published courses ────────────────────────────────────────────
  // Signup trigger enrolls published courses. Admin upsert has no UPDATE policy —
  // insert only missing rows.
  const { data: alreadyEnrolled } = await admin
    .from("enrollments")
    .select("course_id")
    .eq("user_id", demoUserId!);
  const have = new Set((alreadyEnrolled ?? []).map((r) => r.course_id as string));
  const missing = publishedIds.filter((id) => !have.has(id));
  if (missing.length) {
    const { error: enrollErr } = await admin.from("enrollments").insert(
      missing.map((course_id) => ({ user_id: demoUserId!, course_id }))
    );
    if (enrollErr) {
      issues.push({ area: "enrollment", severity: "error", message: enrollErr.message });
    }
  }

  const { data: enrolled } = await admin
    .from("enrollments")
    .select("course_id")
    .eq("user_id", demoUserId!);
  report.enrollments = (enrolled ?? []).map((r) => r.course_id);
  for (const id of publishedIds) {
    if (!(report.enrollments as string[]).includes(id)) {
      issues.push({
        area: "enrollment",
        severity: "error",
        id,
        message: "Published course not enrolled after signup/insert",
      });
    }
  }

  // Premium so order>5 practice is accessible in UI (insert-only; no update policy)
  const { data: existingEnt } = await admin
    .from("entitlements")
    .select("product")
    .eq("user_id", demoUserId!)
    .eq("product", "practice_premium")
    .maybeSingle();
  if (!existingEnt) {
    const { error: entErr } = await admin.from("entitlements").insert({
      user_id: demoUserId!,
      product: "practice_premium",
    });
    if (entErr) {
      issues.push({
        area: "entitlements",
        severity: "warn",
        message: `Could not grant practice_premium: ${entErr.message}`,
      });
    }
  }

  // ── Content validation + attend published courses only ─────────────────────
  const contentSummary: Record<string, unknown> = {};
  const lessonRows: Record<string, unknown>[] = [];
  const practiceIdsToSolve = new Set<string>();

  for (const courseId of publishedIds) {
    const mods = getModulesByCourse(courseId);
    const topics = mods.flatMap((m) =>
      m.topics.filter((t) => t.published).map((t) => ({ module: m, topic: t }))
    );

    let lessonsOk = 0;
    let quizzesOk = 0;
    let quizzesMissing = 0;
    let quizQuestions = 0;
    let practiceLinked = 0;

    for (const { module: mod, topic } of topics) {
      const lesson = getLesson(topic.id);
      if (!lesson) {
        issues.push({
          area: `lesson:${courseId}`,
          severity: "error",
          id: topic.id,
          message: `Missing lesson content (${mod.slug}/${topic.slug})`,
        });
      } else if (!lesson.blocks?.length) {
        issues.push({
          area: `lesson:${courseId}`,
          severity: "warn",
          id: topic.id,
          message: "Lesson has zero blocks",
        });
      } else {
        lessonsOk += 1;
      }

      let quizScore = 0;
      let quizAttempted = false;
      if (hasQuiz(topic.id)) {
        const quiz = getQuiz(topic.id);
        if (!quiz) {
          issues.push({
            area: `quiz:${courseId}`,
            severity: "error",
            id: topic.id,
            message: "hasQuiz true but getQuiz returned undefined",
          });
        } else if (!quiz.questions?.length) {
          issues.push({
            area: `quiz:${courseId}`,
            severity: "error",
            id: topic.id,
            message: "Quiz has no questions",
          });
        } else {
          let quizValid = true;
          for (const q of quiz.questions) {
            quizQuestions += 1;
            if (!q.question?.trim()) {
              quizValid = false;
              issues.push({
                area: `quiz:${courseId}`,
                severity: "error",
                id: `${topic.id}/${q.id}`,
                message: "Empty question text",
              });
            }
            if (!Array.isArray(q.options) || q.options.length < 2) {
              quizValid = false;
              issues.push({
                area: `quiz:${courseId}`,
                severity: "error",
                id: `${topic.id}/${q.id}`,
                message: "Need at least 2 options",
              });
            } else if (
              typeof q.correctIndex !== "number" ||
              q.correctIndex < 0 ||
              q.correctIndex >= q.options.length
            ) {
              quizValid = false;
              issues.push({
                area: `quiz:${courseId}`,
                severity: "error",
                id: `${topic.id}/${q.id}`,
                message: `Invalid correctIndex=${q.correctIndex}`,
              });
            }
          }
          if (quizValid) {
            quizzesOk += 1;
            quizScore = 100;
            quizAttempted = true;
          } else {
            quizAttempted = true;
            quizScore = 0;
          }
        }
      } else {
        quizzesMissing += 1;
        issues.push({
          area: `quiz:${courseId}`,
          severity: "warn",
          id: topic.id,
          message: "No quiz for published topic",
        });
      }

      const topicProblems = getProblemsByTopic(topic.id);
      practiceLinked += topicProblems.length;
      for (const p of topicProblems) practiceIdsToSolve.add(p.id);

      lessonRows.push({
        user_id: demoUserId,
        topic_id: topic.id,
        completed: true,
        quiz_score: quizScore,
        quiz_attempted: quizAttempted,
        ide_ran: true,
        last_visited_at: new Date().toISOString(),
      });
    }

    contentSummary[courseId] = {
      modules: mods.length,
      topics: topics.length,
      lessonsPresent: lessonsOk,
      quizzesValid: quizzesOk,
      topicsWithoutQuiz: quizzesMissing,
      quizQuestions,
      curriculumPracticeProblems: practiceLinked,
    };
  }

  report.content = contentSummary;

  // Standalone practice tracks (available site-wide, tied to Python learning)
  const curriculumProblems = getAllPracticeProblems().filter((p) =>
    practiceIdsToSolve.has(p.id)
  );
  const basicsProblems = getPythonBasicsProblems();
  const algoProblems = getPythonPracticeProblems();

  const practiceValidation = {
    curriculum: { total: curriculumProblems.length, passed: 0, failed: 0 },
    basics: { total: basicsProblems.length, passed: 0, failed: 0 },
    algorithms: { total: algoProblems.length, passed: 0, failed: 0 },
  };

  console.log(
    `Validating practice solutions: curriculum=${curriculumProblems.length}, basics=${basicsProblems.length}, algorithms=${algoProblems.length}…`
  );

  let curriculumNoSolution = 0;
  for (const p of curriculumProblems) {
    const fails = validatePracticeProblem(p, "curriculum");
    const hard = fails.filter((f) => f.severity === "error");
    const soft = fails.filter((f) => f.severity === "warn");
    issues.push(...fails);
    if (soft.some((s) => s.message.includes("No solutionCode"))) curriculumNoSolution += 1;
    if (hard.length) practiceValidation.curriculum.failed += 1;
    else practiceValidation.curriculum.passed += 1;
    practiceIdsToSolve.add(p.id);
  }
  (practiceValidation.curriculum as Record<string, number>).noSolutionCode =
    curriculumNoSolution;
  for (const p of basicsProblems) {
    const fails = validatePracticeProblem(p, "basics");
    if (fails.length) {
      practiceValidation.basics.failed += 1;
      issues.push(...fails);
    } else {
      practiceValidation.basics.passed += 1;
    }
    practiceIdsToSolve.add(p.id);
  }
  for (const p of algoProblems) {
    const fails = validatePracticeProblem(p, "algorithms");
    if (fails.length) {
      practiceValidation.algorithms.failed += 1;
      issues.push(...fails);
    } else {
      practiceValidation.algorithms.passed += 1;
    }
    practiceIdsToSolve.add(p.id);
  }

  report.practiceValidation = practiceValidation;

  // ── Upsert progress ────────────────────────────────────────────────────────
  // Live DB may not have migration 006 flags yet — fall back like progress-service.
  const fullLessonRows = lessonRows;
  const baseLessonRows = lessonRows.map((r) => ({
    user_id: r.user_id,
    topic_id: r.topic_id,
    completed: r.completed,
    quiz_score: r.quiz_score,
    last_visited_at: r.last_visited_at,
  }));

  let lessonsUpserted = 0;
  let lessonFlagColumns = true;
  for (const batch of chunk(fullLessonRows, 100)) {
    const { error } = await student.from("lesson_progress").upsert(batch, {
      onConflict: "user_id,topic_id",
    });
    if (error && /ide_ran|quiz_attempted|column/i.test(error.message)) {
      lessonFlagColumns = false;
      break;
    }
    if (error) {
      issues.push({
        area: "progress:lessons",
        severity: "error",
        message: error.message,
      });
    } else {
      lessonsUpserted += batch.length;
    }
  }
  if (!lessonFlagColumns) {
    issues.push({
      area: "progress:lessons",
      severity: "warn",
      message:
        "DB missing ide_ran/quiz_attempted columns — wrote completed + quiz_score only. Run supabase/migrations/006_lesson_progress_flags.sql",
    });
    lessonsUpserted = 0;
    for (const batch of chunk(baseLessonRows, 100)) {
      const { error } = await student.from("lesson_progress").upsert(batch, {
        onConflict: "user_id,topic_id",
      });
      if (error) {
        issues.push({
          area: "progress:lessons",
          severity: "error",
          message: error.message,
        });
      } else {
        lessonsUpserted += batch.length;
      }
    }
  }
  report.lessonProgressMode = lessonFlagColumns ? "full-flags" : "legacy-columns";

  const now = new Date().toISOString();
  const practiceRows = [...practiceIdsToSolve].map((problem_id) => ({
    user_id: demoUserId!,
    problem_id,
    status: "solved" as const,
    code_draft: "",
    public_passed: true,
    hidden_passed: true,
    submitted_at: now,
    updated_at: now,
  }));

  let practiceUpserted = 0;
  for (const batch of chunk(practiceRows, 100)) {
    const { error } = await student.from("practice_progress").upsert(batch, {
      onConflict: "user_id,problem_id",
    });
    if (error) {
      issues.push({
        area: "progress:practice",
        severity: "error",
        message: error.message,
      });
    } else {
      practiceUpserted += batch.length;
    }
  }

  // Verify counts
  const { count: completedLessons } = await student
    .from("lesson_progress")
    .select("topic_id", { count: "exact", head: true })
    .eq("user_id", demoUserId!)
    .eq("completed", true);

  let quizzesAttempted: number | null = null;
  if (lessonFlagColumns) {
    const q = await student
      .from("lesson_progress")
      .select("topic_id", { count: "exact", head: true })
      .eq("user_id", demoUserId!)
      .eq("quiz_attempted", true);
    quizzesAttempted = q.count ?? 0;
  } else {
    const { data: rows } = await student
      .from("lesson_progress")
      .select("topic_id, quiz_score")
      .eq("user_id", demoUserId!);
    quizzesAttempted = (rows ?? []).filter((r) => (r.quiz_score ?? 0) > 0).length;
  }

  const { count: practiceSolved } = await student
    .from("practice_progress")
    .select("problem_id", { count: "exact", head: true })
    .eq("user_id", demoUserId!)
    .eq("status", "solved");

  report.progressWritten = {
    lessonsUpserted,
    practiceUpserted,
    verified: {
      lessonsCompleted: completedLessons ?? 0,
      quizzesAttempted: quizzesAttempted ?? 0,
      practiceSolved: practiceSolved ?? 0,
    },
  };

  // Collapse noisy per-problem missing-solution warnings into a summary for readability
  const noSol = issues.filter(
    (i) => i.area === "practice:curriculum" && i.message.includes("No solutionCode")
  );
  const otherIssues = issues.filter((i) => !noSol.includes(i));
  if (noSol.length) {
    otherIssues.push({
      area: "practice:curriculum",
      severity: "warn",
      message: `${noSol.length} curriculum practice problems have no solutionCode (cannot auto-grade official answers). Demo progress still marked solved.`,
    });
  }
  issues.length = 0;
  issues.push(...otherIssues);

  const errors = issues.filter((i) => i.severity === "error");
  const warns = issues.filter((i) => i.severity === "warn");
  report.issueSummary = {
    errors: errors.length,
    warnings: warns.length,
  };
  report.issues = issues;

  writeReport(report, issues);

  console.log("\n=== DEMO WALKTHROUGH SUMMARY ===");
  console.log(`Account: ${DEMO.email} / ${DEMO.password} (${createdNew ? "created" : "reused"})`);
  console.log(`User ID: ${demoUserId}`);
  console.log(`Published enrolled: ${(report.enrollments as string[]).join(", ") || "(none)"}`);
  console.log(`Unpublished (skipped): ${unpublishedIds.join(", ")}`);
  console.log(`Lessons completed: ${completedLessons}`);
  console.log(`Quizzes attempted: ${quizzesAttempted}`);
  console.log(`Practice solved: ${practiceSolved}`);
  console.log(
    `Practice validation — curriculum ${practiceValidation.curriculum.passed}/${practiceValidation.curriculum.total}, basics ${practiceValidation.basics.passed}/${practiceValidation.basics.total}, algorithms ${practiceValidation.algorithms.passed}/${practiceValidation.algorithms.total}`
  );
  console.log(`Errors: ${errors.length} | Warnings: ${warns.length}`);
  if (errors.length) {
    console.log("\nTop errors:");
    for (const e of errors.slice(0, 25)) {
      console.log(`- [${e.area}] ${e.id ?? ""} ${e.message}`);
    }
    if (errors.length > 25) console.log(`… and ${errors.length - 25} more`);
  }
}

function writeReport(report: Record<string, unknown>, issues: Issue[]) {
  const outPath = path.join("scripts", "demo-learner-report.json");
  fs.writeFileSync(outPath, JSON.stringify({ ...report, issues }, null, 2));
  console.log(`\nFull report written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
