"use client";

import "./StarfieldBackground.css";

/**
 * Lightweight CSS-only starfield. Avoids 1000+ random box-shadows that
 * force expensive paint/layout on every home section.
 */
export function StarfieldBackground({ animated = true }: { animated?: boolean }) {
  return (
    <div className="starfield-container" aria-hidden>
      <div className={`starfield-layer starfield-layer--a${animated ? "" : " starfield-layer--static"}`} />
      <div className={`starfield-layer starfield-layer--b${animated ? "" : " starfield-layer--static"}`} />
      <div className={`starfield-layer starfield-layer--c${animated ? "" : " starfield-layer--static"}`} />
    </div>
  );
}
