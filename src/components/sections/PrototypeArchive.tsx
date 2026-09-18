import { SectionHeader } from "@/components/ui/section-header";
import { DiamondCorner } from "@/components/ui/diamond-corner";
import { CtaButton } from "@/components/ui/cta-button";

const archiveCards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export function PrototypeArchive() {
  return (
    <section className="pt-0 pb-0 relative">
      {/* 5 Vertical Background Grid Lines */}
      <div
        className="hidden xl:block absolute inset-0 pointer-events-none z-0 opacity-30"
        aria-hidden="true"
      >
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%-568px)]" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%-284px)]" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-1/2" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%+284px)]" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%+568px)]" />
      </div>

      {/* Top Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20 relative z-10" />

      <div className="max-w-[1000px] mx-auto px-4 xl:px-0 relative z-10">
        <SectionHeader leftTitle="Prototype" rightTitle="Archive" />

        {/* Description */}
        <p className="mt-10 max-w-[901px] mx-auto text-center font-adventor text-[16px] leading-[25.6px] text-p-text">
          This section is my creative playground — a space for experimenting with
          interfaces, visuals, motion, and creative coding beyond regular
          projects. Built through curiosity, exploration, and the freedom to test
          ideas without limitations.
        </p>
      </div>

      {/* Cards container */}
      <div className="max-w-[1320px] mx-auto mt-12 lg:mt-16 px-4 xl:px-0 relative z-10">
        <div className="relative border border-p-grey bg-white">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          <div className="p-6 lg:p-[35px]">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[25px]">
              {archiveCards.map((card) => (
                <div
                  key={card.id}
                  className="flex-1 border border-p-grey flex flex-col"
                >
                  {/* Image area */}
                  <div className="relative h-[250px] lg:h-[359px] overflow-hidden">
                    <div className="absolute inset-0 -left-5 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200" />
                  </div>

                  {/* View Work button */}
                  <div className="flex justify-center py-6">
                    <CtaButton
                      label="View Work"
                      href="#"
                      className="flex items-center gap-2 h-[37px] px-4 border border-p-text bg-white font-moderniz text-[13px] font-medium tracking-[0.025em] uppercase text-p-text hover:bg-neutral-50 transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 10H15M15 10L10 5M15 10L10 15"
                          stroke="#515151"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </CtaButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View All Labs CTA Button */}
      <div className="flex justify-center mt-10 lg:mt-12 relative z-10">
        <CtaButton
          label="View All Labs"
          href="/labs"
          className="flex items-center gap-2.5 h-[44px] px-6 border border-p-main bg-p-main text-white font-moderniz text-[13px] font-medium tracking-[0.05em] uppercase hover:bg-neutral-800 transition-colors shadow-xs"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15M15 10L10 5M15 10L10 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CtaButton>
      </div>

      {/* Bottom Full-width divider */}
      <div className="w-full h-px bg-p-grey mt-16 lg:mt-20 relative z-10" />
    </section>
  );
}
