"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import clsx from "clsx";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
import type { CollegeRow } from "@/lib/types";

export const OTHER_COLLEGE_VALUE = "__other__";

interface CollegeComboboxProps {
  colleges: CollegeRow[];
  value: string;
  onChange: (value: string) => void;
  loading?: boolean;
  disabled?: boolean;
  required?: boolean;
  /** Allow "Others" for custom college name entry. */
  allowOther?: boolean;
  placeholder?: string;
  className?: string;
  id?: string;
  /** Empty option label when value is "". */
  emptyLabel?: string;
}

function collegeLabel(c: CollegeRow) {
  return c.city ? `${c.name} — ${c.city}` : c.name;
}

export function CollegeCombobox({
  colleges,
  value,
  onChange,
  loading = false,
  disabled = false,
  required = false,
  allowOther = false,
  placeholder = "Search and select college…",
  className,
  id,
  emptyLabel = "Select college",
}: CollegeComboboxProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);

  const selected = useMemo(() => {
    if (!value || value === OTHER_COLLEGE_VALUE) return null;
    return colleges.find((c) => c.id === value) ?? null;
  }, [colleges, value]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return colleges;
    return colleges.filter((c) => {
      const hay = `${c.name} ${c.city} ${c.code}`.toLowerCase();
      return hay.includes(q);
    });
  }, [colleges, query]);

  const options = useMemo(() => {
    const rows: Array<{ id: string; label: string; sub?: string }> = [];
    if (!required) {
      rows.push({ id: "", label: emptyLabel });
    }
    for (const c of filtered) {
      rows.push({
        id: c.id,
        label: c.name,
        sub: c.city || undefined,
      });
    }
    if (allowOther) {
      rows.push({
        id: OTHER_COLLEGE_VALUE,
        label: "Others",
        sub: "Enter college name manually",
      });
    }
    return rows;
  }, [filtered, allowOther, required, emptyLabel]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setHighlight(0);
  }, []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) close();
    }
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      setHighlight(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(
      `[data-option-index="${highlight}"]`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [highlight, open]);

  function select(id: string) {
    onChange(id);
    close();
  }

  function onKeyDown(e: KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, Math.max(options.length - 1, 0)));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const opt = options[highlight];
      if (opt) select(opt.id);
    }
  }

  const display =
    value === OTHER_COLLEGE_VALUE
      ? "Others"
      : selected
        ? collegeLabel(selected)
        : "";

  return (
    <div ref={rootRef} className={clsx("relative", className)}>
      <button
        type="button"
        id={id}
        disabled={disabled || loading}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          if (disabled || loading) return;
          setOpen((o) => !o);
        }}
        onKeyDown={onKeyDown}
        className={clsx(
          "flex w-full items-center gap-2 rounded-lg border bg-white px-3 py-2.5 text-left text-sm transition-colors",
          "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
          open
            ? "border-brand-500 ring-2 ring-brand-500/20"
            : "border-gray-300 hover:border-gray-400",
          (disabled || loading) && "cursor-not-allowed bg-gray-50 opacity-70"
        )}
      >
        <Search className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
        <span
          className={clsx(
            "min-w-0 flex-1 truncate",
            display ? "font-medium text-gray-900" : "text-gray-500"
          )}
        >
          {loading ? "Loading colleges…" : display || placeholder}
        </span>
        {value && !disabled && (
          <span
            role="button"
            tabIndex={-1}
            aria-label="Clear college"
            className="rounded p-0.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
              close();
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <X className="h-3.5 w-3.5" />
          </span>
        )}
        <ChevronsUpDown className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
      </button>

      {required && (
        <input
          tabIndex={-1}
          aria-hidden
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          value={value}
          onChange={() => {}}
          required
        />
      )}

      {open && (
        <div
          className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl ring-1 ring-black/5"
          role="listbox"
          id={listId}
        >
          <div className="sticky top-0 z-10 border-b border-gray-100 bg-white p-2">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-2 focus-within:border-brand-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-500/20">
              <Search className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setHighlight(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Type to search colleges…"
                className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                aria-label="Search colleges"
                autoComplete="off"
              />
              {query && (
                <button
                  type="button"
                  className="rounded p-0.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          <ul
            ref={listRef}
            className="max-h-64 overflow-y-auto overscroll-contain py-1 [scrollbar-width:thin]"
          >
            {options.length === 0 ? (
              <li className="px-3 py-6 text-center text-sm text-gray-500">
                No colleges match “{query.trim()}”
              </li>
            ) : (
              options.map((opt, i) => {
                const active = opt.id === value;
                const focused = i === highlight;
                return (
                  <li key={`${opt.id || "empty"}-${i}`}>
                    <button
                      type="button"
                      role="option"
                      data-option-index={i}
                      aria-selected={active}
                      className={clsx(
                        "flex w-full items-start gap-2 px-3 py-2.5 text-left text-sm transition-colors",
                        focused && "bg-brand-50",
                        active && !focused && "bg-brand-50/50",
                        !focused && !active && "hover:bg-gray-50"
                      )}
                      onMouseEnter={() => setHighlight(i)}
                      onClick={() => select(opt.id)}
                    >
                      <Check
                        className={clsx(
                          "mt-0.5 h-4 w-4 shrink-0",
                          active ? "text-brand-600 opacity-100" : "opacity-0"
                        )}
                        aria-hidden
                      />
                      <span className="min-w-0 flex-1">
                        <span
                          className={clsx(
                            "block text-gray-900",
                            active ? "font-semibold" : "font-medium"
                          )}
                        >
                          {opt.label}
                        </span>
                        {opt.sub && (
                          <span className="mt-0.5 block text-xs text-gray-500">
                            {opt.sub}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
          <div className="border-t border-gray-100 bg-gray-50/80 px-3 py-1.5 text-[11px] text-gray-500">
            {filtered.length} college{filtered.length === 1 ? "" : "s"}
            {query.trim() ? " found" : " available"}
            {allowOther ? " · Others at bottom" : ""}
          </div>
        </div>
      )}
    </div>
  );
}
