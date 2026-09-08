"use client";

import { FormEvent, useState } from "react";
import { useColleges } from "@/hooks/useColleges";
import { getSupabase } from "@/lib/supabase/client";
import { schemaMissing } from "@/lib/admin";
import type { CollegeRow } from "@/lib/types";
import { Loader2, Pencil, Plus } from "lucide-react";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

export default function AdminCollegesPage() {
  const { colleges, loading, error, refresh } = useColleges(true);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [editing, setEditing] = useState<CollegeRow | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const sb = getSupabase();
    if (!sb) return;
    const trimmed = name.trim();
    if (!trimmed) {
      setFormError("College name is required.");
      return;
    }
    setSaving(true);
    setFormError(null);
    const payload = { name: trimmed, code: code.trim(), city: city.trim() };
    const result = editing
      ? await sb.from("colleges").update(payload).eq("id", editing.id)
      : await sb.from("colleges").insert(payload);
    setSaving(false);
    if (result.error) {
      setFormError(result.error.message);
      return;
    }
    setName("");
    setCode("");
    setCity("");
    setEditing(null);
    await refresh();
  }

  async function toggleArchive(college: CollegeRow) {
    const sb = getSupabase();
    if (!sb) return;
    await sb.from("colleges").update({ archived: !college.archived }).eq("id", college.id);
    await refresh();
  }

  function startEdit(college: CollegeRow) {
    setEditing(college);
    setName(college.name);
    setCode(college.code);
    setCity(college.city);
  }

  if (schemaMissing({ message: error ?? undefined }) && error) {
    return (
      <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Run <code className="rounded bg-white px-1">supabase/RUN_ADMIN.sql</code> in the SQL Editor.
      </p>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
      <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="flex items-center gap-2 font-semibold text-gray-900">
          {editing ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {editing ? "Edit college" : "Add college"}
        </h2>
        <div className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Code</label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. IITM"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} />
          </div>
        </div>
        {formError && <p className="mt-3 text-sm text-red-600">{formError}</p>}
        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            {editing ? "Save" : "Add"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setName("");
                setCode("");
                setCity("");
              }}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {loading ? (
          <div className="flex justify-center p-10">
            <Loader2 className="h-6 w-6 animate-spin text-brand-600" />
          </div>
        ) : colleges.length === 0 ? (
          <p className="p-6 text-sm text-gray-500">No colleges yet. Add the first one.</p>
        ) : (
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">College</th>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {colleges.map((c) => (
                <tr key={c.id} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {c.name}
                    {c.archived && (
                      <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                        archived
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{c.code || "—"}</td>
                  <td className="px-4 py-3 text-gray-600">{c.city || "—"}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(c)}
                      className="mr-2 text-sm font-medium text-brand-700 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => void toggleArchive(c)}
                      className="text-sm font-medium text-gray-500 hover:underline"
                    >
                      {c.archived ? "Restore" : "Archive"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}