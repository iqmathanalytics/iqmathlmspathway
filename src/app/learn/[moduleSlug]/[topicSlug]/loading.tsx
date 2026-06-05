import { PAGE_CONTAINER } from "@/lib/layout";

export default function TopicLoading() {
  return (
    <div className={`${PAGE_CONTAINER} animate-pulse py-10`}>
      <div className="h-4 w-48 rounded bg-gray-200" />
      <div className="mt-6 h-8 w-full max-w-xl rounded bg-gray-200" />
      <div className="mt-3 h-4 w-full max-w-2xl rounded bg-gray-100" />
      <div className="mt-2 h-4 w-4/5 max-w-xl rounded bg-gray-100" />
      <div className="mt-10 space-y-4">
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-5/6 rounded bg-gray-100" />
        <div className="h-32 w-full rounded-xl bg-gray-100" />
        <div className="h-4 w-full rounded bg-gray-100" />
        <div className="h-4 w-4/5 rounded bg-gray-100" />
      </div>
    </div>
  );
}
