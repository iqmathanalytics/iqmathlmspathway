import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const JUDGE0_URL = "https://ce.judge0.com";
/** Python 3.11 on Judge0 CE — public, no API key required for light use */
const PYTHON_LANGUAGE_ID = 92;

interface HiddenTest {
  setup?: string;
  assertCode?: string;
  expectedStdout?: string;
}

interface TestsJson {
  tests: HiddenTest[];
}

async function runPython(code: string): Promise<{ ok: boolean; stdout: string; stderr: string }> {
  const res = await fetch(`${JUDGE0_URL}/submissions?wait=true`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source_code: code,
      language_id: PYTHON_LANGUAGE_ID,
    }),
  });

  if (!res.ok) {
    return { ok: false, stdout: "", stderr: `Runner HTTP ${res.status}` };
  }

  const data = await res.json();
  const stdout = data.stdout ?? "";
  const stderr = data.stderr ?? "";
  const ok = data.status?.id === 3;
  return { ok, stdout, stderr };
}

function normalize(s: string): string {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

async function gradeTest(userCode: string, test: HiddenTest): Promise<boolean> {
  const parts: string[] = [];
  if (test.setup) parts.push(test.setup);
  parts.push(userCode);
  if (test.assertCode) parts.push(test.assertCode);
  const fullCode = parts.join("\n\n");

  const { ok, stdout } = await runPython(fullCode);
  if (!ok) return false;

  if (test.expectedStdout !== undefined) {
    return normalize(stdout) === normalize(test.expectedStdout);
  }
  return true;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { problemId, code } = await req.json();
    if (!problemId || typeof code !== "string") {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const admin = createClient(supabaseUrl, serviceKey);
    const { data: hiddenRow, error: hiddenError } = await admin
      .from("practice_hidden_tests")
      .select("tests_json")
      .eq("problem_id", problemId)
      .maybeSingle();

    if (hiddenError || !hiddenRow) {
      return new Response(JSON.stringify({ error: "No hidden tests for this problem" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const testsJson = hiddenRow.tests_json as TestsJson;
    const tests = testsJson.tests ?? [];
    let passed = 0;

    for (const test of tests) {
      const ok = await gradeTest(code, test);
      if (ok) passed += 1;
    }

    const allPassed = passed === tests.length && tests.length > 0;

    await admin.from("practice_progress").upsert(
      {
        user_id: userData.user.id,
        problem_id: problemId,
        code_draft: code,
        status: allPassed ? "solved" : "attempted",
        public_passed: allPassed,
        hidden_passed: allPassed,
        submitted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,problem_id" }
    );

    return new Response(
      JSON.stringify({
        passed: allPassed,
        testsRun: tests.length,
        testsPassed: passed,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
