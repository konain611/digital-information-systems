import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

const slugs = [
  "research",
  "cyber-intelligence",
  "executive-perspectives",
  "articles-publications",
  "news",
  "events",
  "case-studies",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function InsightsDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = siteContent[slug];
  if (!page || !slugs.includes(slug)) notFound();
  return <MarketingPage {...page} />;
}
