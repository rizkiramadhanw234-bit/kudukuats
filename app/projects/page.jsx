import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects | Kudukuats",
  description:
    "Curious about what I’ve been working on? Take a look. Wondering what I’ve built so far? Let’s dive in.",

  keywords: [
    "Web Developer",
    "Software Engineering",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Graphic Designer",
    "Creative Designer",
    "Digital Marketing",
    "Web Designer",
    "Muhammad Rizki Ramadhan",
    "Kudukuats",
  ],
  authors: [
    { name: "Muhammad Rizki Ramadhan", url: "https://kudukuats.my.id" },
  ],
  creator: "Kudukuats | Muhammad Rizki Ramadhan",
  alternates: {
    canonical: "/projects",
  },
  metadataBase: new URL("https://kudukuats.my.id"),
  openGraph: {
    type: "website",
    url: "https://kudukuats.my.id",
    title: "Kudukuats",
    description: "Web Portfolio, Full Stack Developer.",
    images: "/kp.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Rizki Ramadhan",
    description: "Full Stack Web Developer",
    images: "/kp.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
