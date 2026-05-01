import { readFile } from "fs/promises";
import { join } from "path";
import type { Locale, TranslationFunction } from "./types";

const cache = new Map<Locale, any>();

function getNestedValue(obj: any, path: string): string {
  const keys = path.split(".");
  let value = obj;
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
  }
  return typeof value === "string" ? value : path;
}

export async function getTranslations(locale: Locale): Promise<TranslationFunction> {
  if (cache.has(locale)) {
    const translations = cache.get(locale)!;
    return (key: string) => getNestedValue(translations, key);
  }

  try {
    const filePath = join(process.cwd(), "public", "i18n", `${locale}.json`);
    const fileContents = await readFile(filePath, "utf-8");
    const translations = JSON.parse(fileContents);
    cache.set(locale, translations);
    return (key: string) => getNestedValue(translations, key);
  } catch {
    cache.set(locale, {});
    return (key: string) => key;
  }
}

