"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { PAGE_CONTAINER } from "@/lib/layout";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

export default function ForgotPasswordPage() {
  const { requestPasswordReset, configured } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await requestPasswordReset(email);
    setLoading(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setSent(true);
  }

  return (
    <div className={`${PAGE_CONTAINER} py-16`}>
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Reset password</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your account email and we will send a reset link.
        </p>

        {!configured && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Supabase is not configured. Add environment variables to enable password reset.
          </p>
        )}

        {sent ? (
          <div className="mt-6 space-y-4">
            <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800">
              If an account exists for <strong>{email}</strong>, a reset link is on its way.
              Check your inbox and spam folder.
            </p>
            <Link
              href="/auth/login"
              className="inline-block text-sm font-medium text-brand-700 hover:underline"
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading || !configured}
              className="w-full rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send reset link"}
            </button>
          </form>
        )}

        {!sent && (
          <p className="mt-6 text-center text-sm text-gray-600">
            <Link href="/auth/login" className="font-medium text-brand-700 hover:underline">
              Back to sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
