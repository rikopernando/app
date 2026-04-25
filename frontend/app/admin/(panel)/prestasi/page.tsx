import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { deletePrestasi } from "@/app/admin/actions";
import { DeleteButton } from "@/app/admin/DeleteButton";

export const dynamic = "force-dynamic";

const LEVEL_COLOR: Record<string, string> = {
  Internasional: "bg-gold-50 text-gold-600",
  Nasional:      "bg-navy-50 text-navy-700",
  Provinsi:      "bg-sky-50 text-sky-600",
  Kabupaten:     "bg-mint-50 text-mint-600",
  Kecamatan:     "bg-cream-100 text-ink-soft",
};

const RANK_COLOR: Record<string, string> = {
  "Juara 1":  "bg-gold-50 text-gold-600",
  "Juara 2":  "bg-cream-100 text-ink-soft",
  "Juara 3":  "bg-cream-100 text-ink-soft",
};

export default async function AdminPrestasiPage() {
  const supabase = await createClient();
  const { data: achievements } = await supabase
    .from("achievements")
    .select("id, rank, title, category, level, year")
    .order("year", { ascending: false });

  return (
    <div className="max-w-4xl">
      <div className="flex items-start justify-between mb-6 pb-5 sm:mb-8 sm:pb-6 border-b border-cream-200">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-1">Konten</p>
          <h1 className="font-display text-2xl sm:text-3xl text-ink">Prestasi</h1>
          <p className="text-[13px] text-ink-soft mt-1">{achievements?.length ?? 0} prestasi tercatat</p>
        </div>
        <Link
          href="/admin/prestasi/new"
          className="inline-flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl bg-navy text-white text-[13px] font-semibold hover:bg-navy-600 transition-colors shadow-glow shrink-0"
          title="Tambah Prestasi"
        >
          <Plus size={15} />
          <span className="hidden sm:inline">Tambah Prestasi</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-soft divide-y divide-cream-100">
        {(!achievements || achievements.length === 0) && (
          <div className="py-16 text-center text-ink-faint text-[14px]">
            Belum ada prestasi. Klik &ldquo;Tambah Prestasi&rdquo; untuk mulai.
          </div>
        )}
        {achievements?.map((a) => (
          <div
            key={a.id}
            className="group flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4 hover:bg-cream-50 transition-colors duration-150"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap mb-1.5">
                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide ${RANK_COLOR[a.rank] ?? "bg-cream-100 text-ink-soft"}`}>
                  {a.rank}
                </span>
                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide ${LEVEL_COLOR[a.level] ?? "bg-cream-100 text-ink-soft"}`}>
                  {a.level}
                </span>
                <span className="inline-flex px-2 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide bg-cream-100 text-ink-faint">
                  {a.year}
                </span>
              </div>
              <p className="font-semibold text-[14px] text-ink truncate">{a.title}</p>
              <p className="text-[11.5px] text-ink-faint mt-0.5">{a.category}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150">
              <Link
                href={`/admin/prestasi/${a.id}`}
                className="p-2 rounded-lg text-ink-soft hover:text-navy hover:bg-navy-50 transition-colors"
                title="Edit"
              >
                <Pencil size={15} />
              </Link>
              <DeleteButton action={deletePrestasi.bind(null, a.id)} confirmMessage="Hapus prestasi ini?" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
