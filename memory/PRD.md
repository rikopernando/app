# PRD — SMP Negeri 1 Sumber Jaya · Landing Page

## Original Problem Statement
> Build me a landing page for school website

## User Choices (2026-04-21)
- **School type**: Junior High School (SMP)
- **School name**: SMP N 1 Sumber Jaya (SMP Negeri 1 Sumber Jaya, Lampung Barat, Indonesia)
- **Tagline**: Agent-generated ("Menumbuhkan generasi yang cerdas, berakhlak, dan berdaya saing.")
- **Sections required**: Hero, About, Visi Misi, Stats, Programs, Footer
- **Type**: Landing page only (no backend, static)
- **Design**: Warm tones (implemented as "Organic & Earthy" — terracotta + cream + forest green)
- **Language**: Indonesian (Bahasa Indonesia)

## Architecture
- **Stack**: React (CRA) + Tailwind CSS + lucide-react icons — **frontend only**, no backend, no database
- **Design tokens**: Custom Tailwind palette (`clay`, `terra`, `forest`, `sand`, `ink`); Playfair Display (headings) + Manrope (body)
- **Components**: `/app/frontend/src/components/sections/` → Navbar, Hero, About, VisiMisi, Stats, Programs, Footer
- **Entry**: `/app/frontend/src/App.js` composes `<Landing />` under a single `/` route

## User Personas
- **Orang tua calon siswa** (prospective parents) evaluating a public junior high in Sumber Jaya
- **Calon siswa** (prospective students) getting first impression of school culture
- **Alumni & komunitas** (alumni & community) looking up school info and contact

## Core Requirements (Static)
- Clear hero with school identity, accreditation (B), NPSN (10803558), and CTAs
- About section with authentic school data (Kepala Sekolah, Kurikulum, etc.)
- Vision & mission copy in Indonesian
- Verifiable school statistics (634 siswa, 46 guru, 15 ruang kelas, 21 rombel)
- Programs/extracurricular overview
- Complete contact footer (address, phone, email, hours, socials)

## What's Been Implemented (2026-04-21)
- ✅ Sticky glassmorphism navbar + mobile hamburger menu
- ✅ Hero with background image, animated slow-zoom, gradient overlay, headline with italic accent, two CTAs, 4-metric stats strip
- ✅ About section with editorial image, floating accreditation card, dot-grid decoration, 4 info badges
- ✅ Visi & Misi section (dark theme) with large background wordmark, Visi card + Misi list (5 items)
- ✅ Stats section with IntersectionObserver-triggered count-up animation on 6 cards (featured terra card)
- ✅ Programs bento grid: 1 featured dark card (Kurikulum Merdeka) + 5 supporting cards
- ✅ Footer with giant wordmark CTA, contact info, social links, nav links, copyright
- ✅ Warm earthy palette end-to-end, Playfair Display + Manrope fonts loaded
- ✅ Full `data-testid` coverage on all interactive + informational elements
- ✅ Testing agent: 100% frontend pass, zero console errors

## Prioritized Backlog
### P1 — High value, low effort
- [ ] Real school photo gallery (currently using stock Pexels images)
- [ ] Lazy-load hero/program images for faster first paint
- [ ] Host images locally instead of Pexels CDN for production resilience

### P2 — Enhancements
- [ ] News / Berita section (pengumuman sekolah)
- [ ] Faculty / Guru highlight section with photos
- [ ] PPDB (Penerimaan Peserta Didik Baru) enrollment info & timeline
- [ ] Working contact form with backend (MongoDB + email) — currently only static contact info
- [ ] Embedded Google Maps for school location
- [ ] Image carousel showing school facilities
- [ ] Multi-language toggle (ID / EN)
- [ ] School achievements (Prestasi) showcase

### P0 — None outstanding
(No blocking issues — MVP is complete and verified.)

## Next Tasks (if user continues)
1. Replace stock imagery with real school photos
2. Add PPDB / enrollment section (highly relevant for parents visiting in admission season)
3. Add working contact form backed by MongoDB for parent inquiries
