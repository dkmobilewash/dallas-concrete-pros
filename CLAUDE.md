# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Next.js marketing/lead-gen website for Dallas Concrete Pros, a concrete contractor serving Dallas, TX and surrounding suburbs. It's a programmatic-SEO site: most pages are generated at build time from structured data (services × cities) rather than hand-authored, to rank for searches like "concrete driveway installation Frisco TX".

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build (also statically generates all service/city combo pages)
npm run start    # serve the production build
npm run lint     # next lint (eslint-config-next, core-web-vitals + typescript rules)
```

There is no test suite configured in this repo.

## Architecture

### Programmatic page matrix

The site's core structure is a cross product of two data tables, both defined in `src/data/`:

- `src/data/services.ts` — 10 concrete services (driveways, patios, foundations, etc.), each with slug, SEO metadata, and an `icon` name (mapped to a `lucide-react` component).
- `src/data/cities.ts` — ~11 DFW-area cities, each with slug, landmarks, neighborhoods, and a written `intro` paragraph used directly in page copy.

These combine into three route levels under `src/app/`:

- `services/[slug]/page.tsx` — one page per service. Long-form content (overview, benefits, process steps, FAQs) per service lives in a `serviceContent` record hardcoded inside this file (`src/app/services/[slug]/page.tsx`), keyed by slug — it is NOT in `src/data/services.ts`. When adding a new service, both files need updates: the slug/metadata entry in `data/services.ts` and a matching `serviceContent[slug]` entry here.
- `service-areas/[slug]/page.tsx` — one page per city.
- `services/[slug]/[city]/page.tsx` — one page per service+city combination (service count × city count pages), built from templated copy that interpolates city/service fields — no per-combo hardcoded content.

All three use `generateStaticParams` (full static generation) and `generateMetadata` built via the shared `buildMetadata()` helper in `src/lib/metadata.ts`.

`src/app/sitemap.ts` enumerates this same matrix (services, cities, service×city combos, blog posts) to build `sitemap.xml` — if you add a service or city, the sitemap picks it up automatically, but anything hardcoded outside `src/data/` (like `serviceContent`) will not be.

### Content model

- Blog posts are `.mdx` files in `src/content/blog/`, read from the filesystem (not a CMS/DB) via `src/lib/blog.ts` (`getAllPosts` / `getPostBySlug`), parsed with `gray-matter` for frontmatter (`title`, `description`, `date`, `excerpt`) and rendered with `next-mdx-remote`.
- Site-wide facts (name, phone, address, geo coordinates, hours) live in `src/data/site.ts` — this is the single source of truth referenced throughout components and SEO schema, so business info changes should happen here, not by editing individual pages.
- Project photos are cataloged in `src/data/images.ts` as a flat array with a `category` tag (`driveway`, `patio`, `commercial`, etc.); `getImagesByCategory()` is how service pages pick a relevant hero image. Actual files live in `public/images/`.

### SEO/schema layer

`src/components/seo/` holds JSON-LD structured data components (`LocalBusinessSchema`, `ServiceSchema`, `FaqSchema`, `BreadcrumbSchema`, `BlogPostSchema`) that pages embed alongside their visible content. `buildMetadata()` (`src/lib/metadata.ts`) centralizes `<title>`/OG/Twitter metadata construction — use it for any new page's `generateMetadata` rather than building the `Metadata` object by hand.

### Contact form

`src/app/contact/ContactForm.tsx` (client component) posts to `src/app/api/contact/route.ts`, which sends the submission via Resend (`RESEND_API_KEY` env var required; falls back to a 500 if unset). Recipient/sender addresses are overridable via `CONTACT_EMAIL` / `FROM_EMAIL` env vars, otherwise default to `site.email` and Resend's sandbox sender.

### Styling

Tailwind CSS with a custom `brand` color palette (`brand-charcoal`, `brand-orange`, etc.) defined in `tailwind.config.ts` — use these tokens rather than arbitrary colors to stay consistent with the rest of the site. Path alias `@/*` maps to `src/*`.
