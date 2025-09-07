/**
 * CHANGELOG:
 * - Adopted new color tokens and sharp corners with focus styles.
 */
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="border border-white/10 px-3 py-2 text-sm opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition"
        aria-label="Toggle theme"
      >
        …
      </button>
    );
  }

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="border border-white/10 px-3 py-2 text-sm hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        aria-label="Toggle theme"
      >
        {isDark ? (
          // Sun icon (dark mode → suggest switching to light)
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l-1.4-1.4M20.4 20.4 19 19M19 5l1.4-1.4M5 19l-1.4 1.4"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        ) : (
          // Moon icon (light mode → switch to dark)
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path
              d="M21 12.5A8.5 8.5 0 1 1 11.5 3a6.5 6.5 0 1 0 9.5 9.5Z"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* System mode toggle (optional) */}
      <button
        onClick={() => setTheme("system")}
        className={`border px-3 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400
          ${theme === "system"
            ? "border-primary-600 text-primary-400"
            : "border-white/10 text-muted-500 hover:bg-white/5"}`}
      >
        System
      </button>
    </div>
  );
}
