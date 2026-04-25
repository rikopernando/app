import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { deleteNews } from "@/app/admin/actions";
import { DeleteButton } from "@/app/admin/DeleteButton";

export const dynamic = "force-dynamic";

const CATEGORY_COLORS: Record<string, string> = {
  Pengumuman:     "bg-navy-50 text-navy-700",
  Kegiatan:       "bg-mint-50 text-mint-600",
  Akademik:       "bg-sky-50 text-sky-600",
  "Info Sekolah": "bg-gold-50 text-gold-600",
};

export default async function AdminBeritaPage() {
  const supabase = await createClient();
  const { data: news } = await supabase
    .from("news_articles")
    .select("id, slug, title, date_label, category, featured")
    .order("date", { ascending: false });

  return (
    <div className="max-w-4xl">
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-cream-200">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-1">Konten</p>
          <h1 className="font-display text-3xl text-ink">Berita</h1>
          <p className="text-[13px] text-ink-soft mt-1">{news?.length ?? 0} artikel</p>
        </div>
        <Link
          href="/admin/berita/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white text-[13px] font-semibold hover:bg-navy-600 transition-colors shadow-glow"
        >
          <Plus size={15} /> Tambah Berita
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-soft divide-y divide-cream-100">
        {(!news || news.length === 0) && (
          <div className="py-16 text-center text-ink-faint text-[14px]">
            Belum ada berita. Klik &ldquo;Tambah Berita&rdquo; untuk mulai.
          </div>
        )}
        {news?.map((n) => (
          <div
            key={n.id}
            className="group flex items-center gap-4 px-6 py-4 hover:bg-cream-50 transition-colors duration-150"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide ${CATEGORY_COLORS[n.category] ?? "bg-cream-100 text-ink-soft"}`}>
                  {n.category}
                </span>
                {n.featured && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold-50 text-gold-600 text-[10px] font-bold">
                    ★ Featured
                  </span>
                )}
              </div>
              <p className="font-semibold text-[14px] text-ink truncate">{n.title}</p>
              <p className="text-[11.5px] text-ink-faint mt-0.5">{n.date_label}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              <Link
                href={`/admin/berita/${n.id}`}
                className="p-2 rounded-lg text-ink-soft hover:text-navy hover:bg-navy-50 transition-colors"
                title="Edit"
              >
                <Pencil size={15} />
              </Link>
              <DeleteButton action={deleteNews.bind(null, n.id)} confirmMessage="Hapus berita ini?" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
