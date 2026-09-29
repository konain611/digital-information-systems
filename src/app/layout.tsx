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
  metadataBase: new URL("https://diginfo.net"),
  title: {
    default: "DIGINFO | Building Technology, AI Intelligence & Digital Trust",
    template: "%s | DIGINFO",
  },
  description:
    "DIGINFO helps organizations solve business challenges, secure operations, build intelligence, modernize technology and grow through a connected ecosystem of owned platforms, research, cloud, education and secure engineering.",
  openGraph: {
    title: "DIGINFO | Building Technology, AI Intelligence & Digital Trust",
    description:
      "DIGINFO helps organizations solve business challenges, secure operations, build intelligence, modernize technology and grow through a connected ecosystem of owned platforms, research, cloud, education and secure engineering.",
    url: "https://diginfo.net",
    siteName: "DIGINFO",
    type: "website",
  },
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
