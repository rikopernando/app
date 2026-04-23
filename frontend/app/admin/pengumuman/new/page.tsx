import { createPengumuman } from "../../actions";
import { PengumumanForm } from "../PengumumanForm";

export default function NewPengumumanPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl text-ink mb-8">Tambah Pengumuman</h1>
      <PengumumanForm action={createPengumuman} />
    </div>
  );
}
