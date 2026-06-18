![CI](https://github.com/AURENTYR/AURENTYR.github.io/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/AURENTYR/AURENTYR.github.io/actions/workflows/jekyll-gh-pages.yml/badge.svg)

# Aurentyr Website

Official GitHub Pages site for Aurentyr — built with React, TypeScript, and Vite.

## Stack

| Layer      | Choice                        |
| ---------- | ----------------------------- |
| Framework  | React 18                      |
| Language   | TypeScript (strict)           |
| Build tool | Vite 5                        |
| Routing    | React Router v6               |
| Styling    | CSS Modules + design tokens   |
| Linting    | ESLint + Stylelint + Prettier |
| CI/CD      | GitHub Actions → GitHub Pages |

## Project structure

```
src/
├── components/
│   ├── Button/         Button.tsx + Button.module.css
│   ├── Footer/         Footer.tsx + Footer.module.css
│   ├── Layout/         Layout.tsx (Outlet wrapper)
│   ├── Nav/            Nav.tsx + Nav.module.css
│   └── PageShell/      PageShell.tsx + PageShell.module.css
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── Contact/
│   └── NotFound/
├── styles/
│   ├── tokens.css      Design tokens (colors, type, spacing)
│   └── reset.css       Modern CSS reset
├── App.tsx             Router + route definitions
├── index.css           Global styles (imports tokens + reset)
└── main.tsx            Entry point
public/
├── 404.html            GitHub Pages SPA redirect
└── favicon.svg
```

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev          # start dev server at localhost:5173
npm run build        # production build → dist/
npm run preview      # preview production build locally
npm run typecheck    # TypeScript check
npm run lint         # ESLint
npm run lint:css     # Stylelint
npm run format       # Prettier (write)
npm run format:check # Prettier (check only, used in CI)
```

## Design system

All visual values live in `src/styles/tokens.css` as CSS custom properties. Dark mode is handled automatically via `prefers-color-scheme: dark`. Component styles use CSS Modules — never hardcode color or spacing values; always reference a token.
