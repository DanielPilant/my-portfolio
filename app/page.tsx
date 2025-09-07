// app/page.tsx
// CHANGELOG:
// - Refreshed hero with gradient text and polished CTAs.
// - Updated colors and focus states across sections.
import Typewriter from "@/components/Typewriter";
import Image from "next/image";
import Link from "next/link";

import BottomNav from "@/components/BottomNav";
import { aboutMe } from "@/data/about";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience"; // ← Important!

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const expPreview = experiences.slice(0, 2); // Shows 2 experiences and provides a link to /experience
const lines = [
    "// Building products people love",
    "const vision = 'DEVLEV > status quo';",
    "echo 'Learn • Build • Lead'",
    "SELECT impact FROM projects WHERE status = 'shipped';",
    "curl -s https://daniel.dev | bash # kidding ;)",
  ];
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
      <section
        id="home"
        className="min-h-[80vh] flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary-400 via-info-500 to-accent-500 bg-clip-text text-transparent">
          Daniel Pilant
        </h1>

        {/* hero animation */}
        <div className="mt-4">
          <Typewriter lines={lines} />
        </div>

        <p className="mt-6 text-lg text-muted-500 max-w-2xl">
          Software Engineer • Product Builder • Community Manager • Teacher & Tutor
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-white/10 bg-primary-500/10 hover:bg-primary-500/20 hover:shadow-lg active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-white/10 bg-transparent hover:bg-white/5 hover:shadow-lg active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 transition"
          >
            Contact
          </Link>
        </div>
      </section>
      
      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-muted-500 max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
          {aboutMe}
        </p>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-24 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <p className="text-muted-500 mb-8">Code, demos and measurable impact.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/projects"
            className="text-sm text-primary-400 underline hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          >
            See all →
          </Link>
        </div>
      </section>

      {/* EXPERIENCE (preview) */}
      <section id="experiences" className="py-24 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center">Community Partnership and Volunteering</h2>
        <p className="text-muted-500 text-center max-w-2xl mx-auto">
          Leadership, teaching, and community building.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {expPreview.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}`}
              aria-label={`Open ${exp.title}`}
              className="group block overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-0.5 transition shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] focus:outline-none focus-visible:ring-2 focus-visible:ring-info-500"
            >
              {/* Image */}
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

              {/* Card body */}
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
                  View details <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/experiences"
            className="text-sm text-primary-400 underline hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          >
            View all experience →
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {["Java", "TypeScript", "Flutter/Dart", "SQL", "Security Basics"].map((s) => (
            <li
              key={s}
              className="text-sm border border-white/10 rounded-full px-4 py-2 bg-white/[0.05]"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* RESUME */}
      <section id="resume" className="py-24 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <a
          className="underline text-primary-400 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
          href="/resume.pdf"
          download
        >
          Download PDF
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-muted-500 mb-4">
          Email:{" "}
          <a href="mailto:doubledan148@gmail.com" className="underline">
            doubledan148@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/danielpilant?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="text-primary-400 hover:text-primary-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/DanielPilant"
            target="_blank"
            className="text-primary-400 hover:text-primary-500"
          >
            GitHub
          </a>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
