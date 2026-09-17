import { Navbar } from "@/components/sections/Navbar";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutToolsStack } from "@/components/sections/AboutToolsStack";
import { AboutQuoteFooter } from "@/components/sections/AboutQuoteFooter";

export const metadata = {
  title: "About | Rodip Chettri - Product Designer",
  description:
    "Designing products, building startups, and learning in public. Learn more about Rodip Chettri, product designer based in Delhi.",
};

export default function AboutPage() {
  return (
    <main className="bg-p-bg min-h-screen overflow-x-hidden relative">
      <Navbar />
      <AboutHero />
      <AboutToolsStack />
      <AboutQuoteFooter />
    </main>
  );
}
