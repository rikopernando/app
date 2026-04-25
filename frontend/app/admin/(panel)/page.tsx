import Link from "next/link";
import { Newspaper, Megaphone, Trophy, ArrowRight, Globe } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

async function getCounts() {
  const supabase = await createClient();
  const [{ count: news }, { count: pengumuman }, { count: prestasi }] =
    await Promise.all([
      supabase.from("news_articles").select("*", { count: "exact", head: true }),
      supabase.from("pengumuman").select("*", { count: "exact", head: true }),
      supabase.from("achievements").select("*", { count: "exact", head: true }),
    ]);
  return { news: news ?? 0, pengumuman: pengumuman ?? 0, prestasi: prestasi ?? 0 };
}

export default async function AdminDashboardPage() {
  const counts = await getCounts();

  const stats = [
    {
      label: "Berita",
      count: counts.news,
      href: "/admin/berita",
      icon: Newspaper,
      accent: "bg-sky",
      iconColor: "bg-sky-50 text-sky-600",
      desc: "Artikel dipublikasikan",
    },
    {
      label: "Pengumuman",
      count: counts.pengumuman,
      href: "/admin/pengumuman",
      icon: Megaphone,
      accent: "bg-navy",
      iconColor: "bg-navy-50 text-navy-700",
      desc: "Pengumuman aktif",
    },
    {
      label: "Prestasi",
      count: counts.prestasi,
      href: "/admin/prestasi",
      icon: Trophy,
      accent: "bg-gold",
      iconColor: "bg-gold-50 text-gold-600",
      desc: "Penghargaan tercatat",
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-6 pb-6 sm:mb-10 sm:pb-8 border-b border-cream-200">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
          SMP Negeri 1 Sumber Jaya
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-ink">Dashboard</h1>
        <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-ink-soft">
          Kelola berita, pengumuman, dan prestasi yang tampil di website publik sekolah.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-6 sm:mb-8">
        {stats.map(({ label, count, href, icon: Icon, accent, iconColor, desc }) => (
          <Link
            key={label}
            href={href}
            className="group relative overflow-hidden rounded-2xl bg-white border border-cream-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className={`h-1 w-full ${accent}`} />
            <div className="p-4 sm:p-6">
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${iconColor} flex items-center justify-center mb-4 sm:mb-5`}>
                <Icon size={17} />
              </div>
              <p className="font-display text-[34px] sm:text-[42px] leading-none text-ink tabular-nums">{count}</p>
              <p className="mt-1.5 text-[13px] sm:text-[13.5px] font-bold text-ink">{label}</p>
              <p className="text-[11.5px] sm:text-[12px] text-ink-faint mt-0.5">{desc}</p>
              <div className="mt-4 sm:mt-5 flex items-center gap-1.5 text-[12px] font-bold text-ink-faint group-hover:text-navy transition-colors duration-200">
                Kelola konten
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-4">
        <div className="w-9 h-9 rounded-xl bg-navy-100 text-navy-700 flex items-center justify-center shrink-0 mt-0.5">
          <Globe size={16} />
        </div>
        <div>
          <p className="text-[13.5px] font-semibold text-navy-700">Perubahan langsung terlihat di publik</p>
          <p className="text-[12.5px] text-navy-700/70 mt-0.5 leading-relaxed">
            Setiap konten yang disimpan akan muncul di website dalam waktu ~1 menit secara otomatis.
          </p>
        </div>
      </div>
    </div>
  );
}
