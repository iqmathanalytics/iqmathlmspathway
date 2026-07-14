"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { PAGE_CONTAINER } from "@/lib/layout";
import { useEntitlements } from "@/hooks/useEntitlements";
import { Loader2, Lock } from "lucide-react";

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => RazorpayInstance;
  }
}

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id: string;
  prefill?: { email?: string; name?: string; contact?: string };
  theme?: { color?: string };
  handler: (response: RazorpaySuccessResponse) => void | Promise<void>;
  modal?: { ondismiss?: () => void };
}

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (response: { error?: { description?: string } }) => void) => void;
}

function loadRazorpayScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("No window"));
  if (window.Razorpay) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-razorpay="checkout"]');
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Failed to load Razorpay")));
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.dataset.razorpay = "checkout";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay"));
    document.body.appendChild(script);
  });
}

export default function CheckoutPage() {
  const router = useRouter();
  const { session, configured, profile } = useAuth();
  const { hasPremium, loading, refresh } = useEntitlements();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const priceLabel =
    process.env.NEXT_PUBLIC_RAZORPAY_PRICE_LABEL ?? "₹999 — one-time unlock";

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

    try {
      const res = await fetch(`${url}/functions/v1/create-checkout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const data = await res.json();
      if (!res.ok || !data.orderId || !data.keyId) {
        setError(data.error ?? "Could not start checkout.");
        setBusy(false);
        return;
      }

      await loadRazorpayScript();
      if (!window.Razorpay) {
        setError("Razorpay checkout failed to load.");
        setBusy(false);
        return;
      }

      const rzp = new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency ?? "INR",
        name: data.name ?? "IQmath Technologies",
        description: data.description ?? "Practice Premium",
        order_id: data.orderId,
        prefill: {
          email: data.prefill?.email ?? session.user?.email ?? "",
          name: profile?.full_name ?? "",
          contact: profile?.mobile ?? "",
        },
        theme: { color: "#0F75BD" },
        handler: async (response) => {
          try {
            const verifyRes = await fetch(`${url}/functions/v1/verify-payment`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${session.access_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              setError(verifyData.error ?? "Payment verification failed.");
              setBusy(false);
              return;
            }
            await refresh();
            router.push("/checkout/success");
          } catch {
            setError("Payment received but verification failed. Contact support if premium stays locked.");
            setBusy(false);
          }
        },
        modal: {
          ondismiss: () => setBusy(false),
        },
      });

      rzp.on("payment.failed", (response) => {
        setError(response.error?.description ?? "Payment failed. Please try again.");
        setBusy(false);
      });

      rzp.open();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not start checkout.");
      setBusy(false);
    }
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
        <p className="mt-1 text-center text-xs text-gray-500">Paid securely in INR via Razorpay</p>
        {error && <p className="mt-3 text-center text-sm text-red-600">{error}</p>}
        <button
          type="button"
          onClick={handleCheckout}
          disabled={busy || !configured || !session}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Pay with Razorpay
        </button>
        {!session && configured && (
          <p className="mt-3 text-center text-sm text-gray-600">
            <Link href="/auth/login?next=/checkout" className="text-brand-700 hover:underline">
              Sign in
            </Link>{" "}
            to purchase.
          </p>
        )}
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
