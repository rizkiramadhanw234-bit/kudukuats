import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kudukuats",
  description:
    "Portfolio Rizki Ramadhan — Full-Stack Developer, Creative Designer.",
  icons: {
    icon: "/kp.png",
  },
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
  creator: `"Rizki Ramadhan", "Kudukuats"`,
  metadataBase: new URL("https://kudukuats.my.id"),
  openGraph: {
    type: "website",
    url: "https://kudukuats.my.id",
    title: "Kudukuats",
    description: "Web Portfolio, Full Stack Developer.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Rizki Ramadhan",
    description: "Full Stack Web Developer",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
