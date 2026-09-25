"use client";

import { useEffect, useMemo, useState } from "react";
import type { Locale, Translations, TranslationFunction } from "./types";

const cache = new Map<Locale, Translations>();

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let value: unknown = obj;

  for (const key of keys) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      return path;
    }

    value = (value as Record<string, unknown>)[key];
    if (value === undefined) {
      return path;
    }
  }

  return typeof value === "string" ? value : path;
}

export function useTranslationsClient(locale: Locale): TranslationFunction {
  const [translations, setTranslations] = useState<Translations>(() => cache.get(locale) || {});

  useEffect(() => {
    if (cache.has(locale)) {
      setTranslations(cache.get(locale)!);
      return;
    }

    fetch(`/locale/${locale}.json`)
      .then((res) => res.json())
      .then((data: Translations) => {
        cache.set(locale, data);
        setTranslations(data);
      })
      .catch(() => {
        if (!cache.has(locale)) {
          cache.set(locale, {});
        }
      });
  }, [locale]);

  return useMemo(
    () => (key: string) => getNestedValue(translations, key),
    [translations]
  );
}

