import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import ScrollVelocityCarousel from "@/components/sections/ScrollVelocityCarousel";
import { LabSection } from "@/components/lab/LabSection";
import { Section2ParticlesWrapper } from "@/components/lab/Section2ParticlesWrapper";
import { ShaderCubeWrapper } from "@/components/lab/ShaderCubeWrapper";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Labs & Experiments | Rodip Chettri",
  description:
    "Creative playground exploring interfaces, 3D motion, visual experiments, and generative web experiences.",
};

const prototypeEffects = [
  { id: "particles", title: "Interactive Particle Field" },
  { id: "shader-cube", title: "Interactive Shader Cube" },
];

export default function LabsPage() {
  return (
    <main className="bg-p-bg min-h-screen text-p-main overflow-x-clip">
      <Navbar />
      <ScrollVelocityCarousel title="Prototype Labs" count={prototypeEffects.length} />
      <LabSection />
      <Section2ParticlesWrapper />
      <ShaderCubeWrapper />
      <Footer />
    </main>
  );
}
