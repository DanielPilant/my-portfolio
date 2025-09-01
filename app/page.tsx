import BottomNav from "@/components/BottomNav";
import { aboutMe } from "@/data/about";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
      <section
        id="home"
        className="min-h-[80vh] flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Daniel Pilant
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl">
          Software Engineer • Product Builder • Community Manager
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-400 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 border-t border-neutral-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-neutral-300 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {aboutMe}
        </p>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="projects"
        className="py-24 border-t border-neutral-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <p className="text-neutral-400 mb-8">
          Code, demos and measurable impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/projects"
            className="text-sm text-sky-400 underline hover:text-sky-300"
          >
            See all →
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-24 border-t border-neutral-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">My Proficiency</h2>
        <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {["Java", "TypeScript", "Flutter/Dart", "SQL", "Security Basics"].map(
            (s) => (
              <li
                key={s}
                className="text-sm border border-neutral-700 rounded-full px-4 py-2 bg-neutral-900"
              >
                {s}
              </li>
            )
          )}
        </ul>
      </section>

      {/* RESUME */}
      <section
        id="resume"
        className="py-24 border-t border-neutral-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Resume</h2>

        {/* לינק להורדה */}
        <a
          className="underline text-sky-400 hover:text-sky-300"
          href="/resume.pdf"
          download
        >
          Download PDF
        </a>

  
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 border-t border-neutral-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-neutral-300 mb-4">
          Email: <a href="mailto:you@domain.com" className="underline">you@domain.com</a>
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-sky-400 hover:text-sky-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            className="text-sky-400 hover:text-sky-300"
          >
            GitHub
          </a>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
