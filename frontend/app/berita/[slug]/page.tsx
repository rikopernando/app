import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getNews, getNewsBySlug } from "@/lib/data";
import { newsArticleSchema, breadcrumbSchema, ldJson } from "@/lib/json-ld";
import { SITE } from "@/lib/site";

export const revalidate = 60;
export const dynamicParams = true;

const CATEGORY_COLORS: Record<string, string> = {
  Pengumuman: "bg-navy-50 text-navy-700",
  Kegiatan: "bg-mint-50 text-mint-600",
  Akademik: "bg-sky-50 text-sky-600",
  "Info Sekolah": "bg-gold-50 text-gold-600",
};

export async function generateStaticParams() {
  try {
    const news = await getNews();
    return news.map((n) => ({ slug: n.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) return { title: "Berita tidak ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.image }],
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, allNews] = await Promise.all([
    getNewsBySlug(slug),
    getNews(),
  ]);
  if (!article) notFound();

  const url = SITE.url.replace(/\/$/, "");
  const breadcrumbs = breadcrumbSchema([
    { name: "Beranda", url: `${url}/` },
    { name: "Berita", url: `${url}/berita` },
    { name: article.title, url: `${url}/berita/${article.slug}` },
  ]);

  const related = allNews.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(newsArticleSchema(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(breadcrumbs) }}
      />
      <Navbar />
      <main data-testid="berita-detail-page" className="min-h-screen bg-cream-50 pt-32 pb-20 lg:pt-36">
        <article className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <Link
            href="/berita"
            data-testid="back-to-berita"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-soft hover:text-navy transition-colors"
          >
            <ArrowLeft size={15} /> Kembali ke Berita
          </Link>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${CATEGORY_COLORS[article.category]} text-[10.5px] tracking-[0.16em] uppercase font-bold`}>
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-[13px] text-ink-soft">
              <Calendar size={14} /> {article.dateLabel}
            </div>
            {article.author && (
              <div className="flex items-center gap-2 text-[13px] text-ink-soft">
                <User size={14} /> {article.author}
              </div>
            )}
          </div>

          <h1
            data-testid="berita-detail-title"
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance"
          >
            {article.title}
          </h1>

          <p className="mt-6 text-[18px] lg:text-[19px] leading-relaxed text-ink-soft text-pretty">
            {article.excerpt}
          </p>

          <div className="relative mt-10 aspect-[16/9] rounded-3xl overflow-hidden bg-cream-200 shadow-soft-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-10 prose prose-lg max-w-none" data-testid="berita-detail-body">
            {article.body.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.75] text-ink-soft mb-5">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between pt-8 border-t border-cream-200">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink-soft hover:text-navy transition-colors"
            >
              <ArrowLeft size={16} /> Semua Berita
            </Link>
            <button
              type="button"
              data-testid="share-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-cream-50 text-[13px] font-semibold hover:bg-navy transition-colors duration-400"
            >
              <Share2 size={14} /> Bagikan
            </button>
          </div>
        </article>

        {/* Related */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mt-24">
          <h2 className="font-display text-3xl text-ink mb-8">Berita Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((n) => (
              <Link
                key={n.slug}
                href={`/berita/${n.slug}`}
                className="group rounded-3xl overflow-hidden bg-white border border-cream-200 hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1000ms]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11.5px] text-ink-faint font-semibold">{n.dateLabel}</p>
                  <h3 className="font-display mt-2 text-lg leading-[1.2] text-ink group-hover:text-navy transition-colors">
                    {n.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
