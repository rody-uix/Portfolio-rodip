"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Motion values for direct mouse tracking (small ball)
  const smallX = useMotionValue(-100);
  const smallY = useMotionValue(-100);

  // Spring physics for smooth trailing motion (big ball) matching CodePen easing
  const bigX = useSpring(smallX, { damping: 28, stiffness: 220, mass: 0.5 });
  const bigY = useSpring(smallY, { damping: 28, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Enable custom cursor only on desktop devices with fine pointer
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      smallX.set(e.clientX);
      smallY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Global delegation for interactive elements (links, buttons, CTAs, inputs)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest &&
        target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor="hover"]'
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [smallX, smallY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Big Cursor Ball (30px SVG, mix-blend-mode: difference, smooth 4x scale expansion on hover) */}
      <motion.div
        className="fixed top-0 left-0 w-[30px] h-[30px] pointer-events-none z-[9999]"
        style={{
          x: bigX,
          y: bigY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovered ? 4 : 1,
        }}
        transition={{
          scale: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="12" fill="#FFFFFF" />
        </svg>
      </motion.div>

      {/* Small Cursor Ball (10px SVG, snappy direct follow) */}
      <motion.div
        className="fixed top-0 left-0 w-[10px] h-[10px] pointer-events-none z-[9999]"
        style={{
          x: smallX,
          y: smallY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="4" fill="#FFFFFF" />
        </svg>
      </motion.div>
    </>
  );
}
