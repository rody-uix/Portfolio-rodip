import Image from "next/image";
import { ToolCard, ToolCardProps } from "@/components/ui/tool-card";

const row1Tools: ToolCardProps[] = [
  { name: "Figma", level: "Expert", iconSrc: "/figma.svg" },
  { name: "FigJam", level: "Expert", iconSrc: "/figjam.svg" },
  { name: "Adobe Photoshop", level: "Advanced", iconSrc: "/photoshop.svg" },
  { name: "Adobe Illustrator", level: "Advanced", iconSrc: "/interfacedesing.svg" },
  { name: "Spline", level: "Intermediate", iconSrc: "/spline.svg" },
  { name: "Balsamiq", level: "Advanced", iconSrc: "/blasamiq.svg" },
];

const row2Tools: ToolCardProps[] = [
  { name: "Miro", level: "Advanced", iconSrc: "/miro.svg" },
  { name: "Jira", level: "Advanced", iconSrc: "/jira.svg" },
  { name: "Notion", level: "Advanced", iconSrc: "/notion.svg" },
  { name: "Zeplin", level: "Intermediate", iconSrc: "/clarity.svg" },
];

const row3Tools: ToolCardProps[] = [
  { name: "Maze", level: "Advanced", iconSrc: "/maze.svg" },
  { name: "Microsoft Clarity", level: "Intermediate", iconSrc: "/clarity.svg" },
  { name: "GA4", level: "Intermediate", iconSrc: "/GA4.svg" },
  { name: "Mixpanel", level: "Intermediate", iconSrc: "/mixpanel.svg" },
];

const row4Tools: ToolCardProps[] = [
  { name: "Framer", level: "Advanced", iconSrc: "/framer.svg" },
  { name: "Webflow", level: "Advanced", iconSrc: "/wenflow.svg" },
  { name: "Classic Code", level: "Beginner", iconSrc: "/github.svg" },
  { name: "GitHub Copilot", level: "Beginner", iconSrc: "/github.svg" },
  { name: "Antigravity", level: "Beginner", iconSrc: "/antigravity.svg" },
];

export function AboutToolsStack() {
  return (
    <section className="relative max-w-[1920px] mx-auto my-20 sm:my-28 lg:my-36 px-4 sm:px-6 overflow-hidden">
      {/* Background Line Art Stack of Books */}
      <div className="absolute right-4 sm:right-12 xl:right-24 top-12 w-[180px] sm:w-[240px] md:w-[320px] pointer-events-none opacity-25 z-0 hidden md:block">
        <Image
          src="/books (rasterized).svg"
          alt="Books Stack Line Art"
          width={320}
          height={380}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Header Container: TOOLS ──── STACK */}
      <div className="relative z-10 max-w-[850px] mx-auto flex items-center justify-between gap-3 sm:gap-4 px-2">
        <h2 className="font-moderniz text-[22px] sm:text-[28px] md:text-[32px] font-black text-p-main tracking-tight uppercase shrink-0">
          TOOLS
        </h2>
        <div className="h-px bg-p-grey flex-1 min-w-[30px] sm:min-w-[60px] mx-2 sm:mx-4" />
        <h2 className="font-moderniz text-[22px] sm:text-[28px] md:text-[32px] font-black text-p-main tracking-tight uppercase shrink-0">
          STACK
        </h2>
      </div>

      {/* Paragraph Description */}
      <p className="mt-6 sm:mt-8 font-adventor text-[15px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] text-p-text text-center max-w-[884px] mx-auto relative z-10 px-2">
        A collection of modern relics, gathered in pursuit of creation. Here, fragments of inspiration are studied beneath dim light, refined through patience and precision, until they emerge as experiences that linger long after the screen fades to black.
      </p>

      {/* Tools Grid Rows */}
      <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 max-w-[1400px] mx-auto space-y-10 sm:space-y-14 md:space-y-16 px-2">
        {/* Row 1: 6 tools */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 justify-center items-start max-w-[1200px] mx-auto">
          {row1Tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>

        {/* Row 2: 4 tools */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 justify-center items-start max-w-[840px] mx-auto">
          {row2Tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>

        {/* Row 3: 4 tools */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 justify-center items-start max-w-[840px] mx-auto">
          {row3Tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>

        {/* Row 4: 5 tools */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 justify-center items-start max-w-[1000px] mx-auto">
          {row4Tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
