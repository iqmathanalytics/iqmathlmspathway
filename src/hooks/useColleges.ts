"use client";

import { useCallback, useEffect, useState } from "react";
import type { CollegeRow } from "@/lib/types";
import { getSupabase } from "@/lib/supabase/client";

export function useColleges(includeArchived = false) {
  const [colleges, setColleges] = useState<CollegeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) {
      setColleges([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    let query = sb.from("colleges").select("*").order("name");
    if (!includeArchived) query = query.eq("archived", false);
    const { data, error: qError } = await query;
    if (qError) {
      setError(qError.message);
      setColleges([]);
    } else {
      setError(null);
      setColleges((data ?? []) as CollegeRow[]);
    }
    setLoading(false);
  }, [includeArchived]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { colleges, loading, error, refresh };
}