import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

const slugs = [
  "about-diginfo",
  "vision-and-strategy",
  "leadership",
  "our-journey",
  "partnerships",
  "careers",
  "experience",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function WhoWeAreDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = siteContent[slug];
  if (!page || !slugs.includes(slug)) notFound();
  return <MarketingPage {...page} />;
}
