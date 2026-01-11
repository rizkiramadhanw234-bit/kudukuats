import React from "react";
import "../app/globals.css";
import Home from "./home/page";

export const metadata = {
  title: "Kudukuats - Muhammad Rizki Ramadhan",
  description:
    "Muhammad Rizki Ramadhan | Kudukuats — Full-Stack Developer, Creative Designer.",
  icons: {
    icon: "/kp.png",
  },
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
  creator: `"Rizki Ramadhan", "Kudukuats"`,
  metadataBase: new URL("https://kudukuats.my.id"),
  alternates: {
    canonical: "/",
  },
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

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
