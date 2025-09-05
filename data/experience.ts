// /data/experience.ts
export type Exp = {
  slug: string;
  title: string;
  meta: string;
  image: string;   
  bullets: string[]; 
  cover: string;     
  long: string;    
  highlights: string[];
  gallery: string[];
};

export const experiences: Exp[] = [
  {
    slug: "devlev",
    title: "Co-Founder & Community Manager - DEVLEV",
    meta: "Machon Lev • 2024–Present",
    image: "/experience/devlev.jpg",
    bullets: [
      "Built and led a student tech community (events, workshops, hackathons).",
      "Partnerships & sponsorships; content & speaker curation.",
      "Grew engagement and membership through hands-on projects.",
    ],
    cover: "/experience/DEVLEV.jpg",
    long:
      "DEVLEV is a student-led tech community focused on practical workshops, meetups, and hackathons...",
    highlights: [
      "12+ events, 200+ members (update to real numbers)",
      "Sponsorships & partnerships with campus orgs",
      "Hands-on sessions on modern dev tools & careers",
    ],
    gallery: [
      "/experience/DEVLEVMEETUP1.jpg",
      "/experience/DEVLEVMATAN.jpg",
      "/experience/DEVELVCYBER.jpg",
    ],
  },
  {
    slug: "teaching",
    title: "STEM Teacher - High Schools",
    meta: "2 schools • 2 years",
    image: "/experience/teacher.jpg",
    bullets: [
      "Project-based learning in programming & engineering fundamentals.",
      "Mentored students, built curricula, and led team projects.",
      "Introduced modern tooling and best practices.",
    ],
    cover: "/experience/teacher.jpg",
    long:
      "Taught programming and engineering foundations through project-based learning...",
    highlights: [
      "Project-based pedagogy across two schools",
      "Mentorship and team leadership",
      "Curriculum design and tooling adoption",
    ],
    gallery: [
      "/experience/SCHOOLPROJECT1.jpg",
      "/experience/SCHOOLPROJECT2.jpg",
      "/experience/SCHOOLCER.jpg",
    ],
  },
];

export const experienceMap = Object.fromEntries(
  experiences.map((e) => [e.slug, e] as const)
);
