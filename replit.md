# Workspace

## Overview

pnpm workspace monorepo using TypeScript. The main product is **AT Digital Menu** — a React + Vite landing page for a QR-based digital menu platform for restaurants.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 20
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19 + Vite 7 + Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Wouter
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── at-digital-menu/    # Main frontend (React + Vite landing page) ← PRIMARY APP
│   ├── api-server/          # Express API server (backend)
│   └── mockup-sandbox/      # UI component preview server (dev tool)
├── lib/
│   ├── api-spec/            # OpenAPI spec + Orval codegen config
│   ├── api-client-react/    # Generated React Query hooks
│   ├── api-zod/             # Generated Zod schemas
│   └── db/                  # Drizzle ORM schema + DB connection
├── scripts/                 # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── tsconfig.json
```

## Running the Project

Two services need to run:

| Service | Command | Port |
|---|---|---|
| AT Digital Menu (frontend) | `PORT=3000 BASE_PATH=/ pnpm --filter @workspace/at-digital-menu run dev` | 3000 |
| API Server (backend) | `PORT=3001 pnpm --filter @workspace/api-server run dev` | 3001 |

The **"AT Digital Menu"** workflow (webview, port 3000) serves the main website.
The **"API Server"** workflow (console, port 3001) serves the backend.

## IMPORTANT — Fresh Import / New Replit Setup

When this project is imported into a new Replit account, the `at-digital-menu` frontend must be registered as an artifact so it is routed properly through Replit's proxy. To do this:

1. If the `artifacts/at-digital-menu` directory already exists, **temporarily rename it**:
   ```bash
   mv artifacts/at-digital-menu artifacts/at-digital-menu-bak
   ```
2. Call `createArtifact`:
   ```javascript
   await createArtifact({ artifactType: "react-vite", slug: "at-digital-menu", previewPath: "/", title: "AT Digital Menu" });
   ```
3. Restore the original files:
   ```bash
   rm -rf artifacts/at-digital-menu && mv artifacts/at-digital-menu-bak artifacts/at-digital-menu
   ```
4. Run `pnpm install` and restart the `artifacts/at-digital-menu: web` workflow.

Without this step, the root domain will return a 502 error.

## Packages

### `artifacts/at-digital-menu` (`@workspace/at-digital-menu`)

React + Vite landing page for AT Digital Menu. A single-page marketing website.

- Entry: `src/main.tsx`
- App: `src/App.tsx` — Wouter router, base path from `BASE_URL`
- Main page: `src/pages/home.tsx` — full landing page (navbar, hero, features, pricing, FAQ, contact)
- Components: `src/components/ui-elements.tsx` — custom Button, Input, Accordion, Reveal
- Styles: `src/index.css` — Tailwind v4 + Google Fonts (Inter + Outfit) + CSS variables
- Public assets: `public/images/` — all landing page images
- `vite.config.ts` reads `PORT` (default: 3000) and `BASE_PATH` (default: /) from env

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/`.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — CORS, JSON parsing, routes at `/api`
- `pnpm --filter @workspace/api-server run dev` — dev server

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL.

- `drizzle.config.ts` — requires `DATABASE_URL` (provided by Replit)
- Dev: `pnpm --filter @workspace/db run push`

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI 3.1 spec + Orval codegen. Run: `pnpm --filter @workspace/api-spec run codegen`

### `scripts` (`@workspace/scripts`)

Utility scripts. Run: `pnpm --filter @workspace/scripts run <script>`

## Root Scripts

- `pnpm run build` — typecheck + build all packages
- `pnpm run typecheck` — `tsc --build --emitDeclarationOnly`
- `pnpm install` — install all workspace dependencies
