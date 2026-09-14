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
            <div className="flex items-stretch flex-wrap gap-y-2">
              {/* Arrow circle */}
              <div className="w-10 h-[37px] shrink-0 border border-p-text flex items-center justify-center rounded-l-full">
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

              <CtaButton
                label="Visit Website"
                href={visitUrl}
                className="h-[37px] px-4 flex items-center bg-p-main border border-p-text font-moderniz text-[12px] sm:text-[13px] font-medium tracking-[0.025em] uppercase text-p-grey hover:bg-p-main/90 transition-colors whitespace-nowrap"
              />

              <CtaButton
                label="View Work"
                href={viewUrl}
                className="h-[37px] px-3 sm:px-4 flex items-center gap-2 bg-white border border-p-text font-moderniz text-[12px] sm:text-[13px] font-medium tracking-[0.025em] uppercase text-p-text hover:bg-neutral-50 transition-colors whitespace-nowrap"
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
