"use client";

import Image from "next/image";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import LocalizedLink from "@/components/localized-link";
import { navGroups } from "@/lib/site-navigation";

const currentYear = new Date().getFullYear();

export default function Footer1() {
  return (
    <footer className="bg-[#001d33] text-slate-200">
      <div className="mx-auto max-w-375 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-3">
            <Image src="/logo-2.png" alt="DIGINFO logo" width={220} height={100} className="h-auto w-48 object-contain" />
            <p className="max-w-xs text-[11px] leading-5 text-slate-300">
              Building Technology, AI Intelligence & Digital Trust through secure engineering, research, modernization and connected platform capability.
            </p>
            <p className="text-[10px] leading-5 text-slate-400">Digital Information Systems (Pvt) Limited</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">Contact</h3>
            <ul className="space-y-2 text-[11px] text-slate-300">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" /><span>Karachi, Pakistan; Riyadh, Saudi Arabia</span></li>
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-slate-400" /><a href="tel:+9234325505" className="hover:text-white">+9234325505</a></li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-slate-400" /><a href="mailto:info@diginfo.net" className="hover:text-white">info@diginfo.net</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">Official Websites</h3>
            <ul className="grid gap-x-4 gap-y-2 text-[11px] text-slate-300 sm:grid-cols-2">
              {[
                ["DIGINFO", "https://diginfo.net/"],
                ["DGMAGAZINE", "https://dgmagazine.net/"],
                ["DGACADEMY", "https://dgacademy.net/"],
                ["NATIVESECURITY", "https://nativesecurity.org/"],
                ["THREATASSURANCE.net", "https://threatassurance.net/"],
                ["THREATASSURANCE.com", "https://threatassurance.com/"],
              ].map(([label, href]) => (
                <li key={href} className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                  <a href={href} target="_blank" rel="noreferrer" className="break-all hover:text-white">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-8 pt-8 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8">
          {navGroups.map((group) => (
            <div key={group.href} className="space-y-3">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">{group.label}</h3>
              <ul className="space-y-2 text-[11px] leading-5 text-slate-300">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <LocalizedLink href={item.href} className="wrap-break-word hover:text-[#FF9102]">{item.label}</LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">Home & Utility</h3>
            <ul className="space-y-2 text-[11px] leading-5 text-slate-300">
              <li><LocalizedLink href="/" className="hover:text-[#FF9102]">Home</LocalizedLink></li>
              <li><LocalizedLink href="/company-profile" className="hover:text-[#FF9102]">Company Profile</LocalizedLink></li>
              <li><LocalizedLink href="/sign-in" className="hover:text-[#FF9102]">Sign In</LocalizedLink></li>
              <li><LocalizedLink href="/contact/request-consultation" className="hover:text-[#FF9102]">Talk to DIGINFO</LocalizedLink></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-375 flex-col gap-3 px-4 py-4 text-[10px] text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {currentYear} DIGINFO. Building Technology, AI Intelligence & Digital Trust.</p>
          <div className="flex flex-wrap items-center gap-3">
            <LocalizedLink href="/legal/privacy-policy" className="whitespace-nowrap hover:text-white">Privacy Policy</LocalizedLink>
            <LocalizedLink href="/legal/terms-of-use" className="whitespace-nowrap hover:text-white">Terms of Use</LocalizedLink>
            <LocalizedLink href="/legal/cookie-policy" className="whitespace-nowrap hover:text-white">Cookie Policy</LocalizedLink>
            <LocalizedLink href="/legal/responsible-disclosure" className="whitespace-nowrap hover:text-white">Responsible Disclosure</LocalizedLink>
            <LocalizedLink href="/legal/accessibility" className="whitespace-nowrap hover:text-white">Accessibility</LocalizedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
