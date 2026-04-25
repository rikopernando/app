import Image from "next/image";
import { LogOut } from "lucide-react";
import { signOut } from "@/app/admin/actions";
import { AdminNav } from "@/app/admin/AdminNav";

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-100 flex">
      <aside className="w-64 shrink-0 bg-navy flex flex-col">
        {/* Brand */}
        <div className="px-5 pt-6 pb-5">
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
        <AdminNav />

        {/* Sign out */}
        <div className="px-3 pb-5 pt-2 border-t border-white/10">
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

      <main className="flex-1 overflow-auto">
        <div className="p-8 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
