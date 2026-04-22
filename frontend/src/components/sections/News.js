import { ArrowUpRight, Calendar } from "lucide-react";

const NEWS = [
  {
    tag: "Pengumuman",
    tagColor: "bg-coral-50 text-coral-700",
    date: "12 April 2026",
    title: "PPDB 2026/2027 Resmi Dibuka — Yuk, Daftar Sekarang!",
    desc: "Pendaftaran peserta didik baru untuk tahun ajaran 2026/2027 sudah dibuka mulai 10 Mei 2026. Jangan sampai ketinggalan.",
    img: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=900",
    featured: true,
  },
  {
    tag: "Kegiatan",
    tagColor: "bg-mint-50 text-mint-600",
    date: "5 April 2026",
    title: "Peringatan Hari Kartini: Siswa Tampil Budaya Lampung",
    desc: "Siswa-siswi menampilkan tari tradisional & pakaian adat dalam peringatan Hari Kartini.",
    img: "https://images.pexels.com/photos/8617542/pexels-photo-8617542.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    tag: "Akademik",
    tagColor: "bg-sky-50 text-sky-600",
    date: "28 Maret 2026",
    title: "Workshop Kurikulum Merdeka untuk Orang Tua",
    desc: "Orang tua diajak memahami filosofi pembelajaran berbasis proyek bersama tim guru.",
    img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    tag: "Info Sekolah",
    tagColor: "bg-honey-50 text-honey-600",
    date: "18 Maret 2026",
    title: "Libur Awal Ramadhan & Jadwal Pesantren Kilat",
    desc: "Pengumuman jadwal libur & kegiatan pesantren kilat untuk seluruh siswa selama Ramadhan.",
    img: "https://images.pexels.com/photos/8926648/pexels-photo-8926648.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export const News = () => {
  const [featured, ...rest] = NEWS;
  return (
    <section
      id="berita"
      data-testid="news-section"
      className="relative py-24 lg:py-32 bg-cream-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-600 text-[11px] tracking-[0.18em] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky" /> Berita & Pengumuman
            </span>
            <h2
              data-testid="news-heading"
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
            >
              Cerita hangat{" "}
              <em className="not-italic font-semibold text-sky-600">dari sekolah kami.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-relaxed text-ink-soft max-w-md lg:ml-auto">
            Ikuti kegiatan, pengumuman, dan kabar terbaru seputar SMPN 1 Sumber Jaya — agar orang tua dan siswa selalu update.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured */}
          <article
            data-testid={`news-card-featured`}
            className="lg:col-span-7 group relative rounded-[32px] overflow-hidden bg-white border border-cream-200 shadow-soft hover:shadow-soft-lg transition-all duration-500"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
              />
              <span
                className={`absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${featured.tagColor} text-[10.5px] tracking-[0.16em] uppercase font-bold`}
              >
                {featured.tag}
              </span>
            </div>
            <div className="p-7 lg:p-9">
              <div className="flex items-center gap-2 text-[12px] text-ink-faint font-semibold">
                <Calendar size={13} /> {featured.date}
              </div>
              <h3 className="font-display mt-3 text-2xl lg:text-3xl leading-[1.2] text-ink text-balance">
                {featured.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {featured.desc}
              </p>
              <a
                href="#berita"
                className="mt-6 inline-flex items-center gap-2 text-coral font-bold text-[13.5px] group/cta"
              >
                Baca selengkapnya
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-400 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                />
              </a>
            </div>
          </article>

          {/* Side list */}
          <div className="lg:col-span-5 space-y-5 lg:space-y-6">
            {rest.map((n, i) => (
              <article
                key={i}
                data-testid={`news-card-${i + 1}`}
                className="group flex gap-5 p-4 rounded-3xl bg-white border border-cream-200 hover:border-cream-300 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-400"
              >
                <div className="flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-[1000ms] ease-out"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full ${n.tagColor} text-[10px] tracking-[0.14em] uppercase font-bold`}
                    >
                      {n.tag}
                    </span>
                    <span className="text-[11.5px] text-ink-faint font-semibold">
                      {n.date}
                    </span>
                  </div>
                  <h4 className="font-display mt-2 text-[17px] leading-[1.25] text-ink text-pretty group-hover:text-coral transition-colors duration-300">
                    {n.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
