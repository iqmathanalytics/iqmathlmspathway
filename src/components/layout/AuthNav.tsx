"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, LogOut, Sparkles, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEntitlements } from "@/hooks/useEntitlements";

/** Auth buttons — client-only to avoid server/client HTML mismatch from session restore. */
export function AuthNav() {
  const router = useRouter();
  const { user, profile, loading, configured, signOut } = useAuth();
  const { hasPremium } = useEntitlements();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    return (
      <div className="flex items-center gap-2 ml-2">
        {!hasPremium && (
          <Link
            href="/checkout"
            className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 text-sm font-medium text-white hover:bg-amber-600 transition-colors"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">Unlock Premium</span>
          </Link>
        )}
        <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <User className="h-4 w-4" />
          <span className="hidden max-w-[120px] truncate sm:inline">
            {profile?.full_name || user.email?.split("@")[0]}
          </span>
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-1 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <LogOut className="h-4 w-4" />
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
        className="hidden rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 sm:inline"
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
