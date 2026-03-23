# JVV Digital Website

A founder-led site for AI visibility, technical SEO, and strategic website builds.

## What is included

- Home page
- Services page
- About page
- Free review page
- GitHub Pages deployment workflow
- SEO and AEO friendly metadata, schema, sitemap, and robots file

## Local development

```bash
npm install
npm run dev
```

## Before launch

Replace the placeholder Formspree links in:

- `src/components/QuickLeadForm.astro`
- `src/components/DetailedReviewForm.astro`

Those forms are set up for email delivery through a static form endpoint. GitHub Pages does not send email on its own, so this is the cleanest static-site option.

Also replace the contact email in:

- `src/components/Footer.astro`

## Notes

- The site uses the JVV blue and orange palette from the logo.
- The layout is built to stay fast and clean on mobile.
- The copy is intentionally human and direct.
