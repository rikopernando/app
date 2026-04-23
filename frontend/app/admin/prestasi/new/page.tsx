import { createPrestasi } from "../../actions";
import { PrestasiForm } from "../PrestasiForm";

export default function NewPrestasiPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl text-ink mb-8">Tambah Prestasi</h1>
      <PrestasiForm action={createPrestasi} />
    </div>
  );
}
