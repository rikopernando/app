import { Trophy, Medal, Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    rank: "Juara 1",
    level: "Kabupaten",
    year: "2025",
    title: "Lomba Tari Kreasi Tradisional",
    category: "Seni Budaya",
    color: "coral",
    img: "https://images.pexels.com/photos/8617542/pexels-photo-8617542.jpeg?auto=compress&cs=tinysrgb&w=800",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    rank: "Juara 2",
    level: "Kabupaten",
    year: "2025",
    title: "Olimpiade Sains Nasional — Matematika",
    category: "Akademik",
    color: "sky",
    span: "lg:col-span-2",
  },
  {
    rank: "Juara 1",
    level: "Kecamatan",
    year: "2025",
    title: "Turnamen Bola Voli Antar-SMP",
    category: "Olahraga",
    color: "honey",
    span: "lg:col-span-2",
  },
  {
    rank: "Harapan 1",
    level: "Provinsi",
    year: "2024",
    title: "Festival Pelajar Pancasila",
    category: "Karakter",
    color: "mint",
    span: "lg:col-span-2",
  },
  {
    rank: "Juara 3",
    level: "Kabupaten",
    year: "2024",
    title: "Lomba Cerdas Cermat Bahasa Inggris",
    category: "Akademik",
    color: "sky",
    span: "lg:col-span-2",
  },
];

const COLOR = {
  coral: { bg: "bg-coral", text: "text-white", subText: "text-white/80", chip: "bg-white/20 text-white", icon: "text-honey-300" },
  sky: { bg: "bg-white", text: "text-ink", subText: "text-ink-soft", chip: "bg-sky-50 text-sky-600", icon: "text-sky-600" },
  honey: { bg: "bg-white", text: "text-ink", subText: "text-ink-soft", chip: "bg-honey-50 text-honey-600", icon: "text-honey-600" },
  mint: { bg: "bg-white", text: "text-ink", subText: "text-ink-soft", chip: "bg-mint-50 text-mint-600", icon: "text-mint-600" },
};

const RANK_ICON = {
  "Juara 1": Trophy,
  "Juara 2": Medal,
  "Juara 3": Medal,
  "Harapan 1": Award,
};

export const Achievements = () => {
  return (
    <section
      id="prestasi"
      data-testid="achievements-section"
      className="relative py-24 lg:py-32 bg-cream-100/40 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-honey/20 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-50 text-honey-600 text-[11px] tracking-[0.18em] uppercase font-bold">
              <Trophy size={12} /> Galeri Prestasi
            </span>
            <h2
              data-testid="achievements-heading"
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
            >
              Karya & prestasi{" "}
              <em className="not-italic font-semibold text-honey-600">anak-anak kami.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-relaxed text-ink-soft max-w-md lg:ml-auto">
            Setiap piala, medali, dan penghargaan adalah cerita kerja keras siswa — kami bangga merayakannya bersama.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(200px,auto)] gap-5 lg:gap-6"
          data-testid="achievements-grid"
        >
          {ACHIEVEMENTS.map((a, i) => {
            const c = COLOR[a.color];
            const IconRank = RANK_ICON[a.rank] || Award;
            const isFeatured = i === 0;

            if (isFeatured) {
              return (
                <article
                  key={i}
                  data-testid={`achievement-card-${i + 1}`}
                  className={`${a.span} relative rounded-[32px] overflow-hidden group shadow-soft-lg`}
                >
                  <img
                    src={a.img}
                    alt={a.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent" />
                  <div className="relative z-10 h-full p-7 lg:p-9 flex flex-col justify-between min-h-[440px]">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-honey text-ink text-[10.5px] tracking-[0.16em] uppercase font-bold">
                        <Trophy size={11} /> {a.rank}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] tracking-[0.14em] uppercase font-bold text-white/90">
                        {a.level} · {a.year}
                      </span>
                    </div>
                    <div>
                      <p className="text-[11.5px] tracking-[0.18em] uppercase text-honey-300 font-bold">
                        {a.category}
                      </p>
                      <h3 className="font-display mt-3 text-3xl lg:text-4xl leading-[1.1] text-white text-balance max-w-md">
                        {a.title}
                      </h3>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={i}
                data-testid={`achievement-card-${i + 1}`}
                className={`${a.span} group relative rounded-[28px] p-6 lg:p-7 ${c.bg} border border-cream-200 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-500`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl ${c.chip} flex items-center justify-center`}
                  >
                    <IconRank size={20} />
                  </div>
                  <span
                    className={`text-[10px] tracking-[0.16em] uppercase font-bold ${c.subText}`}
                  >
                    {a.level} · {a.year}
                  </span>
                </div>

                <p
                  className={`mt-8 font-display text-lg leading-none tracking-tight ${
                    c.bg.includes("bg-coral") ? "text-honey-300" : "text-coral"
                  } font-bold`}
                >
                  {a.rank}
                </p>
                <h3
                  className={`mt-2 font-display text-xl lg:text-2xl leading-[1.15] ${c.text} text-balance`}
                >
                  {a.title}
                </h3>
                <p
                  className={`mt-3 text-[12px] tracking-[0.14em] uppercase font-bold ${c.subText}`}
                >
                  {a.category}
                </p>
              </article>
            );
          })}
        </div>

        {/* Tally strip */}
        <div
          data-testid="achievements-tally"
          className="mt-14 p-7 lg:p-8 rounded-[28px] bg-white border border-cream-200 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-honey-50 text-honey-600 flex items-center justify-center">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-[10.5px] tracking-[0.16em] uppercase text-ink-faint font-bold">
                Total 5 Tahun Terakhir
              </p>
              <p className="font-display text-2xl text-ink mt-1">
                47 penghargaan & piala
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            {[
              { n: "18", l: "Akademik", color: "text-sky-600" },
              { n: "14", l: "Olahraga", color: "text-honey-600" },
              { n: "10", l: "Seni", color: "text-coral" },
              { n: "5", l: "Karakter", color: "text-mint-600" },
            ].map((t) => (
              <div key={t.l} className="text-center px-3">
                <p className={`font-display text-2xl font-bold ${t.color}`}>{t.n}</p>
                <p className="text-[11px] tracking-wide uppercase text-ink-faint font-semibold">
                  {t.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
