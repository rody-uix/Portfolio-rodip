"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrambleText } from "@/components/ui/scramble-text";

interface CtaButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode; // For optional icons or extra elements
  title?: string;
  type?: "button" | "submit" | "reset";
}

export function CtaButton({
  label,
  href,
  onClick,
  className = "",
  children,
  title,
  type = "button",
}: CtaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <>
      <ScrambleText text={label} isHovered={isHovered} />
      {children}
    </>
  );

  // Frosted Glass style matching Navbar (bg-[#FAFAFFD9] backdrop-blur-md border border-p-grey)
  const glassStyle =
    "border border-p-grey bg-[#FAFAFFD9] backdrop-blur-md shadow-xs transition-all duration-300 hover:bg-white/95";

  const hasBgClass = className.includes("bg-");
  const finalClassName = cn(
    "cursor-pointer select-none inline-flex items-center justify-center rounded-xs",
    !hasBgClass && glassStyle,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={finalClassName}
        title={title}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={finalClassName}
      title={title}
    >
      {content}
    </button>
  );
}
