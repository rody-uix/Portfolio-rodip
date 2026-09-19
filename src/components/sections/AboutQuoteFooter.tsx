"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrambleText } from "@/components/ui/scramble-text";

export function AboutQuoteFooter() {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const email = "hireridipuix@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative max-w-[1920px] mx-auto min-h-[600px] pt-16 sm:pt-24 md:pt-28 pb-28 sm:pb-36 px-4 sm:px-6 overflow-hidden flex flex-col justify-center">
      {/* Ancient Greek Columns / Pillars Illustration (Bottom Right - 500px height, sticky right) */}
      <div className="absolute right-0 bottom-0 w-[267px] h-[500px] pointer-events-none opacity-100 z-10 hidden xl:block">
        <Image
          src="/last pillers.svg"
          alt="Ancient Greek Columns Illustration"
          width={267}
          height={500}
          className="object-contain object-bottom w-full h-full"
          priority
        />
      </div>

      {/* Main Center Content Column (Positioned with z-30 to stay above pillars) */}
      <div className="relative z-30 text-center max-w-[1067px] mx-auto px-2">
        {/* Gothic Calligraphic Quote */}
        <h2 className="font-highcrest text-[28px] sm:text-[36px] md:text-[40px] leading-[38px] sm:leading-[46px] text-p-main tracking-tight max-w-[751px] mx-auto">
          not every idea is meant to become a product.
        </h2>

        {/* Quote Subtitle Body Paragraph */}
        <p className="mt-6 sm:mt-[28px] font-adventor text-[15px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] text-black text-center max-w-[1067px] mx-auto">
          But the rare ones&mdash;the ideas that linger, evolve, and demand patience&mdash;deserve thoughtful hands. If you are working on something of that nature, I would welcome the opportunity to help bring it into the world.
        </p>

        {/* Contact Email Button Badge */}
        <div className="mt-8 sm:mt-[38px] flex justify-center">
          <button
            onClick={handleCopy}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 px-4 py-2 sm:py-2.5 border border-p-grey bg-[#B0D8FF1A] hover:bg-[#B0D8FF33] transition-all cursor-pointer shadow-2xs max-w-full"
            title="Click to copy email"
          >
            <ScrambleText
              text="Ink Your Intentions"
              isHovered={isHovered}
              className="font-adventor text-[14px] sm:text-[16px] leading-[25.6px] text-p-main font-medium whitespace-nowrap"
            />
            <span className="text-p-grey font-sans hidden sm:inline">|</span>
            <span className="font-adventor text-[14px] sm:text-[16px] leading-[25.6px] text-p-text group-hover:underline whitespace-nowrap">
              {email}
            </span>
            {copied && (
              <span className="ml-1 text-[12px] text-emerald-600 font-sans whitespace-nowrap">
                (Copied!)
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Perspective Floor Grid Background with Top Fade Effect */}
      <div
        className="absolute bottom-0 left-[-50%] right-[-50%] h-[280px] sm:h-[320px] pointer-events-none opacity-40 z-0 border-t border-[#B3B3B399]"
        style={{
          backgroundImage: `linear-gradient(to right, #B3B3B3 1px, transparent 1px), linear-gradient(to bottom, #B3B3B3 1px, transparent 1px)`,
          backgroundSize: "60px 24px",
          transform: "perspective(500px) rotateX(55deg)",
          transformOrigin: "bottom center",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 45%, black 100%)",
        }}
        aria-hidden="true"
      />
      
      {/* Top Fade Gradient Overlay on Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[280px] sm:h-[320px] bg-gradient-to-b from-p-bg via-transparent to-transparent pointer-events-none z-0" />
    </section>
  );
}
