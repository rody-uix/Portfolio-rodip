"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  isHovered?: boolean;
  className?: string;
  duration?: number; // Total animation duration in ms (default 600ms)
  characterSet?: string;
}

const DEFAULT_CHARSET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?/~abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/~";

export function ScrambleText({
  text,
  isHovered,
  className = "",
  duration = 800,
  characterSet = DEFAULT_CHARSET,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startScramble = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const elapsedTime = currentTime - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);

      // Phase 1 (0-20%): All characters including the 1st letter scramble
      // Phase 2 (20-100%): Characters lock into true values left-to-right
      const resolveProgress = Math.max(0, (progress - 0.2) / 0.8);
      const resolvedCount = Math.floor(resolveProgress * text.length);

      const scrambled = text
        .split("")
        .map((char, index) => {
          // Preserve spaces and punctuation layout stability
          if (char === " " || char === "-" || char === "|" || char === "/") {
            return char;
          }
          if (index < resolvedCount) {
            return char;
          }
          const randomIndex = Math.floor(Math.random() * characterSet.length);
          return characterSet[randomIndex];
        })
        .join("");

      setDisplayText(scrambled);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [text, duration, characterSet]);

  useEffect(() => {
    if (isHovered) {
      startScramble();
    } else if (isHovered === false) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      requestAnimationFrame(() => setDisplayText(text));
    }
  }, [isHovered, startScramble, text]);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <span
      className={cn("relative inline-block whitespace-nowrap align-middle", className)}
      aria-label={text}
    >
      {/* Invisible original text holding exact layout width */}
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {text}
      </span>
      {/* Absolute overlay displaying animated scrambled text */}
      <span className="absolute inset-0 inline-flex items-center justify-center select-none pointer-events-none">
        {displayText}
      </span>
    </span>
  );
}
