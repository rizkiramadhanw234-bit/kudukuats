import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import AOSProvider from "./providers/AOSProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    { name: "Muhammad Rizki Ramadhan", url: "https://www.kudukuats.web.id" },
  ],
  creator: `"Rizki Ramadhan", "Kudukuats"`,
  metadataBase: new URL("https://www.kudukuats.web.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.kudukuats.web.id",
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Rizki Ramadhan",
              alternateName: "Kudukuats",
              jobTitle: "Full-Stack Web Developer",
              description:
                "Full-Stack Web Developer with 3+ years of experience building web applications using React.js, Next.js, Express.js, TypeScript, MySQL, Docker, and Linux servers.",
              knowsAbout: [
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MySQL",
                "Docker",
                "Nginx",
                "PM2",
                "Tailwind CSS",
                "Graphic Design",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Your University",
              },
              sameAs: [
                "https://github.com/rizkiramadhanw234-bit",
                "https://linkedin.com/in/your-linkedin",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Muhammad Rizki Ramadhan Portfolio Projects",
              itemListElement: [
                {
                  "@type": "SoftwareSourceCode",
                  position: 1,
                  name: "Manage Print Service Admin Dashboard",
                  description:
                    "Web-based admin dashboard for monitoring printers, users, reports, and real-time print activities.",
                  url: "https://mpsnewton.com",
                  programmingLanguage: [
                    "JavaScript",
                    "React.js",
                    "Express.js",
                    "MySQL",
                  ],
                  author: {
                    "@type": "Person",
                    name: "Muhammad Rizki Ramadhan",
                  },
                },
                {
                  "@type": "SoftwareSourceCode",
                  position: 2,
                  name: "Manage Print Service Client Dashboard",
                  description:
                    "Client portal for managing print services, devices, reports, and monitoring usage.",
                  url: "https://client.mpsnewton.com",
                  programmingLanguage: [
                    "JavaScript",
                    "React.js",
                    "Express.js",
                    "MySQL",
                  ],
                  author: {
                    "@type": "Person",
                    name: "Muhammad Rizki Ramadhan",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  position: 3,
                  name: "MPS Newton Agent Desktop App",
                  description:
                    "Desktop application built with Electron for printer communication and real-time synchronization with MPS Newton platform.",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Windows",
                  downloadUrl:
                    "https://github.com/rizkiramadhanw234-bit/frontend-printer-dashboard/releases/download/v1/MPS.Newton.Agent.Setup.zip",
                  author: {
                    "@type": "Person",
                    name: "Muhammad Rizki Ramadhan",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <AOSProvider>{children}</AOSProvider>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
