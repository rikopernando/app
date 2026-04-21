import { Award, Hash, BookOpen, UserRound } from "lucide-react";

const ABOUT_IMG =
  "https://images.pexels.com/photos/8617769/pexels-photo-8617769.jpeg?auto=compress&cs=tinysrgb&w=1400";

const BADGES = [
  { icon: Award, label: "Akreditasi", value: "B" },
  { icon: Hash, label: "NPSN", value: "10803558" },
  { icon: BookOpen, label: "Kurikulum", value: "Merdeka" },
  { icon: UserRound, label: "Kepala Sekolah", value: "Adi Lesmana" },
];

export const About = () => {
  return (
    <section
      id="tentang"
      data-testid="about-section"
      className="relative py-24 lg:py-36 bg-clay-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left — image + badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-clay-200">
              <img
                src={ABOUT_IMG}
                alt="Gedung dan siswa SMP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            {/* Floating accreditation chip */}
            <div
              data-testid="about-accreditation-card"
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-clay-50 border border-clay-300 rounded-2xl p-6 shadow-[0_20px_60px_-20px_rgba(42,35,31,0.25)] max-w-[240px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-terra/10 flex items-center justify-center">
                  <Award className="text-terra" size={22} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                    Terakreditasi
                  </p>
                  <p className="font-display text-2xl text-ink leading-none mt-1">
                    B
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-ink-soft mt-4 leading-relaxed">
                Oleh Badan Akreditasi Nasional — Kemendikdasmen RI.
              </p>
            </div>

            {/* Decorative dot grid */}
            <div
              aria-hidden
              className="absolute -top-6 -left-6 w-28 h-28 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(#B24C27 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          {/* Right — content */}
          <div className="lg:col-span-7 lg:pl-4">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-terra" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-terra font-semibold">
                Tentang Sekolah
              </span>
            </div>

            <h2
              data-testid="about-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink text-balance"
            >
              Rumah belajar bagi putra-putri{" "}
              <em className="text-terra not-italic font-normal italic">
                Sumber Jaya.
              </em>
            </h2>

            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-soft max-w-2xl">
              <p>
                SMP Negeri 1 Sumber Jaya berdiri di jantung Kecamatan Sumber
                Jaya, Kabupaten Lampung Barat — sebuah sekolah menengah
                pertama negeri yang selama lebih dari empat dekade
                mendampingi anak-anak tumbuh menjadi pribadi yang utuh,
                cerdas, dan berbudi pekerti luhur.
              </p>
              <p>
                Dengan dukungan 46 guru dan tenaga kependidikan,
                fasilitas 15 ruang kelas, serta kurikulum yang mengikuti
                <span className="text-ink font-semibold"> Kurikulum Merdeka</span>,
                kami percaya setiap siswa punya potensi unik yang layak
                dikenali, dipupuk, dan dirayakan.
              </p>
            </div>

            {/* Badges grid */}
            <div
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3"
              data-testid="about-badges"
            >
              {BADGES.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-clay-300 bg-clay-100/50 hover:bg-clay-100 hover:-translate-y-0.5 transition-all duration-400"
                >
                  <div className="w-11 h-11 rounded-xl bg-clay-50 border border-clay-300 flex items-center justify-center">
                    <Icon className="text-terra" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10.5px] uppercase tracking-[0.18em] text-ink-soft">
                      {label}
                    </p>
                    <p className="font-display text-lg text-ink truncate">
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
