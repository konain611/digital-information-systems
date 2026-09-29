"use client";

import { useState } from "react";

export type ContactField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
};

export function ContactForm({
  title,
  description,
  fields,
  consentText,
}: {
  title: string;
  description: string;
  fields: ContactField[];
  consentText?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>
      <p className="mt-3 text-base leading-7 text-[var(--muted)]">{description}</p>

      {submitted ? (
        <div className="mt-6 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          Your request has been captured. This frontend page is ready for backend integration.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            {fields.map((field) => {
              const sharedClassName =
                "mt-2 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]";
              const isWideField = field.type === "textarea";

              return (
                <div key={field.name} className={isWideField ? "md:col-span-2" : ""}>
                  <label htmlFor={field.name} className="text-sm font-medium text-[var(--text)]">
                    {field.label}
                    {field.required ? <span className="ml-1 text-[var(--accent)]">*</span> : null}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={5}
                      className={sharedClassName}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type ?? "text"}
                      required={field.required}
                      placeholder={field.placeholder}
                      className={sharedClassName}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {consentText ? (
            <label className="flex items-start gap-3 text-sm text-[var(--muted)]">
              <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-[var(--border)]" />
              <span>{consentText}</span>
            </label>
          ) : null}

          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-95">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
