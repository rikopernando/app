import { Eye, Target } from "lucide-react";

const MISI = [
  "Meningkatkan keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa melalui pembiasaan karakter.",
  "Melaksanakan pembelajaran yang aktif, inovatif, kreatif, efektif, dan menyenangkan (PAIKEM).",
  "Mendorong dan membantu setiap siswa mengenali potensi dirinya secara optimal.",
  "Menumbuhkan penghayatan terhadap budaya bangsa dan kepedulian terhadap lingkungan sekitar.",
  "Menjalin kemitraan yang erat dengan orang tua dan masyarakat Sumber Jaya.",
];

export const VisiMisi = () => {
  return (
    <section
      id="visi-misi"
      data-testid="visi-misi-section"
      className="relative py-24 lg:py-36 bg-ink text-clay-50 overflow-hidden"
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Big background word */}
      <div
        aria-hidden
        className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[20vw] lg:text-[14rem] leading-none text-clay-50/[0.035] whitespace-nowrap select-none"
      >
        Visi &amp; Misi
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-sand" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-sand font-semibold">
              Arah & Harapan
            </span>
          </div>
          <h2
            data-testid="visi-misi-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-clay-50 text-balance"
          >
            Dibangun di atas <em className="italic font-normal text-sand">nilai</em>,
            diarahkan oleh <em className="italic font-normal text-sand">tujuan</em>.
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Visi card — 5 cols */}
          <article
            data-testid="visi-card"
            className="lg:col-span-5 relative p-8 lg:p-10 rounded-3xl border border-clay-50/10 bg-gradient-to-br from-clay-50/[0.06] to-transparent overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-terra/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sand/40 bg-sand/10 mb-8">
                <Eye size={14} className="text-sand" />
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-sand">
                  Visi
                </span>
              </div>

              <p className="font-display text-2xl sm:text-3xl leading-[1.25] text-clay-50">
                “Terwujudnya peserta didik yang{" "}
                <span className="text-sand">beriman</span>,{" "}
                <span className="text-sand">bertaqwa</span>,{" "}
                <span className="text-sand">berprestasi</span>, dan berwawasan
                lingkungan.”
              </p>

              <div className="mt-10 pt-6 border-t border-clay-50/10 text-[12px] tracking-[0.18em] uppercase text-clay-200/70">
                — SMPN 1 Sumber Jaya
              </div>
            </div>
          </article>

          {/* Misi card — 7 cols */}
          <article
            data-testid="misi-card"
            className="lg:col-span-7 p-8 lg:p-10 rounded-3xl border border-clay-50/10 bg-clay-50/[0.03]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-terra/50 bg-terra/15 mb-8">
              <Target size={14} className="text-sand" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-sand">
                Misi
              </span>
            </div>

            <ol className="space-y-5">
              {MISI.map((m, i) => (
                <li
                  key={i}
                  data-testid={`misi-item-${i + 1}`}
                  className="flex gap-5 group"
                >
                  <span className="flex-shrink-0 font-display text-2xl text-sand/70 w-8 leading-tight tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15.5px] leading-relaxed text-clay-200 group-hover:text-clay-50 transition-colors duration-400">
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
