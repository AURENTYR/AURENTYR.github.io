# AURENTYR Launch Runbook

Operational reference for deploying, verifying, and monitoring the AURENTYR website.

---

## Pre-launch checklist

Run through every item before cutting a production release.

### Code & build

- [ ] All implementation milestones (M1–M7) merged to `main`
- [ ] `npm run build` completes with zero errors and zero warnings
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes (ESLint max-warnings 0)
- [ ] `npm run lint:css` passes
- [ ] `npm run format:check` passes
- [ ] CI workflow green on latest `main` commit

### Content

- [ ] All page copy reviewed and approved
- [ ] No placeholder text ("Lorem ipsum", "TODO", "FIXME") in any page
- [ ] Contact form endpoint configured (replace the `setTimeout` stub in `src/pages/Contact/Contact.tsx`)
- [ ] `public/sitemap.xml` URLs match live domain
- [ ] `public/robots.txt` `Sitemap:` URL matches live domain
- [ ] Favicon renders correctly at 16×16, 32×32, 180×180

### SEO & meta

- [ ] `<title>` unique on every page
- [ ] `<meta name="description">` present and under 160 chars on every page
- [ ] Open Graph tags verified with [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Structured JSON-LD valid at [schema.org/SchemaValidator](https://validator.schema.org)
- [ ] `sitemap.xml` valid at [xml-sitemaps.com/validate-xml-sitemap](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

### Accessibility

- [ ] axe DevTools browser extension — zero violations on every page
- [ ] Keyboard navigation: Tab through every interactive element, confirm visible focus rings
- [ ] Skip link visible on first Tab keypress
- [ ] Screen reader smoke test: navigate headings on homepage with NVDA/VoiceOver
- [ ] Color contrast: all text passes WCAG 2.1 AA (≥4.5:1 normal, ≥3:1 large)

### Performance (Lighthouse — Chrome DevTools, incognito)

- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 90
- [ ] Run on: `/`, `/about`, `/services`, `/contact`

### Cross-browser

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari (iPhone, 375px)
- [ ] Chrome Android (375px)

---

## Deployment procedure

Deployments are fully automated via GitHub Actions on every push to `main`.

```
git push origin main
```

The `jekyll-gh-pages.yml` workflow will:

1. Install Node.js 20 and run `npm ci`
2. Run `npm run build` → outputs to `dist/`
3. Upload `dist/` as a Pages artifact
4. Deploy to GitHub Pages

Monitor progress at:
`https://github.com/AURENTYR/AURENTYR.github.io/actions`

Expected deploy time: **2–4 minutes** from push to live.

---

## Custom domain setup

> Skip if using the default `aurentyr.github.io` domain.

1. Purchase / configure your domain with your DNS provider
2. Add a `CNAME` file to `public/` containing only the domain:
   ```
   www.yourdomain.com
   ```
3. At your DNS provider, add:
   | Type | Name | Value |
   |---|---|---|
   | CNAME | www | aurentyr.github.io |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
4. In GitHub repo → Settings → Pages → Custom domain → enter your domain
5. Check **Enforce HTTPS** (available after DNS propagates, ~24h)
6. Update `sitemap.xml` and `robots.txt` with the new domain
7. Update the `og:url` in `index.html`

---

## Post-deploy smoke test

After every production deploy, verify these manually (or via the automated smoke test workflow):

| Check          | URL                    | Expected                                      |
| -------------- | ---------------------- | --------------------------------------------- |
| Homepage loads | `/`                    | 200, title = "AURENTYR"                       |
| About page     | `/about`               | 200, title = "About \| AURENTYR"              |
| Services page  | `/services`            | 200, title = "Services \| AURENTYR"           |
| Contact page   | `/contact`             | 200, title = "Contact \| AURENTYR"            |
| 404 page       | `/this-does-not-exist` | Shows 404 component (client-side)             |
| Sitemap        | `/sitemap.xml`         | 200, valid XML                                |
| Robots         | `/robots.txt`          | 200                                           |
| Favicon        | `/favicon.svg`         | 200                                           |
| Nav hamburger  | Mobile (375px)         | Opens/closes, focus trap works                |
| Contact form   | `/contact`             | Validates all fields, shows success on submit |

---

## Google Search Console setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://aurentyr.github.io`
3. Verify via **HTML tag** method:
   - Copy the `<meta name="google-site-verification" content="...">` tag
   - Add it to `index.html` inside `<head>`
   - Push to `main` and redeploy
   - Click Verify in Search Console
4. Submit sitemap: Sitemaps → `https://aurentyr.github.io/sitemap.xml` → Submit
5. Check Index Coverage report after 48–72 hours

---

## Uptime monitoring

Recommended: **UptimeRobot** (free tier — 5-minute checks, email alerts)

1. Sign up at [uptimerobot.com](https://uptimerobot.com)
2. Add monitor:
   - Monitor Type: HTTP(s)
   - Friendly Name: AURENTYR Website
   - URL: `https://aurentyr.github.io`
   - Monitoring Interval: 5 minutes
3. Add alert contact (your email)
4. Optional: Add a status page and link it from the footer

---

## Rollback procedure

GitHub Pages deploys are atomic. To roll back to the previous deploy:

```bash
# Find the last known-good commit
git log --oneline -10

# Reset main to that commit
git revert HEAD --no-edit
git push origin main
```

The revert push triggers a new deploy. The site is back at the previous state within ~3 minutes.

For a faster rollback during an incident: in GitHub repo → Actions → find the last successful deploy run → Re-run jobs.

---

## Incident response

| Severity | Definition                    | SLA         | Action                                      |
| -------- | ----------------------------- | ----------- | ------------------------------------------- |
| P0       | Site down / blank page        | 30 min      | Rollback immediately, investigate on branch |
| P1       | Key page broken / nav broken  | 2 hrs       | Hotfix branch → PR → merge                  |
| P2       | Visual regression / minor bug | Next sprint | File issue, prioritise in backlog           |

---

## Known limitations & backlog

- **Contact form**: Currently uses a `setTimeout` stub — wire up a real backend (Formspree, Netlify Forms, or a serverless function) before launch
- **Analytics**: No analytics configured — add Plausible or GoatCounter (privacy-friendly) if needed
- **OG image**: `/assets/images/og-home.png` referenced in meta but not yet created — add a 1200×630px image
- **Favicon variants**: Only SVG favicon present — generate PNG fallbacks (16px, 32px, 180px Apple touch icon) with [realfavicongenerator.net](https://realfavicongenerator.net)
