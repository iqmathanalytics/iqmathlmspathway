"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Client redirect for static export (next/navigation redirect is unreliable offline). */
export function ClientRedirect({ href }: { href: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <p className="p-8 text-sm text-gray-600">
      Redirecting to{" "}
      <a href={href} className="font-medium text-brand-700 underline">
        {href}
      </a>
      …
    </p>
  );
}
