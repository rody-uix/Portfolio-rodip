"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { InteractiveStar } from "@/components/ui/interactive-star";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  logoSrc: string;
  companyColor: string;
  challenge: string[];
  whatIDid: string[];
  outcome: string[];
  whatILearned: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "matchbest",
    company: "Matchbest Group",
    role: "Product / UX Designer",
    type: "Full-time",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "(Gurugram/India)",
    logoSrc: "/matchbest.svg",
    companyColor: "text-p-main",
    challenge: [
      "Working on SaaS products with complex workflows, multiple user roles, and evolving product requirements.",
      "Needed to make complex journeys easier to understand while keeping the product scalable.",
    ],
    whatIDid: [
      "Led end-to-end UX from research and problem definition to wireframes, UI, prototyping, and developer handoff.",
      "Simplified complex user flows and information architecture to reduce friction across key journeys.",
      "Introduced structured UX thinking into product decisions by balancing user needs with business goals.",
      "Built scalable components and design patterns to maintain consistency across the product.",
      "Worked closely with developers throughout implementation to improve design-to-code accuracy.",
      "Designed experiences for AI-integrated features, focusing on making intelligent systems easier to understand and use.",
    ],
    outcome: [
      "Improved onboarding and reduced friction across important user journeys.",
      "Created more consistent and scalable product experiences.",
      "Improved collaboration between design and development through closer implementation reviews.",
    ],
    whatILearned:
      "Product design is not just about creating interfaces — it is about understanding the problem, making trade-offs, and measuring whether the solution actually works.",
  },
  {
    id: "images",
    company: "IMAGES Group",
    role: "UI/UX Designer",
    type: "Full-time",
    startDate: "Mar 2025",
    endDate: "Jan 2026",
    location: "(Delhi/India)",
    logoSrc: "/imagesgroup.svg",
    companyColor: "text-p-main",
    challenge: [
      "Design requirements came from multiple teams across websites, marketing, events, and content.",
      "The challenge was maintaining a consistent brand experience while delivering quickly across different formats.",
    ],
    whatIDid: [
      "Worked across website revamps, marketing campaigns, emailers, Google Ads, LinkedIn, social media, and content graphics.",
      "Created and maintained visual systems across different digital touchpoints.",
      "Collaborated with marketing and product teams to translate communication goals into effective visual experiences.",
      "Optimized workflows to handle fast-moving campaign requirements without compromising quality.",
    ],
    outcome: [
      "Supported high-volume campaign execution with consistent visual quality.",
      "Improved consistency across the company's digital communication.",
      "Built stronger understanding of how design supports both user experience and business communication.",
    ],
    whatILearned:
      "Good design needs to work within real business constraints — speed, consistency, communication goals, and technical limitations.",
  },
  {
    id: "franchise",
    company: "Franchise India",
    role: "User Experience Designer",
    type: "Full-time",
    startDate: "Aug 2023",
    endDate: "Mar 2025",
    location: "(Faridabad/India)",
    logoSrc: "/franchiseindia.svg",
    companyColor: "text-p-main",
    challenge: [
      "The company had a high-volume digital communication pipeline requiring frequent emailers and newsletters.",
      "Designs needed to remain visually consistent while working reliably across different email clients and devices.",
    ],
    whatIDid: [
      "Contributed to nearly 90% of the emailer production cycle.",
      "Designed and developed around 6 emailers and 3 newsletters per day.",
      "Reviewed and optimized existing templates and layouts for better usability and performance.",
      "Worked with HTML/CSS to implement responsive designs and solve front-end issues.",
      "Contributed to website and landing-page design alongside email and marketing experiences.",
    ],
    outcome: [
      "Supported a high-volume communication pipeline with consistent and timely delivery.",
      "Improved the efficiency and reliability of email design and development workflows.",
      "Developed stronger understanding of responsive design and real-world implementation constraints.",
    ],
    whatILearned:
      "Designing something is only one part of the process — understanding how it will actually be built and experienced makes the solution stronger.",
  },
  {
    id: "entrepreneur",
    company: "Entrepreneur Media",
    role: "Associate UI/UX Designer / Developer",
    type: "Full-time",
    startDate: "Jul 2022",
    endDate: "Aug 2023",
    location: "(Faridabad/India)",
    logoSrc: "/entrepreneurindia.svg",
    companyColor: "text-p-main",
    challenge: [
      "Working across multiple active websites with frequent content, event, and design updates.",
      "Needed to deliver interfaces quickly while maintaining usability, visual consistency, and implementation accuracy.",
    ],
    whatIDid: [
      "Designed UI for multiple websites and created new layouts for ongoing updates.",
      "Supported responsive front-end development using HTML, CSS, and JavaScript.",
      "Worked with developers to implement designs and resolve front-end issues.",
      "Managed content updates and contributed to basic SEO improvements.",
      "Maintained design consistency across fast-moving digital experiences.",
    ],
    outcome: [
      "Helped maintain accurate and responsive website experiences during frequent updates.",
      "Built hands-on experience across both design and development.",
      "Developed a strong foundation in understanding how design decisions translate into real products.",
    ],
    whatILearned:
      "My early design + development experience taught me to think beyond the Figma file and consider the complete journey from problem → design → implementation → user experience.",
  },
];

export function ProfessionalArc() {
  // First item open by default; single-open toggle state
  const [openId, setOpenId] = useState<string | null>("matchbest");

  const toggleExperience = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-visible w-full">
      {/* Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      {/* Left Edge Screen Chess Queen Illustration */}
      <div className="hidden lg:block absolute left-0 xl:left-2 2xl:left-4 top-1/2 -translate-y-1/2 h-[320px] xl:h-[400px] w-auto pointer-events-none opacity-90 z-20">
        <Image
          src="/queen (rasterized).svg"
          alt="Chess Queen"
          width={150}
          height={400}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      {/* Right Edge Screen Chess Knight / Horse Illustration */}
      <div className="hidden lg:block absolute right-0 xl:right-2 2xl:right-4 top-1/2 -translate-y-1/2 h-[320px] xl:h-[400px] w-auto pointer-events-none opacity-90 z-20">
        <Image
          src="/horse (rasterized).svg"
          alt="Chess Knight"
          width={150}
          height={400}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 xl:px-0">
        <SectionHeader leftTitle="Professional" rightTitle="Arc" />
      </div>

      <div className="max-w-[1100px] mx-auto mt-12 lg:mt-16 px-4 xl:px-0 space-y-8 relative">
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

                {/* Right: Interactive Star Icon Accent */}
                <div className="shrink-0 flex items-center justify-end">
                  <InteractiveStar active={isExpanded} />
                </div>
              </button>

              {/* Achievement bullets & detailed sections accordion collapse/expand animation */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={`exp-details-${exp.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 lg:pl-[92px] space-y-6 pt-2">
                      {/* The Challenge */}
                      <div>
                        <h4 className="font-moderniz text-[13px] font-bold uppercase tracking-wider text-p-main mb-2">
                          The Challenge
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.challenge.map((bullet, i) => (
                            <li
                              key={i}
                              className="font-adventor text-[14px] sm:text-[15px] leading-[24px] text-p-text flex items-start gap-2"
                            >
                              <span className="text-p-grey select-none">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What I Did */}
                      <div>
                        <h4 className="font-moderniz text-[13px] font-bold uppercase tracking-wider text-p-main mb-2">
                          What I Did
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.whatIDid.map((bullet, i) => (
                            <li
                              key={i}
                              className="font-adventor text-[14px] sm:text-[15px] leading-[24px] text-p-text flex items-start gap-2"
                            >
                              <span className="text-p-grey select-none">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcome */}
                      <div>
                        <h4 className="font-moderniz text-[13px] font-bold uppercase tracking-wider text-p-main mb-2">
                          Outcome
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.outcome.map((bullet, i) => (
                            <li
                              key={i}
                              className="font-adventor text-[14px] sm:text-[15px] leading-[24px] text-p-text flex items-start gap-2"
                            >
                              <span className="text-p-grey select-none">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What I Learned */}
                      <div className="p-4 border border-p-grey bg-neutral-50/50 rounded-xs">
                        <h4 className="font-moderniz text-[12px] font-bold uppercase tracking-wider text-p-main/80 mb-1.5">
                          What I Learned
                        </h4>
                        <p className="font-adventor text-[14px] sm:text-[15px] leading-[24px] text-p-main italic">
                          &ldquo;{exp.whatILearned}&rdquo;
                        </p>
                      </div>
                    </div>
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

