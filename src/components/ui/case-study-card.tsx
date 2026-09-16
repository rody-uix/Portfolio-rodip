import { cn } from "@/lib/utils";
import { DiamondCorner } from "@/components/ui/diamond-corner";
import { CtaButton } from "@/components/ui/cta-button";

export interface CaseStudyCardProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  imageUrl?: string;
  visitUrl?: string;
  viewUrl?: string;
  className?: string;
}

export function CaseStudyCard({
  title,
  description,
  imagePosition = "left",
  imageUrl,
  visitUrl = "#",
  viewUrl = "#",
  className,
}: CaseStudyCardProps) {
  const isLeft = imagePosition === "left";

  return (
    <div
      className={cn(
        "relative w-full max-w-[1382px] mx-auto bg-white border-[0.58px] border-p-grey p-4 sm:p-5 lg:p-4 min-h-[383px]",
        className
      )}
    >
      {/* 4 Corner accents */}
      <DiamondCorner position="top-left" />
      <DiamondCorner position="top-right" />
      <DiamondCorner position="bottom-left" />
      <DiamondCorner position="bottom-right" />

      <div
        className={cn(
          "flex flex-col gap-6 lg:gap-8 min-h-[351px]",
          isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        {/* Media / Image Box (654px x 351px spec) */}
        <div className="w-full lg:w-[654px] h-[220px] sm:h-[280px] lg:h-[351px] bg-[#D9D9D9] shrink-0 relative overflow-hidden rounded-xs">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-neutral-400/50 flex items-center justify-center">
                <span className="font-moderniz text-neutral-600 text-xs uppercase tracking-wider">
                  Case Study
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Text Content & Actions Container (687px width area on desktop) */}
        <div className="flex-1 flex flex-col justify-between py-1 lg:py-4 max-w-[687px]">
          <div className="space-y-4">
            {/* Title: MODERNIZ 900 size 32px leading 38.4px */}
            <h3 className="font-moderniz font-black text-[20px] sm:text-[26px] lg:text-[32px] leading-[26px] sm:leading-[32px] lg:leading-[38.4px] tracking-[-0.005em] text-p-main uppercase">
              {title}
            </h3>

            {/* Description: TeX Gyre Adventor 400 size 20px leading 30px */}
            <p className="font-adventor font-normal text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#515151]">
              {description}
            </p>
          </div>

          {/* Action Bar (Visit Website / View Work) */}
          <div className="mt-6 lg:mt-8 flex items-center flex-wrap gap-y-2">
            {/* Oval Accent Pill (40.15px x 40px spec) */}
            <div className="w-[40px] h-[37px] shrink-0 border border-p-text flex items-center justify-center rounded-l-full bg-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="#515151"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Visit Website Button (138px x 37px spec) */}
            <CtaButton
              label="Visit Website"
              href={visitUrl}
              className="h-[37px] px-4 flex items-center bg-[#252525] border border-p-text font-sans text-[13px] sm:text-[15px] font-medium tracking-[0.025em] uppercase text-[#DCDCDC] hover:bg-[#252525]/90 transition-colors whitespace-nowrap"
            />

            {/* View Work Button (141px x 37px spec) */}
            <CtaButton
              label="View Work"
              href={viewUrl}
              className="h-[37px] pl-4 pr-3 flex items-center gap-2 bg-white border border-p-text font-sans text-[13px] sm:text-[15px] font-medium tracking-[0.025em] uppercase text-[#515151] hover:bg-neutral-50 transition-colors whitespace-nowrap"
            >
              <svg
                width="18"
                height="18"
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
      </div>
    </div>
  );
}
