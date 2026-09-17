 import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Perspective Grid Line Background (Group 18.svg) */}
      <div className="absolute inset-0 pointer-events-none opacity-100 z-0">
        <Image
          src="/Group 18.svg"
          alt="Perspective Grid Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Hero Frame Overlay & Pillars (Frame 91 (rasterized).svg) */}
      <div className="absolute inset-0 pointer-events-none opacity-100 z-10">
        <Image
          src="/Frame 91 (rasterized).svg"
          alt="Hero Background Frame"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[140px] px-4">
        {/* Name */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-4 lg:gap-8 flex-wrap">
          <span className="font-highcrest text-[48px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[166px] leading-none tracking-[-0.02em] text-p-main">
            rodip
          </span>

          {/* Red ink splatter star mark */}
          <div className="relative w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] shrink-0">
            <Image
              src="/eye.svg"
              alt="Red Star Emblem"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>

          <span className="font-highcrest text-[48px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[166px] leading-none tracking-[-0.02em] text-p-main">
            Chettri
          </span>
        </div>

        {/* Description */}
        <p className="max-w-[903px] mt-8 lg:mt-12 text-center font-adventor text-[14px] md:text-[16px] leading-[25.6px] text-p-text px-4">
          A product designer crafting thoughtful digital experiences through
          strategy, research, and visual precision. Focused on solving usability
          challenges, simplifying interactions, and building products users
          genuinely connect with. Blending functionality with timeless visual
          storytelling.
        </p>

        {/* Eye Illustration & Flourishes (eye.svg + Group 5 + divider.svg) */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100 pointer-events-none">
          <div className="w-[50px] sm:w-[65px] h-[50px] sm:h-[65px]">
            <Image
              src="/Group 5 (rasterized).svg"
              alt="Eye Emblem"
              width={65}
              height={65}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* CTA Button */}
        <CtaButton
          label="Summon the Compendium"
          className="mt-8 lg:mt-10 flex items-center gap-2 px-4 py-2 border border-p-grey bg-[#B0D8FF1A] font-moderniz text-[14px] uppercase tracking-wider text-p-text hover:bg-[#B0D8FF33] transition-colors cursor-pointer"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6H10M10 6L7 3M10 6L7 9"
              stroke="#515151"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CtaButton>
      </div>

      {/* Bottom gradient fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[157px] bg-gradient-to-b from-p-bg to-transparent pointer-events-none z-0" />

      {/* Wider subtle border strip */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B3B3B399]" />
    </section>
  );
}
