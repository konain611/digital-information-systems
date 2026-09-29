import type { Metadata } from "next";
import HomePage from "@/components/homepage";

const description =
  "DIGINFO helps organizations solve business challenges, secure operations, build intelligence, modernize technology and grow through a connected ecosystem of owned platforms, research, cloud, education and secure engineering.";

export const metadata: Metadata = {
  title: { absolute: "Building Technology, AI Intelligence & Digital Trust | DIGINFO" },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Building Technology, AI Intelligence & Digital Trust | DIGINFO",
    description,
    url: "https://diginfo.net/",
    siteName: "DIGINFO",
    type: "website",
    locale: "en_US",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DIGINFO",
  legalName: "Digital Information Systems (Pvt) Limited",
  url: "https://diginfo.net/",
  email: "info@diginfo.net",
  telephone: "+9234325505",
  address: [
    { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  ],
};

export default function Home() {
  return (
    <>
      <HomePage locale="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
