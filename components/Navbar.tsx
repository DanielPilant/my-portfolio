import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/70 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight transition-colors hover:text-sky-400"
        >
          Daniel Pilant • Software Engineer
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/projects"
            className="opacity-80 transition-colors hover:opacity-100 hover:text-sky-400"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="opacity-80 transition-colors hover:opacity-100 hover:text-sky-400"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="opacity-80 transition-colors hover:opacity-100 hover:text-sky-400"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
