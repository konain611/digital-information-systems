import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

export default function PrivacyPolicyPage() {
  return <MarketingPage {...siteContent["privacy-policy"]} />;
}
