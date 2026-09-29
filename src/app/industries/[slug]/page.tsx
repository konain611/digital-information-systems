import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

const slugs = [
  "government-public-sector",
  "banking-finance",
  "telecom",
  "healthcare",
  "education",
  "critical-infrastructure",
  "enterprise-technology",
  "manufacturing-industrial",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function IndustriesDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = siteContent[slug];
  if (!page || !slugs.includes(slug)) notFound();
  return <MarketingPage {...page} />;
}
