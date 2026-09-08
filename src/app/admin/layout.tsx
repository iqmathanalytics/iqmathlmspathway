"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { RequireAdmin } from "@/components/auth/RequireAdmin";
import { AdminNav } from "./AdminNav";
import { PAGE_CONTAINER } from "@/lib/layout";
import { Loader2 } from "lucide-react";

function Fallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <Suspense fallback={<Fallback />}>
      <RequireAdmin>
        <div className={`${PAGE_CONTAINER} py-8`}>
          <h1 className="text-2xl font-bold text-gray-900">Admin</h1>
          <p className="mt-1 text-sm text-gray-600">
            Students, colleges, published courses, and progress.
          </p>
          <div className="mt-6">
            <AdminNav />
          </div>
          <div className="mt-8">{children}</div>
        </div>
      </RequireAdmin>
    </Suspense>
  );
}