import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import ScrollVelocityCarousel from "@/components/sections/ScrollVelocityCarousel";
import { LabSection } from "@/components/lab/LabSection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Labs & Experiments | Rodip Chettri",
  description:
    "Creative playground exploring interfaces, 3D motion, visual experiments, and generative web experiences.",
};

export default function LabsPage() {
  return (
    <main className="bg-p-bg min-h-screen text-p-main overflow-x-clip">
      <Navbar />
      <ScrollVelocityCarousel title="Prototype Labs" count={16} />
      <LabSection />
      <Footer />
    </main>
  );
}
