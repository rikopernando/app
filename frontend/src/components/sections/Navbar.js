import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Visi & Misi", href: "#visi-misi" },
  { label: "Statistik", href: "#statistik" },
  { label: "Program", href: "#program" },
  { label: "Kontak", href: "#kontak" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-clay-50/85 backdrop-blur-xl border-b border-clay-300/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#beranda"
            data-testid="nav-logo"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-11 h-11 rounded-full bg-terra flex items-center justify-center ring-1 ring-terra-dark/40 transition-transform duration-500 group-hover:rotate-[10deg]">
              <span className="font-display text-clay-50 text-lg font-bold leading-none">
                S
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-sand ring-2 ring-clay-50" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-[15px] font-semibold text-ink tracking-tight">
                SMPN 1 Sumber Jaya
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.18em] text-ink-soft">
                Lampung Barat · Sejak 1985
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s|&/g, "-")}`}
                className="text-[13.5px] font-medium text-ink-soft hover:text-terra transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-terra transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#kontak"
              data-testid="nav-cta-kontak"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-clay-50 text-[13px] font-semibold tracking-wide hover:bg-terra transition-all duration-400 hover:-translate-y-0.5"
            >
              Hubungi Kami
              <span className="inline-block translate-y-px">→</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            data-testid="nav-mobile-toggle"
            className="lg:hidden w-11 h-11 rounded-full border border-clay-300 bg-clay-50/80 flex items-center justify-center text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-clay-50 border-t border-clay-300/70"
        >
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-ink font-medium hover:bg-clay-100 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center px-5 py-3 rounded-full bg-terra text-clay-50 font-semibold"
            >
              Hubungi Kami →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
