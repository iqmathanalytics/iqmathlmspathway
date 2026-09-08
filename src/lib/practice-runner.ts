import type { PracticeTest } from "@/lib/types";
import { loadPyodideRuntime, runPythonWithLock } from "@/lib/pyodide-runtime";

export interface TestRunResult {
  testId: string;
  label: string;
  passed: boolean;
  /** Revealed to the user only when the test fails. */
  input?: string;
  expected?: string;
  actual?: string;
  error?: string;
}

function normalizeStdout(s: string): string {
  return s.replace(/\r\n/g, "\n").trimEnd();
}

/** Pull Expected/Got from assert messages like: Expected 'a', got 'b' */
function parseAssertExpectedActual(message: string): {
  expected?: string;
  actual?: string;
} {
  const patterns = [
    /Expected\s+([\s\S]+?),\s*got\s+([\s\S]+?)(?:\s*$)/i,
    /AssertionError:\s*Expected\s+([\s\S]+?),\s*got\s+([\s\S]+?)(?:\s*$)/i,
  ];
  for (const re of patterns) {
    const m = message.match(re);
    if (m) {
      return {
        expected: m[1]?.trim(),
        actual: m[2]?.trim(),
      };
    }
  }
  return {};
}

async function runSingleTest(
  userCode: string,
  test: PracticeTest
): Promise<TestRunResult> {
  let stdout = "";

  const parts: string[] = [];
  if (test.setup) parts.push(test.setup);
  parts.push(userCode);
  if (test.assertCode) parts.push(test.assertCode);

  try {
    // Runtime is cached; do not re-import Pyodide per test.
    const pyodide = await loadPyodideRuntime();
    await runPythonWithLock(pyodide, parts.join("\n\n"), {
      onStdout: (chunk) => {
        stdout += chunk;
      },
      stdinLines: test.stdin
        ? test.stdin.replace(/\r\n/g, "\n").split("\n")
        : undefined,
    });

    const actual = normalizeStdout(stdout);
    const input = test.stdin;

    if (test.expectedStdout !== undefined) {
      const expected = normalizeStdout(test.expectedStdout);
      const passed = actual === expected;
      return {
        testId: test.id,
        label: test.label,
        passed,
        ...(passed
          ? {}
          : {
              input,
              expected,
              actual,
              error: "Output does not match expected.",
            }),
      };
    }

    if (test.assertCode) {
      return { testId: test.id, label: test.label, passed: true };
    }

    return {
      testId: test.id,
      label: test.label,
      passed: false,
      input,
      actual,
      error: "Test is missing expectedStdout or assertCode.",
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const fromAssert = parseAssertExpectedActual(msg);
    return {
      testId: test.id,
      label: test.label,
      passed: false,
      input: test.stdin,
      expected: test.expectedStdout ?? fromAssert.expected,
      actual: normalizeStdout(stdout) || fromAssert.actual || undefined,
      error: msg,
    };
  }
}

export async function runPublicTests(
  userCode: string,
  tests: PracticeTest[]
): Promise<{ allPassed: boolean; results: TestRunResult[] }> {
  // Warm the shared runtime once before the test loop.
  await loadPyodideRuntime();

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
