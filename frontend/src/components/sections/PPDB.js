import { toast } from "sonner";
import {
  CalendarDays,
  FileText,
  ClipboardCheck,
  Download,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const TIMELINE = [
  { date: "10 Mei", month: "2026", title: "Pendaftaran Dibuka", desc: "Orang tua bisa mendaftarkan calon siswa secara daring atau luring di sekolah.", color: "coral" },
  { date: "25 Mei", month: "2026", title: "Tes Seleksi", desc: "Tes akademik dasar dan wawancara orang tua bersama siswa.", color: "sky" },
  { date: "01 Jun", month: "2026", title: "Pengumuman Hasil", desc: "Hasil seleksi diumumkan di papan sekolah dan website.", color: "mint" },
  { date: "10 Jun", month: "2026", title: "Daftar Ulang", desc: "Melengkapi berkas daftar ulang & orientasi calon siswa baru.", color: "honey" },
];

const TONE = {
  coral: { bg: "bg-coral-50", text: "text-coral-700", dot: "bg-coral" },
  sky: { bg: "bg-sky-50", text: "text-sky-600", dot: "bg-sky" },
  mint: { bg: "bg-mint-50", text: "text-mint-600", dot: "bg-mint" },
  honey: { bg: "bg-honey-50", text: "text-honey-600", dot: "bg-honey" },
};

const REQUIREMENTS = [
  "Fotokopi Ijazah / SKL SD-MI (1 lembar)",
  "Fotokopi Akta Kelahiran (1 lembar)",
  "Fotokopi Kartu Keluarga (1 lembar)",
  "Pas foto 3x4 berwarna (3 lembar)",
  "Fotokopi KTP orang tua / wali",
  "Surat keterangan domisili (jika diperlukan)",
];

export const PPDB = () => {
  const handleDownload = () => {
    toast.success("Formulir PPDB sedang diunduh", {
      description: "Lengkapi dan kirim kembali ke sekolah. Butuh bantuan? Hubungi (0723) 465335.",
      duration: 5000,
    });
  };

  return (
    <section
      id="ppdb"
      data-testid="ppdb-section"
      className="relative py-24 lg:py-32 bg-ink text-cream-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-coral/25 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky/20 blur-3xl rounded-full" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral/25 text-coral-300 text-[11px] tracking-[0.18em] uppercase font-bold">
              <Sparkles size={12} /> PPDB 2026 / 2027
            </span>
            <h2
              data-testid="ppdb-heading"
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-cream-50 text-balance"
            >
              Yuk, jadi bagian dari{" "}
              <em className="italic font-normal text-honey-300">keluarga baru</em> di SMPN 1 Sumber Jaya.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] leading-relaxed text-cream-300 max-w-md lg:ml-auto">
            Penerimaan Peserta Didik Baru tahun ajaran 2026/2027 sudah dibuka. Ikuti jadwal dan siapkan berkasnya — kami bantu di setiap langkah.
          </p>
        </div>

        {/* Grid: Timeline (left, 7) + Requirements (right, 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline */}
          <div
            data-testid="ppdb-timeline"
            className="lg:col-span-7 rounded-[32px] p-8 lg:p-10 bg-white/[0.04] border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2.5 mb-8">
              <CalendarDays size={18} className="text-honey-300" />
              <h3 className="text-[13px] tracking-[0.2em] uppercase font-bold text-honey-300">
                Jadwal Pendaftaran
              </h3>
            </div>

            <ol className="relative space-y-6 before:absolute before:left-[26px] before:top-4 before:bottom-4 before:w-px before:bg-white/15">
              {TIMELINE.map((t, i) => {
                const tone = TONE[t.color];
                return (
                  <li
                    key={i}
                    data-testid={`ppdb-timeline-${i + 1}`}
                    className="relative flex gap-5 group"
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-[52px] h-[52px] rounded-2xl ${tone.bg} flex flex-col items-center justify-center leading-tight ring-4 ring-ink`}
                      >
                        <span className={`font-display text-[14px] font-bold ${tone.text}`}>
                          {t.date}
                        </span>
                        <span className={`text-[9px] tracking-wide font-bold ${tone.text}/70`}>
                          {t.month}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1 pb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} />
                        <h4 className="font-display text-xl text-cream-50">{t.title}</h4>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-cream-300 max-w-md">
                        {t.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Requirements + Download */}
          <div className="lg:col-span-5 space-y-6">
            <div
              data-testid="ppdb-requirements"
              className="rounded-[32px] p-8 lg:p-10 bg-white text-ink shadow-soft-lg"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-coral-50 flex items-center justify-center">
                  <ClipboardCheck size={18} className="text-coral-700" />
                </div>
                <div>
                  <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-faint font-bold">
                    Siapkan
                  </p>
                  <h3 className="font-display text-xl text-ink leading-tight">
                    Syarat Pendaftaran
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {REQUIREMENTS.map((r, i) => (
                  <li
                    key={i}
                    data-testid={`ppdb-requirement-${i + 1}`}
                    className="flex items-start gap-3 text-[14px] text-ink-soft leading-relaxed"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-mint-600 flex-shrink-0 mt-0.5"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Download */}
            <div
              data-testid="ppdb-download-card"
              className="relative rounded-[32px] p-8 bg-gradient-to-br from-coral to-coral-600 text-white overflow-hidden shadow-glow"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/15 blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                  <FileText size={22} />
                </div>
                <h3 className="font-display text-2xl leading-[1.15]">
                  Formulir Pendaftaran PPDB
                </h3>
                <p className="mt-2 text-[14px] text-white/85 leading-relaxed">
                  Unduh, isi, dan kirim kembali ke sekolah atau melalui panitia PPDB.
                </p>

                <button
                  type="button"
                  onClick={handleDownload}
                  data-testid="ppdb-download-btn"
                  className="mt-6 w-full inline-flex items-center justify-between gap-3 pl-5 pr-2.5 py-2.5 rounded-full bg-white text-ink font-semibold hover:bg-honey hover:text-ink transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2.5">
                    <Download size={16} /> Unduh Formulir (PDF)
                  </span>
                  <span className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight size={14} />
                  </span>
                </button>

                <p className="mt-4 text-[12px] text-white/70 text-center">
                  Butuh bantuan? <span className="underline">(0723) 465335</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
