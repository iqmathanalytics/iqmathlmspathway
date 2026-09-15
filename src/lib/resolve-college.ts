import type { SupabaseClient } from "@supabase/supabase-js";
import {
  findCatalogCollege,
  isCatalogCollegeId,
  nameFromCatalogCollegeId,
} from "@/data/tamil-nadu-colleges";

/**
 * Resolve a combobox value (UUID or catalog:*) to a real colleges.id.
 * Creates the college row when selecting a catalog entry not yet in the DB.
 */
export async function resolveCollegeIdForProfile(
  sb: SupabaseClient,
  value: string
): Promise<{ id: string | null; error?: string }> {
  const trimmed = value.trim();
  if (!trimmed) return { id: null };

  if (!isCatalogCollegeId(trimmed)) {
    return { id: trimmed };
  }

  const name = nameFromCatalogCollegeId(trimmed);
  if (!name) return { id: null, error: "Invalid college selection." };

  const catalog = findCatalogCollege(name);
  const city = catalog?.city ?? "";

  const { data: existing, error: findError } = await sb
    .from("colleges")
    .select("id")
    .ilike("name", name)
    .limit(1)
    .maybeSingle();

  if (findError) return { id: null, error: findError.message };
  if (existing?.id) return { id: existing.id as string };

  const { data: inserted, error: insertError } = await sb
    .from("colleges")
    .insert({ name, code: "", city, archived: false })
    .select("id")
    .single();

  if (insertError) {
    if (/duplicate|unique|23505/i.test(insertError.message)) {
      const { data: raced } = await sb
        .from("colleges")
        .select("id")
        .ilike("name", name)
        .limit(1)
        .maybeSingle();
      if (raced?.id) return { id: raced.id as string };
    }
    return {
      id: null,
      error:
        insertError.message.includes("policy") ||
        insertError.message.includes("permission")
          ? "Could not save college. Ask an admin to run SEED_TAMIL_NADU_COLLEGES.sql."
          : insertError.message,
    };
  }

  return { id: (inserted?.id as string) ?? null };
}
