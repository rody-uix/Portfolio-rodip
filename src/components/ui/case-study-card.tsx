import Image from "next/image";
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
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 654px"
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

          {/* Action Bar (Side-by-Side CTAs & Red Stars) */}
          <div className="mt-6 lg:mt-8 relative flex items-center gap-3 shrink-0">
            {/* Visit Website Button Container with overflowing top-left Red Star 1 */}
            <div className="relative shrink-0">
              {/* Red Star 1 (Overflowing Top-Left Corner 40.16px x 40px at -20px top, -14.5px left) */}
              <div className="absolute -top-[20px] -left-[14.5px] w-[40.16px] h-[40px] z-10 pointer-events-none">
                <Image
                  src="/start-1.svg"
                  alt="Red Star Accent"
                  width={40.16}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Visit Website Button (138px x 37px Dark Spec) */}
              <CtaButton
                label="Visit Website"
                href={visitUrl}
                className="w-[138px] h-[37px] px-[16px] py-[8px] flex items-center justify-center bg-[#252525] border border-[#515151] font-dm-sans text-[15px] font-medium leading-[18px] tracking-[0.025em] uppercase text-[#DCDCDC] hover:bg-[#252525]/90 transition-colors whitespace-nowrap shrink-0 z-0"
              />
            </div>

            {/* View Work Button (141px x 37px White Spec with Red Star 2 on right) */}
            <CtaButton
              label="View Work"
              href={viewUrl}
              className="w-[141px] h-[37px] pl-[16px] pr-[8px] py-[8px] flex items-center justify-between gap-[8px] bg-white border border-[#515151] font-dm-sans text-[15px] font-medium leading-[18px] tracking-[0.025em] uppercase text-[#515151] hover:bg-neutral-50 transition-colors whitespace-nowrap shrink-0"
            >
              <Image
                src="/start-1.svg"
                alt="Red Star Icon"
                width={20}
                height={20}
                className="w-[20px] h-[20px] shrink-0 object-contain"
              />
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
