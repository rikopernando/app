import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { getNews } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  Pengumuman: "bg-coral-50 text-coral-700",
  Kegiatan: "bg-mint-50 text-mint-600",
  Akademik: "bg-sky-50 text-sky-600",
  "Info Sekolah": "bg-honey-50 text-honey-600",
};

export async function NewsPreview() {
  const news = await getNews();
  if (news.length === 0) return null;

  const featured = news.find((n) => n.featured) ?? news[0];
  const rest = news.filter((n) => n.slug !== featured.slug).slice(0, 3);

  return (
    <section id="berita" data-testid="news-section" className="relative py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-600 text-[11px] tracking-[0.18em] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-sky" /> Berita & Pengumuman
            </span>
            <h2
              data-testid="news-heading"
              className="font-display mt-6 text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] tracking-tight text-ink text-balance"
            >
              Cerita hangat{" "}
              <em className="not-italic font-semibold text-sky-600">dari sekolah kami.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col lg:items-end gap-4">
            <p className="text-[15.5px] leading-relaxed text-ink-soft max-w-md lg:text-right">
              Ikuti kegiatan, pengumuman, dan kabar terbaru seputar SMPN 1 Sumber Jaya.
            </p>
            <Link
              href="/berita"
              data-testid="news-view-all"
              className="inline-flex items-center gap-2 text-coral font-bold text-[13.5px] group"
            >
              Lihat semua berita
              <ArrowUpRight size={15} className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <Link
            href={`/berita/${featured.slug}`}
            data-testid="news-card-featured"
            className="lg:col-span-7 group relative rounded-[32px] overflow-hidden bg-white border border-cream-200 shadow-soft hover:shadow-soft-lg transition-all duration-500"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
              />
              <span className={`absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${CATEGORY_COLORS[featured.category]} text-[10.5px] tracking-[0.16em] uppercase font-bold`}>
                {featured.category}
              </span>
            </div>
            <div className="p-7 lg:p-9">
              <div className="flex items-center gap-2 text-[12px] text-ink-faint font-semibold">
                <Calendar size={13} /> {featured.dateLabel}
              </div>
              <h3 className="font-display mt-3 text-2xl lg:text-3xl leading-[1.2] text-ink text-balance">
                {featured.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-coral font-bold text-[13.5px] group/cta">
                Baca selengkapnya
                <ArrowUpRight size={15} className="transition-transform duration-400 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          <div className="lg:col-span-5 space-y-5 lg:space-y-6">
            {rest.map((n, i) => (
              <Link
                key={n.slug}
                href={`/berita/${n.slug}`}
                data-testid={`news-card-${i + 1}`}
                className="group flex gap-5 p-4 rounded-3xl bg-white border border-cream-200 hover:border-cream-300 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-400"
              >
                <div className="relative flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-[1.08] transition-transform duration-[1000ms] ease-out"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex px-2.5 py-1 rounded-full ${CATEGORY_COLORS[n.category]} text-[10px] tracking-[0.14em] uppercase font-bold`}>
                      {n.category}
                    </span>
                    <span className="text-[11.5px] text-ink-faint font-semibold">{n.dateLabel}</span>
                  </div>
                  <h4 className="font-display mt-2 text-[17px] leading-[1.25] text-ink text-pretty group-hover:text-coral transition-colors duration-300">
                    {n.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
