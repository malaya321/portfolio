# Malaya Ranjan Dalabehera — Portfolio

A modern, dark-themed personal portfolio for a React Native Developer, built with **Next.js (App Router)** and **Tailwind CSS**. Fully responsive and ready to deploy to Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

## Editing your content

Everything you'll want to change lives in **one file**:

```
data/portfolio.ts
```

It controls your name, role, about text, skills, projects, and contact links.

### 1. Contact links (important)

In `data/portfolio.ts`, find the `profile` object and replace the placeholders marked `TODO`:

```ts
email: "maharana@suyogindia.com",          // your email
linkedin: "https://www.linkedin.com/in/your-handle", // your LinkedIn
github: "https://github.com/your-handle",  // optional — or delete the line
```

### 2. Project store links

Each project has `playStore` and `appStore` fields set to `"#"` (placeholder). Replace
`"#"` with the real store URLs. Buttons with a `"#"` link render greyed-out and disabled
until you add a real URL, so nothing looks broken in the meantime.

```ts
{
  name: "Book Odisha",
  playStore: "https://play.google.com/store/apps/details?id=...",
  appStore: "https://apps.apple.com/app/id...",
}
```

If a project has no app-store presence (e.g. the web-only "Ship App"), it uses a `web`
field instead.

## Project structure

```
app/
  layout.tsx      # root layout, fonts, SEO metadata
  page.tsx        # assembles all sections
  globals.css     # base styles + theme helpers
components/
  Navbar, Hero, About, Skills, Projects, Contact, Footer
  StoreBadge, SectionHeading, icons
data/
  portfolio.ts    # << edit your content here
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at https://vercel.com/new.
3. Vercel auto-detects Next.js — just click **Deploy**. No configuration needed.

## Tech

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript

All icons are inline SVG, so there are no extra runtime dependencies.
