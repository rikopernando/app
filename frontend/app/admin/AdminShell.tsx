"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, LogOut } from "lucide-react";
import { AdminNav } from "./AdminNav";

type Props = {
  children: React.ReactNode;
  signOut: () => Promise<void>;
};

export function AdminShell({ children, signOut }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 md:flex">
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-30 flex items-center gap-3 px-4 h-14 bg-navy shadow-[0_1px_0_rgba(255,255,255,0.07)] shrink-0">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 -ml-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
          aria-label="Buka menu navigasi"
        >
          <Menu size={20} />
        </button>
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={30}
          height={30}
          className="h-7 w-auto object-contain"
        />
        <span className="font-display text-white text-[14px] font-semibold truncate">
          SMPN 1 Sumber Jaya
        </span>
      </header>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-navy/60 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar — fixed drawer on mobile, sticky column on desktop */}
      <aside
        className={[
          "fixed top-0 left-0 bottom-0 z-50",
          "md:sticky md:top-0 md:h-screen",
          "w-72 md:w-64 bg-navy flex flex-col shrink-0 overflow-y-auto",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 p-1.5 rounded-lg text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors"
          aria-label="Tutup menu"
        >
          <X size={18} />
        </button>

        {/* Brand */}
        <div className="px-5 pt-6 pb-5 shrink-0">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="Logo SMPN 1 Sumber Jaya"
              width={40}
              height={40}
              className="h-10 w-auto object-contain shrink-0"
            />
            <div className="min-w-0">
              <p className="font-display text-white text-[14.5px] font-semibold leading-tight truncate">
                SMPN 1 Sumber Jaya
              </p>
              <p className="text-[10px] text-gold/80 font-bold tracking-[0.12em] uppercase mt-0.5">
                Admin Panel
              </p>
            </div>
          </div>
          <div className="mt-5 h-px bg-white/10" />
        </div>

        {/* Navigation */}
        <AdminNav onNavigate={() => setIsOpen(false)} />

        {/* Sign out */}
        <div className="px-3 pb-5 pt-2 border-t border-white/10 shrink-0 mt-auto">
          <form action={signOut}>
            <button
              type="submit"
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-[13px] font-semibold text-white/40 hover:text-white/70 hover:bg-white/8 transition-all duration-200"
            >
              <LogOut size={15} />
              Keluar
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-auto">
        <div className="p-4 sm:p-6 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
