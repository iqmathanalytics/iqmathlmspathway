"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ExplainSlide = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  icon?: LucideIcon;
};

type ExplainSlideCarouselProps = {
  slides: ExplainSlide[];
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
  autoPlayMs?: number;
  className?: string;
};

export function ExplainSlideCarousel({
  slides,
  activeIndex: controlledIndex,
  onActiveChange,
  autoPlayMs = 8000,
  className = "",
}: ExplainSlideCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = controlledIndex ?? internalIndex;

  const goTo = useCallback(
    (index: number) => {
      const next = (index + slides.length) % slides.length;
      if (onActiveChange) onActiveChange(next);
      else setInternalIndex(next);
    },
    [onActiveChange, slides.length]
  );

  useEffect(() => {
    if (!autoPlayMs || controlledIndex !== undefined) return;
    const timer = window.setInterval(() => {
      setInternalIndex((current) => (current + 1) % slides.length);
    }, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, controlledIndex, slides.length]);

  const slide = slides[activeIndex];
  const Icon = slide.icon;

  return (
    <div className={`relative ${className}`.trim()}>
      <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-gradient-to-br from-white via-brand-50/40 to-accent-50/30 p-6 shadow-sm sm:p-8 lg:p-10">
        <div key={slide.id} className="transition-opacity duration-500">
          {slide.eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">{slide.eyebrow}</p>
          ) : null}
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            {Icon ? (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-sm">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
            ) : null}
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{slide.title}</h3>
              <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">{slide.description}</p>
              {slide.bullets && slide.bullets.length > 0 ? (
                <ul className="mt-5 space-y-2 text-sm text-gray-700 sm:text-base">
                  {slide.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-brand-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}: ${item.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
