import { SectionHeader } from "@/components/ui/section-header";
import { DiamondCorner } from "@/components/ui/diamond-corner";

const services = [
  {
    title: "Strategy & direction",
    description:
      "Shaping thoughtful digital experiences through clear vision, intentional decisions, and product-focused problem solving.",
    iconColor: "#FF0004",
  },
  {
    title: "Design Systems",
    description:
      "Building scalable systems that create consistency, improve collaboration, and keep products efficient as they grow.",
    iconColor: "#6366F1",
  },
  {
    title: "Interface design",
    description:
      "Crafting clean, intuitive interfaces that balance usability, visual clarity, and modern digital aesthetics.",
    iconColor: "#14B8A6",
  },
  {
    title: "Web & product design",
    description:
      "Designing end-to-end digital products — from immersive landing pages to fully realized user experiences.",
    iconColor: "#FF0004",
  },
  {
    title: "UX & usability",
    description:
      "Focusing on user research, testing, and iteration to create experiences that are both intuitive and impactful.",
    iconColor: "#FF0004",
  },
  {
    title: "Launch-ready delivery",
    description:
      "Delivering polished, production-ready assets with structured systems, precise details, and developer-friendly handoff.",
    iconColor: "#FF0004",
  },
];

export function TurningThought() {
  return (
    <section className="py-16 lg:py-20">
      {/* Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1000px] mx-auto px-4 xl:px-0">
        <SectionHeader leftTitle="Turning thought" rightTitle="Into existence" />
      </div>

      {/* Service grid */}
      <div className="max-w-[1320px] mx-auto mt-16 px-4 xl:px-0 relative">
        <div className="relative">
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="relative border-t border-r border-p-grey bg-white"
                style={{
                  borderBottom: i >= 3 ? "1px solid #DCDCDC" : undefined,
                  borderLeft: i % 3 === 0 ? "1px solid #DCDCDC" : undefined,
                }}
              >
                <div className="relative min-h-[266px] h-auto p-6 flex flex-col justify-between">
                  {/* Icon area */}
                  <div className="flex justify-end mb-6">
                    <div
                      className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded opacity-80 shrink-0"
                      style={{ backgroundColor: service.iconColor }}
                      aria-hidden="true"
                    />
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
      </div>
    </section>
  );
}
