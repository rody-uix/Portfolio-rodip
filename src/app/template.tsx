"use client";

import { CurtainTransition } from "@/components/CurtainTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <CurtainTransition>{children}</CurtainTransition>;
}
