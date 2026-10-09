# Dusty website

The marketing site for [getdusty.co.uk](https://getdusty.co.uk): Astro + Tailwind, a static build hosted on GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Every push to `main` deploys automatically (`.github/workflows/deploy.yml`).

## Where things are

| What | Where |
|---|---|
| Links (waitlist forms, WhatsApp, store links), contact details, stats | `src/data/site.ts` |
| The page | `src/pages/index.astro` |
| Brand colours and font (copied from the app's `lib/tokens.js`) | `src/styles/global.css` |
| Logo, favicons, social preview image, `CNAME` | `public/` |

When the app is live, put the App Store and Google Play URLs in `src/data/site.ts`. The "coming soon" badges turn into download links on their own.

## Domain and DNS

The DNS lives at IONOS, which also runs our email. **Don't touch the MX, SPF (`TXT v=spf1`), `_dmarc` or `autodiscover` records**, or `info@getdusty.co.uk` will stop working.

The website only needs these records:

| Host | Type | Value |
|---|---|---|
| `@` | A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| `www` | CNAME | `jesboms.github.io` |
| `_github-pages-challenge-jesboms` | TXT | the code from GitHub → Settings → Pages → Verified domains |
