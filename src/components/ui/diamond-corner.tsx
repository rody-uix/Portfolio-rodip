import { cn } from "@/lib/utils";

interface DiamondCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

const positionMap = {
  "top-left": "-top-[8px] -left-[8px]",
  "top-right": "-top-[8px] -right-[8px]",
  "bottom-left": "-bottom-[8px] -left-[8px]",
  "bottom-right": "-bottom-[8px] -right-[8px]",
};

export function DiamondCorner({ position, className }: DiamondCornerProps) {
  return (
    <span
      className={cn(
        "absolute w-4 h-4 bg-p-grey rotate-45 pointer-events-none",
        positionMap[position],
        className
      )}
      aria-hidden="true"
    />
  );
}
