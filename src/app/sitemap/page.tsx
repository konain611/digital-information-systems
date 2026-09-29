import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

export default function SitemapPage() {
  return <MarketingPage {...siteContent.sitemap} />;
}
