"use client";

import clsx from "clsx";

export type ChartDatum = {
  id: string;
  label: string;
  value: number;
  color?: string;
};

const PALETTE = [
  "#0f75bd",
  "#8cc63e",
  "#0ea5e9",
  "#f59e0b",
  "#14b8a6",
  "#64748b",
  "#ef4444",
  "#6366f1",
];

export function chartColor(index: number, fallback?: string): string {
  return fallback ?? PALETTE[index % PALETTE.length];
}

export function HorizontalBarChart({
  data,
  emptyLabel = "No data yet",
}: {
  data: ChartDatum[];
  emptyLabel?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);

  if (data.length === 0) {
    return <EmptyChart label={emptyLabel} />;
  }

  return (
    <ul className="space-y-3">
      {data.map((d, i) => {
        const pct = Math.round((d.value / max) * 100);
        const color = chartColor(i, d.color);
        return (
          <li key={d.id}>
            <div className="mb-1 flex items-center justify-between gap-3 text-sm">
              <span className="min-w-0 truncate font-medium text-gray-800" title={d.label}>
                {d.label}
              </span>
              <span className="shrink-0 tabular-nums text-gray-500">{d.value}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full transition-[width] duration-500"
                style={{ width: `${pct}%`, backgroundColor: color }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function AreaTrendChart({
  data,
  emptyLabel = "No signups in this period",
}: {
  data: ChartDatum[];
  emptyLabel?: string;
}) {
  if (data.length === 0) {
    return <EmptyChart label={emptyLabel} />;
  }

  const max = Math.max(...data.map((d) => d.value), 1);
  const width = 560;
  const height = 180;
  const padX = 12;
  const padY = 16;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;

  const points = data.map((d, i) => {
    const x = padX + (data.length === 1 ? plotW / 2 : (i / (data.length - 1)) * plotW);
    const y = padY + plotH - (d.value / max) * plotH;
    return { x, y, ...d };
  });

  const line = points.map((p) => `${p.x},${p.y}`).join(" ");
  const area = [
    `${points[0].x},${padY + plotH}`,
    ...points.map((p) => `${p.x},${p.y}`),
    `${points[points.length - 1].x},${padY + plotH}`,
  ].join(" ");

  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-44 w-full" role="img" aria-label="Signup trend">
        <defs>
          <linearGradient id="admin-trend-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f75bd" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0f75bd" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75, 1].map((t) => {
          const y = padY + plotH * (1 - t);
          return (
            <line
              key={t}
              x1={padX}
              x2={width - padX}
              y1={y}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          );
        })}
        <polygon points={area} fill="url(#admin-trend-fill)" />
        <polyline
          points={line}
          fill="none"
          stroke="#0f75bd"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {points.map((p) => (
          <circle key={p.id} cx={p.x} cy={p.y} r="3.5" fill="#0f75bd" />
        ))}
      </svg>
      <div className="mt-1 flex justify-between gap-2 text-[11px] text-gray-500">
        <span className="truncate">{data[0]?.label}</span>
        <span className="truncate text-right">{data[data.length - 1]?.label}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {data.slice(-6).map((d) => (
          <div key={d.id} className="rounded-lg bg-gray-50 px-2 py-1.5 text-center">
            <p className="truncate text-[10px] font-medium uppercase tracking-wide text-gray-500">
              {d.label}
            </p>
            <p className="text-sm font-semibold tabular-nums text-gray-900">{d.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DonutChart({
  data,
  centerLabel,
  centerValue,
  emptyLabel = "No data yet",
}: {
  data: ChartDatum[];
  centerLabel: string;
  centerValue: string;
  emptyLabel?: string;
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  if (total === 0 || data.length === 0) {
    return <EmptyChart label={emptyLabel} />;
  }

  const size = 160;
  const stroke = 22;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      <div className="relative shrink-0">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth={stroke}
          />
          {data.map((d, i) => {
            const portion = d.value / total;
            const dash = portion * circumference;
            const circle = (
              <circle
                key={d.id}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={chartColor(i, d.color)}
                strokeWidth={stroke}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
            offset += dash;
            return circle;
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-bold tabular-nums text-gray-900">{centerValue}</p>
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
            {centerLabel}
          </p>
        </div>
      </div>
      <ul className="w-full min-w-0 space-y-2">
        {data.map((d, i) => {
          const pct = Math.round((d.value / total) * 100);
          return (
            <li key={d.id} className="flex items-center gap-2 text-sm">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: chartColor(i, d.color) }}
              />
              <span className="min-w-0 flex-1 truncate text-gray-700" title={d.label}>
                {d.label}
              </span>
              <span className="shrink-0 tabular-nums text-gray-500">
                {d.value} · {pct}%
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function VerticalBarChart({
  data,
  emptyLabel = "No enrollments yet",
}: {
  data: ChartDatum[];
  emptyLabel?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);
  if (data.length === 0) {
    return <EmptyChart label={emptyLabel} />;
  }

  return (
    <div className="flex h-48 items-end gap-3">
      {data.map((d, i) => {
        const heightPct = Math.max((d.value / max) * 100, d.value > 0 ? 8 : 0);
        return (
          <div key={d.id} className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <span className="text-xs font-semibold tabular-nums text-gray-700">{d.value}</span>
            <div className="flex h-36 w-full items-end justify-center rounded-lg bg-gray-50 px-1.5 pb-1.5">
              <div
                className={clsx(
                  "w-full max-w-[2.75rem] rounded-md transition-[height] duration-500",
                  d.value === 0 && "opacity-30"
                )}
                style={{
                  height: `${heightPct}%`,
                  backgroundColor: chartColor(i, d.color),
                }}
                title={`${d.label}: ${d.value}`}
              />
            </div>
            <span className="w-full truncate text-center text-[11px] font-medium text-gray-600" title={d.label}>
              {d.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function EmptyChart({ label }: { label: string }) {
  return (
    <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 px-4 text-center text-sm text-gray-500">
      {label}
    </div>
  );
}
