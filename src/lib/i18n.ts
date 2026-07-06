export type Locale = "es" | "en";

export function normalizeLocale(locale?: string | null): Locale {
  return locale === "en" ? "en" : "es";
}
