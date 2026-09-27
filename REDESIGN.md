# Portfolio redesign

A charcoal-and-mint redesign with a portrait introduction, project workflows and expandable details, responsive navigation, grouped skills, experience, all 14 existing certificates, contact form, and an AI assistant.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run build
npm run start
```

Deploy this project to the existing Vercel project. Retain its existing server-side environment variables: `GROQ_API_KEY`, `EMAIL_USER`, and `EMAIL_PASS`. Never add these values to source control. The layout and downloads work without these variables; AI responses and email delivery require them.

## Verification

- Production build and TypeScript checks passed.
- Homepage returned HTTP 200.
- All section links resolved to existing sections.
- All 16 linked local assets (résumé, certificates, and icon) returned HTTP 200.
- Chat API returned a handled JSON error when its API key was absent.
- Desktop/mobile browser verification could not be completed because the available browser environment failed to launch or could not access the local preview.
- Real AI responses and email delivery were not tested because local credentials were unavailable.

## Publishing status

Changes are prepared locally. GitHub push failed because authentication was unavailable; Vercel denied access to the existing project. Nothing has been deployed or changed on the live site.

The original API routes and package dependencies remain in place. The Groq client is now created inside the request handler after checking configuration, so builds do not require an AI API key. No fabricated project statistics or demo links were added.
