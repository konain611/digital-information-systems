import { getTranslations } from "@/lib/i18n/server";
import type { Locale } from "@/lib/i18n/types";

type HomePageProps = {
  locale: Locale;
};

export default async function HomePage({ locale }: HomePageProps) {
  const t = await getTranslations(locale);

  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <h1 className="text-2xl font-semibold">{t("home.welcome")}</h1>
    </main>
  );
}


