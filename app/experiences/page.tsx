// app/experience/page.tsx
// CHANGELOG:
// - Updated colors, focus rings and sharp corners.
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";

export default function ExperienceIndex() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Experience</h1>
      <p className="mt-3 text-center text-muted-500">
        Leadership, teaching, and community building.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <Link
            key={exp.slug}
            href={`/experiences/${exp.slug}`}
            className="group block overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-0.5 transition shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] focus:outline-none focus-visible:ring-2 focus-visible:ring-info-500"
          >
            <div className="relative h-44 w-full">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-sm text-muted-500">{exp.meta}</p>
              <ul className="mt-3 space-y-1 text-muted-500 text-sm leading-relaxed">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-neutral-600 shrink-0 group-hover:bg-primary-400 transition-colors" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-primary-500">
                View details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
