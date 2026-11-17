# MULTI-AI website (Free For Charity format)

Static Next.js + React + Tailwind CSS site, exported to plain HTML/CSS/JS for free GitHub Pages hosting.

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
```

## Deploy (GitHub Pages)
1. Push to a public repo's `main` branch.
2. Settings → Pages → Source: **GitHub Actions** (workflow in `.github/workflows/deploy.yml`).
3. Project page (`github.io/<repo>`): add a repository variable `NEXT_PUBLIC_BASE_PATH` = `/<repo>`.
   Custom domain (e.g. `virtudant.org`): leave it empty and add a `public/CNAME` file with the domain.

## Edit content
Links, nav, feature cards and figures live in `lib/site.ts`. `APP_URL` currently points at the GitHub repo; replace it with the store/release link.
