"use client";

import { useEffect, useState, useMemo } from "react";
import type { Locale, Translations, TranslationFunction } from "./types";

const cache = new Map<Locale, Translations>();

function getNestedValue(obj: any, path: string): string {
  const keys = path.split(".");
  let value = obj;
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
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

    fetch(`/i18n/${locale}.json`)
      .then((res) => res.json())
      .then((data) => {
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

