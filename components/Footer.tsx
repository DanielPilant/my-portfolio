/**
 * CHANGELOG:
 * - Updated footer colors to new palette.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-500">
        © {new Date().getFullYear()} Daniel Pilant · Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
