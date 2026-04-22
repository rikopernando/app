import { Award, Hash, BookOpen, UserRound, Heart } from "lucide-react";

const ABOUT_IMG =
  "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1200";

const BADGES = [
  { icon: Award, label: "Akreditasi", value: "B", color: "bg-coral-50 text-coral-700" },
  { icon: Hash, label: "NPSN", value: "10803558", color: "bg-sky-50 text-sky-600" },
  { icon: BookOpen, label: "Kurikulum", value: "Merdeka", color: "bg-mint-50 text-mint-600" },
  { icon: UserRound, label: "Kepala Sekolah", value: "Adi Lesmana", color: "bg-honey-50 text-honey-600" },
];

export const About = () => {
  return (
    <section
      id="tentang"
      data-testid="about-section"
      className="relative py-24 lg:py-32 bg-cream-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left — image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-sky-100 shadow-soft-lg">
              <img src={ABOUT_IMG} alt="Suasana belajar" className="w-full h-full object-cover" />
            </div>

            {/* Floating happy card */}
            <div
              data-testid="about-happy-card"
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-soft-lg border border-cream-200 max-w-[220px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-coral/15 flex items-center justify-center">
                  <Heart className="text-coral" size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-faint font-semibold">
                    Sekolah Ramah Anak
                  </p>
                  <p className="text-[13px] font-semibold text-ink mt-0.5">
                    Aman, nyaman & inklusif
                  </p>
                </div>
              </div>
            </div>

            {/* Dot ornament */}
            <div
              aria-hidden
              className="absolute -top-6 -left-6 w-24 h-24 bg-dot-grid opacity-50"
            />
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 text-coral-700 text-[11px] tracking-[0.18em] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-coral" /> Tentang Kami
            </span>
            <h2
              data-testid="about-heading"
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
            >
              Sekolah yang hadir seperti{" "}
              <em className="not-italic font-semibold text-coral">rumah kedua</em> bagi anakmu.
            </h2>

            <div className="mt-7 space-y-5 text-[16.5px] leading-relaxed text-ink-soft max-w-2xl">
              <p>
                SMP Negeri 1 Sumber Jaya berdiri di jantung Kecamatan Sumber Jaya,
                Kabupaten Lampung Barat. Sejak 1985, kami mendampingi anak-anak Sumber
                Jaya tumbuh menjadi pribadi yang percaya diri, penasaran, dan peduli.
              </p>
              <p>
                Dengan 46 guru dan tenaga kependidikan yang hangat, 15 ruang kelas yang
                nyaman, serta Kurikulum Merdeka — kami percaya setiap anak punya
                keunikan yang layak ditemukan, dirawat, dan dirayakan.
              </p>
            </div>

            {/* Badges */}
            <div
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3"
              data-testid="about-badges"
            >
              {BADGES.map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-cream-200 hover:border-cream-300 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10.5px] uppercase tracking-[0.14em] text-ink-faint font-semibold">
                      {label}
                    </p>
                    <p className="font-display text-lg text-ink truncate mt-0.5">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
