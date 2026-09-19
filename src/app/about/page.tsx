import { Navbar } from "@/components/sections/Navbar";
import { AboutHero } from "@/components/sections/AboutHero";
import { HorizontalGallery } from "@/components/HorizontalGallery";
import { AboutWorkspaceCard } from "@/components/sections/AboutWorkspaceCard";
import { AboutToolsStack } from "@/components/sections/AboutToolsStack";
import { AboutQuoteFooter } from "@/components/sections/AboutQuoteFooter";

export const metadata = {
  title: "About | Rodip Chettri - Product Designer",
  description:
    "Product Designer with 4+ years of experience building 0→1 products across SaaS, media, and digital platforms.",
};

export default function AboutPage() {
  return (
    <main className="bg-p-bg min-h-screen relative">
      <Navbar />
      <AboutHero />
      <HorizontalGallery />
      <AboutWorkspaceCard />
      <AboutToolsStack />
      <AboutQuoteFooter />
    </main>
  );
}
