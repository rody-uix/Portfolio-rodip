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
      <div className="w-[87px] h-[87px] shrink-0 group-hover:scale-105 transition-all">
        <img
          src={iconSrc}
          alt={name}
          className="w-full h-full block object-contain"
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



