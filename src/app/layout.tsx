import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer1 from "@/components/Footer1";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIGINFO | Secure, intelligent and resilient digital capability",
  description: "DIGINFO is a technology, cybersecurity, AI, cloud, R&D and enterprise assurance company building secure digital ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased`}>
        <Navbar />
        {children}
        <Footer1 />
      </body>
    </html>
  );
}
