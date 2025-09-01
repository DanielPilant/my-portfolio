import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-primary-500 shadow-lg hover:shadow-xl transition-all duration-300 relative"
    >
      {/* Featured badge */}
      {p.featured && (
        <span className="absolute top-3 right-3 z-10 bg-primary-500/90 text-xs text-white px-3 py-1 rounded-full shadow font-semibold tracking-wide">
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
          <div className="absolute inset-0 grid place-items-center text-neutral-500 bg-neutral-800">
            No image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
      </div>

      {/* Text */}
      <div className="p-6">
        <div className="text-xl font-bold mb-1 group-hover:text-primary-400 transition-colors duration-200">{p.title}</div>
        <div className="text-neutral-400 text-base mt-1 line-clamp-2 min-h-[2.5em]">{p.tagline}</div>

        <div className="flex flex-wrap gap-2 mt-4">
          {p.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-neutral-700/80 px-2 py-1 bg-neutral-800/60 text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
