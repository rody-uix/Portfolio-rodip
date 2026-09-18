"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CornerDot } from "@/components/ui/corner-dot";
import { ScrambleText } from "@/components/ui/scramble-text";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Lab", href: "/labs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

function NavLink({
  item,
  isActive,
}: {
  item: (typeof navItems)[0];
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={item.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "font-sans text-[10.5px] xs:text-[11.5px] sm:text-[13px] leading-[18.2px] tracking-[0.01em] text-p-main transition-colors px-1 xs:px-1.5 sm:px-2 py-0.5 relative whitespace-nowrap inline-block focus:outline-none focus-visible:outline-none active:outline-none outline-none select-none rounded-xs",
        isActive
          ? "bg-white/90 font-semibold text-p-main shadow-2xs"
          : "hover:opacity-70"
      )}
    >
      <ScrambleText text={item.label} isHovered={isHovered} />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-6 px-2 sm:px-4 w-full pointer-events-none">
      <div className="relative border border-p-grey bg-[#FAFAFFD9] backdrop-blur-md px-1.5 xs:px-2.5 sm:px-4 py-1.5 sm:py-2 shrink-0 pointer-events-auto shadow-xs max-w-[calc(100vw-16px)] sm:max-w-[calc(100vw-24px)]">
        {/* Corner dots */}
        <CornerDot position="top-left" />
        <CornerDot position="top-right" />
        <CornerDot position="bottom-left" />
        <CornerDot position="bottom-right" />

        <ul className="flex items-center gap-1 xs:gap-1.5 sm:gap-6 flex-nowrap">
          {navItems.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/labs"
                ? pathname === "/labs"
                : item.href === "/about"
                ? pathname === "/about"
                : item.href === "/case-studies"
                ? pathname === "/case-studies"
                : false;

            return (
              <li
                key={item.label}
                className="flex items-center gap-1 xs:gap-1.5 sm:gap-6 shrink-0"
              >
                <NavLink item={item} isActive={isActive} />
                {i < navItems.length - 1 && (
                  <span
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-p-grey shrink-0"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

