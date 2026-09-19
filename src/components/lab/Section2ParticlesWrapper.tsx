"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { DiamondCorner } from "@/components/ui/diamond-corner";

const Section2Particles = dynamic(
  () => import("./Section2Particles").then((m) => m.Section2Particles),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[680px] bg-[#000000] flex items-center justify-center text-p-text font-adventor">
        Loading 3D Particle Field...
      </div>
    ),
  }
);

export function Section2ParticlesWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="section-2"
      aria-labelledby="section-2-heading"
      className="relative py-16 lg:py-24 bg-p-bg"
    >
      {/* Section Divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        {/* Section Subtext */}
        <div className="max-w-[1000px] mx-auto mb-10 text-center">
          <p className="font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-text max-w-[640px] mx-auto">
            3D rotating particle system featuring 5 depth layers, continuous HSL hue shifting, and camera parallax tracking.
          </p>
        </div>

        {/* Bounded Canvas Container */}
        <div className="relative border border-p-grey bg-black rounded-xs overflow-hidden shadow-2xs">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          <div
            ref={containerRef}
            className="relative w-full h-[500px] sm:h-[600px] lg:h-[680px] bg-[#000000]"
          >
            <Section2Particles />

            {/* Interaction Hint */}
            <div className="absolute bottom-6 left-8 z-10 pointer-events-none flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-adventor text-[13px] tracking-wider text-white/80 uppercase font-medium">
                Move cursor over canvas to steer camera
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
