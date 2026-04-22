import { ArrowRight, GraduationCap, Sparkles, Star } from "lucide-react";

const HERO_IMG =
  "https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&w=1200";

export const Hero = () => {
  return (
    <section
      id="beranda"
      data-testid="hero-section"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cream-50"
    >
      {/* Soft decorative blobs */}
      <div
        aria-hidden
        className="absolute top-32 -left-20 w-[360px] h-[360px] bg-honey/35 blur-3xl rounded-full"
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-[-80px] w-[440px] h-[440px] bg-mint/35 blur-3xl rounded-full"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid opacity-[0.04]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            {/* Pill */}
            <div
              className="inline-flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-cream-300 animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-coral text-white text-[11px] font-bold tracking-wide">
                <Sparkles size={12} /> BARU
              </span>
              <span className="text-[12.5px] font-semibold text-ink">
                PPDB 2026/2027 sudah dibuka
              </span>
            </div>

            {/* Headline */}
            <h1
              data-testid="hero-title"
              className="font-display mt-7 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-ink text-balance animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Tempat{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-bold text-coral-700">belajar</span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-1 h-3 bg-honey/60 rounded-full -z-0"
                />
              </span>
              {" "}yang{" "}
              <span className="font-semibold text-sky-600">hangat</span> untuk
              tumbuh bersama teman.
            </h1>

            {/* Subheading */}
            <p
              className="mt-7 text-[17px] lg:text-lg leading-relaxed text-ink-soft max-w-xl animate-fade-up"
              style={{ animationDelay: "280ms" }}
              data-testid="hero-subtitle"
            >
              SMP Negeri 1 Sumber Jaya adalah rumah belajar 634 siswa di Lampung Barat —
              dengan guru yang mendampingi, Kurikulum Merdeka, dan ruang untuk
              mencoba, bertanya, dan berkarya.
            </p>

            {/* CTAs */}
            <div
              className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="#ppdb"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-3 pl-7 pr-2.5 py-2.5 rounded-full bg-ink text-cream-50 font-semibold hover:bg-coral transition-all duration-500 shadow-soft-lg"
              >
                Daftar Sekarang
                <span className="w-11 h-11 rounded-full bg-coral flex items-center justify-center group-hover:bg-white group-hover:text-coral transition-all duration-500">
                  <ArrowRight size={16} />
                </span>
              </a>
              <a
                href="#program"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-ink/10 text-ink font-semibold hover:border-ink/30 hover:bg-white transition-all duration-300"
              >
                <GraduationCap size={18} /> Lihat Program
              </a>
            </div>

            {/* Trust row */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 animate-fade-up"
              style={{ animationDelay: "520ms" }}
            >
              <div className="flex -space-x-2">
                {["bg-coral-300", "bg-mint-300", "bg-honey-300", "bg-sky-300"].map(
                  (c, i) => (
                    <span
                      key={i}
                      className={`w-8 h-8 rounded-full ${c} ring-2 ring-cream-50`}
                    />
                  )
                )}
              </div>
              <p className="text-[13px] text-ink-soft">
                <span className="font-bold text-ink">634 siswa</span> belajar bersama setiap hari
              </p>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5 text-honey-600">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[13px] font-semibold text-ink">Akreditasi B</span>
              </div>
            </div>
          </div>

          {/* Right — image card collage */}
          <div className="lg:col-span-5 relative" data-testid="hero-visual">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-[36px] overflow-hidden aspect-[4/5] bg-mint shadow-soft-lg">
                <img
                  src={HERO_IMG}
                  alt="Siswa SMP"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                {/* Floating tag on image */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-soft">
                  <span className="w-2 h-2 rounded-full bg-mint-600 animate-pulse" />
                  <span className="text-[11.5px] font-bold text-ink tracking-wide">
                    Kurikulum Merdeka
                  </span>
                </div>
              </div>

              {/* Floating stat card — top right */}
              <div className="absolute -top-6 -right-4 lg:-right-8 bg-white rounded-2xl p-4 shadow-soft-lg border border-cream-200 animate-float max-w-[180px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mint/25 flex items-center justify-center">
                    <span className="font-display text-mint-600 font-bold">46</span>
                  </div>
                  <div>
                    <p className="text-[10.5px] tracking-[0.14em] uppercase text-ink-faint font-semibold">
                      Guru
                    </p>
                    <p className="text-[12px] font-semibold text-ink">Berdedikasi</p>
                  </div>
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-6 -left-4 lg:-left-10 bg-white rounded-2xl px-5 py-4 shadow-soft-lg border border-cream-200 animate-float" style={{ animationDelay: "1.5s" }}>
                <p className="text-[10.5px] tracking-[0.14em] uppercase text-ink-faint font-semibold">
                  Ekstrakurikuler
                </p>
                <p className="mt-1 font-display text-xl text-ink">12+ pilihan</p>
                <div className="flex gap-1 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-coral-50 text-coral-700 text-[10px] font-bold">
                    Seni
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 text-[10px] font-bold">
                    Olahraga
                  </span>
                </div>
              </div>

              {/* Tiny badge floating */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-honey rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-soft animate-float rotate-[-8deg]" style={{ animationDelay: "0.7s" }}>
                <span className="text-[8px] uppercase tracking-wider font-bold text-ink">Sejak</span>
                <span className="font-display text-sm font-bold text-ink leading-none mt-0.5">1985</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
