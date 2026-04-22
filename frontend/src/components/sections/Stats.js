import { useEffect, useRef, useState } from "react";
import {
  Users,
  GraduationCap,
  DoorOpen,
  LayoutGrid,
  UserCheck,
  UsersRound,
} from "lucide-react";

const STATS = [
  { icon: UsersRound, label: "Total Siswa", value: 634, note: "TA 2025/2026", tone: "coral" },
  { icon: UserCheck, label: "Siswa Laki-laki", value: 308, note: "48,6%", tone: "sky" },
  { icon: Users, label: "Siswa Perempuan", value: 326, note: "51,4%", tone: "mint" },
  { icon: GraduationCap, label: "Guru & Tenaga", value: 46, note: "Rasio 1:14", tone: "honey" },
  { icon: DoorOpen, label: "Ruang Kelas", value: 15, note: "Kondisi baik", tone: "sky" },
  { icon: LayoutGrid, label: "Rombel", value: 21, note: "Pagi · 6 Hari", tone: "mint" },
];

const TONE_STYLES = {
  coral: { card: "bg-coral text-white", icon: "bg-white/20 text-white", accent: "text-honey" },
  sky: { card: "bg-white", icon: "bg-sky-50 text-sky-600", accent: "text-sky-600" },
  mint: { card: "bg-white", icon: "bg-mint-50 text-mint-600", accent: "text-mint-600" },
  honey: { card: "bg-white", icon: "bg-honey-50 text-honey-600", accent: "text-honey-600" },
};

const useCountUp = (target, start, duration = 1300) => {
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

const StatCard = ({ icon: Icon, label, value, note, tone, visible }) => {
  const n = useCountUp(value, visible);
  const t = TONE_STYLES[tone];
  const isFilled = tone === "coral";
  return (
    <div
      data-testid={`stat-card-${label.toLowerCase().replace(/\s|&/g, "-")}`}
      className={`group relative p-7 lg:p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${
        isFilled
          ? "border-transparent shadow-glow " + t.card
          : "border-cream-200 hover:border-cream-300 shadow-soft hover:shadow-soft-lg " + t.card
      }`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${t.icon}`}>
          <Icon size={20} />
        </div>
        <span
          className={`text-[10.5px] tracking-[0.16em] uppercase font-bold ${
            isFilled ? "text-white/80" : "text-ink-faint"
          }`}
        >
          {note}
        </span>
      </div>
      <p
        className={`font-display mt-10 text-5xl lg:text-6xl leading-none tracking-tight tabular-nums ${
          isFilled ? "text-white" : "text-ink"
        }`}
      >
        {n.toLocaleString("id-ID")}
      </p>
      <p
        className={`mt-3 text-[14px] font-semibold ${
          isFilled ? "text-white/90" : "text-ink-soft"
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
      className="relative py-24 lg:py-32 bg-cream-100/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-600 text-[11px] tracking-[0.18em] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-DEFAULT" /> Statistik Sekolah
            </span>
            <h2
              data-testid="stats-heading"
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
            >
              Sekolah kami dalam{" "}
              <em className="not-italic font-semibold text-coral">angka.</em>
            </h2>
          </div>
          <p className="max-w-md text-[15.5px] leading-relaxed text-ink-soft">
            Data terverifikasi melalui Dapodik Kemendikdasmen — tahun ajaran 2025/2026.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          data-testid="stats-grid"
        >
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} visible={visible} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-ink-soft">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" /> NPSN 10803558
          </span>
          <span className="hidden sm:inline text-cream-400">·</span>
          <span>Luas Tanah: 6.460 m²</span>
          <span className="hidden sm:inline text-cream-400">·</span>
          <span>Status: Sekolah Negeri</span>
        </div>
      </div>
    </section>
  );
};
