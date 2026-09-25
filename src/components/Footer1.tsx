"use client";

import Image from "next/image";
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/localized-link";
import { useTranslationsClient } from "@/lib/i18n/client";
import { detectLocale } from "@/lib/i18n/utils";

export default function Footer1() {
  const pathname = usePathname() || "/";
  const locale = detectLocale(pathname);
  const t = useTranslationsClient(locale);

  return (
    <footer className="bg-[#001d33] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.1fr] lg:px-8">
        <div className="space-y-5">
          <Image src="/logo-2.png" alt="DIGINFO logo" width={220} height={100} className="h-auto w-56 object-contain" />
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Secure, intelligent and resilient digital capability through engineering, assurance, research and platform modernization.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Navigation</h3>
          <ul className="space-y-3 text-sm text-slate-300 font-medium">
            <li><LocalizedLink href="/about" className="hover:text-[#FF9102]">About</LocalizedLink></li>
            <li><LocalizedLink href="/solutions" className="hover:text-[#FF9102]">Solutions</LocalizedLink></li>
            <li><LocalizedLink href="/ecosystem" className="hover:text-[#FF9102]">Ecosystem</LocalizedLink></li>
            <li><LocalizedLink href="/platforms" className="hover:text-[#FF9102]">Platforms</LocalizedLink></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Platforms</h3>
          <ul className="space-y-3 text-sm text-slate-300 font-medium">
            <li><LocalizedLink href="/platforms/dbrain" className="hover:text-[#FF9102]">DGBRAIN</LocalizedLink></li>
            <li><LocalizedLink href="/platforms/dgmagazine" className="hover:text-[#FF9102]">DGMAGAZINE</LocalizedLink></li>
            <li><LocalizedLink href="/platforms/dgacademy" className="hover:text-[#FF9102]">DGACADEMY</LocalizedLink></li>
            <li><LocalizedLink href="/platforms/dgcloud" className="hover:text-[#FF9102]">DGCLOUD</LocalizedLink></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300 font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
              <span>Karachi, Pakistan • Riyadh, Saudi Arabia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-slate-400" />
              <a href="tel:+9234325505" className="hover:text-white">{t("footer.phone")}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-slate-400" />
              <a href="mailto:info@diginfo.net" className="hover:text-white">{t("footer.email")}</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-slate-400" />
              <a href="https://diginfo.net" target="_blank" rel="noreferrer" className="hover:text-white">diginfo.net</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2025. Secure, intelligent and resilient digital capability.</p>
          <div className="flex items-center gap-3">
            <a href="https://diginfo.net" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">diginfo.net <ArrowUpRight className="h-3.5 w-3.5" /></a>
            <a href="https://dgmagazine.net" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white">dgmagazine.net <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
