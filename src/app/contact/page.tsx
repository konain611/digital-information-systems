import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

export default function ContactPage() {
  return <MarketingPage {...siteContent.contact} />;
}
