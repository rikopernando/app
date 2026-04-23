import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowUpRight, Newspaper } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getNews } from "@/lib/data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Berita & Kegiatan",
  description:
    "Ikuti berita, kegiatan, dan kabar terbaru dari SMP Negeri 1 Sumber Jaya — mulai dari PPDB, kegiatan siswa, workshop orang tua, hingga prestasi sekolah.",
  openGraph: {
    title: "Berita & Kegiatan · SMPN 1 Sumber Jaya",
    description: "Kabar terbaru, kegiatan siswa, dan cerita hangat dari sekolah kami.",
    type: "website",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Pengumuman: "bg-navy-50 text-navy-700",
  Kegiatan: "bg-mint-50 text-mint-600",
  Akademik: "bg-sky-50 text-sky-600",
  "Info Sekolah": "bg-gold-50 text-gold-600",
};

export default async function BeritaPage() {
  const news = await getNews();

  return (
    <>
      <Navbar />
      <main data-testid="berita-page" className="min-h-screen bg-cream-50 pt-32 pb-20 lg:pt-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-600 text-[11px] tracking-[0.18em] uppercase font-bold">
              <Newspaper size={12} /> Berita & Kegiatan
            </span>
            <h1
              data-testid="berita-heading"
              className="font-display mt-6 text-5xl sm:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink text-balance"
            >
              Cerita hangat{" "}
              <em className="not-italic font-semibold text-sky-600">dari sekolah kami.</em>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-2xl">
              Ikuti kegiatan, pengumuman, dan kabar terbaru seputar SMPN 1 Sumber Jaya — agar orang tua dan siswa selalu update.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {news.map((n) => (
              <Link
                key={n.slug}
                href={`/berita/${n.slug}`}
                data-testid={`berita-card-${n.slug}`}
                className="group rounded-3xl overflow-hidden bg-white border border-cream-200 hover:border-cream-300 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.06] transition-transform duration-[1200ms] ease-out"
                  />
                  <span className={`absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full ${CATEGORY_COLORS[n.category]} text-[10px] tracking-[0.14em] uppercase font-bold`}>
                    {n.category}
                  </span>
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-2 text-[12px] text-ink-faint font-semibold">
                    <Calendar size={13} /> {n.dateLabel}
                    {n.author && (
                      <>
                        <span className="text-cream-300">·</span>
                        <span>{n.author}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-display mt-3 text-xl lg:text-2xl leading-[1.2] text-ink text-balance group-hover:text-navy transition-colors duration-300">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft line-clamp-3">
                    {n.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-navy font-bold text-[12.5px] group/cta">
                    Baca selengkapnya
                    <ArrowUpRight size={14} className="transition-transform duration-400 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
