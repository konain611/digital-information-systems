import Image from "next/image";
import type { ReactNode } from "react";

export function ContentPage({
  title,
  eyebrow,
  intro,
  children,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{eyebrow}</p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">{intro}</p> : null}
      </div>

      {children}
    </main>
  );
}

export function ImagePanel({ label }: { label: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[linear-gradient(135deg,#f5f8fb,#edf4fb)] p-3 shadow-sm">
      <div className="flex min-h-[220px] items-end justify-start rounded-md border border-[var(--border)] bg-[radial-gradient(circle_at_top,_rgba(0,51,102,0.14),_transparent_58%)] p-4">
        <div className="rounded-full border border-[var(--border)] bg-white/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
          {label}
        </div>
      </div>
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image src="/logo-2.png" alt="DIGINFO logo" width={220} height={90} className="h-auto w-full object-contain" />
    </div>
  );
}
