import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { deleteNews } from "../actions";
import { DeleteButton } from "../DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminBeritaPage() {
  const supabase = await createClient();
  const { data: news } = await supabase
    .from("news_articles")
    .select("id, slug, title, date_label, category, featured")
    .order("date", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl text-ink">Berita</h1>
          <p className="text-[13px] text-ink-soft mt-1">{news?.length ?? 0} artikel</p>
        </div>
        <Link
          href="/admin/berita/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ink text-cream-50 text-[13px] font-semibold hover:bg-coral transition-colors"
        >
          <Plus size={15} /> Tambah Berita
        </Link>
      </div>

      <div className="space-y-3">
        {news?.map((n) => (
          <div
            key={n.id}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-cream-200"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] tracking-[0.14em] uppercase font-bold text-ink-faint">{n.category}</span>
                {n.featured && (
                  <span className="px-2 py-0.5 rounded-full bg-coral-50 text-coral-700 text-[10px] font-bold">Featured</span>
                )}
              </div>
              <p className="font-semibold text-ink text-[14px] mt-1 truncate">{n.title}</p>
              <p className="text-[12px] text-ink-faint mt-0.5">{n.date_label}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/admin/berita/${n.id}`}
                className="p-2 rounded-lg text-ink-soft hover:text-ink hover:bg-cream-50 transition-colors"
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
