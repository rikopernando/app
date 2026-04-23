import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Megaphone, AlertTriangle, Clock } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getPengumuman } from "@/lib/data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Pengumuman Sekolah",
  description:
    "Semua pengumuman resmi dari SMP Negeri 1 Sumber Jaya — jadwal ujian, libur sekolah, rapat komite, dan informasi penting lainnya.",
  openGraph: {
    title: "Pengumuman Sekolah · SMPN 1 Sumber Jaya",
    description: "Pengumuman resmi untuk siswa, orang tua, dan wali.",
    type: "website",
  },
};

const URGENCY: Record<string, { bg: string; text: string; icon: typeof AlertTriangle }> = {
  Penting: { bg: "bg-coral-50", text: "text-coral-700", icon: AlertTriangle },
  Segera: { bg: "bg-honey-50", text: "text-honey-600", icon: Clock },
  Umum: { bg: "bg-sky-50", text: "text-sky-600", icon: Megaphone },
};

export default async function PengumumanPage() {
  const pengumuman = await getPengumuman();

  return (
    <>
      <Navbar />
      <main data-testid="pengumuman-page" className="min-h-screen bg-cream-50 pt-32 pb-20 lg:pt-40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 text-coral-700 text-[11px] tracking-[0.18em] uppercase font-bold">
              <Megaphone size={12} /> Pengumuman Resmi
            </span>
            <h1
              data-testid="pengumuman-heading"
              className="font-display mt-6 text-5xl sm:text-6xl lg:text-[72px] leading-[1.02] tracking-tight text-ink text-balance"
            >
              Pengumuman{" "}
              <em className="not-italic font-semibold text-coral">sekolah.</em>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-2xl">
              Informasi resmi dari SMPN 1 Sumber Jaya untuk siswa, orang tua, dan wali — mulai dari jadwal ujian, rapat komite, hingga pengumuman libur sekolah.
            </p>
          </div>

          <div className="space-y-5">
            {pengumuman.map((p) => {
              const u = URGENCY[p.urgency];
              const UIcon = u.icon;
              return (
                <Link
                  key={p.slug}
                  href={`/pengumuman/${p.slug}`}
                  data-testid={`pengumuman-card-${p.slug}`}
                  className="group flex items-start gap-5 p-7 lg:p-8 rounded-3xl bg-white border border-cream-200 hover:border-cream-300 hover:-translate-y-0.5 hover:shadow-soft-lg transition-all duration-400"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${u.bg} flex items-center justify-center`}>
                    <UIcon size={22} className={u.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`inline-flex px-2.5 py-1 rounded-full ${u.bg} ${u.text} text-[10px] tracking-[0.14em] uppercase font-bold`}>
                        {p.urgency}
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-ink-faint font-semibold">
                        <Calendar size={12} /> {p.dateLabel}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-xl lg:text-2xl leading-[1.2] text-ink text-balance group-hover:text-coral transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{p.summary}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="flex-shrink-0 mt-1 text-ink-faint group-hover:text-coral group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-400"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
