import { Eye, Heart, Lightbulb, Shield, Sparkles, Star, Target, Zap, type LucideIcon } from "lucide-react";

const PILLARS: { icon: LucideIcon; label: string }[] = [
  { icon: Star,      label: "Beriman" },
  { icon: Heart,     label: "Berakhlakul Karimah" },
  { icon: Lightbulb, label: "Bernalar Kritis" },
  { icon: Zap,       label: "Mandiri" },
  { icon: Shield,    label: "Bertanggung Jawab" },
];

const MISI = [
  "Menanamkan nilai-nilai keimanan dan ketakwaan kepada Tuhan Yang Maha Esa melalui pembelajaran, pembiasaan, dan kegiatan keagamaan yang terintegrasi dalam kehidupan sekolah.",
  "Membentuk peserta didik yang berakhlakul karimah dengan membangun budaya sekolah yang positif, menjunjung nilai-nilai moral, etika, dan sopan santun.",
  "Mendorong pengembangan kemampuan berpikir kritis, kreatif, dan reflektif melalui pembelajaran aktif, berbasis proyek, inkuiri, serta pemecahan masalah.",
  "Menumbuhkan kemandirian peserta didik dalam belajar, bertindak, dan mengambil keputusan secara bertanggung jawab.",
  "Membangun karakter tanggung jawab dan kepedulian sosial melalui kegiatan intra dan ekstrakurikuler yang bermakna dan partisipatif.",
  "Menyiapkan peserta didik menjadi warga global yang adaptif, toleran, dan berwawasan luas, melalui integrasi literasi digital, budaya, dan lingkungan hidup dalam proses pendidikan.",
  "Meningkatkan profesionalisme pendidik dan tenaga kependidikan dalam menciptakan lingkungan belajar yang aman, inklusif, dan menyenangkan.",
];

export const VisiMisi = () => {
  return (
    <section id="visi-misi" data-testid="visi-misi-section" className="relative py-24 lg:py-32 bg-white border-t border-cream-200 overflow-hidden">
      <div className="absolute top-20 right-10 w-48 h-48 bg-mint/25 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-20 -left-10 w-56 h-56 bg-navy/20 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-50 text-mint-600 text-[11px] tracking-[0.18em] uppercase font-bold">
            <Sparkles size={12} /> Arah & Harapan
          </span>
          <h2
            data-testid="visi-misi-heading"
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
          >
            Dibangun di atas <em className="not-italic font-semibold text-mint-600">nilai</em>,
            diarahkan oleh <em className="not-italic font-semibold text-navy">tujuan</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <article
            data-testid="visi-card"
            className="lg:col-span-5 relative flex flex-col p-8 lg:p-10 rounded-[32px] bg-gradient-to-br from-sky to-sky-600 text-white overflow-hidden shadow-soft-lg"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 w-52 h-52 rounded-full bg-mint/30 blur-2xl" />

            <div className="relative flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-8 self-start">
                <Eye size={14} />
                <span className="text-[11px] tracking-[0.18em] uppercase font-bold">Visi</span>
              </div>

              <p className="font-display text-xl sm:text-2xl leading-[1.3] text-white text-pretty">
                Mewujudkan generasi{" "}
                <span className="text-gold-300 font-semibold">pembelajar sejati</span>{" "}
                yang{" "}
                <span className="text-gold-300 font-semibold">beriman</span>,{" "}
                <span className="text-gold-300 font-semibold">berakhlakul karimah</span>,{" "}
                <span className="text-gold-300 font-semibold">bernalar kritis</span>,{" "}
                mandiri, dan bertanggung jawab dalam kehidupan bermasyarakat dan global.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {PILLARS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[11px] font-bold tracking-wide text-white"
                  >
                    <Icon size={11} />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/20 text-[12px] tracking-[0.16em] uppercase text-white/75 font-semibold">
                &mdash; SMPN 1 Sumber Jaya
              </div>
            </div>
          </article>

          <article
            data-testid="misi-card"
            className="lg:col-span-7 p-8 lg:p-10 rounded-[32px] bg-white border border-cream-200 shadow-soft"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-50 text-navy-700 mb-8">
              <Target size={14} />
              <span className="text-[11px] tracking-[0.18em] uppercase font-bold">Misi</span>
            </div>

            <ol className="space-y-4">
              {MISI.map((m, i) => (
                <li
                  key={i}
                  data-testid={`misi-item-${i + 1}`}
                  className="flex gap-5 group p-4 -mx-4 rounded-2xl hover:bg-cream-100 transition-colors duration-300"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-navy-600 text-white font-bold flex items-center justify-center font-display tabular-nums shadow-glow">
                    {i + 1}
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-ink-soft group-hover:text-ink transition-colors duration-300 pt-1.5">
                    {m}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
};
