export type NewsCategory = "Pengumuman" | "Kegiatan" | "Akademik" | "Info Sekolah";

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: NewsCategory;
  date: string; // ISO YYYY-MM-DD
  dateLabel: string; // e.g. "12 April 2026"
  image: string;
  author?: string;
  featured?: boolean;
}

export interface Pengumuman {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  date: string;
  dateLabel: string;
  urgency: "Penting" | "Umum" | "Segera";
}

export type AchievementLevel = "Kecamatan" | "Kabupaten" | "Provinsi" | "Nasional";

export interface Achievement {
  rank: "Juara 1" | "Juara 2" | "Juara 3" | "Harapan 1" | "Harapan 2";
  title: string;
  category: string;
  level: AchievementLevel;
  year: string;
  student?: string;
  image?: string;
}
