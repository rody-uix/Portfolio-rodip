"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const PANEL_COUNT = 8;

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const panelTransition = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1] as const, // Custom smooth cubic-bezier (zero bounce/overshoot)
};

const panelVariants = {
  initial: { y: "0%" },
  animate: {
    y: "-100%",
    transition: panelTransition,
  },
  exit: {
    y: "0%",
    transition: panelTransition,
  },
};

export function CurtainTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={containerVariants}
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          {Array.from({ length: PANEL_COUNT }).map((_, i) => (
            <motion.div
              key={i}
              variants={panelVariants}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${(100 / PANEL_COUNT) * i}%`,
                width: `${100 / PANEL_COUNT}%`,
                backgroundColor: "#0a0a0a",
                transformOrigin: "top",
              }}
            />
          ))}
        </div>

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
