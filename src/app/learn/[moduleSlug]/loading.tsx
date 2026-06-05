import { Loader2 } from "lucide-react";
import { PAGE_CONTAINER } from "@/lib/layout";

export default function ModuleLoading() {
  return (
    <div className={`${PAGE_CONTAINER} flex min-h-[50vh] flex-col items-center justify-center py-16`}>
      <Loader2 className="h-10 w-10 animate-spin text-brand-600" />
      <p className="mt-4 text-sm font-medium text-gray-600">Loading module…</p>
    </div>
  );
}
