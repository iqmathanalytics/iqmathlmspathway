"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { isAccountDisabled } from "@/lib/admin";
import { Loader2 } from "lucide-react";

function AuthSpinner() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export function RequireAuth({ children }: { children: ReactNode }) {
  const { user, profile, loading, profileLoading, configured, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || loading) return;
    if (!configured) return;
    if (!user) {
      const next = encodeURIComponent(pathname + (searchParams.toString() ? `?${searchParams}` : ""));
      router.replace(`/auth/login?next=${next}`);
    }
  }, [user, loading, configured, router, pathname, searchParams, mounted]);

  if (!mounted || loading || (user && profileLoading)) {
    return <AuthSpinner />;
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-xl font-semibold text-gray-900">Configuration required</h1>
        <p className="mt-3 text-sm text-gray-600">
          Set <code className="rounded bg-gray-100 px-1">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="rounded bg-gray-100 px-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to enable
          accounts and progress sync.
        </p>
      </div>
    );
  }

  if (!user) {
    return <AuthSpinner />;
  }

  if (isAccountDisabled(profile)) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-xl font-semibold text-gray-900">Account disabled</h1>
        <p className="mt-3 text-sm text-gray-600">
          This account is inactive. Contact your administrator if you need access.
        </p>
        <button
          type="button"
          onClick={() => void signOut().then(() => router.push("/auth/login"))}
          className="mt-6 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Sign out
        </button>
      </div>
    );
  }

  return <>{children}</>;
}