"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/admin";
import { Loader2 } from "lucide-react";

function AuthSpinner() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export function RequireAdmin({ children }: { children: ReactNode }) {
  const { user, profile, loading, profileLoading, configured } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || loading || profileLoading) return;
    if (!configured) return;
    if (!user) {
      router.replace(`/admin/login`);
      return;
    }
    if (!isAdmin(profile)) {
      router.replace("/dashboard");
    }
  }, [
    user,
    profile,
    loading,
    profileLoading,
    configured,
    router,
    mounted,
  ]);

  if (!mounted || loading || profileLoading) {
    return <AuthSpinner />;
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-xl font-semibold text-gray-900">Configuration required</h1>
        <p className="mt-3 text-sm text-gray-600">
          Set Supabase environment variables to enable the admin console.
        </p>
      </div>
    );
  }

  if (!user || !isAdmin(profile)) {
    return <AuthSpinner />;
  }

  return <>{children}</>;
}