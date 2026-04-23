import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { deletePrestasi } from "../actions";
import { DeleteButton } from "../DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminPrestasiPage() {
  const supabase = await createClient();
  const { data: achievements } = await supabase
    .from("achievements")
    .select("id, rank, title, category, level, year")
    .order("year", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl text-ink">Prestasi</h1>
          <p className="text-[13px] text-ink-soft mt-1">{achievements?.length ?? 0} prestasi</p>
        </div>
        <Link
          href="/admin/prestasi/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ink text-cream-50 text-[13px] font-semibold hover:bg-navy transition-colors"
        >
          <Plus size={15} /> Tambah Prestasi
        </Link>
      </div>

      <div className="space-y-3">
        {achievements?.map((a) => (
          <div
            key={a.id}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-cream-200"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] tracking-[0.14em] uppercase font-bold text-ink-faint">{a.rank}</span>
                <span className="text-[10px] tracking-[0.14em] uppercase font-bold text-ink-faint">{a.level} · {a.year}</span>
              </div>
              <p className="font-semibold text-ink text-[14px] mt-1 truncate">{a.title}</p>
              <p className="text-[12px] text-ink-faint mt-0.5">{a.category}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/admin/prestasi/${a.id}`}
                className="p-2 rounded-lg text-ink-soft hover:text-ink hover:bg-cream-50 transition-colors"
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
