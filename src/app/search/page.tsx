"use client";

import { Search as SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";

const indexedContent = [
  { title: "DIGINFO Overview", href: "/who-we-are/about-diginfo", summary: "Overview of DIGINFO’s business, technologies and ecosystem." },
  { title: "What We Do", href: "/what-we-do", summary: "Security, AI, cloud, assurance and growth enablement capabilities." },
  { title: "Industries", href: "/industries", summary: "Sector-specific digital transformation and trust guidance." },
  { title: "DGBRAIN", href: "/innovation/dgbrain-ai-intelligence-engine", summary: "AI intelligence and human-reviewed decision support." },
  { title: "DGCLOUD", href: "/ecosystem/dgcloud", summary: "Secure cloud and platform modernization support." },
  { title: "Research", href: "/insights/research", summary: "Strategic research and digital insight resources." },
  { title: "Contact", href: "/contact", summary: "Get in touch with DIGINFO for consultation, product or partnership inquiries." },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return indexedContent;

    return indexedContent.filter((item) => {
      const haystack = `${item.title} ${item.summary}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Search</p>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">Search DIGINFO content</h1>
        <div className="mt-6 flex items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-3">
          <SearchIcon className="h-4 w-4 text-[var(--muted)]" />
          <input
            aria-label="Search DIGINFO"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for strategy, cyber, AI, cloud or contact..."
            className="w-full bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]"
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {results.length === 0 ? (
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 text-[var(--muted)]">
            No results found. Try a broader search term such as DGBRAIN, cloud, AI, or contact.
          </div>
        ) : (
          results.map((item) => (
            <a key={item.href} href={item.href} className="block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition hover:border-[var(--accent)]">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Result</div>
              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
            </a>
          ))
        )}
      </div>
    </main>
  );
}
