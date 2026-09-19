import type { Metadata } from "next";
import { DM_Sans, Syne, Orbitron, Alex_Brush } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodip Chettri — Product Designer",
  description:
    "A product designer crafting thoughtful digital experiences through strategy, research, and visual precision.",
  icons: {
    icon: [
      {
        url: "/icon.gif",
        type: "image/gif",
      },
    ],
    shortcut: "/icon.gif",
    apple: "/icon.gif",
  },
};

import { CustomCursor } from "@/components/ui/custom-cursor";
import { AnimatedFavicon } from "@/components/ui/animated-favicon";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} ${orbitron.variable} ${alexBrush.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-p-bg">
        <AnimatedFavicon />
        <CustomCursor />
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}

