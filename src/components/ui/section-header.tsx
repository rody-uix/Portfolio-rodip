import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  leftTitle: string;
  rightTitle: string;
  className?: string;
}

export function SectionHeader({
  leftTitle,
  rightTitle,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full max-w-[1000px]",
        className
      )}
    >
      <h2 className="font-moderniz text-[14px] xs:text-[18px] sm:text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.005em] text-p-main uppercase shrink-0">
        {leftTitle}
      </h2>
      <div className="flex-1 mx-2 sm:mx-8 h-px bg-p-grey min-w-[12px]" />
      <h2 className="font-moderniz text-[14px] xs:text-[18px] sm:text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.005em] text-p-main uppercase shrink-0">
        {rightTitle}
      </h2>
    </div>
  );
}
