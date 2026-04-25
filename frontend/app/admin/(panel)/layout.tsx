import { signOut } from "@/app/admin/actions";
import { AdminShell } from "@/app/admin/AdminShell";

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell signOut={signOut}>{children}</AdminShell>;
}
