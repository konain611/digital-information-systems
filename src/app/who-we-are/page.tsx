import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

export default function WhoWeArePage() {
  return <MarketingPage {...siteContent["who-we-are"]} />;
}
