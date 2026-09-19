"use client";

import dynamic from "next/dynamic";
import { DiamondCorner } from "@/components/ui/diamond-corner";

const ShaderCube = dynamic(() => import("./ShaderCube"), {
  ssr: false,
  loading: () => (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[680px] bg-[#050505] flex items-center justify-center text-p-text font-adventor">
      Loading 3D Shader Cube...
    </div>
  ),
});

export function ShaderCubeWrapper() {
  return (
    <section
      id="section-4"
      aria-labelledby="section-4-heading"
      className="relative py-16 lg:py-24 bg-p-bg"
    >
      {/* Section Divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        {/* Section Subtext Only */}
        <div className="max-w-[1000px] mx-auto mb-10 text-center">
          <p className="font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-text max-w-[640px] mx-auto">
            An interactive WebGL cube rendered with a custom GLSL fragment shader. Drag to rotate the cube and scroll to zoom.
          </p>
        </div>

        {/* Bounded Card Container */}
        <div className="relative border border-p-grey bg-black rounded-xs overflow-hidden shadow-2xs">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          <ShaderCube />
        </div>
      </div>
    </section>
  );
}
