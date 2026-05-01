import type { ReactNode } from "react";
import "../globals.css";
import Navbar from "@/components/navbar";

interface RtlLayoutProps {
  children: ReactNode;
}

export default function RtlLayout({ children }: RtlLayoutProps) {
  return (
    <>

      {children}
    </>
  );
}

