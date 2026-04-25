import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updatePrestasi } from "@/app/admin/actions";
import { PrestasiForm } from "../PrestasiForm";
import type { Achievement } from "@/lib/types";

export default async function EditPrestasiPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("achievements").select("*").eq("id", id).single();
  if (!data) notFound();

  const defaultValues = {
    id: data.id,
    rank: data.rank,
    title: data.title,
    category: data.category,
    level: data.level,
    year: data.year,
    student: data.student ?? undefined,
    image: data.image ?? undefined,
  } satisfies Achievement & { id: string };

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl text-ink mb-8">Edit Prestasi</h1>
      <PrestasiForm action={updatePrestasi.bind(null, id)} defaultValues={defaultValues} />
    </div>
  );
}
