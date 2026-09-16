import { redirect } from "next/navigation";

export const metadata = { title: "PAPC Quiz · Get Certified" };

/** Legacy URL — PAPC lives under /certification/papc. */
export default function LegacyCertificationQuizPage() {
  redirect("/certification/papc/quiz");
}
