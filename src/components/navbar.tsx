"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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

  const getRestPath = () => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts[0] === "ur" || parts[0] === "ar") {
      const rest = parts.slice(1).join("/");
      return rest ? `/${rest}` : "/";
    }
    return pathname || "/";
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <LocalizedLink href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={110}
            height={32}
            priority
            className="object-contain"
          />
        </LocalizedLink>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
          {navItems.slice(0, 4).map((item) => (
            <LocalizedLink
              key={item.key}
              href={item.segment ? `/${item.segment}` : "/"}
              className="hover:text-black transition"
            >
              {t(`nav.${item.key}`)}
            </LocalizedLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LocalizedLink
            href="/dgenterprise"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
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
            {navItems.map((item) => (
              <LocalizedLink
                key={item.key}
                href={item.segment ? `/${item.segment}` : "/"}
                onClick={() => setOpen(false)}
                className="hover:text-black"
              >
                {t(`nav.${item.key}`)}
              </LocalizedLink>
            ))}

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
