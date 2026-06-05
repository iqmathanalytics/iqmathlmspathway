"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { PAGE_CONTAINER } from "@/lib/layout";
import { useEntitlements } from "@/hooks/useEntitlements";
import { Loader2, Lock } from "lucide-react";

export default function CheckoutPage() {
  const { session, configured } = useAuth();
  const { hasPremium, loading } = useEntitlements();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const priceLabel = process.env.NEXT_PUBLIC_STRIPE_PRICE_LABEL ?? "Unlock all practice";

  async function handleCheckout() {
    if (!session?.access_token) return;
    setBusy(true);
    setError(null);

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url) {
      setError("Supabase is not configured.");
      setBusy(false);
      return;
    }

    const res = await fetch(`${url}/functions/v1/create-checkout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    const data = await res.json();
    if (!res.ok || !data.url) {
      setError(data.error ?? "Could not start checkout.");
      setBusy(false);
      return;
    }

    window.location.href = data.url;
  }

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (hasPremium) {
    return (
      <div className={`${PAGE_CONTAINER} py-16 text-center`}>
        <h1 className="text-2xl font-bold text-gray-900">Already unlocked</h1>
        <p className="mt-2 text-gray-600">You have access to all premium practice problems.</p>
        <Link href="/practice" className="mt-6 inline-block text-brand-700 hover:underline">
          Go to practice
        </Link>
      </div>
    );
  }

  return (
    <div className={`${PAGE_CONTAINER} py-16`}>
      <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <Lock className="mx-auto h-10 w-10 text-brand-600" />
        <h1 className="mt-4 text-center text-2xl font-bold text-gray-900">Practice Premium</h1>
        <p className="mt-3 text-center text-sm text-gray-600">
          One-time payment unlocks all premium practice problems across every module and topic.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-gray-700">
          <li>• Problems 6+ in each topic</li>
          <li>• Hidden test validation on submit</li>
          <li>• Progress synced to your account</li>
          <li>• Lifetime access — no subscription</li>
        </ul>
        <p className="mt-6 text-center text-lg font-semibold text-gray-900">{priceLabel}</p>
        {error && <p className="mt-3 text-center text-sm text-red-600">{error}</p>}
        <button
          type="button"
          onClick={handleCheckout}
          disabled={busy || !configured}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Pay with Stripe
        </button>
        <Link
          href="/practice"
          className="mt-4 block text-center text-sm text-gray-500 hover:text-brand-700"
        >
          Back to practice
        </Link>
      </div>
    </div>
  );
}
