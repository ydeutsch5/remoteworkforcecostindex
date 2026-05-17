import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://remoteworkforcecostindex.com";
  const lastModified = new Date("2026-05-17");

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/methodology", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/salaries/india", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/salaries/philippines", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/total-cost/india", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/total-cost/philippines", priority: 1.0, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
