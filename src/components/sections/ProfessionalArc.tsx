"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { InteractiveStar } from "@/components/ui/interactive-star";

const defaultBullets = [
  "Turned ideas into responsive, high-fidelity web designs.",
  "Made content easier to read and navigate through better layout and structure.",
  "Bridged design and development using HTML, CSS, and Bootstrap.",
  "Designed marketing assets that improved clarity and user engagement.",
];

const experiences = [
  {
    id: "matchbest",
    company: "Matchbest Software Pvt. Ltd.",
    role: "Product Designer",
    type: "Full-time",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "(Gurugram/India)",
    logoSrc: "/matchbest.svg",
    companyColor: "text-p-main",
    bullets: defaultBullets,
  },
  {
    id: "images",
    company: "Images Multimedia Pvt. Ltd.",
    role: "UI/UX Designer",
    type: "Full-time",
    startDate: "Mar 2025",
    endDate: "Jan 2026",
    location: "(Delhi/India)",
    logoSrc: "/Group 5 (rasterized).svg",
    companyColor: "text-p-main",
    bullets: defaultBullets,
  },
  {
    id: "franchise",
    company: "Franchise India",
    role: "Jr. UI Designer/Developer",
    type: "Full-time",
    startDate: "Aug 2023",
    endDate: "Mar 2025",
    location: "(Faridabad/India)",
    logoSrc: "/franchiseindia.svg",
    companyColor: "text-p-main",
    bullets: defaultBullets,
  },
  {
    id: "entrepreneur",
    company: "Entrepreneur Media",
    role: "Jr. UI Designer/Developer",
    type: "Full-time",
    startDate: "Jul 2022",
    endDate: "Aug 2023",
    location: "(Faridabad/India)",
    logoSrc: "/entrepreneurindia.svg",
    companyColor: "text-p-red",
    bullets: [
      "Turned ideas into responsive, high-fidelity web designs.",
      "Made content easier to read and navigate through better layout and structure.",
      "Bridged design and development using HTML, CSS, and Bootstrap.",
      "Designed marketing assets that improved clarity and user engagement.",
    ],
  },
];

export function ProfessionalArc() {
  // Entrepreneur Media expanded by default; single-open accordion state
  const [openId, setOpenId] = useState<string | null>("entrepreneur");

  const toggleExperience = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-visible">
      {/* Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1000px] mx-auto px-4 xl:px-0">
        <SectionHeader leftTitle="Professional" rightTitle="Arc" />
      </div>

      <div className="max-w-[1100px] mx-auto mt-12 lg:mt-16 px-4 xl:px-0 space-y-8 relative">
        {/* Left Side Chess Queen Illustration */}
        <div className="hidden 2xl:block absolute -left-36 top-1/2 -translate-y-1/2 w-[110px] pointer-events-none opacity-90 z-20">
          <Image
            src="/queen (rasterized).svg"
            alt="Chess Queen"
            width={110}
            height={300}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side Chess Knight / Horse Illustration */}
        <div className="hidden 2xl:block absolute -right-36 top-1/2 -translate-y-1/2 w-[120px] pointer-events-none opacity-90 z-20">
          <Image
            src="/horse (rasterized).svg"
            alt="Chess Knight"
            width={120}
            height={300}
            className="w-full h-auto object-contain"
          />
        </div>
        {experiences.map((exp) => {
          const isExpanded = openId === exp.id;

          return (
            <div
              key={exp.id}
              className="pb-8 border-b border-p-grey relative group"
            >
              {/* Header trigger row */}
              <button
                type="button"
                onClick={() => toggleExperience(exp.id)}
                aria-expanded={isExpanded}
                aria-controls={`exp-details-${exp.id}`}
                className="w-full text-left cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-p-main rounded-xs"
              >
                {/* Left: Logo + Company & Role & Date info */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                  {/* Company logo container */}
                  <div className="w-[60px] h-[60px] shrink-0 rounded border border-[#EEEEEC] bg-white flex items-center justify-center p-2 shadow-2xs overflow-hidden">
                    <Image
                      src={exp.logoSrc}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="object-contain max-w-[48px] max-h-[48px]"
                    />
                  </div>

                  {/* Company & Role details */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span
                        className={`font-moderniz text-[15px] sm:text-[16px] font-bold leading-[25.2px] ${exp.companyColor}`}
                      >
                        {exp.company}
                      </span>
                      <span className="font-adventor text-[14px] sm:text-[16px] leading-[25.6px] text-p-text">
                        - {exp.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <span className="font-adventor text-[14px] sm:text-[16px] leading-[25.6px] text-p-text">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-2 font-adventor text-[14px] sm:text-[16px] leading-[25.6px] text-p-text">
                        {exp.startDate}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0"
                        >
                          <path
                            d="M2 5H8"
                            stroke="#515151"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                        {exp.endDate}
                      </span>
                      <span className="font-adventor text-[14px] sm:text-[16px] font-bold leading-[25.2px] text-p-text">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Star Icon Accent (reflects collapsed / expanded cross state) */}
                <div className="shrink-0 flex items-center justify-end">
                  <InteractiveStar active={isExpanded} />
                </div>
              </button>

              {/* Achievement bullets accordion collapse/expand animation */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={`exp-details-${exp.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-6 space-y-2 lg:pl-[92px]">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="font-adventor text-[14px] sm:text-[16px] leading-[25.6px] text-p-text flex items-start gap-2"
                        >
                          <span className="text-p-grey select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
