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

      <div className="max-w-[1444px] mx-auto relative bg-p-main rounded-[32px] overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[731px] flex flex-col justify-between p-8 sm:p-12 lg:p-16">
        {/* Corner circles */}
        <div className="absolute top-[30px] left-[30px] w-[30px] h-[30px] rounded-full bg-white" />
        <div className="absolute top-[30px] right-[30px] w-[30px] h-[30px] rounded-full bg-p-red" />
        <div className="absolute bottom-[30px] left-[30px] w-[30px] h-[30px] rounded-full bg-white" />
        <div className="absolute bottom-[30px] right-[30px] w-[30px] h-[30px] rounded-full bg-white" />

        {/* Inner corner marks */}
        <svg className="absolute top-[35px] left-[35px] w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
        <svg className="absolute top-[35px] right-[35px] w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
        <svg className="absolute bottom-[35px] left-[35px] w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
        <svg className="absolute bottom-[35px] right-[35px] w-5 h-5" viewBox="0 0 20 20" fill="none">
          <path d="M0 10H20M10 0V20" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>

        {/* Center Mockup Placeholder */}
        <div className="my-auto py-12 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] max-w-[700px] h-[200px] sm:h-[280px] border-2 border-white/20 rounded-lg flex flex-col opacity-15">
            <div className="w-full h-[32px] border-b border-white/10 flex items-center px-4 gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            </div>
          </div>
        </div>

        {/* Bottom Area: Social Links & Quote */}
        <div className="relative z-10 flex flex-col items-center gap-8 mt-auto pt-6 text-center">
          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 px-4">
            {socialLinks.map((link, i) => (
              <span key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  className="font-dm-sans text-[16px] sm:text-[18px] lg:text-[20px] leading-[30px] text-white hover:text-white/70 transition-colors px-2"
                >
                  {link.name}
                </a>
                {i < socialLinks.length - 1 && (
                  <span className="text-white/30 mx-1" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Quote */}
          <p className="font-adventor text-[14px] lg:text-[16px] leading-[25.6px] text-white/80 max-w-[800px] px-4">
            &ldquo;We are all in the gutter, but some of us are looking at the
            stars.&rdquo; — Oscar Wilde
          </p>
        </div>
      </div>
    </footer>
  );
}
