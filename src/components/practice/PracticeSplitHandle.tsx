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
        "practice-split-handle z-10 shrink-0 touch-none bg-sky-100/90 transition-all duration-200 hover:bg-[var(--brand)]/35 focus:bg-[var(--brand)]/45 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30",
        orientation === "vertical"
          ? "hidden w-1.5 cursor-col-resize lg:block"
          : "h-1.5 cursor-row-resize",
        className
      )}
    />
  );
}
