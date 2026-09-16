import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ToolCardProps {
  name: string;
  level?: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  iconSrc: string;
  className?: string;
}

export function ToolCard({ name, level, iconSrc, className }: ToolCardProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3 group select-none", className)}>
      {/* 87x87 Icon Box */}
      <div className="w-[87px] h-[87px] shrink-0 border border-[#EEEEEC] rounded-lg bg-white flex items-center justify-center p-3 shadow-2xs group-hover:border-p-grey group-hover:scale-105 transition-all">
        <Image
          src={iconSrc}
          alt={name}
          width={52}
          height={52}
          className="object-contain max-w-[52px] max-h-[52px]"
        />
      </div>

      {/* Name and Level Stack */}
      <div className="flex flex-col items-center text-center">
        <span className="font-adventor text-[18px] font-bold leading-[25.2px] text-black">
          {name}
        </span>
        {level && (
          <span className="font-adventor text-[14px] leading-[21px] text-[#515151] mt-0.5">
            {level}
          </span>
        )}
      </div>
    </div>
  );
}
