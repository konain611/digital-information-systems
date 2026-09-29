import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

export default function ThankYouPage() {
  return <MarketingPage {...siteContent["thank-you"]} />;
}
