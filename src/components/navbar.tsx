"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import LocalizedLink from "@/components/localized-link";
import { useTranslationsClient } from "@/lib/i18n/client";
import { buildLocalizedHref, detectLocale } from "@/lib/i18n/utils";
import type { Locale } from "@/lib/i18n/types";

const locales: Locale[] = ["en", "ur", "ar"];

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ur: "اردو",
  ar: "العربية",
};

const navGroups = [
  {
    key: "about",
    items: [
      { label: "Overview", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    key: "solutions",
    items: [
      { label: "Security Assessment", href: "/solutions/security-assessment" },
      { label: "Cyber Advisory", href: "/solutions/cyber-advisory" },
      { label: "Governance & Compliance", href: "/solutions/governance-risk-compliance" },
      { label: "Managed Security", href: "/solutions/managed-security" },
      { label: "Cloud Modernization", href: "/solutions/cloud-modernization" },
    ],
  },
  {
    key: "ecosystem",
    items: [
      { label: "Ecosystem Overview", href: "/ecosystem" },
      { label: "Shared Platforms", href: "/platforms" },
      { label: "DGBRAIN", href: "/platforms/dbrain" },
      { label: "DG Enterprise", href: "/platforms/dgenterprise" },
      { label: "DG Academy", href: "/platforms/dgacademy" },
    ],
  },
  {
    key: "platforms",
    items: [
      { label: "Platform Overview", href: "/platforms" },
      { label: "DGBRAIN", href: "/platforms/dbrain" },
      { label: "DGMAGAZINE", href: "/platforms/dgmagazine" },
      { label: "DGACADEMY", href: "/platforms/dgacademy" },
      { label: "DGCLOUD", href: "/platforms/dgcloud" },
      { label: "THREATASSURANCE", href: "/platforms/threatassurance" },
      { label: "DGLABS", href: "/platforms/dglabs" },
    ],
  },
  {
    key: "research",
    items: [
      { label: "Research Overview", href: "/research" },
      { label: "Cyber Research", href: "/research/cyber-research" },
      { label: "Product Evaluation", href: "/research/product-evaluation" },
      { label: "Innovation Pipeline", href: "/research/innovation-pipeline" },
    ],
  },
  {
    key: "contact",
    items: [{ label: "Contact", href: "/contact" }],
  },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const locale = detectLocale(pathname);
  const t = useTranslationsClient(locale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const getRestPath = () => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts[0] === "ur" || parts[0] === "ar") {
      const rest = parts.slice(1).join("/");
      return rest ? `/${rest}` : "/";
    }
    return pathname || "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#001d33] text-slate-200 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <LocalizedLink href="/" className="flex items-center gap-3">
          <Image src="/logo-2.png" alt="DIGINFO logo" width={180} height={52} className="h-10 w-auto object-contain" />
        </LocalizedLink>

        <nav className="hidden items-center gap-5 lg:flex">
          {navGroups.map((group) => {
            const isOpen = openMenu === group.key;

            return (
              <div key={group.key} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenMenu(isOpen ? null : group.key)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-200 transition hover:text-[#FF9102]"
                >
                  {t(`nav.${group.key}`)}
                  <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full z-20 mt-3 min-w-[220px] rounded-md border border-[var(--border)] bg-[var(--card)] p-2 shadow-sm">
                    {group.items.map((item) => (
                      <LocalizedLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-sm px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                      >
                        {item.label}
                      </LocalizedLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <div className="flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-xs font-medium">
            {locales.map((item) => {
              const active = item === locale;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => router.push(buildLocalizedHref(getRestPath(), item))}
                  className={`rounded-full px-2.5 py-1.5 transition ${
                    active ? "bg-[var(--accent)] text-white" : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {localeLabels[item]}
                </button>
              );
            })}
          </div>

          <a href="https://dgenterprise.diginfo.net/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-95">
            DGENTERPRISE
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--header)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            {navGroups.map((group) => (
              <div key={group.key} className="border-b border-[var(--border)] pb-2">
                <div className="flex items-center justify-between text-sm font-medium text-[var(--text)]">
                  <span>{t(`nav.${group.key}`)}</span>
                  <button
                    type="button"
                    onClick={() => setOpenMenu((current) => (current === group.key ? null : group.key))}
                    className="p-1"
                  >
                    <ChevronDown className={`h-4 w-4 transition ${openMenu === group.key ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {openMenu === group.key && (
                  <div className="mt-3 space-y-1">
                    {group.items.map((item) => (
                      <LocalizedLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-sm px-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                      >
                        {item.label}
                      </LocalizedLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-xs font-medium">
                {locales.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      router.push(buildLocalizedHref(getRestPath(), item));
                      setMobileOpen(false);
                    }}
                    className={`rounded-full px-2.5 py-1.5 ${
                      item === locale ? "bg-[var(--accent)] text-white" : "text-[var(--muted)]"
                    }`}
                  >
                    {localeLabels[item]}
                  </button>
                ))}
              </div>

              {/* <LocalizedLink href="/contact" className="text-sm font-medium text-[var(--accent)]">
                Contact
              </LocalizedLink> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
