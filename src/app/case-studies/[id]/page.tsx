import { notFound } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { DiamondCorner } from "@/components/ui/diamond-corner";
import { CtaButton } from "@/components/ui/cta-button";
import { getCaseStudyById, caseStudiesData } from "@/data/case-studies";

interface CaseStudyDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps) {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) {
    return {
      title: "Case Study | Rodip Chettri",
    };
  }
  return {
    title: `${study.title} — Case Study | Rodip Chettri`,
    description: study.description,
  };
}

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    id: String(cs.id),
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { id } = await params;
  const study = getCaseStudyById(id);

  if (!study) {
    notFound();
  }

  // Calculate next study ID for bottom navigation
  const currentIndex = caseStudiesData.findIndex(
    (cs) => String(cs.id) === String(study.id)
  );
  const nextStudy =
    caseStudiesData[(currentIndex + 1) % caseStudiesData.length];

  return (
    <main className="bg-[#FFFAFA] min-h-screen text-p-main overflow-x-clip relative pt-20 sm:pt-24 pb-16">
      <Navbar />

      {/* Hero Section Container (1382px max width per 4th screen spec) */}
      <section className="max-w-[1382px] mx-auto px-4 sm:px-6 xl:px-0 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16">
        {/* Title Block (Design canvas spec: 1382px x 123px area) */}
        <div className="space-y-4 max-w-[1382px] mb-8 lg:mb-12">
          {/* Main Title 1 (MODERNIZ 900 size 32px leading 38.4px tracking -0.5%) */}
          <h1 className="font-moderniz font-black text-[22px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[34px] lg:leading-[38.4px] tracking-[-0.005em] text-p-main uppercase">
            {study.title}
          </h1>

          {/* Title 2 / Subtitle (TeX Gyre Adventor 400 size 20px leading 30px #515151) */}
          <h2 className="font-adventor font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] tracking-[0%] text-[#515151]">
            {study.description}
          </h2>
        </div>

        {/* Hero Showcase Media Box (Design Canvas Spec: 1382px width x 741.7px height, background #D9D9D9) */}
        <div className="relative w-full max-w-[1382px] mx-auto h-[240px] sm:h-[450px] lg:h-[741.7px] bg-[#D9D9D9] border border-neutral-300 shadow-xs rounded-xs overflow-hidden flex items-center justify-center group">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          {study.heroImageUrl ? (
            <Image
              src={study.heroImageUrl}
              alt={study.title}
              fill
              className="object-cover"
              sizes="(max-width: 1382px) 100vw, 1382px"
              priority
            />
          ) : (
            <div className="w-full h-full bg-[#D9D9D9] flex flex-col items-center justify-center p-6 text-center relative">
              {/* Subtle background grid graphics */}
              <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <span className="inline-block px-4 py-1.5 border border-neutral-400 bg-white/80 font-moderniz text-[11px] sm:text-[13px] uppercase tracking-widest text-[#515151] rounded-xs">
                  {study.client || "Case Study Showcase"}
                </span>
                <p className="font-moderniz font-black text-[18px] sm:text-[24px] lg:text-[28px] text-[#252525] uppercase max-w-[800px] leading-tight">
                  {study.title}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content & Showcase Cards (Two Column Split Layout per design canvas top 1361px) */}
      <section className="max-w-[1382px] mx-auto px-4 sm:px-6 xl:px-0 pt-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative">
          {/* Left Column: Sticky Title & Project Metadata (Fixed Sticky in Viewport top-middle) */}
          <aside className="w-full lg:w-[438px] shrink-0 lg:sticky lg:top-28 space-y-6 pt-2 z-20">
            <div className="space-y-4 p-6 sm:p-8 bg-white border border-p-grey relative shadow-xs">
              <DiamondCorner position="top-left" />
              <DiamondCorner position="top-right" />
              <DiamondCorner position="bottom-left" />
              <DiamondCorner position="bottom-right" />

              {/* H3 Sidebar Title (MODERNIZ 900 28px leading 40px #515151) */}
              <h3 className="font-moderniz font-black text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[34px] lg:leading-[40px] tracking-[-0.005em] text-[#515151] uppercase">
                {study.sidebarTitle || study.description}
              </h3>

              {/* Sidebar Subtitle (TeX Gyre Adventor 400 20px leading 30px #515151) */}
              <p className="font-adventor font-normal text-[15px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#515151]">
                {study.sidebarSubtitle || study.description}
              </p>

              {/* Project Metadata Stats */}
              <div className="pt-6 border-t border-neutral-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="block font-sans text-[12px] uppercase text-neutral-400 font-medium tracking-wider">
                    Role
                  </span>
                  <span className="font-sans text-[14px] sm:text-[15px] font-semibold text-p-main">
                    {study.role || "Lead Product Designer"}
                  </span>
                </div>
                <div>
                  <span className="block font-sans text-[12px] uppercase text-neutral-400 font-medium tracking-wider">
                    Year
                  </span>
                  <span className="font-sans text-[14px] sm:text-[15px] font-semibold text-p-main">
                    {study.year || "2026"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <CtaButton
                  label="Back To All Studies"
                  href="/case-studies"
                  className="w-full h-[42px] justify-center flex items-center bg-[#252525] border border-p-text font-sans text-[13px] font-medium tracking-[0.025em] uppercase text-[#DCDCDC] hover:bg-[#252525]/90 transition-colors"
                />
              </div>
            </div>
          </aside>

          {/* Right Column: Continuous Long Image Showcase Canvas (Single Outer Border, No Bottom Strokes Between Frames) */}
          <div className="flex-1 w-full max-w-[931px] bg-[#D9D9D9] border border-neutral-300 shadow-sm rounded-xs overflow-hidden relative">
            {/* 4 Corner Accents on Continuous Showcase Canvas */}
            <DiamondCorner position="top-left" />
            <DiamondCorner position="top-right" />
            <DiamondCorner position="bottom-left" />
            <DiamondCorner position="bottom-right" />

            <div className="flex flex-col space-y-0">
              {study.showcaseFrames.map((frame, index) => (
                <div
                  key={frame.id}
                  className="relative w-full max-w-[931px] min-h-[300px] sm:min-h-[480px] lg:h-[752px] bg-[#D9D9D9] flex flex-col justify-between p-6 sm:p-10 group border-b-0"
                >
                  {/* Frame Header Tag */}
                  <div className="flex items-center justify-between z-10">
                    <span className="font-moderniz text-[11px] sm:text-[13px] uppercase tracking-wider px-3 py-1 bg-white/90 border border-neutral-300 text-[#515151] rounded-xs font-bold">
                      Frame 0{index + 1}
                    </span>
                    <span className="font-sans text-[12px] uppercase tracking-widest text-[#515151]/80 font-mono">
                      931 × 752 SPEC
                    </span>
                  </div>

                  {/* Optional Mockup Image or Graphical Placeholder */}
                  {frame.imageUrl ? (
                    <Image
                      src={frame.imageUrl}
                      alt={frame.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 931px) 100vw, 931px"
                    />
                  ) : (
                    <div className="my-auto flex flex-col items-center justify-center text-center py-12 relative z-10 px-4">
                      {/* SVG Wireframe Graphic */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-neutral-400/60 bg-white/50 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            stroke="#515151"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M3 9H21"
                            stroke="#515151"
                            strokeWidth="1.5"
                          />
                          <circle cx="7" cy="6" r="1" fill="#515151" />
                          <circle cx="10" cy="6" r="1" fill="#515151" />
                          <circle cx="13" cy="6" r="1" fill="#515151" />
                          <path
                            d="M7 14L10 17L17 11"
                            stroke="#515151"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <h4 className="font-moderniz font-black text-[16px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] text-[#252525] uppercase max-w-[600px] mb-2">
                        {frame.title}
                      </h4>

                      {frame.description && (
                        <p className="font-adventor text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#515151] max-w-[540px]">
                          {frame.description}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Frame Footer Bar */}
                  <div className="pt-4 border-t border-neutral-300/40 flex items-center justify-between text-neutral-500 font-sans text-[12px] uppercase z-10">
                    <span>{study.title}</span>
                    <span className="font-mono">0{index + 1} / 05</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Pagination / Next Case Study Section */}
        <div className="mt-16 pt-12 border-t border-p-grey flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[1382px] mx-auto">
          <div>
            <span className="block font-sans text-[12px] uppercase tracking-wider text-[#515151]">
              Next Case Study
            </span>
            <h4 className="font-moderniz font-black text-[18px] sm:text-[22px] text-p-main uppercase mt-1">
              {nextStudy.title}
            </h4>
          </div>

          <CtaButton
            label="View Next Case Study"
            href={`/case-studies/${nextStudy.id}`}
            className="h-[44px] px-6 flex items-center gap-2 bg-[#252525] border border-p-text font-sans text-[14px] font-medium tracking-[0.025em] uppercase text-white hover:bg-[#252525]/90 transition-colors whitespace-nowrap"
          >
            <svg
              width="18"
              height="18"
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
      </section>

      <Footer />
    </main>
  );
}
