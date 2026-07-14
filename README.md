# Budget Matter

A modern React + TypeScript + Vite + Tailwind CSS migration of the original Budget Matter educational website. The application preserves all original page content and legacy `.html` URLs while replacing the Bootstrap/jQuery runtime with a responsive, accessible React shell.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm test
npm run test:coverage
npm run lint
npm run build
npm start
```

## Content migration

The original pages are retained in `legacy-html/`. `npm run generate:content` extracts their page content into typed React data, rewrites internal links, and copies referenced assets into `public/assets/`. This makes the migration reproducible while preserving all 50 original routes.

## Google AI Studio / Cloud Run

The project uses the default Google AI Studio web-app architecture: React on the client and a Node.js server for production. `npm run build` creates `dist/`; `npm start` serves it on `0.0.0.0` using the `PORT` environment variable supplied by Cloud Run.

AI Studio currently supports exporting generated apps to GitHub or ZIP, but does not import an existing local app into Build mode. To continue in AI Studio, create a Build-mode app and add this repository/ZIP contents to its code workspace when import support is available; today, deploy this repository directly to Cloud Run or another Node-compatible host.

The included `project.toml` explicitly selects the Node.js runtime. This is required because the preserved legacy archive contains a historical PHP contact handler that can otherwise cause automatic buildpack detection to select PHP.
