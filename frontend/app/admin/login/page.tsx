"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { LogIn, Loader2, Shield } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: fd.get("email") as string,
      password: fd.get("password") as string,
    });
    setLoading(false);
    if (error) {
      setError("Email atau password salah.");
    } else {
      router.push("/admin");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left — brand panel */}
      <div className="hidden lg:flex lg:w-[420px] xl:w-[460px] shrink-0 bg-navy flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo SMPN 1 Sumber Jaya"
            width={44}
            height={44}
            className="h-11 w-auto object-contain"
          />
          <div>
            <p className="font-display text-white text-[15px] font-semibold leading-tight">
              SMPN 1 Sumber Jaya
            </p>
            <p className="text-[10px] text-gold/80 font-bold tracking-[0.12em] uppercase mt-0.5">
              Kab. Lampung Barat
            </p>
          </div>
        </div>

        <div>
          <div className="w-10 h-[3px] bg-gold rounded-full mb-8" />
          <p className="font-display text-3xl xl:text-4xl text-white leading-[1.2] text-balance">
            Panel Administrasi Sekolah
          </p>
          <p className="mt-4 text-[15px] text-white/55 leading-relaxed">
            Kelola berita, pengumuman, dan prestasi dari satu tempat yang aman.
          </p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.2em] font-bold text-gold/70">
            Sekolahnya Generasi Berprestasi
          </p>
        </div>

        <div className="flex items-center gap-2 text-[12px] text-white/25 font-semibold">
          <Shield size={13} />
          Akses terbatas untuk staf sekolah
        </div>
      </div>

      {/* Right — form */}
      <div className="flex-1 bg-cream-50 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Mobile header */}
          <div className="lg:hidden text-center mb-8">
            <Image
              src="/logo/logo.png"
              alt="Logo SMPN 1 Sumber Jaya"
              width={56}
              height={56}
              className="mx-auto h-14 w-auto object-contain mb-4"
            />
            <h1 className="font-display text-2xl text-ink">Admin Panel</h1>
            <p className="mt-1 text-[13.5px] text-ink-soft">SMP Negeri 1 Sumber Jaya</p>
          </div>

          {/* Desktop header */}
          <div className="hidden lg:block mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-faint mb-2">
              Portal Staf
            </p>
            <h2 className="font-display text-3xl text-ink">Masuk</h2>
            <p className="mt-2 text-[14px] text-ink-soft">
              Gunakan akun yang diberikan oleh administrator.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[12px] font-bold text-ink-soft uppercase tracking-[0.12em] mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white text-ink text-[14px] outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition shadow-soft"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-ink-soft uppercase tracking-[0.12em] mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white text-ink text-[14px] outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition shadow-soft"
              />
            </div>

            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-100">
                <p className="text-[13px] text-red-600 font-semibold">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-navy text-white font-semibold text-[14px] hover:bg-navy-600 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 shadow-glow mt-2"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
              {loading ? "Memproses..." : "Masuk ke Dashboard"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
