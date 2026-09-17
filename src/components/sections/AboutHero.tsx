import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative max-w-[1920px] mx-auto pt-16 sm:pt-[100px] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Statue Bust Line Art Illustration (Left - Visible on desktop screens) */}
      <div className="absolute left-[20px] xl:left-[40px] 2xl:left-[60px] top-[180px] 2xl:top-[224px] w-[140px] xl:w-[160px] 2xl:w-[192px] pointer-events-none opacity-90 hidden xl:block z-10">
        <Image
          src="/Head (rasterized).svg"
          alt="Statue Head Illustration"
          width={193}
          height={364}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

      {/* Vintage Stamp Group Collage (Right - Specs from second-screen.md: 629px x 717.1px) */}
      <div className="absolute right-[20px] xl:right-[40px] 2xl:right-[60px] top-[60px] 2xl:top-[90px] w-[360px] xl:w-[480px] 2xl:w-[629px] aspect-[629/717.1] pointer-events-none opacity-95 hidden xl:block z-10">
        <div className="relative w-full h-full">
          {/* Top Row: Gemini, image 8, image 6 */}
          {/* Stamp 1 - Gemini Image (Top Left) */}
          <div
            className="absolute overflow-hidden rounded-xs"
            style={{
              left: "0%",
              top: "0%",
              width: "33.0%",
              height: "40.86%",
            }}
          >
            <Image
              src="/Gemini_Generated_Image_c1hyu3c1hyu3c1hy 1.jpg"
              alt="Vintage Stamp 1 (Gemini)"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Stamp 2 - image 8.svg (Top Middle) */}
          <div
            className="absolute"
            style={{
              left: "35.13%",
              top: "16.42%",
              width: "19.05%",
              height: "24.18%",
            }}
          >
            <Image src="/image 8.svg" alt="Vintage Stamp 2 (Image 8)" fill className="object-contain" />
          </div>

          {/* Stamp 3 - image 6.svg (Top Right) */}
          <div
            className="absolute"
            style={{
              left: "52.24%",
              top: "5.20%",
              width: "41.35%",
              height: "36.27%",
            }}
          >
            <Image src="/image 6.svg" alt="Vintage Stamp 3 (Image 6)" fill className="object-contain" />
          </div>

          {/* Second Row: image 4, image 9, image 7 */}
          {/* Stamp 4 - image 4.svg (Second Row Left) */}
          <div
            className="absolute"
            style={{
              left: "6.04%",
              top: "40.86%",
              width: "34.46%",
              height: "30.22%",
            }}
          >
            <Image src="/image 4.svg" alt="Vintage Stamp 4 (Image 4)" fill className="object-contain" />
          </div>

          {/* Stamp 5 - image 9.svg (Second Row Center) */}
          <div
            className="absolute"
            style={{
              left: "35.01%",
              top: "41.47%",
              width: "28.42%",
              height: "36.27%",
            }}
          >
            <Image src="/image 9.svg" alt="Vintage Stamp 5 (Image 9)" fill className="object-contain" />
          </div>

          {/* Stamp 6 - image 7.svg (Second Row Right) */}
          <div
            className="absolute"
            style={{
              left: "60.37%",
              top: "38.69%",
              width: "34.46%",
              height: "30.22%",
            }}
          >
            <Image src="/image 7.svg" alt="Vintage Stamp 6 (Image 7)" fill className="object-contain" />
          </div>

          {/* Bottom Single Image: image 5 */}
          {/* Stamp 7 - image 5.svg (Bottom Single Image) */}
          <div
            className="absolute"
            style={{
              left: "61.78%",
              top: "66.25%",
              width: "38.21%",
              height: "33.75%",
            }}
          >
            <Image src="/image 5.svg" alt="Vintage Stamp 7 (Image 5)" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Main Content Column */}
      <div className="max-w-[763px] mx-auto xl:ml-[240px] 2xl:ml-[300px] relative z-20">
        {/* Title Heading */}
        <h1 className="font-dm-sans text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.08] lg:leading-[75.6px] tracking-[-0.015em] text-p-main max-w-[683px]">
          Designing products, building startups, and learning in public.
        </h1>

        {/* Bio Text Paragraph */}
        <p className="mt-8 sm:mt-[44px] font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-text max-w-[763px]">
          Hi I&apos;m Rodip Chettri, originally from Darjeeling and now based in Delhi. I moved to Delhi in 2022 looking for better opportunities, faster growth, and, admittedly, much better Wi-Fi. I come from a science background and later earned a BCA, but most of what I know today came from building real projects, experimenting, and learning outside the classroom. I discovered design in Class 11, long before I knew it could be a career. I don&apos;t have a formal UX degree just years of learning through building, breaking, and improving products. The part of design I enjoy most isn&apos;t making things look good&mdash;it&apos;s understanding the problem beneath the surface. I like asking the right questions, challenging assumptions, and designing solutions that are practical, scalable, and user-centered.
        </p>
      </div>

      {/* Horizontal Divider Line */}
      <div className="mt-16 sm:mt-[120px] lg:mt-[180px] w-full h-px bg-p-grey" />
    </section>
  );
}
