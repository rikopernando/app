# PRD — SMP Negeri 1 Sumber Jaya · Landing Page

## Original Problem Statement
> Build me a landing page for school website

## User Choices
- **School type**: Junior High School (SMP)
- **School name**: SMP N 1 Sumber Jaya (SMP Negeri 1 Sumber Jaya, Lampung Barat, Indonesia)
- **Language**: Indonesian (Bahasa Indonesia)
- **Type**: Landing page only (no backend, static)

## Design Evolution
- **v1 (2026-04-21)**: "Organic & Earthy" — terracotta + cream + forest, Playfair Display + Manrope
- **v2 (2026-04-22)**: "Soft & Friendly" — cream + coral + sky + mint + honey, Fraunces + Plus Jakarta Sans
  → chosen to feel more modern, welcoming, and appropriate for SMP students & their parents

## Architecture
- **Stack**: React (CRA) + Tailwind CSS + lucide-react icons + Sonner (toasts) — **frontend only**
- **Design tokens (v2)**: `cream` (base), `coral` (primary), `sky` (secondary), `mint` + `honey` (accents), `ink` (warm navy)
- **Fonts**: Fraunces (variable serif, SOFT + WONK axes) headings + Plus Jakarta Sans body
- **Components**: `/app/frontend/src/components/sections/` → Navbar, Hero, About, Stats, VisiMisi, Programs, PPDB, News, Achievements, Footer
- **Entry**: `/app/frontend/src/App.js` composes `<Landing />` under `/` route + mounts Sonner `<Toaster>`

## User Personas
- **Orang tua calon siswa** — evaluating a public junior high, wants clarity on PPDB, akreditasi, prestasi
- **Calon siswa SMP** — first impression of school culture & extracurricular vibe
- **Alumni & komunitas** — school news, achievements, contact info

## What's Been Implemented
### 2026-04-21 (v1)
- 7 sections, warm earthy palette, verified 100% by testing agent
### 2026-04-22 (v2 — redesign + 3 new sections)
- ✅ Full redesign: soft friendly modern palette, Fraunces+PJS fonts, rounded-3xl cards, soft shadows, decorative blobs
- ✅ Navbar refreshed with pill nav + Daftar PPDB CTA
- ✅ Hero redesigned as light soft layout with image collage + 3 floating cards (46 Guru, 12+ Ekstrakurikuler, Sejak 1985)
- ✅ About + Stats + Visi Misi + Programs restyled with soft palette
- ✅ **NEW — PPDB (#ppdb)**: dark navy feature section with 4-step timeline (10 Mei → 10 Jun), 6-item syarat checklist, coral download CTA that triggers Sonner success toast
- ✅ **NEW — Berita/News (#berita)**: 1 featured article (PPDB 2026/2027) + 3 side articles (Hari Kartini, Workshop Kurikulum, Ramadhan)
- ✅ **NEW — Galeri Prestasi (#prestasi)**: bento grid with featured Juara 1 card + 4 achievements + tally strip (47 penghargaan · 18 Akademik / 14 Olahraga / 10 Seni / 5 Karakter)
- ✅ Footer updated with new palette + new Jelajahi links
- ✅ Testing agent: **100% pass**, zero console errors, Sonner toast verified working

## Prioritized Backlog
### P1
- [ ] Replace Pexels stock photos with real school photos
- [ ] Serve actual PPDB formulir PDF (currently toast-only placeholder)
- [ ] Lazy-load hero/program/news images

### P2
- [ ] Faculty / Guru highlight section with photos
- [ ] Embedded Google Maps of school location
- [ ] Working contact/enquiry form with backend (MongoDB)
- [ ] News detail pages (currently "Baca selengkapnya" is anchor-only)
- [ ] Achievements detail modal / expanded view
- [ ] Multi-language toggle (ID/EN)

### P0
(No blocking issues.)

## Next Tasks
1. Upload real school photos + real PPDB PDF
2. Add dedicated Kepala Sekolah / Guru profile section
3. Optional: activate working contact form with backend to capture parent enquiries
