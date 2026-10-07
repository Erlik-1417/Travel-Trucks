# TravelGods — TravelTrucks

English-language desktop camper rental frontend built with Vite, React, Redux Toolkit, React Router, Axios and CSS Modules. Layout targets the supplied 1440 px Figma design.

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

Connect your repository to Vercel or Netlify. Build command: `npm run build`. Output directory: `dist`. Included deployment configuration supports SPA fallback routing.

This adapted copy has not yet been published. Add your actual GitHub and live deployment links after publishing and verify direct route reloads.

## Credits and license

Adapted from [neoversity-woolf/travel-trucks-app](https://github.com/neoversity-woolf/travel-trucks-app). Original author: yaroslav.kosytsia (2024). The original MIT license is preserved in `LICENSE`.

Local adaptations include backend filter corrections, validation, request race protection, loading/error handling, desktop layout and deployment routing.

Submission author: add your name before submission.
