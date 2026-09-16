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

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn("cursor-pointer select-none", className)}
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
      className={cn("cursor-pointer select-none", className)}
      title={title}
    >
      {content}
    </button>
  );
}
