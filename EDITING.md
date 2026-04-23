# Editing the Lovify Website

**TL;DR:** 99% of edits happen in one file: [`src/content/site.ts`](src/content/site.ts).
Change a string, save, the page hot-reloads in the browser.

---

## Running the site locally

```bash
npm run dev
```

Open http://localhost:3000. Every file save auto-refreshes the page.

---

## Where to edit what

### Text and images → `src/content/site.ts`

This is the single source of truth. It is organized by section in the same
order the page renders:

| Section on page          | Key in `site.ts`       |
| ------------------------ | ---------------------- |
| Browser tab title + meta | `site.brand`           |
| Nav bar                  | `site.nav` + `site.brand.name` |
| Hero (top of page)       | `site.hero`            |
| Phone feature tour       | `site.phoneShowcase`   |
| "Ready When You Are" cards | `site.readyShowcase` |
| Swiper carousel          | `site.musicShowcase`   |
| 2×2 grid                 | `site.designedFor`     |
| Image mosaic             | `site.trusted`         |
| Review cards scroller    | `site.reviews`         |
| Final banner + CTA       | `site.readyBanner`     |
| Footer                   | `site.footer`          |

### Global CTA button

`site.cta` controls the "Download App" button text + link everywhere.

### Brand colors

Edit [`src/app/globals.css`](src/app/globals.css). Look for the
`@theme inline { ... }` block at the top — change the hex values and every
component that uses them updates automatically.

```css
--color-coral:    #FF6B6B;   /* primary accent */
--color-purple:   #6C4BEF;
--color-text:     #2D2040;   /* body copy */
--color-background: #FFFBF7; /* page bg */
```

### Brand font

Currently Archivo. To swap, edit [`src/app/layout.tsx`](src/app/layout.tsx)
and import a different font from `next/font/google`.

---

## Adding your own images

1. Drop the image into `public/assets/brand/` (or anywhere under `public/`).
2. Reference it in `site.ts` with a leading slash — no `public/` prefix:

```ts
hero: {
  backgroundImage: "/assets/brand/my-new-hero.jpg",
  // ...
}
```

Supported formats: `.jpg`, `.png`, `.webp`, `.avif`, `.svg`.
For best performance, use `.webp` or `.avif` for photos.

**Tip:** to use a remote URL (e.g. Unsplash), you can paste the full URL
directly. Remote images already work — no config needed.

### Recommended image sizes

| Where                      | Aspect           | Min size         |
| -------------------------- | ---------------- | ---------------- |
| Hero background            | landscape 16:9   | 2400 × 1350 px   |
| Ready Showcase cards       | landscape 3:2    | 1600 × 1067 px   |
| Music Showcase slides      | landscape 7.7:5  | 1200 × 780 px    |
| Designed For grid          | portrait 2:3     | 800 × 1200 px    |
| Trusted mosaic             | mixed            | 600 × 800 px     |
| Ready Banner               | wide 1760 × 600  | 1760 × 600 px    |

---

## Replacing the logo

Drop `lovify-logo.png` (or any name you pick) into `public/` and set:

```ts
brand: { logo: "/your-logo.png", ... }
```

It shows up in the footer and is used for the nav text label
(`site.brand.name`).

---

## Phone showcase — the scrolling feature tour

The four-step scroll-pinned section has tight coupling between copy,
animations, and floating decorative images. In `site.ts` you can edit the
titles + descriptions for each step in `site.phoneShowcase`. For the phone
screen mockups and floating sticker PNGs, edit directly in
[`src/components/sections/PhoneShowcase.tsx`](src/components/sections/PhoneShowcase.tsx)
— search for `mock-1.png`, `mock-2.png`, etc.

The phone screen images live in `public/assets/phone-case/`.

---

## Adding or removing a section

Edit [`src/app/page.tsx`](src/app/page.tsx) — it's just a list of imports.
Reorder the JSX tags to reorder sections, delete a line to remove one.

---

## Deploying

The site is configured for Vercel. Push to `main` on GitHub and it deploys
automatically (once connected to Vercel). Or run:

```bash
npx vercel
```

---

## When in doubt

- Ask Claude Code to "edit the hero headline to X" and it will jump straight
  to the right place.
- Every editable string is in `site.ts` with a comment block above it saying
  what section it controls.
