"use client";

import { Suspense, type ReactNode } from "react";
import { RequireAuth } from "@/components/auth/RequireAuth";
import { Loader2 } from "lucide-react";

function AuthFallback() {
  return (
    <div className="flex min-h-[40vh] flex-1 items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<AuthFallback />}>
      <RequireAuth>
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      </RequireAuth>
    </Suspense>
  );
}
