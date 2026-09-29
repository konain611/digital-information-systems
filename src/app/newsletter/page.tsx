"use client";

import { useState } from "react";

export default function NewsletterPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Newsletter</p>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">Stay informed with DIGINFO updates.</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          Receive relevant updates on research, ecosystem developments, AI intelligence and secure technology progress.
        </p>

        {submitted ? (
          <div className="mt-6 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            You are subscribed. This frontend form is ready for later email integration.
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="mt-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-[var(--text)]">Name</label>
              <input id="name" required className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-[var(--text)]">Email</label>
              <input id="email" type="email" required className="mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]" placeholder="you@example.com" />
            </div>
            <label className="flex items-start gap-3 text-sm text-[var(--muted)]">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-[var(--border)]" />
              <span>I agree to receive relevant updates and business communications from DIGINFO.</span>
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
