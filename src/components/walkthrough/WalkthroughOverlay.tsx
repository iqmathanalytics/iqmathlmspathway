"use client";

import { useEffect, useRef, useState } from "react";
import { X, ArrowRight, BookOpen, Rocket } from "lucide-react";
import { useWalkthrough } from "@/contexts/WalkthroughContext";

interface Rect { top: number; left: number; width: number; height: number; }

const PAD = 12;

// ── Welcome modal ────────────────────────────────────────────────────────────
function WelcomeModal() {
  const { beginTour, skip } = useWalkthrough();

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={skip} />

      {/* Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden">
        {/* Top gradient banner */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 px-8 pt-10 pb-8 text-white">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <Rocket className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Welcome to Nexperts Academy!</h1>
          <p className="mt-2 text-indigo-200 text-sm leading-relaxed">
            You've just created your account. Let us show you around in under 2 minutes.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="px-8 py-6 space-y-4">
          {[
            { icon: BookOpen, text: "Structured lessons from beginner to advanced" },
            { icon: ArrowRight, text: "In-browser Python IDE to practice instantly" },
            { icon: ArrowRight, text: "Quizzes and video tutorials for every topic" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                <Icon className="h-4 w-4 text-indigo-600" />
              </span>
              {text}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-gray-100 px-8 py-5">
          <button
            onClick={skip}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Skip tour
          </button>
          <button
            onClick={beginTour}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Start Walkthrough
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={skip}
          className="absolute right-4 top-4 rounded-full p-1.5 text-white/70 hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ── Spotlight overlay ────────────────────────────────────────────────────────
export function WalkthroughOverlay() {
  const { welcomeVisible, active, currentStep, stepIndex, total, next, skip } = useWalkthrough();
  const [targetRect, setTargetRect] = useState<Rect | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Auto-skip step if target element doesn't exist on current page.
  useEffect(() => {
    if (!active || !currentStep) return;
    const t = setTimeout(() => {
      const el = document.querySelector<HTMLElement>(
        `[data-walkthrough="${currentStep.target}"]`
      );
      if (!el) next();
    }, 800);
    return () => clearTimeout(t);
  }, [active, currentStep, next]);

  // Measure target element and scroll it into view
  useEffect(() => {
    if (!active || !currentStep) { setTargetRect(null); return; }
    const el = document.querySelector<HTMLElement>(
      `[data-walkthrough="${currentStep.target}"]`
    );
    if (!el) { setTargetRect(null); return; }

    let raf: number;
    const scrollAndMeasure = () => {
      el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "nearest" });
      // Measure after the browser has applied the scroll
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        setTargetRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      });
    };

    scrollAndMeasure();

    const measure = () => {
      const r = el.getBoundingClientRect();
      setTargetRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("scroll", measure, { passive: true, capture: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", measure, { capture: true });
      window.removeEventListener("resize", measure);
    };
  }, [active, currentStep]);

  // Position tooltip: horizontally centered in viewport, above/below spotlight
  useEffect(() => {
    if (!targetRect) return;
    const TOOLTIP_W = 288;
    const TOOLTIP_H = 210;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const MARGIN = 16;

    const left = Math.max(MARGIN, (vw - TOOLTIP_W) / 2);
    let top = targetRect.top + targetRect.height + PAD + MARGIN;
    if (top + TOOLTIP_H > vh - MARGIN) {
      top = targetRect.top - PAD - TOOLTIP_H - MARGIN;
    }
    if (top < MARGIN) top = MARGIN;
    setTooltipPos({ top, left });
  }, [targetRect]);

  // Show welcome modal
  if (welcomeVisible) return <WelcomeModal />;

  if (!active || !currentStep) return null;

  const sr = targetRect
    ? {
        top: Math.round(targetRect.top - PAD),
        left: Math.round(targetRect.left - PAD),
        width: Math.round(targetRect.width + PAD * 2),
        height: Math.round(targetRect.height + PAD * 2),
      }
    : null;

  return (
    <>
      {/* SVG spotlight */}
      <svg
        className="fixed inset-0 z-[9998] pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="wt-mask">
            <rect width="100%" height="100%" fill="white" />
            {sr && (
              <rect x={sr.left} y={sr.top} width={sr.width} height={sr.height} rx={10} fill="black" />
            )}
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.60)" mask="url(#wt-mask)" />
        {sr && (
          <rect x={sr.left} y={sr.top} width={sr.width} height={sr.height} rx={10} fill="none" stroke="#6366f1" strokeWidth={2.5} />
        )}
      </svg>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="fixed z-[9999] w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 p-5"
        style={
          tooltipPos
            ? { top: tooltipPos.top, left: tooltipPos.left }
            : { visibility: "hidden", top: 0, left: 0 }
        }
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-gray-400">
            Step {stepIndex + 1} of {total}
          </span>
          <button onClick={skip} className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-1 mb-4">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${i <= stepIndex ? "bg-indigo-500" : "bg-gray-200"}`}
            />
          ))}
        </div>

        <h3 className="font-semibold text-gray-900 text-sm">{currentStep.title}</h3>
        <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{currentStep.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <button onClick={skip} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Skip tour
          </button>
          <button
            onClick={next}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            {stepIndex === total - 1 ? "Done" : "Next"}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </>
  );
}
