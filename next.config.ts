import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/company/about-us/experience", destination: "/who-we-are/experience", permanent: true },
      { source: "/company/contact-us", destination: "/contact", permanent: true },
      { source: "/products/news-updates/dg-magazine", destination: "/ecosystem/dgmagazine", permanent: true },
      { source: "/products/education/dg-academy", destination: "/ecosystem/dgacademy", permanent: true },
      { source: "/products/cloud-security/dg-cloud", destination: "/ecosystem/dgcloud", permanent: true },
      { source: "/products/security-challenge/threat-assurance", destination: "/ecosystem/threat-assurance", permanent: true },
      { source: "/DIGINFO%20PROFILE.pdf", destination: "/company-profile", permanent: true },
      { source: "/DIGINFO PROFILE.pdf", destination: "/company-profile", permanent: true },
    ];
  },
};

export default nextConfig;
