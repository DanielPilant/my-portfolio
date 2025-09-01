export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tech: string[];
  impact?: string;
  repo?: string;
  demo?: string;
  image?: string;     // /projects/<slug>.jpg|png|webp
  featured?: boolean; // יוצג בדף הבית
};

export const projects: Project[] = [
  {
    slug: "self-luz",
    title: "Self_Luz (Flutter)",
    tagline: "Currently under development — core features working",
    tech: ["Flutter", "Dart", "sqflite", "Clean Architecture"],
    impact: "Improved personal planning for 100+ early users",
    repo: "https://github.com/your/repo",
    demo: "https://your-demo-link",
    image: "/projects/self-luz.jpg",
    featured: true,
  },
  {
    slug: "ray-tracer-java",
    title: "Ray Tracer (Java)",
    tagline: "Ray tracing engine with BVH and soft shadows",
    tech: ["Java", "OOP", "BVH"],
    impact: "3x faster rendering compared to baseline",
    repo: "https://github.com/your/repo",
    image: "/projects/ray-tracer.png",
    featured: true,
  },
  // ...others
];
