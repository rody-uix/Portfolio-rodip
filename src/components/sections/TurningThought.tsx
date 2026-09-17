import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { DiamondCorner } from "@/components/ui/diamond-corner";

const services = [
  {
    title: "Strategy & direction",
    description:
      "Shaping thoughtful digital experiences through clear vision, intentional decisions, and product-focused problem solving.",
    iconSrc: "/strategy.svg",
  },
  {
    title: "Design Systems",
    description:
      "Building scalable systems that create consistency, improve collaboration, and keep products efficient as they grow.",
    iconSrc: "/designsystem.svg",
  },
  {
    title: "Interface design",
    description:
      "Crafting clean, intuitive interfaces that balance usability, visual clarity, and modern digital aesthetics.",
    iconSrc: "/interfacedesing.svg",
  },
  {
    title: "Web & product design",
    description:
      "Designing end-to-end digital products — from immersive landing pages to fully realized user experiences.",
    iconSrc: "/webproduct.svg",
  },
  {
    title: "UX & usability",
    description:
      "Focusing on user research, testing, and iteration to create experiences that are both intuitive and impactful.",
    iconSrc: "/uxusability.svg",
  },
  {
    title: "Launch-ready delivery",
    description:
      "Delivering polished, production-ready assets with structured systems, precise details, and developer-friendly handoff.",
    iconSrc: "/lunchready.svg",
  },
];

export function TurningThought() {
  return (
    <section className="py-16 lg:py-20 relative overflow-visible">
      {/* Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1000px] mx-auto px-4 xl:px-0">
        <SectionHeader leftTitle="Turning thought" rightTitle="Into existence" />
      </div>

      {/* Service grid */}
      <div className="max-w-[1200px] mx-auto mt-16 px-4 xl:px-0 relative">
        <div className="relative">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative border border-p-grey -mt-px -ml-px bg-white"
              >
                <div className="relative min-h-[266px] h-auto p-6 flex flex-col justify-between">
                  {/* Icon area */}
                  <div className="flex justify-end mb-4">
                    <div className="w-[70px] h-[70px] sm:w-[84px] sm:h-[84px] flex items-center justify-center shrink-0">
                      <Image
                        src={service.iconSrc}
                        alt={service.title}
                        width={84}
                        height={84}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="space-y-3">
                    <h3 className="font-moderniz text-[16px] font-bold leading-[22px] text-p-main uppercase">
                      {service.title}
                    </h3>
                    <p className="font-adventor text-[15px] leading-[24px] text-p-text">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side illustration (Heaven cannot brook SVG) */}
        <div className="hidden 2xl:block absolute -right-36 top-1/2 -translate-y-1/2 w-[280px] pointer-events-none opacity-95 z-20">
          <Image
            src="/Heaven cannot brook two suns, nor earth two masters - Alexander The Great_ 1.svg"
            alt="Heaven Cannot Brook Illustration"
            width={280}
            height={350}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
