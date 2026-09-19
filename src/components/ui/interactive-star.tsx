"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveStarProps {
  className?: string;
  initialActive?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export function InteractiveStar({
  className,
  initialActive = false,
  active: controlledActive,
  onClick,
}: InteractiveStarProps) {
  const [internalActive, setInternalActive] = useState(initialActive);

  const isControlled = controlledActive !== undefined;
  const active = isControlled ? controlledActive : internalActive;

  const content = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "w-8 h-8 sm:w-9 sm:h-9 transition-colors duration-500 ease-in-out shrink-0",
        active ? "text-p-red" : "text-p-main"
      )}
      style={{
        color: active ? "#FF0004" : "#252525",
      }}
    >
      <path
        d="M20.1272 0C20.2465 0.298786 20.2853 1.45441 20.3557 1.84486C20.4344 2.28343 20.4735 2.84912 20.5465 3.30839C21.0911 6.74015 21.5401 10.753 23.4049 13.7592C24.0954 14.8901 25.0286 15.8535 26.1366 16.5801C29.0885 18.5412 33.8074 19.1229 37.2629 19.6368C38.1242 19.7648 39.3772 19.862 40.1566 20.0453C38.8584 20.1093 37.5483 20.3082 36.2533 20.5033C32.8468 21.0169 28.8748 21.5882 25.9582 23.5332C22.6918 25.7112 21.6467 29.9148 21.0103 33.5703C20.7613 35.0026 20.5439 36.44 20.358 37.8816C20.294 38.3651 20.2309 38.8474 20.1805 39.3324C20.1585 39.5455 20.1921 39.8188 20.1594 39.9965L20.1212 40C19.9567 39.1957 19.8759 38.0764 19.7468 37.2087C19.1695 33.3245 18.5908 28.2463 16.0344 25.1316C13.4868 22.0277 8.58226 21.2185 4.85212 20.6365C3.26664 20.389 1.60404 20.1455 0 20.0143C0.29702 19.9527 0.702032 19.9202 1.0111 19.8858C1.4902 19.834 1.96837 19.774 2.44547 19.7063C6.18667 19.1851 10.9101 18.6035 14.1153 16.5497C17.3586 14.4715 18.4608 10.465 19.1235 6.87243C19.3783 5.49732 19.5977 4.1159 19.7813 2.72949C19.8577 2.18209 19.9272 1.63371 19.9894 1.08452C20.025 0.766537 20.0557 0.336829 20.1188 0.0389115L20.1272 0Z"
        fill="currentColor"
      />
    </svg>
  );

  const containerClasses = cn(
    "inline-flex items-center justify-center p-1 rounded-full focus:outline-none transition-transform duration-500 ease-in-out origin-center shrink-0",
    active ? "rotate-45" : "rotate-0",
    className
  );

  if (isControlled) {
    return (
      <span
        className={containerClasses}
        style={{
          transform: active ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        {content}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        if (onClick) onClick();
        else setInternalActive((prev) => !prev);
      }}
      className={cn(containerClasses, "cursor-pointer hover:scale-110 active:scale-95")}
      style={{
        transform: active ? "rotate(45deg)" : "rotate(0deg)",
      }}
      title={active ? "Click to reset rotation" : "Click to rotate 45 deg & turn true red"}
      aria-label="Interactive Star"
      aria-pressed={active}
    >
      {content}
    </button>
  );
}


