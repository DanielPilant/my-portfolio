/**
 * CHANGELOG:
 * - Sharpened corners, new color system and focus styles.
 */
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group relative block overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info-500"
    >
      {/* Featured badge */}
      {p.featured && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold tracking-wide text-white shadow">
          Featured
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-muted-500 bg-white/[0.05]">
            No image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Text */}
      <div className="p-6">
        <div className="mb-1 text-xl font-bold decoration-primary-400 underline-offset-4 group-hover:underline transition">
          {p.title}
        </div>
        <div className="text-muted-500 text-base mt-1 line-clamp-2 min-h-[2.5em]">{p.tagline}</div>

        <div className="flex flex-wrap gap-2 mt-4">
          {p.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-white/10 px-2 py-1 bg-white/[0.05] text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
