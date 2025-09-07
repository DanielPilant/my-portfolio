// CHANGELOG:
// - Updated project detail page styling to new palette.
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
      <div className="w-full border border-white/10 bg-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
        <Link href="/projects" className="text-sm underline text-primary-400 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">← Back to all projects</Link>
        <h1 className="text-4xl font-extrabold mt-4 mb-2 tracking-tight text-primary-400 drop-shadow-lg">{p.title}</h1>
        <p className="mt-2 text-muted-500 text-lg mb-4">{p.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-2 mb-6">
          {p.tech.map((t) => (
            <span key={t} className="text-xs rounded-full border border-white/10 px-2 py-1 bg-white/[0.05] text-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          {p.demo && (
            <a href={p.demo} target="_blank" className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium border border-white/10 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-lg active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition">Demo</a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium border border-white/10 bg-transparent hover:bg-white/5 hover:shadow-lg active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition">Code</a>
          )}
        </div>

        {/* Coming soon: GIF/video, architecture diagrams, technical metrics */}
      </div>
    </main>
  );
}
