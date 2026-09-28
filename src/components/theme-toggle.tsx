"use client";

import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("diginfo-theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemPreference ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("diginfo-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] shadow-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
    </button>
  );
}
