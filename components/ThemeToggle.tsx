"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // מניעת הבזק עד הידרציה
    return (
      <button
        className="rounded-xl border border-neutral-700 px-3 py-2 text-sm opacity-70"
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
        className="rounded-xl border border-neutral-700 px-3 py-2 text-sm hover:bg-neutral-900 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          // אייקון שמש (מצב כהה → הצע לחזור לבהיר)
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l-1.4-1.4M20.4 20.4 19 19M19 5l1.4-1.4M5 19l-1.4 1.4"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        ) : (
          // אייקון ירח (מצב בהיר → לעבור לכהה)
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path
              d="M21 12.5A8.5 8.5 0 1 1 11.5 3a6.5 6.5 0 1 0 9.5 9.5Z"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* מתג מצב מערכת (לא חובה) */}
      <button
        onClick={() => setTheme("system")}
        className={`rounded-xl border px-3 py-2 text-xs transition-colors
          ${theme === "system"
            ? "border-sky-600 text-sky-400"
            : "border-neutral-700 text-neutral-400 hover:bg-neutral-900"}`}
      >
        System
      </button>
    </div>
  );
}
