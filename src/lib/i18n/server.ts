import { readFile } from "fs/promises";
import { join } from "path";
import type { Locale, TranslationFunction } from "./types";

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | Record<string, unknown> | unknown[];

const cache = new Map<Locale, Record<string, unknown>>();

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

export async function getTranslations(locale: Locale): Promise<TranslationFunction> {
  if (cache.has(locale)) {
    const translations = cache.get(locale)!;
    return (key: string) => getNestedValue(translations, key);
  }

  try {
    const filePath = join(process.cwd(), "public", "locale", `${locale}.json`);
    const fileContents = await readFile(filePath, "utf-8");
    const translations = JSON.parse(fileContents) as Record<string, unknown>;
    cache.set(locale, translations);
    return (key: string) => getNestedValue(translations, key);
  } catch {
    cache.set(locale, {});
    return (key: string) => key;
  }
}

