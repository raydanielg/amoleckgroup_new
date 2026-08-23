import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amoleck.co.tz"
  const lastModified = new Date()

  const staticPages = [
    "",
    "/about",
    "/about/team",
    "/services",
    "/services/medical",
    "/services/physiotherapy",
    "/services/technology",
    "/services/equipment",
    "/equipment",
    "/physiotherapy",
    "/technology",
    "/contact",
    "/request-quote",
    "/blog",
    "/privacy-policy",
    "/terms",
  ]

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/about" || path === "/services" ? 0.9 : 0.7,
  }))
}
