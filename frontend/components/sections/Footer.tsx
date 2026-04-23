import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import { SITE } from "@/lib/site";

const EXPLORE = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Program", href: "/#program" },
  { label: "PPDB", href: "/#ppdb" },
  { label: "Berita", href: "/berita" },
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "Prestasi", href: "/prestasi" },
];

export const Footer = () => {
  return (
    <footer id="kontak" data-testid="footer" className="relative bg-cream-50 pt-24 lg:pt-28 pb-10 overflow-hidden border-t border-cream-200">
      <div className="absolute top-20 -right-20 w-80 h-80 bg-navy/15 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-20 -left-10 w-64 h-64 bg-mint/25 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="pb-14 lg:pb-16 mb-12 border-b border-cream-200">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 text-navy-700 text-[11px] tracking-[0.18em] uppercase font-bold">
            <Heart size={12} fill="currentColor" /> Mari Berkunjung
          </span>
          <h2
            data-testid="footer-wordmark"
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight text-ink text-balance max-w-5xl"
          >
            Datang, lihat, dan rasakan langsung{" "}
            <em className="not-italic font-semibold text-navy">suasana belajar</em> di sekolah kami.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy to-navy-600 flex items-center justify-center shadow-glow">
                <span className="font-display text-white text-xl font-bold leading-none">S</span>
              </div>
              <div>
                <p className="font-display text-xl text-ink leading-tight">{SITE.name}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-ink-faint font-bold mt-0.5">
                  NPSN {SITE.meta.npsn} · Akreditasi {SITE.meta.akreditasi}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
              Sekolah menengah pertama negeri yang membimbing generasi Sumber Jaya tumbuh berakar pada budaya, berbunga pada prestasi.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {[
                { Icon: Facebook, label: "facebook" },
                { Icon: Instagram, label: "instagram" },
                { Icon: Youtube, label: "youtube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`footer-social-${label}`}
                  aria-label={label}
                  className="w-11 h-11 rounded-2xl bg-white border border-cream-200 flex items-center justify-center text-ink-soft hover:bg-navy hover:text-white hover:border-navy hover:-translate-y-0.5 transition-all duration-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10.5px] tracking-[0.2em] uppercase text-navy-700 font-bold mb-5">Kontak</p>
            <ul className="space-y-4">
              <li className="flex gap-3" data-testid="footer-address">
                <MapPin size={17} className="text-navy flex-shrink-0 mt-0.5" />
                <span className="text-[14px] leading-relaxed text-ink-soft">{SITE.contact.address}</span>
              </li>
              <li className="flex gap-3" data-testid="footer-phone">
                <Phone size={17} className="text-navy flex-shrink-0 mt-0.5" />
                <a href={`tel:${SITE.contact.phoneRaw}`} className="text-[14px] text-ink-soft hover:text-ink transition-colors">
                  {SITE.contact.phone}
                </a>
              </li>
              <li className="flex gap-3" data-testid="footer-email">
                <Mail size={17} className="text-navy flex-shrink-0 mt-0.5" />
                <a href={`mailto:${SITE.contact.email}`} className="text-[14px] text-ink-soft hover:text-ink transition-colors break-all">
                  {SITE.contact.email}
                </a>
              </li>
              <li className="flex gap-3" data-testid="footer-hours">
                <Clock size={17} className="text-navy flex-shrink-0 mt-0.5" />
                <span className="text-[14px] text-ink-soft">{SITE.contact.hours}</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10.5px] tracking-[0.2em] uppercase text-navy-700 font-bold mb-5">Jelajahi</p>
            <ul className="space-y-2.5">
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="text-[14px] text-ink-soft hover:text-navy transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-navy transition-all duration-500 group-hover:w-5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-cream-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-ink-faint">
          <p data-testid="footer-copyright">© 2026 {SITE.name}. Hak Cipta Dilindungi.</p>
          <p className="tracking-wide font-semibold">Sumber Jaya, Lampung Barat · Kurikulum Merdeka</p>
        </div>
      </div>
    </footer>
  );
};
