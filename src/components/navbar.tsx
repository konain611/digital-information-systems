"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslationsClient } from "@/lib/i18n/client";
import { detectLocale, buildLocalizedHref } from "@/lib/i18n/utils";
import LocalizedLink from "@/components/localized-link";
import type { Locale } from "@/lib/i18n/types";

const locales: Locale[] = ["en", "ur", "ar"];

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ur: "اردو",
  ar: "العربية"
};

const dropdownOptionKeys: Record<string, string[]> = {
  company: ["about-us", "strategy", "contact-us"],
  services: ["detection-and-response", "assesment", "managed", "cloud"],
  products: ["security-challenge", "education", "cloud-security", "technology", "news-updates"]
};

const navItems = [
  { key: "company", segment: "company" },
  { key: "services", segment: "services" },
  { key: "products", segment: "products" },
  { key: "media", segment: "media" },
  { key: "dgenterprise", segment: "dgenterprise" }
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const locale = detectLocale(pathname);
  const t = useTranslationsClient(locale);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const isRTL = locale === "ur" || locale === "ar";

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDropdown = (key: string) => {
    clearCloseTimer();
    setActiveDropdown(key);
    // Small delay to ensure smooth animation
    setTimeout(() => setDropdownVisible(key), 10);
  };

  const closeDropdown = () => {
    clearCloseTimer();
    setDropdownVisible(null);
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimer.current = null;
    }, 300);
  };

  const toggleDropdown = (key: string) => {
    clearCloseTimer();
    if (activeDropdown === key) {
      setDropdownVisible(null);
      closeTimer.current = setTimeout(() => {
        setActiveDropdown(null);
        closeTimer.current = null;
      }, 300);
    } else {
      setActiveDropdown(key);
      setDropdownVisible(key);
    }
  };

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdown((current) => (current === key ? null : key));
  };

  const getDropdownHref = (segment: string, option: string) => {
    const slug = option
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return `/${segment}/${slug}`;
  };

  const getRestPath = () => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts[0] === "ur" || parts[0] === "ar") {
      const rest = parts.slice(1).join("/");
      return rest ? `/${rest}` : "/";
    }
    return pathname || "/";
  };

  return (
    <header className="w-[90%] mx-auto border-2 rounded-xl mt-4 border-[#003366]/20 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4">
        <LocalizedLink href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={130}
            height={40}
            priority
            className="object-contain rounded-lg"
          />
        </LocalizedLink>

        <nav className="hidden lg:flex items-center gap-7 text-lg font-semibold text-gray-600">
          {navItems.slice(0, 4).map((item) => {
            const hasDropdown = Object.prototype.hasOwnProperty.call(dropdownOptionKeys, item.key);
            const isOpen = activeDropdown === item.key;

            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => hasDropdown && openDropdown(item.key)}
                onMouseLeave={() => hasDropdown && closeDropdown()}
              >
                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.key)}
                    className={`flex items-center gap-1 text-gray-600 hover:text-[#003366] transition ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span>{t(`nav.${item.key}`)}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ease-out ${isRTL ? (isOpen ? "rotate-0" : "rotate-180") : (isOpen ? "rotate-180" : "rotate-0")}`}
                    />
                  </button>
                ) : (
                  <LocalizedLink
                    href={item.segment ? `/${item.segment}` : "/"}
                    className="flex items-center gap-1 hover:text-[#003366] transition"
                  >
                    {t(`nav.${item.key}`)}
                  </LocalizedLink>
                )}

                {hasDropdown && (isOpen || dropdownVisible === item.key) && (
                  <div
                    className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-full z-10 mt-2 w-52 rounded-2xl border border-[#003366]/20 bg-white shadow-lg transition-all duration-300 ease-out ${
                      dropdownVisible === item.key 
                        ? 'opacity-100 transform scale-100 translate-y-0' 
                        : 'opacity-0 transform scale-95 -translate-y-2'
                    } origin-top`}
                    onMouseEnter={clearCloseTimer}
                    onMouseLeave={closeDropdown}
                  >
                    {dropdownOptionKeys[item.key].map((option) => (
                      <LocalizedLink
                        key={option}
                        href={getDropdownHref(item.segment || item.key, option)}
                        onClick={() => setActiveDropdown(null)}
                        className={`block w-full px-4 py-3 text-sm text-gray-600 hover:bg-[#003366]/10 hover:text-[#001f44] ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        {t(`nav.dropdown.${item.key}.${option}`)}
                      </LocalizedLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LocalizedLink
            href="/dgenterprise"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
          >
            {t("nav.dgenterprise")}
          </LocalizedLink>

          <div className="flex items-center rounded-full border border-gray-300 bg-white p-0.5 text-xs font-medium">
            {locales.map((l) => {
              const active = l === locale;
              return (
                <button
                  key={l}
                  onClick={() => router.push(buildLocalizedHref(getRestPath(), l))}
                  className={`rounded-full px-2.5 py-1 transition ${
                    active
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="flex flex-col gap-5 px-4 py-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => {
              const hasDropdown = Object.prototype.hasOwnProperty.call(dropdownOptionKeys, item.key);
              const isMobileOpen = mobileDropdown === item.key;

              return (
                <div key={item.key}>
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.key)}
                      className={`flex items-center justify-between w-full hover:text-black transition ${
                        isRTL ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <span>{t(`nav.${item.key}`)}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ease-out ${
                          isRTL ? (isMobileOpen ? "rotate-0" : "rotate-180") : (isMobileOpen ? "rotate-180" : "rotate-0")
                        }`}
                      />
                    </button>
                  ) : (
                    <LocalizedLink
                      key={item.key}
                      href={item.segment ? `/${item.segment}` : "/"}
                      onClick={() => setOpen(false)}
                      className="hover:text-black"
                    >
                      {t(`nav.${item.key}`)}
                    </LocalizedLink>
                  )}

                  {hasDropdown && isMobileOpen && (
                    <div className="mt-2 ml-4 space-y-1">
                      {dropdownOptionKeys[item.key].map((option) => (
                        <LocalizedLink
                          key={option}
                          href={getDropdownHref(item.segment || item.key, option)}
                          onClick={() => {
                            setOpen(false);
                            setMobileDropdown(null);
                          }}
                          className={`block py-2 text-sm text-gray-600 hover:text-black ${
                            isRTL ? 'text-right' : 'text-left'
                          }`}
                        >
                          {t(`nav.dropdown.${item.key}.${option}`)}
                        </LocalizedLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex gap-2 pt-2">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    router.push(buildLocalizedHref(getRestPath(), l));
                    setOpen(false);
                  }}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    l === locale
                      ? "bg-gray-900 text-white"
                      : "border border-gray-300 text-gray-700"
                  }`}
                >
                  {localeLabels[l]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
