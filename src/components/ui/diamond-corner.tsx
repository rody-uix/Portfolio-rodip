import Image from "next/image";
import { cn } from "@/lib/utils";

interface DiamondCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

const positionMap = {
  "top-left": "-top-[9.5px] -left-[9.5px]",
  "top-right": "-top-[9.5px] -right-[9.5px]",
  "bottom-left": "-bottom-[9.5px] -left-[9.5px]",
  "bottom-right": "-bottom-[9.5px] -right-[9.5px]",
};

export function DiamondCorner({ position, className }: DiamondCornerProps) {
  return (
    <div
      className={cn(
        "absolute w-[19px] h-[19px] shrink-0 pointer-events-none z-20 flex items-center justify-center",
        positionMap[position],
        className
      )}
      aria-hidden="true"
    >
      <Image
        src="/Vector.svg"
        alt="Corner star vector"
        width={19}
        height={19}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
