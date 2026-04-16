# JVV Digital Website

A founder-led site built for AI visibility, technical SEO, and strategic website builds. This site is built using **Astro** and **Tailwind CSS**, optimized for performance and machine-readability.

## What is included

- Home page
- Services page
- About page
- Free review page
- GitHub Pages deployment workflow
- SEO and AEO friendly metadata, specialized Schema markup, sitemap, and robots file

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add your Formspree endpoint:
   ```bash
   PUBLIC_FORMSPREE_ENDPOINT=[https://formspree.io/f/your_id_here](https://formspree.io/f/your_id_here)
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

## Production Configuration

This site uses environment variables to keep sensitive endpoints (like Formspree) out of the public source code.

### GitHub Actions Deployment

To deploy via GitHub Pages, you must add your Formspree endpoint as a GitHub Secret:
1. Go to **Settings > Secrets and variables > Actions**.
2. Add a new repository secret named `PUBLIC_FORMSPREE_ENDPOINT`.
3. The GitHub Action will automatically inject this secret into the build process.

## Customization

- **Branding:** The site uses the JVV blue and orange palette defined in `tailwind.config.mjs`.
- **Contact Info:** Update the contact email in `src/components/Footer.astro`.
- **Schema:** Global identity and expertise metadata are managed in `src/layouts/Layout.astro`.

## Notes

- The layout is built with an "AI-First" approach, prioritizing structured data and speed.
- The site uses the Astro framework for static site generation (SSG) to ensure near-instant load times.