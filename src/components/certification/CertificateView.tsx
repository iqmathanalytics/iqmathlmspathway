"use client";

import Image from "next/image";
import { Great_Vibes, Playfair_Display, Source_Serif_4 } from "next/font/google";
import { PAPC_TITLE } from "@/data/certification/papc-config";
import type { CertificateRow } from "@/lib/types";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const signature = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export function CertificateView({
  certificate,
  programName = PAPC_TITLE,
}: {
  certificate: CertificateRow;
  programName?: string;
}) {
  const name = certificate.recipient_name?.trim() || "Candidate";

  return (
    <div
      className={`${playfair.className} certificate-sheet mx-auto w-full max-w-[1100px] print:max-w-none`}
    >
      <div className="rounded-[18px] bg-gradient-to-br from-[#5eead4] via-[#38bdf8] to-[#60a5fa] p-[5px] shadow-xl print:shadow-none">
        <div className="relative flex aspect-[1.42/1] min-h-[520px] flex-col overflow-hidden rounded-[13px] bg-white px-8 py-6 sm:px-12 sm:py-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[36%]"
            style={{
              background:
                "radial-gradient(90% 70% at 100% 22%, rgba(186,224,255,0.95) 0%, rgba(186,224,255,0.28) 46%, rgba(255,255,255,0) 72%)",
            }}
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-full w-[34%] text-[#cfe9ff]"
            viewBox="0 0 360 900"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M360 0c-90 70-70 170-160 270-95 105-30 175 8 270 42 105-48 190-78 360h230V0Z"
            />
          </svg>

          <div className="relative z-[1] flex items-start justify-between gap-4">
            <div className="relative h-10 w-[148px] sm:h-11 sm:w-[164px]">
              <Image
                src="/images/certificates/iqmath-logo.png"
                alt="IQmath Technologies"
                fill
                sizes="164px"
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="text-right">
              <p className="text-[clamp(0.62rem,1vw,0.78rem)] font-semibold tracking-[0.12em] text-[#5a5a5a]">
                Certificate ID
              </p>
              <p
                suppressHydrationWarning
                className="mt-0.5 font-mono text-[clamp(0.72rem,1.2vw,0.92rem)] font-semibold tracking-wide text-[#1f1f1f]"
              >
                {certificate.verification_code}
              </p>
            </div>
          </div>

          <div className="relative z-[1] mt-2 text-center sm:mt-3">
            <h1 className="text-[clamp(1.55rem,3.8vw,2.55rem)] font-medium tracking-[0.14em] text-[#2c2c2c]">
              CERTIFICATE OF
            </h1>
            <p
              className={`${sourceSerif.className} mt-0.5 text-[clamp(0.95rem,2.15vw,1.55rem)] italic tracking-[0.18em] text-[#c4a35a] sm:tracking-[0.22em]`}
            >
              PROFESSIONAL ACHIEVEMENT
            </p>
            <p className="mt-5 text-[clamp(0.68rem,1.15vw,0.86rem)] font-medium tracking-[0.32em] text-[#6a6a6a]">
              THIS IS TO CERTIFY THAT
            </p>
          </div>

          <div className="relative z-[1] flex flex-1 flex-col items-center justify-center px-4 text-center">
            <p
              className={`${sourceSerif.className} text-[clamp(1.9rem,4.8vw,3.2rem)] font-semibold italic leading-tight text-[#2a2a2a]`}
            >
              {name}
            </p>
            <p
              className={`${sourceSerif.className} mx-auto mt-5 max-w-[46rem] text-[clamp(0.78rem,1.35vw,1.02rem)] leading-relaxed text-[#5a5a5a]`}
            >
              has successfully completed the{" "}
              <span className="font-semibold text-[#2a2a2a]">{programName}</span>{" "}
              and demonstrated proficiency in applying the concepts, techniques,
              and practical skills covered throughout the program.
            </p>
          </div>

          <div className="relative z-[1] mx-auto mt-2 grid w-full max-w-[38rem] grid-cols-2 gap-6">
            <div className="text-center">
              <p
                className={`${signature.className} text-[clamp(1.65rem,3.2vw,2.3rem)] leading-none text-[#111]`}
              >
                Malar Saravanan
              </p>
              <p className="mt-1 text-[clamp(0.9rem,1.5vw,1.08rem)] font-semibold text-[#222]">
                Malar Saravanan
              </p>
              <div className="mx-auto mt-1 h-px w-36 bg-[#333]" />
              <p className="mt-1 text-[clamp(0.7rem,1.15vw,0.84rem)] text-[#666]">
                Chairman &amp; Founder
              </p>
            </div>
            <div className="text-center">
              <p
                className={`${signature.className} text-[clamp(1.65rem,3.2vw,2.3rem)] leading-none text-[#555]`}
              >
                Eneeyan N
              </p>
              <p className="mt-1 text-[clamp(0.9rem,1.5vw,1.08rem)] font-semibold text-[#222]">
                Eneeyan N
              </p>
              <div className="mx-auto mt-1 h-px w-36 bg-[#333]" />
              <p className="mt-1 text-[clamp(0.7rem,1.15vw,0.84rem)] text-[#666]">
                Chief Mentor
              </p>
            </div>
          </div>

          <div className="relative z-[1] mt-6 flex flex-wrap items-end justify-center gap-x-12 gap-y-3">
            <MsmeMark />
            <StartupIndiaMark />
            <StartupTnMark />
          </div>
        </div>
      </div>
    </div>
  );
}

function MsmeMark() {
  return (
    <div className="text-center">
      <p className="text-[1.4rem] font-black leading-none tracking-wide text-[#1e3a8a] sm:text-[1.6rem]">
        MSME
      </p>
      <p className="mt-1 text-[0.48rem] font-semibold tracking-[0.16em] text-[#1e3a8a]">
        MICRO, SMALL &amp; MEDIUM ENTERPRISES
      </p>
    </div>
  );
}

function StartupIndiaMark() {
  return (
    <p className="text-[1.2rem] font-semibold italic tracking-tight sm:text-[1.4rem]">
      <span className="text-[#f97316]">#</span>
      <span className="text-[#16a34a]">startup</span>
      <span className="text-[#ea580c]">india</span>
    </p>
  );
}

function StartupTnMark() {
  return (
    <p className="text-[1.3rem] font-extrabold tracking-tight sm:text-[1.5rem]">
      <span className="text-[#1e3a8a]">Startup</span>
      <span className="text-[#22d3ee]">TN</span>
    </p>
  );
}
