import { MarketingPage } from "@/components/marketing-page";
import { siteContent } from "@/lib/site-content";

export default function SignInPage() {
  return <MarketingPage {...siteContent["sign-in"]} />;
}
