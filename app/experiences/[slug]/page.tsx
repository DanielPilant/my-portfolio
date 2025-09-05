// app/experience/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences, experienceMap } from "@/data/experience";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const exp = experienceMap[params.slug];
  if (!exp) notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/experiences" className="text-sm text-neutral-400 hover:text-neutral-200">
        ← Back to Experience
      </Link>

      <h1 className="mt-4 text-3xl md:text-5xl font-bold">{exp.title}</h1>
      <p className="mt-2 text-neutral-400">{exp.meta}</p>

      <div className="mt-6 relative w-full aspect-[16/9]">
        <Image
          src={exp.cover}
          alt={exp.title}
          fill
          className="object-cover rounded-2xl border border-neutral-800"
          sizes="100vw"
        />
      </div>

      <p className="mt-6 text-neutral-300 leading-relaxed">{exp.long}</p>

      <ul className="mt-6 list-disc list-inside text-neutral-300 space-y-1">
        {exp.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {exp.gallery.map((src, i) => (
          <div key={src} className="relative aspect-[4/3]">
            <Image
              src={src}
              alt={`${exp.title} photo ${i + 1}`}
              fill
              className="object-cover rounded-xl border border-neutral-800"
              sizes="(min-width: 1024px) 33vw, 50vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
