"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CtaButton } from "@/components/ui/cta-button";

const HeroWaveTerrain = dynamic(
  () => import("./HeroWaveTerrain"),
  { ssr: false }
);

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hireridipuix@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden min-h-[900px] max-h-[1080px] lg:h-[1080px] bg-white">
      {/* 3D Animated Infinite Grid Background */}
      {!webglFailed && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <HeroWaveTerrain onError={() => setWebglFailed(true)} />
        </div>
      )}

      {/* Perspective Floor Grid Background (Fallback if 3D wave fails or degrades) */}
      {webglFailed && (
        <div
          className="absolute bottom-0 left-[-50%] right-[-50%] h-[500px] lg:h-[650px] pointer-events-none opacity-40 z-0 border-t border-[#B3B3B399]"
          style={{
            backgroundImage: `linear-gradient(to right, #B3B3B3 1px, transparent 1px), linear-gradient(to bottom, #B3B3B3 1px, transparent 1px)`,
            backgroundSize: "60px 24px",
            transform: "perspective(500px) rotateX(55deg)",
            transformOrigin: "bottom center",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Main content - Shifted upward by 25px */}
      <div className="relative z-20 flex flex-col items-center pt-[45px] lg:pt-[65px] pb-[80px] lg:pb-[120px] px-4">
        {/* Name */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-4 lg:gap-8 flex-nowrap">
          <span className="font-highcrest text-[48px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[166px] leading-none tracking-[-0.02em] text-p-main lowercase">
            rodip
          </span>

          {/* Eye Illustration */}
          <div className="relative w-[80px] h-[132px] xs:w-[110px] xs:h-[182px] sm:w-[150px] sm:h-[249px] md:w-[200px] md:h-[331px] lg:w-[261.28px] lg:h-[433.19px] shrink-0 opacity-100 rotate-0">
            <Image
              src="/eye.svg"
              alt="Eye Illustration"
              width={261.28}
              height={433.19}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <span className="font-highcrest text-[48px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[166px] leading-none tracking-[-0.02em] text-p-main lowercase">
            chettri
          </span>
        </div>

        {/* Description */}
        <p className="max-w-[903px] mt-6 lg:mt-8 text-center font-adventor text-[14px] md:text-[16px] leading-[25.6px] text-p-text px-4">
          A product designer crafting thoughtful digital experiences through
          strategy, research, and visual precision. Focused on solving usability
          challenges, simplifying interactions, and building products users
          genuinely connect with. Blending functionality with timeless visual
          storytelling.
        </p>

        {/* Group 5 (rasterized) with CTA Button overlaid on top */}
        <div className="relative mt-6 lg:mt-10 flex justify-center items-center shrink-0">
          <div className="relative w-[280px] xs:w-[320px] sm:w-[350px] md:w-[379px] h-[212px] xs:h-[242px] sm:h-[265px] md:h-[287.25px] shrink-0 opacity-100 rotate-0">
            <Image
              src="/Group 5 (rasterized).svg"
              alt="Group 5 Illustration"
              width={379}
              height={287.25}
              className="w-full h-full object-contain pointer-events-none"
              priority
            />

            {/* CTA Button positioned over Group 5 image */}
            <div className="absolute top-[33.86%] left-1/2 -translate-x-1/2 z-10 w-[264px] max-w-[calc(100%-24px)]">
              <CtaButton
                label={copied ? "Copied to Clipboard!" : "Summon the Compendium"}
                onClick={handleCopyEmail}
                title="Copy email: hireridipuix@gmail.com"
                className="cta-glass flex items-center justify-between gap-2 w-full h-[42px] px-4 py-2 font-adventor font-normal text-[16px] leading-[25.6px] tracking-normal text-[#515151] transition-all cursor-pointer opacity-100 rotate-0 shrink-0"
              >
                <Image
                  src="/copy.svg"
                  alt="Copy icon"
                  width={12}
                  height={12}
                  className="w-[12px] h-[12px] shrink-0 opacity-100 rotate-0"
                />
              </CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Wider subtle border strip */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B3B3B399]" />
    </section>
  );
}

export default Hero;
