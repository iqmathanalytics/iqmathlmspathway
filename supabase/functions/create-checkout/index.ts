const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

/** Amount in paise (₹1 = 100 paise). Default ₹999. */
function getAmountPaise(): number {
  const fromPaise = Deno.env.get("RAZORPAY_AMOUNT_PAISE");
  if (fromPaise) {
    const n = Number.parseInt(fromPaise, 10);
    if (Number.isFinite(n) && n > 0) return n;
  }
  const fromInr = Deno.env.get("RAZORPAY_AMOUNT_INR");
  if (fromInr) {
    const n = Number.parseFloat(fromInr);
    if (Number.isFinite(n) && n > 0) return Math.round(n * 100);
  }
  return 99900;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const keyId = Deno.env.get("RAZORPAY_KEY_ID");
    const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET");
    if (!keyId || !keySecret) {
      return new Response(JSON.stringify({ error: "Razorpay not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2.49.1");
    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userError } = await userClient.auth.getUser();
    if (userError || !userData.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const amount = getAmountPaise();
    const receipt = `iq_${userData.user.id.replace(/-/g, "").slice(0, 20)}_${Date.now().toString(36)}`.slice(0, 40);

    const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`${keyId}:${keySecret}`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt,
        notes: {
          user_id: userData.user.id,
          product: "practice_premium",
        },
      }),
    });

    const order = await orderRes.json();
    if (!orderRes.ok) {
      return new Response(
        JSON.stringify({
          error: order?.error?.description ?? order?.error?.reason ?? "Razorpay order failed",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        keyId,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency ?? "INR",
        product: "practice_premium",
        name: "IQmath Technologies",
        description: "Practice Premium — one-time unlock",
        prefill: {
          email: userData.user.email ?? "",
        },
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
