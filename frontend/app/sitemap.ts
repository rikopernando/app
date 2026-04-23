import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getNews, getPengumuman } from "@/lib/data";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const [news, pengumuman] = await Promise.all([
    getNews().catch(() => []),
    getPengumuman().catch(() => []),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/berita`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/pengumuman`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/prestasi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const newsRoutes: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${base}/berita/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const pengumumanRoutes: MetadataRoute.Sitemap = pengumuman.map((p) => ({
    url: `${base}/pengumuman/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...newsRoutes, ...pengumumanRoutes];
}
