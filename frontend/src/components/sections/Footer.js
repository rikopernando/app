import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="kontak"
      data-testid="footer"
      className="relative bg-ink text-clay-200 pt-24 lg:pt-32 pb-10 overflow-hidden"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-terra/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Wordmark block */}
        <div className="pb-14 lg:pb-20 border-b border-clay-50/10">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-sand" />
            <span className="text-[11px] tracking-[0.24em] uppercase text-sand font-semibold">
              Mari Berkunjung
            </span>
          </div>
          <h2
            data-testid="footer-wordmark"
            className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-clay-50 text-balance max-w-5xl"
          >
            Datang, lihat, dan rasakan langsung{" "}
            <em className="italic font-normal text-sand">suasana belajar</em> di
            sekolah kami.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 py-14 lg:py-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-terra flex items-center justify-center">
                <span className="font-display text-clay-50 text-xl font-bold leading-none">
                  S
                </span>
              </div>
              <div>
                <p className="font-display text-xl text-clay-50 leading-tight">
                  SMP Negeri 1 Sumber Jaya
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-clay-300">
                  NPSN 10803558 · Akreditasi B
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-md text-[14.5px] leading-relaxed text-clay-200/80">
              Sekolah menengah pertama negeri yang membimbing generasi Sumber
              Jaya untuk tumbuh berakar pada budaya, berbunga pada prestasi.
            </p>

            <div className="mt-8 flex items-center gap-3">
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
                  className="w-11 h-11 rounded-full border border-clay-50/15 flex items-center justify-center text-clay-200 hover:bg-terra hover:text-clay-50 hover:border-terra transition-all duration-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10.5px] tracking-[0.24em] uppercase text-sand font-semibold mb-6">
              Kontak
            </p>
            <ul className="space-y-5">
              <li className="flex gap-4" data-testid="footer-address">
                <MapPin size={18} className="text-terra flex-shrink-0 mt-0.5" />
                <span className="text-[14px] leading-relaxed text-clay-200">
                  Jl. Banda Mulya No. 72 Sukapura,
                  <br />
                  Kec. Sumber Jaya, Kab. Lampung Barat,
                  <br />
                  Provinsi Lampung
                </span>
              </li>
              <li className="flex gap-4" data-testid="footer-phone">
                <Phone size={18} className="text-terra flex-shrink-0 mt-0.5" />
                <a
                  href="tel:0723465335"
                  className="text-[14px] text-clay-200 hover:text-clay-50 transition-colors"
                >
                  (0723) 465335
                </a>
              </li>
              <li className="flex gap-4" data-testid="footer-email">
                <Mail size={18} className="text-terra flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:smpnegeri1sumberjayalambar@gmail.com"
                  className="text-[14px] text-clay-200 hover:text-clay-50 transition-colors break-all"
                >
                  smpnegeri1sumberjayalambar@gmail.com
                </a>
              </li>
              <li className="flex gap-4" data-testid="footer-hours">
                <Clock size={18} className="text-terra flex-shrink-0 mt-0.5" />
                <span className="text-[14px] text-clay-200">
                  Senin – Sabtu · 07.00 – 13.30 WIB
                </span>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="text-[10.5px] tracking-[0.24em] uppercase text-sand font-semibold mb-6">
              Jelajahi
            </p>
            <ul className="space-y-3">
              {[
                { label: "Tentang Sekolah", href: "#tentang" },
                { label: "Visi & Misi", href: "#visi-misi" },
                { label: "Statistik", href: "#statistik" },
                { label: "Program Unggulan", href: "#program" },
                { label: "Beranda", href: "#beranda" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s|&/g, "-")}`}
                    className="text-[14px] text-clay-200 hover:text-sand transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-sand transition-all duration-500 group-hover:w-5" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-clay-50/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-clay-200/70">
          <p data-testid="footer-copyright">
            © 2026 SMP Negeri 1 Sumber Jaya. Hak Cipta Dilindungi.
          </p>
          <p className="tracking-wide">
            Sumber Jaya, Lampung Barat · Kurikulum Merdeka
          </p>
        </div>
      </div>
    </footer>
  );
};
