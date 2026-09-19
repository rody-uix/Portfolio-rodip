
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";
import { SkillsListWithCursorImage } from "@/components/ui/skills-list-with-cursor-image";

const skills = [
  { label: "UX Research", image: "/images/hover-1.svg" },
  { label: "Design System", image: "/images/hover-2.svg" },
  { label: "Micro-interactions", image: "/images/hover-3.svg" },
  { label: "Visual Direction", image: "/images/hover-4.svg" },
];

const projects = [
  {
    title: "Designing Converting Digital Agency Experience",
    description:
      "Digital agencies often struggle to communicate their expertise while guiding potential clients toward inquiry. This project focuses on solving that challenge by improving content hierarchy.",
    year: "2026",
  },
  {
    title: "E-Commerce Design System & Micro-Interactions",
    description:
      "Scalable UI component library built to unify multi-brand online stores with accessible components, smooth tokenized design variables, and micro-interactions.",
    year: "2025",
  },
  {
    title: "SaaS Analytics & Performance Dashboard",
    description:
      "Complex data visualization platform simplifying high-frequency metrics into clear actionable insights, drag-and-drop widgets, and customizable real-time reports.",
    year: "2025",
  },
  {
    title: "AI-Powered Workspace & Productivity Suite",
    description:
      "Intelligent note-taking and knowledge graph assistant designed for high-focus workflows, instant cross-search, and automated document synthesis.",
    year: "2024",
  },
  {
    title: "Fintech Mobile Banking & Payment Ecosystem",
    description:
      "Next-generation mobile finance platform delivering seamless global wire transfers, multi-currency accounts, and intuitive spend analytics.",
    year: "2024",
  },
];

export function RecentProjects() {
  return (
    <section className="relative max-w-[1920px] mx-auto px-4 xl:px-12">
      {/* 2 Full-Height Vertical Lines connecting Upper & Lower Horizontal Lines */}
      <div className="hidden xl:block absolute top-0 bottom-0 left-[268px] w-px bg-p-grey/60 pointer-events-none z-10" />
      <div className="hidden xl:block absolute top-0 bottom-0 right-[286px] w-px bg-p-grey/60 pointer-events-none z-10" />

      {/* 3-Column Container: Sticky Left Sidebar | Stacking Cards Center Column | Sticky Right Sidebar */}
      <div className="flex items-start justify-between gap-8 lg:gap-12 relative">
        {/* Left Sticky Sidebar (Constrained to section) */}
        <aside className="hidden xl:block w-[220px] shrink-0 sticky top-24 self-start z-30">
          <div className="pr-6 pt-16 lg:pt-20 pb-16 lg:pb-24">
            {/* Available status */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-p-green shrink-0 animate-pulse" />
              <span className="font-sans text-[13px] leading-[18.2px] tracking-[0.01em] text-p-main font-medium">
                Available for works
              </span>
            </div>

            {/* Profile photo */}
            <div className="relative w-[179px] h-[179px] border border-neutral-300 mb-4 overflow-hidden rounded-xs bg-[#2E42B0] shadow-xs">
              <Image
                src="/Heaven cannot brook two suns, nor earth two masters - Alexander The Great_ 1.svg"
                alt="Profile Statue"
                width={179}
                height={179}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-1">
              <p className="font-sans text-[14px] font-bold leading-[18px] text-p-main">
                Product Designer
              </p>
              <p className="font-sans text-[14px] font-medium leading-[18px] text-p-main">
                Since 2022
              </p>
              <p className="font-sans text-[14px] leading-[20px] text-p-text">
                Based in Gurugram
              </p>
            </div>
          </div>
        </aside>

        {/* Center Content Column with Vertical Stacking Project Cards */}
        <div className="flex-1 max-w-[1000px] mx-auto pt-16 lg:pt-20 pb-16 lg:pb-24">
          <SectionHeader leftTitle="Recent" rightTitle="Projects" />

          {/* Mobile Reflow Container (<1280px Viewports) - Side-by-side [ GROUP 1: PROFILE ] | [ GROUP 2: CAPABILITIES ] */}
          <div className="block xl:hidden mt-8 mb-10 pb-8 border-b border-p-grey/60">
            <div className="flex flex-row items-start justify-between gap-3 sm:gap-8">
              {/* GROUP 1 — PROFILE (Unified Group) */}
              <div className="flex-1 min-w-0 space-y-3">
                {/* Available status */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 rounded-full bg-p-green shrink-0 animate-pulse" />
                  <span className="font-sans text-[11px] sm:text-[13px] leading-[16px] sm:leading-[18.2px] tracking-[0.01em] text-p-main font-medium">
                    Available for works
                  </span>
                </div>

                {/* Profile photo */}
                <div className="relative w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] border border-neutral-300 overflow-hidden rounded-xs shrink-0 bg-[#2E42B0]">
                  <Image
                    src="/Heaven cannot brook two suns, nor earth two masters - Alexander The Great_ 1.svg"
                    alt="Profile Statue"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="space-y-0.5 sm:space-y-1">
                  <p className="font-sans text-[12px] sm:text-[14px] font-bold leading-[16px] sm:leading-[18px] text-p-main">
                    Product Designer
                  </p>
                  <p className="font-sans text-[12px] sm:text-[14px] font-medium leading-[16px] sm:leading-[18px] text-p-main">
                    Since 2022
                  </p>
                  <p className="font-sans text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-p-text">
                    Based in Gurugram
                  </p>
                </div>
              </div>

              {/* GROUP 2 — CAPABILITIES (Unified Group) */}
              <div className="flex-1 min-w-0 pl-3 sm:pl-8 border-l border-p-grey/60">
                <SkillsListWithCursorImage
                  items={skills}
                  itemClassName="py-1.5 sm:py-2 last:border-b-0"
                  textClassName="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px]"
                />
              </div>
            </div>
          </div>

          {/* Big description heading */}
          <h2 className="mt-8 lg:mt-20 text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[54px] font-semibold leading-[1.15] tracking-[-0.015em] text-p-main font-adventor">
            A visual designer specializing in brand identity and visual
            communication{" "}
            <span className="text-p-text/50">
              — creating strategic visual systems that feel intentional, refined,
              and timeless.
            </span>
          </h2>

          {/* Vertical Card Stacking Container */}
          <div className="mt-12 lg:mt-16 relative pb-[30vh]">
            {projects.map((project, i) => (
              <div
                key={i}
                className="sticky top-[85px] sm:top-[110px] mb-[35vh] sm:mb-[45vh]"
                style={{
                  zIndex: 10 + i,
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  year={project.year}
                  viewUrl={`/case-studies/${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Sticky Sidebar */}
        <aside className="hidden xl:block w-[238px] shrink-0 sticky top-24 self-start z-30">
          <div className="pl-6 pt-16 lg:pt-20 pb-16 lg:pb-24">
            {/* Skills list with cursor image follow */}
            <SkillsListWithCursorImage items={skills} />

            {/* God / Statue Illustration (Right Side - Edge to Edge from left border line to screen edge) */}
            <div className="mt-12 -ml-6 -mr-4 xl:-mr-12 opacity-95 pointer-events-none overflow-hidden">
              <Image
                src="/god (rasterized).svg"
                alt="God Statue Line Art"
                width={300}
                height={160}
                className="w-full h-auto object-cover object-left"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
