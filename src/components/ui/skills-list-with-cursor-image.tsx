"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface SkillItem {
  label: string;
  image: string;
}

interface SkillsListWithCursorImageProps {
  items: SkillItem[];
  className?: string;
  itemClassName?: string;
  textClassName?: string;
}

export function SkillsListWithCursorImage({
  items,
  className,
  itemClassName,
  textClassName,
}: SkillsListWithCursorImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isOver, setIsOver] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  // Listen for reduced motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Motion values for raw cursor position relative to container
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Soft spring configuration for smooth trailing effect
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Velocity-derived skew
  const vx = useVelocity(cursorX);
  const vy = useVelocity(cursorY);

  const rawSkewX = useTransform(vy, [-1000, 1000], [-15, 15]);
  const rawSkewY = useTransform(vx, [-1000, 1000], [15, -15]);

  const springSkewX = useSpring(rawSkewX, springConfig);
  const springSkewY = useSpring(rawSkewY, springConfig);

  const skewX = prefersReducedMotion ? 0 : springSkewX;
  const skewY = prefersReducedMotion ? 0 : springSkewY;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => {
        setIsOver(false);
        setActiveImage(null);
      }}
      className={cn("relative overflow-visible", className)}
    >
      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item.label}
            onMouseEnter={() => setActiveImage(item.image)}
            className={cn(
              "py-2 border-b border-p-grey/60 cursor-pointer group transition-colors hover:border-p-main/40",
              itemClassName
            )}
          >
            <span
              className={cn(
                "font-sans text-[14px] font-medium leading-[18px] text-p-main group-hover:text-p-main transition-colors block select-none",
                textClassName
              )}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Floating cursor image */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x,
          y,
          skewX,
          skewY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 50,
        }}
        animate={{
          opacity: isOver && activeImage ? 1 : 0,
          scale: isOver && activeImage ? 1 : 0.85,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {activeImage && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={activeImage}
            alt=""
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow:
                "0 20px 30px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.08)",
              display: "block",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
