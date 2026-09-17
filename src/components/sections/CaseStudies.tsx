import { SectionHeader } from "@/components/ui/section-header";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { caseStudiesData } from "@/data/case-studies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 lg:py-24 relative">
      <div className="max-w-[1382px] mx-auto px-4 xl:px-0">
        {/* Centered Case Study Section Title */}
        <div className="flex justify-center w-full mb-12 lg:mb-16">
          <SectionHeader
            leftTitle="Case"
            rightTitle="Studies"
            className="mx-auto"
          />
        </div>

        {/* 12 Case Study Boxes with Repeating Opposing/Alternating Layout */}
        <div className="space-y-12 lg:space-y-16">
          {caseStudiesData.map((study, i) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              description={study.description}
              imagePosition={i % 2 === 0 ? "left" : "right"}
              viewUrl={`/case-studies/${study.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

