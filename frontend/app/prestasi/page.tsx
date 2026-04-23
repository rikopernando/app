import type { Metadata } from "next";
import Image from "next/image";
import { Trophy, Medal, Award, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getAchievements } from "@/lib/data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Galeri Prestasi",
  description:
    "Kumpulan penghargaan, piala, dan prestasi siswa-siswi SMP Negeri 1 Sumber Jaya — akademik, olahraga, seni, dan karakter dari tingkat kecamatan hingga provinsi.",
  openGraph: {
    title: "Galeri Prestasi · SMPN 1 Sumber Jaya",
    description: "47 penghargaan dalam 5 tahun terakhir — karya siswa-siswi kami.",
    type: "website",
  },
};

const RANK_ICON: Record<string, LucideIcon> = {
  "Juara 1": Trophy,
  "Juara 2": Medal,
  "Juara 3": Medal,
  "Harapan 1": Award,
  "Harapan 2": Award,
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; chip: string }> = {
  "Seni Budaya": { bg: "bg-coral-50", text: "text-coral-700", chip: "bg-coral text-white" },
  Akademik: { bg: "bg-sky-50", text: "text-sky-600", chip: "bg-sky text-white" },
  Olahraga: { bg: "bg-honey-50", text: "text-honey-600", chip: "bg-honey text-ink" },
  Karakter: { bg: "bg-mint-50", text: "text-mint-600", chip: "bg-mint text-white" },
  Bahasa: { bg: "bg-sky-50", text: "text-sky-600", chip: "bg-sky text-white" },
  Lingkungan: { bg: "bg-mint-50", text: "text-mint-600", chip: "bg-mint text-white" },
};

export default async function PrestasiPage() {
  const achievements = await getAchievements();

  return (
    <>
      <Navbar />
      <main data-testid="prestasi-page" className="min-h-screen bg-cream-50 pt-32 pb-20 lg:pt-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-50 text-honey-600 text-[11px] tracking-[0.18em] uppercase font-bold">
              <Trophy size={12} /> Galeri Prestasi
            </span>
            <h1
              data-testid="prestasi-heading"
              className="font-display mt-6 text-5xl sm:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink text-balance"
            >
              Karya & prestasi{" "}
              <em className="not-italic font-semibold text-honey-600">anak-anak kami.</em>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-2xl">
              Setiap piala, medali, dan penghargaan adalah cerita kerja keras siswa. Berikut koleksi prestasi kami dari tingkat kecamatan sampai provinsi — akademik, olahraga, seni, dan karakter.
            </p>
          </div>

          {/* Tally */}
          <div
            data-testid="prestasi-tally"
            className="mb-12 p-7 lg:p-8 rounded-[28px] bg-white border border-cream-200 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-honey-50 text-honey-600 flex items-center justify-center">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-[10.5px] tracking-[0.16em] uppercase text-ink-faint font-bold">
                  Total 5 Tahun Terakhir
                </p>
                <p className="font-display text-2xl text-ink mt-1">47 penghargaan & piala</p>
              </div>
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              {[
                { n: "18", l: "Akademik", color: "text-sky-600" },
                { n: "14", l: "Olahraga", color: "text-honey-600" },
                { n: "10", l: "Seni", color: "text-coral" },
                { n: "5", l: "Karakter", color: "text-mint-600" },
              ].map((t) => (
                <div key={t.l} className="text-center px-3">
                  <p className={`font-display text-2xl font-bold ${t.color}`}>{t.n}</p>
                  <p className="text-[11px] tracking-wide uppercase text-ink-faint font-semibold">
                    {t.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
            data-testid="prestasi-grid"
          >
            {achievements.map((a, i) => {
              const c = CATEGORY_COLORS[a.category] ?? CATEGORY_COLORS.Akademik;
              const IconRank = RANK_ICON[a.rank] || Award;

              if (a.image) {
                return (
                  <article
                    key={i}
                    data-testid={`prestasi-card-${i + 1}`}
                    className="group relative rounded-[28px] overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[320px]"
                  >
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent" />
                    <div className="relative z-10 h-full p-7 flex flex-col justify-between min-h-[320px]">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-honey text-ink text-[10.5px] tracking-[0.16em] uppercase font-bold">
                          <Trophy size={11} /> {a.rank}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] tracking-[0.14em] uppercase font-bold text-white/90">
                          {a.level} · {a.year}
                        </span>
                      </div>
                      <div>
                        <p className="text-[11.5px] tracking-[0.18em] uppercase text-honey-300 font-bold">
                          {a.category}
                        </p>
                        <h3 className="font-display mt-3 text-2xl lg:text-3xl leading-[1.1] text-white text-balance">
                          {a.title}
                        </h3>
                        {a.student && (
                          <p className="mt-3 text-[13px] text-white/80 font-semibold">
                            {a.student}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={i}
                  data-testid={`prestasi-card-${i + 1}`}
                  className="group relative rounded-[28px] p-7 bg-white border border-cream-200 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-500"
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${c.bg} ${c.text} flex items-center justify-center`}>
                      <IconRank size={20} />
                    </div>
                    <span className="text-[10px] tracking-[0.16em] uppercase font-bold text-ink-faint">
                      {a.level} · {a.year}
                    </span>
                  </div>
                  <p className="mt-8 font-display text-lg text-coral font-bold">{a.rank}</p>
                  <h3 className="mt-2 font-display text-xl lg:text-2xl leading-[1.15] text-ink text-balance">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[12px] tracking-[0.14em] uppercase font-bold text-ink-faint">
                    {a.category}
                  </p>
                  {a.student && (
                    <p className="mt-3 text-[13px] text-ink-soft font-semibold">{a.student}</p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
