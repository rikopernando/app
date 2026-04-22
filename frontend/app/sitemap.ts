import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { NEWS, PENGUMUMAN } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/berita`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/pengumuman`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/prestasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const newsRoutes: MetadataRoute.Sitemap = NEWS.map((n) => ({
    url: `${base}/berita/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const pengumumanRoutes: MetadataRoute.Sitemap = PENGUMUMAN.map((p) => ({
    url: `${base}/pengumuman/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...newsRoutes, ...pengumumanRoutes];
}
