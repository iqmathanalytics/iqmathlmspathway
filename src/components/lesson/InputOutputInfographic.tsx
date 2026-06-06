"use client";

import {
  AlertTriangle,
  Info,
  Keyboard,
  Lightbulb,
  Smartphone,
  Terminal,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-[#888780]">
      {children}
    </p>
  );
}

const PRINT_OUTPUTS = [
  {
    code: 'print("Hello, world!")',
    result: "Hello, world!",
  },
  {
    code: "print(42)",
    result: "42",
  },
  {
    code: 'print("I love Python", "for data science")',
    result: "I love Python for data science",
  },
] as const;

export function InputOutputInfographic() {
  return (
    <div className="flex flex-col gap-6 py-2">
      <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-[26px] font-medium text-[#1a1a18]">
          Output &amp; Input
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-[#5f5e5a]">
          Two of the most important things a program does:{" "}
          <strong className="font-medium">show something</strong> to the user,
          and <strong className="font-medium">ask for something</strong> from
          the user. Python gives you a simple function for each.
        </p>
      </div>

      <section>
        <SectionLabel>Output with print()</SectionLabel>
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="flex items-center gap-2.5 border-b border-black/[0.08] bg-[#fafaf8] px-5 py-4">
            <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#EEEDFE] text-[#534AB7]">
              <Terminal className="h-[17px] w-[17px]" />
            </div>
            <div>
              <p className="text-[15px] font-medium text-[#1a1a18]">print()</p>
              <p className="text-xs text-[#888780]">
                Displays text or numbers in the console
              </p>
            </div>
          </div>
          <div className="p-5">
            <p className="mb-4 text-sm leading-relaxed text-[#5f5e5a]">
              The{" "}
              <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
                print()
              </code>{" "}
              function displays whatever you put inside the parentheses directly
              in the console. You can print text, numbers, or even multiple
              things at once separated by commas.
            </p>

            <div className="mb-3 rounded-[10px] bg-[#f5f4f0] px-2 py-3">
              <svg
                viewBox="0 0 620 80"
                className="w-full"
                role="img"
                aria-label="How print works: your code goes to Python which runs it and text appears in the Console"
              >
                <defs>
                  <marker
                    id="print-arrow"
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
                <rect
                  x="20"
                  y="16"
                  width="130"
                  height="48"
                  rx="10"
                  fill="#EEEDFE"
                  stroke="#AFA9EC"
                  strokeWidth="0.8"
                />
                <text
                  x="85"
                  y="36"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="600"
                  fill="#3C3489"
                  fontFamily="system-ui, sans-serif"
                >
                  print(...)
                </text>
                <text
                  x="85"
                  y="54"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#534AB7"
                  fontFamily="system-ui, sans-serif"
                >
                  Your code
                </text>
                <line
                  x1="150"
                  y1="40"
                  x2="196"
                  y2="40"
                  stroke="#888780"
                  strokeWidth="1.5"
                  markerEnd="url(#print-arrow)"
                />
                <rect
                  x="196"
                  y="16"
                  width="130"
                  height="48"
                  rx="10"
                  fill="#E1F5EE"
                  stroke="#5DCAA5"
                  strokeWidth="0.8"
                />
                <text
                  x="261"
                  y="36"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="600"
                  fill="#085041"
                  fontFamily="system-ui, sans-serif"
                >
                  Python
                </text>
                <text
                  x="261"
                  y="54"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#0F6E56"
                  fontFamily="system-ui, sans-serif"
                >
                  Runs it
                </text>
                <line
                  x1="326"
                  y1="40"
                  x2="372"
                  y2="40"
                  stroke="#888780"
                  strokeWidth="1.5"
                  markerEnd="url(#print-arrow)"
                />
                <rect
                  x="372"
                  y="16"
                  width="230"
                  height="48"
                  rx="10"
                  fill="#FAEEDA"
                  stroke="#EF9F27"
                  strokeWidth="0.8"
                />
                <text
                  x="487"
                  y="36"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="600"
                  fill="#633806"
                  fontFamily="system-ui, sans-serif"
                >
                  Console
                </text>
                <text
                  x="487"
                  y="54"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#854F0B"
                  fontFamily="system-ui, sans-serif"
                >
                  Text appears as output
                </text>
              </svg>
            </div>

            <div className="mb-4 rounded-[10px] bg-[#1e1e1e] px-5 py-4">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#888780]">
                Example code
              </p>
              <pre className="overflow-x-auto font-mono text-[13px] leading-loose text-[#d4d4d4]">
                <span className="text-[#dcdcaa]">print</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#ce9178]">&quot;Hello, world!&quot;</span>
                <span className="text-[#d4d4d4]">)</span>
                {"\n"}
                <span className="text-[#dcdcaa]">print</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#b5cea8]">42</span>
                <span className="text-[#d4d4d4]">)</span>
                {"\n"}
                <span className="text-[#dcdcaa]">print</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#ce9178]">&quot;I love Python&quot;</span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#ce9178]">
                  &quot;for data science&quot;
                </span>
                <span className="text-[#d4d4d4]">)</span>
              </pre>
            </div>

            <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-[#888780]">
              What appears in the console
            </p>
            <div className="mb-4 rounded-[10px] bg-[#141414] px-5 py-3">
              {PRINT_OUTPUTS.map((row) => (
                <div
                  key={row.code}
                  className="flex items-center gap-2.5 border-b border-white/[0.05] py-1 font-mono text-[13px] last:border-b-0"
                >
                  <span className="shrink-0 text-[11px] text-[#444441]">▶</span>
                  <span className="text-[#9cdcfe]">{row.code}</span>
                  <span className="flex-1 text-right text-[#a8ff78]">
                    {row.result}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-[#E6F1FB] px-3.5 py-2.5 text-[13px] leading-relaxed text-[#185FA5]">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                When you use commas inside{" "}
                <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
                  print()
                </code>
                , Python automatically adds a space between each item for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Input with input()</SectionLabel>
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="flex items-center gap-2.5 border-b border-black/[0.08] bg-[#fafaf8] px-5 py-4">
            <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#E1F5EE] text-[#0F6E56]">
              <Keyboard className="h-[17px] w-[17px]" />
            </div>
            <div>
              <p className="text-[15px] font-medium text-[#1a1a18]">input()</p>
              <p className="text-xs text-[#888780]">
                Waits for the user to type something and press Enter
              </p>
            </div>
          </div>
          <div className="p-5">
            <p className="mb-4 text-sm leading-relaxed text-[#5f5e5a]">
              The{" "}
              <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
                input()
              </code>{" "}
              function pauses your program and shows a prompt asking the user to
              type something. Whatever they type is saved and you can use it
              later in your code.
            </p>

            <div className="mb-4 rounded-[10px] bg-[#1e1e1e] px-5 py-4">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-[#888780]">
                Example code
              </p>
              <pre className="overflow-x-auto font-mono text-[13px] leading-loose text-[#d4d4d4]">
                <span className="text-[#9cdcfe]">name</span>
                <span className="text-[#d4d4d4]"> = </span>
                <span className="text-[#dcdcaa]">input</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#ce9178]">
                  &quot;What is your name? &quot;
                </span>
                <span className="text-[#d4d4d4]">)</span>
                {"\n"}
                <span className="text-[#dcdcaa]">print</span>
                <span className="text-[#d4d4d4]">(</span>
                <span className="text-[#ce9178]">
                  &quot;Nice to meet you,&quot;
                </span>
                <span className="text-[#d4d4d4]">, </span>
                <span className="text-[#9cdcfe]">name</span>
                <span className="text-[#d4d4d4]">)</span>
              </pre>
            </div>

            <div className="mb-4 flex items-start gap-2.5 rounded-lg bg-[#FAEEDA] px-3.5 py-2.5 text-[13px] leading-relaxed text-[#633806]">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#854F0B]" />
              <p>
                <strong className="font-medium">Important:</strong>{" "}
                <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
                  input()
                </code>{" "}
                always gives back a <strong className="font-medium">string</strong>{" "}
                — even if the user types a number. To do math with it, you need
                to convert it first using{" "}
                <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
                  int()
                </code>{" "}
                or{" "}
                <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
                  float()
                </code>
                .
              </p>
            </div>

            <div className="flex items-start gap-2 rounded-lg bg-[#E6F1FB] px-3.5 py-2.5 text-[13px] leading-relaxed text-[#185FA5]">
              <Smartphone className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                In the browser IDE,{" "}
                <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
                  input()
                </code>{" "}
                may show a small popup box. On your own computer it works
                directly in the terminal — same result either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-start gap-2.5 rounded-[10px] bg-[#E1F5EE] p-4 text-[13px] leading-relaxed text-[#0F6E56]">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
            print()
          </code>{" "}
          talks <em>to</em> the user.{" "}
          <code className="rounded bg-black/[0.07] px-1 py-0.5 font-mono text-xs">
            input()
          </code>{" "}
          listens <em>from</em> the user. Together they let your program have a
          conversation.
        </p>
      </div>
    </div>
  );
}
