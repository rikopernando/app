import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { deletePengumuman } from "../actions";
import { DeleteButton } from "../DeleteButton";

export const dynamic = "force-dynamic";

const URGENCY_COLOR: Record<string, string> = {
  Penting: "bg-navy-50 text-navy-700",
  Segera: "bg-gold-50 text-gold-600",
  Umum: "bg-sky-50 text-sky-600",
};

export default async function AdminPengumumanPage() {
  const supabase = await createClient();
  const { data: pengumuman } = await supabase
    .from("pengumuman")
    .select("id, slug, title, date_label, urgency")
    .order("date", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl text-ink">Pengumuman</h1>
          <p className="text-[13px] text-ink-soft mt-1">{pengumuman?.length ?? 0} pengumuman</p>
        </div>
        <Link
          href="/admin/pengumuman/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ink text-cream-50 text-[13px] font-semibold hover:bg-navy transition-colors"
        >
          <Plus size={15} /> Tambah Pengumuman
        </Link>
      </div>

      <div className="space-y-3">
        {pengumuman?.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-cream-200"
          >
            <div className="flex-1 min-w-0">
              <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${URGENCY_COLOR[p.urgency]}`}>
                {p.urgency}
              </span>
              <p className="font-semibold text-ink text-[14px] mt-1 truncate">{p.title}</p>
              <p className="text-[12px] text-ink-faint mt-0.5">{p.date_label}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/admin/pengumuman/${p.id}`}
                className="p-2 rounded-lg text-ink-soft hover:text-ink hover:bg-cream-50 transition-colors"
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
