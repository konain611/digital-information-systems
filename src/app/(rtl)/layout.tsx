"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import "../globals.css";

interface RtlLayoutProps {
  children: ReactNode;
}

function getLocaleFromPath(pathname: string): "ur" | "ar" {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  return (firstSegment === "ur" || firstSegment === "ar") ? firstSegment : "ur";
}

export default function RtlLayout({ children }: RtlLayoutProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  
  return (
    <div dir="rtl" className="font-sans rtl-mirrored">
      {children}
    </div>
  );
}

