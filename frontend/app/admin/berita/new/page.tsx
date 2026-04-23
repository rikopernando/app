import { createNews } from "../../actions";
import { NewsForm } from "../NewsForm";

export default function NewBeritaPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl text-ink mb-8">Tambah Berita</h1>
      <NewsForm action={createNews} />
    </div>
  );
}
