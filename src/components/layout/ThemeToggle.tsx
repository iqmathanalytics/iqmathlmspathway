"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

/** Light / Dark switch for the whole site (persisted via next-themes). */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const active = mounted ? (resolvedTheme ?? theme ?? "light") : "light";

  return (
    <div
      className={clsx(
        "ml-1 flex shrink-0 items-center rounded-lg border p-0.5",
        "border-brand-100 bg-brand-50/50 dark:border-slate-600 dark:bg-slate-800/80"
      )}
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        disabled={!mounted}
        className={clsx(
          "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-semibold transition-colors",
          active === "light"
            ? "bg-[#ffffff] text-brand-800 shadow-sm"
            : "text-slate-500 hover:text-brand-800 dark:text-slate-400 dark:hover:text-slate-100"
        )}
        aria-pressed={active === "light"}
        title="Light theme"
      >
        <Sun className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Light</span>
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        disabled={!mounted}
        className={clsx(
          "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-semibold transition-colors",
          active === "dark"
            ? "bg-slate-900 text-white shadow-sm"
            : "text-slate-500 hover:text-brand-800 dark:text-slate-400 dark:hover:text-slate-100"
        )}
        aria-pressed={active === "dark"}
        title="Dark theme"
      >
        <Moon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Dark</span>
      </button>
    </div>
  );
}
