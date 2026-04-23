import Link from "next/link";
import { Newspaper, Megaphone, Trophy, ArrowUpRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

async function getCounts() {
  const supabase = await createClient();
  const [{ count: news }, { count: pengumuman }, { count: prestasi }] = await Promise.all([
    supabase.from("news_articles").select("*", { count: "exact", head: true }),
    supabase.from("pengumuman").select("*", { count: "exact", head: true }),
    supabase.from("achievements").select("*", { count: "exact", head: true }),
  ]);
  return { news: news ?? 0, pengumuman: pengumuman ?? 0, prestasi: prestasi ?? 0 };
}

export default async function AdminDashboardPage() {
  const counts = await getCounts();

  const stats = [
    { label: "Berita", count: counts.news, href: "/admin/berita", icon: Newspaper, color: "bg-sky-50 text-sky-600" },
    { label: "Pengumuman", count: counts.pengumuman, href: "/admin/pengumuman", icon: Megaphone, color: "bg-coral-50 text-coral-700" },
    { label: "Prestasi", count: counts.prestasi, href: "/admin/prestasi", icon: Trophy, color: "bg-honey-50 text-honey-600" },
  ];

  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="font-display text-3xl text-ink">Dashboard</h1>
        <p className="mt-2 text-[14px] text-ink-soft">Kelola konten website sekolah dari sini.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map(({ label, count, href, icon: Icon, color }) => (
          <Link
            key={label}
            href={href}
            className="group p-6 rounded-2xl bg-white border border-cream-200 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4`}>
              <Icon size={18} />
            </div>
            <p className="font-display text-3xl text-ink">{count}</p>
            <div className="flex items-center gap-1 mt-1">
              <p className="text-[13px] text-ink-soft font-semibold">{label}</p>
              <ArrowUpRight size={13} className="text-ink-faint group-hover:text-coral transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
