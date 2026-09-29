"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Globe, Menu, UserRound, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import LocalizedLink from "@/components/localized-link";
import { buildLocalizedHref, detectLocale } from "@/lib/i18n/utils";
import { navGroups } from "@/lib/site-navigation";
import type { Locale } from "@/lib/i18n/types";

const locales: Locale[] = ["en", "ur", "ar"];

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ur: "اردو",
  ar: "العربية",
};

const linkBase =
  "relative inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-medium text-slate-200 transition-colors duration-200 hover:text-[#FF9102] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9102] after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-0.5 after:scale-x-0 after:rounded-full after:bg-[#FF9102] after:transition-transform after:duration-300 hover:after:scale-x-100";

const linkActive = "text-[#FF9102] after:scale-x-100";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const locale = detectLocale(pathname);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const restPath = (() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts[0] === "ur" || parts[0] === "ar") {
      const rest = parts.slice(1).join("/");
      return rest ? `/${rest}` : "/";
    }
    return pathname || "/";
  })();

  const isActive = (href: string) =>
    href === "/" ? restPath === "/" : restPath === href || restPath.startsWith(`${href}/`);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const switchLocale = (item: Locale) => {
    router.push(buildLocalizedHref(restPath, item));
    setLanguageOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileGroup(null);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setLanguageOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("resize", onResize);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 text-slate-200 transition-all duration-300 ${
        scrolled
          ? "bg-[#001d33] "
          : "bg-[#001d33]"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#FF9102]/70 to-transparent" />

      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 xl:px-8 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <LocalizedLink href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90">
          <Image
            src="/logo-2.png"
            alt="DIGINFO logo"
            width={180}
            height={52}
            priority
            className="h-10 w-auto object-contain"
          />
        </LocalizedLink>

        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
          {navGroups.map((group, index) => {
            const isOpen = openMenu === group.label;
            const wide = group.items.length > 8;
            const alignEnd = index >= navGroups.length - 3;

            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => openDropdown(group.label)}
                onMouseLeave={scheduleClose}
                onFocus={() => openDropdown(group.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <LocalizedLink
                  href={group.href}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(null)}
                  className={`${linkBase} ${isActive(group.href) || isOpen ? linkActive : ""}`}
                >
                  {group.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </LocalizedLink>

                <div
                  className={`absolute top-full z-20 pt-3 transition-all duration-200 ${
                    alignEnd ? "end-0" : "start-0"
                  } ${wide ? "w-lg" : "w-80"} ${
                    isOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"
                  }`}
                >
                  <div
                    className={`grid gap-0.5 rounded-lg border border-(--border) border-t-2 border-t-[#FF9102] bg-(--card) p-2 shadow-2xl shadow-black/30 ${
                      wide ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {group.items.map((item) => (
                      <LocalizedLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenMenu(null)}
                        className={`group/item flex items-center justify-between gap-2 rounded-md px-3 py-2 text-[13px] transition-colors duration-200 hover:bg-(--accent-soft) hover:text-(--accent) ${
                          isActive(item.href) ? "bg-(--accent-soft) text-(--accent)" : "text-(--muted)"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100 rtl:rotate-180 rtl:translate-x-1 rtl:group-hover/item:translate-x-0" />
                      </LocalizedLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <LocalizedLink
            href="/company-profile"
            className={`${linkBase} ${isActive("/company-profile") ? linkActive : ""}`}
          >
            Company Profile
          </LocalizedLink>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />

          <div ref={langRef} className="relative">
            <button
              type="button"
              aria-label="Change language"
              aria-haspopup="true"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((current) => !current)}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 text-[12px] font-semibold text-slate-100 transition hover:border-[#FF9102] hover:text-[#FF9102] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9102]"
            >
              <Globe className="h-3.5 w-3.5" />
              {localeLabels[locale]}
            </button>

            <div
              className={`absolute end-0 top-full z-20 mt-2 w-32 rounded-lg border border-(--border) bg-(--card) p-1 shadow-2xl shadow-black/30 transition-all duration-200 ${
                languageOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => switchLocale(item)}
                  className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-[12px] font-medium transition ${
                    item === locale
                      ? "bg-(--accent) text-white"
                      : "text-(--muted) hover:bg-(--accent-soft) hover:text-(--accent)"
                  }`}
                >
                  {localeLabels[item]}
                </button>
              ))}
            </div>
          </div>

          <LocalizedLink
            href="/sign-in"
            aria-label="Sign In"
            title="Sign In"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:border-[#FF9102] hover:text-[#FF9102] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9102]"
          >
            <UserRound className="h-4 w-4" />
          </LocalizedLink>

          <LocalizedLink
            href="/contact/request-consultation"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#FF9102] px-4 py-2 text-[13px] font-semibold text-[#001d33] transition duration-200 hover:-translate-y-px hover:bg-[#ffa62e] hover:shadow-lg hover:shadow-[#FF9102]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Talk to DIGINFO
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </LocalizedLink>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition hover:border-[#FF9102] hover:text-[#FF9102] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9102]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#001d33] shadow-2xl shadow-black/40 transition-all duration-300 xl:hidden ${
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navGroups.map((group) => {
            const isOpen = mobileGroup === group.label;

            return (
              <div key={group.label} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <LocalizedLink
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex-1 py-3.5 text-sm font-medium transition-colors hover:text-[#FF9102] ${
                      isActive(group.href) ? "text-[#FF9102]" : "text-slate-100"
                    }`}
                  >
                    {group.label}
                  </LocalizedLink>
                  <button
                    type="button"
                    aria-label={`Toggle ${group.label} submenu`}
                    aria-expanded={isOpen}
                    onClick={() => setMobileGroup((current) => (current === group.label ? null : group.label))}
                    className="flex h-10 w-10 items-center justify-center rounded-md text-slate-300 transition hover:text-[#FF9102]"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#FF9102]" : ""}`} />
                  </button>
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mb-3 ms-1 flex flex-col border-s-2 border-[#FF9102]/40 ps-3">
                      {group.items.map((item) => (
                        <LocalizedLink
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`rounded-md px-2 py-2 text-sm transition-colors hover:text-[#FF9102] ${
                            isActive(item.href) ? "text-[#FF9102]" : "text-slate-300"
                          }`}
                        >
                          {item.label}
                        </LocalizedLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <LocalizedLink
            href="/company-profile"
            onClick={() => setMobileOpen(false)}
            className={`border-b border-white/10 py-3.5 text-sm font-medium transition-colors hover:text-[#FF9102] ${
              isActive("/company-profile") ? "text-[#FF9102]" : "text-slate-100"
            }`}
          >
            Company Profile
          </LocalizedLink>

          <LocalizedLink
            href="/sign-in"
            onClick={() => setMobileOpen(false)}
            className={`border-b border-white/10 py-3.5 text-sm font-medium transition-colors hover:text-[#FF9102] ${
              isActive("/sign-in") ? "text-[#FF9102]" : "text-slate-100"
            }`}
          >
            Sign In
          </LocalizedLink>

          <div className="flex flex-col gap-4 pt-5">
            <LocalizedLink
              href="/contact/request-consultation"
              onClick={() => setMobileOpen(false)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF9102] px-5 py-3 text-sm font-semibold text-[#001d33] transition hover:bg-[#ffa62e] hover:shadow-lg hover:shadow-[#FF9102]/30"
            >
              Talk to DIGINFO
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
            </LocalizedLink>

            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-slate-400" />
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => switchLocale(item)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                    item === locale
                      ? "border-[#FF9102] bg-[#FF9102] text-[#001d33]"
                      : "border-white/15 text-slate-300 hover:border-[#FF9102] hover:text-[#FF9102]"
                  }`}
                >
                  {localeLabels[item]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}