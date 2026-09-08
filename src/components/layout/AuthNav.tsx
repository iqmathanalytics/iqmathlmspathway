"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, LayoutDashboard, LogOut, Shield, Sparkles, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEntitlements } from "@/hooks/useEntitlements";
import { isAdmin } from "@/lib/admin";

/** Auth buttons — client-only to avoid server/client HTML mismatch from session restore. */
export function AuthNav() {
  const router = useRouter();
  const { user, profile, loading, configured, signOut } = useAuth();
  const { hasPremium } = useEntitlements();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const admin = isAdmin(profile);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSignOut() {
    await signOut();
    setMenuOpen(false);
    router.push("/");
  }

  if (!mounted || loading) {
    return <div className="ml-2 h-9 w-24 shrink-0" aria-hidden />;
  }

  if (configured && user) {
    const displayName = profile?.full_name?.trim() || user.email?.split("@")[0] || "Account";

    return (
      <div className="ml-1 flex min-w-0 shrink-0 items-center gap-1.5 sm:ml-2 sm:gap-2">
        {!hasPremium && !admin && (
          <Link
            href="/checkout"
            className="hidden items-center gap-1.5 rounded-lg bg-amber-500 px-2.5 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600 sm:inline-flex"
          >
            <Sparkles className="h-4 w-4 shrink-0" />
            <span className="hidden lg:inline">Unlock Premium</span>
          </Link>
        )}
        <div className="relative min-w-0">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            title={displayName}
            className="flex max-w-[9.5rem] items-center gap-1.5 rounded-lg border border-gray-200 px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 sm:max-w-[11rem] sm:px-3 md:max-w-[14rem]"
          >
            <User className="h-4 w-4 shrink-0" />
            <span className="min-w-0 truncate">{displayName}</span>
          </button>
          {menuOpen && (
            <div className="absolute right-0 z-50 mt-1 w-56 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-slate-600 dark:bg-slate-900">
              <div className="border-b border-gray-100 px-3 py-2 dark:border-slate-700">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-slate-100" title={displayName}>
                  {displayName}
                </p>
                {user.email && (
                  <p className="truncate text-xs text-gray-500 dark:text-slate-400" title={user.email}>
                    {user.email}
                  </p>
                )}
              </div>
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <User className="h-4 w-4 shrink-0" />
                Profile
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <LayoutDashboard className="h-4 w-4 shrink-0" />
                Dashboard
              </Link>
              {admin && (
                <Link
                  href="/admin"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <Shield className="h-4 w-4 shrink-0" />
                  Admin
                </Link>
              )}
              <button
                type="button"
                onClick={handleSignOut}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <LogOut className="h-4 w-4 shrink-0" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="ml-2 flex items-center gap-2">
      <Link
        href="/auth/login"
        className="hidden rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:inline"
      >
        Sign in
      </Link>
      <Link
        href="/auth/register"
        className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
      >
        <BookOpen className="h-4 w-4" />
        <span className="hidden sm:inline">Register</span>
      </Link>
    </div>
  );
}