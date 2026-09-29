import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";

const localeValues = ["en", "ar", "ur"];
const staticSlugs = [
  "about",
  "who-we-are",
  "about-diginfo",
  "vision-and-strategy",
  "leadership",
  "our-journey",
  "partnerships",
  "careers",
  "experience",
  "what-we-do",
  "cyber-resilience",
  "secure-digital-transformation",
  "cloud-platform-modernization",
  "governance-risk-assurance",
  "ai-intelligence-services",
  "education-workforce-development",
  "technology-manufacturing-product-innovation",
  "business-continuity-growth-enablement",
  "industries",
  "government-public-sector",
  "banking-finance",
  "telecom",
  "healthcare",
  "education",
  "critical-infrastructure",
  "enterprise-technology",
  "manufacturing-industrial",
  "innovation",
  "dgbrain-ai-intelligence-engine",
  "research-and-development",
  "product-engineering",
  "technology-manufacturing",
  "cybersecurity-research",
  "responsible-ai-human-review",
  "security-validation-bug-bounty",
  "ecosystem",
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
  "insights",
  "research",
  "cyber-intelligence",
  "executive-perspectives",
  "articles-publications",
  "news",
  "events",
  "case-studies",
  "contact",
  "general-inquiry",
  "request-consultation",
  "product-inquiry",
  "partnership-inquiry",
  "company-profile-request",
  "media-inquiry",
  "careers-inquiry",
  "security-disclosure",
  "company-profile",
  "search",
  "sign-in",
  "newsletter",
  "sitemap",
  "thank-you",
  "privacy-policy",
  "terms-of-use",
  "cookie-policy",
  "responsible-disclosure",
  "accessibility",
  "solutions",
  "security-assessment",
  "cyber-advisory",
  "governance-risk-compliance",
  "managed-security",
  "cloud-modernization",
  "platforms",
  "dbrain",
  "dgmagazine",
  "dgacademy",
  "dgcloud",
  "threatassurance",
  "dglabs",
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
