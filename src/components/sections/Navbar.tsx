"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CornerDot } from "@/components/ui/corner-dot";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Lab", href: "/#lab" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center pt-8 sm:pt-[53px] relative z-30 px-4 w-full max-w-full overflow-x-auto no-scrollbar">
      <div className="relative border border-p-grey bg-[#FAFAFF80] backdrop-blur-sm px-3 sm:px-4 py-2 shrink-0">
        {/* Corner dots */}
        <CornerDot position="top-left" />
        <CornerDot position="top-right" />
        <CornerDot position="bottom-left" />
        <CornerDot position="bottom-right" />

        <ul className="flex items-center gap-2.5 sm:gap-6 flex-nowrap">
          {navItems.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/about"
                ? pathname === "/about"
                : false;

            return (
              <li key={item.label} className="flex items-center gap-2.5 sm:gap-6 shrink-0">
                <Link
                  href={item.href}
                  className={cn(
                    "font-sans text-[12px] sm:text-[13px] leading-[18.2px] tracking-[0.01em] text-p-main transition-colors px-1.5 sm:px-2 py-0.5 relative whitespace-nowrap",
                    isActive
                      ? "border border-p-main bg-white/70 font-semibold"
                      : "hover:opacity-70"
                  )}
                >
                  {item.label}
                </Link>
                {i < navItems.length - 1 && (
                  <span
                    className="w-1.5 h-1.5 bg-p-grey shrink-0"
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
