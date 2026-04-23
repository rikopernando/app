"use client";

import { useState } from "react";
import Link from "next/link";
import type { NewsArticle } from "@/lib/types";

type Props = {
  action: (formData: FormData) => Promise<{ error: string } | void>;
  defaultValues?: NewsArticle & { id: string };
};

const CATEGORIES = ["Pengumuman", "Kegiatan", "Akademik", "Info Sekolah"];

export function NewsForm({ action, defaultValues }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const result = await action(new FormData(e.currentTarget));
    setPending(false);
    if (result?.error) setError(result.error);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Judul" name="title" required defaultValue={defaultValues?.title} />
      <Field label="Slug (URL)" name="slug" required defaultValue={defaultValues?.slug} placeholder="contoh-slug-berita" />
      <Field label="Excerpt" name="excerpt" required multiline defaultValue={defaultValues?.excerpt} />
      <Field
        label="Isi (pisahkan paragraf dengan baris kosong)"
        name="body"
        required
        multiline
        rows={10}
        defaultValue={defaultValues?.body.join("\n\n")}
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[12.5px] font-semibold text-ink-soft mb-1.5">Kategori</label>
          <select
            name="category"
            defaultValue={defaultValues?.category ?? "Kegiatan"}
            className="w-full px-4 py-2.5 rounded-xl border border-cream-200 bg-cream-50 text-ink text-[13.5px] outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
          >
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <Field label="Tanggal (YYYY-MM-DD)" name="date" required defaultValue={defaultValues?.date} placeholder="2026-04-23" />
      </div>
      <Field label="Label Tanggal" name="date_label" required defaultValue={defaultValues?.dateLabel} placeholder="23 April 2026" />
      <Field label="URL Gambar" name="image" required defaultValue={defaultValues?.image} />
      <Field label="Penulis (opsional)" name="author" defaultValue={defaultValues?.author} />
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          name="featured"
          value="true"
          defaultChecked={defaultValues?.featured}
          className="w-4 h-4 rounded accent-navy"
        />
        <label htmlFor="featured" className="text-[13.5px] font-semibold text-ink-soft">
          Tandai sebagai berita utama (featured)
        </label>
      </div>

      {error && (
        <p className="text-[13px] text-navy-700 bg-navy-50 px-4 py-2.5 rounded-xl">{error}</p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="px-6 py-2.5 rounded-xl bg-ink text-cream-50 font-semibold text-[13.5px] hover:bg-navy transition-colors disabled:opacity-60"
        >
          {pending ? "Menyimpan..." : "Simpan"}
        </button>
        <Link
          href="/admin/berita"
          className="px-6 py-2.5 rounded-xl border border-cream-200 text-ink-soft font-semibold text-[13.5px] hover:bg-cream-50 transition-colors"
        >
          Batal
        </Link>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  multiline,
  rows = 3,
  defaultValue,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string;
  placeholder?: string;
}) {
  const cls =
    "w-full px-4 py-2.5 rounded-xl border border-cream-200 bg-cream-50 text-ink text-[13.5px] outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition";
  return (
    <div>
      <label className="block text-[12.5px] font-semibold text-ink-soft mb-1.5">
        {label}
      </label>
      {multiline ? (
        <textarea name={name} required={required} rows={rows} defaultValue={defaultValue} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} required={required} defaultValue={defaultValue} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}
