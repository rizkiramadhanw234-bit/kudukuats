import ExperienceClient from "./ExperienceClient";

export const metadata = {
  title: "Kudukuats | Experience",
  description:
    "I bring a strong Computer Science foundation combined with over 5 years of experience in graphic design and video editing allowing me to deliver complete end-to-end solutions. From UI/UX planning and workflow structuring to full-stack development, deployment, and content creation, I handle the entire process with precision. I've worked independently, collaboratively in teams, and remotely with international clients.",

  keywords: [
    "Web Developer",
    "Software Engineering",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Graphic Designer",
    "Creative Designer",
    "Digital Marketing",
    "Web Designer",
    "Rizki Ramadhan",
    "Kudukuas",
  ],
  authors: [
    { name: "Muhammad Rizki Ramadhan", url: "https://kudukuats.my.id" },
  ],
  creator: "Kudukuats | Muhammad Rizki Ramadhan",
  alternates: {
    canonical: "/experience",
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
    images: "kp.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Experience() {
  return <ExperienceClient />;
}
