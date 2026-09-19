"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DiamondCorner } from "@/components/ui/diamond-corner";
import { CtaButton } from "@/components/ui/cta-button";
import { labProjects } from "./labData";
import { LabProject } from "./labTypes";
import dynamic from "next/dynamic";

const LabCanvas = dynamic(
  () => import("./LabCanvas").then((m) => m.LabCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[550px] lg:min-h-[680px] bg-neutral-900/5 flex items-center justify-center text-p-text font-adventor">
        Loading 3D Card Stack...
      </div>
    ),
  }
);

export function LabSection() {
  const [selectedProject, setSelectedProject] = useState<LabProject | null>(null);
  const [hoveredProject, setHoveredProject] = useState<LabProject | null>(null);

  const activeProject = selectedProject || hoveredProject;

  return (
    <section id="lab" aria-labelledby="lab-heading" className="relative pt-0 pb-16 lg:pb-24 bg-p-bg">
      {/* Full-width section divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        {/* Section Header */}
        <div className="max-w-[1000px] mx-auto">
          {/* Description */}
          <p className="max-w-[850px] mx-auto text-center font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-text">
            This lab represents experimental work, tactile prototypes, 3D spatial interactions,
            and selected product design explorations — built through curiosity and freedom to test ideas.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP EXPERIENCE (>= 768px): Three.js + GSAP 3D Interactive Card Stack  */}
        {/* ========================================================================= */}
        <div className="hidden md:block mt-12 lg:mt-16 relative">
          <div className="relative border border-p-grey bg-white rounded-xs overflow-hidden shadow-2xs">
            <DiamondCorner position="top-left" />
            <DiamondCorner position="top-right" />
            <DiamondCorner position="bottom-left" />
            <DiamondCorner position="bottom-right" />

            {/* Three.js Canvas Area */}
            <div className="relative w-full h-[600px] lg:h-[680px]">
              <LabCanvas
                projects={labProjects}
                selectedProject={selectedProject}
                onSelectProject={setSelectedProject}
                onHoverProject={setHoveredProject}
              />

              {/* Floating Instructions / Hint */}
              <div className="absolute bottom-6 left-8 z-10 pointer-events-none flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-p-main animate-pulse" />
                <span className="font-adventor text-[13px] tracking-wider text-p-text uppercase">
                  {selectedProject
                    ? "Press Escape or click background to reset stack"
                    : "Scroll wheel to rotate • Hover & click card to inspect"}
                </span>
              </div>

              {/* Reset Stack Button when a project is selected */}
              {selectedProject && (
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-8 z-20 flex items-center gap-2 px-4 py-2 border border-p-main bg-white text-p-main font-moderniz text-[12px] font-medium uppercase hover:bg-p-main hover:text-white transition-colors rounded-xs cursor-pointer shadow-xs"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10H5M5 10L10 15M5 10L10 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Return to Stack
                </button>
              )}

              {/* Accessible HTML Overlay displaying Active/Selected Project Metadata */}
              <div
                className={`absolute top-6 left-8 max-w-[380px] p-6 bg-white/95 border border-p-grey backdrop-blur-md rounded-xs shadow-md transition-all duration-300 pointer-events-auto z-20 ${
                  activeProject
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {activeProject && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-adventor text-[12px] uppercase font-bold tracking-widest text-p-text/70">
                        {activeProject.category}
                      </span>
                      {activeProject.tags && (
                        <span className="text-[11px] font-adventor px-2 py-0.5 border border-p-grey bg-neutral-50 text-p-text rounded-xs">
                          {activeProject.tags[0]}
                        </span>
                      )}
                    </div>

                    <h3 className="font-moderniz text-[20px] font-bold text-p-main uppercase leading-tight">
                      {activeProject.title}
                    </h3>

                    <p className="font-adventor text-[14px] leading-[22px] text-p-text">
                      {activeProject.description}
                    </p>

                    <div className="pt-2">
                      <CtaButton
                        label="Explore Exploration"
                        href={activeProject.href}
                        className="inline-flex items-center gap-2 h-[38px] px-4 border border-p-main bg-p-main text-white font-moderniz text-[12px] uppercase hover:bg-neutral-800 transition-colors"
                      >
                        <svg
                          width="16"
                          height="16"
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE FALLBACK EXPERIENCE (< 768px): Lightweight HTML Project Grid       */}
        {/* ========================================================================= */}
        <div className="block md:hidden mt-10">
          <div className="grid grid-cols-1 gap-6">
            {labProjects.map((proj) => (
              <div
                key={proj.id}
                className="relative border border-p-grey bg-white p-5 rounded-xs flex flex-col justify-between space-y-4"
              >
                <DiamondCorner position="top-left" />
                <DiamondCorner position="top-right" />

                {/* Project Image */}
                <div className="relative w-full h-[220px] rounded-xs overflow-hidden border border-p-grey bg-neutral-100">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Metadata */}
                <div className="space-y-2">
                  <span className="font-adventor text-[12px] uppercase font-bold text-p-text/70 block">
                    {proj.category}
                  </span>

                  <h3 className="font-moderniz text-[18px] font-bold text-p-main uppercase">
                    {proj.title}
                  </h3>

                  <p className="font-adventor text-[14px] leading-[20px] text-p-text">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={proj.href}
                    className="inline-flex items-center justify-center gap-2 w-full h-[40px] px-4 border border-p-main bg-p-main text-white font-moderniz text-[12px] uppercase hover:bg-neutral-800 transition-colors rounded-xs"
                  >
                    <span>View Project</span>
                    <svg
                      width="16"
                      height="16"
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
