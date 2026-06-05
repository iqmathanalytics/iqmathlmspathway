import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

Deno.serve(async (req) => {
  const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  if (!stripeKey || !webhookSecret) {
    return new Response("Stripe not configured", { status: 500 });
  }

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("No signature", { status: 400 });

  // Verify webhook via Stripe API (minimal HMAC check)
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(webhookSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const parts = sig.split(",").reduce(
    (acc, part) => {
      const [k, v] = part.split("=");
      if (k === "t") acc.t = v;
      if (k === "v1") acc.v1 = v;
      return acc;
    },
    { t: "", v1: "" } as { t: string; v1: string }
  );

  const signedPayload = `${parts.t}.${body}`;
  const expectedSig = await crypto.subtle.sign(
    "HMAC",
    cryptoKey,
    new TextEncoder().encode(signedPayload)
  );
  const expectedHex = Array.from(new Uint8Array(expectedSig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (expectedHex !== parts.v1) {
    return new Response("Invalid signature", { status: 400 });
  }

  const event = JSON.parse(body);
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata?.user_id ?? session.client_reference_id;
    const product = session.metadata?.product ?? "practice_premium";

    if (userId) {
      const admin = createClient(supabaseUrl, serviceKey);
      await admin.from("entitlements").upsert(
        {
          user_id: userId,
          product,
          stripe_payment_intent: session.payment_intent ?? session.id,
          purchased_at: new Date().toISOString(),
        },
        { onConflict: "user_id,product" }
      );
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
