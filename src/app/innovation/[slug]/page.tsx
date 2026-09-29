import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

const slugs = [
  "dgbrain-ai-intelligence-engine",
  "research-and-development",
  "product-engineering",
  "technology-manufacturing",
  "cybersecurity-research",
  "responsible-ai-human-review",
  "security-validation-bug-bounty",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function InnovationDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = siteContent[slug];
  if (!page || !slugs.includes(slug)) notFound();
  return <MarketingPage {...page} />;
}
