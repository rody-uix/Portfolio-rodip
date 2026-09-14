import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { InteractiveStar } from "@/components/ui/interactive-star";

const experiences = [
  {
    company: "Matchbest Software Pvt. Ltd",
    role: "Product Designer",
    type: "Full-time",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "(Gurugram/India)",
    logoSrc: "/matchbest.svg",
    companyColor: "text-p-main",
    bullets: [],
  },
  {
    company: "Images Multimedia Pvt. Ltd.",
    role: "UI/UX Designer",
    type: "Full-time",
    startDate: "Mar 2025",
    endDate: "Jan 2026",
    location: "(Delhi/India)",
    logoSrc: "/Group 5 (rasterized).svg",
    companyColor: "text-p-main",
    bullets: [],
  },
  {
    company: "Franchise India",
    role: "Jr. UI Designer/Developer",
    type: "Full-time",
    startDate: "Aug 2023",
    endDate: "Mar 2025",
    location: "(Faridabad/India)",
    logoSrc: "/franchiseindia.svg",
    companyColor: "text-p-main",
    bullets: [],
  },
  {
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
  return (
    <section className="py-16 lg:py-20">
      {/* Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1000px] mx-auto px-4 xl:px-0">
        <SectionHeader leftTitle="Professional" rightTitle="Arc" />
      </div>

      <div className="max-w-[1320px] mx-auto mt-12 lg:mt-16 px-4 xl:px-0 space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="pb-8 border-b border-p-grey relative group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
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

              {/* Right: Interactive Star Icon Accent (Black #000, rotates & turns red on click) */}
              <div className="shrink-0 flex items-center justify-end">
                <InteractiveStar />
              </div>
            </div>

            {/* Achievement bullets */}
            {exp.bullets.length > 0 && (
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
