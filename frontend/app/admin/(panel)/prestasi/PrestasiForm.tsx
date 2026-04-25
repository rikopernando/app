"use client";

import { useState } from "react";
import Link from "next/link";
import type { Achievement } from "@/lib/types";

type Props = {
  action: (formData: FormData) => Promise<{ error: string } | void>;
  defaultValues?: Achievement & { id: string };
};

const RANKS = ["Juara 1", "Juara 2", "Juara 3", "Harapan 1", "Harapan 2"];
const LEVELS = ["Kecamatan", "Kabupaten", "Provinsi", "Nasional"];

export function PrestasiForm({ action, defaultValues }: Props) {
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
      <Field label="Nama Lomba / Prestasi" name="title" required defaultValue={defaultValues?.title} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[12.5px] font-semibold text-ink-soft mb-1.5">Peringkat</label>
          <select
            name="rank"
            defaultValue={defaultValues?.rank ?? "Juara 1"}
            className="w-full px-4 py-2.5 rounded-xl border border-cream-200 bg-cream-50 text-ink text-[13.5px] outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
          >
            {RANKS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[12.5px] font-semibold text-ink-soft mb-1.5">Tingkat</label>
          <select
            name="level"
            defaultValue={defaultValues?.level ?? "Kabupaten"}
            className="w-full px-4 py-2.5 rounded-xl border border-cream-200 bg-cream-50 text-ink text-[13.5px] outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
          >
            {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Kategori" name="category" required defaultValue={defaultValues?.category} placeholder="Akademik, Olahraga, Seni..." />
        <Field label="Tahun" name="year" required defaultValue={defaultValues?.year} placeholder="2025" />
      </div>
      <Field label="Nama Siswa / Tim (opsional)" name="student" defaultValue={defaultValues?.student} />
      <Field label="URL Gambar (opsional)" name="image" defaultValue={defaultValues?.image} />

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
          href="/admin/prestasi"
          className="px-6 py-2.5 rounded-xl border border-cream-200 text-ink-soft font-semibold text-[13.5px] hover:bg-cream-50 transition-colors"
        >
          Batal
        </Link>
      </div>
    </form>
  );
}

function Field({
  label, name, required, defaultValue, placeholder,
}: {
  label: string; name: string; required?: boolean; defaultValue?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[12.5px] font-semibold text-ink-soft mb-1.5">{label}</label>
      <input
        name={name}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-xl border border-cream-200 bg-cream-50 text-ink text-[13.5px] outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition"
      />
    </div>
  );
}
