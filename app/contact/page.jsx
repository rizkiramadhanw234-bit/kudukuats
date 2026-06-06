import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact | Kudukuats",
  description:
    "Let’s collaborate and turn your concept into a polished digital product. A simple message can be the start of something great",

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
    { name: "Muhammad Rizki Ramadhan", url: "https://kudukuats.web.id" },
  ],
  creator: "Kudukuats | Muhammad Rizki Ramadhan",
  alternates: {
    canonical: "/contact",
  },
  metadataBase: new URL("https://kudukuats.web.id"),
  openGraph: {
    type: "website",
    url: "https://kudukuats.web.id",
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

export default function Contact() {
  return <ContactClient />;
}
