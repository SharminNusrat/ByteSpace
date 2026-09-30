# ByteSpace

An online course platform landing page, built from a Figma design.

**Live:** https://bytespace-flax-five.vercel.app

## Scope

| Page | Route |
|---|---|
| Landing page | `/` |
| Login | `/login` |
| Register | `/register` |

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router 7

## Running locally

Requires Node 20.19+ or 22.12+ (Vite 8). Developed on Node 22.

```bash
npm install
npm run dev       # http://localhost:5173
```

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Project structure

```
src/
├── main.jsx            entry point
├── App.jsx             routes
├── index.css           design tokens (colour, type scale)
├── data/               page content and layout data
├── components/         reused in two or more places
├── sections/           one file per landing page section
├── pages/              Home, Login, Register
└── lib/                shared style helpers

public/assets/
├── icons/              logo and category icons (SVG)
├── images/             photography (WebP)
├── shapes/             3D ornaments (PNG, transparent)
└── bg/                 blurred background gradients
```

## Notes

- Designed for a 1440px desktop frame; smaller screens use a responsive fallback, since the design has no tablet/mobile version.
- Login and Signup are frontend only (no backend).