"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/ui/section-header";
import { DiamondCorner } from "@/components/ui/diamond-corner";
import { CtaButton } from "@/components/ui/cta-button";
import { labProjects } from "@/components/lab/labData";

// Dynamically import WebGL lab effects without SSR
const Section2Particles = dynamic(
  () =>
    import("@/components/lab/Section2Particles").then(
      (m) => m.Section2Particles
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-[#000000] flex items-center justify-center text-[#888888] font-adventor text-[13px]">
        Loading 3D Particle Swarm...
      </div>
    ),
  }
);

const ShaderCube = dynamic(() => import("@/components/lab/ShaderCube"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#050505] flex items-center justify-center text-[#888888] font-adventor text-[13px]">
      Loading GLSL Shader Cube...
    </div>
  ),
});

const LabCanvas = dynamic(
  () => import("@/components/lab/LabCanvas").then((m) => m.LabCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-[#050505] flex items-center justify-center text-[#888888] font-adventor text-[13px]">
        Loading Volumetric Stack...
      </div>
    ),
  }
);

interface ArchiveCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  component: React.ReactNode;
}

const archiveCards: ArchiveCardData[] = [
  {
    id: "particle-swarm",
    title: "Particle Swarm",
    subtitle: "3D Motion Playground",
    description:
      "5-layer rotating HSL particle field with continuous hue shifting & cursor parallax tracking.",
    tags: ["WebGL", "Particles"],
    href: "/labs#section-2",
    component: <Section2Particles height="100%" />,
  },
  {
    id: "shader-cube",
    title: "Shader Cube",
    subtitle: "Generative Shaders",
    description:
      "Interactive WebGL cube rendered with custom procedural GLSL raymarched fragment shaders.",
    tags: ["GLSL", "Shaders"],
    href: "/labs#section-4",
    component: <ShaderCube height="100%" />,
  },
  {
    id: "spatial-canvas",
    title: "Spatial Canvas",
    subtitle: "Volumetric 3D Stack",
    description:
      "3D UI card stack built with WebGL shaders, Three.js raycasting & GSAP camera animations.",
    tags: ["3D UI", "Three.js"],
    href: "/labs",
    component: (
      <LabCanvas
        projects={labProjects}
        selectedProject={null}
        onSelectProject={() => {}}
        onHoverProject={() => {}}
      />
    ),
  },
];

export function PrototypeArchive() {
  return (
    <section className="pt-0 pb-0 relative">
      {/* 5 Vertical Background Grid Lines */}
      <div
        className="hidden xl:block absolute inset-0 pointer-events-none z-0 opacity-30"
        aria-hidden="true"
      >
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%-568px)]" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%-284px)]" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-1/2" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%+284px)]" />
        <span className="absolute top-0 bottom-0 w-px bg-[#DCDCDC] left-[calc(50%+568px)]" />
      </div>

      {/* Top Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20 relative z-10" />

      <div className="max-w-[1000px] mx-auto px-4 xl:px-0 relative z-10">
        <SectionHeader leftTitle="Prototype" rightTitle="Archive" />

        {/* Description */}
        <p className="mt-10 max-w-[901px] mx-auto text-center font-adventor text-[16px] leading-[25.6px] text-p-text">
          This section is my creative playground — a space for experimenting with
          interfaces, visuals, motion, and creative coding beyond regular
          projects. Built through curiosity, exploration, and the freedom to test
          ideas without limitations.
        </p>
      </div>

      {/* Cards container */}
      <div className="max-w-[1320px] mx-auto mt-12 lg:mt-16 px-4 xl:px-0 relative z-10">
        <div className="relative border border-p-grey bg-white">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          <div className="p-6 lg:p-[35px]">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[25px]">
              {archiveCards.map((card) => (
                <div
                  key={card.id}
                  className="flex-1 border border-p-grey flex flex-col bg-white overflow-hidden"
                >
                  {/* Interactive WebGL Card Box (Clicking redirects to Lab page) */}
                  <Link
                    href="/labs"
                    className="relative h-[260px] sm:h-[300px] lg:h-[340px] bg-black overflow-hidden block border-b border-p-grey group cursor-pointer"
                    title={`Explore ${card.title} in Labs`}
                  >
                    {/* Live WebGL Lab Effect Component */}
                    <div className="absolute inset-0 z-0">{card.component}</div>

                    {/* Subtle Overlay Badge on Hover (Only Open Lab ->) */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-end p-4 pointer-events-none">
                      <span className="font-moderniz text-[11px] tracking-[0.1em] text-white uppercase bg-p-main px-3 py-1.5 rounded-xs shadow-xs">
                        Open Lab →
                      </span>
                    </div>
                  </Link>

                  {/* Card Info & Meta */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <Link
                        href="/labs"
                        className="block font-adventor font-semibold text-[20px] lg:text-[22px] tracking-wide text-p-main leading-tight hover:text-p-accent transition-colors mb-1"
                      >
                        {card.title}
                      </Link>

                      {/* Subtitle / Category directly below title */}
                      <div className="font-adventor text-[12px] uppercase text-p-text/70 tracking-wider font-medium mb-3">
                        {card.subtitle}
                      </div>

                      {/* Description */}
                      <p className="font-adventor text-[14px] leading-[22px] text-p-text mb-4">
                        {card.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-adventor text-[11px] px-2 py-0.5 border border-p-grey text-p-text/80 rounded-xs uppercase tracking-wider bg-neutral-50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View All Labs CTA Button */}
      <div className="flex justify-center mt-10 lg:mt-12 relative z-10">
        <CtaButton
          label="View All Labs"
          href="/labs"
          className="flex items-center gap-2.5 h-[44px] px-6 border border-p-main bg-p-main text-white font-moderniz text-[13px] font-medium tracking-[0.05em] uppercase hover:bg-neutral-800 transition-colors shadow-xs"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15M15 10L10 5M15 10L10 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CtaButton>
      </div>

      {/* Bottom Full-width divider */}
      <div className="w-full h-px bg-p-grey mt-16 lg:mt-20 relative z-10" />
    </section>
  );
}
