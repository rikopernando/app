import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Megaphone } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PENGUMUMAN, getPengumumanBySlug } from "@/lib/data";
import { announcementSchema, breadcrumbSchema, ldJson } from "@/lib/json-ld";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return PENGUMUMAN.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPengumumanBySlug(slug);
  if (!p) return { title: "Pengumuman tidak ditemukan" };
  return {
    title: p.title,
    description: p.summary,
    openGraph: {
      title: p.title,
      description: p.summary,
      type: "article",
      publishedTime: p.date,
    },
    twitter: { card: "summary", title: p.title, description: p.summary },
  };
}

const URGENCY_COLOR: Record<string, string> = {
  Penting: "bg-coral-50 text-coral-700",
  Segera: "bg-honey-50 text-honey-600",
  Umum: "bg-sky-50 text-sky-600",
};

export default async function PengumumanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPengumumanBySlug(slug);
  if (!p) notFound();

  const url = SITE.url.replace(/\/$/, "");
  const breadcrumbs = breadcrumbSchema([
    { name: "Beranda", url: `${url}/` },
    { name: "Pengumuman", url: `${url}/pengumuman` },
    { name: p.title, url: `${url}/pengumuman/${p.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(announcementSchema(p)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(breadcrumbs) }}
      />
      <Navbar />
      <main data-testid="pengumuman-detail-page" className="min-h-screen bg-cream-50 pt-32 pb-20 lg:pt-36">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <Link
            href="/pengumuman"
            data-testid="back-to-pengumuman"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink-soft hover:text-coral transition-colors"
          >
            <ArrowLeft size={15} /> Kembali ke Pengumuman
          </Link>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${URGENCY_COLOR[p.urgency]} text-[10.5px] tracking-[0.16em] uppercase font-bold`}>
              <Megaphone size={11} /> {p.urgency}
            </span>
            <div className="flex items-center gap-2 text-[13px] text-ink-soft">
              <Calendar size={14} /> {p.dateLabel}
            </div>
          </div>

          <h1
            data-testid="pengumuman-detail-title"
            className="font-display mt-6 text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] tracking-tight text-ink text-balance"
          >
            {p.title}
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft text-pretty">{p.summary}</p>

          <div className="mt-10 p-8 lg:p-10 rounded-3xl bg-white border border-cream-200 shadow-soft space-y-5" data-testid="pengumuman-detail-body">
            {p.body.map((par, i) => (
              <p key={i} className="text-[16px] leading-[1.7] text-ink-soft whitespace-pre-line">
                {par}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-cream-200">
            <Link
              href="/pengumuman"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink-soft hover:text-coral transition-colors"
            >
              <ArrowLeft size={16} /> Semua Pengumuman
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
