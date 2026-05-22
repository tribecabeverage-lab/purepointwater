# PurePoint Water Solutions Website

A Next.js 13 static site for PurePoint Water Solutions, serving Fairfield County, CT and Westchester County, NY.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run build
```

Static files are generated into the `out/` directory.

## Deployment

This site is configured for static export (`output: 'export'` in `next.config.js`) and deploys to Netlify automatically when changes are pushed to the `main` branch.

Build settings (already wired up in `netlify.toml`):
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 20

## Contact form

The contact form posts to an external lead-capture endpoint (Google Cloud Function at `us-central1-sb-services-13a91.cloudfunctions.net/submitLead`) using the client ID `sb_564b20225c466bf596dc86f72c56b993`. No backend is required.
