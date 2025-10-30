# 30DayMapChallenge - Day 26: Transport

Transport direction visualization with hex grids (Vue 3 + D3). Borrow/return directions are rendered as arrows at each cell centroid. Deployable to GitHub Pages.

## Demo & Repo

- Demo: `https://kevin7261.github.io/30DayMapChallenge-26_Transport/`
- Repo: `https://github.com/kevin7261/30DayMapChallenge-26_Transport`

## Features

- Hex grid visualization with per-cell borrow/return direction arrows
- Tunable arrow size, color, and offset; tooltips and responsive layout
- Correct base path for static hosting: `'/30DayMapChallenge-26_Transport/'`
- Data decoupled under `public/data/`

## Tech Stack

- Vue 3, Vue Router, Pinia
- D3.js (drawing, transforms, zoom)
- Bootstrap 5, Font Awesome

## Data

- Grid stats: `public/data/geojson/grid_with_weighted_angle_stats_500m.geojson`
- Boundary: `public/data/geojson/臺北市區界圖_20220915.geojson`

## Project Structure

```
src/
├─ tabs/
│  └─ MapTab.vue            # map + arrow rendering
├─ stores/
│  ├─ dataStore.js          # visualization flags/data
│  └─ defineStore.js        # settings
├─ router/
│  └─ index.js              # base: '/30DayMapChallenge-26_Transport/'
└─ main.js

public/
└─ data/
   └─ geojson/

vue.config.js               # publicPath: '/30DayMapChallenge-26_Transport/'
```

## Quick Start

Requirements: Node.js 16+, npm 7+

```bash
git clone https://github.com/kevin7261/30DayMapChallenge-26_Transport.git
cd 30DayMapChallenge-26_Transport/website/30DayMapChallenge-26_Transport
npm install
npm run serve
```

Dev URL: `http://localhost:8080/30DayMapChallenge-26_Transport/`

## Build & Deploy

```bash
npm run build     # outputs dist/
npm run deploy    # publish to GitHub Pages via gh-pages
```

Keep `publicPath` and router base aligned with the repo name.

## Scripts

```bash
npm run lint
npm run lint:fix
npm run prettier
npm run format
```

## License

MIT
