import Image from "next/image";
import {
  BookOpenText,
  Tent,
  Palette,
  Trophy,
  Sprout,
  MonitorSmartphone,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

interface Program {
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  span: string;
  img?: string;
  featured?: boolean;
  color?: string;
}

const PROGRAMS: Program[] = [
  {
    icon: BookOpenText,
    tag: "Kurikulum",
    title: "Kurikulum Merdeka",
    desc: "Pembelajaran berbasis proyek & minat, menumbuhkan nalar kritis dan Profil Pelajar Pancasila.",
    span: "lg:col-span-3 lg:row-span-2",
    img: "https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=900",
    featured: true,
  },
  { icon: Tent, tag: "Karakter", title: "Pramuka & Kepanduan", desc: "Pembentukan karakter, kemandirian, kepemimpinan.", span: "lg:col-span-3", color: "bg-navy-50 text-navy-700" },
  { icon: Palette, tag: "Seni", title: "Seni & Budaya Lokal", desc: "Tari, musik tradisional, kearifan Lampung Barat.", span: "lg:col-span-3", color: "bg-mint-50 text-mint-600" },
  { icon: Trophy, tag: "Prestasi", title: "Olahraga", desc: "Voli, sepak bola, atletik, pencak silat.", span: "lg:col-span-2", color: "bg-gold-50 text-gold-600" },
  { icon: Sprout, tag: "Lingkungan", title: "Adiwiyata", desc: "Budaya hijau & kepedulian ekosistem sekolah.", span: "lg:col-span-2", color: "bg-mint-50 text-mint-600" },
  { icon: MonitorSmartphone, tag: "Digital", title: "Literasi TIK", desc: "Teknologi, keamanan digital, kolaborasi daring.", span: "lg:col-span-2", color: "bg-sky-50 text-sky-600" },
];

export const Programs = () => {
  return (
    <section id="program" data-testid="programs-section" className="relative py-24 lg:py-32 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 text-gold-600 text-[11px] tracking-[0.18em] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Program & Ekstrakurikuler
            </span>
            <h2
              data-testid="programs-heading"
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
            >
              Belajar lebih dari{" "}
              <em className="not-italic font-semibold text-navy">sekadar kelas.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-relaxed text-ink-soft max-w-md lg:ml-auto">
            Kami memadukan akademik, karakter, seni, olahraga & kepedulian lingkungan — biar setiap anak menemukan jalurnya sendiri.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(220px,auto)] gap-5 lg:gap-6"
          data-testid="programs-grid"
        >
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            if (p.featured && p.img) {
              return (
                <article
                  key={i}
                  data-testid="program-card-kurikulum-merdeka"
                  className={`${p.span} relative rounded-[32px] overflow-hidden group shadow-soft-lg`}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/20" />
                  <div className="relative z-10 h-full p-8 lg:p-10 flex flex-col justify-between min-h-[460px]">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-[10.5px] tracking-[0.16em] uppercase font-bold text-gold-300">
                        {p.tag}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl lg:text-4xl leading-[1.1] text-white text-balance max-w-sm">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-[14.5px] leading-relaxed text-white/85 max-w-md">
                        {p.desc}
                      </p>
                      <div className="mt-7 inline-flex items-center gap-2 text-gold-300 text-[13px] font-bold tracking-wide">
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
                className={`${p.span} group relative rounded-[28px] p-7 bg-white border border-cream-200 hover:border-cream-300 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-500`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${p.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={19} />
                  </div>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-ink-faint font-bold">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl leading-[1.15] text-ink">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{p.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
