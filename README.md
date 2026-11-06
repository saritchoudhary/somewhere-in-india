# Somewhere in India

A responsive React, Vite and Tailwind travel guide with a Node/Express streaming AI trip planner. The OpenAI key is only read by the server.

## Project structure

```text
.
├── data/
│   ├── india-districts.js     # District directory for all states and UTs
│   └── places.json           # Curated highlights plus official sitemap destinations
├── scripts/
│   ├── import-incredible-india.js # Refresh published Incredible India destination routes
│   └── import-wikimedia-images.js  # Find exact-name Commons photos and credits
├── server/
│   └── index.js              # Validated, rate-limited streaming chat API
├── src/
│   ├── components/
│   │   ├── Favorites.jsx
│   │   ├── Hero.jsx
│   │   ├── MyTrip.jsx
│   │   ├── Navbar.jsx
│   │   ├── PlaceCard.jsx
│   │   ├── PlaceDetailModal.jsx
│   │   ├── PlaceExplorer.jsx
│   │   ├── RegionDirectory.jsx
│   │   └── TripPlanner.jsx
│   ├── data/
│   │   └── regions.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

The catalog combines 324 curated highlights with the individual destination pages linked by the current Incredible India sitemap (2,463 routes across all 36 states and union territories at the time of the last refresh). This is broad coverage of that published directory, **not a guarantee of every real-world temple, attraction, restaurant, market or district in India**. New sitemap destinations link to their official pages; category labels are inferred from route names, and descriptions and visitor details are generic where they have not been independently verified. Photos are only shown when a matching place image is available; otherwise the site leaves the photo blank. Routes that name a locality rather than an administrative district are shown as listed localities so they remain searchable. Food entries do not represent every restaurant or business.

The three main browse sections are ordered as requested: **Tourist Places**, **Markets & Food**, then **Temples**.

## Editorial references and image credits

Destination names and heritage context are cross-checked against the [Ministry of Tourism's Incredible India portal](https://www.incredibleindia.gov.in/en), the [UNESCO World Heritage Centre's India listings](https://whc.unesco.org/en/statesparties/in/) and the [Archaeological Survey of India's official site](https://asi.nic.in/). These references are starting points, not sources for live prices, opening times or travel conditions; confirm those directly with the site or local tourism office. Regional food specialties are editorial highlights, not an exhaustive restaurant guide.

Destination photos can come from Incredible India destination pages or Wikimedia Commons. Incredible India images are used only with express permission and link back to the corresponding official page; Commons images retain their file-page and contributor/license attribution. Do not assign a generic image to a place. If no image matching the named destination is available, leave the photo blank. Latitude/longitude are left `null` where an exact location has not been verified; place map links use a name-based search instead of invented coordinates.

## Local setup

Requires Node.js 18.18 or newer.

1. Install dependencies:

   ```sh
   npm install
   ```

2. Copy `.env.example` to `.env`. Add your Groq API key to `GROQ_API_KEY` and, if needed, choose an available model with `GROQ_MODEL`. Keep `.env` private and out of version control. `PORT` can also be changed.
3. Start the Vite frontend and Express API:

   ```sh
   npm run dev
   ```

4. Open the Vite URL shown in the terminal (normally `http://localhost:5173`). The Vite development server proxies `/api` requests to the API on port 3001.
5. Create a production frontend build with `npm run build`.

Refresh the destination routes from the official sitemap with `npm run refresh-destinations`. This requires network access and replaces previously imported sitemap entries while preserving the curated records. Review the generated catalog before publishing; the script does not copy official page prose or fetch live hours, fees, coordinates, weather or availability.

After refreshing the destination list, run `npm run refresh-official-photos` to find place-specific images published on each Incredible India destination page. This takes time for the full catalog; use `npm run refresh-official-photos -- --limit=50` to check a small batch or `npm run refresh-official-photos -- --force --limit=50` to retry already checked pages. The importer saves progress as it runs and reuses an image for a curated record only when its place name and state exactly match an official destination. Use Incredible India images only when you have express permission to reuse them. Run `npm run refresh-photos` to look for matching Wikimedia Commons photos when official images are unavailable; `npm run refresh-photos -- --featured` checks the nine homepage picks first. Destinations without a matching photo intentionally remain blank instead of showing an unrelated image.

The explorer, collections, filters and trip list work without a Groq key; the AI planner returns a clear configuration message until the server has one.

## Adding a place

Add a record to the array in `data/places.json` with a unique `id` and the common fields `type`, `name`, `state`, `district`, `description`, `tags`, `bestTime`, `image`, `lat` and `lng`. Supported types are `temple`, `place` and `food`. For coordinates not yet confirmed, use `null` rather than guessing. The map action searches by place name.

Add section-specific details to make the detail view useful:

- Temples: `deity`, `history`, `timings`, `dressCode`, `nearestCity`, `airport`, `railway`.
- Tourist places: `entryFee`, `highlight`, `nearbyAttractions`.
- Food and markets: `venue`, `highlight`, `buy`.

Use a credited, place-specific Incredible India photo only with express permission, a Wikimedia Commons image URL with its file-page URL and contributor/license attribution, or a local image you have rights to use. Do not assign a generic image to a specific place. Place costs and opening hours can change; confirm them with official visitor information.

## Deployment

Deploy the frontend and API as separate services from this repository. Vercel serves the Vite frontend; the Express API is deployed separately because this project uses a long-lived streaming response.

### Frontend — Vercel

1. Push this repository to GitHub, then in Vercel choose **Add New → Project** and import the repository.
2. Use the repository root. Vercel should detect Vite; use `npm run build` as the build command and `dist` as the output directory.
3. Add `VITE_API_URL` as an environment variable pointing to the deployed Render API origin, with no trailing slash (for example, `https://somewhere-in-india-api.onrender.com`). The destination browser does not need this variable for its catalog and trip-list features, but the AI trip planner does.
4. Deploy. The included `vercel.json` sends client-side routes back to the app so refreshes and direct links work.
5. After the first deployment, copy the production site origin and set it as `CLIENT_ORIGIN` on Render. Redeploy the API and then redeploy Vercel if you changed `VITE_API_URL`.

### API — Render

1. In Render choose **New → Web Service** and connect the same GitHub repository. Use the repository root.
2. Set the start command to `npm start`. Render supplies `PORT`.
3. Set `GROQ_API_KEY` in Render's private environment settings and optionally set `GROQ_MODEL`. Never put the key in GitHub or in a `VITE_` variable.
4. Set `CLIENT_ORIGIN` to the exact deployed Vercel production origin (for example, `https://somewhere-in-india.vercel.app`). The API uses this origin for CORS.
5. After deploying, verify `https://<your-render-service>.onrender.com/api/health` returns `{"status":"ok"}`.

The Git ignore rules exclude `.env` files (except the safe `.env.example` template), dependencies, and build output. Do not commit credentials.

## Notes

- The AI endpoint validates message/history input, limits request rates, streams response text, and uses matching entries from the local place collection as context.
- The browser stores favourites, theme, language preference and the ordered trip list in local storage.
- The itinerary PDF action opens the browser print dialog; select “Save as PDF”.
- The district-name source attribution and license are documented in `data/india-districts.js`.
- The website is an inspiration and planning aid, not an authoritative source for live weather, access, prices or schedules.
