import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="kontak"
      data-testid="footer"
      className="relative bg-cream-50 pt-24 lg:pt-28 pb-10 overflow-hidden border-t border-cream-200"
    >
      {/* Soft decorative shapes */}
      <div className="absolute top-20 -right-20 w-80 h-80 bg-coral/15 blur-3xl rounded-full" aria-hidden />
      <div className="absolute bottom-20 -left-10 w-64 h-64 bg-mint/25 blur-3xl rounded-full" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* CTA Wordmark */}
        <div className="pb-14 lg:pb-16 mb-12 border-b border-cream-200">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 text-coral-700 text-[11px] tracking-[0.18em] uppercase font-bold">
            <Heart size={12} fill="currentColor" /> Mari Berkunjung
          </span>
          <h2
            data-testid="footer-wordmark"
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight text-ink text-balance max-w-5xl"
          >
            Datang, lihat, dan rasakan langsung{" "}
            <em className="italic font-normal text-coral">suasana belajar</em> di sekolah kami.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral to-coral-600 flex items-center justify-center shadow-glow">
                <span className="font-display text-white text-xl font-bold leading-none">
                  S
                </span>
              </div>
              <div>
                <p className="font-display text-xl text-ink leading-tight">
                  SMP Negeri 1 Sumber Jaya
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-ink-faint font-bold mt-0.5">
                  NPSN 10803558 · Akreditasi B
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
              Sekolah menengah pertama negeri yang membimbing generasi Sumber Jaya
              tumbuh berakar pada budaya, berbunga pada prestasi.
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
                  className="w-11 h-11 rounded-2xl bg-white border border-cream-200 flex items-center justify-center text-ink-soft hover:bg-coral hover:text-white hover:border-coral hover:-translate-y-0.5 transition-all duration-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10.5px] tracking-[0.2em] uppercase text-coral-700 font-bold mb-5">
              Kontak
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3" data-testid="footer-address">
                <MapPin size={17} className="text-coral flex-shrink-0 mt-0.5" />
                <span className="text-[14px] leading-relaxed text-ink-soft">
                  Jl. Banda Mulya No. 72 Sukapura,
                  <br />
                  Kec. Sumber Jaya, Kab. Lampung Barat,
                  <br />
                  Provinsi Lampung
                </span>
              </li>
              <li className="flex gap-3" data-testid="footer-phone">
                <Phone size={17} className="text-coral flex-shrink-0 mt-0.5" />
                <a
                  href="tel:0723465335"
                  className="text-[14px] text-ink-soft hover:text-ink transition-colors"
                >
                  (0723) 465335
                </a>
              </li>
              <li className="flex gap-3" data-testid="footer-email">
                <Mail size={17} className="text-coral flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:smpnegeri1sumberjayalambar@gmail.com"
                  className="text-[14px] text-ink-soft hover:text-ink transition-colors break-all"
                >
                  smpnegeri1sumberjayalambar@gmail.com
                </a>
              </li>
              <li className="flex gap-3" data-testid="footer-hours">
                <Clock size={17} className="text-coral flex-shrink-0 mt-0.5" />
                <span className="text-[14px] text-ink-soft">
                  Senin – Sabtu · 07.00 – 13.30 WIB
                </span>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="text-[10.5px] tracking-[0.2em] uppercase text-coral-700 font-bold mb-5">
              Jelajahi
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Tentang", href: "#tentang" },
                { label: "Program", href: "#program" },
                { label: "PPDB", href: "#ppdb" },
                { label: "Berita", href: "#berita" },
                { label: "Prestasi", href: "#prestasi" },
                { label: "Beranda", href: "#beranda" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="text-[14px] text-ink-soft hover:text-coral transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-coral transition-all duration-500 group-hover:w-5" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-cream-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-ink-faint">
          <p data-testid="footer-copyright">
            © 2026 SMP Negeri 1 Sumber Jaya. Hak Cipta Dilindungi.
          </p>
          <p className="tracking-wide font-semibold">
            Sumber Jaya, Lampung Barat · Kurikulum Merdeka
          </p>
        </div>
      </div>
    </footer>
  );
};
