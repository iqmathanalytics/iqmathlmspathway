import type { PracticeTest } from "@/lib/types";
import { loadPyodideRuntime } from "@/lib/pyodide-runtime";

export interface TestRunResult {
  testId: string;
  label: string;
  passed: boolean;
  expected?: string;
  actual?: string;
  error?: string;
}

function normalizeStdout(s: string): string {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

async function runSingleTest(
  userCode: string,
  test: PracticeTest
): Promise<TestRunResult> {
  const pyodide = await loadPyodideRuntime();
  let stdout = "";

  // Use write (not batched) so newlines between print() calls are preserved.
  pyodide.setStdout({
    write: (buffer: Uint8Array) => {
      stdout += new TextDecoder().decode(buffer);
      return buffer.length;
    },
  });
  pyodide.setStderr({
    write: (buffer: Uint8Array) => buffer.length,
  });

  const parts: string[] = [];
  if (test.setup) parts.push(test.setup);
  parts.push(userCode);
  if (test.assertCode) parts.push(test.assertCode);

  try {
    await pyodide.runPythonAsync(parts.join("\n\n"));
    const actual = normalizeStdout(stdout);

    if (test.expectedStdout !== undefined) {
      const expected = normalizeStdout(test.expectedStdout);
      const passed = actual === expected;
      return {
        testId: test.id,
        label: test.label,
        passed,
        expected,
        actual,
        error: passed ? undefined : actual !== expected ? "Output does not match expected." : undefined,
      };
    }

    return { testId: test.id, label: test.label, passed: true, actual };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return {
      testId: test.id,
      label: test.label,
      passed: false,
      expected: test.expectedStdout,
      actual: normalizeStdout(stdout) || undefined,
      error: msg,
    };
  }
}

export async function runPublicTests(
  userCode: string,
  tests: PracticeTest[]
): Promise<{ allPassed: boolean; results: TestRunResult[] }> {
  const results: TestRunResult[] = [];
  for (const test of tests) {
    results.push(await runSingleTest(userCode, test));
  }
  return {
    allPassed: results.every((r) => r.passed),
    results,
  };
}

export interface GradeSubmissionResponse {
  passed: boolean;
  testsRun: number;
  testsPassed: number;
  message?: string;
}

export async function submitForGrading(
  problemId: string,
  code: string,
  accessToken: string
): Promise<GradeSubmissionResponse> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) {
    return { passed: false, testsRun: 0, testsPassed: 0, message: "Supabase not configured" };
  }

  try {
    const res = await fetch(`${url}/functions/v1/grade-submission`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ problemId, code }),
    });

    const data = (await res.json()) as GradeSubmissionResponse & { error?: string };
    if (!res.ok) {
      return {
        passed: false,
        testsRun: 0,
        testsPassed: 0,
        message: data.error ?? data.message ?? "Grading failed",
      };
    }
    return data;
  } catch {
    return {
      passed: false,
      testsRun: 0,
      testsPassed: 0,
      message:
        "Grading service unavailable. Deploy the grade-submission Edge Function in Supabase (see supabase/SETUP.md).",
    };
  }
}
