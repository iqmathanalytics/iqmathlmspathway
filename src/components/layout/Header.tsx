"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, LayoutDashboard, Route, Terminal } from "lucide-react";
import clsx from "clsx";
import { PLATFORM_NAME } from "@/data/curriculum";
import { AuthNav } from "@/components/layout/AuthNav";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learn", label: "Learning Path", icon: Route },
  { href: "/practice", label: "Practice", icon: Terminal },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-python-blue to-brand-600 text-sm text-white">
            Py
          </span>
          <span>{PLATFORM_NAME}</span>
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map(({ href, label, icon: Icon }) => {
            const isActive = mounted && (pathname === href || pathname.startsWith(`${href}/`));
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-50 text-brand-800"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{label}</span>
              </Link>
            );
          })}
          <AuthNav />
        </nav>
      </div>
    </header>
  );
}
