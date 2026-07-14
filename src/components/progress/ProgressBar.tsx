"use client";

interface ProgressBarProps {
  percent: number;
  label?: string;
  size?: "sm" | "md";
}

export function ProgressBar({ percent, label, size = "md" }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));
  const h = size === "sm" ? "h-1.5" : "h-2.5";

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 flex justify-between text-xs text-gray-600">
          <span>{label}</span>
          <span>{clamped}%</span>
        </div>
      )}
      <div className={`w-full overflow-hidden rounded-full bg-gray-200 ${h}`}>
        <div
          className={`${h} rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
