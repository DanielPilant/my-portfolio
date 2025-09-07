export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Daniel Pilant · Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
