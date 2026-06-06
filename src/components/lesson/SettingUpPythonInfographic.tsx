"use client";

import {
  CircleCheck,
  Download,
  Globe,
  Laptop,
  Lightbulb,
  Monitor,
  Play,
  SquareCheck,
  Terminal,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-[#888780]">
      {children}
    </p>
  );
}

const INSTALL_STEPS = [
  {
    num: 1,
    text: (
      <>
        Go to{" "}
        <a
          href="https://www.python.org/downloads/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#185FA5] hover:underline"
        >
          python.org/downloads
        </a>
      </>
    ),
    note: "The site auto-detects Windows and shows the right installer.",
  },
  {
    num: 2,
    text: (
      <>
        Download the latest <strong className="font-medium">Python 3</strong>{" "}
        installer
      </>
    ),
    note: 'Look for a button like "Download Python 3.x.x" — click it.',
  },
  {
    num: 3,
    text: "Run the installer — check this box before clicking Install",
    note: "This is easy to miss — without it, Python won't work from the terminal.",
    badge: true,
  },
  {
    num: 4,
    text: (
      <>
        Open{" "}
        <span className="rounded-[5px] border border-black/10 bg-[#f5f4f0] px-1.5 py-0.5 font-mono text-xs text-[#1a1a18]">
          Command Prompt
        </span>{" "}
        and type:
      </>
    ),
    code: "python --version",
  },
  {
    num: 5,
    text: "You should see a version number like:",
    code: "Python 3.12.x",
    codeSuccess: true,
    note: "If you see this — Python is installed and ready!",
  },
] as const;

export function SettingUpPythonInfographic() {
  return (
    <div className="py-2">
      <div className="mb-6 rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-[26px] font-medium text-[#1a1a18]">
          Two ways to run Python
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-[#5f5e5a]">
          You don&apos;t need to install anything to start learning. Pick the
          option that fits where you are right now — you can always switch
          later.
        </p>
      </div>

      <section className="mb-6">
        <SectionLabel>Browser vs Computer</SectionLabel>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[14px] border-[1.5px] border-[#5DCAA5] bg-white">
            <div className="flex items-start gap-3 px-5 pb-3 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#E1F5EE] text-[#0F6E56]">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#1a1a18]">
                  Browser IDE
                </p>
                <p className="text-xs text-[#888780]">
                  This website — practice now
                </p>
                <span className="mt-1.5 inline-block rounded-full bg-[#9FE1CB] px-2 py-0.5 text-[10px] font-medium text-[#085041]">
                  ✦ Start here
                </span>
              </div>
            </div>
            <div className="px-5 pb-4 text-[13px] leading-relaxed text-[#5f5e5a]">
              No downloads, no setup. Just click Run and your code executes
              instantly — right inside this app.
              <div className="my-3 h-px bg-black/[0.08]" />
              <p className="flex items-center gap-2 font-medium text-[#1D9E75]">
                <Play className="h-4 w-4" />
                Use the Run button on every lesson
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white">
            <div className="flex items-start gap-3 px-5 pb-3 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#E6F1FB] text-[#185FA5]">
                <Laptop className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[15px] font-medium text-[#1a1a18]">Your PC</p>
                <p className="text-xs text-[#888780]">python.org install</p>
              </div>
            </div>
            <div className="px-5 pb-4 text-[13px] leading-relaxed text-[#5f5e5a]">
              Full Python on your machine. Best when you&apos;re ready for bigger
              projects, files, and libraries.
              <div className="my-3 h-px bg-black/[0.08]" />
              <p className="flex items-center gap-2 font-medium text-[#185FA5]">
                <Download className="h-4 w-4" />
                Install when you&apos;re ready
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white">
          <div className="flex items-center gap-2.5 border-b border-black/[0.08] bg-[#fafaf8] px-5 py-4">
            <Monitor className="h-[18px] w-[18px] text-[#185FA5]" />
            <span className="text-sm font-medium text-[#1a1a18]">
              Install on Windows
            </span>
            <span className="ml-auto text-xs text-[#888780]">
              when you&apos;re ready
            </span>
          </div>
          <div>
            {INSTALL_STEPS.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-3.5 border-b border-black/[0.06] px-5 py-3.5 last:border-b-0 hover:bg-[#fafaf8]"
              >
                <div className="mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f5f4f0] text-[11px] font-medium text-[#5f5e5a]">
                  {step.num}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-[#1a1a18]">
                    {step.text}
                  </p>
                  {"badge" in step && step.badge && (
                    <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#FAC775] px-2.5 py-0.5 text-xs font-medium text-[#633806]">
                      <SquareCheck className="h-3.5 w-3.5" />
                      Add python.exe to PATH
                    </span>
                  )}
                  {"code" in step && step.code && (
                    <div className="mt-2 flex items-center gap-2 rounded-lg bg-[#1e1e1e] px-3.5 py-2.5 font-mono text-[13px] text-[#a8ff78]">
                      {"codeSuccess" in step && step.codeSuccess ? (
                        <CircleCheck className="h-3.5 w-3.5 shrink-0 text-[#a8ff78]" />
                      ) : (
                        <Terminal className="h-3.5 w-3.5 shrink-0 text-[#888]" />
                      )}
                      {step.code}
                    </div>
                  )}
                  {"note" in step && step.note && (
                    <p className="mt-1.5 text-xs leading-snug text-[#888780]">
                      {step.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-start gap-2.5 rounded-[10px] bg-[#E6F1FB] p-4 text-[13px] leading-relaxed text-[#185FA5]">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          For now, use the <strong className="font-medium">Run button</strong> on
          every lesson page. Installing locally is optional — only needed when
          you want to build bigger projects on your own machine.
        </p>
      </div>

    </div>
  );
}
