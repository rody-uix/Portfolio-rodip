"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StampConfig {
  id: string;
  src: string;
  alt: string;
  left: string;
  top: string;
  width: string;
  height: string;
  stackedRotate: number;
  isCover?: boolean;
}

const stamps: StampConfig[] = [
  {
    id: "stamp-1",
    src: "/Gemini_Generated_Image_c1hyu3c1hyu3c1hy 1.jpg",
    alt: "Vintage Stamp 1 (Gemini)",
    left: "0%",
    top: "0%",
    width: "33.0%",
    height: "40.86%",
    stackedRotate: -12,
    isCover: true,
  },
  {
    id: "stamp-2",
    src: "/image 8.svg",
    alt: "Vintage Stamp 2 (Image 8)",
    left: "35.13%",
    top: "16.42%",
    width: "19.05%",
    height: "24.18%",
    stackedRotate: 8,
  },
  {
    id: "stamp-3",
    src: "/image 6.svg",
    alt: "Vintage Stamp 3 (Image 6)",
    left: "52.24%",
    top: "5.20%",
    width: "41.35%",
    height: "36.27%",
    stackedRotate: -6,
  },
  {
    id: "stamp-4",
    src: "/image 4.svg",
    alt: "Vintage Stamp 4 (Image 4)",
    left: "6.04%",
    top: "40.86%",
    width: "34.46%",
    height: "30.22%",
    stackedRotate: 14,
  },
  {
    id: "stamp-5",
    src: "/image 9.svg",
    alt: "Vintage Stamp 5 (Image 9)",
    left: "35.01%",
    top: "41.47%",
    width: "28.42%",
    height: "36.27%",
    stackedRotate: -4,
  },
  {
    id: "stamp-6",
    src: "/image 7.svg",
    alt: "Vintage Stamp 6 (Image 7)",
    left: "60.37%",
    top: "38.69%",
    width: "34.46%",
    height: "30.22%",
    stackedRotate: 10,
  },
  {
    id: "stamp-7",
    src: "/image 5.svg",
    alt: "Vintage Stamp 7 (Image 5)",
    left: "61.78%",
    top: "66.25%",
    width: "38.21%",
    height: "33.75%",
    stackedRotate: -9,
  },
];

export function AboutHero() {
  return (
    <section className="relative max-w-[1920px] mx-auto pt-16 sm:pt-[100px] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Statue Bust Line Art Illustration (Left - Visible on desktop screens) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[20px] xl:left-[40px] 2xl:left-[60px] top-[180px] 2xl:top-[224px] w-[140px] xl:w-[160px] 2xl:w-[192px] pointer-events-none hidden xl:block z-10"
      >
        <Image
          src="/Head (rasterized).svg"
          alt="Statue Head Illustration"
          width={193}
          height={364}
          className="object-contain w-full h-auto"
          priority
        />
      </motion.div>

      {/* Vintage Stamp Group Collage (Right - Unstacking Fan-out animation) */}
      <div className="absolute right-[20px] xl:right-[40px] 2xl:right-[60px] top-[60px] 2xl:top-[90px] w-[360px] xl:w-[480px] 2xl:w-[629px] aspect-[629/717.1] opacity-95 hidden xl:block z-10">
        <div className="relative w-full h-full">
          {stamps.map((stamp, index) => (
            <motion.div
              key={stamp.id}
              initial={{
                left: "35%",
                top: "35%",
                width: "28%",
                height: "32%",
                opacity: 0,
                scale: 0.6,
                rotate: stamp.stackedRotate,
              }}
              animate={{
                left: stamp.left,
                top: stamp.top,
                width: stamp.width,
                height: stamp.height,
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                zIndex: 40,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              transition={{
                duration: 0.95,
                delay: 0.15 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`absolute cursor-pointer ${
                stamp.isCover ? "overflow-hidden rounded-xs" : ""
              }`}
            >
              <Image
                src={stamp.src}
                alt={stamp.alt}
                fill
                className={stamp.isCover ? "object-cover" : "object-contain"}
                priority={index < 3}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Column */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[763px] mx-auto xl:ml-[240px] 2xl:ml-[300px] relative z-20"
      >
        {/* Title Heading */}
        <h1 className="font-dm-sans text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.08] lg:leading-[75.6px] tracking-[-0.015em] text-p-main max-w-[683px]">
          I wasn&apos;t trained to be a designer. I learned by building.
        </h1>

        {/* Bio Text Paragraphs */}
        <div className="mt-8 sm:mt-[44px] font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-text max-w-[763px] space-y-5">
          <p>
            Hey, I&apos;m Rodip. I come from a science background and studied Computer Applications, but design found me much earlier. I started experimenting with interfaces back in Class 11&mdash;long before I knew it could become a career. With no formal UI/UX degree, I learned the way that felt most natural to me: by building, breaking, questioning, and rebuilding.
          </p>
          <p>
            Today, I&apos;m a Product Designer with 4+ years of experience designing real products across SaaS, media, and digital platforms. I&apos;ve led 0&rarr;1 products, worked closely with users to understand the problems behind the requirements, and taken ideas from early research and messy whiteboards to systems that developers can actually build. My time at Entrepreneur Media and across different product teams taught me that good design isn&apos;t just about making screens look better&mdash;it&apos;s about making complex things easier to understand and use.
          </p>
          <p className="font-medium text-p-main">
            That&apos;s what I bring to every product I work on: curiosity to find the real problem, discipline to simplify it, and enough technical understanding to see the idea through to reality.
          </p>
        </div>
      </motion.div>

      {/* Horizontal Divider Line */}
      <div className="mt-16 sm:mt-[120px] lg:mt-[180px] w-full h-px bg-p-grey" />
    </section>
  );
}

