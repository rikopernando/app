"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// ── Auth ──────────────────────────────────────────────────────────────────────

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

// ── News ──────────────────────────────────────────────────────────────────────

export async function createNews(formData: FormData) {
  const supabase = await createClient();
  const bodyRaw = formData.get("body") as string;

  const { error } = await supabase.from("news_articles").insert({
    slug: formData.get("slug"),
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    body: bodyRaw.split("\n\n").filter(Boolean),
    category: formData.get("category"),
    date: formData.get("date"),
    date_label: formData.get("date_label"),
    image: formData.get("image"),
    author: formData.get("author") || null,
    featured: formData.get("featured") === "true",
  });

  if (error) return { error: error.message };
  revalidatePath("/berita");
  revalidatePath("/");
  redirect("/admin/berita");
}

export async function updateNews(id: string, formData: FormData) {
  const supabase = await createClient();
  const bodyRaw = formData.get("body") as string;

  const { error } = await supabase
    .from("news_articles")
    .update({
      slug: formData.get("slug"),
      title: formData.get("title"),
      excerpt: formData.get("excerpt"),
      body: bodyRaw.split("\n\n").filter(Boolean),
      category: formData.get("category"),
      date: formData.get("date"),
      date_label: formData.get("date_label"),
      image: formData.get("image"),
      author: formData.get("author") || null,
      featured: formData.get("featured") === "true",
    })
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/berita");
  revalidatePath("/");
  redirect("/admin/berita");
}

export async function deleteNews(id: string) {
  const supabase = await createClient();
  await supabase.from("news_articles").delete().eq("id", id);
  revalidatePath("/berita");
  revalidatePath("/");
  redirect("/admin/berita");
}

// ── Pengumuman ────────────────────────────────────────────────────────────────

export async function createPengumuman(formData: FormData) {
  const supabase = await createClient();
  const bodyRaw = formData.get("body") as string;

  const { error } = await supabase.from("pengumuman").insert({
    slug: formData.get("slug"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    body: bodyRaw.split("\n\n").filter(Boolean),
    date: formData.get("date"),
    date_label: formData.get("date_label"),
    urgency: formData.get("urgency"),
  });

  if (error) return { error: error.message };
  revalidatePath("/pengumuman");
  redirect("/admin/pengumuman");
}

export async function updatePengumuman(id: string, formData: FormData) {
  const supabase = await createClient();
  const bodyRaw = formData.get("body") as string;

  const { error } = await supabase
    .from("pengumuman")
    .update({
      slug: formData.get("slug"),
      title: formData.get("title"),
      summary: formData.get("summary"),
      body: bodyRaw.split("\n\n").filter(Boolean),
      date: formData.get("date"),
      date_label: formData.get("date_label"),
      urgency: formData.get("urgency"),
    })
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/pengumuman");
  redirect("/admin/pengumuman");
}

export async function deletePengumuman(id: string) {
  const supabase = await createClient();
  await supabase.from("pengumuman").delete().eq("id", id);
  revalidatePath("/pengumuman");
  redirect("/admin/pengumuman");
}

// ── Prestasi ──────────────────────────────────────────────────────────────────

export async function createPrestasi(formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase.from("achievements").insert({
    rank: formData.get("rank"),
    title: formData.get("title"),
    category: formData.get("category"),
    level: formData.get("level"),
    year: formData.get("year"),
    student: formData.get("student") || null,
    image: formData.get("image") || null,
  });

  if (error) return { error: error.message };
  revalidatePath("/prestasi");
  revalidatePath("/");
  redirect("/admin/prestasi");
}

export async function updatePrestasi(id: string, formData: FormData) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("achievements")
    .update({
      rank: formData.get("rank"),
      title: formData.get("title"),
      category: formData.get("category"),
      level: formData.get("level"),
      year: formData.get("year"),
      student: formData.get("student") || null,
      image: formData.get("image") || null,
    })
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/prestasi");
  revalidatePath("/");
  redirect("/admin/prestasi");
}

export async function deletePrestasi(id: string) {
  const supabase = await createClient();
  await supabase.from("achievements").delete().eq("id", id);
  revalidatePath("/prestasi");
  revalidatePath("/");
  redirect("/admin/prestasi");
}
