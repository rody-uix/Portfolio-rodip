import { CtaButton } from "@/components/ui/cta-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Left decorative column */}
      <div className="absolute left-0 top-[80px] w-[80px] h-[500px] hidden xl:block pointer-events-none opacity-60">
        <div className="w-full h-full bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300 rounded-t-lg" />
      </div>

      {/* Right decorative column */}
      <div className="absolute right-0 top-[80px] w-[80px] h-[500px] hidden xl:block pointer-events-none opacity-60">
        <div className="w-full h-full bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300 rounded-t-lg" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center pt-[80px] lg:pt-[120px] pb-[100px] lg:pb-[200px] px-4">
        {/* Name */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-4 lg:gap-8 flex-wrap">
          <span className="font-highcrest text-[48px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[166px] leading-none tracking-[-0.02em] text-p-main">
            rodip
          </span>

          {/* Red ink splatter mark */}
          <div className="relative w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] shrink-0">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <line x1="20" y1="20" x2="100" y2="100" stroke="#FF0004" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
              <line x1="100" y1="20" x2="20" y2="100" stroke="#FF0004" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
              <circle cx="60" cy="60" r="10" fill="#FF0004" opacity="0.5" />
              <circle cx="30" cy="25" r="5" fill="#FF0004" opacity="0.4" />
              <circle cx="95" cy="30" r="4" fill="#FF0004" opacity="0.45" />
              <circle cx="90" cy="95" r="6" fill="#FF0004" opacity="0.35" />
              <circle cx="25" cy="90" r="4" fill="#FF0004" opacity="0.4" />
              <circle cx="50" cy="40" r="3" fill="#FF0004" opacity="0.3" />
              <circle cx="75" cy="80" r="3" fill="#FF0004" opacity="0.3" />
            </svg>
          </div>

          <span className="font-highcrest text-[48px] xs:text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] xl:text-[166px] leading-none tracking-[-0.02em] text-p-main">
            Chettri
          </span>
        </div>

        {/* Description */}
        <p className="max-w-[903px] mt-12 lg:mt-16 text-center font-adventor text-[14px] md:text-[16px] leading-[25.6px] text-p-text px-4">
          A product designer crafting thoughtful digital experiences through
          strategy, research, and visual precision. Focused on solving usability
          challenges, simplifying interactions, and building products users
          genuinely connect with. Blending functionality with timeless visual
          storytelling.
        </p>

        {/* CTA Button */}
        <CtaButton
          label="Summon the Compendium"
          className="mt-10 lg:mt-12 flex items-center gap-2 px-4 py-2 border border-p-grey bg-[#B0D8FF1A] font-moderniz text-[14px] uppercase tracking-wider text-p-text hover:bg-[#B0D8FF33] transition-colors cursor-pointer"
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
      <div className="absolute bottom-0 left-0 right-0 h-[157px] bg-gradient-to-b from-p-bg to-transparent pointer-events-none" />

      {/* Wider subtle border strip */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B3B3B399]" />
    </section>
  );
}
