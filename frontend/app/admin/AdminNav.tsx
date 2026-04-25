"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Newspaper, Megaphone, Trophy } from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/berita", label: "Berita", icon: Newspaper, exact: false },
  { href: "/admin/pengumuman", label: "Pengumuman", icon: Megaphone, exact: false },
  { href: "/admin/prestasi", label: "Prestasi", icon: Trophy, exact: false },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-3 py-2 space-y-0.5">
      {NAV.map(({ href, label, icon: Icon, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-[13.5px] font-semibold transition-all duration-200 ${
              active
                ? "bg-white/15 text-white"
                : "text-white/55 hover:text-white/90 hover:bg-white/10"
            }`}
          >
            <Icon size={16} className={active ? "text-gold" : ""} />
            <span>{label}</span>
            {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold shrink-0" />}
          </Link>
        );
      })}
    </nav>
  );
}
