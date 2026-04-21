import { ArrowUpRight, GraduationCap } from "lucide-react";

const HERO_IMG =
  "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1920";

export const Hero = () => {
  return (
    <section
      id="beranda"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Siswa SMP belajar di kelas"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative frame */}
      <div className="absolute inset-6 md:inset-10 border border-clay-50/10 rounded-[24px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 pb-28 lg:pt-52 lg:pb-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-10 animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-px w-10 bg-sand" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-sand font-semibold">
              Sekolah Menengah Pertama Negeri · Lampung Barat
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-[82px] leading-[0.95] tracking-tight text-clay-50 text-balance animate-fade-up"
            style={{ animationDelay: "180ms" }}
            data-testid="hero-title"
          >
            Menumbuhkan{" "}
            <span className="italic font-normal text-sand">
              generasi
            </span>{" "}
            yang cerdas, berakhlak, dan berdaya saing.
          </h1>

          {/* Subheading */}
          <p
            className="mt-8 text-lg sm:text-xl leading-relaxed text-clay-200/90 max-w-2xl animate-fade-up"
            style={{ animationDelay: "320ms" }}
            data-testid="hero-subtitle"
          >
            SMP Negeri 1 Sumber Jaya hadir sebagai rumah belajar bagi{" "}
            <span className="text-clay-50 font-medium">634 siswa</span> di
            Sumber Jaya, Lampung Barat — membimbing mereka dengan
            Kurikulum Merdeka, guru berdedikasi, dan budaya lokal yang kuat.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "460ms" }}
          >
            <a
              href="#tentang"
              data-testid="hero-cta-primary"
              className="group inline-flex items-center gap-3 pl-7 pr-5 py-4 rounded-full bg-terra text-clay-50 font-semibold tracking-wide hover:bg-terra-dark transition-all duration-500 hover:-translate-y-0.5 shadow-[0_12px_40px_-12px_rgba(178,76,39,0.7)]"
            >
              Jelajahi Sekolah
              <span className="w-9 h-9 rounded-full bg-clay-50/20 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a
              href="#program"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-clay-50/25 text-clay-50 font-medium backdrop-blur-sm hover:border-sand hover:text-sand transition-colors duration-400"
            >
              <GraduationCap size={18} />
              Lihat Program
            </a>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div
          className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 max-w-4xl animate-fade-up"
          style={{ animationDelay: "620ms" }}
          data-testid="hero-stats-strip"
        >
          {[
            { v: "B", l: "Akreditasi Sekolah" },
            { v: "634", l: "Peserta Didik Aktif" },
            { v: "46", l: "Guru & Tenaga Pendidik" },
            { v: "1985", l: "Tahun Berdiri" },
          ].map((s, i) => (
            <div
              key={i}
              className="border-l border-clay-50/20 pl-4 md:pl-6"
            >
              <p className="font-display text-3xl lg:text-4xl text-clay-50 leading-none">
                {s.v}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.14em] uppercase text-clay-200/75">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3 text-clay-50/70">
        <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap translate-y-6">
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-clay-50/60 to-transparent" />
      </div>
    </section>
  );
};
