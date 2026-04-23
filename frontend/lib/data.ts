import { createPublicClient } from "./supabase/server";
import type { NewsArticle, Pengumuman, Achievement, NewsCategory, AchievementLevel } from "./types";

// ── Row types (snake_case from PostgreSQL) ────────────────────────────────────

type NewsRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  date: string;
  date_label: string;
  image: string;
  author: string | null;
  featured: boolean;
};

type PengumumanRow = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string[];
  date: string;
  date_label: string;
  urgency: string;
};

type AchievementRow = {
  id: string;
  rank: string;
  title: string;
  category: string;
  level: string;
  year: string;
  student: string | null;
  image: string | null;
};

// ── Mappers ───────────────────────────────────────────────────────────────────

function toNews(row: NewsRow): NewsArticle {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body ?? [],
    category: row.category as NewsCategory,
    date: row.date,
    dateLabel: row.date_label,
    image: row.image,
    author: row.author ?? undefined,
    featured: row.featured,
  };
}

function toPengumuman(row: PengumumanRow): Pengumuman {
  return {
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    body: row.body ?? [],
    date: row.date,
    dateLabel: row.date_label,
    urgency: row.urgency as Pengumuman["urgency"],
  };
}

function toAchievement(row: AchievementRow): Achievement {
  return {
    rank: row.rank as Achievement["rank"],
    title: row.title,
    category: row.category,
    level: row.level as AchievementLevel,
    year: row.year,
    student: row.student ?? undefined,
    image: row.image ?? undefined,
  };
}

// ── Public data functions ─────────────────────────────────────────────────────

export async function getNews(): Promise<NewsArticle[]> {
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("news_articles")
    .select("*")
    .order("date", { ascending: false });
  return (data as NewsRow[] ?? []).map(toNews);
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | undefined> {
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("news_articles")
    .select("*")
    .eq("slug", slug)
    .single();
  return data ? toNews(data as NewsRow) : undefined;
}

export async function getPengumuman(): Promise<Pengumuman[]> {
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("pengumuman")
    .select("*")
    .order("date", { ascending: false });
  return (data as PengumumanRow[] ?? []).map(toPengumuman);
}

export async function getPengumumanBySlug(slug: string): Promise<Pengumuman | undefined> {
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("pengumuman")
    .select("*")
    .eq("slug", slug)
    .single();
  return data ? toPengumuman(data as PengumumanRow) : undefined;
}

export async function getAchievements(): Promise<Achievement[]> {
  const supabase = createPublicClient();
  const { data } = await supabase
    .from("achievements")
    .select("*")
    .order("year", { ascending: false });
  return (data as AchievementRow[] ?? []).map(toAchievement);
}
