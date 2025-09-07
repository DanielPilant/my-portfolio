"use client";
// CHANGELOG:
// - Removed obsolete comment reference.
import Link from "next/link";
import { useEffect, useState } from "react";

type Tab = { id: string; href: string; label: string; icon: React.ReactNode };

const TABS: Tab[] = [
  {
    id: "home",
    href: "#home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    id: "about",
    href: "#about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M5 21a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  // Projects
  {
    id: "projects",
    href: "#projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M4 7a2 2 0 0 1 2-2h6l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 5v4h4" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  // Experiences
  {
    id: "experiences",
    href: "#experiences",
    label: "Experiences",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M16 7V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    id: "skills",
    href: "#skills",
    label: "Skills",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M6 18 18 6M7 7l10 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: "resume",
    href: "#resume",
    label: "Resume",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 13h6M9 17h6M9 9h3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  },
  {
    id: "contact",
    href: "#contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 0 1-3-.47L3 21l1.47-5.01A8.9 8.9 0 0 1 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    )
  }
];

export default function BottomNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.25 }
    );

    TABS.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <nav
      dir="ltr"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                 rounded-full border border-neutral-800 bg-neutral-950/70
                 backdrop-blur shadow-xl"
      aria-label="Bottom Navigation"
    >
      <ul className="flex items-center gap-1 px-2 py-1">
        {TABS.map((t) => {
          const isActive = active === t.id;
          return (
            <li key={t.id}>
              <Link
  href={t.href}
  onClick={() => setActive(t.id)}
  className={`group inline-flex items-center justify-center
              w-12 h-12 mx-1 rounded-full transition
              ${isActive
                ? "bg-neutral-800 text-neutral-50"
                : "text-neutral-200 hover:bg-neutral-800/70"}`}
  aria-label={t.label}
>
  {t.icon}
</Link>

            </li>
          );
        })}
      </ul>
    </nav>
  );
}
