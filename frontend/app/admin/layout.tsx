import Link from "next/link";
import { Newspaper, Megaphone, Trophy, LayoutDashboard, LogOut } from "lucide-react";
import { signOut } from "./actions";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/berita", label: "Berita", icon: Newspaper },
  { href: "/admin/pengumuman", label: "Pengumuman", icon: Megaphone },
  { href: "/admin/prestasi", label: "Prestasi", icon: Trophy },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-50 flex">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 bg-white border-r border-cream-200 flex flex-col">
        <div className="p-6 border-b border-cream-200">
          <p className="font-display text-lg text-ink leading-tight">Admin Panel</p>
          <p className="text-[11.5px] text-ink-faint mt-0.5">SMPN 1 Sumber Jaya</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-ink-soft hover:text-ink hover:bg-cream-50 transition-colors"
            >
              <Icon size={16} /> {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-cream-200">
          <form action={signOut}>
            <button
              type="submit"
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-ink-soft hover:text-navy hover:bg-navy-50 transition-colors"
            >
              <LogOut size={16} /> Keluar
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
