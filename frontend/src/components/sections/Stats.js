import { useEffect, useRef, useState } from "react";
import {
  Users,
  GraduationCap,
  BookMarked,
  DoorOpen,
  LayoutGrid,
  UserCheck,
} from "lucide-react";

const STATS = [
  { icon: Users, label: "Total Siswa", value: 634, suffix: "", note: "Tahun Ajaran 2025/2026", highlight: true },
  { icon: UserCheck, label: "Siswa Laki-laki", value: 308, suffix: "", note: "48,6%" },
  { icon: Users, label: "Siswa Perempuan", value: 326, suffix: "", note: "51,4%" },
  { icon: GraduationCap, label: "Guru & Tenaga Pendidik", value: 46, suffix: "", note: "Rasio 1 : 14" },
  { icon: DoorOpen, label: "Ruang Kelas", value: 15, suffix: "", note: "Kondisi baik" },
  { icon: LayoutGrid, label: "Rombongan Belajar", value: 21, suffix: "", note: "Pagi · 6 Hari" },
];

const useCountUp = (target, start, duration = 1400) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
};

const StatCard = ({ icon: Icon, label, value, suffix, note, highlight, visible }) => {
  const n = useCountUp(value, visible);
  return (
    <div
      data-testid={`stat-card-${label.toLowerCase().replace(/\s|&/g, "-")}`}
      className={`relative p-7 lg:p-9 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${
        highlight
          ? "bg-terra text-clay-50 border-terra shadow-[0_30px_80px_-30px_rgba(178,76,39,0.6)]"
          : "bg-clay-50 border-clay-300 hover:border-terra/40 hover:shadow-[0_20px_50px_-25px_rgba(42,35,31,0.2)]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            highlight ? "bg-clay-50/15" : "bg-clay-100 border border-clay-300"
          }`}
        >
          <Icon size={20} className={highlight ? "text-clay-50" : "text-terra"} />
        </div>
        <span
          className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${
            highlight ? "text-sand" : "text-ink-soft/70"
          }`}
        >
          {note}
        </span>
      </div>

      <p
        className={`font-display mt-10 text-5xl lg:text-6xl leading-none tracking-tight tabular-nums ${
          highlight ? "text-clay-50" : "text-ink"
        }`}
      >
        {n.toLocaleString("id-ID")}
        <span className={highlight ? "text-sand" : "text-terra"}>{suffix}</span>
      </p>
      <p
        className={`mt-4 text-[13.5px] font-medium tracking-wide ${
          highlight ? "text-clay-200" : "text-ink-soft"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export const Stats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="statistik"
      ref={ref}
      data-testid="stats-section"
      className="relative py-24 lg:py-36 bg-clay-100/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-terra" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-terra font-semibold">
                Statistik Sekolah
              </span>
            </div>
            <h2
              data-testid="stats-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink text-balance"
            >
              Sekolah kami{" "}
              <em className="italic font-normal text-terra">dalam angka.</em>
            </h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-relaxed text-ink-soft">
            Data terkini kami — diverifikasi melalui Data Pokok Pendidikan
            (Dapodik) Kemendikdasmen, tahun ajaran 2025/2026.
          </p>
        </div>

        {/* Grid — bento-ish */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
          data-testid="stats-grid"
        >
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} visible={visible} />
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-14 flex flex-col sm:flex-row items-start gap-3 sm:gap-6 text-[13px] text-ink-soft">
          <span className="flex items-center gap-2">
            <BookMarked size={15} className="text-terra" /> NPSN 10803558
          </span>
          <span className="hidden sm:inline text-clay-300">·</span>
          <span>Luas Tanah: 6.460 m²</span>
          <span className="hidden sm:inline text-clay-300">·</span>
          <span>Status: Sekolah Negeri</span>
        </div>
      </div>
    </section>
  );
};
