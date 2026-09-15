"use client";

import { useCallback, useEffect, useState } from "react";
import type { CollegeRow } from "@/lib/types";
import { getSupabase } from "@/lib/supabase/client";
import {
  TAMIL_NADU_COLLEGES,
  catalogCollegeId,
} from "@/data/tamil-nadu-colleges";

function mergeCatalog(dbColleges: CollegeRow[]): CollegeRow[] {
  const byName = new Map<string, CollegeRow>();
  for (const c of dbColleges) {
    byName.set(c.name.trim().toLowerCase(), c);
  }
  for (const cat of TAMIL_NADU_COLLEGES) {
    const key = cat.name.trim().toLowerCase();
    if (byName.has(key)) {
      const existing = byName.get(key)!;
      if (!existing.city && cat.city) {
        byName.set(key, { ...existing, city: cat.city });
      }
      continue;
    }
    byName.set(key, {
      id: catalogCollegeId(cat.name),
      name: cat.name,
      code: "",
      city: cat.city,
      archived: false,
      created_at: "",
    });
  }
  return [...byName.values()].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
}

export function useColleges(
  includeArchived = false,
  options?: { includeCatalog?: boolean }
) {
  const includeCatalog = options?.includeCatalog !== false;
  const [colleges, setColleges] = useState<CollegeRow[]>(() =>
    includeCatalog ? mergeCatalog([]) : []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const finalize = (rows: CollegeRow[]) =>
      includeCatalog ? mergeCatalog(rows) : rows;

    const sb = getSupabase();
    if (!sb) {
      setColleges(finalize([]));
      setLoading(false);
      return;
    }
    setLoading(true);
    let query = sb.from("colleges").select("*").order("name");
    if (!includeArchived) query = query.eq("archived", false);
    const { data, error: qError } = await query;
    if (qError) {
      setError(qError.message);
      setColleges(finalize([]));
    } else {
      setError(null);
      setColleges(finalize((data ?? []) as CollegeRow[]));
    }
    setLoading(false);
  }, [includeArchived, includeCatalog]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { colleges, loading, error, refresh };
}
