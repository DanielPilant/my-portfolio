// app/experience/page.tsx
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";

export default function ExperienceIndex() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Experience</h1>
      <p className="mt-3 text-center text-neutral-400">
        Leadership, teaching, and community building.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {experiences.map((exp) => (
          <Link
            key={exp.slug}
            href={`/experiences/${exp.slug}`}
            className="group block rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
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
              <p className="text-sm text-neutral-400">{exp.meta}</p>
              <ul className="mt-3 space-y-1 text-neutral-300 text-sm leading-relaxed">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-neutral-600 shrink-0 group-hover:bg-sky-500 transition-colors" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-400 group-hover:text-sky-300">
                View details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
