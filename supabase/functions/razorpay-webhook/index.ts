import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

async function hmacSha256Hex(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req) => {
  const webhookSecret = Deno.env.get("RAZORPAY_WEBHOOK_SECRET");
  const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET");
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  const verifySecret = webhookSecret || keySecret;
  if (!verifySecret) {
    return new Response("Razorpay not configured", { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature");
  if (!signature) {
    return new Response("No signature", { status: 400 });
  }

  const expected = await hmacSha256Hex(verifySecret, body);
  if (expected !== signature) {
    return new Response("Invalid signature", { status: 400 });
  }

  const event = JSON.parse(body);
  const eventType = event?.event as string | undefined;

  // Prefer payment.captured; order.paid is also fine as a backup.
  if (eventType === "payment.captured" || eventType === "order.paid") {
    const payment = event?.payload?.payment?.entity;
    const order = event?.payload?.order?.entity;

    const userId =
      payment?.notes?.user_id ??
      order?.notes?.user_id ??
      null;
    const product =
      payment?.notes?.product ??
      order?.notes?.product ??
      "practice_premium";
    const paymentId = payment?.id ?? null;
    const orderId = payment?.order_id ?? order?.id ?? null;

    if (userId && (paymentId || orderId)) {
      const admin = createClient(supabaseUrl, serviceKey);
      await admin.from("entitlements").upsert(
        {
          user_id: userId,
          product,
          razorpay_payment_id: paymentId,
          razorpay_order_id: orderId,
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
