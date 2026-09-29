import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

const slugs = [
  "cyber-resilience",
  "secure-digital-transformation",
  "cloud-platform-modernization",
  "governance-risk-assurance",
  "ai-intelligence-services",
  "education-workforce-development",
  "technology-manufacturing-product-innovation",
  "business-continuity-growth-enablement",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function WhatWeDoDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = siteContent[slug];
  if (!page || !slugs.includes(slug)) notFound();
  return <MarketingPage {...page} />;
}
