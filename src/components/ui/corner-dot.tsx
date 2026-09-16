import { cn } from "@/lib/utils";

interface CornerDotProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

const positionMap = {
  "top-left": "-top-[3px] -left-[3px]",
  "top-right": "-top-[3px] -right-[3px]",
  "bottom-left": "-bottom-[3px] -left-[3px]",
  "bottom-right": "-bottom-[3px] -right-[3px]",
};

export function CornerDot({ position, className }: CornerDotProps) {
  return (
    <span
      className={cn(
        "absolute w-2 h-2 bg-p-grey shrink-0 pointer-events-none z-10",
        positionMap[position],
        className
      )}
      aria-hidden="true"
    />
  );
}
