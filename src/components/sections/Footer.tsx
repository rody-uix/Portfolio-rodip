import Image from "next/image";

const socialLinks = [
  { name: "Linkedin", href: "#" },
  { name: "Behance", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Topmate", href: "#" },
  { name: "Youtube", href: "#" },
];

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 px-4">
      {/* Full-width divider */}
      <div className="w-full h-px bg-p-grey mb-16 lg:mb-20" />

      <div className="max-w-[1444px] mx-auto relative bg-p-main rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[440px] sm:min-h-[600px] lg:min-h-[731px] flex flex-col justify-between p-6 sm:p-12 lg:p-16">
        {/* Background Artwork */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <Image
            src="/Footer (rasterized).svg"
            alt="Gothic Cathedral Backdrop"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Corner circles */}
        <div className="absolute top-[16px] left-[16px] sm:top-[30px] sm:left-[30px] w-5 h-5 sm:w-[30px] sm:h-[30px] rounded-full bg-white z-10" />
        <div className="absolute top-[16px] right-[16px] sm:top-[30px] sm:right-[30px] w-5 h-5 sm:w-[30px] sm:h-[30px] rounded-full bg-p-red z-10" />
        <div className="absolute bottom-[16px] left-[16px] sm:bottom-[30px] sm:left-[30px] w-5 h-5 sm:w-[30px] sm:h-[30px] rounded-full bg-white z-10" />
        <div className="absolute bottom-[16px] right-[16px] sm:bottom-[30px] sm:right-[30px] w-5 h-5 sm:w-[30px] sm:h-[30px] rounded-full bg-white z-10" />

        {/* Inner corner marks */}
        <svg className="absolute top-[20px] left-[20px] sm:top-[35px] sm:left-[35px] w-4 h-4 sm:w-5 sm:h-5 z-10" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
        <svg className="absolute top-[20px] right-[20px] sm:top-[35px] sm:right-[35px] w-4 h-4 sm:w-5 sm:h-5 z-10" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
        <svg className="absolute bottom-[20px] left-[20px] sm:bottom-[35px] sm:left-[35px] w-4 h-4 sm:w-5 sm:h-5 z-10" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
        <svg className="absolute bottom-[20px] right-[20px] sm:bottom-[35px] sm:right-[35px] w-4 h-4 sm:w-5 sm:h-5 z-10" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>

        {/* Top Area: Social Links (Center Aligned) */}
        <div className="absolute top-[16px] sm:top-[30px] left-1/2 -translate-x-1/2 z-10 flex items-center justify-center max-w-[calc(100%-120px)]">
          <div className="flex flex-nowrap items-center justify-center gap-x-1 sm:gap-x-1.5 lg:gap-x-2 max-w-full overflow-x-auto no-scrollbar">
            {socialLinks.map((link, i) => (
              <span key={link.name} className="inline-flex items-center gap-1 sm:gap-1.5 lg:gap-2 shrink-0 whitespace-nowrap">
                <a
                  href={link.href}
                  className="font-dm-sans text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] leading-[30px] text-white hover:text-white/70 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
                {i < socialLinks.length - 1 && (
                  <div className="w-[14px] h-[21px] sm:w-[22px] sm:h-[33px] lg:w-[28px] lg:h-[42px] xl:w-[39.64px] xl:h-[60px] shrink-0 inline-flex items-center justify-center opacity-100 select-none">
                    <Image
                      src="/divider.svg"
                      alt="Slant star divider"
                      width={39.64}
                      height={60}
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Area: Oscar Wilde Quote (Single line, centered) */}
        <div className="relative z-10 mt-auto pt-8 w-full flex justify-center overflow-x-auto no-scrollbar">
          <p className="font-adventor text-[13px] sm:text-[15px] lg:text-[16px] leading-[25.6px] text-white/80 text-center whitespace-nowrap">
            &ldquo;We are all in the gutter, but some of us are looking at the
            stars.&rdquo; — Oscar Wilde
          </p>
        </div>
      </div>
    </footer>
  );
}
