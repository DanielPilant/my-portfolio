import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 min-h-[80vh] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight text-primary-400 drop-shadow-lg">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </main>
  );
}
