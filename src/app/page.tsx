import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { PrototypeArchive } from "@/components/sections/PrototypeArchive";
import { TurningThought } from "@/components/sections/TurningThought";
import { ProfessionalArc } from "@/components/sections/ProfessionalArc";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-p-bg min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <RecentProjects />
      <PrototypeArchive />
      <TurningThought />
      <ProfessionalArc />
      <Footer />
    </main>
  );
}
