import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative max-w-[1920px] mx-auto pt-16 sm:pt-[100px] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Statue Bust Line Art Illustration (Left - Visible on wide screens) */}
      <div className="absolute left-[20px] 2xl:left-[60px] top-[180px] 2xl:top-[224px] w-[150px] 2xl:w-[192px] pointer-events-none opacity-90 hidden 2xl:block z-10">
        <Image
          src="/Head (rasterized).svg"
          alt="Statue Head Illustration"
          width={193}
          height={364}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

      {/* Vintage Stamp Group Collage (Right - Visible on wide screens) */}
      <div className="absolute right-[20px] 2xl:right-[80px] top-[100px] 2xl:top-[138px] w-[450px] 2xl:w-[629px] pointer-events-none opacity-95 hidden 2xl:block z-10">
        <Image
          src="/imagesgroup.svg"
          alt="Vintage Stamps Collage"
          width={629}
          height={717}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

      {/* Main Content Column */}
      <div className="max-w-[763px] mx-auto 2xl:ml-[300px] relative z-20">
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
