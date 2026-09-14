"use client";

import { useCallback, useRef, type KeyboardEvent, type PointerEvent } from "react";
import clsx from "clsx";

interface PracticeSplitHandleProps {
  orientation: "vertical" | "horizontal";
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  /** Bounding box used to compute percentage while dragging. */
  getBounds: () => DOMRect | null;
  className?: string;
  label: string;
}

export function PracticeSplitHandle({
  orientation,
  value,
  min,
  max,
  onChange,
  getBounds,
  className,
  label,
}: PracticeSplitHandleProps) {
  const dragging = useRef(false);

  const clamp = useCallback(
    (n: number) => Math.min(max, Math.max(min, Math.round(n * 10) / 10)),
    [min, max]
  );

  const onPointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      dragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      document.body.style.cursor =
        orientation === "vertical" ? "col-resize" : "row-resize";
      document.body.style.userSelect = "none";
    },
    [orientation]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!dragging.current) return;
      const rect = getBounds();
      if (!rect || rect.width <= 0 || rect.height <= 0) return;
      if (orientation === "vertical") {
        const pct = ((e.clientX - rect.left) / rect.width) * 100;
        onChange(clamp(pct));
      } else {
        const fromBottom = rect.bottom - e.clientY;
        const pct = (fromBottom / rect.height) * 100;
        onChange(clamp(pct));
      }
    },
    [clamp, getBounds, onChange, orientation]
  );

  const endDrag = useCallback((e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const step = e.shiftKey ? 5 : 2;
      if (orientation === "vertical") {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          onChange(clamp(value - step));
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          onChange(clamp(value + step));
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        onChange(clamp(value + step));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        onChange(clamp(value - step));
      }
    },
    [clamp, onChange, orientation, value]
  );

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      aria-label={label}
      aria-valuenow={Math.round(value)}
      aria-valuemin={min}
      aria-valuemax={max}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className={clsx(
        "practice-split-handle group relative z-10 shrink-0 touch-none focus:outline-none",
        orientation === "vertical"
          ? "hidden w-0 cursor-col-resize lg:block"
          : "h-0 cursor-row-resize",
        className
      )}
    >
      {/* Visual 1–2px rule */}
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute bg-sky-200/80 transition-colors duration-150 group-hover:bg-[var(--brand)]/45 group-focus:bg-[var(--brand)]/55 dark:bg-slate-600/80",
          orientation === "vertical"
            ? "inset-y-0 left-1/2 w-0.5 -translate-x-1/2"
            : "inset-x-0 top-1/2 h-0.5 -translate-y-1/2"
        )}
      />
      {/* Larger hit target */}
      <span
        aria-hidden
        className={clsx(
          "absolute",
          orientation === "vertical"
            ? "inset-y-0 -left-1.5 w-3"
            : "inset-x-0 -top-1.5 h-3"
        )}
      />
    </div>
  );
}
