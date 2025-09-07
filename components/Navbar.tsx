"use client";
/**
 * CHANGELOG:
 * - Added blur backdrop, active link styling and focus-visible rings.
 */
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 elevate">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight opacity-90 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition"
        >
          Daniel Pilant • Software Engineer
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`opacity-80 hover:opacity-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${active ? "text-primary-400" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
