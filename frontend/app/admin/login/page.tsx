"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogIn, Loader2 } from "lucide-react";

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
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-ink items-center justify-center mb-5">
            <LogIn size={22} className="text-cream-50" />
          </div>
          <h1 className="font-display text-3xl text-ink">Admin Panel</h1>
          <p className="mt-2 text-[14px] text-ink-soft">SMP Negeri 1 Sumber Jaya</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-cream-200 rounded-3xl p-8 shadow-soft space-y-5"
        >
          <div>
            <label className="block text-[12.5px] font-semibold text-ink-soft mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-ink text-[14px] outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition"
            />
          </div>
          <div>
            <label className="block text-[12.5px] font-semibold text-ink-soft mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-ink text-[14px] outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition"
            />
          </div>

          {error && (
            <p className="text-[13px] text-coral-700 bg-coral-50 px-4 py-2.5 rounded-xl">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-ink text-cream-50 font-semibold text-[14px] hover:bg-coral transition-colors duration-300 disabled:opacity-60"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
            {loading ? "Masuk..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}
