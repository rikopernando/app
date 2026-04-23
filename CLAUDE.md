# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

School website for **SMP Negeri 1 Sumber Jaya** (a public junior high school in West Lampung, Indonesia). The site displays school info, news (berita), announcements (pengumuman), and achievements (prestasi).

Full-stack Next.js 15 app. All content is stored in **Supabase (PostgreSQL)** and managed through a protected `/admin` panel.

## Commands

### Frontend (`/frontend`)

```bash
yarn install          # Install dependencies
yarn dev              # Dev server on port 3000
yarn build            # Production build
yarn prod             # Start production server on port 3000
yarn lint             # Run ESLint
```

### Environment variables (`/frontend/.env.local`)

```
NEXT_PUBLIC_SUPABASE_URL=<supabase project URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase anon key>
```

## Architecture

### App Router (`app/`)

- Public pages: `berita/`, `berita/[slug]/`, `pengumuman/`, `pengumuman/[slug]/`, `prestasi/`, and the home page.
- Admin panel: `admin/` — protected by Supabase Auth via `middleware.ts`. Login at `/admin/login`.
- All pages use `export const dynamic = "force-dynamic"` — server-rendered on demand, no static prerendering.

### Data layer

- **`lib/data.ts`**: Async functions (`getNews`, `getNewsBySlug`, `getPengumuman`, `getPengumumanBySlug`, `getAchievements`) that query Supabase.
- **`lib/supabase/client.ts`**: Browser Supabase client (for Client Components / login form).
- **`lib/supabase/server.ts`**: Two exports — `createPublicClient()` (no cookies, safe at build time) for data reads; `createClient()` (cookie-based SSR) for auth-aware Server Components and Actions.
- **`lib/types.ts`**: Shared TypeScript interfaces — `NewsArticle`, `Pengumuman`, `Achievement`.

### Admin panel

- **`app/admin/actions.ts`**: Server Actions for all CRUD operations (create/update/delete for news, pengumuman, and achievements). Also handles sign-in and sign-out.
- **`middleware.ts`**: Redirects unauthenticated users away from `/admin/*` to `/admin/login`.
- Forms are Client Components (e.g., `NewsForm.tsx`, `PengumumanForm.tsx`, `PrestasiForm.tsx`) that call Server Actions.

### Database (Supabase)

Tables: `news_articles`, `pengumuman`, `achievements`.

RLS policies: public `SELECT` allowed for all; `INSERT/UPDATE/DELETE` requires `authenticated` role.

Run `supabase_setup.sql` (repo root) in the Supabase SQL Editor to create tables, enable RLS, and seed initial data.

### Other

- **Site config** (`lib/site.ts`): School name, contact info, NPSN, and canonical URL.
- **JSON-LD** (`lib/json-ld.ts`): Structured data helpers for SEO.
- **Components** (`components/sections/`): `Navbar`, `Hero`, `Footer`, `Stats`, `About`, `NewsPreview`, `AchievementsPreview`, etc. `NewsPreview` and `AchievementsPreview` are async Server Components that fetch their own data.
- Absolute imports use the `@/*` alias (maps to `frontend/`).
- ESLint errors are suppressed during builds; TypeScript errors are not.
- Remote images allowed from `images.pexels.com` and `customer-assets.emergentagent.com` (configured in `next.config.js`).
