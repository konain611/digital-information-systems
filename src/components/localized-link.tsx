"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { detectLocale, buildLocalizedHref } from "@/lib/i18n/utils";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const pathname = usePathname() || "/";
  const locale = detectLocale(pathname);
  const localizedHref = buildLocalizedHref(href, locale);

  return <Link href={localizedHref} {...props} />;
}

