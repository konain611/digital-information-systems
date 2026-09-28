import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";

const localeValues = ["en", "ar", "ur"];
const staticSlugs = [
  "about",
  "leadership",
  "contact",
  "solutions",
  "security-assessment",
  "cyber-advisory",
  "governance-risk-compliance",
  "managed-security",
  "cloud-modernization",
  "ecosystem",
  "platforms",
  "dbrain",
  "dgenterprise",
  "dgacademy",
  "dgmagazine",
  "dgcloud",
  "threatassurance",
  "dglabs",
  "research",
  "cyber-research",
  "product-evaluation",
  "innovation-pipeline",
];

export function generateStaticParams() {
  return localeValues.flatMap((locale) =>
    staticSlugs.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;

  if (!localeValues.includes(locale)) {
    notFound();
  }

  if (!staticSlugs.includes(slug)) {
    notFound();
  }

  return <SitePage slug={slug} locale={locale} />;
}
