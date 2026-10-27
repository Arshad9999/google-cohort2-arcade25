# Google Cloud Arcade 2025 — Cohort 2

A React and TypeScript community information site with a calculator route and browser-local profile storage for the 2025 Arcade cohort.

## Demo

[Open the deployed site](https://google-cohort2-arcade25-facilitator.vercel.app). The homepage returned HTTP 200 on 27 October 2026; this is a reachability check, not a complete feature test.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## Setup

Use Node.js 24 and npm (Node.js 22.13 or newer in the 22.x line is also supported).

```sh
git clone https://github.com/Arshad9999/google-cohort2-arcade25.git
cd google-cohort2-arcade25
npm ci
npm run dev
```

Open `http://localhost:8080`. The source currently requires no environment variables. Keep any future private credentials on a backend: values exposed through a client bundle are public.

## Checks

```sh
npm run build
npm run lint
npm test
```

`npm run preview` serves the production build locally. The `dist/` directory is the deployment output. A static host must serve `index.html` for client-side routes.

## Structure

- `src/pages/`: route-level pages.
- `src/components/`: application and shared UI components.
- `src/App.tsx`: providers and browser routes.
- `public/`: static files copied to the build.

```mermaid
flowchart LR
  Browser --> Router[React Router]
  Router --> Pages[Page components]
  Pages --> UI[Shared UI and static content]
```

## Limitations

This is a historical 2025 cohort site. Its countdown targets August 2025, and the home-page calculation action currently shows an under-development message. Profile URLs are currently saved in browser localStorage even when Remember Me is unchecked; review this behavior before collecting real user data. Program rules and FAQs require an owner review before reuse for a new cohort.

## Provenance

This repository was scaffolded with Lovable. Its history includes generated-code commits; repository ownership alone does not establish which parts were independently implemented.

## License

No repository-wide license was detected. No new license has been assigned; the owner must choose appropriate terms and verify rights to included material.
