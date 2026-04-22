import { Eye, Target, Sparkles } from "lucide-react";

const MISI = [
  "Meningkatkan keimanan dan ketaqwaan kepada Tuhan YME melalui pembiasaan karakter.",
  "Melaksanakan pembelajaran yang aktif, kreatif, dan menyenangkan (PAIKEM).",
  "Mendorong setiap siswa mengenali potensi dirinya secara optimal.",
  "Menumbuhkan kecintaan pada budaya bangsa dan kepedulian lingkungan.",
  "Menjalin kemitraan yang erat dengan orang tua dan masyarakat Sumber Jaya.",
];

export const VisiMisi = () => {
  return (
    <section
      id="visi-misi"
      data-testid="visi-misi-section"
      className="relative py-24 lg:py-32 bg-cream-50 overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-mint/25 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-20 -left-10 w-56 h-56 bg-coral/20 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-50 text-mint-600 text-[11px] tracking-[0.18em] uppercase font-bold">
            <Sparkles size={12} /> Arah & Harapan
          </span>
          <h2
            data-testid="visi-misi-heading"
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
          >
            Dibangun di atas <em className="italic font-normal text-mint-600">nilai</em>,
            diarahkan oleh <em className="italic font-normal text-coral">tujuan</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Visi */}
          <article
            data-testid="visi-card"
            className="lg:col-span-5 relative p-8 lg:p-10 rounded-[32px] bg-gradient-to-br from-sky to-sky-600 text-white overflow-hidden shadow-soft-lg"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 w-52 h-52 rounded-full bg-mint/30 blur-2xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                <Eye size={14} />
                <span className="text-[11px] tracking-[0.18em] uppercase font-bold">
                  Visi
                </span>
              </div>

              <p className="font-display text-2xl sm:text-3xl leading-[1.25] text-white text-pretty">
                “Terwujudnya peserta didik yang{" "}
                <span className="text-honey-300 italic">beriman</span>,{" "}
                <span className="text-honey-300 italic">bertaqwa</span>,{" "}
                <span className="text-honey-300 italic">berprestasi</span>, dan berwawasan lingkungan.”
              </p>

              <div className="mt-10 pt-6 border-t border-white/20 text-[12px] tracking-[0.16em] uppercase text-white/75 font-semibold">
                — SMPN 1 Sumber Jaya
              </div>
            </div>
          </article>

          {/* Misi */}
          <article
            data-testid="misi-card"
            className="lg:col-span-7 p-8 lg:p-10 rounded-[32px] bg-white border border-cream-200 shadow-soft"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral-50 text-coral-700 mb-8">
              <Target size={14} />
              <span className="text-[11px] tracking-[0.18em] uppercase font-bold">
                Misi
              </span>
            </div>

            <ol className="space-y-4">
              {MISI.map((m, i) => (
                <li
                  key={i}
                  data-testid={`misi-item-${i + 1}`}
                  className="flex gap-5 group p-4 -mx-4 rounded-2xl hover:bg-cream-50 transition-colors duration-300"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-coral-600 text-white font-bold flex items-center justify-center font-display tabular-nums shadow-glow">
                    {i + 1}
                  </span>
                  <p className="text-[15.5px] leading-relaxed text-ink-soft group-hover:text-ink transition-colors duration-300 pt-1.5">
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
