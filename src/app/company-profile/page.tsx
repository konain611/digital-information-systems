import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

export default function CompanyProfilePage() {
  return <MarketingPage {...siteContent["company-profile"]} />;
}
