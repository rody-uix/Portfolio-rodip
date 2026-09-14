import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";

const skills = [
  "UX Research",
  "Design System",
  "Micro-interactions",
  "Visual Direction",
];

const projects = [
  {
    title: "Designing Converting Digital Agency Experience",
    description:
      "Digital agencies often struggle to communicate their expertise while guiding potential clients toward inquiry. This project focuses on solving that challenge by improving content hierarchy",
    year: "2026",
  },
  {
    title: "Designing Converting Digital Agency Experience",
    description:
      "Digital agencies often struggle to communicate their expertise while guiding potential clients toward inquiry. This project focuses on solving that challenge by improving content hierarchy",
    year: "2026",
  },
  {
    title: "Designing Converting Digital Agency Experience",
    description:
      "Digital agencies often struggle to communicate their expertise while guiding potential clients toward inquiry. This project focuses on solving that challenge by improving content hierarchy",
    year: "2026",
  },
];

export function RecentProjects() {
  return (
    <section className="relative max-w-[1920px] mx-auto pt-16 lg:pt-20 pb-32 px-4 xl:px-12">
      {/* 3-Column Container: Sticky Left Sidebar | Stacking Cards Center Column | Sticky Right Sidebar */}
      <div className="flex items-start justify-between gap-8 lg:gap-12 relative">
        {/* Left Sticky Sidebar (Constrained to section) */}
        <aside className="hidden xl:block w-[220px] shrink-0 sticky top-24 self-start z-30">
          <div className="pr-6 border-r border-p-grey/60">
            {/* Available status */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-p-green shrink-0 animate-pulse" />
              <span className="font-sans text-[13px] leading-[18.2px] tracking-[0.01em] text-p-main font-medium">
                Available for works
              </span>
            </div>

            {/* Profile photo */}
            <div className="relative w-[179px] h-[179px] bg-neutral-200 border border-neutral-300 mb-4 overflow-hidden rounded-xs">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-200" />
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
        <div className="flex-1 max-w-[1000px] mx-auto">
          <SectionHeader leftTitle="Recent" rightTitle="Projects" />

          {/* Big description heading */}
          <h2 className="mt-12 lg:mt-20 text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[54px] font-semibold leading-[1.15] tracking-[-0.015em] text-p-main font-adventor">
            A visual designer specializing in brand identity and visual
            communication{" "}
            <span className="text-p-text/50">
              — creating strategic visual systems that feel intentional, refined,
              and timeless.
            </span>
          </h2>

          {/* Vertical Card Stacking Container */}
          <div className="mt-12 lg:mt-16 relative space-y-[120px] sm:space-y-[180px] pb-32">
            {projects.map((project, i) => (
              <div
                key={i}
                className="sticky self-start transition-all duration-300"
                style={{
                  top: `${90 + i * 20}px`,
                  zIndex: 10 + i,
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  year={project.year}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Sticky Sidebar */}
        <aside className="hidden xl:block w-[238px] shrink-0 sticky top-24 self-start z-30">
          <div className="pl-6 border-l border-p-grey/60">
            {/* Skills list */}
            <div className="space-y-1">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="py-2 border-b border-p-grey/60"
                >
                  <span className="font-sans text-[14px] font-medium leading-[18px] text-p-main">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative illustration box */}
            <div className="mt-20 w-full aspect-square opacity-40 bg-neutral-200 border border-neutral-300 rounded-lg flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-b from-neutral-300 to-transparent rounded-lg" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
