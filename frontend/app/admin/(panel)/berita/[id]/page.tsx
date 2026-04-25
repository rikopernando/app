import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updateNews } from "@/app/admin/actions";
import { NewsForm } from "../NewsForm";
import type { NewsArticle } from "@/lib/types";

export default async function EditBeritaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("news_articles").select("*").eq("id", id).single();
  if (!data) notFound();

  const defaultValues = {
    id: data.id,
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    body: data.body ?? [],
    category: data.category,
    date: data.date,
    dateLabel: data.date_label,
    image: data.image,
    author: data.author ?? undefined,
    featured: data.featured,
  } satisfies NewsArticle & { id: string };

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl text-ink mb-8">Edit Berita</h1>
      <NewsForm action={updateNews.bind(null, id)} defaultValues={defaultValues} />
    </div>
  );
}
