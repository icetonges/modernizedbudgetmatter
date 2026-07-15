# Budget Matter

Budget Matter is the production React, TypeScript, Vite, and Node application behind [budgetmatter.ai.studio](https://budgetmatter.ai.studio). It explains the federal budget process through maintained page data, interactive process maps, professional references, and project case studies.

## Local development

```bash
npm ci
npm run dev
```

Production verification:

```bash
npm run lint
npm test
npm run test:coverage
npm run build
npm start
```

## Source architecture

- `src/` contains the application, reusable visual components, tests, and maintained page data.
- `public/assets/` contains the images and publications referenced by the application.
- `server-app.mjs` serves the optimized Vite build and supports client-side deep links.
- `project.toml` selects the Node.js runtime used by Google Cloud Build and Cloud Run.

The original static HTML, Bootstrap/JQuery runtime, Jekyll build, duplicate asset trees, and build-time HTML extraction layer have been retired. The migrated content is maintained directly in `src/data/sitePages.ts`; clean installs and production builds no longer depend on the historical website archive.

## Deployment

Cloud Run builds the repository with Node.js, runs `npm run build`, and starts `server.mjs` on the platform-provided `PORT`. The custom Google AI Studio domain routes to the latest healthy Cloud Run revision.
