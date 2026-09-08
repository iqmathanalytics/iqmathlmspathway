"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/admin";
import { PAGE_CONTAINER } from "@/lib/layout";

export default function AdminLoginPage() {
  const { signIn, signOut, configured, user, profile, loading, profileLoading } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (loading || profileLoading) return;
    if (user && isAdmin(profile)) {
      router.replace("/admin");
    }
  }, [user, profile, loading, profileLoading, router]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const result = await signIn(email.trim(), password);
    if (result.error) {
      setSubmitting(false);
      setError(result.error);
      return;
    }
    if (!result.isAdmin) {
      await signOut();
      setSubmitting(false);
      setError("This account is not an administrator. Use the student sign-in page.");
      return;
    }
    router.push("/admin");
  }

  return (
    <div className={`${PAGE_CONTAINER} py-16`}>
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-2 text-brand-700">
          <Shield className="h-5 w-5" />
          <p className="text-sm font-semibold uppercase tracking-wide">Administrator</p>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">Admin sign in</h1>
        <p className="mt-2 text-sm text-gray-600">
          Sign in with your admin email and password to manage students, colleges, and courses.
        </p>

        {!configured && (
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Supabase is not configured. Add environment variables to enable admin login.
          </p>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Admin email</label>
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              minLength={8}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={submitting || !configured}
            className="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {submitting ? "Signing in…" : "Sign in to admin"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Student?{" "}
          <Link href="/auth/login" className="font-medium text-brand-700 hover:underline">
            Student sign in
          </Link>
        </p>
      </div>
    </div>
  );
}