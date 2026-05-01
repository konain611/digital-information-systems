import type { Locale } from "./types";

export function detectLocale(pathname: string): Locale {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];
  if (first === "ur" || first === "ar") return first;
  return "en";
}

export function buildLocalizedHref(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("//") || href.startsWith("#")) {
    return href;
  }

  const cleanHref = href.startsWith("/") ? href : `/${href}`;
  
  if (locale === "en") {
    return cleanHref === "/" ? "/" : cleanHref;
  }

  if (cleanHref === "/") {
    return `/${locale}`;
  }

  if (cleanHref.startsWith(`/${locale}/`) || cleanHref === `/${locale}`) {
    return cleanHref;
  }

  return `/${locale}${cleanHref}`;
}

