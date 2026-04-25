import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updatePengumuman } from "@/app/admin/actions";
import { PengumumanForm } from "../PengumumanForm";
import type { Pengumuman } from "@/lib/types";

export default async function EditPengumumanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("pengumuman").select("*").eq("id", id).single();
  if (!data) notFound();

  const defaultValues = {
    id: data.id,
    slug: data.slug,
    title: data.title,
    summary: data.summary,
    body: data.body ?? [],
    date: data.date,
    dateLabel: data.date_label,
    urgency: data.urgency,
  } satisfies Pengumuman & { id: string };

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl text-ink mb-8">Edit Pengumuman</h1>
      <PengumumanForm action={updatePengumuman.bind(null, id)} defaultValues={defaultValues} />
    </div>
  );
}
