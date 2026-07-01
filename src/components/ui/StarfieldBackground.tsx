"use client";

import { useMemo } from "react";
import "./StarfieldBackground.css";

function generateBoxShadow(count: number): string {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    shadows.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #fff`);
  }
  return shadows.join(", ");
}

function StarLayer({
  shadow,
  size,
  duration,
}: {
  shadow: string;
  size: number;
  duration: string;
}) {
  const dotStyle = {
    width: size,
    height: size,
    boxShadow: shadow,
  } as const;

  return (
    <div className="starfield-layer" style={{ animationDuration: duration }}>
      <div className="starfield-dot" style={{ ...dotStyle, top: 0 }} />
      <div className="starfield-dot" style={{ ...dotStyle, top: 2000 }} />
    </div>
  );
}

export function StarfieldBackground() {
  const layers = useMemo(
    () => ({
      small: generateBoxShadow(700),
      medium: generateBoxShadow(200),
      large: generateBoxShadow(100),
    }),
    []
  );

  return (
    <div className="starfield-container" aria-hidden>
      <StarLayer shadow={layers.small} size={1} duration="50s" />
      <StarLayer shadow={layers.medium} size={2} duration="100s" />
      <StarLayer shadow={layers.large} size={3} duration="150s" />
    </div>
  );
}
