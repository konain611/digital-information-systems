import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

const slugs = [
  "dgmagazine",
  "dgacademy",
  "dgcloud",
  "threat-assurance",
  "dglabs",
  "nativesecurity",
  "dghub",
  "dgenterprise",
  "dgshop",
  "dg-nexus",
  "advanced-lms",
  "dg-career",
  "dg-family",
  "dg-care",
  "dg-engineering",
  "dg-nsos",
  "cyber-kids",
  "diginfo-innovatech",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function EcosystemDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = siteContent[slug];
  if (!page || !slugs.includes(slug)) notFound();
  return <MarketingPage {...page} />;
}
