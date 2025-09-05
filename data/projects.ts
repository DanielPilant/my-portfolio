export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tech: string[];
  impact?: string;
  repo?: string;
  demo?: string;
  image?: string;     // /projects/<slug>.jpg|png|webp
  featured?: boolean; // Shown on homepage
};

export const projects: Project[] = [
  {
    slug: "self-luz",
    title: "Self_Luz (Flutter)",
    tagline: "Currently under development — core features working",
    tech: ["Flutter", "Dart", "sqflite", "Clean Architecture"],
    impact: "Improved personal planning for 100+ early users",
    repo: "https://github.com/DanielPilant/self_luz",
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
    repo: "https://github.com/diy-code/ISE5785_2126_1426",
    image: "/projects/ray-tracer.png",
    featured: true,
  },
  {
    slug: "mission-force-csharp",
    title: "Mission Force: C#",
    tagline: "Volunteer management & dispatch for wartime operations",
    tech: ["C#", ".NET", "WPF", "MVVM"],
    impact: "Cuts response times with skill- and proximity-based auto-dispatch, live ops dashboard, and structured field reporting.",
    repo: "https://github.com/DanielPilant/dotNet5785_1426_2126",
    image: "/projects/Mission.png",
    featured: true,
  },
  // {
  //   slug: "ResqDoc",
  //   title: "ResqDoc",
  //   tagline: "Hands-free AI documentation from ambient audio — Hackathon 3rd Place",
  //   tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   impact: "Captures on-scene audio, structures it into JSON, and auto-fills incident documentation—reducing cognitive load and speeding accurate handoffs.",
  //   repo: "https://github.com/Meir-Crombie/ResQDoc",
  //   image: "/projects/ResqDoc.png",
  //   featured: true,
  // },
  // ...others
];
