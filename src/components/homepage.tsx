import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CloudCog,
  Cpu,
  FileText,
  GraduationCap,
  Layers3,
  Microscope,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import LocalizedLink from "@/components/localized-link";
import type { Locale } from "@/lib/i18n/types";
import { getTranslations } from "@/lib/i18n/server";

type HomePageProps = {
  locale: Locale;
};

type CardItem = {
  title: string;
  description: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[240px] items-end justify-start rounded-lg border border-[var(--border)] bg-[radial-gradient(circle_at_top,_rgba(0,51,102,0.14),_transparent_58%)] p-6 shadow-sm">
      <div className="rounded-full border border-[var(--border)] bg-white/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}

export default async function HomePage({ locale }: HomePageProps) {
  const t = await getTranslations(locale);
  const isRTL = locale === "ur" || locale === "ar";

  const outcomes: CardItem[] = [
    { title: t("outcomes.continuityTitle"), description: t("outcomes.continuityDescription") },
    { title: t("outcomes.intelligenceTitle"), description: t("outcomes.intelligenceDescription") },
    { title: t("outcomes.innovationTitle"), description: t("outcomes.innovationDescription") },
    { title: t("outcomes.growthTitle"), description: t("outcomes.growthDescription") },
  ];

  const sharedPlatforms: CardItem[] = [
    { title: "DGBRAIN", description: t("sharedPlatforms.dbrain") },
    { title: "DGHUB", description: t("sharedPlatforms.dghub") },
    { title: "DGEnterprise", description: t("sharedPlatforms.dgenterprise") },
    { title: "DGSHOP", description: t("sharedPlatforms.dgshop") },
    { title: "DG Nexus", description: t("sharedPlatforms.dgNexus") },
    { title: "Advanced LMS", description: t("sharedPlatforms.lms") },
  ];

  const flagshipPlatforms: CardItem[] = [
    { title: t("flagship.dbrain"), description: t("flagship.dbrainText") },
    { title: t("flagship.dgmagazine"), description: t("flagship.dgmagazineText") },
    { title: t("flagship.dgacademy"), description: t("flagship.dgacademyText") },
    { title: t("flagship.dgcloud"), description: t("flagship.dgcloudText") },
    { title: t("flagship.threatassurance"), description: t("flagship.threatassuranceText") },
    { title: t("flagship.dglabs"), description: t("flagship.dglabsText") },
    { title: t("flagship.nativeSecurity"), description: t("flagship.nativeSecurityText") },
  ];

  const capabilities: CardItem[] = [
    { title: t("capabilities.resilience"), description: "" },
    { title: t("capabilities.transformation"), description: "" },
    { title: t("capabilities.modernization"), description: "" },
    { title: t("capabilities.assurance"), description: "" },
    { title: t("capabilities.ai"), description: "" },
    { title: t("capabilities.education"), description: "" },
    { title: t("capabilities.manufacturing"), description: "" },
    { title: t("capabilities.growth"), description: "" },
  ];

  const solutions: CardItem[] = [
    { title: t("solutions.assessment"), description: "" },
    { title: t("solutions.consulting"), description: "" },
    { title: t("solutions.grc"), description: "" },
    { title: t("solutions.managed"), description: "" },
    { title: t("solutions.cloud"), description: "" },
    { title: t("solutions.training"), description: "" },
    { title: t("solutions.evaluation"), description: "" },
    { title: t("solutions.poc"), description: "" },
    { title: t("solutions.continuity"), description: "" },
    { title: t("solutions.awareness"), description: "" },
  ];

  const industries: CardItem[] = [
    { title: t("industries.government"), description: "" },
    { title: t("industries.banking"), description: "" },
    { title: t("industries.telecom"), description: "" },
    { title: t("industries.healthcare"), description: "" },
    { title: t("industries.education"), description: "" },
    { title: t("industries.infrastructure"), description: "" },
    { title: t("industries.enterprise"), description: "" },
    { title: t("industries.manufacturing"), description: "" },
  ];

  const trustPrinciples: CardItem[] = [
    { title: t("aiTrust.securityByDesign"), description: "" },
    { title: t("aiTrust.humanGoverned"), description: "" },
    { title: t("aiTrust.auditability"), description: "" },
    { title: t("aiTrust.resilience"), description: "" },
    { title: t("aiTrust.privacy"), description: "" },
    { title: t("aiTrust.improvement"), description: "" },
  ];

  const innovatechItems: CardItem[] = [
    { title: t("innovatech.productEngineering"), description: "" },
    { title: t("innovatech.devsecops"), description: "" },
    { title: t("innovatech.quality"), description: "" },
    { title: t("innovatech.sre"), description: "" },
    { title: t("innovatech.architecture"), description: "" },
    { title: t("innovatech.ip"), description: "" },
  ];

  const researchItems: CardItem[] = [
    { title: t("research.cyber"), description: "" },
    { title: t("research.evaluation"), description: "" },
    { title: t("research.poc"), description: "" },
    { title: t("research.bounty"), description: "" },
    { title: t("research.support"), description: "" },
    { title: t("research.pipeline"), description: "" },
  ];

  const talentItems: CardItem[] = [
    { title: t("talent.learning"), description: "" },
    { title: t("talent.practice"), description: "" },
    { title: t("talent.mentoring"), description: "" },
    { title: t("talent.work"), description: "" },
    { title: t("talent.outcomes"), description: "" },
    { title: t("talent.pathways"), description: "" },
  ];

  const reasons: CardItem[] = [
    { title: t("why.business"), description: "" },
    { title: t("why.cyber"), description: "" },
    { title: t("why.technology"), description: "" },
    { title: t("why.accountability"), description: "" },
    { title: t("why.research"), description: "" },
    { title: t("why.talent"), description: "" },
    { title: t("why.architecture"), description: "" },
    { title: t("why.ownership"), description: "" },
  ];

  const leaders: CardItem[] = [
    { title: t("team.founder"), description: "" },
    { title: t("team.cto"), description: "" },
    { title: t("team.hr"), description: "" },
    { title: t("team.strategy"), description: "" },
    { title: t("team.editor"), description: "" },
    { title: t("team.legal"), description: "" },
    { title: t("team.marketing"), description: "" },
    { title: t("team.content"), description: "" },
  ];

  return (
    <main className="bg-[var(--bg)] text-[var(--text)]" dir={isRTL ? "rtl" : "ltr"}>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,51,102,0.1),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            {/* <div className="mb-4 w-44 rounded-md border border-[var(--border)] bg-white/60 p-2 shadow-sm">
              <Image src="/logo-2.png" alt="DIGINFO logo" width={220} height={80} className="h-10 w-auto object-contain" />
            </div> */}
            <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              {t("hero.headline")}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted)]">{t("hero.supporting")}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LocalizedLink href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95">
                {t("hero.primary")}
                <ArrowRight className="h-4 w-4" />
              </LocalizedLink>
              <LocalizedLink href="/platforms" className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                {t("hero.secondary")}
              </LocalizedLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5">Cybersecurity</span>
              <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5">AI</span>
              <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5">Cloud</span>
              <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5">R&D</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-12 top-8 h-24 w-24 rounded-full bg-[var(--accent-soft)] blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-20 w-20 rounded-full bg-[var(--accent-soft)] blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] p-4 shadow-sm">
              <ImagePlaceholder label="Ecosystem" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 shadow-sm">
            <ImagePlaceholder label="Company profile" />
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{t("section.aboutEyebrow")}</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              {t("section.aboutTitle")}
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{t("section.aboutBody")}</p>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{t("section.aboutBodyTwo")}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                t("section.pillars.strategy"),
                t("section.pillars.security"),
                t("section.pillars.intelligence"),
                t("section.pillars.ecosystem"),
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--text)]">
                  <BadgeCheck className="h-4 w-4 text-[var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("outcomes.eyebrow")} title={t("outcomes.title")} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-md bg-[var(--accent-soft)] p-3 text-[var(--accent)]"><BriefcaseBusiness className="h-5 w-5" /></div>
                <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("ecosystem.eyebrow")} title={t("ecosystem.title")} description={t("ecosystem.subtitle")} />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {[
            { label: t("ecosystem.shared"), items: ["DGBRAIN", "DGHUB", "DGEnterprise"] },
            { label: t("ecosystem.public"), items: ["DGSHOP", "DG Nexus", "DGMAGAZINE"] },
            { label: t("ecosystem.community"), items: ["DGACADEMY", "DG Care", "Learning"] },
            { label: t("ecosystem.engineering"), items: ["DIGINFO INNOVATECH", "DevSecOps", "Architecture"] },
          ].map((block) => (
            <div key={block.label} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{block.label}</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {block.items.map((item) => (
                  <div key={item} className="rounded-md bg-[var(--bg-soft)] px-3 py-2">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("sharedPlatforms.eyebrow")} title={t("sharedPlatforms.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sharedPlatforms.map((platform) => (
              <div key={platform.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-md bg-[var(--accent-soft)] p-3 text-[var(--accent)]"><Layers3 className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold text-[var(--text)]">{platform.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("flagship.eyebrow")} title={t("flagship.title")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {flagshipPlatforms.map((platform) => (
            <div key={platform.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-md bg-[var(--accent-soft)] p-3 text-[var(--accent)]"><Sparkles className="h-5 w-5" /></div>
              <h3 className="text-lg font-semibold text-[var(--text)]">{platform.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{platform.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("capabilities.eyebrow")} title={t("capabilities.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
                <div className="mb-4 inline-flex rounded-md bg-[var(--accent-soft)] p-3 text-[var(--accent)]">
                  {[
                    <ShieldCheck key="shield" className="h-5 w-5" />,
                    <CloudCog key="cloud" className="h-5 w-5" />,
                    <Cpu key="cpu" className="h-5 w-5" />,
                    <FileText key="file" className="h-5 w-5" />,
                    <BrainCircuit key="brain" className="h-5 w-5" />,
                    <BookOpen key="book" className="h-5 w-5" />,
                    <Wrench key="wrench" className="h-5 w-5" />,
                    <Building2 key="building" className="h-5 w-5" />,
                  ][index]}
                </div>
                <h3 className="text-base font-semibold text-[var(--text)]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("solutions.eyebrow")} title={t("solutions.title")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {solutions.map((item, index) => (
            <div key={item.title} className="rounded-md border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <div className="mb-3 inline-flex rounded-md bg-[var(--accent-soft)] p-2.5 text-[var(--accent)]">
                {[
                  <ShieldCheck key="shield" className="h-4 w-4" />,
                  <UsersRound key="users" className="h-4 w-4" />,
                  <FileText key="file" className="h-4 w-4" />,
                  <BadgeCheck key="check" className="h-4 w-4" />,
                  <CloudCog key="cloud" className="h-4 w-4" />,
                  <GraduationCap key="grad" className="h-4 w-4" />,
                  <Microscope key="micro" className="h-4 w-4" />,
                  <Sparkles key="spark" className="h-4 w-4" />,
                  <BriefcaseBusiness key="brief" className="h-4 w-4" />,
                  <BookOpen key="book" className="h-4 w-4" />,
                ][index]}
              </div>
              <p className="text-sm font-medium leading-6 text-[var(--text)]">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("industries.eyebrow")} title={t("industries.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={industry.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
                <div className="mb-4 inline-flex rounded-md bg-[var(--accent-soft)] p-2.5 text-[var(--accent)]">
                  {[
                    <Building2 key="b1" className="h-5 w-5" />,
                    <BriefcaseBusiness key="b2" className="h-5 w-5" />,
                    <Cpu key="b3" className="h-5 w-5" />,
                    <ShieldCheck key="b4" className="h-5 w-5" />,
                    <GraduationCap key="b5" className="h-5 w-5" />,
                    <Wrench key="b6" className="h-5 w-5" />,
                    <Layers3 key="b7" className="h-5 w-5" />,
                    <Building2 key="b8" className="h-5 w-5" />,
                  ][index]}
                </div>
                <p className="text-base font-semibold text-[var(--text)]">{industry.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{t("aiTrust.eyebrow")}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{t("aiTrust.title")}</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{t("aiTrust.body")}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustPrinciples.map((principle) => (
                <div key={principle.title} className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--card)] px-4 py-3">
                  <BadgeCheck className="h-4 w-4 text-[var(--accent)]" />
                  <span className="text-sm font-medium text-[var(--text)]">{principle.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 shadow-sm">
            <ImagePlaceholder label="Responsible AI" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("innovatech.eyebrow")} title={t("innovatech.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {innovatechItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
                <div className="mb-4 inline-flex rounded-md bg-[var(--accent-soft)] p-3 text-[var(--accent)]"><Cpu className="h-5 w-5" /></div>
                <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{t("research.eyebrow")}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">{t("research.title")}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {researchItems.map((item) => (
                <div key={item.title} className="rounded-md border border-[var(--border)] bg-[var(--bg-soft)] p-4">
                  <span className="text-sm font-medium text-[var(--text)]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{t("talent.eyebrow")}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">{t("talent.title")}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {talentItems.map((item) => (
                <div key={item.title} className="rounded-md border border-[var(--border)] bg-[var(--bg-soft)] p-4">
                  <span className="text-sm font-medium text-[var(--text)]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("why.eyebrow")} title={t("why.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
                <div className="mb-4 inline-flex rounded-md bg-[var(--accent-soft)] p-3 text-[var(--accent)]"><Sparkles className="h-5 w-5" /></div>
                <h3 className="text-base font-semibold text-[var(--text)]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{t("team.eyebrow")}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{t("team.title")}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {leaders.map((leader) => (
            <div key={leader.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
              <div className="mb-5 h-52 rounded-md border border-[var(--border)] bg-[radial-gradient(circle_at_top,_rgba(0,51,102,0.14),_transparent_60%)]" />
              <p className="text-base font-semibold text-[var(--text)]">{leader.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("customers.eyebrow")} title={t("customers.title")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Government & public sector",
              "Banking & finance",
              "Telecom & connectivity",
              "Healthcare & regulated operations",
            ].map((customer) => (
              <div key={customer} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 text-center shadow-sm">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[var(--accent-soft)]" />
                <p className="text-sm font-semibold text-[var(--text)]">{customer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base leading-8 text-[var(--muted)]">{t("customers.info")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { quote: t("testimonials.quoteOne"), attribution: t("testimonials.attributionOne") },
            { quote: t("testimonials.quoteTwo"), attribution: t("testimonials.attributionTwo") },
            { quote: t("testimonials.quoteThree"), attribution: t("testimonials.attributionThree") },
          ].map((testimonial) => (
            <blockquote key={testimonial.attribution} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-7 shadow-sm">
              <p className="text-base leading-8 text-[var(--text)]">“{testimonial.quote}”</p>
              <footer className="mt-6 text-sm font-medium text-[var(--muted)]">{testimonial.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm md:p-12">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{t("cta.eyebrow")}</p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">{t("cta.title")}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">{t("cta.supporting")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="mailto:info@diginfo.net" className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95">
                {t("cta.primary")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <LocalizedLink href="/platforms" className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                {t("cta.secondary")}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
