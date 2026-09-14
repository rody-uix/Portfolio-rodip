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
      <h2 className="font-moderniz text-[24px] md:text-[32px] leading-[38.4px] tracking-[-0.005em] text-p-main uppercase">
        {leftTitle}
      </h2>
      <div className="flex-1 mx-8 h-px bg-p-grey" />
      <h2 className="font-moderniz text-[24px] md:text-[32px] leading-[38.4px] tracking-[-0.005em] text-p-main uppercase">
        {rightTitle}
      </h2>
    </div>
  );
}
