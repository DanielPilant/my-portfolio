import { projects } from "@/data/projects";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return <main className="p-8 text-center text-lg text-red-400">Not found</main>;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-full bg-neutral-900/80 rounded-2xl shadow-lg border border-neutral-800 p-8">
        <Link href="/projects" className="text-sm underline text-neutral-400 hover:text-primary-400 transition">← Back to all projects</Link>
        <h1 className="text-4xl font-extrabold mt-4 mb-2 tracking-tight text-primary-400 drop-shadow-lg">{p.title}</h1>
        <p className="mt-2 text-neutral-300 text-lg mb-4">{p.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-2 mb-6">
          {p.tech.map((t) => (
            <span key={t} className="text-xs rounded-full border border-neutral-700 px-2 py-1 bg-neutral-800/60 text-neutral-200">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          {p.demo && (
            <a href={p.demo} target="_blank" className="rounded-lg px-5 py-2 bg-primary-500 text-white font-semibold shadow hover:bg-primary-400 transition">Demo</a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" className="rounded-lg px-5 py-2 border border-neutral-700 text-neutral-200 font-semibold hover:bg-neutral-800 transition">Code</a>
          )}
        </div>

        {/* Coming soon: GIF/video, architecture diagrams, technical metrics */}
      </div>
    </main>
  );
}
