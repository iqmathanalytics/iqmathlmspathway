const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function escapeIlike(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/%/g, "\\%").replace(/_/g, "\\_");
}

// deno-lint-ignore no-explicit-any
async function resolveCollegeId(
  admin: any,
  collegeId: string,
  collegeName: string
): Promise<{ id: string; error?: string }> {
  if (collegeId && UUID_RE.test(collegeId)) {
    const { data, error } = await admin
      .from("colleges")
      .select("id")
      .eq("id", collegeId)
      .maybeSingle();
    if (error) return { id: "", error: error.message };
    if (!data?.id) return { id: "", error: "Selected college was not found." };
    return { id: data.id as string };
  }

  if (!collegeName) return { id: "" };

  const { data: existing, error: findError } = await admin
    .from("colleges")
    .select("id")
    .ilike("name", escapeIlike(collegeName))
    .limit(1)
    .maybeSingle();

  if (findError) return { id: "", error: findError.message };
  if (existing?.id) return { id: existing.id as string };

  const { data: inserted, error: insertError } = await admin
    .from("colleges")
    .insert({ name: collegeName, code: "", city: "" })
    .select("id")
    .single();

  if (insertError) {
    if (insertError.code === "23505" || /duplicate|unique/i.test(insertError.message ?? "")) {
      const { data: raced } = await admin
        .from("colleges")
        .select("id")
        .ilike("name", escapeIlike(collegeName))
        .limit(1)
        .maybeSingle();
      if (raced?.id) return { id: raced.id as string };
    }
    return { id: "", error: insertError.message };
  }

  if (!inserted?.id) return { id: "", error: "Could not create college." };
  return { id: inserted.id as string };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const body = (await req.json()) as {
      email?: string;
      password?: string;
      fullName?: string;
      mobile?: string;
      collegeId?: string | null;
      collegeName?: string | null;
      department?: string;
    };

    const email = body.email?.trim().toLowerCase() ?? "";
    const password = body.password ?? "";
    const fullName = body.fullName?.trim() ?? "";
    const mobile = body.mobile?.trim() ?? "";
    const collegeId = body.collegeId?.trim() ?? "";
    const collegeName = body.collegeName?.trim() ?? "";
    const department = body.department?.trim() ?? "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Enter a valid email address." }, 400);
    }
    if (password.length < 8) {
      return json({ error: "Password must be at least 8 characters." }, 400);
    }
    if (!fullName) {
      return json({ error: "Full name is required." }, 400);
    }
    if (mobile.length < 8) {
      return json({ error: "Enter a valid mobile number." }, 400);
    }
    if (!department) {
      return json({ error: "Department is required." }, 400);
    }
    if (collegeName && collegeName.length < 2) {
      return json({ error: "Enter a valid college name." }, 400);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      return json({ error: "Registration service is not configured." }, 500);
    }

    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2.49.1");
    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const resolved = await resolveCollegeId(admin, collegeId, collegeName);
    if (resolved.error) {
      return json({ error: resolved.error }, 400);
    }

    const { error } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        mobile,
        college_id: resolved.id,
        department,
      },
    });

    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("already") || msg.includes("registered")) {
        return json({ error: "An account with this email already exists. Try signing in." }, 409);
      }
      return json({ error: error.message }, 400);
    }

    return json({ success: true });
  } catch {
    return json({ error: "Registration failed. Please try again." }, 500);
  }
});
