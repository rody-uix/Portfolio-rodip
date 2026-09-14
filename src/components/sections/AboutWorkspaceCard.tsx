import Image from "next/image";
import { DiamondCorner } from "@/components/ui/diamond-corner";

export function AboutWorkspaceCard() {
  return (
    <section className="relative max-w-[1920px] mx-auto my-24 lg:my-36 px-4 flex items-center justify-center">
      {/* Side Annotations Layout Container */}
      <div className="relative w-full max-w-[900px] flex items-center justify-between">
        {/* Left Side Annotation */}
        <span className="hidden lg:block font-adventor text-[20px] leading-[30px] text-p-text select-none">
          Archived text
        </span>

        {/* Centered White Frame Card (579px x 658px) */}
        <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[579px] h-auto min-h-[520px] md:h-[658px] border border-p-grey bg-white p-6 md:p-10 flex flex-col items-center justify-between mx-auto shadow-xs">
          {/* Diamond Corner Accents (45 deg angle) */}
          <DiamondCorner position="top-left" />
          <DiamondCorner position="top-right" />
          <DiamondCorner position="bottom-left" />
          <DiamondCorner position="bottom-right" />

          {/* Photo Frame (450px x 438px) */}
          <div className="relative w-full max-w-[450px] aspect-[450/438] bg-neutral-200 overflow-hidden border border-neutral-100 mt-2">
            <Image
              src="/Gemini_Generated_Image_c1hyu3c1hyu3c1hy 1.jpg"
              alt="Workstation monitor setup"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 450px"
            />
          </div>

          {/* Caption inside Frame */}
          <p className="mt-6 mb-2 font-adventor text-[15px] sm:text-[16px] leading-[25.6px] text-p-main text-center">
            Nothing (3): This is a screen or a 3D phone
          </p>
        </div>

        {/* Right Side Annotation */}
        <span className="hidden lg:block font-adventor text-[20px] leading-[30px] text-p-text select-none">
          Archived text
        </span>
      </div>
    </section>
  );
}
