# S.S. Sodhi Interiors

Luxury interior design lead-gen website. Next.js 15 + React 19 + TypeScript + Tailwind, with an Express/MongoDB backend for the consultation form.

## Structure

```
src/
  app/                # Next.js app router (pages, layout, globals.css)
  components/
    layout/           # Header, Footer, Nav (next task)
    sections/         # Hero, About, Services, Gallery, etc. (next tasks)
    ui/                # Cursor, Loader, ScrollProgress, MouseGlow, shared UI
    three/             # React Three Fiber scenes
    providers/          # SmoothScrollProvider, Providers wrapper
  lib/                 # utils, gsap setup, site-config
  hooks/
  types/
server/
  index.js            # Express entry
  config/             # db.js, cloudinary.js
  routes/ controllers/ models/ utils/   # contact form API (next task)
public/images/         # hero, gallery, projects, before-after, brands, placeholders
```

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Backend:

```bash
cd server
npm install express mongoose nodemailer cloudinary cors dotenv multer express-rate-limit helmet
cp .env.example .env
node index.js
```

## Theme

- Colors: `obsidian` (black scale), `gold` (luxury accent), `ivory` (off-white).
- Fonts: `Cormorant Garamond` (display/serif) via `--font-display`, `Inter` (sans) via `--font-sans`.
- Utilities: `.glass`, `.glass-light`, `.text-gold-gradient`, `.container-luxury`, `.section-padding`, `.shimmer`.
- Animations: `marquee`, `float`, `shimmer`, `fade-up`, `reveal` (Tailwind keyframes) + GSAP/ScrollTrigger + Framer Motion + Lenis smooth scroll, all wired in `Providers`.

## Image replacement

All imagery is sourced from modular components in `components/sections/*` and `public/images/*` subfolders — swap files in place or update `src` props; no logic changes needed.

## Status

Task 1 complete: project scaffold, folder structure, Tailwind theme, fonts, global animation/scroll infra, Express/MongoDB/Cloudinary config stubs. Hero and all content sections are built in subsequent tasks.
