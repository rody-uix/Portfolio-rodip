import Image from "next/image";
import { cn } from "@/lib/utils";
import { DiamondCorner } from "@/components/ui/diamond-corner";
import { CtaButton } from "@/components/ui/cta-button";

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  visitUrl?: string;
  viewUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  year,
  visitUrl = "#",
  viewUrl = "#",
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "relative w-full bg-white border border-p-grey shadow-md",
        className
      )}
    >
      {/* Corner accents */}
      <DiamondCorner position="top-left" />
      <DiamondCorner position="top-right" />
      <DiamondCorner position="bottom-left" />
      <DiamondCorner position="bottom-right" />

      <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[483px] h-auto">
        {/* Content */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-moderniz text-[18px] sm:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[28.6px] text-p-main uppercase">
              {title}
            </h3>
            <p className="mt-4 font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-text max-w-[500px]">
              {description}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Action Bar (Side-by-Side CTAs & Red Stars) */}
            <div className="relative flex items-center gap-3 shrink-0">
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

            <span className="font-moderniz text-[20px] lg:text-[22px] leading-[28.6px] text-p-grey">
              {year}
            </span>
          </div>
        </div>

        {/* Image / Graphic Area */}
        <div className="w-full lg:w-[48%] relative overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 min-h-[220px] lg:min-h-full">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-4 right-4 h-8 bg-neutral-600/40 rounded" />
            <div className="absolute top-16 left-4 w-24 h-32 bg-neutral-600/30 rounded" />
            <div className="absolute top-16 left-32 right-4 h-32 bg-neutral-600/20 rounded" />
            <div className="absolute top-52 left-4 right-4 h-20 bg-neutral-600/25 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
