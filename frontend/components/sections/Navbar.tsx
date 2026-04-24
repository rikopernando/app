"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Program", href: "/#program" },
  { label: "PPDB", href: "/#ppdb" },
  { label: "Berita", href: "/berita" },
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "Prestasi", href: "/prestasi" },
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
          ? "bg-cream-50/85 backdrop-blur-xl border-b border-cream-300/60 shadow-[0_4px_30px_-8px_rgba(31,43,71,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            data-testid="nav-logo"
            className="flex items-center gap-3 group"
          >
            <div className="transition-transform duration-500 group-hover:rotate-[-6deg]">
              <Image
                src="/logo/logo.png"
                alt="Logo SMPN 1 Sumber Jaya"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="font-display text-[15.5px] font-semibold text-ink tracking-tight">
                SMPN 1 Sumber Jaya
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-soft font-semibold">
                Sekolah Ramah Anak · Sejak 1985
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-sm border border-cream-300/80 rounded-full px-2 py-1.5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="px-4 py-2 rounded-full text-[13px] font-semibold text-ink-soft hover:text-ink hover:bg-cream-100 transition-all duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#ppdb"
              data-testid="nav-cta-ppdb"
              className="group inline-flex items-center gap-2 pl-5 pr-2.5 py-2 rounded-full bg-ink text-cream-50 text-[13px] font-semibold tracking-wide hover:bg-navy transition-all duration-500"
            >
              Daftar PPDB
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <Sparkles size={13} />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            data-testid="nav-mobile-toggle"
            className="lg:hidden w-11 h-11 rounded-2xl border border-cream-300 bg-white/80 flex items-center justify-center text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-cream-50 border-t border-cream-300"
        >
          <div className="px-5 py-5 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-ink font-medium hover:bg-cream-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#ppdb"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-navy text-white font-semibold shadow-glow"
            >
              Daftar PPDB ✨
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
