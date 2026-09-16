import { Navbar } from "@/components/sections/Navbar";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Case Studies | Rodip Chettri - Product Designer",
  description:
    "Explore detailed UX case studies and strategic visual design systems built by Rodip Chettri.",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-p-bg min-h-screen overflow-x-hidden relative pt-20 sm:pt-24">
      <Navbar />
      <CaseStudies />
      <Footer />
    </main>
  );
}
