# Zostel · VC Interface

A faithful React port of the **VC (Venue Captain) Interface** design — a gamified
mobile ops app for Zostel hostel venue captains. Built from `VC Interface.dc.html`
(Claude Design project) as an interactive front-end prototype with mock data,
locked to the Zostel default theme, rendered inside an iOS device frame.

## Stack

- React 18 + TypeScript + Vite
- No backend — all data is mock data (`src/vc/data.ts`)
- No CSS framework — the design's exact inline styles are preserved via a tiny
  `css()` string→style-object helper (`src/vc/css.ts`)

## Requirements

Node.js 18+ and npm. (This machine had no Node installed at build time.)

## Run

```bash
npm install
npm run dev      # local dev server (Vite)
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
```

Open the printed local URL; the app renders inside the iPhone frame.

## What's inside

**Screens** (`src/components/screens/`): Home / Workspace, Social, Leaderboard,
Profile. **Sheets** (`src/components/sheets/`): photo capture, tour picker,
redeem nights, NPS survey. **Overlays** (`src/components/overlays/`): XP
celebration, toast. Bottom nav (`BottomNav.tsx`) and the iOS frame
(`IOSDevice.tsx`).

**Logic** (`src/vc/`):

- `state.ts` — reducer + initial state (port of the design's `Component` class)
- `derive.ts` — `deriveVals()`, a near-verbatim port of the design's `renderVals()`
- `actions.ts` — dispatch-bound handlers
- `data.ts` / `helpers.ts` — mock data + pure helpers (weather, date, formatting)
- `helpers.ts` `THEME_VARS` — the locked Zostel theme CSS variables

## Behaviour notes

The demo is date-aware (the design's logic): **today** is fully interactive
(mark activity/intro/tours done → +XP + celebration), **past** days show as
completed, **future** days show as upcoming. Weather per day is deterministic.
Social posts/collab links, the leaderboard Overall/Monthly toggle, and the NPS
flow are all live.
