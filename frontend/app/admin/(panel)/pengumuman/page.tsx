import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { deletePengumuman } from "@/app/admin/actions";
import { DeleteButton } from "@/app/admin/DeleteButton";

export const dynamic = "force-dynamic";

const URGENCY_COLOR: Record<string, string> = {
  Penting: "bg-navy-50 text-navy-700",
  Segera:  "bg-gold-50 text-gold-600",
  Umum:    "bg-sky-50 text-sky-600",
};

export default async function AdminPengumumanPage() {
  const supabase = await createClient();
  const { data: pengumuman } = await supabase
    .from("pengumuman")
    .select("id, slug, title, date_label, urgency")
    .order("date", { ascending: false });

  return (
    <div className="max-w-4xl">
      <div className="flex items-start justify-between mb-6 pb-5 sm:mb-8 sm:pb-6 border-b border-cream-200">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-1">Konten</p>
          <h1 className="font-display text-2xl sm:text-3xl text-ink">Pengumuman</h1>
          <p className="text-[13px] text-ink-soft mt-1">{pengumuman?.length ?? 0} pengumuman</p>
        </div>
        <Link
          href="/admin/pengumuman/new"
          className="inline-flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl bg-navy text-white text-[13px] font-semibold hover:bg-navy-600 transition-colors shadow-glow shrink-0"
          title="Tambah Pengumuman"
        >
          <Plus size={15} />
          <span className="hidden sm:inline">Tambah Pengumuman</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-soft divide-y divide-cream-100">
        {(!pengumuman || pengumuman.length === 0) && (
          <div className="py-16 text-center text-ink-faint text-[14px]">
            Belum ada pengumuman. Klik &ldquo;Tambah Pengumuman&rdquo; untuk mulai.
          </div>
        )}
        {pengumuman?.map((p) => (
          <div
            key={p.id}
            className="group flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4 hover:bg-cream-50 transition-colors duration-150"
          >
            <div className="flex-1 min-w-0">
              <div className="mb-1.5">
                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide ${URGENCY_COLOR[p.urgency] ?? "bg-cream-100 text-ink-soft"}`}>
                  {p.urgency}
                </span>
              </div>
              <p className="font-semibold text-[14px] text-ink truncate">{p.title}</p>
              <p className="text-[11.5px] text-ink-faint mt-0.5">{p.date_label}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150">
              <Link
                href={`/admin/pengumuman/${p.id}`}
                className="p-2 rounded-lg text-ink-soft hover:text-navy hover:bg-navy-50 transition-colors"
                title="Edit"
              >
                <Pencil size={15} />
              </Link>
              <DeleteButton action={deletePengumuman.bind(null, p.id)} confirmMessage="Hapus pengumuman ini?" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
