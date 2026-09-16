import { SectionHeader } from "@/components/ui/section-header";
import { CaseStudyCard } from "@/components/ui/case-study-card";

const caseStudies = [
  {
    id: 1,
    title: "Helped Busy Executives Consume Business Insights Faster",
    description: "UX Revamp of Entrepreneur Magazine's Daily Newsletter",
  },
  {
    id: 2,
    title: "Designing Converting Digital Agency Experience",
    description: "Strategic brand direction and interactive agency landing platform for enterprise clients.",
  },
  {
    id: 3,
    title: "Scalable UI Component System & Micro-Interactions",
    description: "Modular design system unifying multi-brand e-commerce stores with accessible tokens.",
  },
  {
    id: 4,
    title: "SaaS Analytics & High-Frequency Performance Dashboard",
    description: "Simplifying complex data visualization into real-time drag-and-drop widgets.",
  },
  {
    id: 5,
    title: "AI-Powered Workspace & Knowledge Graph Synthesis",
    description: "High-focus note-taking assistant with automated cross-document intelligence.",
  },
  {
    id: 6,
    title: "Fintech Mobile Banking & Payment Ecosystem",
    description: "Next-generation mobile finance platform delivering seamless global wire transfers.",
  },
  {
    id: 7,
    title: "E-Commerce Checkout Optimization & Conversion UX",
    description: "Streamlining multi-step transaction flows to boost checkout completion rates.",
  },
  {
    id: 8,
    title: "Healthcare Telemedicine App & Patient Portal",
    description: "Human-centered digital health platform facilitating effortless virtual consultations.",
  },
  {
    id: 9,
    title: "Creative Studio Web Motion & Interactive Design",
    description: "Immersive web graphics and interactive canvas experiences for brand storytelling.",
  },
  {
    id: 10,
    title: "AI Content Editor & Automated Document Workflow",
    description: "Enhancing publishing efficiency with real-time AI writing assistant and smart suggestions.",
  },
  {
    id: 11,
    title: "Smart Home IoT Mobile App & Device Control",
    description: "Intuitive interface for managing connected smart home hardware and automation scenes.",
  },
  {
    id: 12,
    title: "Cybersecurity Threat Monitoring & Incident Response",
    description: "Enterprise security dashboard visualizing real-time network threats and automated alerts.",
  },
];

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
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.id}
              title={study.title}
              description={study.description}
              imagePosition={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
