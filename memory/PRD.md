# PRD — SMP Negeri 1 Sumber Jaya · Landing Page + Next.js

## Original Problem Statement
> Build me a landing page for school website

## Evolution
- **v1 (2026-04-21)** CRA + earthy terracotta + Playfair/Manrope
- **v2 (2026-04-22)** CRA + soft friendly palette + Fraunces (serif)
- **v2.1 (2026-04-22)** CRA + Bricolage Grotesque (replace Fraunces)
- **v3 (2026-04-22)** **Next.js 15 + TypeScript** migration → SSR/SSG, SEO-ready

## Architecture (v3)
- **Stack**: Next.js 15 App Router + TypeScript + Tailwind CSS + Sonner toasts — frontend only
- **Rendering**: SSG for listing pages, static per-slug pages via `generateStaticParams`, per-page metadata via `generateMetadata`
- **Fonts**: loaded via `next/font/google` (Bricolage Grotesque + Plus Jakarta Sans) — no render-blocking
- **SEO**: per-page `<title>`, meta description, OpenGraph + Twitter cards with images, canonical URL, `sitemap.xml` (auto-generated, 13 URLs), `robots.txt`
- **Images**: Next `<Image>` with optimization + remote patterns for Pexels
- **TypeScript**: strict mode, `@/*` path alias, shared types in `lib/types.ts`

### File structure
```
/app/frontend/
├── app/
│   ├── layout.tsx              # Root layout + fonts + metadata + Toaster
│   ├── page.tsx                # Landing (/)
│   ├── globals.css
│   ├── sitemap.ts              # Dynamic sitemap (13 URLs)
│   ├── robots.ts               # robots.txt
│   ├── berita/
│   │   ├── page.tsx            # Berita listing
│   │   └── [slug]/page.tsx     # Berita detail (generateStaticParams + metadata)
│   ├── pengumuman/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── prestasi/
│       └── page.tsx            # Full achievements page
├── components/sections/        # 10 TSX components
├── lib/
│   ├── data.ts                 # NEWS (5), PENGUMUMAN (4), ACHIEVEMENTS (8)
│   ├── site.ts                 # Site constants
│   └── types.ts                # TS types
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### Routes
| Route | Type | SEO |
|-------|------|-----|
| `/` | SSG landing | og:website |
| `/berita` | SSG listing | og:website |
| `/berita/[slug]` | SSG per article | og:article + og:image + published_time + author |
| `/pengumuman` | SSG listing | og:website |
| `/pengumuman/[slug]` | SSG per item | og:article |
| `/prestasi` | SSG | og:website |
| `/sitemap.xml` | auto | — |
| `/robots.txt` | auto | — |

## Key Wins (v3)
- ✅ Per-page unique SEO tags (Google + WhatsApp/Facebook share previews)
- ✅ Content server-rendered (visible to bots without JS)
- ✅ 13-URL sitemap auto-generated from content
- ✅ Image optimization built-in via next/image
- ✅ Testing agent: **100% pass**, 0 console errors, all SEO checks verified via curl

## Prioritized Backlog
### P1
- [ ] Replace Pexels images with real school photos
- [ ] Real PPDB PDF served from `/public/ppdb/formulir-ppdb-2026.pdf`
- [ ] Prune legacy CRA dependencies (react-scripts, craco, react-router-dom) to shrink bundle
- [ ] Custom OG image at `/public/og-image.jpg` for better social previews

### P2
- [ ] CMS integration (e.g., Payload, Sanity, or Contentlayer) so school staff can post berita/pengumuman without deploy
- [ ] Search functionality on /berita & /pengumuman
- [ ] Category filter on /berita
- [ ] Pagination when berita > 12
- [ ] Related articles algorithm improvement
- [ ] ISR (Incremental Static Regeneration) once CMS is integrated
- [ ] JSON-LD structured data (Organization, EducationalOrganization, Article schema)
- [ ] Google Analytics / Plausible
- [ ] PPDB online form (MongoDB backend)

### P0
(No blocking issues.)

## Next Tasks
1. Replace images with real school photos + add real PPDB PDF
2. Add JSON-LD structured data for richer Google results
3. Set up a CMS so school staff can self-publish berita
