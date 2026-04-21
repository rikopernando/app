import {
  BookOpenText,
  Tent,
  Palette,
  Trophy,
  Sprout,
  MonitorSmartphone,
  ArrowUpRight,
} from "lucide-react";

const PROGRAMS = [
  {
    icon: BookOpenText,
    tag: "Kurikulum",
    title: "Kurikulum Merdeka",
    desc: "Pembelajaran berbasis projek & minat, menumbuhkan nalar kritis dan profil Pelajar Pancasila.",
    span: "lg:col-span-3 lg:row-span-2",
    img: "https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=900",
    featured: true,
  },
  {
    icon: Tent,
    tag: "Karakter",
    title: "Pramuka & Kepanduan",
    desc: "Pembentukan karakter, kemandirian, dan kepemimpinan.",
    span: "lg:col-span-3",
  },
  {
    icon: Palette,
    tag: "Seni",
    title: "Seni & Budaya Lokal",
    desc: "Tari, musik tradisional, dan kearifan Lampung Barat.",
    span: "lg:col-span-3",
  },
  {
    icon: Trophy,
    tag: "Prestasi",
    title: "Olahraga Kompetitif",
    desc: "Sepak bola, bola voli, atletik, dan pencak silat.",
    span: "lg:col-span-2",
  },
  {
    icon: Sprout,
    tag: "Lingkungan",
    title: "Sekolah Adiwiyata",
    desc: "Budaya hijau & kepedulian ekosistem sekitar sekolah.",
    span: "lg:col-span-2",
  },
  {
    icon: MonitorSmartphone,
    tag: "Literasi Digital",
    title: "Literasi TIK",
    desc: "Pengenalan teknologi, keamanan digital, dan kolaborasi daring.",
    span: "lg:col-span-2",
  },
];

export const Programs = () => {
  return (
    <section
      id="program"
      data-testid="programs-section"
      className="relative py-24 lg:py-36 bg-clay-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-terra" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-terra font-semibold">
                Program Unggulan
              </span>
            </div>
            <h2
              data-testid="programs-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink text-balance"
            >
              Belajar lebih luas dari{" "}
              <em className="italic font-normal text-terra">sekadar kelas.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-relaxed text-ink-soft max-w-md lg:ml-auto">
            Kami merancang pengalaman belajar yang memadukan akademik,
            karakter, seni, olahraga, dan kepedulian terhadap lingkungan — agar
            setiap siswa menemukan jalurnya sendiri.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(220px,auto)] gap-5 lg:gap-6"
          data-testid="programs-grid"
        >
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            if (p.featured) {
              return (
                <article
                  key={i}
                  data-testid={`program-card-${p.title.toLowerCase().replace(/\s|&/g, "-")}`}
                  className={`${p.span} relative rounded-3xl overflow-hidden bg-ink text-clay-50 group`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-65 group-hover:scale-[1.04] transition-all duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/50 to-ink/10" />
                  <div className="relative z-10 h-full p-8 lg:p-10 flex flex-col justify-between min-h-[440px]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10.5px] tracking-[0.22em] uppercase text-sand font-semibold">
                          {p.tag}
                        </span>
                      </div>
                      <div className="mt-6 w-14 h-14 rounded-2xl bg-clay-50/10 border border-clay-50/20 flex items-center justify-center backdrop-blur-sm">
                        <Icon size={22} className="text-sand" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl lg:text-4xl leading-[1.1] text-clay-50 text-balance max-w-sm">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-[14.5px] leading-relaxed text-clay-200 max-w-md">
                        {p.desc}
                      </p>
                      <div className="mt-8 inline-flex items-center gap-2 text-sand text-[13px] font-semibold tracking-wide">
                        Pelajari kurikulum
                        <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            }
            return (
              <article
                key={i}
                data-testid={`program-card-${p.title.toLowerCase().replace(/\s|&/g, "-")}`}
                className={`${p.span} group relative rounded-3xl p-7 lg:p-8 bg-clay-100/60 border border-clay-300 hover:bg-clay-100 hover:-translate-y-1 hover:border-terra/40 transition-all duration-500`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-clay-50 border border-clay-300 flex items-center justify-center group-hover:bg-terra group-hover:border-terra transition-colors duration-500">
                    <Icon
                      size={19}
                      className="text-terra group-hover:text-clay-50 transition-colors duration-500"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-ink-soft/70 font-semibold">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl leading-[1.15] text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
