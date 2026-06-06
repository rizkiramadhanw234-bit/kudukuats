import { MetadataRoute } from 'next';

/** @type {() => MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://www.kudukuats.web.id/sitemap.xml",
  };
}
