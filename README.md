## TravelTrucks

Built with Vite, React, Redux Toolkit, React Router, Axios and CSS Modules.

## Project links

- Source code: [Erlik-1417/Travel-Trucks](https://github.com/Erlik-1417/Travel-Trucks).
- Live website: [TravelTrucks on Vercel](https://travel-trucks-delta-pink.vercel.app/).

## Features

- Home banner and catalog navigation.
- Server-side location, vehicle type and equipment filtering.
- Paginated cards, loading indicators, errors and retry.
- Favorites persisted across reloads with Redux Persist.
- Detail pages in a new tab with photos, features and five-star reviews.
- Validated booking form and success notification.
- Prices displayed with two decimal places.

Bookings are a local frontend demonstration saved in browser storage. The supplied API exposes camper reads and does not create real reservations.

## Setup

Use Node.js 20.19+ or a current supported LTS release.

```sh
npm ci
npm run dev
```

Open the address printed by Vite. The public MockAPI project ID defaults to the assignment endpoint. `.env.example` documents optional configuration.

```sh
npm run lint
npm run verify
npm run build
npm run preview
```

## Routes and API

| Route | Page |
| --- | --- |
| `/` | Home |
| `/catalog` | Camper catalog |
| `/catalog/:id` | Details and booking form |

API: `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`.
Filtering uses query parameters. A new search clears old results and resets pagination.

## Design and verification

The layout follows the supplied Campers Figma file: radio filters, compact catalog cards, illustrated empty results, thumbnail gallery, vehicle details and reviews next to the booking form. Home and empty-state assets were exported from that file.

API prices, ratings, reviews and photos remain live data. Camper photos use centered `object-fit: cover` to fill their containers without blank edges; some cropping is expected. Favorites and equipment filters remain available to meet the assignment requirements. Equipment options expand from the filter panel. The booking form follows Figma with required name and email fields.

`npm run verify` checks applied-filter pagination, outdated response protection, empty results versus missing details, booking validation and storage reducers. These checks do not replace visual browser checks or verification after deployment.

## Deployment

Import the GitHub repository into Vercel or Netlify with these project settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Project root | Repository root |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

The assignment API works without an environment variable. Set `VITE_API_KEY` only when using a different public MockAPI project ID.

Included `vercel.json` and `netlify.toml` support SPA fallback routing. After publishing, open `/catalog` and a valid `/catalog/:id` directly, then reload both pages to verify routing. Also check filtering, favorites after reload and booking form validation on the live website.

The Vercel deployment was checked on 8 October 2026: direct catalog/detail navigation and reload, loading more cards, location/transmission filters, empty results, clearing filters, favorites after reload, gallery selection and booking validation/success notification.

Adaptation and submission: **Kayra Doğru**.

- [GitHub](https://github.com/Erlik-1417)
- [LinkedIn](https://www.linkedin.com/in/kayra-dogru)
