# 🌿 Plant catalog

A plant catalog app built with React 19, TypeScript, and Tailwind CSS v4. Browse plant categories, filter to see plants within a category, and add plants to a cart — all fetched live from a public plants API.

## Features

- **Category filtering** — click a category card to fetch and display only plants in that category; click again to close it
- **Add to cart** — toggle plants in/out of a cart, with a live count
- **Suspense-based data fetching** — uses React's `use()` hook with promises for categories and plants, no manual loading state
- **Dark minimalist UI** — custom Tailwind v4 theme with a moss-green accent palette

## Tech stack

- [React 19](https://react.dev/) with the `use()` hook and Suspense
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Programming Hero Plants API](https://openapi.programming-hero.com/api/plants) for data

## Getting started

npm install
npm run dev

The app runs at `http://localhost:5173` by default.

## Project structure

src/
├── api/
│   └── plants.ts          # API calls: getAllPlants, getCategories, getPlantByCategory, getPlantDetails
├── components/
│   ├── Categories/         # Category grid, fetches + lists categories
│   ├── Category/           # Single category card with select/deselect button
│   ├── Plants/              # Plant grid, holds cart state
│   └── Plant/                # Single plant card with add/remove-from-cart button
├── types.ts                # PlantType, CategoryType interfaces
├── App.tsx                 # Top-level layout, category/plant promise wiring
└── App.css                 # Tailwind import + theme tokens

## API endpoints used

| Purpose | Endpoint |
|---|---|
| All plants | `GET /api/plants` |
| All categories | `GET /api/categories` |
| Plants by category | `GET /api/category/:id` |
| Single plant | `GET /api/plants/:id` |

## Notes

- Categories are fetched once at module load; plants are re-fetched via `useMemo` whenever the selected category changes.
- The plants grid only renders once a category is selected — there's no "all plants" default view.
- Cart state lives in `Plants.tsx` and resets on remount (no persistence yet).

## Possible next steps

- Persist cart state (localStorage or context) so it survives category switches
- Add a cart summary/checkout view
- Add loading/error UI beyond the plain Suspense fallback text
- Add plant detail view using `getPlantDetails`

## License

Practice project — no license, for personal learning purposes.