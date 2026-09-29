import { ArrowRight } from "lucide-react";
import LocalizedLink from "@/components/localized-link";
import type { SitePageContent } from "@/lib/site-content";

export function MarketingPage({
  eyebrow,
  title,
  intro,
  sections,
  cta,
}: SitePageContent) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{eyebrow}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">{intro}</p> : null}
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[linear-gradient(135deg,#f5f8fb,#edf4fb)] p-3 shadow-sm">
          <div className="flex min-h-[220px] items-end justify-start rounded-md border border-[var(--border)] bg-[radial-gradient(circle_at_top,_rgba(0,51,102,0.14),_transparent_58%)] p-4">
            <div className="rounded-full border border-[var(--border)] bg-white/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              {eyebrow}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[var(--text)]">{section.title}</h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {cta ? (
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <p className="text-sm font-medium text-[var(--muted)]">Ready to move forward?</p>
              <LocalizedLink href={cta.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </LocalizedLink>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
