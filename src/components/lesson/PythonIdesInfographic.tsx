"use client";

import { useState } from "react";
import {
  CircleCheck,
  Code2,
  LayoutGrid,
  Monitor,
  Terminal,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-[#888780]">
      {children}
    </p>
  );
}

type IdePart = "editor" | "run" | "console" | null;

const PART_INFO: Record<
  Exclude<IdePart, null>,
  { panelClass: string; content: React.ReactNode }
> = {
  editor: {
    panelClass: "bg-[#EEEDFE] text-[#3C3489]",
    content: (
      <>
        <strong className="font-medium">Editor</strong> — This is where you type
        your Python code. It works like a text document, but it understands code.
        In bigger IDEs, it also colors your keywords and underlines mistakes as
        you type.
      </>
    ),
  },
  run: {
    panelClass: "bg-[#E1F5EE] text-[#085041]",
    content: (
      <>
        <strong className="font-medium">Run button</strong> — When you click Run,
        your entire code is sent to Python. Python reads it from top to bottom
        and executes each line one by one. If there&apos;s a mistake, Python
        stops and reports the error.
      </>
    ),
  },
  console: {
    panelClass: "bg-[#FAEEDA] text-[#633806]",
    content: (
      <>
        <strong className="font-medium">Console</strong> — This is how Python
        talks back to you. Every{" "}
        <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
          print()
        </code>{" "}
        result appears here. Errors show up here too, with a line number so you
        can find and fix the problem quickly.
      </>
    ),
  },
};

const DESKTOP_IDES = [
  {
    name: "VS Code",
    desc: "Free, fast, works for every language. Most popular editor in the world.",
    icon: Code2,
    bg: "#E6F1FB",
    color: "#185FA5",
  },
  {
    name: "PyCharm",
    desc: "Made just for Python. Powerful hints and tools built in.",
    icon: Terminal,
    bg: "#E1F5EE",
    color: "#0F6E56",
  },
  {
    name: "Thonny",
    desc: "Designed for beginners. Simple and clean — great if you do install locally.",
    icon: LayoutGrid,
    bg: "#FAEEDA",
    color: "#854F0B",
  },
] as const;

export function PythonIdesInfographic() {
  const [activePart, setActivePart] = useState<IdePart>(null);

  return (
    <div className="flex flex-col gap-6 py-2">
      <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-[26px] font-medium text-[#1a1a18]">
          What does an IDE give you?
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-[#5f5e5a]">
          IDE stands for{" "}
          <strong className="font-medium">
            Integrated Development Environment
          </strong>{" "}
          — a fancy name for the place where you write, run, and see the results
          of your code, all in one window.
        </p>
      </div>

      <section>
        <SectionLabel>The parts of every IDE</SectionLabel>
        <div className="rounded-2xl border border-black/10 bg-white px-4 pb-4 pt-5 sm:px-6">
          <svg
            viewBox="0 0 640 260"
            className="w-full"
            role="img"
            aria-label="IDE parts diagram"
          >
            <defs>
              <marker
                id="ide-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path
                  d="M2 1L8 5L2 9"
                  fill="none"
                  stroke="context-stroke"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <g
              className="cursor-pointer transition-opacity"
              style={{ opacity: activePart && activePart !== "editor" ? 0.5 : 1 }}
              onClick={() => setActivePart("editor")}
              onKeyDown={(e) => e.key === "Enter" && setActivePart("editor")}
              role="button"
              tabIndex={0}
              aria-label="Editor"
            >
              <rect
                x="20"
                y="80"
                width="160"
                height="100"
                rx="14"
                fill="#EEEDFE"
                stroke="#AFA9EC"
                strokeWidth="1"
              />
              <text
                x="100"
                y="118"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#3C3489"
                fontFamily="system-ui, sans-serif"
              >
                Editor
              </text>
              <text
                x="100"
                y="138"
                textAnchor="middle"
                fontSize="11"
                fill="#534AB7"
                fontFamily="system-ui, sans-serif"
              >
                Where you type
              </text>
              <text
                x="100"
                y="153"
                textAnchor="middle"
                fontSize="11"
                fill="#534AB7"
                fontFamily="system-ui, sans-serif"
              >
                your code
              </text>
            </g>

            <line
              x1="180"
              y1="130"
              x2="230"
              y2="130"
              stroke="#888780"
              strokeWidth="1.5"
              markerEnd="url(#ide-arrow)"
            />
            <text
              x="205"
              y="120"
              textAnchor="middle"
              fontSize="10"
              fill="#888780"
              fontFamily="system-ui, sans-serif"
            >
              you write
            </text>

            <g
              className="cursor-pointer transition-opacity"
              style={{ opacity: activePart && activePart !== "run" ? 0.5 : 1 }}
              onClick={() => setActivePart("run")}
              onKeyDown={(e) => e.key === "Enter" && setActivePart("run")}
              role="button"
              tabIndex={0}
              aria-label="Run"
            >
              <rect
                x="230"
                y="80"
                width="180"
                height="100"
                rx="14"
                fill="#E1F5EE"
                stroke="#5DCAA5"
                strokeWidth="1"
              />
              <text
                x="320"
                y="118"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#085041"
                fontFamily="system-ui, sans-serif"
              >
                Run ▶
              </text>
              <text
                x="320"
                y="138"
                textAnchor="middle"
                fontSize="11"
                fill="#0F6E56"
                fontFamily="system-ui, sans-serif"
              >
                Sends code to Python
              </text>
              <text
                x="320"
                y="153"
                textAnchor="middle"
                fontSize="11"
                fill="#0F6E56"
                fontFamily="system-ui, sans-serif"
              >
                to be executed
              </text>
            </g>

            <line
              x1="410"
              y1="130"
              x2="460"
              y2="130"
              stroke="#888780"
              strokeWidth="1.5"
              markerEnd="url(#ide-arrow)"
            />
            <text
              x="435"
              y="120"
              textAnchor="middle"
              fontSize="10"
              fill="#888780"
              fontFamily="system-ui, sans-serif"
            >
              results
            </text>

            <g
              className="cursor-pointer transition-opacity"
              style={{
                opacity: activePart && activePart !== "console" ? 0.5 : 1,
              }}
              onClick={() => setActivePart("console")}
              onKeyDown={(e) => e.key === "Enter" && setActivePart("console")}
              role="button"
              tabIndex={0}
              aria-label="Console"
            >
              <rect
                x="460"
                y="80"
                width="160"
                height="100"
                rx="14"
                fill="#FAEEDA"
                stroke="#EF9F27"
                strokeWidth="1"
              />
              <text
                x="540"
                y="118"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#633806"
                fontFamily="system-ui, sans-serif"
              >
                Console
              </text>
              <text
                x="540"
                y="138"
                textAnchor="middle"
                fontSize="11"
                fill="#854F0B"
                fontFamily="system-ui, sans-serif"
              >
                Shows output
              </text>
              <text
                x="540"
                y="153"
                textAnchor="middle"
                fontSize="11"
                fill="#854F0B"
                fontFamily="system-ui, sans-serif"
              >
                and errors
              </text>
            </g>

            <text
              x="320"
              y="220"
              textAnchor="middle"
              fontSize="12"
              fill="#b4b2a9"
              fontFamily="system-ui, sans-serif"
            >
              Tap any part to learn more
            </text>
            <text
              x="320"
              y="248"
              textAnchor="middle"
              fontSize="11"
              fill="#888780"
              fontFamily="system-ui, sans-serif"
            >
              Bigger IDEs also add: syntax colors · code hints · file explorer
            </text>
          </svg>

          <div
            className={`mt-4 min-h-[60px] rounded-[10px] px-4 py-3 text-sm leading-relaxed transition-colors ${
              activePart
                ? PART_INFO[activePart].panelClass
                : "bg-[#f5f4f0] text-[#1a1a18]"
            }`}
          >
            {activePart ? (
              PART_INFO[activePart].content
            ) : (
              <span className="text-[13px] text-[#888780]">
                Tap Editor, Run, or Console above to see what each part does.
              </span>
            )}
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Popular desktop IDEs</SectionLabel>
        <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white">
          <div className="flex items-center gap-2 border-b border-black/[0.08] bg-[#fafaf8] px-5 py-4">
            <Monitor className="h-[17px] w-[17px] text-[#888780]" />
            <span className="text-sm font-medium text-[#1a1a18]">
              Great later — not needed now
            </span>
          </div>
          {DESKTOP_IDES.map((ide) => {
            const Icon = ide.icon;
            return (
              <div
                key={ide.name}
                className="flex items-center gap-3.5 border-b border-black/[0.06] px-5 py-3.5 last:border-b-0"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px]"
                  style={{ background: ide.bg, color: ide.color }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#1a1a18]">
                    {ide.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[#888780]">{ide.desc}</p>
                </div>
                <span className="shrink-0 rounded-full border border-black/10 bg-[#f5f4f0] px-2.5 py-0.5 text-[11px] font-medium text-[#5f5e5a]">
                  Later
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="flex items-start gap-2.5 rounded-[10px] bg-[#E1F5EE] p-4 text-[13px] leading-relaxed text-[#0F6E56]">
        <CircleCheck className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          For learning with us, the built-in IDE is enough. No downloads needed
          — just use the Run button on every lesson page and you&apos;re good to
          go.
        </p>
      </div>
    </div>
  );
}
