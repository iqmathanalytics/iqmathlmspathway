"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, LayoutDashboard, Shield, Terminal } from "lucide-react";
import clsx from "clsx";
import { PLATFORM_LOGO, PLATFORM_NAME } from "@/data/platform";
import { AuthNav } from "@/components/layout/AuthNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/admin";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/practice", label: "Practice", icon: Terminal },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { profile } = useAuth();
  const admin = isAdmin(profile);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items =
    mounted && admin ? [...nav, { href: "/admin", label: "Admin", icon: Shield }] : nav;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-white/90 backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/90">
      <div className="flex h-14 w-full min-w-0 items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-semibold text-gray-900 dark:text-slate-100"
        >
          <Image
            src={PLATFORM_LOGO}
            alt={PLATFORM_NAME}
            width={180}
            height={48}
            className="h-7 w-auto sm:h-9 dark:brightness-110"
            priority
          />
          <span className="sr-only">{PLATFORM_NAME}</span>
        </Link>
        <nav className="flex min-w-0 flex-1 items-center justify-end gap-0.5 sm:gap-1">
          {items.map(({ href, label, icon: Icon }) => {
            const isActive = mounted && (pathname === href || pathname.startsWith(`${href}/`));
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium transition-colors sm:px-3",
                  isActive
                    ? "bg-brand-50 text-brand-800 dark:bg-brand-900/50 dark:text-brand-200"
                    : "text-gray-600 hover:bg-brand-50/60 hover:text-brand-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{label}</span>
              </Link>
            );
          })}
          <ThemeToggle />
          <AuthNav />
        </nav>
      </div>
    </header>
  );
}
